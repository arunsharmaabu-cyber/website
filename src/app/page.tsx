import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import Services from "@/components/sections/services";
import Receipts from "@/components/sections/receipts";
import Pipeline from "@/components/sections/pipeline";
import Pledges from "@/components/sections/pledges";
import Contact from "@/components/sections/contact";
import CloserFooter from "@/components/sections/closer-footer";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <TrustBar />
      <Services />
      <Receipts />
      <Pipeline />
      <Pledges />
      <Contact />
      <CloserFooter />
    </main>
  );
}
