export function ParchmentAmbient() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(124,58,237,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(194,65,12,0.04) 0%, transparent 50%)",
      }}
      aria-hidden
    />
  );
}
