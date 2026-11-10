# AppShell

The desktop page frame every Design Engineering page starts from: a Sidebar panel beside a main column with a TopBar and a centred, scrolling content column.

- Props: `sidebar` (a Sidebar), `topbar` (a TopBar), `children` (the page content — capped at `bc-content-width`, 760px), `style`.
- Fills the viewport (`100vh`, min 560px) with `bc-shell-gap` (10px) around and between panels on `bc-canvas`.
- New pages keep this frame and change only the column: a list page puts Panels in it; a detail page puts a Hero-less heading, then content, then the Composer at the bottom.
