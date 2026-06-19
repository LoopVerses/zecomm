"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountUp } from "@/components/shared/CountUp";

const UPLOAD_QUEUE = [
  { title: "AI Workspaces 2026 — Full Breakdown", status: "Rendering 4K", progress: 78 },
  { title: "Top 10 Tech Gadgets — Viral Edit", status: "SEO optimizing", progress: 45 },
  { title: "Faceless Channel Blueprint", status: "Uploading", progress: 92 },
] as const;

export function YoutubeStudioVisual() {
  const [progress, setProgress] = useState(34);
  const [views, setViews] = useState(8420);
  const [queueIndex, setQueueIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 12 : p + 2));
      setViews((v) => v + Math.floor(Math.random() * 120) + 30);
      setQueueIndex((i) => (i + 1) % UPLOAD_QUEUE.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[560px]" data-figma-node="6:212">
      <motion.div
        className="absolute -left-4 top-6 z-20 rounded-xl border border-red-500/30 bg-[#141414] px-4 py-3 shadow-[0_8px_32px_rgba(220,38,38,0.2)] sm:-left-8"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="font-poppins text-[9px] font-bold uppercase tracking-wider text-red-500">
          Live views / hr
        </p>
        <CountUp value={views} className="font-poppins text-xl font-extrabold text-white" />
      </motion.div>

      <motion.div
        className="absolute -right-2 bottom-32 z-20 rounded-xl border border-white/10 bg-[#141414] px-4 py-3 shadow-xl sm:-right-6"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.75 }}
      >
        <p className="font-poppins text-[9px] font-bold uppercase tracking-wider text-gray-400">
          SEO score
        </p>
        <p className="font-poppins text-xl font-extrabold text-red-500">
          94<span className="text-sm text-white">/100</span>
        </p>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-[#212121] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <i className="fab fa-youtube text-lg text-red-600" aria-hidden />
            <span className="font-poppins text-[10px] font-bold uppercase tracking-wider text-white">
              YT Factory · Studio
            </span>
          </div>
          <span className="flex items-center gap-1.5 font-poppins text-[9px] font-semibold text-red-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>
            REC
          </span>
        </div>

        <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-red-950/40">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/90 shadow-[0_8px_32px_rgba(220,38,38,0.5)]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <i className="fas fa-play ml-1 text-xl text-white" aria-hidden />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8">
            <div className="mb-2 h-1 overflow-hidden rounded-full bg-white/20">
              <motion.div
                className="h-full rounded-full bg-red-600"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="flex items-center justify-between font-poppins text-[9px] text-white/80">
              <span>2:14 / 8:42</span>
              <span className="flex items-center gap-2">
                <i className="fas fa-closed-captioning" aria-hidden />
                <i className="fas fa-expand" aria-hidden />
              </span>
            </div>
          </div>
          <span className="absolute right-3 top-3 rounded bg-black/70 px-1.5 py-0.5 font-poppins text-[9px] font-bold text-white">
            4K
          </span>
        </div>

        <div className="border-b border-white/10 px-4 py-3">
          <p className="font-poppins text-sm font-semibold text-white">
            How AI Built a $50K/mo Faceless Channel (Full System)
          </p>
          <p className="mt-1 font-poppins text-[10px] text-gray-500">
            142K views · 2 hours ago · #AI #YouTube #Automation
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-3 rounded-full bg-white/5 px-3 py-1.5">
              <i className="far fa-thumbs-up text-xs text-white" aria-hidden />
              <span className="font-poppins text-[10px] font-semibold text-white">12K</span>
              <i className="far fa-thumbs-down text-xs text-gray-500" aria-hidden />
            </div>
            <span className="rounded-full bg-white/5 px-3 py-1.5 font-poppins text-[10px] font-semibold text-white">
              <i className="fas fa-share mr-1.5 text-xs" aria-hidden />
              Share
            </span>
            <motion.button
              type="button"
              className="ml-auto rounded-full bg-red-600 px-4 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-wide text-white"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>

        <div className="p-4">
          <p className="mb-3 font-poppins text-[9px] font-bold uppercase tracking-wider text-gray-500">
            Upload queue
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={queueIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-16 shrink-0 items-center justify-center rounded bg-gradient-to-br from-gray-800 to-gray-900">
                  <i className="fas fa-film text-xs text-red-500/60" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-poppins text-[11px] font-semibold text-white">
                    {UPLOAD_QUEUE[queueIndex].title}
                  </p>
                  <p className="font-poppins text-[9px] text-red-400">
                    {UPLOAD_QUEUE[queueIndex].status}
                  </p>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-red-600"
                      animate={{ width: `${UPLOAD_QUEUE[queueIndex].progress}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
