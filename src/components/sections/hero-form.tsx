"use client";

import { useState } from "react";

// ───────── Copy for this form: edit the words here ─────────
const TITLE = "See how many more local customers you can get.";
const CTA = "Get Free Audit";
const MAX_MESSAGE = 300;

// ───────── Glass pieces ─────────
// Frosted grain: a tiny noise tile, laid over the glass at low opacity.
const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

// Fields are recessed wells (not white tiles), so they stay readable on glass.
const FIELD =
  "relative flex h-12 min-w-0 items-center gap-2 rounded-[13px] bg-white/40 px-3 transition-colors md:gap-3 md:px-4 focus-within:bg-white/60 focus-within:ring-1 focus-within:ring-ink/40 md:h-[52px]";
const INPUT =
  "min-w-0 flex-1 border-0 bg-transparent py-0 font-sans text-[15px] text-ink outline-none placeholder:text-[#5C5F66] focus-visible:outline-none";
const ICON = "size-[18px] flex-none text-ink/70";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={ICON}>
      {children}
    </svg>
  );
}

export default function HeroForm() {
  const [message, setMessage] = useState("");

  return (
    // the form itself is the glass: light tint, strong blur, hairline edge, a very slight dark shadow
    <form
      id="audit"
      onSubmit={(e) => e.preventDefault()}
      className="w-full scroll-mt-24 overflow-hidden rounded-[24px] border border-white/70 bg-white/25 shadow-[0_18px_40px_-22px_rgba(11,11,12,.22)] backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="relative p-4 md:p-6">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[.07] mix-blend-multiply" style={{ backgroundImage: GRAIN }} />

        <div className="relative">
          {/* desktop: the title sits on top */}
          <h2 className="m-0 hidden max-w-[20ch] font-serif font-medium leading-[1.15] tracking-[-0.03em] text-ink md:block md:text-[clamp(22px,1.8vw,26px)]">{TITLE}</h2>

          <div className="grid grid-cols-2 gap-3 md:mt-6 md:flex md:flex-col">
            <label className={FIELD}>
              <Icon>
                <circle cx="12" cy="8" r="3.6" />
                <path d="M4.5 20c.9-3.6 3.9-5.5 7.5-5.5s6.6 1.9 7.5 5.5" />
              </Icon>
              <input name="name" type="text" autoComplete="name" placeholder="Name" aria-label="Name" className={INPUT} />
            </label>

            <label className={FIELD}>
              <Icon>
                <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
                <path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1" />
              </Icon>
              <input name="website" type="text" inputMode="url" autoComplete="url" placeholder="Website" aria-label="Website" className={INPUT} />
            </label>

            <div className={FIELD}>
              <Icon>
                <path d="M5 4h3.5l1.7 4.4-2.2 1.4a11 11 0 0 0 5.2 5.2l1.4-2.2L19 14.5V18a1.5 1.5 0 0 1-1.5 1.5A13.5 13.5 0 0 1 3.5 5.5 1.5 1.5 0 0 1 5 4z" />
              </Icon>
              <input name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" aria-label="Phone Number" className={INPUT} />
            </div>

            <label className={FIELD}>
              <Icon>
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                <path d="M4 7l8 6 8-6" />
              </Icon>
              <input name="email" type="email" autoComplete="email" placeholder="Email" aria-label="Email" className={INPUT} />
            </label>

            <label className={`${FIELD} col-span-2 h-auto items-start pb-9 pt-4 md:h-auto`}>
              <Icon>
                <path d="M5 5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 16h-7l-4.5 3.5V16H5a1.5 1.5 0 0 1-1.5-1.5v-8A1.5 1.5 0 0 1 5 5z" />
                <path d="M8 9.5h8M8 12.5h5" />
              </Icon>
              <textarea
                name="message"
                rows={3}
                maxLength={MAX_MESSAGE}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                aria-label="How can we help you?"
                className={`${INPUT} min-h-[64px] resize-y leading-normal`}
              />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-2.5 right-4 font-sans text-[12px] text-[#5C5F66]">
                {message.length}/{MAX_MESSAGE}
              </span>
            </label>
          </div>

          <div className="mt-5 flex justify-end md:mt-6">
            {/* phones: the title sits here, left of the button */}
            <h2 className="m-0 mr-auto max-w-[22ch] self-center font-serif text-[17px] font-medium leading-[1.2] tracking-[-0.02em] text-ink md:hidden">{TITLE}</h2>
            <button
              type="submit"
              aria-label={CTA}
              className="group flex cursor-pointer items-center gap-3 border-0 bg-transparent p-0 font-sans text-[16px] font-medium text-ink"
            >
              <span className="flex size-12 flex-none items-center justify-center rounded-full bg-ink text-white transition-transform duration-200 group-hover:-translate-y-px">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5 transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M4 12h16M14 6l6 6-6 6" />
                </svg>
              </span>
              <span className="hidden md:inline">{CTA}</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
