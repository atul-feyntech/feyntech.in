import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NetworkParticlesCanvas } from './NetworkParticlesCanvas';

// Counter component for statistics count-up animation
const AnimatedCount: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 0.8,
}) => {
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    let start = 0;
    const end = target;
    const totalFrames = Math.round((duration * 1000) / 16);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const current = Math.round(start + (end - start) * (1 - Math.pow(1 - progress, 3)));
      setCount(current);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, shouldReduceMotion]);

  return <span>{count}{suffix}</span>;
};

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Consistent easing curve for smooth corporate feel
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 relative overflow-hidden bg-white">
      {/* 1. Optimization Engineering Professional Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-right lg:bg-center opacity-90"
        style={{
          backgroundImage: `url('/feyntech-hero-bg.jpg')`,
        }}
        aria-hidden="true"
      />

      {/* 2. Soft Edge Gradient Fades for Seamless Section Transition */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-transparent to-white/90" aria-hidden="true" />

      {/* 3. Precision Technical Subtle Coordinates */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#38a8ff 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
        aria-hidden="true"
      />

      {/* 4. Interactive Cursor-Following Optimization Network Particles */}
      <NetworkParticlesCanvas />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* 1. Section Tag */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: easeCurve }}
              className="inline-flex items-center gap-3 text-[0.72rem] sm:text-[0.76rem] font-bold tracking-[0.14em] text-[#0284c7] uppercase mb-4"
            >
              <span>ADVANCED OPTIMIZATION SOLUTIONS</span>
              <span className="w-11 h-[1.5px] bg-[#38a8ff] inline-block" />
            </motion.div>

            {/* 2. Main Headline: Line-by-Line Clipping Mask Reveal */}
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.75rem] font-bold tracking-[-0.03em] text-[#0c161d] leading-[1.12] sm:leading-[1.08] mb-6">
              {/* Line 1 */}
              <span className="block overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? { y: 0 } : { y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12, ease: easeCurve }}
                  className="block"
                >
                  Optimize
                </motion.span>
              </span>

              {/* Line 2 */}
              <span className="block overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? { y: 0 } : { y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.22, ease: easeCurve }}
                  className="block"
                >
                  Your Business
                </motion.span>
              </span>

              {/* Line 3 */}
              <span className="block overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? { y: 0 } : { y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.32, ease: easeCurve }}
                  className="block"
                >
                  with <em className="serif-accent">Feyntech</em>
                </motion.span>
              </span>
            </h1>

            {/* 3. Supporting Text */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.42, ease: easeCurve }}
              className="text-[#526374] text-base sm:text-lg leading-relaxed max-w-[500px] mb-8 sm:mb-9"
            >
              We leverage cutting-edge technology and operational research models to enhance business efficiency and performance across various domains.
            </motion.p>

            {/* 4. Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.52, ease: easeCurve }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10 sm:mb-14"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#38a8ff] text-white text-[0.95rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#0284c7] transition-all shadow-md shadow-[#38a8ff]/30 hover:shadow-lg hover:shadow-[#38a8ff]/40 group focus-visible:ring-2 focus-visible:ring-[#38a8ff]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#0284c7] border border-[#38a8ff]/50 hover:bg-[#38a8ff] hover:text-white hover:border-[#38a8ff] text-[0.95rem] font-semibold px-7 py-3.5 rounded-md transition-all shadow-sm hover:shadow-md hover:shadow-[#38a8ff]/20"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* 5. Statistics with Count-Up Animation */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.62, ease: easeCurve }}
              className="grid grid-cols-3 gap-2 sm:gap-8 lg:gap-12 pt-6 sm:pt-8 border-t border-[#e2e8f0]"
            >
              <div className="text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-bold text-[#0c161d] tracking-tight">
                  <AnimatedCount target={3} suffix="+" duration={0.6} />
                </span>
                <span className="text-[0.7rem] sm:text-sm font-medium text-[#526374] mt-0.5 sm:mt-1 block leading-tight">Years of Impact</span>
              </div>
              <div className="text-center sm:text-left border-l border-r border-[#e2e8f0] px-1 sm:border-0 sm:px-0">
                <span className="block text-2xl sm:text-3xl font-bold text-[#0c161d] tracking-tight">
                  <AnimatedCount target={10} suffix="+" duration={0.8} />
                </span>
                <span className="text-[0.7rem] sm:text-sm font-medium text-[#526374] mt-0.5 sm:mt-1 block leading-tight">Industry Domains</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-xl sm:text-3xl font-bold text-[#0c161d] tracking-tight whitespace-nowrap">Real World</span>
                <span className="text-[0.7rem] sm:text-sm font-medium text-[#526374] mt-0.5 sm:mt-1 block leading-tight">Business Solutions</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Visual Card with Smooth Controlled Mask Transition */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, clipPath: 'inset(10% 0% 10% 0% round 12px)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 12px)' }}
            transition={{ duration: 0.85, delay: 0.3, ease: easeCurve }}
            className="lg:col-span-5 relative rounded-xl overflow-hidden shadow-2xl bg-[#080d12] min-h-[380px] sm:min-h-[480px] lg:min-h-[530px] group flex flex-col justify-between border border-[#1e2e3d]"
          >
            {/* Background Architectural Crop */}
            <img
              src="/hero-architecture.jpg"
              alt="Feyntech Modern Architectural Perspectives"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-80"
              loading="eager"
            />
            
            {/* Ambient Dark Gradient for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d12]/95 via-[#080d12]/35 to-[#080d12]/75" />

            {/* Top Right Architectural Tag */}
            <div className="relative z-10 p-5 sm:p-7 text-right text-[0.7rem] sm:text-[0.72rem] font-bold tracking-[0.16em] text-white/90 leading-relaxed drop-shadow select-none pointer-events-none">
              DATA<br />MODELS<br />PEOPLE<br />REAL IMPACT
            </div>

            {/* Purposeful Mathematical Network Optimization Graphic */}
            <div className="relative z-10 px-4 sm:px-7 py-3.5 sm:py-4">
              <div className="bg-[#0b141d]/90 backdrop-blur-md border border-[#38a8ff]/40 rounded-lg p-3 sm:p-3.5 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#38a8ff] shadow-sm shadow-[#38a8ff]" />
                    <span className="font-mono text-[0.65rem] sm:text-[0.68rem] tracking-wider text-[#70bfff] uppercase font-semibold">
                      Topology: Operational Min-Cost Flow
                    </span>
                  </div>
                  <span className="font-mono text-[0.62rem] sm:text-[0.65rem] text-[#70bfff] font-semibold bg-[#38a8ff]/20 px-2 py-0.5 rounded border border-[#38a8ff]/40">
                    Gap: 0.00%
                  </span>
                </div>
                
                {/* Mathematical Network Topology Vector */}
                <svg viewBox="0 0 280 90" className="w-full h-18" fill="none">
                  {/* Compass / Construction Crosshair Arc inspired by logo */}
                  <circle cx="30" cy="45" r="40" stroke="rgba(56, 168, 255, 0.25)" strokeWidth="1" strokeDasharray="2 3" />
                  <line x1="30" y1="5" x2="30" y2="85" stroke="rgba(56, 168, 255, 0.2)" strokeWidth="1" />

                  {/* Edges */}
                  <line x1="30" y1="45" x2="90" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="30" y1="45" x2="90" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="90" y1="25" x2="160" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="90" y1="65" x2="160" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="160" y1="45" x2="230" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="160" y1="45" x2="230" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Optimal Solved Path in Electric Blue */}
                  <motion.path
                    d="M 30 45 L 90 65 L 160 45 L 230 30"
                    stroke="#38a8ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: easeCurve }}
                  />

                  {/* Nodes */}
                  <circle cx="30" cy="45" r="5" fill="#0c161d" stroke="#38a8ff" strokeWidth="2" />
                  <circle cx="90" cy="25" r="4" fill="#0c161d" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                  <circle cx="90" cy="65" r="5" fill="#38a8ff" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="160" cy="45" r="5" fill="#38a8ff" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="230" cy="30" r="5.5" fill="#70bfff" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="230" cy="65" r="4" fill="#0c161d" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Bottom Right Architectural Tag */}
            <div className="relative z-10 p-7 text-right text-[0.76rem] font-bold tracking-[0.14em] text-white/90 leading-normal drop-shadow select-none pointer-events-none">
              COMPLEX PROBLEMS.<br />SIMPLER OUTCOMES.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
