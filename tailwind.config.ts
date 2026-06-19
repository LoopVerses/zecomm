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
        site: "1280px",
      },
      colors: {
        ...colorTokens,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
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
