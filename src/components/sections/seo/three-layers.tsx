"use client";

import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";
import { useCardAlign } from "@/components/motion/use-card-align";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "Three layers" };
const HEADING = ["Three layers.", "One ranking"];
const NOTE = "Illustrative split of effort in months 1–3 · varies by site and market";
const LAYERS = [
  {
    n: "01",
    name: "Technical",
    share: 50,
    text: "A site Google can read, and fast.",
    bullets: ["Speed and Core Web Vitals", "Crawl and indexing fixes", "Mobile layout and schema markup"],
  },
  {
    n: "02",
    name: "Content",
    share: 30,
    text: "Pages that match what buyers type.",
    bullets: ["Keyword map by buyer intent", "Service and location pages", "Guides that answer real questions"],
  },
  {
    n: "03",
    name: "Authority",
    share: 20,
    text: "Proof that Google can trust.",
    bullets: ["Links from relevant local sites", "Citation and directory cleanup", "Partner and press mentions"],
  },
];

export default function ThreeLayers() {
  const ref = useCardAlign<HTMLElement>();

  return (
    <section ref={ref} className="box-border w-full overflow-hidden bg-panel px-5 py-14 md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="flex flex-col gap-10 md:gap-[clamp(32px,6vh,64px)]">
        <div className="flex flex-col gap-5">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <h2 className="m-0 text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,4.8vw,72px)]">
            <MaskLines lines={HEADING} />
          </h2>
        </div>

        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 md:gap-5">
          {LAYERS.map((l) => (
            <li key={l.n} data-card className="flex">
              <div className="flex w-full flex-col rounded-[6px] bg-white p-5 md:min-h-[clamp(340px,46vh,440px)] md:p-6">
                <span className="flex items-start justify-between font-mono text-[12px] uppercase tracking-[.08em]">
                  {l.n}
                  <span className="text-[#9A9DA5]">{l.share}%</span>
                </span>
                <span className="mt-8 text-[30px] font-semibold leading-[1.02] tracking-[-0.045em] md:text-[clamp(28px,2.6vw,40px)]">{l.name}</span>
                <span className="mt-2 text-[15px] text-[#3A3C42] md:text-[16px]">{l.text}</span>
                <ul className="m-0 mt-6 flex list-none flex-col gap-2 p-0 text-[15px] leading-[1.35]">
                  {l.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-[7px] size-[7px] flex-none rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <div className="h-2 w-full rounded-full bg-[#F3F4F6]">
                    <div data-grow className="h-full rounded-full bg-ink" style={{ width: `${l.share}%` }} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="m-0 font-mono text-[11px] uppercase tracking-[.08em] text-accent">{NOTE}</p>
      </div>
    </section>
  );
}
