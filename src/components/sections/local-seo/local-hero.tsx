"use client";

import { useEffect, useState } from "react";

// ───────── Copy for this section: edit the words here ─────────
const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Marketing", href: "/marketing" },
  { label: "Local SEO" },
];
const HEADING = ["Be the first name", "on the map"];
const QUERY = "roofer near me";
const RESULT = { rank: "1", name: "Your Business", rating: "4.9 (320+ reviews)", stars: 5 };
const SAMPLE = "Sample · Illustration";
const PLACES = [
  { name: "PLANO", x: 130, y: 70 },
  { name: "FRISCO", x: 700, y: 128 },
  { name: "IRVING", x: 230, y: 285 },
  { name: "RICHARDSON", x: 1010, y: 300 },
];
const DOTS = [
  [262, 233], [158, 296], [362, 342], [544, 364], [612, 188], [696, 312],
];

function Star() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" aria-hidden="true" fill="#FF4D00">
      <path d="M8 .8l2.2 4.7 5.1.6-3.8 3.5 1 5.1L8 12.2 3.5 14.7l1-5.1L.7 6.1l5.1-.6z" />
    </svg>
  );
}

export default function LocalHero() {
  // first render = finished picture (no-JS / reduced motion); the effect replays it as an intro
  const [typed, setTyped] = useState(QUERY);
  const [card, setCard] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let dead = false;
    const wait = (ms: number) =>
      new Promise<void>((resolve, reject) =>
        setTimeout(() => {
          if (dead) reject(new Error("stopped"));
          else resolve();
        }, ms),
      );
    (async () => {
      setTyped("");
      setCard(false);
      await wait(900);
      for (let c = 1; c <= QUERY.length; c++) {
        setTyped(QUERY.slice(0, c));
        await wait(75);
      }
      await wait(500);
      setCard(true);
    })().catch(() => {});
    return () => {
      dead = true;
    };
  }, []);

  return (
    <section className="box-border w-full bg-panel px-5 pb-6 pt-[96px] md:px-10 md:pb-10 md:pt-[clamp(96px,12vh,120px)]">
      <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[.1em]">
        {CRUMBS.map((c, i) => (
          <span key={c.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {c.href ? (
              <a href={c.href} className="no-underline hover:text-accent">
                {c.label}
              </a>
            ) : (
              <span aria-current="page">{c.label}</span>
            )}
          </span>
        ))}
      </nav>

      <div className="relative h-[540px] overflow-hidden rounded-[14px] bg-[#E8EAEE] md:h-[clamp(480px,66vh,600px)]">
        {/* the map, drawn in code */}
        <svg viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden="true">
          <defs>
            <pattern id="blocks" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0H0V44" fill="none" stroke="#fff" strokeWidth="1.4" opacity=".7" />
            </pattern>
          </defs>
          <rect width="1200" height="540" fill="#E8EAEE" />
          <rect width="1200" height="540" fill="url(#blocks)" />
          <rect x="80" y="120" width="170" height="90" rx="6" fill="#DCE7D7" />
          <rect x="460" y="410" width="150" height="80" rx="6" fill="#DCE7D7" />
          <rect x="820" y="90" width="120" height="100" rx="6" fill="#DCE7D7" />
          <path d="M960 330 L1200 380 V540 H900 Z" fill="#D5E3EE" />
          <g fill="none" stroke="#fff" strokeLinecap="round">
            <path d="M0 170 H1200" strokeWidth="14" />
            <path d="M0 410 C300 410 500 380 700 400 S1000 360 1200 330" strokeWidth="16" />
            <path d="M270 0 C300 120 330 280 360 540" strokeWidth="14" />
            <path d="M780 0 C760 120 700 260 640 360 S560 500 540 540" strokeWidth="14" />
            <path d="M560 250 C700 330 820 420 900 540" strokeWidth="10" />
            <path d="M0 300 C200 300 300 340 400 400" strokeWidth="8" />
          </g>
          {DOTS.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#E8EAEE" stroke="#9A9DA5" strokeWidth="3" />
          ))}
          {PLACES.map((p) => (
            <text key={p.name} x={p.x} y={p.y} fontSize="12" letterSpacing="2" fill="#9A9DA5" fontFamily="var(--font-geist-mono), monospace">
              {p.name}
            </text>
          ))}
        </svg>

        {/* search chip */}
        <div className="absolute left-1/2 top-5 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white px-5 py-2.5 text-[14px] shadow-[0_10px_24px_-12px_rgba(11,11,12,.3)]">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <circle cx="7" cy="7" r="5" />
            <path d="M11 11l3.5 3.5" />
          </svg>
          <span className="min-w-[118px]">
            {typed}
            <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[.15em] animate-[blink_1s_steps(1)_infinite] bg-ink" />
          </span>
        </div>

        {/* pin, radius and result card */}
        <div className="absolute left-[46%] top-[34%] md:left-[50%] md:top-[48%]">
          <div className="absolute left-1/2 top-1/2 size-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent bg-accent/10 md:size-[260px]" />
          <div className="a-ping absolute left-1/2 top-1/2 size-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30" />
          <div className="absolute left-1/2 top-1/2 flex size-[44px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent/40">
            <span className="flex size-[28px] items-center justify-center rounded-full bg-accent">
              <span className="size-[10px] rounded-full bg-white" />
            </span>
          </div>
          <div className="absolute left-1/2 top-[48px] -translate-x-1/2 md:left-[40px] md:top-1/2 md:translate-x-0 md:-translate-y-1/2">
          <div
            className="flex w-max items-center gap-3 rounded-[8px] bg-white py-2.5 pl-3 pr-5 shadow-[0_14px_30px_-12px_rgba(11,11,12,.35)] transition-[opacity,transform] duration-500 ease-out"
            style={{ opacity: card ? 1 : 0, transform: card ? "none" : "scale(.9) translateX(-12px)" }}
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-accent font-mono text-[12px] text-white">{RESULT.rank}</span>
            <span className="flex flex-col gap-0.5">
              <b className="text-[13px] font-semibold">{RESULT.name}</b>
              <span className="flex items-center gap-1 text-[11px] text-[#3A3C42]">
                <span className="flex gap-px">
                  {Array.from({ length: RESULT.stars }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </span>
                {RESULT.rating}
              </span>
            </span>
            <svg width="22" height="16" viewBox="0 0 28 20" fill="none" stroke="#FF4D00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 18l9-9 5 5 11-12M19 2h7v7" />
            </svg>
          </div>
          </div>
        </div>

        {/* headline card */}
        <div className="absolute bottom-5 left-5 max-w-[calc(100%-40px)] rounded-[10px] bg-white px-5 py-4 shadow-[0_14px_30px_-16px_rgba(11,11,12,.25)] md:bottom-8 md:left-8 md:px-7 md:py-5">
          <h1 className="m-0 text-[28px] font-semibold leading-[1] tracking-[-0.05em] md:text-[clamp(30px,3vw,44px)]">
            {HEADING[0]}
            <br />
            {HEADING[1]}
            <span className="text-accent">.</span>
          </h1>
        </div>

        <span className="absolute bottom-[104px] right-5 rounded-full bg-white px-4 py-2 md:bottom-8 font-mono text-[10px] font-medium uppercase tracking-[.1em] text-accent md:right-8">
          {SAMPLE}
        </span>
      </div>
    </section>
  );
}
