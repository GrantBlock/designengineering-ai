# Current Issues

Open design and setup issues. IDs stay fixed. Close an issue by moving it to Closed with the date; never delete.

## Open

| ID | Issue | Surface | Where |
| --- | --- | --- | --- |
| DI01 | Mobile tab labels (Recents, Projects) are tight with five tabs on 360px phones. Check on a small device; if needed, reduce label tracking or size. | code | `exports/P02-chat-start-mobile/` |
| DI02 | No way to see the app and design exports from other computers while development stays on the main AI computer. Need a dev and preview deployment setup. Cloudflare Workers is the D1 proposal; how it works with Next.js is not yet decided. | vscode | App Plan D1, `../review-queue.md` RQ14 |
| DI03 | The P05, P06 and P12 prototypes keep data in browser localStorage (keys `de-proc-`, `de-scheds-`, `de-doc-`, `de-docinc-`, `de-hist-`, `de-imp-`, `de-flow-`, each followed by the project number). A real data model and storage are needed before this is more than a design preview. Files cannot be downloaded from the private preview page, only from a local copy. | vscode | `exports/P05-projects/`, `exports/P06-project-workspace/`, `exports/P12-process-config/` |

| DI04 | Calculators (P11), Process flows entry and Wallet (P14) have no entry in the primary navigation or mobile More; P14 and the P15 overlay show the same Billing and Usage content. | code | `exports/P11-calculators/`, `exports/P14-wallet-usage/`, `exports/P15-account-settings/` |
| DI05 | `system-kit/` Sidebar and TabBar components, `bundle.css` and the mobile More screen do not yet have the Builder row, the settings link or the Recents-only mobile tabs; many pages repeat the same sidebar markup by hand. | code | `system-kit/` |
| DI06 | P01 is the desktop page and overflows at phone width (P02 is its mobile version, with no sidebar and no Builder). P04 and P16 have no app sidebar by design. | code | `exports/P01-chat-start-desktop/` |

## Closed

(none yet)

## Notes on DI02 (Draft, not yet approved by Grant)

Two separate needs:
1. **Share finished designs** (static HTML in `exports/`): push to GitHub, Cloudflare builds a preview URL per branch. Works today, no Next.js needed.
2. **See the live app while building** (later, once there is Next.js code): either deploy a preview on each push (Next.js on Workers through the OpenNext Cloudflare adapter), or expose the dev server on the main computer through a Cloudflare Tunnel. Put Cloudflare Access (login) in front of both.

## Log

- [stated] 2026-11-09: Issues file created. DI01 and DI02 added.
- [stated] 2026-11-11: DI03 added for the localStorage stand-in data in the projects prototypes.
