# Development Path

Updated 2026-11-12 · Grant Block. Status: **Draft (not yet approved by Grant)** except where a line says `[stated]`. This is the plan for taking designengineering.ai from designs to a running app. It replaces nothing in the App Plan; it adds the build and deployment path.

## How we build (working agreement)

- **Claude builds, Grant decides.** Claude writes the code, tests, deployment files and documentation to Grant's architecture and instructions. Grant approves decisions and reviews results, not code.
- **Grant services the app himself for the first 3 years (A).** Everything is chosen so one non-developer can run it: mainstream tools, managed services over self-hosted ones, automated checks, and a written runbook.
- **No throwaway work.** No temporary shortcuts that need rebuilding. Data and services sit behind adapters (the plan already does this for the AI provider), so a provider can change without a rewrite.
- **Problems are reported as: item, fix, when it matters.** A limitation is never left as a dead end. Each one on the watch list below has a planned route.
- **Stay current.** Claude checks the current docs for each tool before using it, pins versions, and upgrades on a schedule with the automated checks passing first.

## Approved stack

- [stated] 2026-11-09: D1 Hosting is Cloudflare Workers.
- [stated] 2026-11-09: D2 Web framework is Next.js + TypeScript.
- Next.js runs on Workers through the OpenNext Cloudflare adapter (`@opennextjs/cloudflare`). Draft (not yet approved by Grant).
- D3 to D12 stay open. Database, sign-in, AI, files and payments are added one at a time, each with its own decision.

## Phases

| Phase | What gets built | Done when |
| --- | --- | --- |
| 0. Decisions | App location, styling approach, package manager (see Open decisions) | Grant answers |
| 1. Skeleton | App and `ui` package, Cloudflare config, scripts, CI | Empty app deploys to a preview URL; checks pass on every push |
| 2. Design system as code | Tokens and 22 components from `design/system-kit/` | Components render and match `DESIGN-SYSTEM.md` |
| 3. First pages | P01 and P02 as real routes, data behind interfaces | Grant opens them on desktop and phone from a preview URL |
| 4. Tracker pages | Every page is designed and in the clickable prototype (2026-11-12); Grant reviews it and writes feature changes as md files; then pages are built in the order the Block Concepts prototype needs | Each page built to its approved design and feature notes |
| 5. Services, one at a time | Database (D3), sign-in (D4), AI adapter (D7), files (D9), payments (D10), then the rest | One decision, one service, one working feature at a time |
| 6. Lite desktop app | Lite (P16; D11, D12). Builder (P17) is part of the web app | Needed for Block Concepts' own use and the Lite demo before the MVP release |

Roadmap note ([stated] 2026-11-12): the winter build runs the full suite at Block Concepts as its own Enterprise account, built from the functions Grant needs on his own projects. The public MVP is a subset without extensions, designed on the same system so it integrates later.

## Build automation (Draft (not yet approved by Grant), 2026-11-12)

Roles: **Grant is the planner** (owns the plan, the feature notes and every merge), helped by planning chats like this one. **Claude Fable 5.2 (`claude-fable-5-2`) is the coder**, run in Claude Code cloud sessions on this repository. **CI and a review pass are the checker.** The coder never merges and never touches `main`.

### What Grant does once

1. **Freeze the inputs.** Finish the prototype review and write one feature note per page in `design/specs/` (what changes, what must work, what is out). These become the coder's acceptance criteria.
2. **Answer the build-gating decisions:** D3 to D12 (RQ11), O1 to O3 (RQ15), and preview access (RQ14).
3. **Open the service accounts, in test mode first:** Cloudflare (Workers paid plan, Access, R2), a managed PostgreSQL host, Clerk, Stripe, Liveblocks, Trigger.dev, and an Anthropic API key for the app itself (separate from the Claude Code plan). Keys go into Cloudflare secrets, GitHub Actions secrets and the cloud environment's credentials, never into the repository.
4. **Set up one cloud environment for the repository:** allowed hosts for those services, a setup script that installs dependencies, and the coder model set to Fable 5.2 at high effort (raise to `xhigh` only where a gain is measured).
5. **Protect the branches:** `development` and `main` require passing checks and Grant's approval to merge.
6. **Set spending limits:** a monthly cap for Claude Code usage and a separate hard cap on the app's API key. Fable 5.2 costs $8 per million input tokens and $40 per million output tokens (twice Opus 5.5), so keep it for the build and pick the app's runtime model under D7.

### What the coder builds first (one pull request each)

1. App skeleton on Workers (D1, D2) with CI: type-check, lint, unit tests, a Workers build, and Playwright tests that replay the prototype's flows.
2. A preview URL for every pull request, behind Cloudflare Access.
3. A coder `CLAUDE.md`: rules, the definition of done, and "one feature per pull request into `development`".
4. Design system as code from `design/system-kit/`.

### The loop (runs without Grant except at review)

