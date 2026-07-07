/** Ecom page — dark-first premium theme aligned with site design system */
export const ECOM_PAGE_BG = "#0E1117";

export const ECOM_THEME = {
  bg: "bg-surface-base",
  bgAlt: "bg-surface-raised",
  bgMuted: "bg-surface-card",
  text: "text-ink-primary",
  textMuted: "text-ink-secondary",
  textSubtle: "text-ink-muted",
  border: "border-white/10",
  borderStrong: "border-white/15",
  accent: "text-accent-violet",
  accentBg: "bg-accent-violet",
  accentBorder: "border-accent-violet/30",
  card: "rounded-2xl border border-white/10 bg-surface-card shadow-card",
  cardHover:
    "zc-bento-card transition-all duration-200 hover:border-accent-violet/30 hover:shadow-card-hover",
  headline: "font-display",
  body: "font-poppins",
  surface: "dark" as const,
  badge:
    "inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-4 py-1.5 font-poppins text-[11px] font-semibold text-accent-violet",
} as const;
