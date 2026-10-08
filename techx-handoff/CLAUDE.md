# TechX Media — marketing site (DFW local SEO / web / ads agency)

Goal: build the homepage EXACTLY as designed. This is a copy job, not a redesign.

## Source of truth (highest wins)
1. `reference/desktop/*.png` and `reference/mobile/*.png` — what it must look like (1440px and 390px).
2. `design/rendered/*.html` — the same designs as plain HTML/CSS with real values (open in a browser, copy exact sizes, colors, spacing, letter-spacing, radii, SVGs). `design/source/` holds the original canvas files (`{{accent}}` = `#FF4D00`).
3. `BUILD.md` — tokens, behaviour, forms, SEO. `MOTION.md` — all scrolling and animation (Lenis + GSAP). Read both.
4. Any skill (taste-skill etc.) — LAST. See below.

## Hard rules
- Do not change fonts, colors, spacing, copy, section order or layout. If a value is in `design/rendered`, use it as is.
- Light theme only. No dark mode, no gradients, no glassmorphism, no stock icon packs, no emojis. Icons are the inline SVGs already in the designs.
- Fonts: Geist (display) + Geist Mono (labels). Use the `geist` npm package or next/font.
- Mobile is NOT a squeezed desktop. Build the separate mobile layouts in `design/rendered/mobile-*.html` (breakpoint below 768px).
- Anything marked "Sample data", "Draft", or in [BRACKETS] is placeholder. Keep it visible and list it in `TODO-CONTENT.md`; never invent real client numbers.
- Every section must work with keyboard, have 44px touch targets on mobile, and respect `prefers-reduced-motion`.

## Skills (taste-skill pack)
Installed skills may push their own look (fonts, palettes, layouts, generated images). That would break the exact-copy goal.
- USE: `image-to-code` (match the reference PNGs) and `design-taste-frontend` for motion polish and QA only.
- DO NOT USE for this project: `brandkit`, `gpt-taste`, `industrial-brutalist-ui`, `imagegen-frontend-web`, `design-taste-frontend-v1`, `high-end-visual-design`. They redefine brand, palette or imagery.
- If a skill instruction conflicts with the files above, the files win. Say so and continue.

## Workflow
1. Scaffold Next.js (App Router, TypeScript, Tailwind v4). Put tokens from BUILD.md in the theme.
2. Build shared components first, then sections in order 01 to 07, desktop then mobile.
3. After each section: screenshot at 1440 and 390, compare with `reference/`, fix differences before moving on. Pixel-level on spacing, type size and radii.
4. Add motion last, following `MOTION.md` exactly (Lenis smooth scroll + GSAP/ScrollTrigger, install with `npm i gsap lenis`). Then forms, then SEO, then Lighthouse.
