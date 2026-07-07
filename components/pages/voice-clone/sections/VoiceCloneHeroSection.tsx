"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CountUp } from "@/components/shared/CountUp";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { VOICE_CLONE_SECTIONS } from "@/lib/voice-clone-tokens";
import { SonicAmbientBackground } from "../shared/SonicAmbientBackground";
import { SonicStudioVisual } from "../shared/SonicStudioVisual";

const HERO_STATS = [
  { label: "Languages", value: 52, suffix: "+", decimals: 0 },
  { label: "Synthesis", value: 0.3, suffix: "s", decimals: 1 },
  { label: "Clone match", value: 98.7, suffix: "%", decimals: 1 },
] as const;

export default function VoiceCloneHeroSection() {
  return (
    <section
      className="zc-grain relative w-full overflow-x-clip overflow-hidden bg-surface-base pt-[max(5.5rem,calc(4rem+env(safe-area-inset-top,0px)))] pb-14 sm:pt-28 sm:pb-16"
      data-header-surface="dark"
      data-figma-node={VOICE_CLONE_SECTIONS.hero}
    >
      <MeshGradient />
      <SonicAmbientBackground />

      <SiteContainer className="relative z-10">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-4 py-2 font-poppins text-[10px] font-semibold uppercase tracking-[0.15em] text-orange-400/80 transition-all hover:border-orange-500/40 hover:text-orange-400"
            data-figma-node="7:987"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to Hub
          </Link>
        </motion.div>

        <div className="mx-auto max-w-[780px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1.5"
            data-figma-node="6:748"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-orange-500" />
            </span>
            <span className="font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-orange-400" data-figma-node="6:749">
              Voice Clone
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.95] tracking-tight text-ink-primary"
            data-figma-node="6:750"
          >
            SONIC{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-violet-400 bg-clip-text font-extrabold text-transparent">
              CLONE
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mx-auto mt-5 max-w-[560px] font-poppins text-sm leading-relaxed text-ink-secondary sm:text-[15px]"
            data-figma-node="6:751"
          >
            Realistic AI voices in 52+ languages with natural emotion. Perfect for ads, videos,
            support lines, and global brand content.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-full border border-orange-500/15 bg-orange-500/[0.06] px-5 py-2.5"
              >
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="font-poppins text-lg font-extrabold text-orange-400"
                />
                <span className="font-poppins text-[9px] font-bold uppercase tracking-wider text-ink-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
            className="mt-8"
          >
            <Link
              href="#specs"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-4 font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_32px_rgba(249,115,22,0.3)] transition-all hover:shadow-[0_12px_40px_rgba(249,115,22,0.4)]"
              data-figma-node="6:752"
            >
              <span className="relative z-10">Explore Voice Tech</span>
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <SonicStudioVisual />
        </motion.div>
      </SiteContainer>
    </section>
  );
}
