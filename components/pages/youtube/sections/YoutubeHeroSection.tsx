"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { Tilt3D } from "@/components/shared/Tilt3D";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YoutubeAmbientBackground } from "../shared/YoutubeAmbientBackground";
import { YoutubeStudioVisual } from "../shared/YoutubeStudioVisual";

const QUICK_STATS = [
  { value: "10", label: "Services included", glow: "red" as const },
  { value: "7", label: "Step process", glow: "violet" as const },
  { value: "100%", label: "Done for you", glow: "lime" as const },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
} satisfies Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
} satisfies Variants;

export default function YoutubeHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 50, damping: 24 });
  const glowY = useSpring(mouseY, { stiffness: 50, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="zc-grain relative min-h-0 lg:min-h-[100dvh] w-full overflow-x-clip bg-surface-base pt-[max(5.5rem,calc(4rem+env(safe-area-inset-top,0px)))] pb-16 sm:pt-28 sm:pb-20"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.hero}
    >
      <MeshGradient />
      <YoutubeAmbientBackground />

      <motion.div
        className="pointer-events-none absolute h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.12)_0%,rgba(220,38,38,0.03)_45%,transparent_70%)] blur-[90px]"
        style={{ left: glowX, top: glowY }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute left-[12%] top-[22%] h-2 w-2 rounded-full bg-red-500/70 blur-[1px]"
        animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute right-[18%] bottom-[28%] h-1.5 w-1.5 rounded-full bg-accent-violet/60"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.85, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        aria-hidden
      />

      <div className="pointer-events-none absolute right-0 top-20 opacity-[0.04]" aria-hidden>
        <i className="fab fa-youtube text-[280px] text-red-600 lg:text-[400px]" />
      </div>

      <SiteContainer className="relative z-10">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-poppins text-[11px] font-semibold text-ink-secondary backdrop-blur-sm transition-all hover:border-red-500/40 hover:text-ink-primary"
            data-figma-node="8:997"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to Home
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <EliteCard glow="red" className="max-w-md rounded-2xl">
                <div className="p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-600/10 px-2.5 py-1 font-poppins text-[10px] font-semibold text-red-400">
                      <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-red-500" />
                      Live production
                    </span>
                    <span className="font-poppins text-[10px] text-ink-muted">10 services · 7 steps</span>
                  </div>
                  <p className="mt-3 font-display text-sm font-bold text-ink-primary sm:text-base">
                    <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                      YouTube Automation
                    </span>{" "}
                    — done for you
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Research", "Edit", "SEO", "Upload"].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-lg border border-white/8 bg-surface-base/60 px-2.5 py-1 font-poppins text-[10px] text-ink-secondary"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </EliteCard>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-ink-primary"
              data-figma-node="6:209"
            >
              Build and grow your YouTube channel{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-rose-500 bg-clip-text text-transparent">
                without managing everything yourself
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[540px] font-poppins text-base leading-relaxed text-ink-secondary"
              data-figma-node="6:210"
            >
              Want to start or grow a YouTube channel but don&apos;t have time to handle research,
              scripting, editing, thumbnails, uploads, SEO, and monetization? Our YouTube Automation
              Service gives you a complete done-for-you solution.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/services#contact"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-red-600 px-8 font-poppins text-sm font-semibold text-white shadow-[0_8px_32px_rgba(220,38,38,0.35)] transition-all hover:scale-[1.02] hover:bg-red-500"
                data-figma-node="6:211"
              >
                <span className="relative z-10">Get Started Today</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-400 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="/services#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary transition-all hover:border-red-500/40 hover:bg-white/10"
              >
                Book a Free Consultation
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 border-t border-white/8 pt-6">
              {QUICK_STATS.map((stat) => (
                <EliteCard key={stat.label} glow={stat.glow} className="rounded-xl">
                  <div className="px-3 py-3 text-center">
                    <p className="font-display text-2xl font-bold text-ink-primary">{stat.value}</p>
                    <p className="font-poppins text-[10px] text-ink-muted sm:text-xs">{stat.label}</p>
                  </div>
                </EliteCard>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1200 }}
          >
            <Tilt3D>
              <YoutubeStudioVisual />
            </Tilt3D>
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
}
