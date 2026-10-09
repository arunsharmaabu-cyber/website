import type { Metadata } from "next";
import PpcHero from "@/components/sections/ppc/ppc-hero";
import ThreeWays from "@/components/sections/ppc/three-ways";
import EveryDollar from "@/components/sections/ppc/every-dollar";
import Faq, { FAQS } from "@/components/sections/ppc/faq";
import Footer from "@/components/sections/footer";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "Paid Advertising & PPC for Dallas Businesses — Pay for Calls",
  description:
    "Google Ads, Local Services Ads and remarketing for Dallas–Fort Worth businesses. We track every ad to the phone call and the booked job.",
  alternates: { canonical: "/marketing/paid-advertising-ppc" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Marketing", item: "/marketing" },
      { "@type": "ListItem", position: 3, name: "Paid advertising & PPC", item: "/marketing/paid-advertising-ppc" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Paid advertising & PPC",
    serviceType: "Pay-per-click advertising management",
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

export default function PpcPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <PpcHero />
          <ThreeWays />
          <EveryDollar />
          <Faq />
        </main>
      </PageReveal>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
