---
title: Global Navbar and Footer Specification
version: 1.0
date_created: 2026-09-17
last_updated: 2026-09-17
owner: Website team
tags: [design, architecture, accessibility, navigation, shared-components]
---

# Introduction

This specification defines the shared navigation shell for every page in the Su Misura online-store prototype. It covers the global navbar, mobile navigation behavior, utility actions, footer, responsive rules, accessibility requirements, and integration contracts. The implementation must remain compatible with the project’s static semantic HTML architecture and the project’s Tailwind CSS browser CDN setup. It must not require a JavaScript framework, a Tailwind build pipeline, or additional dependencies.

## 1. Purpose & Scope

### 1.1 Purpose

Provide a consistent, recognizable, keyboard-accessible way to move between the planned store pages:

- Home (`/` or the current home entry point)
- Product catalog (`/catalog/`)
- Single product view (`/product/`)
- Cart (`/cart/`)
- Checkout (`/checkout/`)

The shell must make the brand identity, primary shopping paths, account/search utilities, and supporting information available on every page.

### 1.2 In scope

- Semantic global header and footer markup.
- Desktop and mobile navigation layouts.
- Primary navigation links and their active-page state.
- Search, account, wishlist, and bag/cart entry points as non-destructive navigation or clearly labeled controls.
- Mobile menu open/close behavior if scripting is introduced during implementation.
- Cart item-count presentation.
- Footer link groups, service information, legal links, and brand statement.
- Responsive, keyboard, screen-reader, focus, reduced-motion, and contrast behavior.
- A stable class, ID, and data-attribute contract for page implementations.

### 1.3 Out of scope

- Product listing, product detail, cart calculations, checkout forms, authentication, search results, wishlist persistence, or payment processing.
- CMS integration, server-side includes, framework components, analytics, tracking, or third-party widget integration.
- Final logo artwork, photography, icon library selection, or legal copy supplied by a client.
- Localization beyond preserving a structure that can accommodate translated labels.

### 1.4 Assumptions requiring confirmation during implementation

- The brand wordmark is text-based or can be represented by accessible text until approved artwork is available.
- Search, account, and wishlist destinations may initially be placeholder routes, but must not appear as dead links without an explicit “coming soon” treatment.
- The final cart count source is not yet defined. The shell must support a server-rendered or static count without requiring a data schema change.
- A menu toggle may be implemented with a small local script only if the static HTML version cannot meet the mobile interaction requirement; no framework or remote script may be added.

## 2. Definitions

| Term | Definition |
| --- | --- |
| Global shell | The shared navbar and footer rendered on every page. |
| Navbar | The global header containing brand identity, primary navigation, and utility actions. |
| Primary navigation | Links to the main shopping areas: New arrivals, Shoes, Leather goods, and About. |
| Utility navigation | Secondary actions such as Search, Account, Wishlist, and Bag. |
| Current-page state | A programmatic and visual indication that identifies the page currently being viewed. |
| Bag | The customer’s cart. Use “Bag” in visible UI copy to match the brand voice; route and implementation may use `cart`. |
| Mobile menu | The collapsible navigation panel used when the primary navigation cannot remain visible without crowding. |
| Live region | An assistive-technology announcement area used for changes such as a cart count update. |
| Touch target | The interactive area for a control; it must be at least 44 by 44 CSS pixels. |

## 3. Requirements, Constraints & Guidelines

### 3.1 Functional requirements

