# Design System

Status: **extracted from P01, P02 and the design system kit, answers logged 2026-11-09.** Source of truth for values is `system-kit/` (`tokens.json`, `README.md`, `components/`). This file is the short version every page follows. Do not copy token values here; read them from `system-kit/tokens.json`.

## Wordmark
"Design Engineering" (formal, UI). "designengineering.ai" (slug, URLs, domains). Mark: `assets/favicon.svg` (clean copy of `system-kit/assets/Logos/de-mark.svg`). Show at 26px in the sidebar header, 36px in the mobile header, never on Steel Blue.

## Theme
Graphite only. No light theme. Layers: `bc-canvas` window, `bc-surface` panels, `bc-surface-raised` cards, hover and user bubble. One light island, `bc-field`, for anywhere you type. Steel Blue is the only brand color: fill (`bc-steel-blue`) only on the armed send button, the primary mobile card and stage bars; text (`bc-steel-blue-text`) for eyebrows, categories, tags, links, the active child and the assistant label.

## Typography
Overpass (reading) and Overpass Mono (labels, codes, metadata, uppercase, tracked). Display is ExtraBold uppercase, one headline per page. Styles are listed in `tokens.json` under `type`. Mobile section labels and card categories use 13px mono (eyebrow-mobile), the desktop label is 11px.

## Spacing, radius, shadow
Tokens `bc-space-*`, `bc-radius-*`, `bc-shadow-*`. Shell gap 10px, mobile gutter 20px, card padding 18px, control height 36px, touch target 44px, sidebar 264px, content column 760px.

## Layout
- **Desktop:** `AppShell`, `Sidebar`, `TopBar`. Empty page: Hero, Composer, Panels of PromptCards. Working page: Messages with the Composer sticky at the bottom.
- **Mobile:** `MobileHeader`, Hero, ActionCard rail, `SectionHeader` plus `ProjectRow`s. Dock (`MobileComposer` over `TabBar`) fixed at the bottom.

- **Dashboard (P19):** wide 1120px content column with two panels side by side (stacks under 1000px, single column on mobile). Summary tiles on `bc-surface-raised`. Rows group by status (Sold, Quoting, Waiting) with a small stage-bar progress and an "N of M done" count. Status tag: Sold uses `de-tag` (steel blue text), Quoting and Waiting use `de-tag-plain`.
- **Status colors (P19, page-level semantic colors):** priority pill High `#ee8c87` on rgba(238,140,135,0.14), Medium `#dcae62` on rgba(220,174,98,0.14), Low plain outline; done check `#86c9a2`; overdue date uses the High color. Defined as `--p19-*` variables in the page; move them to `tokens.json` when a second page uses them. Steel Blue stays the only brand color.
- **Today row:** `bc-steel-blue-tint` ground with a 3px `bc-steel-blue` left edge, date shown as "Today" in `bc-steel-blue-text`.

## Navigation (same on desktop and mobile)
Desktop sidebar (spec 2026-11-11, see `system-kit/components/Sidebar/README.md`): top toolbar (menu, sidebar toggle, back, dimmed forward; Chat | Projects switcher on the right), primary nav New, Search, Dashboard (opens P19), Design (3D designer), Vault, Uploads, Builder (extension), More (current as of 2026-11-11; Customize was removed), a scrolling list, and an account footer (avatar, "Grant · Pro", settings). Chat mode lists one Recents list. Projects mode lists a collapsible group per project, each with its chats indented below, newest first, plus a General group for chats outside any project. The old Design, Operations, Vault and Tools groups and Quick search are retired on desktop. Mobile has no Chat | Projects switcher and uses four tabs: New chat, Recents, Dashboard, More.

## Components
Names and props are in `system-kit/components/*/README.md`: AppShell, Sidebar, NavItem, TopBar, Hero, Composer, MobileComposer, Message, Panel, SectionHeader, PromptCard, EmptyNote, Button, IconButton, Tag, Avatar, Icon, SearchField, ActionCard, ProjectRow, StageProgress, MobileHeader, TabBar.

