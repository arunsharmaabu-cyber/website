import type { Metadata } from "next";
import GeoHero from "@/components/sections/geo/geo-hero";
import FixFacts from "@/components/sections/geo/fix-facts";
import NamedMore from "@/components/sections/geo/named-more";
import Faq, { FAQS } from "@/components/sections/geo/faq";
import Closer from "@/components/sections/closer";
import Footer from "@/components/sections/footer";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "GEO for Dallas Businesses — Get Named by ChatGPT",
  description:
    "Generative engine optimization for Dallas–Fort Worth businesses. We fix where AI tools get their facts so ChatGPT, Perplexity and Gemini name you.",
  alternates: { canonical: "/marketing/geo" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Marketing", item: "/marketing" },
      { "@type": "ListItem", position: 3, name: "GEO", item: "/marketing/geo" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GEO (generative engine optimization)",
    serviceType: "Generative engine optimization",
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

export default function GeoPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <GeoHero />
          <FixFacts />
          <NamedMore />
          <Faq />
        </main>
      </PageReveal>
      <Closer />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
