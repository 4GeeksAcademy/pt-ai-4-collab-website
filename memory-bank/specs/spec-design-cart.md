---
title: Full-Page Cart Experience Specification
version: 1.0
date_created: 2026-09-18
last_updated: 2026-09-18
owner: Website team
tags: [design, cart, ecommerce, accessibility, static-site]
---

# Introduction

This specification defines the full-page cart experience for the Su Misura static storefront prototype. The cart is rendered in the main `index.html` entry point and uses feature-scoped CSS in `style.css` plus small local JavaScript behavior in `script.js`. The experience must present sample products, transparent pricing, editable quantities, removal behavior, an order summary, a purchase action, and the shared navigation shell.

## 1. Purpose & Scope

### 1.1 Purpose

Provide a complete cart view that a user can inspect, edit, and use to demonstrate a luxury e-commerce purchase flow without a server, database, payment provider, or framework.

### 1.2 In scope

- Full-page cart content in `index.html`, not a side panel.
- Shared navbar and footer surrounding the cart.
- Three sample products for visual demonstration.
- Product thumbnails, names, descriptive metadata, unit prices, quantities, and line totals.
- Quantity increase and decrease controls.
- Product removal controls.
- Dynamic item count, subtotal, shipping, tax, and grand total.
- Promo-code presentation and shipping-option presentation.
- Purchase confirmation modal.
- Responsive layout, keyboard access, visible focus states, and reduced-motion behavior.

### 1.3 Out of scope

- Server-side cart persistence.
- User authentication or account storage.
- Payment processing or order submission.
- Inventory validation.
- Product search, catalog filtering, or checkout form implementation.
- Real customer data collection.
- Third-party analytics, tracking, or checkout services.

### 1.4 Assumptions

- The cart is a static demonstration and starts with three sample products.
- Prices are represented in United States dollars.
- Tax is calculated at 8% of the current subtotal.
- Shipping is `$35.00` whenever the cart contains at least one item and `$0.00` when empty.
- A product quantity cannot be reduced below one through the quantity control; removal is the way to remove a product line.
- The Purchase button demonstrates confirmation only and does not create a real order.

## 2. Definitions

| Term | Definition |
| --- | --- |
| Cart item | One product line in the cart, including its product information, quantity, and line total. |
| Unit price | The price of one unit of a product before quantity multiplication. |
| Line total | Unit price multiplied by the current quantity for one cart item. |
| Subtotal | The sum of all cart-item line totals before shipping and tax. |
| Tax | The calculated charge equal to 8% of the subtotal. |
| Shipping | The cart delivery charge: `$35.00` for a non-empty cart, otherwise `$0.00`. |
| Grand total | Subtotal plus shipping plus tax. |
| Sample product | A static product included to demonstrate the cart layout and interactions. |
| Purchase modal | The confirmation dialog-like surface shown after activating Purchase. |
| Shared shell | The global navbar and footer already defined by the navigation-shell specification. |

## 3. Requirements, Constraints & Guidelines

### 3.1 Functional requirements

- **CART-REQ-001**: The cart shall be a full-page main-content experience and shall not be implemented as a side panel.
- **CART-REQ-002**: The cart shall contain exactly three initial sample products: a leather boot, a signature wool coat, and a Maison tote.
- **CART-REQ-003**: Each product row shall expose a thumbnail or visual product surface, product name, product metadata, unit price, quantity, and line total without requiring hover.
- **CART-REQ-004**: Each quantity control shall provide accessible decrease and increase buttons.
- **CART-REQ-005**: Decreasing quantity shall never produce a value lower than one. Increasing quantity shall increment the displayed quantity by one.
- **CART-REQ-006**: Activating Remove shall remove the product row from the rendered cart and update all dependent totals.
- **CART-REQ-007**: The cart item count shall equal the sum of quantities across all remaining product rows.
- **CART-REQ-008**: The subtotal shall equal the sum of all current line totals.
- **CART-REQ-009**: Tax shall equal 8% of the current subtotal and shall be displayed to two decimal places.
- **CART-REQ-010**: Shipping shall display `$35.00` for a non-empty cart and `$0.00` when all product rows have been removed.
- **CART-REQ-011**: The grand total shall equal subtotal plus shipping plus tax and shall be displayed to two decimal places.
- **CART-REQ-012**: The Purchase button shall open a visible confirmation modal without navigating away from the page.
- **CART-REQ-013**: The confirmation modal shall provide a clearly labeled control that closes the modal.
- **CART-REQ-014**: Clicking the modal backdrop shall close the confirmation modal.
- **CART-REQ-015**: The cart shall include a summary containing Subtotal, Tax, Total, and Purchase. Shipping may be shown as an additional transparent charge.

