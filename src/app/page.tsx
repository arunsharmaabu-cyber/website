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
