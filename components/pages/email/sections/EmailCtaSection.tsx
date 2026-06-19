"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EMAIL_SECTIONS } from "@/lib/email-tokens";
import { EMAIL_INK, EMAIL_PARCHMENT, EMAIL_TERRACOTTA } from "@/lib/email-theme";
import { EmailSectionReveal } from "../shared/EmailSectionReveal";

export default function EmailCtaSection() {
  const [inboxCount, setInboxCount] = useState(847);

  useEffect(() => {
    const interval = setInterval(() => {
      setInboxCount((c) => (c > 12 ? c - 32 : 847));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: EMAIL_INK }}
      data-header-surface="dark"
      data-figma-node={EMAIL_SECTIONS.cta}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, ${EMAIL_PARCHMENT}22 39px, ${EMAIL_PARCHMENT}22 40px)`,
        }}
        aria-hidden
      />

      <SiteContainer className="relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <EmailSectionReveal>
            <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.25em] text-orange-400">
              Q3 scanner rollout
            </p>
            <h2 className="mt-3 font-poppins text-[clamp(2.5rem,5vw,4rem)] font-light leading-tight text-white">
              Reach{" "}
              <span className="font-extrabold italic text-violet-300">inbox zero.</span>
            </h2>
            <p className="mt-5 max-w-md font-poppins text-base leading-relaxed text-stone-400">
              Limited deployment nodes for the Q3 Scanner rollout. Automate your triage today and
              reclaim your mornings.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/email"
                className="inline-flex h-14 items-center justify-center px-10 font-poppins text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: EMAIL_TERRACOTTA }}
              >
                Deploy Unit 06
              </Link>
              <Link
                href="/"
                className="inline-flex h-14 items-center justify-center border-2 border-stone-600 px-10 font-poppins text-[11px] font-bold uppercase tracking-[0.15em] text-stone-300 transition-colors hover:border-violet-400 hover:text-white"
              >
                Request technical deck
              </Link>
            </div>
          </EmailSectionReveal>

          <EmailSectionReveal delay={0.15}>
            <div className="border-2 border-stone-700 bg-stone-900 p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-poppins text-[9px] font-bold uppercase tracking-wider text-violet-400">
                    Inbox counter
                  </p>
                  <p className="mt-1 font-poppins text-xs text-stone-500">Live purge in progress</p>
                </div>
                <i className="fas fa-envelope-open text-2xl text-orange-500" aria-hidden />
              </div>

              <div className="mt-8 text-center">
                <p className="font-poppins text-[clamp(4rem,12vw,7rem)] font-extrabold leading-none text-white transition-opacity duration-300">
                  {inboxCount}
                </p>
                <p className="mt-2 font-poppins text-sm font-medium text-stone-400">messages remaining</p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-stone-700 pt-6">
                <div className="text-center">
                  <p className="font-poppins text-lg font-extrabold text-violet-300">42,801</p>
                  <p className="font-poppins text-[8px] font-bold uppercase text-stone-500">Scanned</p>
                </div>
                <div className="text-center">
                  <p className="font-poppins text-lg font-extrabold text-emerald-400">99.7%</p>
                  <p className="font-poppins text-[8px] font-bold uppercase text-stone-500">Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="font-poppins text-lg font-extrabold text-orange-400">14hr</p>
                  <p className="font-poppins text-[8px] font-bold uppercase text-stone-500">Saved</p>
                </div>
              </div>
            </div>
          </EmailSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
