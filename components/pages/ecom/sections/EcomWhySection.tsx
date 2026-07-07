"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_THEME } from "@/lib/ecom-theme";
import { ECOM_WHY_CHOOSE } from "@/lib/ecom-content";
import { EcomSectionReveal } from "../shared/EcomSectionReveal";

const GLOWS = ["violet", "cyan", "lime", "violet", "cyan", "lime"] as const;

const HIGHLIGHTS = [
  { icon: "fas fa-store", label: "Store setup", glow: "violet" as const },
  { icon: "fas fa-boxes", label: "Fulfillment", glow: "cyan" as const },
  { icon: "fas fa-chart-line", label: "Scale & grow", glow: "lime" as const },
] as const;

export default function EcomWhySection() {
  return (
    <section
      id="about"
      className={`relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24 ${ECOM_THEME.bgAlt}`}
      data-header-surface={ECOM_THEME.surface}
      data-figma-node={ECOM_SECTIONS.why}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <EcomSectionReveal>
            <EliteCard glow="violet" className="mb-8">
              <div className="p-6 sm:p-8">
                <span className={ECOM_THEME.badge}>About Zeecom</span>
                <h2
                  className={`mt-4 text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight ${ECOM_THEME.headline} ${ECOM_THEME.text}`}
                >
                  Zero Effort E-Commerce
                </h2>
                <p className={`mt-4 text-base leading-relaxed ${ECOM_THEME.textMuted}`}>
                  Zeecom stands for <strong className="font-semibold text-ink-primary">Zero Effort E-Commerce</strong>.
                  We are an e-commerce automation and management company built to help entrepreneurs,
                  investors, and business owners enter the online marketplace space without managing
                  day-to-day operations themselves.
                </p>
                <p className={`mt-4 text-base leading-relaxed ${ECOM_THEME.textMuted}`}>
                  Our team handles store creation, product hunting, listings, order processing, supplier
                  coordination, shipping management, buy box optimization, payout handling, and complete
                  account management across multiple platforms.
                </p>
                <p className={`mt-4 text-base leading-relaxed ${ECOM_THEME.textSubtle}`}>
                  Whether you want dropshipping, digital products, wholesale, white label, private label,
                  or marketplace store management, Zeecom provides a structured system to build and operate
                  your e-commerce business professionally.
                </p>
              </div>
            </EliteCard>

            <div className="grid grid-cols-3 gap-3">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <EliteCard glow={item.glow} className="rounded-xl">
                    <div className="p-3 text-center">
                      <i className={`${item.icon} text-sm text-accent-violet`} aria-hidden />
                      <p className="mt-2 font-poppins text-[9px] font-semibold text-ink-muted sm:text-[10px]">{item.label}</p>
                    </div>
                  </EliteCard>
                </motion.div>
              ))}
            </div>
          </EcomSectionReveal>

          <EcomSectionReveal delay={0.1}>
            <EliteCard glow="cyan" className="mb-6">
              <div className="p-5">
                <h3 className={`text-lg font-bold ${ECOM_THEME.headline} ${ECOM_THEME.text}`}>
                  Why choose Zeecom?
                </h3>
                <p className={`mt-2 text-sm ${ECOM_THEME.textSubtle}`}>
                  Everything you need to run stores without daily manual work.
                </p>
              </div>
            </EliteCard>

            <ul className="space-y-3">
              {ECOM_WHY_CHOOSE.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <EliteCard glow={GLOWS[index % GLOWS.length]} className="rounded-xl">
                    <div className="flex items-start gap-3 p-4">
                      <motion.span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-violet/15 text-accent-violet"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <i className="fas fa-check text-[10px]" aria-hidden />
                      </motion.span>
                      <span className={`text-sm ${ECOM_THEME.textMuted}`}>{item}</span>
                    </div>
                  </EliteCard>
                </motion.li>
              ))}
            </ul>
          </EcomSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
