"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { LANDING_BG } from "@/lib/landing-theme";

export default function ServicesHeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16"
      style={{ backgroundColor: LANDING_BG }}
      data-header-surface="light"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(28,51,191,0.07) 0%, transparent 55%)",
        }}
        aria-hidden
      />

      <SiteContainer className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 font-poppins text-[11px] font-semibold text-gray-600 transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
          >
            ← Back to Home
          </Link>

          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            Zeecom Automations
          </span>

          <h1 className="mt-5 font-poppins text-[clamp(2rem,5vw,3rem)] font-bold leading-tight tracking-tight text-gray-900">
            All automation services in one place
          </h1>

          <p className="mt-4 font-poppins text-base leading-relaxed text-gray-600 sm:text-lg">
            From e-commerce and YouTube to WhatsApp, chat, email, voice, and market research. Pick the
            tools you need or combine them into one backend system.
          </p>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
