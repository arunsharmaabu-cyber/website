import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "What we do" };
const HEADING = ["Make your site", "easy to quote."];
const INTRO = "AI Overviews and voice assistants quote pages they can read quickly and trust. We make yours the easy one to use.";
const PAGE = {
  brand: "Your Business Roofing",
  title: "Roof replacement in Plano",
  answer: ["A roof replacement in Plano costs ", "$9,000 to $18,000."],
  schema: "{ } RoofingContractor · valid",
  speed: ["Page speed", "0.9 s"],
  faqs: ["How long does a re-roof take?", "Do you offer financing?"],
  footer: "Your Business Roofing · 123 Main St, Plano, TX · (214) 000-0000",
};
const POINTS = [
  { n: 1, name: "Clear answers", text: "A short, direct answer near the top of every page." },
  { n: 2, name: "Structured data", text: "Markup that labels your services, areas and hours." },
  { n: 3, name: "Fast and readable", text: "Clean code and quick pages that Google reads in full." },
  { n: 4, name: "Facts in one place", text: "Your name, address and phone stated the same everywhere." },
];

function Dot({ n }: { n: number }) {
  return <span className="flex size-[22px] flex-none items-center justify-center rounded-full bg-accent font-mono text-[10px] font-semibold text-white">{n}</span>;
}

function Point({ p, side }: { p: (typeof POINTS)[number]; side: "left" | "right" }) {
  return (
    <div data-rise className={`flex flex-col gap-1.5 ${side === "left" ? "md:items-end md:text-right" : ""}`}>
      <span className="flex items-center gap-2.5 text-[18px] font-medium tracking-[-0.02em]">
        {side === "right" && <Dot n={p.n} />}
        {p.name}
        {side === "left" && <Dot n={p.n} />}
      </span>
      <p className="m-0 max-w-[260px] text-[13px] leading-[1.45] text-[#6B6E76]">{p.text}</p>
    </div>
  );
}

export default function EasyToQuote() {
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
          <p data-rise className="m-0 max-w-[380px] text-[15px] leading-normal text-[#3A3C42] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)_minmax(0,1fr)] md:items-stretch md:gap-10">
          {/* left callouts (desktop) */}
          <div className="hidden flex-col justify-between py-4 md:flex md:pb-8 md:pt-0">
            <div className="pt-2">
              <Point p={POINTS[0]} side="left" />
            </div>
            <Point p={POINTS[2]} side="left" />
          </div>

          {/* the page mock */}
          <div data-rise className="relative rounded-[8px] bg-white p-4 shadow-[0_30px_60px_-30px_rgba(11,11,12,.25)] md:p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="m-0 text-[10px] text-[#6B6E76]">{PAGE.brand}</p>
                <p className="m-0 pt-1 text-[16px] font-semibold tracking-[-0.02em]">{PAGE.title}</p>
              </div>
              <span className="flex gap-1 pt-1">
                {[0, 1, 2].map((i) => (
                  <i key={i} className="h-1 w-5 rounded-full bg-[#E3E5EA]" />
                ))}
              </span>
            </div>
            <div className="relative mt-4 rounded-[4px] border-l-2 border-accent bg-accent/10 px-3 py-3 text-[12px] leading-[1.35]">
              {PAGE.answer[0]}
              <b className="font-semibold">{PAGE.answer[1]}</b>
              <span className="absolute -right-[11px] top-1/2 -translate-y-1/2">
                <Dot n={1} />
              </span>
            </div>
            <div className="mt-3 flex flex-col gap-1.5">
              <i className="h-1.5 w-full rounded-full bg-[#E3E5EA]" />
              <i className="h-1.5 w-[70%] rounded-full bg-[#E3E5EA]" />
            </div>
            <div className="relative mt-4 rounded-[4px] border border-[#E3E5EA] px-3 py-2 font-mono text-[9px] uppercase tracking-[.06em] text-[#6B6E76]">
              {PAGE.schema}
              <span className="absolute -right-[11px] top-1/2 -translate-y-1/2">
                <Dot n={2} />
              </span>
            </div>
            <div className="relative mt-2 flex justify-between rounded-[4px] border border-[#E3E5EA] py-2 pl-3 pr-7 font-mono text-[9px] uppercase tracking-[.06em] text-[#6B6E76]">
              <span>{PAGE.speed[0]}</span>
              <b className="font-semibold text-ink">{PAGE.speed[1]}</b>
              <span className="absolute -right-[11px] top-1/2 -translate-y-1/2">
                <Dot n={3} />
              </span>
            </div>
            <div className="mt-3 flex flex-col">
              {PAGE.faqs.map((f) => (
                <span key={f} className="flex items-center justify-between border-t border-[#EDEEF1] py-2 text-[11px]">
                  {f}
                  <span className="text-accent">+</span>
                </span>
              ))}
            </div>
            <div className="relative mt-2 border-t border-[#EDEEF1] pt-3 text-[9px] text-[#6B6E76]">
              {PAGE.footer}
              <span className="absolute -right-[11px] top-[60%] -translate-y-1/2">
                <Dot n={4} />
              </span>
            </div>
          </div>

          {/* right callouts (desktop) */}
          <div className="hidden flex-col justify-between py-4 md:flex md:pb-0 md:pt-[14%]">
            <Point p={POINTS[1]} side="right" />
            <div className="pb-4">
              <Point p={POINTS[3]} side="right" />
            </div>
          </div>

          {/* mobile list */}
          <div className="flex flex-col gap-5 md:hidden">
            {POINTS.map((p) => (
              <Point key={p.n} p={p} side="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
