"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YoutubeSectionReveal } from "../shared/YoutubeSectionReveal";

const TRUST_STATS = [
  { value: "12.4K", label: "Videos / mo" },
  { value: "94%", label: "SEO score" },
  { value: "24/7", label: "Production" },
] as const;

export default function YoutubeCtaSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#120808] to-[#0A0A0A] py-24 lg:py-32"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.cta}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(220,38,38,0.18),transparent)]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden" aria-hidden>
        <p
          className="-mb-6 select-none text-center font-poppins text-[clamp(5rem,18vw,14rem)] font-extrabold uppercase leading-none tracking-[-0.06em] text-white/[0.03]"
          data-figma-node="6:265"
        >
          YT-Z
        </p>
      </div>

      <SiteContainer className="relative z-10 flex flex-col items-center text-center">
        <YoutubeSectionReveal className="w-full max-w-[800px]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-14 backdrop-blur-xl sm:px-14 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 0%, rgba(220,38,38,0.15) 0%, transparent 55%)",
              }}
              aria-hidden
            />

            <div className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-red-500/40" />
            <div className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-red-500/40" />
            <div className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-red-500/40" />
            <div className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-red-500/40" />

            <div className="relative">
              <motion.span
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/15 px-4 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.25em] text-red-400"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <i className="fas fa-play-circle text-[10px]" aria-hidden />
                Limited Unit 02 slots
              </motion.span>

              <h2
                className="font-poppins text-[40px] font-light uppercase leading-[1.05] tracking-[-0.03em] text-white sm:text-[64px] lg:text-[76px]"
                data-figma-node="6:266"
              >
                <span className="font-extrabold">DOMINATE</span>
                <br />
                <span className="relative inline-block">
                  THE{" "}
                  <span className="bg-gradient-to-r from-red-400 via-red-500 to-rose-400 bg-clip-text font-extrabold text-transparent">
                    FEED.
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-red-500/80 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                  />
                </span>
              </h2>

              <p
                className="mx-auto mt-6 max-w-[520px] font-poppins text-sm leading-relaxed text-gray-400 sm:text-base"
                data-figma-node="6:267"
              >
                Connect to the YouTube Factory and begin your organic scaling journey today.
              </p>

              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {TRUST_STATS.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                    {i > 0 && <span className="hidden h-8 w-px bg-white/10 sm:block" aria-hidden />}
                    <div>
                      <p className="font-poppins text-xl font-extrabold text-white sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="font-poppins text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/whatsapp"
                  className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-red-600 px-10 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white shadow-[0_8px_32px_rgba(220,38,38,0.35)] transition-all hover:bg-red-500 sm:w-auto sm:min-w-[260px]"
                  data-figma-node="6:268"
                >
                  Connect via WhatsApp
                </Link>
                <Link
                  href="/"
                  className="group relative inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/5 px-10 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:border-white/25 hover:bg-white/10 sm:w-auto sm:min-w-[260px]"
                  data-figma-node="6:271"
                >
                  <span className="relative z-10">Request Case Study</span>
                  <motion.span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.6 }}
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
          </div>
        </YoutubeSectionReveal>
      </SiteContainer>
    </section>
  );
}
