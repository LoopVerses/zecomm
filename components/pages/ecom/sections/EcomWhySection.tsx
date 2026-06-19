"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_PAGE_BG } from "@/lib/ecom-theme";
import { ECOM_WHY_CHOOSE } from "@/lib/ecom-content";
import { HeroAmbientBackground } from "../shared/AmbientBackground";

export default function EcomWhySection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-16 sm:py-20"
      style={{ backgroundColor: ECOM_PAGE_BG }}
      data-header-surface="light"
      data-figma-node={ECOM_SECTIONS.why}
    >
      <HeroAmbientBackground />

      <SiteContainer className="relative">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-white px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue shadow-sm">
              About Zeecom
            </span>
            <h2 className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-gray-900">
              Zero Effort E-Commerce
            </h2>
            <p className="mt-4 font-poppins text-base leading-relaxed text-gray-600">
              Zeecom stands for <strong className="font-semibold text-gray-900">Zero Effort E-Commerce</strong>.
              We are an e-commerce automation and management company built to help entrepreneurs,
              investors, and business owners enter the online marketplace space without managing
              day-to-day operations themselves.
            </p>
            <p className="mt-4 font-poppins text-base leading-relaxed text-gray-600">
              Our team handles store creation, product hunting, listings, order processing, supplier
              coordination, shipping management, buy box optimization, payout handling, and complete
              account management across multiple platforms.
            </p>
            <p className="mt-4 font-poppins text-base leading-relaxed text-gray-500">
              Whether you want dropshipping, digital products, wholesale, white label, private label,
              or marketplace store management, Zeecom provides a structured system to build and operate
              your e-commerce business professionally.
            </p>
          </div>

          <div>
            <h3 className="font-poppins text-lg font-bold text-gray-900">Why choose Zeecom?</h3>
            <ul className="mt-6 space-y-3">
              {ECOM_WHY_CHOOSE.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="flex items-start gap-3 rounded-xl border border-gray-200/80 bg-white/90 p-4 backdrop-blur-sm"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <i className="fas fa-check text-[10px]" aria-hidden />
                  </span>
                  <span className="font-poppins text-sm text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
