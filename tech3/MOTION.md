# MOTION.md — Lenis (smooth scroll) + GSAP (animation)

Motion is added AFTER each section matches `reference/` statically. Never change layout, sizes or colors to make an animation work. Final resting state of every animation = the reference screenshot.

## Install
```bash
npm i gsap lenis
```
(GSAP is free including ScrollTrigger. Use `lenis`, not the old `@studio-freight/lenis`.)

## 1. Smooth scroll provider — `components/motion/SmoothScroll.tsx`
Client component, mounted once in `app/layout.tsx` around `{children}`.
```tsx
'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;                       // native scroll, no smoothing
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: true });
    lenis.on('scroll', ScrollTrigger.update); // keep ScrollTrigger in sync
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    (window as any).__lenis = lenis;
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return <>{children}</>;
}
```
- Smooth scroll on desktop and touch is fine with Lenis defaults; do not add `syncTouch`.
- Anchor links (`#audit`, `#contact`, `#services`) use `lenis.scrollTo(target, { offset: -16 })`.
- Add Lenis's recommended CSS (`html.lenis, html.lenis body { height:auto } .lenis.lenis-smooth { scroll-behavior:auto !important }`) to globals.

## 2. Animation rules
- One hook per section: `useGSAP` from `@gsap/react` (or `useLayoutEffect` + `gsap.context(() => {...}, ref)` with `ctx.revert()` on cleanup). No global selectors; scope to the section ref.
- Use `gsap.matchMedia()`:
  - `(min-width: 768px) and (prefers-reduced-motion: no-preference)` → full motion, pinning, scrub, pointer parallax
  - `(max-width: 767px) and (prefers-reduced-motion: no-preference)` → light motion: fades, small y-translates, count-ups, line draws. No pin, no scrub.
  - `(prefers-reduced-motion: reduce)` → set final state instantly, no tweens.
- Animate only `transform`, `opacity`, `clip-path`, `stroke-dashoffset`. Never width/height/top/left. No layout shift: set `will-change: transform` only on elements while animating.
- Start states are set in JS (`gsap.set`) inside the matchMedia, so with JS off or reduced motion the page is fully visible (SEO + a11y).
- Defaults: `gsap.defaults({ ease: 'power3.out', duration: 0.8 })`. Scroll triggers: `start: 'top 80%'`, `once: true` unless noted.
- Call `ScrollTrigger.refresh()` after fonts and images load (`document.fonts.ready`).

## 3. Per-section choreography (target = element in `design/rendered`)
Add `data-anim="..."` attributes to the markup so the selectors are stable.

**01 Hero** (on load, timeline, ~1.2s total)
- nav: fade + y 12 → 0
- `data-anim="card"` search card: y 40 → 0, opacity 0 → 1, rotateZ settles from 7° to its designed 4°; ghost cards: x/y from 0 → their offsets (stagger .1)
- `data-anim="callout"` ×4: scale .8 → 1 + opacity, dotted leader draws (`stroke-dashoffset`), stagger .12
- H1 lines: mask reveal (wrapper overflow hidden, inner y 100% → 0), stagger .1; subline + paragraph fade up
- form rows fade up stagger .08; skyline fades in last
- desktop only: pointer parallax on the card (±8px, `quickTo`, damped)

**02 Receipts** (ScrollTrigger once)
- `data-anim="count"` +212%: count 0 → 212 over 1.6s, `snap: 1`, keep "+" and "%" static
- chart path: draw line via `stroke-dashoffset` (use `getTotalLength()`), area fades in, end dot pops
- receipt: clip-path inset(0 0 100% 0) → inset(0) while y -40 → 0, then a 3° rotate settle ("printing")
- call-log rows stagger y 16 → 0; booked badges pop; pulse dot stays on CSS keyframes
- tabs: on click crossfade the data (opacity .2s out, swap, .3s in); count-up reruns

**03 Pipeline**
- orange dot travels the dashed line: keep the CSS keyframe from the design (desktop). On mobile the nodes light up in order as each enters view (scale .6 → 1)
- steps stagger in; the orange "." in each title pops (scale 0 → 1, `back.out(2)`)

**04 Services (card stack)** — the signature moment
- Desktop (min-width 768): `ScrollTrigger.create({ pin: true, scrub: 0.6, start: 'top top+=16', end: '+=2400' })`. Timeline: cards 1→4 each travel from below the viewport (y 100vh) up to their designed stack position (`top = i*64px`, inset `(3-i)*14px`); earlier cards scale to .98 and dim slightly as the next arrives; card 4 lands last and its content fades up (headline, rows, brand board). Final frame must equal the reference screenshot exactly.
- Mobile: no pin. Each card slides up (y 40 → 0) as it enters; final stacked state is static.
- Strips stay clickable: clicking a strip scrolls (Lenis) so that card is open.

**05 Pledges**
- each row: old practice (struck) — draw the line-through left to right (scaleX on an absolutely positioned 1px line, or `background-size` trick), then the promise fades up, then the Tick scales in with `back.out(2.5)`; stagger .15
- About card: stamp "thumps" (scale 1.6 → 1, opacity 0 → 1, rotate -12° → 0) then keeps its slow CSS spin; signature path draws over 1.4s

**06 Contact**
- panel fades up; field rows stagger
- chips: press = quick scale .96 → 1; `aria-pressed` toggles
- speed ring: when a PageSpeed score arrives, tween stroke-dasharray from 0 to value and count the number

**07 Closer + Footer**
- giant words: each in a mask, y 110% → 0 on scroll, stagger .12; the orange arrow draws; the period pops
- footer columns fade up stagger .06
- Footer is NOT sticky/reveal-under. Keep it a normal block.

## 4. Quality bar
- 60fps on a mid Android: test with Chrome CPU 4x slowdown. If a section drops frames, simplify its animation, not the layout.
- Lighthouse performance must stay 95+ on mobile: load GSAP/ScrollTrigger/Lenis only on the client, no animation work before first paint (hero timeline starts after `requestAnimationFrame`), dynamic-import ScrollTrigger-heavy sections if needed.
- Test: Reduced motion on (everything static and complete), JS disabled (content visible), keyboard tab through (focus never hidden by a pinned layer), anchor links land correctly with Lenis.
- Resize/orientation: matchMedia handles it; `ctx.revert()` on cleanup so nothing double-binds in React strict mode.
