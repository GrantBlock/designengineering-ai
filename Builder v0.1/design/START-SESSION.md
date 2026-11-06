# Start a design session

Open a new Claude Code session on this repo (`grantblock/designengineering-ai`), then paste:

```
Read Builder v0.1/CLAUDE.md, then Builder v0.1/design/README.md.
1. Open design/UI-Progress-Tracker.md and tell me the first open page (or use the page I name: ____).
2. Read design/DESIGN-SYSTEM.md and every file in design/exports/ for the finished pages, so the new page matches them. If the design system is still a placeholder, extract it from the P01/P02 exports first and ask me to approve it.
3. Design that page with the Design artifact type (quickstart intent "design"). Follow the design system exactly. Ask me before introducing any new pattern.
4. When I approve it, export the HTML to design/exports/<ID>-<name>/, set the tracker row to Done with the export path, add any new design-system decisions as dated lines, commit and push to the session branch.
Propose, get my answer, then edit. End with the questions you need from me.
```

Tip: name the page in step 1 to skip ahead. Desktop and mobile versions of a page go in the same export folder.
