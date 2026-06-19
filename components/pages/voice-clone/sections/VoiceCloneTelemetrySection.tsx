"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CountUp } from "@/components/shared/CountUp";
import { VOICE_CLONE_SECTIONS } from "@/lib/voice-clone-tokens";
import { VoiceCloneSectionReveal, staggerContainer, staggerItem } from "../shared/VoiceCloneSectionReveal";

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
      className="w-full bg-white py-24 lg:py-32"
      data-header-surface="light"
      data-figma-node={VOICE_CLONE_SECTIONS.telemetry}
    >
      <SiteContainer>
        <VoiceCloneSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-orange-600">
            Performance telemetry
          </span>
          <h2
            className="font-poppins text-[36px] font-light uppercase tracking-[-0.03em] text-gray-900 sm:text-[52px]"
            data-figma-node="6:703"
          >
            UNIT{" "}
            <span className="bg-gradient-to-r from-orange-500 to-violet-500 bg-clip-text font-extrabold text-transparent">
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
          {METRICS.map((metric) => (
            <motion.article
              key={metric.label}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-orange-50/30 p-8 text-center transition-all hover:border-orange-500/25"
              whileHover={{ y: -4 }}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/[0.05] to-transparent opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
              <div className="relative">
                {metric.isCount ? (
                  <CountUp
                    value={metric.value}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                    className="font-poppins text-4xl font-extrabold text-orange-500 sm:text-5xl"
                  />
                ) : (
                  <p className="font-poppins text-4xl font-extrabold text-orange-500 sm:text-5xl">{metric.display}</p>
                )}
                <p className="mt-2 font-poppins text-[10px] font-bold uppercase tracking-wider text-gray-600">
                  {metric.label}
                </p>
                <p className="mt-2 font-poppins text-xs text-gray-500">{metric.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
