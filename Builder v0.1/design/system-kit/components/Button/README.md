# Button

Text buttons: `ghost` for top-bar actions, `chip` for suggested next steps above the hero, `row` for a full-width list action (sidebar footer).

- Props: `variant` (`ghost` | `chip` | `row`), `icon` (an Icon name, leading), `tag` (a Tag shown before the label — chip only), `trailing` (adds a chevron), plus any `<button>` attribute.
- `ghost` labels are uppercase, 12px/500, 0.05em — short verbs: "New session", "Ask AI", "Support". Hover lays `bc-surface-raised` under it.
- `chip` is sentence case, 13px, on `bc-surface-raised` with a `bc-hairline` border that turns `bc-steel-blue` on hover. Use one or two at most, each leading with a `New` tag when it is a new capability.
- There is no filled primary button on desktop: the only steel-blue fill is the composer's send button. Keep it that way.
