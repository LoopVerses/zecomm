"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { VOICE_CLONE_SECTIONS } from "@/lib/voice-clone-tokens";
import {
  VoiceCloneSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/VoiceCloneSectionReveal";

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
  { label: "Bass", pct: 72, color: "from-orange-600 to-orange-400" },
  { label: "Mid", pct: 88, color: "from-amber-500 to-orange-400" },
  { label: "Presence", pct: 94, color: "from-violet-500 to-purple-400" },
  { label: "Air", pct: 65, color: "from-violet-400 to-fuchsia-400" },
] as const;

function VocalSpectrumPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-orange-500/20 bg-[#14101F] p-6"
      data-figma-node="6:769"
    >
      <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-orange-400">
        Vocal spectrum analyzer
      </p>
      <p className="mt-1 font-poppins text-xs text-gray-500">Dynamic range · 48kHz studio output</p>

      <div className="mt-6 space-y-4">
        {SPECTRUM_BANDS.map((band, i) => (
          <div key={band.label}>
            <div className="mb-1 flex justify-between font-poppins text-[9px] font-bold uppercase tracking-wider">
              <span className="text-gray-500">{band.label}</span>
              <span className="text-orange-400">{band.pct}%</span>
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
        className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-violet-500/20 bg-violet-500/[0.06] py-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-violet-500">
          <i className="fas fa-microphone text-lg text-white" aria-hidden />
        </div>
        <div>
          <p className="font-poppins text-[10px] font-bold uppercase text-white">Synthesis active</p>
          <p className="font-poppins text-[9px] text-violet-400">Pitch balanced · Emotion locked</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function VoiceCloneSpecsSection() {
  const specsRef = useRef<HTMLDivElement>(null);
  const specsInView = useInView(specsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="specs"
      className="relative w-full overflow-hidden border-t border-orange-500/10 bg-[#1A1208] py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={VOICE_CLONE_SECTIONS.specs}
    >
      <SiteContainer className="relative">
        <VoiceCloneSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-orange-400">
            Sonic capabilities
          </span>
          <h2
            className="font-poppins text-[36px] font-light uppercase tracking-[-0.03em] text-white sm:text-[52px]"
            data-figma-node="6:759"
          >
            BEYOND{" "}
            <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text font-extrabold text-transparent">
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
              <motion.article
                key={spec.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-r-2xl border-l-4 border-orange-500 bg-white/[0.03] py-5 pl-5 pr-4"
                whileHover={{ x: 6 }}
                data-figma-node={`6:${760 + i * 3}`}
              >
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/[0.06] to-transparent opacity-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%", opacity: 1 }}
                  transition={{ duration: 0.55 }}
                  aria-hidden
                />
                <div className="relative flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/15">
                    <i className={`${spec.icon} text-sm text-orange-400`} aria-hidden />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-poppins text-[10px] font-bold uppercase tracking-wider text-orange-400">
                        0{i + 1}. {spec.title}
                      </h3>
                      <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2 py-0.5 font-poppins text-[8px] font-bold text-orange-400">
                        {spec.metric}
                      </span>
                    </div>
                    <p className="mt-2 font-poppins text-sm leading-relaxed text-gray-400">{spec.body}</p>
                  </div>
                </div>
              </motion.article>
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
