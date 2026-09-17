# Data, Dependencies, and Security

## Rules

- Treat all user input and external data as untrusted. Validate, constrain, and safely render it; do not inject raw HTML unless it is explicitly sanitized.
- Avoid inline event handlers and unsafe dynamic code such as `eval`, `new Function`, or equivalent patterns.
- Keep secrets out of client-side code: anything shipped to the browser is public.
- Use HTTPS URLs for external resources and prefer local assets when practical.
- Pin or constrain new dependencies according to the project’s conventions, and explain why each new dependency is needed.
- Avoid unnecessary network requests and third-party resources that can slow the page or expose user data.
- Do not collect, log, or transmit personal information unless the requirement explicitly calls for it and the behavior is documented.
- Keep data-file changes schema-compatible. If a schema must change, update all consumers and document the migration.
- Never silently change content, translations, or user-facing copy outside the requested feature.
