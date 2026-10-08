import ArrowSVG from "@/components/ui/arrow-svg";
import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// Orange closing block used at the bottom of every inner page.
// Each page passes its own words in, so the copy stays inside that page's section file.
export default function CtaPanel({
  label,
  heading,
  text,
  cta,
}: {
  label: { n: string; name: string };
  heading: string[];
  text: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="box-border w-full bg-accent px-5 py-14 text-ink md:px-10 md:py-[clamp(72px,12vh,128px)]">
      <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-x-16 md:gap-y-10">
        <div className="flex min-w-0 flex-col gap-6 md:flex-[1.4_1_520px] md:gap-8">
          <SectionLabel number={label.n} name={label.name} />
          <h2 className="m-0 text-[44px] font-semibold leading-[.92] tracking-[-0.06em] md:text-[clamp(48px,7vw,112px)]">
            <MaskLines lines={heading} />
          </h2>
        </div>
        <div data-rise className="flex max-w-[420px] flex-col gap-5 md:flex-[1_1_320px]">
          <p className="m-0 text-[16px] leading-[1.45] md:text-[18px]">{text}</p>
          <a
            href={cta.href}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-[4px] bg-ink text-[13px] font-medium uppercase tracking-[.14em] text-page no-underline md:h-[58px]"
          >
            {cta.label}
            <ArrowSVG className="size-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
