"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { EMAIL_SECTIONS } from "@/lib/email-tokens";
import {
  EmailSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/EmailSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

const METRICS = [
  { value: 84, suffix: "%", label: "Response time cut", accent: "text-accent-violet", decimals: 0 },
  { value: 14, suffix: "hr", label: "Founder time saved / week", accent: "text-orange-400", decimals: 0 },
  { value: 0.1, suffix: "s", label: "Processing latency", accent: "text-accent-lime", decimals: 1 },
] as const;

export default function EmailTelemetrySection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full overflow-x-clip overflow-hidden border-t border-white/10 bg-surface-raised py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={EMAIL_SECTIONS.telemetry}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <EmailSectionReveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-orange-400">
            Scanner telemetry
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-ink-primary">
            Performance{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              stamps.
            </span>
          </h2>
        </EmailSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {METRICS.map((metric, i) => (
            <motion.div key={metric.label} variants={staggerItem} className="h-full">
              <EliteCard glow={GLOWS[i % GLOWS.length]} className="h-full">
                <div className="relative p-8 text-center">
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-dashed border-white/15 ${metric.accent}`}
                  >
                    <motion.i
                      className="fas fa-stamp text-lg"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                      transition={{ duration: 0.45 }}
                      aria-hidden
                    />
                  </div>
                  <p className="flex items-end justify-center gap-0.5">
                    <span className="font-poppins text-5xl font-extrabold text-ink-primary">
                      {metric.value}
                    </span>
                    <span className={`mb-2 font-poppins text-xl font-bold ${metric.accent}`}>
                      {metric.suffix}
                    </span>
                  </p>
                  <p className="mt-3 font-poppins text-[10px] font-bold uppercase tracking-[0.15em] text-ink-muted">
                    {metric.label}
                  </p>
                </div>
              </EliteCard>
            </motion.div>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
