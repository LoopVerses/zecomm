"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { VOICE_CLONE_SECTIONS } from "@/lib/voice-clone-tokens";
import {
  VoiceCloneSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/VoiceCloneSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

const SPECS = [
  {
    icon: "fas fa-sliders-h",
    title: "Emotion Mapping",
    body: "Inject Urgency for VSLs, Empathy for support, Authority for brand stories — all via API with real-time tone control.",
    metric: "3 modes",
  },
  {
    icon: "fas fa-microphone-alt",
    title: "Voice Clone 1:1",
    body: "60-second sample → digital replica in 3 minutes. Your cadence, timber, and breath patterns preserved.",
    metric: "98.7% match",
  },
  {
    icon: "fas fa-broadcast-tower",
    title: "Zero-Latency Stream",
    body: "Text-to-speech in under 0.3s — built for phone systems, live chat overlays, and real-time dubbing.",
    metric: "0.3s TTS",
  },
] as const;

const SPECTRUM_BANDS = [
  { label: "Bass", pct: 72, color: "from-violet-600 to-violet-400" },
  { label: "Mid", pct: 88, color: "from-accent-violet to-violet-400" },
  { label: "Presence", pct: 94, color: "from-violet-500 to-purple-400" },
  { label: "Air", pct: 65, color: "from-purple-400 to-fuchsia-400" },
] as const;

function VocalSpectrumPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} data-figma-node="6:769">
      <EliteCard glow="violet" className="border-accent-violet/20">
        <div className="p-6">
          <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-accent-violet">
            Vocal spectrum analyzer
          </p>
          <p className="mt-1 font-poppins text-xs text-ink-muted">Dynamic range · 48kHz studio output</p>

          <div className="mt-6 space-y-4">
            {SPECTRUM_BANDS.map((band, i) => (
              <div key={band.label}>
                <div className="mb-1 flex justify-between font-poppins text-[9px] font-bold uppercase tracking-wider">
                  <span className="text-ink-muted">{band.label}</span>
                  <span className="text-accent-violet">{band.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${band.color}`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${band.pct}%` } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.div
            className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-accent-violet/20 bg-accent-violet/[0.06] py-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-violet-500">
              <motion.i
                className="fas fa-microphone text-lg text-white"
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                transition={{ duration: 0.45 }}
                aria-hidden
              />
            </div>
            <div>
              <p className="font-poppins text-[10px] font-bold uppercase text-ink-primary">Synthesis active</p>
              <p className="font-poppins text-[9px] text-accent-violet">Pitch balanced · Emotion locked</p>
            </div>
          </motion.div>
        </div>
      </EliteCard>
    </div>
  );
}

export default function VoiceCloneSpecsSection() {
  const specsRef = useRef<HTMLDivElement>(null);
  const specsInView = useInView(specsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="specs"
      className="relative w-full overflow-x-clip overflow-hidden border-t border-white/10 bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={VOICE_CLONE_SECTIONS.specs}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <VoiceCloneSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
            Sonic capabilities
          </span>
          <h2
            className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-ink-primary"
            data-figma-node="6:759"
          >
            BEYOND{" "}
            <span className="bg-gradient-to-r from-accent-violet to-violet-400 bg-clip-text text-transparent">
              ROBOTIC.
            </span>
          </h2>
        </VoiceCloneSectionReveal>

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            ref={specsRef}
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate={specsInView ? "visible" : "hidden"}
          >
            {SPECS.map((spec, i) => (
              <motion.div key={spec.title} variants={staggerItem} data-figma-node={`6:${760 + i * 3}`}>
                <EliteCard
                  glow={GLOWS[i % GLOWS.length]}
                  className="rounded-r-2xl border-l-4 border-accent-violet"
                >
                  <div className="group relative py-5 pl-5 pr-4">
                    <div className="relative flex gap-4">
                      <motion.span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-violet/15"
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                        transition={{ duration: 0.45 }}
                      >
                        <i className={`${spec.icon} text-sm text-accent-violet`} aria-hidden />
                      </motion.span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-poppins text-[10px] font-bold uppercase tracking-wider text-accent-violet">
                            0{i + 1}. {spec.title}
                          </h3>
                          <span className="rounded-full border border-accent-violet/25 bg-accent-violet/10 px-2 py-0.5 font-poppins text-[8px] font-bold text-accent-violet">
                            {spec.metric}
                          </span>
                        </div>
                        <p className="mt-2 font-poppins text-sm leading-relaxed text-ink-secondary">{spec.body}</p>
                      </div>
                    </div>
                  </div>
                </EliteCard>
              </motion.div>
            ))}
          </motion.div>

          <VoiceCloneSectionReveal delay={0.15}>
            <VocalSpectrumPanel />
          </VoiceCloneSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
