# Sidebar

The desktop navigation panel: brand header, quick search, grouped NavItems, account footer.

- Props: `groups` (`[{label?, items:[{id, label, icon, tag?, children?, open?}]}]`), `title`, `logoSrc`, `defaultActive` (`{id, child}`), `onNavigate(id, child?)`, `footer`.
- Groups in the app: an unlabelled top group (Home, Recents, Projects), then **Design**, **Deliver**, **Resources**. Group labels are mono 11px uppercase.
- 264px wide, `bc-radius-shell`, `bc-shadow-shell`. Its 56px header lines up with the TopBar.
