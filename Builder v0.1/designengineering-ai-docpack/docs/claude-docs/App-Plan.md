# designengineering.ai — App Plan

Nov 5, 2026 · @Grant · Block Concepts LLC

**Purpose.** This document defines the product: what it does, how users reach it, how it is built, and how customer data is protected. It is the SaaS companion to the SBA Business Plan. Industry-standard practices are assumed throughout; where a choice needs specialist input, the section says so and frames it as a plain decision for the business owner.

**Product in one line.** A tailored AI assistant for creating, handling, and discussing 3D design, machine information, data sheets, and process logic, with a built-in digital twin viewer. It starts with automation design; other design industries follow once that core is functioning.

**How to use.** Sections are filled one at a time in the order set by the Progress Tracker. Each section opens with a short guide line (in italics) stating what belongs there. Where this plan and the SBA Business Plan (Word) disagree on pricing or levels, the SBA Word file wins.

---

## 1. Problem & Target Users

### 1.1 Core Problem

Project and equipment knowledge is scattered across emails, conversations, printouts, ERP notes, Excel BOMs, file folders, SOLIDWORKS PDM, MS Project, monday.com, Google Drive, SharePoint, OneDrive, text messages, and facility scans held in Matterport or scanner cloud services. Work still gets done without one place for it, the way work got done by email and phone before instant messaging, but it costs time, quality, and worker well-being.

**Failures this causes (priority order)**

| # | Failure | What it looks like |
| --- | --- | --- |
| 1 | Miscommunication | Information doesn't make it between shifts, roles, or people |
| 2 | Non-value-add work | Searching for manuals, drawings, part numbers, and answers instead of doing the work |
| 3 | Key-person dependence | Only one person knows how a machine was built or changed |
| 4 | Interruptions and urgencies | Engineers and managers pulled off planned work for urgent questions |
| 5 | Access gap | Technicians and managers can't open CAD or PDM files without a license and training |

**Example:** A day-shift manager doesn't pass along an update because someone arrives a few minutes late to the shift handoff. Night shift doesn't know a piece of equipment is cleared to run, so it sits idle and a full 8-hour shift is lost. With the app, night shift asks and gets the answer from the project's notes.

**Value approach:** the goal is better quality of work and well-being for workers, not replacing staff or a cost-savings calculation.

**Positioning:** Design Engineering AI, the first turnkey app purpose-built for multi-disciplinary design engineering.

### 1.2 Target Users (priority order)

| Priority | Group | Today's pain | What they use the app for |
| --- | --- | --- | --- |
| 1 | Maintenance technicians | Manuals lost or hard to find; can't see the design intent of custom equipment; rely on the one person who knows the machine; wait on engineering for small design questions | Self-service design engineering support: ask about a machine and get answers from its manuals and models, view it in 3D, log notes, and produce simple plans and vendor requests |
| 2 | Design engineers | Hunting vendor sites and PDFs for dimensions and data sheets; rebuilding plans and vendor requests by hand; notes scattered across tools | A professional-level workspace per project: document search, calculators, process flows, plans and vendor requests from project data |
| 3 | Engineering managers | No single view of project status; can't open CAD without a license | Project tracking, the 3D viewer, quick answers from project files |

**Expansion groups:** purchasing (vendor requests), automation engineers, manufacturing engineers, and robot programmers; later, quality and process engineers.

**Target team:** technical teams of typically 12 or fewer, at a small operation or a large one with a small technical staff (SBA 3.5).

### 1.3 Adoption Path

1. A maintenance technician joins as a Basic Viewer to see a shared project, or opens a Lite package a supplier or integrator sent.
2. The technician adds a Starter bundle to get answers for their own equipment, and shows the design engineers.
3. A design engineer moves to Pro and owns the projects; the rest of the team joins as Basic Viewers through collaborator mode.
4. Power users who need more speed move to Turbo; teams that need to control access move to Team; larger or custom deployments move to Enterprise.

### 1.4 Origin

