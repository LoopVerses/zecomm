"use client";

import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { EMAIL_SECTIONS } from "@/lib/email-tokens";
import { EMAIL_PARCHMENT, EMAIL_PLUM, EMAIL_TERRACOTTA } from "@/lib/email-theme";
import { ParchmentAmbient } from "../shared/ParchmentAmbient";
import { EnvelopePurifierVisual } from "../shared/EnvelopePurifierVisual";
import { EmailSectionReveal } from "../shared/EmailSectionReveal";

export default function EmailHeroSection() {
  return (
    <section
      className="zc-grain relative w-full overflow-x-clip overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: EMAIL_PARCHMENT }}
      data-header-surface="light"
      data-figma-node={EMAIL_SECTIONS.hero}
    >
      <MeshGradient className="opacity-20" />
      <ParchmentAmbient />

      <SiteContainer className="relative flex flex-col items-center">
        <EmailSectionReveal className="w-full max-w-3xl text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 border-2 border-stone-300 bg-white px-4 py-2 font-poppins text-[10px] font-semibold text-stone-600 transition-colors hover:border-violet-400 hover:text-violet-800"
          >
            <i className="fas fa-arrow-left text-[9px] transition-transform group-hover:-translate-x-0.5" aria-hidden />
            Back to Home
          </Link>

          <div className="mx-auto mt-8 inline-flex items-center gap-2 border border-violet-200 bg-violet-50 px-4 py-2">
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-violet-700">
              Email Scanner
            </span>
          </div>

          <h1 className="mt-6 font-poppins text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-stone-900">
            The inbox,
            <br />
            <span className="font-extrabold italic" style={{ color: EMAIL_PLUM }}>
              purified.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl font-poppins text-base leading-relaxed text-stone-600 sm:text-lg">
            Stop drowning in noise. Our email scanner sorts thousands of inbound messages by intent and
            auto-drafts replies. You only click <em className="font-semibold not-italic text-violet-800">Send</em>.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#triage"
              className="inline-flex h-13 items-center justify-center border-2 px-10 py-4 font-poppins text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: EMAIL_PLUM, borderColor: EMAIL_PLUM }}
            >
              Explore scanning logic
            </Link>

            <div className="flex items-center gap-4 border-2 border-stone-300 bg-white px-6 py-4">
              <div className="text-left">
                <p className="font-poppins text-2xl font-extrabold text-stone-900">42,801</p>
                <span className="block font-poppins text-[9px] font-semibold uppercase tracking-wider text-stone-400">
                  emails scanned / day
                </span>
              </div>
              <div className="h-10 w-px bg-stone-200" aria-hidden />
              <div className="text-left">
                <p className="font-poppins text-2xl font-extrabold" style={{ color: EMAIL_TERRACOTTA }}>
                  0.1<span className="text-base">s</span>
                </p>
                <span className="block font-poppins text-[9px] font-semibold uppercase tracking-wider text-stone-400">
                  process time
                </span>
              </div>
            </div>
          </div>
        </EmailSectionReveal>

        <div className="mt-10 w-full lg:mt-12">
          <EnvelopePurifierVisual />
        </div>
      </SiteContainer>
    </section>
  );
}
