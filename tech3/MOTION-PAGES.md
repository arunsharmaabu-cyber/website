# MOTION-PAGES.md — inner page motion (each page moves differently)

Rule: animate once on enter (ScrollTrigger, `once: true`), keep ambient loops calm and CSS-only, honor prefers-reduced-motion (show final state). Copy timings from the CSS in `design/source/pages/*` (keyframes are `from`-only; the resting style is the end state).

| Page | Hero object | Other motion |
|---|---|---|
| Marketing | orbit of 7 services rotating around a core, nodes counter-rotate to stay upright | marquee, switchboard hover lights a path, Found→Trusted→Called line draws |
| SEO | query types in, results re-sort, "Your Business" climbs to #1 | spec columns rise in, keyword table rows stagger, timeline bar grows |
| Local SEO | radar sweep + pings on map, GBP card floats | rank grid cells pop in sequence, opposing suburb marquees, count-up stats, route pin draws |
| Content | highlighter wipes across headline words, article cards fan out | topic cluster lines draw, calendar cells fill, horizontal rail drifts |
| GEO | chat streams an answer token by token, gauge fills | flow diagram dashes flow, citation matrix ticks light up per engine |
| AI search | AI Overview card builds line by line, code card types, entity graph links draw | readiness bars grow, before/after scan line sweeps, voice waveform pulses |
| PPC | ticker scrolls, `$58` counts up, call feed scrolls upward | funnel bars grow, sparklines draw, phone rings, trade-off meters slide |
| Social | phone feed scrolls, stickers float | notes drop in with slight rotation, bento tiles pop, inbox messages arrive in order, bars grow |
| Web design | browser mockup assembles block by block, Lighthouse rings fill | before/after wipe, timeline weeks fill, quote lines print |
| Consulting | paper stack deals out, REVIEWED stamp thumps | tier cards rise, Gantt bars grow left to right, DELIVERED stamp thumps |
| About / Contact | light touch only (rise, stamp, ring) | unchanged from homepage language |

Mobile: same animations, fewer simultaneous. No pinning on inner pages.
