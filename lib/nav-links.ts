export const NAV_LINKS = [
  { label: "HOME", href: "/", id: "01", title: "Home Page" },
  { label: "ECOM", href: "/ecom", id: "02", title: "Ecommerce Automation" },
  { label: "YOUTUBE", href: "/youtube", id: "03", title: "YouTube Automation" },
  { label: "AI", href: "/services#services-list", id: "04", title: "AI Automation" },
  { label: "SERVICES", href: "/services", id: "05", title: "Services" },
  { label: "CONTACT", href: "/services#contact", id: "06", title: "Contact Us" },
] as const;

export const HERO_NAV_CHIPS = [
  { label: "Home Page", href: "/", icon: "fas fa-home", accent: "text-accent-violet" },
  { label: "Ecommerce Automation", href: "/ecom", icon: "fas fa-store", accent: "text-accent-cyan" },
  { label: "YouTube Automation", href: "/youtube", icon: "fab fa-youtube", accent: "text-red-400" },
  { label: "AI Automation", href: "/services#services-list", icon: "fas fa-bolt", accent: "text-accent-lime" },
  { label: "Services", href: "/services", icon: "fas fa-th-large", accent: "text-accent-violet" },
  { label: "Contact Us", href: "/services#contact", icon: "fas fa-envelope", accent: "text-accent-cyan" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "E-Commerce Automation", href: "/ecom" },
  { label: "YouTube Automation", href: "/youtube" },
  { label: "AI Automation", href: "/services#services-list" },
  { label: "All Services", href: "/services" },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/services#contact" },
] as const;
