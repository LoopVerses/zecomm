"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CountUp } from "@/components/shared/CountUp";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { WHATSAPP_SECTIONS } from "@/lib/whatsapp-tokens";
import { WhatsappAmbientBackground } from "../shared/WhatsappAmbientBackground";
import { WhatsappChatVisual } from "../shared/WhatsappChatVisual";

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

const STATS = [
  {
    node: "6:805",
    labelNode: "6:806",
    valueNode: "6:807",
    label: "Open Rate",
    value: 98.2,
    suffix: "%",
    decimals: 1,
    accent: "text-green-500",
    bar: 98,
  },
  {
    node: "6:811",
    labelNode: "6:812",
    valueNode: "6:813",
    label: "Recovered Rev",
    value: 4.2,
    suffix: "X",
    decimals: 1,
    accent: "text-emerald-600",
    bar: 75,
  },
  {
    node: "6:817",
    labelNode: "6:818",
    valueNode: "6:819",
    label: "Response Time",
    value: 0.4,
    suffix: "s",
    decimals: 1,
    accent: "text-gray-900",
    bar: 25,
  },
] as const;

export default function WhatsappHeroSection() {
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
      className="zc-grain relative min-h-0 lg:min-h-[100dvh] w-full overflow-x-clip overflow-hidden bg-[#F6FBF7] pt-[max(5.5rem,calc(4rem+env(safe-area-inset-top,0px)))] pb-16 sm:pt-28 sm:pb-20"
      data-header-surface="light"
      data-figma-node={WHATSAPP_SECTIONS.hero}
    >
      <MeshGradient className="opacity-30" />
      <WhatsappAmbientBackground />

      <motion.div
        className="pointer-events-none absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.12)_0%,rgba(16,185,129,0.04)_45%,transparent_70%)] blur-[80px]"
        style={{ left: glowX, top: glowY }}
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 font-poppins text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600 shadow-sm transition-all hover:border-green-400/50 hover:text-green-600"
            data-figma-node="6:797"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to Hub
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-7">
            <motion.div
              variants={itemVariants}
              className="flex w-fit items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-4 py-1.5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
              </span>
              <span
                className="font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-green-600"
                data-figma-node="6:800"
              >
                WhatsApp Recovery
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-poppins text-[48px] font-light uppercase leading-[0.95] tracking-[-0.03em] text-gray-900 sm:text-[72px] lg:text-[88px]"
              data-figma-node="6:799"
            >
              <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 bg-clip-text font-extrabold text-transparent">
                WHATSAPP
              </span>
              <br />
              <span className="font-extrabold">RECOVERY.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-[480px] font-poppins text-sm leading-relaxed text-gray-600 sm:text-[15px]">
              Reach customers directly with 98% open rates. Friendly recovery messages that turn
              abandoned carts into sales, on autopilot.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="#recovery"
                className="inline-flex items-center justify-center rounded-xl bg-green-500 px-8 py-4 font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_28px_rgba(34,197,94,0.35)] transition-all hover:bg-green-600 hover:shadow-[0_12px_36px_rgba(34,197,94,0.4)]"
                data-figma-node="6:801"
              >
                Get started
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <WhatsappChatVisual />
          </motion.div>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3"
          data-figma-node={WHATSAPP_SECTIONS.analytics}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {STATS.map((stat, i) => (
            <motion.article
              key={stat.node}
              className="group relative overflow-hidden rounded-2xl border border-green-100 bg-white p-8 transition-colors duration-300 hover:border-green-300/50 hover:bg-green-50/30"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -4 }}
              data-figma-node={stat.node}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-green-500/[0.06] to-transparent opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
              <p
                className="font-poppins text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
                data-figma-node={stat.labelNode}
              >
                {stat.label}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals}
                  className={`font-poppins text-4xl font-extrabold sm:text-5xl ${stat.accent}`}
                  data-figma-node={stat.valueNode}
                />
                <span className={`font-poppins text-xl font-extrabold ${stat.accent}`}>{stat.suffix}</span>
              </div>
              <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.bar}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
