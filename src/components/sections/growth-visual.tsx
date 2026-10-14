"use client";

import { useEffect, useRef, useState } from "react";

// ───────── Copy for this visual: edit the words here ─────────
const TARGET = 523;
const LABEL = "Marketing results: visitors counting up to 523 and top keywords ranking first";
const DURATION = 1600; // ms: the number counts and the growth line draws in this time

const KEYWORDS = [
  { kw: "roof repair dallas", pos: "#1" },
  { kw: "hvac near me", pos: "#2" },
  { kw: "dentist plano", pos: "#1" },
];
// bars behind the dashboards, rising left to right (height as % of the stage)
const BARS = [24, 34, 30, 46, 42, 60, 78];

// ───────── Small local pieces ─────────
const ease = "cubic-bezier(.22,1,.36,1)";
const mono = "var(--font-geist-mono), ui-monospace, monospace";
const label: React.CSSProperties = {
  fontFamily: mono,
  fontSize: "max(7px, 1.5cqw)",
  letterSpacing: ".1em",
  textTransform: "uppercase",
  color: "#5C5F66",
};

// One small white dashboard card that rises into place. Positions are % of the stage.
function Card({ play, reduced, delay, style, children }: { play: boolean; reduced: boolean; delay: number; style: React.CSSProperties; children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "absolute",
        background: "#fff",
        border: "1px solid #DADCE1",
        borderRadius: "1.6cqw",
        padding: "1.8cqw",
        boxShadow: "0 1.4cqw 2.6cqw -1.8cqw rgba(11,11,12,.3)",
        opacity: play ? 1 : 0,
        transform: play ? "translateY(0)" : "translateY(5cqw)",
        transition: reduced ? "none" : `opacity 600ms ease ${delay}ms, transform 800ms ${ease} ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Two small dashboards in the centre with growth bars and a growing line behind them.
// Plays once when it is in view; resets when it leaves, so it replays on return.
export default function GrowthVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);
  const [value, setValue] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setPlay(true);
      setValue(TARGET);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio >= 0.5) setPlay(true);
        else if (e.intersectionRatio < 0.05) setPlay(false);
      },
      { threshold: [0, 0.05, 0.5] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // count the number up while `play` is on; back to 0 when it resets
  useEffect(() => {
    if (reduced) return;
    if (!play) {
      setValue(0);
      return;
    }
    let raf = 0;
    const start = performance.now() + 300; // starts as the first dashboard lands
    const tick = (now: number) => {
      const t = Math.max(0, Math.min(1, (now - start) / DURATION));
      setValue(Math.round(TARGET * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, reduced]);

  return (
    <div ref={ref} role="img" aria-label={LABEL} className="absolute inset-0 overflow-hidden bg-panel [container-type:size]">
      {/* the stage keeps a fixed shape, and everything inside scales with its width */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "min(100cqw, 160cqh)",
          aspectRatio: "160 / 100",
          transform: "translate(-50%, -50%)",
          containerType: "inline-size",
        }}
      >
        {/* growth bars behind */}
        <div style={{ position: "absolute", left: "8%", right: "8%", bottom: "8%", top: "8%", display: "flex", alignItems: "flex-end", gap: "2.4%" }}>
          {BARS.map((h, i) => (
            <span
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: "1cqw 1cqw .4cqw .4cqw",
                background: i === BARS.length - 1 ? "#FF4D00" : "rgba(11,11,12,.09)",
                transformOrigin: "bottom",
                transform: play ? "scaleY(1)" : "scaleY(0)",
                transition: reduced ? "none" : `transform 900ms ${ease} ${i * 90}ms`,
              }}
            />
          ))}
        </div>

        {/* growth line and arrow over the bars */}
        <svg viewBox="0 0 160 100" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
          <path
            d="M14 82 L42 64 L58 70 L92 42 L108 50 L140 16"
            pathLength={1}
            fill="none"
            stroke="#FF4D00"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1"
            strokeDashoffset={play ? 0 : 1}
            style={{ transition: reduced ? "none" : `stroke-dashoffset ${DURATION}ms ${ease}` }}
          />
          <polygon
            points="0,-4 10,0 0,4"
            fill="#FF4D00"
            transform="translate(140 16) rotate(-50)"
            style={{ opacity: play ? 1 : 0, transition: reduced ? "none" : `opacity 400ms ease ${DURATION - 250}ms` }}
          />
        </svg>

        {/* dashboard 1: visitors, the number counts up */}
        <Card play={play} reduced={reduced} delay={0} style={{ left: "17%", top: "20%", width: "32%" }}>
          <div style={{ ...label, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span>Overview</span>
            <span className="pulse" style={{ width: "1.2cqw", height: "1.2cqw", borderRadius: "99px", background: "#FF4D00", display: "inline-block" }} />
          </div>
          <div style={{ marginTop: "1cqw", fontSize: "1.9cqw", color: "#5C5F66" }}>Right now</div>
          <div style={{ fontSize: "8.6cqw", fontWeight: 600, letterSpacing: "-0.06em", lineHeight: 0.95, color: "#0B0B0C", fontVariantNumeric: "tabular-nums" }}>{value}</div>
        </Card>

        {/* dashboard 2: keywords ranking first */}
        <Card play={play} reduced={reduced} delay={250} style={{ left: "46%", top: "42%", width: "37%" }}>
          <div style={{ ...label, display: "flex", justifyContent: "space-between" }}>
            <span>Top keywords</span>
            <span>Rank</span>
          </div>
          {KEYWORDS.map((k, i) => (
            <div
              key={k.kw}
              style={{
                marginTop: i === 0 ? "1cqw" : 0,
                padding: "1cqw 0",
                borderTop: "1px dashed #A9ACB4",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "2cqw",
                color: "#1B1C1F",
                opacity: play ? 1 : 0,
                transform: play ? "translateX(0)" : "translateX(-2cqw)",
                transition: reduced ? "none" : `opacity 500ms ease ${650 + i * 130}ms, transform 600ms ${ease} ${650 + i * 130}ms`,
              }}
            >
              <span>{k.kw}</span>
              <span style={{ display: "flex", alignItems: "center", gap: ".6cqw", fontFamily: mono, fontWeight: 600 }}>
                <span style={{ color: "#FF4D00" }}>▲</span>
                {k.pos}
              </span>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
