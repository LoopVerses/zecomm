"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { NAV_LINKS } from "@/lib/nav-links";
import { useHeaderSurface, type HeaderSurface } from "@/lib/useHeaderSurface";

const FIGMA_NODE_ID = "7:961";

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
  const textSize = mobile ? "text-sm" : "text-[10px]";
  const idleColor = isLight ? "text-black" : "text-white";

  return (
    <span className={`inline-flex ${textSize} font-poppins font-semibold uppercase tracking-[0.08em]`}>
      {label.split("").map((char, index) => (
        <span
          key={`${label}-${index}`}
          className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[3px] group-hover:text-accent-violet group-focus-visible:-translate-y-[3px] group-focus-visible:text-accent-violet ${
            active ? "text-accent-violet" : idleColor
          }`}
          style={{ transitionDelay: `${index * 18}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function LiveStatusBadge({ surface, compact = false }: { surface: HeaderSurface; compact?: boolean }) {
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

  if (compact) {
    return (
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
    );
  }

  return (
    <motion.div
      className={`group relative hidden shrink-0 items-center gap-2 overflow-hidden rounded-full border px-3 py-1.5 backdrop-blur-md transition-all duration-500 sm:flex ${
        isLight ? "border-black/10 bg-black/[0.04]" : "border-white/20 bg-white/10"
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
      className="group relative flex shrink-0 items-center gap-2.5 sm:gap-3"
      data-figma-node="7:963"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
        <div
          className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border backdrop-blur-md transition-all duration-500 sm:h-10 sm:w-10 ${
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
            className={`relative font-poppins text-lg font-black transition-colors duration-500 sm:text-xl ${
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
            className={`font-poppins text-xs font-bold uppercase tracking-wide transition-colors duration-500 sm:text-base ${
              isLight ? "text-black" : "text-white"
            }`}
            data-figma-node="7:969"
          >
            ZEECOM
          </span>
          <span
            className={`mt-0.5 hidden font-poppins text-[7px] font-medium uppercase tracking-[0.18em] transition-colors duration-500 xs:block sm:text-[8px] sm:tracking-[0.2em] ${
              isLight ? "text-black/45" : "text-white/50"
            }`}
            data-figma-node="7:971"
          >
            AUTOMATIONS
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
  surface,
  onClick,
  mobile = false,
}: {
  href: string;
  label: string;
  active: boolean;
  surface: HeaderSurface;
  onClick?: () => void;
  mobile?: boolean;
}) {
  const isLight = surface === "light";

  if (mobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`flex items-center rounded-xl border px-4 py-3.5 transition-all ${
          active
            ? "border-accent-violet/30 bg-accent-violet/10"
            : isLight
              ? "border-gray-100 bg-gray-50/80 hover:border-accent-violet/20 hover:bg-accent-violet/5"
              : "border-white/10 bg-white/[0.04] hover:border-accent-violet/30 hover:bg-accent-violet/10"
        }`}
        aria-current={active ? "page" : undefined}
      >
        <StaggerNavText label={label} active={active} surface={surface} mobile />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative flex items-center px-3 py-2 transition-colors duration-200"
      aria-current={active ? "page" : undefined}
    >
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-accent-violet transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
      <StaggerNavText label={label} active={active} surface={surface} />
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
      ? "border-b border-black/10 bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
      : "border-b border-white/10 bg-black/40 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
    : "border-b border-transparent bg-transparent";

  const menuBtnClass = menuOpen
    ? "border-accent-violet/40 bg-accent-violet/10"
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
        className={`relative flex items-center justify-between gap-3 transition-all duration-500 sm:gap-4 ${
          scrolled ? "h-16 sm:h-[72px]" : "h-[72px] sm:h-20"
        }`}
        data-figma-node="7:962"
      >
        <Logo surface={surface} />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-5 lg:flex"
          data-figma-node="7:972"
          aria-label="Main navigation"
        >
          <ul className="flex min-w-0 items-center gap-1" data-figma-node="7:973">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="flex shrink-0 items-center">
                <NavLink
                  href={link.href}
                  label={link.label}
                  active={isNavActive(pathname, link.href)}
                  surface={surface}
                />
              </li>
            ))}
          </ul>
          <Link
            href="/services#contact"
            className="hidden shrink-0 rounded-xl bg-accent-violet px-4 py-2 font-poppins text-[11px] font-semibold text-white shadow-glow transition-all hover:scale-[1.02] sm:inline-flex"
          >
            Contact
          </Link>
          <LiveStatusBadge surface={surface} />
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:hidden">
          <LiveStatusBadge surface={surface} compact />
          <motion.button
            type="button"
            className={`relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border backdrop-blur-md transition-all duration-500 ${menuBtnClass}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            whileTap={{ scale: 0.92 }}
          >
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45 bg-accent-violet" : menuLineClass
              }`}
            />
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${
                menuOpen ? "opacity-0" : menuLineClass
              }`}
            />
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45 bg-accent-violet" : menuLineClass
              }`}
            />
          </motion.button>
        </div>
      </SiteContainer>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 top-[72px] z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              id="mobile-nav"
              className={`fixed inset-x-0 top-[72px] z-50 max-h-[calc(100dvh-72px)] overflow-y-auto border-b backdrop-blur-2xl lg:hidden ${
                isLight ? "border-black/10 bg-white/98" : "border-white/10 bg-[#04040a]/98"
              }`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="px-4 py-5 sm:px-6">
                <p
                  className={`mb-3 font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] ${
                    isLight ? "text-black/35" : "text-white/35"
                  }`}
                >
                  Navigation
                </p>

                <ul className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.25 }}
                    >
                      <NavLink
                        href={link.href}
                        label={link.label}
                        active={isNavActive(pathname, link.href)}
                        surface={surface}
                        onClick={() => setMenuOpen(false)}
                        mobile
                      />
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-2.5 border-t border-black/5 pt-5 dark:border-white/10">
                  <Link
                    href="/services#contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-accent-violet font-poppins text-sm font-semibold text-white transition-colors hover:bg-accent-violet/90"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setMenuOpen(false)}
                    className={`inline-flex h-11 items-center justify-center rounded-xl border font-poppins text-sm font-semibold transition-colors ${
                      isLight
                        ? "border-gray-200 bg-white text-gray-700 hover:border-accent-violet/30 hover:text-accent-violet"
                        : "border-white/15 bg-white/5 text-white hover:border-accent-violet/40"
                    }`}
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export { FIGMA_NODE_ID as HEADER_FIGMA_NODE_ID };
