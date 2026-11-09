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
Home, Recents, Projects, then Design (Mechanical, Electrical, Controls, Simulation), then Library (Standards, Assessments, Quotes, Documentation, Testing). Desktop shows these in the sidebar. Mobile shows five tabs: Home, Recents, Projects, Design, Library. "Ask" is the composer and the primary ActionCard, not a tab or nav item.

## Components
Names and props are in `system-kit/components/*/README.md`: AppShell, Sidebar, NavItem, TopBar, Hero, Composer, MobileComposer, Message, Panel, SectionHeader, PromptCard, EmptyNote, Button, IconButton, Tag, Avatar, Icon, SearchField, ActionCard, ProjectRow, StageProgress, MobileHeader, TabBar.

## Behaviors
- Send button: disarmed is `bc-field-send-off` with a `bc-field-muted` arrow, on desktop and mobile. Armed is `bc-steel-blue` with a white arrow.
- Text size (mobile): user setting with Large (scale 1) and Extra large (scale 1.12).
- Motion: color and border transitions only, off under reduced motion.
- Focus: 2px `bc-steel-blue-text` outline, offset 2px.

## Content
- Voice: plain, technical, no emoji, no exclamation marks. Address the person as "you".
- Assistant name: undecided. Use the placeholder `[Assistant name]` everywhere; current thinking "Lev" (Draft, not yet approved by Grant).
- Project numbers: BC-Q-YYNNN for Block Concepts. The prefix is configurable per organization (for Builder customers), so build it as a setting, not a constant.
- Sentence case for nav, cards, chips and placeholders. Mono uppercase for labels, counts and stages.

## Not part of this system
The Block Concepts Word-document tokens (light theme, 2px and 4px corners, Aptos, document colors). They live with the Word files, not the app.

## Open items
- Chat sample reply is still first-person plural ("We will start by..."). Decide the assistant's voice when the name is set.
- Prompt card categories still include "Deliver" although the nav no longer has a Deliver group.
- Mobile tab labels are tight at five tabs on 360px phones. Check on a small device.
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
- Draft (not yet approved by Grant): Library holds Standards, Assessments, Quotes, Documentation and Testing as children. Mobile "Design" tab uses the `cube` icon.
- Draft (not yet approved by Grant): the design system is whatever P01 and P02 already use. (Earlier line, kept.)
