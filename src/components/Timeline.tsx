import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const Timeline: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.16, 1, 0.3, 1];

  const milestones = [
    {
      year: '2021',
      category: 'Inception & Financial Logistics',
      title: 'Foundation & Enterprise Supply Chain',
      content: (
        <>
          Founded Feyntech Optimization Solutions. Formed algorithmic research partnership with <strong className="text-[#0c161d] font-semibold">JP Morgan Chase</strong>. Successfully formulated and deployed an end-to-end multi-echelon supply chain model for a major global meat processing producer.
        </>
      ),
    },
    {
      year: '2022',
      category: 'Solvers & Resource Systems',
      title: 'Gurobi Partnership & Infrastructure',
      content: (
        <>
          Formed strategic commercial alliance with <strong className="text-[#0c161d] font-semibold">Gurobi Optimization</strong> (premier mathematical solver). Architected digital commerce infrastructure for shakehands.com and engineered municipal water resource treatment models in collaboration with <strong className="text-[#0c161d] font-semibold">Business Modelling Associates, UK</strong>.
        </>
      ),
    },
    {
      year: '2023',
      category: 'Aviation & Gate Operations',
      title: 'Airline Fleet & Terminal Assignment',
      content: (
        <>
          Engineered and delivered the Airline Gate Assignment Model for <strong className="text-[#0c161d] font-semibold">optym.com</strong>, serving a tier-1 commercial airline to dynamically resolve airport gate conflicts, turn-around times, and tarmac operational delays.
        </>
      ),
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative border-b border-[#e2e8f0]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-3 text-[0.76rem] font-bold tracking-[0.14em] text-[#0284c7] uppercase">
            <span>ABOUT FEYNTECH</span>
            <span className="w-11 h-[1.5px] bg-[#38a8ff] inline-block" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0c161d] leading-tight">
            Our <em className="serif-accent">Journey</em>
          </h2>
          <div className="max-w-[500px]">
            <p className="text-[#526374] text-[0.96rem] leading-relaxed">
              Feyntech Optimization Solutions is a dedicated practice of researchers, mathematical modelers, and systems engineers delivering deterministic answers to non-trivial operational challenges.
            </p>
          </div>
        </div>

        {/* Timeline Component */}
        <div className="relative pt-4 sm:pt-6 pb-8 sm:pb-12">
          
          {/* Desktop Animated Line in Logo Steel Blue */}
          <div className="hidden md:block absolute top-[44px] left-[6%] right-[6%] h-[2px] bg-[#e2e8f0]" aria-hidden="true">
            <motion.div
              initial={shouldReduceMotion ? { width: '100%' } : { width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: easeCurve }}
              className="h-full bg-gradient-to-r from-[#38a8ff] to-[#70bfff]"
            />
          </div>

          {/* Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 relative z-10 pl-7 md:pl-0 border-l-2 border-[#38a8ff] md:border-l-0">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.12, ease: easeCurve }}
                className="relative md:px-4"
              >
                {/* Year Header and Marker */}
                <div className="flex md:flex-col items-start gap-2 md:gap-3 mb-3">
                  <span className="font-mono text-[0.72rem] tracking-wider uppercase font-semibold text-[#0284c7]">
                    {m.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-[#0c161d] tracking-tight">{m.year}</span>
                    <motion.div 
                      initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.2 + idx * 0.12, ease: easeCurve }}
                      className="w-3.5 h-3.5 rounded-full bg-white border-[3px] border-[#38a8ff] shadow-sm md:block absolute -left-[36px] md:static" 
                    />
                  </div>
                </div>
                
                <h4 className="text-base font-bold text-[#0c161d] mb-2 tracking-tight">
                  {m.title}
                </h4>

                <p className="text-[#526374] text-sm leading-relaxed">
                  {m.content}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Signature Optimization Path Dynamic Graphic (Planning -> Optimization -> Execution) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeCurve }}
          className="mt-8 sm:mt-12 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 sm:p-8 relative overflow-hidden shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6">
            <div>
              <span className="text-[0.7rem] sm:text-xs font-bold tracking-widest text-[#0284c7] uppercase block">
                Signature Dynamic: Transformation of Operational Data into Decisions
              </span>
              <span className="text-[0.72rem] sm:text-xs text-[#526374]">
                The sequential lifecycle from multi-variable constraints through deterministic optimization to execution
              </span>
            </div>
            <span className="font-mono text-[0.68rem] sm:text-[0.72rem] text-[#0284c7] self-start sm:self-auto bg-[#f0f8ff] px-3 py-1 rounded-full border border-[#bae6fd] font-medium">
              3-Stage Pipeline
            </span>
          </div>

          {/* SVG Vector Path with 3 Clear Stages: Planning, Optimization, Execution */}
          <div className="w-full h-20 sm:h-24 overflow-hidden flex items-center relative" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 1000 90" fill="none" preserveAspectRatio="none">
              {/* Baseline Reference Axis */}
              <line x1="40" y1="45" x2="960" y2="45" stroke="rgba(56, 168, 255, 0.18)" strokeDasharray="4 6" />
              
              {/* Progressive Solved Trajectory */}
              <motion.path
                d="M 60 45 C 180 12, 280 78, 500 45 C 680 15, 820 60, 940 45"
                stroke="url(#signatureBlueGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: easeCurve }}
              />
              
              {/* Stage 1: Planning Node */}
              <circle cx="60" cy="45" r="5" fill="#0c161d" stroke="#38a8ff" strokeWidth="2" />
              
              {/* Stage 2: Optimization Node */}
              <circle cx="500" cy="45" r="5" fill="#38a8ff" stroke="#ffffff" strokeWidth="2" />
              
              {/* Stage 3: Execution Node */}
              <circle cx="940" cy="45" r="6" fill="#70bfff" stroke="#ffffff" strokeWidth="2.5" />

              <defs>
                <linearGradient id="signatureBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38a8ff" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#70bfff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#38a8ff" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Node Stage Annotations */}
          <div className="grid grid-cols-3 text-xs pt-2 border-t border-[#e2e8f0] gap-2">
            <div>
              <span className="font-bold text-[#0c161d] block text-[0.72rem] sm:text-xs">1. Planning</span>
              <span className="text-[#526374] text-[0.62rem] sm:text-[0.72rem] leading-tight block">Constraints & Modeling</span>
            </div>
            <div className="text-center">
              <span className="font-bold text-[#0284c7] block text-[0.72rem] sm:text-xs">2. Optimization</span>
              <span className="text-[#526374] text-[0.62rem] sm:text-[0.72rem] leading-tight block">MILP & Solvers</span>
            </div>
            <div className="text-right">
              <span className="font-bold text-[#0c161d] block text-[0.72rem] sm:text-xs">3. Execution</span>
              <span className="text-[#526374] text-[0.62rem] sm:text-[0.72rem] leading-tight block">Deterministic Strategy</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
