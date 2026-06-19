"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CountUp } from "@/components/shared/CountUp";
import { CLONE_AGENT_SECTIONS } from "@/lib/clone-agent-tokens";
import { CloneAmbientBackground } from "../shared/CloneAmbientBackground";
import { IdentityTwinVisual } from "../shared/IdentityTwinVisual";

const HERO_STATS = [
  { label: "Match accuracy", value: 99.4, suffix: "%", decimals: 1 },
  { label: "Parallel chats", value: 10, suffix: "K+", decimals: 0 },
  { label: "Languages", value: 50, suffix: "+", decimals: 0 },
] as const;

export default function CloneAgentHeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#F3F6FF] pt-24 pb-14 sm:pt-28 sm:pb-16"
      data-header-surface="light"
      data-figma-node={CLONE_AGENT_SECTIONS.hero}
    >
      <CloneAmbientBackground />

      <SiteContainer className="relative z-10">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 font-poppins text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600 transition-all hover:border-brand-blue/30 hover:text-brand-blue"
            data-figma-node="8:993"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to Hub
          </Link>
        </motion.div>

        <div className="mx-auto max-w-[760px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-4 py-1.5"
            data-figma-node="6:469"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-brand-blue" />
            </span>
            <span className="font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-brand-blue" data-figma-node="6:471">
              Clone Agent
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-poppins text-[44px] font-light uppercase leading-[0.95] tracking-[-0.03em] text-gray-900 sm:text-[68px] lg:text-[84px]"
            data-figma-node="6:472"
          >
            THE{" "}
            <span className="bg-gradient-to-r from-brand-blue via-indigo-500 to-violet-500 bg-clip-text font-extrabold text-transparent">
              IDENTITY
            </span>
            <br />
            CLONE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mx-auto mt-5 max-w-[560px] font-poppins text-sm leading-relaxed text-gray-600 sm:text-[15px]"
            data-figma-node="6:473"
          >
            Stop being the bottleneck. We digitize your voice, logic, and sales knowledge into a
            1:1 replica that closes thousands of conversations simultaneously.
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
                className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2.5"
              >
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="font-poppins text-lg font-extrabold text-brand-blue"
                />
                <span className="font-poppins text-[9px] font-bold uppercase tracking-wider text-gray-500">
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
              href="#sync"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-brand-blue px-10 py-4 font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_32px_rgba(28,51,191,0.25)] transition-all hover:shadow-[0_12px_40px_rgba(28,51,191,0.35)]"
              data-figma-node="6:474"
            >
              <span className="relative z-10">Explore Sync Tech</span>
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
          <IdentityTwinVisual />
        </motion.div>
      </SiteContainer>
    </section>
  );
}
