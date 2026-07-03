import type { StoreBrandId } from "@/components/pages/ecom/shared/StoreBrandLogos";

export type ServiceOffering = {
  title: string;
  description: string;
  badge: string;
  icon: string;
  iconBg: string;
  iconColor: string;
};

export const FEATURED_SERVICES = [
  {
    title: "E-Commerce Automation",
    description: "Full marketplace management on Amazon, Shopify, Walmart, Etsy, eBay, and TikTok Shop.",
    href: "/ecom",
    badge: "Most popular",
    accent: "border-brand-blue/20 bg-brand-blue/5 text-brand-blue",
  },
  {
    title: "YouTube Automation",
    description: "Done-for-you channel growth from research and scripting to editing, SEO, and monetization.",
    href: "/youtube",
    badge: "Content",
    accent: "border-red-200 bg-red-50 text-red-600",
  },
] as const;

export const ADDITIONAL_SERVICES: ServiceOffering[] = [
  {
    title: "WhatsApp Agent",
    description: "Instant replies, cart recovery, and customer support on WhatsApp with high open rates.",
    badge: "98% open rate",
    icon: "fab fa-whatsapp",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Chat Sales Agent",
    description: "On-site AI chat that handles sales questions, objections, and helps visitors buy.",
    badge: "Sales",
    icon: "fas fa-comments",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Clone Agent",
    description: "Replicate your best rep's style, memory, and workflow into a consistent AI agent.",
    badge: "99.8% match",
    icon: "fas fa-user-circle",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Market Intel",
    description: "Track competitors, search trends, keyword gaps, and market opportunities in real time.",
    badge: "Research",
    icon: "fas fa-globe",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    title: "Voice Clone",
    description: "Realistic multi-language AI voice for sales calls, support, and video content.",
    badge: "Audio",
    icon: "fas fa-microphone",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Email Scanner",
    description: "Sort inbox by intent, rank priority, and auto-draft replies so you respond faster.",
    badge: "Inbox",
    icon: "fas fa-envelope",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
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
  },
  {
    icon: "fab fa-whatsapp",
    title: "WhatsApp",
    detail: "Chat with our team",
    href: "https://wa.me/",
  },
  {
    icon: "fas fa-calendar-check",
    title: "Book a call",
    detail: "Free consultation",
    href: "/services#contact",
  },
] as const;
