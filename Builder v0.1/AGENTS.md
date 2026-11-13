# AGENTS.md — Builder v0.1

Guidance for AI agents working in this workspace. Placeholder: to be expanded when the agentic setup is configured in VS Code.

## Context
Read `CLAUDE.md` and `designengineering-ai-docpack/README.md` first. Same working rules apply to every agent.

## Proposed roles (draft, not yet approved by Grant)
| Agent | Job |
| --- | --- |
| Architect | Drafts and critiques architecture and the D1–D12 decision log |
| Doc sync | Keeps Word files, markdown mirrors, tracker and memory logs consistent |
| Reviewer | Checks changes against the plan: numbers, levels, source-of-truth order |
| Planner: Irileth (Grant, with planning chats) | Owns the plan, feature notes in `design/specs/`, issues and every merge |
| Coder: Hrongar (Claude Fable 5.2 in Claude Code cloud sessions) | Builds one issue per pull request into `development`, with tests; never merges, never touches `main`. See `agentic-dev-plan.md` (Project Iron) |
| Reviewer: Farengar (Claude Opus 5.5, scheduled) | Reviews each pull request against the spec, design system and plan rules |
| Tester: Lydia (Claude Sonnet 5.5, scheduled) | Writes acceptance tests before code; checks previews; sends the morning report |

## Rules for all agents
- Do not edit `docs/word/*.docx` without Grant's approval.
- Do not change pricing, levels or numbers on your own; propose them.
- Log approved decisions in `memory/`; never delete earlier lines.
- Do not commit secrets or customer data.
