"use client";

import { motion } from "framer-motion";
import { MARKET_INTEL_SECTIONS } from "@/lib/market-intel-tokens";

const GHOST_WORDS = ["RECON", "SIGNAL", "INTEL", "SCAN", "ALERT", "GAP"] as const;

const TRANSMISSIONS = [
  { code: "SIG-01", text: "Comp-X apparel −12% · price shift detected" },
  { code: "SIG-02", text: "Minimalist tech accessories · +240% trend vol" },
  { code: "SIG-03", text: "Eco packaging keyword · 42K searches · 0 rivals" },
  { code: "SIG-04", text: "Rival-A Meta ad spend increased 34% this week" },
  { code: "SIG-05", text: "AI workspace tools · SERP spike · opportunity" },
  { code: "SIG-06", text: "Comp-Y new SKU line · 3 products indexed" },
] as const;

export default function MarketIntelSignalMarquee() {
  const ghostDoubled = [...GHOST_WORDS, ...GHOST_WORDS];
  const txDoubled = [...TRANSMISSIONS, ...TRANSMISSIONS];

  return (
    <section
      className="relative overflow-x-clip overflow-hidden border-y border-white/10 bg-surface-base"
      data-header-surface="dark"
      data-figma-node={MARKET_INTEL_SECTIONS.marquee}
      aria-label="Live intelligence transmission feed"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" aria-hidden />

      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-accent-cyan/[0.06] to-transparent"
        animate={{ x: ["-100%", "600%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      <div className="flex items-stretch">
        <div className="z-30 flex shrink-0 flex-col justify-center gap-0.5 border-r border-white/10 bg-surface-raised px-5 py-4 sm:px-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-40" />
            <span className="relative h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          <p className="font-poppins text-[8px] font-bold uppercase tracking-[0.3em] text-accent-cyan">Live</p>
          <p className="font-poppins text-[10px] font-bold uppercase tracking-wider text-ink-primary">Tx Feed</p>
        </div>

        <div className="relative min-w-0 flex-1">
          <div className="relative overflow-hidden border-b border-white/[0.06] py-2.5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#0E1117] to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#0E1117] to-transparent" aria-hidden />

            <motion.div
              className="flex w-max items-center"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
            >
              {ghostDoubled.map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className="mx-5 font-display text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase leading-none tracking-[-0.04em] text-ink-primary"
                >
                  {word}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="relative overflow-hidden py-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0E1117] to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0E1117] to-transparent" aria-hidden />

            <motion.div
              className="flex w-max items-center gap-4 pl-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            >
              {txDoubled.map((tx, i) => (
                <span
                  key={`${tx.code}-${i}`}
                  className="inline-flex shrink-0 items-center gap-3 border-l-2 border-accent-cyan/60 pl-3"
                >
                  <span className="font-mono text-[9px] font-bold text-accent-cyan">{tx.code}</span>
                  <span className="font-poppins text-[11px] font-medium tracking-wide text-ink-primary">
                    {tx.text}
                  </span>
                  <span className="font-mono text-[8px] text-ink-muted">{"///"}</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
    </section>
  );
}
