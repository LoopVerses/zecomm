"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type CountUpProps = {
  value: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  "data-figma-node"?: string;
};

export function CountUp({
  value,
  from = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  "data-figma-node": figmaNode,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(from);
  const spring = useSpring(motionValue, { duration: 2200, bounce: 0 });
  const formatValue = (n: number) =>
    decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-US");
  const [display, setDisplay] = useState(`${prefix}${formatValue(from)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(`${prefix}${formatValue(latest)}${suffix}`);
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className} data-figma-node={figmaNode}>
      {display}
    </span>
  );
}
