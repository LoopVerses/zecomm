"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { CHAT_AGENT_SECTIONS } from "@/lib/chat-agent-tokens";
import {
  ChatAgentSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/ChatAgentSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

const REVIEWS = [
  {
    card: "6:347",
    quote: "6:349",
    metric: "+34% conversions",
    text: "We sell $5,000 coaching packages. Unit 07 handles objections better than my human reps. Conversions up 34%.",
    initialsText: "JH",
    author: "Jason H.",
    roleText: "CEO, ScaleMaster",
  },
  {
    card: "6:353",
    quote: "6:355",
    metric: "Intent mapping",
    text: "It ignores window shoppers and puts all energy into buyers. Our Shopify store has never been this efficient.",
    initialsText: "ML",
    author: "Maria L.",
    roleText: "Founder, LuxBrand",
  },
  {
    card: "6:359",
    quote: "6:361",
    metric: "24/7 closer",
    text: "Unit 07 works while we sleep — like a top-tier sales executive in every time zone simultaneously.",
    initialsText: "RB",
    author: "Rahim B.",
    roleText: "Operations, Axora",
  },
] as const;

export default function ChatAgentReviewsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full overflow-x-clip overflow-hidden border-t border-white/10 bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={CHAT_AGENT_SECTIONS.reviews}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <ChatAgentSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
            Client verdicts
          </span>
          <h2
            className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-ink-primary"
            data-figma-node="6:346"
          >
            THE{" "}
            <span className="bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
              VERDICT.
            </span>
          </h2>
        </ChatAgentSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
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
                    <p className="mt-6 font-poppins text-sm leading-relaxed text-ink-secondary" data-figma-node={review.quote}>
                      <span className="text-accent-violet/40">&ldquo;</span>
                      {review.text}
                      <span className="text-accent-violet/40">&rdquo;</span>
                    </p>
                    <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan font-poppins text-xs font-bold text-white">
                        {review.initialsText}
                      </div>
                      <div>
                        <p className="font-poppins text-xs font-bold uppercase text-ink-primary">{review.author}</p>
                        <p className="font-poppins text-[9px] uppercase tracking-wider text-ink-muted">{review.roleText}</p>
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
