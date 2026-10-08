import Image from "next/image";
import FieldRow from "@/components/ui/field-row";
import SolidButton from "@/components/ui/solid-button";

// ───────── Copy for this section: edit the words here ─────────
const SEARCH_TEXT = "roofing company dallas";
const YOU = {
  name: "Your Business",
  detail: "Roofing Contractor · Dallas, TX",
  rating: "4.9",
  reviewsDesktop: "(320+ reviews)",
  reviewsMobile: "(320+)",
};
const COMPETITORS = [
  { n: "02", name: "Competitor Business", rating: "3.8 (70+ reviews)", bar: "w-[60%] md:w-[62%]", dim: "opacity-75" },
  { n: "03", name: "Another Competitor", rating: "3.5 (20+ reviews)", bar: "w-[52%] md:w-[56%]", dim: "opacity-55" },
];

// Order here = left column top→bottom, then right column top→bottom.
const CALLOUTS = ["Local visibility", "Qualified leads", "Higher rankings", "More customers"];

const H1_LINE_1 = "Dallas calls";
const H1_LINE_2A = "the first name";
const H1_LINE_2B = "it sees";
const SUBLINE = "We make sure that name is yours.";
const PARAGRAPH = "SEO, web design, paid ads & local growth systems built to get your business seen first in DFW.";

const FORM_TITLE = "Free local growth audit / 24h";
const FORM_INTRO = "See exactly what's keeping your business from being found, and how to fix it.";
const INDUSTRIES = ["Roofing", "HVAC", "Plumbing", "Dental", "Law firm", "Other"];
const SUBMIT = "Get my free audit";

// ───────── Small local pieces (no copy of their own) ─────────
const monoLabel = "font-mono uppercase tracking-[.08em]";

function Leader({ path, className }: { path: string; className: string }) {
  return (
    <svg
      width="30"
      height="26"
      viewBox="0 0 30 26"
      fill="none"
      stroke="#8D9098"
      strokeWidth="1"
      strokeDasharray="3 3"
      aria-hidden="true"
      className={`flex-none ${className}`}
    >
      <path d={path} />
    </svg>
  );
}

function Plus({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={`flex-none ${className}`}>
      <path d="M7 1v12M1 7h12" />
    </svg>
  );
}

function Stars({ className }: { className: string }) {
  return <span className={`tracking-[2px] ${className}`}>★★★★★</span>;
}

