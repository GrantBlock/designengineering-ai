# designengineering.ai — Progress Tracker

Nov 5, 2026 · @Grant

**Purpose.** Single place to see where the plan stands. Ask "where were we?" in any session and work resumes from the first open item below.

**Status key:** ☐ Not started · ◐ In progress · ☑ Done

---

## Current Stage

All documents were reconciled on Nov 5, 2026, using the Word SBA plan and summary as the source of truth. That day's decisions:
- Lite runs an on-device AI model.
- Builder is one product: one package per client or site.
- Enterprise is a custom implementation built on Builder.
- Basic Viewer gets a small daily AI cap and up to 3 projects of its own.
- Turbo stays as a power-user level after infrastructure upgrades.

Next: continue in the GitHub repo with Claude Code, starting with a review of the Lite package format draft (App 3.2) and the Executive Summary.

## System Questions

| # | Question | Status |
| --- | --- | --- |
| Q1 | Data classes: public CAD, company-private, shared-on-request | ☑ |
| Q2 | Does an ontology cover data security? (Partly: access control only) | ☑ |
| Q3 | Tenancy: start multi-tenant hosted (A) only; revisit after the app is used more than Claude chat, monday.com, and Onshape | ☑ |
| Q4 | Levels: Basic Viewer, Starter, Pro, Turbo (later), Team on shared cloud; Enterprise = cloud or local, custom implementation through Grant | ☑ |
| Q5 | Legal home: inside Block Concepts LLC, which funds development (time + expense) as an investment | ☑ |
| Q6 | Core engine split by level: shared-cloud levels pay for CAD generated in-app; Enterprise drives SolidWorks/Onshape across multiple workstations | ☑ |
| Q7 | Build order: MVP is a simple chat with a model; core tools first, outside tools (scan-to-CAD, photogrammetry) recommended until built | ☑ |
| Q8 | AI provider: Anthropic Claude behind a thin adapter (OpenAI, Google Gemini as alternatives) | ☑ |
| Q9 | Domains: one app on designengineering.ai (uploads, chat, 3D) | ☑ |
| Q10 | Billing: pay-as-you-go tokens via prepaid wallet with optional auto-refill; postpaid later for Enterprise | ☑ |
| Q11 | Help and reference library at docs.designengineering.ai; designengineering.info redirects there | ☑ |
| Q12 | Lite chat: small on-device AI model, no Block Concepts tokens | ☑ |
| Q13 | Builder: one product; packages one Lite zip per client or site; Enterprise is a custom implementation built on Builder | ☑ |
| Q14 | Basic Viewer: small daily AI cap paid by Block Concepts; up to 3 projects of their own; storage only through Starter | ☑ |
| Q15 | Turbo: kept for power users who can't justify Enterprise and don't need Team admin; after infrastructure upgrades | ☑ |

## SBA Business Plan

| # | Section | Status |
| --- | --- | --- |
| 0 | Lean Canvas Snapshot | ☑ |
| 1 | Executive Summary | ◐ (drafted, awaiting review) |
| 2 | Company Description | ☑ |
| 3 | Market Analysis | ◐ (serviceable market to size) |
| 4 | Organization & Management | ☑ |
| 5 | Product / Service Line | ◐ (Turbo and Starter prices open) |
| 6 | Marketing & Sales | ◐ (Builder open-sale timing open) |
| 7 | Funding Request (incl. cost basis by phase) | ◐ (placeholders until scaling) |
| 8 | Financial Projections | ◐ (token cost to measure in MVP) |
| 9 | Appendix (running list) | ◐ |

## App Plan

| # | Section | Status |
| --- | --- | --- |
| 1 | Problem & Target Users | ☑ |
| 2 | Product Definition | ☑ |
| 3 | Platform & Delivery Surfaces | ◐ (3.2 Lite package format draft v0.1 awaiting review) |
| 4 | Technology Architecture & Decision Log (final picks D1–D12 during build) | ◐ |
| 5 | Data Security & Customer IP (deferred; data use policy added; sign-in = Clerk) | ◐ |
| 6 | Usage Metering & Token Model (rates set after MVP cost testing) | ◐ (Turbo, Starter, Team storage open) |
| 7 | Roadmap & Winter Milestones | ☑ |
| 8 | Risks & Mitigations | ☑ |

## Fill Order

Completed in order: system questions; SBA 2, 4, 7, 9 (running); App 3, 6, 2; SBA 5; App 1; SBA 3, 6; App 7; SBA 8; App 8; SBA 0, 1; App 4 (draft); Word versions of the SBA plan and summary (Nov 5); full reconciliation of all docs (Nov 5).

## Open Items for Next Session

| # | Item | Where |
| --- | --- | --- |
| 1 | Review the Executive Summary | SBA 1 |
| 2 | Review the Lite package format draft v0.1 | App 3.2 |
| 3 | Choose the on-device model and minimum PC spec; Windows only or also macOS; can Lite users add notes | App 3.2, App 4 (D11–D12) |
| 4 | Set Turbo price and included storage | SBA 5.2, App 6.1 |
| 5 | Set Starter bundle price and contents (now [$20] with [$10] of tokens and 20 GB) | SBA 5.2, App 6.1 |
| 6 | Confirm Team storage per user (assumed 20 GB) | App 6.1 |
| 7 | Set Builder open-sale timing | SBA 6.2, App 7 |
| 8 | Choose the founder-built paid feature that closes the $37,000 base-case gap (Team or Builder are candidates) | SBA 8.2.1 |
| 9 | Calibrate wallet rates, the Basic Viewer daily cap, and its [X%] of Pro revenue limit from MVP cost testing | App 6, SBA 8.4 |
| 10 | Pick the final stack during the winter build and fill the Decision Log | App 4 (D1–D12) |
| 11 | Confirm Anthropic Claude API data terms | App 4.1, SBA 9.2 |
| 12 | Security decisions: file retention after cancellation, U.S.-only hosting, multi-factor sign-in timing, package signing | App 5 |
| 13 | Draft the Builder license agreement and terms of service; get a code-signing certificate | SBA 9 |
| 14 | Fill SBA 7 placeholders when scaling begins: investment to date, use-of-funds shares, selected structure | SBA 7 |
| 15 | Confirm or add technology errors-and-omissions insurance | App 8 |
| 16 | Get written approval from Automation Components, Flex-line Automation, and C3 Engineered Solutions | SBA 6 |
| 17 | Size the serviceable market from the Kansas City manufacturer directory | SBA 3.3 |
| 18 | Confirm "To confirm" installs in the tech stack workbook (GitHub CLI, Claude Code, WSL2, PostgreSQL, and others) | Tech stack workbook |

## Documents

| Document | Link |
| --- | --- |
| SBA Business Plan (Word, source of truth) | `docs/word/BC-designengineering-ai-SBA-Business-Plan.docx` in the repo |
| SBA Plan Summary (Word, one page) | `docs/word/BC-designengineering-ai-SBA-Plan-Summary.docx` in the repo |
| SBA Business Plan (Claude Doc mirror) | [Open](https://claude.ai/artifact/F7KRtPPhBhxZx7ja6idTGU) |
| App Plan | [Open](https://claude.ai/artifact/GJFsZzYXeMmgkqLCqHciuB) |
| Progress Tracker | This document |
| SBA Plan memory and App Plan memory | `memory/` in the repo, and in Claude's memory as decision logs |
