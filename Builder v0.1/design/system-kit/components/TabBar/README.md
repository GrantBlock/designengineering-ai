# TabBar

The mobile bottom navigation: four equal tabs, icon over uppercase label, in a 68px `bc-surface` pill.

- Props: `tabs` (`[{id, label, icon}]`), `value`/`defaultTab`, `onChange(id)`.
- The app's tabs are New chat (`plus`), Recents (`clock`, every chat, project or general, in one list), Dashboard (`dashboard`, opens P19) and More (`more`: Projects, Design, Search, Customize). Mobile has no Chat | Projects switcher; New chat asks whether the chat goes in a project or General. Ask is not a tab; it is the primary ActionCard and the composer above the bar. The active tab is `bc-steel-blue-text` on `bc-steel-blue-tint`.
- Docks with the MobileComposer above it in `de-mdock`, which fades from transparent into `bc-canvas`.
