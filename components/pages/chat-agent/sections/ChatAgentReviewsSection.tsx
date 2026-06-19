"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CHAT_AGENT_SECTIONS } from "@/lib/chat-agent-tokens";
import {
  ChatAgentSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/ChatAgentSectionReveal";

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
      className="relative w-full overflow-hidden border-t border-gray-100 bg-gray-50 py-24 lg:py-32"
      data-header-surface="light"
      data-figma-node={CHAT_AGENT_SECTIONS.reviews}
    >
      <SiteContainer>
        <ChatAgentSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-brand-blue shadow-sm">
            Client verdicts
          </span>
          <h2
            className="font-poppins text-[36px] font-light uppercase leading-[1.1] tracking-[-0.03em] text-gray-900 sm:text-[52px]"
            data-figma-node="6:346"
          >
            THE{" "}
            <span className="bg-gradient-to-r from-brand-blue to-blue-500 bg-clip-text font-extrabold text-transparent">
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
          {REVIEWS.map((review) => (
            <motion.article
              key={review.card}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-brand-blue/25"
              whileHover={{ y: -4 }}
              data-figma-node={review.card}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/[0.06] to-transparent opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-brand-blue">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-xs" aria-hidden />
                    ))}
                  </div>
                  <span className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-2.5 py-1 font-poppins text-[8px] font-bold uppercase text-brand-blue">
                    {review.metric}
                  </span>
                </div>
                <p className="mt-6 font-poppins text-sm leading-relaxed text-gray-600" data-figma-node={review.quote}>
                  <span className="text-brand-blue/40">&ldquo;</span>
                  {review.text}
                  <span className="text-brand-blue/40">&rdquo;</span>
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue font-poppins text-xs font-bold text-white">
                    {review.initialsText}
                  </div>
                  <div>
                    <p className="font-poppins text-xs font-bold uppercase text-gray-900">{review.author}</p>
                    <p className="font-poppins text-[9px] uppercase tracking-wider text-gray-500">{review.roleText}</p>
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
