import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import Services from "@/components/sections/services";
import Receipts from "@/components/sections/receipts";
import Pipeline from "@/components/sections/pipeline";
import WhyBest from "@/components/sections/why-best";
import MainEnd from "@/components/sections/main-end";

export default function Home() {
  return (
    <main id="top">
      {/* written out in full so the tag is exactly https://www.techx.media/ (the metadata API drops the trailing slash on the root) */}
      <link rel="canonical" href="https://www.techx.media/" />
      <Hero />
      <TrustBar />
      <Services />
      <Receipts />
      <Pipeline />
      <WhyBest />
      <MainEnd />
    </main>
  );
}
