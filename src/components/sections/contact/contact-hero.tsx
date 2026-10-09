import Link from "next/link";
import MaskLines from "@/components/ui/mask-lines";
import AuditForm from "@/components/sections/contact/audit-form";

// ───────── Copy for this section: edit the words here ─────────
const BREADCRUMB = ["Home", "Contact"];
const HEADING = ["Talk to a", "person"];

export default function ContactHero() {
  return (
    <section className="box-border w-full bg-panel px-5 pb-14 pt-[104px] md:px-10 md:pb-[clamp(64px,10vh,112px)] md:pt-[clamp(120px,16vh,168px)]">
      {/* heading on the left, the form on the right */}
      <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-[clamp(40px,6vw,96px)]">
        <div className="flex flex-col gap-6 md:flex-[1_1_0%] md:gap-7">
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-x-[10px] gap-y-1.5 font-mono text-[11px] uppercase tracking-[.1em]">
            <Link href="/" className="text-[#5C5F66] no-underline">
              {BREADCRUMB[0]}
            </Link>
            <span className="text-[#8D9098]">/</span>
            <span aria-current="page" className="font-semibold text-ink">
              {BREADCRUMB[1]}
            </span>
          </nav>
          <h1 className="m-0 text-[44px] font-semibold leading-[.92] tracking-[-0.06em] md:text-[clamp(48px,5.4vw,84px)]">
            <MaskLines lines={HEADING} accent />
          </h1>
        </div>

        <div data-rise className="min-w-0 md:max-w-[600px] md:flex-[1.1_1_0%]">
          <AuditForm />
        </div>
      </div>
    </section>
  );
}
