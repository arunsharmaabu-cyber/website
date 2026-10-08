import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "Why we exist" };
const STATEMENT = "Most agencies sell you reports. We sell you phone calls. If the phone doesn't ring, nothing else we do matters";
const SIGNED = ["SIGNED", "[FOUNDER NAME]", "FOUNDER · TECHX®"];
const FACTS = [
  { label: "Founded", value: "[YEAR]" },
  { label: "Based in", value: "Dallas, TX" },
  { label: "Active clients", value: "[NUMBER]" },
  { label: "Trades", value: "Roofing · HVAC · Dental · Law" },
];

export default function WhyWeExist() {
  return (
    <section className="box-border w-full bg-panel px-5 py-14 md:px-10 md:py-[clamp(64px,11vh,120px)]">
      <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:items-start md:gap-x-[72px] md:gap-y-12">
        <div className="flex min-w-0 flex-col gap-7 md:flex-[1.5_1_560px] md:gap-9">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <p className="m-0 text-[30px] font-semibold leading-[1.08] tracking-[-0.045em] md:text-[clamp(30px,3.6vw,56px)]">
            <span data-rise className="block">
              {STATEMENT}
              <span className="text-accent">.</span>
            </span>
          </p>
          <div className="flex items-end justify-between gap-4 border-t border-dashed border-[#A9ACB4] pt-5">
            <svg viewBox="0 0 150 52" fill="none" stroke="#0B0B0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Founder signature" className="h-[44px] w-[130px] md:h-[52px] md:w-[150px]">
              <path data-draw d="M4 40C12 10 24 6 28 22S24 46 40 28 58 6 62 26C66 44 80 12 94 32S116 40 144 14" />
              <path data-draw d="M20 46c30-6 70-6 122-2" />
            </svg>
            <div className="text-right font-mono text-[10px] leading-[1.7] tracking-[.1em] text-[#5C5F66]">
              {SIGNED[0]}
              <br />
              {SIGNED[1]}
              <br />
              {SIGNED[2]}
            </div>
          </div>
        </div>

        <dl data-rise-group className="m-0 min-w-0 border-b border-dashed border-[#A9ACB4] md:flex-[1_1_340px]">
          {FACTS.map((f) => (
            <div
              key={f.label}
              data-rise
              className="flex justify-between gap-4 border-t border-dashed border-[#A9ACB4] py-[14px] font-mono text-[12px] uppercase tracking-[.08em]"
            >
              <dt className="text-[#5C5F66]">{f.label}</dt>
              <dd className="m-0 text-right font-semibold">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
