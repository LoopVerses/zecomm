export const NAV_LINKS = [
  { label: "HOME", href: "/", id: "01", title: "Home Page" },
  { label: "ECOM", href: "/ecom", id: "02", title: "Ecommerce Automation" },
  { label: "YOUTUBE", href: "/youtube", id: "03", title: "YouTube Automation" },
  { label: "SERVICES", href: "/services", id: "04", title: "Services" },
  { label: "CONTACT", href: "/contact", id: "05", title: "Contact Us" },
] as const;

export function isNavLinkActive(pathname: string, href: string) {
  const hashIndex = href.indexOf("#");
  const basePath = hashIndex === -1 ? href : href.slice(0, hashIndex) || "/";

  if (basePath === "/") {
    return pathname === "/";
  }

  return pathname === basePath || pathname.startsWith(`${basePath}/`);
}

export const HERO_NAV_CHIPS = [
  { label: "Home Page", href: "/", icon: "fas fa-home", accent: "text-accent-violet" },
  { label: "Ecommerce Automation", href: "/ecom", icon: "fas fa-store", accent: "text-accent-cyan" },
  { label: "YouTube Automation", href: "/youtube", icon: "fab fa-youtube", accent: "text-red-400" },
  { label: "Services", href: "/services", icon: "fas fa-th-large", accent: "text-accent-violet" },
  { label: "Contact Us", href: "/contact", icon: "fas fa-envelope", accent: "text-accent-cyan" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "E-Commerce Automation", href: "/ecom" },
  { label: "YouTube Automation", href: "/youtube" },
  { label: "All Services", href: "/services" },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact" },
] as const;
