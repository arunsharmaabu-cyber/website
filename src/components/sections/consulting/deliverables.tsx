import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/03", name: "Deliverables" };
const HEADING = ["What you", "leave with"];
const ITEMS = [
  { name: "Audit report", text: "Site, local, search, ads and social, scored and explained.", tag: "PDF" },
  { name: "Competitor map", text: "Who wins your searches today, and why.", tag: "PDF" },
  { name: "90-day plan", text: "The roadmap above, built for your business.", tag: "PDF" },
  { name: "Budget plan", text: "Where each dollar goes first, and what to skip.", tag: "Sheet" },
  { name: "Vendor / agency scorecard", text: "A simple way to grade the people you already pay.", tag: "Sheet" },
  { name: "Recorded walkthrough", text: "We talk through all of it on video. Replay any time.", tag: "Video" },
];

export default function Deliverables() {
  return (
    <section className="box-border w-full bg-[#0B0B0C] px-5 py-14 text-[#F7F7F8] md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.6fr)] md:gap-16">
        <div className="flex flex-col gap-5">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <h2 className="m-0 text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,4.8vw,72px)]">
            <MaskLines lines={HEADING} />
          </h2>
        </div>
        <ol data-rise-group className="m-0 flex list-none flex-col border-b border-dashed border-[#3A3C42] p-0">
          {ITEMS.map((it, i) => (
            <li
              key={it.name}
              data-rise
              className="grid grid-cols-[32px_1fr_auto] items-baseline gap-x-4 gap-y-1 border-t border-dashed border-[#3A3C42] py-5 md:grid-cols-[64px_1fr_1.2fr_auto] md:gap-x-6 md:py-6"
            >
              <span className="font-mono text-[12px] text-[#9A9DA5]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="m-0 text-[22px] font-semibold leading-[1.05] tracking-[-0.035em] md:text-[clamp(22px,2.1vw,30px)]">{it.name}</h3>
              <p className="col-span-2 col-start-2 m-0 text-[15px] leading-[1.4] text-[#C9CBD1] md:col-span-1 md:col-start-auto">{it.text}</p>
              <span className="col-start-3 row-start-1 font-mono text-[11px] uppercase tracking-[.08em] text-accent md:col-start-auto md:row-start-auto">{it.tag}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
