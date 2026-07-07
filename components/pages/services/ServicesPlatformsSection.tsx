"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { StoreBrandTile, STORE_BRANDS } from "@/components/pages/ecom/shared/StoreBrandLogos";
import { SERVICE_PLATFORMS } from "@/lib/services-content";

const GLOWS = ["violet", "cyan", "lime", "red", "violet", "cyan"] as const;

export default function ServicesPlatformsSection() {
  return (
    <section
      id="platforms"
      className="relative w-full overflow-x-clip bg-surface-raised py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
    >
      <SectionAmbience variant="cyan" />

      <SiteContainer className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-3 py-1 font-poppins text-[11px] font-semibold text-accent-cyan">
            Platforms we work on
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink-primary">
            Sell and scale on every major marketplace
          </h2>
          <p className="mt-3 font-poppins text-base text-ink-secondary">
            We help clients launch and manage stores across the platforms that matter most for e-commerce
            growth.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_PLATFORMS.map((platform, index) => (
            <motion.div
              key={platform.brand}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <EliteCard glow={GLOWS[index % GLOWS.length]} className="h-full">
                <Link href="/ecom#platforms" className="group block p-5">
                  <motion.div whileHover={{ scale: 1.05, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                    <StoreBrandTile brand={platform.brand} size={40} className="h-14 w-14 p-2.5" />
                  </motion.div>
                  <h3 className="mt-4 font-poppins text-base font-semibold text-ink-primary">{platform.title}</h3>
                  <p className="mt-2 font-poppins text-sm leading-relaxed text-ink-muted">{platform.description}</p>
                  <p className="mt-3 font-poppins text-xs font-medium text-accent-violet opacity-0 transition-opacity group-hover:opacity-100">
                    {STORE_BRANDS[platform.brand].label} management →
                  </p>
                </Link>
              </EliteCard>
            </motion.div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
