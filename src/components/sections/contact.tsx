"use client";

import { useState } from "react";
import Pill from "@/components/ui/pill";
import SolidButton from "@/components/ui/solid-button";

// ───────── Copy for this section: edit the words here ─────────
const HEADING = ["Find out what's", "costing you calls"];
const INTRO = "Free, back in 24 hours, with your real numbers. No contract and no pushy sales call.";

const SPEED_SCORE = 38;
const SPEED_TEXT = "Your site scores 38 out of 100 on phones.";
const SPEED_BADGE = "SAMPLE";

const SERVICES_TITLE = "What do you need?";
const SERVICES = ["Local SEO", "Web design", "Paid ads", "Brand", "Not sure yet"];
const SUBMIT = "Send my free audit";

// ───────── Small local pieces ─────────
// The dashed line under each field IS the input: type right on top of it.
const fieldCls =
  "block w-full border-0 border-b border-dashed border-[#A9ACB4] bg-transparent px-0 pb-3 pt-2 text-[17px] text-ink outline-none transition-colors placeholder:text-[#8D9098] focus:border-solid focus:border-ink";

function Field({
  id,
  label,
  className = "",
  ...props
}: { id: string; label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block font-mono text-[11px] uppercase tracking-[.1em] text-[#5C5F66]">
        {label}
      </label>
      <input id={id} name={id.replace("c-", "")} className={fieldCls} {...props} />
    </div>
  );
}

export default function Contact() {
  const [picked, setPicked] = useState<string[]>([SERVICES[0]]);
  const toggle = (label: string) => setPicked((p) => (p.includes(label) ? p.filter((x) => x !== label) : [...p, label]));

  return (
    <section id="contact" className="box-border w-full bg-panel md:flex md:min-h-[100svh]">
      <div className="box-border flex w-full flex-col gap-10 bg-panel px-5 py-16 md:flex-row md:items-center md:justify-between md:gap-[clamp(40px,6vw,96px)] md:px-10 md:py-[clamp(96px,12vh,120px)]">
        {/* LEFT: heading + one sentence */}
        <div className="md:flex-[1_1_0%]">
          <h2 className="m-0 text-[40px] font-semibold leading-[.95] tracking-[-0.06em] md:text-[clamp(40px,min(5.4vw,9.4vh),88px)] md:leading-[.92]">
            <span className="block">{HEADING[0]}</span>
            <span className="block">
              {HEADING[1]}
              <span className="text-accent">.</span>
            </span>
          </h2>
          <p className="m-0 mt-5 max-w-[400px] text-[15px] leading-[1.5] text-[#3A3C42] md:mt-6 md:text-[17px]">{INTRO}</p>
        </div>

        {/* RIGHT: form */}
        <form onSubmit={(e) => e.preventDefault()} className="m-0 flex w-full flex-col gap-7 md:max-w-[600px] md:flex-[1.1_1_0%] md:gap-[clamp(20px,3.6vh,32px)]">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-[clamp(16px,3vh,28px)]">
            <Field id="c-name" label="Your name" type="text" placeholder="Jane Smith" autoComplete="name" />
            <Field id="c-email" label="Email" type="email" placeholder="you@yourco.com" autoComplete="email" />
            <Field id="c-site" label="Website" type="text" placeholder="yourco.com" autoComplete="url" />
            <Field id="c-phone" label="Phone" type="tel" placeholder="(214) 000-0000" autoComplete="tel" />
            <Field id="c-industry" label="Industry" type="text" placeholder="Roofing, HVAC, dental…" className="md:col-span-2" />
          </div>

          {/* live speed score (static SAMPLE until the PageSpeed route is wired) */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="size-9 flex-none" role="img" aria-label={"Mobile speed score " + SPEED_SCORE + " out of 100"}>
              <circle cx="20" cy="20" r="16" fill="none" stroke="#DADCE1" strokeWidth="4" />
              <circle cx="20" cy="20" r="16" fill="none" stroke="#FF4D00" strokeWidth="4" strokeLinecap="round" strokeDasharray="38.2 100.5" transform="rotate(-90 20 20)" />
              <text x="20" y="24" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="12" fontWeight="700" fill="#0B0B0C">
                {SPEED_SCORE}
              </text>
            </svg>
            <span className="text-[14px] leading-[1.35] text-[#3A3C42]">{SPEED_TEXT}</span>
            <span className="rounded-full border border-[#A9ACB4] px-2 py-0.5 font-mono text-[9px] tracking-[.1em] text-[#5C5F66]">{SPEED_BADGE}</span>
          </div>

          <div>
            <div id="c-service" className="mb-3 font-mono text-[11px] uppercase tracking-[.1em] text-[#5C5F66]">
              {SERVICES_TITLE}
            </div>
            <div role="group" aria-labelledby="c-service" className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <Pill key={s} active={picked.includes(s)} onClick={() => toggle(s)} className="min-h-11 px-4 md:min-h-0 md:py-[10px]">
                  {s}
                </Pill>
              ))}
            </div>
          </div>

          <SolidButton type="submit" className="h-14 md:h-[58px]">
            {SUBMIT}
          </SolidButton>
        </form>
      </div>
    </section>
  );
}
