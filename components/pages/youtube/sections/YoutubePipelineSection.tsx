"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YOUTUBE_PROCESS_STEPS } from "@/lib/youtube-content";
import {
  staggerContainer,
  staggerItem,
  YoutubeSectionReveal,
} from "../shared/YoutubeSectionReveal";

export default function YoutubePipelineSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      id="process"
      className="relative w-full bg-[#0A0A0A] py-16 sm:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.pipeline}
    >
      <SiteContainer>
        <YoutubeSectionReveal>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400">
            Our process
          </span>
          <h2
            className="font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-white"
            data-figma-node="6:186"
          >
            How we build and grow your channel
          </h2>
          <p className="mt-3 max-w-2xl font-poppins text-base text-gray-500">
            A structured 7-step process from channel planning to growth and monetization support.
          </p>
        </YoutubeSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {YOUTUBE_PROCESS_STEPS.map((step) => (
            <motion.article
              key={step.step}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-red-600/30 hover:bg-white/[0.05]"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 font-poppins text-xs font-bold text-white">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-4 font-poppins text-sm font-semibold text-white">{step.title}</h3>
              <p className="mt-2 font-poppins text-xs leading-relaxed text-gray-500">{step.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
