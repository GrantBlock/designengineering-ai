# Shortcuts

Phrases Grant can say to start a workflow. When a message matches a phrase below (exact or close), run the steps without asking what it means.

## "design the next page"

**Description:** Designs the next open page from the UI tracker, matching the design system, and exports it to the repo.

Steps:
1. Read `Builder v0.1/CLAUDE.md` and `Builder v0.1/design/README.md`.
2. Open `design/UI-Progress-Tracker.md`. The page is the first row not marked ☑ (or the page Grant names, e.g. "design the next page: P05"). Say which page it is.
3. Read `design/DESIGN-SYSTEM.md` and every file in `design/exports/`. If the design system is still a placeholder, extract it from the P01/P02 exports first and get Grant's approval.
4. Design the page with the Design artifact type (Artifact quickstart, intent "design"). Follow the design system exactly. Ask before adding any new pattern.
5. When Grant approves, export the HTML to `design/exports/<ID>-<name>/`, mark the tracker row ☑ with the export path, and log new design-system decisions as dated lines.
6. Commit and push to the session branch.

Propose, get Grant's answer, then edit. End replies with the questions that need Grant's input.

## Log

- [stated] 2026-11-06: "design the next page" is the shortcut for the workflow above.
