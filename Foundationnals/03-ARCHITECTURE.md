# Architecture Context

## Stack

| Layer | Technology | Role |
|---|---|---|
| Framework | Next.js 16 + Turbopack Latest + TypeScript | Frontend application framework |
| UI | TailwindCSS + shadcn/ui | Design system and UI components |
| Animation | Framer Motion | UI transitions and interactions |
| Auth | Supabase | Authentication and user identity |
| Database | PostgreSQL + Supabase | Structured relational ecosystem data |
| Storage | Supabase | Media, logos, documents, assets |
| Search | PostgreSQL Full Text Search | MVP search infrastructure |
| Future Search | Typesense / Meilisearch | Semantic ecosystem discovery |
| Hosting | Vercel | Frontend deployment |
| CDN | Vercel | Global caching and performance |
| Analytics | PostHog | Product analytics and behavioral insights |
| Email | Resend | Transactional notifications |
| Background Jobs | TBD | Async processing and scheduled jobs |
| Maps | Open Maps | Ecosystem visualization |
| Forms & Validation | Zod + React Hook Form | Typed validation and forms |
| API Layer | Next.js Route Handlers | Internal API architecture |

---

## System Boundaries

- `app/`
  Owns routing, layouts, route handlers, server actions, and application entry points.

- `components/`
  Owns reusable UI primitives, feature components, and layout systems.

- `features/`
  Owns domain-driven application logic grouped by ecosystem modules.

- `lib/`
  Owns infrastructure utilities, helpers, shared clients, validation, and abstractions.

- `supabse/`
  Owns database schema, migrations, and relational modeling.

- `server/`
  Owns backend domain services, business logic, and orchestration.

- `public/`
  Owns static assets and branding assets.

- `styles/`
  Owns global styles, tokens, and theme variables.

---

## Domain Modules

The platform should evolve using domain-oriented architecture.

### Initial Domains

| Domain | Responsibility |
|---|---|
| auth | Authentication and identity |
| organizations | AI organization lifecycle |
| discovery | Search and filtering |
| collaborations | Handshakes and partnerships |
| events | Event infrastructure |
| verification | Trust and moderation |
| analytics | Ecosystem intelligence |
| admin | Moderation and governance |

---

## Storage Model

### PostgreSQL Database

Stores:
- organizations,
- users,
- ecosystem metadata,
- relationships,
- collaborations,
- verification states,
- analytics metadata,
- event records.

---

### Blob/Object Storage

Stores:
- organization logos,
- media assets,
- documents,
- banners,
- downloadable reports,
- ecosystem files.

---

## Search Architecture

### MVP Phase

PostgreSQL Full Text Search will power:
- organization discovery,
- country filtering,
- capability filtering,
- keyword search.

---

### Future Phase

Dedicated search infrastructure:
- Typesense,
- Meilisearch,
- or vector semantic search.

Supports:
- semantic AI discovery,
- recommendation systems,
- collaboration matching,
- ecosystem graphing.

---

## Auth and Access Model

### Authentication

Every user authenticates using:
- email/password,
- Google OAuth,
- LinkedIn OAuth.

Managed via Supabase.

---

### Ownership Model

Each organization has:
- one owner,
- multiple optional collaborators,
- role-based permissions.

---

### Access Control

Only authorized users may:
- modify organizations,
- manage collaborations,
- publish events,
- or access moderation systems.

Admin roles:
- moderator,
- verifier,
- super-admin.

---

## Verification Architecture

Verification is progressive.

### Verification Levels

| Level | Meaning |
|---|---|
| Basic | Email verified |
| Verified | Organization authenticity confirmed |
| Institutional | Government/university recognized |
| Ecosystem Partner | Strategic ecosystem collaborator |

---

## Ecosystem Intelligence Layer

The analytics system should progressively support:
- ecosystem density mapping,
- regional clustering,
- collaboration metrics,
- AI adoption indicators,
- and longitudinal ecosystem analysis.

The intelligence layer is strategically critical and should be designed for long-term scalability.

---

## Event Architecture

Events support:
- virtual events,
- physical events,
- hybrid formats.

The system must support:
- event registration,
- attendance tracking,
- ecosystem networking,
- and regional participation analytics.

---

## API Philosophy

The platform should expose structured APIs progressively.

Future API consumers:
- governments,
- research institutions,
- ecosystem partners,
- analytics systems,
- regional organizations.

---

## Invariants

1. SAKILI is ecosystem infrastructure, not a transactional marketplace.

2. Discovery and collaboration flows must remain low-friction and mobile-friendly.

3. Verification systems must strengthen trust without creating exclusionary gatekeeping.

4. The architecture must remain multilingual-ready at all times.

5. Large media assets must never be stored directly in PostgreSQL.

6. Route handlers must remain lightweight and orchestration-focused.

7. Business logic must live in domain services, not UI layers.

8. Every mutation endpoint must validate authentication and authorization.

9. The platform must progressively support ecosystem intelligence and graph relationships.

10. Infrastructure choices must favor long-term scalability across continental usage.
