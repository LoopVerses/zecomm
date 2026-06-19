"use client";

import { motion } from "framer-motion";
import { CHAT_AGENT_SECTIONS } from "@/lib/chat-agent-tokens";

const GHOST_PHRASES = [
  "CLOSE",
  "INTENT",
  "OBJECTION",
  "HEAT",
  "PROOF",
  "DEAL",
  "CHECKOUT",
] as const;

const TELEMETRY = [
  { time: "00:04", tag: "INTENT", text: "Buyer locked · Node_742 · score 0.94", accent: "text-brand-blue" },
  { time: "00:11", tag: "OBJECTION", text: '"Price vs Competitor X" — counter deployed', accent: "text-amber-400" },
  { time: "00:18", tag: "CLEARED", text: "ROI proof accepted · heat remains high", accent: "text-emerald-400" },
  { time: "00:24", tag: "PUSH", text: "Elite plan checkout initiated · $2,400/mo", accent: "text-cyan-400" },
  { time: "00:31", tag: "CLOSED", text: "Node_742 · Elite annual · $4,800 secured", accent: "text-emerald-400" },
  { time: "00:38", tag: "RESPONSE", text: "Unit 07 reply latency · 0.2s avg", accent: "text-brand-blue" },
  { time: "00:45", tag: "INTENT", text: "Node_891 browsing Pro tier · 0.81 score", accent: "text-brand-blue" },
  { time: "00:52", tag: "CLOSED", text: "Node_503 · Elite · $2,400/mo recurring", accent: "text-emerald-400" },
] as const;

const TAG_STYLES = {
  INTENT: "border-brand-blue/35 bg-brand-blue/10 text-brand-blue",
  OBJECTION: "border-amber-500/35 bg-amber-500/10 text-amber-400",
  CLEARED: "border-emerald-500/35 bg-emerald-500/10 text-emerald-400",
  PUSH: "border-cyan-500/35 bg-cyan-500/10 text-cyan-400",
  CLOSED: "border-emerald-500/35 bg-emerald-500/10 text-emerald-400",
  RESPONSE: "border-brand-blue/35 bg-brand-blue/10 text-brand-blue",
} as const;

function TelemetryPill({ item }: { item: (typeof TELEMETRY)[number] }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-sm">
      <span className="font-mono text-[9px] font-medium text-gray-600">{item.time}</span>
      <span
        className={`rounded-md border px-2 py-0.5 font-poppins text-[8px] font-bold uppercase tracking-wider ${TAG_STYLES[item.tag]}`}
      >
        {item.tag}
      </span>
      <span className="font-poppins text-[10px] font-medium tracking-wide text-white">{item.text}</span>
    </span>
  );
}

function GhostWord({ word, index }: { word: string; index: number }) {
  return (
    <span className="relative mx-6 inline-flex shrink-0 items-center">
      <span className="font-poppins text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-none tracking-[-0.04em] text-white">
        {word}
      </span>
      <motion.span
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
        animate={{ x: ["-120%", "120%"] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: (index % 7) * 0.35 }}
        aria-hidden
      />
    </span>
  );
}

export default function ChatAgentCloserMarquee() {
  const ghostDoubled = [...GHOST_PHRASES, ...GHOST_PHRASES];
  const telemetryDoubled = [...TELEMETRY, ...TELEMETRY];

  return (
    <section
      className="relative w-full overflow-hidden border-y border-brand-blue/20 bg-[#030712]"
      data-header-surface="dark"
      data-figma-node={CHAT_AGENT_SECTIONS.ticker}
      aria-label="Live closer telemetry feed"
    >
      {/* Top gradient hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent" aria-hidden />

      {/* Scan sweep */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-brand-blue/[0.07] to-transparent"
        animate={{ x: ["-100%", "500%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      <div className="relative flex items-stretch">
        {/* Fixed live badge */}
        <div className="relative z-30 flex shrink-0 flex-col justify-center gap-1 border-r border-white/10 bg-[#060B18] px-5 py-4 sm:px-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-50" />
            <span className="relative h-2 w-2 rounded-full bg-brand-blue" />
          </span>
          <p className="font-poppins text-[8px] font-bold uppercase tracking-[0.3em] text-brand-blue">Live</p>
          <p className="font-poppins text-[11px] font-bold uppercase leading-tight tracking-wider text-white">
            Closer
            <br />
            Feed
          </p>
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col">
          {/* Lane 1 — ghost kinetic typography, scrolls right */}
          <div className="relative overflow-hidden border-b border-white/[0.06] py-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#030712] to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#030712] to-transparent" aria-hidden />

            <motion.div
              className="flex w-max items-center"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              {ghostDoubled.map((word, i) => (
                <GhostWord key={`${word}-${i}`} word={word} index={i} />
              ))}
            </motion.div>
          </div>

          {/* Lane 2 — telemetry pills, scrolls left */}
          <div className="relative overflow-hidden py-3.5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#030712] to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#030712] to-transparent" aria-hidden />

            <motion.div
              className="flex w-max items-center gap-3 pl-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {telemetryDoubled.map((item, i) => (
                <TelemetryPill key={`${item.time}-${item.tag}-${i}`} item={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
