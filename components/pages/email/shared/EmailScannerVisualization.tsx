"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DETECTIONS = [
  {
    node: "6:639",
    labelNode: "6:640",
    quoteNode: "6:641",
    label: "Detected: High-Ticket Lead ($10k+)",
    quote: '"We are looking to scale our fulfillment to 50k units..."',
    borderClass: "border-l-green-500",
    labelClass: "text-green-500",
  },
  {
    node: "6:642",
    labelNode: "6:643",
    quoteNode: "6:644",
    label: "Detected: Support Crisis (Tier 1)",
    quote: '"The package arrived damaged, I need an immediate replacement..."',
    borderClass: "border-l-yellow-500",
    labelClass: "text-yellow-500",
  },
  {
    node: "6:645",
    labelNode: "6:646",
    quoteNode: "6:647",
    label: "Detected: Collab Request",
    quote: '"My agency would like to discuss a white-label partnership..."',
    borderClass: "border-l-blue-500",
    labelClass: "text-blue-500",
  },
] as const;

export default function EmailScannerVisualization() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="relative flex min-h-[600px] flex-col overflow-hidden rounded-2xl border border-white-10 bg-zinc-900"
      data-figma-node="6:630"
    >
      <div
        className="border-b border-white-10 px-12 pb-6 pt-12"
        data-figma-node="6:636"
      >
        <div className="flex items-center justify-between">
          <p
            className="font-inter text-[10px] font-black uppercase leading-[15px] text-brand-blue"
            data-figma-node="6:637"
          >
            Inbound Buffer: ACTIVE
          </p>
          <p
            className="font-inter text-[8.4px] font-normal leading-[13.5px] text-gray-500"
            data-figma-node="6:638"
          >
            Node: SCAN_06
          </p>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col gap-4 px-12 py-8">
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 w-full bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-60"
          animate={isInView ? { y: ["-20%", "420%"] } : { y: "-20%" }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          data-figma-node="6:648"
          aria-hidden
        />

        {DETECTIONS.map((item, index) => (
          <motion.article
            key={item.node}
            className={`border-l-4 bg-white/[0.05] px-6 py-5 ${item.borderClass}`}
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.2 }}
            data-figma-node={item.node}
          >
            <p
              className={`font-inter text-[9px] font-black uppercase leading-[13.5px] ${item.labelClass}`}
              data-figma-node={item.labelNode}
            >
              {item.label}
            </p>
            <p
              className="mt-1 font-inter text-xs leading-4 text-white/60"
              data-figma-node={item.quoteNode}
            >
              {item.quote}
            </p>
          </motion.article>
        ))}
      </div>

      <div
        className="border-t border-white-10 px-12 py-8"
        data-figma-node="6:631"
      >
        <div className="flex items-center justify-between">
          <p
            className="font-inter text-[10px] font-normal leading-[15px] text-gray-500"
            data-figma-node="6:632"
          >
            Drafting Confidence
          </p>
          <p
            className="font-inter text-xs font-black leading-4 text-brand-blue"
            data-figma-node="6:633"
          >
            99.7%
          </p>
        </div>
        <div className="relative mt-4 h-1 w-full bg-white/[0.05]" data-figma-node="6:634">
          <motion.div
            className="absolute inset-y-0 left-0 bg-brand-blue"
            initial={{ width: 0 }}
            animate={isInView ? { width: "99.7%" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            data-figma-node="6:635"
          />
        </div>
      </div>
    </div>
  );
}
