"use client";

import { motion } from "framer-motion";
import { StoreBrandId, StoreBrandLogo, STORE_BRANDS } from "./StoreBrandLogos";

type FloatingIconProps = {
  brand: StoreBrandId;
  className?: string;
  delay?: number;
};

export function FloatingStoreIcon({ brand, className = "", delay = 0 }: FloatingIconProps) {
  const { label } = STORE_BRANDS[brand];

  return (
    <motion.div
      className={`absolute z-30 ${className}`}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 + delay, type: "spring", stiffness: 180, damping: 14 }}
    >
      <div className="ecom-store-bounce flex flex-col items-center gap-2" style={{ animationDelay: `${delay}s` }}>
        <div className="ecom-hero-float-icon">
          <StoreBrandLogo
            brand={brand}
            size={128}
            className="h-[5.5rem] w-[5.5rem] sm:h-[7rem] sm:w-[7rem] drop-shadow-[0_12px_28px_rgba(15,23,42,0.18)]"
          />
        </div>
        <span className="whitespace-nowrap font-poppins text-[10px] font-semibold text-gray-600 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] sm:text-[11px]">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export function HeroStoreOrbit() {
  const positions: { brand: StoreBrandId; className: string; delay: number }[] = [
    { brand: "amazon", className: "left-1/2 top-0 -translate-x-1/2 -translate-y-[55%]", delay: 0 },
    { brand: "shopify", className: "left-0 top-[50%] -translate-x-[35%] -translate-y-1/2", delay: 0.18 },
    { brand: "tiktok", className: "right-0 top-[50%] translate-x-[35%] -translate-y-1/2", delay: 0.36 },
    { brand: "walmart", className: "bottom-0 left-1/2 -translate-x-1/2 translate-y-[42%]", delay: 0.54 },
    { brand: "etsy", className: "left-[0%] top-[22%] sm:left-[2%] sm:top-[24%]", delay: 0.72 },
    { brand: "ebay", className: "right-[0%] top-[22%] sm:right-[2%] sm:top-[24%]", delay: 0.9 },
  ];

  return (
    <>
      {positions.map(({ brand, className, delay }) => (
        <FloatingStoreIcon key={brand} brand={brand} className={className} delay={delay} />
      ))}
    </>
  );
}
