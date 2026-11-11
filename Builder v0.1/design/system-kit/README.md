Design Engineering is Block Concepts' workspace for automation design: mechanical, electrical, controls and simulation work, through to quotes, documentation and testing. It is a dark, graphite tool with one light island, the place where you type, and a single brand colour, Steel Blue (`bc-steel-blue`, #4682B4). Every new page starts from `AppShell` on desktop or the mobile home's header, dock and tab bar on phones.

## Content fundamentals

- **Voice.** Plain, technical, written for a named assistant whose name is still undecided (placeholder "[Assistant name]", current thinking "Lev"); the assistant speaks in first person singular ("I will start by establishing what problem the system is addressing."). Address the person as "you". No exclamation marks, no emoji, no hype.
- **Headlines** are short questions or statements, uppercase in Overpass ExtraBold: "What are we building today?", "Active projects", "Ask the engineering assistant".
- **Tasks** are imperative and specific: verb, object, condition. "Size a VFD and motor for a conveyor drive". "Run a tolerance stack-up on a bracket assembly". "Score a project on the RAD Index 1 to 5".
- **Labels and metadata** are mono and uppercase: section labels (FAVORITES, MODELS), categories (MECHANICAL, ELECTRICAL, CONTROLS, SIMULATION, LIBRARY), counts ("3 saved", "3 open") and stage ("Stage 2 — Design").
- **Sentence case** for nav items, card text, chips and placeholders: "Configure supplier preferences", "Describe the problem, the part or the process".
- **Project references** always use the BC-Q-YYNNN number first, in mono: "BC-Q-26041 Palletizer retrofit".
- **Empty states** give one instruction: "Star a model below to keep it here."

## Visual foundations

### Colour

