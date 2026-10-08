import type { Metadata } from "next";
import ConsultingHero from "@/components/sections/consulting/consulting-hero";
import WaysToWork from "@/components/sections/consulting/ways-to-work";
import Roadmap from "@/components/sections/consulting/roadmap";
import Deliverables from "@/components/sections/consulting/deliverables";
import FitCheck from "@/components/sections/consulting/fit-check";
import Faq, { FAQS } from "@/components/sections/consulting/faq";
import ConsultingCta from "@/components/sections/consulting/consulting-cta";
import Footer from "@/components/sections/footer";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "Marketing Consulting for Dallas Owners — Plan First",
  description:
    "Strategy sessions, marketing audits and a fractional marketing lead for Dallas–Fort Worth business owners. Get the plan before you spend. Every plan is yours to keep.",
  alternates: { canonical: "/consulting" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Consulting", item: "/consulting" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing consulting",
    serviceType: "Marketing strategy and audits",
    areaServed: "Dallas–Fort Worth, TX",
    provider: { "@type": "Organization", name: "TechX Media" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function ConsultingPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <ConsultingHero />
          <WaysToWork />
          <Roadmap />
          <Deliverables />
          <FitCheck />
          <Faq />
          <ConsultingCta />
        </main>
      </PageReveal>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
