"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { CLONE_AGENT_SECTIONS } from "@/lib/clone-agent-tokens";
import { CloneAgentSectionReveal, staggerContainer, staggerItem } from "../shared/CloneAgentSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

const FEATURES = [
  {
    node: "6:418",
    icon: "fas fa-language",
    title: "Polyglot Sync",
    body: "50+ languages natively — your accent, tone, and phrasing preserved even for international clients.",
    metric: "50+ langs",
  },
  {
    node: "6:422",
    icon: "fas fa-brain",
    title: "Memory Access",
    body: "Instant recall of every CRM note, order history, and past interaction — every twin conversation feels personal.",
    metric: "Full CRM",
  },
  {
    node: "6:426",
    icon: "fas fa-shield-alt",
    title: "Identity Guard",
    body: "Safety protocols ensure your clone never goes off-brand or promises outside your defined logic parameters.",
    metric: "Brand safe",
  },
] as const;

export default function CloneAgentInfoGridSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full overflow-x-clip border-t border-white/10 bg-surface-raised py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={CLONE_AGENT_SECTIONS.infoGrid}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <CloneAgentSectionReveal className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
            Clone capabilities
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-ink-primary">
            BUILT TO{" "}
            <span className="bg-gradient-to-r from-accent-violet to-violet-400 bg-clip-text text-transparent">
              MIRROR YOU.
            </span>
          </h2>
        </CloneAgentSectionReveal>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {FEATURES.map((feature, i) => (
            <motion.div key={feature.node} variants={staggerItem} className="h-full" data-figma-node={feature.node}>
              <EliteCard glow={GLOWS[i % GLOWS.length]} className="h-full">
                <div className="group relative p-8">
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <motion.span
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-violet/15"
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                        transition={{ duration: 0.45 }}
                      >
                        <i className={`${feature.icon} text-lg text-accent-violet`} aria-hidden />
                      </motion.span>
                      <span className="rounded-full border border-accent-violet/25 bg-accent-violet/10 px-2.5 py-1 font-poppins text-[8px] font-bold uppercase text-accent-violet">
                        {feature.metric}
                      </span>
                    </div>
                    <h3 className="mt-6 font-poppins text-lg font-bold uppercase tracking-tight text-ink-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-3 font-poppins text-sm leading-relaxed text-ink-secondary">{feature.body}</p>
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
