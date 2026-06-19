# Zeecomm — End-to-End Project Summary

> **Client:** Zeecom Automations  
> **Product:** Marketing site for a 9-unit AI automation fleet  
> **Figma file:** `SwhBE0kxtK25RHeYAiUI03`  
> **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion  
> **Artboard:** 1920px max · 1280px content column · Pixel-matched to Figma

---

## 1. What This Project Is

Zeecomm is a multi-page marketing website for **ZEECOM CORE SYSTEMS 2026** — a fictional-but-branded suite of nine AI “units” (agents) that automate e-commerce, messaging, content, sales, intelligence, voice, and email.

The site is built **pixel-perfect from Figma**, with:

- Per-page accent colors extracted from Figma tokens
- Scroll-triggered animations (Framer Motion)
- Route-level SEO metadata
- Full navigation across all units
- Mobile-first responsive layout (375px → 1920px)

There is **no backend**, **no auth**, and **no CMS** — all content is static React components sourced from Figma copy.

---

## 2. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14.2 (App Router, static pages) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 + CSS variables in `app/globals.css` |
| Animation | Framer Motion 12 |
| Icons | Font Awesome 5 Free (via `@fortawesome/fontawesome-free`) |
| Fonts | Inter (body), Montserrat (display), Consolas (terminal) via `next/font` |
| Images | `next/image` via `FigmaImagePlaceholder` for missing Figma assets |

### Scripts

```bash
npm run dev      # Local dev server → http://localhost:3000
npm run build    # Production build + TypeScript + ESLint
npm run start    # Serve production build
npm run lint     # ESLint (Next.js config)
```

---

