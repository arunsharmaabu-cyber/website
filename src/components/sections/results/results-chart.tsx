"use client";

import { Area, CartesianGrid, ComposedChart, Line, ReferenceArea, ReferenceDot, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { Client } from "./types";
import { buildSeries, gainOf, monthTicks, niceAxis, START_WEEK, WEEKS, weekLabel, type Point } from "./series";

// ───────── Copy for this graph: edit the words here ─────────
const TITLE = "Google search performance";
const CLICKS = { axis: "Clicks" };
const IMPRESSIONS = { axis: "Impressions" };
const START_LABEL = "We start here";

const ORANGE = "#FF4D00"; // clicks
const SLATE = "#0B0B0C"; // impressions
const BEFORE_BAND = "rgba(11,11,12,.045)";
const INK = "#0B0B0C";
const INK_2 = "#3A3C42";
const INK_3 = "#5C5F66";
const GRID = "rgba(11,11,12,.1)";
const DURATION = 1200;

// The pins and the end markers fade in once the lines have finished drawing.
const KEYFRAMES = "@keyframes rg-in{from{opacity:0}to{opacity:1}}";
const later = { animation: `rg-in 500ms ease ${DURATION - 150}ms both` } as const;

type TipProps = { active?: boolean; payload?: ReadonlyArray<{ payload?: Point }> };

function Tip({ active, payload }: TipProps) {
  const p = payload?.[0]?.payload;
  if (!active || !p) return null;
  return (
    <div className="min-w-[170px] rounded-lg border border-[#DADCE1] bg-white px-3 py-2.5 shadow-[0_8px_22px_-10px_rgba(11,11,12,.35)]">
      <div className="text-[12px] text-[#5C5F66]">Week of {weekLabel(p.w)}</div>
      <div className="mt-1.5 flex items-center justify-between gap-6 text-[14px] text-ink">
        <span className="flex items-center gap-2">
          <span className="h-[3px] w-3.5 rounded-full" style={{ background: ORANGE }} />
          Clicks
        </span>
        <b className="font-semibold tabular-nums">{p.clicks.toLocaleString("en-US")}</b>
      </div>
      <div className="mt-1 flex items-center justify-between gap-6 text-[14px] text-ink">
        <span className="flex items-center gap-2">
          <span className="h-[3px] w-3.5 rounded-full" style={{ background: SLATE }} />
          Impressions
        </span>
        <b className="font-semibold tabular-nums">{p.impressions.toLocaleString("en-US")}</b>
      </div>
    </div>
  );
}

// The end of a line: a ringed dot that fades in last.
function EndDot({ color, ...p }: { color: string; cx?: number; cy?: number; index?: number }) {
  if (p.index !== WEEKS - 1 || p.cx == null || p.cy == null) return <g />;
  return (
    <g style={later}>
      <circle cx={p.cx} cy={p.cy} r={5} fill={color} style={{ stroke: "var(--panel)", strokeWidth: 2 }} />
    </g>
  );
}

// A numbered pin sitting on the clicks line at the week something was done.
function Pin({ cx, cy, n }: { cx?: number; cy?: number; n: number }) {
  if (cx == null || cy == null) return <g />;
  return (
    <g style={later}>
      <circle cx={cx} cy={cy} r={11} fill={INK} style={{ stroke: "var(--panel)", strokeWidth: 2 }} />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="12" fontWeight="600" fill="#F7F7F8">
        {n}
      </text>
    </g>
  );
}

// An analytics-style graph straight on the page: two lines (clicks, impressions) each on its own scale, a shaded
// "before" period and numbered pins on the clicks line. Hover shows the exact numbers.
export default function ResultsChart({ client, run, scale }: { client: Client; run: boolean; scale: { clicks: number; impressions: number } }) {
  const points = buildSeries(client);
  const clicksGain = gainOf(points, "clicks");
  const imprGain = gainOf(points, "impressions");
  const names = run ? monthTicks() : new Map<number, string>(); // dates are read only on the client, once it is on screen
  const ticks = Array.from(names.keys());
  // one shared scale for every client, so on a tab change the gridlines hold still and the lines glide between values
  const left = niceAxis(scale.clicks);
  const right = niceAxis(scale.impressions, 1.45); // more headroom, so the two lines do not sit on top of each other
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const label = `${client.tag}. Weekly clicks from Google rose ${clicksGain} percent and impressions rose ${imprGain} percent over six months, with a few small dips along the way.`;

  return (
    <figure className="m-0 flex h-full min-w-0 flex-col gap-6 md:gap-7">
      <style>{KEYFRAMES}</style>

      <div role="img" aria-label={label} className="relative h-[250px] w-full md:h-[290px]">
        {/* axis titles, each marked with its line's colour */}
        <span className="absolute -top-1 left-0 z-10 flex items-center gap-1.5 text-[12px] text-[#5C5F66]">
          <span className="size-2 rounded-full" style={{ background: ORANGE }} />
          {CLICKS.axis}
        </span>
        <span className="absolute -top-1 right-0 z-10 flex items-center gap-1.5 text-[12px] text-[#5C5F66]">
          {IMPRESSIONS.axis}
          <span className="size-2 rounded-full" style={{ background: SLATE }} />
        </span>
        {run && (
          <ResponsiveContainer width="100%" height="100%" initialDimension={{ width: 720, height: 290 }}>
            <ComposedChart data={points} margin={{ top: 26, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="rg-clicks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor={ORANGE} stopOpacity={0.16} />
                  <stop offset="1" stopColor={ORANGE} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid yAxisId="left" vertical={false} stroke={GRID} strokeWidth={1} />
              <XAxis
                dataKey="w"
                type="number"
                domain={[0, WEEKS - 1]}
                ticks={ticks}
                tickFormatter={(w: number) => names.get(w) ?? ""}
                axisLine={{ stroke: GRID }}
                tickLine={false}
                tick={{ fill: INK_3, fontSize: 12 }}
                dy={8}
                interval={0}
                padding={{ left: 4, right: 4 }}
              />
              <YAxis yAxisId="left" orientation="left" domain={[0, left.top]} ticks={left.ticks} axisLine={false} tickLine={false} tick={{ fill: INK_3, fontSize: 12 }} width={36} />
              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[0, right.top]}
                ticks={right.ticks}
                axisLine={false}
                tickLine={false}
                tick={{ fill: INK_3, fontSize: 12 }}
                width={40}
                tickFormatter={(v: number) => (v >= 1000 ? `${v / 1000}K` : String(v))}
              />
              <Tooltip content={<Tip />} cursor={{ stroke: INK, strokeOpacity: 0.3, strokeWidth: 1 }} />

              {/* the weeks before we started, lightly shaded, and the day we started */}
              <ReferenceArea yAxisId="left" x1={0} x2={START_WEEK} fill={BEFORE_BAND} ifOverflow="visible" />
              <ReferenceLine
                yAxisId="left"
                x={START_WEEK}
                stroke={INK}
                strokeOpacity={0.4}
                label={{ value: START_LABEL, position: "insideTopLeft", fill: INK_2, fontSize: 12, dx: 8, dy: 2 }}
              />

              <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="impressions"
                  stroke={SLATE}
                  strokeWidth={2}
                  strokeDasharray="6 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  dot={(p) => <EndDot key={p.index} color={SLATE} cx={p.cx} cy={p.cy} index={p.index} />}
                  activeDot={{ r: 4.5, fill: SLATE, style: { stroke: "var(--panel)", strokeWidth: 2 } }}
                  isAnimationActive={!reduced}
                  animationDuration={DURATION}
                  animationEasing="ease-out"
                />
              <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="clicks"
                  stroke={ORANGE}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="url(#rg-clicks)"
                  dot={(p) => <EndDot key={p.index} color={ORANGE} cx={p.cx} cy={p.cy} index={p.index} />}
                  activeDot={{ r: 5, fill: ORANGE, style: { stroke: "var(--panel)", strokeWidth: 2 } }}
                  isAnimationActive={!reduced}
                  animationDuration={DURATION}
                  animationEasing="ease-out"
                />

              {client.milestones.map((m, i) => (
                <ReferenceDot key={`${client.id}-${m.w}`} yAxisId="left" x={m.w} y={points[m.w].clicks} r={11} ifOverflow="visible" shape={<Pin n={i + 1} />} />
              ))}
            </ComposedChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* the same numbers as a table, for screen readers */}
      <table className="sr-only">
        <caption>{TITLE}</caption>
        <thead>
          <tr>
            <th>Week of</th>
            <th>Clicks</th>
            <th>Impressions</th>
          </tr>
        </thead>
        <tbody>
          {points.map((p) => (
            <tr key={p.w}>
              <td>{run ? weekLabel(p.w) : ""}</td>
              <td>{p.clicks}</td>
              <td>{p.impressions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
