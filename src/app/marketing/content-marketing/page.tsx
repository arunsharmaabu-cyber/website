import type { Metadata } from "next";
import ContentHero from "@/components/sections/content/content-hero";
import FourKinds from "@/components/sections/content/four-kinds";
import HowItRuns from "@/components/sections/content/how-it-runs";
import Faq, { FAQS } from "@/components/sections/content/faq";
import Closer from "@/components/sections/closer";
import Footer from "@/components/sections/footer";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "Content Marketing for Dallas Businesses — Earn the Call",
  description:
    "Service pages, guides, FAQs and case stories that answer what your buyers ask and make the phone ring. Content marketing for Dallas–Fort Worth businesses.",
  alternates: { canonical: "/marketing/content-marketing" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Marketing", item: "/marketing" },
      { "@type": "ListItem", position: 3, name: "Content marketing", item: "/marketing/content-marketing" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Content marketing",
    serviceType: "Content marketing",
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

export default function ContentMarketingPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <ContentHero />
          <FourKinds />
          <HowItRuns />
          <Faq />
        </main>
      </PageReveal>
      <Closer />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
