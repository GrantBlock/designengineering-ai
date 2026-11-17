# Review Queue

Everything waiting on Grant, tagged by where it is best handled. The shortcut "what's waiting on me" reads this file.

**Surface tags:** `mobile` = Claude mobile app (reading, ideas, yes/no answers) · `code` = Claude Code session (builds, exports, tests) · `vscode` = Claude in VS Code (architecture, critical decisions, editing files)

**State key:** ☐ Waiting · ◐ Answered, not yet applied · ☑ Closed (move to Closed, never delete)

## Waiting

| ID | Item | Surface | State | Where |
| --- | --- | --- | --- | --- |
| RQ01 | Review the seven shortcuts (where were we, what's waiting on me, park this idea, poke holes in this, decision brief, design the next page, review page) | mobile | ☐ | `shortcuts.md` |
| RQ02 | Approve or reorder the draft page order P03 to P17 | mobile | ☐ | `design/UI-Progress-Tracker.md` |
| RQ04 | Add "log it" and "end of day" shortcuts? | mobile | ☐ | `shortcuts.md` log |
| RQ05 | Review the Executive Summary | mobile | ☐ | SBA 1 |
| RQ06 | Read the Lite package format draft v0.1 and give comments (decisions go to RQ10) | mobile | ☐ | App Plan 3.2 |
| RQ08 | Approve the design system extracted from P01/P02 | code | ☐ | `design/DESIGN-SYSTEM.md` |
| RQ10 | Choose the on-device model and minimum PC spec; Windows only or also macOS; can Lite users add notes | vscode | ☐ | App Plan 3.2, D11 to D12 |
| RQ11 | Make the final picks for decisions D1 to D12 | vscode | ☐ | App Plan Section 4 |
| RQ12 | Share your sales/project process knowledge (the checklist stages for paid projects). Needed before any checklist work on I01 | mobile | ☐ | `ideas.md` I01 |
| RQ14 | Decide how to reach dev and preview builds from all computers (Cloudflare preview URLs, tunnel, Access login) and how Next.js runs on Cloudflare Workers | vscode | ☐ | `design/ISSUES.md` DI02, App Plan D1 |
| RQ15 | Decide where the app lives, styling approach (O2) and package manager (O3) | vscode | ☐ | `development-path.md` |
| RQ16 | Confirm the design-system patterns introduced in P05, P06 and P12 (1120px detail column, numbered page tabs, steel-blue progress fills, chip Next/Generate button, dropdown menus, two-step Delete, white drawing sheets for documents, to-scale Layout view) | vscode | ☐ | `design/DESIGN-SYSTEM.md` decision log |
| RQ17 | Answer the open projects questions: what Import should accept (CSV columns, PDF drawings, past configurations), whether archived schedules can be exported, whether stage bars come from the schedule, drag-to-place blocks in Layout, and which page is next (P07 upload flow or P08 3D viewer) | mobile | ☐ | `design/UI-Progress-Tracker.md`, `ideas.md` I03 to I07 |
| RQ21 | Review the agentic development plan (Planner, Tester, Coder, Reviewer; nightly schedule; labels; setup steps) and answer its open questions | vscode | ☐ | `GrantBlock/Project_Iron`, `docs/agentic-dev-plan.md` |

## Closed

| ID | Item | Closed | Answer |
| --- | --- | --- | --- |
| RQ20 | Review the P22 Help and support overlay | 2026-11-13 | Approved (Grant). Support is an AI agent only, replies within 24 hours; email is a placeholder (ElevenLabs under consideration, I09). This stops work: Claude's recommendation (front of queue, agent answers first, 1 hour target (A), no phone or text alerts). System status waits for monitoring data from Block Concepts |
| RQ18 | Starter bundle, SBA 8.2.1 Starter revenue, Lite demo gate | 2026-11-12 | Starter $20 per year, 3 projects, 5 GB (100 MB per file), one-time $5 credit (A), tokens separate with no limit; free pool capped at 5% of Pro revenue with abuse controls (App Plan 6.4); 8.2.1 updated (gap $43,700); Block Concepts runs the full suite in year 1 and the Lite demo gate stays |
| RQ19 | Review the P20 Preferences overlay | 2026-11-12 | Approved (Grant). Settings stays for UI and non-chat preferences. Projects get their own context, read first, set when a project is created. Help and support placement still open |
| RQ03 | Are the mobile pages web-responsive for now? (App Plan lists mobile apps as Later) | 2026-11-12 | Answered: the web app is responsive on phones (App Plan 3, approved item 3); native apps stay Later. |
| RQ07 | Add the P01 and P02 exports to the repo | 2026-11-12 | Done: P01 and P02 exports are in `design/exports/` (2026-11-09). |
| RQ09 | Run "design the next page" once in a fresh session to confirm the shortcut loads | 2026-11-06 | [stated] Grant ran "design the next page" and "where were we" in one message on mobile and got both |
| RQ13 | Decision brief I01: e-sign, approvals, PO and invoice tracking (draft D13) | 2026-11-09 | Option C: trusted e-sign platform from the start, behind a thin adapter. Logged in the App Plan memory log. |

## Rules

- Add an item with the "park this idea" or "decision brief" flow, or when a session ends with questions for Grant. Give it the next RQ number and a surface tag.
- Never delete rows. Closing an item moves it to Closed with the date and the answer.
- Items are not approved until Grant answers. Anything drafted by Claude stays marked `Draft (not yet approved by Grant)`.

## Log

- [stated] 2026-11-06: Review queue created with surface tags mobile, code, vscode.
- [stated] 2026-11-06: RQ09 closed; shortcuts confirmed working on mobile.
- [stated] 2026-11-09: RQ14 added for dev and preview access (see design/ISSUES.md DI02).
- [stated] 2026-11-09: RQ15 added for the open development-path decisions.
- [stated] 2026-11-11: RQ16 and RQ17 added after the projects section (P05, P06, P12) was marked complete.
- [stated] 2026-11-09: RQ13 closed with Grant's answer (option C).
- [stated] 2026-11-12: RQ18 added after the page designs were reconciled with the App Plan.
- [stated] 2026-11-12: RQ19 added for the P20 Preferences draft.
- [stated] 2026-11-12: RQ19 closed: P20 approved.
- [stated] 2026-11-12: RQ03 and RQ07 closed during the document review (answered and done).
- [stated] 2026-11-13: RQ20 added for the P22 Help and support draft.
- [stated] 2026-11-13: RQ21 added for the agentic development plan.
- [stated] 2026-11-13: RQ20 moved from Closed back to Waiting (it is still open).
- [stated] 2026-11-13: RQ20 closed: P22 approved with Grant's answers.
- [stated] 2026-11-13: RQ21 now points to the Project Iron repository.
