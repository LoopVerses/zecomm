"use client";

type WaveformAnimationProps = {
  className?: string;
  barCount?: number;
  variant?: "hero" | "visualizer";
};

const BAR_HEIGHTS = [
  0.35, 0.55, 0.75, 0.45, 0.9, 0.6, 0.8, 0.5, 0.95, 0.65, 0.85, 0.4, 0.7, 0.55, 0.88,
  0.48, 0.72, 0.58, 0.92, 0.42, 0.68, 0.78, 0.52, 0.82, 0.62, 0.86, 0.46, 0.74, 0.56, 0.84,
];

export default function WaveformAnimation({
  className = "",
  barCount = 28,
  variant = "hero",
}: WaveformAnimationProps) {
  const maxHeight = variant === "hero" ? 72 : 48;
  const barWidth = variant === "hero" ? 4 : 3;
  const gap = variant === "hero" ? 3 : 2;

  return (
    <svg
      className={className}
      role="img"
      aria-label="Audio waveform visualization"
      viewBox={`0 0 ${barCount * (barWidth + gap)} ${maxHeight}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {Array.from({ length: barCount }).map((_, index) => {
        const heightRatio = BAR_HEIGHTS[index % BAR_HEIGHTS.length];
        const barHeight = Math.round(maxHeight * heightRatio);
        const x = index * (barWidth + gap);
        const y = (maxHeight - barHeight) / 2;

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={barWidth}
            height={barHeight}
            rx={barWidth / 2}
            className="fill-brand-blue"
            style={{
              transformOrigin: `${x + barWidth / 2}px ${maxHeight / 2}px`,
              animation: `voice-clone-wave ${0.55 + (index % 7) * 0.12}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.04}s`,
            }}
          />
        );
      })}
    </svg>
  );
}
