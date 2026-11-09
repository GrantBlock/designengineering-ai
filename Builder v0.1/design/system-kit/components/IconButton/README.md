# IconButton

A square icon-only button. Always pass `aria-label`.

- Props: `icon`, `variant` (`ghost` | `star` | `outline` | `send`), `size` (`md` 36px | `sm` 32px | `xs` 28px | `lg` 48px for mobile send), `armed` (send has text to send), `on` (star is set).
- `ghost` sits on dark surfaces: `bc-muted` icon, `bc-surface-raised` hover. `star` turns `bc-steel-blue-text` and filled when `on`.
- `outline` and `send` live inside the light `bc-field` island only. `send` is `bc-field-hairline` while empty and `bc-steel-blue` once armed (hover `bc-steel-blue-hover`), with a 200ms background transition.
