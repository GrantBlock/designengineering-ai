/* @ds-bundle: {"format":4,"namespace":"DE","components":[{"name":"Icon"},{"name":"Button"},{"name":"IconButton"},{"name":"Tag"},{"name":"Avatar"},{"name":"Hero"},{"name":"Panel"},{"name":"SectionHeader"},{"name":"PromptCard"},{"name":"EmptyNote"},{"name":"Message"},{"name":"SearchField"},{"name":"Composer"},{"name":"MobileComposer"},{"name":"NavItem"},{"name":"Sidebar"},{"name":"TopBar"},{"name":"AppShell"},{"name":"MobileHeader"},{"name":"ActionCard"},{"name":"StageProgress"},{"name":"ProjectRow"},{"name":"TabBar"}]} */
(function () {
  var React = window.React, h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }

  /* Icon paths — 24-unit grid, 1.6 stroke, round caps/joins. Copied from the Design Engineering app. */
  var PATHS = {
    home: 'M3 11l9-7 9 7v9h-6v-6H9v6H3z',
    clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
    folder: 'M3 6h6l2 2h10v11H3z',
    menu: 'M4 7h16M4 12h16M4 17h16',
    'panel-left': 'M4 5h16v14H4zM9 5v14',
    'chevron-left': 'M15 6l-6 6 6 6',
    chat: 'M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-4 4v-4H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z',
    dashboard: 'M4 5h16v14H4zM4 10h16M10 10v9',
    briefcase: 'M3 8h18v12H3zM9 8V5h6v3M3 13h18',
    gear: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
    project: 'M3 7h6l2 2h10v10H3z',
    cube: 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5',
    bolt: 'M13 3L5 13h6l-1 8 8-10h-6z',
    chip: 'M7 7h10v10H7zM10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4',
    wave: 'M3 12h3l3-7 4 14 3-7h5',
    code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
    factory: 'M3 21h18M5 21V11l5 3V11l5 3V5h4v16',
    clipboard: 'M9 4h6v3H9zM6 6h12v15H6zM9 12h6M9 16h4',
    doc: 'M6 3h8l4 4v14H6zM14 3v4h4M9 13h6M9 17h6',
    tag: 'M3 12V4h8l10 10-8 8z',
    check: 'M4 12l5 5L20 6',
    book: 'M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11',
    sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',
    plus: 'M12 5v14M5 12h14',
    chart: 'M4 20h16M7 16v-5M12 16V5M17 16v-8',
    process: 'M4 5h6v5H4zM14 14h6v5h-6zM10 7.5h2a2 2 0 0 1 2 2V14',
    wrench: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-.6-.6-2.6z',
    send: 'M12 19V5M6 11l6-6 6 6',
    'arrow-up-right': 'M7 17L17 7M9 7h8v8',
    'chevron-right': 'M9 6l6 6-6 6',
    'chevron-down': 'M6 9l6 6 6-6',
    'chevron-updown': 'M8 9l4-4 4 4M8 15l4 4 4-4',
    account: 'M4 20h16M6 16V9M10 16V5M14 16v-6M18 16V7',
    star: 'M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z'
  };

  function Icon(p) {
    var name = p.name, size = p.size || 16, sw = p.strokeWidth || 1.6;
    var common = { width: size, height: size, viewBox: '0 0 24 24', className: cx('de-icon', p.className), style: p.style, 'aria-hidden': 'true' };
    if (name === 'search') return h('svg', Object.assign({ fill: 'none', stroke: 'currentColor', strokeWidth: sw }, common), h('circle', { cx: 11, cy: 11, r: 7 }), h('path', { d: 'M20 20l-3.5-3.5' }));
    if (name === 'help') return h('svg', Object.assign({ fill: 'none', stroke: 'currentColor', strokeWidth: sw }, common), h('circle', { cx: 12, cy: 12, r: 9 }), h('path', { d: 'M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5V14M12 17.5v.01' }));
    if (name === 'more') return h('svg', Object.assign({ fill: 'currentColor' }, common), h('circle', { cx: 5, cy: 12, r: 1.5 }), h('circle', { cx: 12, cy: 12, r: 1.5 }), h('circle', { cx: 19, cy: 12, r: 1.5 }));
    return h('svg', Object.assign({ fill: p.filled ? 'currentColor' : 'none', stroke: 'currentColor', strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' }, common), h('path', { d: PATHS[name] || '' }));
  }
  Icon.names = Object.keys(PATHS).concat(['search', 'help', 'more']);

  function Button(p) {
    var variant = p.variant || 'ghost';
    var rest = Object.assign({}, p); delete rest.variant; delete rest.icon; delete rest.tag; delete rest.trailing; delete rest.className; delete rest.children;
    var chev = p.trailing && h(Icon, { key: 'r', name: 'chevron-right', size: 12, strokeWidth: 2, style: { color: 'var(--bc-muted)', marginTop: variant === 'chip' ? -2 : 0 } });
    if (variant === 'row') {
      // full-width list button (sidebar footer): no base class
      return h('button', Object.assign({ type: 'button' }, rest, { className: cx('de-btn-row', p.className) }),
        p.icon && h(Icon, { name: p.icon, size: 16 }), h('span', null, p.children), chev);
    }
    return h('button', Object.assign({ type: 'button' }, rest, { className: cx('de-btn', variant !== 'ghost' && 'de-btn-' + variant, p.className) }),
      p.tag && h(Tag, { key: 't' }, p.tag),
      p.icon && h(Icon, { key: 'i', name: p.icon, size: 14, strokeWidth: p.icon === 'plus' ? 1.8 : 1.6 }),
      p.children, chev);
  }

  function IconButton(p) {
    var variant = p.variant || 'ghost', size = p.size || 'md';
    var rest = Object.assign({}, p); delete rest.variant; delete rest.icon; delete rest.size; delete rest.armed; delete rest.on; delete rest.className;
    var isz = p.icon === 'send' ? (size === 'lg' ? 20 : 16) : (size === 'md' ? 16 : 14);
    return h('button', Object.assign({ type: 'button' }, rest, {
      className: cx('de-iconbtn', size !== 'md' && size !== 'lg' && 'de-iconbtn-' + size, variant !== 'ghost' && 'de-iconbtn-' + variant, p.armed && 'is-armed', p.on && 'is-on', p.className)
    }), h(Icon, { name: p.icon, size: isz, filled: variant === 'star' && p.on, strokeWidth: p.icon === 'send' || p.icon === 'chevron-right' ? 2 : (p.icon === 'plus' ? 1.8 : 1.6) }));
  }

  function Tag(p) { return h('span', { className: cx('de-tag', p.plain && 'de-tag-plain', p.className) }, p.children); }

  function Avatar(p) { return h('div', { className: cx('de-avatar', p.size === 'lg' && 'de-avatar-lg'), 'aria-hidden': 'true' }, p.initial); }

  function Hero(p) {
    return h('div', { className: cx('de-hero', p.mobile && 'de-hero-mobile', p.className) },
      p.actions && h('div', { className: 'de-hero-actions' }, p.actions),
      p.eyebrow && h('div', { className: 'de-eyebrow' }, p.eyebrow),
      h('h1', null, p.title));
  }

  function Panel(p) { return h('div', { className: cx('de-panel', p.className), style: p.style }, p.children); }

  function SectionHeader(p) {
    var right = p.action ? h('a', { href: p.href || '#', onClick: p.onAction }, p.action)
      : p.count != null ? h('span', { className: 'de-tag de-tag-plain' }, p.count)
      : p.onMore ? h(IconButton, { icon: 'more', size: 'sm', 'aria-label': 'More options', onClick: p.onMore }) : null;
    return h('div', { className: cx('de-section-head', p.mobile && 'de-section-head-mobile') }, h('div', { className: 'de-label' }, p.title), right);
  }

  function PromptCard(p) {
    return h('div', { role: 'button', tabIndex: 0, className: 'de-prompt', onClick: p.onClick, onKeyDown: function (e) { if ((e.key === 'Enter' || e.key === ' ') && p.onClick) { e.preventDefault(); p.onClick(e); } } },
      h('div', { className: 'de-prompt-text' }, h('span', { className: 'de-prompt-cat' }, p.category), h('span', { className: 'de-prompt-label', title: p.label }, p.label)),
      h(IconButton, { variant: 'star', size: 'sm', icon: 'star', on: !!p.starred, 'aria-label': p.starred ? 'Remove from favorites' : 'Add to favorites', onClick: function (e) { e.stopPropagation(); p.onStar && p.onStar(e); } }));
  }

  function EmptyNote(p) { return h('div', { className: 'de-empty' }, p.children); }

  function Message(p) {
    var user = p.from === 'user';
    return h('div', { className: cx('de-msg', user && 'is-user') }, h('div', { className: 'de-label' }, p.author || (user ? 'You' : '[Assistant name]')), h('div', { className: 'de-msg-body' }, p.children));
  }

  function SearchField(p) {
    return h('label', { className: 'de-search' }, h(Icon, { name: 'search', size: 14, strokeWidth: 1.8 }),
      h('input', { placeholder: p.placeholder || 'Quick search', value: p.value, onChange: p.onChange, 'aria-label': p.placeholder || 'Quick search' }),
      p.shortcut !== false && h('span', { className: 'de-kbd' }, p.shortcut || 'CTRL K'));
  }

  function Composer(p) {
    var st = React.useState(p.defaultValue || ''), v = p.value != null ? p.value : st[0];
    function set(x) { if (p.value == null) st[1](x); p.onChange && p.onChange(x); }
    function send() { if (!v.trim()) return; p.onSend && p.onSend(v.trim()); set(''); }
    return h('div', { className: 'de-composer' },
      h('textarea', { rows: 2, value: v, placeholder: p.placeholder || 'Describe the problem, the part or the process', 'aria-label': 'Message',
        onChange: function (e) { set(e.target.value); }, onKeyDown: function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } } }),
      h('div', { className: 'de-composer-bar' },
        h(IconButton, { variant: 'outline', icon: 'plus', 'aria-label': 'Attach file', onClick: p.onAttach }),
        p.picker !== false && h('button', { type: 'button', className: 'de-btn' }, h(Icon, { name: 'project', size: 14 }), p.picker || 'Project', h(Icon, { name: 'chevron-down', size: 10, strokeWidth: 2 })),
        h('div', { className: 'de-spacer' }),
        p.meta && h('span', { className: 'de-composer-meta' }, p.meta),
        h(IconButton, { variant: 'send', icon: 'send', armed: !!v.trim(), disabled: !v.trim(), 'aria-label': 'Send', onClick: send })));
  }

  function MobileComposer(p) {
    var st = React.useState(p.defaultValue || ''), v = p.value != null ? p.value : st[0];
    function set(x) { if (p.value == null) st[1](x); p.onChange && p.onChange(x); }
    return h('div', { className: 'de-composer de-composer-mobile' },
      h('input', { value: v, placeholder: p.placeholder || 'Describe the problem', 'aria-label': 'Message', onChange: function (e) { set(e.target.value); } }),
      h(IconButton, { variant: 'send', size: 'lg', icon: 'send', armed: !!v.trim(), 'aria-label': 'Send', onClick: function () { if (v.trim()) { p.onSend && p.onSend(v.trim()); set(''); } } }));
  }

  function NavItem(p) {
    var has = p.children && p.children.length;
    var st = React.useState(!!p.defaultOpen), open = p.open != null ? p.open : st[0];
    return h('div', { className: 'de-nav-item' },
      h('button', { type: 'button', className: cx('de-nav-row', p.active && 'is-active', has && open && 'is-open'), 'aria-expanded': has ? open : undefined,
        onClick: function () { if (has) { st[1](!open); p.onToggle && p.onToggle(!open); } else p.onSelect && p.onSelect(); } },
        h(Icon, { name: p.icon, size: 16 }), h('span', null, p.label),
        p.tag && h(Tag, null, p.tag),
        has && h(Icon, { name: 'chevron-right', size: 12, strokeWidth: 2, className: 'de-nav-chev' })),
      has && open && h('div', { className: 'de-nav-children' }, p.children.map(function (c) {
        return h('button', { key: c, type: 'button', className: cx('de-nav-child', p.activeChild === c && 'is-active'), onClick: function () { p.onSelectChild && p.onSelectChild(c); } }, c);
      })));
  }

  var LOGO = '/_blob/aa03c16b0467287f65c46044ec7093cb';

  function NavGroup(p) {
    var st = React.useState(!!p.collapsed), closed = st[0];
    if (!p.label) return h('div', { className: 'de-nav-group' }, p.children);
    return h('div', { className: cx('de-nav-group', 'de-collapsible', closed && 'is-collapsed') },
      h('button', { type: 'button', className: 'de-group-head', 'aria-expanded': !closed, onClick: function () { st[1](!closed); } },
        h('span', { className: 'de-label' }, p.label), h(Icon, { name: 'chevron-right', size: 12, strokeWidth: 2, className: 'de-nav-chev' })),
      !closed && h('div', { className: 'de-group-body' }, p.children));
  }

  function Sidebar(p) {
    var ms = React.useState(p.defaultMode || 'chat'), mode = ms[0];
    var cs = React.useState({}), closed = cs[0];
    var projects = p.projects || [], chats = p.chats || [];
    function tbtn(icon, label, extra) { return h('button', { type: 'button', className: cx('sbicon', extra), 'aria-label': label }, h(Icon, { name: icon, size: 18 })); }
    function seg(m, icon, label) { return h('button', { type: 'button', role: 'tab', 'aria-label': label, className: cx('sbsegb', mode === m && 'is-on'), onClick: function () { ms[1](m); } }, h(Icon, { name: icon, size: 16 })); }
    function row(icon, label, cls, id) { return h('button', { type: 'button', className: cls || 'sbrow', onClick: function () { p.onNavigate && p.onNavigate(id); } }, h(Icon, { name: icon, size: 16 }), h('span', { className: 'sblab' }, label)); }
    function chat(c) { return h('button', { key: c, type: 'button', className: 'sbrec', title: c, onClick: function () { p.onNavigate && p.onNavigate('chat', c); } }, h('span', { className: 'sbfade' }, c)); }
    return h('aside', { className: 'de-sidebar sb' },
      h('div', { className: 'sbtool' }, tbtn('menu', 'Menu'), tbtn('panel-left', 'Collapse sidebar'), tbtn('chevron-left', 'Back'), tbtn('chevron-right', 'Forward', 'sbdim'),
        h('span', { style: { flex: 1 } }),
        h('div', { className: 'sbseg', role: 'tablist', 'aria-label': 'Sidebar mode' }, seg('chat', 'chat', 'Chat'), seg('projects', 'folder', 'Projects'))),
      h('nav', { className: 'sbnav', 'aria-label': 'Main' }, row('plus', 'New', 'sbnew', 'new'), row('search', 'Search', 0, 'search'), row('dashboard', 'Dashboard', 0, 'dashboard'), row('cube', 'Design', 0, 'design'), row('briefcase', 'Customize', 0, 'customize'), row('more', 'More', 0, 'more')),
      mode === 'chat'
        ? h('div', { className: 'sbpane' }, h('div', { className: 'sbhead' }, 'Recents'), h('div', { className: 'sbrecs de-scroll' }, chats.map(chat)))
        : h('div', { className: 'sbpane' }, h('div', { className: 'sbhead' }, 'Projects'), h('div', { className: 'sbrecs de-scroll' }, projects.map(function (g) {
            var shut = !!closed[g.name];
            return h('div', { key: g.name, className: cx('sbgroup', shut && 'is-closed') },
              h('button', { type: 'button', className: 'sbgrp', 'aria-expanded': !shut, onClick: function () { var n = Object.assign({}, closed); n[g.name] = !shut; cs[1](n); } },
                h(Icon, { name: 'chevron-right', size: 12, strokeWidth: 2 }), h('span', { className: 'sblab' }, g.name), h('span', { className: 'sbcount' }, g.chats.length)),
              !shut && h('div', { className: 'sbkids' }, g.chats.map(chat)));
          }))),
      h('div', { className: 'sbfoot' },
        h('button', { type: 'button', className: 'sbacct', 'aria-label': 'Account switcher' }, h('span', { className: 'sbavatar' }, p.initial || 'G'), h('span', { className: 'sblab' }, p.account || 'Grant \u00b7 Pro'), h(Icon, { name: 'chevron-right', size: 12, strokeWidth: 2, style: { transform: 'rotate(90deg)' } })),
        tbtn('gear', 'Settings')));
  }

  function TopBar(p) {
    return h('header', { className: 'de-topbar' }, h('div', { className: 'de-label' }, p.crumb),
      h('div', { className: 'de-topbar-actions' }, p.actions || [
        h(Button, { key: 'n', icon: 'plus', onClick: p.onNew }, 'New session'),
        h(Button, { key: 'a', icon: 'sparkle' }, 'Ask AI'),
        h(Button, { key: 's', icon: 'help' }, 'Support')
      ], h('button', { type: 'button', className: 'de-iconbtn', 'aria-label': 'Account' }, h(Avatar, { initial: p.initial || 'G' }))));
  }

  function AppShell(p) {
    return h('div', { className: 'de-shell', style: p.style }, p.sidebar,
      h('main', { className: 'de-shell-main' }, p.topbar,
        h('div', { className: 'de-shell-scroll' }, h('div', { className: 'de-shell-column' }, p.children))));
  }

  function MobileHeader(p) {
    return h('header', { className: 'de-mheader' }, h('img', { src: p.logoSrc || LOGO, alt: '' }), h('div', { className: 'de-brand' }, p.title || 'Design Engineering'),
      h('button', { type: 'button', 'aria-label': 'Account', style: { border: 'none', background: 'none', padding: 0, cursor: 'pointer' } }, h(Avatar, { size: 'lg', initial: p.initial || 'G' })));
  }

  function ActionCard(p) {
    var tone = p.tone || 'starter';
    var go = h('div', { className: 'de-acard-go' }, h(Icon, { name: 'arrow-up-right', size: 18, strokeWidth: 2 }));
    var top = tone === 'starter'
      ? h('div', { className: 'de-acard-top' }, h('span', { className: 'de-acard-cat' }, p.category), go)
      : h('div', { className: 'de-acard-top' }, h('div', { className: 'de-acard-tile' }, h(Icon, { name: p.icon || 'sparkle', size: 22 })), go);
    var foot = tone === 'starter' ? h('div', { className: 'de-acard-text' }, p.title)
      : h('div', { className: 'de-acard-foot' }, p.category && h('div', { className: 'de-acard-cat' }, p.category), h('div', { className: 'de-acard-title' }, p.title));
    return h('div', { role: 'button', tabIndex: 0, onClick: p.onClick, className: cx('de-acard', tone !== 'starter' && 'de-acard-' + tone) }, top, foot);
  }

  function StageProgress(p) {
    var n = p.total || 5, out = [];
    for (var i = 1; i <= n; i++) out.push(h('i', { key: i, className: i <= p.step ? 'is-done' : '' }));
    return h('div', { className: 'de-stages', role: 'img', 'aria-label': 'Stage ' + p.step + ' of ' + n, style: n !== 5 ? { gridTemplateColumns: 'repeat(' + n + ',minmax(0,1fr))' } : null }, out);
  }

  function ProjectRow(p) {
    return h('div', { role: 'button', tabIndex: 0, className: 'de-prow', onClick: p.onClick },
      h('div', { className: 'de-prow-meta' }, h('span', { className: 'de-prow-no' }, p.number), h('span', { className: 'de-prow-stage' }, 'Stage ' + p.step + ' — ' + p.stage)),
      h('div', { className: 'de-prow-name' }, p.name), h(StageProgress, { step: p.step }));
  }

  function TabBar(p) {
    var st = React.useState(p.defaultTab || (p.tabs && p.tabs[0] && p.tabs[0].id)), cur = p.value != null ? p.value : st[0];
    return h('nav', { className: 'de-tabbar' }, (p.tabs || []).map(function (t) {
      return h('button', { key: t.id, type: 'button', 'aria-label': t.label, 'aria-current': cur === t.id ? 'page' : undefined, className: cx('de-tab', cur === t.id && 'is-active'),
        onClick: function () { st[1](t.id); p.onChange && p.onChange(t.id); } }, h(Icon, { name: t.icon, size: 22, strokeWidth: 1.7 }), h('span', null, t.label));
    }));
  }

  window.DE = Object.assign(window.DE || {}, {
    Icon: Icon, Button: Button, IconButton: IconButton, Tag: Tag, Avatar: Avatar, Hero: Hero, Panel: Panel, SectionHeader: SectionHeader,
    PromptCard: PromptCard, EmptyNote: EmptyNote, Message: Message, SearchField: SearchField, Composer: Composer, MobileComposer: MobileComposer,
    NavItem: NavItem, Sidebar: Sidebar, TopBar: TopBar, AppShell: AppShell, MobileHeader: MobileHeader, ActionCard: ActionCard,
    StageProgress: StageProgress, ProjectRow: ProjectRow, TabBar: TabBar, ICON_PATHS: PATHS
  });
})();
