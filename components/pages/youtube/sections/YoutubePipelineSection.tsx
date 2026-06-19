"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import {
  staggerContainer,
  staggerItem,
  YoutubeSectionReveal,
} from "../shared/YoutubeSectionReveal";

const STEPS = [
  {
    node: "6:187",
    numNode: "6:188",
    titleNode: "6:189",
    bodyNode: "6:190",
    num: "01",
    icon: "fas fa-brain",
    title: "Neural Scripting",
    body: "AI analyzes viral heatmaps to draft 99% retention scripts. Hooks, climaxes, and CTAs mapped automatically.",
  },
  {
    node: "6:191",
    numNode: "6:192",
    titleNode: "6:193",
    bodyNode: "6:194",
    num: "02",
    icon: "fas fa-film",
    title: "Visual Synthesis",
    body: "Cloud-editing engine sources b-roll, applies motion graphics, and syncs transitions to the beat.",
  },
  {
    node: "6:195",
    numNode: "6:196",
    titleNode: "6:197",
    bodyNode: "6:198",
    num: "03",
    icon: "fas fa-microphone-alt",
    title: "Voice Cloning",
    body: "Hyper-realistic narration in any language — your channel goes global from Day 1.",
  },
  {
    node: "6:199",
    numNode: "6:200",
    titleNode: "6:201",
    bodyNode: "6:202",
    num: "04",
    icon: "fas fa-chart-line",
    title: "SEO Dominance",
    body: "Thumbnails, titles, and tags optimized for max CTR. Posts timed to real-time traffic spikes.",
  },
] as const;

export default function YoutubePipelineSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      id="pipeline"
      className="relative w-full bg-[#0A0A0A] py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.pipeline}
    >
      <SiteContainer>
        <YoutubeSectionReveal>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-red-500">
            4-stage production line
          </span>
          <h2
            className="font-poppins text-[36px] font-light uppercase leading-[1.1] tracking-[-0.03em] text-white sm:text-[52px]"
            data-figma-node="6:186"
          >
            THE{" "}
            <span className="relative inline-block bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text font-extrabold text-transparent">
              PIPELINE.
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-red-600/80 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </h2>
        </YoutubeSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {STEPS.map((step) => (
            <motion.article
              key={step.node}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-red-600/30 hover:bg-white/[0.05]"
              whileHover={{ y: -4 }}
              data-figma-node={step.node}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-red-600/[0.06] to-transparent opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.55 }}
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/10"
                    data-figma-node={step.numNode}
                  >
                    <i className={`${step.icon} text-sm text-red-500`} aria-hidden />
                  </span>
                  <span className="font-poppins text-2xl font-extrabold text-white/15">{step.num}</span>
                </div>
                <h3
                  className="mt-6 font-poppins text-base font-bold uppercase tracking-wide text-white"
                  data-figma-node={step.titleNode}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-3 font-poppins text-sm leading-relaxed text-gray-500"
                  data-figma-node={step.bodyNode}
                >
                  {step.body}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
