"use client";

import { useState } from "react";
import OutlineButton from "@/components/ui/outline-button";
import Pill from "@/components/ui/pill";

// ───────── Copy for this section: edit the words here ─────────
const HEADING = ["Receipts,", "not promises"];
const TABS = ["/014 Roofing", "/022 HVAC", "/031 Dental"];
const SAMPLE_NOTE = "";

const TILE = {
  client: "Client/014",
  place: "Plano · Roofing",
  big: "+212%",
  caption: ["Inbound calls", "6 months"],
  text: "From 41 calls a month to 128. Counted by call-tracking numbers, not by us.",
  chartLabel: "Line chart: monthly inbound calls climbing from 41 to 128 over six months",
  start: "Month 0 · 41",
  end: "Month 6 · 128",
};

const RECEIPT = {
  brand: "TECHX®",
  title: "RESULT RECEIPT · NO. 014",
  services: [
    ["LOCAL SEO", "DONE"],
    ["WEB REBUILD", "DONE"],
    ["GOOGLE ADS", "DONE"],
  ],
  numbers: [
    ["CALLS / MO BEFORE", "41"],
    ["CALLS / MO AFTER", "128"],
    ["MAPS RANK", "#14 → #2"],
  ],
  totalLabel: "NEW REVENUE",
  total: "$38,400/MO",
  thanks: "THANK YOU · WE GOT THE CALL",
};

const CALLS_TITLE = "Call tracking / today";
const CALLS_CLIENT = "Client/014";
const CALLS_CLIENT_SHORT = "/014";
const CALLS = [
  { time: "09:42", phone: "(214) ***-**18", what: "Roof repair", length: "4:12", status: "BOOKED", fade: "" },
  { time: "09:31", phone: "(972) ***-**07", what: "Storm damage", length: "6:48", status: "BOOKED", fade: "" },
  { time: "09:12", phone: "(469) ***-**33", what: "Free estimate", length: "2:05", status: "QUOTED", fade: "" },
  { time: "08:57", phone: "(214) ***-**61", what: "Leak inspection", length: "3:30", status: "BOOKED", fade: "opacity-[.62]" },
  { time: "08:40", phone: "(817) ***-**24", what: "Roof replacement", length: "7:21", status: "BOOKED", fade: "opacity-30" },
];
const CALLS_SUMMARY = [
  { value: "24", label: "calls today", accent: false },
  { value: "17", label: "booked", accent: false },
  { value: "71%", label: "close rate", accent: true },
];

const FOOTER_LABEL = "Every trade has its own receipts";
const FOOTER_CTA = "See your industry";

// ───────── Small local pieces ─────────
const mono = "font-mono uppercase tracking-[.1em]";

function Badge({ status }: { status: string }) {
  return status === "BOOKED" ? (
    <span className="rounded-[3px] bg-ink px-2 py-1 text-[10px] tracking-[.1em] text-page md:px-[9px]">{status}</span>
  ) : (
    <span className="rounded-[3px] border border-ink px-[7px] py-[3px] text-[10px] tracking-[.1em] md:px-2">{status}</span>
  );
}

function ReceiptLine({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex gap-2">
      <span>{left}</span>
      <span className="flex-1 -translate-y-1.5 border-b border-dotted border-[#9A9CA3]" />
      <span>{right}</span>
    </div>
  );
}

const rule = "my-[10px] border-t border-dashed border-[#9A9CA3] md:my-3";

