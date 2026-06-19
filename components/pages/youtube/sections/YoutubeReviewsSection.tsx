"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import {
  staggerContainer,
  staggerItem,
  YoutubeSectionReveal,
} from "../shared/YoutubeSectionReveal";

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
  },
] as const;

export default function YoutubeReviewsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0A0A0A] py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.reviews}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <SiteContainer>
        <YoutubeSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400">
            Client feedback
          </span>
          <h2
            className="font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-white"
            data-figma-node="6:235"
          >
            Trusted by channel owners
          </h2>
        </YoutubeSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {REVIEWS.map((review) => (
            <motion.article
              key={review.card}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-red-600/30 hover:bg-white/[0.05]"
              whileHover={{ y: -4 }}
              data-figma-node={review.card}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-red-600/[0.06] to-transparent opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <i className="fab fa-youtube text-2xl text-red-600/40" aria-hidden />
                  <span className="rounded-full border border-red-600/30 bg-red-600/10 px-2.5 py-1 font-poppins text-[8px] font-bold uppercase tracking-wider text-red-400">
                    {review.metric}
                  </span>
                </div>
                <p
                  className="mt-6 font-poppins text-sm leading-relaxed text-gray-400"
                  data-figma-node={review.quoteNode}
                >
                  <span className="text-red-600/50">&ldquo;</span>
                  {review.quote}
                  <span className="text-red-600/50">&rdquo;</span>
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 font-poppins text-xs font-bold text-white">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-poppins text-xs font-bold uppercase text-white">{review.name}</p>
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
