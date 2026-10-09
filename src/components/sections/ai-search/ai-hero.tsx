"use client";

import { useEffect, useState } from "react";

// ───────── Copy for this section: edit the words here ─────────
const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Marketing", href: "/marketing" },
  { label: "AI search optimization" },
];
const HEADING = "Be the source";
const QUOTE = "“Hey Google, who fixes roofs near me?”";
const RESULT = { initial: "Y", name: "Your Business Roofing", meta: "★ 4.9 · Plano, TX · Open now", read: "Read aloud by the assistant", sample: "Sample" };
const BARS = [0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.75];

export default function AiHero() {
  // first render = finished picture; the effect plays it as a loop
  const [typed, setTyped] = useState(QUOTE);
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
      while (!dead) {
        setTyped("");
        setCard(false);
        await wait(900);
        for (let c = 1; c <= QUOTE.length; c++) {
          setTyped(QUOTE.slice(0, c));
          await wait(45);
        }
        await wait(500);
        setCard(true);
        await wait(6500);
      }
    })().catch(() => {});
    return () => {
      dead = true;
    };
  }, []);

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

      <div className="relative flex h-[calc(100svh-132px)] min-h-[560px] flex-col items-center overflow-hidden rounded-[16px] border border-[#E1E3E8] bg-[radial-gradient(ellipse_at_50%_30%,#FFFFFF_0%,#F3F4F7_55%,#E9EAEE_100%)] md:h-[calc(100svh-150px)]">
        <h1 className="relative z-10 m-0 mt-8 text-center text-[40px] font-semibold leading-[.95] tracking-[-0.06em] md:mt-[clamp(20px,4vh,44px)] md:text-[clamp(44px,min(5.2vw,9.5vh),80px)]">
          {HEADING}
          <span className="text-accent">.</span>
        </h1>

        {/* the glowing orb with its rings */}
        <div className="relative mt-10 flex items-center justify-center md:mt-[clamp(32px,6vh,60px)]" style={{ width: "clamp(150px,27vh,240px)", height: "clamp(150px,27vh,240px)" }}>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center">
            {[1.35, 1.7, 2.05].map((k, i) => (
              <span
                key={k}
                className="a-ringout col-start-1 row-start-1 rounded-full opacity-0 border border-accent/40"
                style={{ width: `${k * 100}%`, height: `${k * 100}%`, animationDelay: `-${i * 1.3}s` }}
              />
            ))}
          </div>
          <div className="relative flex size-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#C9CEE8_0%,#F4B79E_55%,#FF5A1F_100%)] shadow-[0_30px_70px_-20px_rgba(255,77,0,.45)]">
            <div aria-hidden="true" className="flex h-[34%] items-center gap-[7%]">
              {BARS.map((h, i) => (
                <span key={i} className="a-wave block w-[3px] rounded-full bg-white/90 md:w-1" style={{ height: `${h * 100}%`, animationDelay: `${i * 0.12}s` }} />
              ))}
            </div>
          </div>
        </div>

        <p className="relative z-10 m-0 mt-7 min-h-[1.4em] px-5 text-center text-[16px] tracking-[-0.01em] md:mt-[clamp(18px,4vh,36px)] md:text-[20px]">{typed}</p>

        <div
          className="relative z-10 mt-5 w-[calc(100%-40px)] max-w-[420px] rounded-[10px] bg-white p-4 shadow-[0_24px_50px_-24px_rgba(11,11,12,.3)] transition-[opacity,transform] duration-700 ease-out md:mt-[clamp(14px,3vh,28px)]"
          style={{ opacity: card ? 1 : 0, transform: card ? "none" : "translateY(24px)" }}
        >
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-[8px] bg-accent text-[18px] font-semibold text-white">{RESULT.initial}</span>
            <div className="flex flex-col">
              <b className="text-[15px] font-semibold">{RESULT.name}</b>
              <span className="text-[12px] text-[#6B6E76]">
                <span className="text-accent">★</span> {RESULT.meta.replace("★ ", "")}
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-[#EDEEF1] pt-3 font-mono text-[9px] uppercase tracking-[.08em] text-[#6B6E76]">
            <span className="flex items-center gap-1.5">
              <span className="text-accent">◂)</span>
              {RESULT.read}
            </span>
            <span>{RESULT.sample}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
