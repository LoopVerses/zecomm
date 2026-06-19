"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { CountUp } from "@/components/shared/CountUp";
import { SectionAmbientBackground } from "../shared/AmbientBackground";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";

const BAR_HEIGHTS = [38, 64, 109] as const;
const STORE_NODES = [
  { id: 539, label: "SHOP" },
  { id: 540, label: "AMZ" },
  { id: 541, label: "TT" },
  { id: 542, label: "3PL" },
] as const;

function TelemetryCard({
  children,
  className = "",
  delay = 0,
  figmaNode,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  figmaNode?: string;
}) {
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-10 transition-colors duration-300 hover:border-brand-blue/35 hover:bg-brand-blue/[0.02] ${className}`}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      data-figma-node={figmaNode}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-brand-blue/[0.07] to-transparent opacity-0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        aria-hidden
      />
      <div className="relative">{children}</div>
    </motion.article>
  );
}

export default function EcomTelemetrySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="results"
      className="relative w-full overflow-hidden py-16 sm:py-20"
      style={{ backgroundColor: "#FAFBFC" }}
      data-header-surface="light"
      data-figma-node={ECOM_SECTIONS.telemetry}
    >
      <SectionAmbientBackground />

      <SiteContainer className="relative">
        <EcomSectionReveal className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue">
            Real results
          </span>

          <h2
            className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900"
            data-figma-node="6:530"
          >
            Numbers that matter to your business
          </h2>

          <p className="mt-3 max-w-xl font-poppins text-base leading-relaxed text-gray-500">
            Track profit, active stores, and daily automation volume from a single clear dashboard.
          </p>
        </EcomSectionReveal>

        <div ref={sectionRef} className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <TelemetryCard delay={0} figmaNode="6:531">
            <p
              className="font-poppins text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
              data-figma-node="6:532"
            >
              Average Profit Lift
            </p>

            <div className="relative mt-14 flex h-32 items-end justify-center gap-5">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 border-b border-dashed border-gray-200"
                aria-hidden
              />
              {BAR_HEIGHTS.map((height, i) => (
                <div key={i} className="relative flex w-12 flex-col items-center">
                  <motion.div
                    className={`w-full rounded-t-xl ${
                      i === 2
                        ? "bg-gradient-to-t from-brand-blue to-blue-400"
                        : i === 1
                          ? "bg-gradient-to-t from-gray-300 to-gray-200"
                          : "bg-gradient-to-t from-gray-200 to-gray-100"
                    }`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      barsInView
                        ? { height, opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.85,
                      delay: 0.15 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    data-figma-node={`6:${533 + i}`}
                  />
                  {i === 2 && barsInView && (
                    <motion.span
                      className="absolute -top-6 font-poppins text-[9px] font-bold text-brand-blue"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      +34%
                    </motion.span>
                  )}
                </div>
              ))}
            </div>

            <CountUp
              value={34.2}
              prefix="+"
              suffix="%"
              decimals={1}
              className="mt-8 block font-montserrat text-4xl font-black text-brand-blue"
              data-figma-node="6:536"
            />
            <p className="mt-2 font-poppins text-[10px] text-gray-400">vs. manual ops baseline</p>
          </TelemetryCard>

          <TelemetryCard delay={0.1} figmaNode="6:537">
            <p
              className="font-poppins text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
              data-figma-node="6:538"
            >
              Active Store Nodes
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {STORE_NODES.map((node, i) => (
                <motion.div
                  key={node.id}
                  className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5 transition-colors duration-300 group-hover:border-brand-blue/15 group-hover:bg-white"
                  initial={{ opacity: 0, x: -12 }}
                  animate={barsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  data-figma-node={`6:${node.id}`}
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-poppins text-[9px] font-bold tracking-wider text-gray-700">
                    {node.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <CountUp
              value={4}
              className="mt-10 block font-montserrat text-4xl font-black text-gray-900"
              data-figma-node="6:543"
            />
            <p className="mt-2 font-poppins text-[10px] text-emerald-600">All channels online</p>
          </TelemetryCard>

          <TelemetryCard
            delay={0.2}
            figmaNode="6:544"
            className="border-brand-blue/20 bg-gradient-to-br from-brand-blue/[0.06] via-white to-blue-50/60"
          >
            <p
              className="font-poppins text-[10px] font-bold uppercase tracking-[0.15em] text-brand-blue"
              data-figma-node="6:545"
            >
              Automated Task Load
            </p>

            <div className="mt-6 flex items-center gap-6">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 80 80" aria-hidden>
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(28,51,191,0.1)" strokeWidth="5" />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="url(#telemetryRing)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="214"
                    initial={{ strokeDashoffset: 214 }}
                    animate={barsInView ? { strokeDashoffset: 48 } : { strokeDashoffset: 214 }}
                    transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <defs>
                    <linearGradient id="telemetryRing" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1c33bf" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="font-poppins text-[9px] font-bold text-brand-blue">78%</span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <CountUp
                    value={24400}
                    className="font-montserrat text-3xl font-black text-gray-900 sm:text-4xl"
                    data-figma-node="6:546"
                  />
                  <span
                    className="font-poppins text-xs font-bold text-brand-blue"
                    data-figma-node="6:547"
                  >
                    Tasks/Day
                  </span>
                </div>
                <div className="mt-3 flex gap-1">
                  {[...Array(8)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="h-6 w-1 rounded-full bg-brand-blue/20"
                      animate={
                        barsInView
                          ? { scaleY: [0.4, 1, 0.5, 0.9, 0.4] }
                          : { scaleY: 0.4 }
                      }
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: i * 0.12,
                        ease: "easeInOut",
                      }}
                      style={{ transformOrigin: "bottom" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p
              className="mt-6 font-poppins text-xs leading-relaxed text-gray-600"
              data-figma-node="6:548"
            >
              Handling API requests, webhooks, and currency conversions across 14 regions
              simultaneously.
            </p>
          </TelemetryCard>
        </div>
      </SiteContainer>
    </section>
  );
}
