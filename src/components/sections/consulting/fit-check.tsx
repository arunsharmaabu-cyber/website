import MaskLines from "@/components/ui/mask-lines";
import SectionLabel from "@/components/ui/section-label";

// ───────── Copy for this section: edit the words here ─────────
const LABEL = { n: "S/04", name: "Fit check" };
const HEADING = ["Is this", "for you?"];
const YES = {
  title: "This fits if",
  items: ["You want clarity before you spend another dollar.", "You have a team or agency that needs direction.", "You can act on a plan, or have someone who can."],
};
const NO = {
  title: "Wait on this if",
  items: [
    { text: "You want it all done for you. That is our marketing service.", href: "/marketing", link: "See marketing" },
    { text: "You have no working site or phone line yet. Start with web design.", href: "/web-design", link: "See web design" },
    { text: "You want promised rankings or overnight leads. We do not sell that." },
  ],
};

export default function FitCheck() {
  return (
    <section className="box-border w-full bg-panel px-5 py-14 md:px-10 md:py-[clamp(56px,10vh,104px)]">
      <div className="flex flex-col gap-10 md:gap-[clamp(32px,6vh,64px)]">
        <div className="flex flex-col gap-5">
          <SectionLabel number={LABEL.n} name={LABEL.name} />
          <h2 className="m-0 text-[44px] font-semibold leading-[.94] tracking-[-0.055em] md:text-[clamp(44px,4.8vw,72px)]">
            <MaskLines lines={HEADING} />
          </h2>
        </div>
        <div data-rise-group className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <div data-rise className="flex flex-col gap-2 rounded-[6px] bg-white p-6 md:p-8">
            <h3 className="m-0 pb-4 text-[28px] font-semibold tracking-[-0.04em]">{YES.title}</h3>
            {YES.items.map((it) => (
              <p key={it} className="m-0 flex items-start gap-3 border-t border-dashed border-[#A9ACB4] py-4 text-[16px] leading-[1.4]">
                <span className="mt-[7px] size-[8px] flex-none rounded-full bg-accent" />
                {it}
              </p>
            ))}
          </div>
          <div data-rise className="flex flex-col gap-2 rounded-[6px] bg-white p-6 md:p-8">
            <h3 className="m-0 pb-4 text-[28px] font-semibold tracking-[-0.04em]">{NO.title}</h3>
            {NO.items.map((it) => (
              <p key={it.text} className="m-0 flex items-start gap-3 border-t border-dashed border-[#A9ACB4] py-4 text-[16px] leading-[1.4] text-[#3A3C42]">
                <span className="mt-[11px] h-px w-[8px] flex-none bg-[#9A9DA5]" />
                <span>
                  {it.text}
                  {it.href && (
                    <a href={it.href} className="ml-2 font-mono text-[11px] uppercase tracking-[.08em] text-ink underline underline-offset-4">
                      {it.link}
                    </a>
                  )}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
