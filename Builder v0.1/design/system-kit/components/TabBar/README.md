# TabBar

The mobile bottom navigation: five equal tabs, icon over uppercase label, in a 68px `bc-surface` pill.

- Props: `tabs` (`[{id, label, icon}]`), `value`/`defaultTab`, `onChange(id)`.
- The app's tabs mirror the desktop sidebar: New (`plus`), Recents, Projects, Design (`cube`), More (`more`). Seven desktop groups do not fit five tabs, so More stands for Operations, Vault and Tools. Ask is not a tab; it is the primary ActionCard and the composer above the bar. The active tab is `bc-steel-blue-text` on `bc-steel-blue-tint`.
- Docks with the MobileComposer above it in `de-mdock`, which fades from transparent into `bc-canvas`.
