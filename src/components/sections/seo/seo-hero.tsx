"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ArrowSVG from "@/components/ui/arrow-svg";
import MaskLines from "@/components/ui/mask-lines";

// ───────── Copy for this section: edit the words here ─────────
const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Marketing", href: "/marketing" },
  { label: "SEO" },
];
const HEADING = ["Rank where", "buyers search"];
const QUERY = "roofing company dallas";
// The three results (sample). The first one is "you".
const RESULTS = [
  { n: "01", name: "Your Business", meta: "Roofing Contractor · Dallas, TX", rating: "4.9 (320+ reviews)", stars: 5, rank: "#1", you: true },
  { n: "02", name: "Competitor Business", meta: "", rating: "3.8 (70+ reviews)", stars: 4, rank: "#2", you: false },
  { n: "03", name: "Another Competitor", meta: "", rating: "3.5 (20+ reviews)", stars: 3, rank: "#3", you: false },
];
const CHIPS = {
  left: ["Local visibility", "Qualified leads"],
  right: ["Higher rankings", "More customers"],
};
const SKYLINE = { src: "/skyline.png", w: 1200, h: 300 };

const TYPE_MS = 65;

function Star({ on }: { on: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" fill={on ? "#FF4D00" : "#C9CBD1"}>
      <path d="M8 .8l2.2 4.7 5.1.6-3.8 3.5 1 5.1L8 12.2 3.5 14.7l1-5.1L.7 6.1l5.1-.6z" />
    </svg>
  );
}

function Chip({ text, side, show, delay, instant }: { text: string; side: "left" | "right"; show: boolean; delay: number; instant: boolean }) {
  return (
    <div
      className="flex items-center gap-3 rounded-[10px] bg-white/80 px-3 py-2 font-mono text-[10px] uppercase leading-[1.3] tracking-[.08em] shadow-[0_10px_24px_-14px_rgba(11,11,12,.3)] transition-[opacity,transform] duration-700 ease-out"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "none" : `translateX(${side === "left" ? -24 : 24}px)`,
        transitionDelay: show ? `${delay}ms` : "0ms",
        transitionDuration: instant ? "0ms" : undefined,
      }}
    >
      {side === "right" && <span className="size-2 flex-none rounded-full bg-accent" />}
      <span className="max-w-[90px]">{text}</span>
      {side === "left" && <span className="size-2 flex-none rounded-full bg-accent" />}
    </div>
  );
}

