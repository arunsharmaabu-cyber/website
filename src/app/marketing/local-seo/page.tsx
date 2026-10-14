import type { Metadata } from "next";
import LocalHero from "@/components/sections/local-seo/local-hero";
import ThreeThings from "@/components/sections/local-seo/three-things";
import YourReport from "@/components/sections/local-seo/your-report";
import Faq, { FAQS } from "@/components/sections/local-seo/faq";
import Closer from "@/components/sections/closer";
import Footer from "@/components/sections/footer";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "Local SEO for Dallas Businesses — Be First on the Map",
  description:
    "Google Business Profile, reviews and local pages that put your business in the map pack. Local SEO for Dallas–Fort Worth, reported in real calls.",
  alternates: { canonical: "/marketing/local-seo" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Marketing", item: "/marketing" },
      { "@type": "ListItem", position: 3, name: "Local SEO", item: "/marketing/local-seo" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Local SEO",
    serviceType: "Local search optimization",
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

export default function LocalSeoPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <LocalHero />
          <ThreeThings />
          <YourReport />
          <Faq />
        </main>
      </PageReveal>
      <Closer />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
