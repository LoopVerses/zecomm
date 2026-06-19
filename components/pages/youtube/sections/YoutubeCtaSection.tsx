"use client";

import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { YOUTUBE_SECTIONS } from "@/lib/youtube-tokens";
import { YoutubeSectionReveal } from "../shared/YoutubeSectionReveal";

export default function YoutubeCtaSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#120808] to-[#0A0A0A] py-16 sm:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={YOUTUBE_SECTIONS.cta}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(220,38,38,0.18),transparent)]"
        aria-hidden
      />

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

            <div className="relative">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/15 px-4 py-1.5 font-poppins text-[11px] font-semibold text-red-400">
                Ready to start?
              </span>

              <h2
                className="font-poppins text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight text-white"
                data-figma-node="6:266"
              >
                Grow your YouTube channel the smart way
              </h2>

              <p
                className="mx-auto mt-5 max-w-[560px] font-poppins text-base leading-relaxed text-gray-400"
                data-figma-node="6:267"
              >
                Let us handle everything for your YouTube channel: content research, script writing,
                video editing, thumbnails, uploads, SEO, channel management, and monetization support.
                Contact us today to discuss your goals and get started with a complete YouTube
                automation plan.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="#contact"
                  className="inline-flex h-12 w-full min-w-[220px] items-center justify-center rounded-xl bg-red-600 px-8 font-poppins text-sm font-semibold text-white shadow-[0_8px_32px_rgba(220,38,38,0.35)] transition-all hover:bg-red-500 sm:w-auto"
                  data-figma-node="6:268"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/whatsapp"
                  className="inline-flex h-12 w-full min-w-[220px] items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 font-poppins text-sm font-semibold text-white transition-all hover:border-red-500/40 hover:bg-white/10 sm:w-auto"
                  data-figma-node="6:271"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </YoutubeSectionReveal>
      </SiteContainer>
    </section>
  );
}
