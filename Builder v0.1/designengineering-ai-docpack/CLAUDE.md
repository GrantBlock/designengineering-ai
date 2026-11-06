# CLAUDE.md — designengineering.ai plans

This repo holds the business plan, product plan and decision logs for designengineering.ai, a Block Concepts LLC product. The owner is Grant Block.

## Start of every session
1. Read `README.md`. It covers which file wins, the product line, and what's awaiting review.
2. Read `memory/sba-plan-memory.md` and `memory/app-plan-memory.md` before proposing changes to a decision.
3. Resume from the first open item in `docs/claude-docs/Progress-Tracker.md`, unless Grant asks for something else.

## Working rules
- Communication is direct and professional. Keep outputs concise and structured.
- Work iteratively: propose a change, get Grant's answer, then edit. Don't make large one-shot rewrites.
- When something is ambiguous, ask before editing. End replies on a section with the questions that need Grant's input.
- Write for a lender or investor: plain language, industry-standard terms, advanced concepts explained.
- Numbers are estimates: no "~" and no "rounded" labels. Keep the base case conservative. Don't cut expenses or raise base revenue to close gaps; show upside separately.
- Mark assumptions with (A) and placeholders with [brackets].
- Product scope: automation design first; other design industries come later.

## Keeping files in sync
A change to pricing, levels or numbers touches all of these. Update them together:
1. `docs/word/BC-designengineering-ai-SBA-Business-Plan.docx` (source of truth)
2. `docs/word/BC-designengineering-ai-SBA-Plan-Summary.docx`, if the change is summarized there
3. `docs/claude-docs/SBA-Business-Plan.md` (mirror of the Word plan)
4. `docs/claude-docs/App-Plan.md`, if the change affects product, levels or metering
5. `docs/claude-docs/Progress-Tracker.md` (status and open items)
6. The matching memory log

## Editing the Word files
- Edit the Word files in place with python-docx, or by editing the XML and rezipping. Keep the existing styles, table shading and fonts.
- A table row is added by copying a neighboring row, then the zebra shading is reapplied.
- Text in one paragraph can span several runs, so replace text across runs.
- The summary must stay on one page. To check, convert to PDF with LibreOffice (`soffice --headless --convert-to pdf`) and confirm the page count.
- After editing a Word file, regenerate its markdown copy: `pandoc <file>.docx -t gfm --wrap=none -o docs/word-markdown/<file>.md`.

## Logging decisions
For every decision Grant makes, add a dated line to the matching memory log:
`- [stated] YYYY-MM-DD: <decision in Grant's words>`

Drafts or proposals that Grant hasn't approved go on a line starting with `Draft (not yet approved by Grant):`. Don't delete earlier lines; later lines override them.
