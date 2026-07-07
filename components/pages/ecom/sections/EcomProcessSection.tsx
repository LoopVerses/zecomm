"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { EASE_OUT } from "@/lib/design-system";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_THEME } from "@/lib/ecom-theme";
import { ECOM_PROCESS_STEPS } from "@/lib/ecom-content";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";
import { OmnichannelSyncHub } from "../shared/OmnichannelSyncHub";

const GLOWS = ["violet", "cyan", "lime", "violet"] as const;

export default function EcomProcessSection() {
  const visualRef = useRef<HTMLDivElement>(null);
  const visualInView = useInView(visualRef, { once: true, margin: "-60px" });

  return (
    <section
      id="process"
      className={`relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24 ${ECOM_THEME.bg}`}
      data-header-surface={ECOM_THEME.surface}
      data-figma-node={ECOM_SECTIONS.process}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <EcomSectionReveal>
          <span className={ECOM_THEME.badge}>Our process</span>
          <h2
            className={`mt-4 text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight ${ECOM_THEME.headline} ${ECOM_THEME.text}`}
          >
            How we work with you
          </h2>
          <p className={`mt-3 text-base ${ECOM_THEME.textMuted}`}>
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
              >
                <EliteCard glow={GLOWS[index % GLOWS.length]} className="rounded-xl">
                  <div className="flex gap-4 p-4">
                    <motion.span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-violet font-poppins text-xs font-bold text-white"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.step}
                    </motion.span>
                    <div>
                      <h3 className={`text-sm font-semibold ${ECOM_THEME.text}`}>{item.title}</h3>
                      <p className={`mt-1 text-xs leading-relaxed ${ECOM_THEME.textSubtle}`}>{item.description}</p>
                    </div>
                  </div>
                </EliteCard>
              </motion.div>
            ))}
          </div>
        </EcomSectionReveal>

        <motion.div
          ref={visualRef}
          className="relative flex w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={visualInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          style={{ perspective: 1200 }}
        >
          <EliteCard glow="cyan" className="w-full max-w-[560px] scale-[0.88] sm:scale-95 lg:scale-100">
            <div className="p-4">
              <OmnichannelSyncHub inView={visualInView} />
            </div>
          </EliteCard>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
