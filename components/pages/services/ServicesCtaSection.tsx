"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { EASE_OUT } from "@/lib/design-system";

export default function ServicesCtaSection() {
  return (
    <section
      className="zc-grain relative w-full overflow-x-clip overflow-hidden bg-surface-raised py-14 sm:py-16 md:py-20"
      data-header-surface="dark"
    >
      <MeshGradient className="opacity-40" />
      <SectionAmbience variant="violet" />

      <SiteContainer className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <EliteCard glow="violet" className="overflow-hidden">
            <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14">
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-violet/10 via-transparent to-accent-cyan/10"
                aria-hidden
              />

              <h2 className="relative font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink-primary">
                Ready to automate your business?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl font-poppins text-base text-ink-secondary">
                Book a free consultation and we&apos;ll map the right automation stack for your goals.
              </p>

              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="zc-focus-ring group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-accent-violet px-8 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02] sm:w-auto sm:min-w-[200px]"
                >
                  <span className="relative z-10">Contact us today</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-cyan opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
                <Link
                  href="/ecom"
                  className="zc-focus-ring inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary transition-colors hover:border-accent-violet/40 hover:bg-white/10 sm:w-auto sm:min-w-[200px]"
                >
                  Start with E-Commerce
                </Link>
              </div>
            </div>
          </EliteCard>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
