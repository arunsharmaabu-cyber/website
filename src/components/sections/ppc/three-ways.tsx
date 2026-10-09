import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "Where we run ads" };
const HEADING = ["Three ways to", "get the phone ringing."];
const INTRO = "We pick the mix that fits your trade, your area and your budget.";
const GOOGLE = {
  n: "01",
  name: "Google Ads",
  text: "Show up at the top when people search for what you do. You pay when someone clicks, and we only keep what brings calls.",
  title: "Searches we show up for",
  rows: [
    ["roof repair near me", "Top of page"],
    ["roof leak repair dallas", "Top of page"],
    ["emergency roofer plano", "Top of page"],
    ["storm damage roof", "Top 3"],
  ],
};
const LSA = {
  n: "02",
  name: "Local Services Ads",
  text: "The Google Guaranteed badge sits above the other results. You pay per lead, not per click.",
  business: "Your Business Roofing",
  meta: "Google Guaranteed · Open now",
  rating: "4.9 (112 reviews)",
  buttons: ["Call", "Message"],
};
const REMARKETING = {
  n: "03",
  name: "Remarketing",
  text: "Bring back the people who looked at your site and did not call, with a short reminder as they browse.",
  banner: "Image placeholder · Banner",
  line: "Still need a roof?",
  button: "Free quote",
  caption: "Shown to people who visited your site and did not call.",
};

function Copy({ n, name, text }: { n: string; name: string; text: string }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-mono text-[11px] text-accent">{n}</span>
      <h3 className="m-0 text-[26px] font-medium tracking-[-0.03em] md:text-[32px]">{name}</h3>
      <p className="m-0 max-w-[340px] text-[14px] leading-[1.5] text-[#6B6E76] md:text-[15px]">{text}</p>
    </div>
  );
}

export default function ThreeWays() {
  return (
    <section className="box-border w-full bg-panel px-5 py-14 md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="flex flex-col gap-10 md:gap-[clamp(28px,5vh,48px)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col gap-5">
            <SectionLabel number={LABEL.n} name={LABEL.name} />
            <h2 className="m-0 text-[40px] font-medium leading-[.98] tracking-[-0.05em] md:text-[clamp(40px,4.2vw,64px)]">
              <MaskLines lines={HEADING} />
            </h2>
          </div>
          <p data-rise className="m-0 max-w-[300px] text-[15px] leading-normal text-[#3A3C42] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <div data-rise-group className="flex flex-col border-b border-dashed border-[#A9ACB4]">
          {/* 01 Google Ads */}
          <div data-rise className="grid grid-cols-1 items-center gap-6 border-t border-dashed border-[#A9ACB4] py-8 md:grid-cols-2 md:gap-16 md:py-10">
            <Copy n={GOOGLE.n} name={GOOGLE.name} text={GOOGLE.text} />
            <div className="rounded-[4px] bg-white p-5">
              <p className="m-0 font-mono text-[9px] uppercase tracking-[.1em] text-[#9A9DA5]">{GOOGLE.title}</p>
              <ul className="m-0 mt-3 flex list-none flex-col p-0">
                {GOOGLE.rows.map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between border-t border-[#EDEEF1] py-3 text-[13px] first:border-t-0">
                    {k}
                    <span className="font-mono text-[9px] uppercase tracking-[.08em] text-accent">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 02 Local Services Ads */}
          <div data-rise className="grid grid-cols-1 items-center gap-6 border-t border-dashed border-[#A9ACB4] py-8 md:grid-cols-2 md:gap-16 md:py-10">
            <div className="order-2 rounded-[4px] bg-white p-5 md:order-1">
              <div className="flex items-start gap-3">
                <span className="flex size-9 items-center justify-center rounded-[8px] bg-[#EEF1FB] text-[#3F5BD8]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 1.5l6 2.2v4.6c0 3.6-2.5 6.3-6 8.2-3.5-1.9-6-4.6-6-8.2V3.7z" />
                    <path d="M6.2 9l2 2 3.6-3.8" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <b className="text-[15px] font-semibold">{LSA.business}</b>
                  <span className="text-[11px] text-[#6B6E76]">{LSA.meta}</span>
                </div>
              </div>
              <p className="m-0 mt-3 flex items-center gap-1.5 text-[12px] text-[#6B6E76]">
                <span className="tracking-[2px] text-accent">★★★★★</span>
                {LSA.rating}
              </p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-ink px-5 py-2 text-[12px] font-semibold text-page">{LSA.buttons[0]}</span>
                <span className="rounded-full border border-[#C9CBD1] px-5 py-2 text-[12px] font-medium">{LSA.buttons[1]}</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Copy n={LSA.n} name={LSA.name} text={LSA.text} />
            </div>
          </div>

          {/* 03 Remarketing */}
          <div data-rise className="grid grid-cols-1 items-center gap-6 border-t border-dashed border-[#A9ACB4] py-8 md:grid-cols-2 md:gap-16 md:py-10">
            <Copy n={REMARKETING.n} name={REMARKETING.name} text={REMARKETING.text} />
            <div className="rounded-[4px] bg-white p-4">
              <div className="relative flex aspect-[16/8] items-end justify-between overflow-hidden rounded-[4px] bg-[#E3E4E8] [background-image:repeating-linear-gradient(135deg,transparent_0_9px,rgba(0,0,0,.035)_9px_10px)] p-3">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[3px] bg-white/70 px-2 py-1 font-mono text-[8px] uppercase tracking-[.08em] text-[#9A9DA5]">
                  {REMARKETING.banner}
                </span>
                <span className="relative rounded-[6px] bg-white px-3 py-1.5 text-[12px] font-medium">{REMARKETING.line}</span>
                <span className="relative rounded-full bg-ink px-3 py-1.5 text-[11px] font-semibold text-page">{REMARKETING.button}</span>
              </div>
              <p className="m-0 pt-3 text-[11px] text-[#6B6E76]">{REMARKETING.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
