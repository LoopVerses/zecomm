"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { useHeaderSurface, type HeaderSurface } from "@/lib/useHeaderSurface";

/** Figma node 7:961 — Header */
const FIGMA_NODE_ID = "7:961";

const NAV_LINKS = [
  { label: "HOME", href: "/", figmaNode: "7:975", id: "01" },
  { label: "ECOM", href: "/ecom", figmaNode: "7:976", id: "02" },
  { label: "WHATSAPP", href: "/whatsapp", figmaNode: "7:977", id: "03" },
  { label: "YOUTUBE", href: "/youtube", figmaNode: "7:978", id: "04" },
  { label: "CHAT AGENT", href: "/chat-agent", figmaNode: "7:979", id: "05" },
  { label: "CLONE AGENT", href: "/clone-agent", figmaNode: "7:980", id: "06" },
  { label: "MARKET INTEL", href: "/market-intel", figmaNode: "7:981", id: "07" },
  { label: "VOICE CLONE", href: "/voice-clone", figmaNode: "7:982", id: "08" },
  { label: "EMAIL", href: "/email", figmaNode: "7:983", id: "09" },
] as const;

function isNavActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function StaggerNavText({
  label,
  active,
  surface,
  mobile = false,
}: {
  label: string;
  active: boolean;
  surface: HeaderSurface;
  mobile?: boolean;
}) {
  const isLight = surface === "light";
  const textSize = mobile ? "text-[12px]" : "text-[10px]";
  const idleColor = isLight ? "text-black" : "text-white";

  return (
    <span className={`inline-flex ${textSize} font-poppins font-semibold uppercase tracking-[0.08em]`}>
      {label.split("").map((char, index) => (
        <span
          key={`${label}-${index}`}
          className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[3px] group-hover:text-brand-blue group-focus-visible:-translate-y-[3px] group-focus-visible:text-brand-blue ${
            active ? "text-brand-blue" : idleColor
          }`}
          style={{ transitionDelay: `${index * 18}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function LiveStatusBadge({ surface }: { surface: HeaderSurface }) {
  const [time, setTime] = useState("00:00:00");
  const isLight = surface === "light";

  useEffect(() => {
    const format = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    format();
    const id = setInterval(format, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className={`group relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full border px-3 py-1.5 backdrop-blur-md transition-all duration-500 ${
        isLight
          ? "border-black/10 bg-black/[0.04]"
          : "border-white/20 bg-white/10"
      }`}
      data-figma-node="7:984"
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.2 }}
    >
      <span className="relative flex h-1.5 w-1.5" data-figma-node="7:985" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
      </span>
      <span
        className={`relative font-poppins text-[10px] font-semibold tabular-nums tracking-wide transition-colors duration-500 ${
          isLight ? "text-black" : "text-white"
        }`}
        data-figma-node="7:986"
      >
        {time}
      </span>
    </motion.div>
  );
}

function Logo({ surface, compact = false }: { surface: HeaderSurface; compact?: boolean }) {
  const isLight = surface === "light";

  return (
    <Link
      href="/"
      className="group relative flex shrink-0 items-center gap-3"
      data-figma-node="7:963"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
        <div
          className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border backdrop-blur-md transition-all duration-500 ${
            isLight
              ? "border-black/10 bg-black/[0.04] group-hover:border-black/20"
              : "border-white/20 bg-white/10 group-hover:border-white/40 group-hover:bg-white/20"
          }`}
          data-figma-node="7:964"
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-60 ${
              isLight ? "from-black/10" : "from-white/25"
            }`}
          />
          <span
            className={`relative font-poppins text-xl font-black transition-colors duration-500 ${
              isLight ? "text-black" : "text-white"
            }`}
            data-figma-node="7:966"
          >
            Z
          </span>
        </div>
      </motion.div>

      {!compact && (
        <div className="flex flex-col" data-figma-node="7:967">
          <span
            className={`font-poppins text-sm font-bold uppercase tracking-wide transition-colors duration-500 sm:text-base ${
              isLight ? "text-black" : "text-white"
            }`}
            data-figma-node="7:969"
          >
            ZEECOM
          </span>
          <span
            className={`mt-0.5 font-poppins text-[8px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
              isLight ? "text-black/45" : "text-white/50"
            }`}
            data-figma-node="7:971"
          >
            SOLUTIONS
          </span>
        </div>
      )}
    </Link>
  );
}

function NavLink({
  href,
  label,
  active,
  figmaNode,
  id,
  surface,
  onClick,
  mobile = false,
}: {
  href: string;
  label: string;
  active: boolean;
  figmaNode: string;
  id: string;
  surface: HeaderSurface;
  onClick?: () => void;
  mobile?: boolean;
}) {
  const isLight = surface === "light";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative flex items-center px-2 py-2 transition-colors duration-500 ${
        mobile ? "w-full px-4 py-3" : ""
      }`}
      data-figma-node={figmaNode}
      aria-current={active ? "page" : undefined}
    >
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-brand-blue transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />

      <div className="relative z-10 flex flex-col gap-0.5">
        <span
          className={`font-poppins text-[7px] font-medium tracking-widest transition-colors duration-500 group-hover:text-brand-blue/80 ${
            isLight ? "text-black/35" : "text-white/35"
          }`}
        >
          {id}
        </span>
        <StaggerNavText label={label} active={active} surface={surface} mobile={mobile} />
      </div>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const surface = useHeaderSurface(80);
  const isLight = surface === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerBarClass = scrolled
    ? isLight
      ? "border-b border-black/10 bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
      : "border-b border-white/10 bg-black/30 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
    : "border-b border-transparent bg-transparent";

  const menuBtnClass = menuOpen
    ? "border-brand-blue/40 bg-brand-blue/10"
    : isLight
      ? "border-black/10 bg-black/[0.04]"
      : "border-white/15 bg-white/10";

  const menuLineClass = isLight ? "bg-black" : "bg-white";

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${headerBarClass}`}
      data-figma-node={FIGMA_NODE_ID}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <SiteContainer
        className={`relative flex items-center justify-between gap-4 transition-all duration-500 ${
          scrolled ? "h-16 sm:h-[72px]" : "h-[72px] sm:h-20"
        }`}
        data-figma-node="7:962"
      >
        <Logo surface={surface} />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-4 lg:flex"
          data-figma-node="7:972"
          aria-label="Main navigation"
        >
          <ul
            className="flex min-w-0 items-center gap-1.5 overflow-x-auto"
            data-figma-node="7:973"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="flex shrink-0 items-center">
                <NavLink
                  href={link.href}
                  label={link.label}
                  active={isNavActive(pathname, link.href)}
                  figmaNode={link.figmaNode}
                  id={link.id}
                  surface={surface}
                />
              </li>
            ))}
          </ul>
          <LiveStatusBadge surface={surface} />
        </nav>

        <div className="flex shrink-0 items-center gap-3 lg:hidden">
          <LiveStatusBadge surface={surface} />
          <motion.button
            type="button"
            className={`relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border backdrop-blur-md transition-all duration-500 ${menuBtnClass}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            whileTap={{ scale: 0.92 }}
          >
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45 bg-brand-blue" : menuLineClass
              }`}
            />
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${
                menuOpen ? "opacity-0" : menuLineClass
              }`}
            />
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45 bg-brand-blue" : menuLineClass
              }`}
            />
          </motion.button>
        </div>
      </SiteContainer>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            className={`absolute left-0 top-full w-full overflow-hidden border-b backdrop-blur-2xl lg:hidden ${
              isLight
                ? "border-black/10 bg-white/95"
                : "border-white/10 bg-[#04040a]/95"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <ul className="flex flex-col gap-1.5 px-4 py-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.035, duration: 0.28 }}
                >
                  <NavLink
                    href={link.href}
                    label={link.label}
                    active={isNavActive(pathname, link.href)}
                    figmaNode={link.figmaNode}
                    id={link.id}
                    surface={surface}
                    onClick={() => setMenuOpen(false)}
                    mobile
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export { FIGMA_NODE_ID as HEADER_FIGMA_NODE_ID };
