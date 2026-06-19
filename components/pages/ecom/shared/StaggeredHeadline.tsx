"use client";

import { motion } from "framer-motion";

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const wordItem = {
  hidden: {
    opacity: 0,
    y: 56,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

type StaggeredHeadlineProps = {
  lines: { words: { text: string; className?: string }[] }[];
  className?: string;
  "data-figma-node"?: string;
};

export function StaggeredHeadline({
  lines,
  className,
  "data-figma-node": figmaNode,
}: StaggeredHeadlineProps) {
  return (
    <motion.h1
      className={className}
      data-figma-node={figmaNode}
      variants={wordContainer}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block overflow-hidden">
          {line.words.map((word, wordIndex) => (
            <motion.span
              key={`${lineIndex}-${wordIndex}`}
              variants={wordItem}
              className={`inline-block ${word.className ?? ""}`}
            >
              {word.text}
              {wordIndex < line.words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
