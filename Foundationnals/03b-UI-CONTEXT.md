# UI Context

## Theme

SAKILI’s visual language should communicate:

- intelligence,
- trust,
- continental connectivity,
- ecosystem density,
- modern African innovation,
- and institutional credibility.

The platform should feel:
- premium,
- breathing with proper whitespace management
- elegant,
- calm,
- lightweight,
- and technologically sophisticated.

Avoid:
- excessive gradients,
- “crypto dashboard” aesthetics,
- corporate bureaucracy visuals,
- noisy UI systems,
- or overly futuristic sci-fi styling.

The design language should sit between:
- Stripe,
- Linear,
- Notion,
- Arc Browser,
- and premium modern SaaS.

The platform must feel:
# African-forward without relying on stereotypes.

---

# Design Philosophy

## Minimal Intelligence

Interfaces should feel:
- intentional,
- spacious,
- and information-efficient.

---

## Ecosystem Warmth

The platform should remain:
- approachable,
- collaborative,
- and human-centered.

---

## Data Clarity

Discovery, ecosystem browsing, and organization profiles must remain highly readable and scannable.

---

## Mobile-First Accessibility

All layouts must work effectively on:
- low-bandwidth mobile devices,
- tablets,
- and desktop systems.

---

# Colors

All components must use CSS variables.

No hardcoded colors.

---

## Core Palette

| Role | CSS Variable | Value |
|---|---|---|
| Page background | `--bg-base` | `#0B1020` |
| Elevated surface | `--bg-surface` | `#12192B` |
| Soft surface | `--bg-soft` | `#182235` |
| Primary text | `--text-primary` | `#F5F7FA` |
| Secondary text | `--text-secondary` | `#B7C0D1` |
| Muted text | `--text-muted` | `#7C879A` |
| Primary accent | `--accent-primary` | `#5EEAD4` |
| Accent hover | `--accent-hover` | `#2DD4BF` |
| Border | `--border-default` | `#263248` |
| Success | `--state-success` | `#22C55E` |
| Error | `--state-error` | `#EF4444` |
| Warning | `--state-warning` | `#F59E0B` |

---

# Typography

Typography should feel:
- clean,
- modern,
- readable,
- business standard,
- and globally premium.

Avoid:
- decorative fonts,
- compressed typography,
- or aggressive futuristic styles.

---

## Font System

| Role | Font | Variable |
|---|---|---|
| UI text | Geist Sans | `--font-sans` |
| Monospace | Geist Mono | `--font-mono` |

---

## Typography Scale

| Context | Suggested Class |
|---|---|
| Hero title | `text-5xl font-semibold` |
| Section title | `text-3xl font-semibold` |
| Card heading | `text-lg font-medium` |
| Body text | `text-sm leading-6` |
| Metadata | `text-xs text-muted` |

---

# Border Radius

Rounded geometry should feel:
- soft,
- modern,
- and premium.

Avoid:
- sharp enterprise corners,
- or overly playful bubbles.

---

| Context | Class |
|---|---|
| Small controls | `rounded-lg` |
| Inputs | `rounded-xl` |
| Cards | `rounded-2xl` |
| Modals | `rounded-3xl` |
| Floating panels | `rounded-2xl` |

---

# Component Library

SAKILI uses:
- shadcn/ui
- TailwindCSS
- Radix UI primitives

Shared UI primitives live in:
`components/ui/`

Feature-level UI lives inside:
`features/*`

Use shadcn generators whenever possible instead of manually recreating primitives.

---

# Layout Patterns

## App Shell

- 100% responsive towards tablets mainly
- Fixed top navigation
- Responsive mobile drawer
- Optional desktop sidebar
- Fluid content width
- Large whitespace margins, adaptable (subtly decreasing) to mobile

---

## Discovery Layout

- Search/filter sidebar
- Scrollable organization grid/list
- Persistent filter controls
- Mobile collapsible filters

---

## Organization Profiles

Structure:
1. Hero/header
2. Trust indicators
3. Organization overview
4. AI capabilities
5. Sectors
6. Projects/case studies
7. Collaboration CTA

---

## Dashboard Layout

- Modular cards
- Analytics summaries
- Lightweight navigation
- Minimal cognitive overload

---

## Modals

- Centered overlays
- Soft backdrop blur
- Large spacing
- Clear hierarchy

---

# Motion & Animation

Animations should feel:
- subtle,
- intelligent,
- and smooth.

Avoid:
- excessive motion,
- flashy transitions,
- or gimmicky effects.

Use:
- Framer Motion
- opacity transitions
- soft transforms
- micro-interactions

---

# Icons

Use:
- Lucide React, native svg

Style:
- outline/stroke icons only

---

## Icon Sizes

| Context | Size |
|---|---|
| Inline text | `h-4 w-4` |
| Buttons | `h-5 w-5` |
| Feature illustrations | `h-6 w-6` |

---

# Imagery Direction

Imagery should emphasize:
- African innovation,
- collaboration,
- networks,
- intelligence,
- ecosystems,
- and connectivity.

Avoid:
- generic stock photos,
- stereotypical “Africa imagery,”
- or excessive corporate imagery.

---

# Accessibility

The UI must:
- maintain WCAG-conscious contrast,
- support keyboard navigation,
- remain readable under low brightness,
- and support low-bandwidth conditions.

Accessibility is not optional.

---

# Future UI Considerations

The design system should eventually support:
- multilingual layouts,
- RTL support,
- ecosystem maps,
- graph visualizations,
- AI intelligence dashboards,
- and institutional analytics interfaces.
