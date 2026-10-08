"use client";

import { useRef } from "react";
import { useCloserSlide } from "@/components/motion/use-closer-slide";
import Footer from "@/components/sections/footer";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const CLOSER_LABEL = "Let's go";
const LOCATION = "/DFW_TX";
const BLURB = "First on the map. First in the search. First to get the call. It starts with a free audit.";

// ───────── Small local pieces ─────────
function Blurb({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-[18px] text-ink md:gap-[22px] ${className}`}>
      <p className="m-0 text-[17px] font-normal leading-[1.45] tracking-normal md:text-[clamp(16px,1.3vw,19px)]">{BLURB}</p>
    </div>
  );
}

export default function CloserFooter() {
  const closerRef = useRef<HTMLElement>(null);
  useCloserSlide(closerRef);

  return (
    <div className="box-border flex w-full flex-col bg-panel">
      {/* CLOSER */}
      <section ref={closerRef} className="box-border flex flex-col gap-8 overflow-hidden bg-panel px-5 pb-8 pt-6 md:min-h-[100svh] md:justify-between md:gap-[clamp(24px,5vh,48px)] md:px-10 md:pb-[clamp(32px,7vh,64px)] md:pt-[clamp(24px,4.4vh,40px)]">
        <div className="flex items-center justify-between gap-3 font-mono text-[12px] uppercase tracking-[.1em] md:gap-4">
          <SectionLabel number="S/007" name={CLOSER_LABEL} />
          <span>{LOCATION}</span>
        </div>

        <h2
          aria-label="We put your name first."
          className="m-0 flex flex-col text-[80px] font-semibold leading-[.88] tracking-[-0.055em] md:text-[clamp(72px,min(14.2vw,24vh),212px)] md:leading-[.86]"
        >
          <span aria-hidden="true" className="flex items-start justify-between md:gap-6">
            <span>WE</span>
            <span>PUT</span>
          </span>
          <span aria-hidden="true" className="flex flex-wrap items-start md:gap-x-12 md:gap-y-4">
            <span className="flex flex-col overflow-x-clip">
              <span data-anim="your" className="flex items-center gap-[.04em]">
                <svg width="1em" height=".5em" viewBox="0 0 32 16" fill="none" stroke="#FF4D00" strokeWidth="2.6" strokeLinecap="square" aria-hidden="true" className="flex-none">
                  <path d="M0 8h28M21 1l7 7-7 7" />
                </svg>
                <span>YOUR</span>
              </span>
              <span>NAME</span>
            </span>
            {/* desktop: blurb sits beside YOUR NAME */}
            <Blurb className="hidden md:ml-auto md:mt-[clamp(8px,1.6vw,28px)] md:flex md:flex-[0_1_340px]" />
          </span>
          <span aria-hidden="true" className="pl-7 md:pl-[clamp(0px,22vw,340px)]">
            <span data-anim="first" className="inline-block">
              FIRST<span className="text-accent">.</span>
            </span>
          </span>
        </h2>

        {/* mobile: blurb under the headline */}
        <Blurb className="md:hidden" />
      </section>

      <Footer />
    </div>
  );
}
