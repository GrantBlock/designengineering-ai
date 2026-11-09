# Message

One turn of the conversation: a mono author label over the text.

- Props: `from` (`user` | `assistant`), `author` (defaults to "You" / "Block Concepts"), `children`.
- The person's turns sit right, in a `bc-surface-raised` bubble with a hairline; the assistant's sit left with no bubble and a `bc-steel-blue-text` label. Body is 16px/1.6, max 620px.
- Stack turns with a 28px gap in the main column.
