"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const BENEFITS_NODE = "6:210";

const BENEFITS = [
  {
    title: "Save hours every week",
    description: "Automate repetitive tasks like email sorting, chat replies, and cart recovery.",
    icon: "fas fa-clock",
    accent: "text-accent-cyan",
    bg: "bg-accent-cyan/10 border-accent-cyan/20",
    glow: "cyan" as const,
  },
  {
    title: "Never miss a lead",
    description: "AI flags high-value emails and messages so your team responds to what matters.",
    icon: "fas fa-bullseye",
    accent: "text-accent-lime",
    bg: "bg-accent-lime/10 border-accent-lime/20",
    glow: "lime" as const,
  },
  {
    title: "Works while you sleep",
    description: "24/7 agents handle support and sales across WhatsApp, chat, and email.",
    icon: "fas fa-moon",
    accent: "text-accent-violet",
    bg: "bg-accent-violet/10 border-accent-violet/20",
    glow: "violet" as const,
  },
  {
    title: "Grows with you",
    description: "Start with one tool and add more as your business scales. All from one hub.",
    icon: "fas fa-chart-line",
    accent: "text-accent-cyan",
    bg: "bg-accent-cyan/10 border-accent-cyan/20",
    glow: "cyan" as const,
  },
] as const;

export default function BenefitsSection() {
  return (
    <section
      className="relative w-full overflow-x-clip bg-surface-raised py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={BENEFITS_NODE}
    >
      <SectionAmbience variant="violet" />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-lime/25 bg-accent-lime/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-lime">
              Why Zeecom
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.65rem,4.5vw,2.75rem)] font-bold leading-tight text-ink-primary">
              Built for busy teams who want results, not complexity
            </h2>
            <p className="mt-4 font-poppins text-base leading-relaxed text-ink-secondary">
              Zeecom replaces manual workflows with AI that&apos;s easy to understand and simple to manage.
              No coding, no long onboarding. Just tools that work.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <EliteCard glow={benefit.glow} className="h-full">
                  <div className="p-5">
                    <motion.div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${benefit.bg}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <i className={`${benefit.icon} text-sm ${benefit.accent}`} aria-hidden />
                    </motion.div>
                    <h3 className="mt-3 font-poppins text-sm font-semibold text-ink-primary">{benefit.title}</h3>
                    <p className="mt-1.5 font-poppins text-xs leading-relaxed text-ink-muted">{benefit.description}</p>
                  </div>
                </EliteCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
