"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Cards start out of line and slide into a perfect line as each one reaches the middle of the screen.
// Mark each card with [data-card]. Desktop: staggered heights per column. Mobile: alternate sideways.
// Reduced motion / no JS: cards simply sit aligned.
export function useCardAlign<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]", root);
      const mm = gsap.matchMedia();

      const run = (from: (i: number) => gsap.TweenVars) => {
        cards.forEach((el, i) => {
          gsap.fromTo(
            el,
            { ...from(i) },
            {
              x: 0,
              y: 0,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top 92%", end: "top 48%", scrub: 0.6 },
            },
          );
        });
      };

      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => {
        const top0 = cards[0]?.getBoundingClientRect().top;
        const cols = Math.max(1, cards.filter((c) => Math.abs(c.getBoundingClientRect().top - top0) < 4).length);
        run((i) => ({ y: (i % cols) * (cols > 3 ? 56 : 72) + 40 }));
      });
      mm.add("(prefers-reduced-motion: no-preference) and (max-width: 767px)", () => {
        run((i) => ({ x: i % 2 ? 36 : -36, y: 24 }));
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      return () => mm.revert();
    },
    { scope: ref },
  );

  return ref;
}
