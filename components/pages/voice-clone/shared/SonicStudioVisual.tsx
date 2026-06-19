"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountUp } from "@/components/shared/CountUp";

const EMOTIONS = [
  { id: "urgency", label: "Urgency", icon: "fas fa-bolt", color: "text-orange-400 border-orange-500/30 bg-orange-500/10" },
  { id: "empathy", label: "Empathy", icon: "fas fa-heart", color: "text-violet-400 border-violet-500/30 bg-violet-500/10" },
  { id: "authority", label: "Authority", icon: "fas fa-crown", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
] as const;

const LANGUAGES = ["EN-US", "DE", "FR", "ES", "JP", "AR"] as const;

const SCRIPT_LINES = [
  "Generating VSL audio — high-ticket offer hook...",
  "Applying emotion map · Urgency +12% pitch lift...",
  "Clone match verified · cadence locked...",
  "Export ready · 48kHz studio WAV",
] as const;

const BAR_HEIGHTS = [0.3, 0.55, 0.8, 0.45, 0.95, 0.6, 0.75, 0.5, 0.88, 0.4, 0.7, 0.62, 0.9, 0.35, 0.78, 0.52, 0.85, 0.48, 0.72, 0.58, 0.92, 0.42, 0.68, 0.55];

export function SonicStudioVisual() {
  const [emotionIdx, setEmotionIdx] = useState(0);
  const [langIdx, setLangIdx] = useState(0);
  const [scriptIdx, setScriptIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmotionIdx((i) => (i + 1) % EMOTIONS.length);
      setLangIdx((i) => (i + 1) % LANGUAGES.length);
      setScriptIdx((s) => (s + 1) % SCRIPT_LINES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[960px]">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-[#14101F]/95 p-5 sm:p-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
      >
        <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-orange-500/40" aria-hidden />
        <div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-violet-500/40" aria-hidden />
        <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-orange-500/40" aria-hidden />
        <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-violet-500/40" aria-hidden />

        <div className="mb-5 flex items-center justify-between px-1">
          <div>
            <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-orange-400">
              Sonic Synthesis Deck
            </p>
            <p className="font-poppins text-xs font-bold text-white">Unit 05 · Voice Engine</p>
          </div>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1.5"
          >
            <i className={`fas ${playing ? "fa-pause" : "fa-play"} text-[9px] text-orange-400`} aria-hidden />
            <span className="font-poppins text-[8px] font-bold uppercase text-orange-400">{playing ? "Live" : "Paused"}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[200px_1fr_180px]">
          {/* Emotion panel */}
          <div className="space-y-2">
            <p className="font-poppins text-[8px] font-bold uppercase tracking-wider text-gray-500">Emotion map</p>
            {EMOTIONS.map((emo, i) => (
              <motion.div
                key={emo.id}
                className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-colors ${
                  emotionIdx === i ? emo.color : "border-white/10 bg-white/[0.03] text-gray-500"
                }`}
                animate={emotionIdx === i ? { scale: [1, 1.02, 1] } : { scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                <i className={`${emo.icon} text-[11px]`} aria-hidden />
                <span className="font-poppins text-[10px] font-bold uppercase">{emo.label}</span>
              </motion.div>
            ))}
            <div className="mt-3 rounded-xl border border-violet-500/20 bg-violet-500/[0.06] p-3">
              <p className="font-poppins text-[8px] font-bold uppercase text-violet-400">Clone match</p>
              <CountUp value={98.7} decimals={1} suffix="%" className="font-poppins text-xl font-extrabold text-white" />
            </div>
          </div>

          {/* Waveform center */}
          <div className="relative flex flex-col justify-center rounded-2xl border border-white/10 bg-black/40 px-4 py-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-poppins text-[9px] font-bold uppercase tracking-wider text-gray-500">Frequency spectrum</span>
              <span className="font-poppins text-[9px] font-bold text-orange-400">48kHz · HD</span>
            </div>

            <div className="flex h-24 items-center justify-center gap-[3px]">
              {BAR_HEIGHTS.map((h, i) => (
                <motion.div
                  key={i}
                  className="w-1 rounded-full bg-gradient-to-t from-orange-600 via-orange-400 to-violet-400"
                  animate={
                    playing
                      ? { height: [`${h * 40}%`, `${(1 - h * 0.3) * 55}%`, `${h * 45}%`]}
                      : { height: `${h * 30}%` }
                  }
                  transition={{
                    duration: 0.5 + (i % 5) * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.03,
                  }}
                  style={{ minHeight: 4 }}
                />
              ))}
            </div>

            <div className="relative mt-4 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-orange-500 to-violet-500"
                animate={playing ? { x: ["-100%", "300%"] } : { x: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={scriptIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="mt-3 truncate font-poppins text-[10px] text-gray-400"
              >
                <span className="text-orange-400/70">{">"}</span> {SCRIPT_LINES[scriptIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Right stats */}
          <div className="space-y-2">
            <p className="font-poppins text-[8px] font-bold uppercase tracking-wider text-gray-500">Output</p>
            <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.06] p-3">
              <p className="font-poppins text-[8px] font-bold uppercase text-orange-400">Latency</p>
              <p className="font-poppins text-2xl font-extrabold text-white">
                0.3<span className="text-orange-400">s</span>
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="font-poppins text-[8px] font-bold uppercase text-gray-500">Language</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={langIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-poppins text-lg font-extrabold text-white"
                >
                  {LANGUAGES[langIdx]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {LANGUAGES.map((lang, i) => (
                <span
                  key={lang}
                  className={`rounded-md px-2 py-0.5 font-poppins text-[8px] font-bold ${
                    langIdx === i ? "bg-orange-500 text-white" : "bg-white/10 text-gray-500"
                  }`}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/10 pt-4 sm:grid-cols-4">
          {[
            { val: "52+", label: "Languages" },
            { val: "48kHz", label: "Quality" },
            { val: "3min", label: "Clone time" },
            { val: "0.3s", label: "Stream" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-orange-500/10 bg-orange-500/[0.04] py-2 text-center">
              <p className="font-poppins text-sm font-extrabold text-white">{s.val}</p>
              <p className="font-poppins text-[8px] font-bold uppercase tracking-wider text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
