"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { CLONE_AGENT_SECTIONS } from "@/lib/clone-agent-tokens";
import { CloneAgentSectionReveal, staggerContainer, staggerItem } from "../shared/CloneAgentSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

const REVIEWS = [
  {
    card: "6:431",
    metric: "94% match rate",
    initials: "RH",
    author: "Robert H.",
    role: "CEO, Apex Ecom",
    text: "I spent 8 hours daily in WhatsApp closing leads. My Digital Self now closes the same volume with 94% identical conversion — I'm finally free to build product.",
  },
  {
    card: "6:442",
    metric: "EU expansion",
    initials: "SM",
    author: "Sarah M.",
    role: "Founder, Z-Beauty Hub",
    text: "The Identity Sync is scary-good. Longtime clients thought it was me. It cloned my logic into German and French overnight for our European launch.",
  },
] as const;

export default function CloneAgentReviewsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full overflow-x-clip bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={CLONE_AGENT_SECTIONS.reviews}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <CloneAgentSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-violet/30 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
            Client sync reports
          </span>
          <h2
            className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-ink-primary"
            data-figma-node="6:430"
          >
            THE{" "}
            <span className="bg-gradient-to-r from-accent-violet to-violet-400 bg-clip-text text-transparent">
              SYNC REVIEWS.
            </span>
          </h2>
        </CloneAgentSectionReveal>

        <motion.div
          ref={gridRef}
          className="mx-auto mt-14 grid max-w-[900px] grid-cols-1 gap-5 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {REVIEWS.map((review, i) => (
            <motion.div key={review.card} variants={staggerItem} className="h-full" data-figma-node={review.card}>
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
                      <span className="text-accent-violet/50">&ldquo;</span>
                      {review.text}
                      <span className="text-accent-violet/50">&rdquo;</span>
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
