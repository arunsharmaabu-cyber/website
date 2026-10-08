import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/03", name: "Month by month" };
const HEADING = ["Six months,", "mapped"];
const BIG = "6";
const STEPS = [
  { n: "Month 1", name: "Fix the foundations", text: "A full technical audit and fixes, plus a keyword map built from buyer searches." },
  { n: "Month 2", name: "Publish and link", text: "Your first service and location pages go live and link building starts." },
  { n: "Month 3", name: "Climb", text: "Pages start to rank for easier terms. The report shows rank and calls." },
  { n: "Month 4–6", name: "Compound", text: "New pages build on what ranks. Harder terms come into reach." },
];
const HONEST = {
  tag: "Honest note",
  text: "SEO is slower than ads. Most sites take 60–90 days to show movement, and results vary with your market and competition. We report what you can check, rank and phone calls, and we never promise a position.",
};

export default function MonthByMonth() {
  return (
    <section className="box-border w-full bg-panel px-5 py-14 md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="flex flex-col gap-10 md:gap-[clamp(32px,6vh,64px)]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.6fr)] md:gap-16">
          <div className="flex flex-col justify-between gap-10 md:min-h-[clamp(380px,50vh,520px)]">
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
              <li
                key={s.n}
                data-rise
                className="grid grid-cols-1 gap-2 border-t border-dashed border-[#A9ACB4] py-6 md:grid-cols-[120px_1fr_1.3fr] md:gap-x-8 md:py-7"
              >
                <span className="font-mono text-[13px]">{s.n}</span>
                <h3 className="m-0 text-[22px] font-medium leading-none tracking-[-0.02em] md:text-[26px]">{s.name}</h3>
                <p className="m-0 text-[16px] leading-[1.35] md:text-[18px]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div data-rise className="max-w-[760px] rounded-[6px] bg-white p-6 md:ml-auto md:p-8">
          <span className="font-mono text-[11px] uppercase tracking-[.1em] text-accent">{HONEST.tag}</span>
          <p className="m-0 pt-3 text-[16px] leading-[1.5] text-[#3A3C42] md:text-[18px]">{HONEST.text}</p>
        </div>
      </div>
    </section>
  );
}
