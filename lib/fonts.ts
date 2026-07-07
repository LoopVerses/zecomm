import { Inter, Montserrat, Poppins, Syne } from "next/font/google";

/** Expressive display font — kinetic headlines */
export const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

/** Primary UI font — clean readable typography site-wide */
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

/** Legacy body font — kept for components still referencing inter */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

/** Display / heading font — Thin (100) and Black (900) from Figma */
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

/**
 * Consolas is a system monospace font used in Figma code/terminal blocks.
 * Not available via next/font/google — exposed as a CSS variable.
 */
export const consolas = {
  variable: "--font-consolas",
  className: "font-consolas",
} as const;

/**
 * Font Awesome 5 icon fonts — loaded via CSS in globals.css
 * (@fortawesome/fontawesome-free). next/font does not host these families.
 */
export const fontAwesome = {
  free: "var(--font-awesome-free)",
  brands: "var(--font-awesome-brands)",
} as const;

export const fontVariables = [
  poppins.variable,
  inter.variable,
  montserrat.variable,
  consolas.variable,
  syne.variable,
].join(" ");
