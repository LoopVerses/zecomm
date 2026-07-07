"use client";

import { motion } from "framer-motion";
import { VOICE_CLONE_SECTIONS } from "@/lib/voice-clone-tokens";

const GHOST_WORDS = ["VOICE", "CLONE", "SONIC", "WAVE", "TONE", "RESONANCE"] as const;

const STREAM = [
  { id: "SYN-01", text: "VSL hook generated · EN-US · Urgency mode" },
  { id: "SYN-02", text: "Voice clone calibrated · 98.7% match · 3min" },
  { id: "SYN-03", text: "DE translation · same brand cadence preserved" },
  { id: "SYN-04", text: "48kHz export · studio-grade WAV ready" },
  { id: "SYN-05", text: "Support line · Empathy map · 0.28s latency" },
  { id: "SYN-06", text: "FR ad variant · Authority tone deployed" },
] as const;

export default function VoiceStreamMarquee() {
  const ghostDoubled = [...GHOST_WORDS, ...GHOST_WORDS];
  const streamDoubled = [...STREAM, ...STREAM];

  return (
    <section
      className="relative overflow-x-clip overflow-hidden border-y border-white/10 bg-surface-base"
      data-header-surface="dark"
      data-figma-node={VOICE_CLONE_SECTIONS.marquee}
      aria-label="Live synthesis stream"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-violet/50 to-transparent" aria-hidden />

      <div className="flex items-stretch">
        <div className="z-10 flex shrink-0 flex-col justify-center gap-0.5 border-r border-white/10 bg-surface-raised px-5 py-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-violet opacity-40" />
            <span className="relative h-2 w-2 rounded-full bg-accent-violet" />
          </span>
          <p className="font-poppins text-[8px] font-bold uppercase tracking-[0.3em] text-accent-violet">Live</p>
          <p className="font-poppins text-[10px] font-bold uppercase tracking-wider text-ink-primary">Synth</p>
        </div>

        <div className="relative min-w-0 flex-1">
          <div className="relative overflow-hidden border-b border-white/[0.06] py-2.5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#0E1117] to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#0E1117] to-transparent" aria-hidden />
            <motion.div
              className="flex w-max items-center"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            >
              {streamDoubled.map((item, i) => (
                <span
                  key={`${item.id}-${i}`}
                  className="inline-flex shrink-0 items-center gap-3 border-l-2 border-accent-violet/60 pl-3"
                >
                  <span className="font-mono text-[9px] font-bold text-accent-violet">{item.id}</span>
                  <span className="font-poppins text-[11px] font-medium text-ink-primary">{item.text}</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
