import Link from "next/link";
import MaskLines from "@/components/ui/mask-lines";

// ───────── Copy for this section: edit the words here ─────────
const BREADCRUMB = ["Home", "About"];
const HEADING = ["We put local", "businesses first"];
const INTRO = "TechX Media is a Dallas–Fort Worth team that does one thing: make local service businesses the first name people call.";
const DRAFT_NOTE = "Draft copy · confirm with the founder";

export default function AboutHero() {
  return (
    <section className="box-border w-full bg-panel px-5 pb-14 pt-[104px] md:px-10 md:pb-[clamp(56px,9vh,96px)] md:pt-[clamp(140px,20vh,200px)]">
      <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-10">
        <div className="flex min-w-0 flex-col gap-[22px] md:flex-[1.2_1_560px] md:gap-7">
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-x-[10px] gap-y-1.5 font-mono text-[11px] uppercase tracking-[.1em]">
            <Link href="/" className="text-[#5C5F66] no-underline">
              {BREADCRUMB[0]}
            </Link>
            <span className="text-[#8D9098]">/</span>
            <span aria-current="page" className="font-semibold text-ink">
              {BREADCRUMB[1]}
            </span>
          </nav>
          <h1 className="m-0 text-[44px] font-semibold leading-[.92] tracking-[-0.06em] md:text-[clamp(52px,6.6vw,104px)]">
            <MaskLines lines={HEADING} accent />
          </h1>
        </div>
        <div data-rise className="flex max-w-[420px] flex-col gap-4 md:flex-[1_1_360px]">
          <p className="m-0 text-[15px] leading-normal text-[#3A3C42] md:text-[18px] md:leading-[1.5]">{INTRO}</p>
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[.1em] text-accent">{DRAFT_NOTE}</div>
        </div>
      </div>
    </section>
  );
}
