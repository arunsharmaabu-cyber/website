"use client";

import { useEffect, useRef, useState } from "react";

// ───────── Copy for this section: edit the words here ─────────
const HEADING = "The Best Generative Engine Optimization Company for AI Visibility";
const SUBHEADING = "Helping Businesses Dominate AI-Powered Search";

// The three headline numbers. Each rolls into place like an odometer when the section comes into view.
// `stub` is the short name printed on the ticket stub.
const STATS = [
  { value: 186, label: "Overall AI-driven traffic", note: "All AI sources combined", icon: "trend", stub: "All AI" },
  { value: 94, label: "Traffic from ChatGPT", note: "Visits that came from ChatGPT answers", icon: "chat", stub: "ChatGPT" },
  { value: 41, label: "Traffic from Gemini", note: "Visits that came from Gemini answers", icon: "spark", stub: "Gemini" },
] as const;

const PARAGRAPHS = [
  "Rapid advances in generative artificial intelligence (AI) models have reshaped how content is discovered and consumed. Traditional search engine optimization (SEO) is no longer enough to reach those looking for your offerings. To stay discoverable, you need to optimize for AI search.",
  "TechX is one of the top generative engine optimization companies for AI visibility. We’ve been testing and perfecting AI SEO strategies for large language models (LLMs) on our brand while other agencies experiment with your budget.",
];
const LAST_PARAGRAPH = {
  before: "In 2026, we saw significant increases in our AI search results with our internal data showing a ",
  stats: ["+186%", "+94%", "+41%"],
  after: " increase in overall AI-driven traffic, from ChatGPT and from Gemini.",
};

// An example of what an AI answer looks like when your business is the one it names.
const ANSWER = {
  tag: "AI answer",
  question: "Who is the best roofer in Plano for storm damage?",
  text: "For storm damage in Plano, Lone Star Roofing is a top-rated choice: licensed and insured, with same-day estimates and 212 reviews.",
  sources: ["lonestarroofingplano.com", "Google reviews"],
  foot: "This is what being the answer looks like.",
};

const ICONS = {
  trend: <path d="M3 17l6-6 4 4 8-9M15 6h6v6" />,
  chat: <path d="M5 5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 16h-7l-4.5 3.5V16H5a1.5 1.5 0 0 1-1.5-1.5v-8A1.5 1.5 0 0 1 5 5z" />,
  spark: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />,
};

