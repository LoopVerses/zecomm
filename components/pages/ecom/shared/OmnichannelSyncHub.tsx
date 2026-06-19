"use client";

import { motion } from "framer-motion";
import { StoreBrandId, StoreBrandTile, STORE_BRANDS } from "./StoreBrandLogos";

const PLATFORM_IDS: StoreBrandId[] = ["shopify", "amazon", "tiktok", "walmart", "etsy", "ebay"];

const HUB_SIZE = 580;
const CENTER = HUB_SIZE / 2;
const ORBIT_RADIUS = 210;
const COUNT = PLATFORM_IDS.length;

function platformPosition(index: number) {
  const angle = (index * (360 / COUNT) - 90) * (Math.PI / 180);
  return {
    x: CENTER + ORBIT_RADIUS * Math.cos(angle),
    y: CENTER + ORBIT_RADIUS * Math.sin(angle),
  };
}

type OmnichannelSyncHubProps = {
  inView: boolean;
};

export function OmnichannelSyncHub({ inView }: OmnichannelSyncHubProps) {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[580px]"
      style={{ height: HUB_SIZE }}
      data-figma-node="6:513"
    >
      <div
        className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-[inset_0_0_40px_rgba(28,51,191,0.04)]"
        data-figma-node="6:514"
        aria-hidden
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${HUB_SIZE} ${HUB_SIZE}`}
        aria-hidden
      >
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={ORBIT_RADIUS}
          fill="none"
          stroke="rgba(28,51,191,0.12)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          animate={inView ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        />

        {PLATFORM_IDS.map((_, i) => {
          const { x, y } = platformPosition(i);
          return (
            <g key={i}>
              <line x1={CENTER} y1={CENTER} x2={x} y2={y} stroke="rgba(28,51,191,0.1)" strokeWidth="1" />
              <motion.circle
                cx={CENTER}
                cy={CENTER}
                r="4"
                fill="#1c33bf"
                animate={inView ? { cx: [CENTER, x, CENTER], cy: [CENTER, y, CENTER] } : { cx: CENTER, cy: CENTER }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.45,
                }}
              />
            </g>
          );
        })}
      </svg>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          className="relative flex h-[7rem] w-[7rem] flex-col items-center justify-center rounded-full border-2 border-brand-blue/20 bg-white shadow-[0_8px_32px_rgba(28,51,191,0.15)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-brand-blue/30"
            animate={inView ? { scale: [1, 1.18, 1], opacity: [0.55, 0, 0.55] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.i
            className="fas fa-sync-alt text-2xl text-brand-blue"
            animate={inView ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            aria-hidden
          />
          <span className="mt-1.5 font-poppins text-[8px] font-bold uppercase tracking-widest text-brand-blue">
            Sync Hub
          </span>
        </motion.div>
      </div>

      {PLATFORM_IDS.map((brandId, i) => {
        const platform = STORE_BRANDS[brandId];
        const { x, y } = platformPosition(i);
        const leftPct = (x / HUB_SIZE) * 100;
        const topPct = (y / HUB_SIZE) * 100;

        return (
          <div
            key={brandId}
            className="absolute z-20"
            style={{ left: `${leftPct}%`, top: `${topPct}%`, transform: "translate(-50%, -50%)" }}
          >
            <motion.article
              className="ecom-store-bounce group relative flex w-[152px] cursor-default flex-col items-center gap-3 overflow-visible rounded-2xl border border-white/80 bg-white/95 px-3 py-5 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-brand-blue/20 hover:shadow-[0_16px_40px_rgba(28,51,191,0.12)]"
              style={{ animationDelay: `${i * 0.35}s` }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              data-figma-node={`6:${517 + i * 3}`}
            >
              <div
                className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center sm:h-[5.25rem] sm:w-[5.25rem]"
              >
                <StoreBrandTile brand={brandId} size={48} className="h-[4.75rem] w-[4.75rem] p-3 sm:h-[5.25rem] sm:w-[5.25rem] sm:p-3.5" />
              </div>
              <span className="text-center font-poppins text-[8px] font-bold uppercase tracking-wide text-gray-800">
                {platform.label}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-poppins text-[7px] font-semibold text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Synced
              </span>
            </motion.article>
          </div>
        );
      })}
    </div>
  );
}
