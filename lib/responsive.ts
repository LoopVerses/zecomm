/** Site-wide responsive class tokens — use for pixel-perfect consistency */

export const RS = {
  /** Standard section wrapper */
  section: "relative w-full overflow-x-clip py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28",

  /** Hero sections with fixed header offset + safe area */
  heroSection:
    "relative w-full overflow-x-clip min-h-0 lg:min-h-[100dvh] pt-[max(5.5rem,calc(4rem+env(safe-area-inset-top,0px)))] pb-12 sm:pt-28 sm:pb-16 lg:pb-20",

  /** Typography */
  displayHero: "font-display font-bold leading-[1.02] tracking-[-0.03em] text-ink-primary text-[clamp(2rem,7vw,5rem)]",
  displayH2: "font-display font-bold leading-tight tracking-tight text-ink-primary text-[clamp(1.65rem,4.5vw,3rem)]",
  displayH3: "font-display text-[clamp(1.15rem,2.5vw,1.5rem)] font-bold text-ink-primary",
  body: "font-poppins text-sm leading-relaxed text-ink-secondary sm:text-base",
  bodySmall: "font-poppins text-xs leading-relaxed text-ink-muted sm:text-sm",

  /** Layout grids */
  grid1: "grid grid-cols-1 gap-4",
  grid2: "grid grid-cols-1 gap-4 sm:grid-cols-2",
  grid3: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
  grid4: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
  grid2x2: "grid grid-cols-2 gap-3 sm:gap-4",

  /** Flex patterns */
  stack: "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
  stackCenter: "flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center",
  between: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",

  /** Buttons */
  btnPrimary:
    "zc-focus-ring inline-flex h-11 w-full items-center justify-center rounded-xl bg-accent-violet px-6 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02] sm:h-12 sm:w-auto sm:px-8",
  btnSecondary:
    "zc-focus-ring inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/12 bg-white/5 px-6 font-poppins text-sm font-semibold text-ink-primary transition-all hover:border-accent-violet/40 sm:h-12 sm:w-auto sm:px-8",

  /** Cards */
  card: "rounded-2xl border border-white/10 bg-surface-card",
  cardPad: "p-4 sm:p-5 md:p-6",

  /** Marquee cards */
  marqueeCard: "w-[min(100vw-2.5rem,340px)] shrink-0 sm:w-[360px]",

  /** Prevent overflow */
  contain: "min-w-0 max-w-full",
} as const;