Grant Block built this after setting up general AI tools himself, on his own time: environment settings, instructions, and output expectations, to make them useful for design engineering work. Customers shouldn't have to do that. Design Engineering AI arrives with that setup already done: turnkey, plug-and-play for manufacturing teams. The working chat MVP is the feeder that brings in users before CAD generation launches.

## 2. Product Definition

A place for design to live: project files, data sheets, and dimensions in one workspace, with an AI assistant that turns them into models, plans, drawings, and vendor requests. It is Block Concepts' own design process, automated and made widely available.

**MVP (winter build)**

| Capability | What it does |
| --- | --- |
| AI chat | Discuss the project with an AI that knows its files and data sheets |
| Uploads | STEP, OBJ, photos, data sheets, and manuals |
| Document search | Find answers in manuals and data sheets |
| 3D viewer | View and rotate uploaded models (digital twin) |
| Project document storage | PLM-style project file storage, organized by project |
| Project notes and tracking | Running notes, tasks, and status per project |
| Chat-enabled calculators | Engineering calculations run from the chat |
| Process flows | Build and discuss process flows inside a project |
| Outside tool recommendations | Points users to established tools for needs not yet built (see 2.1) |
| Plans and vendor requests | Generate project plans and vendor request documents from project data |
| Builder and Lite (Block Concepts use) | Builder packages a client's or site's technical documentation into a Lite zip; Lite opens it offline with a 3D viewer, document search, and on-device chat (see 3.2) |

**Later**

| Capability | Notes |
| --- | --- |
| CAD generation | First milestone: spacer-class part model and drawing (the defining test); paid by usage from a wallet or Starter bundle |
| Drawings | After CAD generation |
| Drive SolidWorks / Onshape | Enterprise |
| Scan-to-CAD, photogrammetry | Recommended outside tools first (see 7.1) |
| FDA-compliant / cGMP documentation add-ons | Add-on for regulated customers; requires audit trails, electronic signatures, and validation (see Section 5) |
| Operations escalations | Operators log exactly what they saw and did before maintenance arrives |
| PLC coding | Future design category: controls programming |
| Electrical schematics | Future design category: electrical design |
| Builder open sale | Builder is used at Block Concepts and its customers in year 1; open sale to suppliers, OEMs, and integrators at [timing TBD] |
| Facility scan links | Connect to facility scans where they already live (Matterport or scanner cloud services) instead of storing them in the app |

**Builder, Lite, and Enterprise**

One product line, three roles:

| Product | What it is | Who uses it |
| --- | --- | --- |
| Builder | Desktop app that packages technical documentation into Lite zips, one package per client or site; a builder managing many clients manages many packages | Block Concepts first; later suppliers, OEMs, integrators, and plant teams ($600 / seat / year) |
| Lite | Free desktop app that opens Builder packages offline, with an on-device AI model; no login, no Block Concepts tokens | Anyone who receives a package: customer staff, technicians, prospects |
| Enterprise | A custom implementation built on the Builder app, delivered by Block Concepts as cloud or local | Larger teams with their own IT, PDM / PLM, or regional purchasing needs |

**Accounts and licenses**

Each person uses one license. A collaborator mode lets users work together on shared projects, so the number of users and the number of companies are tracked separately. Enterprise accounts pay a flat fee plus per-user memberships, plus custom features and integrations (such as Onshape or SolidWorks).

**Collaborator mode** (modeled on Onshape sharing and publications)

| Rule | Detail |
| --- | --- |
| Who can join | Anyone with a Basic Viewer account (or higher), invited by the project owner |
| Where the data lives | With the owner; shared projects count against the owner's storage, not the guest's |
| Access levels | Owner sets view, comment, or edit per project |
| AI | Basic Viewers get a small daily AI cap paid by Block Concepts; beyond it, they use a Starter bundle or their own wallet |
| Project limit | A Basic Viewer can create up to 3 projects of their own; shared projects do not count |

