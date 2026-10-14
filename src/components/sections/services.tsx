"use client";

import { useRef } from "react";
import { useServicesPin } from "@/components/motion/use-services-pin";
import Image from "next/image";
import ArrowSVG from "@/components/ui/arrow-svg";
import GrowthVisual from "@/components/sections/growth-visual";

// ───────── Copy for this section: edit the words here ─────────
const HEADING = "Our services";
const INTRO = "Three services. One goal: be the first name Dallas sees.";

// Each card: header strip (always visible in the stack) + heading, one short line, button, and a simple tile.
const CARDS = [
  {
    id: "marketing",
    n: "S/001",
    title: "Marketing Services",
    tagShort: "",
    tag: "",
    heading: "Get Found. Build Trust. Generate More Leads.",
    text: "From Google rankings to AI-powered search visibility, we create smarter marketing strategies that strengthen your brand authority, connect you with high-intent audiences, and drive qualified leads.",
    cta: "Explore Marketing Services",
    href: "/marketing",
    card: "bg-white border-[#DADCE1] left-4 right-4 top-0 md:left-7 md:right-7 md:top-0",
    line: "border-[#A9ACB4]",
    tagColor: "text-[#5C5F66]",
    shadow: "shadow-[0_-10px_24px_-18px_rgba(11,11,12,.35)] md:shadow-[0_-14px_30px_-20px_rgba(11,11,12,.35)]",
    image: { src: "/social/service5.png", w: 1783, h: 882, alt: "Digital marketing dashboard: growing traffic, conversions and lead sources" },
  },
  {
    id: "web",
    n: "S/002",
    title: "Web Design & Development",
    tagShort: "Mobile-first",
    tag: "Mobile-first · Fast · Built to convert",
    heading: "A Smarter Website for a More Competitive Digital World.",
    text: "From strategic design to custom development, we build responsive, user-focused websites that communicate your value, improve user experiences, and help convert visitors into customers.",
    cta: "Explore Web Solutions",
    href: "/web-design",
    card: "bg-[#E3E5EA] border-[#CDD0D6] left-2 right-2 top-11 md:left-3.5 md:right-3.5 md:top-16",
    line: "border-[#9A9DA6]",
    tagColor: "text-[#4B4E55]",
    shadow: "shadow-[0_-10px_24px_-18px_rgba(11,11,12,.35)] md:shadow-[0_-14px_30px_-20px_rgba(11,11,12,.35)]",
    image: { src: "/social/ser.png", w: 1021, h: 740, alt: "Web design, a finished website" },
  },
  {
    id: "consulting",
    n: "S/003",
    title: "Consulting Services",
    tagShort: "Strategy · Audit",
    tag: "Strategy · Audit · Fractional lead",
    heading: "Find Your Next Opportunity. Build Your Growth Roadmap.",
    text: "We connect business goals with actionable digital strategies, helping you prioritize the right opportunities, improve marketing performance, and create a clear path toward scalable growth.",
    cta: "Explore Consulting Services",
    href: "/consulting",
    card: "bg-[#262626] border-[#4A4D55] text-[#F7F7F8] left-0 right-0 top-[88px] md:top-32",
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
            <p className="m-0 mt-2 text-[14px] leading-normal text-[#3A3C42] [@media(max-height:700px)]:hidden md:mt-0 md:text-right md:text-[16px] md:leading-[1.45]">{INTRO}</p>
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
                  "h-[calc(100%-88px)] md:h-[calc(100%-128px)]"
                }`}
              >
                <header
                  className={`box-border flex h-11 flex-none items-center justify-between gap-2 px-4 md:h-16 md:gap-4 md:border-b md:border-dashed md:px-7 ${c.line} border-b border-dashed`}
                >
                  <div className="flex items-center gap-3 md:gap-[18px]">
                    <h3 className="m-0 font-mono text-[12px] font-medium uppercase tracking-[.1em] md:font-sans md:text-[22px] md:font-semibold md:normal-case md:tracking-[-0.03em]">{c.title}</h3>
                  </div>
                  {c.tag && (
                    <span className={`${mono} hidden text-[11px] uppercase md:inline ${c.tagColor}`}>{c.tag}</span>
                  )}
                </header>

                {/* body: visible on every card; later cards cover earlier ones so only the header strips remain */}
                <div
                  data-anim="card-body"
                  className={`min-h-0 flex-1 flex-col gap-3 px-4 pb-4 pt-8 [@media(max-height:700px)]:pt-5 md:flex-row md:gap-[clamp(24px,4vw,64px)] md:px-7 md:py-[clamp(20px,3.4vh,32px)] flex`}
                >
                  <div className="flex min-w-0 flex-col justify-between gap-4 md:flex-[1.15_1_0%] md:gap-6">
                    <h4 className="m-0 text-[22px] font-semibold leading-[1.06] [@media(max-height:700px)]:text-[19px] tracking-[-0.045em] md:text-[clamp(26px,min(3vw,5vh),44px)] md:leading-[1.04]">
                      {c.heading.replace(/.$/, "")}
                      <span className="text-accent">.</span>
                    </h4>
                    <div>
                      <p className="m-0 max-w-[520px] text-[13px] leading-[1.4] [@media(max-height:700px)]:text-[12px] md:text-[16px] md:leading-[1.5]">{c.text}</p>
                      <a
                        href={c.href}
                        className={`mt-3 box-border flex min-h-10 w-fit items-center justify-center gap-[8px] rounded-[4px] border px-[14px] font-mono text-[11px] font-medium uppercase tracking-[.06em] no-underline md:min-h-11 md:gap-[10px] md:px-[18px] md:text-[12px] md:tracking-[.1em] ${c.id === "consulting" ? "border-[#F7F7F8] text-[#F7F7F8]" : "border-ink text-ink"} md:mt-5 md:min-h-0 md:py-3`}
                      >
                        {c.cta}
                        <ArrowSVG className="size-4" />
                      </a>
                    </div>
                  </div>

                  {/* the card picture */}
                  <div
                    className={`relative overflow-hidden rounded-[14px] ${c.id === "marketing" ? "bg-[#F5F3F0]" : "bg-panel"} ${
                      c.id === "marketing"
                        ? "min-h-[64px] flex-1 md:aspect-[1783/882] md:min-h-0 md:flex-[1_1_0%] md:self-center" // this picture is wide: size the box to it so nothing is cropped
                        : "min-h-[64px] flex-1 md:flex-[1_1_0%]"
                    }`}
                  >
                    {c.image ? (
                      <Image src={c.image.src} alt={c.image.alt} width={c.image.w} height={c.image.h} sizes="(min-width: 768px) 45vw, 90vw" className={`absolute inset-0 size-full ${c.id === "marketing" ? "object-contain" : "object-cover"}`} />
                    ) : (
                      <GrowthVisual />
                    )}
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