export default function SeoHero() {
  // the first render is the finished picture, so no-JS and reduced motion see a complete hero
  const [typed, setTyped] = useState(QUERY);
  const [pressed, setPressed] = useState(false);
  const [cards, setCards] = useState(true);
  const [chips, setChips] = useState(true);
  const [instant, setInstant] = useState(false); // first reset happens without transitions

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let dead = false;
    const wait = (ms: number) =>
      new Promise<void>((resolve, reject) =>
        setTimeout(() => {
          if (dead) reject(new Error("stopped")); // the effect was cleaned up (e.g. dev double-mount)
          else resolve();
        }, ms),
      );
    (async () => {
      let first = true;
      while (!dead) {
        if (first) setInstant(true);
        setTyped("");
        setPressed(false);
        setCards(false);
        setChips(false);
        if (first) {
          await wait(80);
          setInstant(false);
          first = false;
        }
        await wait(900);
        setPressed(true); // the bar is clicked
        await wait(450);
        for (let c = 1; c <= QUERY.length && !dead; c++) {
          setTyped(QUERY.slice(0, c));
          await wait(TYPE_MS);
        }
        await wait(350);
        setCards(true); // results slide in from the left
        await wait(900);
        setChips(true);
        await wait(5200);
        setCards(false);
        setChips(false);
        await wait(900);
      }
    })().catch(() => {});
    return () => {
      dead = true;
    };
  }, []);

  return (
    <section className="relative box-border w-full overflow-hidden bg-panel px-5 pb-[110px] pt-[104px] md:min-h-[82svh] md:px-10 md:pb-[clamp(110px,16vh,160px)] md:pt-[clamp(120px,16vh,170px)]">
      <div className="relative z-10 flex flex-col gap-10 md:grid md:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] md:items-start md:gap-12">
        <div className="flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-[12px] uppercase tracking-[.1em]">
            {CRUMBS.map((c, idx) => (
              <span key={c.label} className="flex items-center gap-2">
                {idx > 0 && <span aria-hidden="true">/</span>}
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
          <h1 className="m-0 text-[40px] font-semibold leading-[.94] tracking-[-0.06em] md:text-[clamp(36px,3.8vw,58px)]">
            <MaskLines lines={HEADING} accent />
          </h1>
        </div>

        {/* the picture: a search bar that is clicked and typed in, and results that slide in */}
        <div aria-hidden="true" className="relative mx-auto w-full max-w-[640px] md:ml-auto md:mr-[150px] md:mt-8 md:max-w-[460px]">
          <div className="absolute -left-[105px] top-[78px] z-0 hidden flex-col gap-[90px] md:flex">
            {CHIPS.left.map((t, i) => (
              <Chip key={t} text={t} side="left" show={chips} delay={i * 140} instant={instant} />
            ))}
          </div>
          <div className="absolute -right-[150px] top-[90px] z-20 hidden flex-col gap-[100px] md:flex">
            {CHIPS.right.map((t, i) => (
              <Chip key={t} text={t} side="right" show={chips} delay={200 + i * 140} instant={instant} />
            ))}
          </div>

          <div
            className={`flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 shadow-[0_18px_40px_-18px_rgba(11,11,12,.3)] transition-[transform,box-shadow] duration-300 ${
              pressed ? "scale-[.985] ring-2 ring-accent/60" : ""
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="#0B0B0C" strokeWidth="1.4" strokeLinecap="round" className="flex-none">
              <circle cx="7" cy="7" r="5" />
              <path d="M11 11l3.5 3.5" />
            </svg>
            <span className="min-h-[1.3em] flex-1 whitespace-nowrap text-[16px] tracking-[-0.02em] md:text-[18px]">
              {typed}
              <span className="ml-1 inline-block h-[.95em] w-[2px] translate-y-[.15em] animate-[blink_1s_steps(1)_infinite] bg-ink" />
            </span>
            <span className="hidden text-[#9A9DA5] md:block">
              <svg width="18" height="18" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M3 3l10 10M13 3L3 13" />
              </svg>
            </span>
            <span className={`flex size-10 flex-none items-center justify-center rounded-full bg-accent md:h-10 md:w-14 md:rounded-[999px] ${cards && pressed ? "" : ""}`}>
              <ArrowSVG className="size-5 [&]:stroke-white" />
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-3 [transform:perspective(1400px)_rotateY(-6deg)_rotateZ(1.5deg)]">
            {RESULTS.map((r, i) => (
              <div
                key={r.n}
                className={`flex items-center gap-4 rounded-[18px] border border-white bg-white/90 px-4 py-3 transition-[opacity,transform] duration-[900ms] ease-out md:gap-5 md:px-5 md:py-3.5 ${
                  r.you ? "shadow-[0_24px_40px_-20px_rgba(11,11,12,.3)]" : "shadow-[0_14px_24px_-18px_rgba(11,11,12,.2)]"
                }`}
                style={{
                  opacity: cards ? (r.you ? 1 : 0.62 - i * 0.12) : 0,
                  transform: cards ? "none" : "translateX(-140px)",
                  transitionDelay: cards ? `${i * 180}ms` : "0ms",
                  transitionDuration: instant ? "0ms" : undefined,
                }}
              >
                <span className="font-mono text-[14px] text-[#6B6E76]">{r.n}</span>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className={`font-semibold tracking-[-0.02em] ${r.you ? "text-[17px] md:text-[19px]" : "text-[14px] text-[#6B6E76] md:text-[15px]"}`}>{r.name}</span>
                  {r.meta && <span className="text-[12px] text-[#3A3C42] md:text-[13px]">{r.meta}</span>}
                  {!r.you && <span className="my-0.5 h-[6px] w-3/5 rounded-full bg-[#E3E5EA]" />}
                  <span className="flex items-center gap-2 text-[11px] text-[#6B6E76] md:text-[12px]">
                    <span className="flex gap-0.5">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} on={s < r.stars} />
                      ))}
                    </span>
                    {r.rating}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {r.you && (
                    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" stroke="#FF4D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 18l9-9 5 5 11-12M19 2h7v7" />
                    </svg>
                  )}
                  <span className={`font-semibold ${r.you ? "text-[18px]" : "text-[15px] text-[#9A9DA5]"}`}>{r.rank}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Image
        src={SKYLINE.src}
        alt=""
        width={SKYLINE.w}
        height={SKYLINE.h}
        priority
        className="pointer-events-none absolute bottom-0 left-0 h-auto w-[500px] select-none opacity-40 mix-blend-multiply md:ml-10 md:w-[clamp(800px,70vw,800px)]"
      />
    </section>
  );
}