1. The planner turns each feature note into a GitHub issue with acceptance tests.
2. A coder session (started by hand, on a schedule, or by mentioning Claude on the issue) takes the next issue, builds it on its own branch, and opens a pull request into `development`.
3. CI and a review pass run; the coder fixes failures on its own pull request.
4. Grant opens the preview URL, tries it, and merges or comments.

### Suggested build order (Block Concepts prototype first)

Skeleton and CI; design system; sign-in, organizations and projects with the database; chat through the AI adapter; Vault and uploads (R2); project workspace (Specifications, Layout, Schedule, Exports); Dashboard and updates; wallet and Stripe; Builder; Lite (D11, D12); Design. The public MVP subset is cut from this once Block Concepts runs on it.

## Environments and access

1. **Local.** Development on the main AI computer (Windows with WSL2, per the App Plan).
2. **Preview.** Every pushed branch gets its own Cloudflare preview URL, so Grant can open it from any computer or phone. Previews live on `workers.dev`, not the custom domain, and are protected by a Cloudflare Access login.
3. **Dev address (optional).** A Cloudflare Tunnel on the main computer shows the live dev server at a private address such as `dev.designengineering.ai`, behind the same login. Only works while the main computer is on.
4. **Production.** The custom domain, after launch readiness. Later.

## Cloudflare setup (Grant side)

1. Plan: start on the free Workers plan. Next.js bundles can exceed the free size limit, so the $5 per month paid plan is likely needed (A, check current limits).
2. Connect GitHub: Workers & Pages, Create, Import a repository, install the Cloudflare GitHub app on `grantblock/designengineering-ai`. Build settings are given once the app exists.
3. Login for previews: Zero Trust, create a team, Access policy allowing Grant's email, turn on Access for preview URLs (check the current docs; older and newer preview systems describe it differently).
4. Tunnel: Zero Trust, Networks, Tunnels, create one on the main computer with `cloudflared`, route a `designengineering.ai` subdomain to the local dev server, add an Access policy.

## Open decisions

All Draft (not yet approved by Grant), with Claude's recommendation.

| # | Question | Recommendation |
| --- | --- | --- |
| O1 | Where the app lives in `/designengineering-ai` | Grant needs more time |
| O2 | Styling | Design tokens stay the single source; Tailwind reads them; Radix handles behavior only (menus, dialogs, focus); no hard-coded colors in pages |
| O3 | Package manager | pnpm (faster, stricter, suits more than one package); npm also works |

## Watch list (known items, each with a route)

| Item | Why it matters | Route |
| --- | --- | --- |
| OpenNext adapter maturity | It is the supported path, and Next.js 16.2 added a stable adapter API built with Cloudflare | Pin versions, test the Workers build in CI on every push, upgrade on a schedule |
| Next.js Node middleware not yet supported on Workers | Only matters if a feature needs it | Use supported patterns; recheck docs at each upgrade |
| Windows tooling | Older Cloudflare notes listed gaps | Develop in WSL2 |
| Preview URLs only on `workers.dev`, no logs, no Durable Objects | Limits previews, not production | Use Liveblocks for collaboration (D5); use the dev address for live debugging |
| Database on Workers | Prisma with PostgreSQL needs Cloudflare Hyperdrive and a driver adapter | Settled when D3 is decided |
| Worker size limit | Free plan may be too small | Paid plan if needed; keep heavy work in background jobs (D6) |

## Running it alone for 3 years (A)

Claude sets these up in Phase 1 so they run without Grant:
- Automated checks (type-check, lint, tests, Workers build) on every push, so a broken change never reaches a preview.
- Automated dependency update proposals (Dependabot or Renovate), merged only when checks pass.
- Managed services (Cloudflare, Clerk, Stripe, a managed Postgres) so Grant runs no servers.
- Error and uptime alerts to Grant's email.
- Database backups with a tested restore.
- A runbook in the repo: how to deploy, roll back, rotate a key, restore a backup, and what to ask Claude for each.

## Log

- [stated] 2026-11-09: Development path doc created to store the plan while Grant weighs the full implementation.
- [stated] 2026-11-09: Claude builds as much as possible to Grant's architecture and instructions; Grant services the app himself for the first 3 years (A).
- [stated] 2026-11-09: No temporary shortcuts that need rebuilding later.
- [stated] 2026-11-09: D1 and D2 approved. The VS Code starter prompt is not stored yet.
- Draft (not yet approved by Grant): O1 to O3 above.
- [stated] 2026-11-12: Feature notes live in `design/specs/`, one file per page, like the P08 spec (Grant).
- [stated] 2026-11-12: Coder sessions run on a schedule, to stay within usage limits and leave Grant's normal business hours free for his own work (Grant).
- [stated] 2026-11-12: Grant wants four roles: Planner, Coder, Reviewer and Tester. The coder CLAUDE.md and issue template wait until Grant finishes the prototype review.
