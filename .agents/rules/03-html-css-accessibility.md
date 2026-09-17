# HTML, CSS, and Accessibility

## Rules

- Use semantic HTML elements and maintain a valid document structure.
- Keep IDs unique. Use predictable, feature-scoped class names to reduce CSS collisions.
- Scope styles to the feature where practical; do not casually change global selectors, resets, typography, or layout primitives.
- Reuse existing design tokens, spacing, colors, and responsive patterns before creating new ones.
- Build responsive behavior for narrow and wide viewports; avoid fixed widths that cause horizontal scrolling.
- Preserve keyboard access and visible focus states. Do not remove outlines without providing an equivalent focus indicator.
- Provide meaningful `alt` text for informative images and empty `alt` text for decorative images.
- Associate form controls with labels and use accessible names for buttons and links.
- Maintain sufficient color contrast and do not communicate information by color alone.
- Respect reduced-motion preferences for nonessential animations.
- Do not use autoplaying audio, intrusive popups, or interaction patterns that trap focus.

## Verification

Check the feature at representative mobile and desktop widths, test keyboard navigation, and inspect the browser console for errors.
