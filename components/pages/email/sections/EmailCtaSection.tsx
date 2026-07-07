"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { EliteCard, SectionAmbience } from "@/components/shared/EliteCard";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { EMAIL_SECTIONS } from "@/lib/email-tokens";
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
      className="zc-grain relative w-full overflow-x-clip overflow-hidden bg-surface-base py-14 sm:py-16 md:py-20 lg:py-24"
      data-header-surface="dark"
      data-figma-node={EMAIL_SECTIONS.cta}
    >
      <MeshGradient className="opacity-50" />
      <SectionAmbience variant="mixed" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_50%,rgba(234,88,12,0.12),transparent)]"
        aria-hidden
      />

      <SiteContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <EmailSectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-orange-400">
              Q3 scanner rollout
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-ink-primary">
              Reach{" "}
              <span className="bg-gradient-to-r from-orange-400 to-accent-violet bg-clip-text text-transparent">
                inbox zero.
              </span>
            </h2>
            <p className="mt-5 max-w-md font-poppins text-base leading-relaxed text-ink-secondary">
              Limited deployment nodes for the Q3 Scanner rollout. Automate your triage today and
              reclaim your mornings.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="zc-focus-ring inline-flex h-11 w-full items-center sm:h-12 sm:w-auto justify-center rounded-xl bg-orange-500 px-10 font-poppins text-sm font-semibold text-white shadow-[0_8px_32px_rgba(234,88,12,0.35)] transition-all hover:bg-orange-400"
              >
                Deploy Unit 06
              </Link>
              <Link
                href="/"
                className="zc-focus-ring inline-flex h-11 w-full items-center sm:h-12 sm:w-auto justify-center rounded-xl border border-white/15 bg-white/5 px-10 font-poppins text-sm font-semibold text-ink-primary transition-colors hover:border-orange-500/40 hover:bg-white/10"
              >
                Request technical deck
              </Link>
            </div>
          </EmailSectionReveal>

          <EmailSectionReveal delay={0.15}>
            <EliteCard glow="red" className="backdrop-blur-sm bg-surface-card/80">
              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-poppins text-[9px] font-bold uppercase tracking-wider text-orange-400">
                      Inbox counter
                    </p>
                    <p className="mt-1 font-poppins text-xs text-ink-muted">Live purge in progress</p>
                  </div>
                  <motion.i
                    className="fas fa-envelope-open text-2xl text-orange-500"
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                    transition={{ duration: 0.45 }}
                    aria-hidden
                  />
                </div>

                <div className="mt-8 text-center">
                  <p className="font-poppins text-[clamp(4rem,12vw,7rem)] font-extrabold leading-none text-ink-primary transition-opacity duration-300">
                    {inboxCount}
                  </p>
                  <p className="mt-2 font-poppins text-sm font-medium text-ink-muted">messages remaining</p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                  <div className="text-center">
                    <p className="font-poppins text-lg font-extrabold text-accent-violet">42,801</p>
                    <p className="font-poppins text-[8px] font-bold uppercase text-ink-muted">Scanned</p>
                  </div>
                  <div className="text-center">
                    <p className="font-poppins text-lg font-extrabold text-accent-lime">99.7%</p>
                    <p className="font-poppins text-[8px] font-bold uppercase text-ink-muted">Accuracy</p>
                  </div>
                  <div className="text-center">
                    <p className="font-poppins text-lg font-extrabold text-orange-400">14hr</p>
                    <p className="font-poppins text-[8px] font-bold uppercase text-ink-muted">Saved</p>
                  </div>
                </div>
              </div>
            </EliteCard>
          </EmailSectionReveal>
        </div>
      </SiteContainer>
    </section>
  );
}
