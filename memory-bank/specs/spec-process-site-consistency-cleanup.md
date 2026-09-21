---
title: Site Consistency and Metadata Cleanup
version: 1.0
date_created: 2026-09-21
last_updated: 2026-09-21
owner: Website team
tags: [process, design, seo, accessibility, tailwind, navigation]
---

# Introduction

This specification defines a cleanup project for consistent navigation, footer markup, page background colors, Tailwind theme values, page titles, and metadata across the Su Misura static website.

The homepage is the source of truth for the global navbar, footer, and default page background. Other pages must adopt the homepage shell rather than maintaining page-specific variations.

## 1. Purpose & Scope

### 1.1 Purpose

The cleanup shall:

- Standardize the navbar, footer, and default page background across all current and future pages.
- Ensure existing demo pages provide clear, valid links to one another.
- Replace repeated Tailwind arbitrary color and design values with named values in a shared `@theme` block.
- Establish consistent page-title formatting.
- Bring the catalog page’s metadata and SEO baseline into alignment with the homepage.
- Preserve the existing static HTML, Tailwind browser CDN, and relative-route architecture.

### 1.2 Current files in scope

- `index.html`
- `catalog/index.html`
- `style.css`
- `script.js`, only if required to preserve or extend existing shell behavior
- `memory-bank/specs/README.md`
- This specification

### 1.3 Current inconsistencies

The homepage currently contains the more complete global shell, including:

- Responsive primary navigation.
- Mobile menu behavior.
- Search and account utilities.
- Bag count semantics.
- Footer link groups for customer care, the house, and policies.
- Shared accessibility hooks and class names.
- Cream (`#f6f0e8`) as the default page background.

The catalog currently has a separate “Catalog navigation” with fewer destinations, a reduced footer, and an explicitly applied page background that must be aligned with the homepage shell. This catalog shell must be replaced with the homepage shell adapted for its relative path depth.

## 2. Definitions

| Term                     | Definition                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Homepage shell           | The navbar and footer currently implemented in `index.html`.                                                                   |
| Global shell             | The shared header, navigation, utilities, skip link, footer, and default page-surface treatment used on every page.            |
| Default page background  | The background applied to the document body and primary page surfaces. The homepage source-of-truth value is Cream, `#f6f0e8`. |
| Theme token              | A named custom value declared in a Tailwind `@theme` block.                                                                    |
| Arbitrary Tailwind value | A utility value written directly inside brackets, such as `bg-[#f6f0e8]`.                                                      |
| Page name                | The human-readable name inserted into a non-homepage title.                                                                    |
| SEO baseline             | The homepage’s applicable metadata conventions, including description, robots directives, and canonical handling.              |

## 3. Requirements, Constraints & Guidelines

### 3.1 Global shell and background

- **SHELL-REQ-001**: The homepage navbar and footer shall be treated as the source of truth.
- **SHELL-REQ-002**: Every current and future page shall use the same global shell structure, labels, utility actions, footer groups, accessibility hooks, and responsive behavior as the homepage.
- **SHELL-REQ-003**: The catalog page shall no longer use a catalog-specific navbar or reduced footer.
- **SHELL-REQ-004**: Relative links shall be adjusted for nested pages without changing their destination meaning.
- **SHELL-REQ-005**: Active-page state shall use the same visual and semantic conventions as the homepage shell.
- **SHELL-REQ-006**: The existing skip-link, `main-content` target, mobile-menu attributes, bag-count hook, and footer navigation landmarks shall remain valid.
- **SHELL-REQ-007**: The homepage shall remain visually and behaviorally unchanged except where required to introduce shared tokens.
- **SHELL-REQ-008**: All pages shall use the homepage’s Cream background color, `#f6f0e8`, as the default document/page background.
- **SHELL-REQ-009**: The default background shall be applied consistently to the page body and primary shell surfaces, including the header where applicable.
- **SHELL-REQ-010**: Page-specific sections may use approved contrasting surfaces such as Parchment (`#e9ded0`), Off-white (`#fffdfc`), or Espresso (`#2b1b16`) only when they serve a defined content or interaction purpose.
- **SHELL-REQ-011**: A page shall not introduce an alternate default background color without documenting and approving the exception in the relevant page specification.
- **SHELL-REQ-012**: Existing demo pages shall link to one another through the shared shell or an intentional page-level navigation element.
- **SHELL-REQ-013**: Every cross-page demo link shall use a valid relative route for the page where it appears. Links from `catalog/index.html` shall account for the catalog directory depth.
- **SHELL-REQ-014**: Cross-page links shall use stable, descriptive visible labels or accessible names. They shall not rely on placeholder `href="#"` values or undocumented query-string destinations.
- **SHELL-REQ-015**: The homepage and catalog shall each expose a discoverable path to the other page. The homepage may link to the catalog through its existing shopping/navigation controls, and the catalog shall link back to the homepage through the shared wordmark or equivalent home control.

