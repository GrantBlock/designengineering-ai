// Block Concepts 3D render environment (see uploads/3D Render Environment.md)
export async function createEnv(stage, opts = {}) {
  const { THREE } = await stage.ready;
  const scene = stage._scene, renderer = stage._renderer, camera = stage._camera;
  const BG = 0x0b0c0e, BLUE = 0x4682b4, LINE = 0x7faad0, DIMC = 0xb7c2cd;
  const V = (x, y, z) => new THREE.Vector3(x, y, z);

  renderer.localClippingEnabled = true;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.45;
  renderer.setClearColor(BG, 1);

  scene.traverse(o => {
    if (o.isHemisphereLight) { o.intensity = 0.55; o.groundColor.set(0x16191d); }
    if (o.isDirectionalLight && o !== stage._key) o.intensity = 0.7;
  });
  stage._key.intensity = 3.6; stage._key.position.set(5, 9, 6); stage._key.shadow.radius = 6;
  const rim = new THREE.DirectionalLight(BLUE, 6.5); rim.position.set(-7, 5, -8); scene.add(rim);
  const rim2 = new THREE.DirectionalLight(BLUE, 3.5); rim2.position.set(8, 3, -6); scene.add(rim2);

  const pm = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.add(new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshBasicMaterial({ color: BG, side: THREE.BackSide })));
  const panel = (w, h, color, k, pos) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }));
    m.material.color.multiplyScalar(k); m.position.set(...pos); m.lookAt(0, 0, 0); envScene.add(m);
  };
  panel(8, 4, 0xffffff, 3.5, [0, 9, 2]);
  panel(3, 8, 0xffffff, 1.2, [9, 3, 5]);
  panel(2, 10, BLUE, 5, [-8, 3, -6]);
  panel(12, 1.2, BLUE, 3, [0, 2, -9.5]);
  scene.environment = pm.fromScene(envScene, 0.04).texture;
  scene.environmentIntensity = 1.2;

  scene.fog = new THREE.Fog(BG, 16, 30);
  stage._ground.visible = false;
  const floor = new THREE.Mesh(new THREE.CircleGeometry(40, 64), new THREE.MeshStandardMaterial({ color: 0x16191d, roughness: 0.95, metalness: 0 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -0.001; floor.receiveShadow = true; scene.add(floor);

  // Split: wire side is +n, solid side is -n
  const n = V(...(opts.splitNormal || [1, 0, 0])).normalize();
  const sc = opts.splitAt ?? 0;
  const wireP = new THREE.Plane(n.clone(), -sc);
  const solidP = new THREE.Plane(n.clone().negate(), sc);
  const t = V(-n.z, 0, n.x);

  const mat = (name, color, metalness, roughness, extra = {}) =>
    Object.assign(new THREE.MeshStandardMaterial({ name, color, metalness, roughness, clippingPlanes: [solidP], clipShadows: true }), extra);
  const M = {
    alu: mat('brushed_aluminum', 0xb2b7bd, 0.85, 0.32),
    robot: mat('robot_gray', 0x8d9197, 0.25, 0.5),
    gray: mat('matte_gray', 0x5f6369, 0.15, 0.72),
    dark: mat('charcoal', 0x2a2d32, 0.2, 0.8),
    rubber: mat('rubber', 0x141518, 0.0, 0.9),
  };
  M.poly = mat('polycarbonate', 0x7d93a6, 0.1, 0.15, { transparent: true, opacity: 0.16, depthWrite: false });

  const root = new THREE.Group(); root.name = opts.name || 'model';
  const place = (o, name, x, y, z, p) => { o.name = name; o.position.set(x, y, z); (p || root).add(o); return o; };
  const orient = (g, axis) => { if (axis === 'x') g.rotateZ(Math.PI / 2); if (axis === 'z') g.rotateX(Math.PI / 2); return g; };
  const box = (name, w, h, d, m, x, y, z, p) => place(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m), name, x, y, z, p);
  const cyl = (name, r, h, m, x, y, z, axis = 'y', p, seg = 48) =>
    place(new THREE.Mesh(orient(new THREE.CylinderGeometry(r, r, h, seg), axis), m), name, x, y, z, p);
  const frustum = (name, rt, rb, h, m, x, y, z, axis = 'y', p, seg = 48) =>
    place(new THREE.Mesh(orient(new THREE.CylinderGeometry(rt, rb, h, seg), axis), m), name, x, y, z, p);
  const lathe = (name, prof, m, x, y, z, p, seg = 48) =>
    place(new THREE.Mesh(new THREE.LatheGeometry(prof.map(([r, yy]) => new THREE.Vector2(r, yy)), seg), m), name, x, y, z, p);
  const tube = (name, pts, r, m, p) => {
    const curve = new THREE.CatmullRomCurve3(pts.map(a => V(...a)), false, 'catmullrom', 0.15);
    return place(new THREE.Mesh(new THREE.TubeGeometry(curve, 120, r, 16, false), m), name, 0, 0, 0, p);
  };
  const group = (name, x = 0, y = 0, z = 0, rotY = 0, p) => { const g = new THREE.Group(); g.rotation.y = rotY; return place(g, name, x, y, z, p); };

  // 6-axis robot from Automation Cell
  const robot = (name, x, y, z, o = {}) => {
    const r = group(name, x, y, z, o.rot ?? 0.5, o.parent); r.scale.setScalar(o.scale ?? 1.3);
    cyl(name + '_j1_base', 0.27, 0.16, M.robot, 0, 0.08, 0, 'y', r, 64);
    cyl(name + '_j1_ring', 0.24, 0.04, M.alu, 0, 0.18, 0, 'y', r, 64);
    cyl(name + '_j1_turret', 0.21, 0.26, M.robot, 0, 0.33, 0, 'y', r, 64);
    box(name + '_shoulder', 0.32, 0.26, 0.36, M.robot, 0.05, 0.42, 0, r);
    const sp = group(name + '_upper', 0.08, 0.44, 0, 0, r); sp.rotation.z = o.a2 ?? -0.4;
    cyl(name + '_j2_motor', 0.17, 0.46, M.robot, 0, 0, 0, 'z', sp, 64);
    cyl(name + '_j2_cap', 0.12, 0.5, M.alu, 0, 0, 0, 'z', sp, 64);
    box(name + '_upper_arm', 0.2, 0.86, 0.18, M.robot, 0, 0.45, 0, sp);
    const ep = group(name + '_fore', 0, 0.9, 0, 0, sp); ep.rotation.z = o.a3 ?? -1.95;
    cyl(name + '_j3_elbow', 0.14, 0.36, M.robot, 0, 0, 0, 'z', ep, 64);
    cyl(name + '_j3_cap', 0.09, 0.4, M.alu, 0, 0, 0, 'z', ep);
    box(name + '_forearm_housing', 0.22, 0.24, 0.24, M.robot, 0, -0.14, 0, ep);
    cyl(name + '_j3_motor', 0.08, 0.16, M.gray, 0, -0.3, 0, 'y', ep);
    cyl(name + '_forearm', 0.085, 0.66, M.robot, 0, 0.42, 0, 'y', ep);
    cyl(name + '_j4_ring', 0.095, 0.035, M.alu, 0, 0.12, 0, 'y', ep);
    const wp = group(name + '_wrist', 0, 0.8, 0, 0, ep); wp.rotation.z = o.a5 ?? -0.75;
    cyl(name + '_j5', 0.075, 0.17, M.robot, 0, 0, 0, 'z', wp);
    cyl(name + '_j6_flange', 0.055, 0.06, M.alu, 0, 0.1, 0, 'y', wp);
    return { r, sp, ep, wp };
  };

  // Belt or roller conveyor along local x; top = belt surface height
  const conveyor = (name, o) => {
    const { len, width, top } = o;
    const g = group(name, o.x || 0, 0, o.z || 0, o.rotY || 0, o.parent);
    const hw = width / 2;
    if (o.rollers) {
      const k = Math.floor((len - 0.1) / 0.11);
      for (let i = 0; i <= k; i++) cyl(`${name}_roller_${i}`, 0.028, width, M.alu, -len / 2 + 0.05 + i * ((len - 0.1) / k), top - 0.028, 0, 'z', g, 24);
      box(name + '_frame_f', len, 0.12, 0.04, M.gray, 0, top - 0.04, hw + 0.03, g);
      box(name + '_frame_b', len, 0.12, 0.04, M.gray, 0, top - 0.04, -hw - 0.03, g);
    } else {
      box(name + '_belt', len, 0.03, width, M.rubber, 0, top - 0.015, 0, g);
      box(name + '_rail_f', len + 0.12, 0.12, 0.04, M.alu, 0, top - 0.02, hw + 0.04, g);
      box(name + '_rail_b', len + 0.12, 0.12, 0.04, M.alu, 0, top - 0.02, -hw - 0.04, g);
      cyl(name + '_end_l', 0.05, width + 0.04, M.alu, -len / 2, top - 0.05, 0, 'z', g);
      cyl(name + '_end_r', 0.05, width + 0.04, M.alu, len / 2, top - 0.05, 0, 'z', g);
    }
    const lh = top - 0.1, cnt = Math.max(2, Math.ceil(len / (o.legEvery || 1.1)) + 1);
    for (let i = 0; i < cnt; i++) {
      const x = -len / 2 + 0.15 + i * ((len - 0.3) / (cnt - 1));
      box(`${name}_leg_${i}_f`, 0.05, lh, 0.05, M.gray, x, lh / 2, hw - 0.03, g);
      box(`${name}_leg_${i}_b`, 0.05, lh, 0.05, M.gray, x, lh / 2, -hw + 0.03, g);
      box(`${name}_brace_${i}`, 0.04, 0.04, width - 0.1, M.gray, x, lh * 0.35, 0, g);
    }
    return g;
  };

  const fence = (name, pts, H = 1.9) => {
    pts.forEach(([x, z], i) => box(`${name}_post_${i}`, 0.06, H, 0.06, M.gray, x, H / 2, z));
    for (let i = 0; i < pts.length - 1; i++) {
      const [x0, z0] = pts[i], [x1, z1] = pts[i + 1];
      const L = Math.hypot(x1 - x0, z1 - z0), k = Math.max(1, Math.ceil(L / 1.2));
      for (let j = 0; j < k; j++) {
        const a = j / k, b = (j + 1) / k;
        const ax = x0 + (x1 - x0) * a, az = z0 + (z1 - z0) * a, bx = x0 + (x1 - x0) * b, bz = z0 + (z1 - z0) * b;
        if (j > 0) box(`${name}_post_${i}_${j}`, 0.06, H, 0.06, M.gray, ax, H / 2, az);
        const len = L / k - 0.07;
        const g = group(`${name}_panel_${i}_${j}`, (ax + bx) / 2, 0, (az + bz) / 2, Math.atan2(-(z1 - z0), x1 - x0));
        box(g.name + '_top', len, 0.03, 0.03, M.gray, 0, H - 0.05, 0, g);
        box(g.name + '_bot', len, 0.03, 0.03, M.gray, 0, 0.17, 0, g);
        box(g.name + '_infill', len, H - 0.33, 0.01, M.poly, 0, H / 2 + 0.06, 0, g);
      }
    }
  };

  const ann = new THREE.Group(); ann.name = 'annotations';

  const finish = (o = {}) => {
    const ghostMat = new THREE.MeshBasicMaterial({ name: 'wire_ghost', color: BLUE, transparent: true, opacity: 0.05, depthWrite: false, side: THREE.DoubleSide, clippingPlanes: [wireP] });
    const wireMat = new THREE.LineBasicMaterial({ name: 'wire_edge', color: LINE, transparent: true, opacity: 1, clippingPlanes: [wireP] });
    const edgeMat = new THREE.LineBasicMaterial({ name: 'solid_edge', color: 0x07080a, transparent: true, opacity: 0.35, clippingPlanes: [solidP] });
    const capMat = new THREE.MeshBasicMaterial({ name: 'section_cap', color: 0x2b5379, side: THREE.BackSide, clippingPlanes: [solidP] });
    const meshes = []; root.traverse(m => m.isMesh && meshes.push(m));
    for (const m of meshes) {
      const eg = new THREE.EdgesGeometry(m.geometry, 25);
      const wl = new THREE.LineSegments(eg, wireMat); wl.name = m.name + '_wire'; m.add(wl);
      const se = new THREE.LineSegments(eg, edgeMat); se.name = m.name + '_edge'; m.add(se);
      const gh = new THREE.Mesh(m.geometry, ghostMat); gh.name = m.name + '_ghost'; gh.userData.fx = true; m.add(gh);
      if (!m.material.transparent) { const cap = new THREE.Mesh(m.geometry, capMat); cap.name = m.name + '_cap'; cap.userData.fx = true; m.add(cap); }
    }
    camera.fov = 19; camera.updateProjectionMatrix();
    stage.setObject(root);
    root.traverse(m => {
      if (m.userData.fx) { m.castShadow = false; m.receiveShadow = false; }
      if (m.isMesh && m.material === M.poly) m.castShadow = false;
    });
    scene.add(ann);

    const bb = new THREE.Box3().setFromObject(root), ctr = bb.getCenter(V(0, 0, 0));
    const lineMat = (color, opacity) => new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    const dimLine = lineMat(DIMC, 0.8), secLine = lineMat(LINE, 0.9);
    const arrowMat = new THREE.MeshBasicMaterial({ color: DIMC, transparent: true, opacity: 0.85 });
    const arrowGeo = new THREE.ConeGeometry(0.022, 0.09, 16);
    const seg = (pts, m) => { const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), m); ann.add(l); return l; };
    const arrow = (at, dir, m = arrowMat) => {
      const a = new THREE.Mesh(arrowGeo, m); a.position.copy(at).addScaledVector(dir, -0.045);
      a.quaternion.setFromUnitVectors(V(0, 1, 0), dir); ann.add(a);
    };
    const dim = (a, b, off) => {
      const a2 = a.clone().add(off), b2 = b.clone().add(off), nn = off.clone().normalize();
      seg([a.clone().addScaledVector(nn, 0.06), a2.clone().addScaledVector(nn, 0.08)], dimLine);
      seg([b.clone().addScaledVector(nn, 0.06), b2.clone().addScaledVector(nn, 0.08)], dimLine);
      seg([a2, b2], dimLine);
      const d = b2.clone().sub(a2).normalize();
      arrow(a2, d.clone().negate()); arrow(b2, d);
    };
    (o.dims || []).forEach(([a, b, off]) => dim(V(...a), V(...b), V(...off)));

    // Section plane at the split
    const secFill = new THREE.MeshBasicMaterial({ color: BLUE, transparent: true, opacity: 0.07, side: THREE.DoubleSide, depthWrite: false });
    const tc = ctr.dot(t);
    const sw = o.sectionW ?? ((Math.abs(t.x) > 0.5 ? bb.max.x - bb.min.x : bb.max.z - bb.min.z) + 0.3);
    const sh = o.sectionH ?? (bb.max.y + 0.35);
    const base = n.clone().multiplyScalar(sc).addScaledVector(t, tc);
    const sp1 = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), secFill); sp1.userData.plane = true;
    sp1.rotation.y = Math.atan2(n.x, n.z); sp1.position.copy(base).add(V(0, sh / 2, 0)); ann.add(sp1);
    const sp1e = new THREE.LineSegments(new THREE.EdgesGeometry(sp1.geometry), secLine); sp1e.userData.plane = true; sp1.add(sp1e);
    const top = base.clone().add(V(0, sh, 0));
    const secArrowMat = new THREE.MeshBasicMaterial({ color: LINE });
    seg([top, top.clone().addScaledVector(n, 0.35)], secLine); arrow(top.clone().addScaledVector(n, 0.35), n, secArrowMat);
    [-1, 1].forEach(s => { const p = base.clone().addScaledVector(t, s * sw / 2); seg([p, p.clone().addScaledVector(n, 0.3)], secLine); });

    // Secondary horizontal plane over the wire side
    if (o.secondary) {
      const { y, w, d } = o.secondary;
      const c0 = base.clone().setY(y), P = (a, b) => c0.clone().addScaledVector(n, a).addScaledVector(t, b);
      const q = [P(0, -d / 2), P(w, -d / 2), P(w, d / 2), P(0, d / 2)];
      const fg = new THREE.BufferGeometry().setFromPoints([q[0], q[1], q[2], q[0], q[2], q[3]]);
      const f2 = secFill.clone(); f2.opacity = 0.035;
      const fm = new THREE.Mesh(fg, f2); fm.userData.plane = true; ann.add(fm);
      const dash = new THREE.LineDashedMaterial({ color: LINE, dashSize: 0.08, gapSize: 0.05, transparent: true, opacity: 0.5 });
      const l = seg([...q, q[0]], dash); l.computeLineDistances(); l.userData.plane = true;
    }

    // Work envelope on the floor (wire side)
    if (o.envelope) {
      const { x, z, r, y = 0.01, angle = 0.55 } = o.envelope;
      const envDash = new THREE.LineDashedMaterial({ color: LINE, dashSize: 0.07, gapSize: 0.05, transparent: true, opacity: 0.75, clippingPlanes: [wireP] });
      const pts = []; for (let i = 0; i <= 128; i++) { const a = i / 128 * Math.PI * 2; pts.push(V(x + Math.cos(a) * r, y, z + Math.sin(a) * r)); }
      seg(pts, envDash).computeLineDistances();
      const end = V(x + Math.cos(angle) * r, y, z + Math.sin(angle) * r);
      const rl = lineMat(LINE, 0.8); rl.clippingPlanes = [wireP];
      seg([V(x, y, z), end], rl);
      arrow(end, end.clone().sub(V(x, y, z)).normalize(), secArrowMat);
    }

    // Auto-frame into 2:3 portrait
    const pts = [];
    [root, ann].forEach(rt => rt.traverse(m => {
      if (!(m.isMesh || m.isLine) || m.userData.fx || m.userData.plane || /_wire$|_edge$/.test(m.name)) return;
      const b = new THREE.Box3().setFromObject(m, true);
      for (const x of [b.min.x, b.max.x]) for (const y of [b.min.y, b.max.y]) for (const z of [b.min.z, b.max.z]) pts.push(V(x, y, z));
    }));
    const dir = V(...(o.dir || [1, 1.25, 1.12])).normalize();
    const cam = camera.clone(); cam.aspect = 2 / 3; cam.updateProjectionMatrix();
    const tgt = new THREE.Box3().setFromPoints(pts).getCenter(V(0, 0, 0));
    let d = 12;
    for (let i = 0; i < 40; i++) {
      cam.position.copy(tgt).addScaledVector(dir, d); cam.lookAt(tgt); cam.updateMatrixWorld();
      let mnx = 1e9, mxx = -1e9, mny = 1e9, mxy = -1e9;
      for (const p of pts) { const q = p.clone().project(cam); mnx = Math.min(mnx, q.x); mxx = Math.max(mxx, q.x); mny = Math.min(mny, q.y); mxy = Math.max(mxy, q.y); }
      const right = V(0, 0, 0).setFromMatrixColumn(cam.matrixWorld, 0), up = V(0, 0, 0).setFromMatrixColumn(cam.matrixWorld, 1);
      const halfH = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * d, halfW = halfH * cam.aspect;
      tgt.addScaledVector(right, (mnx + mxx) / 2 * halfW).addScaledVector(up, (mny + mxy) / 2 * halfH);
      const ext = Math.max((mxx - mnx) / 2 / 0.9, (mxy - mny) / 2 / 0.9);
      d *= 1 + (ext - 1) * 0.6;
    }
    camera.position.copy(tgt).addScaledVector(dir, d);
    stage._controls.target.copy(tgt); stage._controls.update();
    scene.fog.near = d + 3; scene.fog.far = d + 16;
  };

  return { THREE, scene, M, root, V, box, cyl, frustum, lathe, tube, group, robot, conveyor, fence, finish };
}
