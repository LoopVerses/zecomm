"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountUp } from "@/components/shared/CountUp";
import { HeroStoreOrbit } from "./FloatingStoreIcons";
import { StoreBrandId, StoreBrandLogo, STORE_BRANDS } from "./StoreBrandLogos";

const PRODUCTS = [
  { name: "Pro Runner X1", price: "$129", stock: 842, color: "from-sky-100 to-blue-50" },
  { name: "Urban Pack Lite", price: "$89", stock: 1204, color: "from-violet-100 to-indigo-50" },
  { name: "Flex Hoodie Pro", price: "$74", stock: 567, color: "from-amber-100 to-orange-50" },
] as const;

const ORDER_TOASTS = [
  { channel: "shopify" as StoreBrandId, amount: "+$129.00", item: "Pro Runner X1" },
  { channel: "amazon" as StoreBrandId, amount: "+$248.00", item: "2× Urban Pack" },
  { channel: "tiktok" as StoreBrandId, amount: "+$74.00", item: "Flex Hoodie Pro" },
  { channel: "walmart" as StoreBrandId, amount: "+$189.00", item: "Bundle Kit" },
  { channel: "etsy" as StoreBrandId, amount: "+$56.00", item: "Handmade case" },
  { channel: "ebay" as StoreBrandId, amount: "+$112.00", item: "Vintage bundle" },
] as const;

const CHANNEL_IDS: StoreBrandId[] = ["shopify", "amazon", "tiktok", "walmart", "etsy", "ebay"];

export function EcomStorefrontVisual() {
  const [toastIndex, setToastIndex] = useState(0);
  const [revenue, setRevenue] = useState(10000);

  useEffect(() => {
    const interval = setInterval(() => {
      setToastIndex((prev) => (prev + 1) % ORDER_TOASTS.length);
      setRevenue((prev) => prev + Math.floor(Math.random() * 180) + 40);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const toast = ORDER_TOASTS[toastIndex];

  return (
    <div className="relative mx-auto w-full max-w-[540px] px-2 py-16 sm:px-6 sm:py-20" data-figma-node="6:104">
      <HeroStoreOrbit />

      <motion.div
        className="absolute -right-2 top-[3rem] z-20 rounded-xl border border-emerald-200 bg-white px-4 py-3 shadow-[0_8px_30px_rgba(34,197,94,0.15)] sm:-right-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p className="font-poppins text-[9px] font-semibold uppercase tracking-wider text-emerald-600">
          Cart recovered
        </p>
        <p className="font-poppins text-lg font-bold text-gray-900">+$12,400</p>
        <p className="font-poppins text-[9px] text-gray-500">today across 6 channels</p>
      </motion.div>

      <motion.div
        className="relative z-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(28,51,191,0.1)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-poppins text-xs font-bold text-gray-900">Live Storefront</span>
            </div>
            <span className="rounded-full bg-brand-blue/10 px-2.5 py-0.5 font-poppins text-[9px] font-bold uppercase tracking-wider text-brand-blue">
              6 channels
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <CountUp
              value={revenue}
              from={10000}
              prefix="$"
              className="font-montserrat text-3xl font-black tabular-nums text-gray-900"
            />
            <span className="font-poppins text-[10px] font-semibold text-emerald-600">↑ 18.4% today</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-gray-100 px-5 py-3">
          {CHANNEL_IDS.map((id, i) => (
            <motion.span
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.06 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200/90 bg-white px-2.5 py-1 font-poppins text-[8px] font-semibold text-gray-700 shadow-[0_2px_8px_rgba(15,23,42,0.06)]"
            >
              <StoreBrandLogo brand={id} size={20} />
              {STORE_BRANDS[id].label}
            </motion.span>
          ))}
        </div>

        <div className="space-y-2 p-4">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-3 transition-colors hover:border-brand-blue/20 hover:bg-white"
            >
              <div className={`h-12 w-12 shrink-0 rounded-lg bg-gradient-to-br ${product.color} shadow-inner`} />
              <div className="min-w-0 flex-1">
                <p className="truncate font-poppins text-xs font-semibold text-gray-900">{product.name}</p>
                <p className="font-poppins text-[10px] text-gray-500">{product.stock} in stock · synced</p>
              </div>
              <p className="font-poppins text-sm font-bold text-brand-blue">{product.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative h-14 overflow-hidden border-t border-gray-100 bg-gray-50/50 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={toastIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="flex h-full items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(15,23,42,0.08)] ring-1 ring-gray-100">
                  <StoreBrandLogo brand={toast.channel} size={22} />
                </div>
                <div>
                  <p className="font-poppins text-[10px] font-semibold text-gray-900">
                    New order · {STORE_BRANDS[toast.channel].label}
                  </p>
                  <p className="font-poppins text-[9px] text-gray-500">{toast.item}</p>
                </div>
              </div>
              <span className="font-poppins text-xs font-bold text-emerald-600">{toast.amount}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-3 gap-px border-t border-gray-100 bg-gray-100">
          {[
            { label: "Orders", value: "847", color: "text-gray-900" },
            { label: "Sync", value: "0.2s", color: "text-brand-blue" },
            { label: "Uptime", value: "99.9%", color: "text-emerald-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white px-3 py-3 text-center">
              <span className="block font-poppins text-[8px] font-medium uppercase tracking-wider text-gray-400">
                {stat.label}
              </span>
              <span className={`mt-0.5 block font-poppins text-sm font-bold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
