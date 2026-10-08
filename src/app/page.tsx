import Hero from "@/components/sections/hero";
import Receipts from "@/components/sections/receipts";
import Pipeline from "@/components/sections/pipeline";
import Services from "@/components/sections/services";
import Pledges from "@/components/sections/pledges";
import Contact from "@/components/sections/contact";
import CloserFooter from "@/components/sections/closer-footer";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Receipts />
      <Pipeline />
      <Services />
      <Pledges />
      <Contact />
      <CloserFooter />
    </main>
  );
}
