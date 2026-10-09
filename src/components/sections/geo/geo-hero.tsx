"use client";

import { useEffect, useState } from "react";

// ───────── Copy for this section: edit the words here ─────────
const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Marketing", href: "/marketing" },
  { label: "GEO" },
];
const HEADING = "Be the answer";
const TABS = ["ChatGPT", "Perplexity", "Gemini", "Claude"];
const QUESTION = "Who is the best roofer in Plano, TX?";
const REPLY = "For roofing in Plano, reviews and local sources most often point to";
const NAME = "Your Business";
const BULLETS = ["Rated 4.9 across 320+ reviews", "Free inspections and same-week quotes", "Serves Plano, Frisco and Richardson"];
const SOURCES = ["Local reviews", "Chamber of Commerce", "yourbusiness.com"];
const SAMPLE = "Sample answer · Illustration";
const PLACEHOLDER = "Image placeholder · Background photo";

const WORDS = REPLY.split(" ");
const FINAL = { tab: 0, bubble: true, words: WORDS.length, name: true, bullets: BULLETS.length, chips: SOURCES.length };

export default function GeoHero() {
  // first render = the finished answer (no JS / reduced motion); the effect plays it as a loop
  const [s, setS] = useState(FINAL);

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
      let tab = 0;
      while (!dead) {
        setS({ tab, bubble: false, words: 0, name: false, bullets: 0, chips: 0 });
        await wait(700);
        setS((p) => ({ ...p, bubble: true }));
        await wait(900);
        for (let w = 1; w <= WORDS.length; w++) {
          setS((p) => ({ ...p, words: w }));
          await wait(70);
        }
        setS((p) => ({ ...p, name: true }));
        await wait(400);
        for (let b = 1; b <= BULLETS.length; b++) {
          setS((p) => ({ ...p, bullets: b }));
          await wait(350);
        }
        for (let c = 1; c <= SOURCES.length; c++) {
          setS((p) => ({ ...p, chips: c }));
          await wait(200);
        }
        await wait(3800);
        tab = (tab + 1) % TABS.length;
      }
    })().catch(() => {});
    return () => {
      dead = true;
    };
  }, []);

  const pop = (on: boolean) => ({
    opacity: on ? 1 : 0,
    transform: on ? "none" : "translateY(10px)",
    transition: "opacity .5s ease-out, transform .5s ease-out",
  });

  return (
    <section className="box-border w-full bg-panel px-5 pb-5 pt-[88px] md:px-10 md:pb-6 md:pt-[96px]">
      <nav aria-label="Breadcrumb" className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[.1em] text-[#6B6E76]">
        {CRUMBS.map((c, i) => (
          <span key={c.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {c.href ? (
              <a href={c.href} className="no-underline hover:text-accent">
                {c.label}
              </a>
            ) : (
              <span aria-current="page" className="font-semibold text-ink">
                {c.label}
              </span>
            )}
          </span>
        ))}
      </nav>

      <div className="relative flex h-[calc(100svh-132px)] min-h-[560px] flex-col items-center overflow-hidden rounded-[16px] bg-[#E4E7EF] md:h-[calc(100svh-150px)]">
        {/* soft colour blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[10%] top-[-10%] size-[60%] rounded-full bg-[radial-gradient(closest-side,#B7C0D6_0%,transparent_68%)]" />
          <div className="absolute -bottom-[25%] right-[-8%] size-[70%] rounded-full bg-[radial-gradient(closest-side,#F08A5C_0%,#F7B796_40%,transparent_70%)]" />
          <div className="absolute left-[30%] top-[40%] size-[45%] rounded-full bg-[radial-gradient(closest-side,#FBD9C6_0%,transparent_65%)]" />
        </div>

        <h1 className="relative z-10 m-0 mt-8 text-center text-[48px] font-semibold leading-[.95] tracking-[-0.06em] md:mt-[clamp(24px,5vh,56px)] md:text-[clamp(52px,min(6.4vw,11vh),96px)]">
          {HEADING}
          <span className="text-accent">.</span>
        </h1>

        <div className="relative z-10 mx-5 mt-8 w-[calc(100%-40px)] max-w-[640px] rounded-[18px] border border-white/70 bg-white/60 p-4 shadow-[0_30px_60px_-30px_rgba(11,11,12,.25)] backdrop-blur-md md:mt-[clamp(20px,4vh,40px)] md:p-6">
          <div className="flex flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-[.08em]">
            {TABS.map((t, i) => (
              <span
                key={t}
                className={`rounded-full px-3 py-1.5 transition-colors duration-300 ${i === s.tab ? "bg-ink text-page" : "text-[#6B6E76]"}`}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 flex justify-end" style={pop(s.bubble)}>
            <span className="rounded-full bg-ink px-4 py-2.5 text-[13px] font-medium text-page md:text-[14px]">{QUESTION}</span>
          </div>

          <div className="mt-4 flex items-start gap-3">
            <span className="mt-0.5 flex size-8 flex-none items-center justify-center rounded-full bg-accent text-[16px] leading-none text-white" style={pop(s.words > 0)}>
              ✱
            </span>
            <div className="min-w-0 flex-1">
              <p className="m-0 min-h-[3.2em] text-[13px] leading-[1.45] text-[#3A3C42] md:text-[14px]">
                {WORDS.slice(0, s.words).join(" ")}{" "}
                <b className="font-semibold text-ink" style={{ opacity: s.name ? 1 : 0, transition: "opacity .4s" }}>
                  {NAME}:
                </b>
              </p>
              <ul className="m-0 mt-2 flex list-none flex-col gap-1.5 p-0 text-[13px] md:text-[14px]">
                {BULLETS.map((b, i) => (
                  <li key={b} className="flex items-center gap-2.5" style={pop(s.bullets > i)}>
                    <span className="size-[5px] rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {SOURCES.map((c, i) => (
                  <span key={c} className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] text-[#3A3C42]" style={pop(s.chips > i)}>
                    <b className="font-mono text-[10px] text-accent">{i + 1}</b>
                    {c}
                  </span>
                ))}
              </div>
              <p className="m-0 mt-4 font-mono text-[9px] font-semibold uppercase tracking-[.1em] text-accent">{SAMPLE}</p>
            </div>
          </div>
        </div>

        <span className="absolute bottom-4 left-4 z-10 rounded-[3px] bg-white/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[.08em] text-[#6B6E76]">
          {PLACEHOLDER}
        </span>
      </div>
    </section>
  );
}
