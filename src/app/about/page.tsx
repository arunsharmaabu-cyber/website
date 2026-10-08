import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/about-hero";
import WhyWeExist from "@/components/sections/about/why-we-exist";
import HowWeWork from "@/components/sections/about/how-we-work";
import AboutPledges from "@/components/sections/about/pledges";
import WhereWeWork from "@/components/sections/about/where-we-work";
import AuditCta from "@/components/sections/about/audit-cta";
import Footer from "@/components/sections/footer";
import PageReveal from "@/components/motion/page-reveal";

export const metadata: Metadata = {
  title: "About TechX Media — Dallas–Fort Worth Local Growth Team",
  description:
    "TechX Media is a small Dallas–Fort Worth team that helps local service businesses get found first and called first. Meet the team, our rules and our pledges.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageReveal>
        <main id="top">
          <AboutHero />
          <WhyWeExist />
          <HowWeWork />
          <AboutPledges />
          <WhereWeWork />
          <AuditCta />
        </main>
      </PageReveal>
      <Footer />
    </>
  );
}