export default function Receipts() {
  const [tab, setTab] = useState(0);

  return (
    <section id="results" className="box-border w-full bg-panel md:flex md:min-h-[100svh]">
      <div className="box-border flex flex-col gap-5 overflow-hidden bg-panel px-[18px] py-6 md:w-full md:gap-[clamp(16px,3vh,28px)] md:px-10 md:pb-6 md:pt-[clamp(96px,12vh,120px)]">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-8">
          <div>
            <h2 className="m-0 text-[42px] font-semibold leading-[.92] tracking-[-0.06em] md:text-[clamp(40px,min(6.6vw,8.4vh),104px)] md:leading-[.88]">
              <span className="block">{HEADING[0]}</span>
              <span className="block">
                {HEADING[1]}
                <span className="text-accent">.</span>
              </span>
            </h2>
          </div>
          <div className="flex flex-col md:max-w-[420px] md:items-end md:gap-[18px]">
            <div className="mt-[14px] flex flex-wrap gap-1.5 md:mt-0 md:justify-end md:gap-2">
              {TABS.map((t, i) => (
                <Pill key={t} active={tab === i} onClick={() => setTab(i)} className="min-h-11 px-3 md:min-h-0 md:px-4 md:py-[10px]">
                  {t}
                </Pill>
              ))}
            </div>
            <div className={`${mono} mt-[10px] text-[10px] font-semibold text-accent md:mt-0`}>{SAMPLE_NOTE}</div>
          </div>
        </div>

        {/* BOXES: about one screen tall on desktop, starting below the heading */}
        <div className="flex flex-col gap-5 md:min-h-[calc(100svh-48px)] md:gap-[clamp(12px,2vh,20px)]">
        {/* TILE + RECEIPT */}
        <div className="flex flex-col gap-5 md:flex-1 md:flex-row md:items-stretch md:gap-4">
          <div className="box-border flex min-w-0 flex-col gap-4 rounded-2xl bg-accent p-[18px] md:flex-[6_1_0%] md:justify-between md:gap-[clamp(12px,2.4vh,24px)] md:p-[clamp(20px,3vh,32px)]">
            <div className={`${mono} flex justify-between gap-3 text-[11px] md:gap-4 md:text-[12px]`}>
              <span>{TILE.client}</span>
              <span>{TILE.place}</span>
            </div>
            <div>
              <div
                data-anim="count"
                className="-ml-1 text-[96px] font-semibold leading-[.82] tracking-[-0.07em] text-ink md:-ml-1.5 md:text-[clamp(80px,min(12vw,17vh),210px)]"
              >
                {TILE.big}
              </div>
              <div className="mt-[14px] flex flex-wrap items-end justify-between gap-x-10 gap-y-3 md:mt-[22px]">
                <div className={`${mono} text-[11px] leading-[1.7] md:text-[12px]`}>
                  {TILE.caption[0]}
                  <span className="md:hidden"> · </span>
                  <br className="hidden md:block" />
                  {TILE.caption[1]}
                </div>
                <p className="m-0 mt-2 max-w-[340px] text-[15px] leading-[1.45] text-ink md:mt-0 md:text-[16px]">{TILE.text}</p>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 600 150"
                width="100%"
                preserveAspectRatio="none"
                role="img"
                aria-label={TILE.chartLabel}
                className="block h-16 md:h-[clamp(48px,9vh,120px)]"
              >
                <g stroke="#0B0B0C" strokeOpacity=".28" strokeDasharray="4 5" strokeWidth="1">
                  <line x1="0" y1="30" x2="600" y2="30" />
                  <line x1="0" y1="75" x2="600" y2="75" />
                  <line x1="0" y1="120" x2="600" y2="120" />
                </g>
                <path d="M0 124 C60 122 100 116 150 106 S240 90 290 76 S400 52 450 34 S540 14 592 10 L592 150 L0 150 Z" fill="#0B0B0C" fillOpacity=".1" />
                <path d="M0 124 C60 122 100 116 150 106 S240 90 290 76 S400 52 450 34 S540 14 592 10" fill="none" stroke="#0B0B0C" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="592" cy="10" r="9" fill="#F7F7F8" stroke="#0B0B0C" strokeWidth="2.5" />
              </svg>
              <div className={`${mono} mt-2 flex justify-between text-[10px] md:mt-[10px] md:text-[11px]`}>
                <span>{TILE.start}</span>
                <span>{TILE.end}</span>
              </div>
            </div>
          </div>

          {/* receipt */}
          <div className="flex min-w-0 items-center justify-center px-2 pb-1 pt-[10px] md:flex-[4_1_0%] md:px-5 md:pb-0 md:pt-0">
            <div className="w-full max-w-[290px] rotate-[-2deg] [filter:drop-shadow(0_18px_18px_rgba(11,11,12,.2))] md:max-w-[340px] md:[zoom:.92] md:rotate-[-2.2deg] md:[filter:drop-shadow(0_22px_22px_rgba(11,11,12,.2))]">
              <div className="bg-[#FBFBF9] px-[18px] pb-3 pt-5 font-mono text-[11px] leading-[1.75] tracking-[.02em] md:px-[26px] md:pb-5 md:pt-7 md:text-[12px] md:leading-[1.9]">
                <div className="text-center text-[13px] font-semibold tracking-[.2em] md:text-[14px]">{RECEIPT.brand}</div>
                <div className="text-center text-[10px] tracking-[.1em] text-[#5C5F66] md:text-[11px]">{RECEIPT.title}</div>
                <div className={rule} />
                {RECEIPT.services.map(([l, r]) => (
                  <ReceiptLine key={l} left={l} right={r} />
                ))}
                <div className={rule} />
                {RECEIPT.numbers.map(([l, r]) => (
                  <ReceiptLine key={l} left={l} right={r} />
                ))}
                <div className={rule} />
                <div className="flex items-baseline justify-between text-[14px] font-semibold md:text-[15px]">
                  <span>{RECEIPT.totalLabel}</span>
                  <span className="text-accent">{RECEIPT.total}</span>
                </div>
                <div className={`${rule} hidden md:block`} />
                <div
                  aria-hidden="true"
                  className="hidden h-[46px] md:block"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg,#0B0B0C 0 2px,transparent 2px 4px,#0B0B0C 4px 5px,transparent 5px 9px,#0B0B0C 9px 12px,transparent 12px 14px,#0B0B0C 14px 15px,transparent 15px 18px)",
                  }}
                />
                <div className="mt-2 text-center text-[9px] tracking-[.2em] text-[#5C5F66] md:text-[10px]">{RECEIPT.thanks}</div>
              </div>
              <svg width="100%" height="12" viewBox="0 0 340 12" preserveAspectRatio="none" className="block" aria-hidden="true">
                <polygon
                  points="0,0 340,0 323,12 306,0 289,12 272,0 255,12 238,0 221,12 204,0 187,12 170,0 153,12 136,0 119,12 102,0 85,12 68,0 51,12 34,0 17,12"
                  fill="#FBFBF9"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* CALL LOG */}
        <div className="box-border flex flex-col gap-[10px] rounded-2xl border border-[#DADCE1] bg-white p-[18px] md:ml-auto md:w-[62%] md:gap-[clamp(6px,1.2vh,14px)] md:p-[clamp(18px,2.8vh,28px)]">
          <div className={`${mono} flex items-center justify-between gap-3 text-[11px] md:gap-4 md:text-[12px]`}>
            <span className="flex items-center gap-2 md:gap-[10px]">
              <span className="pulse inline-block size-2 rounded-full bg-accent md:size-[9px]" />
              {CALLS_TITLE}
            </span>
            <span className="text-[#5C5F66]">
              <span className="md:hidden">{CALLS_CLIENT_SHORT}</span>
              <span className="hidden rounded-full border border-[#DADCE1] px-3 py-1 md:inline">{CALLS_CLIENT}</span>
            </span>
          </div>

          {/* mobile rows (first three only, as designed) */}
          <div className="md:hidden">
            {CALLS.slice(0, 3).map((c) => (
              <div key={c.time} className="border-t border-dashed border-[#A9ACB4] py-[10px]">
                <div className="flex items-center justify-between font-mono text-[12px]">
                  <span>
                    {c.time} · {c.phone}
                  </span>
                  <Badge status={c.status} />
                </div>
                <div className="mt-[5px] text-[15px] font-medium tracking-[-0.01em]">
                  {c.what} <span className="font-mono text-[12px] text-[#5C5F66]">· {c.length}</span>
                </div>
              </div>
            ))}
          </div>
          {/* desktop rows */}
          <div className="hidden flex-col md:flex">
            {CALLS.map((c, i) => {
              const [m, sec] = c.length.split(":").map(Number);
              const pct = Math.min(100, ((m * 60 + sec) / 480) * 100);
              return (
                <div
                  key={c.time}
                  className={`grid grid-cols-[64px_150px_1fr_130px_84px] items-center gap-x-5 border-t border-dashed border-[#DADCE1] py-[clamp(7px,1.5vh,15px)] ${c.fade}`}
                >
                  <span className="flex items-center gap-2 font-mono text-[13px] text-[#5C5F66]">
                    {i === 0 ? <span className="pulse size-1.5 rounded-full bg-accent" /> : <span className="size-1.5" />}
                    {c.time}
                  </span>
                  <span className="font-mono text-[13px]">{c.phone}</span>
                  <span className="text-[16px] font-medium tracking-[-0.01em]">{c.what}</span>
                  <span className="flex items-center gap-3 font-mono text-[12px] text-[#5C5F66]">
                    <span className="h-[3px] flex-1 overflow-hidden rounded-full bg-[#E4E5E9]">
                      <span className="block h-full rounded-full bg-ink" style={{ width: pct + "%" }} />
                    </span>
                    {c.length}
                  </span>
                  <span className="flex justify-end font-mono">
                    <Badge status={c.status} />
                  </span>
                </div>
              );
            })}
          </div>

          {/* summary: plain text row on mobile, stat blocks on desktop */}
          <div className={`${mono} flex flex-wrap justify-between gap-2 border-t border-ink pt-[14px] text-[11px] tracking-[.08em] md:hidden`}>
            {CALLS_SUMMARY.map((x) => (
              <span key={x.label} className={x.accent ? "font-semibold text-accent" : ""}>
                {x.value} {x.label}
              </span>
            ))}
          </div>
          <div className="hidden grid-cols-3 divide-x divide-[#DADCE1] border-t border-ink pt-[clamp(10px,2vh,18px)] md:grid">
            {CALLS_SUMMARY.map((x, i) => (
              <div key={x.label} className={`flex items-baseline gap-3 ${i > 0 ? "pl-6" : ""}`}>
                <span className={`text-[clamp(28px,4vh,40px)] font-semibold leading-none tracking-[-0.04em] ${x.accent ? "text-accent" : ""}`}>{x.value}</span>
                <span className="font-mono text-[11px] uppercase tracking-[.1em] text-[#5C5F66]">{x.label}</span>
              </div>
            ))}
          </div>
        </div>

        </div>

        {/* FOOTER ROW */}
        <div className="flex flex-col gap-3 border-t border-dashed border-[#A9ACB4] pt-[18px] md:hidden">
          <span className={`${mono} hidden text-[12px] md:inline`}>{FOOTER_LABEL}</span>
          <OutlineButton
            href="#industries"
            className="box-border min-h-12 justify-center gap-[10px] px-5 text-[12px] tracking-[.1em] md:min-h-0 md:py-[13px]"
          >
            {FOOTER_CTA}
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
