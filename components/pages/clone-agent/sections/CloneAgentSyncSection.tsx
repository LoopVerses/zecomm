"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CLONE_AGENT_SECTIONS } from "@/lib/clone-agent-tokens";
import { NeuralSyncDial } from "../shared/NeuralSyncDial";
import {
  CloneAgentSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/CloneAgentSectionReveal";

const STEPS = [
  {
    node: "6:397",
    titleNode: "6:398",
    bodyNode: "6:399",
    icon: "fas fa-fingerprint",
    title: "Identity Extraction",
    body: "500+ sales calls, emails, and chats ingested. AI isolates your linguistic patterns, emotional cues, and closing triggers.",
  },
  {
    node: "6:400",
    titleNode: "6:401",
    bodyNode: "6:402",
    icon: "fas fa-project-diagram",
    title: "Heuristic Logic Sync",
    body: "Your product knowledge and decision-making philosophy mapped into a custom neural brain — not a generic chatbot.",
  },
  {
    node: "6:403",
    titleNode: "6:404",
    bodyNode: "6:405",
    icon: "fas fa-expand-arrows-alt",
    title: "Infinite Scaling",
    body: "At 99%+ sync, your clone handles 10,000+ simultaneous 1-on-1 conversations across WhatsApp, email, and site chat.",
  },
] as const;

export default function CloneAgentSyncSection() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="sync"
      className="w-full border-t border-gray-200 bg-white py-24 lg:py-32"
      data-header-surface="light"
      data-figma-node={CLONE_AGENT_SECTIONS.sync}
    >
      <SiteContainer>
        <CloneAgentSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-brand-blue">
            3-phase neural mapping
          </span>
          <h2
            className="font-poppins text-[36px] font-light uppercase leading-[1.1] tracking-[-0.03em] text-gray-900 sm:text-[52px]"
            data-figma-node="6:396"
          >
            NEURAL{" "}
            <span className="bg-gradient-to-r from-brand-blue to-indigo-500 bg-clip-text font-extrabold text-transparent">
              TONE MAPPING.
            </span>
          </h2>
        </CloneAgentSectionReveal>

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            ref={stepsRef}
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate={stepsInView ? "visible" : "hidden"}
          >
            {STEPS.map((step, i) => (
              <motion.article
                key={step.node}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-r-2xl border-l-4 border-brand-blue bg-[#F3F6FF]/60 py-5 pl-5 pr-4 transition-colors hover:bg-brand-blue/[0.06]"
                whileHover={{ x: 6 }}
                data-figma-node={step.node}
              >
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/[0.06] to-transparent opacity-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%", opacity: 1 }}
                  transition={{ duration: 0.55 }}
                  aria-hidden
                />
                <div className="relative flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                    <i className={`${step.icon} text-sm text-brand-blue`} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-poppins text-[10px] font-bold uppercase tracking-wider text-brand-blue" data-figma-node={step.titleNode}>
                      0{i + 1}. {step.title}
                    </h3>
                    <p className="mt-2 font-poppins text-sm leading-relaxed text-gray-600" data-figma-node={step.bodyNode}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <CloneAgentSectionReveal delay={0.15}>
            <NeuralSyncDial />
          </CloneAgentSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
