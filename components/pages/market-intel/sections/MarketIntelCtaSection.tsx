"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { MARKET_INTEL_SECTIONS } from "@/lib/market-intel-tokens";
import { MarketIntelSectionReveal } from "../shared/MarketIntelSectionReveal";

const LIVE_ALERTS = [
  { target: "Comp-X", signal: "Price drop −12%", time: "2m ago", level: "high" },
  { target: "Category", signal: "Trend +240% vol", time: "8m ago", level: "critical" },
  { target: "Keyword", signal: "42K gap found", time: "14m ago", level: "opportunity" },
] as const;

const LEVEL_DOT = {
  high: "bg-amber-400",
  critical: "bg-red-400",
  opportunity: "bg-emerald-400",
} as const;

export default function MarketIntelCtaSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={MARKET_INTEL_SECTIONS.cta}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MarketIntelSectionReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-white">
              Recon slots open
            </span>

            <h2 className="font-poppins text-[40px] font-light uppercase leading-[1.05] tracking-[-0.03em] text-white sm:text-[56px]">
              OWN THE
              <br />
              <span className="font-extrabold">MARKET EDGE.</span>
            </h2>

            <p className="mt-5 max-w-[440px] font-poppins text-sm leading-relaxed text-white/85 sm:text-base">
              Deploy Unit 03 and turn competitor blind spots into your next revenue stream. Limited
              recon node slots available.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/market-intel"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-[#050F0D] px-8 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:bg-black"
              >
                Deploy Search Node
              </Link>
              <Link
                href="/"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl border border-white/30 bg-white/10 px-8 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:bg-white/15"
              >
                <span className="relative z-10">Request Intel Brief</span>
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.6 }}
                  aria-hidden
                />
              </Link>
            </div>
          </MarketIntelSectionReveal>

          <MarketIntelSectionReveal delay={0.15}>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Live alert queue
                </p>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />
                  <span className="relative h-2 w-2 rounded-full bg-white" />
                </span>
              </div>

              <div className="space-y-3">
                {LIVE_ALERTS.map((alert, i) => (
                  <motion.div
                    key={alert.target}
                    className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <span className={`h-2 w-2 shrink-0 rounded-full ${LEVEL_DOT[alert.level]}`} />
                    <div className="min-w-0 flex-1">
                      <p className="font-poppins text-[11px] font-bold text-white">{alert.target}</p>
                      <p className="font-poppins text-[10px] text-white/70">{alert.signal}</p>
                    </div>
                    <span className="shrink-0 font-poppins text-[9px] text-white/50">{alert.time}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/15 pt-5">
                {[
                  { val: "0.5s", label: "Latency" },
                  { val: "94%", label: "Accuracy" },
                  { val: "240+", label: "Targets" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-poppins text-sm font-extrabold text-white">{s.val}</p>
                    <p className="font-poppins text-[8px] font-semibold uppercase tracking-wider text-white/60">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MarketIntelSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
