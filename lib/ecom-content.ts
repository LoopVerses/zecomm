import type { StoreBrandId } from "@/components/pages/ecom/shared/StoreBrandLogos";

export const ECOM_SERVICES = [
  {
    icon: "fas fa-store",
    title: "Store Setup & Launch",
    description:
      "We set up professional e-commerce stores from scratch based on the selected platform and business model.",
    included: [
      "Marketplace store setup",
      "Account configuration",
      "Store branding support",
      "Product category setup",
      "Policy and backend setup",
      "Platform compliance guidance",
    ],
  },
  {
    icon: "fas fa-search",
    title: "Product Hunting & Research",
    description:
      "Detailed product research based on demand, competition, pricing, profit margins, and platform suitability.",
    included: [
      "Winning product research",
      "Market demand analysis",
      "Competitor analysis",
      "Profit margin calculation",
      "Supplier availability check",
    ],
  },
  {
    icon: "fas fa-shipping-fast",
    title: "Dropshipping Management",
    description:
      "Complete dropshipping store management including sourcing, supplier coordination, and daily operations.",
    included: [
      "Product sourcing",
      "Supplier communication",
      "Listing creation",
      "Order processing",
      "Shipping coordination",
      "Returns and issue handling",
    ],
  },
  {
    icon: "fas fa-file-image",
    title: "Etsy Digital Products",
    description:
      "Etsy stores focused on digital products with niche research, listing optimization, and store management.",
    included: [
      "Digital product niche research",
      "Etsy store setup",
      "SEO optimization",
      "Product upload management",
      "Store maintenance",
    ],
  },
  {
    icon: "fas fa-boxes",
    title: "Wholesale Model",
    description:
      "Wholesale-based operations with verified suppliers, distributors, and brands sold through marketplaces.",
    included: [
      "Supplier research",
      "Wholesale product sourcing",
      "Brand/distributor communication",
      "Buy box optimization",
      "Order management",
    ],
  },
  {
    icon: "fas fa-tag",
    title: "White Label & Private Label",
    description:
      "Long-term brand-based businesses through white label and private label models.",
    included: [
      "Product selection",
      "Supplier and manufacturer coordination",
      "Branding guidance",
      "Packaging support",
      "Marketplace launch strategy",
    ],
  },
  {
    icon: "fas fa-clipboard-check",
    title: "Order Processing & Fulfillment",
    description:
      "Complete order process from order placement to fulfillment and delivery updates.",
    included: [
      "Daily order monitoring",
      "Order confirmation",
      "Supplier order placement",
      "Fulfillment tracking",
      "Delivery issue handling",
    ],
  },
  {
    icon: "fas fa-handshake",
    title: "Supplier Communication",
    description:
      "Communication with suppliers, vendors, wholesalers, and distributors for smooth sourcing.",
    included: [
      "Supplier onboarding",
      "Price negotiation support",
      "Stock availability checks",
      "Order coordination",
      "Product issue resolution",
    ],
  },
  {
    icon: "fas fa-truck",
    title: "Shipping Management",
    description:
      "Shipping coordination and tracking updates to keep store operations smooth and professional.",
    included: [
      "Shipping method coordination",
      "Tracking updates",
      "Delivery monitoring",
      "Late shipment follow-up",
      "Customer update support",
    ],
  },
  {
    icon: "fas fa-chart-line",
    title: "Buy Box Optimization",
    description:
      "Pricing, stock availability, fulfillment speed, and account health to improve store performance.",
    included: [
      "Competitive price monitoring",
      "Listing optimization",
      "Inventory availability checks",
      "Seller account health guidance",
      "Buy box strategy",
    ],
  },
  {
    icon: "fas fa-wallet",
    title: "Payout Handling",
    description:
      "Payout monitoring and marketplace payment management for revenue and disbursement tracking.",
    included: [
      "Payout tracking",
      "Marketplace payment updates",
      "Disbursement monitoring",
      "Sales and revenue reporting",
      "Account finance overview",
    ],
  },
  {
    icon: "fas fa-cogs",
    title: "A-Z Store Management",
    description:
      "Complete end-to-end store management for daily operations required to run a store professionally.",
    included: [
      "Store setup & product hunting",
      "Listing creation & optimization",
      "Supplier & order management",
      "Shipping & payout tracking",
      "Account health monitoring",
    ],
  },
] as const;

export const ECOM_PROCESS_STEPS = [
  {
    step: "1",
    title: "Consultation",
    description: "We understand your goals, budget, preferred platform, and business model.",
  },
  {
    step: "2",
    title: "Platform Selection",
    description:
      "We help identify the most suitable platform based on your investment, documents, and business direction.",
  },
  {
    step: "3",
    title: "Store Setup",
    description: "Our team creates and configures the store professionally.",
  },
  {
    step: "4",
    title: "Product Research",
    description:
      "We research products based on market demand, profit potential, and platform suitability.",
  },
  {
    step: "5",
    title: "Supplier Coordination",
    description:
      "We connect with suppliers, distributors, or vendors depending on the selected model.",
  },
  {
    step: "6",
    title: "Store Launch",
    description: "We upload products, optimize listings, and prepare the store for sales activity.",
  },
  {
    step: "7",
    title: "Management & Scaling",
    description:
      "We manage orders, suppliers, shipping, payouts, and ongoing optimization.",
  },
] as const;

export const ECOM_PLATFORMS: { brand: StoreBrandId; title: string; description: string }[] = [
  {
    brand: "walmart",
    title: "Walmart",
    description:
      "Store setup and management including product research, supplier coordination, listings, order processing, shipping, buy box optimization, and account health support.",
  },
  {
    brand: "tiktok",
    title: "TikTok Shop",
    description:
      "Launch and manage TikTok Shop stores with product sourcing, listing setup, order fulfillment, supplier communication, and store operations.",
  },
  {
    brand: "etsy",
    title: "Etsy",
    description:
      "Digital products, dropshipping, and handmade-style models. Product research, SEO-based listings, uploads, and order management.",
  },
  {
    brand: "ebay",
    title: "eBay",
    description:
      "Store setup and management including product hunting, listing creation, supplier communication, order fulfillment, and optimization.",
  },
  {
    brand: "shopify",
    title: "Shopify",
    description:
      "Brand-based, dropshipping, white label, and private label stores with setup, product uploads, backend configuration, and operational support.",
  },
  {
    brand: "amazon",
    title: "Amazon",
    description:
      "Store setup, wholesale, private label, product research, listing support, order management, and ungating/application support where required.",
  },
];

export const ECOM_BUSINESS_MODELS = [
  "Dropshipping",
  "Digital Products",
  "Wholesale",
  "White Label",
  "Private Label",
  "Marketplace Store Management",
  "Amazon Ungating Support",
  "A-Z E-Commerce Automation",
] as const;

export const ECOM_WHY_CHOOSE = [
  "Complete A-Z e-commerce management",
  "Multiple marketplace expertise",
  "Professional store setup",
  "Product research and supplier handling",
  "Order fulfillment and shipping management",
  "Payout and account monitoring",
  "Buy box and listing optimization",
  "Zero effort required from the client side",
] as const;
