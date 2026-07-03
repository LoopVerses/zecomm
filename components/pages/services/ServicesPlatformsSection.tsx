"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { StoreBrandTile, STORE_BRANDS } from "@/components/pages/ecom/shared/StoreBrandLogos";
import { SERVICE_PLATFORMS } from "@/lib/services-content";

export default function ServicesPlatformsSection() {
  return (
    <section
      id="platforms"
      className="relative w-full bg-white py-14 sm:py-16"
      data-header-surface="light"
    >
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue">
            Platforms we work on
          </span>
          <h2 className="mt-4 font-poppins text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-gray-900">
            Sell and scale on every major marketplace
          </h2>
          <p className="mt-3 font-poppins text-base text-gray-500">
            We help clients launch and manage stores across the platforms that matter most for e-commerce
            growth.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_PLATFORMS.map((platform, index) => (
            <motion.article
              key={platform.brand}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-gray-50/50 p-5 transition-all hover:border-brand-blue/20 hover:bg-white hover:shadow-sm"
            >
              <StoreBrandTile brand={platform.brand} size={40} className="h-14 w-14 p-2.5" />
              <h3 className="mt-4 font-poppins text-base font-semibold text-gray-900">{platform.title}</h3>
              <p className="mt-2 font-poppins text-sm leading-relaxed text-gray-500">{platform.description}</p>
              <p className="mt-3 font-poppins text-xs font-medium text-brand-blue">
                {STORE_BRANDS[platform.brand].label} management
              </p>
            </motion.article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
