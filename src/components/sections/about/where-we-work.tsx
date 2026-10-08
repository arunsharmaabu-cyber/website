import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/04", name: "Where we work" };
const HEADING = ["All of", "DFW"];
const COORDS = "32.7767° N, 96.7970° W";
const CITIES = [
  "Dallas", "Fort Worth", "Plano", "Frisco", "McKinney", "Arlington", "Irving", "Garland",
  "Denton", "Richardson", "Allen", "Lewisville", "Grapevine", "Mesquite", "Carrollton", "Southlake",
];

export default function WhereWeWork() {
  return (
    <section className="box-border w-full bg-panel px-5 py-14 md:px-10 md:py-[clamp(64px,11vh,120px)]">
      <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:items-start md:gap-x-[72px] md:gap-y-10">
        <div className="flex flex-col gap-5 md:flex-[1_1_320px] md:gap-6">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <h2 className="m-0 text-[36px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(40px,4.6vw,72px)]">
            <MaskLines lines={HEADING} accent />
          </h2>
          <div className="font-mono text-[10px] uppercase tracking-[.1em] text-[#5C5F66] md:text-[11px]">{COORDS}</div>
        </div>
        <ul data-rise-group className="m-0 flex min-w-0 list-none flex-wrap gap-2 p-0 md:flex-[1.5_1_480px] md:gap-[10px]">
          {CITIES.map((c) => (
            <li
              key={c}
              data-rise
              className="rounded-full border border-[#A9ACB4] px-4 py-[10px] font-mono text-[11px] uppercase tracking-[.1em] transition-colors duration-200 hover:border-ink"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
