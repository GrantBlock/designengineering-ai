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

## Navigation (same on desktop and mobile)
New, Recents, Projects (plain buttons, no drop-downs), then three collapsible headings: Design (Mechanical, Electrical, Controls, Software, Manufacturing; no sub-items), Vault (Documents, Uploads) and Tools (Simulation). Desktop shows these in the sidebar. Mobile tabs are not yet updated (see log 2026-11-11). Mobile shows five tabs: Home, Recents, Projects, Design, Library. "Ask" is the composer and the primary ActionCard, not a tab or nav item.

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
- [stated] 2026-11-11: Projects section pages P05, P06 and P18 are complete for now (Grant). They are built from `system-kit/` tokens and components. Patterns they introduced, none yet confirmed one by one:
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
