import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "How we measure" };
const HEADING = ["Named more,", "month by month."];
const INTRO = "Each month we ask the AI tools the questions your buyers ask, and track how often they name you.";
const CHART = {
  title: "AI answers that name you",
  value: "62%",
  up: "↑ From 12% in April",
  lines: ["75%", "50%", "25%", "0%"],
  months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  path: "M0 108 C40 100 60 98 90 92 S130 80 160 70 S200 56 230 44 S280 30 320 18", // viewBox 0 0 320 120
};
const TOOLS = {
  title: "By AI tool · September",
  rows: [
    { name: "ChatGPT", value: 70, hot: true },
    { name: "Perplexity", value: 66, hot: false },
    { name: "Gemini", value: 58, hot: false },
    { name: "Claude", value: 44, hot: false },
  ],
  note: "Sample data · replace with real client numbers",
};

export default function NamedMore() {
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

        <div className="relative overflow-hidden rounded-[14px] bg-[#E4E7EF] p-4 md:p-6">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-[10%] -top-[30%] size-[60%] rounded-full bg-[radial-gradient(closest-side,#B7C0D6_0%,transparent_68%)]" />
            <div className="absolute -bottom-[40%] -right-[10%] size-[60%] rounded-full bg-[radial-gradient(closest-side,#F08A5C_0%,#F7B796_40%,transparent_70%)]" />
          </div>
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:gap-6">
            {/* the line chart */}
            <div data-rise className="rounded-[10px] bg-white/80 p-5 backdrop-blur md:p-7">
              <div className="flex items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[.1em] text-[#6B6E76]">{CHART.title}</span>
                  <span className="text-[44px] font-medium leading-none tracking-[-0.05em] md:text-[56px]">{CHART.value}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[.08em] text-accent">{CHART.up}</span>
              </div>
              <div className="relative mt-5 h-[170px] md:h-[200px]">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {CHART.lines.map((l) => (
                    <div key={l} className="flex items-center gap-3 font-mono text-[9px] text-[#9A9DA5]">
                      <span className="w-7">{l}</span>
                      <span className="flex-1 border-t border-dashed border-[#C9CBD1]" />
                    </div>
                  ))}
                </div>
                <svg viewBox="0 0 320 120" preserveAspectRatio="none" className="absolute bottom-0 left-10 right-0 top-0 h-full w-[calc(100%-40px)] overflow-visible" aria-hidden="true">
                  <path d={`${CHART.path} L320 120 L0 120 Z`} fill="#FF4D00" fillOpacity=".12" />
                  <path data-draw d={CHART.path} fill="none" stroke="#FF4D00" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className="ml-10 mt-2 flex justify-between font-mono text-[9px] uppercase tracking-[.08em] text-[#9A9DA5]">
                {CHART.months.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            {/* bars by tool */}
            <div data-rise className="flex flex-col rounded-[10px] bg-white/80 p-5 backdrop-blur md:p-7">
              <span className="font-mono text-[10px] uppercase tracking-[.1em] text-[#6B6E76]">{TOOLS.title}</span>
              <div className="mt-6 flex flex-1 flex-col justify-between gap-5">
                {TOOLS.rows.map((r) => (
                  <div key={r.name} className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between text-[14px]">
                      <span>{r.name}</span>
                      <span className="font-mono text-[10px] text-[#6B6E76]">{r.value}%</span>
                    </div>
                    <div className="h-[4px] w-full rounded-full bg-[#D9DBE0]">
                      <div data-grow className={`h-full rounded-full ${r.hot ? "bg-accent" : "bg-ink"}`} style={{ width: `${r.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="m-0 pt-6 font-mono text-[9px] uppercase tracking-[.08em] text-accent">{TOOLS.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
