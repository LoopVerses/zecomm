import Image from "next/image";

const ACCENT_COLORS = {
  "brand-blue": "#1C33BF",
  "green-500": "#22C55E",
  "red-600": "#DC2626",
  "red-400": "#F87171",
  "cyan-500": "#06B6D4",
  "orange-500": "#F97316",
  "purple-600": "#9333EA",
  "gray-400": "#9CA3AF",
  white: "#FFFFFF",
  black: "#000000",
} as const;

export type FigmaPlaceholderAccent = keyof typeof ACCENT_COLORS;

type FigmaImagePlaceholderProps = {
  width: number;
  height: number;
  label?: string;
  figmaNode?: string;
  className?: string;
  accent?: FigmaPlaceholderAccent;
};

function buildPlaceholderDataUri(
  width: number,
  height: number,
  accent: string
): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="#F3F4F6"/>
    <rect x="${width * 0.12}" y="${height * 0.12}" width="${width * 0.76}" height="${height * 0.76}" rx="2" fill="${accent}" fill-opacity="0.18"/>
    <rect x="${width * 0.22}" y="${height * 0.22}" width="${width * 0.56}" height="${height * 0.56}" rx="1" fill="${accent}" fill-opacity="0.42"/>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/** Placeholder for Figma IMAGE-SVG / raster assets — exact dimensions from Figma layout */
export function FigmaImagePlaceholder({
  width,
  height,
  label = "Figma asset",
  figmaNode,
  className = "",
  accent = "brand-blue",
}: FigmaImagePlaceholderProps) {
  const src = buildPlaceholderDataUri(width, height, ACCENT_COLORS[accent]);

  return (
    <span data-figma-node={figmaNode} className={`inline-block shrink-0 ${className}`.trim()}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={label}
        unoptimized
        className="block h-auto max-w-full"
      />
    </span>
  );
}

/** Responsive CTA width — full width on mobile, Figma min-width from sm+ */
export const CTA_RESPONSIVE = "w-full max-w-full sm:w-auto" as const;
