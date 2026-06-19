"use client";

import { useEffect, useRef } from "react";

type StarfieldCanvasProps = {
  className?: string;
};

/** Reusable cosmic starfield — used on landing + product heroes */
export function StarfieldCanvas({ className = "" }: StarfieldCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      baseOpacity: number;
      twinkleSpeed: number;
      angle: number;
    }> = [];

    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 850;
      stars = [];
      const starCount = Math.min(120, Math.floor(canvas.width / 12));
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 3 + 1,
          size: Math.random() * 1.6 + 0.4,
          baseOpacity: Math.random() * 0.6 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          angle: Math.random() * Math.PI * 2,
        });
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetParallaxX = (e.clientX - centerX) * 0.05;
      targetParallaxY = (e.clientY - centerY) * 0.05;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.08;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.08;

      stars.forEach((star) => {
        const renderX = (star.x + currentParallaxX / star.z + canvas.width) % canvas.width;
        const renderY = (star.y + currentParallaxY / star.z + canvas.height) % canvas.height;
        star.angle += star.twinkleSpeed;
        const opacity = star.baseOpacity + Math.sin(star.angle) * 0.15;

        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
        if (star.z > 3) {
          ctx.fillStyle = `rgba(96, 165, 250, ${Math.max(0.1, opacity)})`;
        } else if (star.z > 2) {
          ctx.fillStyle = `rgba(129, 140, 248, ${Math.max(0.1, opacity)})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, opacity)})`;
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleGlobalMouseMove);
    handleResize();
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 opacity-90 ${className}`.trim()}
      aria-hidden
    />
  );
}
