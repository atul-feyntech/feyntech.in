import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  isHub: boolean;
}

export const NetworkParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 800);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle Resize
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Initialize Particles for Autonomous Loop
    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      // Optimal density for smooth visual presence
      const particleCount = width < 768 ? 26 : width < 1200 ? 42 : 58;

      for (let i = 0; i < particleCount; i++) {
        const isHub = i % 4 === 0;

        // Fast dynamic drift velocity (+50% test level)
        const speed = Math.random() * 0.90 + 0.52;
        const angle = Math.random() * Math.PI * 2;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: isHub ? Math.random() * 1.5 + 3.0 : Math.random() * 1.2 + 2.0,
          baseAlpha: isHub ? 0.92 : 0.58,
          isHub,
        });
      }
    };

    initParticles();

    // Render Loop (Continuous autonomous motion)
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Logo Electric Blue Palette Tokens
      const strokeColor = 'rgba(56, 168, 255, ';
      const highlightColor = 'rgba(112, 191, 255, ';

      // 1. Update & Draw Particles in continuous loop
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Autonomous smooth floating motion
          p.x += p.vx;
          p.y += p.vy;

          // Seamless screen wrap-around loop
          const margin = 20;
          if (p.x < -margin) p.x = width + margin;
          if (p.x > width + margin) p.x = -margin;
          if (p.y < -margin) p.y = height + margin;
          if (p.y > height + margin) p.y = -margin;
        }

        // Draw Inter-Particle Connecting Network Lines based on proximity
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p2.x - p.x, p2.y - p.y);
          const maxDist = 140;

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.32;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${strokeColor}${lineAlpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }

        // Draw Node Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isHub
          ? `${strokeColor}${p.baseAlpha})`
          : `${highlightColor}${p.baseAlpha})`;
        ctx.fill();

        // Draw Outer Subtle Halo for Hub Nodes
        if (p.isHub) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius + 4, 0, Math.PI * 2);
          ctx.strokeStyle = `${highlightColor}0.35)`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[2] w-full h-full"
      aria-hidden="true"
    />
  );
};
