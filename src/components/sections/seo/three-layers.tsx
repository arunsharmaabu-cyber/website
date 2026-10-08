import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "What we do" };
const HEADING = ["Three layers.", "One ranking."];
const INTRO = "Most SEO fails because one layer gets skipped. We work all three, in this order, every month.";
const LAYERS = [
  {
    n: "01",
    tag: "Technical",
    title: "A site Google can read",
    bullets: ["Loads in under 2 seconds on a phone", "Clean indexing, sitemap and redirects", "Schema markup for your business"],
  },
  {
    n: "02",
    tag: "On-page",
    title: "Pages that match the search",
    bullets: ["One page per service and city", "Titles and copy that answer the query", "Internal links that guide people and Google"],
  },
  {
    n: "03",
    tag: "Authority",
    title: "Reasons to trust you",
    bullets: ["Local citations and directories, cleaned up", "Links from real Dallas–Fort Worth sites", "Reviews that name the job and the town"],
  },
];

export default function ThreeLayers() {
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
          <p data-rise className="m-0 max-w-[340px] text-[15px] leading-normal text-[#3A3C42] md:text-right md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <ul data-rise-group className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 md:gap-5">
          {LAYERS.map((l) => (
            <li key={l.n} data-rise className="flex">
              <div className="flex w-full flex-col rounded-[4px] border-t-2 border-accent bg-white p-5 md:p-6">
                <span className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[.08em]">
                  {l.n} — {l.tag}
                  <span className="size-[8px] rounded-full bg-[#D3D5DB]" />
                </span>
                <h3 className="m-0 mt-8 text-[24px] font-medium leading-[1.1] tracking-[-0.03em] md:text-[28px]">{l.title}</h3>
                <ul className="m-0 mt-8 flex list-none flex-col p-0">
                  {l.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 border-t border-dashed border-[#C9CBD1] py-3.5 text-[14px] leading-[1.35] text-[#3A3C42] md:text-[15px]">
                      <span className="font-mono text-[14px] leading-none text-accent">+</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
