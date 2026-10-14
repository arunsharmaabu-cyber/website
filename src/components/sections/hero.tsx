import { getImageProps } from "next/image";
import HeroForm from "@/components/sections/hero-form";
import TypedText from "@/components/ui/typed-text";
import ArrowSVG from "@/components/ui/arrow-svg";

// ───────── Copy for this section: edit the words here ─────────
const H1_BIG = "Turn Searches Into";
const H1_SMALL = "Real customer";
const AUDIT_CTA = "Get audit";
const SUBLINE ="Smarter Marketing. Stronger Visibility. More Qualified Leads.";

// Background art: a wide skyline for desktop, a tall one for phones.
const BG_DESKTOP = { src: "/hero1.png", width: 1994, height: 789 };
const BG_MOBILE = { src: "/hero_mobile.png", width: 1024, height: 1536 };

// The cream sky dissolves into the page colour. Phones run edge to edge (only the top fades); desktop also
// fades the left and right edges so it never shows a box. Kept as a <style> so it always ships with the hero.
const ART_CSS = `
.hero-art{-webkit-mask-image:linear-gradient(to bottom,transparent,#000 28%);mask-image:linear-gradient(to bottom,transparent,#000 28%)}
@media (min-width:768px){.hero-art{-webkit-mask-image:linear-gradient(to right,transparent,#000 14%,#000 86%,transparent),linear-gradient(to bottom,transparent,#000 28%);-webkit-mask-composite:source-in;mask-image:linear-gradient(to right,transparent,#000 14%,#000 86%,transparent),linear-gradient(to bottom,transparent,#000 28%);mask-composite:intersect}}
`;

export default function Hero() {
  // art direction: one <picture>, so only the image that matches the screen is downloaded
  const common = { alt: "", sizes: "100vw", quality: 80 };
  const {
    props: { srcSet: desktopSet },
  } = getImageProps({ ...common, ...BG_DESKTOP });
  const { props: mobileProps } = getImageProps({ ...common, ...BG_MOBILE });

  return (
    <section id="hero" className="relative isolate box-border w-full overflow-hidden bg-panel min-h-[100svh] md:flex">
      <style>{ART_CSS}</style>
      {/* skyline: centred, pinned to the bottom edge, never cropped. */}
      <picture
        className="hero-art pointer-events-none absolute inset-x-0 bottom-0 z-[-10] mx-auto block w-full max-md:translate-y-3 md:w-[75%]"
      >
        <source media="(min-width: 768px)" srcSet={desktopSet} sizes="100vw" />
        <img {...mobileProps} alt="" fetchPriority="high" className="block h-auto w-full select-none" />
      </picture>
      {/* soft landing into the next section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[-5] h-24 bg-gradient-to-b from-transparent to-panel" />

      {/* audit button: top right of the hero (not in the header) */}
      <a
        href="#audit"
        className="absolute right-5 top-2 z-[2] hidden items-center gap-[10px] text-white rounded-[4px] bg-button px-[18px] py-[8px] font-mono text-[12px] font-medium uppercase tracking-[.1em] text-ink no-underline transition-colors duration-200 hover:bg-ink hover:text-page md:inline-flex md:right-10 md:top-3"
      >
        {AUDIT_CTA}
        <ArrowSVG className="size-4 " />
      </a>

      <div className="relative z-[1] mx-auto box-border flex w-full max-w-[1440px] flex-col gap-3 px-5 pb-20 pt-28 md:flex-row md:items-center md:justify-between md:gap-[clamp(32px,5vw,80px)] md:px-10 md:pb-12 md:pt-10">
        {/* LEFT: headline */}
        <div className="min-w-0 md:-translate-x-8 md:-translate-y-20 md:flex-1">
          <h1 className="m-0  font-normal text-ink">
            <span className="block font-nort  text-[32px] leading-[.98] tracking-[0.03em] md:text-[clamp(48px,min(5.8vw,10vh),62px)]">{H1_BIG}</span>
            <span className="mt-3  font-nort text-[8.6vw] leading-[1.25] tracking-[0.02em] pl-1  md:whitespace-normal md:mt-[clamp(10px,1.8vh,18px)] md:text-[clamp(30px,3.1vw,42px)]">
              {H1_SMALL}
            </span>
          </h1>
          <TypedText
            text={SUBLINE}
            speedMs={50}
            className="mt-2 font-serif text-[19px] pl-1 font-medium leading-[1.12] tracking-[-0.02em] text-ink md:leading-[1.3] md:mt-[clamp(18px,3vh,32px)] md:max-w-[640px] md:text-[clamp(18px,1.5vw,22px)] "
          />
        </div>

        {/* RIGHT: the glass audit form */}
        <div className="min-w-0 md:w-[min(440px,36vw)] md:flex-none">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
