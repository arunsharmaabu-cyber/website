"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Pins the Services section while the four cards rise one after another and stack up.
// The final frame equals the static layout (which is what users without JS / with reduced motion see).
export function useServicesPin(section: React.RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = section.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-anim=card]", root);
        const lastBody = cards[cards.length - 1]?.querySelector<HTMLElement>("[data-anim=card-body]");
        if (!cards.length) return;

        const offscreen = () => window.innerHeight;
        const first = () => Math.round(window.innerHeight * 0.34);
        gsap.set(cards, { y: offscreen });
        gsap.set(cards[0], { y: first });
        if (lastBody) gsap.set(lastBody, { opacity: 0, y: 24 });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () => "+=" + Math.round(window.innerHeight * 2.3),
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        cards.forEach((card, i) => {
          tl.fromTo(card, { y: i === 0 ? first : offscreen }, { y: 0, ease: "power2.out", duration: i === 0 ? 0.7 : 1 }, i === 0 ? 0 : i - 0.3);
        });
        if (lastBody) tl.to(lastBody, { opacity: 1, y: 0, ease: "power2.out", duration: 0.6 }, cards.length - 0.9);

        // Clicking a card's header strip scrolls to the moment that card is on top.
        const handlers: Array<[Element, () => void]> = [];
        cards.forEach((card, i) => {
          const header = card.querySelector("header");
          if (!header) return;
          const go = () => {
            const st = tl.scrollTrigger;
            if (!st) return;
            const y = st.start + ((st.end - st.start) * (i + 1)) / tl.duration();
            if (window.__lenis) window.__lenis.scrollTo(y);
            else window.scrollTo({ top: y, behavior: "smooth" });
          };
          (header as HTMLElement).style.cursor = "pointer";
          header.addEventListener("click", go);
          handlers.push([header, go]);
        });

        document.fonts?.ready.then(() => ScrollTrigger.refresh());

        return () => handlers.forEach(([el, fn]) => el.removeEventListener("click", fn));
      });

      return () => mm.revert();
    },
    { scope: section },
  );
}