- **NAV-REQ-001**: Every page in the planned page set shall render the same global shell structure and shared destination labels.
- **NAV-REQ-002**: The navbar shall provide a link to the home page using the visible Su Misura wordmark or an equivalent accessible name.
- **NAV-REQ-003**: The primary navigation shall expose these destinations: `New arrivals`, `Shoes`, `Leather goods`, and `About`.
- **NAV-REQ-004**: The utility navigation shall expose `Search`, `Account`, `Wishlist`, and `Bag`, each with an accessible name and a valid destination or documented placeholder behavior.
- **NAV-REQ-005**: The Bag control shall support a count indicator. A zero count must remain understandable as zero items; the indicator must not be color-only.
- **NAV-REQ-006**: The current destination shall be indicated with both a visual treatment and `aria-current="page"` on the corresponding link. The home wordmark shall receive the state on the home page when applicable.
- **NAV-REQ-007**: The footer shall provide grouped links for customer service, company/about, and policies. Groups may be empty or reduced only when the product owner explicitly approves the omission.
- **NAV-REQ-008**: The footer shall include a concise brand statement and a copyright/legal line.
- **NAV-REQ-009**: All links shall use real relative routes or approved route placeholders. Do not use `href="#"` for a final implementation.
- **NAV-REQ-010**: If the mobile menu is collapsible, opening and closing it shall be possible with a keyboard and pointer, and the toggle shall expose its state with `aria-expanded`.

### 3.2 Visual and responsive requirements

- **NAV-VIS-001**: Use the existing brand palette: Espresso (`#2B1B16`) for dark navigation/footer surfaces and text, Cream (`#F6F0E8`) for light surfaces, Parchment (`#E9DED0`) for borders or secondary surfaces, Chestnut (`#5A3425`) for actions, Saddle (`#9A6040`) for hover/decorative states, and Cognac (`#C58A5A`) for visible focus treatment.
- **NAV-VIS-002**: The navbar shall establish a clear visual hierarchy: wordmark first, primary shopping links second, utilities third. Do not let decorative treatment compete with product content.
- **NAV-VIS-003**: The desktop shell shall use a centered content container with consistent horizontal padding and no horizontal overflow.
- **NAV-VIS-004**: The mobile shell shall keep the wordmark, menu control, and Bag control reachable without requiring horizontal scrolling. All interactive controls shall be at least 44 by 44 CSS pixels.
- **NAV-VIS-005**: At the mobile breakpoint, primary links may move into a collapsible panel. Utility actions that remain in the header must not be duplicated in a way that creates ambiguous tab stops.
- **NAV-VIS-006**: The footer shall stack link groups vertically on narrow screens and arrange them into columns at wider widths. It must not depend on hover to reveal links.
- **NAV-VIS-007**: Use feature-scoped classes such as `site-header`, `site-nav`, and `site-footer`; do not introduce broad selectors that unintentionally alter page components.
- **NAV-VIS-008**: Use short transitions in the 150–250ms range for hover/focus/menu state changes. Disable nonessential motion under `prefers-reduced-motion: reduce`.
- **NAV-VIS-009**: Prefer Tailwind utility classes in the component markup for layout, spacing, color, typography, responsive states, focus states, and motion. Use the existing `style.css` only for small project-specific rules that cannot be expressed clearly with the CDN-provided utilities.
- **NAV-VIS-010**: Use responsive Tailwind breakpoint prefixes to implement mobile-first behavior. The chosen breakpoint must be documented in the implementation and must not cause the header or footer to overflow between supported viewport widths.

### 3.3 Accessibility requirements

- **NAV-A11Y-001**: Use semantic landmarks: one `<header>` containing a `<nav aria-label="Primary">`, and one `<footer>` containing a distinct navigation landmark or clearly labeled link groups.
- **NAV-A11Y-002**: Provide a “Skip to main content” link as the first focusable element in document order. It shall target a unique `<main id="main-content">` on every page.
- **NAV-A11Y-003**: Use visible text labels for primary and footer links. Icon-only controls are permitted only when they include an accessible name via visible text, visually hidden text, or an equivalent label.
- **NAV-A11Y-004**: Preserve a visible focus indicator using Cognac or another color that meets contrast requirements against the component surface. Never remove the browser outline without an equivalent replacement.
- **NAV-A11Y-005**: Maintain WCAG AA contrast for text, links, focus indicators, and controls. Do not communicate the current page or cart state through color alone.
- **NAV-A11Y-006**: When a mobile menu opens, focus shall move to a predictable item in the menu or remain on the toggle with a documented, consistent strategy. Escape shall close the menu; focus shall return to the toggle when it closes.
- **NAV-A11Y-007**: A closed mobile menu must not leave hidden links in the keyboard tab order. A menu must not trap focus unless it is implemented as a true modal dialog with the required dialog behavior; a simple navigation disclosure is preferred.
- **NAV-A11Y-008**: If the cart count changes without a page navigation, announce the update through a polite live region and update the accessible Bag name when appropriate.
- **NAV-A11Y-009**: Screen-reader and keyboard users shall encounter the same destinations and information available to pointer users.

