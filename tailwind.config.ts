import type { Config } from "tailwindcss";
import { figmaColors, figmaSpacing } from "./lib/colors";

const colorTokens = Object.fromEntries(
  Object.keys(figmaColors).map((token) => [
    token,
    `var(--color-${token})`,
  ])
);

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        site: "1280px",
      },
      colors: {
        ...colorTokens,
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          base: "#0E1117",
          raised: "#12151E",
          card: "#161B26",
          hover: "#1A2030",
        },
        accent: {
          violet: "#6C4CF1",
          cyan: "#06B6D4",
          lime: "#A3FF6B",
        },
        ink: {
          primary: "#F1F3F9",
          secondary: "#9AA0B4",
          muted: "#6B7289",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(108,76,241,0.25)",
        "glow-cyan": "0 0 32px rgba(6,182,212,0.2)",
        "glow-lime": "0 0 20px rgba(163,255,107,0.25)",
        card: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        "card-hover": "0 20px 60px rgba(108,76,241,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-violet": "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(108,76,241,0.18) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 80% 30%, rgba(6,182,212,0.12) 0%, transparent 50%), radial-gradient(ellipse 40% 35% at 50% 90%, rgba(108,76,241,0.08) 0%, transparent 55%)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-poppins)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        consolas: ["var(--font-consolas)", "Consolas", "Courier New", "monospace"],
        "fa-free": ["var(--font-awesome-free)", "sans-serif"],
        "fa-brands": ["var(--font-awesome-brands)", "sans-serif"],
      },
      spacing: {
        "figma-xs": figmaSpacing.gap.xs,
        "figma-sm": figmaSpacing.gap.sm,
        "figma-md": figmaSpacing.gap.md,
        "figma-lg": figmaSpacing.gap.lg,
        "figma-xl": figmaSpacing.gap.xl,
        "figma-2xl": figmaSpacing.gap["2xl"],
        "figma-3xl": figmaSpacing.gap["3xl"],
        "figma-4xl": figmaSpacing.gap["4xl"],
        "figma-5xl": figmaSpacing.gap["5xl"],
      },
      borderRadius: {
        "figma-xs": figmaSpacing.radius.xs,
        "figma-sm": figmaSpacing.radius.sm,
        "figma-md": figmaSpacing.radius.md,
        "figma-lg": figmaSpacing.radius.lg,
        "figma-xl": figmaSpacing.radius.xl,
        "figma-2xl": figmaSpacing.radius["2xl"],
        "figma-full": figmaSpacing.radius.full,
      },
      maxWidth: {
        site: "1280px",
        page: "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
