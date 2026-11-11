# CLAUDE.md — Builder v0.1

Owner: Grant Block (Block Concepts LLC). This workspace is for **system architecture** of designengineering.ai, with focus on Builder and Lite, before the agentic setup is added.

## Start of every session
1. Read `README.md`, then `designengineering-ai-docpack/README.md` (source-of-truth rules).
2. Read `designengineering-ai-docpack/memory/app-plan-memory.md` before proposing a change to any decision.
3. Architecture work centers on App Plan 3.2 (Lite package format) and Section 4 (decision log D1–D12).

## Working rules
- Direct, concise, structured. Propose, get Grant's answer, then edit. No large one-shot rewrites.
- Ask before editing when ambiguous; end replies with the questions that need Grant's input.
- Word files in `docs/word/` win on pricing, levels and numbers. App Plan is the product spec.
- No "~" on numbers. Mark assumptions with (A), placeholders with [brackets].
- Preferred stack (not final): Cloudflare Workers, Next.js + TypeScript, PostgreSQL + Prisma, Clerk, Three.js, Cloudflare R2, Stripe, Claude behind a thin adapter. Electron and llama.cpp are proposed for Lite/Builder (D11, D12).
- Record each approved decision as a dated line in the matching memory log: `- [stated] YYYY-MM-DD: <decision>`. Unapproved ideas start with `Draft (not yet approved by Grant):`. Never delete earlier lines.
- Feature discussions: don't ask about MVP placement unless Grant raises it. Ideas go to `ideas.md` as they come up; most are not MVP.
- The docpack has its own `CLAUDE.md` with rules for editing the Word files and keeping documents in sync; follow it when touching those files.

## Branch sync (do this before any write, without being asked)
Grant does not manage branches. Sessions start on an auto-named branch that may lack work from earlier sessions. Handle it yourself:
1. Run `git fetch --all`.
2. List remote branches with work not in yours: `git branch -r --no-merged HEAD`. Ignore ones with no commits from Grant's sessions.
3. Merge every such branch into your session branch (`git merge origin/<branch>`). Never reset, force-push or delete branches. Resolve conflicts yourself, keeping both sides; renumber your new IDs (I, D, RQ) rather than touching existing ones.
4. IDs (I, D, RQ) are the highest found across all `origin/*` branches plus one.
5. Commit and push to your session branch only. When a session's work is finished, open a pull request into `development` (check for an open one first, and update it instead of opening a duplicate). Never merge it; Grant merges. `main` is for live releases only: never open pull requests into it unless Grant asks. Tell Grant in one line what you merged and from where. Don't ask him which branch.

## Out of scope for now
Application code and agent implementation. Capture designs as docs first.
