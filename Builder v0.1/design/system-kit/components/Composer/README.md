# Composer

The main input: a light `bc-field` island with a textarea and a toolbar (attach, Project picker, context, send).

- Props: `placeholder`, `value`/`defaultValue`, `onChange(text)`, `onSend(text)`, `onAttach`, `picker` (label, or `false`), `meta` (mono context line, e.g. "Mechanical · Controls").
- Enter sends, Shift+Enter breaks a line. Send arms only when there is text.
- Placeholder names what to describe: "Describe the problem, the part or the process". Sit it in the main column, sticky at the bottom once a conversation starts.
