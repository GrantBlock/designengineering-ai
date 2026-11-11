# 3D Designer: Feature Spec (P08, merged with P20)

Status: **Draft (not yet approved by Grant)** · Created 2026-11-11 · Owner: Grant Block

How to use this file: Grant edits it in detail. Lines marked `[stated]` are Grant's words or decisions. Everything else is a draft from Claude. Fields in `[brackets]` are placeholders for Grant. Mark assumptions `(A)`. Never delete earlier lines; add a new dated line instead.

Prototype: `../exports/P08-3d-viewer/index.html` (desktop and mobile, one responsive page). The prototype is a design preview: the sample model is a placeholder drawn by a small built-in renderer, and the assistant replies are canned text.

## 1. Purpose

The 3D designer is the builder for 3D design. You describe a part or an assembly in chat; the assistant builds it and shows it in a 3D view. Models live in Vault and can be referenced from any new chat to make variations and alternatives.

## 2. Decisions stated by Grant

- [stated] 2026-11-11: P08 (3D viewer) and P20 (3D designer) are the same page. It is the builder for 3D design.
- [stated] 2026-11-11: It opens from Design in the primary navigation.
- [stated] 2026-11-11: It also appears inside a project chat when that skill is loaded.
- [stated] 2026-11-11: 3D models are stored in Vault and can be referenced in new chats to make variations and alternatives.
- [stated] 2026-11-11: No manual modeling tools. The designer is chat only.
- [stated] 2026-11-11: Features are not discussed yet; this spec is where Grant fills them in.

Context from the App Plan (not decisions here): the first CAD milestone is a spacer-class part model and drawing, paid by usage from a wallet or Starter bundle; the viewer is Three.js (D8, not yet approved); uploads (STEP, OBJ) are prepared into viewer-ready files by a background job.

## 3. Where it appears

| Entry point | What happens | Status |
| --- | --- | --- |
| Design, in the primary navigation | Opens the designer full page | Drafted |
| Project chat, when the skill is loaded | A compact designer appears in the conversation, with an Open in designer button | Not designed. [How the skill is loaded: ] |
| Vault | Open a saved model in the designer | Not designed. [ ] |
| New chat | Reference a Vault model to make variations and alternatives | Drafted as the Vault button in the composer. [ ] |

## 4. Desktop layout

Left to right: sidebar, 3D view with a version strip under it, designer panel (380px wide).

| ID | Element | What it does | Status |
| --- | --- | --- | --- |
| UI01 | 3D view | Drag to rotate, scroll to zoom, shift-drag to pan, arrow keys to orbit. Click a part to select it. | Drafted |
| UI02 | View buttons | Iso, Front, Top, Right. The camera animates to each. | Drafted |
| UI03 | Display toggle | Shaded or Wire. | Drafted |
| UI04 | Fit button | Resets zoom and pan. | Drafted |
| UI05 | Version strip | One chip per version (Original, Alternative A, B, C). Selecting a chip shows that version. | Drafted |
| UI06 | Header card | Design name, In Vault tag, current version name. | Drafted |
| UI07 | Panel tabs | Chat, Parts, Details. Chat is the default. | Drafted |
| UI08 | Chat thread | Your requests and the assistant's replies. A request that changes the model creates a new version. | Drafted (canned replies) |
| UI09 | Composer | Describe a change or an alternative. Enter sends. | Drafted |
| UI10 | Vault button | Reference a model from Vault in this chat. | Button only; the picker is not designed |
| UI11 | Reference chip | Shows the Vault model a request refers to. | Drafted |
| UI12 | Parts tab | List of parts with body counts. Select a part; eye icon hides or shows it. | Drafted |
| UI13 | Details tab | Whole model or selected part: bodies, size L × W × H in mm, material. | Drafted (material is a placeholder) |
| UI14 | Save to Vault | Saves the current version to Vault. | Button only |
| UI15 | Download | Download the model. [Formats: ] | Button only |
| UI16 | Context label | Composer shows the selected part, so a request can target it. | Drafted |

## 5. Mobile layout (under 760px)

Header with back button, then the 3D view (views on one row, Shaded and Wire at the bottom of the view), the version strip, the Chat, Parts and Details tabs, and the composer in the bottom dock above the four tabs. `[Grant: should mobile be full design or view and ask only? ]`

## 6. States

| State | Status |
| --- | --- |
| No model yet (start screen: describe a part, or reference a Vault model) | Not designed |
| Assistant is working on a change | Basic delay only. [Progress display: ] |
| Change could not be applied | Not designed |
| Unsaved changes | Not designed |
| Saved to Vault | Tag only |
| Model still preparing for viewing | Not designed (see P07 preparing state) |

## 7. Vault and versions

- Models are stored in Vault. [Folder layout, naming, who can see them: ]
- Each request that changes the model makes a new version, named Alternative A, B, C and so on. [Naming and renaming: ]
- A variation is linked to the version it came from. [How the link is shown: ]
- Referencing a model in a new chat works on a copy or on the original. [ ]

## 8. In project chat

[Describe how the designer appears in a project chat, how the skill is loaded, what is shown inline and what opens full page: ]

## 9. Chat behavior

- Requests are plain language ("make it 200 mm wider"). [Examples of what must work: ]
- The assistant replies in first person singular (Draft, same as the design system).
- Wallet cost per change: [ ] (CAD generation is paid by usage).

## 10. Out of scope

- Manual modeling tools (sketch, extrude, fillet, dimension) [stated 2026-11-11].
- [Direct geometry editing of a STEP file: ]
- [Drawings: App Plan says drawings come after CAD generation]

## 11. Placeholder content in the prototype

Sample model (palletizer conveyor frame with six parts), part names and sizes, materials marked (A), version names and sizes, and the three canned chat messages. None of it is real data. The assistant name is `[Assistant name]`.

## 12. Grant's notes

[Free space for Grant to edit.]

## Log

- [stated] 2026-11-11: Spec created from the P08 prototype after Grant merged P08 and P20 and chose chat-only building.
