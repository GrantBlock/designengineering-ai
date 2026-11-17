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
| P08 | 3D designer (extension; Basic Viewer and Starter by tokens on a slow queue) | Full | View (orbit, ask) | - | Purchased extension; chat-only building could work on mobile later |
| P09 | Vault | Full | Full (browse, open) | - | |
| P11 | Calculators (in the Vault; built in a chat) | Full (build) | Use | - | Build on desktop, run anywhere. No page of their own |
| P15 | Settings: Account, Billing, Usage, Preferences, Privacy | Full | Full | - | |
| P15 | Settings: Team (roles, invite; Team level only) | Full | - | - | Admin work |
| P17 | Builder (extension) | Full | - | Not a separate app | Desktop only, purchased extension |
| P16 | Lite (local package viewer, AI chat) | - | Online copy in the main app, as a viewer (Builder, Also share online) | Full | Local app, offline; no Lite phone app |
| - | Wallet add funds and auto-refill | Full | Full | - | A low balance should be fixable from the phone |
| P20 | Preferences (factory context file) | Full | Full | - | Approved 2026-11-12 |

## Chat by plan

Grant, 2026-11-11: **chat in general** is the free tier; **chat in projects** is in the Pro plan (2026-11-12: Starter also gets project chat in its 3 projects). Rows marked Draft are proposals; numbers are placeholders.

| | Chat in general (free tier) | Chat in projects (Pro) |
| --- | --- | --- |
| Where | New chat with "Chat in: General"; P01, P02, P03 | A project's chats (sidebar Projects mode, P05, P06) |
| Knows | The model's general knowledge only | The project's files, data sheets, models, notes, schedule and updates, with cited sources |
| Files and documents | Draft: can attach a file to one message; nothing is kept | Uploads, document search and the Vault, kept with the project |
| 3D designer, calculators, process flows, plans and quotes | Draft: not available | Available (the project is where they run) |
| Usage | Very small daily cap from the free pool, capped at 5% of Pro revenue ([X] messages a day (A)) | Wallet tokens, faster responses, priority access, premium models |
| History | Draft: Recents list, kept [X] days (A) | Kept with the project, shared in the organization |
| Sharing | Private to the person | Shared inside the organization |
| Storage | None; Starter adds 5 GB (A) | 20 GB included, then $10 per 20 GB per month |
| Platforms | Web desktop, web mobile | Web desktop, web mobile (see the table above for what is view only) |
| What the person sees when blocked | A note that the daily limit is used, with Upgrade | Wallet low or empty notice (Settings, Billing) |

### Chat questions

1. Answered 2026-11-12: Basic Viewer keeps view and comment on shared projects but has no projects of its own; a one-time Starter bundle unlocks 3 projects and a file upload limit. (Was: The App Plan (6.1) gives Basic Viewer up to 3 projects of their own, plus view and comment on shared projects, and a Starter bundle for tokens. If projects are Pro only, does Basic Viewer keep the 3 projects, or only view and comment on shared ones? The App Plan and memory log would then change (Word files win on levels).)
2. Can a free person open a project that was shared with them and chat in it, or only view and comment?
3. May a free person attach files to a general chat, or does anything with a file need a project?
4. Answered 2026-11-12: the Starter bundle unlocks projects (3) and uploads, so project chat. (Was: Does the Starter bundle unlock project chat, or only more general chat?)

## Plans and extensions

Updated 2026-11-12 from Grant's decisions (App Plan 2, 6.1, 6.3, 6.4; SBA 5.2). Rows are stated unless marked Draft.

| | Basic Viewer (free) | Starter ($20 / year) | Pro ($30 / month) | Team ($50 / user / month) | + Design ($600 / yr) | + Builder ($600 / yr) |
| --- | --- | --- | --- | --- | --- | --- |
| General chat | Very small daily cap from the free pool (5% of Pro revenue), lowest-cost model, slow queue | Same cap; $5 starter credit (A), then wallet tokens, no limit | Wallet tokens, faster, premium models | As Pro | - | - |
| Own projects and project chat | - | Up to 3 | Yes | Yes | - | - |
| Shared projects | View, comment, ask questions (paid by the owner) | Same | Shares with up to 10 active viewers per user | 10 active viewers per user; roles and Team settings section | - | Unlimited view-and-chat viewers, fair use (review above 500 per seat (A)) |
| Storage | None | 5 GB, 100 MB per file (A) | 20 GB, 500 MB per file (A); $10 per extra 20 GB | 20 GB per user (A) | - | - |
| Vault, Uploads, Dashboard, calculators, process flows, plans and quotes | Settings and Dashboard only | In their 3 projects | Yes | Yes | - | - |
| 3D designer (P08) | By tokens, slow queue (about a week) | By tokens, slow queue | View in the Vault | View in the Vault | Yes | - |
| Builder (P17) and Lite packages | - | - | - | - | - | Yes (desktop only); Also share online, off by default |

All extensions ship after the MVP and are in the prototype now. Navigation: the Design and Builder rows are hidden in the sidebar until the extension is bought; they are added in Settings, Billing, Extensions (Grant, 2026-11-11).

## Open questions

1. Should phones edit Specifications and Process configuration fields, or only view?
2. Does Lite also run on a phone or tablet later, or only on Windows computers (App Plan 3.2 open question)?
3. Which Settings sections does a Basic Viewer see (App Plan 6.1: view and comment only)?

## Log

- [stated] 2026-11-11: Grant: Builder is desktop only; a decision matrix is wanted because not everything needs to be on the mobile app. Matrix created as a Draft.
- [stated] 2026-11-11: Grant: chat in general is the free tier; chat in projects is in the Pro plan. The Chat by plan section lists the limits as a Draft.
- [stated] 2026-11-11: Grant: Builder is an extension along with Design. Pro gets projects, then buys the extensions. Added the Plans and extensions table (Draft).
- [stated] 2026-11-12: Grant: Basic Viewer has no projects of its own; the one-time Starter bundle unlocks 3 projects and a file upload limit; Pro unlocks the remaining storage. Design and Builder are $600 per year extensions, not in the MVP, kept in the prototype. Team settings show only on the Team level. Chat questions 1 and 4 answered; 2 and 3 still open.
- [stated] 2026-11-12: Grant: Basic Viewer and Starter can use the 3D designer by tokens on a much longer queue than Pro (about a week), to fill usage gaps and sample what a higher level gives.
- [stated] 2026-11-12: Grant: Starter is a flat $20 per year with no token limit.
- [stated] 2026-11-12: Grant: invited viewers on a shared project can ask chat questions, charged to the owner's wallet; Pro shares up to 10 viewers per project. Free general chat stays with a very small cap from a pool capped at 5% of Pro revenue. Chat question 2 answered.
- [stated] 2026-11-12: Grant: Team gets 10 viewers per Team user.
- [stated] 2026-11-12: Grant: Pro is also 10 viewers per user; owners activate and deactivate viewers to manage them.
- [stated] 2026-11-12: Grant: Builder gives unlimited viewers, fair use, view and chat only.
- [stated] 2026-11-12: Grant: Lite has no phone app; phones open a package's online copy (Builder, Also share online, off by default) in the main app as viewers.
