"use client";

import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";
import { useCardAlign } from "@/components/motion/use-card-align";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "The story" };
const HEADING = ["Your site tells", "your story"];
const INTRO = "Every job starts the same way. Your website is the middle of it.";
const BEATS = [
  { n: "01", title: "A neighbor searches", text: "A pipe bursts at 9 p.m. They type what they need into their phone." },
  { n: "02", title: "They land on your site", text: "In two seconds they see who you are, where you work and one button." },
  { n: "03", title: "They call you", text: "Not the next result. You." },
];

export default function YourStory() {
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

        <ol className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 md:gap-5">
          {BEATS.map((b) => (
            <li key={b.n} data-card className="flex">
              <div className="flex min-h-[240px] w-full flex-col rounded-[6px] bg-white p-5 md:min-h-[clamp(260px,34vh,340px)]">
                <span className="flex items-start justify-between font-mono text-[12px] uppercase tracking-[.08em]">
                  {b.n}
                  <span className="size-[10px] rounded-full bg-accent" />
                </span>
                <span className="mt-10 text-[30px] font-semibold leading-[1.02] tracking-[-0.045em] md:text-[clamp(26px,2.4vw,36px)]">{b.title}</span>
                <span className="mt-auto pt-6 text-[15px] leading-[1.45] text-[#3A3C42] md:text-[16px]">{b.text}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
