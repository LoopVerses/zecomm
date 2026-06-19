"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_PAGE_BG } from "@/lib/ecom-theme";
import { HeroAmbientBackground } from "../shared/AmbientBackground";
import { EcomStorefrontVisual } from "../shared/EcomStorefrontVisual";
import { StoreBrandChip, StoreBrandId } from "../shared/StoreBrandLogos";

const PLATFORMS: StoreBrandId[] = ["amazon", "shopify", "etsy", "walmart", "ebay", "tiktok"];

const QUICK_STATS = [
  { value: "6", label: "Marketplaces" },
  { value: "0.2s", label: "Sync speed" },
  { value: "24/7", label: "Automation" },
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
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
} satisfies Variants;

export default function EcomHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgMouseX = useMotionValue(0);
  const bgMouseY = useMotionValue(0);
  const bgGlowX = useSpring(bgMouseX, { stiffness: 50, damping: 24 });
  const bgGlowY = useSpring(bgMouseY, { stiffness: 50, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    bgMouseX.set(e.clientX - left);
    bgMouseY.set(e.clientY - top);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] w-full overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
      style={{ backgroundColor: ECOM_PAGE_BG }}
      data-header-surface="light"
      data-figma-node={ECOM_SECTIONS.hero}
    >
      <HeroAmbientBackground />

      <motion.div
        className="pointer-events-none absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(28,51,191,0.07)_0%,transparent_65%)] blur-[80px]"
        style={{ left: bgGlowX, top: bgGlowY }}
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
            className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 font-poppins text-[11px] font-semibold text-gray-600 shadow-sm transition-all hover:border-brand-blue/30 hover:text-brand-blue"
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
            <motion.span
              variants={itemVariants}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue"
              data-figma-node="6:492"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              E-Commerce Automation
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-poppins text-[clamp(2.25rem,5.5vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.03em] text-gray-900"
              data-figma-node="6:495"
            >
              Launch, manage, and scale stores across{" "}
              <span className="text-brand-blue">every major marketplace</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-lg font-poppins text-base leading-relaxed text-gray-600 sm:text-lg"
              data-figma-node="6:496"
            >
              We sync inventory, orders, and fulfillment on Amazon, Shopify, Etsy, Walmart, eBay, and
              TikTok Shop so you can focus on growth, not tech.
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
                href="#platforms"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-blue px-8 font-poppins text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90"
                data-figma-node="6:497"
              >
                Get started
              </Link>
              <Link
                href="#sync"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-8 font-poppins text-sm font-semibold text-gray-700 transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
              >
                See how it works
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-2">
              {QUICK_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-poppins text-xl font-bold text-gray-900">{stat.value}</p>
                  <p className="font-poppins text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <EcomStorefrontVisual />
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
}
