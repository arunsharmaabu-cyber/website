import Link from "next/link";
import ArrowSVG from "@/components/ui/arrow-svg";
import MaskLines from "@/components/ui/mask-lines";
import AuditForm from "@/components/sections/contact/audit-form";

// ───────── Copy for this section: edit the words here ─────────
const BREADCRUMB = ["Home", "Contact"];
const HEADING = ["Talk to a", "person"];
const INTRO = "Call, email, or send the free audit form. A human replies within 24 hours, no pushy sales call.";
const PHONE = { label: "(214) 000-0000", href: "tel:+12140000000" };
const DETAILS = [
  { label: "Phone", value: PHONE.label, href: PHONE.href },
  { label: "Email", value: "[EMAIL]" },
  { label: "Office", value: "[ADDRESS] · Dallas, TX" },
  { label: "Hours", value: "[HOURS]" },
];
// Placeholder: swap for a Calendly / Cal.com link when there is one
const BOOK_CALL = { label: "Book a 15-minute call", href: PHONE.href };
const PLACEHOLDER_NOTE = "Placeholder contact details · confirm with founder";

export default function ContactHero() {
  return (
    <section className="box-border w-full bg-panel px-5 pb-14 pt-[104px] md:px-10 md:pb-[clamp(64px,10vh,112px)] md:pt-[clamp(120px,16vh,168px)]">
      <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:items-start md:gap-x-16 md:gap-y-12">
        <div className="flex min-w-0 flex-col gap-6 md:flex-[1_1_460px] md:gap-7">
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
          <p data-rise className="m-0 max-w-[440px] text-[15px] leading-normal text-[#3A3C42] md:text-[18px] md:leading-[1.5]">
            {INTRO}
          </p>

          <dl data-rise-group className="m-0 border-b border-dashed border-[#A9ACB4]">
            {DETAILS.map((d) => (
              <div
                key={d.label}
                data-rise
                className="flex items-baseline justify-between gap-4 border-t border-dashed border-[#A9ACB4] py-4 font-mono text-[12px] uppercase tracking-[.08em]"
              >
                <dt className="text-[#5C5F66]">{d.label}</dt>
                <dd className="m-0 text-right font-semibold">
                  {d.href ? (
                    <a href={d.href} className="no-underline">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div data-rise>
            <a
              href={BOOK_CALL.href}
              className="inline-flex min-h-12 items-center gap-[10px] rounded-[4px] border border-ink px-5 font-mono text-[12px] font-medium uppercase tracking-[.1em] no-underline"
            >
              {BOOK_CALL.label}
              <ArrowSVG className="size-4" />
            </a>
          </div>
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[.1em] text-accent">{PLACEHOLDER_NOTE}</div>
        </div>

        <div data-rise className="min-w-0 md:flex-[1.05_1_460px]">
          <AuditForm />
        </div>
      </div>
    </section>
  );
}
