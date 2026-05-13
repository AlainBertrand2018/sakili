# AI Workflow Rules

## Approach

SAKILI must be developed using a spec-driven, infrastructure-first workflow.

The platform is not a short-term startup MVP but long-term continental ecosystem infrastructure. Every implementation decision should reinforce:
- scalability,
- trust,
- interoperability,
- maintainability,
- and ecosystem growth.

Development should proceed incrementally through clearly scoped feature units.

All implementation work must align with:
- `project-overview.md`
- `architecture.md`
- `code-standards.md`
- `ui-context.md`
- `progress-tracker.md`

Do not invent platform behavior outside the documented specifications.

The platform should evolve progressively through:
1. Registry infrastructure
2. Discovery systems
3. Collaboration systems
4. Verification infrastructure
5. Ecosystem intelligence
6. Institutional integration

---

# LLMs & AI APis Usage
Prefer Open Source Models:
- Gemma 4 e31b
- Gemma 4 e27b
- Deepseek Latest
- Gemini Embeddings 2


# Core Engineering Philosophy

## Infrastructure First

SAKILI is ecosystem infrastructure, not a trend product.

Prioritize:
- reliability,
- extensibility,
- discoverability,
- and institutional-grade architecture.

---

## Ecosystem Simplicity

The platform must remain:
- accessible,
- low-friction,
- mobile-first,
- and intuitive for SMEs and nano businesses.

Avoid unnecessary complexity.

---

## Long-Term Scalability

Every feature should be designed with:
- continental growth,
- multilingual support,
- graph relationships,
- and future ecosystem intelligence in mind.

---

## Trust By Design

Verification, moderation, and ecosystem trust systems are strategic priorities.

Never implement features that weaken:
- authenticity,
- ecosystem confidence,
- or platform credibility.

---

# Scoping Rules

## Work on One Feature Unit at a Time

Examples:
- organization onboarding,
- discovery filters,
- handshake requests,
- verification workflows.

Avoid combining unrelated concerns in a single implementation unit.

---

## Prefer Vertical Slices

Each implementation step should:
- compile,
- function end-to-end,
- and remain independently verifiable.

Example:
- Build organization profile creation completely before adding advanced analytics.

---

## Avoid Premature Complexity

Do not introduce:
- microservices,
- distributed systems,
- advanced event architectures,
- or AI recommendation systems prematurely.

The MVP should remain operationally lean.

---

# When to Split Work

Split implementation work when a task combines:

| Situation | Action |
|---|---|
| UI + background jobs | Separate |
| Multiple unrelated domains | Separate |
| Authentication + analytics | Separate |
| API + moderation + events | Separate |
| Undefined requirements | Clarify before implementation |
| Complex feature branches | Split into smaller vertical slices |

If the implementation cannot be:
- tested quickly,
- reviewed easily,
- or reasoned about clearly,

then the scope is too large.

---

# Handling Missing Requirements

## Never Invent Product Logic

If behavior is not defined:
- do not assume,
- do not improvise,
- do not over-engineer.

Instead:
- document ambiguity,
- add open questions,
- or update specifications first.

---

## Resolve Ambiguity Through Specs

If implementation reveals architectural uncertainty:
1. Update relevant context documents.
2. Record decisions in `progress-tracker.md`.
3. Continue implementation only after clarification.

---

## Add Open Questions

Unresolved product questions must be documented in:
- `progress-tracker.md`

Examples:
- verification edge cases,
- collaboration moderation rules,
- ecosystem scoring logic.

---

# Protected Areas

Do not modify without explicit instruction:

| Path | Reason |
|---|---|
| `components/ui/*` | Shared UI primitives |
| generated Prisma migrations | Schema integrity |
| Open Auth internal configuration | Auth stability |
| third-party package internals | Maintainability |
| deployment configs | Infrastructure stability |

---

# Keeping Documentation in Sync

Documentation is part of the product architecture.

Update relevant context files whenever changes affect:
- architecture,
- data models,
- workflows,
- UI systems,
- infrastructure,
- or feature scope.

---

## Must Update Documentation For

| Change Type | Required File |
|---|---|
| New domain module | `architecture.md` |
| New UI pattern | `ui-context.md` |
| New conventions | `code-standards.md` |
| Feature completion | `progress-tracker.md` |
| Product scope changes | `project-overview.md` |

---

# Verification Before Progressing

Before moving to the next feature unit:

1. The current unit works end-to-end.
2. No architecture invariant was violated.
3. TypeScript passes strict validation.
4. Linting passes.
5. The build succeeds.
6. Mobile responsiveness is validated.
7. Authentication and authorization are verified.
8. `progress-tracker.md` is updated.
9. Documentation reflects architectural changes.
10. No temporary debugging code remains.

---

# MVP Development Order

The recommended implementation sequence is:

## Phase 1 — Foundations
- branding
- app shell
- authentication
- database schema
- organization profiles

---

## Phase 2 — Discovery
- search
- filtering
- ecosystem browsing
- country pages

---

## Phase 3 — Collaboration
- handshakes
- partnership requests
- messaging initiation

---

## Phase 4 — Trust
- verification systems
- moderation
- trust indicators

---

## Phase 5 — Ecosystem Activation
- events
- workshops
- networking systems

---

## Phase 6 — Intelligence
- analytics
- ecosystem maps
- ecosystem reports

---

# AI Assistant Expectations

When generating code:
- preserve architecture consistency,
- avoid unnecessary abstraction,
- respect domain boundaries,
- and maintain type safety.

Generated code should:
- compile immediately,
- remain production-grade,
- and align with long-term maintainability goals.

---

# Strategic Engineering Principles

1. SAKILI is continental ecosystem infrastructure.

2. Ecosystem trust is more important than feature velocity.

3. Discovery quality is strategically critical.

4. Mobile-first accessibility is mandatory.

5. Multilingual readiness must remain preserved.

6. Verification systems are long-term moat infrastructure.

7. Simplicity is a competitive advantage.

8. The ecosystem graph is a future strategic asset.

9. Infrastructure decisions should favor long-term adaptability.

10. Every feature should strengthen African ecosystem connectivity.


> Written with [StackEdit](https://stackedit.io/).
