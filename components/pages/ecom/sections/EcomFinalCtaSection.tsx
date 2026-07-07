"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_THEME } from "@/lib/ecom-theme";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";

export default function EcomFinalCtaSection() {
  return (
    <section
      id="consultation"
      className={`zc-grain relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24 ${ECOM_THEME.bgAlt}`}
      data-header-surface={ECOM_THEME.surface}
      data-figma-node={ECOM_SECTIONS.finalCta}
    >
      <MeshGradient className="opacity-50" />
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <EcomSectionReveal>
          <EliteCard glow="violet" className="overflow-hidden">
            <div className="relative px-6 py-12 text-center sm:px-12 sm:py-14">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(108,76,241,0.22),transparent)]"
                aria-hidden
              />

              <motion.span
                className={ECOM_THEME.badge}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-accent-lime" />
                Get started
              </motion.span>

              <h2
                className={`mt-4 text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight ${ECOM_THEME.headline} ${ECOM_THEME.text}`}
                data-figma-node="6:580"
              >
                Start your e-commerce business with zero effort
              </h2>
              <p
                className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${ECOM_THEME.textMuted}`}
                data-figma-node="6:581"
              >
                Whether you want to launch on Walmart, TikTok Shop, Etsy, eBay, Shopify, or Amazon,
                Zeecom can help you set up, manage, and operate your store from A to Z. Let our team
                handle the operations while you focus on the bigger picture.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="zc-focus-ring group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-accent-violet px-8 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02] sm:w-auto sm:min-w-[220px]"
                  data-figma-node="6:582"
                >
                  <span className="relative z-10">Book Your Free Consultation</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-cyan opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  href="#services"
                  className="zc-focus-ring inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary transition-all hover:border-accent-violet/40 sm:w-auto sm:min-w-[220px]"
                  data-figma-node="6:584"
                >
                  Start Your Store Today
                </Link>
              </div>
            </div>
          </EliteCard>
        </EcomSectionReveal>
      </SiteContainer>
    </section>
  );
}
