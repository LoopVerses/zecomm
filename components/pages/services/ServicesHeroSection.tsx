"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { EASE_OUT } from "@/lib/design-system";

const QUICK_STATS = [
  { value: "8+", label: "Automation tools", glow: "violet" as const },
  { value: "6", label: "Marketplaces", glow: "cyan" as const },
  { value: "24/7", label: "Always on", glow: "lime" as const },
] as const;

export default function ServicesHeroSection() {
  return (
    <section
      className="zc-grain relative min-h-0 lg:min-h-[60vh] w-full overflow-x-clip overflow-hidden pt-[max(5.5rem,calc(4rem+env(safe-area-inset-top,0px)))] pb-14 sm:pt-28 sm:pb-16"
      data-header-surface="dark"
    >
      <MeshGradient />
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mx-auto max-w-3xl text-center"
        >
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 font-poppins text-[11px] font-semibold text-ink-secondary transition-colors hover:border-accent-violet/30 hover:text-ink-primary"
          >
            ← Back to Home
          </Link>

          <EliteCard glow="violet" className="mx-auto max-w-lg rounded-2xl">
            <div className="p-4">
              <span className="inline-flex items-center gap-2 rounded-lg border border-accent-lime/30 bg-accent-lime/10 px-2.5 py-1 font-poppins text-[10px] font-semibold text-accent-lime">
                <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-accent-lime" />
                Zeecom Automations
              </span>
              <p className="mt-3 font-display text-sm font-bold text-ink-primary sm:text-base">
                <span className="bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
                  Full automation stack
                </span>{" "}
                — one hub
              </p>
            </div>
          </EliteCard>

          <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-ink-primary">
            All automation services in one place
          </h1>

          <p className="mt-4 font-poppins text-base leading-relaxed text-ink-secondary sm:text-lg">
            From e-commerce and YouTube to WhatsApp, chat, email, voice, and market research. Pick the
            tools you need or combine them into one backend system.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {QUICK_STATS.map((stat) => (
              <EliteCard key={stat.label} glow={stat.glow} className="rounded-xl">
                <div className="px-3 py-3 text-center">
                  <p className="font-display text-xl font-bold text-ink-primary sm:text-2xl">{stat.value}</p>
                  <p className="font-poppins text-[10px] text-ink-muted sm:text-xs">{stat.label}</p>
                </div>
              </EliteCard>
            ))}
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
