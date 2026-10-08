import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "What moves" };
const HEADING = ["Keywords up.", "Calls follow"];
const INTRO = "Every report lists the searches we target and where you sit.";
const NOTE = "Sample data · replace with real client numbers";
const PER = "searches a month";
const ROWS = [
  { keyword: "roof repair plano tx", searches: "1,300", before: "14", after: "2" },
  { keyword: "emergency roof leak repair", searches: "720", before: "22", after: "5" },
  { keyword: "roof replacement cost dfw", searches: "1,900", before: "31", after: "9" },
  { keyword: "storm damage roof inspection", searches: "590", before: "18", after: "4" },
  { keyword: "best roofer in plano", searches: "480", before: "11", after: "3" },
];

export default function WhatMoves() {
  return (
    <section className="box-border w-full bg-[#0B0B0C] px-5 py-14 text-[#F7F7F8] md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="flex flex-col gap-10 md:gap-[clamp(32px,6vh,64px)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col gap-5">
            <SectionLabel number={LABEL.n} name={LABEL.name} />
            <h2 className="m-0 text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,4.8vw,72px)]">
              <MaskLines lines={HEADING} />
            </h2>
          </div>
          <div data-rise className="flex flex-col gap-3 md:max-w-[340px]">
            <p className="m-0 text-[15px] leading-normal text-[#C9CBD1] md:text-[16px]">{INTRO}</p>
            <p className="m-0 font-mono text-[11px] uppercase tracking-[.08em] text-accent">{NOTE}</p>
          </div>
        </div>

        <ol data-rise-group className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 md:gap-4">
          {ROWS.map((r, i) => (
            <li
              key={r.keyword}
              data-rise
              className={`flex items-center justify-between gap-6 rounded-[6px] bg-[#17181B] p-5 md:p-6 ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="flex min-w-0 flex-col gap-2">
                <span className="text-[20px] font-medium leading-[1.15] tracking-[-0.02em] md:text-[24px]">{r.keyword}</span>
                <span className="text-[14px] text-[#9A9DA5]">
                  {r.searches} {PER}
                </span>
              </div>
              <div className="flex flex-none items-baseline gap-3 md:gap-5">
                <span className="text-[24px] font-medium tracking-[-0.03em] text-[#6B6E76] line-through decoration-1 md:text-[32px]">#{r.before}</span>
                <span aria-hidden="true" className="text-[#6B6E76]">
                  →
                </span>
                <span className="text-[44px] font-semibold leading-none tracking-[-0.05em] text-accent md:text-[64px]">#{r.after}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
