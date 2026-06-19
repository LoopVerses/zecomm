"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_PAGE_BG } from "@/lib/ecom-theme";
import { ECOM_PROCESS_STEPS } from "@/lib/ecom-content";
import { HeroAmbientBackground } from "../shared/AmbientBackground";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";
import { OmnichannelSyncHub } from "../shared/OmnichannelSyncHub";

export default function EcomProcessSection() {
  const visualRef = useRef<HTMLDivElement>(null);
  const visualInView = useInView(visualRef, { once: true, margin: "-60px" });

  return (
    <section
      id="process"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: ECOM_PAGE_BG }}
      data-header-surface="light"
      data-figma-node={ECOM_SECTIONS.process}
    >
      <HeroAmbientBackground />

      <SiteContainer className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <EcomSectionReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-white px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue shadow-sm">
            Our process
          </span>
          <h2 className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-gray-900">
            How we work with you
          </h2>
          <p className="mt-3 font-poppins text-base text-gray-600">
            A structured path from consultation to full store management and scaling.
          </p>

          <div className="mt-8 space-y-4">
            {ECOM_PROCESS_STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex gap-4 rounded-xl border border-gray-200/80 bg-white/90 p-4 backdrop-blur-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-poppins text-xs font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-poppins text-sm font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 font-poppins text-xs leading-relaxed text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </EcomSectionReveal>

        <motion.div
          ref={visualRef}
          className="relative flex w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={visualInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full max-w-[560px] scale-[0.88] sm:scale-95 lg:scale-100">
            <OmnichannelSyncHub inView={visualInView} />
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
