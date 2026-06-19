"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountUp } from "@/components/shared/CountUp";

const THREAD = [
  { role: "visitor", text: "Pro vs Elite — what's the real difference?" },
  { role: "agent", text: "Elite unlocks API + Search Intel. Agencies on Elite save ~$2,400/mo." },
  { role: "visitor", text: "Competitor X is cheaper though..." },
  { role: "agent", text: "Fair point. X has no 24/7 intel layer — here's a matched case study ↗" },
] as const;

const OBJECTIONS = [
  { label: "Price", status: "cleared" as const },
  { label: "Trust", status: "active" as const },
  { label: "Timing", status: "idle" as const },
];

const STATUS_COLOR = {
  cleared: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  active: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  idle: "border-white/10 bg-white/[0.03] text-gray-500",
} as const;

function IntentRing({ value }: { value: number }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return (
    <div className="relative mx-auto h-[108px] w-[108px]">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden>
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="url(#intentGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <defs>
          <linearGradient id="intentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1C33BF" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-poppins text-2xl font-extrabold text-white">{value}</span>
        <span className="font-poppins text-[8px] font-bold uppercase tracking-wider text-brand-blue">Intent</span>
      </div>
    </div>
  );
}

export function SalesCommandDeck() {
  const [msgIndex, setMsgIndex] = useState(1);
  const [intent, setIntent] = useState(72);
  const [dealValue, setDealValue] = useState(2400);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => {
        const next = prev >= THREAD.length ? 1 : prev + 1;
        if (next > prev) {
          setTyping(true);
          setTimeout(() => setTyping(false), 600);
          setIntent((v) => Math.min(96, v + 6));
          setDealValue((v) => v + (next === THREAD.length ? 2400 : 0));
        } else {
          setIntent(72);
          setDealValue(2400);
        }
        return next;
      });
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[920px]">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[220px_1fr_200px]">
        {/* Visitor Intel */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-[#0c1228]/90 p-4 backdrop-blur-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-poppins text-[8px] font-bold uppercase tracking-[0.2em] text-brand-blue">
            Visitor Intel
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 font-poppins text-[10px] font-bold text-white">
              JD
            </div>
            <div>
              <p className="font-poppins text-[11px] font-bold text-white">Node_742</p>
              <p className="font-poppins text-[9px] text-gray-500">Pricing · 4m 18s</p>
            </div>
          </div>
          <div className="mt-4">
            <IntentRing value={intent} />
          </div>
          <div className="mt-3 space-y-1.5">
            {[
              { label: "Scroll depth", val: "89%" },
              { label: "Pages viewed", val: "6" },
              { label: "Heat level", val: "High" },
            ].map((row) => (
              <div key={row.label} className="flex justify-between font-poppins text-[9px]">
                <span className="text-gray-500">{row.label}</span>
                <span className="font-semibold text-white">{row.val}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Live Thread */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-brand-blue/20 bg-[#080e20]/95 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-poppins text-[9px] font-bold uppercase tracking-wider text-white">
                Live Close Thread
              </span>
            </div>
            <span className="rounded-md border border-brand-blue/30 bg-brand-blue/10 px-2 py-0.5 font-poppins text-[8px] font-bold text-brand-blue">
              Unit 07
            </span>
          </div>

          <div className="space-y-2.5 p-4">
            <AnimatePresence mode="popLayout">
              {THREAD.slice(0, msgIndex).map((msg, i) => (
                <motion.div
                  key={`${i}-${msg.text.slice(0, 12)}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "visitor" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-xl px-3 py-2 font-poppins text-[11px] leading-relaxed ${
                      msg.role === "visitor"
                        ? "rounded-tr-sm bg-white/[0.08] text-gray-300"
                        : "rounded-tl-sm border border-brand-blue/25 bg-brand-blue/15 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {typing && msgIndex < THREAD.length && (
              <div className="flex gap-1 rounded-xl rounded-tl-sm border border-brand-blue/20 bg-brand-blue/10 px-3 py-2 w-fit">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-brand-blue"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-white/10 px-4 py-2">
            <div className="flex gap-2">
              {OBJECTIONS.map((obj) => (
                <span
                  key={obj.label}
                  className={`rounded-full border px-2 py-0.5 font-poppins text-[8px] font-bold uppercase ${STATUS_COLOR[obj.status]}`}
                >
                  {obj.label}
                  {obj.status === "cleared" && " ✓"}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Deal Panel */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
            <p className="font-poppins text-[8px] font-bold uppercase tracking-wider text-emerald-400">
              Deal value
            </p>
            <p className="mt-1 font-poppins text-2xl font-extrabold text-white">
              $<CountUp value={dealValue} />
              <span className="text-sm text-gray-500">/mo</span>
            </p>
            <p className="mt-1 font-poppins text-[9px] text-gray-500">Elite plan · annual</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0c1228]/90 p-4">
            <p className="font-poppins text-[8px] font-bold uppercase tracking-wider text-gray-500">
              Response
            </p>
            <p className="font-poppins text-3xl font-extrabold text-white">
              0.2<span className="text-brand-blue">s</span>
            </p>
          </div>

          <div className="rounded-2xl border border-brand-blue/25 bg-brand-blue/10 p-4">
            <p className="font-poppins text-[8px] font-bold uppercase tracking-wider text-brand-blue">
              Closed today
            </p>
            <CountUp value={1420} className="font-poppins text-xl font-extrabold text-white" />
          </div>
        </motion.div>
      </div>

      {/* Bottom pipeline mini-bar */}
      <motion.div
        className="mt-3 flex items-center gap-1 overflow-hidden rounded-xl border border-white/10 bg-[#080e20]/80 px-3 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {["Land", "Intent", "Objection", "Close"].map((stage, i) => (
          <div key={stage} className="flex flex-1 items-center gap-1">
            <div
              className={`h-1.5 flex-1 rounded-full ${
                i <= Math.min(3, Math.floor(intent / 25))
                  ? "bg-gradient-to-r from-brand-blue to-blue-400"
                  : "bg-white/10"
              }`}
            />
            <span className="shrink-0 font-poppins text-[7px] font-bold uppercase text-gray-500">{stage}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
