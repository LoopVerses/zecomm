"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { CountUp } from "@/components/shared/CountUp";
import { YoutubeSectionReveal } from "../shared/YoutubeSectionReveal";

const METRICS = [
  { node: "6:219", valueNode: "6:220", labelNode: "6:221", value: 8.4, prefix: "", suffix: "M", label: "Total Views Generated", decimals: 1 },
  { node: "6:222", valueNode: "6:223", labelNode: "6:224", value: 124, prefix: "$", suffix: "K", label: "Ad Revenue Scaled (Avg)", decimals: 0 },
  { node: "6:225", valueNode: "6:226", labelNode: "6:227", value: 92, prefix: "", suffix: "%", label: "Average Retention Score", decimals: 0 },
] as const;

const BAR_HEIGHTS = [38, 52, 48, 72, 68, 88, 96, 100] as const;

export default function YoutubeAnalyticsSection() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInView = useInView(chartRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-24 lg:py-32"
      data-header-surface="light"
      data-figma-node={YOUTUBE_SECTIONS.analytics}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(220,38,38,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <SiteContainer>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <YoutubeSectionReveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-red-600">
              <i className="fas fa-chart-bar text-[10px]" aria-hidden />
              Studio analytics
            </span>
            <h2
              className="font-poppins text-[36px] font-light uppercase leading-[1.1] tracking-[-0.03em] text-gray-900 sm:text-[52px]"
              data-figma-node="6:218"
            >
              REAL-TIME
              <br />
              <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text font-extrabold text-transparent">
                ANALYTICS.
              </span>
            </h2>

            <div className="mt-10 flex flex-col gap-6">
              {METRICS.map((metric, i) => (
                <motion.div
                  key={metric.node}
                  className="group rounded-r-2xl border-l-4 border-red-600 bg-gray-50 py-5 pl-6 pr-4 transition-colors hover:bg-red-50/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  data-figma-node={metric.node}
                >
                  <div className="flex items-baseline gap-1">
                    <CountUp
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      decimals={metric.decimals}
                      className="font-poppins text-4xl font-extrabold text-gray-900"
                      data-figma-node={metric.valueNode}
                    />
                  </div>
                  <p
                    className="mt-1 font-poppins text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500"
                    data-figma-node={metric.labelNode}
                  >
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </YoutubeSectionReveal>

          <YoutubeSectionReveal delay={0.15}>
            <div
              className="overflow-hidden rounded-2xl border border-gray-200 bg-[#0f0f0f] p-8 shadow-[0_20px_60px_rgba(220,38,38,0.12)]"
              data-figma-node="6:228"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="font-poppins text-[10px] font-bold uppercase tracking-wider text-red-500"
                    data-figma-node="6:229"
                  >
                    Growth Trajectory
                  </p>
                  <p className="mt-1 font-poppins text-xs text-gray-500">Last 8 weeks · all channels</p>
                </div>
                <span
                  className="rounded-full bg-red-600/20 px-2.5 py-1 font-poppins text-[9px] font-bold uppercase text-red-400"
                  data-figma-node="6:230"
                >
                  FACTORY_02
                </span>
              </div>

              <div ref={chartRef} className="mt-10 flex h-48 items-end gap-2">
                {BAR_HEIGHTS.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-red-700 to-red-500"
                    initial={{ height: 0 }}
                    animate={chartInView ? { height: `${h}%` } : { height: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  />
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <p
                  className="font-poppins text-[10px] text-gray-500"
                  data-figma-node="6:231"
                >
                  Viral probability:{" "}
                  <span className="font-bold text-red-400">94.2%</span>
                </p>
                <span className="flex items-center gap-1 font-poppins text-[9px] font-semibold text-emerald-400">
                  <i className="fas fa-arrow-up text-[8px]" aria-hidden />
                  +34% WoW
                </span>
              </div>
            </div>
          </YoutubeSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
