"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_THEME } from "@/lib/ecom-theme";
import { ECOM_SERVICES } from "@/lib/ecom-content";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "red", "violet", "cyan"] as const;

export default function EcomServicesSection() {
  return (
    <section
      id="services"
      className={`relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24 ${ECOM_THEME.bg}`}
      data-header-surface={ECOM_THEME.surface}
      data-figma-node={ECOM_SECTIONS.services}
    >
      <SectionAmbience variant="violet" />

      <SiteContainer className="relative z-10">
        <EcomSectionReveal className="mx-auto max-w-2xl text-center">
          <span className={ECOM_THEME.badge}>Our services</span>
          <h2
            className={`mt-4 text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight ${ECOM_THEME.headline} ${ECOM_THEME.text}`}
          >
            Complete A-Z e-commerce management
          </h2>
          <p className={`mt-3 text-base leading-relaxed ${ECOM_THEME.textSubtle}`}>
            From store setup to payouts, our team handles every part of running your online store
            professionally.
          </p>
        </EcomSectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ECOM_SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              className="h-full"
            >
              <EliteCard glow={GLOWS[index % GLOWS.length]} className="h-full">
                <div className="group relative flex h-full flex-col p-5">
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-violet/10 via-transparent to-accent-cyan/8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <motion.div
                    className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-accent-violet/15 text-accent-violet"
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.45 }}
                  >
                    <i className={`${service.icon} text-sm`} aria-hidden />
                  </motion.div>
                  <h3 className={`relative mt-3 text-sm font-semibold ${ECOM_THEME.text}`}>{service.title}</h3>
                  <p className={`relative mt-2 text-xs leading-relaxed ${ECOM_THEME.textSubtle}`}>{service.description}</p>
                  <ul className={`relative mt-4 space-y-1.5 border-t ${ECOM_THEME.border} pt-4`}>
                    {service.included.map((item) => (
                      <li key={item} className={`flex items-start gap-2 text-[11px] ${ECOM_THEME.textMuted}`}>
                        <i className="fas fa-check mt-0.5 text-[9px] text-accent-violet" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </EliteCard>
            </motion.div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
