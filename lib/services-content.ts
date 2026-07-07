import type { StoreBrandId } from "@/components/pages/ecom/shared/StoreBrandLogos";
import { HEAD_OFFICE, HEAD_OFFICE_MAPS_URL } from "@/lib/company-info";

export type ServiceGlow = "violet" | "cyan" | "lime" | "red";

export type ServiceOffering = {
  title: string;
  description: string;
  badge: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  href: string;
  glow: ServiceGlow;
};

export const FEATURED_SERVICES = [
  {
    title: "E-Commerce Automation",
    description: "Full marketplace management on Amazon, Shopify, Walmart, Etsy, eBay, and TikTok Shop.",
    href: "/ecom",
    badge: "Most popular",
    glow: "violet" as const,
    accent: "border-brand-blue/20 bg-brand-blue/5 text-brand-blue",
  },
  {
    title: "YouTube Automation",
    description: "Done-for-you channel growth from research and scripting to editing, SEO, and monetization.",
    href: "/youtube",
    badge: "Content",
    glow: "red" as const,
    accent: "border-red-200 bg-red-50 text-red-600",
  },
] as const;

export const ADDITIONAL_SERVICES: ServiceOffering[] = [
  {
    title: "WhatsApp Agent",
    description: "Instant replies, cart recovery, and customer support on WhatsApp with high open rates.",
    badge: "98% open rate",
    icon: "fab fa-whatsapp",
    iconBg: "bg-emerald-500/10 border border-emerald-500/20",
    iconColor: "text-emerald-400",
    href: "/whatsapp",
    glow: "lime",
  },
  {
    title: "Chat Sales Agent",
    description: "On-site AI chat that handles sales questions, objections, and helps visitors buy.",
    badge: "Sales",
    icon: "fas fa-comments",
    iconBg: "bg-accent-violet/10 border border-accent-violet/20",
    iconColor: "text-accent-violet",
    href: "/chat-agent",
    glow: "violet",
  },
  {
    title: "Clone Agent",
    description: "Replicate your best rep's style, memory, and workflow into a consistent AI agent.",
    badge: "99.8% match",
    icon: "fas fa-user-circle",
    iconBg: "bg-accent-violet/10 border border-accent-violet/20",
    iconColor: "text-accent-violet",
    href: "/clone-agent",
    glow: "cyan",
  },
  {
    title: "Market Intel",
    description: "Track competitors, search trends, keyword gaps, and market opportunities in real time.",
    badge: "Research",
    icon: "fas fa-globe",
    iconBg: "bg-accent-cyan/10 border border-accent-cyan/20",
    iconColor: "text-accent-cyan",
    href: "/market-intel",
    glow: "cyan",
  },
  {
    title: "Voice Clone",
    description: "Realistic multi-language AI voice for sales calls, support, and video content.",
    badge: "Audio",
    icon: "fas fa-microphone",
    iconBg: "bg-amber-500/10 border border-amber-500/20",
    iconColor: "text-amber-400",
    href: "/voice-clone",
    glow: "red",
  },
  {
    title: "Email Scanner",
    description: "Sort inbox by intent, rank priority, and auto-draft replies so you respond faster.",
    badge: "Inbox",
    icon: "fas fa-envelope",
    iconBg: "bg-white/5 border border-white/10",
    iconColor: "text-ink-secondary",
    href: "/email",
    glow: "violet",
  },
];

export type PlatformItem = {
  brand: StoreBrandId;
  title: string;
  description: string;
};

export const SERVICE_PLATFORMS: PlatformItem[] = [
  {
    brand: "amazon",
    title: "Amazon",
    description: "Store setup, listing optimization, inventory management, and account health support.",
  },
  {
    brand: "shopify",
    title: "Shopify",
    description: "Custom storefronts, product management, fulfillment workflows, and conversion optimization.",
  },
  {
    brand: "walmart",
    title: "Walmart",
    description: "Marketplace onboarding, catalog management, and operational support for Walmart sellers.",
  },
  {
    brand: "etsy",
    title: "Etsy",
    description: "Shop setup, listing optimization, and order management for handmade and niche products.",
  },
  {
    brand: "ebay",
    title: "eBay",
    description: "Listing management, pricing strategy, and seller performance optimization.",
  },
  {
    brand: "tiktok",
    title: "TikTok Shop",
    description: "Social commerce setup, content-driven sales, and shop management on TikTok.",
  },
];

export const CONTACT_OPTIONS = [
  {
    icon: "fas fa-envelope",
    title: "Email us",
    detail: "hello@zeecom.com",
    href: "mailto:hello@zeecom.com",
    glow: "violet" as const,
  },
  {
    icon: "fab fa-whatsapp",
    title: "WhatsApp",
    detail: "Chat with our team",
    href: "https://wa.me/",
    glow: "lime" as const,
  },
  {
    icon: "fas fa-map-marker-alt",
    title: HEAD_OFFICE.label,
    detail: `${HEAD_OFFICE.street}, ${HEAD_OFFICE.city}, ${HEAD_OFFICE.province} ${HEAD_OFFICE.postalCode}`,
    href: HEAD_OFFICE_MAPS_URL,
    glow: "cyan" as const,
  },
  {
    icon: "fas fa-calendar-check",
    title: "Book a call",
    detail: "Free consultation",
    href: "/services#contact",
    glow: "violet" as const,
  },
] as const;
