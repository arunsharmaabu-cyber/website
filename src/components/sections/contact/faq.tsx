import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "FAQ" };
const HEADING = ["Questions,", "answered"];
const INTRO = "Can't find yours? Call us and ask.";
const DRAFT_NOTE = "Draft answers · confirm with the founder";

// Also used for the FAQ structured data on the page (so Google sees the same words).
export const FAQS = [
  {
    q: "What is the free audit?",
    a: "A personal report on your Google Maps rank, mobile site speed and missed calls, with a three-step fix plan. It is yours to keep, even if we never talk again.",
  },
  { q: "How much does it cost?", a: "Plans start at [PRICE] a month, itemized line by line. The audit is free and carries no obligation." },
  { q: "Do I have to sign a contract?", a: "No. Everything is month to month, with 30 days' notice to cancel." },
  {
    q: "Who owns my accounts?",
    a: "You do. Google Business, ads, analytics and your website sit in your name from day one. If you leave, everything goes with you.",
  },
  {
    q: "How fast will I see results?",
    a: "Paid ads can bring calls within days. Google Maps and website SEO usually move in 60 to 90 days. Your monthly report shows the progress either way.",
  },
  {
    q: "Which industries do you work with?",
    a: "Home services (roofing, HVAC, plumbing, electrical), dental and medical practices, and law firms across Dallas–Fort Worth.",
  },
  { q: "What areas do you cover?", a: "All of Dallas–Fort Worth and the surrounding suburbs. If you are just outside, ask us." },
  { q: "What does reporting look like?", a: "One page, once a month, in plain English: calls, rank and revenue. No acronyms, no spin." },
];

// Native <details>: keyboard accessible, works without JavaScript. The first answer starts open.
export default function Faq() {
  return (
    <section id="faq" className="box-border w-full scroll-mt-20 bg-panel px-5 py-14 md:px-10 md:py-[clamp(64px,11vh,120px)]">
      <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:items-start md:gap-x-16 md:gap-y-10">
        <div className="flex min-w-0 flex-col gap-5 md:flex-[1_1_320px]">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <h2 className="m-0 text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,5.4vw,84px)]">
            <MaskLines lines={HEADING} accent />
          </h2>
          <p data-rise className="m-0 max-w-[320px] text-[16px] leading-normal text-[#3A3C42]">
            {INTRO}
          </p>
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[.1em] text-accent">{DRAFT_NOTE}</div>
        </div>

        <div data-rise-group className="min-w-0 border-b border-dashed border-[#A9ACB4] md:flex-[2_1_600px]">
          {FAQS.map((f, i) => (
            <details key={f.q} open={i === 0} data-rise className="group border-t border-dashed border-[#A9ACB4]">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-[22px] [&::-webkit-details-marker]:hidden">
                <span className="text-[18px] font-medium leading-[1.25] tracking-[-0.025em] md:text-[22px]">{f.q}</span>
                <span className="flex size-[30px] flex-none items-center justify-center rounded-full border border-ink transition-transform duration-200 group-open:rotate-45">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 1v10M1 6h10" />
                  </svg>
                </span>
              </summary>
              <p className="m-0 mb-6 max-w-[640px] text-[15px] leading-[1.55] text-[#3A3C42] md:text-[16px]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
