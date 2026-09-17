# Project Style Guidelines

A well-known Italian clothing and leather shoe brand, Su Misura, wants a visual and functional prototype for their upcoming online store. They have brought us the following brand guidelines:

## Look and feel

- Rich, deep browns with warm highlights.
- Minimalist design, with some details to highlight the hand-crafted nature of this product.
- Interactions should be tactile and smooth.

## Colors

Use a restrained, earthy palette that gives the products visual priority. Colors should feel like leather, wood, paper, and warm studio light rather than a generic luxury black-and-white scheme.

| Role | Color | Usage |
|---|---|---|
| Espresso | `#2B1B16` | Primary text, navigation, footer, and high-contrast dark surfaces |
| Chestnut | `#5A3425` | Buttons, links, active states, and brand accents |
| Saddle | `#9A6040` | Hover states, decorative rules, badges, and small highlights |
| Cognac | `#C58A5A` | Warm accent used sparingly for focus rings and selected details |
| Cream | `#F6F0E8` | Main page background and light content sections |
| Parchment | `#E9DED0` | Cards, borders, alternate sections, and subtle surface contrast |
| White | `#FFFDFC` | Product imagery surfaces and readable text on dark backgrounds |
| Muted ink | `#765F53` | Secondary text; do not use for essential text below accessible contrast |

Use color in a hierarchy: cream and parchment for most surfaces, espresso for text, and chestnut or saddle for actions. Avoid using multiple accent colors in the same component. Color must not be the only way to communicate state; pair it with text, icons, borders, or changes in shape.

## Typography

- Use a refined serif display face for the wordmark, hero headlines, and editorial product storytelling.
- Use a clean, highly legible sans-serif for navigation, controls, prices, labels, and supporting copy.
- Keep headlines compact and confident; avoid excessive all-caps or decorative letter spacing.
- Use sentence case for most UI labels. Small uppercase labels are acceptable for category metadata when paired with sufficient letter spacing.
- Establish a clear scale: large editorial headings, readable body copy, and compact metadata. Body text should not be smaller than `16px` on primary pages.
- Keep line lengths around `45–75` characters for paragraphs and provide generous line height for product descriptions.

## Layout and spacing

- Favor generous whitespace, strong alignment, and a calm editorial rhythm over dense dashboards or crowded storefront grids.
- Use a centered content container with a consistent maximum width and responsive side padding.
- Build on a simple spacing scale, preferably multiples of `4px` or `8px`, and use larger gaps between sections than between controls.
- Let product photography lead: avoid overlays, busy backgrounds, or UI elements that compete with the product.
- Use asymmetry and occasional full-bleed imagery to suggest a crafted editorial catalogue, while keeping navigation and purchasing flows predictable.
- Product grids should adapt cleanly from one column on narrow screens to two or more columns on larger screens without forcing horizontal scrolling.

## Components and imagery

- Buttons should be substantial, tactile, and easy to identify. Use filled chestnut buttons for primary actions and outlined espresso buttons for secondary actions.
- Product cards should expose the product name, material or category, and price without requiring hover. Hover may reveal a secondary image or quick action, but must not be the only route to information.
- Use subtle borders, paper-like surfaces, and restrained shadows. Avoid glossy gradients, excessive rounded corners, and generic glassmorphism.
- Product imagery should use warm, natural lighting and uncluttered backgrounds. Show leather grain, stitching, soles, lining, and other useful craft details in supporting images.
- Preserve consistent image aspect ratios in collections, with `object-fit: cover` only where cropping does not remove important product details.
- Decorative details such as stitch lines, fine rules, embossed marks, and grain textures should remain quiet and never reduce readability.

## Interaction and motion

- Interactions should feel deliberate and physical: use short fades, gentle translations, and small changes in elevation rather than bouncing or flashy effects.
- Provide visible hover, focus, pressed, and disabled states for every interactive control.
- Use transitions around `150–250ms` with an ease-out curve for common controls; reserve slower motion for editorial image reveals.
- Respect `prefers-reduced-motion: reduce` by removing non-essential movement and keeping state changes immediate.
- Never rely on hover for essential actions or information, since touch devices and keyboard users may not have hover.
- Give cart, wishlist, filter, and size-selection actions immediate feedback with text or an accessible status message.

## Accessibility

- Maintain WCAG AA contrast for text and controls. Check warm browns against cream backgrounds rather than relying on visual intuition.
- Use semantic landmarks, headings in logical order, descriptive link text, and labels for all form controls.
- Ensure all controls are keyboard accessible, with a clearly visible focus indicator in cognac or another high-contrast accent.
- Provide meaningful alternative text for product images; describe the item and relevant view rather than repeating its filename.
- Keep touch targets at least `44px` square and do not communicate size, color, availability, or errors through color alone.
- Make forms and purchase flows usable at narrow widths and with increased text size.

## Voice and content

- Write with a quiet, assured, knowledgeable tone: warm and human, never boastful or overly promotional.
- Highlight materials, provenance, construction, fit, care, and the maker’s process with specific language.
- Prefer concise labels such as “View details”, “Add to bag”, and “Find your size” over vague or gimmicky calls to action.
- Be transparent about prices, taxes, shipping, returns, availability, and made-to-order lead times.
- Avoid unsupported claims such as “best”, “perfect”, or “100% sustainable”; use verifiable details instead.

## Responsive and implementation guidance

- Design mobile-first and test at narrow phone, tablet, and desktop widths.
- Keep the primary navigation, search, bag, and account actions reachable on small screens without overwhelming the header.
- Do not introduce a dependency or remote asset solely for visual polish without approval; prefer existing project patterns and local assets.
- Keep styling in feature-scoped classes where possible and preserve existing IDs, data attributes, and semantic structure.
- Validate focus states, contrast, keyboard navigation, reduced-motion behavior, image loading, and layout at each major breakpoint.
