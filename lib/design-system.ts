/** Zeecomm 2026 — dark-first techno-futurist design tokens */
export const DS = {
  surface: {
    base: "#0E1117",
    raised: "#12151E",
    card: "#161B26",
    cardHover: "#1A2030",
    border: "rgba(255,255,255,0.08)",
    borderHover: "rgba(108,76,241,0.35)",
  },
  accent: {
    violet: "#6C4CF1",
    violetGlow: "rgba(108,76,241,0.45)",
    cyan: "#06B6D4",
    cyanGlow: "rgba(6,182,212,0.35)",
    lime: "#A3FF6B",
    limeGlow: "rgba(163,255,107,0.3)",
  },
  text: {
    primary: "#F1F3F9",
    secondary: "#9AA0B4",
    muted: "#6B7289",
  },
  motion: {
    fast: 0.18,
    base: 0.25,
    slow: 0.45,
    spring: { stiffness: 260, damping: 24 },
  },
} as const;

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
