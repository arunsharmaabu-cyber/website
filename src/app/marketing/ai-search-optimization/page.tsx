import type { Metadata } from "next";
import AiHero from "@/components/sections/ai-search/ai-hero";
import EasyToQuote from "@/components/sections/ai-search/easy-to-quote";
import QuotedMore from "@/components/sections/ai-search/quoted-more";
import Faq, { FAQS } from "@/components/sections/ai-search/faq";
import Closer from "@/components/sections/closer";
import Footer from "@/components/sections/footer";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "AI Search Optimization for Dallas Businesses — Be the Source",
  description:
    "Make your site easy for Google AI Overviews and voice assistants to quote. AI search optimization for Dallas–Fort Worth businesses, reported month by month.",
  alternates: { canonical: "/marketing/ai-search-optimization" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Marketing", item: "/marketing" },
      { "@type": "ListItem", position: 3, name: "AI search optimization", item: "/marketing/ai-search-optimization" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI search optimization",
    serviceType: "AI search optimization",
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

export default function AiSearchPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <AiHero />
          <EasyToQuote />
          <QuotedMore />
          <Faq />
        </main>
      </PageReveal>
      <Closer />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
