"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { MARKET_INTEL_SECTIONS } from "@/lib/market-intel-tokens";
import { MarketIntelSectionReveal, staggerContainer, staggerItem } from "../shared/MarketIntelSectionReveal";

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
      className="w-full border-t border-emerald-500/10 bg-white py-24 lg:py-32"
      data-header-surface="light"
      data-figma-node={MARKET_INTEL_SECTIONS.reviews}
    >
      <SiteContainer>
        <MarketIntelSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-600">
            Field reports
          </span>
          <h2 className="font-poppins text-[36px] font-light uppercase tracking-[-0.03em] text-gray-900 sm:text-[52px]">
            INTEL{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text font-extrabold text-transparent">
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
          {REVIEWS.map((review) => (
            <motion.article
              key={review.author}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-[#ECFDF5]/50 p-7"
              whileHover={{ y: -4 }}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/[0.05] to-transparent opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-emerald-500">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-xs" aria-hidden />
                    ))}
                  </div>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 font-poppins text-[8px] font-bold uppercase text-emerald-600">
                    {review.metric}
                  </span>
                </div>
                <p className="mt-5 font-poppins text-sm leading-relaxed text-gray-600">
                  <span className="text-emerald-500/40">&ldquo;</span>
                  {review.text}
                  <span className="text-emerald-500/40">&rdquo;</span>
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-emerald-500/10 pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 font-poppins text-[10px] font-bold text-white">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-poppins text-xs font-bold uppercase text-gray-900">{review.author}</p>
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
