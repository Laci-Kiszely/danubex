## Successful Cases carousel

### Placement
New section inserted in `src/routes/index.tsx` between `<ExecutionModel />` and `<OpportunityExplorer />`.

### New component
`src/components/landing/SuccessfulCases.tsx`
- `SectionHeading` — eyebrow "Proof", title "Successful cases", short description line.
- Auto-scrolling horizontal ticker of case cards:
  - Two duplicated rows of the same cards inside a flex track, animated with a CSS `@keyframes marquee` (translateX 0 → -50%), infinite, ~40s linear.
  - Pauses on hover (`group-hover:[animation-play-state:paused]`).
  - Edge fade masks left/right using `mask-image` linear-gradient so cards fade in/out of view.
  - Respects `prefers-reduced-motion` (animation disabled → static horizontal scroll with `overflow-x-auto snap-x`).
- Card design (matches existing DanubeX style — bordered, rounded-2xl, muted surface, Instrument Serif for the outcome line, danube accent for direction badge):
  - Direction badge: `AT → HU` / `HU → AT`
  - Sector (small caps, muted)
  - Company / anonymised label (e.g. "Austrian industrial SME")
  - Challenge (1 line, muted)
  - Result (1 line, foreground, serif)

### Data
`src/lib/cases.ts` exports `CASES: Case[]` with a typed shape:
```ts
export type Case = {
  direction: "AT→HU" | "HU→AT";
  sector: string;
  company: string;
  challenge: string;
  result: string;
};
```
Seeded with 4 placeholder cases the user can edit. (Please share the real cases whenever ready — company/anonymised name, sector, 1-line challenge, 1-line result — and I'll swap them in.)

### Styles
Add to `src/styles.css`:
- `@keyframes marquee { to { transform: translateX(-50%); } }`
- `.animate-marquee { animation: marquee 40s linear infinite; }`
- `@media (prefers-reduced-motion: reduce) { .animate-marquee { animation: none; } }`

### Out of scope
- No backend, no CMS — cases live in the TS file.
- No images/logos in v1 (can be added later by extending the `Case` type).
