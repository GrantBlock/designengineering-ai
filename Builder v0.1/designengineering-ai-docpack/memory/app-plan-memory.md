---
name: designengineering-ai-app-memory
description: Hidden commit-style log for the designengineering.ai App Plan — product theory, surfaces, data/security assumptions, decisions; read to resume or rebuild
sources: [chat]
aliases: [App Plan memory, designengineering App memory]
---
Log for [[designengineering-ai]]; companion to [[designengineering-ai-sba-memory]]. Not shown to Grant.

## Product theory
- [stated] Follows an AI-lab path (like Anthropic/OpenAI) but tailored to creating, handling, and discussing 3D design, machine info, data sheets, and process logic — "Claude but with a digital twin viewer"
- [stated] Surfaces: web interface plus desktop, Android, iOS, API, and CLI; .info hosts a how-to/general-use wiki
- [stated] Users: design engineers, engineering managers, maintenance staff; also project note taker and tracker

## Data & security assumptions
- [stated] All CAD is either public (3Dfindit, manufacturer websites) or the company's own IP used only at that company
- [stated] Assumes data handled through a company's local AI deployment is not brought over to that company's customers unless the user asks
- [stated] 2026-11-04: data classes adopted — public, company-private, shared-on-request (App Plan 5.1)
- [stated] 2026-11-04: asked whether ontology workflows cover data security; settled that ontology sits in architecture (App Plan 4.2) as the access-control layer, with the security section kept separate for remaining controls

## App Plan layout (2026-11-04)
- [stated] 1 Problem & users · 2 Product definition · 3 Surfaces (3.1 deployment modes local vs hosted) · 4 Architecture & decision log (4.1 AI model strategy, 4.2 data model/ontology, 4.3 CAD pipeline & viewer) · 5 Data security (5.1 classification, 5.2 controls) · 6 Usage metering & tokens · 7 Roadmap · 8 Risks

## Tenancy & tiers
- [stated] 2026-11-04: start with multi-tenant hosted (option A) only; revisit other modes once Grant uses the app more than his current apps (Claude chat, monday.com, Onshape)
- [stated] 2026-11-04: asked whether single-tenant (B) fits a "pro plan"; settled that B maps to an Enterprise tier, with Pro staying on shared hosting
- [stated] Likes how friendly and local the "intuidy" AI platform feels (name as Grant wrote it)
- [stated] 2026-11-04: Enterprise simplified to cloud or local, custom-implemented by Grant for a few years (replaces separate single-tenant tier)
- [stated] Main focus: design workspace with data sheets and dimensions to build models and produce project plans, drawings, or vendor requests — Block Concepts' process automated at scale

## CAD engine by tier
- [stated] 2026-11-04: Free/Pro — users pay for CAD generated inside the app
- [stated] 2026-11-04: Enterprise — drives SolidWorks or Onshape, injecting generations straight into the customer's CAD on multiple computers; one builder controls multiple enterprise models (like Grant running multiple Claude design windows or multiple Onshape windows for large assemblies), cutting engineer hardware and labor cost

## MVP scope & tool policy
- [stated] 2026-11-04: MVP is a simple chat with a model; many feature ideas are deferred
- [stated] 2026-11-04: principle — use core tools first; the chatbot recommends outside tools (e.g., ScanRuler-type scan-to-CAD apps) before a native core feature is built; same theory for other tools
- [stated] 2026-11-04: scan-to-CAD accepted as a future capability; asked whether photogrammetry is too much for scope (placed in feature parking lot, App Plan 7.1)
- [stated] 2026-11-04: considered splitting .ai (3D model package) and .info (upload OBJ/STEP/photos to talk about a project); prefers a single app on .ai, with .info as the help and reference material library
- [stated] 2026-11-04: AI model strategy — one provider behind a thin adapter so models can be swapped or added later (provider not yet chosen)

## Billing
- [stated] 2026-11-04: wants pay-as-you-go SaaS token billing, modeled on Intuidy (the Kansas City AI platform he likes)
- [stated] Already owns designengineering.ai
- [stated] 2026-11-04: billing confirmed as prepaid wallet (pay-as-you-go tokens, optional auto-refill); postpaid reserved for Enterprise later
- [stated] 2026-11-04: help/reference library lives at docs.designengineering.ai, with designengineering.info redirecting there

