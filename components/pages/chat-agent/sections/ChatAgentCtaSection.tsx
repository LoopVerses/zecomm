"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CountUp } from "@/components/shared/CountUp";
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
      className="relative w-full overflow-hidden bg-[#060B18] py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={CHAT_AGENT_SECTIONS.cta}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(28,51,191,0.12),transparent)]"
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <ChatAgentSectionReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/15 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-brand-blue">
              <i className="fas fa-robot text-[10px]" aria-hidden />
              Limited training slots
            </span>

            <h2
              className="font-poppins text-[40px] font-light uppercase leading-[1.05] tracking-[-0.03em] text-white sm:text-[56px]"
              data-figma-node="6:374"
            >
              YOUR SITE
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-blue-400 to-cyan-400 bg-clip-text font-extrabold text-transparent">
                NEEDS A CLOSER.
              </span>
            </h2>

            <p
              className="mt-5 max-w-[440px] font-poppins text-sm leading-relaxed text-gray-400 sm:text-base"
              data-figma-node="6:375"
            >
              Custom logic trained on your offers, objections, and pricing. Live in days, not months.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/chat-agent"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-brand-blue px-8 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white shadow-[0_8px_32px_rgba(28,51,191,0.35)] transition-all hover:shadow-[0_12px_40px_rgba(28,51,191,0.45)]"
                data-figma-node="6:376"
              >
                Get started
              </Link>
              <Link
                href="/"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:border-brand-blue/30 hover:bg-white/10"
                data-figma-node="6:378"
              >
                <span className="relative z-10">Book a demo</span>
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/15 to-transparent"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.6 }}
                  aria-hidden
                />
              </Link>
            </div>
          </ChatAgentSectionReveal>

          {/* Right — live closes feed (unique, not glass card) */}
          <ChatAgentSectionReveal delay={0.15}>
            <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 p-6 backdrop-blur-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="font-poppins text-[8px] font-bold uppercase tracking-[0.25em] text-brand-blue">
                    Live closes
                  </p>
                  <p className="font-poppins text-lg font-extrabold text-white">
                    <CountUp value={1420} /> today
                  </p>
                </div>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15">
                        <i className="fas fa-check text-[10px] text-emerald-400" aria-hidden />
                      </div>
                      <div>
                        <p className="font-poppins text-[11px] font-bold text-white">{deal.node}</p>
                        <p className="font-poppins text-[9px] text-gray-500">{deal.plan} plan</p>
                      </div>
                    </div>
                    <p className="font-poppins text-sm font-extrabold text-brand-blue">{deal.value}</p>
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
                    <p className="font-poppins text-sm font-extrabold text-white">{s.val}</p>
                    <p className="font-poppins text-[8px] font-semibold uppercase tracking-wider text-gray-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ChatAgentSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