If the existing global navigation specification conflicts with the homepage’s current implementation, the homepage remains authoritative for this cleanup. A future change to the global navigation model must update the global-navigation specification before changing the shell again.

### 3.2 Tailwind theme tokens

- **THEME-REQ-001**: Repeated custom color values shall be declared as named variables in a shared Tailwind browser CDN `@theme` block.
- **THEME-REQ-002**: The shared theme block shall be available to every page that uses Tailwind utilities.
- **THEME-REQ-003**: The initial color-token inventory shall include:

| Token               | Value     |
| ------------------- | --------- |
| `--color-espresso`  | `#2b1b16` |
| `--color-cream`     | `#f6f0e8` |
| `--color-parchment` | `#e9ded0` |
| `--color-chestnut`  | `#5a3425` |
| `--color-saddle`    | `#9a6040` |
| `--color-cognac`    | `#c58a5a` |
| `--color-muted`     | `#765f53` |
| `--color-off-white` | `#fffdfc` |

- **THEME-REQ-004**: Repeated custom typography values may receive tokens when they represent a reusable design decision, including recurring tracking, leading, or negative tracking values.
- **THEME-REQ-005**: Standard Tailwind spacing, sizing, grid, and aspect-ratio utilities shall not be tokenized merely because they appear in brackets.
- **THEME-REQ-006**: Existing custom CSS values in `style.css` may remain when they are component-specific or cannot be expressed clearly through the CDN theme.
- **THEME-REQ-007**: The cleanup shall not add a Tailwind CLI build step, generated stylesheet, package, plugin, or dependency.

Example:

```html
<style type="text/tailwindcss">
  @theme {
    --color-espresso: #2b1b16;
    --color-cream: #f6f0e8;
    --color-parchment: #e9ded0;
    --color-chestnut: #5a3425;
    --color-saddle: #9a6040;
    --color-cognac: #c58a5a;
    --color-muted: #765f53;
    --color-off-white: #fffdfc;
  }
</style>
```

### 3.3 Page titles

- **TITLE-REQ-001**: The homepage title shall be exactly:

```text
Su Misura | Considered essentials, made in Italy
```

- **TITLE-REQ-002**: Every non-home page shall use:

```text
Su Misura | {page name}
```

- **TITLE-REQ-003**: The catalog title shall be:

```text
Su Misura | Catalog
```

- **TITLE-REQ-004**: The old format `Catalog — Su Misura` shall not remain.
- **TITLE-REQ-005**: Future page names shall be concise, human-readable, and consistently capitalized. Examples include `Product`, `Bag`, `Checkout`, `About`, `Search`, and `Account`.

### 3.4 Catalog metadata and SEO

- **SEO-REQ-001**: The catalog shall include the homepage’s applicable metadata baseline.
- **SEO-REQ-002**: The catalog shall include a page-appropriate description that preserves the homepage’s intent: considered Italian products designed for everyday living.
- **SEO-REQ-003**: The catalog shall include:

```html
<meta name="robots" content="index, follow" />
```

- **SEO-REQ-004**: The catalog shall include a canonical URL for the catalog route, not a copied homepage canonical.
- **SEO-REQ-005**: Canonical URLs shall remain compatible with the project’s static relative deployment model.
- **SEO-REQ-006**: Existing product structured-data metadata, including `priceCurrency` and `price`, shall be preserved.
- **SEO-REQ-007**: Metadata copied from the homepage shall be evaluated for page relevance; homepage-specific wording must not be copied blindly.
- **SEO-REQ-008**: The catalog’s language, viewport, title, description, robots, canonical, and Tailwind/style resources shall be defined in its document head.

