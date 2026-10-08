"use client";

import { useRef } from "react";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";
import { useCardStack } from "@/components/motion/use-card-stack";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "Ways to work" };
const HEADING = ["Three ways to work", "together"];
const BEST = "Best for";
const HREF = "/contact#audit";
const TIERS = [
  {
    n: "01 / 60 minutes",
    name: "Strategy session",
    price: "[PRICE]",
    unit: "one time",
    bullets: ["60-minute video call", "A look at your site, profile and ads beforehand", "Written plan with next steps", "Priorities ranked by effort and payoff"],
    best: "Owners who want a straight answer before they spend.",
    cta: "Book a strategy call",
  },
  {
    n: "02 / 2 weeks",
    name: "Marketing audit",
    price: "[PRICE]",
    unit: "flat fee",
    start: "Start here",
    bullets: ["Full report: site, local, search, ads, social", "Competitor map for your top rivals", "90-day roadmap with budget ranges", "Recorded walkthrough and a review call"],
    best: "Owners who want the whole picture and a plan they can run.",
    cta: "Start with the audit",
  },
  {
    n: "03 / Monthly",
    name: "Fractional marketing lead",
    price: "[PRICE]",
    unit: "per month",
    bullets: ["Weekly call with a senior marketer", "Reviews your team and vendors", "Runs the plan and sets the priorities", "Plain-English monthly report"],
    best: "Teams and owners with staff or an agency who need direction.",
    cta: "Talk about a retainer",
  },
];

export default function WaysToWork() {
  const ref = useRef<HTMLElement>(null);
  useCardStack(ref);

  return (
    <section ref={ref} className="box-border w-full bg-panel px-5 py-14 md:flex md:min-h-[100svh] md:items-center md:px-10 md:py-[clamp(72px,10vh,96px)]">
      <div className="flex w-full flex-col gap-8 md:gap-[clamp(24px,4vh,40px)]">
        <div className="flex flex-col gap-5">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <h2 className="m-0 text-[40px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(40px,4.2vw,64px)]">
            <MaskLines lines={HEADING} />
          </h2>
        </div>

        <div data-stack className="flex flex-col gap-4">
          {TIERS.map((t) => (
            <article
              key={t.name}
              data-tier
              className="grid grid-cols-1 gap-6 rounded-[6px] bg-white p-5 shadow-[0_-8px_24px_rgba(11,11,12,.06)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,.9fr)] md:min-h-[clamp(300px,44vh,420px)] md:gap-10 md:p-10"
            >
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[.08em]">
                  {t.n}
                  {t.start && (
                    <span className="flex items-center gap-2 text-accent">
                      <span className="size-[8px] rounded-full bg-accent" />
                      {t.start}
                    </span>
                  )}
                </span>
                <h3 className="m-0 text-[28px] font-semibold leading-[1] tracking-[-0.045em] md:text-[clamp(28px,2.8vw,40px)]">{t.name}</h3>
                <p className="m-0 flex items-baseline gap-2">
                  <span className="text-[34px] font-semibold tracking-[-0.04em] md:text-[44px]">{t.price}</span>
                  <span className="font-mono text-[12px] uppercase tracking-[.08em] text-[#9A9DA5]">{t.unit}</span>
                </p>
              </div>
              <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[15px] leading-[1.35] md:text-[16px]">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-[7px] size-[7px] flex-none rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-between gap-5">
                <p className="m-0 text-[15px] leading-[1.4] text-[#3A3C42]">
                  <span className="block pb-1 font-mono text-[11px] uppercase tracking-[.08em] text-[#9A9DA5]">{BEST}</span>
                  {t.best}
                </p>
                <a
                  href={HREF}
                  className="flex min-h-12 items-center justify-center rounded-[4px] bg-ink px-5 font-mono text-[12px] font-medium uppercase tracking-[.12em] text-page no-underline transition-colors hover:bg-accent hover:text-ink"
                >
                  {t.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
