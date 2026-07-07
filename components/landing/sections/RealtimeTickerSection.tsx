"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

export const TICKER_FIGMA_NODE = "6:4";

const TICKER_ITEMS = [
  { text: "E-Commerce hub deployed for Apex Retail", accent: "text-accent-violet", glow: "rgba(108,76,241,0.12)" },
  { text: "$42,400 recovered from abandoned carts", accent: "text-accent-lime", glow: "rgba(163,255,107,0.1)" },
  { text: "WhatsApp agent resolved 4,209 queries in under 1 second", accent: "text-accent-cyan", glow: "rgba(6,182,212,0.1)" },
  { text: "Market intel found 14 competitor gaps", accent: "text-accent-violet", glow: "rgba(108,76,241,0.12)" },
  { text: "YouTube channel scheduled 12 posts this week", accent: "text-red-400", glow: "rgba(239,68,68,0.1)" },
] as const;

export default function RealtimeTickerSection() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      className="relative w-full overflow-x-clip overflow-hidden border-y border-white/6 bg-surface-raised py-3.5"
      data-header-surface="dark"
      data-figma-node={TICKER_FIGMA_NODE}
      aria-label="Recent results"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(108,76,241,0.04),transparent)]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-raised to-transparent sm:w-20" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-raised to-transparent sm:w-20" aria-hidden />

      <div className="zc-marquee flex w-max items-center gap-4 px-2 sm:gap-5">
        {doubled.map((item, index) => (
          <motion.span
            key={`${item.text}-${index}`}
            whileHover={{ scale: 1.03, y: -1 }}
            className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-white/8 bg-surface-card/60 px-4 py-1.5 font-poppins text-xs text-ink-secondary backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-white/15 hover:shadow-[0_8px_32px_var(--pill-glow)]"
            style={{ "--pill-glow": item.glow } as CSSProperties}
          >
            <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-accent-lime" aria-hidden />
            <span className={`font-medium transition-colors group-hover:brightness-110 ${item.accent}`}>{item.text}</span>
          </motion.span>
        ))}
      </div>
    </section>
  );
}
