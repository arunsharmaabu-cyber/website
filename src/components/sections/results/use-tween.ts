"use client";

import { useEffect, useRef, useState } from "react";

// Eases a displayed number to its target: counts up the first time `enabled` turns on, and glides
// to the new value whenever the target changes. With reduced motion it jumps straight there.
export function useTween(target: number, enabled = true, duration = 900, initial = 0) {
  const [value, setValue] = useState(initial);
  const current = useRef(initial);

  useEffect(() => {
    if (!enabled) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const span = reduced ? 0 : duration;
    const from = current.current;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = span === 0 ? 1 : Math.min(1, (now - start) / span);
      const eased = 1 - Math.pow(1 - t, 3);
      current.current = from + (target - from) * eased;
      setValue(current.current);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, enabled, duration]);

  return value;
}
