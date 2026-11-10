# NavItem

A sidebar row: icon, label, optional tag, and — when it has children — a chevron that rotates 90° to open a guided sub-list.

- Props: `icon`, `label`, `tag`, `children` (array of child labels), `open`/`defaultOpen`, `active`, `activeChild`, `onSelect`, `onToggle`, `onSelectChild`.
- At rest `bc-muted`; hover and active lay `bc-surface-raised`; an open parent goes `bc-ink`. The active child is `bc-steel-blue-text` on `bc-steel-blue-tint` — the only steel blue in the nav.
- A parent with children only opens; it is never itself a page.
