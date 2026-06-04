# abcfinanciero Landing Page

A single-route Spanish-language landing page optimized to convert visitors into paid mentorship clients (L1,800), with every CTA pointing to WhatsApp.

## Design system

- Palette (added as oklch tokens in `src/styles.css`):
  - Primary: deep navy (`#0B1E3F`)
  - Secondary/trust: emerald (`#0E7C5A`)
  - Accent (CTA): vibrant gold/amber (`#F5A524`)
  - Surfaces: white + light gray; muted warning tone for pain points
- Typography: Inter via Google Fonts (corporate, readable). Headings tight tracking, body relaxed.
- Mobile-first, generous spacing, soft shadows, subtle gradients on hero and trust banner.
- Pulse animation on primary CTA via Tailwind keyframes utility.

## Route & structure

Replace placeholder in `src/routes/index.tsx` with the landing page. Update route `head()` with Spanish SEO meta (title ~"abcfinanciero | Mentoría 1:1 para invertir en la Bolsa de NY desde Honduras", description, og tags). Single H1 in hero.

Components (co-located under `src/components/landing/`):

1. `Navbar` — sticky, logo wordmark "abcfinanciero", anchor links (Beneficios, Incluye, Seguridad, Testimonios), gold CTA "Reservar Mentoría (L1,800)". Mobile: hamburger sheet.
2. `Hero` — H1, subheading, trust badge chip, pulsing primary CTA, subtle navy gradient bg with abstract chart motif.
3. `PainPoints` (#beneficios anchor target works as intro) — "¿Te pasa alguna de estas tres cosas?" with 3 cards, warning-tone icons (Lucide: TrendingDown, ShieldAlert, HelpCircle).
4. `WhatsIncluded` (#incluye) — 4-card grid of mentorship deliverables with emerald icons (UserCheck, Settings2, Banknote, LineChart).
5. `TrustSafety` (#seguridad) — distinct banner block (emerald tint), 3 principles with green check icons.
6. `Testimonials` (#testimonios) — 3 WhatsApp-style chat bubble cards (green bubble, timestamp, double-check icon) with Honduran first-name placeholders.
7. `Pricing` — large price card showing L1,800, value bullets, local payment method chips (BAC, Ficohsa, Atlántida, Tarjeta), final "Agendar por WhatsApp" CTA, redirect explanation text.
8. `Footer` — disclaimer paragraph (CNBS), copyright, privacy/terms links (placeholder anchors).

## CTA behavior

Single constant `WHATSAPP_URL = "https://wa.link/spml85"`. All CTA buttons are `<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">` styled as buttons — no modal, keeps it one tap on mobile.

## Technical details

- shadcn `Button` with new `cta` variant (gold bg, white text, pulse) added via `class-variance-authority` in existing button file.
- Add design tokens to `src/styles.css`: `--brand-navy`, `--brand-emerald`, `--brand-gold` plus `--color-*` aliases in `@theme inline` so utilities like `bg-brand-navy` work.
- Add `@keyframes pulse-cta` + `.animate-pulse-cta` via `@utility`.
- Inter font via `<link>` in `__root.tsx` head (Google Fonts preconnect + stylesheet).
- All copy in Spanish exactly as provided in the brief.
- No backend, no Cloud needed.

## Out of scope

No payment integration, no calendar, no auth, no CMS — WhatsApp handoff handles all of that per the brief.
