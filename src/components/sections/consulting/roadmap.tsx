import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "Roadmap" };
const HEADING = ["The 90-day", "roadmap"];
const INTRO = "Four tracks, twelve weeks. Every audit ends with a plan like this one, sized to your budget and your team.";
const MONTHS = ["Month 1 · Foundation", "Month 2 · Build", "Month 3 · Prove"];
// start / end are weeks (1 to 12)
const TRACKS = [
  { name: "Foundations", note: "Audit and tracking", start: 1, end: 4 },
  { name: "Get found", note: "Profile, service pages and SEO", start: 3, end: 8 },
  { name: "Get trusted", note: "Review system, stories and photos", start: 5, end: 10 },
  { name: "Get called", note: "Call tracking, ads and follow-up", start: 8, end: 12 },
];
const FOOT = "Sample roadmap · yours will look different";

export default function Roadmap() {
  return (
    <section className="box-border w-full bg-panel px-5 py-14 md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="flex flex-col gap-10 md:gap-[clamp(32px,6vh,64px)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col gap-5">
            <SectionLabel number={LABEL.n} name={LABEL.name} />
            <h2 className="m-0 text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,4.8vw,72px)]">
              <MaskLines lines={HEADING} />
            </h2>
          </div>
          <p data-rise className="m-0 max-w-[380px] text-[15px] leading-normal text-[#3A3C42] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <div data-rise className="flex flex-col gap-6 rounded-[6px] bg-white p-5 md:p-8">
          <div className="hidden grid-cols-3 border-b border-dashed border-[#A9ACB4] pb-3 font-mono text-[11px] uppercase tracking-[.08em] text-[#9A9DA5] md:ml-[200px] md:grid">
            {MONTHS.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
          {TRACKS.map((t) => (
            <div key={t.name} className="flex flex-col gap-2 md:grid md:grid-cols-[200px_1fr] md:items-center md:gap-0">
              <span className="text-[20px] font-semibold tracking-[-0.03em]">{t.name}</span>
              <div className="flex flex-col gap-2">
                <div className="relative h-3 w-full rounded-full bg-[#F3F4F6]">
                  <span
                    data-grow
                    className="absolute inset-y-0 rounded-full bg-ink"
                    style={{ left: `${((t.start - 1) / 12) * 100}%`, width: `${((t.end - t.start + 1) / 12) * 100}%` }}
                  />
                </div>
                <span className="text-[14px] text-[#3A3C42]">{t.note}</span>
              </div>
            </div>
          ))}
        </div>
        <p data-rise className="m-0 font-mono text-[11px] uppercase tracking-[.08em] text-accent">
          {FOOT}
        </p>
      </div>
    </section>
  );
}
