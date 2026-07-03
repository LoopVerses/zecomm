export const NAV_LINKS = [
  { label: "HOME", href: "/", id: "01" },
  { label: "ECOM", href: "/ecom", id: "02" },
  { label: "YOUTUBE", href: "/youtube", id: "03" },
  { label: "SERVICES", href: "/services", id: "04" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "E-Commerce", href: "/ecom" },
  { label: "YouTube", href: "/youtube" },
  { label: "All Services", href: "/services" },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/services#contact" },
] as const;
