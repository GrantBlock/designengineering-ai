# Agentic Development Plan

Updated 2026-11-13 · Grant Block. **Draft (not yet approved by Grant)** except lines marked `[stated]`. Written for Claude in VS Code: open this file, then paste the starter prompt at the bottom.

Related: `development-path.md` (Build automation section), `AGENTS.md` (roles), `CLAUDE.md` (working rules), `review-queue.md` (RQ21).

## Decided so far

- [stated] 2026-11-12: Feature notes live in `design/specs/`, one file per page, like `P08-3D-Designer-Spec.md`.
- [stated] 2026-11-12: Agent sessions run on a schedule, to stay within usage limits and keep Grant's business hours free.
- [stated] 2026-11-12: Four roles: Planner, Coder, Reviewer, Tester.
- [stated] 2026-11-12: The coder `CLAUDE.md` and the issue template wait until Grant finishes the prototype review.
- [stated] 2026-11-09: Claude builds; Grant decides and reviews results, not code. No throwaway work.

## Roles

| Role | Who | Model (A) | Job | Hands off with |
| --- | --- | --- | --- | --- |
| Planner | Grant, with planning chats | Claude Opus 5.5 | Turns each feature note into GitHub issues with acceptance criteria; answers questions; merges | Label `ready-for-tests` |
| Tester | Scheduled cloud session | Claude Sonnet 5.5 | Writes acceptance tests from the spec before any code (Playwright, replaying the prototype flow); later checks the preview and posts screenshots | Tests merged, label `ready` |
| Coder | Scheduled cloud session | Claude Fable 5.2 (`claude-fable-5-2`), high effort | Builds the next `ready` issue on its own branch until the tests pass; one pull request into `development` | Label `needs-review` |
| Reviewer | Scheduled cloud session | Claude Opus 5.5 | Checks the pull request against the spec, `design/DESIGN-SYSTEM.md` and the plan's rules (pricing, levels, numbers, source-of-truth order) | Label `review-passed` or `changes-requested` |

Why tests first: the coder cannot weaken them. The acceptance-test folder needs Grant's approval for any change (CODEOWNERS plus branch protection).

Why a different reviewer model: a second model catches different mistakes, and Opus 5.5 costs half of Fable 5.2 ($4 / $20 against $8 / $40 per million input / output tokens).

## Hand-off labels (the state machine)

`spec` → `ready-for-tests` → `ready` → `in-progress` → `needs-review` → `changes-requested` or `review-passed` → Grant merges. `blocked` means an agent stopped and left a note.

## Nightly schedule (example: Central time, business hours 7am to 6pm; to confirm)

| Time | Role | Does |
| --- | --- | --- |
| 7am to 6pm | None | Grant's hours: prototype review, planning chats, merges |
| 6pm | Tester | Writes tests for new `ready-for-tests` issues |
| 8pm | Coder | Builds up to [2] `ready` issues, one at a time |
| 1am | Reviewer | Reviews every `needs-review` pull request |
| 3am | Coder | Fixes `changes-requested` pull requests |
| 5am | Tester | Checks preview URLs, posts screenshots and test results |
| 6:30am | Report | One message: ready to merge, blocked, cost of the night |

## Rules for every agent

- Never merge, never push to `development` or `main` directly, never touch `main`.
- One coder at a time, one issue per branch, one pull request per issue.
- Stop rule: after 3 failed CI runs on one issue, label it `blocked`, write what was tried, move on.
- No secrets in the repository. Keys live in Cloudflare secrets, GitHub Actions secrets and the cloud environment's credentials.
- Follow `CLAUDE.md`: propose before changing a decision; never change pricing, levels or numbers; mark assumptions (A).
- Spending caps: a monthly cap for Claude Code usage and a separate hard cap on the app's Anthropic API key.

## Files to add (one approval each)

| Path | What |
| --- | --- |
| `agents/planner.md` | How to turn a feature note into issues; issue format |
| `agents/tester.md` | How to write acceptance tests from a spec; preview checks |
| `agents/coder.md` | Definition of done; branch and pull request rules; stop rule |
| `agents/reviewer.md` | Review checklist (spec, design system, plan rules, tests) |
| `.github/ISSUE_TEMPLATE/feature.md` | Spec link, acceptance criteria, out of scope, prototype page |
| `.github/CODEOWNERS` | Acceptance tests need Grant's approval |
| Coder `CLAUDE.md` (in the app folder, O1) | After the prototype review |

Each scheduled task's prompt is one line, for example "Read `Builder v0.1/agents/coder.md` and follow it." Changing a role means editing its file in VS Code, not the schedule.

## Setup steps for Grant (in order)

1. [ ] Finish the prototype review; write feature notes in `design/specs/`, one file per page.
2. [ ] Answer the build-gating decisions: RQ11 (D3 to D12), RQ15 (O1 app location, O2 styling, O3 package manager), RQ14 (preview access).
3. [ ] Open service accounts in test mode: Cloudflare (Workers paid plan, Access, R2), managed PostgreSQL, Clerk, Stripe, Liveblocks, Trigger.dev, Anthropic API key for the app.
4. [ ] Set spending caps (Claude Code usage; the app's API key).
5. [ ] Approve the cloud environment for this repository (allowed hosts, setup script); proposed from a Claude Code session.
6. [ ] Protect `development` and `main`: passing checks and Grant's approval to merge.
7. [ ] Approve the files above (role files, labels, issue template, CODEOWNERS), then the coder `CLAUDE.md`.
8. [ ] Dry run: one night, Coder only, on the "skeleton and CI" issue; Grant checks the result in the morning.
9. [ ] Turn on the Tester and Reviewer, then the full schedule and the morning report.

## First issues (build order, Block Concepts prototype first)

1. App skeleton on Cloudflare Workers (D1, D2), CI (type-check, lint, unit tests, Workers build, Playwright), preview URL per pull request behind Cloudflare Access.
2. Design system as code from `design/system-kit/`.
3. Sign-in, organizations and projects, with the database.
4. Chat through the AI adapter (D7).
5. Vault and uploads (R2).
6. Project workspace: Specifications, Layout, Schedule, Exports.
7. Dashboard and updates.
8. Wallet and Stripe.
9. Builder, then Lite (D11, D12), then Design.

## Open questions for Grant

1. Business hours and time zone (Central, 7am to 6pm?).
2. Issues per night for the coder (start with 2?).
3. Morning report by phone notification, email, or a comment on a "Nightly report" issue?
4. Approve role files in `agents/` and labels as the hand-off?

## Starter prompt for Claude in VS Code

Paste this into the Claude panel in VS Code with the repository open:

```
Read Builder v0.1/CLAUDE.md, then Builder v0.1/agentic-dev-plan.md and Builder v0.1/development-path.md.
I am the Planner. Help me work through the "Setup steps for Grant" in agentic-dev-plan.md, one at a time, starting with the first unchecked step.
For each step: tell me what I do and what you will draft, propose before editing, and end with the questions you need from me.
Do not create the role files, labels or scheduled tasks until I approve them. Log each approval as a dated [stated] line in this file.
```
