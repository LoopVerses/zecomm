"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { VOICE_CLONE_SECTIONS } from "@/lib/voice-clone-tokens";
import { VoiceCloneSectionReveal, staggerContainer, staggerItem } from "../shared/VoiceCloneSectionReveal";

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
      className="w-full border-t border-gray-200 bg-[#0C0A14] py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={VOICE_CLONE_SECTIONS.reviews}
    >
      <SiteContainer>
        <VoiceCloneSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-orange-400">
            Client transcripts
          </span>
          <h2
            className="font-poppins text-[36px] font-light uppercase tracking-[-0.03em] text-white sm:text-[52px]"
            data-figma-node="6:717"
          >
            SONIC{" "}
            <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text font-extrabold text-transparent">
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
          {REVIEWS.map((review) => (
            <motion.article
              key={review.author}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8"
              whileHover={{ y: -4 }}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/[0.06] to-transparent opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-xs" aria-hidden />
                    ))}
                  </div>
                  <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-2.5 py-1 font-poppins text-[8px] font-bold uppercase text-orange-400">
                    {review.metric}
                  </span>
                </div>
                <p className="mt-6 font-poppins text-sm leading-relaxed text-gray-400">
                  <span className="text-orange-500/40">&ldquo;</span>
                  {review.text}
                  <span className="text-orange-500/40">&rdquo;</span>
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-violet-500 font-poppins text-xs font-bold text-white">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-poppins text-xs font-bold uppercase text-white">{review.author}</p>
                    <p className="font-poppins text-[9px] uppercase tracking-wider text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
