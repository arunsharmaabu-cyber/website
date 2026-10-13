"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// ───────── Copy for the site header: edit the words here ─────────
const TAGLINE = "/DFW_TX";
const SERVICE_ROOTS = ["/marketing", "/web-design", "/consulting"];
const CTA = { label: "Get my free audit", href: "/contact#audit" };

// Services opens to Marketing (which opens to its seven pages), Web design and Consulting
const MARKETING_PAGES = [
  { label: "SEO", href: "/marketing/seo" },
  { label: "Local SEO", href: "/marketing/local-seo" },
  { label: "Content marketing", href: "/marketing/content-marketing" },
  { label: "GEO", href: "/marketing/geo" },
  { label: "AI search optimization", href: "/marketing/ai-search-optimization" },
  { label: "Paid advertising & PPC", href: "/marketing/paid-advertising-ppc" },
  { label: "Social media marketing", href: "/marketing/social-media-marketing" },
];
const OTHER_SERVICES = [
  { label: "Web design", href: "/web-design" },
  { label: "Consulting", href: "/consulting" },
];
const LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/contact#faq" },
];

// ───────── Small local pieces ─────────
const PAPER = "bg-[#FBFBF9]";
const dashed = "border-dashed border-[#A9ACB4]";
// The ticket's bottom-left corner is cut; only the paper layer is clipped.
const NOTCH = "[clip-path:polygon(0_0,100%_0,100%_100%,14px_100%,0_calc(100%-14px))]";
// Edge + a very slight dark shadow follow the notch because they are drawn from the silhouette.
const SILHOUETTE = "[filter:drop-shadow(0_0_.5px_rgba(11,11,12,.45))_drop-shadow(0_10px_18px_rgba(11,11,12,.1))]";

function Plus({ open }: { open: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#FF4D00" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M1 7h12" />
      <path d="M7 1v12" className={`origin-center transition-transform duration-200 ${open ? "scale-y-0" : ""}`} />
    </svg>
  );
}