*Example team: one engineer on Pro owns the projects; six maintenance staff collaborate on Basic Viewer accounts and buy Starter bundles or fund their own wallets when they need more than the daily cap.*

**Data storage approach**

Block Concepts does not aim to be a large data host. Small teams pay a flexible premium for storage blocks; larger teams are steered to Enterprise, where their data lives in their own cloud or on-site.

**Regional purchasing**

Purchasing and vendor requests are often regional, so each Enterprise instance carries its own regional vendor list. The public web app assumes a global audience.

### 2.1 Tool Recommendation Policy

*Core tools first. For needs the app does not yet cover, the assistant recommends established outside tools until a native feature is justified by usage.*

## 3. Platform & Delivery Surfaces

One application at designengineering.ai, reached through several surfaces. The help and reference library lives at docs.designengineering.ai, with designengineering.info redirecting there.

| Surface | Purpose | Levels | Ship order |
| --- | --- | --- | --- |
| Web app | Main interface: chat, uploads (STEP, OBJ, photos), 3D viewer, project notes and tracking | All | 1 (MVP) |
| Lite and Builder (desktop downloads) | Builder writes packages; Lite opens them offline with on-device chat | Lite: anyone. Builder: subscribers | MVP, Block Concepts use; open sale [timing TBD] |
| Docs library | How-to guides, reference material, general use; also bundled inside Lite | Public | 2 |
| Desktop app | Local file access and extensions; required to connect SolidWorks | Pro, Turbo, Team, Enterprise | 3 |
| API | Programmatic access from customer systems | Pro, Turbo, Team, Enterprise | 4 |
| CLI | Use from other business AIs and developer tools | Pro, Turbo, Team, Enterprise | 5 |
| Android / iOS | Field and maintenance access: view models, ask questions, add notes | All | 6 |

**CAD connection by level**

| Level | CAD approach | How it connects |
| --- | --- | --- |
| Basic Viewer (with Starter or wallet), Pro, Turbo, Team | CAD generated inside the app, paid by usage | Web app |
| Enterprise | Drives the customer's SolidWorks or Onshape across multiple workstations | Onshape: cloud API. SolidWorks: desktop add-in on each workstation, each with its own CAD license |

### 3.1 Deployment Modes

| Mode | Levels | Where it runs | Notes |
| --- | --- | --- | --- |
| Shared cloud (multi-tenant) | Basic Viewer, Pro, Turbo, Team | Cloudflare | Starting mode; all customers on one system, separated by software rules |
| Lite package | Lite (packages from Builder) | Recipient's own computer | Offline; on-device AI; no login; no Block Concepts tokens |
| Enterprise cloud | Enterprise | Dedicated cloud setup | Custom implementation by Block Concepts, built on the Builder app |
| Enterprise local | Enterprise | Customer's own hardware | Custom implementation by Block Concepts, built on the Builder app; AI requests still leave the site unless a local model is used |

Other modes are revisited once Grant Block uses the app more than his current tools (Claude chat, monday.com, Onshape).

### 3.2 Lite Package Format (draft v0.1, for Grant's review)

*Draft. Builder writes this; Lite reads it. Versioned so older packages keep opening after updates.*

| Path in the zip | Contents | Required |
| --- | --- | --- |
| `manifest.json` | Format version, package ID, title, client or site, built-by organization, build date, Builder version, and a SHA-256 hash for every file | Yes |
| `cover.pdf` | Human-readable cover sheet: what the package covers, who built it, contact, revision | Yes |
| `models/` | Source CAD (STEP, OBJ) plus viewer-ready GLB files Builder converts for fast loading | If models exist |
| `docs/` | Manuals, data sheets, drawings, procedures (PDF) | Yes |
| `notes/` | Project notes and handoff logs (Markdown) | Optional |
| `index/` | Search index and embeddings Builder pre-computes, so Lite can search and chat without the cloud | Yes |
| `signature.sig` | Builder's signature over `manifest.json`, so Lite shows who built the package and flags tampering | Yes |

**Rules**

