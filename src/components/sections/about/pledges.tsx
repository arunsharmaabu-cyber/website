import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";
import Tick from "@/components/ui/tick";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/03", name: "Pledges" };
const HEADING = ["Five promises,", "in writing"];
const INTRO = "Most agencies won't put these on paper. We do, and they apply to every client, every month.";
const LINK = { label: "Read all pledges", href: "/#pledges" };
const PLEDGES = [
  { n: "P/01", title: "Month to month" },
  { n: "P/02", title: "You own every account" },
  { n: "P/03", title: "Plain English, every 30 days" },
  { n: "P/04", title: "One price, itemized" },
  { n: "P/05", title: "We count calls, not clicks" },
];

export default function AboutPledges() {
  return (
    <section className="box-border w-full bg-panel px-5 py-14 md:px-10 md:py-[clamp(64px,11vh,120px)]">
      <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:items-start md:gap-x-[72px] md:gap-y-12">
        <div className="flex flex-col gap-5 md:flex-[1_1_320px] md:gap-6">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <h2 className="m-0 text-[36px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(40px,4.6vw,72px)]">
            <MaskLines lines={HEADING} />
          </h2>
          <p data-rise className="m-0 max-w-[300px] text-[15px] leading-normal text-[#3A3C42]">
            {INTRO}
          </p>
          <div data-rise>
            <a href={LINK.href} className="group inline-flex min-h-11 items-center gap-3 font-mono text-[11px] uppercase tracking-[.1em] no-underline">
              <span className="border-b border-ink pb-[3px]">{LINK.label}</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M2 8h11M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>

        <ol data-rise-group className="m-0 min-w-0 list-none p-0 md:flex-[1.5_1_480px]">
          {PLEDGES.map((p, i) => (
            <li
              key={p.n}
              data-rise
              className={`flex items-center gap-3 border-t border-dashed border-[#A9ACB4] py-[14px] md:gap-5 md:py-[clamp(12px,2.2vh,20px)] ${i === PLEDGES.length - 1 ? "border-b" : ""}`}
            >
              <span className="w-[34px] flex-none font-mono text-[11px] tracking-[.1em] md:w-11">{p.n}</span>
              <span className="min-w-0 flex-1 text-[22px] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[clamp(24px,2.4vw,34px)]">
                {p.title}
                <span className="text-accent">.</span>
              </span>
              <Tick className="size-[30px] md:size-8" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
