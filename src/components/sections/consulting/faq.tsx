import FaqList from "@/components/ui/faq-list";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/05", name: "Questions" };
const HEADING = ["Straight", "answers"];
export const FAQS = [
  {
    q: "Do I have to hire you to do the work?",
    a: "No. Every plan is yours to keep. Run it with your team, hand it to another agency, or ask us to do it. Nothing in the audit locks you in.",
  },
  {
    q: "Can you work with my existing agency?",
    a: "Yes. We review what they do, set clear targets, and join calls when you want us there. The goal is better work from the people you already pay.",
  },
  {
    q: "What happens after the audit?",
    a: "You get a review call, the recorded walkthrough and a 90-day plan with budget ranges. Then you choose: run it yourself, give it to your team or agency, or have us run it. No pressure either way.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="box-border w-full scroll-mt-20 bg-panel px-5 py-14 md:px-10 md:py-[clamp(56px,10vh,104px)]">
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
