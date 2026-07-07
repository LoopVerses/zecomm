"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { VOICE_CLONE_SECTIONS } from "@/lib/voice-clone-tokens";
import { VoiceCloneSectionReveal, staggerContainer, staggerItem } from "../shared/VoiceCloneSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

const REVIEWS = [
  {
    metric: "+34% VSL conv.",
    initials: "SK",
    author: "Sam K.",
    role: "Growth Lead, Optima",
    text: "Replaced professional voice actors with Unit 05. 100x cheaper, scripts iterate in seconds, and we match accent per geo target — conversions jumped.",
  },
  {
    metric: "15hrs saved/wk",
    initials: "RM",
    author: "Rahim M.",
    role: "Founder, Axora",
    text: "Cloned my voice for the phone system. Regular clients can't tell it's not me. Saves 15 hours of calls weekly — terrifyingly good.",
  },
  {
    metric: "12 languages",
    initials: "EL",
    author: "Emma L.",
    role: "CMO, LuxMedia",
    text: "International expansion backbone. Video ads in 12 languages with the SAME brand voice — ROI on global campaigns went through the roof.",
  },
] as const;

export default function VoiceCloneReviewsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full overflow-x-clip border-t border-white/10 bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={VOICE_CLONE_SECTIONS.reviews}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <VoiceCloneSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
            Client transcripts
          </span>
          <h2
            className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-ink-primary"
            data-figma-node="6:717"
          >
            SONIC{" "}
            <span className="bg-gradient-to-r from-accent-violet to-violet-400 bg-clip-text text-transparent">
              VERDICTS.
            </span>
          </h2>
        </VoiceCloneSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {REVIEWS.map((review, i) => (
            <motion.div key={review.author} variants={staggerItem} className="h-full">
              <EliteCard glow={GLOWS[i % GLOWS.length]} className="h-full">
                <div className="group relative p-8">
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5 text-accent-lime">
                        {[...Array(5)].map((_, j) => (
                          <i key={j} className="fas fa-star text-xs" aria-hidden />
                        ))}
                      </div>
                      <span className="rounded-full border border-accent-violet/25 bg-accent-violet/10 px-2.5 py-1 font-poppins text-[8px] font-bold uppercase text-accent-violet">
                        {review.metric}
                      </span>
                    </div>
                    <p className="mt-6 font-poppins text-sm leading-relaxed text-ink-secondary">
                      <span className="text-accent-violet/40">&ldquo;</span>
                      {review.text}
                      <span className="text-accent-violet/40">&rdquo;</span>
                    </p>
                    <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-violet-500 font-poppins text-xs font-bold text-white">
                        {review.initials}
                      </div>
                      <div>
                        <p className="font-poppins text-xs font-bold uppercase text-ink-primary">{review.author}</p>
                        <p className="font-poppins text-[9px] uppercase tracking-wider text-ink-muted">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </EliteCard>
            </motion.div>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
