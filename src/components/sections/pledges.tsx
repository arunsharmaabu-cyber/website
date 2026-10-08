"use client";

import { useRef } from "react";
import { useManifestoReveal } from "@/components/motion/use-manifesto-reveal";

// ───────── Copy for this section: edit the words here ─────────
// DRAFT paragraph: confirm with the founder before launch.
const PARAGRAPH =
  "We are a small Dallas–Fort Worth team that does one thing: make local businesses the first name people call. No lock-in contracts. You own every account. Plain-English reports every month, one itemized price, and we count calls, not clicks. If we don't make your phone ring, you shouldn't keep paying us.";
const SIGNED = ["[FOUNDER NAME]", "Founder · TechX®"];

export default function Pledges() {
  const ref = useRef<HTMLElement>(null);
  useManifestoReveal(ref);

  const words = PARAGRAPH.split(" ");

  return (
    <section ref={ref} id="pledges" className="box-border h-[100svh] w-full overflow-hidden bg-panel">
      <div className="box-border flex h-full flex-col justify-center gap-[clamp(20px,4vh,44px)] px-5 pb-8 pt-20 md:px-10 md:pb-10">
        <p
          aria-label={PARAGRAPH}
          className="m-0 max-w-[1280px] text-[clamp(26px,7.4vw,34px)] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[clamp(30px,min(4.4vw,7.6vh),76px)] md:leading-[1.04] md:tracking-[-0.05em]"
        >
          <span aria-hidden="true">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[.14em] align-top [margin-bottom:-.14em]">
                <span data-anim="word" className="inline-block will-change-transform">
                  {w}
                </span>
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </span>
        </p>

        <div className="flex items-end justify-between gap-6 border-t border-dashed border-[#A9ACB4] pt-5">
          <svg
            viewBox="0 0 150 52"
            fill="none"
            stroke="#0B0B0C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="img"
            aria-label="Founder signature"
            className="h-[44px] w-[130px] md:h-[56px] md:w-[168px]"
          >
            <path data-anim="signature" d="M4 40C12 10 24 6 28 22S24 46 40 28 58 6 62 26C66 44 80 12 94 32S116 40 144 14" />
            <path data-anim="signature" d="M20 46c30-6 70-6 122-2" />
          </svg>
          <div className="overflow-hidden">
            <div data-anim="signed" className="text-right font-mono text-[10px] uppercase leading-[1.7] tracking-[.1em] text-[#5C5F66] md:text-[11px]">
              {SIGNED[0]}
              <br />
              {SIGNED[1]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
