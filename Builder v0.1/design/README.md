# design/

UI design work for designengineering.ai. Owner: Grant Block (Block Concepts LLC).

| Path | Purpose |
| --- | --- |
| `UI-Progress-Tracker.md` | Ordered list of pages to design, with status. Single source for "what's next". |
| `DESIGN-SYSTEM.md` | Tokens and rules every page follows. Updated whenever a new page sets a new pattern. |
| `ISSUES.md` | Open design and setup issues. |
| `START-SESSION.md` | Copy-paste prompt that starts a design session. |
| `specs/` | Feature specs for pages that need more than a layout, edited by Grant. `P08-3D-Designer-Spec.md` is the first. |
| `exports/` | Finished page exports (HTML), one folder per page, named by tracker ID. |

Rules: design from the first open page in the tracker; follow the design system; export to `exports/`; update the tracker; log new design-system decisions with a dated line. Draft items are not approved until Grant says so.

## Sample site (Cloudflare Workers)

`prototype.html` is the sample frame: the app description, the page description and a Desktop and Phone selector around the live pages. To deploy it as a static site:

1. Cloudflare builds it from the repository root: `wrangler.jsonc` at the root names the Worker `designengineering-ai` and runs `build-site.sh`, which copies only the pages, shared scripts, fonts and icon into `site/`. Planning documents are never copied. To deploy by hand, run `npx wrangler deploy` from the repository root.
2. `site/` is built output and is not committed.
3. The pages carry `noindex`, but the site is public unless Cloudflare Access is put in front of it.

Shared code is in `exports/shared/`: `data.js` (sample projects, chats, Vault items, uploads, calculators), `shell.js` and `shell.css` (sidebar, top bar, phone bar, search, menus, session panel).

