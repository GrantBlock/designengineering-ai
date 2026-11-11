# Sidebar

The desktop navigation panel, in four regions: top toolbar, primary nav, a scrolling list, account footer.

- Props: `chats` (strings, newest first), `projects` (`[{name, chats:[string]}]`, most recently active first; the last is usually "General", for chats outside any project), `defaultMode` (`"chat"` or `"projects"`), `account` (default "Grant · Pro"), `initial` (default "G"), `onNavigate(id, chat?)` with ids `new`, `search`, `dashboard`, `customize`, `more`, `chat`.
- **Top toolbar** (48px): menu, sidebar toggle, back and a dimmed forward on the left; the Chat | Projects switcher (two icons in a bordered pill, selected one on `bc-surface-raised`) on the right.
- **Primary nav** (34px rows, 16px icons): New (full-width pill on `bc-surface-raised`), Search, Dashboard (opens P19), Customize, More.
- **List:** Chat mode shows one `Recents` list. Projects mode shows a collapsible group per project (name, mono chat count), each listing its chats indented under a hairline. Titles are one line and fade out on the right when long.
- **Footer:** gray initial avatar, "Grant · Pro" with a chevron (account switcher), settings gear.
- 264px wide, `bc-radius-shell`, `bc-shadow-shell`. The old Design, Operations, Vault and Tools groups and Quick search are retired; see DESIGN-SYSTEM.md.
