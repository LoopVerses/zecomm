"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const HOW_IT_WORKS_NODE = "6:200";

const STEPS = [
  {
    step: "01",
    title: "Pick your tools",
    description:
      "Browse our automation stack — e-commerce, YouTube, WhatsApp, chat, email, and more. Use one or combine several.",
    icon: "fas fa-th-large",
    preview: ["E-Commerce", "YouTube", "WhatsApp", "Email"],
    glow: "violet" as const,
  },
  {
    step: "02",
    title: "Connect & configure",
    description:
      "Link your store, inbox, or channels. Guided setup on each page — most teams are live within a day.",
    icon: "fas fa-plug",
    preview: ["Store linked", "Inbox synced", "Channels live"],
    glow: "cyan" as const,
  },
  {
    step: "03",
    title: "Let AI run",
    description:
      "Agents handle replies, triage, content, and sales 24/7. You review and approve when needed.",
    icon: "fas fa-rocket",
    preview: ["847 emails triaged", "12 carts recovered", "3 posts scheduled"],
    glow: "lime" as const,
  },
] as const;

function StepPreview({ items, active, glow }: { items: readonly string[]; active: boolean; glow: "violet" | "cyan" | "lime" }) {
  return (
    <EliteCard glow={glow} className="mt-0">
      <div className="p-5">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${active ? "zc-live-dot bg-accent-lime" : "bg-ink-muted"}`} />
          <span className="font-poppins text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
            {active ? "Agent running" : "Waiting"}
          </span>
        </div>
        <ul className="mt-4 space-y-2.5">
          {items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2.5 font-poppins text-xs text-ink-secondary"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-violet/15">
                <i className="fas fa-check text-[8px] text-accent-violet" aria-hidden />
              </span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </EliteCard>
  );
}

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative w-full overflow-x-clip bg-surface-raised py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={HOW_IT_WORKS_NODE}
    >
      <SectionAmbience variant="cyan" />

      <SiteContainer className="relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-cyan">
            How it works
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.65rem,4.5vw,3rem)] font-bold text-ink-primary">
            Three steps to autopilot
          </h2>
          <p className="mt-4 font-poppins text-base text-ink-secondary">
            No technical background required. Get started in minutes, not months.
          </p>
        </ScrollReveal>

        <div className="relative mt-14 lg:mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/8 lg:left-1/2 lg:block" aria-hidden>
            <motion.div
              className="w-full bg-gradient-to-b from-accent-violet via-accent-cyan to-accent-lime"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-10 lg:gap-16">
            {STEPS.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.1}>
                <div
                  className={`grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-12 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <EliteCard glow={item.glow}>
                    <div className={`p-6 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                      <span className="font-display text-4xl font-bold text-accent-violet/25 sm:text-5xl">
                        {item.step}
                      </span>
                      <div
                        className={`mt-2 flex items-center gap-3 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
                      >
                        <motion.div
                          className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-violet/15 text-accent-violet"
                          whileHover={{ rotate: 360, scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        >
                          <i className={`${item.icon} text-lg`} aria-hidden />
                        </motion.div>
                        <h3 className="font-display text-xl font-bold text-ink-primary sm:text-2xl">{item.title}</h3>
                      </div>
                      <p
                        className={`mt-4 max-w-md font-poppins text-sm leading-relaxed text-ink-secondary ${index % 2 === 1 ? "lg:ml-auto" : ""}`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </EliteCard>

                  <StepPreview items={item.preview} active glow={item.glow} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