## Dev stack
- [stated] 2026-11-04: developing with GitHub, Cloudflare, and JavaScript
- [stated] 2026-11-04: yes on Cloudflare (including its database) in place of the Supabase assumption; Grant will provide a tech stack document for the final technology choices
- [stated] 2026-11-04: App 3 (Platform & Delivery Surfaces) drafted; surface ship order is a proposal awaiting Grant's review
- [stated] 2026-11-04: surface ship order set — web app, docs library, desktop app, API, CLI, then Android/iOS (App 3 complete)

## Membership & metering (App 6)
- [stated] 2026-11-04: Pro works like NVIDIA GeForce NOW — buying performance levels — plus the desktop app with extensions; all membership levels can pay for token usage
- [stated] 2026-11-04: usage markup multiplier 3.5x
- [stated] 2026-11-04: meter chat, CAD generations, and storage, with rates by speed/model; Free could be limited to about 3 saves
- [stated] 2026-11-04: membership levels — Free and Pro (basic paid level) at launch; a much faster Turbo level added when growth allows, after infrastructure upgrades; App 6 complete, prices left for SBA 8
- [stated] 2026-11-04: Pro priced at $30/month; storage pricing follows industry standard; asked what the target audience size should be (break-even targets drafted in SBA 8.1)
- [stated] 2026-11-04: storage sold in 20 GB blocks — Pro includes 20 GB, each extra 20 GB is $10; Free users pay a marked-up $15 per 20 GB, so $30 Pro (with 20 GB) is the better deal
- [stated] 2026-11-04: token usage rates can't be set until build cost per model and complexity is known — rates to be calibrated from MVP cost testing; membership-only audience targets used as the planning baseline

## Audience, licenses, MVP scope
- [stated] 2026-11-04: does not want to be a data host — storage pricing is meant to push larger teams to Enterprise and charge small teams a flexible premium
- [stated] 2026-11-04: user licenses (seats) so teams can work together; number of users and number of companies differ
- [stated] Targeting non-CAD users and CAD users already paying $100–300/month on CAD packages
- [stated] 2026-11-04: MVP includes the 3D viewer, PLM-like project document file storage, and a handful of other tools such as chat-enabled calculators and process flows
- [stated] 2026-11-04: plans and vendor requests are in the MVP; FDA-compliant / cGMP-type documentation add-ons come later (App 2 complete)
- [stated] 2026-11-04: licensing is 1 per user with a collaborator mode; Enterprise is a flat fee plus memberships plus custom features or integrations (e.g., Onshape, SolidWorks)
- [stated] 2026-11-04: collaborator mode leans toward free access without AI generation; data lives with the main user as owner and guests with accounts access it, like Onshape sharing and publications; otherwise free users are limited to 3 shared or created projects
- [stated] 2026-11-04: fine with a team of one engineer on Pro and six maintenance staff on Free accounts paying for their own token usage
- [stated] 2026-11-04: user priority — maintenance staff first, then design engineers; theory: the app gives the maintenance technician AI design engineering, then he shows design engineers a custom program built for their professional use
- [stated] Users today rely on emails, talking, printouts, ERP notes, Excel BOMs, file explorer, SOLIDWORKS (Grant wrote "PCM"), MS Project, monday.com, Google Drive, SharePoint, OneDrive, text messages
- [stated] Expansion groups: purchasing, automation engineers, manufacturing engineers, robot programmers; eventually quality and process

