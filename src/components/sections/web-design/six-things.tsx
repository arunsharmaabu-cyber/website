"use client";

import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";
import { useCardAlign } from "@/components/motion/use-card-align";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "Built different" };
const HEADING = ["Six things we", "refuse to skip"];
const INTRO = "The unglamorous parts are the ones that win jobs. Each one ships on every site.";
const THINGS = [
  { n: "01", tag: "Speed", title: "Under 2 seconds", text: "Every page loads in under two seconds on a phone, or we keep working until it does." },
  { n: "02", tag: "Calls", title: "Click-to-call everywhere", text: "A call button on every screen, so a customer is one tap from your phone." },
  { n: "03", tag: "Mobile", title: "Mobile first", text: "Designed at 390px wide first, then scaled up to desktop." },
  { n: "04", tag: "SEO", title: "SEO-ready code", text: "Titles, headings, canonical links and schema markup built in, not bolted on." },
  { n: "05", tag: "Access", title: "Accessible", text: "Focus rings, contrast and labeled forms. WCAG 2.2 AA target." },
  { n: "06", tag: "Ownership", title: "You own it", text: "Domain, code, design files and hosting access in your name. No lock-in contract." },
];

export default function SixThings() {
  const ref = useCardAlign<HTMLElement>();

  return (
    <section ref={ref} className="box-border w-full overflow-hidden bg-panel px-5 py-14 md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="flex flex-col gap-10 md:gap-[clamp(32px,6vh,64px)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col gap-5">
            <SectionLabel number={LABEL.n} name={LABEL.name} />
            <h2 className="m-0 text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,4.8vw,72px)]">
              <MaskLines lines={HEADING} />
            </h2>
          </div>
          <p data-rise className="m-0 max-w-[360px] text-[15px] leading-normal text-[#3A3C42] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 md:gap-5">
          {THINGS.map((t) => (
            <li key={t.n} data-card className="flex">
              <div className="flex min-h-[260px] w-full flex-col rounded-[6px] bg-white p-5 md:min-h-[clamp(260px,34vh,340px)]">
                <span className="flex items-start justify-between font-mono text-[12px] uppercase tracking-[.08em]">
                  {t.n} — {t.tag}
                  <span className="size-[10px] rounded-full bg-[#D3D5DB]" />
                </span>
                <span className="mt-10 text-[30px] font-semibold leading-[1.02] tracking-[-0.045em] md:text-[clamp(26px,2.4vw,36px)]">{t.title}</span>
                <span className="mt-auto pt-6 text-[15px] leading-[1.45] text-[#3A3C42] md:text-[16px]">{t.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
