"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MARKET_INTEL_SECTIONS } from "@/lib/market-intel-tokens";
import {
  MarketIntelSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/MarketIntelSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

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
  { text: "NODE_07 initialized · 240 targets locked", color: "text-ink-muted" },
  { text: "Comp-X · Core Apparel · price −12%", color: "text-amber-400" },
  { text: "Trend spike · Minimalist Tech +240%", color: "text-accent-lime" },
  { text: "GAP · Eco Packaging · 42K vol · 0 comp", color: "text-accent-cyan" },
  { text: "Dispatch complete · 14 signals sent", color: "text-accent-cyan" },
] as const;

function IntelConsole() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} data-figma-node="6:904">
      <EliteCard glow="cyan" className="border-accent-cyan/20">
        <div className="p-6">
          <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-accent-cyan">
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
                <span className="zc-live-dot mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
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
              className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-teal-400"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </div>
      </EliteCard>
    </div>
  );
}

export default function MarketIntelReconSection() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="recon"
      className="relative w-full overflow-x-clip border-t border-white/10 bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={MARKET_INTEL_SECTIONS.recon}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <MarketIntelSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-cyan">
            4-stage recon pipeline
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-ink-primary">
            SEARCH{" "}
            <span className="bg-gradient-to-r from-accent-cyan to-teal-400 bg-clip-text text-transparent">
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
              <motion.div key={step.title} variants={staggerItem} className="h-full">
                <EliteCard glow={GLOWS[i % GLOWS.length]} className="h-full">
                  <div className="group relative p-5">
                    <motion.span
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-cyan/10"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                      transition={{ duration: 0.45 }}
                    >
                      <i className={`${step.icon} text-sm text-accent-cyan`} aria-hidden />
                    </motion.span>
                    <h3 className="mt-3 font-poppins text-[10px] font-bold uppercase tracking-wider text-accent-cyan">
                      0{i + 1}. {step.title}
                    </h3>
                    <p className="mt-2 font-poppins text-xs leading-relaxed text-ink-secondary">{step.body}</p>
                  </div>
                </EliteCard>
              </motion.div>
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
