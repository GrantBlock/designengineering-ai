# Platform decision matrix

Which page or feature is on which surface. **Draft (not yet approved by Grant):** every cell below is a proposal. Grant confirms or changes a row; confirmed rows are logged under Log with a date.

Key: **Full** = everything on the page. **View** = see it, no editing. **Use** = run it, not build or change it. **-** = not on this surface.

Surfaces: **Web desktop** (browser, wide), **Web mobile** (browser or phone app, four tabs), **Desktop app** (installed: Builder is an extension in the web app but desktop only; Lite is a separate local app).

| ID | Page or feature | Web desktop | Web mobile | Desktop app | Reason |
| --- | --- | --- | --- | --- | --- |
| P01, P02 | Chat start | Full | Full | - | Core surface, same on both |
| P03 | Chat conversation, sources | Full | Full | - | Maintenance staff ask on the floor. General chat is the free tier, project chat is Pro (see Chat by plan) |
| P04 | Sign in | Full | Full | - | |
| P19 | Dashboard, Update assistant, Updates log | Full | Full | - | Logging a status from the phone is the main use |
| P05 | Projects list | Full | Full | - | |
| P06 | Project: Specifications | Full | View | - | Editing many fields is a desktop job |
| P06 | Project: Layout | Full | View | - | |
| P06 | Project: Schedule | Full | Use (update status) | - | Mark tasks done from the floor |
| P06 | Project: Import | Full | - | - | Bulk files and CSV |
| P06 | Project: Exports (process document, ask for a quote, produce a quote) | Full | View, download | - | Review and approval need a full screen |
| P12 | Process configuration (inside a project) | Full | View | - | |
| P07 | Uploads | Full | Full (camera) | - | Take a pic is mobile |
| P08 | 3D designer | Full | View (orbit, ask) | - | Chat-only building could work on mobile later |
| P09 | Vault | Full | Full (browse, open) | - | |
| P11 | Calculators (custom, built from a template) | Full (build) | Use | - | Build on desktop, run anywhere |
| P15 | Settings: Account, Billing, Usage, Preferences, Privacy | Full | Full | - | |
| P15 | Settings: Team (roles, invite) | Full | - | - | Admin work |
| P17 | Builder (extension) | Full | - | Not a separate app | Desktop only, purchased extension |
| P16 | Lite (local package viewer, AI chat) | - | - | Full | Local app, offline |
| - | Wallet add funds and auto-refill | Full | Full | - | A low balance should be fixable from the phone |

## Chat by plan

Grant, 2026-11-11: **chat in general** is the free tier; **chat in projects** is in the Pro plan. Rows marked Draft are proposals; numbers are placeholders.

| | Chat in general (free tier) | Chat in projects (Pro) |
| --- | --- | --- |
| Where | New chat with "Chat in: General"; P01, P02, P03 | A project's chats (sidebar Projects mode, P05, P06) |
| Knows | The model's general knowledge only | The project's files, data sheets, models, notes, schedule and updates, with cited sources |
| Files and documents | Draft: can attach a file to one message; nothing is kept | Uploads, document search and the Vault, kept with the project |
| 3D designer, calculators, process flows, plans and quotes | Draft: not available | Available (the project is where they run) |
| Usage | Small daily AI cap paid by Block Concepts ([X] messages a day (A)) | Wallet tokens, faster responses, priority access, premium models |
| History | Draft: Recents list, kept [X] days (A) | Kept with the project, shared in the organization |
| Sharing | Private to the person | Shared inside the organization |
| Storage | None (App Plan 6.1) | 20 GB included, then $10 per 20 GB per month |
| Platforms | Web desktop, web mobile | Web desktop, web mobile (see the table above for what is view only) |
| What the person sees when blocked | A note that the daily limit is used, with Upgrade | Wallet low or empty notice (Settings, Billing) |

### Chat questions

1. The App Plan (6.1) gives Basic Viewer up to 3 projects of their own, plus view and comment on shared projects, and a Starter bundle for tokens. If projects are Pro only, does Basic Viewer keep the 3 projects, or only view and comment on shared ones? The App Plan and memory log would then change (Word files win on levels).
2. Can a free person open a project that was shared with them and chat in it, or only view and comment?
3. May a free person attach files to a general chat, or does anything with a file need a project?
4. Does the Starter bundle unlock project chat, or only more general chat?

## Open questions

1. Should phones edit Specifications and Process configuration fields, or only view?
2. Does Lite also run on a phone or tablet later, or only on Windows computers (App Plan 3.2 open question)?
3. Which Settings sections does a Basic Viewer see (App Plan 6.1: view and comment only)?

## Log

- [stated] 2026-11-11: Grant: Builder is desktop only; a decision matrix is wanted because not everything needs to be on the mobile app. Matrix created as a Draft.
- [stated] 2026-11-11: Grant: chat in general is the free tier; chat in projects is in the Pro plan. The Chat by plan section lists the limits as a Draft.