## Behaviors
- Send button: disarmed is `bc-field-send-off` with a `bc-field-muted` arrow, on desktop and mobile. Armed is `bc-steel-blue` with a white arrow.
- Text size (mobile): user setting with Large (scale 1) and Extra large (scale 1.12).
- Motion: color and border transitions only, off under reduced motion.
- Focus: 2px `bc-steel-blue-text` outline, offset 2px.

## Content
- Voice: plain, technical, no emoji, no exclamation marks. Address the person as "you".
- Assistant voice: first person singular ("I will start by...", "Tell me..."), since the assistant has its own name. Draft (not yet approved by Grant).
- Prompt card categories: Mechanical, Electrical, Controls, Software, Manufacturing, Vault (Library was removed 2026-11-11).
- Assistant name: undecided. Use the placeholder `[Assistant name]` everywhere; current thinking "Lev" (Draft, not yet approved by Grant).
- Project numbers: BC-Q-YYNNN for Block Concepts. The prefix is configurable per organization (for Builder customers), so build it as a setting, not a constant.
- Sentence case for nav, cards, chips and placeholders. Mono uppercase for labels, counts and stages.

## Not part of this system
The Block Concepts Word-document tokens (light theme, 2px and 4px corners, Aptos, document colors). They live with the Word files, not the app.

## Open items
- Open issues are tracked in `ISSUES.md`.
- Assistant name: [Assistant name], Draft "Lev".

