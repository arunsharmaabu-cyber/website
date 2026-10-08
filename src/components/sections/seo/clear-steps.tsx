import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "How it runs" };
const HEADING = ["Clear steps.", "Clear numbers."];
const INTRO = "You get one short report a month: calls, rankings and what we do next. No jargon.";
const STEPS = [
  { when: "Month 1", name: "Audit and fix", text: "We find what holds you back and fix the technical issues first." },
  { when: "Months 2–3", name: "Build the pages", text: "Service and city pages written for the searches your buyers type." },
  { when: "Month 4 on", name: "Earn authority", text: "Citations, links and reviews. Rankings compound from here." },
];
// The sample monthly report on the right
const REPORT = {
  title: "Monthly report · Sep",
  live: "Live",
  stats: [
    { label: "Calls from Google", value: "128" },
    { label: "Top-3 keywords", value: "14" },
  ],
  months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  line: "M0 70 L40 66 L120 56 L200 42 L280 26 L330 12", // chart points, left to right
  table: { keyword: "Keyword", start: "Start", now: "Now" },
  rows: [
    { keyword: "roof repair dallas", start: "18", now: "#3" },
    { keyword: "roofing company plano", start: "24", now: "#5" },
    { keyword: "storm damage roof dallas", start: "41", now: "#2" },
    { keyword: "metal roof frisco", start: "31", now: "#8" },
  ],
  note: "Sample data · replace with real client numbers",
};

export default function ClearSteps() {
  return (
    <section className="box-border w-full bg-panel px-5 py-14 md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="flex flex-col gap-10 md:gap-[clamp(32px,6vh,64px)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col gap-5">
            <SectionLabel number={LABEL.n} name={LABEL.name} />
            <h2 className="m-0 text-[40px] font-medium leading-[.98] tracking-[-0.05em] md:text-[clamp(40px,4.2vw,64px)]">
              <MaskLines lines={HEADING} />
            </h2>
          </div>
          <p data-rise className="m-0 max-w-[340px] text-[15px] leading-normal text-[#3A3C42] md:text-right md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start md:gap-12">
          <ol data-rise-group className="m-0 flex list-none flex-col border-b border-dashed border-[#A9ACB4] p-0">
            {STEPS.map((s, i) => (
              <li key={s.when} data-rise className="grid grid-cols-1 gap-2 border-t border-dashed border-[#A9ACB4] py-7 md:grid-cols-[130px_1fr] md:gap-x-6">
                <span className={`font-mono text-[11px] uppercase tracking-[.08em] ${i === 0 ? "text-accent" : "text-[#6B6E76]"}`}>{s.when}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 text-[20px] font-medium tracking-[-0.02em] md:text-[22px]">{s.name}</h3>
                  <p className="m-0 text-[14px] leading-[1.45] text-[#3A3C42] md:text-[15px]">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div data-rise className="rounded-[4px] bg-white p-5 md:p-7">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.1em] text-[#6B6E76]">
              <span>{REPORT.title}</span>
              <span className="flex items-center gap-2 text-[#9A9DA5]">
                <span className="size-[6px] rounded-full bg-[#D3D5DB]" />
                {REPORT.live}
              </span>
            </div>
            <div className="mt-5 flex gap-10">
              {REPORT.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-[.1em] text-[#9A9DA5]">{s.label}</span>
                  <span className="text-[36px] font-medium leading-none tracking-[-0.04em] md:text-[44px]">{s.value}</span>
                </div>
              ))}
            </div>

            <svg viewBox="0 0 330 80" preserveAspectRatio="none" className="mt-6 h-[100px] w-full overflow-visible" aria-hidden="true">
              <path d={`${REPORT.line} L330 80 L0 80 Z`} fill="#FF4D00" fillOpacity=".08" />
              <path data-draw d={REPORT.line} fill="none" stroke="#FF4D00" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
              <circle cx="330" cy="12" r="3" fill="#fff" stroke="#FF4D00" strokeWidth="1.5" />
            </svg>
            <div className="mt-1 flex justify-between font-mono text-[9px] uppercase tracking-[.08em] text-[#9A9DA5]">
              {REPORT.months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            <div className="mt-6 flex justify-between border-b border-[#EDEEF1] pb-2 font-mono text-[9px] uppercase tracking-[.1em] text-[#9A9DA5]">
              <span>{REPORT.table.keyword}</span>
              <span className="flex gap-10">
                <span>{REPORT.table.start}</span>
                <span>{REPORT.table.now}</span>
              </span>
            </div>
            {REPORT.rows.map((r) => (
              <div key={r.keyword} className="flex items-center justify-between border-b border-[#EDEEF1] py-3 text-[13px]">
                <span>{r.keyword}</span>
                <span className="flex w-[100px] justify-between">
                  <span className="text-[#9A9DA5]">{r.start}</span>
                  <b className="font-semibold">{r.now}</b>
                </span>
              </div>
            ))}
            <p className="m-0 pt-5 font-mono text-[9px] uppercase tracking-[.08em] text-accent">{REPORT.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
