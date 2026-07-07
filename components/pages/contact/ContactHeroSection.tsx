"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { EASE_OUT } from "@/lib/design-system";
import { CONTACT_EMAIL } from "@/lib/company-info";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
} satisfies Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
} satisfies Variants;

const QUICK_LINKS = [
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, icon: "fas fa-envelope" },
  { label: "Services", value: "Explore stack", href: "/services", icon: "fas fa-th-large" },
  { label: "Response", value: "Within 24h", href: "#contact-form", icon: "fas fa-clock" },
] as const;

export default function ContactHeroSection() {
  return (
    <section
      className="zc-grain relative min-h-0 w-full overflow-x-clip overflow-hidden pt-[max(5.5rem,calc(4rem+env(safe-area-inset-top,0px)))] pb-12 sm:pt-28 sm:pb-14 lg:min-h-[52vh]"
      data-header-surface="dark"
    >
      <MeshGradient />
      <SectionAmbience variant="mixed" />

      <motion.div
        className="pointer-events-none absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-accent-violet/70 blur-[1px]"
        animate={{ y: [0, -16, 0], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute right-[12%] top-[38%] h-1.5 w-1.5 rounded-full bg-accent-cyan/80"
        animate={{ y: [0, 14, 0], opacity: [0.3, 0.95, 0.3] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 font-poppins text-[11px] font-semibold text-ink-secondary transition-all hover:border-accent-violet/30 hover:text-ink-primary"
            >
              <span className="transition-transform group-hover:-translate-x-0.5">←</span>
              Back to Home
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-3 py-1 font-poppins text-[11px] font-semibold text-accent-violet">
                <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-accent-violet" />
                Contact Zeecom
              </span>

              <h1 className="mt-5 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-ink-primary">
                Let&apos;s build your{" "}
                <span className="bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-lime bg-clip-text text-transparent">
                  automation stack
                </span>
              </h1>

              <p className="mt-5 max-w-xl font-poppins text-base leading-relaxed text-ink-secondary sm:text-lg">
                Tell us about your business. We&apos;ll recommend the right mix of e-commerce, AI, and
                YouTube tools — free consultation, no commitment.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-5">
              <EliteCard glow="cyan" className="rounded-2xl">
                <div className="p-5 sm:p-6">
                  <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                    Quick reach
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    {QUICK_LINKS.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 transition-all hover:border-accent-violet/30 hover:bg-accent-violet/10"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent-violet transition-transform group-hover:scale-110">
                          <i className={`${link.icon} text-sm`} aria-hidden />
                        </span>
                        <span>
                          <span className="block font-poppins text-[10px] font-medium text-ink-muted">{link.label}</span>
                          <span className="block font-poppins text-sm font-semibold text-ink-primary group-hover:text-accent-violet">
                            {link.value}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </EliteCard>
            </motion.div>
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
