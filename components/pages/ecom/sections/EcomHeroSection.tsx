"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { Tilt3D } from "@/components/shared/Tilt3D";
import { EASE_OUT } from "@/lib/design-system";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_PAGE_BG, ECOM_THEME } from "@/lib/ecom-theme";
import { EcomStorefrontVisual } from "../shared/EcomStorefrontVisual";
import { StaggeredHeadline } from "../shared/StaggeredHeadline";
import { StoreBrandChip, StoreBrandId } from "../shared/StoreBrandLogos";

const PLATFORMS: StoreBrandId[] = ["walmart", "tiktok", "etsy", "ebay", "shopify", "amazon"];

const QUICK_STATS = [
  { value: "6", label: "Marketplaces", glow: "violet" as const },
  { value: "A-Z", label: "Management", glow: "cyan" as const },
  { value: "Zero", label: "Effort for you", glow: "lime" as const },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
} satisfies Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
} satisfies Variants;

export default function EcomHeroSection() {
  return (
    <section
      className="zc-grain relative min-h-0 lg:min-h-[100dvh] w-full overflow-x-clip overflow-hidden pt-[max(5.5rem,calc(4rem+env(safe-area-inset-top,0px)))] pb-16 sm:pt-28 sm:pb-20"
      style={{ backgroundColor: ECOM_PAGE_BG }}
      data-header-surface={ECOM_THEME.surface}
      data-figma-node={ECOM_SECTIONS.hero}
    >
      <MeshGradient />

      <motion.div
        className="pointer-events-none absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-accent-violet/60 blur-[1px]"
        animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute right-[14%] top-[35%] h-1.5 w-1.5 rounded-full bg-accent-cyan/70"
        animate={{ y: [0, 12, 0], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-poppins text-[11px] font-semibold text-ink-secondary backdrop-blur-sm transition-all hover:border-accent-violet/30 hover:text-ink-primary"
            data-figma-node="8:991"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to Home
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <EliteCard glow="violet" className="max-w-md rounded-2xl">
                <div className="p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-accent-lime/30 bg-accent-lime/10 px-2.5 py-1 font-poppins text-[10px] font-semibold text-accent-lime">
                      <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-accent-lime" />
                      Live stores
                    </span>
                    <span className="font-poppins text-[10px] text-ink-muted">6 marketplaces</span>
                  </div>
                  <p className="mt-3 font-display text-sm font-bold text-ink-primary sm:text-base">
                    <span className="bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
                      Zero Effort
                    </span>{" "}
                    E-Commerce Solutions
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Amazon", "Shopify", "TikTok"].map((chip) => (
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

            <motion.div variants={itemVariants}>
              <StaggeredHeadline
                className={`${ECOM_THEME.headline} text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink-primary`}
                data-figma-node="6:495"
                lines={[
                  {
                    words: [
                      { text: "Build," },
                      { text: "Manage" },
                      { text: "&" },
                      { text: "Scale" },
                      { text: "Your" },
                      { text: "E-Commerce" },
                      { text: "Business" },
                    ],
                  },
                  {
                    words: [
                      { text: "With" },
                      {
                        text: "Zero",
                        className:
                          "bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-violet bg-clip-text text-transparent",
                      },
                      {
                        text: "Effort",
                        className:
                          "bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-violet bg-clip-text text-transparent",
                      },
                    ],
                  },
                ]}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className={`max-w-lg text-base leading-relaxed sm:text-[15px] ${ECOM_THEME.textMuted}`}
              data-figma-node="6:496"
            >
              At Zeecom, we provide complete A-Z e-commerce automation and marketplace management
              services. From store setup to product research, supplier communication, order fulfillment,
              payout handling, and daily operations, our team manages everything so you can focus on
              growth while we handle the work.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
              {PLATFORMS.map((brand) => (
                <StoreBrandChip key={brand} brand={brand} />
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center"
            >
              <Link
                href="#consultation"
                className="zc-focus-ring group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-accent-violet px-8 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02]"
                data-figma-node="6:497"
              >
                <span className="relative z-10">Get Started Today</span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-cyan opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="#consultation"
                className="zc-focus-ring inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary backdrop-blur-sm transition-all hover:border-accent-violet/40"
              >
                Book a Free Consultation
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 border-t border-white/8 pt-6">
              {QUICK_STATS.map((stat) => (
                <EliteCard key={stat.label} glow={stat.glow} className="rounded-xl">
                  <div className="px-3 py-3 text-center">
                    <p className={`${ECOM_THEME.headline} text-xl font-bold text-ink-primary`}>{stat.value}</p>
                    <p className={`text-[10px] sm:text-xs ${ECOM_THEME.textSubtle}`}>{stat.label}</p>
                  </div>
                </EliteCard>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT }}
            style={{ perspective: 1200 }}
          >
            <Tilt3D>
              <EcomStorefrontVisual />
            </Tilt3D>
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
}