- Lite opens packages read-only; it never uploads package content.
- The on-device AI model ships with the Lite installer or downloads on first run, never inside each package.
- A lapsed Builder subscription does not stop existing packages from opening.
- Renewing Builder includes package-format updates; Lite reads every older format version.

**Open questions:** on-device model choice and minimum PC spec; Windows only or also macOS; whether Lite users can add their own notes back into a package.

## 4. Technology Architecture & Decision Log

Source: Grant Block's Tech Stack workbook (November 2026). The final stack is chosen during the winter build. Each layer lists a preferred option and alternatives to show flexibility; costs are general ranges for planning, marked (A) where assumed.

**Development environment (machine installs, Windows)**

| Tool | Purpose | Status |
| --- | --- | --- |
| Git, GitHub CLI, GitHub Desktop | Source control (code repository on GitHub) | Git installed; CLI and Desktop to confirm |
| Visual Studio Code | Code editor | Installed |
| Node.js (LTS) | JavaScript runtime, includes npm | Installed |
| Docker Desktop with WSL2 | Containers; local database and services | Docker installed; WSL2 to confirm |
| Claude Desktop, Claude Code (CLI) | AI-assisted development | Desktop installed; CLI to confirm |
| PowerShell 7, Python 3 | Scripting | To confirm |
| PostgreSQL 17 | Local development database (or run in Docker) | To confirm |

**Application stack (per project)**

| Layer | Role in Design Engineering AI | Preferred | Alternatives | Est. cost at start | Est. cost at growth |
| --- | --- | --- | --- | --- | --- |
| Web framework | Web app and docs library | Next.js + React + TypeScript | Remix / React Router, SvelteKit | $0 (open source) | $0 |
| Styling | Interface components | Tailwind CSS + shadcn/ui | Material UI, Chakra UI | $0 | $0 |
| Hosting | Runs the app | Cloudflare Workers | Vercel, Netlify | $0 | $5–20 / month |
| Database | Projects, notes, users, wallet records | PostgreSQL + Prisma | Supabase, Neon, Cloudflare D1 | $0 (free tier) | $25 / month (A) |
| Sign-in | User accounts | Clerk | Supabase Auth, Auth.js, Auth0 | $0 (free tier) | $25 / month |
| Real-time collaboration | Collaborator mode | Liveblocks | Cloudflare Durable Objects, Supabase Realtime | $0 (free tier) | $30 / month |
| Background jobs | File processing, document generation | Trigger.dev | Inngest, Cloudflare Queues | $0 (free tier) | $10–20 / month |
| File storage | Uploads and project documents | Cloudflare R2 | Amazon S3, Supabase Storage | $0 (free tier) | Under $5 / month at early volume (A) |
| 3D viewer | Model viewing in app and Lite | Three.js | Babylon.js, Online3DViewer | $0 (open source) | $0 |
| AI provider | Chat, search, generation (cloud) | Anthropic Claude (behind an adapter) | OpenAI, Google Gemini | Capped testing budget ($50–100 / month) | Passed through the wallet |
| Desktop shell (A, proposed) | Lite, Builder, and the desktop app | Electron | Tauri | $0 (open source) | Code-signing certificate (A) |
| On-device AI (A, proposed) | Lite chat with no cloud tokens | Small open-weight model run with llama.cpp | ONNX Runtime, Ollama | $0 (open source) | $0 |
| Payments and wallet | Memberships, wallet, storage blocks, Builder seats | Stripe | Lemon Squeezy, Paddle | $0 base | 3% of revenue (A) |
| Code review | Automated review on GitHub | CodeRabbit | GitHub Copilot code review | $0 (A) | Per seat (A) |
| **Total (planning)** |  |  |  | **$60–120 / month** | **$265–325 / month + 3% of revenue at launch (SBA 7.2.1)** |

### Decision Log

Filled in during the winter build as each final choice is made.

