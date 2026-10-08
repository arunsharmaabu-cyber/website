# BUILD.md

## Stack
Next.js 15 App Router + TypeScript + Tailwind v4. GSAP + ScrollTrigger + Lenis for motion. `geist` font package. Deploy on Vercel. Form posts to a route handler (Resend email + store lead in Supabase or Airtable).
Single page now: `/`. Stub routes for later: `/services/local-seo`, `/services/web-design`, `/services/paid-ads`, `/services/brand`, `/privacy`, `/terms` (the design links to them).

## Tokens
Colors
- page `#F7F7F8` · panel `#EDEEF1` · ink `#0B0B0C` · white `#FFFFFF` · receipt paper `#FBFBF9`
- accent `#FF4D00` (tweakable later: `#1F3BFF`, `#0F7B5F`) — expose as one CSS variable `--accent`
- text: strong `#1B1C1F`, body `#3A3C42`, muted `#4B4E55`, subtle `#5C5F66`, faint `#8D9098`
- lines: card border `#DADCE1`, dashed divider `#A9ACB4`, pipe line `#8D9098`
- footer: bg `#0B0B0C`, text `#F7F7F8`, body `#C9CBD1`, muted `#9A9DA5`, divider `#34363C`
Type
- Display: Geist 600, letter-spacing -0.04em to -0.07em, line-height 0.86–0.98. Sizes are clamp() values in the files (e.g. hero H1 `clamp(44px,4.5vw,68px)`, section H2 `clamp(56px,8vw,128px)`).
- Labels: Geist Mono 10–12px, uppercase, letter-spacing .08–.14em.
Shape
- Page padding 16px (mobile 8). Section panel radius 20 (mobile 16). Cards 16. Buttons radius 4. Pills 999.
- Section panel padding 56/40 desktop; mobile 24–28 / 18–20.
- Section label pattern: `S/00x ——— Name` in mono with a dashed 40px rule.
- Rows: dashed 1px dividers, label left in mono, value right.

## Shared components (build once)
SectionLabel, DashedRow, FieldRow (label + right-aligned input/select), Pill (toggle, aria-pressed), OutlineButton (orange arrow), SolidButton (black, orange arrow), Tick (black circle, orange check), Dot, ArrowSVG, Receipt, CallLogRow, PledgeRow, ServiceCard, FooterLink.

## Sections (desktop file → mobile file; same numbers in `design/rendered`)
01 Hero — nav, tilted search card with two ghost cards behind, four dotted callouts (hidden under 760px as a side layout; mobile shows them as a 2x2 grid), H1 "Dallas calls the first name it sees.", skyline image bottom-left (`assets/skyline.png`), audit form `id="audit"` (website, industry, phone, black CTA). No sticky bar.
02 Receipts — H2 "Receipts, not promises.", tabs /014 Roofing /022 HVAC /031 Dental (swap the data set), three boxes only: orange +212% tile with chart, tilted receipt, call log. No rank card, no marquee.
03 Pipeline — Found / Chosen / Called / Tracked, travelling orange dot on the dashed line (desktop), vertical on mobile.
04 Services — card stack. Final state: SEO, Web, Paid Ads show only a 64px header strip, card 4 (Brand) fully open. Desktop offsets: card i sits at `top = i*64px`, inset `(3-i)*14px` each side, height 580px, container 772px. Mobile: strips 56px apart, inset 24/16/8/0px, container 908px.
05 Pledges — five rows + About card with signature and rotating stamp. No photo.
06 Contact — `id="contact"` form: name, website, speed-score box, industry, phone, email, service chips (multi-select), black submit. Left column "In your report". No phone/email block here.
07 Closer + Footer — giant "WE PUT → YOUR NAME FIRST." then a black footer (services, industries, company, talk to us incl. hours).

## Forms and data
- Hero form and Contact form share one `submitAudit()`; fields: website, industry, phone (+ name, email, services on Contact). Validate (phone US format, URL normalise), honeypot field, rate-limit by IP, success state replaces the form with "Got it. Audit in 24 hours."
- Hero industry select also sets the active Receipts tab (Roofing/HVAC/Dental; other values keep Roofing).
- Live speed score: on blur of the website field call `/api/pagespeed?url=` which calls Google PageSpeed Insights (`strategy=mobile`), returns performance score 0–100. Animate the ring (stroke-dasharray) to the value. Falls back to the static "SAMPLE" state if it fails or times out (8s). The key stays server-side.
- Track events: form_start, form_submit, call_click (tel links), cta_click. Call tracking number swap is a later phase.

## Motion — full spec is in `MOTION.md` (summary only below)
- Hero: nav fades in; search card rises with slight rotate settle; ghost cards slide out from behind; callouts pop in with their dashed leaders drawing; H1 lines mask-reveal; subtle pointer parallax on the card (desktop only).
- Receipts: +212% counts up; chart line draws (stroke-dashoffset); receipt "prints" down from a slot (clip-path + translate) with a small bounce; call-log rows stagger in, pulse dot blinks (CSS exists in design).
- Pipeline: dot travels along the line (CSS keyframe in design); steps reveal in sequence; titles' orange periods pop.
- Services: pin the section. Cards enter from below one at a time and stack with the offsets above; card 4 opens last. Scrub with scroll on desktop. On mobile, no pinning: simple reveal of the final stacked state.
- Pledges: struck-through old practice draws its line, then the promise appears; Tick circles scale in; stamp thumps in then rotates slowly; signature draws.
- Contact: chips toggle with a small scale; speed ring animates when a score arrives.
- Closer: words slide up from masks; arrow draws; footer fades in.
- Reduced motion: no scrub, no pin, no parallax — only simple fades or nothing.

## SEO / performance (this site sells SEO, so it must be flawless)
- Server-render everything. One H1 per page. Semantic landmarks. Real headings in order.
- Metadata: title ~55 chars, meta description ~150, canonical, OG/Twitter image (generate from the hero), sitemap.xml, robots.txt.
- JSON-LD: `ProfessionalService`/`LocalBusiness` (name, areaServed DFW cities, phone, hours, sameAs) + `WebSite` + `FAQPage` when FAQs exist. Fill from real details only.
- Budget: Lighthouse mobile 95+ on all four, LCP < 2.0s, CLS < 0.05, INP < 200ms. Skyline image as optimised AVIF/WebP with width/height, `priority` on the hero only. Fonts via `next/font`, `display: swap`. No layout shift from the stack or the tilted card.
- A11y: contrast AA (check orange text on `#EDEEF1` — use ink for small text, orange for large or decorative), visible focus ring `2px #0B0B0C`, labels on every input, aria-pressed on chips, tel/mailto links.

## Placeholders to replace before launch (track in TODO-CONTENT.md)
[FOUNDER NAME], [EMAIL], [ADDRESS], [HOURS], phone (214) 000-0000, all "Sample data" numbers (+212%, 41→128 calls, $38,400/MO, call log), draft pledges and About copy (confirm with founder), Services copy, speed-score SAMPLE badge, privacy/terms text, social links.