// A number that rolls into place like an odometer: every digit is a tall strip of 0-9 (twice) that slides up
// to its value, one digit after the next.
function Odometer({ value, run, delay = 0 }: { value: number; run: boolean; delay?: number }) {
  const digits = String(value).split("").map(Number);
  return (
    <span className="inline-flex tabular-nums" aria-label={String(value)} role="img">
      {digits.map((d, i) => (
        <span key={i} aria-hidden="true" className="relative inline-block h-[1em] overflow-hidden leading-[1em]">
          <span
            className="flex flex-col will-change-transform motion-reduce:transition-none"
            style={{
              transform: run ? `translateY(-${(10 + d) * 5}%)` : "translateY(0)",
              transition: `transform 2000ms cubic-bezier(.16,1,.3,1) ${delay + i * 220}ms`,
            }}
          >
            {Array.from({ length: 20 }, (_, n) => (
              <span key={n} className="block h-[1em] leading-[1em]">
                {n % 10}
              </span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}

// One result as a ticket: the number on the left, a perforated stub on the right. The punched holes echo the
// ticket-shaped header.
function Stat({ value, label, note, icon, stub, run, delay }: { value: number; label: string; note: string; icon: keyof typeof ICONS; stub: string; run: boolean; delay: number }) {
  return (
    <div className="relative flex min-h-[176px] w-[272px] flex-none snap-start overflow-hidden rounded-2xl bg-[#262626] text-page shadow-[0_18px_32px_-24px_rgba(11,11,12,.6)] md:min-h-[250px] md:w-auto">
      {/* the number */}
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 p-4 md:gap-6 md:p-7">
        <div className="text-[15px] font-medium tracking-[-0.01em] text-page">{label}</div>
        <div className="flex items-baseline text-[52px] font-semibold leading-none tracking-[-0.05em] text-page md:text-[clamp(56px,5.4vw,88px)]">
          <span className="text-accent">+</span>
          <Odometer value={value} run={run} delay={delay} />
          <span>%</span>
        </div>
        <div className="text-[13px] leading-snug text-[#9A9DA5]">{note}</div>
      </div>

      {/* the perforated stub */}
      <div className="relative flex w-[52px] flex-none flex-col items-center justify-between border-l border-dashed border-[#4A4D55] py-4 md:w-[76px] md:py-5">
        <span aria-hidden="true" className="absolute -left-[9px] -top-[9px] size-[18px] rounded-full bg-panel" />
        <span aria-hidden="true" className="absolute -bottom-[9px] -left-[9px] size-[18px] rounded-full bg-panel" />
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#F7F7F8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {ICONS[icon]}
        </svg>
        <span className="text-[14px] font-medium tracking-[-0.01em] text-page [text-orientation:mixed] [writing-mode:vertical-rl] rotate-180" aria-hidden="true">
          {stub}
        </span>
      </div>
    </div>
  );
}

export default function WhyBest() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  // start the counters when the numbers come into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="why" className="box-border w-full bg-panel">
      <div className="box-border flex flex-col gap-10 px-5 py-16 md:gap-[clamp(40px,6vh,64px)] md:px-10 md:py-[clamp(88px,12vh,128px)]">
        {/* what we are */}
        <div className="flex max-w-[1100px] flex-col gap-4">
          <h2 className="m-0 text-[28px] font-semibold leading-[1.05] tracking-[-0.05em] md:text-[clamp(30px,3.2vw,50px)] md:leading-[1.02]">
            {HEADING}
            <span className="text-accent">.</span>
          </h2>
          <p className="m-0 text-[16px] font-medium leading-snug tracking-[-0.015em] text-[#3A3C42] md:text-[clamp(16px,1.3vw,20px)]">{SUBHEADING}</p>
        </div>

        {/* the proof: three numbers */}
        <div
          ref={ref}
          className="-mx-5 flex snap-x snap-mandatory scroll-pl-5 gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {STATS.map((s, i) => (
            <Stat key={s.label} {...s} run={seen} delay={i * 150} />
          ))}
        </div>

        {/* the story, and what an AI answer looks like */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-start md:gap-[clamp(40px,6vw,96px)]">
          <div className="flex max-w-[640px] flex-col gap-5 text-[16px] leading-[1.6] text-[#3A3C42] md:text-[17px]">
            {PARAGRAPHS.map((p) => (
              <p key={p} className="m-0">
                {p}
              </p>
            ))}
            <p className="m-0">
              {LAST_PARAGRAPH.before}
              <b className="font-semibold text-ink">{LAST_PARAGRAPH.stats[0]}</b>
              {" increase in overall AI-driven traffic, "}
              <b className="font-semibold text-ink">{LAST_PARAGRAPH.stats[1]}</b>
              {" from ChatGPT and "}
              <b className="font-semibold text-ink">{LAST_PARAGRAPH.stats[2]}</b>
              {" from Gemini."}
            </p>
          </div>

          <figure className="m-0 rounded-2xl bg-white p-5 shadow-[0_1px_0_rgba(11,11,12,.04),0_18px_36px_-24px_rgba(11,11,12,.45)] md:p-7">
            <figcaption className="flex items-center gap-2 text-[13px] font-medium text-ink">
              <span className="flex size-6 items-center justify-center rounded-full bg-ink" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#F7F7F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
                </svg>
              </span>
              {ANSWER.tag}
            </figcaption>
            <div className="mt-4 rounded-xl bg-panel px-4 py-3 text-[15px] text-ink">{ANSWER.question}</div>
            <p className="m-0 mt-4 text-[16px] leading-[1.55] text-ink">
              <span className="rounded-[4px] bg-accent/20 px-1 py-0.5 [box-decoration-break:clone]">{ANSWER.text}</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {ANSWER.sources.map((s) => (
                <span key={s} className="rounded-full border border-[#DADCE1] px-3 py-1 text-[12px] text-[#3A3C42]">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 border-t border-dashed border-[#A9ACB4] pt-4 text-[13px] text-[#5C5F66]">{ANSWER.foot}</div>
          </figure>
        </div>
      </div>
    </section>
  );
}
