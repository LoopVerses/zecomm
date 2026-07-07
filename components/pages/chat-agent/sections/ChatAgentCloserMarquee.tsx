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
  { time: "00:04", tag: "INTENT", text: "Buyer locked · Node_742 · score 0.94", accent: "text-accent-violet" },
  { time: "00:11", tag: "OBJECTION", text: '"Price vs Competitor X" — counter deployed', accent: "text-amber-400" },
  { time: "00:18", tag: "CLEARED", text: "ROI proof accepted · heat remains high", accent: "text-accent-lime" },
  { time: "00:24", tag: "PUSH", text: "Elite plan checkout initiated · $2,400/mo", accent: "text-accent-cyan" },
  { time: "00:31", tag: "CLOSED", text: "Node_742 · Elite annual · $4,800 secured", accent: "text-accent-lime" },
  { time: "00:38", tag: "RESPONSE", text: "Unit 07 reply latency · 0.2s avg", accent: "text-accent-violet" },
  { time: "00:45", tag: "INTENT", text: "Node_891 browsing Pro tier · 0.81 score", accent: "text-accent-violet" },
  { time: "00:52", tag: "CLOSED", text: "Node_503 · Elite · $2,400/mo recurring", accent: "text-accent-lime" },
] as const;

const TAG_STYLES = {
  INTENT: "border-accent-violet/35 bg-accent-violet/10 text-accent-violet",
  OBJECTION: "border-amber-500/35 bg-amber-500/10 text-amber-400",
  CLEARED: "border-accent-lime/35 bg-accent-lime/10 text-accent-lime",
  PUSH: "border-accent-cyan/35 bg-accent-cyan/10 text-accent-cyan",
  CLOSED: "border-accent-lime/35 bg-accent-lime/10 text-accent-lime",
  RESPONSE: "border-accent-violet/35 bg-accent-violet/10 text-accent-violet",
} as const;

function TelemetryPill({ item }: { item: (typeof TELEMETRY)[number] }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-surface-card px-4 py-2.5 backdrop-blur-sm">
      <span className="font-mono text-[9px] font-medium text-ink-muted">{item.time}</span>
      <span
        className={`rounded-md border px-2 py-0.5 font-poppins text-[8px] font-bold uppercase tracking-wider ${TAG_STYLES[item.tag]}`}
      >
        {item.tag}
      </span>
      <span className="font-poppins text-[10px] font-medium tracking-wide text-ink-primary">{item.text}</span>
    </span>
  );
}

function GhostWord({ word, index }: { word: string; index: number }) {
  return (
    <span className="relative mx-6 inline-flex shrink-0 items-center">
      <span className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-none tracking-[-0.04em] text-ink-primary">
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
      className="relative w-full overflow-x-clip overflow-hidden border-y border-white/10 bg-surface-base"
      data-header-surface="dark"
      data-figma-node={CHAT_AGENT_SECTIONS.ticker}
      aria-label="Live closer telemetry feed"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-violet/50 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-violet/25 to-transparent" aria-hidden />

      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-accent-violet/[0.07] to-transparent"
        animate={{ x: ["-100%", "500%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      <div className="relative flex items-stretch">
        <div className="relative z-30 flex shrink-0 flex-col justify-center gap-1 border-r border-white/10 bg-surface-raised px-5 py-4 sm:px-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-violet opacity-50" />
            <span className="relative h-2 w-2 rounded-full bg-accent-violet" />
          </span>
          <p className="font-poppins text-[8px] font-bold uppercase tracking-[0.3em] text-accent-violet">Live</p>
          <p className="font-poppins text-[11px] font-bold uppercase leading-tight tracking-wider text-ink-primary">
            Closer
            <br />
            Feed
          </p>
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col">
          <div className="relative overflow-hidden border-b border-white/[0.06] py-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0E1117] to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0E1117] to-transparent" aria-hidden />

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

          <div className="relative overflow-hidden py-3.5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0E1117] to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0E1117] to-transparent" aria-hidden />

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
