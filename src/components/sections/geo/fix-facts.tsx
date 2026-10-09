import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "What we do" };
const HEADING = ["Fix where AI", "gets its facts."];
const INTRO = "ChatGPT, Perplexity and Gemini name businesses they can find and trust across the web. We make you easy to find and easy to trust.";
const COLS = { left: "Where AI learns about you", right: "What we do" };
const ROWS = [
  { name: "Your website", text: "Clear pages that state who you are, where you work and what you do." },
  { name: "Reviews", text: "Fresh reviews that name the job and the town, with replies." },
  { name: "Directories", text: "Listings that match everywhere, so AI sees one consistent business." },
  { name: "Local sites and news", text: "Mentions on chambers, associations and local blogs." },
  { name: "Your own profiles", text: "Google Business Profile and a short, factual About page." },
];

export default function FixFacts() {
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
          <p data-rise className="m-0 max-w-[380px] text-[15px] leading-normal text-[#3A3C42] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <div>
          <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-x-8 pb-3 font-mono text-[10px] uppercase tracking-[.1em] text-[#6B6E76] md:grid">
            <span>{COLS.left}</span>
            <span>{COLS.right}</span>
          </div>
          <ol data-rise-group className="m-0 flex list-none flex-col border-b border-dashed border-[#A9ACB4] p-0">
            {ROWS.map((r) => (
              <li
                key={r.name}
                data-rise
                className="grid grid-cols-1 gap-1.5 border-t border-dashed border-[#A9ACB4] py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:items-center md:gap-x-8"
              >
                <h3 className="m-0 text-[20px] font-medium tracking-[-0.02em] md:text-[22px]">{r.name}</h3>
                <p className="m-0 text-[14px] leading-[1.45] text-[#3A3C42]">{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