## 4. Interfaces & Data Contracts

### 4.1 Shared shell contract

Each page shall contain:

```html
<a class="skip-link" href="#main-content">Skip to main content</a>
<header class="site-header">
  <!-- homepage-equivalent header -->
</header>

<main id="main-content">
  <!-- page content -->
</main>

<footer class="site-footer">
  <!-- homepage-equivalent footer -->
</footer>
```

Required stable hooks include:

- `.site-header`
- `.site-header__inner`
- `.site-header__brand`
- `.site-nav`
- `.site-nav__toggle`
- `[data-mobile-menu]`
- `.site-header__utilities`
- `[data-bag-count]`
- `.site-footer`
- `.site-footer__inner`
- `.skip-link`

### 4.2 Metadata contract

Each page shall have:

```html
<meta name="description" content="..." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="..." />
<title>Su Misura | ...</title>
```

The homepage is the only exception to the general title pattern.

### 4.3 Theme contract

All pages using Tailwind shall load the same theme token definitions. Token names shall be stable once introduced.

### 4.4 Demo-page link contract

The current demo-page route map shall be treated as follows:

| Page     | Route                | Required cross-page behavior                |
| -------- | -------------------- | ------------------------------------------- |
| Homepage | `index.html`         | Provides a valid link to the catalog page.  |
| Catalog  | `catalog/index.html` | Provides a valid link back to the homepage. |

Recommended relative links are:

```html
<!-- From index.html -->
<a href="catalog/index.html">Catalog</a>

<!-- From catalog/index.html -->
<a href="../index.html">Su Misura</a>
```

If query-string views are retained for a demo interaction, the base page route must still resolve correctly and the destination must be documented. A link must not appear to be a finished navigation path while pointing to a missing page.

## 5. Acceptance Criteria

- **AC-001**: Given the catalog page loads, when its header and footer are inspected, then they match the homepage shell structure, labels, utility actions, footer groups, and accessibility hooks.
- **AC-002**: Given a user visits the catalog from a nested route, when they activate the homepage-equivalent brand, navigation, utility, or footer link, then the link resolves using a valid relative path.
- **AC-003**: Given any current-page navigation item, when the page is active, then it has both a visible active state and `aria-current="page"`.
- **AC-004**: Given Tailwind classes are inspected, when a repeated brand color is used, then it references a named theme token rather than repeating a color arbitrary value.
- **AC-005**: Given a standard Tailwind spacing or layout value is used, when it is not a reusable design token, then it remains a standard utility and is not unnecessarily promoted to the theme.
- **AC-006**: Given any current or future page loads, then its default document background matches the homepage Cream value, `#f6f0e8`.
- **AC-007**: Given a page contains tinted, card, or footer sections, then any alternate background is limited to an approved theme token and does not replace the default page background.
- **AC-008**: Given the homepage and catalog are viewed at the same viewport size, then their surrounding page background color is visually consistent outside intentionally tinted content sections.
- **AC-009**: Given the homepage loads, then its title remains exactly `Su Misura | Considered essentials, made in Italy`.
- **AC-010**: Given the catalog loads, then its title is exactly `Su Misura | Catalog`.
- **AC-011**: Given a non-home page title is inspected, then it follows `Su Misura | {page name}` and does not use the former em-dash format.
- **AC-012**: Given the catalog head is inspected, then it contains a relevant description, `robots` with `index, follow`, and a catalog-specific canonical URL.
- **AC-013**: Given product structured-data metadata exists in the catalog, then it remains present and valid after cleanup.
- **AC-014**: Given keyboard navigation is used, then skip navigation, menu controls, current-page state, bag count, and footer links remain accessible.
- **AC-015**: Given the static site is served from its existing server, then there are no broken shell links, missing styles, or console errors.
- **AC-016**: Given the final diff is reviewed, then only the intended shell, theme, metadata, specification, and directly related files have changed.
- **AC-017**: Given a user starts on the homepage, when they inspect the shopping/navigation controls, then they can follow a valid link to `catalog/index.html`.
- **AC-018**: Given a user starts on the catalog page, when they activate the wordmark or equivalent home control, then they can return to `../index.html`.
- **AC-019**: Given all links between existing demo pages are inspected, then each link has a valid relative target, a descriptive label or accessible name, and no placeholder-only destination.

