"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { Tilt3D } from "@/components/shared/Tilt3D";
import { EASE_OUT } from "@/lib/design-system";
import { ADDITIONAL_SERVICES } from "@/lib/services-content";

const HEADLINE = ["All", "automation", "services", "in", "one", "elite", "hub"] as const;

const QUICK_STATS = [
  { value: "8+", label: "Automation tools", glow: "violet" as const },
  { value: "6", label: "Marketplaces", glow: "cyan" as const },
  { value: "24/7", label: "Always on", glow: "lime" as const },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
} satisfies Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
} satisfies Variants;

export default function ServicesHeroSection() {
  return (
    <section
      className="zc-grain relative min-h-0 w-full overflow-x-clip overflow-hidden pt-[max(5.5rem,calc(4rem+env(safe-area-inset-top,0px)))] pb-14 sm:pt-28 sm:pb-16 lg:min-h-[88vh]"
      data-header-surface="dark"
    >
      <MeshGradient />
      <SectionAmbience variant="mixed" />

      <motion.div
        className="pointer-events-none absolute left-[6%] top-[18%] h-2 w-2 rounded-full bg-accent-violet/70 blur-[1px]"
        animate={{ y: [0, -18, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute right-[10%] top-[42%] h-1.5 w-1.5 rounded-full bg-accent-lime/70"
        animate={{ y: [0, 16, 0], opacity: [0.25, 0.9, 0.25] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
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

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <EliteCard glow="violet" className="max-w-md rounded-2xl">
                <div className="p-4">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-accent-lime/30 bg-accent-lime/10 px-2.5 py-1 font-poppins text-[10px] font-semibold text-accent-lime">
                    <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-accent-lime" />
                    Full automation stack
                  </span>
                  <p className="mt-3 font-display text-sm font-bold text-ink-primary sm:text-base">
                    <span className="bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
                      E-Commerce · AI · YouTube
                    </span>{" "}
                    — one roof
                  </p>
                </div>
              </EliteCard>

              <h1 className="font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight">
                {HEADLINE.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.55, ease: EASE_OUT }}
                    className={`mr-[0.28em] inline-block ${
                      word === "elite" || word === "automation"
                        ? "bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-lime bg-clip-text text-transparent"
                        : "text-ink-primary"
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <p className="max-w-xl font-poppins text-base leading-relaxed text-ink-secondary sm:text-lg">
                From e-commerce and YouTube to WhatsApp, chat, email, voice, and market research. Pick
                the tools you need or combine them into one backend system.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#services-list"
                  className="zc-focus-ring inline-flex h-11 items-center rounded-xl bg-accent-violet px-6 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02]"
                >
                  Explore services
                </Link>
                <Link
                  href="/contact"
                  className="zc-focus-ring inline-flex h-11 items-center rounded-xl border border-white/15 bg-white/5 px-6 font-poppins text-sm font-semibold text-ink-primary transition-colors hover:border-accent-violet/40 hover:bg-white/10"
                >
                  Get in touch
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {QUICK_STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.45 }}
                  >
                    <EliteCard glow={stat.glow} className="rounded-xl">
                      <div className="px-3 py-3 text-center">
                        <p className="font-display text-xl font-bold text-ink-primary sm:text-2xl">{stat.value}</p>
                        <p className="font-poppins text-[10px] text-ink-muted sm:text-xs">{stat.label}</p>
                      </div>
                    </EliteCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <Tilt3D className="mx-auto max-w-md lg:max-w-none">
                <EliteCard glow="cyan" className="rounded-2xl">
                  <div className="p-5 sm:p-6">
                    <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                      Automation stack
                    </p>
                    <div className="mt-4 flex flex-col gap-2.5">
                      {ADDITIONAL_SERVICES.slice(0, 5).map((service, i) => (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.35 + i * 0.07, duration: 0.45 }}
                        >
                          <Link
                            href={service.href}
                            className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 transition-all hover:border-accent-violet/35 hover:bg-accent-violet/10"
                          >
                            <span
                              className={`flex h-9 w-9 items-center justify-center rounded-lg ${service.iconBg} ${service.iconColor} transition-transform group-hover:scale-110 group-hover:rotate-3`}
                            >
                              <i className={`${service.icon} text-sm`} aria-hidden />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block font-poppins text-sm font-semibold text-ink-primary group-hover:text-accent-violet">
                                {service.title}
                              </span>
                              <span className="block truncate font-poppins text-[11px] text-ink-muted">
                                {service.badge}
                              </span>
                            </span>
                            <span className="font-poppins text-xs text-accent-violet opacity-0 transition-all group-hover:opacity-100">
                              →
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </EliteCard>
              </Tilt3D>
            </motion.div>
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
