# Icon

Line icons on a 24-unit grid, drawn with `currentColor` so they take the text colour of their parent.

- Props: `name` (one of `DE.Icon.names`), `size` (px, default 16), `strokeWidth` (default 1.6), `filled` (fills the shape — only the `star` uses it).
- Sizes used in the app: 16 in nav rows and icon buttons, 14 in labelled buttons and chips, 12 for chevrons (stroke 2), 22 on mobile tabs (stroke 1.7) and action-card tiles, 18 for arrow discs (stroke 2).
- Nav icons sit at 85% opacity. Never colour an icon on its own — let it inherit `bc-ink`, `bc-muted` or `bc-steel-blue-text` from its row.
- Don't mix in another icon set. A new icon is drawn on the same grid and stroke, added to `ICON_PATHS`, and uploaded to the Icons group.
