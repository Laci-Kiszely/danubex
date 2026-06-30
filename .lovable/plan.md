# DanubeX Landing Page

A single-page, executive-grade landing site at `/` styled in the Stripe/Linear/Vercel minimalist vein — deep Danube blue accent, generous whitespace, large confident headings, subtle fade/slide-in animations only.

## Design system (src/styles.css)

- Background: near-white (`oklch(0.99 0.004 240)`); foreground near-black
- Accent (Danube): deep blue `oklch(0.42 0.14 250)` + a lighter hover tint
- Muted surfaces for cards: very faint cool gray
- Border: subtle cool gray
- Typography: Inter for body, **Instrument Serif** for hero/section headlines (loaded via `<link>` in `__root.tsx`) — gives an editorial, confident feel without being corporate
- Radius: 12px; cards 16px
- Reusable `.fade-up` utility (CSS `@utility`) triggered by an IntersectionObserver hook

## Page structure (single route `/`)

Sections, top to bottom, each as its own component under `src/components/landing/`:

1. **Nav** — Wordmark "DanubeX" left; right: anchor links (Problem, Opportunity, Why, Explorer) + "Book a call" button
2. **Hero** — Headline, subheadline, two CTAs, plus a minimal SVG "connection flow" graphic (two nodes labeled AT / HU joined by an animated stroke arc — pure SVG, no image)
3. **Problem** — "So close. Yet still too far apart." + 6 friction cards (Trust, Language, Finding partners, Legal complexity, Management bandwidth, Execution risk) in a 3×2 grid with small lucide icons + closing line
4. **Opportunity** — Two-column layout; left column (Austrian companies) visually emphasized (slightly larger, accent border-top); right column (Hungarian companies) lighter
5. **Why DanubeX** — 4 cards in a 2×2 grid; closing line below
6. **Execution Model** — Vertical flow diagram built with divs + arrows: Company → One conversation → DanubeX → Trusted local operators → Execution & results; supporting line
7. **Opportunity Explorer** (interactive, client-side state only) — Step 1 segmented toggle (AT→HU / HU→AT / Both); Step 2 chip multi-select (8 options); renders a rule-based insight string + "Let's discuss your situation" CTA opening the booking modal
8. **Newsletter** — Headline, 5-bullet value list, email input + "Get the DanubeX Brief" button, fine-print line. Submit just stores client-side + shows success toast (no backend yet — clearly TODO)
9. **Final CTA** — Headline, paragraph, two CTAs
10. **Footer** — DanubeX wordmark + tagline left; columns of links (LinkedIn, Newsletter, Book a Call, Contact, Privacy Policy) right

## Reusable components

- `BookCallButton` — opens a Dialog containing a Cal.com placeholder iframe (URL set to `https://cal.com/kiszely` as a constant in `src/lib/booking.ts`, easy to swap)
- `NewsletterForm` — used in both newsletter section and footer; client-side validation with zod; emits success state
- `SectionHeading` — consistent eyebrow + headline styling
- `FadeIn` wrapper — IntersectionObserver-based reveal

## Opportunity Explorer logic

Pure function `getInsight(direction, jobs[])` in `src/lib/opportunity-insights.ts` returning a short string from a rule table (e.g. Talent + AT→HU → "Hungary's engineering talent is closer than you think — but hiring without a local execution partner is where most attempts stall."). Defaults to a generic insight when no rule matches.

## SEO / head

In `routes/index.tsx` `head()`: title "DanubeX — Turn Austria and Hungary into one business opportunity", description, og:title/description/type=website, og:url=/, twitter:card=summary_large_image, canonical=/. Single H1 in hero. Semantic `<section>`s with aria-labels.

## Scalability

Folder layout left ready for future surfaces:
```
src/
  components/landing/    # this page's sections
  components/shared/     # BookCallButton, NewsletterForm, FadeIn
  lib/                   # booking, opportunity-insights, newsletter (stub)
  routes/
    index.tsx
    # future: opportunities.tsx, partners.tsx, playbooks.tsx, brief.tsx
```

## Functional notes / placeholders

- Newsletter submit: client-side only for now (logs + toast). When the user picks a provider (Mailchimp/Substack/ConvertKit) we wire a server function — left as a single `submitEmail()` stub in `src/lib/newsletter.ts`.
- Booking URL: `https://cal.com/kiszely` — embedded via iframe inside the dialog.
- LinkedIn URL placeholder in footer.

## Out of scope (this pass)

- Backend storage for emails
- Privacy Policy page content (link present, page can be added later)
- Multi-language (DE/HU)

## Tech details

- TanStack Start single route at `/`
- Tailwind v4 tokens in `src/styles.css`
- shadcn `button`, `input`, `dialog`, `toggle-group`, `sonner` for toasts
- lucide icons for friction cards and footer
- All animations CSS-only (no Motion dep needed)
