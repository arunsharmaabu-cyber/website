"use client";

import { useEffect, useRef, useState } from "react";
import Pill from "@/components/ui/pill";
import ResultsChart from "@/components/sections/results/results-chart";
import GoogleResults from "@/components/sections/results/google-results";
import type { Client } from "@/components/sections/results/types";
import { buildSeries } from "@/components/sections/results/series";

// ───────── Copy for this section: edit the words here ─────────
// Numbers and business names below are samples. Swap in real ones: the graph, the big number, the
// stats and the Google block all read from this list.
const HEADING = ["Receipts,", "not promises"];

const CLIENTS: Client[] = [
  {
    id: "roofing",
    tab: "Roofing",
    tag: "Client/014 · Plano · Roofing",
    clicks: { low: 90, high: 410, seed: 14, shape: "steady" },
    impressions: { low: 2400, high: 9800 },
    milestones: [
      { w: 10, text: "Google profile and map listing rebuilt" },
      { w: 15, text: "New fast site with tap-to-call goes live" },
      { w: 20, text: "Local ads switched on, every call tracked" },
    ],
    query: "roof repair plano",
    listing: {
      name: "Lone Star Roofing",
      url: "lonestarroofingplano.com › roof-repair",
      title: "Roof Repair in Plano, TX | Same-Day Estimates",
      snippet: "Storm damage, leaks and full roof repair across Plano and Collin County. Licensed, insured, and we answer the phone.",
      place: "Plano, TX",
      rating: "4.9",
      reviews: "212 reviews",
    },
    keywords: [
      { kw: "roof repair plano", from: 14, now: 1 },
      { kw: "roofer near me", from: 21, now: 2 },
      { kw: "storm damage roof repair", from: 18, now: 3 },
      { kw: "roof replacement plano", from: 9, now: 1 },
      { kw: "emergency roof leak repair", from: 27, now: 4 },
    ],
  },
  {
    id: "hvac",
    tab: "HVAC",
    tag: "Client/022 · Frisco · HVAC",
    clicks: { low: 130, high: 560, seed: 22, shape: "late" },
    impressions: { low: 3600, high: 12400 },
    milestones: [
      { w: 10, text: "A service page written for every town" },
      { w: 15, text: "Review requests sent after every job" },
      { w: 20, text: "Search ads and call tracking switched on" },
    ],
    query: "ac repair frisco",
    listing: {
      name: "Cool Breeze Heating & Air",
      url: "coolbreezehvacfrisco.com › ac-repair",
      title: "AC Repair in Frisco, TX | 24/7 Service",
      snippet: "Fast AC repair and furnace repair, tune-ups and installs for Frisco homes. Upfront pricing and a tech at your door today.",
      place: "Frisco, TX",
      rating: "4.8",
      reviews: "187 reviews",
    },
    keywords: [
      { kw: "ac repair frisco", from: 11, now: 1 },
      { kw: "hvac near me", from: 19, now: 2 },
      { kw: "furnace repair frisco", from: 15, now: 1 },
      { kw: "ac installation frisco", from: 23, now: 3 },
      { kw: "emergency hvac service", from: 31, now: 4 },
    ],
  },
  {
    id: "dental",
    tab: "Dental",
    tag: "Client/031 · McKinney · Dental",
    clicks: { low: 70, high: 330, seed: 31, shape: "early" },
    impressions: { low: 1900, high: 7600 },
    milestones: [
      { w: 10, text: "Google profile and photos rebuilt" },
      { w: 15, text: "New booking-ready site goes live" },
      { w: 20, text: "Review requests sent after every visit" },
    ],
    query: "dentist mckinney",
    listing: {
      name: "Bright Family Dental",
      url: "brightfamilydentalmckinney.com",
      title: "Dentist in McKinney, TX | New Patients Welcome",
      snippet: "Gentle family dentist care, implants and same-week emergency visits. Most insurance accepted, evening hours available.",
      place: "McKinney, TX",
      rating: "4.9",
      reviews: "164 reviews",
    },
    keywords: [
      { kw: "dentist mckinney", from: 9, now: 1 },
      { kw: "emergency dentist near me", from: 17, now: 2 },
      { kw: "teeth whitening mckinney", from: 22, now: 3 },
      { kw: "dental implants mckinney", from: 13, now: 2 },
      { kw: "family dentist near me", from: 26, now: 1 },
    ],
  },
];

// the largest weekly numbers across all clients: one shared scale for the graph
const ALL = CLIENTS.flatMap((c) => buildSeries(c));
const SCALE = { clicks: Math.max(...ALL.map((p) => p.clicks)), impressions: Math.max(...ALL.map((p) => p.impressions)) };

export default function Receipts() {
  const [tab, setTab] = useState(0);
  const [seen, setSeen] = useState(false);
  const [paused, setPaused] = useState(false); // true while the pointer or focus is on the results
  const ref = useRef<HTMLDivElement>(null);
  const client = CLIENTS[tab];

  // start the graph and the counters when the section comes into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // every 5 seconds the next client comes up on its own. The timer restarts after any change (a click included),
  // pauses while the pointer is over the results, and does nothing with reduced motion.
  useEffect(() => {
    if (!seen || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setTab((t) => (t + 1) % CLIENTS.length), 5000);
    return () => window.clearTimeout(id);
  }, [seen, paused, tab]);

  return (
    <section id="results" className="box-border w-full bg-panel">
      <div className="box-border flex flex-col gap-8 px-5 py-16 md:gap-[clamp(28px,5vh,48px)] md:px-10 md:py-[clamp(88px,12vh,128px)]">
        {/* HEADER: heading + the tabs that drive the graph and the search results */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
          <h2 className="m-0 text-[42px] font-semibold leading-[.92] tracking-[-0.06em] md:text-[clamp(40px,min(6.6vw,8.4vh),104px)] md:leading-[.88]">
            <span className="block">{HEADING[0]}</span>
            <span className="block">
              {HEADING[1]}
              <span className="text-accent">.</span>
            </span>
          </h2>
          <div role="group" aria-label="Choose a client" className="flex flex-wrap gap-1.5 md:justify-end md:gap-2">
            {CLIENTS.map((c, i) => (
              <Pill key={c.id} active={tab === i} onClick={() => setTab(i)} className="min-h-11 px-3 md:min-h-0 md:px-4 md:py-[10px]">
                {c.tab}
              </Pill>
            ))}
          </div>
        </div>

        {/* BODY: the graph and the Google results, both follow the active tab */}
        <div
          ref={ref}
          onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="grid gap-12 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] md:items-start md:gap-16">
          <ResultsChart client={client} run={seen} scale={SCALE} />
          {/* on desktop it steps down: it starts about 70% of the way down the graph, so the two are not side by side */}
          <div className="md:mt-[200px]">
            <GoogleResults key={client.id} client={client} run={seen} />
          </div>
        </div>
      </div>
    </section>
  );
}
