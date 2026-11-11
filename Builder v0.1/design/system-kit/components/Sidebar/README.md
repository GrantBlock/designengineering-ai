# Sidebar

The desktop navigation panel, in four regions: top toolbar, primary nav, a scrolling list, account footer.

- Props: `chats` (strings, newest first), `projects` (`[{name, chats:[string]}]`, most recently active first), `defaultMode` (`"chat"` or `"projects"`), `account` (default "Grant · Pro"), `initial` (default "G"), `onNavigate(id, chat?)` with ids `new`, `search`, `dashboard`, `design`, `vault`, `uploads`, `more`, `chat`.
- **Top toolbar** (48px): menu, sidebar toggle, back and a dimmed forward on the left; the Chat | Projects switcher (two icons in a bordered pill, selected one on `bc-surface-raised`) on the right.
- **Primary nav** (34px rows, 16px icons): New (full-width pill on `bc-surface-raised`), Search, Dashboard (opens P19), Design (the 3D designer, not designed yet), Vault (artifacts and exports), Uploads (imports), More. Customize is removed.
- **List:** Chat mode shows one `Recents` list. Projects mode starts with a New project row, then a collapsible group per project (name, mono chat count), each listing its chats indented under a hairline. Titles are one line and fade out on the right when long.
- **Footer:** gray initial avatar, "Grant · Pro" with a chevron (account switcher), settings gear.
- 264px wide, `bc-radius-shell`, `bc-shadow-shell`. The old Design, Operations, Vault and Tools groups and Quick search are retired; see DESIGN-SYSTEM.md.
- General is not a group in the sidebar. It is the default project for chat sessions; it appears only in the mobile "Chat in" selector. `onNavigate` also sends `new-project`.
- Each project group header has a Start chat icon button (chat bubble with a plus) at the right, dimmed until the row is hovered; it starts a new chat in that project (`onNavigate("start-chat", projectName)`).
