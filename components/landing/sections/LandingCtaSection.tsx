"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const LANDING_CTA_NODE = "6:250";

export default function LandingCtaSection() {
  return (
    <section
      className="zc-grain relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={LANDING_CTA_NODE}
    >
      <MeshGradient className="opacity-50" />
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <ScrollReveal>
          <EliteCard glow="violet" className="overflow-hidden">
            <div className="relative px-6 py-12 text-center sm:px-12 sm:py-16">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(108,76,241,0.22),transparent)]"
                aria-hidden
              />

              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-accent-lime/30 bg-accent-lime/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-lime"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-accent-lime" />
                Ready to start?
              </motion.span>

              <h2 className="mt-6 font-display text-[clamp(1.65rem,4.5vw,3rem)] font-bold text-ink-primary">
                Automate your business today
              </h2>
              <p className="mx-auto mt-4 max-w-lg font-poppins text-base text-ink-secondary">
                Explore our AI tools and find the right fit for your team. Free consultation, no commitment.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Link
                  href="/services"
                  className="zc-focus-ring group relative inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-xl bg-accent-violet px-8 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02] sm:h-12 sm:w-auto sm:min-w-[200px]"
                >
                  <span className="relative z-10">Browse all services</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-cyan/0 via-white/10 to-accent-cyan/0 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  href="/services#contact"
                  className="zc-focus-ring inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary transition-all hover:border-accent-violet/40 hover:bg-accent-violet/10 sm:h-12 sm:w-auto sm:min-w-[200px]"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </EliteCard>
        </ScrollReveal>
      </SiteContainer>
    </section>
  );
}
