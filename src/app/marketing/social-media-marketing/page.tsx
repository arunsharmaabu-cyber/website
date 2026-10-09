import type { Metadata } from "next";
import SocialHero from "@/components/sections/social/social-hero";
import WhatWePost from "@/components/sections/social/what-we-post";
import YourMonth from "@/components/sections/social/your-month";
import Faq, { FAQS } from "@/components/sections/social/faq";
import Footer from "@/components/sections/footer";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "Social Media Marketing for Dallas Businesses — Get Followed",
  description:
    "We plan, shoot, post and answer for your business on Facebook, Instagram and Google. Social media marketing for Dallas–Fort Worth, tracked to real jobs.",
  alternates: { canonical: "/marketing/social-media-marketing" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Marketing", item: "/marketing" },
      { "@type": "ListItem", position: 3, name: "Social media marketing", item: "/marketing/social-media-marketing" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Social media marketing",
    serviceType: "Social media management",
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

export default function SocialPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <SocialHero />
          <WhatWePost />
          <YourMonth />
          <Faq />
        </main>
      </PageReveal>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
