import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "What we do" };
const HEADING = ["Three things", "move the map."];
const INTRO = "Google ranks local results on how relevant, how close and how trusted you are. We work on the two you can change.";
const THINGS = [
  { n: "01", name: "Google Business Profile", text: "Complete, accurate and active. The right categories, photos, hours, services and a post every week.", when: "Week 1" },
  { n: "02", name: "Reviews", text: "A simple way to ask every happy customer, and a reply to every review, good or bad.", when: "Every month" },
  { n: "03", name: "Local pages and citations", text: "A page for each suburb you serve, with your name, address and phone the same everywhere.", when: "Months 1–3" },
];

export default function ThreeThings() {
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
          <p data-rise className="m-0 max-w-[380px] text-[15px] leading-normal text-[#3A3C42] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <ol data-rise-group className="m-0 flex list-none flex-col border-b border-dashed border-[#A9ACB4] p-0">
          {THINGS.map((t) => (
            <li
              key={t.n}
              data-rise
              className="grid grid-cols-1 gap-3 border-t border-dashed border-[#A9ACB4] py-7 md:grid-cols-[90px_1fr_1.2fr_130px] md:items-center md:gap-x-8"
            >
              <span className="font-mono text-[11px] text-[#6B6E76]">{t.n}</span>
              <h3 className="m-0 text-[22px] font-medium leading-[1.1] tracking-[-0.025em] md:text-[26px]">{t.name}</h3>
              <p className="m-0 text-[14px] leading-[1.45] text-[#3A3C42] md:text-[15px]">{t.text}</p>
              <span className="font-mono text-[11px] uppercase tracking-[.08em] text-accent md:text-right">{t.when}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
