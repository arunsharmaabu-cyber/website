"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ArrowSVG from "@/components/ui/arrow-svg";
import OutlineButton from "@/components/ui/outline-button";

// ───────── Copy for the site header: edit the words here ─────────
const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/contact#faq" },
];
const SERVICES_LABEL = "Services";
const PHONE = { label: "(214) 000-0000", href: "tel:+12140000000" };
const NAV_CTA = "Get audit";
const AUDIT_HREF = "/contact#audit";

// Services dropdown: three names; Marketing expands (+) to the seven services, names only
const MARKETING_PAGES = [
  { n: "S/001.1", label: "SEO", text: "Rank higher on Google", href: "/marketing/seo" },
  { n: "S/001.2", label: "Local SEO", text: "Own the map pack", href: "/marketing/local-seo" },
  { n: "S/001.3", label: "Content marketing", text: "Guides, pages and posts", href: "/marketing/content-marketing" },
  { n: "S/001.4", label: "GEO", text: "Get cited by ChatGPT and more", href: "/marketing/geo" },
  { n: "S/001.5", label: "AI search optimization", text: "Win AI Overviews", href: "/marketing/ai-search-optimization" },
  { n: "S/001.6", label: "Paid advertising & PPC", text: "Ads that ring the phone", href: "/marketing/paid-advertising-ppc" },
  { n: "S/001.7", label: "Social media marketing", text: "Posts that bring customers", href: "/marketing/social-media-marketing" },
];
const SERVICES = [
  { n: "S/001", label: "Marketing", href: "/marketing" },
  { n: "S/002", label: "Web design", href: "/web-design" },
  { n: "S/003", label: "Consulting", href: "/consulting" },
];
const MENU_PANEL = { cta: "Get my free audit" };

// Mobile menu: same links; "Contact + FAQ" is one row
const MOBILE_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact + FAQ", href: "/contact" },
];

const navLink = "inline-flex items-center no-underline";

