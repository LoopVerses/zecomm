import type { ReactNode } from "react";
import { DS } from "./design-system";

/** Shared premium page theme tokens — import in any inner page */
export const PAGE_THEME = {
  bg: DS.surface.base,
  bgRaised: DS.surface.raised,
  bgCard: DS.surface.card,
  surface: "dark" as const,
  section: "relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28",
  sectionTight: "relative w-full overflow-x-clip py-12 sm:py-14 md:py-16",
  heading: "font-display text-[clamp(1.65rem,4.5vw,3rem)] font-bold tracking-tight text-ink-primary",
  subtext: "font-poppins text-ink-secondary",
  badge:
    "inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet",
  card: "rounded-2xl border border-white/10 bg-surface-card backdrop-blur-sm",
  cardHover: "zc-bento-card",
} as const;

export function PageGrain({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`zc-grain relative ${className}`}>{children}</div>;
}
