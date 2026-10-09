import FaqList from "@/components/ui/faq-list";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/03", name: "Questions" };
const HEADING = ["Before you", "ask."];
const BUTTON = { label: "Get my free audit", href: "/contact#audit" };
export const FAQS = [
  {
    q: "Which platforms do you post on?",
    a: "Facebook, Instagram and Google Business Profile, plus others if your customers use them. We choose where your buyers actually are.",
  },
  {
    q: "Do you make the photos and videos?",
    a: "Yes. We plan and shoot with you at real jobs, or edit what your crew sends us. You never have to stage anything.",
  },
  {
    q: "Will it bring real customers?",
    a: "Social works best as a trust builder and a way to answer questions. We track the messages and jobs that come from it, so you can see what it does.",
  },
  {
    q: "Do I approve posts first?",
    a: "Yes. You see the month's calendar up front and can change or remove anything before it goes live.",
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