## 3. Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│  app/layout.tsx                                         │
│  ├── Header (global nav, usePathname active state)      │
│  ├── PageTransition (AnimatePresence route fade)        │
│  ├── {children} — per-route page                        │
│  └── Footer (module links, CTAs, social)                │
└─────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────┐
│  PageShell (max-w 1920px)                               │
│    └── SiteContainer (max-w 1280px, responsive px)      │
│          └── Section components (Figma-matched blocks)    │
└─────────────────────────────────────────────────────────┘
```

### Layout primitives

| Component | File | Purpose |
|-----------|------|---------|
| `PageShell` | `components/layout/SiteContainer.tsx` | 1920px artboard wrapper, `overflow-x-hidden` |
| `SiteContainer` | same | 1280px inner column, `px-4 sm:px-6 lg:px-8` |
| `Header` | `components/layout/Header.tsx` | Sticky nav, live clock badge, mobile menu |
| `Footer` | `components/layout/Footer.tsx` | Module links, legal, social |
| `PageTransition` | `components/layout/PageTransition.tsx` | Cross-page fade via `AnimatePresence` |

---

## 4. Routes & Pages

All routes are **static** (`○` in build output). Each page exports `metadata` from `lib/metadata.ts`.

| Route | Unit | Figma Section | Frame | Accent Color | Status |
|-------|------|---------------|-------|--------------|--------|
| `/` | Command Hub | `6:2` Landing | — | `brand-blue` | ✅ Complete |
| `/ecom` | Unit 09 — Ecom Maestro | `6:593` | `6:489` | `brand-blue` | ✅ Complete |
| `/whatsapp` | Unit 01 — WA-Z | `6:886` | `6:795` | `green-500` | ✅ Complete |
| `/youtube` | Unit 02 — YT Factory | `6:280` | `6:181` | `red-600` | ✅ Complete |
| `/chat-agent` | Unit 07 — AI Closer | `6:387` | `6:281` | `brand-blue` | ✅ Complete |
| `/clone-agent` | Unit 04 — Identity Clone | `6:486` | `6:394` | `brand-blue` | ✅ Complete |
| `/market-intel` | Unit 03 — Search Intel | `6:957` | `6:890` | `green-500` | ✅ Complete |
| `/voice-clone` | Unit 05 — Sonic Synth | `6:792` | `6:701` | `brand-blue` | ✅ Complete |
| `/email` | Unit 06 — Inbox Purifier | `6:698` | `6:596` | `brand-blue` | ✅ Complete |

---

## 5. Page Sections (Visual Order)

Sections are ordered by **Figma y-position** (top → bottom), not DOM tree order in the export.

### `/` — Landing (Command Hub)

| Order | Section | Component | Figma Node |
|-------|---------|-----------|------------|
| 1 | Hero — THE Z-CORE SALES ENGINE | `HeroSection` | `6:83` |
| 2 | Real-time Ticker | `RealtimeTickerSection` | `6:4` |
| 3 | Service Deployment Grid (9 units) | `ServiceGridSection` | `6:10` |

### `/ecom` — Ecom Maestro

| Order | Section | Component | Figma Node |
|-------|---------|-----------|------------|
| 1 | Hero | `EcomHeroSection` | `6:490` |
| 2 | Hands-Free Omnichannel (Live Sync) | `EcomLiveSyncSection` | `6:502` |
| 3 | Telemetry | `EcomTelemetrySection` | `6:529` |
| 4 | Founder Reports (Reviews) | `EcomReviewsSection` | `6:549` |
| 5 | Final CTA — THE MASTER SWITCH | `EcomFinalCtaSection` | `6:579` |

### `/whatsapp` — WA-Z Dominance

| Order | Section | Component | Figma Node |
|-------|---------|-----------|------------|
| 1 | Hero + Analytics stats | `WhatsappHeroSection` | `6:796` |
| 2 | Recovery features | `WhatsappRecoverySection` | `6:823` |

### `/youtube` — The YT Factory

| Order | Section | Component | Figma Node |
|-------|---------|-----------|------------|
| 1 | Hero (black, video placeholder) | `YoutubeHeroSection` | `6:203` |
| 2 | Live Production Ticker | `YoutubeTickerSection` | `6:182` |
| 3 | The 4-Step Pipeline | `YoutubePipelineSection` | `6:184` |
| 4 | Analytics | `YoutubeAnalyticsSection` | `6:217` |
| 5 | Reviews | `YoutubeReviewsSection` | `6:234` |
| 6 | CTA — DOMINATE THE FEED | `YoutubeCtaSection` | `6:264` |

### `/chat-agent` — The AI Closer

| Order | Section | Component | Figma Node |
|-------|---------|-----------|------------|
| 1 | Hero | `ChatAgentHeroSection` | `6:309` |
| 2 | Sales Psychology / Logic Feed + Terminal | `ChatAgentLogicFeedSection` | `6:282` |
| 3 | Live Performance Analytics | `ChatAgentAnalyticsSection` | `6:321` |
| 4 | Sync Reviews | `ChatAgentReviewsSection` | `6:345` |
| 5 | CTA — START CLOSING | `ChatAgentCtaSection` | `6:372` |

### `/clone-agent` — The Identity Clone

| Order | Section | Component | Figma Node |
|-------|---------|-----------|------------|
| 1 | Hero | `CloneAgentHeroSection` | `6:468` |
| 2 | Neural Identity Sync | `CloneAgentSyncSection` | `6:395` |
| 3 | Feature info grid | `CloneAgentInfoGridSection` | `6:417` |
| 4 | Sync Reviews | `CloneAgentReviewsSection` | `6:429` |
| 5 | CTA — MULTIPLY YOURSELF | `CloneAgentCtaSection` | `6:460` |

### `/market-intel` — Market Intel

| Order | Section | Component | Figma Node |
|-------|---------|-----------|------------|
| 1 | Hero + stats + terminal panel | `MarketIntelHeroSection` + `MarketIntelTerminalPanel` | `6:892` / `6:904` |

### `/voice-clone` — Sonic Synth

| Order | Section | Component | Figma Node |
|-------|---------|-----------|------------|
| 1 | Hero (waveform animation) | `VoiceCloneHeroSection` | `6:746` |
| 2 | Beyond Robotic + Sonic Visualizer | `VoiceCloneSpecsSection` | `6:758` |
| 3 | Unit Telemetry | `VoiceCloneTelemetrySection` | `6:702` |
| 4 | Client Transcripts | `VoiceCloneReviewsSection` | `6:716` |
| 5 | CTA — MULTIPLY YOUR RESONANCE | `VoiceCloneCtaSection` | `6:777` |

### `/email` — The Inbox Purifier

| Order | Section | Component | Figma Node |
|-------|---------|-----------|------------|
| 1 | Hero | `EmailHeroSection` | `6:680` |
| 2 | Zero-Delay Triage + Scanner UI | `EmailTriageSection` | `6:618` |
| 3 | Scanner Telemetry | `EmailTelemetrySection` | `6:597` |
| 4 | Hub Verdicts (Reviews) | `EmailReviewsSection` | `6:649` |
| 5 | CTA — CLEAN YOUR INBOX | `EmailCtaSection` | `6:672` |

---

## 6. The 9-Unit Fleet

| # | Landing Grid Title | Route | Unit Label | Primary Accent |
|---|-------------------|-------|------------|----------------|
| 09 | ECOM AUTOMATION | `/ecom` | Unit 09 / Maestro | `brand-blue` |
| 01 | WHATSAPP AGENT | `/whatsapp` | Unit 01 / Recovery | `green-500` |
| 02 | YOUTUBE FACTORY | `/youtube` | Unit 02 / Production | `red-600` |
| 07 | CHAT CLOSER | `/chat-agent` | Unit 07 / Closer | `brand-blue` |
| 04 | CLONE AGENT | `/clone-agent` | Unit 04 / Identity | `brand-blue` |
| 03 | SEARCH INTEL | `/market-intel` | Unit 03 / Recon | `green-500` |
| 05 | VOICE SYNTH | `/voice-clone` | Unit 05 / Sonic | `brand-blue` (grid icon: `orange-500`) |
| 06 | EMAIL SCANNER | `/email` | Unit 06 / Scanner | `brand-blue` (grid icon: `gray-400`) |
| — | COMMAND SUPPORT | `/` | Hub dashboard | `brand-blue` |

---

## 7. Design System

### Color tokens

Defined in `app/globals.css` as CSS variables and mapped in `tailwind.config.ts` via `lib/colors.ts`.

| Token | Hex | Figma usage |
|-------|-----|-------------|
| `brand-blue` | `#1C33BF` | Primary accent, ts5 headlines, CTAs |
| `green-500` | `#22C55E` | WhatsApp, terminal success, Market Intel |
| `red-600` | `#DC2626` | YouTube accent, ts2 |
| `red-400` | `#F87171` | YouTube ticker border |
| `orange-500` | `#F97316` | Voice Synth grid icon |
| `cyan-500` | `#06B6D4` | Search Intel grid icon |
| `purple-600` | `#9333EA` | Clone Agent grid icon |
| `gray-400` | `#9CA3AF` | Body secondary text, Email icon |
| `gray-50` | `#F9FAFB` | Review section backgrounds |
| `zinc-900` | `#18181B` | Terminal / visualizer panels |

