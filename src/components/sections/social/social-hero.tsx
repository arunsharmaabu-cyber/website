import Image from "next/image";

// ───────── Copy for this section: edit the words here ─────────
const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Marketing", href: "/marketing" },
  { label: "Social media marketing" },
];
// The page title stays in the page for search engines and screen readers; the picture itself carries no text.
const HEADING = "Get followed. Get called.";
const PHOTO = { src: "/social/image.png", alt: "A local crew at work on a job site", w: 1200, h: 898 };

export default function SocialHero() {
  return (
    <section className="box-border w-full bg-panel px-5 pb-5 pt-[88px] md:px-10 md:pb-6 md:pt-[96px]">
      <nav aria-label="Breadcrumb" className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[.1em] text-[#6B6E76]">
        {CRUMBS.map((c, i) => (
          <span key={c.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {c.href ? (
              <a href={c.href} className="no-underline hover:text-accent">
                {c.label}
              </a>
            ) : (
              <span aria-current="page" className="font-semibold text-ink">
                {c.label}
              </span>
            )}
          </span>
        ))}
      </nav>

      {/* one full photo that fills the first screen */}
      <div className="relative h-[calc(100svh-132px)] min-h-[420px] overflow-hidden rounded-[16px] bg-[#1A1210] md:h-[calc(100svh-150px)]">
        <h1 className="sr-only">{HEADING}</h1>
        <Image src={PHOTO.src} alt={PHOTO.alt} width={PHOTO.w} height={PHOTO.h} priority sizes="100vw" className="absolute inset-0 size-full object-cover object-[42%_40%] md:object-center" />
      </div>
    </section>
  );
}
