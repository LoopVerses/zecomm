"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EMAIL_SECTIONS } from "@/lib/email-tokens";
import { EMAIL_PLUM, EMAIL_PARCHMENT } from "@/lib/email-theme";
import {
  EmailSectionReveal,
  staggerContainer,
  staggerItem,
} from "../shared/EmailSectionReveal";

const METRICS = [
  { value: 84, suffix: "%", label: "Response time cut", stamp: "#7C3AED", decimals: 0 },
  { value: 14, suffix: "hr", label: "Founder time saved / week", stamp: "#C2410C", decimals: 0 },
  { value: 0.1, suffix: "s", label: "Processing latency", stamp: "#059669", decimals: 1 },
] as const;

export default function EmailTelemetrySection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: EMAIL_PLUM }}
      data-header-surface="dark"
      data-figma-node={EMAIL_SECTIONS.telemetry}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-3 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${EMAIL_PARCHMENT} 0px, ${EMAIL_PARCHMENT} 8px, transparent 8px, transparent 16px)`,
        }}
        aria-hidden
      />

      <SiteContainer className="relative">
        <EmailSectionReveal className="text-center">
          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.3em] text-violet-300">
            Scanner telemetry
          </p>
          <h2 className="mt-3 font-poppins text-[clamp(2rem,4.5vw,3.25rem)] font-light text-white">
            Performance{" "}
            <span className="font-extrabold italic text-orange-300">stamps.</span>
          </h2>
        </EmailSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {METRICS.map((metric) => (
            <motion.article
              key={metric.label}
              variants={staggerItem}
              className="relative bg-white p-8 text-center"
              style={{
                clipPath: "polygon(0 8%, 8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%)",
              }}
            >
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border-2 border-dashed"
                style={{ borderColor: metric.stamp, color: metric.stamp }}
              >
                <i className="fas fa-stamp text-lg" aria-hidden />
              </div>
                <p className="flex items-end justify-center gap-0.5">
                  <span className="font-poppins text-5xl font-extrabold text-stone-900">
                    {metric.value}
                  </span>
                <span className="mb-2 font-poppins text-xl font-bold" style={{ color: metric.stamp }}>
                  {metric.suffix}
                </span>
              </p>
              <p className="mt-3 font-poppins text-[10px] font-bold uppercase tracking-[0.15em] text-stone-500">
                {metric.label}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
