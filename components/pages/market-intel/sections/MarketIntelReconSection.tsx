"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { MARKET_INTEL_SECTIONS } from "@/lib/market-intel-tokens";
import {
  MarketIntelSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/MarketIntelSectionReveal";

const STEPS = [
  {
    icon: "fas fa-spider",
    title: "Autonomous Crawl",
    body: "24/7 web agents scan competitor catalogs, pricing pages, ad libraries, and SERP rankings without human input.",
  },
  {
    icon: "fas fa-bolt",
    title: "Real-Time Scan",
    body: "Price drops, new SKUs, and ad spend shifts detected within 0.5s scrape latency — alerts fire instantly.",
  },
  {
    icon: "fas fa-project-diagram",
    title: "Gap Analysis",
    body: "AI cross-references keyword volume against competitor presence to surface zero-competition opportunities.",
  },
  {
    icon: "fas fa-bell",
    title: "Signal Dispatch",
    body: "Actionable intel pushed to your dashboard, Slack, or CRM — before rivals even notice the shift.",
  },
] as const;

const INTEL_LOG = [
  { text: "NODE_07 initialized · 240 targets locked", color: "text-gray-500" },
  { text: "Comp-X · Core Apparel · price −12%", color: "text-amber-400" },
  { text: "Trend spike · Minimalist Tech +240%", color: "text-emerald-400" },
  { text: "GAP · Eco Packaging · 42K vol · 0 comp", color: "text-teal-300" },
  { text: "Dispatch complete · 14 signals sent", color: "text-emerald-500" },
] as const;

function IntelConsole() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="rounded-2xl border border-emerald-500/20 bg-[#050F0D] p-6" data-figma-node="6:904">
      <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-500">
        Recon console
      </p>
      <div className="mt-4 space-y-2.5">
        {INTEL_LOG.map((line, i) => (
          <motion.div
            key={line.text}
            className="flex items-start gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2"
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.12 }}
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <p className={`font-poppins text-[11px] leading-relaxed ${line.color}`}>{line.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-4 h-1 overflow-hidden rounded-full bg-white/10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
          initial={{ width: "0%" }}
          animate={inView ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </div>
  );
}

export default function MarketIntelReconSection() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="recon"
      className="w-full border-t border-emerald-500/10 bg-[#ECFDF5] py-24 lg:py-32"
      data-header-surface="light"
      data-figma-node={MARKET_INTEL_SECTIONS.recon}
    >
      <SiteContainer>
        <MarketIntelSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-white px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-600">
            4-stage recon pipeline
          </span>
          <h2 className="font-poppins text-[36px] font-light uppercase tracking-[-0.03em] text-gray-900 sm:text-[52px]">
            SEARCH{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text font-extrabold text-transparent">
              RECON ENGINE.
            </span>
          </h2>
        </MarketIntelSectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            ref={stepsRef}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            animate={stepsInView ? "visible" : "hidden"}
          >
            {STEPS.map((step, i) => (
              <motion.article
                key={step.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-white p-5 transition-all hover:border-emerald-500/30"
                whileHover={{ y: -4 }}
              >
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/[0.06] to-transparent opacity-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%", opacity: 1 }}
                  transition={{ duration: 0.55 }}
                  aria-hidden
                />
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
                  <i className={`${step.icon} text-sm text-emerald-600`} aria-hidden />
                </span>
                <h3 className="mt-3 font-poppins text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  0{i + 1}. {step.title}
                </h3>
                <p className="mt-2 font-poppins text-xs leading-relaxed text-gray-600">{step.body}</p>
              </motion.article>
            ))}
          </motion.div>

          <MarketIntelSectionReveal delay={0.15}>
            <IntelConsole />
          </MarketIntelSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
