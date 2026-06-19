"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { MARKET_INTEL_SECTIONS } from "@/lib/market-intel-tokens";
import { MarketIntelSectionReveal, staggerContainer, staggerItem } from "../shared/MarketIntelSectionReveal";

const GAPS = [
  { keyword: "Eco-Friendly Packaging", volume: "42K", comp: 0, heat: 98 },
  { keyword: "AI Workspace Tools", volume: "28K", comp: 2, heat: 91 },
  { keyword: "Minimalist Tech Gear", volume: "19K", comp: 1, heat: 87 },
  { keyword: "Smart Home Bundles", volume: "15K", comp: 3, heat: 76 },
  { keyword: "Sustainable Apparel", volume: "11K", comp: 1, heat: 82 },
  { keyword: "Remote Office Kits", volume: "9.2K", comp: 0, heat: 94 },
] as const;

export default function MarketIntelGapSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className="w-full bg-[#050F0D] py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={MARKET_INTEL_SECTIONS.gaps}
    >
      <SiteContainer>
        <MarketIntelSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-400">
            Opportunity heatmap
          </span>
          <h2 className="font-poppins text-[36px] font-light uppercase tracking-[-0.03em] text-white sm:text-[52px]">
            MARKET{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text font-extrabold text-transparent">
              GAPS.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] font-poppins text-sm text-gray-500">
            High-volume keywords with low competitor saturation — detected in real-time.
          </p>
        </MarketIntelSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {GAPS.map((gap) => (
            <motion.article
              key={gap.keyword}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A1A16] p-5"
              whileHover={{ y: -4 }}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/[0.06] to-transparent opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-poppins text-sm font-bold text-white">{gap.keyword}</p>
                  {gap.comp === 0 && (
                    <span className="shrink-0 rounded-full border border-teal-400/30 bg-teal-400/10 px-2 py-0.5 font-poppins text-[8px] font-bold uppercase text-teal-300">
                      Zero comp
                    </span>
                  )}
                </div>
                <div className="mt-3 flex gap-4">
                  <div>
                    <p className="font-poppins text-lg font-extrabold text-emerald-400">{gap.volume}</p>
                    <p className="font-poppins text-[8px] font-semibold uppercase tracking-wider text-gray-500">Volume</p>
                  </div>
                  <div>
                    <p className="font-poppins text-lg font-extrabold text-white">{gap.comp}</p>
                    <p className="font-poppins text-[8px] font-semibold uppercase tracking-wider text-gray-500">Rivals</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-1 flex justify-between font-poppins text-[8px] font-bold uppercase tracking-wider text-gray-500">
                    <span>Opportunity heat</span>
                    <span className="text-emerald-400">{gap.heat}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${gap.heat}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />
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
