# UI Progress Tracker

Updated 2026-11-11 · Grant Block

**Status key:** ☐ Not started · ◐ In progress · ☑ Done

Page order is a **Draft (not yet approved by Grant)**, built from the App Plan MVP scope (Section 7, Winter build). Reorder freely; IDs stay fixed.

## Pages

| ID | Page | Surface | Status | Export | Notes |
| --- | --- | --- | --- | --- | --- |
| P01 | Main chat, starting page | Web (desktop) | ☑ | `exports/P01-chat-start-desktop/Design_Engineering_App.html` | Done before this tracker; source of the design system |
| P02 | Mobile chat, starting page | Web (mobile) | ☑ | `exports/P02-chat-start-mobile/Design_Engineering_Mobile.html` | Done before this tracker |
| P03 | Chat conversation view (messages, attachments, answers with sources) | Desktop + mobile | ◐ | `exports/P03-chat-conversation/index.html` | Draft 2026-11-11, one responsive page. Awaiting Grant's review. Extends P01/P02 |
| P04 | Sign in / sign up (Clerk) | Desktop + mobile | ☐ | | |
| P05 | Projects list | Desktop + mobile | ☑ | `exports/P05-projects/index.html` | Done 2026-11-11. Landing page for projects; each row opens its P06 project page |
| P06 | Project workspace (Import, Specifications, Layout, Schedule, Exports; files, chat, notes later) | Desktop + mobile | ☑ | `exports/P06-project-workspace/index.html` | Done 2026-11-11 (for now). Tabs: Import, Specifications, Layout, Schedule, Exports. Files, chat and notes tabs still to design |
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
| P18 | Process configuration (one process in detail, like a Xometry part configuration) | Desktop + mobile | ☑ | `exports/P18-process-config/index.html` | Done 2026-11-11. Opened from a P06 process card; saves back to the P06 summary. Added 2026-11-10 |
| P19 | Dashboard (weekly view: this week, this month, last week) | Desktop + mobile | ☑ | `exports/P19-dashboard/index.html` | Layout only; sample data. Added 2026-11-10 from Grant's weekly tracker zip. Approved 2026-11-11 |

## Next up

First open item: **P03** (draft built, awaiting Grant's review), unless Grant says otherwise. P05, P06 and P18 (the projects section) are complete for now; open questions are in `../review-queue.md` RQ16 and RQ17.

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
- [stated] 2026-11-11: P06 tabs are now 1 Specifications (the process cards), 2 Layout (new: shared flow canvas with blocks, connectors, labels, shape dock and minimap, modeled on Grant's Liveblocks example), 3 Documents, 4 Schedule.
- [stated] 2026-11-11: Documents tab has three sections only: 1 Generate (choose sheets, edit title block and text), 2 Preview, 3 History (numbered revisions, each can be previewed or used as a starting point). The concept assembly sheet block is removed. The Schedule gantt can be included as one sheet per schedule.
- Draft (not yet approved by Grant): Layout blocks use the app's neutral graphite fill and steel-blue selection, not per-type colors as in the Liveblocks example. Live multi-user editing is a placeholder.
- [stated] 2026-11-11: P06 Layout tab replaced with the live overhead layout (blocks drawn to scale, numbered badges, flow arrows, names), with a Selected process panel (placed against, side, align, flow) and the Proposed operation order. The live layout preview and operation order are removed from the Specifications tab. The free-form flow canvas from the earlier Layout draft is dropped (still in git history).
- [stated] 2026-11-11: P06 tab order is now 1 Specifications, 2 Layout, 3 Schedule, 4 Documents (Schedule comes before Documents because Documents can include the schedule chart).
- [stated] 2026-11-11: Each schedule has three buttons: Rename, Archive, Delete. Archived schedules move to a collapsed Archived list with Restore and Delete. Delete asks for a second click (Confirm delete) because dialogs are not available.
- [stated] 2026-11-11: P06 tab Documents is renamed Exports, with four numbered sections: 1 Import, 2 Generate, 3 Preview, 4 History. Import accepts drawing images (added as sheets) and revision files (.json saved from History).
- [stated] 2026-11-11: P06 gets a new first tab, Import, which duplicates the Exports tab (1 Import, 2 Generate, 3 Preview, 4 History). The Exports tab drops its Import section (1 Generate, 2 Preview, 3 History). Both tabs show the same shared body, so edits appear in each. Sections on both tabs collapse with a chevron.
- [stated] 2026-11-11: The Specifications tab has Import and Export dropdown menus. Import: reload past configuration (from the latest revision), add processes from CSV, open the Import tab. Export: processes as CSV, open the Exports tab. The old Reload past configuration button moved into the Import menu.
- [stated] 2026-11-11: Grant marked the projects section complete for now: P05 (Projects list), P06 (Project workspace) and P18 (Process configuration). P06 tabs: Import, Specifications, Layout, Schedule, Exports. Pages were reviewed as a private preview during the session; data in the prototypes is stored in browser localStorage (see `ISSUES.md` DI03).
- Draft (not yet approved by Grant): page order P03 to P17 above.
- [stated] 2026-11-06: Shortcut phrase "design the next page" added; see ../shortcuts.md.
- [stated] 2026-11-10: P19 (Dashboard) added, layout first, integration into the app later. ID P19 because P18 is used by Process configuration on another branch. Built on the design system kit from `claude/tender-thompson-nd9kmn` (Graphite, Overpass), not the zip's light Manrope styling.
- [stated] 2026-11-11: P19 (Dashboard) approved by Grant. This covers the 1120px two-column content width, Sold/Quoting/Waiting row tags with group progress bars, priority colors (High red, Medium amber, Low plain), done check in green, and the Today row highlight. Added to DESIGN-SYSTEM.md.
- [stated] 2026-11-11: P03 (Chat conversation view) drafted at `exports/P03-chat-conversation/index.html`: one responsive page (desktop with sources side panel, mobile under 760px with source bottom sheet). Built from `system-kit/` tokens and the P05 shell. Sample conversation is a placeholder. Awaiting review.
- Draft (not yet approved by Grant): P03 patterns: numbered citation chips inline in answers (`bc-steel-blue-tint`, steel-blue fill when selected); source cards under each answer and a Sources side panel (300px, desktop above 1100px); attachment file chips under the user bubble; answer headings in 11px mono uppercase; copy, good, bad and regenerate icon buttons under each answer; attached-file chips inside the Composer; disclaimer line under the Composer; mobile source bottom sheet; content column widened to 1084px to fit the side panel.
- Draft (not yet approved by Grant): the P03 sample answer uses assumed values marked (A) and placeholder document names; none are real data.
