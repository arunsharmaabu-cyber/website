"use client";

import { useEffect, useState } from "react";
import type { Client } from "./types";
import { useTween } from "./use-tween";

// ───────── Copy for this panel: edit the words here ─────────
const TITLE = "How you look on Google";
const COLS = { kw: "Keyword", rank: "Position" };
const FROM = "was";
const SHOWN = 4; // how many keywords to show
const MAX_POS = 32; // the track runs from #1 (left) to this position (right)
const TICKS = [1, 10, 20, 30];

const pct = (pos: number) => ((Math.min(pos, MAX_POS) - 1) / (MAX_POS - 1)) * 100;

// Bold the words the searcher typed, the way a results page does.
function Highlight({ text, query }: { text: string; query: string }) {
  const words = query.split(/\s+/).filter(Boolean);
  const re = new RegExp(`\\b(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "gi");
  return (
    <>
      {text.split(re).map((part, i) =>
        i % 2 === 1 ? (
          <b key={i} className="font-semibold text-ink">
            {part}
          </b>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

// One keyword on one line (two on phones): its name, a small 1-to-30 track, and its position.
// Grey ring = where we started, orange dot = where it is now.
function Row({ kw, from, now, go, delay, run }: { kw: string; from: number; now: number; go: boolean; delay: number; run: boolean }) {
  const shown = Math.round(useTween(now, run, 1100, from)); // counts down from where we started
  const t = `1100ms cubic-bezier(.22,1,.36,1) ${delay}ms`;
  return (
    <li
      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2.5 border-t border-[#DADCE1] py-3 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] md:py-2.5"
      aria-label={`${kw}: position ${now}, was ${from}`}
    >
      <span className="min-w-0 truncate text-[15px] font-medium tracking-[-0.01em] text-ink">{kw}</span>

      <span className="relative col-span-2 row-start-2 block h-3.5 md:col-span-1 md:col-start-2 md:row-start-1" aria-hidden="true">
        {/* page one, lightly tinted: it runs the full height of the row so the rows read as one band */}
        <span className="absolute -inset-y-3 left-0 rounded-[2px] bg-accent/[.08] md:-inset-y-2.5" style={{ width: `${pct(10)}%` }} />
        <span
          className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-accent/40"
          style={{ right: `${100 - pct(from)}%`, width: go ? `${pct(from) - pct(now)}%` : 0, transition: `width ${t}` }}
        />
        <span
          className="absolute top-1/2 size-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#8D9098] bg-white"
          style={{ left: `${pct(from)}%` }}
        />
        <span
          className="absolute top-1/2 size-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
          style={{ left: `${go ? pct(now) : pct(from)}%`, transition: `left ${t}`, boxShadow: "0 0 0 2px var(--panel)" }}
        />
      </span>

      <span className="flex items-baseline gap-2 justify-self-end tabular-nums md:col-start-3 md:row-start-1">
        <span className="text-[12px] text-[#5C5F66]">
          {FROM} #{from}
        </span>
        <span className="min-w-[34px] text-right text-[20px] font-semibold leading-none tracking-[-0.04em] text-ink">#{shown}</span>
      </span>
    </li>
  );
}

// The search-results side, kept compact: one card (search bar + the client's listing as Google shows it) and a
// short keyword list with before and after positions. No logos, no box around the whole thing.
export default function GoogleResults({ client, run }: { client: Client; run: boolean }) {
  const l = client.listing;
  const [go, setGo] = useState(false);

  // let the dots start at "from", then glide to "now" once the panel is on screen
  useEffect(() => {
    if (!run) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setGo(true)));
    return () => cancelAnimationFrame(id);
  }, [run]);

  return (
    <div className="flex min-w-0 flex-col gap-5">
      <div className="text-[18px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[20px]">{TITLE}</div>

      {/* one card: the search bar on top, the result below it */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(11,11,12,.04),0_16px_32px_-22px_rgba(11,11,12,.4)]">
        <div className="flex h-12 items-center gap-3 border-b border-[#ECEDF0] px-4">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#5C5F66" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l4.5 4.5" />
          </svg>
          <span className="min-w-0 flex-1 truncate text-[15px] text-ink">{client.query}</span>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-7 flex-none items-center justify-center rounded-full bg-ink text-[12px] font-semibold text-page" aria-hidden="true">
              {l.name.charAt(0)}
            </span>
            <div className="min-w-0">
              <div className="truncate text-[14px] font-medium leading-tight text-ink">{l.name}</div>
              <div className="truncate text-[12px] leading-tight text-[#5C5F66]">{l.url}</div>
            </div>
          </div>
          <div className="mt-2 text-[18px] font-medium leading-[1.25] tracking-[-0.01em] text-[#1F4FBF] md:text-[19px]">{l.title}</div>
          <p className="m-0 mt-1 line-clamp-2 text-[13px] leading-[1.5] text-[#3A3C42]">
            <Highlight text={l.snippet} query={client.query} />
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-2 text-[12px] text-[#3A3C42]">
            <span className="font-medium text-ink">{l.rating}</span>
            <span className="tracking-[.04em] text-[#E7A400]" aria-hidden="true">
              ★★★★★
            </span>
            <span className="text-[#5C5F66]">
              ({l.reviews}) · {l.place}
            </span>
          </div>
        </div>
      </div>

      {/* keyword positions: before and after on one shared 1-to-30 track */}
      <div>
        <div className="hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] items-end gap-x-4 pb-2 text-[11px] text-[#5C5F66] md:grid" aria-hidden="true">
          <span>{COLS.kw}</span>
          <span className="relative block h-3.5">
            {TICKS.map((p) => (
              <span key={p} className={`absolute bottom-0 whitespace-nowrap ${p === 1 ? "" : "-translate-x-1/2"}`} style={{ left: `${pct(p)}%` }}>
                {`#${p}`}
              </span>
            ))}
          </span>
          <span className="min-w-[88px] text-right">{COLS.rank}</span>
        </div>
        <ul className="m-0 list-none border-b border-[#DADCE1] p-0">
          {client.keywords.slice(0, SHOWN).map((k, i) => (
            <Row key={`${client.id}-${k.kw}`} kw={k.kw} from={k.from} now={k.now} go={go} delay={150 + i * 110} run={run} />
          ))}
        </ul>
      </div>
    </div>
  );
}
