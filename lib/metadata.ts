import type { Metadata } from "next";

export const SITE_NAME = "Zeecom";

export const PAGE_METADATA = {
  home: {
    title: "Zeecomm AI Platform",
    description:
      "AI tools for e-commerce, WhatsApp, email, YouTube, and more. Automate sales, support, and content from one place.",
  },
  ecom: {
    title: "Zero Effort E-Commerce",
    description:
      "Complete A-Z e-commerce automation and marketplace management on Walmart, TikTok Shop, Etsy, eBay, Shopify, and Amazon.",
  },
  whatsapp: {
    title: "WhatsApp Agent",
    description:
      "WhatsApp recovery and support with high open rates. Automate cart recovery and customer conversations.",
  },
  youtube: {
    title: "YouTube Automation",
    description:
      "Content scheduling, script help, editing workflows, and YouTube SEO tools for growing channels.",
  },
  chatAgent: {
    title: "Chat Sales Agent",
    description:
      "On-site AI chat for sales questions, objection handling, and helping visitors buy.",
  },
  cloneAgent: {
    title: "Clone Agent",
    description:
      "Capture your best rep's style and knowledge for use across WhatsApp, email, and site chat.",
  },
  marketIntel: {
    title: "Market Intel",
    description:
      "Track competitor prices, trends, and keyword gaps with real-time market research.",
  },
  voiceClone: {
    title: "Voice Clone",
    description:
      "Realistic AI voice in 50+ languages. Voice cloning and text-to-speech for calls and video.",
  },
  email: {
    title: "Email Scanner",
    description:
      "Sort inbox by intent, rank priority, and auto-draft replies so you respond faster.",
  },
} as const;

export type PageMetadataKey = keyof typeof PAGE_METADATA;

export function createPageMetadata(key: PageMetadataKey): Metadata {
  const { title, description } = PAGE_METADATA[key];

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
