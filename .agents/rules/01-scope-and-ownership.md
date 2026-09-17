# Scope and Ownership

## Purpose
Keep agents from stepping on one another while allowing parallel work.

## Rules

- Before editing, inspect the relevant files and identify the smallest feature-owned surface.
- Work only on the requested feature and its direct dependencies. Do not refactor unrelated code, rename shared files, or “clean up” neighboring features without agreement.
- Prefer adding a focused component, section, class, or data entry over rewriting a whole shared file.
- Treat `index.html`, `style.css`, `learn.json`, `server.py`, and shared configuration as protected shared surfaces. Change them only when necessary, and keep the diff minimal.
- If a change affects another feature, document the dependency in the handoff and coordinate with its owner before proceeding.
- Do not overwrite or revert existing work that you did not create. If the current state conflicts with the task, preserve it and report the conflict.
- If ownership is unclear, stop before making a broad change and ask for clarification.

## Handoff

When finishing, report:

1. What was changed.
2. Which files were changed.
3. Any shared files or APIs touched.
4. What remains for another contributor.
5. How the work was verified.
