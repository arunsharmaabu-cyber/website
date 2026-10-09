import FaqList from "@/components/ui/faq-list";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/03", name: "Questions" };
const HEADING = ["Before you", "ask."];
const BUTTON = { label: "Get my free audit", href: "/contact#audit" };
export const FAQS = [
  {
    q: "What is GEO?",
    a: "Generative engine optimization. It is the work of getting your business named when people ask ChatGPT, Perplexity, Gemini or Claude for a recommendation.",
  },
  {
    q: "How is it different from AI search optimization?",
    a: "GEO is about being named in chat answers from tools like ChatGPT. AI search optimization is about being quoted in Google AI Overviews and by voice assistants. We often do both together.",
  },
  {
    q: "Can you guarantee ChatGPT will name me?",
    a: "No. Nobody can control what an AI tool says. We make your business easy to find and easy to trust, and we report how often you are named every month.",
  },
  {
    q: "How long does it take?",
    a: "Small fixes can show up in weeks. Steady gains usually build over three to six months as reviews, listings and pages add up.",
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
