"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YOUTUBE_PROCESS_STEPS } from "@/lib/youtube-content";
import { YoutubeSectionReveal } from "../shared/YoutubeSectionReveal";

const GLOWS = ["red", "violet", "cyan", "lime", "red", "violet", "cyan"] as const;

export default function YoutubePipelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full overflow-x-clip bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.pipeline}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <YoutubeSectionReveal>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400">
            Our process
          </span>
          <h2
            className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-ink-primary"
            data-figma-node="6:186"
          >
            How we build and grow your channel
          </h2>
          <p className="mt-3 max-w-2xl font-poppins text-base text-ink-secondary">
            A structured 7-step process from channel planning to growth and monetization support.
          </p>
        </YoutubeSectionReveal>

        <div className="relative mt-10 hidden h-px w-full overflow-hidden rounded-full bg-white/8 lg:block" aria-hidden>
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 via-accent-violet to-accent-cyan"
            style={{ width: lineWidth }}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {YOUTUBE_PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="h-full"
            >
              <EliteCard glow={GLOWS[index % GLOWS.length]} className="h-full">
                <div className="relative p-6">
                  <div
                    className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-red-600/0 blur-2xl transition-all duration-500 group-hover:bg-red-600/15"
                    aria-hidden
                  />
                  <motion.span
                    className="relative flex h-9 w-9 items-center justify-center rounded-full bg-red-600 font-poppins text-xs font-bold text-white shadow-[0_4px_20px_rgba(220,38,38,0.4)]"
                    whileHover={{ scale: 1.12, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.step}
                  </motion.span>
                  <h3 className="relative mt-4 font-poppins text-sm font-semibold text-ink-primary">{step.title}</h3>
                  <p className="relative mt-2 font-poppins text-xs leading-relaxed text-ink-muted">{step.description}</p>
                </div>
              </EliteCard>
            </motion.div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
