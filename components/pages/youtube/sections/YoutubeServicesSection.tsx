"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YOUTUBE_SERVICES } from "@/lib/youtube-content";
import {
  staggerContainer,
  staggerItem,
  YoutubeSectionReveal,
} from "../shared/YoutubeSectionReveal";

export default function YoutubeServicesSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      id="services"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24"
      data-header-surface="light"
      data-figma-node={YOUTUBE_SECTIONS.services}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(220,38,38,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <SiteContainer>
        <YoutubeSectionReveal className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-600">
            What&apos;s included
          </span>
          <h2 className="font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-gray-900">
            Full YouTube production support
          </h2>
          <p className="mt-3 font-poppins text-base text-gray-500">
            We manage the full process from content research to monetization, helping you build a
            professional channel with consistent, high-quality content.
          </p>
        </YoutubeSectionReveal>

        <motion.div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {YOUTUBE_SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={staggerItem}
              className="group rounded-2xl border border-gray-200 bg-gray-50/80 p-5 transition-all hover:border-red-200 hover:bg-white hover:shadow-[0_8px_28px_rgba(220,38,38,0.08)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <i className={`${service.icon} text-sm`} aria-hidden />
              </div>
              <h3 className="mt-3 font-poppins text-sm font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 font-poppins text-xs leading-relaxed text-gray-500">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
