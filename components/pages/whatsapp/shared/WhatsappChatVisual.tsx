"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  { from: "agent", text: "Hi Sarah! 👋 Saw you left the Z-Core hoodie in cart. Need help with checkout?" },
  { from: "user", text: "Shipping to NY was $20 — bit high tbh" },
  { from: "agent", text: "Got it! Activated NY-FREE for you — valid 10 mins. Tap to finish →" },
  { from: "agent", text: "✓ Order recovered · $89.00" },
] as const;

export function WhatsappChatVisual() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= MESSAGES.length) {
          setTyping(false);
          return 1;
        }
        setTyping(true);
        setTimeout(() => setTyping(false), 800);
        return prev + 1;
      });
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px]" data-figma-node="6:837">
      <motion.div
        className="absolute -left-6 top-12 z-20 rounded-2xl border border-green-200 bg-white px-4 py-3 shadow-[0_8px_28px_rgba(34,197,94,0.15)]"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <p className="font-poppins text-[9px] font-bold uppercase tracking-wider text-green-600">
          Open rate
        </p>
        <p className="font-poppins text-xl font-extrabold text-gray-900">
          98.2<span className="text-green-500">%</span>
        </p>
      </motion.div>

      <motion.div
        className="absolute -right-4 bottom-20 z-20 rounded-2xl border border-emerald-200 bg-white px-4 py-3 shadow-[0_8px_28px_rgba(34,197,94,0.12)] sm:-right-8"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.85, duration: 0.5 }}
      >
        <p className="font-poppins text-[9px] font-bold uppercase tracking-wider text-emerald-600">
          Recovered today
        </p>
        <p className="font-poppins text-xl font-extrabold text-gray-900">+$4.2K</p>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-[2.5rem] border-[10px] border-gray-900 bg-gray-900 shadow-[0_24px_64px_rgba(0,0,0,0.18)]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="bg-[#075E54] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500">
              <i className="fab fa-whatsapp text-lg text-white" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-poppins text-xs font-bold text-white">WA-Z Agent · Node 01</p>
              <p className="font-poppins text-[9px] text-green-200">online · recovering carts</p>
            </div>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
          </div>
        </div>

        <div
          className="min-h-[340px] space-y-3 p-4"
          style={{
            backgroundColor: "#ECE5DD",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cdc4' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <AnimatePresence mode="popLayout">
            {MESSAGES.slice(0, visibleCount).map((msg, i) => (
              <motion.div
                key={`${i}-${msg.text.slice(0, 12)}`}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm ${
                    msg.from === "user"
                      ? "rounded-tr-sm bg-[#DCF8C6]"
                      : i === visibleCount - 1 && msg.text.includes("recovered")
                        ? "rounded-tl-sm border border-green-300/50 bg-green-50"
                        : "rounded-tl-sm bg-white"
                  }`}
                >
                  <p className="font-poppins text-[11px] leading-relaxed text-gray-800">{msg.text}</p>
                  <p className="mt-1 text-right font-poppins text-[8px] text-gray-400">
                    {msg.from === "agent" ? "WA-Z · now" : "read"}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {typing && visibleCount < MESSAGES.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-gray-400"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex items-center gap-2 bg-[#F0F0F0] px-3 py-2.5">
          <div className="h-8 flex-1 rounded-full bg-white px-4 font-poppins text-[10px] leading-8 text-gray-400">
            Type a message
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500">
            <i className="fas fa-paper-plane text-xs text-white" aria-hidden />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