## Decision log
- [stated] 2026-11-09: The design system is P01, P02 and `system-kit/`, as reconciled in this file.
- [stated] 2026-11-09: The second Block Concepts token set (light theme, Word-document colors) is removed from the app pages and the system; it belongs to Block Concepts Word documents.
- [stated] 2026-11-09: Wordmark is "Design Engineering" (formal) and "designengineering.ai" (slug).
- [stated] 2026-11-09: Assistant name is a placeholder, `[Assistant name]`. Draft (not yet approved by Grant): "Lev".
- [stated] 2026-11-09: Project number prefix is configurable per organization.
- [stated] 2026-11-09: Navigation is Home, Recents, Projects, Design, Library. Library replaces Deliver and Resources. Mobile tabs mirror the desktop navigation.
- [stated] 2026-11-09: Disarmed send button uses `bc-field-send-off` with a `bc-field-muted` arrow, on desktop and mobile.
- [stated] 2026-11-09: Mobile text size setting (Large, Extra large 1.12) is part of the design system.
- [stated] 2026-11-09: Library is confirmed as one nav item with children Standards, Assessments, Quotes, Documentation, Testing. The mobile Design tab keeps the cube icon so desktop and mobile match.
- [stated] 2026-11-09: Prompt card category "Deliver" is renamed "Library".
- Draft (not yet approved by Grant): assistant speaks in first person singular.
- (Superseded by the line above) Library holds Standards, Assessments, Quotes, Documentation and Testing as children. Mobile "Design" tab uses the `cube` icon.
- Draft (not yet approved by Grant): the design system is whatever P01 and P02 already use. (Earlier line, kept.)
- [stated] 2026-11-11: Projects section pages P05, P06 and P12 are complete for now (Grant). They are built from `system-kit/` tokens and components. Patterns they introduced, none yet confirmed one by one:
- Draft (not yet approved by Grant): two-pane detail pages use a content column up to 1120px (the system caps at 760px); the 760px cap stays for list and single-column pages.
- Draft (not yet approved by Grant): page tabs are a numbered row (circle with number, label, steel-blue underline on the active tab), used for the P06 sections.
- Draft (not yet approved by Grant): progress fills (stage bars, Gantt bars) use the `bc-steel-blue` fill; Not started stays an empty `bc-surface-raised` bar.
- Draft (not yet approved by Grant): "Next" and "Generate" actions are a chip with a `bc-steel-blue` border and `bc-steel-blue-text` label, not a filled button.
- Draft (not yet approved by Grant): dropdown menu (Import, Export) is a chip button with a chevron and a `bc-surface-raised` menu with `bc-edge` border; sections can collapse with a chevron.
- Draft (not yet approved by Grant): Delete asks for a second click ("Confirm delete") because browser dialogs are not available in previews.
- Draft (not yet approved by Grant): generated process documents are drawn on white drawing sheets (Block Concepts title block, Barlow Semi Condensed and Inter, blue accent) to match the existing 7332 Process Document; they sit as paper previews inside the Graphite app.
- Draft (not yet approved by Grant): the Layout view draws blocks to scale on `bc-canvas` with numbered `bc-steel-blue` badges and `bc-steel-blue-text` flow arrows.
- [stated] 2026-11-11: Grant changed the sidebar Design group to Mechanical, Electrical, Controls, Software, Manufacturing (Simulation removed). New icons `code` (Software) and `factory` (Manufacturing). Draft (not yet approved by Grant): child items for Software (Applications, Firmware, Integrations) and Manufacturing (Process plans, Work instructions, Tooling) are placeholders in P01 and the kit previews.
- [stated] 2026-11-11: Grant changed the desktop sidebar to New, Recents, Projects, then collapsible headings Design (five items, no sub-items), Vault (Documents, Uploads) and Tools (Simulation). Library and its children are removed; Home is renamed New. The two Library prompt cards in P01 now use the category Vault. Draft (not yet approved by Grant): mobile tabs (Home, Recents, Projects, Design, Library) are unchanged until Grant says how they should map; heading open/closed state is not remembered between visits.
- [stated] 2026-11-11: Grant made Recents and Projects plain buttons with no drop-down lists or chevrons.
- [stated] 2026-11-11: Grant moved Manufacturing out of Design into a new collapsible heading Operations (Manufacturing, Process, Maintenance), and added Troubleshoot under Tools. Order is Design, Operations, Vault, Tools. New icons `process` and `wrench`; Troubleshoot uses the `search` icon (Draft, not yet approved by Grant).
- [stated] 2026-11-11: Grant added Data Analysis under Tools. Icon `chart` (bar chart) is Draft (not yet approved by Grant).
- [stated] 2026-11-11: Grant asked for the mobile tabs to match the desktop sidebar. Mobile tabs are now New, Recents, Projects, Design, More. Draft (not yet approved by Grant): More stands for Operations, Vault and Tools because five tabs cannot hold all groups; the More screen is not designed yet. The P02 Library prompt card now uses the category Vault.
- [stated] 2026-11-11: Dashboard layout (P19) approved: 1120px two-column width, status tags and group progress, priority and done colors, Today row highlight. Semantic colors are an exception to the Steel Blue-only rule, limited to status.
- [stated] 2026-11-11: Grant approved P03 (Chat conversation view) and its patterns: numbered citation chips, source cards, Sources side panel (300px, desktop above 1100px), attachment file chips, mobile source bottom sheet, content column widened to 1084px when a side panel is present.
- [stated] 2026-11-11: Grant approved P04 (Sign in / sign up) and its patterns: auth card, segmented two-option toggle, light text inputs with mono labels, show/hide password button, inline notice, steel-blue outline submit chip, six-box code entry, verified notice.
- Draft (not yet approved by Grant): 2026-11-11: P01 starter panel (Favorites and the grid below the composer) now has one or more template cards for every sidebar item: Mechanical, Electrical, Controls, Software, Manufacturing, Process, Maintenance, Documents, Uploads, Simulation, Troubleshoot, Data Analysis (18 cards, 3 starred by default). The old "Vault" category is split into Documents and Uploads. Card wording for the new items is placeholder. P02 (mobile) still shows 4 cards.
- Draft (not yet approved by Grant): 2026-11-11: P01 sidebar rebuilt from Grant's Sidebar Navigation spec. Four regions: top toolbar (menu, sidebar toggle that collapses and expands, back, forward dimmed), primary nav (New as a full-width pill, Search, Projects, Customize, More; 34px rows, 16px icons), scrollable Recents list (single line, fade truncation), and a fixed account footer (gray "G" avatar, "Grant · Pro" with chevron, settings gear). This replaces the Design, Operations, Vault and Tools groups and the Quick search field in P01 only. The spec text said "Artifacts" in one place and "Projects" in its table; Projects is used. Recents titles are sample text. P02 to P07, `system-kit/` and the Navigation section above still describe the old sidebar. The template panel categories still follow the old sidebar items.
- Draft (not yet approved by Grant): 2026-11-11: P01 sidebar gets a two-icon Chat | Projects switcher in the top toolbar (selected side on a raised chip, like Grant's image). Chat shows one Recents list. Projects shows one collapsible group per project (name, chat count), each listing its chats newest first; projects ordered by latest activity. Primary nav is now New, Search, Dashboard, Customize, More (Projects button removed, Dashboard added; it opens P19). Project names and chats are sample data from P05. The switcher icons (chat bubble, folder) are my guess from the image.
- [stated] 2026-11-11: Grant approved: Dashboard links to P19; chats are indented under their project; a General group holds chats outside any project; the new sidebar is applied to P01, P03, P05, P06, P07, P12, P19 and the system kit (Sidebar component, bundle.css, preview, README). P04 has no sidebar. Switcher placement follows Grant's image: menu, toggle, back, forward on the left, switcher on the right.
- Draft (not yet approved by Grant): sample Recents titles and project names in the sidebar are placeholders; P01 and the kit say "Label applicator" for BC-Q-26035 while P05 says "Dispensing cell guarding". Search, Customize and More do nothing yet. The mobile tabs and P02 are unchanged.
- [stated] 2026-11-11: Grant asked for the mobile tabs to be redone to match the new sidebar and for the rollout to be finished. Mobile tabs are now New, Chats (the Recents list), Projects, Dashboard, More. Applied to P02, P03, P05, P06, P07, P12, P19 and the kit TabBar. Stale tab labels (Home, Library) on P05, P06, P12 and P19 are fixed; the active tab is Chats on P03, Projects on P05, P06, P07 and P12, Dashboard on P19.
- Draft (not yet approved by Grant): More stands for Search, Customize and the rest of the sidebar menu; the More screen and the mobile Chats and Projects lists (chat list, project groups) are not designed yet. Supersedes the 2026-11-11 mobile tab drafts above (Design and More as Operations, Vault and Tools).
- [stated] 2026-11-11: Grant added Design to the primary navigation, between Dashboard and Customize, as the 3D designer (cube icon). Added to P01, P03, P05, P06, P07, P12, P19 and the kit Sidebar. Draft (not yet approved by Grant): the 3D designer page is not designed (see P08); on mobile Design lives under More because the five tabs are full.
- [stated] 2026-11-11: Mobile does not use the Chat | Projects selector. Mobile tabs are now four: New chat, Recents, Dashboard, More. New chat has a "Chat in" selector (General or a project; P02). Recents is one list of every chat. Supersedes the 2026-11-11 mobile tab lines above (five tabs). Applied to P02, P03, P05, P06, P07, P12, P19 and the kit TabBar (grid now sizes to the tab count).
- Draft (not yet approved by Grant): More holds Projects, Design, Search and Customize; the More screen, the mobile Recents screen (project chats tagged with their project) and the TabBar active state on project pages (More) are not designed yet.
- [stated] 2026-11-11: On desktop the General group in Projects mode is a dropdown that starts closed, and its chats are a copy of the Chat mode Recents list. Applied to P01, P03, P05, P06, P07, P12, P19 and the kit Sidebar.
- [stated] 2026-11-11: Projects mode (desktop sidebar) gets a New project row at the top of the list, and the General group is removed from it. General is the default project for chat sessions and is only used for the "Chat in" selector in the mobile app. Supersedes the General dropdown line above. Applied to P01, P03, P05, P06, P07, P12, P19 and the kit Sidebar. Draft (not yet approved by Grant): New project opens P05 until a create-project flow is designed.
- [stated] 2026-11-11: Each project in the Projects tab gets a Start chat option: an icon button at the right of the group header (chat bubble with a plus), dimmed until hover. It starts a new chat in that project. Applied to P01, P03, P05, P06, P07, P12, P19 and the kit Sidebar. Draft (not yet approved by Grant): the prototype opens the P01 new chat page without setting the project; the composer Project chip is not yet linked.
- [stated] 2026-11-11: Each row on the Projects page (P05) gets the same Start chat icon button (chat bubble with a plus) next to the more menu, on desktop and mobile. Clicking it does not open the project; it starts a new chat. Draft (not yet approved by Grant): the prototype opens the P01 new chat page without setting the project. The kit ProjectRow does not have the button yet.
- [stated] 2026-11-11: Start chat is linked to the project. The sidebar button and the P05 row button open the new chat page with ?project=BC-Q-NNNNN: on desktop (P01) the composer Project chip shows that project, and on mobile (P02, used under 760px) the "Chat in" selector starts on it. Draft (not yet approved by Grant): projects that P01 and P02 do not know (P05 has six, they have three) show the BC-Q number instead of a name; BC-Q-26035 is named "Label applicator" in P01 and P02 but "Dispensing cell guarding" in P05.
- [stated] 2026-11-11: Grant removed Customize from the primary navigation and added Vault (artifacts and exports) and Uploads (imports). Primary nav is now New, Search, Dashboard, Design, Vault, Uploads, More. Applied to P01, P03, P05, P06, P07, P12, P19 and the kit Sidebar (new `vault` icon). Draft (not yet approved by Grant): Vault and Uploads pages are not designed; Uploads overlaps the P07 upload flow and the P06 Import tab, and Vault overlaps the P06 Exports tab; on mobile both live under More.
- [stated] 2026-11-11: Grant approved P09 (Vault) and its patterns: project card list in the template panel style (mono steel-blue code, name, item count, pin star, selected = steel-blue edge on `bc-steel-blue-tint`), pill type tabs on `bc-surface`, search and grid or list toggle, thumbnail gallery cards with type tag, project and age, mobile sideways project rail and two-column gallery.
- [stated] 2026-11-11: Builder is an extension that can be purchased, and it is in the primary navigation of the main app. Primary nav is now New, Search, Dashboard, Design, Vault, Uploads, Builder, More. Added to every page with the sidebar (P01, P03, P05, P06, P07, P08, P09, P11, P12, P15, P17, P19); the row opens P17 (new box icon, Draft, not yet approved by Grant). On mobile Builder lives under More. The kit Sidebar component and the mobile More screen are not updated yet. P15 Billing lists Builder as an extension ($600 per seat per year (A), from the App Plan).
- [stated] 2026-11-11: Design (the 3D designer) and Builder are extensions: they carry an Extension tag in the page header and are listed under Extensions in Settings, Billing. Pro gets projects and buys the extensions (Grant).
- [stated] 2026-11-12: Shared shell (`exports/shared/`): one sidebar, top bar and phone tab bar for every page. New is emphasized only on the new chat page. The top bar is Help, Session panel, More options and Share on every screen. The phone layout is used only on phones (or the sample's Phone view), never because a desktop window is narrow. Text colors `bc-steel-blue-text` and `bc-placeholder-text` were lightened in the shell so text reaches 4.5 to 1 on raised and tinted grounds (Draft, not yet approved by Grant: move the new values into `tokens.json`).
- [stated] 2026-11-11: Extension rows (Design, Builder) appear in the primary navigation only once the extension is bought; until then they are hidden and added in Settings, Billing, Extensions (Grant). This narrows the two lines above.
- Draft (not yet approved by Grant): 2026-11-12: P20 patterns: pill brand chips (selected = `bc-steel-blue` edge on `bc-steel-blue-tint`) with a small mono "from chat" marker when chat added the item; a dashed Add chip that takes typed text; a Lock switch per section with a lock icon shown in the overlay nav; suggestion cards on `bc-surface-raised` with a 3px `bc-steel-blue` left edge and Dismiss and Accept buttons; a mono file preview on `bc-canvas`.