### 3.2 Shared-shell requirements

- **CART-NAV-001**: The page shall retain the shared Su Misura navbar with home, primary navigation, utility navigation, and Bag entry point.
- **CART-NAV-002**: The page shall retain the shared footer with customer-care, company, and policy link groups, brand statement, and legal line.
- **CART-NAV-003**: The main content shall use the unique `id="main-content"` target required by the skip link.
- **CART-NAV-004**: The cart page shall preserve the existing shared selectors and data attributes used by mobile navigation and Bag count behavior.

### 3.3 Visual and responsive requirements

- **CART-VIS-001**: Use the existing Su Misura warm neutral palette: Espresso, Chestnut, Saddle, Cognac, Cream, Parchment, White, and Muted ink.
- **CART-VIS-002**: Product rows and summary surfaces shall use restrained borders, paper-like surfaces, and subtle shadows consistent with the luxury editorial direction.
- **CART-VIS-003**: The desktop layout shall place cart items and the order summary in separate aligned columns without horizontal overflow.
- **CART-VIS-004**: At narrower widths, the summary shall stack below the product list and each product row shall collapse into a single readable column.
- **CART-VIS-005**: Quantity controls, buttons, inputs, and links shall have visible hover, focus, and pressed or active states where applicable.
- **CART-VIS-006**: Decorative product surfaces shall not be the sole source of product information; product names, metadata, and prices must remain text content.
- **CART-VIS-007**: Motion shall remain brief and nonessential movement shall be reduced under `prefers-reduced-motion: reduce`.
- **CART-VIS-008**: Feature styles shall remain scoped to cart classes such as `.cart-page-shell`, `.cart-item`, `.summary-box`, and `.confirmation-modal`.

### 3.4 Accessibility and content requirements

- **CART-A11Y-001**: Use semantic `main`, `section`, `article`, `header`, `aside`, `nav`, `footer`, and button elements as appropriate.
- **CART-A11Y-002**: Every quantity button shall have an accessible name that identifies whether it increases or decreases quantity.
- **CART-A11Y-003**: The summary shall be exposed as a labeled complementary region using `aria-label="Order summary"` or an equivalent accessible name.
- **CART-A11Y-004**: The confirmation modal shall have a meaningful accessible label and a keyboard-reachable close control.
- **CART-A11Y-005**: Color shall not be the only way to communicate quantity, pricing, selected shipping, or confirmation state.
- **CART-A11Y-006**: Interactive controls shall remain usable by keyboard and have a visible focus indicator.
- **CART-A11Y-007**: Text and controls shall target WCAG 2.2 Level AA contrast.
- **CART-A11Y-008**: The cart shall not collect or transmit personal information.

### 3.5 Technical constraints

- **CART-CON-001**: Use semantic HTML, existing Tailwind browser-CDN utilities, existing `style.css`, and small local JavaScript only.
- **CART-CON-002**: Do not add a framework, package, build pipeline, analytics, tracking, or external service.
- **CART-CON-003**: Product prices and quantities shall be represented as safe text or data attributes and rendered with text assignment, not unsanitized HTML.
- **CART-CON-004**: Preserve existing IDs, shared classes, routes, and data contracts unless a coordinated architecture change is required.
- **CART-CON-005**: The cart is a prototype; UI calculations must not be treated as payment or accounting logic.

## 4. Interfaces & Data Contracts

### 4.1 Required markup hooks

