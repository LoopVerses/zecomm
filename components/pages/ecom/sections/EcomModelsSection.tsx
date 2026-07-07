"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_THEME } from "@/lib/ecom-theme";
import { ECOM_BUSINESS_MODELS } from "@/lib/ecom-content";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";

export default function EcomModelsSection() {
  return (
    <section
      id="models"
      className={`relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24 ${ECOM_THEME.bgAlt}`}
      data-header-surface={ECOM_THEME.surface}
      data-figma-node={ECOM_SECTIONS.models}
    >
      <SectionAmbience variant="violet" />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <EcomSectionReveal>
            <span className={ECOM_THEME.badge}>Business models</span>
            <h2
              className={`mt-4 text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight ${ECOM_THEME.headline} ${ECOM_THEME.text}`}
            >
              Models we support
            </h2>
            <p className={`mt-3 text-base leading-relaxed ${ECOM_THEME.textSubtle}`}>
              Whether you want dropshipping, digital products, wholesale, or full marketplace
              management, we have a structured system for your business.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {ECOM_BUSINESS_MODELS.map((model, index) => (
                <motion.span
                  key={model}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className={`cursor-default rounded-full border ${ECOM_THEME.border} bg-white/5 px-4 py-2 text-xs font-medium ${ECOM_THEME.textMuted} transition-colors hover:border-accent-violet/30 hover:bg-accent-violet/10 hover:text-ink-primary`}
                >
                  {model}
                </motion.span>
              ))}
            </div>
          </EcomSectionReveal>

          <EcomSectionReveal delay={0.1}>
            <EliteCard glow="violet" className="h-full">
              <div className="p-6 sm:p-8">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-violet/15 via-transparent to-accent-cyan/10 opacity-60"
                  aria-hidden
                />
                <motion.div
                  className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-accent-violet/15 text-accent-violet"
                  whileHover={{ rotate: 360, scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className="fab fa-amazon text-lg" aria-hidden />
                </motion.div>
                <h3 className={`relative mt-4 text-lg font-bold ${ECOM_THEME.headline} ${ECOM_THEME.text}`}>
                  Amazon Ungating Support
                </h3>
                <p className={`relative mt-3 text-sm leading-relaxed ${ECOM_THEME.textMuted}`}>
                  We provide support for Amazon ungating and category approval applications through proper
                  documentation, supplier coordination, invoice preparation guidance, and compliance-based
                  submission support.
                </p>
                <p className={`relative mt-3 text-sm leading-relaxed ${ECOM_THEME.textSubtle}`}>
                  Our goal is to help clients follow the correct approval process and prepare their accounts
                  professionally for marketplace requirements.
                </p>
              </div>
            </EliteCard>
          </EcomSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
