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
- The docpack has its own `CLAUDE.md` with rules for editing the Word files and keeping documents in sync; follow it when touching those files.

## Out of scope for now
Application code and agent implementation. Capture designs as docs first.
