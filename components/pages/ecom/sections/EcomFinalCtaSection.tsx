"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { HeroAmbientBackground } from "../shared/AmbientBackground";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";

export default function EcomFinalCtaSection() {
  return (
    <section
      id="consultation"
      className="relative w-full overflow-hidden py-16 sm:py-20"
      style={{ backgroundColor: "#FAFBFC" }}
      data-header-surface="light"
      data-figma-node={ECOM_SECTIONS.finalCta}
    >
      <HeroAmbientBackground />

      <SiteContainer className="relative">
        <EcomSectionReveal>
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-brand-blue/15 bg-white p-8 sm:p-12 lg:p-14"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 20%, rgba(28,51,191,0.08) 0%, transparent 50%)",
              }}
              aria-hidden
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue">
                Get started
              </span>
              <h2
                className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-gray-900"
                data-figma-node="6:580"
              >
                Start your e-commerce business with zero effort
              </h2>
              <p
                className="mt-4 font-poppins text-base leading-relaxed text-gray-600 sm:text-lg"
                data-figma-node="6:581"
              >
                Whether you want to launch on Walmart, TikTok Shop, Etsy, eBay, Shopify, or Amazon,
                Zeecom can help you set up, manage, and operate your store from A to Z. Let our team
                handle the operations while you focus on the bigger picture.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="#consultation"
                  className="inline-flex h-12 w-full min-w-[220px] items-center justify-center rounded-xl bg-brand-blue px-8 font-poppins text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90 sm:w-auto"
                  data-figma-node="6:582"
                >
                  Book Your Free Consultation
                </Link>
                <Link
                  href="#services"
                  className="inline-flex h-12 w-full min-w-[220px] items-center justify-center rounded-xl border border-gray-200 bg-white px-8 font-poppins text-sm font-semibold text-gray-700 transition-colors hover:border-brand-blue/30 hover:text-brand-blue sm:w-auto"
                  data-figma-node="6:584"
                >
                  Start Your Store Today
                </Link>
              </div>
            </div>
          </motion.div>
        </EcomSectionReveal>
      </SiteContainer>
    </section>
  );
}
