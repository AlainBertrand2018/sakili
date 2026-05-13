# Code Standards

## General

- Build SAKILI as long-term ecosystem infrastructure, not rapid prototype code.

- Privilege reusable components/modules

- Keep modules small, focused, and domain-oriented.

- Prioritize clarity and maintainability over clever abstractions.

- Fix root causes instead of layering temporary workarounds.

- Avoid coupling unrelated business concerns.

- Prefer explicitness over implicit behavior.

- Optimize for long-term scalability and institutional reliability.

- Maintain mobile-first and low-bandwidth awareness across the platform.

- Every architectural decision should support continental scalability.

---

## TypeScript

- TypeScript strict mode is mandatory across the entire codebase.

- Avoid `any` entirely unless explicitly justified.

- Use explicit interfaces and domain types.

- Validate all external input using Zod schemas.

- Infer types from schemas whenever possible.

- Shared domain models must live in centralized modules.

- Avoid duplicated type definitions across domains.

- Route handlers must never trust external request input.

---

## Next.js 16

- Default to React Server Components whenever possible.

- Use `use client` only for browser interactivity.

- Route handlers should remain thin orchestration layers.

- Business logic belongs in domain services.

- Prefer server actions for secure mutations when appropriate.

- Avoid excessive client-side state management.

- Use streaming and suspense progressively.

- Optimize aggressively for performance and SEO.

---

## Styling

- Use TailwindCSS utility-first architecture.

- Use design tokens and CSS variables.

- Avoid hardcoded colors across components.

- Maintain consistent spacing, typography, and radius scales.

- The UI must feel:
  - modern,
  - trustworthy,
  - minimal,
  - warm,
  - breathing, with extended and well-balance white space management,
  - ecosystem-oriented.

- Avoid excessive gradients and visual noise.

- Maintain accessible contrast ratios.

- Design mobile-first before desktop enhancement.

---

## Components

- Components should be:
  - composable,
  - reusable,
  - and domain-oriented.

- Avoid oversized “god components”.

- Separate:
  - UI,
  - state,
  - business logic,
  - and data fetching.

- Prefer composition over inheritance.

- Shared primitives belong in `components/ui`.

- Feature-specific components belong in feature domains.

---

## API Routes

- Validate request input before any logic executes.

- Enforce authentication before mutations.

- Enforce authorization before resource access.

- Return predictable response shapes.

- Avoid leaking internal errors.

- Use structured error handling.

- Keep route handlers stateless.

- Long-running operations belong in async job systems.

---

## Database Standards

- PostgreSQL is the source of truth.

- Normalize relational data appropriately.

- Use Supabase migrations consistently.

- Never mutate production data manually.

- Use soft deletes where ecosystem recovery matters.

- Avoid storing large blobs directly in relational tables.

- Index search-critical fields aggressively.

- Design schemas for future graph relationships.

---

## Search Standards

- Discovery quality is strategically critical.

- Search should support:
  - multilingual metadata,
  - fuzzy matching,
  - ecosystem discoverability,
  - and future semantic search.

- Search infrastructure must remain horizontally scalable.

---

## Security Standards

- Enforce least-privilege access control.

- Never expose sensitive environment variables.

- Sanitize all user-generated content.

- Rate limit public mutation endpoints.

- Use secure session handling.

- Maintain auditability for moderation actions.

- Verification workflows must remain traceable.

---

## Accessibility

- Maintain WCAG-conscious accessibility standards.

- Support keyboard navigation.

- Ensure mobile usability under low-bandwidth conditions.

- Use semantic HTML.

- Avoid accessibility regressions during iteration.

---

## Internationalization

- The architecture must remain multilingual-ready.

- Avoid hardcoding text directly into components.

- Prepare for:
  - English,
  - French,
  - Arabic,
  - Portuguese,
  - Swahili,
  - and future African languages.

- Support RTL expansion readiness.

---

## Performance

- Optimize Largest Contentful Paint (LCP).

- Lazy-load non-critical assets.

- Use optimized image delivery.

- Minimize hydration overhead.

- Avoid unnecessary client rendering.

- Keep bundle sizes controlled.

---

## File Organization

- `app/`
  Routing, layouts, route handlers, pages.

- `features/`
  Domain-oriented feature modules.

- `components/`
  Shared UI primitives and reusable interface elements.

- `lib/`
  Shared utilities, clients, validation, and helpers.

- `server/`
  Business logic and orchestration services.

- `supabase/`
  Database schema and migrations.

- `styles/`
  Theme tokens and global styling.

- `types/`
  Shared application types.

---

## Git & Collaboration

- Use clear commit naming conventions.

- Prefer small focused pull requests.

- Every PR must:
  - compile,
  - pass linting,
  - and maintain type safety.

- Avoid merging incomplete experimental code into main branches.

---

## Strategic Engineering Principles

1. SAKILI is infrastructure, not a trend product.

2. Every feature should strengthen ecosystem trust and discoverability.

3. Platform simplicity is a strategic advantage.

4. Avoid premature complexity while designing for future continental scale.

5. The ecosystem graph and intelligence layers are long-term strategic assets.

6. Maintain a balance between institutional-grade reliability and startup agility.

