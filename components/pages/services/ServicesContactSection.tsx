"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ContactForm } from "@/components/shared/ContactForm";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import {
  COMPANY_OFFICES,
  CONTACT_EMAIL,
  getOfficeLines,
  getOfficeMapsUrl,
} from "@/lib/company-info";
import { CONTACT_OPTIONS } from "@/lib/services-content";

export default function ServicesContactSection() {
  return (
    <section
      id="contact"
      className="zc-grain relative w-full overflow-x-clip overflow-hidden bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
    >
      <MeshGradient className="opacity-50" />
      <SectionAmbience variant="mixed" />

      <SiteContainer className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-3 py-1 font-poppins text-[11px] font-semibold text-accent-violet">
            Get in touch
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink-primary">
            Contact us today
          </h2>
          <p className="mt-4 font-poppins text-base leading-relaxed text-ink-secondary">
            Fill out the form below and our team will recommend the right automation setup for your
            business. Free consultation, no commitment.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <EliteCard glow="violet" className="h-full">
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold text-ink-primary">Send us a message</h3>
                <p className="mt-2 font-poppins text-sm text-ink-muted">
                  We typically respond within 24 hours on business days.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </EliteCard>
          </motion.div>

          {/* Sidebar info */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {COMPANY_OFFICES.map((office, index) => (
              <motion.div
                key={office.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.04 }}
              >
                <EliteCard glow="cyan">
                  <div className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan">
                      <i className="fas fa-map-marker-alt" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-poppins text-sm font-semibold text-ink-primary">{office.label}</h3>
                    <address className="mt-2 not-italic">
                      <a
                        href={getOfficeMapsUrl(office)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-poppins text-sm leading-relaxed text-ink-secondary transition-colors hover:text-accent-violet"
                      >
                        {getOfficeLines(office).map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </a>
                    </address>
                  </div>
                </EliteCard>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <EliteCard glow="lime">
                <div className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-lime/25 bg-accent-lime/10 text-accent-lime">
                    <i className="fas fa-envelope" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-poppins text-sm font-semibold text-ink-primary">Email</h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-2 inline-block font-poppins text-sm text-ink-secondary transition-colors hover:text-accent-violet"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <p className="mt-3 font-poppins text-xs text-ink-muted">
                    Prefer email? Send us your project details directly.
                  </p>
                </div>
              </EliteCard>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {CONTACT_OPTIONS.filter(
                (o) =>
                  o.title !== "Head Office" &&
                  o.title !== "US Office" &&
                  o.title !== "Email us"
              ).map(
                (option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: 0.16 + index * 0.05 }}
                  >
                    <EliteCard glow={option.glow} className="h-full">
                      <a href={option.href} className="group flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-violet/20 bg-accent-violet/10 text-accent-violet">
                          <i className={`${option.icon} text-sm`} aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-poppins text-sm font-semibold text-ink-primary">{option.title}</h3>
                          <p className="truncate font-poppins text-xs text-ink-muted group-hover:text-ink-secondary">
                            {option.detail}
                          </p>
                        </div>
                      </a>
                    </EliteCard>
                  </motion.div>
                )
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <Link
                href="/ecom"
                className="zc-focus-ring flex h-11 w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 font-poppins text-sm font-semibold text-ink-primary transition-colors hover:border-accent-violet/40 hover:bg-white/10"
              >
                Start with E-Commerce →
              </Link>
            </motion.div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
