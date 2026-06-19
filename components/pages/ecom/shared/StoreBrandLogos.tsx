"use client";

import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: number;
};

export type StoreBrandId = "amazon" | "shopify" | "etsy" | "ebay" | "walmart" | "tiktok";

export const STORE_ICON_PATHS: Record<StoreBrandId, string> = {
  amazon: "/icons/amazon.webp",
  shopify: "/icons/shopify.webp",
  etsy: "/icons/etsy.webp",
  ebay: "/icons/ebay.webp",
  walmart: "/icons/walmart.webp",
  tiktok: "/icons/tik tok.webp",
};

export const STORE_BRANDS: Record<StoreBrandId, { label: string; accent: string }> = {
  amazon: { label: "Amazon", accent: "#FF9900" },
  shopify: { label: "Shopify", accent: "#95BF47" },
  etsy: { label: "Etsy", accent: "#F56400" },
  ebay: { label: "eBay", accent: "#E53238" },
  walmart: { label: "Walmart", accent: "#0071CE" },
  tiktok: { label: "TikTok Shop", accent: "#FE2C55" },
};

export function StoreBrandLogo({
  brand,
  size = 32,
  className = "",
}: LogoProps & { brand: StoreBrandId }) {
  const { label } = STORE_BRANDS[brand];

  return (
    <Image
      src={STORE_ICON_PATHS[brand]}
      alt={`${label} logo`}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      draggable={false}
    />
  );
}

export function StoreBrandTile({
  brand,
  size = 48,
  className = "",
  showGlow = true,
}: LogoProps & { brand: StoreBrandId; showGlow?: boolean }) {
  const { accent } = STORE_BRANDS[brand];

  return (
    <div
      className={`ecom-store-3d ecom-brand-tile group relative flex items-center justify-center overflow-hidden rounded-2xl bg-white ${className}`}
      style={
        showGlow
          ? {
              boxShadow: `0 1px 2px rgba(15,23,42,0.05), 0 10px 28px rgba(15,23,42,0.08), 0 0 0 1px rgba(255,255,255,1), 0 0 40px -8px ${accent}30`,
            }
          : undefined
      }
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-60"
        style={{ backgroundColor: `${accent}35` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" aria-hidden />
      <StoreBrandLogo brand={brand} size={size} className="relative z-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

export function StoreBrandChip({
  brand,
  className = "",
}: {
  brand: StoreBrandId;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-white/95 px-3 py-1.5 font-poppins text-[11px] font-medium text-gray-700 shadow-[0_2px_12px_rgba(15,23,42,0.06)] backdrop-blur-sm ${className}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-100">
        <StoreBrandLogo brand={brand} size={22} />
      </span>
      {STORE_BRANDS[brand].label}
    </span>
  );
}
