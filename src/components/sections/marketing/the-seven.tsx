"use client";

import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";
import { useCardAlign } from "@/components/motion/use-card-align";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "The seven" };
const HEADING = ["Seven ways"];
const COUNT = "(7)";
const EXPLORE = "Explore";
const SEVEN = [
  { n: "S/001.1", name: "SEO", text: "Rank higher on Google for the searches that bring buyers.", href: "/marketing/seo" },
  { n: "S/001.2", name: "Local SEO", text: "Own the map pack and the near-me searches in your suburbs.", href: "/marketing/local-seo" },
  { n: "S/001.3", name: "Content marketing", text: "Pages, guides and posts that answer buyers and earn links.", href: "/marketing/content-marketing" },
  { n: "S/001.4", name: "GEO", text: "Get named and cited when people ask ChatGPT, Perplexity or Gemini.", href: "/marketing/geo" },
  { n: "S/001.5", name: "AI search optimization", text: "Be the source behind Google AI Overviews and voice answers.", href: "/marketing/ai-search-optimization" },
  { n: "S/001.6", name: "Paid advertising & PPC", text: "Google Ads and Local Services Ads that ring the phone.", href: "/marketing/paid-advertising-ppc" },
  { n: "S/001.7", name: "Social media marketing", text: "Posts, reels and replies that turn followers into customers.", href: "/marketing/social-media-marketing" },
];

export default function TheSeven() {
  const ref = useCardAlign<HTMLElement>();

  return (
    <section ref={ref} className="box-border w-full overflow-hidden bg-panel px-5 py-14 md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="flex flex-col gap-10 md:gap-[clamp(32px,6vh,64px)]">
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-5">
            <SectionLabel number={LABEL.n} name={LABEL.name} />
            <h2 className="m-0 text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,4.8vw,72px)]">
              <MaskLines lines={HEADING} />
            </h2>
          </div>
          <span className="text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,4.8vw,72px)]">{COUNT}</span>
        </div>

        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-4 md:gap-5">
          {SEVEN.map((s) => (
            <li key={s.n} data-card className="flex">
              <a
                href={s.href}
                className="group flex h-[360px] w-full flex-col rounded-[6px] bg-white p-4 text-ink no-underline transition-colors duration-300 hover:bg-ink hover:text-page focus-visible:bg-ink focus-visible:text-page md:h-[clamp(340px,50vh,440px)]"
              >
                <span className="flex items-start justify-between font-mono text-[12px] uppercase tracking-[.08em]">
                  {s.n}
                  <span className="size-[10px] rounded-full bg-[#D3D5DB] transition-colors group-hover:bg-accent group-focus-visible:bg-accent" />
                </span>
                <span className="mt-12 text-[32px] font-semibold leading-[1.02] tracking-[-0.045em] md:text-[clamp(28px,2.6vw,40px)]">{s.name}</span>
                <span className="mt-auto flex flex-col gap-4">
                  <span className="text-[15px] leading-[1.4] opacity-75 md:text-[16px]">{s.text}</span>
                  <span className="flex items-center justify-between border-t border-dashed border-[#A9ACB4] pt-4 font-mono text-[12px] uppercase tracking-[.1em] group-hover:text-accent group-focus-visible:text-accent">
                    {EXPLORE}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