## 6. Test Automation Strategy

- Use `git diff --check`.
- Inspect all HTML titles and metadata with a text-based validation script or browser inspection.
- Search HTML files for remaining repeated arbitrary brand colors.
- Verify that each page has one skip link, one main landmark, one header, and one footer.
- Run the site with `python3 server.py`.
- Test the homepage and catalog at mobile and desktop widths.
- Test keyboard focus, skip navigation, mobile menu behavior, active-page state, and footer navigation.
- Inspect the browser console for broken links and runtime errors.
- Confirm nested catalog links resolve correctly.
- Verify the homepage-to-catalog and catalog-to-home links from both document locations.
- Check that links do not depend on the current URL query string to resolve the other demo page.
- Use an accessibility audit where available.

## 7. Rationale & Context

A single shell prevents navigation drift and reduces accessibility regressions. Treating the homepage as the source of truth also makes future pages easier to implement because contributors can copy one known-good structure.

A consistent Cream page background prevents abrupt visual changes between routes and makes the site feel like one cohesive experience. Alternate surfaces remain available for intentional content grouping, cards, filters, and footer treatments.

Named theme tokens make the brand palette explicit, reduce repetition, and make future visual adjustments safer. The cleanup intentionally distinguishes reusable design tokens from one-off layout values so the theme does not become an indiscriminate replacement for standard Tailwind utilities.

Consistent titles improve browser usability, search presentation, and page identification. Catalog metadata should inherit the homepage’s SEO conventions while retaining catalog-specific descriptions and canonical URLs.

## 8. Dependencies & External Integrations

### Infrastructure Dependencies

- **INF-001**: Existing `server.py` static server.
- **INF-002**: Tailwind CSS browser CDN.
- **INF-003**: Relative static page deployment.

### Technology Platform Dependencies

- **PLT-001**: Semantic HTML.
- **PLT-002**: Existing `style.css`.
- **PLT-003**: Existing `script.js` for homepage menu and shell behavior.

### Compliance Dependencies

- **COM-001**: WCAG 2.2 accessibility target.
- **COM-002**: Search-engine metadata should use valid, page-specific canonical and description values.

## 9. Examples & Edge Cases

### Correct titles

```html
<title>Su Misura | Considered essentials, made in Italy</title>
```

```html
<title>Su Misura | Catalog</title>
```

### Incorrect title

```html
<title>Catalog — Su Misura</title>
```

### Nested canonical example

The catalog canonical must identify the catalog route in the project’s deployment model:

```html
<link rel="canonical" href="catalog/" />
```

If deployment requires a different absolute canonical format, that format must be documented and applied consistently to every page.

### Token usage example

```html
<div class="bg-cream text-espresso border-parchment">...</div>
```

### Non-tokenized one-off layout example

A one-off grid or aspect ratio should remain a bracket utility when it is not part of the shared design vocabulary:

```html
<div class="grid-cols-[.9fr_1.1fr] aspect-[4/5]">...</div>
```

## 10. Validation Criteria

The cleanup is ready for implementation review when:

1. The homepage shell and Cream page background are documented as the source of truth.
2. Catalog shell parity requirements are explicit.
3. Shared Tailwind tokens are defined and available to all pages.
4. Page-title rules and mappings are explicit.
5. Catalog metadata and canonical behavior are explicit.
6. Accessibility and relative-link requirements are testable.
7. The implementation plan does not require a build pipeline or new dependency.
8. The specification and project-spec index are updated together.

## 11. Related Specifications / Further Reading

- [Global Navbar and Footer Specification](spec-design-global-navigation-shell.md)
- [Project Specs Index](README.md)
- `memory-bank/style-guidelines.md`
- `memory-bank/architecture.md`
- `index.html`
- `catalog/index.html`
