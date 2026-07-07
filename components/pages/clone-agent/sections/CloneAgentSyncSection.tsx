"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { CLONE_AGENT_SECTIONS } from "@/lib/clone-agent-tokens";
import { NeuralSyncDial } from "../shared/NeuralSyncDial";
import {
  CloneAgentSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/CloneAgentSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

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
      className="relative w-full overflow-x-clip border-t border-white/10 bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={CLONE_AGENT_SECTIONS.sync}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <CloneAgentSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
            3-phase neural mapping
          </span>
          <h2
            className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-ink-primary"
            data-figma-node="6:396"
          >
            NEURAL{" "}
            <span className="bg-gradient-to-r from-accent-violet to-violet-400 bg-clip-text text-transparent">
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
              <motion.div key={step.node} variants={staggerItem} data-figma-node={step.node}>
                <EliteCard
                  glow={GLOWS[i % GLOWS.length]}
                  className="rounded-r-2xl border-l-4 border-accent-violet hover:border-accent-violet/60"
                >
                  <div className="group relative py-5 pl-5 pr-4">
                    <div className="relative flex gap-4">
                      <motion.span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-violet/15"
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                        transition={{ duration: 0.45 }}
                      >
                        <i className={`${step.icon} text-sm text-accent-violet`} aria-hidden />
                      </motion.span>
                      <div>
                        <h3 className="font-poppins text-[10px] font-bold uppercase tracking-wider text-accent-violet" data-figma-node={step.titleNode}>
                          0{i + 1}. {step.title}
                        </h3>
                        <p className="mt-2 font-poppins text-sm leading-relaxed text-ink-secondary" data-figma-node={step.bodyNode}>
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </EliteCard>
              </motion.div>
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