export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [mobileServices, setMobileServices] = useState(true);
  const [menu, setMenu] = useState(false); // desktop Services dropdown
  const [expanded, setExpanded] = useState(false); // Marketing sub-list in the desktop dropdown
  const lastY = useRef(0);
  const ticking = useRef(false);

  // Slides up when scrolling down, slides back when scrolling up, always shown near the top.
  useEffect(() => {
    lastY.current = window.scrollY;
    const update = () => {
      const y = window.scrollY;
      if (y < 80) setHidden(false);
      else if (y > lastY.current + 4) {
        setHidden(true);
        setMenu(false);
      } else if (y < lastY.current - 4) setHidden(false);
      lastY.current = y;
      ticking.current = false;
    };
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc closes whichever menu is open; the full-screen mobile menu also locks page scroll
  useEffect(() => {
    if (!open && !menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, menu]);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.__lenis?.stop();
    return () => {
      document.documentElement.style.overflow = prev;
      window.__lenis?.start();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${open ? "bg-panel md:bg-panel" : "bg-panel"}`}
      onMouseLeave={() => setMenu(false)}
    >
      <nav
        aria-label="Primary"
        className="box-border flex h-[68px] items-center justify-between gap-3 border-b border-dashed border-[#A9ACB4] px-5 md:h-[76px] md:px-10"
      >
        <Link href="/" onClick={close} className="text-[17px] font-semibold tracking-[.14em] no-underline md:text-[19px]">
          TECHX<span className="ml-0.5 align-top text-[10px] md:text-[11px]">®</span>
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-10 font-mono text-[12px] uppercase tracking-[.08em] md:flex">
          <div
            onMouseEnter={() => {
              if (!menu) setExpanded(false);
              setMenu(true);
            }}
            className="relative flex items-center"
          >
            <a
              href="/marketing"
              aria-haspopup="true"
              aria-expanded={menu}
              onFocus={() => setMenu(true)}
              className={`${navLink} ${menu ? "font-semibold" : ""}`}
            >
              {SERVICES_LABEL}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="#0B0B0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`ml-1.5 transition-transform duration-200 ${menu ? "rotate-180" : ""}`}>
                <path d="M1 1l4 4 4-4" />
              </svg>
            </a>
          {/* desktop Services dropdown: three names, Marketing expands with + */}
          <div
            className={`absolute left-[-16px] top-full pt-5 font-sans normal-case tracking-normal transition-[opacity,transform] duration-200 ease-out ${
              menu ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
            }`}
            aria-hidden={!menu}
          >
            <div className="w-[280px] rounded-[14px] border border-[#DADCE1] bg-white p-2 shadow-[0_30px_60px_-30px_rgba(11,11,12,.35)]">
              <div className="flex items-center rounded-[10px] hover:bg-panel">
                <a
                  href={SERVICES[0].href}
                  tabIndex={menu ? 0 : -1}
                  onClick={() => setMenu(false)}
                  className="flex-1 px-4 py-3 text-[20px] font-semibold tracking-[-0.03em] no-underline"
                >
                  {SERVICES[0].label}
                </a>
                <button
                  type="button"
                  tabIndex={menu ? 0 : -1}
                  aria-label="Show marketing services"
                  aria-expanded={expanded}
                  aria-controls="marketing-sub"
                  onMouseEnter={() => setExpanded(true)}
                  onFocus={() => setExpanded(true)}
                  onClick={() => setExpanded((v) => !v)}
                  className="mr-2 flex size-8 cursor-pointer items-center justify-center rounded-full border border-ink bg-transparent p-0"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={`transition-transform duration-200 ${expanded ? "rotate-45" : ""}`}>
                    <path d="M6 1v10M1 6h10" />
                  </svg>
                </button>
              </div>
              <div id="marketing-sub" className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="flex flex-col pb-1 pl-4 pt-1">
                    {MARKETING_PAGES.map((p) => (
                      <a
                        key={p.label}
                        href={p.href}
                        tabIndex={menu && expanded ? 0 : -1}
                        onClick={() => setMenu(false)}
                        className="rounded-[8px] px-3 py-2 text-[16px] tracking-[-0.01em] text-[#3A3C42] no-underline transition-colors hover:bg-panel hover:text-ink"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {SERVICES.slice(1).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  tabIndex={menu ? 0 : -1}
                  onClick={() => setMenu(false)}
                  className="block rounded-[10px] px-4 py-3 text-[20px] font-semibold tracking-[-0.03em] no-underline transition-colors hover:bg-panel"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          </div>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onFocus={() => setMenu(false)} onMouseEnter={() => setMenu(false)} className={navLink}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-7">
          <a href={PHONE.href} className="hidden font-mono text-[12px] uppercase tracking-[.08em] no-underline md:block">
            {PHONE.label}
          </a>
          <OutlineButton
            href={AUDIT_HREF}
            className="hidden gap-[10px] px-[18px] py-[11px] text-[12px] tracking-[.1em] md:flex"
          >
            {NAV_CTA}
          </OutlineButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className={`relative size-11 cursor-pointer rounded-[4px] border border-ink md:hidden ${open ? "bg-ink" : "bg-transparent"}`}
          >
            <span className={`absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 border-t-[1.5px] transition-transform duration-300 ${open ? "rotate-45 border-page" : "-translate-y-[6px] border-ink"}`} />
            <span className={`absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 border-t-[1.5px] border-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 border-t-[1.5px] transition-transform duration-300 ${open ? "-rotate-45 border-page" : "translate-y-[6px] border-ink"}`} />
          </button>
        </div>
      </nav>

      {/* mobile menu: full screen under the bar; Services expands to the 7 marketing pages */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[68px] overflow-y-auto bg-panel transition-[clip-path,opacity] duration-300 ease-out md:hidden ${
          open ? "[clip-path:inset(0_0_0_0)] opacity-100" : "pointer-events-none [clip-path:inset(0_0_100%_0)] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex min-h-full flex-col px-5 pb-8 pt-2">
          <div className="border-b border-dashed border-[#A9ACB4]">
            <button
              type="button"
              aria-expanded={mobileServices}
              tabIndex={open ? 0 : -1}
              onClick={() => setMobileServices((v) => !v)}
              className="flex min-h-14 w-full cursor-pointer items-center justify-between border-0 bg-transparent p-0 text-left font-sans text-[32px] font-semibold tracking-[-0.05em]"
            >
              {SERVICES_LABEL}
              <span className="flex size-[30px] items-center justify-center rounded-full border border-ink">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M1 6h10" />
                  <path d="M6 1v10" className={`origin-center transition-transform duration-200 ${mobileServices ? "scale-y-0" : ""}`} />
                </svg>
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ${mobileServices ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="pb-4 pt-1">
                  <Link href="/marketing" tabIndex={open ? 0 : -1} onClick={close} className="flex min-h-12 items-center gap-3 no-underline">
                    <span className="font-mono text-[11px] font-semibold tracking-[.04em] text-accent">S/001</span>
                    <span className="text-[20px] font-semibold tracking-[-0.03em]">Marketing</span>
                  </Link>
                  {MARKETING_PAGES.map((p) => (
                    <Link key={p.label} href={p.href} tabIndex={open ? 0 : -1} onClick={close} className="flex min-h-11 items-center gap-6 pl-6 no-underline">
                      <span className="w-6 font-mono text-[10px] tracking-[.04em] text-[#5C5F66]">{p.n.replace("S/00", "")}</span>
                      <span className="text-[17px] tracking-[-0.02em]">{p.label}</span>
                    </Link>
                  ))}
                  {SERVICES.slice(1).map((s) => (
                    <Link key={s.label} href={s.href} tabIndex={open ? 0 : -1} onClick={close} className="flex min-h-12 items-center gap-3 no-underline">
                      <span className="font-mono text-[11px] font-semibold tracking-[.04em] text-accent">{s.n}</span>
                      <span className="text-[20px] font-semibold tracking-[-0.03em]">{s.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {MOBILE_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              tabIndex={open ? 0 : -1}
              onClick={close}
              className="flex min-h-14 items-center border-b border-dashed border-[#A9ACB4] text-[32px] font-semibold tracking-[-0.05em] no-underline"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-3 pt-6">
            <a href={PHONE.href} tabIndex={open ? 0 : -1} className="flex min-h-12 items-center justify-center rounded-[4px] border border-ink font-mono text-[12px] uppercase tracking-[.1em] no-underline">
              {PHONE.label}
            </a>
            <a
              href={AUDIT_HREF}
              tabIndex={open ? 0 : -1}
              onClick={close}
              className="flex h-14 items-center justify-center gap-3 rounded-[4px] bg-ink font-mono text-[12px] font-medium uppercase tracking-[.14em] text-page no-underline"
            >
              {MENU_PANEL.cta}
              <ArrowSVG className="size-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
