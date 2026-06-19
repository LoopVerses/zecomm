"use client";

import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ECOM_SECTIONS } from "@/lib/ecom-tokens";
import { ECOM_BUSINESS_MODELS } from "@/lib/ecom-content";
import { SectionAmbientBackground } from "../shared/AmbientBackground";

export default function EcomModelsSection() {
  return (
    <section
      id="models"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20"
      data-header-surface="light"
      data-figma-node={ECOM_SECTIONS.models}
    >
      <SectionAmbientBackground />

      <SiteContainer className="relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 font-poppins text-[11px] font-semibold text-brand-blue">
              Business models
            </span>
            <h2 className="mt-4 font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-gray-900">
              Models we support
            </h2>
            <p className="mt-3 font-poppins text-base leading-relaxed text-gray-500">
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
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 font-poppins text-xs font-medium text-gray-700"
                >
                  {model}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-brand-blue/[0.04] to-white p-6 sm:p-8"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <i className="fab fa-amazon text-lg" aria-hidden />
            </div>
            <h3 className="mt-4 font-poppins text-lg font-bold text-gray-900">Amazon Ungating Support</h3>
            <p className="mt-3 font-poppins text-sm leading-relaxed text-gray-600">
              We provide support for Amazon ungating and category approval applications through proper
              documentation, supplier coordination, invoice preparation guidance, and compliance-based
              submission support.
            </p>
            <p className="mt-3 font-poppins text-sm leading-relaxed text-gray-500">
              Our goal is to help clients follow the correct approval process and prepare their accounts
              professionally for marketplace requirements.
            </p>
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
}
