import Image from "next/image";
import MaskLines from "@/components/ui/mask-lines";

// ───────── Copy for this section: edit the words here ─────────
const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Web design" },
];
const HEADING = ["Your website is the first thing", "a customer judges"];
// The picture: a laptop and a phone showing one simple contractor site
const SITE = {
  brand: "YOURCO",
  headline: ["Fast repairs.", "Clear prices."],
  button: "Get a free quote",
  call: "Call now",
  photo: "/skyline.png",
  photoAlt: "Dallas skyline",
};

export default function WebHero() {
  return (
    <section className="relative box-border w-full overflow-hidden bg-panel px-5 pb-6 pt-[104px] md:px-10 md:pt-[clamp(112px,14vh,150px)]">
      <div className="flex flex-col gap-8 md:gap-[clamp(28px,5vh,56px)]">
        <div className="flex flex-col gap-6">
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
          <h1 className="m-0 text-[46px] font-semibold leading-[.92] tracking-[-0.06em] md:text-[clamp(48px,5.3vw,84px)]">
            <MaskLines lines={HEADING} accent />
          </h1>
        </div>

        {/* laptop with a phone in front */}
        <div data-rise className="relative mx-auto w-full max-w-[1120px] pb-6 pr-[6%] md:pb-10">
          <div className="rounded-t-[14px] bg-ink p-[8px] shadow-[0_30px_60px_rgba(11,11,12,.15)] md:p-[12px]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[4px] bg-white">
              <div className="flex items-center justify-between border-b border-[#EDEEF1] px-4 py-3 md:px-8 md:py-4">
                <b className="text-[12px] font-semibold tracking-[.1em] md:text-[16px]">{SITE.brand}</b>
                <span className="flex gap-3">
                  <i className="h-1.5 w-8 rounded-full bg-[#EDEEF1] md:w-12" />
                  <i className="h-1.5 w-8 rounded-full bg-[#EDEEF1] md:w-12" />
                  <i className="h-1.5 w-8 rounded-full bg-[#EDEEF1] md:w-12" />
                </span>
              </div>
              <div className="flex flex-col gap-3 px-5 pt-5 md:gap-6 md:px-12 md:pt-12">
                <p className="m-0 text-[24px] font-semibold leading-[.98] tracking-[-0.05em] md:text-[clamp(36px,4.6vw,68px)]">
                  {SITE.headline[0]}
                  <br />
                  {SITE.headline[1]}
                </p>
                <span className="inline-flex min-h-8 w-fit items-center rounded-[4px] bg-accent px-4 font-mono text-[9px] font-medium uppercase tracking-[.1em] text-ink md:min-h-12 md:px-6 md:text-[13px]">
                  {SITE.button}
                </span>
              </div>
              <Image src={SITE.photo} alt={SITE.photoAlt} width={913} height={185} className="absolute bottom-0 right-0 w-[62%] mix-blend-multiply md:w-full" />
            </div>
          </div>
          <div className="mx-[-3%] h-[10px] rounded-b-[14px] bg-[#C9CBD1] md:h-[14px]" />

          <div className="absolute bottom-0 right-0 w-[27%] min-w-[110px] rounded-[20px] bg-ink p-[5px] shadow-[0_24px_48px_rgba(11,11,12,.28)] md:rounded-[28px] md:p-[7px]">
            <div className="relative flex aspect-[9/17] flex-col overflow-hidden rounded-[15px] bg-white md:rounded-[22px]">
              <div className="px-3 pt-6 md:px-4 md:pt-9">
                <p className="m-0 text-[17px] font-semibold leading-[.98] tracking-[-0.04em] md:text-[clamp(22px,2.6vw,38px)]">
                  {SITE.headline[0]}
                  <br />
                  {SITE.headline[1]}
                </p>
              </div>
              <Image src={SITE.photo} alt="" width={913} height={185} className="mt-auto w-[220%] max-w-none mix-blend-multiply" />
              <span className="absolute inset-x-2 bottom-2 flex min-h-8 items-center justify-center rounded-[6px] bg-accent font-mono text-[9px] font-medium uppercase tracking-[.1em] text-ink md:min-h-11 md:text-[11px]">
                {SITE.call}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
