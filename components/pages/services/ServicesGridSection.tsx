"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { LANDING_BG } from "@/lib/landing-theme";
import { ADDITIONAL_SERVICES, FEATURED_SERVICES } from "@/lib/services-content";

export default function ServicesGridSection() {
  return (
    <section
      id="services-list"
      className="relative w-full py-14 sm:py-16"
      style={{ backgroundColor: LANDING_BG }}
      data-header-surface="light"
    >
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-poppins text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-gray-900">
            Featured services
          </h2>
          <p className="mt-3 font-poppins text-base text-gray-500">
            Our core offerings with dedicated pages and full detail.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FEATURED_SERVICES.map((service, index) => (
            <motion.article
              key={service.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-blue/20 hover:shadow-md"
            >
              <span className={`inline-flex rounded-full border px-2.5 py-0.5 font-poppins text-[10px] font-semibold ${service.accent}`}>
                {service.badge}
              </span>
              <h3 className="mt-4 font-poppins text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 font-poppins text-sm leading-relaxed text-gray-500">{service.description}</p>
              <Link
                href={service.href}
                className="mt-5 inline-flex items-center gap-1 font-poppins text-sm font-semibold text-brand-blue hover:gap-2"
              >
                View details <span aria-hidden>→</span>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="font-poppins text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-gray-900">
            More automation tools
          </h2>
          <p className="mt-3 font-poppins text-base text-gray-500">
            Additional services available as part of your automation stack.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADDITIONAL_SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-brand-blue/15 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${service.iconBg} ${service.iconColor}`}>
                  <i className={`${service.icon} text-sm`} aria-hidden />
                </div>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-poppins text-[10px] font-medium text-gray-500">
                  {service.badge}
                </span>
              </div>
              <h3 className="mt-4 font-poppins text-base font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 font-poppins text-sm leading-relaxed text-gray-500">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