// Desktop-only callout (label, orange dot, dotted leader to the card)
function Callout({ text, side, index, flat = false }: { text: string; side: "left" | "right"; index: 0 | 1; flat?: boolean }) {
  const [first, ...rest] = text.split(" ");
  const label = (
    <div className={`${monoLabel} text-[11px] leading-normal md:text-[12px] ${!flat && side === "right" && index === 1 ? "mt-[18px]" : ""}`}>
      {first}
      <br />
      {rest.join(" ")}
    </div>
  );
  if (side === "left") {
    const path = index === 0 ? "M0 0 L8 0 L20 22 L30 22" : "M0 26 L8 26 L20 4 L30 4";
    return (
      <div className="flex items-start gap-2">
        {label}
        <Plus className="mt-[3px]" />
        <Leader path={path} className={index === 0 ? "mt-[9px] -ml-1.5" : "-mt-2.5 -ml-1.5"} />
      </div>
    );
  }
  if (flat) {
    return (
      <div className="flex items-start gap-2">
        <Leader path={index === 0 ? "M0 22 L10 22 L22 4 L30 4" : "M0 4 L10 4 L22 22 L30 22"} className="-ml-1 mt-0.5" />
        <Plus className="-ml-1.5 mt-[3px]" />
        {label}
      </div>
    );
  }
  const path = index === 0 ? "M0 26 L10 26 L22 4 L30 4" : "M0 0 L10 0 L22 22 L30 22";
  return (
    <div className="flex items-start gap-2">
      <Leader path={path} className={index === 0 ? "-mt-2.5 -ml-1" : "mt-[9px] -ml-1"} />
      <Plus className={`-ml-1.5 ${index === 0 ? "mt-[3px]" : "mt-6"}`} />
      {label}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative box-border w-full overflow-hidden bg-panel pt-[68px] md:flex md:h-[100svh] md:pt-[76px]">
      <div className="box-border flex flex-col bg-panel px-5 pb-7 pt-3 md:flex-1 md:px-10 md:pb-0 md:pt-0">
        <div className="mt-3 flex flex-col md:mt-0 md:flex-1 md:flex-row md:items-stretch md:gap-x-[clamp(32px,5vw,72px)]">
          {/* LEFT COLUMN */}
          <div className="flex min-w-0 flex-col md:flex-[1.3_1_0%] md:justify-center md:gap-[clamp(4px,1.2vh,22px)]">
            <div className="relative z-[1] flex items-stretch justify-center">
              {/* desktop callouts, left */}
              <div className="hidden flex-none basis-[136px] flex-col justify-between pb-16 pt-[52px] md:flex">
                <Callout text={CALLOUTS[0]} side="left" index={0} />
                <Callout text={CALLOUTS[1]} side="left" index={1} />
              </div>

              {/* search card */}
              <div className="relative min-w-0 flex-1 pb-2 pl-[14px] pt-3 md:max-w-[470px] md:basis-0 md:p-0 md:pb-0 md:pt-[clamp(6px,2vh,30px)]">
                <div className="relative [transform:perspective(1400px)_rotateY(9deg)_rotateZ(-4.5deg)]">
                  <div className="absolute inset-0 translate-x-[-18px] translate-y-[-10px] rounded-2xl border border-[#E1E2E6] bg-[#F4F4F6] opacity-60 md:translate-x-[-26px] md:translate-y-[-14px] md:rounded-[18px]" />
                  <div className="absolute inset-0 translate-x-[-9px] translate-y-[-5px] rounded-2xl border border-[#DADCE1] bg-[#F6F6F8] opacity-85 md:translate-x-[-13px] md:translate-y-[-7px] md:rounded-[18px]" />
                  {/* thin card peeking out below (desktop) */}
                  <div className="absolute inset-0 translate-y-3 scale-x-[.94] rounded-2xl border border-[#DADCE1] bg-[#F6F6F8] opacity-60 md:translate-y-4 md:rounded-[18px]" />
                  <div className="relative flex flex-col gap-2 rounded-2xl border border-[#DADCE1] bg-[#F9F9FA] [mask-image:linear-gradient(to_bottom,#000_62%,transparent_98%)] p-3 shadow-[0_22px_30px_-18px_rgba(11,11,12,.25)] md:gap-[clamp(5px,1vh,10px)] md:rounded-[18px] md:p-[clamp(10px,1.8vh,16px)] md:shadow-[0_28px_40px_-20px_rgba(11,11,12,.25)]">
                    {/* search bar */}
                    <div className="flex items-center gap-[10px] rounded-full border border-[#DADCE1] bg-white px-[14px] py-[10px] md:gap-3 md:px-4 md:py-3">
                      <svg viewBox="0 0 18 18" fill="none" stroke="#0B0B0C" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" className="size-4 md:size-[18px]">
                        <circle cx="8" cy="8" r="5.5" />
                        <path d="M12.2 12.2L16 16" />
                      </svg>
                      <span className="flex-1 text-[14px] tracking-[-0.01em] md:text-[15px]">{SEARCH_TEXT}</span>
                      <svg viewBox="0 0 14 14" fill="none" stroke="#0B0B0C" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" className="size-3 md:size-[14px]">
                        <path d="M2 2l10 10M12 2L2 12" />
                      </svg>
                    </div>

                    {/* result 01 */}
                    <div className="flex items-center justify-between gap-[10px] rounded-xl border-[1.5px] border-accent bg-white p-3 md:gap-4 md:px-4 md:py-[clamp(8px,1.5vh,14px)]">
                      <div className="flex items-start gap-[10px] md:gap-[14px]">
                        <span className="pt-0.5 font-mono text-[12px] text-accent md:pt-[3px] md:text-[13px]">01</span>
                        <div>
                          <div className="text-[16px] font-semibold tracking-[-0.02em] md:text-[18px]">{YOU.name}</div>
                          <div className="mt-0.5 text-[12px] text-[#5C5F66] md:text-[13px]">{YOU.detail}</div>
                          <div className="mt-[5px] flex items-center gap-1.5 text-[12px] md:mt-1.5 md:gap-2 md:text-[13px]">
                            <Stars className="text-accent !tracking-[1px] md:!tracking-[2px]" />
                            <span className="text-[#5C5F66]">
                              {YOU.rating} <span className="md:hidden">{YOU.reviewsMobile}</span>
                              <span className="hidden md:inline">{YOU.reviewsDesktop}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <svg viewBox="0 0 22 22" fill="none" stroke="#FF4D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[22px] md:size-6">
                          <path d="M3 16l5-5 3 3 8-8M13 6h6v6" />
                        </svg>
                        <span className="text-[13px] font-bold text-accent md:text-[14px]">#1</span>
                      </div>
                    </div>

                    {/* results 02, 03 */}
                    {COMPETITORS.map((c) => (
                      <div key={c.n} className={`flex items-start gap-[10px] rounded-xl border border-[#E4E5E9] px-3 py-[11px] md:gap-[14px] md:px-4 md:py-[clamp(8px,1.5vh,14px)] ${c.dim}`}>
                        <span className="pt-0.5 font-mono text-[12px] text-[#8D9098] md:pt-[3px] md:text-[13px]">{c.n}</span>
                        <div className="flex-1">
                          <div className="text-[15px] font-semibold tracking-[-0.02em] text-[#5C5F66] md:text-[17px]">{c.name}</div>
                          <div className={`mt-[7px] h-[5px] rounded-[3px] bg-[#DCDDE1] md:mt-2 md:h-1.5 ${c.bar}`} />
                          <div className="mt-2 hidden items-center gap-2 text-[12px] md:flex">
                            <Stars className="text-[#B9BBC2]" />
                            <span className="text-[#8D9098]">{c.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* desktop callouts, right */}
              <div className="hidden flex-none basis-[136px] flex-col justify-between pb-14 pt-[60px] md:flex">
                <Callout text={CALLOUTS[2]} side="right" index={0} />
                <Callout text={CALLOUTS[3]} side="right" index={1} />
              </div>
            </div>

            {/* mobile callouts: only the two right-side ones, below the card */}
            <div className="mt-6 flex items-start justify-between gap-4 md:hidden">
              <Callout text={CALLOUTS[2]} side="right" index={0} flat />
              <Callout text={CALLOUTS[3]} side="right" index={1} flat />
            </div>

            {/* headline */}
            <div className="relative z-[1] mt-8 md:mt-0 md:pb-[clamp(12px,2.4vh,40px)]">
              <h1 className="m-0 text-[46px] font-semibold leading-[.98] tracking-[-0.055em] md:text-[clamp(36px,min(5vw,6.6vh),72px)]">
                <span className="block">{H1_LINE_1}</span>
                <span className="block">{H1_LINE_2A}</span>
                <span className="block">
                  {H1_LINE_2B}
                  <span className="text-accent">.</span>
                </span>
              </h1>
              <p className="mt-4 text-[22px] font-normal leading-[1.2] tracking-[-0.02em] text-[#1B1C1F] md:mt-[clamp(8px,2vh,18px)] md:text-[clamp(18px,min(2vw,3.2vh),28px)] md:leading-normal">
                {SUBLINE}
              </p>
              <p className="mt-3 text-[15px] leading-normal text-[#5C5F66] md:max-w-[430px] md:text-[16px]">{PARAGRAPH}</p>
            </div>

            <Image
              src="/skyline.png"
              alt=""
              width={913}
              height={185}
              priority
              sizes="(min-width:768px) 60vw, 100vw"
              className="mt-5 block h-auto w-[150%] max-w-none opacity-40 mix-blend-multiply md:pointer-events-none md:absolute md:bottom-0 md:right-0 md:z-0 md:mt-0 md:w-[52%]"
            />
          </div>

          {/* AUDIT FORM */}
          <div
            id="audit"
            className="mt-8 min-w-0 border-t border-ink pt-6 md:mt-[clamp(8px,3vh,32px)] md:max-w-[520px] md:flex-[1_1_0%] md:self-start md:border-t-0 md:pt-0"
          >
            <div className="mb-[14px] h-[3px] w-7 bg-accent md:mb-[18px]" />
            <h2 className="m-0 font-mono text-[14px] font-medium uppercase leading-[1.4] tracking-[.08em] md:text-[15px] md:leading-normal">
              {FORM_TITLE}
            </h2>
            <p className="mb-5 mt-[10px] text-[15px] leading-normal text-[#4B4E55] md:mb-[26px] md:mt-3 md:max-w-[380px] md:text-[16px]">
              {FORM_INTRO}
            </p>

            <FieldRow htmlFor="website" label="Website" first py="py-4 md:py-[clamp(14px,2.4vh,22px)]">
              <input
                id="website"
                type="text"
                placeholder="yourco.com"
                className="min-w-0 flex-1 border-0 bg-transparent p-0 text-right text-[14px] text-ink"
              />
            </FieldRow>
            <FieldRow htmlFor="industry" label="Industry" py="py-4 md:py-[clamp(14px,2.4vh,22px)]">
              <span className="flex flex-1 items-center justify-end gap-2">
                <select
                  id="industry"
                  className="cursor-pointer appearance-none border-0 bg-transparent p-0 text-right text-[14px] uppercase tracking-[.04em] text-ink [text-align-last:right]"
                >
                  {INDUSTRIES.map((i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="#0B0B0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </span>
            </FieldRow>
            <FieldRow htmlFor="phone" label="Phone" py="py-4 md:py-[clamp(14px,2.4vh,22px)]">
              <input
                id="phone"
                type="tel"
                placeholder="(214) 000-0000"
                className="min-w-0 flex-1 border-0 bg-transparent p-0 text-right text-[14px] text-ink"
              />
            </FieldRow>

            <SolidButton type="button" className="mt-[22px] h-14 md:mt-7 md:h-[58px]">
              {SUBMIT}
            </SolidButton>

          </div>
        </div>
      </div>
    </section>
  );
}
