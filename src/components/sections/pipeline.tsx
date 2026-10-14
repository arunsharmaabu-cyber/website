"use client";

import { useEffect, useRef } from "react";

// ───────── Copy for this section: edit the words here ─────────
const HEADING = "Our Process";
const SUBHEADING = "From search to ringing phone";
const INTRO =
  "From strategy to execution, we combine marketing, AI-powered search, web development, and consulting to help your business boost visibility, attract qualified leads, and accelerate growth.";

const STEPS = [
  { n: "01", title: "Discover", text: "We understand your business, audience, and goals to identify the right growth opportunities." },
  { n: "02", title: "Strategize", text: "We build a tailored strategy around SEO, AI search visibility, web design, and your business needs." },
  {
    n: "03",
    title: "Build & Launch",
    text: "We bring your strategy to life with high-performing websites and targeted marketing solutions designed to attract and convert the right audience.",
  },
  {
    n: "04",
    title: "Optimize & Grow",
    text: "We track performance, refine strategies, and uncover new opportunities to improve visibility, generate leads, and drive sustainable growth.",
  },
];

// One straight, very thin black line that fills as the page scrolls, with a single black cube riding its tip from
// the first step to the last, spinning two full turns on the way. Left to right on desktop, top to bottom on phones.
export default function Pipeline() {
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const ol = list.current;
    if (!ol) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const r = ol.getBoundingClientRect();
      // 0 when the steps first rise into view, 1 when they sit comfortably in the middle of the screen
      const p = reduce ? 1 : Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height * 0.9 + vh * 0.25)));
      ol.style.setProperty("--p", String(p));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="pipeline" className="box-border w-full bg-panel">
      <div className="box-border flex flex-col gap-12 px-5 py-16 md:gap-[15vh] md:px-10 md:py-[clamp(72px,11vh,120px)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <h2 className="m-0 text-[44px] font-semibold leading-[.95] tracking-[-0.06em] md:text-[clamp(44px,min(6vw,9vh),96px)]">
              {HEADING}
              <span className="text-accent">.</span>
            </h2>
            <p className="m-0 mt-3 text-[20px] font-medium leading-[1.2] tracking-[-0.025em] text-[#3A3C42] md:mt-4 md:text-[clamp(22px,2.2vw,32px)]">{SUBHEADING}</p>
          </div>
          <p className="m-0 hidden max-w-[440px] text-[16px] leading-[1.55] text-[#3A3C42] md:block">{INTRO}</p>
        </div>

        <ol ref={list} className="relative m-0 list-none p-0 pl-10 md:grid md:grid-cols-4 md:gap-x-8 md:pl-0" style={{ "--p": 0 } as React.CSSProperties}>
          {/* the line: a very thin grey track, a thin black fill on top, and one cube at the tip of the fill */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[7px] top-0 w-[2px] bg-[#CFD1D6] md:bottom-auto md:left-0 md:right-0 md:top-[7px] md:h-[2px] md:w-auto"
          >
            <span className="absolute left-0 top-0 w-full bg-ink [height:calc(var(--p)*(100%-16px)+8px)] md:h-full md:[height:100%] md:[width:calc(var(--p)*(100%-16px)+8px)]" />
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 size-4 bg-ink [top:calc(var(--p)*(100%-16px))] [transform:rotate(calc(var(--p)*720deg))] md:top-0 md:[left:calc(var(--p)*(100%-16px))]"
          />

          {STEPS.map((s) => (
            <li key={s.n} className="relative pb-10 last:pb-0 md:pb-0 md:pt-12">
              <div className="font-mono text-[12px] tracking-[.1em] text-[#5C5F66]">{s.n}</div>
              <h3 className="m-0 mt-1 text-[28px] font-semibold leading-[1.05] tracking-[-0.045em] text-ink md:text-[clamp(26px,2.4vw,36px)]">{s.title}</h3>
              <p className="m-0 mt-3 max-w-[320px] text-[15px] leading-[1.5] text-[#3A3C42]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
