"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { CHAT_AGENT_SECTIONS } from "@/lib/chat-agent-tokens";
import { BuyerJourneyMap } from "../shared/BuyerJourneyMap";
import {
  ChatAgentSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/ChatAgentSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red"] as const;

const STEPS = [
  {
    node: "6:287",
    titleNode: "6:288",
    bodyNode: "6:289",
    icon: "fas fa-crosshairs",
    title: "Intent Mapping",
    body: 'Scans browsing speed, page history, and keywords to classify visitors as "Researcher" or "Buyer" — instantly.',
  },
  {
    node: "6:290",
    titleNode: "6:291",
    bodyNode: "6:292",
    icon: "fas fa-shield-alt",
    title: "Objection Overdrive",
    body: "Trained on 10M high-ticket transcripts — counters price, trust, and timing objections with proof and scarcity.",
  },
  {
    node: "6:293",
    titleNode: "6:294",
    bodyNode: "6:295",
    icon: "fas fa-handshake",
    title: "The Hand-off",
    body: "For custom contracts, schedules CRM calls and briefs your team on the lead's heat level automatically.",
  },
] as const;

export default function ChatAgentLogicFeedSection() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="logic-feed"
      className="relative w-full overflow-x-clip overflow-hidden border-t border-white/10 bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={CHAT_AGENT_SECTIONS.logicFeed}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <ChatAgentSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
            Sales psychology engine
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-ink-primary" data-figma-node="6:283">
            <span className="block" data-figma-node="6:284">
              FROM VISITOR
            </span>
            <span className="block bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent" data-figma-node="6:285">
              TO CLOSED DEAL
            </span>
          </h2>
        </ChatAgentSectionReveal>

        <ChatAgentSectionReveal delay={0.1} className="mt-14">
          <BuyerJourneyMap />
        </ChatAgentSectionReveal>

        <motion.div
          ref={stepsRef}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={stepsInView ? "visible" : "hidden"}
        >
          {STEPS.map((step, i) => (
            <motion.div key={step.node} variants={staggerItem} className="h-full" data-figma-node={step.node}>
              <EliteCard glow={GLOWS[i % GLOWS.length]} className="h-full">
                <div className="group relative p-6">
                  <motion.span
                    className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-accent-violet/15"
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.45 }}
                  >
                    <i className={`${step.icon} text-base text-accent-violet`} aria-hidden />
                  </motion.span>
                  <h3
                    className="relative mt-4 font-poppins text-[10px] font-bold uppercase tracking-wider text-accent-violet"
                    data-figma-node={step.titleNode}
                  >
                    0{i + 1}. {step.title}
                  </h3>
                  <p
                    className="relative mt-2 font-poppins text-sm leading-relaxed text-ink-secondary"
                    data-figma-node={step.bodyNode}
                  >
                    {step.body}
                  </p>
                </div>
              </EliteCard>
            </motion.div>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