| # | Layer | Preferred | Final choice | Decided on | Reason |
| --- | --- | --- | --- | --- | --- |
| D1 | Hosting | Cloudflare Workers |  |  |  |
| D2 | Web framework | Next.js + TypeScript |  |  |  |
| D3 | Database | PostgreSQL + Prisma |  |  |  |
| D4 | Sign-in | Clerk |  |  |  |
| D5 | Real-time collaboration | Liveblocks |  |  |  |
| D6 | Background jobs | Trigger.dev |  |  |  |
| D7 | AI provider | Anthropic Claude (behind an adapter) |  |  |  |
| D8 | 3D viewer | Three.js |  |  |  |
| D9 | File storage | Cloudflare R2 |  |  |  |
| D10 | Payments and wallet | Stripe |  |  |  |
| D11 | Desktop shell (Lite, Builder) | Electron (proposed) |  |  |  |
| D12 | On-device AI runtime and model (Lite) | llama.cpp + small open-weight model (proposed) |  |  |  |

### 4.1 AI Model Strategy

Build on an existing AI model through its API; do not train an own model. Anthropic Claude is the cloud provider, kept behind a thin adapter so a second provider or a local model (for Enterprise local) can be added without a rebuild. Lite uses a small on-device model instead, so packages cost Block Concepts no tokens. Every cloud request is logged with model, task type, tokens, and cost to set wallet rates (Section 6). Confirm Anthropic's commercial API data terms (no training on customer data, retention limits) before launch.

### 4.2 Data Model & Ontology

PostgreSQL, accessed through Prisma, stores the core objects: Company, User, Project, Document, Model (3D file), Note, Task, Plan, Vendor Request, Wallet transaction, and Builder package. Each object carries an owner and an access level (view, comment, edit), which is the access-control layer behind collaborator mode and the Team admin panel. Files themselves sit in file storage (D9), with the database holding their records and links. Facility scans stay in Matterport or scanner cloud services and are linked, not copied.

### 4.3 3D / CAD Data Pipeline & Viewer

Uploads (STEP, OBJ, photos, data sheets) go to file storage; a Trigger.dev background job prepares each file for viewing and search. The 3D viewer (Three.js preferred, D8) displays models in the browser and in Lite. Builder runs the same preparation locally and writes the results into a Lite package (3.2). CAD generation (spacer-class parts first) comes after the MVP.

## 5. Data Security & Customer IP

*How customer data is protected, surface by surface.*

**Data use policy:** the product is built from Block Concepts source document templates and publicly available resources. From customers, only usage patterns are collected to refine the product; customer files and project content are not used to build or train it. Lite packages stay on the recipient's computer and are never uploaded. Enterprise local deployments are custom implementations with their own data guidelines, set per contract.

### 5.1 Data Classification

*Public, company-private, and shared-on-request data, and the rules for each.*

### 5.2 Security Controls

*Encryption, tenant isolation, sign-in, AI provider terms, retention and deletion, package signing, compliance, incident response.*

## 6. Usage Metering & Token Model

Two separate charges, modeled on performance-tier memberships such as NVIDIA GeForce NOW:

- **Membership** buys a performance level and features.
- **Wallet** pays for usage. Every level, including Basic Viewer, can fund a wallet and pay for usage.

Builder and Lite sit outside this model: Builder is an annual seat license and Lite is free with no tokens.

### 6.1 Membership Levels

Prices match SBA Section 5.2.

