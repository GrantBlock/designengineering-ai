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
| P06 | Project workspace (process layout, process document, schedule; files, chat, notes later) | Desktop + mobile | ◐ | `exports/P06-project-workspace/index.html` | Process layout with a summary card per process; each opens P18. Awaiting Grant's review |
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
| P18 | Process configuration (one process in detail, like a Xometry part configuration) | Desktop + mobile | ◐ | `exports/P18-process-config/index.html` | Opened from a P06 process card; saves back to the P06 summary. Added 2026-11-10. Awaiting Grant's review |

## Next up

First open item: **P03**, unless Grant says otherwise.

## Log

- [stated] 2026-11-09: P01 and P02 exports, favicon (`assets/favicon.svg`) and the design system kit (`system-kit/`) added from Grant's uploads.
- [stated] 2026-11-06: P01 (main chat starting page) and P02 (mobile chat starting page) are done.
- [stated] 2026-11-09: Design system extracted and reconciled; see DESIGN-SYSTEM.md. P01 and P02 exports updated to match (Graphite tokens only, Library nav, five mobile tabs, assistant name placeholder, send button).
- [stated] 2026-11-10: P05 (Projects list) drafted at `exports/P05-projects/index.html`, built from `system-kit/` tokens and components; rows link to `../P06-project-workspace/index.html?project=<BC-Q number>` (not built yet). Awaiting review.
- [stated] 2026-11-10: P06 (Project workspace) drafted at `exports/P06-project-workspace/index.html`, with the Process Builder built inside the project. Draft (not yet approved by Grant): wider 1120px content column for two-pane detail pages (the system caps at 760px).
- [stated] 2026-11-10: P06 changed to a process layout with a summary card per process. Each card opens P18 (Process configuration), which edits the detail and saves back. ID P18 added so existing IDs stay fixed. Prototype stores data in browser localStorage under `de-proc-<project>` (design only, not the real data model).
- [stated] 2026-11-10: P06 gets a third tab, Schedule: a Gantt chart (task list, month timeline, dependencies, baseline, today line, zoom, auto fit) that holds project status and dates, edited in a task details panel. Draft (not yet approved by Grant): bars use a steel-blue fill for progress; per-task status is Not started, In progress, Done. Sample tasks come from Grant's monday.com screenshot, shifted to start Aug 3, 2026.
- [stated] 2026-11-10: Schedule tab reworked: a project holds several schedules (for example Conveyor, Capping). Each schedule is collapsible, with its own Gantt timeline and a task builder (summary card per task, Edit button for name, dates, status and dependencies, Add task). Sample schedules are placeholders.
- [stated] 2026-11-10: Process document tab rebuilt from Grant's 7332 Process Builder export: three drawing sheets (overhead view of the layout, process description with station schedule, sequence of operation and utilities summary, concept assembly drawing), Block Concepts title block, editable document details, print to PDF. Draft (not yet approved by Grant): sheets use the existing drawing-sheet look (white paper, Barlow Semi Condensed and Inter, blue #1a6dbf), not the app Graphite tokens.
- [stated] 2026-11-10: P18 gains a Placement section (placed against another process, side, align) so the overhead layout can form loops. Sample processes are the nine stations from the 7332 Process Builder.
- Draft (not yet approved by Grant): page order P03 to P17 above.
- [stated] 2026-11-06: Shortcut phrase "design the next page" added; see ../shortcuts.md.
