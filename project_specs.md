# AG Joburg — Marketing Website

## What the app does and who uses it

A marketing website for **AG Joburg (All Grounds Joburg)** — a Johannesburg-based construction and renovation company offering waterproofing, damp proofing, roofing, painting, tiling, plumbing, electrical, and home renovations. The site is used by homeowners and businesses in Joburg who need to request a quote or learn about services.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS custom properties (design tokens)
- **Fonts:** Google Fonts — Montserrat (display) + Open Sans (body), loaded via `next/font/google`
- **Icons:** Inline Lucide-style SVG (no icon library dependency)
- **Backend:** None — static marketing site; contact form is UI-only (no database or auth)
- **Deployment:** Vercel

## Pages and User Flows

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stat strip, services grid, feature band, process steps, testimonials, client logos, contact form |
| Services | `/services` | Tabbed deep-dive on each trade with price ranges and timelines |
| About | `/about` | Placeholder page with brand story (UI only) |
| Contact | `/contact` | Full quote-request form |

**Quote modal** — triggered from any CTA button on any page. 3-step wizard: service → urgency → contact details.

## Data Models

No database. All content is hardcoded in component files (TypeScript constants). No CMS.

## Third-Party Services

- Google Fonts (Montserrat + Open Sans via `next/font/google`)
- No Stripe, no Supabase, no auth

## Design System

Derived from the AG Joburg Claude Design export. Key tokens:

- **Primary:** `#EF4D48` (Core Red) — CTAs, accents
- **Dark:** `#D90700` — hover states
- **Charcoal:** `#2B161B` — primary text
- **Display font:** Montserrat (700 for H1/H2, 200 for H3/H4)
- **Body font:** Open Sans (400 body, 500 buttons)
- **Cards:** `0px` border radius (sharp / industrial aesthetic)
- **Inputs:** `7px` border radius
- **Section spacing:** 64px vertical between major blocks

## Components to Build

1. `Icon` — inline SVG wrapper (Lucide paths)
2. `Header` — sticky nav with mobile hamburger menu
3. `Hero` — 70px headline, two CTAs, floating status card
4. `StatStrip` — dark charcoal strip with 4 key stats
5. `ServicesGrid` — 3-column grid of 6 service cards
6. `FeatureBand` — full-bleed red CTA section (waterproofing focus)
7. `ProcessSteps` — 4-step explainer grid
8. `Testimonials` — 2-column review cards
9. `ClientLogos` — 4-up client wordmark grid
10. `ContactForm` — quote request form with validation states
11. `Footer` — 4-column charcoal footer
12. `QuoteModal` — 3-step modal overlay
13. `ServicesPage` — tabbed service detail view

## What "Done" Looks Like

- All pages render correctly in Chrome at 1280px, 768px, and 375px
- Design matches the Claude Design export pixel-for-pixel (colors, fonts, spacing)
- `npm run build` passes with zero TypeScript errors
- No console errors at runtime
- Quote modal opens from any CTA, all 3 steps work, form shows success state
- Contact form validates required fields and shows success state
