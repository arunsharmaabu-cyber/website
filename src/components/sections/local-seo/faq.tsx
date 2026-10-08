import FaqList from "@/components/ui/faq-list";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/03", name: "Questions" };
const HEADING = ["Before you", "ask."];
const BUTTON = { label: "Get my free audit", href: "/contact#audit" };
export const FAQS = [
  {
    q: "What is the map pack?",
    a: "The three businesses Google shows on a map above the regular results. Most local calls come from these three spots.",
  },
  {
    q: "Do I need a storefront?",
    a: "No. If you travel to customers you can still rank. You show your service area and keep your address private.",
  },
  {
    q: "How is this different from SEO?",
    a: "SEO ranks your website in the regular results. Local SEO ranks your map listing, reviews and local pages. Most Dallas businesses need both.",
  },
  {
    q: "How long does it take?",
    a: "Most profiles start to move in four to eight weeks. Steady gains usually build over three to six months.",
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