### 3.4 Content and security constraints

- **NAV-CON-001**: Use the quiet, assured brand voice. Prefer concise labels such as “View bag”, “Find your size”, and “Contact us”; do not use unsupported promotional claims.
- **NAV-CON-002**: Keep account, wishlist, search, and cart behavior privacy-preserving. Do not collect, transmit, or log personal information as part of the shell.
- **NAV-CON-003**: Do not add third-party scripts, analytics, remote assets, or dependencies solely for the shell.
- **NAV-CON-004**: Any dynamic text, including cart counts, shall be safely rendered as text and constrained to the expected value format.
- **NAV-CON-005**: Legal, shipping, returns, and contact copy must be treated as content requiring product-owner confirmation, not invented implementation detail.
- **NAV-CON-006**: Do not add a Tailwind CLI build step, generated CSS bundle, npm package, PostCSS configuration, or other compilation dependency for this feature.
- **NAV-CON-007**: Do not use Tailwind classes that require a custom theme, plugin, or generated safelist unless that capability is already available through the project’s CDN configuration. Prefer the project’s existing utility vocabulary and arbitrary values only when necessary and supported by the configured CDN.

## 4. Interfaces & Data Contracts

### 4.1 Required structural contract

Every page implementation shall preserve this structure conceptually, even if exact wrappers or Tailwind utility classes differ. Tailwind classes should be applied directly to these semantic elements rather than replacing the stable hooks:

```html
<a class="skip-link" href="#main-content">Skip to main content</a>
<header class="site-header">
  <div class="site-header__inner">
    <a class="site-header__brand" href="/" aria-label="Su Misura home">Su Misura</a>
    <nav class="site-nav" aria-label="Primary">
      <!-- primary links -->
    </nav>
    <nav class="site-header__utilities" aria-label="Utility">
      <!-- search, account, wishlist, bag -->
    </nav>
  </div>
</header>
<main id="main-content">
  <!-- page-specific content -->
</main>
<footer class="site-footer">
  <div class="site-footer__inner">
    <!-- statement, link groups, legal line -->
  </div>
</footer>
```

### 4.2 Link and state contract

| Element | Required contract |
| --- | --- |
| Home brand link | `site-header__brand`; valid home route; accessible name includes “Su Misura”. |
| Primary navigation | `site-nav`; each current route has `aria-current="page"`; labels remain stable across pages. |
| Utility navigation | `site-header__utilities`; each control has an accessible name and valid route or approved behavior. |
| Mobile menu toggle | `site-nav__toggle` (if used); `<button type="button">`; `aria-controls` points to the menu; `aria-expanded` is `true` or `false`. |
| Mobile menu panel | `site-nav__menu` (if used); closed state removes descendants from tab order. |
| Bag count | `data-bag-count` on the count element or an equivalent stable hook; text is a non-negative integer or approved empty-state label. |
| Cart announcement | `site-header__status` or equivalent; `role="status"`/`aria-live="polite"` only when dynamic updates are implemented. |
| Main landmark | Unique `id="main-content"` on each page. |
| Footer groups | Use headings or labeled nav landmarks so each group has a distinct accessible purpose. |

### 4.3 Suggested route map

The following routes are the default integration targets and may be replaced only through a coordinated architecture update:

| Label | Route |
| --- | --- |
| Home | `/` |
| New arrivals | `/catalog/` (filtered state may be added later) |
| Shoes | `/catalog/` (filtered state may be added later) |
| Leather goods | `/catalog/` (filtered state may be added later) |
| About | `/about/` (page to be added) |
| Search | `/search/` (page to be added) |
| Account | `/account/` (page to be added) |
| Wishlist | `/wishlist/` (page to be added) |
| Bag | `/cart/` |
| Checkout | `/checkout/` |

