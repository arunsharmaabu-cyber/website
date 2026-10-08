import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/contact-hero";
import Faq, { FAQS } from "@/components/sections/contact/faq";
import Footer from "@/components/sections/footer";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "Contact TechX Media — Free Local Growth Audit in Dallas",
  description:
    "Call, email, or send the free audit form. A real person at TechX Media replies within 24 hours, with no pushy sales call. Answers to common questions below.",
  alternates: { canonical: "/contact" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ContactPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <ContactHero />
          <Faq />
        </main>
      </PageReveal>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