| Level | Available | Price | Performance | Features | Storage |
| --- | --- | --- | --- | --- | --- |
| Basic Viewer | Launch | $0 | Standard speed and models; small daily AI cap paid by Block Concepts | Web app; view and comment on shared projects; collaborator mode; up to 3 projects of their own (shared projects do not count) | None |
| Starter bundle | Launch | [$20] per bundle (A) | As Basic Viewer | Add-on for Basic Viewer: [$10] of wallet tokens plus storage, to use the tools without Pro | 20 GB |
| Pro | Launch | $30 / user / month | Faster responses, priority access, premium models | Web app plus desktop app with extensions; collaborator mode | 20 GB included; each additional 20 GB is $10 / month |
| Turbo | After infrastructure upgrades | [$X] / user / month | Much faster than Pro | Everything in Pro; for power users who can't justify Enterprise and don't need Team admin controls | [X] GB included; each additional 20 GB is $10 / month |
| Team | Built in year 1, live from year 2 | $50 / user / month | As Pro | Everything in Pro plus an admin panel: add and remove people, set roles and permissions on shared projects | 20 GB per user (A); each additional 20 GB is $10 / month |
| Enterprise | Custom implementation | Flat fee + per-user memberships + custom features and integrations | Dedicated cloud or local deployment | Built on the Builder app; all surfaces, plus Onshape / SolidWorks integration | Customer's own cloud or site |
| Builder | Year 1 at Block Concepts; open sale [timing TBD] | $600 / seat / year, annual subscription (A) | Runs locally | Packages documentation into Lite zips, one per client or site; renewal covers updates, package-format updates, and support; any packaging AI use is paid from the subscriber's wallet | On the subscriber's computer |
| Lite | With Builder | Free download | On-device AI; no Block Concepts tokens | Opens Builder packages: 3D viewer, document search, local chat, docs library; no login | Package files on the recipient's computer |

*Storage is sold in 20 GB blocks. Raw object storage (Cloudflare R2) costs about $0.015 per GB per month, so a 20 GB block costs about $0.30 per month to provide. Basic Viewer accounts get storage only through a Starter bundle, which makes Pro ($30 with 20 GB included) the better value for anyone storing work regularly. Turbo pricing is set in SBA Plan Section 5.2 when infrastructure allows.*

### 6.2 Wallet Metering

Chat and CAD usage is charged at **3.5× the underlying cost**. Rates vary by model and speed: faster or more capable models cost more per unit.

| Metered item | Unit | Rate basis |
| --- | --- | --- |
| Chat | Tokens | AI provider cost × 3.5, by model and speed |
| CAD generation | Per generation | AI and compute cost × 3.5, by complexity and speed |
| Storage add-on blocks | Per 20 GB per month | Flat block price: Pro, Turbo, and Team $10 (not the 3.5× multiplier); Basic Viewer through Starter bundles only |

*Per-model and per-task rates are set after MVP cost testing. During the winter build, every request is logged with its model, task type (chat, document search, CAD generation), token count, and cost. Rates are then priced at 3.5× the measured averages.*

### 6.3 Wallet Rules

- Prepaid: usage stops when the balance runs out; optional auto-refill.
- Basic Viewer accounts have a small daily AI cap paid by Block Concepts, sized from measured costs so total Basic Viewer usage stays within [X%] of Pro revenue (SBA 8.4).
- Starter bundle tokens are spent before the user's own wallet.
- Lite uses no Block Concepts tokens.
- Users see a running usage and balance display.
- Block Concepts keeps a hard monthly spending limit with the AI provider.
- Enterprise may be invoiced (postpaid) through Block Concepts.

## 7. Roadmap & Winter Milestones

*Dates follow the SBA plan: build Nov 2026 – Mar 2027, launch Apr 2027. Hiring triggers come from SBA 8.1 (membership-only baseline).*

| Phase | Target timing | Deliverables | Gate to next phase |
| --- | --- | --- | --- |
| 0: Winter build | Nov 2026 – Mar 2027 | Chat MVP: AI chat, uploads, document search, 3D viewer, project document storage, notes and tracking, calculators, process flows, plans and vendor requests; per-request cost logging; Builder and Lite with package format v1 and on-device chat; Lite demo package | Grant Block uses the MVP daily on real Block Concepts work; Lite demo package ready |
| 1: Public launch | Apr 2027 | Basic Viewer, Starter, and Pro live; prepaid wallet; Cloudflare paid plan; per-model rates and Basic Viewer cap set from cost logs; Builder and Lite at Block Concepts and its customers; Team built during year 1; first customers from Block Concepts and rep channels | 10–12 Pro users cover running costs |
| 2: First hire | When reached | Team live (year 2); senior software engineer hired; desktop app with extensions; first CAD milestone (spacer-class part model and drawing); Builder open sale [timing TBD] | 380–415 Pro users |
| 3: Full staffing | When reached | Team of 5; API and CLI; Enterprise (built on the Builder app) with Onshape / SolidWorks integration; Turbo level | 1,850–1,955 Pro users |
| Later | — | Mobile apps, PLC coding, electrical schematics, operations escalations, facility scan links, FDA / cGMP add-ons | — |

