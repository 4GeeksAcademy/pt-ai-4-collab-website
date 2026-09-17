# Safe Editing and Git

## Rules

- Inspect `git status` and the relevant files before editing. Keep unrelated existing changes intact.
- Make small, reviewable changes. Avoid mass formatting, generated-file churn, and unrelated whitespace changes.
- Never run destructive commands such as `git reset --hard`, `git checkout --`, `git clean`, or broad file deletion unless the user explicitly requests it.
- Do not amend, squash, force-push, or rewrite another contributor’s commits unless explicitly instructed.
- Do not commit, push, merge, or resolve conflicts on behalf of the team unless explicitly requested.
- Do not modify secrets, credentials, personal data, or environment-specific files. Never add secrets to source, examples, logs, or documentation.
- Do not introduce dependencies, remote scripts, analytics, tracking, or external services without approval.
- Preserve existing filenames and public IDs/classes unless a compatibility impact is understood.
- Review the diff after editing and call out anything that appears unrelated or unexpected.

## Conflict protocol

If a file changes while you are working, stop and re-read it before continuing. Preserve both contributions where possible; do not blindly overwrite the file. Describe unresolved conflicts instead of guessing.
