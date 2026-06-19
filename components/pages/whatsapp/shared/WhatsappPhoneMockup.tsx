"use client";

import { motion } from "framer-motion";

const CHAT_WALLPAPER = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cdc4' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

const MESSAGES = [
  { type: "date", text: "Today" },
  {
    type: "in",
    text: "Hi David! 👋 You left the Z-Core Hoodie in your cart. Can I help you finish checkout?",
    time: "2:14 PM",
    delay: 0.15,
  },
  {
    type: "product",
    title: "Z-Core Performance Hoodie",
    price: "$89.00",
    note: "Size M · Black",
    delay: 0.3,
  },
  { type: "out", text: "Shipping to NY was $20. A bit high.", time: "2:15 PM", read: true, delay: 0.45 },
  {
    type: "in",
    text: "Totally fair — I applied NY-FREE for you. Valid 10 minutes ⏱️",
    time: "2:15 PM",
    delay: 0.6,
  },
  { type: "quick", options: ["Apply discount", "Change size", "Talk to human"], delay: 0.75 },
  { type: "out", text: "Apply discount ✅", time: "2:16 PM", read: true, delay: 0.9 },
  {
    type: "in",
    text: "Done! Your checkout link is ready — tap below to complete.",
    time: "2:16 PM",
    delay: 1.05,
  },
  { type: "cta", label: "Complete order · $69.00", delay: 1.2 },
] as const;

const FLOATING_FEATURES = [
  { icon: "fas fa-bullhorn", label: "Broadcast", pos: "left-0 top-8" },
  { icon: "fas fa-store", label: "Catalog", pos: "-right-2 top-1/3 sm:-right-10" },
  { icon: "fas fa-reply", label: "Quick Reply", pos: "left-2 bottom-1/3 sm:-left-8" },
  { icon: "fas fa-check-double", label: "Read receipts", pos: "-right-1 bottom-24 sm:-right-12" },
] as const;

type WhatsappPhoneMockupProps = {
  inView: boolean;
  size?: "hero" | "recovery";
  figmaNode?: string;
};