| Hook | Required behavior |
| --- | --- |
| `.cart-page-shell` | Outer cart layout container. |
| `.cart-item` | Product row; must include `data-unit-price` with a numeric dollar value. |
| `[data-quantity]` | Text node containing the current integer quantity. |
| `[data-line-total]` | Text node updated to the current line total. |
| `[data-cart-count]` | Text node updated to the total quantity across cart items. |
| `[data-subtotal]` | Text node updated to the subtotal. |
| `[data-shipping]` | Text node updated to the shipping charge. |
| `[data-tax]` | Text node updated to the tax charge. |
| `[data-total]` | Text node updated to the grand total. |
| `#purchaseButton` | Button that opens the purchase confirmation modal. |
| `#confirmationModal` | Modal surface toggled into its visible state. |
| `#closeModal` | Button that closes the purchase confirmation modal. |

### 4.2 Product data contract

Each `.cart-item` must follow this conceptual shape:

```html
<article class="cart-item" data-unit-price="480">
  <div class="item-image" aria-hidden="true"></div>
  <div class="item-details">
    <h2>Leather Boot</h2>
    <span class="price">$480.00</span>
    <div class="qty-control">
      <button type="button" aria-label="Decrease quantity">-</button>
      <span data-quantity>1</span>
      <button type="button" aria-label="Increase quantity">+</button>
    </div>
    <strong data-line-total>$480.00</strong>
    <button class="link-button" type="button">Remove</button>
  </div>
</article>
```

### 4.3 Calculation contract

```text
lineTotal = unitPrice * quantity
subtotal = sum(lineTotal for every remaining cart item)
tax = subtotal * 0.08
shipping = 35.00 if totalQuantity > 0 else 0.00
grandTotal = subtotal + tax + shipping
```

All displayed monetary values must use United States dollar formatting with two decimal places.

### 4.4 Modal contract

The modal must remain hidden by default. The `visible` class may be used to show it. The modal must contain a success message and a close action. It must not claim that a real payment or order was processed.

## 5. Acceptance Criteria

- **CART-AC-001**: Given the page loads, when the user views the main content, then a full-page cart is visible with three product rows, a summary, a navbar, and a footer.
- **CART-AC-002**: Given the initial sample data, when the cart loads, then the quantities are 1, 2, and 1; the subtotal is `$2,960.00`; tax is `$236.80`; shipping is `$35.00`; and total is `$3,231.80`.
- **CART-AC-003**: Given a product row has quantity 1, when the user activates Decrease quantity, then the quantity remains 1 and the line total does not become negative or zero.
- **CART-AC-004**: Given a product row is present, when the user activates Increase quantity, then its quantity and line total increase by one unit price and the summary recalculates.
- **CART-AC-005**: Given a product row is present, when the user activates Remove, then the row disappears and the item count, subtotal, tax, shipping, and total recalculate.
- **CART-AC-006**: Given every product row has been removed, when the summary updates, then subtotal, tax, shipping, and total display `$0.00` and the cart count displays `0 items`.
- **CART-AC-007**: Given the user activates Purchase, when the modal opens, then an order-confirmation message and a keyboard-reachable close control are visible.
- **CART-AC-008**: Given the confirmation modal is visible, when the user activates Continue Shopping or clicks the backdrop, then the modal closes.
- **CART-AC-009**: Given a keyboard user tabs through the page, when they reach cart controls, then quantity, Remove, promo, shipping, Purchase, and modal controls are reachable with visible focus states.
- **CART-AC-010**: Given a viewport below the desktop breakpoint, when the cart is viewed, then the summary stacks below the products and no horizontal scrolling is required.
- **CART-AC-011**: Given reduced motion is enabled, when cart or modal state changes, then nonessential transitions are reduced or removed.
- **CART-AC-012**: Given the page is served as a static site, when the user reloads it, then the sample cart renders without a server API, build step, or external cart dependency.

## 6. Test Automation Strategy

