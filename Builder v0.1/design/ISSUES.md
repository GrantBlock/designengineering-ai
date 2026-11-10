# Current Issues

Open design and setup issues. IDs stay fixed. Close an issue by moving it to Closed with the date; never delete.

## Open

| ID | Issue | Surface | Where |
| --- | --- | --- | --- |
| DI01 | Mobile tab labels (Recents, Projects) are tight with five tabs on 360px phones. Check on a small device; if needed, reduce label tracking or size. | code | `exports/P02-chat-start-mobile/` |
| DI02 | No way to see the app and design exports from other computers while development stays on the main AI computer. Need a dev and preview deployment setup. Cloudflare Workers is the D1 proposal; how it works with Next.js is not yet decided. | vscode | App Plan D1, `../review-queue.md` RQ14 |

## Closed

(none yet)

## Notes on DI02 (Draft, not yet approved by Grant)

Two separate needs:
1. **Share finished designs** (static HTML in `exports/`): push to GitHub, Cloudflare builds a preview URL per branch. Works today, no Next.js needed.
2. **See the live app while building** (later, once there is Next.js code): either deploy a preview on each push (Next.js on Workers through the OpenNext Cloudflare adapter), or expose the dev server on the main computer through a Cloudflare Tunnel. Put Cloudflare Access (login) in front of both.

## Log

- [stated] 2026-11-09: Issues file created. DI01 and DI02 added.
