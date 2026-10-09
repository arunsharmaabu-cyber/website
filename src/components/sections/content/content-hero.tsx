"use client";

import { useEffect, useState } from "react";

// ───────── Copy for this section: edit the words here ─────────
const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Marketing", href: "/marketing" },
  { label: "Content marketing" },
];
const HEADING = ["Content that", "earns the", "call"];
const NOTES = {
  left: { tag: "Reader asks", text: "How much does it actually cost?" },
  right: { tag: "We answer", text: "Here's the real range, and what moves it." },
};
// The fan of pages at the bottom (sample titles)
const PAGES = [
  { tag: "Guide", title: "How much does a roof replacement cost in Plano?", read: "" },
  { tag: "Service page", title: "Roof replacement in Frisco, TX", read: "3 min read" },
  { tag: "FAQ", title: "Does homeowners insurance cover hail damage?", read: "2 min read" },
  { tag: "Case study", title: "A Plano re-roof, from first call to final walk", read: "" },
];
const WRITING = "Writing:";
const SAMPLE = "Sample titles";

const TYPE_MS = 45;
const TITLES = PAGES.map((p) => p.title);
// Where each card ends up (--final = left edge, mobile / desktop), where it starts in the pile (--stack), its tilt and drop.
const FAN = [
  { pos: "[--final:2%] md:[--final:1%] [--stack:28%] md:[--stack:37%]", rot: -7, top: 34 },
  { pos: "[--final:52%] md:[--final:26%] [--stack:28%] md:[--stack:37%]", rot: -2, top: 6 },
  { pos: "[--final:52%] md:[--final:49%] [--stack:28%] md:[--stack:37%]", rot: 1.5, top: 0 },
  { pos: "[--final:52%] md:[--final:72%] [--stack:28%] md:[--stack:37%]", rot: 6, top: 22 },
];

