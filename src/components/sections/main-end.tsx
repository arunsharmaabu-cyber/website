import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

// How the five main pages (Home, About, Marketing, Web design, Consulting) end: testimonials, the contact
// form, then the footer. One component, so they are identical everywhere.
export default function MainEnd() {
  return (
    <>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
