# Builder v0.1

Workspace for designing the system architecture of **designengineering.ai** (Block Concepts LLC) and its **Builder** extension, which packages an organization's selected projects into free offline **Lite** zips.

## Layout

| Path | Purpose |
| --- | --- |
| `designengineering-ai-docpack/` | Plan doc pack (SBA business plan, App Plan, tracker, decision logs) |
| `design/` | UI tracker, design system, platform matrix, and the clickable prototype (`design/prototype.html`, pages in `design/exports/`) |
| `snapshot-YYYY-MM-DD.md` | Read-only snapshots of decisions and open items; the newest is the current view |
| `development-path.md` | Plan for building and deploying the app (stack, phases, environments, Cloudflare setup) |
| `shortcuts.md` | Phrases that start workflows (where were we, decision brief, design the next page, ...) |
| `review-queue.md` | Items waiting on Grant, tagged mobile, code or vscode |
| `ideas.md` | Parked ideas, all unapproved |
| `CLAUDE.md` | Instructions for Claude Code in this workspace |
| `AGENTS.md` | Agent roles and rules, for the agentic setup |

## Where to start

1. `designengineering-ai-docpack/README.md` explains which file wins and the product line.
2. `designengineering-ai-docpack/docs/claude-docs/App-Plan.md`, Section 3.2 (Lite package format draft v0.1) and Section 4 (architecture and decision log D1–D12).
3. `designengineering-ai-docpack/docs/claude-docs/Progress-Tracker.md` lists the open items.

## Status

Prototype phase (2026-11-12). Every planned page is designed and wired as a clickable prototype that deploys to Cloudflare Workers. D1 (Cloudflare Workers) and D2 (Next.js + TypeScript) are decided; D3–D12 are open. No application code yet. See the newest snapshot for the current decisions.
