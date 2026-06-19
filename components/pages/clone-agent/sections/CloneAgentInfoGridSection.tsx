"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CLONE_AGENT_SECTIONS } from "@/lib/clone-agent-tokens";
import { CloneAgentSectionReveal, staggerContainer, staggerItem } from "../shared/CloneAgentSectionReveal";

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
      className="w-full border-t border-gray-200 bg-[#F3F6FF] py-24 lg:py-32"
      data-header-surface="light"
      data-figma-node={CLONE_AGENT_SECTIONS.infoGrid}
    >
      <SiteContainer>
        <CloneAgentSectionReveal className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-brand-blue">
            Clone capabilities
          </span>
          <h2 className="font-poppins text-[36px] font-light uppercase tracking-[-0.03em] text-gray-900 sm:text-[48px]">
            BUILT TO{" "}
            <span className="bg-gradient-to-r from-brand-blue to-violet-500 bg-clip-text font-extrabold text-transparent">
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
          {FEATURES.map((feature) => (
            <motion.article
              key={feature.node}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-brand-blue/25"
              whileHover={{ y: -4 }}
              data-figma-node={feature.node}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/[0.05] to-transparent opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10">
                    <i className={`${feature.icon} text-lg text-brand-blue`} aria-hidden />
                  </span>
                  <span className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-2.5 py-1 font-poppins text-[8px] font-bold uppercase text-brand-blue">
                    {feature.metric}
                  </span>
                </div>
                <h3 className="mt-6 font-poppins text-lg font-bold uppercase tracking-tight text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 font-poppins text-sm leading-relaxed text-gray-600">{feature.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
