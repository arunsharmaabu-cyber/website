import Image from "next/image";

// ───────── Copy for the footer (shared by every page): edit the words here ─────────
const LOCATION = "/DFW_TX";
const FOOTER_ABOUT = "Marketing, web design and consulting for Dallas–Fort Worth businesses. We put your name first.";
const COORDS = "32.7767° N, 96.7970° W";
// Main pages only: the sub-service pages are reached from the Marketing page, not listed here.
const SERVICES = {
  title: "Services",
  links: [
    { label: "Marketing", href: "/marketing" },
    { label: "Web design", href: "/web-design" },
    { label: "Consulting", href: "/consulting" },
  ],
};
const PAGES = {
  title: "Pages",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/contact#faq" },
    { label: "Free audit", href: "/contact#audit" },
  ],
};
const PHONE = { label: "(214) 000-0000", href: "tel:+12140000000" };
const EMAIL = "[EMAIL]";
const ADDRESS = ["[ADDRESS]", "Dallas, TX"];
const HOURS = "[HOURS]";
const COPYRIGHT = "© 2026 TechX Media · Dallas–Fort Worth, TX";

// ───────── Small local pieces ─────────
const colTitle =
  "border-b border-dashed border-[#34363C] pb-[10px] mb-1 font-mono text-[11px] uppercase tracking-[.1em] text-[#9A9DA5] md:pb-3 md:mb-1.5";
const linkCls = "block py-[11px] text-[16px] no-underline md:py-2";
const textCls = "py-[11px] text-[16px] text-[#C9CBD1] md:py-2";

export default function Footer() {
  return (
    <footer className="box-border flex flex-col gap-8 bg-ink px-5 pb-6 pt-8 text-page md:gap-12 md:px-10 md:pb-7 md:pt-12">
      <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-between md:gap-x-16 md:gap-y-10">
        <div className="flex min-w-0 flex-col gap-4 md:max-w-[360px] md:flex-[1_1_280px] md:gap-5">
          <Image src="/logo-footer.png" alt="TechX" width={720} height={240} className="block h-8 w-auto self-start md:h-10" />
          <p className="m-0 text-[15px] leading-normal text-[#C9CBD1] md:text-[16px]">{FOOTER_ABOUT}</p>
          <div className="font-mono text-[11px] uppercase leading-[1.8] tracking-[.1em] text-[#9A9DA5]">
            {LOCATION}
            <br />
            {COORDS}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:flex md:min-w-0 md:flex-[2_1_560px] md:justify-end md:gap-x-16">
          {[SERVICES, PAGES].map((c) => (
            <nav key={c.title} aria-label={c.title} className="min-w-0 md:min-w-[150px]">
              <div className={colTitle}>{c.title}</div>
              {c.links.map((l) => (
                <a key={l.label} href={l.href} className={linkCls}>
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
          <div className="col-span-2 min-w-0 md:col-auto md:min-w-[200px]">
            <div className={colTitle}>Contact</div>
            <a href={PHONE.href} className={`${linkCls} font-semibold`}>
              {PHONE.label}
            </a>
            <div className={textCls}>{EMAIL}</div>
            <div className={`${textCls} leading-[1.4]`}>
              {ADDRESS[0]}
              <br />
              {ADDRESS[1]}
            </div>
            <div className={textCls}>{HOURS}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[14px] border-t border-dashed border-[#34363C] pt-5 font-mono text-[11px] uppercase tracking-[.1em] text-[#9A9DA5] md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-7 md:pt-[22px]">
        <span className="leading-[1.6] md:leading-normal">{COPYRIGHT}</span>
        <span className="flex flex-wrap items-center gap-x-6 gap-y-1 md:gap-x-7 md:gap-y-2">
          <a href="/privacy" className="inline-flex min-h-11 items-center text-[#9A9DA5] no-underline md:min-h-0">
            Privacy
          </a>
          <a href="/terms" className="inline-flex min-h-11 items-center text-[#9A9DA5] no-underline md:min-h-0">
            Terms
          </a>
          <a href="#top" className="inline-flex min-h-11 items-center gap-2 font-semibold text-page no-underline md:min-h-0">
            Back to top
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 11V1M2 5l4-4 4 4" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
