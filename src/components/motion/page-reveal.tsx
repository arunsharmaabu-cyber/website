"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Light, once-only scroll reveals for inner pages. Wrap a page's sections with <PageReveal>.
//   [data-line]   headline line slides up out of its clipped box
//   [data-rise]   block slides up a little (staggered when several share a [data-rise-group])
//   [data-grow]   bar grows from the left
//   [data-grow-y] vertical bar grows from the bottom
//   [data-stamp]  stamp lands once
//   [data-draw]   svg path draws itself
// Nothing is hidden without JS or with reduced motion.
export default function PageReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const once = { start: "top 88%", once: true } as const;

        // headlines: group the lines of each heading so they stagger together
        const headings = new Set<HTMLElement>();
        root.querySelectorAll<HTMLElement>("[data-line]").forEach((l) => headings.add(l.parentElement!.parentElement as HTMLElement));
        headings.forEach((h) => {
          const lines = h.querySelectorAll("[data-line]");
          gsap.fromTo(lines, { yPercent: 112 }, { yPercent: 0, duration: 1, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: h, ...once } });
        });

        // blocks
        const groups = new Map<Element, HTMLElement[]>();
        root.querySelectorAll<HTMLElement>("[data-rise]").forEach((el) => {
          const g = el.closest("[data-rise-group]") ?? el;
          groups.set(g, [...(groups.get(g) ?? []), el]);
        });
        groups.forEach((els, g) => {
          gsap.fromTo(els, { y: 40 }, { y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: g, ...once } });
        });

        // bars grow from the left
        root.querySelectorAll<HTMLElement>("[data-grow]").forEach((el, i) => {
          gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", duration: 1.1, ease: "power3.out", delay: (i % 4) * 0.1, scrollTrigger: { trigger: el, ...once } });
        });

        // vertical bars grow from the bottom
        root.querySelectorAll<HTMLElement>("[data-grow-y]").forEach((el, i) => {
          gsap.fromTo(el, { scaleY: 0 }, { scaleY: 1, transformOrigin: "bottom center", duration: 1, ease: "power3.out", delay: (i % 6) * 0.08, scrollTrigger: { trigger: el, ...once } });
        });

        // stamp lands once
        root.querySelectorAll<HTMLElement>("[data-stamp]").forEach((el) => {
          gsap.fromTo(el, { scale: 1.5, rotate: -18, autoAlpha: 0 }, { scale: 1, rotate: -8, autoAlpha: 1, duration: 0.5, ease: "power4.in", delay: 1.2, scrollTrigger: { trigger: el, ...once } });
        });

        // signature
        root.querySelectorAll<SVGPathElement>("[data-draw]").forEach((p) => {
          const len = p.getTotalLength();
          gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.4, ease: "power1.inOut", onComplete: () => { gsap.set(p, { clearProps: "strokeDasharray,strokeDashoffset" }); }, scrollTrigger: { trigger: p.ownerSVGElement ?? p, ...once } });
        });

        document.fonts?.ready.then(() => ScrollTrigger.refresh());
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
