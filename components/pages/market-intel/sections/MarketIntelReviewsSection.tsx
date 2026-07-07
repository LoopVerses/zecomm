"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MARKET_INTEL_SECTIONS } from "@/lib/market-intel-tokens";
import { MarketIntelSectionReveal, staggerContainer, staggerItem } from "../shared/MarketIntelSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

const REVIEWS = [
  {
    metric: "14 gaps / week",
    initials: "DK",
    author: "David K.",
    role: "Head of Growth, NovaRetail",
    text: "We spotted the eco-packaging trend 3 weeks before any competitor moved. Unit 03 paid for itself in the first month — pure recon gold.",
  },
  {
    metric: "0.5s alerts",
    initials: "AL",
    author: "Aisha L.",
    role: "CMO, TechForge",
    text: "Price drop alerts fire before our rivals even update their ads. The gap heatmap alone changed how we plan product launches.",
  },
  {
    metric: "240 rivals tracked",
    initials: "MT",
    author: "Marcus T.",
    role: "Founder, ScalePath",
    text: "Like having a surveillance team that never sleeps. Keyword opportunities we would have missed are now our top revenue drivers.",
  },
] as const;

export default function MarketIntelReviewsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full overflow-x-clip border-t border-white/10 bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={MARKET_INTEL_SECTIONS.reviews}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <MarketIntelSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-cyan">
            Field reports
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-ink-primary">
            INTEL{" "}
            <span className="bg-gradient-to-r from-accent-cyan to-teal-400 bg-clip-text text-transparent">
              VERDICTS.
            </span>
          </h2>
        </MarketIntelSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {REVIEWS.map((review, i) => (
            <motion.div key={review.author} variants={staggerItem} className="h-full">
              <EliteCard glow={GLOWS[i % GLOWS.length]} className="h-full">
                <div className="group relative p-7">
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5 text-accent-lime">
                        {[...Array(5)].map((_, j) => (
                          <i key={j} className="fas fa-star text-xs" aria-hidden />
                        ))}
                      </div>
                      <span className="rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-2.5 py-1 font-poppins text-[8px] font-bold uppercase text-accent-cyan">
                        {review.metric}
                      </span>
                    </div>
                    <p className="mt-5 font-poppins text-sm leading-relaxed text-ink-secondary">
                      <span className="text-accent-cyan/40">&ldquo;</span>
                      {review.text}
                      <span className="text-accent-cyan/40">&rdquo;</span>
                    </p>
                    <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent-cyan to-teal-400 font-poppins text-[10px] font-bold text-white">
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