### Typography

| Role | Font | Weights | Tailwind class |
|------|------|---------|----------------|
| Body / UI | Inter | 400, 700, 900 | `font-inter` |
| Display / Headlines | Montserrat | 100 (Thin), 900 (Black) | `font-montserrat` |
| Terminal / Code | Consolas | system | `font-consolas` |

Common Figma headline sizes: **130px** hero, **96px** section H2, **60px** stats, **11px** CTA buttons with `tracking-[0.3em]`.

### Spacing & layout

| Token | Value |
|-------|-------|
| Page max width | `1920px` (`max-w-page`) |
| Content max width | `1280px` (`max-w-site`) |
| Horizontal padding | `16px` → `24px` → `32px` (375 → 768 → 1280) |
| Figma spacing scale | `figma-xs` through `figma-5xl` in Tailwind |
| Border radius | `rounded-figma-full`, `rounded-figma-lg`, etc. |

### Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| default | 375px+ | Mobile-first base |
| `sm` | 640px | Larger mobile / small tablet |
| `md` | 768px | 2-column grids |
| `lg` | 1024px | Desktop nav visible, large headlines |
| `site` | **1280px** | 3-column service grid (custom) |

---

## 8. Component Conventions

### Figma traceability

Every major element carries `data-figma-node="6:XXX"` matching the Figma export node ID. Page and section IDs live in `lib/*-tokens.ts`:

```ts
// Example: lib/ecom-tokens.ts
export const ECOM_PAGE_NODE = "6:593";
export const ECOM_FRAME_NODE = "6:489";
export const ECOM_SECTIONS = { hero: "6:490", ... };
```

### Section reveal pattern

Each page module has a `*SectionReveal.tsx` using Framer Motion `useInView`:

- Fade-up on scroll (`opacity 0 → 1`, `y: 48 → 0`)
- Stagger containers for card grids
- `once: true` — animates only on first view

