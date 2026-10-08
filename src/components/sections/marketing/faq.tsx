import FaqList from "@/components/ui/faq-list";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/03", name: "Questions" };
const HEADING = ["Quick", "answers"];
export const FAQS = [
  {
    q: "Do I need all seven?",
    a: "No. Most businesses start with two or three. We pick the ones that fit your market and your budget, and add the next one only when the first is working.",
  },
  {
    q: "Where should I start?",
    a: "With the free audit. We look at where you show up on Google, on the map and in AI answers, then rank the seven by what will move the needle first. For many local service businesses that is Local SEO and SEO.",
  },
  {
    q: "How do you charge?",
    a: "Flat monthly fees for ongoing work and a fixed price for one-off projects. Plans start at [PRICE] a month. Ad spend is separate and goes straight to the ad platform.",
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