// The menu list: used by the desktop panel (compact) and the full-screen phone menu.
function MenuBody({ open, compact, isActive, onNavigate }: { open: boolean; compact?: boolean; isActive: (href: string) => boolean; onNavigate: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [marketingOpen, setMarketingOpen] = useState(false);
  const tab = open ? 0 : -1;

  // every time the menu closes, fold the sub-lists back up
  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
      setMarketingOpen(false);
    }
  }, [open]);

  // hovering opens (mouse only); tapping or Enter toggles
  const hover = (set: (v: boolean) => void) => (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") set(true);
  };

  const rowPad = compact ? "py-[14px]" : "py-[18px]";
  const label = compact ? "text-[24px]" : "text-[34px]";
  const sub = compact ? "text-[18px]" : "text-[22px]";
  const page = compact ? "text-[15px]" : "text-[18px]";
  const grid = "grid grid-cols-[44px_1fr_auto] items-center";
  const num = "font-mono text-[12px] text-[#5C5F66] transition-colors group-hover:text-accent";
  const servicesActive = SERVICE_ROOTS.some(isActive);

  return (
    <div className="flex flex-col">
      <div>
        {/* 01 Services */}
        <div onPointerEnter={hover(setServicesOpen)}>
          <button
            type="button"
            aria-expanded={servicesOpen}
            tabIndex={tab}
            onClick={() => setServicesOpen((v) => !v)}
            className={`group ${grid} w-full cursor-pointer border-0 bg-transparent p-0 text-left font-sans ${rowPad}`}
          >
            <span className={num}>01</span>
            <span className={`${label} font-medium tracking-[-0.04em] transition-colors group-hover:text-accent ${servicesOpen || servicesActive ? "text-accent" : ""}`}>Services</span>
            <Plus open={servicesOpen} />
          </button>

          <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <div className="overflow-hidden">
              <div className="flex flex-col pb-3 pl-[44px]">
                {/* Marketing opens to its seven pages, only when its + is clicked or tapped */}
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href="/marketing"
                      tabIndex={servicesOpen ? tab : -1}
                      onClick={onNavigate}
                      className={`flex-1 py-2 ${sub} tracking-[-0.03em] no-underline transition-colors hover:text-accent`}
                    >
                      Marketing
                    </Link>
                    <button
                      type="button"
                      aria-label="Show marketing services"
                      aria-expanded={marketingOpen}
                      tabIndex={servicesOpen ? tab : -1}
                      onClick={() => setMarketingOpen((v) => !v)}
                      className="flex size-8 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
                    >
                      <Plus open={marketingOpen} />
                    </button>
                  </div>
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${marketingOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className={`ml-1 flex flex-col border-l ${dashed} pl-4`}>
                        {MARKETING_PAGES.map((p) => (
                          <Link
                            key={p.label}
                            href={p.href}
                            tabIndex={servicesOpen && marketingOpen ? tab : -1}
                            onClick={onNavigate}
                            className={`py-1.5 ${page} tracking-[-0.01em] text-[#3A3C42] no-underline transition-colors hover:text-accent`}
                          >
                            {p.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {OTHER_SERVICES.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    tabIndex={servicesOpen ? tab : -1}
                    onClick={onNavigate}
                    className={`py-2 ${sub} tracking-[-0.03em] no-underline transition-colors hover:text-accent`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 02+ plain links */}
        {LINKS.map((l, i) => {
          const current = isActive(l.href) && !l.href.includes("#");
          return (
            <Link
              key={l.label}
              href={l.href}
              tabIndex={tab}
              onClick={onNavigate}
              aria-current={current ? "page" : undefined}
              className={`group ${grid} border-t ${dashed} ${rowPad} no-underline`}
            >
              <span className={num}>{String(i + 2).padStart(2, "0")}</span>
              <span className={`${label} font-medium tracking-[-0.04em] transition-colors group-hover:text-accent ${current ? "text-accent" : ""}`}>{l.label}</span>
              <span />
            </Link>
          );
        })}
      </div>

      {/* closing call to action */}
      <div className="pt-5">
        <Link
          href={CTA.href}
          tabIndex={tab}
          onClick={onNavigate}
          className={`group flex items-center justify-between rounded-[10px] bg-accent pl-5 pr-2 text-ink no-underline transition-colors hover:text-ink ${compact ? "h-[64px]" : "h-[72px]"}`}
        >
          <span className="text-[19px] font-semibold tracking-[-0.025em]">{CTA.label}</span>
          <span className="flex size-12 flex-none items-center justify-center rounded-full bg-ink text-page transition-transform duration-300 group-hover:translate-x-0.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5">
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false); // the menu (a panel on desktop, full screen on phones)
  const openedBy = useRef<"hover" | "click">("click");
  const closeTimer = useRef<number | undefined>(undefined);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    const path = href.split("#")[0];
    return pathname === path || pathname.startsWith(path + "/");
  };
  const close = () => setOpen(false);

  // Slides up when scrolling down, slides back when scrolling up, always shown near the top.
  useEffect(() => {
    lastY.current = window.scrollY;
    const update = () => {
      const y = window.scrollY;
      if (y < 80) setHidden(false);
      else if (y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4) setHidden(false);
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

  // While the menu is open: Esc or a click outside closes it; on phones it also locks page scroll.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!headerRef.current?.contains(t) && !mobileRef.current?.contains(t)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);

    const phone = window.matchMedia("(max-width: 767px)").matches;
    const prev = document.documentElement.style.overflow;
    if (phone) {
      document.documentElement.style.overflow = "hidden";
      window.__lenis?.stop();
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
      if (phone) {
        document.documentElement.style.overflow = prev;
        window.__lenis?.start();
      }
    };
  }, [open]);

  // Mouse hover opens the menu and leaving closes it (after a beat, so it never flickers).
  // A click while it is open from hover pins it open; touch uses taps only.
  const onEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    if (!open) {
      openedBy.current = "hover";
      setOpen(true);
    }
  };
  const onLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || openedBy.current !== "hover") return;
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 180);
  };
  const onButton = () => {
    if (open && openedBy.current === "hover") {
      openedBy.current = "click"; // pin it
      return;
    }
    openedBy.current = "click";
    setOpen((o) => !o);
  };

  return (
    <>
      <header
        ref={headerRef}
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        className={`fixed left-0 top-0 z-50 w-full px-3 pt-3 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none md:w-[clamp(320px,25vw,400px)] md:px-5 md:pt-4 ${
          hidden && !open ? "-translate-y-[calc(100%+16px)]" : "translate-y-0"
        }`}
      >
        <div className={`relative ${SILHOUETTE}`}>
          <nav aria-label="Primary" className="relative flex h-[60px] items-stretch md:h-[68px]">
            {/* the paper: its bottom-left corner is cut like a ticket */}
            <span aria-hidden="true" className={`absolute inset-0 rounded-[8px] ${PAPER} ${NOTCH}`} />

            {/* wordmark */}
            <Link href="/" onClick={close} className="relative flex flex-1 flex-col justify-center px-4 no-underline md:px-6">
              <span className="text-[17px] font-semibold leading-none tracking-[.14em] md:text-[19px]">
                TECHX<span className="ml-0.5 align-top text-[10px] md:text-[11px]">®</span>
              </span>
              <span className="mt-1.5 font-mono text-[10px] uppercase leading-none tracking-[.1em] text-[#5C5F66]">{TAGLINE}</span>
            </Link>

            {/* menu button, in its own dashed compartment */}
            <div className={`relative flex items-center border-l px-3 md:px-4 ${dashed}`}>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="site-menu"
                onClick={onButton}
                className={`relative size-11 cursor-pointer rounded-[4px] border border-ink transition-colors duration-200 ${open ? "bg-ink" : "bg-transparent"}`}
              >
                <span className={`absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 border-t-[1.5px] transition-transform duration-300 ${open ? "rotate-45 border-page" : "-translate-y-[6px] border-ink"}`} />
                <span className={`absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 border-t-[1.5px] border-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 border-t-[1.5px] transition-transform duration-300 ${open ? "-rotate-45 border-page" : "translate-y-[6px] border-ink"}`} />
              </button>
            </div>
          </nav>

          {/* desktop menu: a paper panel hanging from the ticket, same width */}
          <div
            id="site-menu"
            aria-hidden={!open}
            className={`absolute left-0 top-full hidden w-full pt-2 transition-[opacity,transform] duration-200 ease-out md:block ${
              open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <div className={`max-h-[calc(100svh-120px)] overflow-y-auto rounded-[8px] ${PAPER} px-5 pb-5 pt-1`}>
              <MenuBody open={open} compact isActive={isActive} onNavigate={close} />
            </div>
          </div>
        </div>
      </header>

      {/* phones: full-screen menu under the ticket */}
      <div
        ref={mobileRef}
        className={`fixed inset-0 z-40 overflow-y-auto bg-panel pt-[84px] transition-[clip-path,opacity] duration-300 ease-out md:hidden ${
          open ? "[clip-path:inset(0_0_0_0)] opacity-100" : "pointer-events-none [clip-path:inset(0_0_100%_0)] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="min-h-full px-5 pb-8 pt-4">
          <MenuBody open={open} isActive={isActive} onNavigate={close} />
        </div>
      </div>
    </>
  );
}
