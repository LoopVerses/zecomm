"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { CONTACT_OPTIONS } from "@/lib/services-content";

export default function ServicesContactSection() {
  return (
    <section
      id="contact"
      className="zc-grain relative w-full overflow-x-clip overflow-hidden bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
    >
      <MeshGradient className="opacity-50" />
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-3 py-1 font-poppins text-[11px] font-semibold text-accent-violet">
            Get in touch
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink-primary">
            Contact us today
          </h2>
          <p className="mt-4 font-poppins text-base leading-relaxed text-ink-secondary">
            Tell us about your business and we&apos;ll recommend the right automation setup. Free
            consultation, no commitment.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_OPTIONS.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <EliteCard glow={option.glow} className="h-full">
                <a href={option.href} className="group block p-6 text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-accent-violet/20 bg-accent-violet/10 text-accent-violet">
                    <i className={`${option.icon} text-base`} aria-hidden />
                  </div>
                  <h3 className="mt-4 font-poppins text-sm font-semibold text-ink-primary">{option.title}</h3>
                  <p className="mt-1 font-poppins text-sm text-ink-secondary group-hover:text-ink-primary">
                    {option.detail}
                  </p>
                </a>
              </EliteCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <EliteCard glow="violet">
            <div className="flex flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-center">
              <Link
                href="mailto:hello@zeecom.com"
                className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-accent-violet px-8 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02] sm:w-auto sm:min-w-[200px]"
              >
                <span className="relative z-10">Contact Us Today</span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-cyan opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="/ecom"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary transition-colors hover:border-accent-violet/40 hover:bg-white/10 sm:w-auto sm:min-w-[200px]"
              >
                Start with E-Commerce
              </Link>
            </div>
          </EliteCard>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
