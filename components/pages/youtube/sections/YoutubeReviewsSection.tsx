"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YoutubeSectionReveal } from "../shared/YoutubeSectionReveal";

const REVIEWS = [
  {
    card: "6:236",
    quoteNode: "6:238",
    metric: "Consistent uploads",
    quote:
      "We finally have a channel that posts every week without me touching scripts or edits. The team handles research, production, and SEO professionally.",
    name: "Marcus J.",
    role: "Founder, Apex Gear",
    initials: "MJ",
    glow: "red" as const,
  },
  {
    card: "6:243",
    quoteNode: "6:245",
    metric: "Better SEO results",
    quote:
      "Titles, thumbnails, and descriptions are optimized properly. Our videos reach the right audience and the channel looks fully managed.",
    name: "Sarah L.",
    role: "Growth Lead, Z-Tech",
    initials: "SL",
    glow: "violet" as const,
  },
  {
    card: "6:250",
    quoteNode: "6:252",
    metric: "True done-for-you",
    quote:
      "I wanted YouTube growth without recording or editing myself. This service delivered a complete content system with consistent publishing.",
    name: "Ben Rahim",
    role: "CEO, Axora Digitals",
    initials: "BR",
    glow: "lime" as const,
  },
] as const;

function ReviewCard({ review, index }: { review: (typeof REVIEWS)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      data-figma-node={review.card}
      className="h-full"
    >
      <EliteCard glow={review.glow} className="h-full">
        <div className="group relative p-6 sm:p-8">
          <span
            className="pointer-events-none absolute right-6 top-4 font-display text-5xl font-black leading-none text-red-600/10 transition-colors group-hover:text-red-600/20"
            aria-hidden
          >
            &ldquo;
          </span>

          <div className="relative flex items-center justify-between">
            <motion.i
              className="fab fa-youtube text-2xl text-red-600/50"
              whileHover={{ scale: 1.15 }}
              aria-hidden
            />
            <span className="rounded-full border border-red-600/30 bg-red-600/10 px-2.5 py-1 font-poppins text-[8px] font-bold uppercase tracking-wider text-red-400">
              {review.metric}
            </span>
          </div>

          <div className="relative mt-3 flex gap-0.5 text-red-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.i
                key={i}
                className="fas fa-star text-[10px]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.08 + i * 0.04 }}
                aria-hidden
              />
            ))}
          </div>

          <p
            className="relative mt-5 font-poppins text-sm leading-relaxed text-ink-secondary"
            data-figma-node={review.quoteNode}
          >
            <span className="text-red-600/50">&ldquo;</span>
            {review.quote}
            <span className="text-red-600/50">&rdquo;</span>
          </p>

          <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-rose-500 font-poppins text-xs font-bold text-white"
              whileHover={{ scale: 1.08 }}
            >
              {review.initials}
            </motion.div>
            <div>
              <p className="font-poppins text-xs font-bold uppercase text-ink-primary">{review.name}</p>
              <p className="font-poppins text-[9px] uppercase tracking-wider text-ink-muted">{review.role}</p>
            </div>
          </div>
        </div>
      </EliteCard>
    </motion.div>
  );
}

export default function YoutubeReviewsSection() {
  return (
    <section
      className="relative w-full overflow-x-clip bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.reviews}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <YoutubeSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400">
            Client feedback
          </span>
          <h2
            className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-ink-primary"
            data-figma-node="6:235"
          >
            Trusted by channel owners
          </h2>
        </YoutubeSectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <ReviewCard key={review.card} review={review} index={index} />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
