# PromptCard

A starter task: a discipline category over one line of task text, with a star to keep it in Favorites. Clicking fills the composer.

- Props: `category` (Mechanical, Electrical, Controls, Simulation, Deliver), `label`, `starred`, `onClick`, `onStar`.
- Lay them out three across (`de-grid-3`, `bc-space-2` gap) inside a Panel.
- Labels are imperative and specific — verb, object, condition: "Run a tolerance stack-up on a bracket assembly". One line; it truncates with an ellipsis and keeps the full text in `title`.
