"use client";

import { useEffect, useState } from "react";

// ───────── Copy for this section: edit the words here ─────────
const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Marketing", href: "/marketing" },
  { label: "Paid advertising & PPC" },
];
const HEADING = "Pay for calls, not clicks";
const RECEIPT = {
  head: ["TechX · Ad statement", "yourbusiness.com · October"],
  rows: [
    ["People saw your ad", "12,400"],
    ["Visited your site", "620"],
    ["Called you", "54"],
    ["Booked a job", "21"],
    ["Ad spend this month", "$2,052"],
  ],
  costLabel: "Cost per call",
  cost: "$38",
  calls: "54 calls",
  note: "Sample · replace with real numbers",
};
const PILLS = {
  call: { title: "New call · Plano, TX", sub: "From your ad", time: "00:42" },
  job: { title: "Booked · Roof repair", sub: "Today 3 PM" },
};

export default function PpcHero() {
  // first render = the printed receipt (no JS / reduced motion); the effect prints it again as a loop
  const [printed, setPrinted] = useState(true);
  const [still, setStill] = useState(false);
  const [pills, setPills] = useState(true);

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
        setStill(true);
        setPrinted(false);
        setPills(false);
        await wait(80);
        setStill(false);
        await wait(500);
        setPrinted(true);
        await wait(2000);
        setPills(true);
        await wait(8000);
      }
    })().catch(() => {});
    return () => {
      dead = true;
    };
  }, []);

  const pop = (delay: number, rot: number) => ({
    opacity: pills ? 1 : 0,
    transform: pills ? `rotate(${rot}deg)` : `translateY(14px) rotate(${rot}deg) scale(.95)`,
    transition: still ? "none" : `opacity .5s ease-out ${delay}ms, transform .6s cubic-bezier(.2,.8,.2,1) ${delay}ms`,
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

      <div className="relative flex h-[calc(100svh-132px)] min-h-[560px] flex-col items-center overflow-hidden rounded-[16px] border border-[#DDDFE4] bg-[#E6E7EB] [background-image:radial-gradient(#D3D5DB_1px,transparent_1px)] [background-size:14px_14px] md:h-[calc(100svh-150px)]">
        <h1 className="m-0 mt-8 px-5 text-center text-[40px] font-semibold leading-[.98] tracking-[-0.06em] md:mt-[clamp(20px,4vh,44px)] md:text-[clamp(44px,min(5.6vw,10vh),84px)]">
          {HEADING}
          <span className="text-accent">.</span>
        </h1>

        {/* printer slot + receipt */}
        <div className="relative z-10 mt-6 flex w-[min(300px,78%)] flex-col items-stretch md:mt-[clamp(16px,3vh,30px)] md:w-[clamp(280px,24vw,330px)]">
          <div className="relative z-20 h-[10px] w-[112%] -translate-x-[5.4%] rounded-full bg-ink" />
          <div className="relative -mt-[5px] overflow-hidden pb-4">
            <div
              style={{
                transform: printed ? "translateY(0)" : "translateY(-102%)",
                transition: still ? "none" : "transform 1.9s cubic-bezier(.4,.1,.2,1)",
              }}
            >
              <div className="bg-white px-5 pb-5 pt-6 shadow-[0_24px_50px_-20px_rgba(11,11,12,.3)]">
                <p className="m-0 text-center font-mono text-[9px] uppercase leading-[1.5] tracking-[.1em] text-[#6B6E76]">
                  {RECEIPT.head[0]}
                  <br />
                  {RECEIPT.head[1]}
                </p>
                <ul className="m-0 mt-4 flex list-none flex-col p-0 text-[12px] md:text-[13px]">
                  {RECEIPT.rows.map(([k, v]) => (
                    <li key={k} className="flex items-center justify-between border-b border-dashed border-[#D9DBE0] py-[clamp(5px,1vh,9px)]">
                      <span className="text-[#3A3C42]">{k}</span>
                      <b className="font-mono font-medium">{v}</b>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <p className="m-0 font-mono text-[9px] uppercase tracking-[.1em] text-[#9A9DA5]">{RECEIPT.costLabel}</p>
                  <div className="mt-1 flex items-end justify-between">
                    <span className="text-[44px] font-semibold leading-none tracking-[-0.05em] text-accent md:text-[clamp(40px,6vh,56px)]">{RECEIPT.cost}</span>
                    <span className="pb-1 font-mono text-[9px] uppercase tracking-[.08em] text-[#9A9DA5]">{RECEIPT.calls}</span>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-4 h-8 w-full [background:repeating-linear-gradient(90deg,#0B0B0C_0_2px,transparent_2px_4px,#0B0B0C_4px_5px,transparent_5px_8px,#0B0B0C_8px_11px,transparent_11px_13px)]" />
                <p className="m-0 mt-3 text-center font-mono text-[8px] uppercase tracking-[.08em] text-accent">{RECEIPT.note}</p>
              </div>
              <div
                aria-hidden="true"
                className="h-[9px] bg-white"
                style={{
                  WebkitMask: "conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) 50%/12px 100%",
                  mask: "conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) 50%/12px 100%",
                }}
              />
            </div>
          </div>
        </div>

        {/* floating notifications */}
        <div
          aria-hidden="true"
          className="absolute left-[8%] top-[48%] z-20 hidden items-center gap-3 rounded-full bg-white/85 py-2.5 pl-2.5 pr-5 shadow-[0_14px_30px_-16px_rgba(11,11,12,.3)] backdrop-blur md:flex"
          style={pop(0, -4)}
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-accent text-white">✆</span>
          <span className="flex flex-col">
            <b className="text-[12px] font-semibold">{PILLS.call.title}</b>
            <span className="font-mono text-[9px] uppercase tracking-[.06em] text-[#6B6E76]">
              {PILLS.call.sub} · {PILLS.call.time}
            </span>
          </span>
        </div>
        <div
          aria-hidden="true"
          className="absolute right-[7%] top-[55%] z-20 hidden items-center gap-3 rounded-full bg-white/85 px-5 py-3 shadow-[0_14px_30px_-16px_rgba(11,11,12,.3)] backdrop-blur md:flex"
          style={pop(250, 2)}
        >
          <span className="size-2 rounded-full bg-ink" />
          <b className="text-[12px] font-semibold">{PILLS.job.title}</b>
          <span className="font-mono text-[9px] uppercase tracking-[.06em] text-[#6B6E76]">{PILLS.job.sub}</span>
        </div>
      </div>
    </section>
  );
}
