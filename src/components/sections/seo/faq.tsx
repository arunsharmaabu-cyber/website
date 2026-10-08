import FaqList from "@/components/ui/faq-list";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/04", name: "Questions" };
const HEADING = ["Before you", "ask."];
const BUTTON = { label: "Get my free audit", href: "/contact#audit" };
export const FAQS = [
  {
    q: "How long until I see results?",
    a: "Fixes show up in weeks. Real ranking gains usually take three to six months, and they keep compounding after that.",
  },
  {
    q: "Do you guarantee the #1 spot?",
    a: "No. Nobody honest can. We commit to the work: the fixes, the pages, the links and a clear report every month with rank and calls.",
  },
  {
    q: "What is the difference from Local SEO?",
    a: "SEO helps your site rank in regular Google results. Local SEO helps you show up on the map and in near-me searches. Most Dallas businesses need both.",
  },
  {
    q: "Is there a contract?",
    a: "No long lock-in. You own your site, accounts and reports, and you can stop whenever you want.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="box-border w-full scroll-mt-20 bg-panel px-5 pb-14 md:px-10 md:pb-[clamp(56px,10vh,104px)]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] md:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <SectionLabel number={LABEL.n} name={LABEL.name} />
            <h2 className="m-0 text-[40px] font-medium leading-[.98] tracking-[-0.05em] md:text-[clamp(40px,4.2vw,64px)]">
              <MaskLines lines={HEADING} />
            </h2>
          </div>
          <a
            href={BUTTON.href}
            className="inline-flex min-h-12 w-fit items-center rounded-full bg-ink px-6 text-[14px] font-semibold text-page no-underline transition-colors hover:bg-accent hover:text-ink"
          >
            {BUTTON.label}
          </a>
        </div>
        <FaqList faqs={FAQS} />
      </div>
    </section>
  );
}
