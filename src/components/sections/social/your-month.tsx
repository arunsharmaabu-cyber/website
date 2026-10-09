import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/02", name: "Your month" };
const HEADING = ["Planned. Posted.", "Answered."];
const INTRO = "You get the calendar up front. We post, watch your inbox and pass you every message that asks for a quote.";
const MONTH = { name: "October", posts: "18 posts" };
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
type Kind = "Reel" | "Photo" | "Story" | "Carousel";
const LEGEND: Kind[] = ["Reel", "Photo", "Story", "Carousel"];
// October 2026 starts on a Thursday. Each week lists [date, month-day-is-in-October] for Mon..Sun
const WEEKS: number[][] = [
  [28, 29, 30, 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31, 1],
];
const POSTS: Record<number, Kind> = { 1: "Photo", 2: "Story", 5: "Reel", 7: "Carousel", 8: "Photo", 9: "Story", 12: "Reel", 14: "Photo", 15: "Carousel", 16: "Story", 19: "Reel", 21: "Photo", 22: "Story", 23: "Carousel", 26: "Reel", 28: "Photo", 29: "Story", 30: "Carousel" };
const STATS = [
  { v: "4 min", l: "average reply time" },
  { v: "86", l: "messages in the month" },
  { v: "21", l: "jobs booked from social" },
];
const NOTE = "Sample data · replace with real client numbers";

const chip: Record<Kind, string> = {
  Reel: "bg-accent text-white",
  Photo: "bg-ink text-white",
  Story: "border border-[#C9CBD1] bg-white text-ink",
  Carousel: "bg-[#DADCE1] text-ink",
};

// the first three cells (Sep 28-30) and the last cell (Nov 1) are outside the month
const inMonth = (wi: number, di: number) => !((wi === 0 && di < 3) || (wi === WEEKS.length - 1 && di === 6));

function Chip({ kind }: { kind: Kind }) {
  return <span className={`block rounded-[3px] px-2 py-[3px] text-[11px] font-semibold ${chip[kind]}`}>{kind}</span>;
}

export default function YourMonth() {
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
          <p data-rise className="m-0 max-w-[340px] text-[15px] leading-normal text-[#3A3C42] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        <div data-rise className="rounded-[6px] bg-white p-4 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[.08em] text-[#6B6E76]">
            <span>
              {MONTH.name} · {MONTH.posts}
            </span>
            <span className="flex flex-wrap items-center gap-x-4 gap-y-1 normal-case tracking-normal">
              {LEGEND.map((k) => (
                <span key={k} className="flex items-center gap-1.5 text-[11px]">
                  <i className={`size-2.5 rounded-[2px] ${k === "Story" ? "border border-[#C9CBD1]" : chip[k].split(" ")[0]}`} />
                  {k}
                </span>
              ))}
            </span>
          </div>

          {/* desktop calendar */}
          <div className="mt-4 hidden md:block">
            <div className="grid grid-cols-7 gap-x-5 border-b border-dashed border-[#C9CBD1] pb-2 font-mono text-[9px] uppercase tracking-[.08em] text-[#9A9DA5]">
              {DAYS.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            {WEEKS.map((w, wi) => (
              <div key={wi} className="grid grid-cols-7 gap-x-5 border-b border-dashed border-[#E3E5EA] py-2.5">
                {w.map((d, di) => {
                  const inM = inMonth(wi, di);
                  const kind = inM ? POSTS[d] : undefined;
                  return (
                    <div key={di} className="flex min-h-[44px] flex-col gap-1.5">
                      <span className={`text-[11px] ${inM ? "text-ink" : "text-[#C9CBD1]"}`}>{d}</span>
                      {kind && <Chip kind={kind} />}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* mobile: one line per week */}
          <ol className="m-0 mt-4 flex list-none flex-col p-0 md:hidden">
            {WEEKS.map((w, wi) => {
              const items = w.map((d, di) => ({ d, di, kind: inMonth(wi, di) ? POSTS[d] : undefined })).filter((x) => x.kind);
              return (
                <li key={wi} className="border-t border-dashed border-[#E3E5EA] py-3">
                  <p className="m-0 pb-2 font-mono text-[9px] uppercase tracking-[.08em] text-[#9A9DA5]">
                    Week of {w[0] > 20 && wi === 0 ? "Sep " : "Oct "}
                    {w[0]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((x) => (
                      <span key={x.d} className="flex items-center gap-1.5 text-[11px] text-[#6B6E76]">
                        {DAYS[x.di]} {x.d}
                        <Chip kind={x.kind as Kind} />
                      </span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[#EDEEF1] pt-6">
            {STATS.map((s) => (
              <div key={s.l} className="flex flex-col gap-1">
                <span className="text-[28px] font-medium leading-none tracking-[-0.04em] md:text-[40px]">{s.v}</span>
                <span className="text-[11px] text-[#6B6E76] md:text-[13px]">{s.l}</span>
              </div>
            ))}
          </div>
          <p className="m-0 pt-5 font-mono text-[9px] uppercase tracking-[.08em] text-accent">{NOTE}</p>
        </div>
      </div>
    </section>
  );
}
