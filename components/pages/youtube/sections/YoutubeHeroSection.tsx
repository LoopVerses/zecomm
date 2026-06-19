"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YoutubeAmbientBackground } from "../shared/YoutubeAmbientBackground";
import { YoutubeStudioVisual } from "../shared/YoutubeStudioVisual";

const QUICK_STATS = [
  { value: "10", label: "Services included" },
  { value: "7", label: "Step process" },
  { value: "100%", label: "Done for you" },
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
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#0A0A0A] pt-24 pb-16 sm:pt-28 sm:pb-20"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.hero}
    >
      <YoutubeAmbientBackground />

      <motion.div
        className="pointer-events-none absolute h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.12)_0%,rgba(220,38,38,0.03)_45%,transparent_70%)] blur-[90px]"
        style={{ left: glowX, top: glowY }}
        aria-hidden
      />

      <div className="pointer-events-none absolute right-0 top-20 opacity-[0.04]" aria-hidden>
        <i className="fab fa-youtube text-[280px] text-red-600 lg:text-[400px]" />
      </div>

      <SiteContainer className="relative z-10">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-poppins text-[11px] font-semibold text-white/70 backdrop-blur-sm transition-all hover:border-red-500/40 hover:text-white"
            data-figma-node="8:997"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to Home
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <motion.div
              variants={itemVariants}
              className="flex w-fit items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-1.5"
              data-figma-node="6:206"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-600" />
              </span>
              <span
                className="font-poppins text-[11px] font-semibold text-red-400"
                data-figma-node="6:208"
              >
                YouTube Automation Services
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-poppins text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.12] tracking-[-0.03em] text-white"
              data-figma-node="6:209"
            >
              Build and grow your YouTube channel{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-rose-500 bg-clip-text text-transparent">
                without managing everything yourself
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[540px] font-poppins text-base leading-relaxed text-gray-400"
              data-figma-node="6:210"
            >
              Want to start or grow a YouTube channel but don&apos;t have time to handle research,
              scripting, editing, thumbnails, uploads, SEO, and monetization? Our YouTube Automation
              Service gives you a complete done-for-you solution.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="max-w-[540px] font-poppins text-sm leading-relaxed text-gray-500"
            >
              We manage the full process from content research to monetization, helping you build a
              professional YouTube channel with consistent, high-quality content.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-red-600 px-8 font-poppins text-sm font-semibold text-white shadow-[0_8px_32px_rgba(220,38,38,0.35)] transition-all hover:bg-red-500"
                data-figma-node="6:211"
              >
                Get Started Today
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-white transition-all hover:border-red-500/40 hover:bg-white/10"
              >
                Book a Free Consultation
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-1">
              {QUICK_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-poppins text-xl font-bold text-white">{stat.value}</p>
                  <p className="font-poppins text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <YoutubeStudioVisual />
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
}