export default function ContentHero() {
  // first render = finished picture (no JS / reduced motion); the effect replays it: cards pile up, then fan open
  const [open, setOpen] = useState(true);
  const [still, setStill] = useState(false);
  const [typed, setTyped] = useState(TITLES[0]);

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
      setStill(true); // jump to the piled state without animating
      setOpen(false);
      setTyped("");
      await wait(80);
      setStill(false);
      await wait(450);
      setOpen(true); // fan open
      await wait(1100);
      let n = 0;
      while (!dead) {
        const t = TITLES[n % TITLES.length];
        for (let c = 1; c <= t.length; c++) {
          setTyped(t.slice(0, c));
          await wait(TYPE_MS);
        }
        await wait(3800);
        for (let c = t.length - 1; c >= 0; c--) {
          setTyped(t.slice(0, c));
          await wait(18);
        }
        await wait(300);
        n++;
      }
    })().catch(() => {});
    return () => {
      dead = true;
    };
  }, []);

  const fade = (delay: number, fromX: number) => ({
    opacity: open ? 1 : 0,
    transform: open ? "none" : `translate(${fromX}px, 24px)`,
    transition: still ? "none" : `opacity .8s ease-out ${delay}ms, transform .9s cubic-bezier(.2,.8,.2,1) ${delay}ms`,
  });
  const ease = "1.1s cubic-bezier(.2,.8,.2,1)";

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

      {/* the panel fills the rest of the first screen */}
      <div className="relative flex h-[calc(100svh-132px)] min-h-[560px] flex-col overflow-hidden rounded-[16px] border border-[#E1E3E8] bg-[#EBECF0] [background-image:radial-gradient(#D9DBE0_1px,transparent_1px)] [background-size:14px_14px] md:h-[calc(100svh-150px)]">
        {/* sticky notes */}
        <div
          aria-hidden="true"
          className="absolute left-4 top-3 z-10 w-[140px] -rotate-[4deg] bg-white px-3.5 pb-3 pt-4 shadow-[0_14px_24px_-14px_rgba(11,11,12,.3)] md:left-[4%] md:top-[34px] md:w-[180px] md:px-4"
          style={fade(200, -30)}
        >
          <span className="absolute -top-2.5 left-1/2 h-4 w-14 -translate-x-1/2 bg-accent/25" />
          <span className="font-mono text-[9px] font-semibold uppercase tracking-[.1em] text-accent">{NOTES.left.tag}</span>
          <p className="m-0 pt-1 text-[13px] font-medium leading-[1.25] tracking-[-0.01em] md:text-[15px]">{NOTES.left.text}</p>
        </div>
        <div
          aria-hidden="true"
          className="absolute right-[3%] top-[56px] z-10 hidden w-[190px] rotate-[4deg] bg-white px-4 pb-3 pt-4 shadow-[0_14px_24px_-14px_rgba(11,11,12,.3)] md:block"
          style={fade(350, 30)}
        >
          <span className="absolute -top-2.5 right-6 h-4 w-14 bg-accent/25" />
          <span className="font-mono text-[9px] font-semibold uppercase tracking-[.1em] text-accent">{NOTES.right.tag}</span>
          <p className="m-0 pt-1 text-[15px] font-medium leading-[1.25] tracking-[-0.01em]">{NOTES.right.text}</p>
        </div>

        {/* headline only, high up */}
        <div className="relative z-0 flex flex-col items-center px-5 pt-[104px] text-center md:pt-[clamp(28px,5vh,56px)]">
          <h1 className="m-0 text-[48px] font-semibold leading-[.95] tracking-[-0.06em] md:text-[clamp(52px,min(7.4vw,12.5vh),112px)]">
            {HEADING[0]}
            <br />
            {HEADING[1]}
            <br />
            {HEADING[2]}
            <span className="text-accent">.</span>
          </h1>
        </div>

        {/* the fan of pages: piled at first, then opening */}
        <div aria-hidden="true" className="relative mx-auto mt-auto h-[200px] w-full max-w-[980px] md:h-[clamp(200px,29vh,270px)]">
          {PAGES.map((p, i) => {
            const f = FAN[i];
            return (
              <div
                key={p.tag}
                className={`absolute w-[44%] md:w-[26%] ${f.pos} ${i > 1 ? "hidden md:block" : ""}`}
                style={{
                  left: open ? "var(--final)" : "var(--stack)",
                  top: open ? f.top : 40 + i * 4,
                  zIndex: i + 1,
                  transition: still ? "none" : `left ${ease} ${i * 90}ms, top ${ease} ${i * 90}ms`,
                }}
              >
                <div
                  className="rounded-[10px] bg-white p-3.5 shadow-[0_18px_30px_-16px_rgba(11,11,12,.3)] md:p-4"
                  style={{
                    transform: open ? `rotate(${f.rot}deg)` : `rotate(${(i - 1.5) * 1.2}deg) scale(.95)`,
                    minHeight: 210,
                    transition: still ? "none" : `transform ${ease} ${i * 90}ms`,
                  }}
                >
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[.1em] text-accent">{p.tag}</span>
                  <p className="m-0 pt-2 text-[14px] font-medium leading-[1.2] tracking-[-0.01em] md:text-[17px]">{p.title}</p>
                  <div className="mt-3 flex flex-col gap-1.5">
                    <span className="h-1.5 w-[90%] rounded-full bg-[#E3E5EA]" />
                    <span className="h-1.5 w-[75%] rounded-full bg-[#E3E5EA]" />
                    <span className="h-1.5 w-[55%] rounded-full bg-[#E3E5EA]" />
                  </div>
                  {p.read && <p className="m-0 pt-8 font-mono text-[9px] uppercase tracking-[.08em] text-[#9A9DA5]">{p.read}</p>}
                </div>
              </div>
            );
          })}
        </div>

        {/* status line */}
        <div className="relative z-10 flex items-center justify-between gap-4 border-t border-[#D9DBE0] bg-[#E6E7EB] px-5 py-3 font-mono text-[10px] md:px-8 md:text-[11px]">
          <span className="min-w-0 truncate text-[#3A3C42]">
            <span className="text-[#9A9DA5]">{WRITING}</span>{" "}
            <span aria-hidden="true">
              {typed}
              <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[.15em] animate-[blink_1s_steps(1)_infinite] bg-ink" />
            </span>
            <span className="sr-only">{TITLES[0]}</span>
          </span>
          <span className="flex-none font-semibold uppercase tracking-[.08em] text-accent">{SAMPLE}</span>
        </div>
      </div>
    </section>
  );
}
