import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "Start from your goal" };
const HEADING = ["I want…"];
const INTRO = "Find the sentence that sounds like you. It points to the service that does the job.";
const GOALS = [
  { text: "More calls from Google Maps", service: "Local SEO", href: "/marketing/local-seo" },
  { text: "To rank for “roof repair”", service: "SEO", href: "/marketing/seo" },
  { text: "To show up when people ask ChatGPT", service: "GEO", href: "/marketing/geo" },
  { text: "Answers that win Google AI Overviews", service: "AI search optimization", href: "/marketing/ai-search-optimization" },
  { text: "Leads this week, not in 90 days", service: "Paid advertising & PPC", href: "/marketing/paid-advertising-ppc" },
  { text: "People who trust us before they call", service: "Content marketing", href: "/marketing/content-marketing" },
];

export default function GoalSwitchboard() {
  return (
    <section id="goal" className="box-border w-full scroll-mt-20 bg-[#0B0B0C] px-5 py-14 text-[#F7F7F8] md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.6fr)] md:gap-16">
        <div className="flex flex-col gap-6">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <h2 className="m-0 text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,4.8vw,72px)]">
            <MaskLines lines={HEADING} />
          </h2>
          <p data-rise className="m-0 max-w-[320px] text-[15px] leading-normal text-[#C9CBD1] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <ul data-rise-group className="m-0 flex list-none flex-col border-b border-dashed border-[#3A3C42] p-0">
          {GOALS.map((g, i) => (
            <li key={g.text} data-rise className="border-t border-dashed border-[#3A3C42]">
              <a
                href={g.href}
                className="group grid grid-cols-[28px_1fr] items-center gap-x-3 gap-y-2 py-5 text-[#F7F7F8] no-underline md:grid-cols-[48px_1fr_auto] md:gap-x-6 md:py-[22px]"
              >
                <span className="font-mono text-[12px] text-[#9A9DA5] transition-colors group-hover:text-accent group-focus-visible:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[22px] font-semibold leading-[1.08] tracking-[-0.035em] md:text-[clamp(22px,2.1vw,32px)]">{g.text}</span>
                <span className="col-start-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.08em] text-[#9A9DA5] transition-colors group-hover:text-accent group-focus-visible:text-accent md:col-start-3">
                  {g.service}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
