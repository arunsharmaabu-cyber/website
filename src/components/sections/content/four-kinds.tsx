import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "What we write" };
const HEADING = ["Four kinds of page.", "One goal."];
const INTRO = "Every piece answers a real buyer question and points to a call. No filler, no word counts.";
const KINDS = [
  { n: "01", name: "Service pages", text: "One page for each job you do and each town you serve.", example: "“Roof replacement in Frisco, TX”" },
  { n: "02", name: "Guides", text: "Clear answers to the questions buyers ask before they call.", example: "“How much does a roof cost in Plano?”" },
  { n: "03", name: "FAQs", text: "Short answers that win the quick searches and the AI answers.", example: "“Does insurance cover hail damage?”" },
  { n: "04", name: "Case stories", text: "Real jobs, start to finish, with the photos and the result.", example: "“A Plano re-roof, first call to final walk”" },
];

export default function FourKinds() {
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

        <ol data-rise-group className="m-0 grid list-none grid-cols-1 p-0 md:grid-cols-4">
          {KINDS.map((k) => (
            <li
              key={k.n}
              data-rise
              className="flex flex-col gap-4 border-t border-dashed border-[#A9ACB4] py-7 md:border-l md:border-t-0 md:px-7 md:first:border-l-0 md:first:pl-0"
            >
              <span className="font-mono text-[11px] text-accent">{k.n}</span>
              <h3 className="m-0 mt-4 text-[24px] font-medium leading-[1.1] tracking-[-0.03em] md:text-[26px]">{k.name}</h3>
              <p className="m-0 text-[14px] leading-[1.5] text-[#3A3C42] md:text-[15px]">{k.text}</p>
              <p className="m-0 mt-4 text-[12px] italic text-[#6B6E76]">{k.example}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
