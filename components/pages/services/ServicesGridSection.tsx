"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { ADDITIONAL_SERVICES, FEATURED_SERVICES } from "@/lib/services-content";

export default function ServicesGridSection() {
  return (
    <section
      id="services-list"
      className="relative w-full overflow-x-clip bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
    >
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet">
            Core offerings
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink-primary">
            Featured services
          </h2>
          <p className="mt-3 font-poppins text-base text-ink-secondary">
            Our flagship automations with dedicated pages and full detail.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {FEATURED_SERVICES.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <EliteCard glow={service.glow} className="h-full">
                <Link href={service.href} className="group relative block h-full overflow-hidden p-7 sm:p-8">
                  <span className="pointer-events-none absolute -right-4 -top-6 font-display text-[7rem] font-black leading-none text-white/[0.03] transition-colors group-hover:text-accent-violet/10">
                    0{index + 1}
                  </span>

                  <span className="inline-flex rounded-full border border-accent-violet/30 bg-accent-violet/10 px-2.5 py-0.5 font-poppins text-[10px] font-semibold text-accent-violet">
                    {service.badge}
                  </span>

                  <h3 className="relative mt-5 font-display text-2xl font-bold text-ink-primary transition-colors group-hover:text-accent-violet sm:text-[1.65rem]">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 max-w-md font-poppins text-sm leading-relaxed text-ink-secondary">
                    {service.description}
                  </p>

                  <span className="relative mt-6 inline-flex items-center gap-2 font-poppins text-sm font-semibold text-accent-violet">
                    <span className="transition-transform group-hover:translate-x-1">View details</span>
                    <motion.span
                      aria-hidden
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>

                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-violet/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </EliteCard>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-cyan">
            Full stack
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink-primary">
            AI & automation tools
          </h2>
          <p className="mt-3 font-poppins text-base text-ink-secondary">
            Each tool has its own dedicated page — hover to explore.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADDITIONAL_SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
            >
              <EliteCard glow={service.glow} className="h-full">
                <Link href={service.href} className="group relative block h-full p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <motion.div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${service.iconBg} ${service.iconColor}`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <i className={`${service.icon} text-base`} aria-hidden />
                    </motion.div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-poppins text-[10px] font-medium text-ink-muted">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-poppins text-base font-semibold text-ink-primary transition-colors group-hover:text-accent-violet">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-poppins text-sm leading-relaxed text-ink-muted">{service.description}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-poppins text-xs font-semibold text-accent-violet opacity-0 transition-all group-hover:opacity-100">
                      Explore page →
                    </span>
                    <span className="font-display text-lg font-bold text-white/10 transition-colors group-hover:text-accent-violet/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Link>
              </EliteCard>
            </motion.div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
