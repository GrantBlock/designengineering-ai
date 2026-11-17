# designengineering.ai — Plan Doc Pack

Updated 2026-11-12. Business and product plans for designengineering.ai (Design Engineering AI), a software product developed for and funded by Block Concepts LLC, plus the decision logs behind them. All documents were reconciled on this date.

## Layout

| Path | What it is | Status |
| --- | --- | --- |
| `docs/word/BC-designengineering-ai-SBA-Business-Plan.docx` | Full SBA Business Plan (Block Concepts design system, 22 pages) | **Source of truth** |
| `docs/word/BC-designengineering-ai-SBA-Plan-Summary.docx` | One-page summary of the SBA plan | **Source of truth**; must stay one page |
| `docs/word-markdown/*.md` | Markdown conversions of the two Word files, for reading and diffing | Regenerate after every Word edit |
| `docs/claude-docs/SBA-Business-Plan.md` | Mirror of the Word plan (also live as a Claude Doc) | In sync with Word |
| `docs/claude-docs/App-Plan.md` | Product spec: users, surfaces, Lite package format, architecture, metering, roadmap, risks | Current |
| `docs/claude-docs/Progress-Tracker.md` | Section status, decisions, open items | Current |
| `memory/sba-plan-memory.md` | Commit-style decision log for the SBA plan | Current |
| `memory/app-plan-memory.md` | Commit-style decision log for the App Plan | Current |
| `memory/designengineering-ai-overview.md` | Short product overview | Current |

Live Claude Docs (same content as `docs/claude-docs/`): [SBA Plan](https://claude.ai/artifact/F7KRtPPhBhxZx7ja6idTGU) · [App Plan](https://claude.ai/artifact/GJFsZzYXeMmgkqLCqHciuB) · [Progress Tracker](https://claude.ai/artifact/WTq8q2Xyp8bDZT8RkxPoLz). From now on, the repo is the working copy; the Claude Docs are only updated if Grant asks.

## Source of truth

1. **Word files** (`docs/word/`) win for anything in the SBA plan, especially pricing, levels and numbers.
2. **App Plan** is the product spec. If it disagrees with the Word plan on pricing or levels, the Word plan wins.
3. **Memory logs** record why each decision was made. Read them before changing a decision. Later lines override earlier ones.

## Product line at a glance

| Level / product | Price | Key points |
| --- | --- | --- |
| Basic Viewer | $0 | View, comment and ask questions on shared projects (paid by the owner's wallet); very small general-chat cap from a free pool capped at 5% of Pro revenue; no projects of their own; no storage |
| Starter bundle | $20 / year | Basic Viewer add-on and loss leader: 3 projects, 5 GB (100 MB per file) (A), one-time $5 token credit (A); tokens otherwise from the wallet, no limit |
| Pro | $30 / user / month | Projects and project chat; 20 GB; faster, premium models; 10 active viewers per user; can add extensions |
| Turbo | [$X] / user / month | After infrastructure upgrades; power users who can't justify Enterprise and don't need Team admin |
| Team | $50 / user / month | Pro plus an admin panel and Team settings; 10 active viewers per user; built in year 1, live from year 2 |
| Enterprise | Flat fee + memberships + integrations | Custom implementation by Block Concepts, built on the Builder app; cloud or local |
| Design (extension) | $600 / seat / year | Chat-only 3D designer added to Pro; after the MVP; Basic Viewer and Starter can use it by tokens on a slow queue |
| Builder (extension) | $600 / seat / year | Added to Pro, desktop only; packages an organization's selected projects into a Lite zip; unlimited view-and-chat viewers (fair use); Also share online, off by default; used at Block Concepts in year 1, open sale [TBD] |
| Lite | Free | Opens Builder packages offline; on-device AI; no login; no Block Concepts tokens; phones use the online copy in the main app |

Usage is paid from a prepaid wallet at 3.5× cost. Financials: owner draw is $30k / $60k / $90k. The base case (+5 Pro / month) nets −$105k over three years, and the target case (+12 Pro / month) nets +$25k. Add-ons (SBA 8.2.1, $61.3k) shrink the base-case gap to $43.7k. Token cost is the main unknown (SBA 8.4).

## Changes on 2026-11-12 (page designs reconciled)

- **Levels:** Basic Viewer has no projects of its own; Starter is $20 per year (3 projects, 5 GB, $5 credit); Design and Builder are $600 per year extensions to Pro that ship after the MVP.
- **Loss control:** free usage draws from one pool capped at 5% of Pro revenue; abuse and loss controls in App Plan 6.4; invited viewers are paid by the owner (10 per user on Pro and Team, unlimited with Builder).
- **Roadmap:** the winter build runs the full suite at Block Concepts as its own Enterprise account; the public MVP is a subset without extensions, designed to integrate.
- **App Plan:** MVP rows match the designed pages (Vault, Dashboard, schedules, custom calculators, process configuration, Exports with customer quotes); Organization and project type (Job or Resource) in the data model; Lite on phones through Builder's Also share online.
- **SBA 8.2.1:** total add-ons $61,300; remaining base-case gap $43,700. Summary still one page.

## Changes on 2026-11-05 (reconciliation)

- **Word plan:**
  - Added Turbo as an after-launch level.
  - Defined Basic Viewer as a small AI cap plus a 3-project limit.
  - Lite runs on an on-device model, and Enterprise is built on the Builder app.
  - Fixed the Fortune Business Insights link, which pointed to an e-discovery page.
  - AI provider set to Anthropic Claude.
  - Made the 8.3 launch cost match 7.2.1.
  - Updated the Lite package format status and tech-stack source.
- **Summary:** the levels line now lists Turbo and still fits on one page.
- **App Plan:**
  - Replaced Free / Turbo / Builder / Lite with the Word levels.
  - Added a Builder / Lite / Enterprise section.
  - Added the **Lite package format draft v0.1 (App 3.2)**.
  - Added proposed decisions D11 (desktop shell) and D12 (on-device AI).
  - Removed "~" marks and added risk 12 (on-device performance).
- **SBA Claude Doc:** rebuilt as a mirror of the Word file.
- **Tracker:** added Q12–Q15 and a refreshed list of 18 open items.

## Awaiting Grant's review

- Lite package format draft v0.1 (App 3.2)
- Proposed D11 (Electron) and D12 (llama.cpp with a small open-weight model)
- Team storage of 20 GB per user (assumed)
- The full list of open items is in `docs/claude-docs/Progress-Tracker.md`
