"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STAGES = [
  {
    id: "land",
    icon: "fas fa-door-open",
    title: "Visitor Lands",
    detail: "Pricing page · scroll 89%",
    borderClass: "border-white/15",
    iconClass: "text-gray-300",
  },
  {
    id: "intent",
    icon: "fas fa-crosshairs",
    title: "Intent Locked",
    detail: "Buyer score 0.94 · heat high",
    borderClass: "border-brand-blue/40",
    iconClass: "text-brand-blue",
  },
  {
    id: "objection",
    icon: "fas fa-shield-alt",
    title: "Objection Hit",
    detail: '"Price vs Competitor X"',
    borderClass: "border-amber-500/40",
    iconClass: "text-amber-400",
  },
  {
    id: "close",
    icon: "fas fa-handshake",
    title: "Deal Closed",
    detail: "Elite · $2,400/mo · Node_742",
    borderClass: "border-emerald-500/40",
    iconClass: "text-emerald-400",
  },
] as const;

export function BuyerJourneyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative rounded-2xl border border-white/10 bg-[#080e1c] p-6 sm:p-8" data-figma-node="6:296">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-5">
        {STAGES.map((stage, i) => (
          <motion.div
            key={stage.id}
            className="relative"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
          >
            {i < STAGES.length - 1 && (
              <div
                className="pointer-events-none absolute -right-2.5 top-7 z-10 hidden h-px w-5 bg-white/15 sm:block"
                aria-hidden
              />
            )}

            <div className={`rounded-xl border bg-[#0d1428] p-4 ${stage.borderClass}`}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                <i className={`${stage.icon} text-sm ${stage.iconClass}`} aria-hidden />
              </div>
              <p className="font-poppins text-[10px] font-bold uppercase tracking-wider text-white">
                {stage.title}
              </p>
              <p className="mt-1.5 font-poppins text-[11px] leading-relaxed text-white/75">
                {stage.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Simple progress rail */}
      <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-blue via-amber-400 to-emerald-400"
          initial={{ width: "0%" }}
          animate={inView ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
