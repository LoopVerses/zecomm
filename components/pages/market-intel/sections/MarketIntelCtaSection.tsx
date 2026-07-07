"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
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
  opportunity: "bg-accent-lime",
} as const;

export default function MarketIntelCtaSection() {
  return (
    <section
      className="zc-grain relative w-full overflow-x-clip overflow-hidden bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={MARKET_INTEL_SECTIONS.cta}
    >
      <MeshGradient className="opacity-50" />
      <SectionAmbience variant="mixed" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_30%,rgba(34,211,238,0.12),transparent)]"
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MarketIntelSectionReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-cyan">
              Recon slots open
            </span>

            <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-ink-primary">
              OWN THE
              <br />
              <span className="bg-gradient-to-r from-accent-cyan to-teal-400 bg-clip-text text-transparent">
                MARKET EDGE.
              </span>
            </h2>

            <p className="mt-5 max-w-[440px] font-poppins text-sm leading-relaxed text-ink-secondary sm:text-base">
              Deploy Unit 03 and turn competitor blind spots into your next revenue stream. Limited
              recon node slots available.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/services#contact"
                className="zc-focus-ring inline-flex h-11 w-full items-center sm:h-12 sm:w-auto justify-center rounded-xl bg-accent-cyan px-8 font-poppins text-sm font-semibold text-surface-base shadow-[0_8px_32px_rgba(34,211,238,0.25)] transition-all hover:scale-[1.02]"
              >
                Deploy Search Node
              </Link>
              <Link
                href="/"
                className="group relative inline-flex h-11 w-full items-center sm:h-12 sm:w-auto justify-center overflow-hidden rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary transition-all hover:border-accent-cyan/30 hover:bg-white/10"
              >
                <span className="relative z-10">Request Intel Brief</span>
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-accent-cyan/15 to-transparent"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.6 }}
                  aria-hidden
                />
              </Link>
            </div>
          </MarketIntelSectionReveal>

          <MarketIntelSectionReveal delay={0.15}>
            <EliteCard glow="cyan" className="backdrop-blur-sm bg-surface-card/80">
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-accent-cyan">
                    Live alert queue
                  </p>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-50" />
                    <span className="relative h-2 w-2 rounded-full bg-accent-cyan" />
                  </span>
                </div>

                <div className="space-y-3">
                  {LIVE_ALERTS.map((alert, i) => (
                    <motion.div
                      key={alert.target}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <span className={`h-2 w-2 shrink-0 rounded-full ${LEVEL_DOT[alert.level]}`} />
                      <div className="min-w-0 flex-1">
                        <p className="font-poppins text-[11px] font-bold text-ink-primary">{alert.target}</p>
                        <p className="font-poppins text-[10px] text-ink-muted">{alert.signal}</p>
                      </div>
                      <span className="shrink-0 font-poppins text-[9px] text-ink-muted">{alert.time}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                  {[
                    { val: "0.5s", label: "Latency" },
                    { val: "94%", label: "Accuracy" },
                    { val: "240+", label: "Targets" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-poppins text-sm font-extrabold text-ink-primary">{s.val}</p>
                      <p className="font-poppins text-[8px] font-semibold uppercase tracking-wider text-ink-muted">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </EliteCard>
          </MarketIntelSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
