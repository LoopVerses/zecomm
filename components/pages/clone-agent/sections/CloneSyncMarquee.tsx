"use client";

import { motion } from "framer-motion";
import { CLONE_AGENT_SECTIONS } from "@/lib/clone-agent-tokens";

const TRAITS = [
  { tag: "TONE", detail: "Cadence mapped · 847 phrases", status: "synced" },
  { tag: "LOGIC", detail: "Decision tree · 12 branches", status: "synced" },
  { tag: "EMOTION", detail: "Warmth index · 0.91", status: "syncing" },
  { tag: "PHRASE", detail: "Closing bank · 214 entries", status: "synced" },
  { tag: "ACCENT", detail: "EN-US · pitch locked", status: "synced" },
  { tag: "MEMORY", detail: "CRM recall · instant", status: "synced" },
  { tag: "GUARD", detail: "Brand safety · active", status: "synced" },
] as const;

const STATUS_ICON = {
  synced: "fas fa-check-circle text-accent-lime",
  syncing: "fas fa-circle-notch fa-spin text-accent-violet",
} as const;

export default function CloneSyncMarquee() {
  const doubled = [...TRAITS, ...TRAITS];

  return (
    <section
      className="relative overflow-x-clip overflow-hidden border-y border-white/10 bg-surface-base py-4"
      data-header-surface="dark"
      data-figma-node={CLONE_AGENT_SECTIONS.marquee}
      aria-label="Neural trait sync stream"
    >
      <div className="flex items-stretch">
        <div className="z-10 flex shrink-0 items-center gap-2 border-r border-white/10 bg-surface-raised px-5 py-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-violet opacity-40" />
            <span className="relative h-2 w-2 rounded-full bg-accent-violet" />
          </span>
          <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-accent-violet">
            Trait Stream
          </p>
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0E1117] to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0E1117] to-transparent" aria-hidden />

          <motion.div
            className="flex w-max items-center gap-3 pl-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {doubled.map((item, i) => (
              <span
                key={`${item.tag}-${i}`}
                className="inline-flex shrink-0 items-center gap-2.5 rounded-xl border border-white/10 bg-surface-card px-4 py-2"
              >
                <span className="rounded-md bg-accent-violet px-2 py-0.5 font-poppins text-[8px] font-bold text-white">
                  {item.tag}
                </span>
                <span className="font-poppins text-[10px] font-medium text-ink-secondary">{item.detail}</span>
                <i className={`${STATUS_ICON[item.status]} text-[10px]`} aria-hidden />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