When filtered catalog URLs or missing pages are not yet available, implementation must document the temporary route rather than silently creating broken navigation.

## 5. Acceptance Criteria

- **NAV-AC-001**: Given any planned page, when the page loads, then it contains one global header, one primary navigation landmark, one main landmark with `id="main-content"`, and one global footer.
- **NAV-AC-002**: Given a keyboard user starts at the top of a page, when they press Tab, then the first focusable control is “Skip to main content,” and activating it moves focus to the main content target.
- **NAV-AC-003**: Given a user visits a page represented in primary navigation, when they inspect the matching link, then it has a visible current state and `aria-current="page"`.
- **NAV-AC-004**: Given a viewport narrow enough to use the mobile layout, when the user activates the menu toggle, then the menu opens, the toggle exposes `aria-expanded="true"`, and all menu links become keyboard reachable.
- **NAV-AC-005**: Given an open mobile menu, when the user presses Escape or activates the toggle again, then the menu closes, hidden links are removed from the tab order, and focus returns to the toggle.
- **NAV-AC-006**: Given any interactive navbar or footer control, when it receives keyboard focus, then a visible focus indicator is present and the control remains usable without a pointer.
- **NAV-AC-007**: Given a cart count of zero, one, or more items, when the Bag control is rendered, then the count is understandable in text and the control remains accessible at all values.
- **NAV-AC-008**: Given a cart count changes while the current page remains open, when the update is committed, then assistive technology receives a polite announcement and the Bag accessible name reflects the current count.
- **NAV-AC-009**: Given a user views the footer on a mobile viewport, when the page is scrolled horizontally, then no horizontal overflow is introduced and every footer link remains reachable.
- **NAV-AC-010**: Given `prefers-reduced-motion: reduce` is enabled, when the menu or focus state changes, then nonessential transitions and translations are removed or reduced to an immediate state change.
- **NAV-AC-011**: Given a screen reader or accessibility tree inspection, when the shell is examined, then landmarks, controls, link names, current state, and menu state are meaningful and non-duplicative.
- **NAV-AC-012**: Given the shell is included on all planned pages, when routes are followed, then no final shell link uses `href="#"`, causes a console error, or points to an unapproved missing destination.

## 6. Test Automation Strategy

Because this is a static prototype, automated testing should be lightweight and dependency-free unless the project later adopts a test runner.

- **Markup checks**: Validate each page’s HTML structure and confirm unique IDs, landmark presence, `aria-current`, and menu attributes.
- **Static route checks**: Verify that every final shell `href` maps to an existing page or is explicitly listed as a planned placeholder in the route map.
- **CSS checks**: Run `git diff --check`; inspect Tailwind utility composition and any custom CSS for overflow, focus visibility, contrast, and reduced-motion rules. Confirm no local build output or generated stylesheet is required.
- **Browser checks**: Serve with `python3 server.py`; inspect desktop, tablet, and narrow mobile widths; use keyboard-only navigation; inspect the browser console.
- **Accessibility checks**: Use browser accessibility inspection and, where available, an automated audit such as Lighthouse or axe. Confirm contrast manually for any new color pairing.
- **Dynamic behavior checks**: If JavaScript is added, test menu state transitions, Escape handling, focus return, repeated open/close cycles, and cart count announcements.
- **Regression checks**: Confirm that page-specific content begins after the header, remains reachable via the skip link, and is not obscured by a sticky header.

## 7. Rationale & Context

The shell is a high-frequency interaction surface and should be predictable rather than decorative. A consistent wordmark, small set of primary shopping destinations, and clearly separated utilities preserve the editorial luxury direction while keeping purchase flows discoverable. Semantic landmarks and a skip link reduce navigation cost for keyboard and screen-reader users. A mobile disclosure avoids forcing a dense desktop navigation into a narrow viewport. The route and class contracts allow multiple contributors to build page-specific work without redefining global navigation or creating selector collisions.