### 7.1 Feature Parking Lot

*Ideas outside the MVP, each tagged Recommend (point users to an outside tool now) or Build (candidate core feature later). Seeded with scan-to-CAD (e.g., ScanRuler) and photogrammetry.*

## 8. Risks & Mitigations

Ranked by owner priority (1 = highest concern).

| Rank | Risk | Type | Likelihood | Mitigation |
| --- | --- | --- | --- | --- |
| 1 | Inaccurate AI output (wrong dimension, part number, or vendor detail) | Product / liability | Medium | See 8.1 below |
| 2 | AI costs run over (bugs, abuse, Basic Viewer usage growth) | Financial | Medium | Hard monthly spend cap with the AI provider; Basic Viewer daily cap; prepaid wallet and Starter bundles; per-request cost logging; Lite runs on-device |
| 3 | Growth slower than the target pace (+12 Pro / month) | Market | Medium | Focused channels (SBA 6), Lite packages and demo, founding-customer offer as a lever; Block Concepts funds the gap |
| 4 | Owner capacity: two owners covering every role alongside an active automation sales business | Operations | High | Phase gates; AI tools; first hire at the Phase 2 trigger |
| 5 | Competitors add similar features (AI CAD tools, CMMS vendors, industrial copilots) | Market | High | Speed, turnkey setup, technician-first focus, Block Concepts relationships |
| 6 | Conflict of interest: Block Concepts sells automation and represents vendors, so app recommendations could appear biased | Reputation | Medium | Vendor-neutral answers by default; affiliations disclosed; Block Concepts services offered separately from app answers |
| 7 | Key-person dependence on Grant Block | Operations | High | Docs library, recorded decisions, senior engineer as second builder |
| 8 | AI provider changes price, terms, or has outages | Technical | Medium | Thin adapter so a second provider can be switched in |
| 9 | Customer data exposure | Security | Low–Medium | Section 5 controls; data stays with the project owner; usage patterns only; signed Lite packages that never upload; Enterprise local option |
| 10 | CAD and data sheet licensing terms (3Dfindit, manufacturer files) | Legal | Medium | Review terms before ingesting at scale; link to sources rather than copying |
| 11 | Rep partner approval (Automation Components, Flex-line Automation, C3 Engineered Solutions) | Channel | Medium | Written approval before promoting through partner visits |
| 12 | On-device model in Lite too slow or inaccurate on typical plant PCs | Technical | Medium | Minimum PC spec; test on typical plant hardware; Lite falls back to document search when chat can't run |

### 8.1 Inaccurate Output: Detailed Mitigation

| Control | What it does |
| --- | --- |
| Cited sources | Every answer and generated document shows which file or data sheet it came from |
| Review-required stamp | Plans, vendor requests, and drawings are marked for human review before release to purchasing or a vendor |
| Approved sources first | Answers draw from the project's files, Block Concepts templates, and manufacturer data before general knowledge |
| Known-part test set | A library of parts with known answers (starting with the spacer test) is rerun after every model or setup change |
| Feedback and builder testing | Users send feedback and feature requests through the app, reviewed in batches rather than monitored live; the Block Concepts team tests closely through Builder and Lite packages at its customers and feeds results back |
| Terms of service | States that outputs are engineering aids requiring review, not certified designs |
| Insurance | Block Concepts' current professional liability covers integration and consulting; confirm or add technology errors-and-omissions coverage for the app before launch |
