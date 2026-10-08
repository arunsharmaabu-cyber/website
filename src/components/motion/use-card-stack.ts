"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Pins a section while its cards ([data-tier]) rise one after another and settle on top of each other.
// Without JS, or with reduced motion, the cards stay as a normal column.
export function useCardStack(section: React.RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = section.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const stack = root.querySelector<HTMLElement>("[data-stack]");
        const cards = gsap.utils.toArray<HTMLElement>("[data-tier]", root);
        if (!stack || cards.length < 2) return;

        const step = 14; // each card peeks out this much above the next
        const setup = () => {
          gsap.set(cards, { clearProps: "all" });
          gsap.set(stack, { clearProps: "height,position" });
          const tallest = Math.max(...cards.map((c) => c.offsetHeight));
          gsap.set(stack, { height: tallest + step * (cards.length - 1), position: "relative" });
          cards.forEach((c, i) => gsap.set(c, { position: "absolute", left: 0, right: 0, top: i * step, y: i === 0 ? 0 : window.innerHeight, scale: 1 }));
        };
        setup();

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () => "+=" + Math.round(window.innerHeight * 0.7 * (cards.length - 1)),
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            onRefreshInit: setup,
          },
        });
        cards.forEach((card, i) => {
          if (i === 0) return;
          tl.to(card, { y: 0, ease: "power2.out", duration: 1 }, i - 1);
          tl.to(cards[i - 1], { scale: 0.96, duration: 1 }, i - 1);
        });

        document.fonts?.ready.then(() => ScrollTrigger.refresh());
      });

      return () => mm.revert();
    },
    { scope: section },
  );
}