## 8. Dependencies & External Integrations

### External systems

- **EXT-001**: Static page routes - provide the destinations listed in the route map.

### Third-party services

- **SVC-001**: None required. Search, account, wishlist, and cart behavior must remain local to the prototype until separately specified.

### Infrastructure dependencies

- **INF-001**: Existing static server (`server.py`) or equivalent static hosting.
- **INF-002**: Browser support for semantic HTML, CSS media queries, `prefers-reduced-motion`, and standard ARIA attributes.

### Data dependencies

- **DAT-001**: Optional cart-count value supplied by page markup or a future cart data layer. The value must be a non-negative integer and must not include unsanitized HTML.

### Technology platform dependencies

- **PLT-001**: Existing semantic HTML and Tailwind CSS delivered through the browser CDN, as documented by the project architecture and page setup.
- **PLT-002**: The project’s existing Tailwind CDN script/configuration, including any available theme tokens or custom utility configuration. The implementation must not assume a local Tailwind compiler.
- **PLT-003**: Existing custom stylesheet (`style.css`) for narrowly scoped fallback or enhancement rules that are not practical as CDN utility classes.
- **PLT-004**: Optional small, local JavaScript module for mobile disclosure and live cart updates; no framework is required.

### Compliance dependencies

- **COM-001**: WCAG 2.2 Level AA target for keyboard access, focus visibility, semantics, and contrast.

## 9. Examples & Edge Cases

### 9.1 Current page example

```html
<a href="/catalog/" aria-current="page">New arrivals</a>
```

Do not use `aria-current` on every link or on a parent container.

### 9.2 Bag count examples

```html
<a href="/cart/" aria-label="Bag, 2 items">
  <span aria-hidden="true">Bag</span>
  <span class="site-header__bag-count" data-bag-count>2</span>
</a>
```

For an empty bag, prefer a stable accessible name such as `aria-label="Bag, empty"` rather than hiding the zero count. If count updates are dynamic, announce only meaningful changes and avoid repeated announcements caused by unrelated renders.

### 9.3 Mobile disclosure example

```html
<button
  class="site-nav__toggle"
  type="button"
  aria-controls="primary-menu"
  aria-expanded="false"
>
  <span class="visually-hidden">Open menu</span>
</button>
<ul id="primary-menu" class="site-nav__menu" hidden>
  <!-- links -->
</ul>
```

When the menu opens, update the button label/state and remove `hidden`; when it closes, restore `hidden` and return focus to the button.

### 9.4 Edge cases

- If a page is not represented by a primary link, do not mark an unrelated link as current; use a parent category only if the information architecture explicitly defines that relationship.
- If a destination is not implemented, use an approved temporary page or omit the link until its route is available. Do not ship a dead `#` link.
- If the cart count is unavailable, render a clearly labeled Bag control without a stale or guessed number.
- If translated labels become longer, the layout must wrap or switch to the mobile pattern rather than clipping text or creating horizontal scroll.
- If JavaScript fails, primary navigation and footer links must remain usable as ordinary links. The mobile implementation should fail open or provide a non-script fallback.

## 10. Validation Criteria

The specification is satisfied when all of the following are true:

1. The shell contract is implemented consistently on every available page.
2. All acceptance criteria NAV-AC-001 through NAV-AC-012 pass.
3. Desktop and mobile layouts do not introduce horizontal scrolling.
4. Keyboard focus, skip-link behavior, mobile menu state, and Escape handling work as specified.
5. The accessibility tree exposes meaningful landmarks, names, current-page state, and menu state.
6. Color contrast and focus visibility meet the project’s WCAG AA target.
7. The shell works with JavaScript disabled for ordinary navigation links.
8. `git diff --check` passes and no unrelated files or contracts are changed.

## 11. Related Specifications / Further Reading

- [Project architecture](../architecture.md)
- [Project style guidelines](../style-guidelines.md)
- [Project product context](../product-context.md)
- [Feature specification index](README.md)