- **Layers.** `bc-canvas` (#1e1e20) is the window. `bc-surface` (#29292c) is a panel on it: sidebar, content panels, tab bar. `bc-surface-raised` (#353538) is a card on a panel, plus hover and active states. Panels take a `bc-edge` border, cards on panels `bc-edge-soft`, and dividers inside them `bc-hairline`.
- **Text.** Use `bc-ink` for content and `bc-muted` for everything secondary. Keep `bc-placeholder-text` to placeholders: it is 3.5:1 on `bc-surface`, as the source ships it.
- **Steel Blue is scarce.** As a fill (`bc-steel-blue`) it appears only on the armed send button, the primary mobile action card and stage-progress bars. As text (`bc-steel-blue-text`) it marks eyebrows, categories, tags, the active nav child, the assistant's name and links. Tint grounds (`bc-steel-blue-tint`) sit behind steel text only. Never set `bc-steel-blue` itself as text on graphite (3.5:1).
- **On a steel fill** use `bc-on-steel-blue` (white). It reaches 4.1:1, which is enough for icons and the 28px card title but not for small body text.
- **The field island.** Every place you type (the composer, the mobile composer and quick search) uses `bc-field` (#f1f1ef) with its own `bc-field-*` ink, muted, placeholder, hairline and edge tokens. Don't put dark-surface tokens inside it, and don't use `bc-field` for anything you don't type into.
- **One theme.** The app is Graphite only. A light theme has not been designed yet. Don't invert these tokens to make one.

### Type

- **Overpass** (variable 300–800) for everything you read; **Overpass Mono** (400–500) for labels, codes and metadata. Both ship as files in `fonts/`. Reference them as `--font-sans` and `--font-mono`.
- Overpass sits high in its box, so labels inside controls take `padding-top: 2px` (3px at 17–18px) to centre optically. Keep this when you build new controls.
- Use `display` / `display-mobile` for the one headline per page, `card-title` for mobile action cards, `body` for conversation, `nav` and `small` for chrome, and `eyebrow`, `label`, `meta` and `tag` (mono, tracked 0.1–0.12em) for every uppercase label. Don't set sentences in mono.

### Space, size and layout

- **Spacing** steps are `bc-space-1` through `bc-space-16` (4–64px). The shell has its own values: `bc-shell-gap` 10px around and between panels, `bc-gutter-mobile` 20px, and `bc-card-pad` 18px.
- **Controls** are `bc-control-height` (36px) on desktop. Mobile tap targets are at least `bc-touch-target` (44px).
- **Desktop layout.** The sidebar is `bc-sidebar-width` (264px). Its header and the top bar share `bc-topbar-height` (56px) so their rules line up. Main content is a centred column capped at `bc-content-width` (760px).
- **Mobile layout.** Screens scroll under a fixed dock: `MobileComposer` above `TabBar`, fading into `bc-canvas`. Horizontal card rails snap per card.

### Shape and depth

- **Radii.** Corners grow with the size of the container: `bc-radius-control` 10px for controls, `bc-radius-card` 12px for cards, `bc-radius-bubble` 14px for bubbles and tiles, `bc-radius-panel` 16px for panels, `bc-radius-shell` 18px for the sidebar, and `bc-radius-composer` 20px for the composer, mobile cards and the tab bar. Use `bc-radius-pill` for arrow discs and `bc-radius-bar` for progress bars.
- **Shadows** are reserved for things that float over the canvas. `bc-shadow-shell` goes on the sidebar, `bc-shadow-panel` on content panels, `bc-shadow-field` on the composer and `bc-shadow-search` on quick search. Each pairs a 1px top highlight with a soft drop. Cards on panels have no shadow.

### States and motion

- **Hover** lays `bc-surface-raised` under a control and raises its text to `bc-ink`. Prompt cards instead switch their border to `bc-steel-blue-edge`, and chips switch theirs to `bc-steel-blue`.
- **Active.** An active nav item takes `bc-surface-raised`. An active child or tab takes `bc-steel-blue-tint` with `bc-steel-blue-text`.
- **Focus** is a solid 2px `bc-steel-blue-text` outline, offset 2px. It reaches 5–7:1 on the dark surfaces. On `bc-field` it is only 2.2:1, so the composer also shifts its border to `bc-field-focus` while focused.
- **Motion** is limited to colour and border transitions at 200ms and the nav chevron's 90° rotation at 250ms. All of it is off under `prefers-reduced-motion`.
- **Scrollbars** stay invisible until the area is hovered, then show a 6px `bc-scroll-thumb`.

## Iconography

- Icons are thin line icons drawn for this app: a 24-unit grid with a 1.6 stroke (1.8–2 for small chevrons, plus and send), round caps and joins. In the UI, use `DE.Icon` (`currentColor`). The Icons asset group holds the same icons as SVG files for docs and exports.
- Each discipline has a fixed icon: Mechanical `cube`, Electrical `bolt`, Controls `chip`, Software `code`; Operations items Manufacturing `factory`, Process `process`, Maintenance `wrench`; Vault items Documents `doc` and Uploads `upload`; Tools items Simulation `wave` and Troubleshoot `search` and Data Analysis `chart`; New `plus`. Design items have no children. Ask AI is always `sparkle`.
- Icons take their row's colour (`bc-muted` at rest, `bc-ink` on hover). The only filled icon is a set star.
- No emoji and no illustration. The app mark (Logos → `de-mark.svg`) is the only picture.

## Building a new page

1. **Desktop:** `AppShell` with `Sidebar` (the app's groups: top, Design, Operations, Vault, Tools; headings collapse) and `TopBar` (crumb as "Section  /  Item").
2. **Empty page:** `Hero` → `Composer` → `Panel`s of `PromptCard`s. **Working page:** `Message`s, with the `Composer` sticky at the bottom.
3. **Collections:** a `Panel` opened by a `SectionHeader`, holding cards three across. Use `EmptyNote` when the collection is empty.
4. **Mobile:** `MobileHeader` → `Hero mobile` → an `ActionCard` rail (one `primary` first) → `SectionHeader mobile` + `ProjectRow`s, with the dock (`MobileComposer` + `TabBar`) fixed at the bottom.
5. **Components** load from `components/bundle.js` as `window.DE`, with `components/bundle.css` on top of the tokens. They need React 18.

## Decisions (2026-11-09)

- Graphite is the only app theme. The older Block Concepts token set (light theme, 2px and 4px corners, Word-document colors, Aptos) is for Block Concepts Word documents only and is not part of this system.
- Wordmark: "Design Engineering" (formal, in the UI) and "designengineering.ai" (slug, URLs and domains).
- Mobile navigation mirrors the desktop sidebar: New, Chats, Projects, Dashboard, More (More stands for Search, Customize and the rest of the sidebar menu).
- The disarmed send button is `bc-field-send-off` with a `bc-field-muted` arrow on desktop and mobile.
- Text size: mobile offers Large (1) and Extra large (1.12 scale) as a user setting.
- Project numbers (BC-Q-YYNNN) are configurable per organization.
