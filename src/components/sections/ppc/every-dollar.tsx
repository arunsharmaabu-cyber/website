import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "What you see" };
const HEADING = ["Every dollar,", "every call."];
const INTRO = "We track each ad to the phone call and the booked job, so you can see the cost fall as we tune it.";
const CHART = {
  title: "Cost per call",
  unit: "Six months",
  points: [
    { m: "Apr", v: 82 },
    { m: "May", v: 71 },
    { m: "Jun", v: 58 },
    { m: "Jul", v: 49 },
    { m: "Aug", v: 42 },
    { m: "Sep", v: 38 },
  ],
};
const STATS = [
  { v: "$38", l: "cost per call now" },
  { v: "54", l: "calls this month" },
  { v: "21", l: "jobs booked" },
];
const NOTE = "Sample data · replace with real client numbers";

// map a value (38..82) to a y position in a 0..100 box, and an index to an x position
const Y = (v: number) => 12 + ((82 - v) / 44) * 70;
const X = (i: number, n: number) => 3 + (i / (n - 1)) * 94;

export default function EveryDollar() {
  const pts = CHART.points;
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${X(i, pts.length)} ${Y(p.v)}`).join(" ");
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
          <p data-rise className="m-0 max-w-[340px] text-[15px] leading-normal text-[#3A3C42] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <div data-rise className="rounded-[6px] bg-white p-5 md:p-8">
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-[.1em] text-[#9A9DA5]">
            <span>{CHART.title}</span>
            <span>{CHART.unit}</span>
          </div>

          <div className="relative mt-4 h-[200px] md:h-[240px]">
            {[12, 47, 82].map((y) => (
              <span key={y} className="absolute inset-x-0 border-t border-[#EDEEF1]" style={{ top: `${y}%` }} />
            ))}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible" aria-hidden="true">
              <path d={`${line} L${X(pts.length - 1, pts.length)} 100 L${X(0, pts.length)} 100 Z`} fill="#FF4D00" fillOpacity=".1" />
              <path data-draw d={line} fill="none" stroke="#FF4D00" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
            </svg>
            {pts.map((p, i) => {
              const last = i === pts.length - 1;
              return (
                <div key={p.m} className="absolute -translate-x-1/2" style={{ left: `${X(i, pts.length)}%`, top: `${Y(p.v)}%` }}>
                  <span
                    className={`absolute left-1/2 top-0 size-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] ${last ? "border-accent bg-accent" : "border-accent bg-white"}`}
                  />
                  <span className={`absolute left-1/2 -translate-x-1/2 text-[12px] font-medium ${last ? "top-3 text-accent" : "-top-7"}`}>${p.v}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex justify-between px-[3%] font-mono text-[9px] uppercase tracking-[.08em] text-[#9A9DA5]">
            {pts.map((p) => (
              <span key={p.m}>{p.m}</span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#EDEEF1] pt-6">
            {STATS.map((s) => (
              <div key={s.l} className="flex flex-col gap-1">
                <span className="text-[28px] font-medium leading-none tracking-[-0.04em] md:text-[40px]">{s.v}</span>
                <span className="text-[11px] text-[#6B6E76] md:text-[13px]">{s.l}</span>
              </div>
            ))}
          </div>
          <p className="m-0 pt-5 font-mono text-[9px] uppercase tracking-[.08em] text-accent">{NOTE}</p>
        </div>
      </div>
    </section>
  );
}
