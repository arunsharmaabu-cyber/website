import Image from "next/image";

// ───────── Copy for this section: edit the words here ─────────
// The badge art is in public/badges/web (cropped and compressed copies of the originals in public/badges).
// `w`/`h` are the image's pixel size so the page doesn't jump while it loads.
const BADGES = [
  { id: "google", label: "Google Reviews, 240+ five-star reviews", src: "/badges/web/google.webp", w: 960, h: 305 },
  { id: "meta", label: "Meta Business Partner, official partner", src: "/badges/web/meta.webp", w: 960, h: 290 },
  { id: "bbb", label: "BBB Accredited Business, A+ rated", src: "/badges/web/bbb.webp", w: 960, h: 291 },
  { id: "clutch", label: "Clutch verified reviews", src: "/badges/web/clutch.webp", w: 960, h: 291 },
];

export default function TrustBar() {
  return (
    <section id="trust" className="relative box-border w-full overflow-hidden bg-panel">
      <div className="relative z-[1] box-border px-5 pb-20 pt-20 md:px-10 md:pb-[clamp(104px,15vh,160px)] md:pt-[clamp(104px,15vh,160px)]">
        <ul className="m-0 mx-auto grid max-w-[1240px] list-none grid-cols-2 items-center gap-3 p-0 md:grid-cols-4 md:gap-x-8">
          {BADGES.map((b) => (
            <li key={b.id} className="flex items-center justify-center">
              <Image
                src={b.src}
                alt={b.label}
                width={b.w}
                height={b.h}
                sizes="(min-width: 768px) 290px, 46vw"
                className="block h-auto w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
