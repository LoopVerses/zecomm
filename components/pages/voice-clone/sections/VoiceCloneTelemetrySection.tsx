"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { CountUp } from "@/components/shared/CountUp";
import { VOICE_CLONE_SECTIONS } from "@/lib/voice-clone-tokens";
import { VoiceCloneSectionReveal, staggerContainer, staggerItem } from "../shared/VoiceCloneSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

const METRICS = [
  { value: 0.3, suffix: "s", decimals: 1, label: "Avg synthesis", desc: "Text to HD audio output", isCount: true },
  { value: 48, suffix: "kHz", decimals: 0, label: "Studio quality", desc: "Professional sampling rate", isCount: true },
  { value: 0, suffix: "", decimals: 0, label: "Global scale", desc: "52 regions · auto accent detect", isCount: false, display: "Global" },
] as const;

export default function VoiceCloneTelemetrySection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full overflow-x-clip border-t border-white/10 bg-surface-raised py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={VOICE_CLONE_SECTIONS.telemetry}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <VoiceCloneSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
            Performance telemetry
          </span>
          <h2
            className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-ink-primary"
            data-figma-node="6:703"
          >
            UNIT{" "}
            <span className="bg-gradient-to-r from-accent-violet to-violet-400 bg-clip-text text-transparent">
              TELEMETRY.
            </span>
          </h2>
        </VoiceCloneSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {METRICS.map((metric, i) => (
            <motion.div key={metric.label} variants={staggerItem} className="h-full">
              <EliteCard glow={GLOWS[i % GLOWS.length]} className="h-full">
                <div className="group relative p-8 text-center">
                  <div className="relative">
                    {metric.isCount ? (
                      <CountUp
                        value={metric.value}
                        suffix={metric.suffix}
                        decimals={metric.decimals}
                        className="font-poppins text-4xl font-extrabold text-accent-violet sm:text-5xl"
                      />
                    ) : (
                      <p className="font-poppins text-4xl font-extrabold text-accent-violet sm:text-5xl">{metric.display}</p>
                    )}
                    <p className="mt-2 font-poppins text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                      {metric.label}
                    </p>
                    <p className="mt-2 font-poppins text-xs text-ink-secondary">{metric.desc}</p>
                  </div>
                </div>
              </EliteCard>
            </motion.div>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
