"use client";

import { useRef } from "react";
import { useServicesPin } from "@/components/motion/use-services-pin";
import Image from "next/image";
import ArrowSVG from "@/components/ui/arrow-svg";

// ───────── Copy for this section: edit the words here ─────────
const HEADING = "Our services";
const INTRO = "Three services. One goal: be the first name Dallas sees.";

// Each card: header strip (always visible in the stack) + heading, one short line, button, and a simple tile.
const CARDS = [
  {
    id: "marketing",
    n: "S/001",
    title: "Marketing",
    tagShort: "7 services",
    tag: "7 services · one page each",
    heading: "Seven ways to be found, trusted and called",
    text: "SEO, Local SEO, GEO, AI search, content, paid ads and social, each with its own page.",
    cta: "Explore marketing",
    href: "/marketing",
    card: "bg-white border-[#DADCE1] left-4 right-4 top-0 md:left-7 md:right-7 md:top-0",
    line: "border-[#A9ACB4]",
    tagColor: "text-[#5C5F66]",
    shadow: "shadow-[0_-10px_24px_-18px_rgba(11,11,12,.35)] md:shadow-[0_-14px_30px_-20px_rgba(11,11,12,.35)]",
    image: { src: "/social/service1.png", w: 1269, h: 1240, alt: "Marketing, a team reviewing results" },
  },
  {
    id: "web",
    n: "S/002",
    title: "Web design",
    tagShort: "Mobile-first",
    tag: "Mobile-first · Fast · Built to convert",
    heading: "A site that looks like the best company in town, and loads like it",
    text: "Fast, mobile-first sites with tap-to-call and quote forms on every screen.",
    cta: "Explore web design",
    href: "/web-design",
    card: "bg-[#E3E5EA] border-[#CDD0D6] left-2 right-2 top-14 md:left-3.5 md:right-3.5 md:top-16",
    line: "border-[#9A9DA6]",
    tagColor: "text-[#4B4E55]",
    shadow: "shadow-[0_-10px_24px_-18px_rgba(11,11,12,.35)] md:shadow-[0_-14px_30px_-20px_rgba(11,11,12,.35)]",
    image: { src: "/social/service2.png", w: 1200, h: 673, alt: "Web design, a finished website" },
  },
  {
    id: "consulting",
    n: "S/003",
    title: "Consulting",
    tagShort: "Strategy · Audit",
    tag: "Strategy · Audit · Fractional lead",
    heading: "A senior marketer in your corner",
    text: "A strategy session, a full audit and 90-day roadmap, or a fractional lead, month to month.",
    cta: "Explore consulting",
    href: "/consulting",
    card: "bg-[#262626] border-[#4A4D55] text-[#F7F7F8] left-0 right-0 top-28 md:top-32",
    line: "border-[#8A8D95]",
    tagColor: "text-[#D3D5DB]",
    shadow: "shadow-[0_-10px_24px_-18px_rgba(11,11,12,.45)] md:shadow-[0_-14px_30px_-20px_rgba(11,11,12,.45)]",
    image: { src: "/social/service3.png", w: 840, h: 1200, alt: "Consulting, a strategy session" },
  },
];

const mono = "font-mono tracking-[.1em]";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useServicesPin(ref);

  return (
    <section
      ref={ref}
      id="services"
      className="box-border h-[100svh] w-full overflow-hidden bg-panel"
    >
      <div className="box-border flex h-full flex-col gap-4 bg-panel px-5 pb-4 pt-[28px] md:gap-[clamp(12px,2vh,22px)] md:px-10 md:pb-[clamp(12px,2vh,20px)] md:pt-[28px]">
        {/* HEADER */}
        <div className="md:flex md:items-start md:justify-between md:gap-7">
          <h2 className="m-0 text-[36px] font-semibold leading-[.95] tracking-[-0.06em] md:text-[clamp(32px,min(4.6vw,7vh),68px)] md:leading-[.9]">
            {HEADING}
            <span className="text-accent">.</span>
          </h2>
          <div className="flex flex-col md:max-w-[520px] md:items-end md:gap-2">
            <p className="m-0 mt-2 text-[14px] leading-normal text-[#3A3C42] md:mt-0 md:text-right md:text-[16px] md:leading-[1.45]">{INTRO}</p>
          </div>
        </div>

        {/* CARD STACK: strips for 1–3, card 4 open (final state of the scroll animation) */}
        <div id="stack" className="relative min-h-0 flex-1">
          {CARDS.map((c) => {
            return (
              <article
                key={c.id}
                id={c.id}
                data-anim="card"
                className={`absolute box-border flex flex-col overflow-hidden rounded-2xl border md:rounded-[20px] ${c.card} ${c.shadow} ${
                  "h-[calc(100%-112px)] md:h-[calc(100%-128px)]"
                }`}
              >
                <header
                  className={`box-border flex h-14 flex-none items-center justify-between gap-2 px-4 md:h-16 md:gap-4 md:border-b md:border-dashed md:px-7 ${c.line} border-b border-dashed`}
                >
                  <div className="flex items-center gap-3 md:gap-[18px]">
                    <span className={`${mono} text-[11px] md:text-[12px]`}>{c.n}</span>
                    <h3 className="m-0 text-[18px] font-semibold tracking-[-0.03em] md:text-[22px]">{c.title}</h3>
                  </div>
                  <span className={`${mono} text-[10px] uppercase md:text-[11px] ${c.tagColor}`}>
                    <span className="md:hidden">{c.tagShort}</span>
                    <span className="hidden md:inline">{c.tag}</span>
                  </span>
                </header>

                {/* body: visible on every card; later cards cover earlier ones so only the header strips remain */}
                <div
                  data-anim="card-body"
                  className={`min-h-0 flex-1 flex-col gap-4 px-4 py-4 md:flex-row md:gap-[clamp(24px,4vw,64px)] md:px-7 md:py-[clamp(20px,3.4vh,32px)] flex`}
                >
                  <div className="flex min-w-0 flex-col justify-between gap-4 md:flex-[1.15_1_0%] md:gap-6">
                    <h4 className="m-0 text-[24px] font-semibold leading-[1.04] tracking-[-0.045em] md:text-[clamp(28px,min(3.6vw,6vh),52px)] md:leading-[1.02]">
                      {c.heading}
                      <span className="text-accent">.</span>
                    </h4>
                    <div>
                      <p className="m-0 max-w-[420px] text-[14px] leading-[1.5] md:text-[16px]">{c.text}</p>
                      <a
                        href={c.href}
                        className={`mt-4 box-border flex min-h-11 w-fit items-center justify-center gap-[10px] rounded-[4px] border px-[18px] font-mono text-[12px] font-medium uppercase tracking-[.1em] no-underline ${c.id === "consulting" ? "border-[#F7F7F8] text-[#F7F7F8]" : "border-ink text-ink"} md:mt-5 md:min-h-0 md:py-3`}
                      >
                        {c.cta}
                        <ArrowSVG className="size-4" />
                      </a>
                    </div>
                  </div>

                  {/* the card picture */}
                  <div className="relative min-h-[110px] flex-1 overflow-hidden rounded-[14px] bg-panel md:flex-[1_1_0%]">
                    <Image src={c.image.src} alt={c.image.alt} width={c.image.w} height={c.image.h} sizes="(min-width: 768px) 45vw, 90vw" className="absolute inset-0 size-full object-cover" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
