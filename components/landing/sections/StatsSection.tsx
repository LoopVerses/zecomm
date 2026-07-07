"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { CountUp } from "@/components/shared/CountUp";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { motion } from "framer-motion";

export const STATS_NODE = "6:220";

const STATS = [
  { value: 42000, suffix: "+", label: "Emails processed daily", chart: [30, 55, 40, 70, 50, 85, 65], glow: "cyan" as const },
  { value: 98, suffix: "%", label: "WhatsApp open rate", chart: [60, 75, 70, 90, 85, 95, 98], glow: "lime" as const },
  { value: 4.2, suffix: "x", label: "Avg. cart recovery", decimals: 1, chart: [20, 35, 45, 55, 60, 70, 80], glow: "violet" as const },
  { value: 14, suffix: "hr", label: "Saved per founder / week", chart: [40, 50, 45, 65, 55, 75, 70], glow: "violet" as const },
] as const;

export default function StatsSection() {
  return (
    <section
      className="relative w-full overflow-x-clip border-y border-white/6 bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={STATS_NODE}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.08}>
              <EliteCard glow={stat.glow}>
                <div className="p-6">
                  <p className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink-primary">
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={"decimals" in stat ? stat.decimals : 0}
                    />
                  </p>
                  <p className="mt-1 font-poppins text-sm text-ink-secondary">{stat.label}</p>
                  <div className="mt-4 flex h-10 items-end gap-1">
                    {stat.chart.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-accent-violet/30 to-accent-cyan/50"
                        initial={{ height: "20%" }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 + i * 0.04 }}
                        whileHover={{ scaleY: 1.15, originY: 1 }}
                      />
                    ))}
                  </div>
                </div>
              </EliteCard>
            </ScrollReveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
