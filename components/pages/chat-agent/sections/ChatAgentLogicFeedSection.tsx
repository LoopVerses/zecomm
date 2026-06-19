"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CHAT_AGENT_SECTIONS } from "@/lib/chat-agent-tokens";
import { BuyerJourneyMap } from "../shared/BuyerJourneyMap";
import {
  ChatAgentSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/ChatAgentSectionReveal";

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
      className="relative w-full overflow-hidden border-t border-white/5 bg-[#040810] py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={CHAT_AGENT_SECTIONS.logicFeed}
    >
      <SiteContainer>
        <ChatAgentSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/25 bg-brand-blue/10 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-brand-blue">
            Sales psychology engine
          </span>
          <h2 className="font-poppins uppercase tracking-[-0.03em]" data-figma-node="6:283">
            <span className="block text-[36px] font-light leading-tight text-white sm:text-[48px]" data-figma-node="6:284">
              FROM VISITOR
            </span>
            <span className="block bg-gradient-to-r from-brand-blue to-cyan-400 bg-clip-text text-[32px] font-extrabold leading-tight text-transparent sm:text-[40px]" data-figma-node="6:285">
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
            <motion.article
              key={step.node}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-blue/25 hover:bg-brand-blue/[0.05]"
              whileHover={{ y: -4 }}
              data-figma-node={step.node}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/[0.08] to-transparent opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/15">
                <i className={`${step.icon} text-base text-brand-blue`} aria-hidden />
              </span>
              <h3
                className="relative mt-4 font-poppins text-[10px] font-bold uppercase tracking-wider text-brand-blue"
                data-figma-node={step.titleNode}
              >
                0{i + 1}. {step.title}
              </h3>
              <p
                className="relative mt-2 font-poppins text-sm leading-relaxed text-gray-400"
                data-figma-node={step.bodyNode}
              >
                {step.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
