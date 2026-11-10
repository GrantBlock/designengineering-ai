# ActionCard

A 236×252 mobile tile in a horizontal snap rail (`de-acard-rail`): the mobile home's entry points.

- Props: `tone` (`primary` | `secondary` | `starter`), `icon` (primary/secondary), `category` (mono kicker), `title`, `onClick`.
- One `primary` per rail, first: steel-blue fill, `bc-on-steel-blue` text — the assistant. `secondary` (raised) for a destination with a count. `starter` (surface) for a PromptCard's task, in 21px/600 sentence case.
- Primary and secondary titles are uppercase 28px/800.
