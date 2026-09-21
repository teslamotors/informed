# Working in informed with Claude Code

Guidance for [Claude Code](https://claude.com/claude-code) and similar agents. It records
the things about this repo that are not obvious from reading a single file.

## Commands

```sh
npm ci                  # install
npx jest                # full suite — fast, run it, don't guess
npx jest __tests__/hooks/useFormApi.test.js   # single file
npm run test:coverage
npx eslint src/** __tests__/**
npx prettier -l <files> # list files that are not formatted
npm run build           # rollup -> dist/
```

Git hooks are real and they run: `pre-commit` runs lint-staged (`eslint --fix` and
`prettier --write`, **on `src/*.js` only**) and `pre-push` runs the full test suite.

## Where things live

- `src/FormController.js` — the core. Owns `state`, the field registry (`fieldsMap`), and
  nearly every public API method. Most feature work lands here.
- `src/hooks/` — `useField`, `useFormApi`, `useFieldState`, `useScopedApi`, and the
  subscription hooks that decide when a field re-renders.
- `src/ObjectMap.js` — path-addressed get/set over the state objects.
- `index.d.ts` — hand-maintained TypeScript types. **Adding a public API method means
  editing this file too**; it is not generated.
- `__tests__/` — jest + jsdom + Testing Library. `jest/components.js` holds the `Form`,
  `Input` etc. used by the tests.
- `vitedocs/` — the docs **source**.
- `docs/` — **generated output. Never edit it by hand.** `npm run build:docs` starts with
  `rm -r docs/`, so hand edits are deleted without warning. Edit `vitedocs/` instead.

## Conventions that are easy to get wrong

**State is addressed by path, not by key.** Field names like `spouse.age` or
`friends[0].name` are paths into `state.values` / `state.errors` / etc. Use
`ObjectMap.get` / `ObjectMap.set` rather than indexing the object directly.

**`ObjectMap.set(obj, path, undefined)` deletes.** Setting undefined is a special case
that removes the key (or splices the array element) instead of storing `undefined`. This
is what makes `ObjectMap.empty(state.errors)` a valid "is the form valid" check, so do
not "fix" it by assigning undefined directly.

**Re-renders come from `emit`.** `this.emit('field', name)` re-renders that field;
`this.emit('field', '_ALL_')` re-renders all of them. An API method that changes state
without emitting will update `getFormState()` while leaving the UI stale — and a test
that only asserts on `getFormState()` will not catch it. For anything that touches many
fields at once, prefer one `'_ALL_'` broadcast over a loop that emits per field; see
`setValues` and `validate` for the established shape.

**Match the existing pair when adding an API.** Bulk setters come in two flavours:
`setValues` replaces everything (clearing what you omit) and `setTheseValues` only sets
what is present. New bulk APIs are expected to follow that split.

**`useScopedApi` is per-field only.** It deliberately does not carry `setValues` and
friends, so do not add scoped variants of bulk methods.

## Tests

Follow the house pattern in `__tests__/hooks/useFormApi.test.js`: render a `<Form>` with
a `formApiRef`, drive it inside `act(...)`, and assert against
`formApiRef.current.getFormState()` using the file's local `getState(...)` helper, which
fills in the full default state so the assertion is exhaustive.

When the change affects what the user sees, add a render-level assertion too — pass
`showErrorIfError` to an `Input` and assert the message is in the document. State-only
assertions cannot tell a working re-render from a broken one.

## Before opening a PR

- `npx jest` — compare against `master` rather than reading the number cold.
- `npx eslint` and `npx prettier -l` on the files you touched.
- **Some files in `vitedocs/` are not prettier-clean on `master`.** Check with
  `git stash` first; if a file was already unformatted, do not run `prettier --write` on
  it, or your diff will bury the real change under unrelated reformatting.
- `npm run test:ts` currently reports ~76 pre-existing `Cannot find namespace JSX`
  errors. That is a config issue, not your change. Confirm the count and the messages are
  unchanged rather than trying to fix them.
- **Do not edit `CHANGELOG.md` or bump the version.** The maintainer does both at release
  time; contributor PRs touch neither.
- Reference the issue in the PR body (`Closes #123`).
