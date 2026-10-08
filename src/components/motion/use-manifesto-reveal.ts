"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Pins the manifesto section and slides each word up out of its own mask (no opacity fade),
// then draws the signature. Without JS / with reduced motion everything is visible and static.
export function useManifestoReveal(section: React.RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = section.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const words = gsap.utils.toArray<HTMLElement>("[data-anim=word]", root);
        const signs = gsap.utils.toArray<SVGPathElement>("[data-anim=signature]", root);
        const meta = root.querySelector<HTMLElement>("[data-anim=signed]");
        if (!words.length) return;

        gsap.set(words, { yPercent: 115 });
        signs.forEach((p) => {
          const len = p.getTotalLength();
          gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        });
        if (meta) gsap.set(meta, { yPercent: 120 });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () => "+=" + Math.round(window.innerHeight * 1.7),
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        tl.to(words, { yPercent: 0, ease: "power3.out", duration: 1, stagger: { each: 0.06 } }, 0);
        const end = tl.duration();
        if (signs.length) tl.to(signs, { strokeDashoffset: 0, ease: "power1.inOut", duration: 1.2, stagger: 0.4 }, end - 0.6);
        if (meta) tl.to(meta, { yPercent: 0, ease: "power3.out", duration: 0.6 }, tl.duration() - 0.6);

        document.fonts?.ready.then(() => ScrollTrigger.refresh());
      });

      return () => mm.revert();
    },
    { scope: section },
  );
}
