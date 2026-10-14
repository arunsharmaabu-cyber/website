"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ───────── Copy for this section: edit the words here ─────────
// Sample testimonials: swap in real quotes, names and companies. Add a photo by setting `image` (a path in
// /public, e.g. "/people/marcus.jpg"); without one the card shows the person's initials.
const HEADING = "What our clients say";
const TESTIMONIALS: { quote: string; name: string; role: string; company: string; image?: string }[] = [
  {
    quote: "Our phone started ringing within the first month. Now we know exactly which calls came from Google and which came from the ads.",
    name: "Marcus Reed",
    role: "Owner",
    company: "Lone Star Roofing",
  },
  {
    quote: "They rebuilt our site and our Google profile in a few weeks. We are on the map before every competitor in Frisco.",
    name: "Dana Whitfield",
    role: "General Manager",
    company: "Cool Breeze Heating & Air",
  },
  {
    quote: "Plain-English reports every month and no lock-in. New patient calls are up and we always know where they come from.",
    name: "Priya Shah",
    role: "Practice Owner",
    company: "Bright Family Dental",
  },
];

// On phones the cards slide sideways and the next one comes up on its own after this long.
const AUTO_MS = 5000;

// The signature is set in an italic script-like face for now. To use a real signature font later, change only
// this class (for example "font-signature" once that font is added in globals.css).
const SIGNATURE = "font-serif italic";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w.charAt(0))
    .slice(0, 2)
    .join("");

export default function Testimonials() {
  const section = useRef<HTMLElement>(null);
  const scroller = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [touching, setTouching] = useState(false);

  // only run the auto-advance while the section is on screen
  useEffect(() => {
    const el = section.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // slide the row so card `i` sits in the middle
  const goTo = (i: number) => {
    const row = scroller.current;
    const card = row?.children[i] as HTMLElement | undefined;
    if (!row || !card) return;
    row.scrollTo({ left: card.offsetLeft - (row.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
  };

  // which card is in the middle, from the scroll position
  const onScroll = () => {
    const row = scroller.current;
    const first = row?.children[0] as HTMLElement | undefined;
    const second = row?.children[1] as HTMLElement | undefined;
    if (!row || !first || !second) return;
    const step = second.offsetLeft - first.offsetLeft;
    const i = Math.min(TESTIMONIALS.length - 1, Math.max(0, Math.round(row.scrollLeft / step)));
    setActive((prev) => (prev === i ? prev : i));
  };

  // every 5 seconds the next card slides in (phones only). The timer restarts whenever the card changes, and it
  // waits while a finger is on the row. Nothing runs with reduced motion.
  useEffect(() => {
    if (!inView || touching) return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => goTo((active + 1) % TESTIMONIALS.length), AUTO_MS);
    return () => window.clearTimeout(id);
  }, [active, inView, touching]);

  return (
    <section ref={section} id="testimonials" className="box-border w-full bg-panel">
      <div className="box-border flex flex-col gap-8 px-5 py-16 md:gap-[clamp(32px,5vh,48px)] md:px-10 md:py-[clamp(72px,10vh,112px)]">
        <h2 className="m-0 text-[36px] font-semibold leading-[.98] tracking-[-0.055em] md:text-[clamp(36px,4vw,60px)]">
          {HEADING}
          <span className="text-accent">.</span>
        </h2>

        <div className="flex flex-col gap-5">
          <ul
            ref={scroller}
            onScroll={onScroll}
            onPointerDown={() => setTouching(true)}
            onPointerUp={() => setTouching(false)}
            onPointerCancel={() => setTouching(false)}
            onTouchEnd={() => setTouching(false)}
            className="m-0 -mx-5 flex list-none snap-x snap-mandatory gap-3 overflow-x-auto p-0 px-5 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t) => (
              <li key={t.name} className="flex w-[86%] flex-none snap-center md:w-auto">
                <figure className="m-0 flex min-h-[380px] w-full flex-col justify-between gap-10 rounded-2xl bg-white p-6 md:min-h-[clamp(400px,52vh,470px)] md:p-8">
                  <div className="flex flex-col gap-7">
                    {/* a small photo, top left */}
                    {t.image ? (
                      <Image src={t.image} alt="" width={48} height={48} className="size-12 rounded-full object-cover" />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex size-12 items-center justify-center rounded-full bg-ink text-[16px] font-semibold tracking-[.02em] text-page"
                      >
                        {initials(t.name)}
                      </span>
                    )}
                    <blockquote className="m-0 text-[18px] leading-[1.45] tracking-[-0.01em] text-ink md:text-[20px]">&ldquo;{t.quote}&rdquo;</blockquote>
                  </div>

                  {/* signature, then role and company */}
                  <figcaption>
                    <div className={`${SIGNATURE} text-[34px] leading-none text-ink md:text-[38px]`}>{t.name}</div>
                    <div className="mt-2 text-[15px] text-[#5C5F66]">
                      {t.role} at {t.company}
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          {/* three dots (phones): which card you are on, and a way to jump */}
          <div className="flex items-center justify-center gap-1 md:hidden" role="group" aria-label="Choose a testimonial">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial ${i + 1} of ${TESTIMONIALS.length}`}
                aria-current={active === i}
                onClick={() => goTo(i)}
                className="flex size-8 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
              >
                <span className={`block h-2 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-ink" : "w-2 bg-[#B8BBC2]"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
