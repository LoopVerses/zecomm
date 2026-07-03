"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CONTACT_OPTIONS } from "@/lib/services-content";

export default function ServicesContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-gray-900 py-16 sm:py-20"
      data-header-surface="dark"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(28,51,191,0.25),transparent)]"
        aria-hidden
      />

      <SiteContainer className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-poppins text-[11px] font-semibold text-white/80">
            Get in touch
          </span>
          <h2 className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-white">
            Contact us today
          </h2>
          <p className="mt-4 font-poppins text-base leading-relaxed text-gray-400">
            Tell us about your business and we&apos;ll recommend the right automation setup. Free
            consultation, no commitment.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CONTACT_OPTIONS.map((option, index) => (
            <motion.a
              key={option.title}
              href={option.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition-all hover:border-brand-blue/40 hover:bg-white/[0.07]"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/20 text-brand-blue">
                <i className={`${option.icon} text-base`} aria-hidden />
              </div>
              <h3 className="mt-4 font-poppins text-sm font-semibold text-white">{option.title}</h3>
              <p className="mt-1 font-poppins text-sm text-gray-400 group-hover:text-gray-300">
                {option.detail}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="mailto:hello@zeecom.com"
            className="inline-flex h-12 w-full min-w-[200px] items-center justify-center rounded-xl bg-brand-blue px-8 font-poppins text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90 sm:w-auto"
          >
            Contact Us Today
          </Link>
          <Link
            href="/ecom"
            className="inline-flex h-12 w-full min-w-[200px] items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10 sm:w-auto"
          >
            Start with E-Commerce
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
