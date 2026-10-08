import MaskLines from "@/components/ui/mask-lines";

// ───────── Copy for this section: edit the words here ─────────
const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Consulting" },
];
const HEADING = ["A senior", "marketer in", "your corner"];
// The paper note on the right (sample findings)
const NOTE = {
  title: "Marketing audit — Your Business",
  sample: "Sample",
  findings: [
    "Site loads in 4.1s on mobile",
    "Phone number is not tappable",
    "11 reviews, 2 in the last year",
    "No call tracking on any page",
  ],
  handwritten: "Fix profile categories first.",
  page: "Audit note · p.2",
  stamp: "Reviewed",
};

export default function ConsultingHero() {
  return (
    <section className="relative box-border w-full overflow-hidden bg-panel px-5 pb-14 pt-[104px] md:px-10 md:pb-[clamp(48px,8vh,88px)] md:pt-[clamp(112px,15vh,160px)]">
      <div className="flex flex-col gap-12 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center md:gap-12">
        <div className="flex min-w-0 flex-col gap-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[.1em]">
            {CRUMBS.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? (
                  <a href={c.href} className="no-underline hover:text-accent">
                    {c.label}
                  </a>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="m-0 text-[52px] font-semibold leading-[.92] tracking-[-0.06em] md:text-[clamp(56px,7vw,112px)]">
            <MaskLines lines={HEADING} accent />
          </h1>
        </div>

        {/* one paper note: findings, a handwritten line, a stamp */}
        <div data-rise-group className="relative mx-auto w-full max-w-[520px] md:rotate-[1.5deg]">
          <div data-rise className="rounded-[6px] bg-white p-6 shadow-[0_30px_60px_rgba(11,11,12,.1)] md:p-9">
            <div className="flex items-center justify-between gap-4 border-b border-dashed border-[#A9ACB4] pb-4 font-mono text-[11px] uppercase tracking-[.08em]">
              <span>{NOTE.title}</span>
              <span className="text-accent">{NOTE.sample}</span>
            </div>
            <ol className="m-0 flex list-none flex-col p-0">
              {NOTE.findings.map((f, i) => (
                <li key={f} className="flex items-baseline gap-4 border-b border-dashed border-[#D3D5DB] py-4 text-[17px] leading-[1.3] md:text-[20px]">
                  <span className="font-mono text-[12px] text-[#9A9DA5]">{String(i + 1).padStart(2, "0")}</span>
                  {f}
                </li>
              ))}
            </ol>
            <p className="m-0 pt-6 font-serif text-[22px] italic leading-none text-accent md:text-[26px]">{NOTE.handwritten}</p>
            <p className="m-0 pt-6 font-mono text-[11px] uppercase tracking-[.08em] text-[#9A9DA5]">{NOTE.page}</p>
          </div>
          <span
            data-stamp
            className="absolute -right-2 bottom-8 -rotate-[8deg] rounded-[4px] border-2 border-accent px-4 py-2 font-mono text-[14px] font-semibold uppercase tracking-[.16em] text-accent md:-right-6 md:text-[18px]"
          >
            {NOTE.stamp}
          </span>
        </div>
      </div>
    </section>
  );
}
