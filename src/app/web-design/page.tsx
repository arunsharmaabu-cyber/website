import type { Metadata } from "next";
import WebHero from "@/components/sections/web-design/web-hero";
import SixThings from "@/components/sections/web-design/six-things";
import YourStory from "@/components/sections/web-design/your-story";
import Process from "@/components/sections/web-design/process";
import Faq, { FAQS } from "@/components/sections/web-design/faq";
import WebCta from "@/components/sections/web-design/web-cta";
import Footer from "@/components/sections/footer";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "Web Design for Dallas Service Businesses — Fast Sites",
  description:
    "Fast, mobile-first websites for Dallas–Fort Worth service businesses. Click-to-call, quote forms, SEO-ready code, a fixed price and a four-week launch.",
  alternates: { canonical: "/web-design" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Web design", item: "/web-design" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web design",
    serviceType: "Website design and development",
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

export default function WebDesignPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <WebHero />
          <SixThings />
          <YourStory />
          <Process />
          <Faq />
          <WebCta />
        </main>
      </PageReveal>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
