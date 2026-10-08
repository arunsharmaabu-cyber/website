"use client";

import { useState } from "react";

// ───────── Copy for this section: edit the words here ─────────
const HEADING = ["From search to", "ringing phone"];
const INTRO = "Four steps. Everything we sell fits one of them. If it doesn't make the phone ring, we don't do it.";

const STEPS = [
  { title: "Found", text: "Climb the map when Dallas searches." },
  { title: "Chosen", text: "A fast site that makes you the obvious pick." },
  { title: "Called", text: "Ads that ring the phone, not just get clicks." },
  { title: "Tracked", text: "Every call counted. A plain-English report monthly." },
];

export default function Pipeline() {
  const [active, setActive] = useState(0);

  return (
    <section id="pipeline" className="box-border w-full bg-panel md:flex md:min-h-[70svh]">
      <div className="box-border flex flex-col gap-10 bg-panel px-5 py-12 md:w-full md:justify-center md:gap-[clamp(32px,6vh,64px)] md:px-10 md:py-[clamp(48px,8vh,96px)]">
        <div className="md:flex md:items-end md:justify-between md:gap-10">
          <h2 className="m-0 text-[36px] font-semibold leading-[.96] tracking-[-0.06em] md:text-[clamp(36px,min(4.6vw,7.4vh),72px)]">
            <span className="block">{HEADING[0]}</span>
            <span className="block">
              {HEADING[1]}
              <span className="text-accent">.</span>
            </span>
          </h2>
          <p className="m-0 mt-4 max-w-[340px] text-[15px] leading-normal text-[#3A3C42] md:mt-0 md:text-[16px]">{INTRO}</p>
        </div>

        {/* Equal columns, nothing resizes: only colors and the orange line change, so hover never jumps. */}
        <ol className="m-0 flex list-none flex-col p-0 md:grid md:grid-cols-4 md:gap-x-6">
          {STEPS.map((s, i) => {
            const on = i === active;
            const last = i === STEPS.length - 1;
            return (
              <li
                key={s.title}
                data-anim="step"
                onMouseEnter={() => setActive(i)}
                className="relative min-w-0 pb-8 pl-10 md:pb-0 md:pl-0"
              >
                {/* node + line segment to the next step */}
                <div className="absolute inset-y-0 left-0 top-2 flex w-4 flex-col items-center md:static md:h-4 md:w-auto md:flex-row md:items-center">
                  <span
                    className={`z-10 block size-4 flex-none rounded-full border transition-colors duration-500 ${
                      i <= active ? "border-accent bg-accent" : "border-[#8D9098] bg-panel"
                    }`}
                  />
                  {!last && (
                    <span className="relative block w-0 flex-1 border-l border-dashed border-[#8D9098] md:ml-2 md:h-0 md:w-auto md:border-l-0 md:border-t">
                      <span
                        className={`absolute -left-px inset-y-0 w-px origin-top bg-accent md:inset-x-0 md:-top-px md:left-0 md:h-px md:w-auto transition-transform duration-500 ease-out md:origin-left ${
                          i < active ? "scale-100" : "scale-0"
                        }`}
                      />
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="block w-full cursor-pointer border-0 bg-transparent p-0 text-left font-sans md:mt-6"
                >
                  <span
                    className={`block text-[44px] font-semibold leading-[.95] tracking-[-0.07em] transition-colors duration-500 md:text-[clamp(36px,min(4vw,7vh),64px)] ${
                      on ? "text-ink" : "text-[#8D9098]"
                    }`}
                  >
                    {s.title}
                    <span className="text-accent">.</span>
                  </span>
                  <span className="mt-3 block max-w-[250px] text-[15px] leading-[1.45] text-[#3A3C42]">{s.text}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
