import FaqList from "@/components/ui/faq-list";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/04", name: "Questions" };
const HEADING = ["Good to", "know"];
export const FAQS = [
  {
    q: "How long until SEO works?",
    a: "Most sites start to move in 60 to 90 days. Harder searches take longer. Every report shows rank and calls, so you can check it yourself.",
  },
  {
    q: "Should I choose SEO or Google Ads?",
    a: "Ads bring calls this week and stop when the budget does. SEO builds slower and keeps paying. Many businesses run both.",
  },
  {
    q: "Can you promise a #1 ranking?",
    a: "No. Nobody honest can. We commit to the work: the fixes, the pages, the links and a clear report every month.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="box-border w-full scroll-mt-20 bg-panel px-5 pb-14 md:px-10 md:pb-[clamp(56px,10vh,104px)]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] md:gap-16">
        <div className="flex flex-col gap-5">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <h2 className="m-0 text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,4.8vw,72px)]">
            <MaskLines lines={HEADING} />
          </h2>
        </div>
        <FaqList faqs={FAQS} />
      </div>
    </section>
  );
}
