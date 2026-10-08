import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "How we work" };
const HEADING = ["Three rules we", "don't break"];
const RULES = [
  { n: "S/001", title: "Local only", text: "We only work with Dallas–Fort Worth service businesses, so we know the suburbs, the competitors and how people here search." },
  { n: "S/002", title: "Small by design", text: "You deal with the people who do the work. No account managers, no hand-offs, no junior team learning on your budget." },
  { n: "S/003", title: "Measured in calls", text: "Every number we report is a call, a booking or a dollar. Not impressions, not clicks, not vanity charts." },
];

export default function HowWeWork() {
  return (
    <section className="box-border w-full bg-panel px-5 py-14 md:px-10 md:py-[clamp(64px,11vh,120px)]">
      <div className="flex flex-col gap-8 md:gap-[clamp(32px,6vh,56px)]">
        <div className="flex flex-col gap-5">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <h2 className="m-0 text-[36px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(40px,4.6vw,72px)]">
            <MaskLines lines={HEADING} />
          </h2>
        </div>
        <ul data-rise-group className="m-0 flex list-none flex-col gap-3 p-0 md:flex-row md:gap-4">
          {RULES.map((r) => (
            <li
              key={r.n}
              data-rise
              className="box-border flex min-w-0 flex-col justify-between gap-8 rounded-2xl border border-[#DADCE1] bg-white p-5 md:min-h-[clamp(260px,36vh,340px)] md:flex-1 md:gap-16 md:p-7"
            >
              <span className="font-mono text-[12px] tracking-[.1em]">{r.n}</span>
              <div>
                <h3 className="m-0 text-[30px] font-semibold leading-[.98] tracking-[-0.055em] md:text-[38px]">
                  {r.title}
                  <span className="text-accent">.</span>
                </h3>
                <p className="m-0 mt-3 text-[15px] leading-normal text-[#3A3C42]">{r.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