### Shared utilities

| Utility | Location | Purpose |
|---------|----------|---------|
| `CountUp` | `components/shared/CountUp.tsx` | Animated stat numbers |
| `ShimmerButton` | `components/pages/ecom/shared/ShimmerButton.tsx` | CTA with hover shimmer |
| `EcomHoverCard` | `components/pages/ecom/shared/EcomHoverCard.tsx` | Card hover lift (reused patterns) |
| `FigmaImagePlaceholder` | `components/ui/FigmaImagePlaceholder.tsx` | `next/image` SVG placeholders at exact Figma dimensions |
| `WaveformAnimation` | `components/pages/voice-clone/shared/WaveformAnimation.tsx` | CSS/SVG animated audio bars |

### Client vs server components

- **Pages** (`app/*/page.tsx`) — Server Components, export `metadata`
- **Sections** — `"use client"` (animations, hooks, interactivity)
- **Layout** — Header/Footer/PageTransition are client components

---

## 9. Navigation & Links

### Header (`components/layout/Header.tsx`)

Nine routes with `usePathname()` active highlighting (`font-black text-brand-blue`):

`/` · `/ecom` · `/whatsapp` · `/youtube` · `/chat-agent` · `/clone-agent` · `/market-intel` · `/voice-clone` · `/email`

Live clock badge updates every second (Consolas font).

### Footer module links

| Label | Route |
|-------|-------|
| ECOM MAESTRO | `/ecom` |
| MESSAGING UNIT | `/whatsapp` |
| GROWTH FACTORY | `/youtube` |
| INTEL NODE | `/market-intel` |
| CONNECT TO HUB | `/` |
| EMAIL DECK | `/email` |

### In-page anchors

| Page | Hero CTA | Target `#id` |
|------|----------|--------------|
| Landing | DEPLOY WORKFORCE | `/#service-units` |
| Ecom | Explore Tech | `#telemetry` |
| Chat Agent | Explore Logic | `#logic-feed` |
| Clone Agent | Explore Sync Tech | `#sync` |
| Voice Clone | Explore Voice Tech | `#specs` |
| Email | Explore Scanning Logic | `#triage` |

All pages include **← Back to Command Hub** → `/`.

---

## 10. SEO & Metadata

- **Root template:** `app/layout.tsx` — `%s | Zeecom`
- **Per-page:** `createPageMetadata()` from `lib/metadata.ts`
- Includes OpenGraph + Twitter card metadata
- `metadataBase`: `https://zeecom.com`

---

## 11. Animations

| Type | Implementation |
|------|----------------|
| Page transitions | `AnimatePresence` + opacity fade in `PageTransition` |
| Section reveals | `useInView` fade-up per section |
| Staggered cards | `staggerContainer` / `staggerItem` variants |
| Landing hero | Staggered children on load |
| Ecom shimmer CTA | Gradient sweep on hover |
| YouTube ticker | Infinite horizontal marquee |
| Voice clone waveform | CSS `@keyframes voice-clone-wave` on SVG bars |
| Email scanner | Animated scan line + staggered detection cards |
| Chat agent terminal | Line-by-line typewriter-style reveal |
| Market intel chart | Bar height animation on scroll |
| CountUp stats | Number interpolation on view |

---

## 12. File Structure

```
zeecomm/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata template
│   ├── page.tsx                # Landing (/)
│   ├── globals.css             # Design tokens, waveform keyframes
│   ├── ecom/page.tsx
│   ├── whatsapp/page.tsx
│   ├── youtube/page.tsx
│   ├── chat-agent/page.tsx
│   ├── clone-agent/page.tsx
│   ├── market-intel/page.tsx
│   ├── voice-clone/page.tsx
│   └── email/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SiteContainer.tsx   # PageShell + SiteContainer
│   │   └── PageTransition.tsx
│   ├── ui/
│   │   └── FigmaImagePlaceholder.tsx
│   ├── shared/
│   │   └── CountUp.tsx         # Cross-page animated stats
│   ├── landing/
│   │   ├── index.ts
│   │   └── sections/           # Hero, Ticker, ServiceGrid
│   └── pages/                  # Inner routes — one folder per page
│       ├── ecom/
│       │   ├── index.ts
│       │   ├── sections/       # One component per Figma section
│       │   └── shared/         # SectionReveal, ShimmerButton, etc.
│       ├── whatsapp/
│       ├── youtube/
│       ├── chat-agent/
│       ├── clone-agent/
│       ├── market-intel/
│       ├── voice-clone/
│       └── email/
├── lib/
│   ├── colors.ts               # Figma color map for Tailwind
│   ├── fonts.ts                # Inter, Montserrat, Consolas
│   ├── metadata.ts             # Per-route SEO
│   ├── design-tokens.json      # Figma page registry
│   ├── ecom-tokens.ts
│   ├── whatsapp-tokens.ts
│   ├── youtube-tokens.ts
│   ├── chat-agent-tokens.ts
│   ├── clone-agent-tokens.ts
│   ├── market-intel-tokens.ts
│   ├── voice-clone-tokens.ts
│   └── email-tokens.ts
├── tailwind.config.ts          # Color/spacing tokens, site: 1280px
├── package.json
└── PROJECT_SUMMARY.md          # This file
```

