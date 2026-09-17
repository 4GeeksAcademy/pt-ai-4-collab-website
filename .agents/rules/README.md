# Agent Rules

This directory contains rules for developing code for this collaborative project.  Rules will be separate, self-contained files in this folder, and are listed in an index in this file.

## Index

| File | Scope |
|------|-------|
| [01-scope-and-ownership.md](01-scope-and-ownership.md) | Feature boundaries, protected shared surfaces, and handoffs |
| [02-safe-editing-and-git.md](02-safe-editing-and-git.md) | Non-destructive editing, Git safety, and conflict handling |
| [03-html-css-accessibility.md](03-html-css-accessibility.md) | Semantic HTML, responsive CSS, and accessibility |
| [04-validation-and-handoff.md](04-validation-and-handoff.md) | Testing, browser checks, diffs, and handoff format |
| [05-data-and-security.md](05-data-and-security.md) | Input safety, dependencies, external resources, and privacy |

## Quick Reference: Do / Don't

| Situation | Do | Don't |
|-----------|----|-------|
| Starting work | Inspect status and relevant files; define a narrow feature surface | Assume a shared file is safe to rewrite |
| Editing | Make small, focused, compatible changes | Reformat or refactor unrelated code |
| Shared files | Keep changes minimal and coordinate dependencies | Overwrite another contributor's work |
| Git | Review the diff and preserve existing changes | Reset, clean, force-push, or rewrite history |
| Styling | Scope selectors and reuse existing patterns | Add broad global selectors casually |
| Accessibility | Test keyboard use, focus, contrast, and responsive layouts | Treat visual similarity as sufficient |
| Completion | Run checks and report exact verification | Claim tests passed when they were not run |
| Handoff | List files, contracts, assumptions, and follow-up work | Leave integration details implicit |

## How to use these rules

Agents should read this index and the rules relevant to their task before editing. These rules complement project instructions in `AGENTS.md`; if instructions conflict, stop and ask the project owner rather than guessing. Rules are intentionally separate and self-contained so they can be updated without rewriting every feature brief.
