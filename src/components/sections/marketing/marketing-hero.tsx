import ArrowSVG from "@/components/ui/arrow-svg";
import MaskLines from "@/components/ui/mask-lines";
import OutlineButton from "@/components/ui/outline-button";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/001", name: "Marketing" };
const HEADING = ["Seven ways", "to be found"];
const INTRO = "Pick the way that fits your business. Start with one, add the next when the first is working.";
const PRIMARY = { label: "Get my free audit", href: "/contact#audit" };
const SECONDARY = { label: "Find my service", href: "#goal" };
const CORE = "TECHX";
// The seven services sit on two rings (r = share of the box; angle in degrees, 0 = right, -90 = top)
const RINGS = [
  {
    r: 0.3,
    delay: "0s",
    nodes: [
      { label: "SEO", href: "/marketing/seo", angle: -45 },
      { label: "Local SEO", href: "/marketing/local-seo", angle: 45, on: true },
      { label: "Content", href: "/marketing/content-marketing", angle: 135 },
      { label: "GEO", href: "/marketing/geo", angle: 225 },
    ],
  },
  {
    r: 0.43,
    delay: "2.2s",
    nodes: [
      { label: "AI search", href: "/marketing/ai-search-optimization", angle: -90 },
      { label: "Paid ads", href: "/marketing/paid-advertising-ppc", angle: 0 },
      { label: "Social", href: "/marketing/social-media-marketing", angle: 180 },
    ],
  },
];

export default function MarketingHero() {
  return (
    <section className="relative box-border w-full overflow-hidden bg-panel px-5 pb-14 pt-[104px] md:px-10 md:pb-[clamp(48px,8vh,88px)] md:pt-[clamp(112px,15vh,160px)]">
      <div className="relative flex flex-col gap-10 md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-center md:gap-6">
        <div className="relative flex min-w-0 flex-col gap-[22px] md:gap-[30px]">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <h1 className="m-0 text-[56px] font-semibold leading-[.9] tracking-[-0.06em] md:text-[clamp(64px,8vw,116px)]">
            <MaskLines lines={HEADING} accent />
          </h1>
          <p data-rise className="m-0 max-w-[460px] text-[15px] leading-normal text-[#3A3C42] md:text-[18px] md:leading-[1.5]">
            {INTRO}
          </p>
          <div data-rise className="flex flex-col gap-3 md:flex-row md:flex-wrap">
            <a
              href={PRIMARY.href}
              className="flex min-h-[52px] items-center justify-center gap-3 rounded-[4px] bg-ink px-6 font-mono text-[12px] font-medium uppercase tracking-[.12em] text-page no-underline md:inline-flex"
            >
              {PRIMARY.label}
              <ArrowSVG className="size-4" />
            </a>
            <OutlineButton href={SECONDARY.href} className="min-h-12 justify-center gap-[10px] px-5 text-[12px] tracking-[.1em]">
              {SECONDARY.label}
            </OutlineButton>
          </div>
        </div>

        {/* radar: two rings pulse out from the core; the seven services sit still on the rings (4 inner, 3 outer) */}
        <div
          aria-label="The seven marketing services"
          role="group"
          className="relative mx-auto size-[var(--s)] max-w-full flex-none [--s:304px] md:[--s:530px]"
        >
          {RINGS.map((ring, ri) => (
            <div key={ri}>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#A9ACB4]"
                style={{ width: `calc(var(--s) * ${ring.r * 2})`, height: `calc(var(--s) * ${ring.r * 2})` }}
              />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span
                  className="mk-radar rounded-full border border-accent"
                  style={{ width: `calc(var(--s) * ${ring.r * 2})`, height: `calc(var(--s) * ${ring.r * 2})`, animationDelay: ring.delay }}
                />
              </span>
              {ring.nodes.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  className={`absolute inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ink px-[14px] py-[9px] text-[13px] font-semibold tracking-[-0.02em] no-underline shadow-[0_6px_18px_rgba(11,11,12,.08)] transition-colors duration-200 hover:bg-ink hover:text-page md:px-[18px] md:py-[11px] md:text-[15px] ${
                    n.on ? "bg-ink text-page" : "bg-white text-ink"
                  }`}
                  style={{
                    left: `calc(50% + var(--s) * ${(ring.r * Math.cos((n.angle * Math.PI) / 180)).toFixed(4)})`,
                    top: `calc(50% + var(--s) * ${(ring.r * Math.sin((n.angle * Math.PI) / 180)).toFixed(4)})`,
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <span className="size-[6px] flex-none rounded-full bg-accent" />
                  {n.label}
                  {n.on && <span aria-hidden="true" className="a-ping pointer-events-none absolute -inset-[5px] rounded-full border-2 border-accent" />}
                </a>
              ))}
            </div>
          ))}

          <div
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink font-semibold tracking-[.14em] text-page shadow-[0_0_0_10px_#EDEEF1,0_0_0_11px_#0B0B0C]"
            style={{ width: "calc(var(--s) * .234)", height: "calc(var(--s) * .234)", fontSize: "calc(var(--s) * .0358)" }}
          >
            <span className="pl-[.14em]">{CORE}</span>
            <span className="absolute right-[16%] top-[16%] size-[10px] rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
