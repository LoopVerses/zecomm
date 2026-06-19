"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { HeroAmbientBackground } from "../shared/AmbientBackground";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";

const AUDIT_POINTS = [
  "Best platform mix for your products",
  "Inventory & order sync roadmap",
  "Growth and automation plan",
] as const;

export default function EcomFinalCtaSection() {
  return (
    <section
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

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue">
                  Free consultation
                </span>
                <h2
                  className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-gray-900"
                  data-figma-node="6:580"
                >
                  Get a free e-commerce platform audit
                </h2>
                <p
                  className="mt-4 font-poppins text-base leading-relaxed text-gray-600"
                  data-figma-node="6:581"
                >
                  Not sure where to start? We&apos;ll review your setup and show you the best path
                  to automate inventory, orders, and fulfillment across your stores.
                </p>

                <ul className="mt-6 space-y-3">
                  {AUDIT_POINTS.map((point) => (
                    <li key={point} className="flex items-center gap-3 font-poppins text-sm text-gray-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <i className="fas fa-check text-[10px]" aria-hidden />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/ecom"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-blue px-8 font-poppins text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90"
                  data-figma-node="6:582"
                >
                  Book free audit
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-8 font-poppins text-sm font-semibold text-gray-700 transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
                  data-figma-node="6:584"
                >
                  Explore all Zeecomm tools
                </Link>

                <div className="mt-2 grid grid-cols-3 gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 p-4">
                  {[
                    { value: "0.2s", label: "Sync" },
                    { value: "99.9%", label: "Uptime" },
                    { value: "6", label: "Platforms" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-poppins text-lg font-bold text-gray-900">{stat.value}</p>
                      <p className="font-poppins text-[10px] text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </EcomSectionReveal>
      </SiteContainer>
    </section>
  );
}
