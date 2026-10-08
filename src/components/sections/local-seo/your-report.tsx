import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "Your report" };
const HEADING = ["Real calls.", "Counted."];
const INTRO = "One short report each month. It shows what the map sent you: calls, directions and reviews.";
const CHART = {
  title: "Calls from Google Maps",
  unit: "Per month",
  note: "Sample data · replace with real client numbers",
  // value is the bar height as a share of the tallest bar; the last bar is the current month
  bars: [
    { month: "Apr", value: 22 },
    { month: "May", value: 28 },
    { month: "Jun", value: 40 },
    { month: "Jul", value: 52 },
    { month: "Aug", value: 74 },
    { month: "Sep", value: 96 },
  ],
};
const STATS = [
  { label: "People asked for directions", value: "214" },
  { label: "Visits to your site from the map", value: "1,380" },
  { label: "New reviews", value: "18" },
];

export default function YourReport() {
  const max = Math.max(...CHART.bars.map((b) => b.value));
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
          <p data-rise className="m-0 max-w-[340px] text-[15px] leading-normal text-[#3A3C42] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] md:items-start md:gap-12">
          <div data-rise className="rounded-[4px] bg-white p-5 md:p-6">
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.1em] text-[#9A9DA5]">
              <span>{CHART.title}</span>
              <span>{CHART.unit}</span>
            </div>
            <div className="mt-4 flex h-[220px] items-end gap-3 md:gap-5">
              {CHART.bars.map((b, i) => {
                const last = i === CHART.bars.length - 1;
                return (
                  <div key={b.month} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    {last && <span className="text-[13px] font-medium">{b.value}</span>}
                    <div className="flex w-full flex-1 items-end">
                      <div
                        data-grow-y
                        className={`w-full rounded-[2px] ${last ? "bg-accent" : "bg-[#D9DBE0]"}`}
                        style={{ height: `${(b.value / max) * (last ? 92 : 100)}%` }}
                      />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[.08em] text-[#9A9DA5]">{b.month}</span>
                  </div>
                );
              })}
            </div>
            <p className="m-0 pt-4 font-mono text-[9px] uppercase tracking-[.08em] text-accent">{CHART.note}</p>
          </div>

          <ul data-rise-group className="m-0 flex list-none flex-col border-b border-dashed border-[#A9ACB4] p-0">
            {STATS.map((s) => (
              <li key={s.label} data-rise className="flex items-center justify-between gap-6 border-t border-dashed border-[#A9ACB4] py-6 md:py-7">
                <span className="text-[14px] text-[#3A3C42] md:text-[15px]">{s.label}</span>
                <span className="text-[40px] font-medium leading-none tracking-[-0.04em] md:text-[52px]">{s.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