export function WhatsappPhoneMockup({
  inView,
  size = "recovery",
  figmaNode = "6:837",
}: WhatsappPhoneMockupProps) {
  const isLarge = size === "recovery";
  const shellClass = isLarge
    ? "rounded-[3rem] border-[14px]"
    : "rounded-[2.5rem] border-[10px]";
  const chatMinH = isLarge ? "min-h-[480px]" : "min-h-[360px]";

  return (
    <div
      className={`relative mx-auto w-full ${isLarge ? "max-w-[min(100%,520px)]" : "max-w-[360px] sm:max-w-[380px]"}`}
      data-figma-node={figmaNode}
    >
      {isLarge &&
        FLOATING_FEATURES.map((feat, i) => (
          <motion.div
            key={feat.label}
            className={`absolute z-20 ${feat.pos} flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-2 shadow-[0_6px_20px_rgba(34,197,94,0.12)]`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1, y: [0, -4, 0] } : { opacity: 0, scale: 0.9 }}
            transition={{
              opacity: { delay: 0.5 + i * 0.1, duration: 0.4 },
              scale: { delay: 0.5 + i * 0.1, duration: 0.4 },
              y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
            }}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10">
              <i className={`${feat.icon} text-[10px] text-green-600`} aria-hidden />
            </span>
            <span className="font-poppins text-[9px] font-bold uppercase tracking-wide text-gray-700">
              {feat.label}
            </span>
          </motion.div>
        ))}

      <motion.div
        className={`overflow-hidden ${shellClass} border-gray-900 bg-gray-900 shadow-[0_32px_80px_rgba(0,0,0,0.18)]`}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between bg-gray-900 px-6 pb-1 pt-2">
          <span className="font-poppins text-[10px] font-semibold text-white">9:41</span>
          <div className="mx-auto h-5 w-24 rounded-full bg-black" aria-hidden />
          <div className="flex items-center gap-1 text-white">
            <i className="fas fa-signal text-[8px]" aria-hidden />
            <i className="fas fa-wifi text-[8px]" aria-hidden />
            <i className="fas fa-battery-full text-[8px]" aria-hidden />
          </div>
        </div>

        <div className="bg-[#075E54] px-4 py-3" data-figma-node="6:838">
          <div className="flex items-center gap-3">
            <i className="fas fa-arrow-left text-sm text-white/90" aria-hidden />
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500"
              data-figma-node="6:839"
            >
              <i className="fab fa-whatsapp text-lg text-white" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p
                className="truncate font-poppins text-sm font-bold text-white"
                data-figma-node="6:840"
              >
                WA-Z Node 01 · GearHouse
              </p>
              <p className="font-poppins text-[10px] text-green-200">online · Business API</p>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <i className="fas fa-video text-sm" aria-hidden />
              <i className="fas fa-phone-alt text-sm" aria-hidden />
              <i className="fas fa-ellipsis-v text-sm" aria-hidden />
            </div>
          </div>
        </div>

        <div
          className={`${chatMinH} space-y-3 overflow-y-auto p-4 ${isLarge ? "max-h-[520px]" : ""}`}
          style={{ backgroundColor: "#ECE5DD", backgroundImage: CHAT_WALLPAPER }}
        >
          {MESSAGES.map((msg, i) => {
            if (msg.type === "date") {
              return (
                <motion.div
                  key={i}
                  className="flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="rounded-lg bg-white/80 px-3 py-1 font-poppins text-[10px] font-medium text-gray-500 shadow-sm">
                    {msg.text}
                  </span>
                </motion.div>
              );
            }

            if (msg.type === "product") {
              return (
                <motion.div
                  key={i}
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ delay: msg.delay }}
                  data-figma-node="6:842"
                >
                  <div className="max-w-[88%] overflow-hidden rounded-2xl rounded-tl-sm bg-white shadow-sm">
                    <div className="flex h-28 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <i className="fas fa-tshirt text-3xl text-gray-400" aria-hidden />
                    </div>
                    <div className="p-3">
                      <p className="font-poppins text-xs font-bold text-gray-900">{msg.title}</p>
                      <p className="font-poppins text-[10px] text-gray-500">{msg.note}</p>
                      <p className="mt-1 font-poppins text-sm font-bold text-green-600">{msg.price}</p>
                      <button
                        type="button"
                        className="mt-2 w-full rounded-lg bg-green-500 py-2 font-poppins text-[10px] font-bold uppercase tracking-wide text-white"
                      >
                        View in catalog
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            }

            if (msg.type === "quick") {
              return (
                <motion.div
                  key={i}
                  className="flex flex-wrap justify-end gap-2"
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ delay: msg.delay }}
                >
                  {msg.options.map((opt) => (
                    <span
                      key={opt}
                      className="rounded-full border border-green-400 bg-white px-3 py-1.5 font-poppins text-[10px] font-semibold text-green-600"
                    >
                      {opt}
                    </span>
                  ))}
                </motion.div>
              );
            }

            if (msg.type === "cta") {
              return (
                <motion.div
                  key={i}
                  className="flex justify-center pt-1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ delay: msg.delay }}
                >
                  <span className="rounded-full bg-green-500 px-5 py-2.5 font-poppins text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(34,197,94,0.4)]">
                    ✓ {msg.label}
                  </span>
                </motion.div>
              );
            }

            const isOut = msg.type === "out";
            return (
              <motion.div
                key={i}
                className={`flex ${isOut ? "justify-end" : "justify-start"}`}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ delay: msg.delay }}
                data-figma-node={isOut ? "6:844" : "6:846"}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 shadow-sm ${
                    isOut ? "rounded-tr-sm bg-[#DCF8C6]" : "rounded-tl-sm bg-white"
                  }`}
                >
                  <p
                    className="font-poppins text-[12px] leading-relaxed text-gray-800"
                    data-figma-node={isOut ? "6:845" : "6:847"}
                  >
                    {msg.text}
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-1">
                    <span className="font-poppins text-[9px] text-gray-400">{msg.time}</span>
                    {isOut && msg.read && (
                      <i className="fas fa-check-double text-[9px] text-sky-500" aria-hidden />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 bg-[#F0F0F0] px-3 py-3">
          <i className="fas fa-plus text-gray-500" aria-hidden />
          <div className="flex h-9 flex-1 items-center rounded-full bg-white px-4">
            <i className="far fa-smile mr-2 text-gray-400" aria-hidden />
            <span className="font-poppins text-[11px] text-gray-400">Message</span>
          </div>
          <i className="fas fa-camera text-gray-500" aria-hidden />
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500">
            <i className="fas fa-microphone text-xs text-white" aria-hidden />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
