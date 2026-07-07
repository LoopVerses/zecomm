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
            Our core offerings with dedicated pages and full detail.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FEATURED_SERVICES.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <EliteCard glow={service.glow} className="h-full">
                <div className="p-6">
                  <span className="inline-flex rounded-full border border-accent-violet/30 bg-accent-violet/10 px-2.5 py-0.5 font-poppins text-[10px] font-semibold text-accent-violet">
                    {service.badge}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink-primary">{service.title}</h3>
                  <p className="mt-2 font-poppins text-sm leading-relaxed text-ink-secondary">{service.description}</p>
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex items-center gap-1 font-poppins text-sm font-semibold text-accent-violet transition-all hover:gap-2"
                  >
                    View details <span aria-hidden>→</span>
                  </Link>
                </div>
              </EliteCard>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-cyan">
            Full stack
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink-primary">
            More automation tools
          </h2>
          <p className="mt-3 font-poppins text-base text-ink-secondary">
            Each tool has its own dedicated page — click to explore.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADDITIONAL_SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <EliteCard glow={service.glow} className="h-full">
                <Link href={service.href} className="group block h-full p-5">
                  <div className="flex items-start justify-between gap-3">
                    <motion.div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${service.iconBg} ${service.iconColor}`}
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                      transition={{ duration: 0.45 }}
                    >
                      <i className={`${service.icon} text-sm`} aria-hidden />
                    </motion.div>
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 font-poppins text-[10px] font-medium text-ink-muted">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 font-poppins text-base font-semibold text-ink-primary group-hover:text-accent-violet">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-poppins text-sm leading-relaxed text-ink-muted">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-poppins text-xs font-semibold text-accent-violet opacity-0 transition-all group-hover:gap-2 group-hover:opacity-100">
                    Explore page <span aria-hidden>→</span>
                  </span>
                </Link>
              </EliteCard>
            </motion.div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
