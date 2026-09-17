# AGENTS.md

This is a small collaborative HTML/CSS website. Multiple agents may work on separate features at the same time, so keep changes narrow, compatible, and easy to review.

## Check files in this order

Before editing, inspect the following in order:

1. `AGENTS.md` — these project-wide instructions.
2. `.agents/rules/README.md` — the rule index and quick reference.
3. The relevant rule files under `.agents/rules/`.
4. `git status --short` — existing work that must be preserved.
5. The relevant files under `memory-bank/`.
6. The files directly related to the requested feature.
7. `README.md` and the relevant localized README when project behavior or setup is unclear.

Do not assume that an empty or starter file is unused; verify its role before changing it.

## Project overview

- `index.html` is the current page entry point.
- `style.css` contains shared page styles.
- `learn.json` contains project metadata and localized text.
- `server.py` serves the site locally on port `3000`.
- `README.md`, `README.cn.md`, and `README.es.md` contain project documentation.
- `memory-bank/architecture.md` defines the planned pages, technology choices, and serving approach.
- `memory-bank/product-context.md` contains product context and should be checked before changing user-facing behavior or content.
- `memory-bank/style-guidelines.md` is the source of truth for brand styling, typography, layout, interaction, accessibility, and content voice.
- `memory-bank/specs/` contains feature specifications. Read the relevant specification before implementing a feature; update or add a specification when the requested work needs durable requirements or interfaces.
- `skills-lock.json` records installed project skills and their source metadata.
- `.agents/rules/` contains detailed collaboration rules.

## Memory-bank precedence

- Treat the memory bank as project context, not as an excuse to change unrelated files.
- Follow `style-guidelines.md` for visual and interaction decisions unless a feature specification explicitly defines a narrower, compatible exception.
- Follow `architecture.md` for page structure, stack, and integration boundaries. If implementation and architecture disagree, report the discrepancy before making a broad change.
- Use `product-context.md` to preserve the intended audience, product direction, and tone.
- Specifications in `memory-bank/specs/` take precedence for their named feature. Do not invent missing requirements; record assumptions and ask for clarification when they affect scope or behavior.
- Keep memory-bank documents synchronized with meaningful changes to architecture, product decisions, design rules, or feature contracts. Do not edit them merely to document trivial implementation details.

## Skills

- Project skills are stored under `.agents/skills/` and are indexed by `skills-lock.json`.
- Before using a skill, read its `SKILL.md` and follow its required file format, naming, and output location.
- The `create-specification` skill is available at `.agents/skills/create-specification/SKILL.md`. Use it when asked to create a new AI-ready specification or when a feature requires a durable, structured specification. Its documented output convention is `/spec/spec-[a-z0-9-]+.md`; if this conflicts with the existing `memory-bank/specs/` convention, ask before creating the file and do not silently choose a location.
- Do not install, update, or replace skills unless explicitly requested. Preserve `skills-lock.json` and do not hand-edit computed hashes.
- Use skills for their intended purpose; do not invoke a specification skill for routine implementation notes or a minor code change.

## Working agreements

- Work only on the requested feature and its direct dependencies.
- Preserve unrelated edits and do not overwrite another contributor's work.
- If the task conflicts with memory-bank guidance, an existing specification, or another contributor's changes, stop and surface the conflict before guessing.
- Treat `index.html`, `style.css`, `learn.json`, and `server.py` as shared surfaces: make minimal changes and avoid unrelated refactors.
- Prefer feature-scoped classes and semantic HTML. Avoid broad global CSS selectors unless the change is intentionally global.
- Keep existing IDs, classes, data shapes, and file paths stable unless the task requires a coordinated change.
- Do not add dependencies, third-party scripts, analytics, tracking, or external services without explicit approval.
- Never add secrets or private data to this repository. Browser-delivered values are public.
- Do not run destructive Git commands such as `git reset --hard`, `git clean`, or `git checkout --` unless explicitly requested.
- Do not commit, push, merge, amend, or rewrite history unless explicitly requested.

## Validation

For a static-site change:

1. Review `git diff` and confirm that only intended files changed.
2. Run `git diff --check`.
3. Start the local site with `python3 server.py` when browser verification is needed.
4. Check the affected feature at mobile and desktop widths.
5. Test keyboard navigation, visible focus states, and basic accessibility behavior.
6. Check the browser console and page for broken links, missing assets, or runtime errors.
7. Confirm that implementation matches the applicable memory-bank guidance and feature specification.

If a check cannot be run, state that clearly in the handoff instead of claiming it passed.

## Handoff requirements

When finishing, report:

- What was implemented.
- Files added or changed.
- Commands and manual checks performed.
- Any shared surfaces, selectors, IDs, or data contracts touched.
- Known issues, assumptions, and follow-up work.

For detailed guidance, read the rules in [`.agents/rules/README.md`](.agents/rules/README.md).