## Core problem (App 1)
- [stated] 2026-11-04: failure priority — miscommunication, non-value-add work, key-person dependence, interruptions/urgencies, access gap; rework and lost decisions not called out
- [stated] Example: night shift loses an 8-hour shift because a manager didn't relay a day-shift handoff (someone arrived a few minutes late), so operations didn't run a piece of equipment overnight
- [stated] Avoid ROI calcs and replacement-cost framing; goal is quality and worker well-being — like IM saving time over email and phone: it all still works, just more efficiently
- [stated] Positioning: people want to add an AI product; this would be the first purpose-built one in that space offered directly to manufacturing businesses
- [stated] Future feature: operations escalations — operators comment on exactly what they did and saw before maintenance arrives
- [stated] 2026-11-04: product name is the self-explanatory "Design Engineering AI"; first-of-its-kind test: it can build a model and drawing of a spacer for a technician to give to purchasing; asked to check competitors (draft landscape in SBA 3.1)
- [stated] 2026-11-04: the functioning chat MVP is the feeder (CAD generation stays later); general name, positioned as the first purpose-built app for design engineering; future categories include PLC coding and electrical schematics
- [stated] Origin: Grant's own pain setting up Claude, Claude design, environment settings, and output expectations manually on his own time — he wanted an app with all the setup done, turnkey / plug-and-play for his customers
- [stated] 2026-11-04: positioning wording set to "first purpose-built app for multi-disciplinary design engineering" (no discipline list)
- [stated] 2026-11-04: final positioning line — "Design Engineering AI, the first turnkey, purpose-built app for multi-disciplinary design engineering" (manufacturing specifics removed)
- [stated] 2026-11-04: positioning line revised to "Design Engineering AI, the first turnkey app purpose-built for multi-disciplinary design engineering"
- [stated] 2026-11-04: wants to build additional functions for builders — a version with custom features Grant builds for his own development use
- [stated] 2026-11-04: wants a future Lite version below the Free tier
- [stated] 2026-11-04: Builder edition is for future sale; it is the original builder edition for Block Concepts — manages multiple enterprises and handles external project management and documentation transfer
- [stated] Wants replies after each section to include questions
- [stated] 2026-11-04: asked whether Enterprise can be demoed through Lite without token usage, possibly as a downloadable; App 5 (security) skipped for now, moved on to App 7 roadmap
- [stated] 2026-11-04: Lite can also be used for Builder deployments
- [stated] Facility scan data currently lives in Matterport or on scanner cloud services
- [stated] 2026-11-04: purchasing and vendor requests are often regional, requiring a per-Enterprise instance; the web version assumes a global audience
- [stated] 2026-11-04: App 7 answers — winter build ends March 2027; launch gate is Grant's own use plus a deployable Lite as the Enterprise demo, delivered as a zip with accessible files like PDFs (a marketing item); docs library must be in Lite; separate Enterprise demo removed — Lite focuses on 3D viewer, file storage, and local chat

## Risks (App 8)
- [stated] 2026-11-04: Block Concepts has professional liability coverage for integration and consulting
- [stated] Risk priority: inaccurate output highest, then AI cost, then growth, then owner time, then competitors
- [stated] Block Concepts is an active automation sales business (added as an owner-capacity and conflict-of-interest consideration)
- [stated] 2026-11-04: does not want to monitor error logs; quality loop is user-submitted feedback and feature requests, plus his team staying close to testing for AI Builder feedback

## Tech stack (App 4, from Grant's Tech Stack workbook, 2026-11-04)
- [stated] Dev machine (Windows): Git, GitHub CLI/Desktop, Docker Desktop + WSL2, Node.js LTS, VS Code, Claude Desktop, Claude Code CLI, PowerShell 7, Python 3, PostgreSQL 17 — several marked "To confirm"
- [stated] App stack: Next.js, React, TypeScript, Prisma ORM, PostgreSQL, Tailwind CSS, shadcn/ui, Liveblocks (real-time), Clerk (auth), Trigger.dev (background jobs), CodeRabbit (code review)
- [stated] Replaces the earlier Cloudflare D1 database assumption with PostgreSQL + Prisma (host still on Cloudflare); open: 3D viewer library, file storage, payments, managed Postgres host, AI provider
- [stated] 2026-11-04: final tech stack decided during the build; App 4 lists preferred and alternatives together to show flexibility, with a general cost-estimating layout (SBA 8.3 now category-based)
- [stated] 2026-11-04: AI provider is Anthropic Claude (kept behind the adapter)

## Reconciliation with Word SBA plan (2026-11-05)
- [stated] 2026-11-05: Word SBA plan wins on pricing and levels; App Plan updated to Basic Viewer / Starter / Pro / Turbo / Team / Enterprise plus Builder and Lite
- [stated] 2026-11-05: Lite chat runs on an on-device AI model; Lite is free, no login, no Block Concepts tokens
- [stated] 2026-11-05: Builder is one product that packages Lite zips, one per client or site (this is what "manage multiple Enterprise accounts" meant); Enterprise is a custom implementation built on the Builder app
- [stated] 2026-11-05: Basic Viewer gets a small daily AI cap plus a limit of 3 projects of their own; shared projects don't count
- [stated] 2026-11-05: Turbo kept for power users who can't justify Enterprise and don't need Team admin; after infrastructure upgrades
- Draft (not yet approved by Grant): Lite package format v0.1 in App 3.2; proposed Electron desktop shell (D11) and llama.cpp + small open-weight model for Lite (D12); Team storage 20 GB per user assumed

