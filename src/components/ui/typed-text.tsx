"use client";

import { useEffect, useState } from "react";

// Types its text out once, slowly.
// The not-yet-typed part is rendered in the same flow but transparent, so line breaks and
// height are the same from the very first frame (nothing shifts while it types).
export default function TypedText({
  text,
  speedMs = 38,
  startDelayMs = 600,
  className = "",
}: {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = setTimeout(() => setCount(text.length), 0); // everything at once, no typing
      return () => clearTimeout(timer);
    }
    let n = 0;
    const tick = () => {
      n += 1;
      setCount(n);
      if (n < text.length) timer = setTimeout(tick, speedMs);
    };
    timer = setTimeout(tick, startDelayMs);
    return () => clearTimeout(timer);
  }, [text, speedMs, startDelayMs]);

  const done = count >= text.length;

  return (
    <p aria-label={text} className={className}>
      <span aria-hidden="true">
        {text.slice(0, count)}
        {/* zero-width caret, so it never changes how the line wraps */}
        <span className="relative inline-block h-[1em] w-0 align-text-bottom">
          {!done && <span className="absolute left-[2px] top-[.1em] h-[.95em] w-[2px] animate-[blink_1s_steps(1)_infinite] bg-ink" />}
        </span>
        <span data-typed-rest className="text-transparent">
          {text.slice(count)}
        </span>
      </span>
      {/* without JS the text would stay invisible, so show it */}
      <noscript>
        <style>{"[data-typed-rest]{color:inherit}"}</style>
      </noscript>
    </p>
  );
}
