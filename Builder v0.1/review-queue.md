# Review Queue

Everything waiting on Grant, tagged by where it is best handled. The shortcut "what's waiting on me" reads this file.

**Surface tags:** `mobile` = Claude mobile app (reading, ideas, yes/no answers) · `code` = Claude Code session (builds, exports, tests) · `vscode` = Claude in VS Code (architecture, critical decisions, editing files)

**State key:** ☐ Waiting · ◐ Answered, not yet applied · ☑ Closed (move to Closed, never delete)

## Waiting

| ID | Item | Surface | State | Where |
| --- | --- | --- | --- | --- |
| RQ01 | Review the seven shortcuts (where were we, what's waiting on me, park this idea, poke holes in this, decision brief, design the next page, review page) | mobile | ☐ | `shortcuts.md` |
| RQ02 | Approve or reorder the draft page order P03 to P17 | mobile | ☐ | `design/UI-Progress-Tracker.md` |
| RQ03 | Are the mobile pages web-responsive for now? (App Plan lists mobile apps as Later) | mobile | ☐ | `design/UI-Progress-Tracker.md` |
| RQ04 | Add "log it" and "end of day" shortcuts? | mobile | ☐ | `shortcuts.md` log |
| RQ05 | Review the Executive Summary | mobile | ☐ | SBA 1 |
| RQ06 | Read the Lite package format draft v0.1 and give comments (decisions go to RQ10) | mobile | ☐ | App Plan 3.2 |
| RQ07 | Add the P01 and P02 exports to the repo | code | ☐ | `design/exports/` |
| RQ08 | Approve the design system extracted from P01/P02 | code | ☐ | `design/DESIGN-SYSTEM.md` |
| RQ10 | Choose the on-device model and minimum PC spec; Windows only or also macOS; can Lite users add notes | vscode | ☐ | App Plan 3.2, D11 to D12 |
| RQ11 | Make the final picks for decisions D1 to D12 | vscode | ☐ | App Plan Section 4 |
| RQ12 | Share your sales/project process knowledge (the checklist stages for paid projects). Needed before any checklist work on I01 | mobile | ☐ | `ideas.md` I01 |
| RQ13 | Decision brief I01: e-sign, approvals, PO and invoice tracking. Draft D13: signing approach for vendor/customer documents. Options: (A) link-based tracked approval only; (B) link-based first, then a trusted platform adapter for contracts after the March 2027 gate (recommended); (C) trusted platform from the start. "Later" costs little; it stays out of the MVP. Affects Sections 4, 5.1 (finance visibility) and 5.2 (vendor terms), plus risks #4 and #9. Draft (not yet approved by Grant). Grant answered 2026-11-06: option C (trusted platform from the start, chosen for compatibility with his own system requirements); waiting for "log it" | mobile | ◐ | `ideas.md` I01 |

## Closed

| ID | Item | Closed | Answer |
| --- | --- | --- | --- |
| RQ09 | Run "design the next page" once in a fresh session to confirm the shortcut loads | 2026-11-06 | [stated] Grant ran "design the next page" and "where were we" in one message on mobile and got both |

## Rules

- Add an item with the "park this idea" or "decision brief" flow, or when a session ends with questions for Grant. Give it the next RQ number and a surface tag.
- Never delete rows. Closing an item moves it to Closed with the date and the answer.
- Items are not approved until Grant answers. Anything drafted by Claude stays marked `Draft (not yet approved by Grant)`.

## Log

- [stated] 2026-11-06: Review queue created with surface tags mobile, code, vscode.
- [stated] 2026-11-06: RQ09 closed; shortcuts confirmed working on mobile.
