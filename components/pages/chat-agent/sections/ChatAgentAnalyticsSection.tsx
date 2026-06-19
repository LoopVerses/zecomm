"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CHAT_AGENT_SECTIONS } from "@/lib/chat-agent-tokens";
import { CountUp } from "@/components/shared/CountUp";
import { ChatAgentSectionReveal } from "../shared/ChatAgentSectionReveal";

const CHART_BARS = [
  { label: "Legacy Bot", height: 28, node: "6:340" },
  { label: "Human Sales", height: 52, node: "6:342" },
  { label: "Unit 07", height: 88, node: "6:344" },
] as const;

const METRICS = [
  { label: "Customer Satisfaction", value: 85, suffix: "%", decimals: 0, node: "6:323" },
  { label: "Objection Clearing Rate", value: 92.4, suffix: "%", decimals: 1, node: "6:327" },
] as const;

const CHART_MAX_PX = 200;

export default function ChatAgentAnalyticsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-24 lg:py-32"
      data-header-surface="light"
      data-figma-node={CHAT_AGENT_SECTIONS.analytics}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(28,51,191,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <SiteContainer>
        <ChatAgentSectionReveal className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-brand-blue">
            Performance telemetry
          </span>
          <h2
            className="font-poppins text-[36px] font-light uppercase leading-[1.1] tracking-[-0.03em] text-gray-900 sm:text-[52px]"
            data-figma-node="6:322"
          >
            LIVE{" "}
            <span className="bg-gradient-to-r from-brand-blue to-blue-500 bg-clip-text font-extrabold text-transparent">
              PERFORMANCE.
            </span>
          </h2>
        </ChatAgentSectionReveal>

        <div ref={sectionRef} className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ChatAgentSectionReveal delay={0.1}>
            <div className="space-y-6">
              {METRICS.map((metric, i) => (
                <motion.div
                  key={metric.node}
                  className="rounded-2xl border border-gray-100 bg-gray-50/80 p-6 transition-colors hover:border-brand-blue/20 hover:bg-brand-blue/[0.02]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-end justify-between">
                    <p className="font-poppins text-[10px] font-bold uppercase tracking-wider text-gray-600" data-figma-node={metric.node}>
                      {metric.label}
                    </p>
                    <CountUp
                      value={metric.value}
                      suffix={metric.suffix}
                      decimals={metric.decimals}
                      className="font-poppins text-lg font-extrabold text-brand-blue"
                    />
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand-blue to-blue-400"
                      initial={{ width: "0%" }}
                      animate={inView ? { width: `${metric.value}%` } : { width: "0%" }}
                      transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              ))}

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "0.2s", label: "Response Latency", node: "6:331" },
                  { value: "24/7", label: "Operational Uptime", node: "6:334" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.node}
                    className="rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-brand-blue/20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    data-figma-node={stat.node}
                  >
                    <p className="font-poppins text-3xl font-extrabold text-gray-900">{stat.value}</p>
                    <p className="mt-1 font-poppins text-[9px] font-bold uppercase tracking-wider text-gray-400">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ChatAgentSectionReveal>

          <ChatAgentSectionReveal delay={0.2}>
            <div
              className="overflow-hidden rounded-2xl border border-gray-200 bg-[#0a0f1e] p-8"
              data-figma-node="6:337"
            >
              <p className="font-poppins text-[10px] font-bold uppercase tracking-wider text-brand-blue" data-figma-node="6:338">
                Conversion Lift (Avg Brand)
              </p>
              <p className="mt-1 font-poppins text-xs text-gray-500">Unit 07 vs legacy solutions</p>

              <div className="mt-10 flex items-end justify-between gap-4" style={{ height: CHART_MAX_PX }}>
                {CHART_BARS.map((bar, i) => (
                  <div key={bar.node} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                    <motion.span
                      className="font-poppins text-[10px] font-bold text-brand-blue"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.5 + i * 0.12 }}
                    >
                      {inView ? `${bar.height}%` : ""}
                    </motion.span>
                    <div className="relative w-full flex-1">
                      <motion.div
                        className={`absolute bottom-0 w-full rounded-t-lg ${
                          bar.label === "Unit 07"
                            ? "bg-gradient-to-t from-brand-blue to-blue-400"
                            : "bg-white/15"
                        }`}
                        initial={{ height: 0 }}
                        animate={
                          inView
                            ? { height: (bar.height / 100) * CHART_MAX_PX }
                            : { height: 0 }
                        }
                        transition={{ duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                        data-figma-node={bar.node}
                      />
                    </div>
                    <span
                      className={`font-poppins text-[8px] font-bold uppercase tracking-wider ${
                        bar.label === "Unit 07" ? "text-brand-blue" : "text-gray-500"
                      }`}
                    >
                      {bar.label}
                    </span>
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
