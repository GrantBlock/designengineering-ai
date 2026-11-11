# Sidebar

The desktop navigation panel: brand header, quick search, grouped NavItems, account footer.

- Props: `groups` (`[{label?, items:[{id, label, icon, tag?, children?, open?}]}]`), `title`, `logoSrc`, `defaultActive` (`{id, child}`), `onNavigate(id, child?)`, `footer`.
- Groups in the app: an unlabelled top group (New, Recents, Projects; plain buttons with no drop-downs), then collapsible **Design** (Mechanical, Electrical, Controls, Software), **Operations** (Manufacturing, Process, Maintenance), **Vault** (Documents, Uploads) and **Tools** (Simulation, Troubleshoot, Data Analysis). A group with a `label` collapses; pass `collapsed: true` on a group to start it closed. Group labels are mono 11px uppercase.
- 264px wide, `bc-radius-shell`, `bc-shadow-shell`. Its 56px header lines up with the TopBar.
