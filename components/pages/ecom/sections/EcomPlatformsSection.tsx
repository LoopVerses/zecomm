"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_THEME } from "@/lib/ecom-theme";
import { ECOM_PLATFORMS } from "@/lib/ecom-content";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";
import { StoreBrandTile, STORE_BRANDS } from "../shared/StoreBrandLogos";

const GLOWS = ["cyan", "red", "lime", "violet", "cyan", "violet"] as const;

export default function EcomPlatformsSection() {
  return (
    <section
      id="platforms"
      className={`relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24 ${ECOM_THEME.bgAlt}`}
      data-header-surface={ECOM_THEME.surface}
      data-figma-node={ECOM_SECTIONS.platforms}
    >
      <SectionAmbience variant="cyan" />

      <SiteContainer className="relative z-10">
        <EcomSectionReveal className="mx-auto max-w-2xl text-center">
          <span className={ECOM_THEME.badge}>Platforms we work on</span>
          <h2
            className={`mt-4 text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight ${ECOM_THEME.headline} ${ECOM_THEME.text}`}
          >
            Sell on every major marketplace
          </h2>
          <p className={`mt-3 text-base leading-relaxed ${ECOM_THEME.textSubtle}`}>
            We help clients launch and manage stores across Walmart, TikTok Shop, Etsy, eBay, Shopify,
            and Amazon with full operational support.
          </p>
        </EcomSectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ECOM_PLATFORMS.map((platform, index) => (
            <motion.div
              key={platform.brand}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <EliteCard glow={GLOWS[index % GLOWS.length]} className="h-full">
                <div className="group p-6">
                  <motion.div whileHover={{ scale: 1.05, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                    <StoreBrandTile brand={platform.brand} size={44} className="h-16 w-16 p-3" />
                  </motion.div>
                  <h3 className={`mt-4 text-base font-semibold ${ECOM_THEME.text}`}>{platform.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${ECOM_THEME.textSubtle}`}>{platform.description}</p>
                  <p className={`mt-3 text-xs font-medium ${ECOM_THEME.accent} opacity-0 transition-opacity group-hover:opacity-100`}>
                    {STORE_BRANDS[platform.brand].label} management →
                  </p>
                </div>
              </EliteCard>
            </motion.div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
