"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Scrubbed with the scroll (reverses when scrolling back up):
//  - "YOUR" slides in from the left and reveals the arrow
//  - "FIRST." slides further right (from ~30% to ~55% of the width)
export function useCloserSlide(section: React.RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = section.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const your = root.querySelector<HTMLElement>("[data-anim=your]");
        const first = root.querySelector<HTMLElement>("[data-anim=first]");
        if (!your || !first) return;

        const trigger = {
          trigger: root,
          start: "top 85%",
          end: "top 10%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        };

        // YOUR: starts shifted left by the arrow's width so the arrow is hidden, slides to its place
        gsap.fromTo(
          your,
          { x: () => -(your.firstElementChild as HTMLElement).getBoundingClientRect().width * 1.15 },
          { x: 0, ease: "none", scrollTrigger: trigger },
        );

        // FIRST.: slides right, but never past the right padding of the section
        gsap.fromTo(
          first,
          { x: 0 },
          {
            x: () => {
              const sec = root.getBoundingClientRect();
              const r = first.getBoundingClientRect();
              const room = sec.right - 40 - (r.right - (gsap.getProperty(first, "x") as number));
              return Math.max(0, Math.min(window.innerWidth * 0.15, room));
            },
            ease: "none",
            scrollTrigger: trigger,
          },
        );

        document.fonts?.ready.then(() => ScrollTrigger.refresh());
      });

      return () => mm.revert();
    },
    { scope: section },
  );
}
