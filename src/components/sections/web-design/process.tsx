import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/03", name: "How we work" };
const HEADING = ["How we", "will work"];
const BIG = "4";
const STEPS = [
  { n: "01", name: "Plan", text: "We learn your trade and map the pages." },
  { n: "02", name: "Design", text: "Phone layout first. You review it." },
  { n: "03", name: "Build", text: "We build it fast and test every button." },
  { n: "04", name: "Launch", text: "We go live and hand you the keys." },
];

export default function Process() {
  return (
    <section id="process" className="box-border w-full scroll-mt-20 bg-panel px-5 py-14 md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.6fr)] md:gap-16">
        <div className="flex flex-col justify-between gap-10 md:min-h-[clamp(420px,56vh,560px)]">
          <div className="flex flex-col gap-5">
            <SectionLabel number={LABEL.n} name={LABEL.name} />
            <h2 className="m-0 text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,4.8vw,72px)]">
              <MaskLines lines={HEADING} />
            </h2>
          </div>
          <span aria-hidden="true" className="hidden text-[clamp(180px,22vw,320px)] font-medium leading-[.78] tracking-[-0.06em] md:block">
            {BIG}
          </span>
        </div>

        <ol data-rise-group className="m-0 flex list-none flex-col self-end border-b border-dashed border-[#A9ACB4] p-0">
          {STEPS.map((s) => (
            <li key={s.n} data-rise className="grid grid-cols-[40px_1fr] items-start gap-x-4 gap-y-1 border-t border-dashed border-[#A9ACB4] py-6 md:grid-cols-[120px_1fr_1.2fr] md:gap-x-8 md:py-7">
              <span className="font-mono text-[13px]">{s.n}</span>
              <h3 className="m-0 text-[24px] font-medium uppercase leading-none tracking-[-0.02em] md:text-[28px]">{s.name}</h3>
              <p className="col-start-2 m-0 text-[16px] leading-[1.35] md:col-start-3 md:text-[20px]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
