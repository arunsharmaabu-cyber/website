import type { Metadata } from "next";
import MarketingHero from "@/components/sections/marketing/marketing-hero";
import GoalSwitchboard from "@/components/sections/marketing/goal-switchboard";
import TheSeven from "@/components/sections/marketing/the-seven";
import Faq, { FAQS } from "@/components/sections/marketing/faq";
import MarketingCta from "@/components/sections/marketing/marketing-cta";
import MainEnd from "@/components/sections/main-end";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "Marketing for Dallas Businesses — 7 Ways to Get Found",
  description:
    "SEO, Local SEO, content, GEO, AI search, paid ads and social for Dallas–Fort Worth businesses. Pick the way that fits, start with one, add the next.",
  alternates: { canonical: "/marketing" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Marketing", item: "/marketing" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing",
    serviceType: "Local marketing",
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

export default function MarketingPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <MarketingHero />
          <GoalSwitchboard />
          <TheSeven />
          <Faq />
          <MarketingCta />
        </main>
      </PageReveal>
      <MainEnd />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
