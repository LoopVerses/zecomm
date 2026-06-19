"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_SERVICES } from "@/lib/ecom-content";
import { SectionAmbientBackground } from "../shared/AmbientBackground";

export default function EcomServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20"
      data-header-surface="light"
      data-figma-node={ECOM_SECTIONS.services}
    >
      <SectionAmbientBackground />

      <SiteContainer className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue">
            Our services
          </span>
          <h2 className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-gray-900">
            Complete A-Z e-commerce management
          </h2>
          <p className="mt-3 font-poppins text-base leading-relaxed text-gray-500">
            From store setup to payouts, our team handles every part of running your online store
            professionally.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ECOM_SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_8px_28px_rgba(28,51,191,0.08)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <i className={`${service.icon} text-sm`} aria-hidden />
              </div>
              <h3 className="mt-3 font-poppins text-sm font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 font-poppins text-xs leading-relaxed text-gray-500">{service.description}</p>
              <ul className="mt-4 space-y-1.5 border-t border-gray-100 pt-4">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-poppins text-[11px] text-gray-600">
                    <i className="fas fa-check mt-0.5 text-[9px] text-brand-blue" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
