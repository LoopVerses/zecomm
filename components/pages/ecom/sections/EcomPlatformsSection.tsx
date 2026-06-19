"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_PLATFORMS } from "@/lib/ecom-content";
import { SectionAmbientBackground } from "../shared/AmbientBackground";
import { StoreBrandTile, STORE_BRANDS } from "../shared/StoreBrandLogos";

export default function EcomPlatformsSection() {
  return (
    <section
      id="platforms"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20"
      data-header-surface="light"
      data-figma-node={ECOM_SECTIONS.platforms}
    >
      <SectionAmbientBackground />

      <SiteContainer className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue">
            Platforms we work on
          </span>
          <h2 className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-gray-900">
            Sell on every major marketplace
          </h2>
          <p className="mt-3 font-poppins text-base leading-relaxed text-gray-500">
            We help clients launch and manage stores across Walmart, TikTok Shop, Etsy, eBay, Shopify,
            and Amazon with full operational support.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ECOM_PLATFORMS.map((platform, index) => (
            <motion.article
              key={platform.brand}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-brand-blue/20 hover:shadow-[0_12px_36px_rgba(28,51,191,0.1)]"
            >
              <StoreBrandTile brand={platform.brand} size={44} className="h-16 w-16 p-3" />
              <h3 className="mt-4 font-poppins text-base font-semibold text-gray-900">
                {platform.title}
              </h3>
              <p className="mt-2 font-poppins text-sm leading-relaxed text-gray-500">
                {platform.description}
              </p>
              <p className="mt-3 font-poppins text-xs font-medium text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
                {STORE_BRANDS[platform.brand].label} management →
              </p>
            </motion.article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
