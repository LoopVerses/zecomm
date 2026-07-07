"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ADDITIONAL_SERVICES, FEATURED_SERVICES } from "@/lib/services-content";
import { LANDING_BG } from "@/lib/landing-theme";

export const SERVICE_GRID_FIGMA_NODE = "6:10";

const BENTO_ACCENT: Record<string, string> = {
  "/ecom": "from-blue-500/20 to-accent-violet/10",
  "/youtube": "from-red-500/20 to-rose-500/10",
};

export default function ServiceGridSection() {
  const [ecom, youtube] = FEATURED_SERVICES;
  const additional = ADDITIONAL_SERVICES.slice(0, 6);

  return (
    <section
      id="services"
      className="relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: LANDING_BG }}
      data-header-surface="dark"
      data-figma-node={SERVICE_GRID_FIGMA_NODE}
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
            Automation stack
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.65rem,4.5vw,3rem)] font-bold tracking-tight text-ink-primary">
            Choose your tools
          </h2>
          <p className="mt-4 font-poppins text-base text-ink-secondary">
            Modular automations that work alone or together. Hover to explore — click to dive in.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="sm:col-span-2 lg:row-span-2"
          >
            <EliteCard glow="violet" className="h-full">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${BENTO_ACCENT[ecom.href]} opacity-50 transition-opacity duration-500 group-hover:opacity-90`}
                aria-hidden
              />
              <Link href={ecom.href} className="relative flex h-full min-h-[260px] flex-col p-6 sm:min-h-[300px] sm:p-8 lg:min-h-[340px]">
                <span className="w-fit rounded-full border border-accent-lime/30 bg-accent-lime/10 px-3 py-1 font-poppins text-[10px] font-semibold text-accent-lime">
                  {ecom.badge}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-primary sm:text-2xl lg:text-3xl">
                  {ecom.title}
                </h3>
                <p className="mt-3 max-w-sm flex-1 font-poppins text-sm leading-relaxed text-ink-secondary">
                  {ecom.description}
                </p>
                <div className="mt-4 rounded-xl border border-white/8 bg-surface-base/60 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-center gap-2">
                    <span className="zc-live-dot h-1.5 w-1.5 rounded-full bg-accent-lime" />
                    <span className="font-poppins text-[10px] text-ink-muted">Live preview</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {["Amazon", "Shopify", "TikTok"].map((p) => (
                      <div
                        key={p}
                        className="rounded-lg bg-white/5 px-2 py-2 text-center font-poppins text-[9px] text-ink-secondary transition-colors group-hover:bg-white/10"
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 font-poppins text-xs text-accent-lime">+$2,340 recovered · 3 carts</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 font-poppins text-sm font-semibold text-accent-violet transition-all group-hover:gap-2">
                  Explore <span aria-hidden>→</span>
                </span>
              </Link>
            </EliteCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="sm:col-span-2"
          >
            <EliteCard glow="red" className="h-full">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${BENTO_ACCENT[youtube.href]} opacity-50 group-hover:opacity-90`}
                aria-hidden
              />
              <Link href={youtube.href} className="relative flex h-full flex-col p-6">
                <span className="w-fit rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 font-poppins text-[10px] font-semibold text-red-400">
                  {youtube.badge}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink-primary sm:text-xl">{youtube.title}</h3>
                <p className="mt-2 font-poppins text-sm text-ink-secondary">{youtube.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Research", "Edit", "SEO", "Upload"].map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-white/5 px-2 py-1 font-poppins text-[9px] text-ink-muted transition-colors group-hover:bg-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            </EliteCard>
          </motion.div>

          {additional.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <EliteCard glow={service.glow} className="h-full">
                <Link href={service.href} className="group block h-full p-5">
                  <motion.div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${service.iconBg} ${service.iconColor}`}
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.45 }}
                  >
                    <i className={`${service.icon} text-sm`} aria-hidden />
                  </motion.div>
                  <h3 className="mt-3 font-poppins text-sm font-semibold text-ink-primary group-hover:text-accent-violet">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 font-poppins text-xs leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-white/5 px-2 py-0.5 font-poppins text-[9px] text-ink-muted">
                    {service.badge}
                  </span>
                </Link>
              </EliteCard>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.1} className="mt-8 text-center">
          <Link
            href="/services"
            className="zc-focus-ring group inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/12 bg-white/5 px-8 font-poppins text-sm font-semibold text-ink-primary transition-all hover:border-accent-violet/40 hover:bg-accent-violet/10 hover:shadow-glow sm:h-12 sm:w-auto"
          >
            View all services & platforms
            <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden>→</span>
          </Link>
        </ScrollReveal>
      </SiteContainer>
    </section>
  );
}
