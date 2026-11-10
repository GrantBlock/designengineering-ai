# UI Progress Tracker

Updated 2026-11-06 · Grant Block

**Status key:** ☐ Not started · ◐ In progress · ☑ Done

Page order is a **Draft (not yet approved by Grant)**, built from the App Plan MVP scope (Section 7, Winter build). Reorder freely; IDs stay fixed.

## Pages

| ID | Page | Surface | Status | Export | Notes |
| --- | --- | --- | --- | --- | --- |
| P01 | Main chat, starting page | Web (desktop) | ☑ | `exports/P01-chat-start-desktop/Design_Engineering_App.html` | Done before this tracker; source of the design system |
| P02 | Mobile chat, starting page | Web (mobile) | ☑ | `exports/P02-chat-start-mobile/Design_Engineering_Mobile.html` | Done before this tracker |
| P03 | Chat conversation view (messages, attachments, answers with sources) | Desktop + mobile | ☐ | | Extends P01/P02 |
| P04 | Sign in / sign up (Clerk) | Desktop + mobile | ☐ | | |
| P05 | Projects list | Desktop + mobile | ◐ | `exports/P05-projects/index.html` | Landing page for projects; each row opens its P06 project page. Awaiting Grant's review |
| P06 | Project workspace (files, chat, notes in one place) | Desktop + mobile | ◐ | `exports/P06-project-workspace/index.html` | First tab is the Process Builder (stations, live layout, operation order, process document). Files, chat and notes tabs not designed yet. Awaiting Grant's review |
| P07 | Upload flow (STEP, OBJ, photos, PDFs) | Desktop + mobile | ☐ | | |
| P08 | 3D viewer | Desktop + mobile | ☐ | | |
| P09 | Document search and data sheets | Desktop + mobile | ☐ | | |
| P10 | Notes and tracking | Desktop + mobile | ☐ | | |
| P11 | Calculators (chat-enabled) | Desktop + mobile | ☐ | | |
| P12 | Process flows | Desktop | ☐ | | |
| P13 | Plans and vendor requests | Desktop + mobile | ☐ | | |
| P14 | Wallet and usage (prepaid tokens, auto-refill) | Desktop + mobile | ☐ | | |
| P15 | Account and settings | Desktop + mobile | ☐ | | |
| P16 | Lite app window (offline 3D viewer, search, on-device chat) | Desktop app | ☐ | | |
| P17 | Builder (package a client or site into a Lite zip) | Desktop app | ☐ | | |

## Next up

First open item: **P03**, unless Grant says otherwise.

## Log

- [stated] 2026-11-09: P01 and P02 exports, favicon (`assets/favicon.svg`) and the design system kit (`system-kit/`) added from Grant's uploads.
- [stated] 2026-11-06: P01 (main chat starting page) and P02 (mobile chat starting page) are done.
- [stated] 2026-11-09: Design system extracted and reconciled; see DESIGN-SYSTEM.md. P01 and P02 exports updated to match (Graphite tokens only, Library nav, five mobile tabs, assistant name placeholder, send button).
- [stated] 2026-11-10: P05 (Projects list) drafted at `exports/P05-projects/index.html`, built from `system-kit/` tokens and components; rows link to `../P06-project-workspace/index.html?project=<BC-Q number>` (not built yet). Awaiting review.
- [stated] 2026-11-10: P06 (Project workspace) drafted at `exports/P06-project-workspace/index.html`, with the Process Builder built inside the project. Draft (not yet approved by Grant): wider 1120px content column for two-pane detail pages (the system caps at 760px).
- Draft (not yet approved by Grant): page order P03 to P17 above.
- [stated] 2026-11-06: Shortcut phrase "design the next page" added; see ../shortcuts.md.
