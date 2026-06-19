"use client";

import { useEffect, useState } from "react";

export type HeaderSurface = "light" | "dark";

function parseRgb(color: string): [number, number, number] | null {
  const rgb = color.match(/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
  if (!rgb) return null;
  return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
}

function isLightColor(color: string): boolean {
  const rgb = parseRgb(color);
  if (!rgb) return false;
  const [r, g, b] = rgb.map((v) => v / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.55;
}

function isTransparentBg(color: string): boolean {
  return (
    !color ||
    color === "transparent" ||
    color === "rgba(0, 0, 0, 0)" ||
    /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*0\s*\)/.test(color)
  );
}

/**
 * Reads the painted pixel stack under the fixed header.
 * light surface → black menu text | dark surface → white menu text
 */
export function detectHeaderSurface(headerHeight = 80): HeaderSurface {
  if (typeof window === "undefined") return "dark";

  const probeX = Math.floor(window.innerWidth / 2);
  const probeY = Math.floor(headerHeight * 0.55);
  const elements = document.elementsFromPoint(probeX, probeY);

  for (const el of elements) {
    if (el.closest("header")) continue;

    const marked = (el as HTMLElement).closest("[data-header-surface]");
    if (marked) {
      const value = marked.getAttribute("data-header-surface");
      if (value === "light" || value === "dark") return value;
    }

    let node: Element | null = el;
    while (node && node !== document.documentElement) {
      const attr = node.getAttribute?.("data-header-surface");
      if (attr === "light" || attr === "dark") return attr;

      const bg = window.getComputedStyle(node).backgroundColor;
      if (!isTransparentBg(bg)) {
        return isLightColor(bg) ? "light" : "dark";
      }
      node = node.parentElement;
    }
  }

  return "dark";
}

export function useHeaderSurface(headerHeight = 80) {
  const [surface, setSurface] = useState<HeaderSurface>("dark");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      setSurface(detectHeaderSurface(headerHeight));
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [headerHeight]);

  return surface;
}
