import type { Client } from "./types";

export const WEEKS = 26; // six months of weekly points
export const START_WEEK = 8; // the first 8 weeks are the "before"

export type Point = { w: number; clicks: number; impressions: number };

// small deterministic random, so the graph is identical on every load
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const smooth = (t: number) => t * t * (3 - 2 * t); // slow start, steady climb, soft landing

// How each client's climb is shaped, so switching tabs shows real change: a steady build, a slow start that takes
// off late, or a quick surge that levels off.
const curve = {
  steady: (t: number) => smooth(t),
  late: (t: number) => Math.pow(t, 2.3),
  early: (t: number) => 1 - Math.pow(1 - t, 2.3),
};

// A few honest dips per client (a holiday week, a slow week): week number to a multiplier below 1.
const DIPS: Record<Client["clicks"]["shape"], Record<number, number>> = {
  steady: { 13: 0.86, 14: 0.93, 19: 0.89, 23: 0.94 },
  late: { 12: 0.9, 17: 0.8, 18: 0.9, 22: 0.9 },
  early: { 11: 0.86, 16: 0.82, 21: 0.9, 24: 0.92 },
};

// Two real-looking weekly series: low and flat before we started, then a climb with week-to-week noise.
export function buildSeries(c: Client): Point[] {
  const rand = rng(c.clicks.seed);
  const shape = c.clicks.shape;
  return Array.from({ length: WEEKS }, (_, w) => {
    const t = w < START_WEEK ? 0 : (w - START_WEEK) / (WEEKS - 1 - START_WEEK);
    const dip = DIPS[shape][w] ?? 1;
    const amp = w < START_WEEK ? 0.2 : 0.14;
    // impressions come first: you get seen, then the clicks follow. When clicks level off, impressions keep rising.
    const tImpr = shape === "late" ? smooth(Math.min(1, t * 1.25)) : shape === "early" ? 0.55 * curve.early(t) + 0.45 * smooth(t) : smooth(Math.min(1, t * 1.12));
    const clicks = (c.clicks.low + (c.clicks.high - c.clicks.low) * curve[shape](t)) * dip * (1 + (rand() - 0.5) * amp);
    const impressions = (c.impressions.low + (c.impressions.high - c.impressions.low) * tImpr) * (dip + (1 - dip) * 0.6) * (1 + (rand() - 0.5) * amp);
    return { w, clicks: Math.round(clicks), impressions: Math.round(impressions) };
  });
}

// percent gain: the last four weeks against the weeks before we started
export function gainOf(points: Point[], key: "clicks" | "impressions") {
  const avg = (xs: Point[]) => xs.reduce((s, p) => s + p[key], 0) / xs.length;
  return Math.round((avg(points.slice(-4)) / avg(points.slice(0, START_WEEK)) - 1) * 100);
}

export const totalOf = (points: Point[], key: "clicks" | "impressions") => points.reduce((s, p) => s + p[key], 0);

// a round axis top and step, so both axes get four even intervals and the gridlines serve both
export function niceAxis(max: number, headroom = 1.05) {
  const raw = (max * headroom) / 4;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 1.5, 2, 2.5, 5, 10].map((m) => m * pow).find((x) => x >= raw) ?? raw;
  return { step, top: step * 4, ticks: [0, 1, 2, 3, 4].map((i) => i * step) };
}

// month labels along the bottom: the last six months, one tick where each month begins
export function monthTicks() {
  const today = new Date();
  const names = new Map<number, string>();
  let prev = -1;
  for (let w = 0; w < WEEKS; w++) {
    const d = new Date(today.getTime() - (WEEKS - 1 - w) * 7 * 864e5);
    if (d.getMonth() !== prev) {
      names.set(w, d.toLocaleString("en-US", { month: "short" }));
      prev = d.getMonth();
    }
  }
  // a half-month sliver at the start would crowd the next label, so drop it
  const keys = Array.from(names.keys());
  if (keys.length > 1 && keys[1] - keys[0] < 4) names.delete(keys[0]);
  return names;
}

export function weekLabel(w: number) {
  const d = new Date(Date.now() - (WEEKS - 1 - w) * 7 * 864e5);
  return d.toLocaleString("en-US", { month: "short", day: "numeric" });
}

// compact numbers: 1,284 / 12.9K
export const compact = (n: number) => (n >= 10000 ? `${(n / 1000).toFixed(n >= 100000 ? 0 : 1).replace(/\.0$/, "")}K` : n.toLocaleString("en-US"));
