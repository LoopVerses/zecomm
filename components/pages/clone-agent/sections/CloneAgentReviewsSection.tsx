"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CLONE_AGENT_SECTIONS } from "@/lib/clone-agent-tokens";
import { CloneAgentSectionReveal, staggerContainer, staggerItem } from "../shared/CloneAgentSectionReveal";

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
      className="w-full bg-[#080C1A] py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={CLONE_AGENT_SECTIONS.reviews}
    >
      <SiteContainer>
        <CloneAgentSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-brand-blue">
            Client sync reports
          </span>
          <h2
            className="font-poppins text-[36px] font-light uppercase leading-[1.1] tracking-[-0.03em] text-white sm:text-[52px]"
            data-figma-node="6:430"
          >
            THE{" "}
            <span className="bg-gradient-to-r from-brand-blue to-indigo-400 bg-clip-text font-extrabold text-transparent">
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
          {REVIEWS.map((review) => (
            <motion.article
              key={review.card}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8"
              whileHover={{ y: -4 }}
              data-figma-node={review.card}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/[0.08] to-transparent opacity-0"
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
                  <span className="rounded-full border border-brand-blue/25 bg-brand-blue/10 px-2.5 py-1 font-poppins text-[8px] font-bold uppercase text-brand-blue">
                    {review.metric}
                  </span>
                </div>
                <p className="mt-6 font-poppins text-sm leading-relaxed text-gray-400">
                  <span className="text-brand-blue/50">&ldquo;</span>
                  {review.text}
                  <span className="text-brand-blue/50">&rdquo;</span>
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue font-poppins text-xs font-bold text-white">
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
