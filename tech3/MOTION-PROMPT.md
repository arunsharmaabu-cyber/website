All seven sections now match `reference/` statically. Add motion.

Read `MOTION.md` fully. Install `gsap`, `@gsap/react` and `lenis`. Then:
1. Build `SmoothScroll` (Lenis driven by the GSAP ticker, synced to ScrollTrigger) and mount it in `app/layout.tsx`. Make anchor links use `lenis.scrollTo`.
2. Add `data-anim` attributes to the markup, then animate section by section in the order in MOTION.md (01 Hero first). Use `gsap.matchMedia()` for desktop, mobile and reduced-motion exactly as specified.
3. After each section, record a short screen capture or step through it, and confirm the final state is pixel-identical to `reference/`. Fix any layout shift.
4. Do the Services card stack last. It is the signature moment: pinned on desktop, simple reveals on mobile.
5. Finish with the checks in "Quality bar": reduced motion, JS off, keyboard, 4x CPU throttle, Lighthouse mobile 95+.

Do not change layout, colors, type or copy to make an animation work.
