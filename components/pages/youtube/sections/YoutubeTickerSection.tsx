"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";

const PIPELINE_LOG = [
  { icon: "fas fa-search", label: "RESEARCH", detail: "Trending topics", status: "active" as const, glow: "rgba(220,38,38,0.15)" },
  { icon: "fas fa-pen", label: "SCRIPT", detail: "Retention-focused", status: "processing" as const, glow: "rgba(245,158,11,0.12)" },
  { icon: "fas fa-microphone", label: "VOICE", detail: "Pro voiceover", status: "processing" as const, glow: "rgba(108,76,241,0.12)" },
  { icon: "fas fa-film", label: "EDIT", detail: "Full production", status: "active" as const, glow: "rgba(220,38,38,0.15)" },
  { icon: "fas fa-image", label: "THUMB", detail: "Click-focused design", status: "done" as const, glow: "rgba(16,185,129,0.12)" },
  { icon: "fas fa-chart-line", label: "SEO", detail: "Title & tags", status: "done" as const, glow: "rgba(6,182,212,0.12)" },
  { icon: "fas fa-cloud-upload-alt", label: "UPLOAD", detail: "Scheduled publish", status: "queued" as const, glow: "rgba(255,255,255,0.06)" },
  { icon: "fas fa-dollar-sign", label: "MONETIZE", detail: "Growth tracking", status: "active" as const, glow: "rgba(163,255,107,0.1)" },
] as const;

const STATUS_STYLES = {
  active: "border-red-500/40 bg-red-600/15 text-red-400",
  processing: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  queued: "border-white/15 bg-white/5 text-ink-muted",
  done: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
} as const;

function LogChip({ item }: { item: (typeof PIPELINE_LOG)[number] }) {
  return (
    <motion.span
      whileHover={{ scale: 1.04, y: -2 }}
      className={`inline-flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2 font-poppins backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:shadow-[0_8px_28px_var(--chip-glow)] ${STATUS_STYLES[item.status]}`}
      style={{ "--chip-glow": item.glow } as CSSProperties}
    >
      <i className={`${item.icon} text-[10px] opacity-80`} aria-hidden />
      <span className="text-[9px] font-bold uppercase tracking-wider">{item.label}</span>
      <span className="text-[9px] font-medium opacity-70">{item.detail}</span>
      {item.status === "active" && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
        </span>
      )}
    </motion.span>
  );
}

export default function YoutubeTickerSection() {
  const doubled = [...PIPELINE_LOG, ...PIPELINE_LOG];

  return (
    <section
      className="relative w-full overflow-x-clip overflow-hidden border-y border-red-600/20 bg-surface-raised"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.ticker}
      aria-label="YouTube production pipeline"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(220,38,38,0.05),transparent)]"
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent" aria-hidden />

      <div className="relative flex items-stretch">
        <motion.div
          className="relative z-10 flex shrink-0 items-center gap-3 border-r border-white/10 bg-surface-card px-5 py-3.5 sm:px-6"
          whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
          </span>
          <div>
            <p className="font-poppins text-[8px] font-bold uppercase tracking-[0.3em] text-red-500">Live</p>
            <p
              className="font-poppins text-[10px] font-bold uppercase tracking-wider text-ink-primary"
              data-figma-node="6:183"
            >
              Production
            </p>
          </div>
        </motion.div>

        <div className="relative flex-1 overflow-hidden py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-raised to-transparent sm:w-16" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-raised to-transparent sm:w-16" aria-hidden />

          <motion.div
            className="flex w-max items-center gap-3 pl-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {doubled.map((item, index) => (
              <LogChip key={`${item.label}-${index}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" aria-hidden />
    </section>
  );
}
