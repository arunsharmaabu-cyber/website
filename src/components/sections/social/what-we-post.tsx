import Image from "next/image";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/01", name: "What we post" };
const HEADING = ["Posts people", "stop to look at."];
const INTRO = "We plan, shoot, write and post for you. Real jobs, real crew, in your own voice.";
const TILE_LABEL = "Image";
// Four tiles in each row. Add a real photo to a tile with `src` (put the file in public/social); tiles without one show the striped placeholder.
type Tile = { tag: string; ratio: number; src?: string; w?: number; h?: number };
const ROW_UP: Tile[] = [
  { tag: "Photo", ratio: 0.76, src: "/social/image2.png", w: 906, h: 1200 },
  { tag: "Reel", ratio: 0.9 },
  { tag: "Photo", ratio: 1.34, src: "/social/image3.png", w: 1200, h: 898 },
  { tag: "Story", ratio: 0.9 },
];
const ROW_DOWN: Tile[] = [
  { tag: "Reel", ratio: 0.75, src: "/social/image4.png", w: 900, h: 1200 },
  { tag: "Photo", ratio: 1.1 },
  { tag: "Carousel", ratio: 0.8, src: "/social/image5.png", w: 960, h: 1200 },
  { tag: "Photo", ratio: 1.1 },
];

function Row({ tiles, reverse }: { tiles: Tile[]; reverse?: boolean }) {
  // three copies of the four tiles, so the loop never shows a gap
  const track = (k: number) => (
    <div key={k} className="flex flex-none gap-3 pr-3" aria-hidden={k > 0 || undefined}>
      {tiles.map((t, i) => (
        <div
          key={i}
          className="relative flex-none overflow-hidden rounded-[8px] bg-[#DCDDE1] [background-image:repeating-linear-gradient(135deg,transparent_0_9px,rgba(0,0,0,.04)_9px_10px)]"
          style={{ width: `calc(var(--h) * ${t.ratio})`, height: "var(--h)" }}
        >
          {t.src ? (
            <Image src={t.src} alt="" width={t.w} height={t.h} sizes="320px" className="absolute inset-0 size-full object-cover" />
          ) : (
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[3px] bg-white/50 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[.08em] text-[#9A9DA5]">
              {TILE_LABEL}
            </span>
          )}
          <span className="absolute left-2.5 top-2.5 rounded-full bg-white/80 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[.08em] text-[#3A3C42]">{t.tag}</span>
        </div>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden">
      <div className={`${reverse ? "a-mq3-r" : "a-mq3"} flex w-max [--d:60s]`}>{[0, 1, 2].map(track)}</div>
    </div>
  );
}

export default function WhatWePost() {
  return (
    <section className="box-border w-full overflow-hidden bg-panel py-14 md:py-[clamp(56px,10vh,104px)]">
      <div className="flex flex-col gap-10 md:gap-[clamp(28px,5vh,48px)]">
        <div className="flex flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:gap-10 md:px-10">
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

        <div className="flex flex-col gap-3 [--h:150px] md:[--h:clamp(190px,17vw,280px)]">
          <Row tiles={ROW_UP} />
          <Row tiles={ROW_DOWN} reverse />
        </div>
      </div>
    </section>
  );
}
