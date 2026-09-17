# Validation and Handoff

## Before declaring work complete

- Run the project’s available checks. For this project, start the local server with `python3 server.py` when browser verification is needed.
- Confirm the affected page loads without broken links, missing assets, JavaScript errors, or console errors.
- Check the changed behavior at mobile and desktop widths.
- Verify that existing nearby features still work.
- Review `git diff` and ensure only intended files changed.
- If a check cannot be run, say why; do not claim it passed.

## Handoff format

Use a concise summary with:

- **Implemented:** user-visible behavior and important technical details.
- **Files:** files added or changed.
- **Verification:** commands and manual checks performed.
- **Known issues:** limitations, assumptions, or follow-up work.
- **Integration notes:** selectors, IDs, data shape, or shared contracts another contributor must preserve.
