"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CountUp } from "@/components/shared/CountUp";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { CHAT_AGENT_SECTIONS } from "@/lib/chat-agent-tokens";
import { ChatAgentSectionReveal } from "../shared/ChatAgentSectionReveal";

const LIVE_CLOSES = [
  { node: "Node_742", value: "$4,800", plan: "Elite" },
  { node: "Node_891", value: "$1,200", plan: "Pro" },
  { node: "Node_503", value: "$2,400", plan: "Elite" },
] as const;

export default function ChatAgentCtaSection() {
  return (
    <section
      className="zc-grain relative w-full overflow-x-clip overflow-hidden bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={CHAT_AGENT_SECTIONS.cta}
    >
      <MeshGradient className="opacity-60" />
      <SectionAmbience variant="mixed" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(108,76,241,0.15),transparent)]"
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ChatAgentSectionReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-violet/30 bg-accent-violet/15 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
              <motion.i
                className="fas fa-robot text-[10px]"
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                transition={{ duration: 0.45 }}
                aria-hidden
              />
              Limited training slots
            </span>

            <h2
              className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-ink-primary"
              data-figma-node="6:374"
            >
              YOUR SITE
              <br />
              <span className="bg-gradient-to-r from-accent-violet via-violet-400 to-accent-cyan bg-clip-text text-transparent">
                NEEDS A CLOSER.
              </span>
            </h2>

            <p
              className="mt-5 max-w-[440px] font-poppins text-sm leading-relaxed text-ink-secondary sm:text-base"
              data-figma-node="6:375"
            >
              Custom logic trained on your offers, objections, and pricing. Live in days, not months.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="zc-focus-ring inline-flex h-11 w-full items-center sm:h-12 sm:w-auto justify-center rounded-xl bg-accent-violet px-8 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02]"
                data-figma-node="6:376"
              >
                Get started
              </Link>
              <Link
                href="/"
                className="group relative inline-flex h-11 w-full items-center sm:h-12 sm:w-auto justify-center overflow-hidden rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary transition-all hover:border-accent-violet/30 hover:bg-white/10"
                data-figma-node="6:378"
              >
                <span className="relative z-10">Book a demo</span>
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-accent-violet/15 to-transparent"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.6 }}
                  aria-hidden
                />
              </Link>
            </div>
          </ChatAgentSectionReveal>

          <ChatAgentSectionReveal delay={0.15}>
            <EliteCard glow="violet" className="backdrop-blur-sm bg-surface-card/80">
              <div className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="font-poppins text-[8px] font-bold uppercase tracking-[0.25em] text-accent-violet">
                      Live closes
                    </p>
                    <p className="font-poppins text-lg font-extrabold text-ink-primary">
                      <CountUp value={1420} /> today
                    </p>
                  </div>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-lime opacity-50" />
                    <span className="relative h-2 w-2 rounded-full bg-accent-lime" />
                  </span>
                </div>

                <div className="space-y-3">
                  {LIVE_CLOSES.map((deal, i) => (
                    <motion.div
                      key={deal.node}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-lime/15">
                          <motion.i
                            className="fas fa-check text-[10px] text-accent-lime"
                            whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                            transition={{ duration: 0.45 }}
                            aria-hidden
                          />
                        </div>
                        <div>
                          <p className="font-poppins text-[11px] font-bold text-ink-primary">{deal.node}</p>
                          <p className="font-poppins text-[9px] text-ink-muted">{deal.plan} plan</p>
                        </div>
                      </div>
                      <p className="font-poppins text-sm font-extrabold text-accent-violet">{deal.value}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                  {[
                    { label: "Objection rate", val: "92%" },
                    { label: "Response", val: "0.2s" },
                    { label: "Satisfaction", val: "85%" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-poppins text-sm font-extrabold text-ink-primary">{s.val}</p>
                      <p className="font-poppins text-[8px] font-semibold uppercase tracking-wider text-ink-muted">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </EliteCard>
          </ChatAgentSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
