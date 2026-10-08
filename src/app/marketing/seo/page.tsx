import type { Metadata } from "next";
import SeoHero from "@/components/sections/seo/seo-hero";
import ThreeLayers from "@/components/sections/seo/three-layers";
import ClearSteps from "@/components/sections/seo/clear-steps";
import MonthByMonth from "@/components/sections/seo/month-by-month";
import Faq, { FAQS } from "@/components/sections/seo/faq";
import Footer from "@/components/sections/footer";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "SEO for Dallas Businesses — Rank Where Buyers Search",
  description:
    "Technical fixes, pages that match what buyers type and links that earn trust. SEO for Dallas–Fort Worth businesses, reported in rank and phone calls.",
  alternates: { canonical: "/marketing/seo" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Marketing", item: "/marketing" },
      { "@type": "ListItem", position: 3, name: "SEO", item: "/marketing/seo" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO",
    serviceType: "Search engine optimization",
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

export default function SeoPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <SeoHero />
          <ThreeLayers />
          <ClearSteps />
          <MonthByMonth />
          <Faq />
        </main>
      </PageReveal>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
