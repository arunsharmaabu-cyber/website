import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "How it runs" };
const HEADING = ["One plan.", "Every month."];
const INTRO = "A simple four-week rhythm. You always know what is coming and what it did.";
const WEEKS = [
  { n: "1", name: "Research", text: "We find the questions your buyers ask and what they type." },
  { n: "2", name: "Write", text: "Drafts in your voice, with real prices, photos and examples." },
  { n: "3", name: "Publish", text: "We edit, add links and go live. You approve first." },
  { n: "4", name: "Report", text: "You see what got read, what ranked and what got calls." },
];

export default function HowItRuns() {
  return (
    <section id="how" className="box-border w-full scroll-mt-20 bg-panel px-5 py-12 md:px-10 md:py-[clamp(48px,8vh,80px)]">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel number={LABEL.n} name={LABEL.name} />
            <h2 className="m-0 text-[32px] font-medium leading-[1] tracking-[-0.045em] md:text-[clamp(32px,3.2vw,46px)]">
              <MaskLines lines={HEADING} />
            </h2>
          </div>
          <p data-rise className="m-0 max-w-[300px] text-[13px] leading-[1.5] text-[#6B6E76] md:text-[14px]">
            {INTRO}
          </p>
        </div>

        <ol data-rise-group className="m-0 grid list-none grid-cols-2 gap-x-6 gap-y-8 p-0 md:grid-cols-4 md:gap-x-8">
          {WEEKS.map((w) => (
            <li key={w.n} data-rise className="flex flex-col gap-2 border-t border-ink pt-3">
              <span className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[.1em] text-[#6B6E76]">
                Week {w.n}
              </span>
              <h3 className="m-0 text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">{w.name}</h3>
              <p className="m-0 max-w-[240px] text-[13px] leading-[1.5] text-[#6B6E76]">{w.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
