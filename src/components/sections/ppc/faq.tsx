import FaqList from "@/components/ui/faq-list";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/03", name: "Questions" };
const HEADING = ["Before you", "ask."];
const BUTTON = { label: "Get my free audit", href: "/contact#audit" };
export const FAQS = [
  {
    q: "How much should I spend on ads?",
    a: "Most local businesses start between $1,500 and $3,000 a month in ad spend. We tell you honestly if your budget is too small to work.",
  },
  {
    q: "Do I own the ad account?",
    a: "Yes. The ad accounts are in your name and you can see everything. If you ever leave, the accounts and the history go with you.",
  },
  {
    q: "How fast will I get calls?",
    a: "Ads can start sending calls within days of launch. The first month is for learning, and the cost per call usually falls as we tune it.",
  },
  {
    q: "Do you take a cut of my ad spend?",
    a: "No. Your ad spend goes straight to the ad platform. You pay us a flat management fee, so we have no reason to push you to spend more.",
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
