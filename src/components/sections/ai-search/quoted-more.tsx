import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "How we measure" };
const HEADING = ["Quoted more,", "month by month."];
const INTRO = "Each month we check which searches Google answers with your page, and how often voice assistants name you.";
const LIST = {
  title: "Recent answers that quoted you",
  rows: [
    { date: "Sep 28", q: "roof replacement cost in plano", kind: "Google AI Overview", hot: true },
    { date: "Sep 26", q: "roofer near me", kind: "Voice assistant", hot: false },
    { date: "Sep 21", q: "best time to replace a roof in texas", kind: "Google AI Overview", hot: true },
    { date: "Sep 17", q: "who repairs hail damage in frisco", kind: "Chat assistant", hot: false },
    { date: "Sep 12", q: "how long does a roof last in dallas", kind: "Google AI Overview", hot: true },
    { date: "Sep 04", q: "emergency roof repair open now", kind: "Voice assistant", hot: false },
  ],
};
const TOTAL = {
  title: "Quoted in September",
  value: "29",
  text: "answers that name your business, up from 4 in April.",
  months: ["Apr", "Sep"],
  path: "M0 52 C60 50 100 46 150 38 S230 22 300 8", // viewBox 0 0 300 60
  note: "Sample data · replace with real client numbers",
};

export default function QuotedMore() {
  return (
    <section className="box-border w-full bg-panel px-5 py-14 md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="flex flex-col gap-10 md:gap-[clamp(28px,5vh,48px)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col gap-5">
            <SectionLabel number={LABEL.n} name={LABEL.name} />
            <h2 className="m-0 text-[40px] font-medium leading-[.98] tracking-[-0.05em] md:text-[clamp(40px,4.2vw,64px)]">
              <MaskLines lines={HEADING} />
            </h2>
          </div>
          <p data-rise className="m-0 max-w-[380px] text-[15px] leading-normal text-[#3A3C42] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <div data-rise className="grid grid-cols-1 gap-8 rounded-[6px] bg-white p-5 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-14 md:p-8">
          <div>
            <p className="m-0 border-b border-dashed border-[#C9CBD1] pb-3 font-mono text-[10px] uppercase tracking-[.1em] text-[#6B6E76]">{LIST.title}</p>
            <ol className="m-0 flex list-none flex-col p-0">
              {LIST.rows.map((r) => (
                <li key={r.q} className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-dashed border-[#C9CBD1] py-3.5 md:flex-nowrap">
                  <span className="w-[52px] flex-none font-mono text-[10px] uppercase text-[#9A9DA5]">{r.date}</span>
                  <span className="min-w-0 flex-1 text-[14px] md:text-[15px]">“{r.q}”</span>
                  <span
                    className={`flex-none rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[.06em] ${
                      r.hot ? "border-accent text-accent" : "border-[#C9CBD1] text-[#6B6E76]"
                    }`}
                  >
                    {r.kind}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col">
            <p className="m-0 font-mono text-[10px] uppercase tracking-[.1em] text-[#6B6E76]">{TOTAL.title}</p>
            <p className="m-0 pt-3 text-[72px] font-medium leading-none tracking-[-0.06em] md:text-[96px]">{TOTAL.value}</p>
            <p className="m-0 max-w-[260px] pt-3 text-[13px] leading-[1.45] text-[#6B6E76]">{TOTAL.text}</p>
            <svg viewBox="0 0 300 60" preserveAspectRatio="none" className="mt-8 h-[90px] w-full overflow-visible" aria-hidden="true">
              <path d={`${TOTAL.path} L300 60 L0 60 Z`} fill="#FF4D00" fillOpacity=".1" />
              <path data-draw d={TOTAL.path} fill="none" stroke="#FF4D00" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
              <circle cx="300" cy="8" r="3.5" fill="#FF4D00" />
            </svg>
            <div className="mt-1 flex justify-between font-mono text-[9px] uppercase tracking-[.08em] text-[#9A9DA5]">
              {TOTAL.months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <p className="m-0 mt-auto pt-6 font-mono text-[9px] uppercase tracking-[.08em] text-accent">{TOTAL.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