## Development path (2026-11-09)
- [stated] 2026-11-09: D1 Hosting is Cloudflare Workers
- [stated] 2026-11-09: D2 Web framework is Next.js + TypeScript
- [stated] 2026-11-09: Claude builds as much as possible to Grant's architecture and instructions; Grant services the app himself for the first 3 years (A); no temporary shortcuts that need rebuilding
- Draft (not yet approved by Grant): Next.js runs on Workers through the OpenNext Cloudflare adapter; see Builder v0.1/development-path.md

## Signing & approvals (I01, 2026-11-09)
- [stated] 2026-11-09: D13 (draft until the App Plan log is updated): vendor and customer documents (approval drawings, contracts, proposals) use a widely trusted e-sign platform from the start, behind a thin adapter, chosen for compatibility with Grant's own system requirements; not for internal or cGMP use; signed paper scans can be uploaded; the task owner closes a step by uploading the document; PO and invoice tracking is track-only. Platform not yet chosen (DocuSign, PandaDoc and others under review).
- [stated] 2026-11-09: the app is intended as a company organization app that collects what Grant does across his current apps (monday.com, Onshape, Drive and others) into one place; missing features are added to ideas.md as they come up.
- [stated] 2026-11-11: The 3D viewer and the 3D designer are one feature (UI page P08): the builder for 3D design, opened from Design in the primary navigation and available inside a project chat when the 3D skill is loaded. 3D models are stored in Vault and can be referenced in new chats to make variations and alternatives.
- [stated] 2026-11-11: Chat in general is the free tier; chat in projects is in the Pro plan (Grant). Draft (not yet approved by Grant): this may change the Basic Viewer limit of 3 own projects (2026-11-05) and the Starter bundle; see `design/PLATFORM-MATRIX.md`, Chat by plan, questions 1 to 4. The Word files and App Plan 6.1 are not changed until Grant answers.
- [stated] 2026-11-11: Builder and Design (the 3D designer) are extensions. Pro gets projects, and then buys the extensions (Grant). Draft (not yet approved by Grant): the App Plan membership table and Builder pricing will change; Grant updates the App Plan after the initial design is finalized.
- [stated] 2026-11-11: Design and Builder rows are hidden in the sidebar until the extension is bought; adding an extension is done in Settings, Billing, Extensions (Grant).

## Page designs reconciled with the App Plan (2026-11-12)
- [stated] 2026-11-12: App Plan updated to match the page designs: MVP capability rows (3D viewer in the Vault, Vault, notes and tracking as the Dashboard and Update assistant with a stage slider, custom calculators, process configuration, Exports tab with Process document, Ask for a quote and Produce a quote), new MVP rows for Schedules and customer quotes, web app responsive on phones per PLATFORM-MATRIX, one Lite package per organization with one folder per project, data model with Organization, Process, Schedule, Calculator, Chat, Customer Quote, Update and Extension (Grant approved items 1 to 6).
- [stated] 2026-11-12: Basic Viewer keeps view and comment on shared projects and general chat with the daily cap, but has no projects of their own. The Starter bundle is a one-time purchase that unlocks the 3-project limit and a file upload limit; Pro unlocks the remaining storage (Grant). Supersedes the 2026-11-05 Basic Viewer 3-project line.
- [stated] 2026-11-12: Design (3D designer) and Builder are extensions, each $600 per year to add to Pro. Both ship after the MVP; the MVP has no extensions, but both stay in the prototype (Grant).
- [stated] 2026-11-12: Pro shares per project; the Team settings section shows only on the Team level (Grant approved item 10).
- [stated] 2026-11-12: Document search lives in the Vault, where generated documents and uploads are kept (Grant).
- [stated] 2026-11-12: Preferences (PLC and manufacturer standards), the Help center and support contact are part of a page that still needs to be built (Grant). Tracked as P20.
- [stated] 2026-11-12: A project has a type, Job or Resource; resource projects (such as engineering resources) have no stage or status (Grant approved item 13).
- Draft (not yet approved by Grant): the Starter bundle carries no wallet tokens now (Grant listed only projects and uploads); its price stays [$20] (A) and the upload limit is [X GB]. D11 (Electron) now covers Lite and the future desktop app only, since Builder runs in the web app. The Phase 0 gate "Lite demo package ready" and Phase 1 "Builder and Lite at Block Concepts" are left as they were and flagged, because Lite needs Builder, which now ships after the MVP.
