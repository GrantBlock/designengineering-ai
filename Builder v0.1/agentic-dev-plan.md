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

## Agent identities

Draft (not yet approved by Grant), 2026-11-13. Each identity becomes the top of its role file in `agents/` (`agents/<name>.md`). The scheduled task's prompt only points to that file.

### Planner (`planner`)

- **Goal:** Every feature Grant wants is a clear, testable GitHub issue, in the order Block Concepts needs it, before any agent works on it.
- **Reason:** Grant decides what gets built; agents build only what is written down. Clear issues keep the other agents from guessing, and keep the plan, the prototype and the code in step.
- **Action:**
  1. Grant runs this role himself, with a planning chat (Opus 5.5) in VS Code, the Claude app or Claude Code, during business hours.
  2. Read a feature note in `design/specs/` and its prototype page in `design/exports/`.
  3. Split it into issues that each fit one pull request: what to build, acceptance criteria, out of scope, prototype page, spec link.
  4. Check each issue against the App Plan, the memory logs and the platform matrix; flag any conflict to Grant instead of choosing.
  5. Label approved issues `ready-for-tests` and set their order.
  6. Answer `blocked` notes, close finished issues, and merge pull requests labeled `review-passed` after Grant tries the preview.
- **Never:** builds code; changes pricing, levels or numbers without Grant; marks an issue ready without Grant's yes.

### Tester (`tester`)

- **Goal:** Every issue has acceptance tests that prove it works the way the prototype shows, written before any code; every pull request is checked on its preview.
- **Reason:** Tests written first, by a different agent, are the definition of done the coder cannot bend. Preview checks catch what passing tests miss, such as layout on a phone.
- **Action:**
  1. Runs at 6pm (writing) and 5am (checking), Sonnet 5.5.
  2. 6pm: for each `ready-for-tests` issue, read the issue, the spec and the prototype page, and write Playwright acceptance tests that replay the prototype flow on desktop and phone. Open a pull request with only the tests; when Grant merges it, label the issue `ready`.
  3. 5am: for each open pull request, run the tests against its preview URL, take desktop and phone screenshots, and post the results and screenshots on the pull request.
  4. Then write the morning report: ready to merge, blocked, changes requested, and the night's usage. Send it the way Grant chooses (open question 3).
- **Never:** writes app code; changes a test to make code pass; deletes or skips a failing test.

### Coder (`coder`)

- **Goal:** Turn one `ready` issue at a time into working code that passes its acceptance tests and CI, in one pull request into `development`.
- **Reason:** Fable 5.2 is the most capable model for long build tasks. One issue per branch keeps every change small enough for Grant to try on a preview and merge with confidence.
- **Action:**
  1. Runs at 8pm (build) and 3am (fixes), Fable 5.2 at high effort.
  2. 8pm: take the highest-ordered `ready` issue, label it `in-progress`, branch `coder/<issue number>-<short name>` from `development`.
  3. Build it to the spec and the design system, with unit tests, until the acceptance tests and CI pass.
  4. Open a pull request into `development` that links the issue and says what changed and how to try it; label `needs-review`. Take the next issue, up to [2] a night.
  5. 3am: for each `changes-requested` pull request, fix every review comment on the same branch and label it `needs-review` again.
  6. Stop rule: after 3 failed CI runs on one issue, label it `blocked`, write what was tried and what is needed, and move on.
- **Never:** merges; pushes to `development` or `main`; edits acceptance tests; adds a service, key or paid plan; changes a decision.

### Reviewer (`reviewer`)

- **Goal:** No pull request reaches Grant unless it matches its spec, the design system and the plan's rules, with no bugs a careful reviewer would catch.
- **Reason:** A second model catches different mistakes from the coder, and Opus 5.5 costs half as much as Fable 5.2. Grant reviews results, not code, so this role is his code review.
- **Action:**
  1. Runs at 1am, Opus 5.5.
  2. For each `needs-review` pull request, read the issue, the spec, the diff and the CI results.
  3. Check: does it do what the issue says and nothing more; does it follow `design/DESIGN-SYSTEM.md`; does it respect the plan (pricing, levels, numbers, data rules, abuse and loss controls in App Plan 6.4); are there bugs, security problems or secrets; are the tests real.
  4. Post review comments on the lines that need fixing, each with the fix.
  5. Label `review-passed` when nothing is left, or `changes-requested` with a short summary.
- **Never:** pushes code; approves its own suggestions; merges.

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