- **Markup checks**: Confirm one main cart section, three initial `.cart-item` elements, required data hooks, a labeled summary, navbar, and footer.
- **JavaScript checks**: Run `node --check script.js`; manually exercise increase, decrease, Remove, and Purchase interactions.
- **Calculation checks**: Verify the initial values and at least one changed quantity against the calculation contract.
- **Static validation**: Run `git diff --check` and editor diagnostics for `index.html`, `style.css`, and `script.js`.
- **Browser checks**: Serve with the project’s local server or a static HTTP server and inspect desktop and mobile widths.
- **Accessibility checks**: Test keyboard navigation, visible focus, Escape/menu behavior from the shared shell, modal close behavior, and semantic landmarks.
- **Regression checks**: Confirm that existing navbar links, footer links, mobile navigation, skip link, and Bag count behavior remain intact.
- **Coverage target**: No automated coverage threshold is required for this static prototype. Every acceptance criterion must be manually or script-validated before handoff.

## 7. Rationale & Context

A full-page cart makes the complete purchase state easy to inspect and demonstrate to reviewers. Three sample products provide enough variation to show different names, prices, quantities, and visual surfaces without requiring a catalog or backend. Live recalculation makes the quantity and removal controls meaningful while keeping the implementation small and transparent. The warm neutral palette and restrained surfaces preserve the Su Misura editorial direction, while the shared navbar and footer keep the cart integrated with the broader storefront.

## 8. Dependencies & External Integrations

### External systems

- **EXT-001**: None. Cart behavior is local to the browser.

### Third-party services

- **SVC-001**: None required. No payment, analytics, or customer-data service is integrated.

### Infrastructure dependencies

- **INF-001**: A static HTTP server capable of serving `index.html`, `style.css`, and `script.js`.
- **INF-002**: A modern browser supporting semantic HTML, CSS media queries, `Intl.NumberFormat`, and standard DOM events.

### Data dependencies

- **DAT-001**: Static sample product data embedded in page markup via `data-unit-price` and text content.

### Technology platform dependencies

- **PLT-001**: Semantic HTML.
- **PLT-002**: Tailwind CSS browser CDN already used by the project.
- **PLT-003**: Project stylesheet `style.css`.
- **PLT-004**: Project script `script.js`.

### Compliance dependencies

- **COM-001**: WCAG 2.2 Level AA target for keyboard access, focus visibility, semantics, and contrast.

## 9. Examples & Edge Cases

### 9.1 Initial cart values

```text
Leather Boot:          $480.00 * 1 = $480.00
Signature Wool Coat:   $920.00 * 2 = $1,840.00
Maison Tote:           $640.00 * 1 = $640.00
Subtotal:                                  $2,960.00
Tax (8%):                                     $236.80
Shipping:                                      $35.00
Grand total:                                $3,231.80
```

### 9.2 Quantity increase

If the Maison Tote quantity changes from 1 to 2, its line total becomes `$1,280.00`, the subtotal becomes `$3,600.00`, tax becomes `$288.00`, and the grand total becomes `$3,923.00` with `$35.00` shipping.

### 9.3 Empty cart after removal

If all product rows are removed, the cart count must read `0 items`, subtotal and tax must be `$0.00`, shipping must be `$0.00`, and total must be `$0.00`. The summary remains visible so the empty state is understandable.

### 9.4 Modal behavior

The Purchase action is a prototype interaction. Confirmation copy must describe preparation or confirmation visually without implying that a payment was captured or a real order was submitted.

## 10. Validation Criteria

The implementation complies with this specification when:

1. All `CART-REQ`, `CART-NAV`, `CART-VIS`, `CART-A11Y`, and `CART-CON` requirements applicable to the static prototype are satisfied.
2. All `CART-AC` acceptance criteria pass through browser inspection or focused script checks.
3. The page remains usable at narrow mobile and desktop widths without horizontal overflow.
4. `node --check script.js`, `git diff --check`, and editor diagnostics complete without errors.
5. No new dependency, external service, or private data is introduced.

## 11. Related Specifications / Further Reading

- [Global Navbar and Footer Specification](spec-design-global-navigation-shell.md)
- [Project Architecture](../architecture.md)
- [Project Style Guidelines](../style-guidelines.md)
- [Product Context](../product-context.md)
