import FaqList from "@/components/ui/faq-list";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/04", name: "Questions" };
const HEADING = ["Quick", "answers"];
export const FAQS = [
  {
    q: "Will it rank on Google?",
    a: "We build in everything that helps: fast load, clean headings, mobile layout, schema and sensible URLs. Rankings still depend on competition, content and links, so nobody can promise a position. Pair the site with our SEO work to push harder.",
  },
  {
    q: "Do you use templates or WordPress?",
    a: "No templates. Each site is custom-designed for your business and built on a fast, modern stack. [STACK DETAILS: confirm CMS or framework before launch.] If you want to edit text yourself, we set that up and show you how.",
  },
  {
    q: "Who owns the site?",
    a: "You do. The domain, hosting account, design files and code are in your name at handover. Hosting and maintenance are optional, and if you ever leave, you take everything with you.",
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
