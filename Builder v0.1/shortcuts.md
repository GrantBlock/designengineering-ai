# Shortcuts

Phrases Grant can say to start a workflow. When a message matches a phrase below (exact or close), run the steps without asking what it means.

Rules for all shortcuts: read-only unless the shortcut says it writes. Never change a decision, price, level or number. Propose, get Grant's answer, then edit. Keep replies short enough for a phone. End with the questions that need Grant's input. Mark unapproved ideas `Draft (not yet approved by Grant):`.

Paths below are relative to `Builder v0.1/`. Memory logs are in `designengineering-ai-docpack/memory/`, docs in `designengineering-ai-docpack/docs/claude-docs/`.

## "where were we"

**Description:** Quick catch-up. Reads only.
1. Read `designengineering-ai-docpack/docs/claude-docs/Progress-Tracker.md`, `design/UI-Progress-Tracker.md` and the last 10 commits.
2. Reply in at most five lines: current stage, what changed last, the next open item in each tracker.

## "what's waiting on me"

**Description:** Lists what needs Grant's review or decision, filtered by where he is working. Reads only.
1. Read `review-queue.md`, the Waiting table.
2. Pick the surface: "what's waiting on me on mobile / in code / in vscode" uses that tag. With no surface named, infer it (Claude mobile app = `mobile`, Claude Code session = `code`, Claude in VS Code = `vscode`), and say which one was used.
3. Show that surface's items first, ranked by what blocks the most other work, at most 10, each with a one-line reason and where it lives. Then one line with the counts waiting on the other surfaces.
4. Also flag any `Draft (not yet approved by Grant)` line in the memory logs or `ideas.md` that isn't in the queue, and offer to add it.

## "park this idea"

**Description:** Saves an idea without touching any plan or decision. Writes only to `ideas.md`.
1. Append to `ideas.md` (create it if missing): `- Draft (not yet approved by Grant): YYYY-MM-DD: <idea in Grant's words>`.
2. Reply with one line confirming. Don't expand, evaluate or act on it. Never delete earlier lines.

## "poke holes in this"

**Description:** Critique of an idea or section Grant names (or the last thing discussed). Reads only.
1. Check it against the risks table (App Plan Section 8), the decision log, the source-of-truth order (Word files win on pricing, levels, numbers) and the working rules.
2. Reply with at most five holes, most serious first, each with a suggested fix. No edits.

## "decision brief"

**Description:** One-screen brief on a decision, for a yes, no or later answer. Reads only. Name it like "decision brief D11"; with no name, use the most blocking open decision.
1. Read the decision in `App-Plan.md` Section 4 and `memory/app-plan-memory.md`.
2. Reply with: the question, two or three options with trade-offs, a recommendation, what it affects, and what "later" costs.
3. Do not log anything until Grant answers. After a yes, Grant says "log it" and the answer is recorded as `- [stated] YYYY-MM-DD: <decision>` in the matching memory log.

## "design the next page"

**Description:** Designs the next open page from the UI tracker, matching the design system, and exports it to the repo.

Steps:
1. Read `CLAUDE.md` and `design/README.md`.
2. Open `design/UI-Progress-Tracker.md`. The page is the first row not marked ☑ (or the page Grant names, e.g. "design the next page: P05"). Say which page it is.
3. Read `design/DESIGN-SYSTEM.md` and every file in `design/exports/`. If the design system is still a placeholder, extract it from the P01/P02 exports first and get Grant's approval.
4. Design the page with the Design artifact type (Artifact quickstart, intent "design"). Follow the design system exactly. Ask before adding any new pattern.
5. When Grant approves, export the HTML to `design/exports/<ID>-<name>/`, mark the tracker row ☑ with the export path, and log new design-system decisions as dated lines.
6. Commit and push to the session branch.

## "review page"

**Description:** Checks a finished page against the design system. Reads only. Name it like "review page P03"; with no name, use the most recently exported page.
1. Read the page's folder in `design/exports/` and `design/DESIGN-SYSTEM.md`.
2. Reply with mismatches (colors, type, spacing, components, copy tone), most visible first, each with the fix. Do not edit. If Grant approves a fix, apply it, then say what changed.

## Log

- [stated] 2026-11-06: "design the next page" is the shortcut for the workflow above.
- [stated] 2026-11-06: Shortcuts added: where were we, what's waiting on me, park this idea, poke holes in this, decision brief, design the next page, review page.
- [stated] 2026-11-06: "what's waiting on me" reads `review-queue.md` and filters by surface (mobile, code, vscode).
- Draft (not yet approved by Grant): "log it" and "end of day" shortcuts were suggested but not added.