---

## 13. Figma → Code Workflow

1. **Source file:** Figma key `SwhBE0kxtK25RHeYAiUI03`
2. **Extract tokens:** Colors, spacing, typography → `globals.css` + `lib/colors.ts`
3. **Map sections:** Each Figma frame section → React component in `components/landing/sections/` or `components/pages/{page}/sections/`
4. **Node IDs:** Add `data-figma-node` + constants in `lib/{page}-tokens.ts`
5. **Accent color:** Read ts5/ts2/fill from Figma → page accent constant
6. **Visual order:** Sort sections by `y` position in Figma layout, not DOM tree order
7. **Missing assets:** Use `FigmaImagePlaceholder` with exact width × height from Figma layout
8. **Verify:** `npm run build` — all 13 routes must compile clean

---

## 14. Build Output

```
Route (app)                    Size     First Load JS
┌ ○ /                          ~4 kB    ~147 kB
├ ○ /ecom                      ~8 kB    ~151 kB
├ ○ /whatsapp                  ~3 kB    ~141 kB
├ ○ /youtube                   ~5 kB    ~143 kB
├ ○ /chat-agent                ~5 kB    ~143 kB
├ ○ /clone-agent               ~5 kB    ~143 kB
├ ○ /market-intel              ~4 kB    ~148 kB
├ ○ /voice-clone               ~5 kB    ~143 kB
└ ○ /email                     ~5 kB    ~143 kB
```

All pages are statically prerendered (`○` Static).

---

## 15. Known Limitations & Future Work

| Item | Status |
|------|--------|
| Real Figma SVG/PNG exports | Placeholders used; replace via `FigmaImagePlaceholder` or `public/` assets |
| OG / social preview images | Metadata set; no `og:image` asset yet |
| YouTube hero video | CSS placeholder; no video file from Figma |
| Backend / forms / CRM | Not in scope — CTAs link to routes or hub |
| Command Support dashboard | Links to `/` (landing hub) |
| i18n | English only |

---

## 16. Quick Start for Developers

```bash
# Clone & install
cd zeecomm
npm install

# Development
npm run dev
# → http://localhost:3000

# Production check
npm run build
npm run start
```

### Adding a new page

1. Create Figma section + frame nodes in tokens file
2. Add `components/pages/{name}/` with `sections/`, `shared/*SectionReveal`, and `index.ts`
3. Create `app/{name}/page.tsx` with `PageShell` + `createPageMetadata()`
4. Add route to `Header.tsx` `NAV_LINKS` and `ServiceGridSection` if needed
5. Run `npm run build`

---

## 17. Project Timeline (Build Phases)

| Phase | Deliverable |
|-------|-------------|
| 1 | Landing page — hero, ticker, 9-unit service grid |
| 2 | Ecom page — full sections + animation primitives (CountUp, Shimmer, HoverCard) |
| 3 | WhatsApp, YouTube, Chat Agent, Clone Agent pages |
| 4 | Market Intel, Voice Clone, Email pages |
| 5 | Global Header nav + CTA route wiring |
| 6 | Full audit — metadata, responsive fixes, Figma placeholders, footer links |

**Current state:** All 9 routes complete. Build passes clean. Ready for asset export from Figma and deployment.

---

*Last updated: June 2026 · Zeecom Automations · Unit Fleet V4.02*
