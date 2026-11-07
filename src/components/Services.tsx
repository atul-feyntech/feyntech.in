import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  tag: string;
  diagram: (reduceMotion: boolean) => React.ReactNode;
  contactSubject: string;
}

export const Services: React.FC = () => {
  const shouldReduceMotion = !!useReducedMotion();
  const easeCurve = [0.16, 1, 0.3, 1];

  const services: ServiceItem[] = [
    {
      title: 'Supply Chain Management',
      tag: 'Multi-Echelon Network Flow',
      description: 'Optimize end-to-end supply chain logistics, inventory positioning, and multi-tier distribution networks for minimum cost and maximum fulfillment throughput.',
      contactSubject: 'Supply%20Chain%20Optimization%20Inquiry',
      diagram: (reduceMotion) => (
        <svg viewBox="0 0 160 80" className="w-full h-full" fill="none" stroke="currentColor">
          {/* Supplier tier */}
          <circle cx="24" cy="40" r="8" stroke="#0c161d" strokeWidth="1.75" fill="#f0f8ff" />
          <text x="24" y="43" fontSize="8" fontWeight="600" fill="#0c161d" textAnchor="middle" stroke="none">S</text>
          
          {/* Flow vectors with pathLength reveal */}
          <motion.path
            d="M32 40 L64 26"
            stroke="#38a8ff"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve }}
          />
          <motion.path
            d="M32 40 L64 54"
            stroke="#38a8ff"
            strokeWidth="1.5"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCurve }}
          />
          
          {/* Central distribution hubs */}
          <rect x="64" y="18" width="16" height="16" rx="3" stroke="#0c161d" strokeWidth="1.75" fill="#ffffff" />
          <rect x="64" y="46" width="16" height="16" rx="3" stroke="#0c161d" strokeWidth="1.75" fill="#ffffff" />
          
          {/* Outbound distribution arrows */}
          <motion.path
            d="M80 26 L124 16"
            stroke="#70bfff"
            strokeWidth="1.5"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: easeCurve }}
          />
          <motion.path
            d="M80 26 L124 36"
            stroke="#70bfff"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeCurve }}
          />
          <motion.path
            d="M80 54 L124 44"
            stroke="#70bfff"
            strokeWidth="1.5"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: easeCurve }}
          />
          <motion.path
            d="M80 54 L124 64"
            stroke="#70bfff"
            strokeWidth="1.5"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeCurve }}
          />
          
          {/* Customer / Retail sinks */}
          <circle cx="132" cy="16" r="5" stroke="#0c161d" strokeWidth="1.5" fill="#38a8ff" />
          <circle cx="132" cy="36" r="5" stroke="#0c161d" strokeWidth="1.5" fill="#f0f8ff" />
          <circle cx="132" cy="44" r="5" stroke="#0c161d" strokeWidth="1.5" fill="#f0f8ff" />
          <circle cx="132" cy="64" r="5" stroke="#0c161d" strokeWidth="1.5" fill="#70bfff" />
        </svg>
      ),
    },
    {
      title: 'Sales Optimization',
      tag: 'Pareto Demand Frontiers',
      description: 'Enhance pricing models, sales allocation, and pipeline velocity with data-driven predictive algorithms and prescriptive market equilibrium models.',
      contactSubject: 'Sales%20Optimization%20Inquiry',
      diagram: (reduceMotion) => (
        <svg viewBox="0 0 160 80" className="w-full h-full" fill="none" stroke="currentColor">
          {/* Axes */}
          <line x1="20" y1="68" x2="140" y2="68" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="20" y1="12" x2="20" y2="68" stroke="#cbd5e1" strokeWidth="1.5" />
          
          {/* Sub-grid lines */}
          <line x1="20" y1="40" x2="140" y2="40" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="80" y1="12" x2="80" y2="68" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 4" />
          
          {/* Convex Pareto Frontier Curve */}
          <motion.path
            d="M 28 62 C 38 32, 65 22, 132 20"
            stroke="#38a8ff"
            strokeWidth="2.25"
            strokeLinecap="round"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeCurve }}
          />
          
          {/* Tangent line at optimum */}
          <line x1="45" y1="48" x2="105" y2="12" stroke="#0c161d" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          
          {/* Optimal Decision Point (Global Maxima) */}
          <circle cx="75" cy="27" r="4.5" fill="#70bfff" stroke="#0c161d" strokeWidth="1.75" />
          <text x="82" y="24" fontSize="8" fontWeight="700" fill="#0c161d" stroke="none">Optimum</text>
        </svg>
      ),
    },
    {
      title: 'HR Optimization',
      tag: 'Bipartite Matching & Scheduling',
      description: 'Streamline workforce shift scheduling, skill-to-task assignment, and labor capacity constraints to eliminate operational shortages and overtime waste.',
      contactSubject: 'HR%20and%20Workforce%20Optimization%20Inquiry',
      diagram: (reduceMotion) => (
        <svg viewBox="0 0 160 80" className="w-full h-full" fill="none" stroke="currentColor">
          {/* Staff Nodes (Left Column) */}
          <circle cx="32" cy="20" r="7" stroke="#0c161d" strokeWidth="1.5" fill="#ffffff" />
          <text x="32" y="23" fontSize="7" fontWeight="600" fill="#0c161d" textAnchor="middle" stroke="none">P1</text>
          
          <circle cx="32" cy="40" r="7" stroke="#0c161d" strokeWidth="1.5" fill="#ffffff" />
          <text x="32" y="43" fontSize="7" fontWeight="600" fill="#0c161d" textAnchor="middle" stroke="none">P2</text>
          
          <circle cx="32" cy="60" r="7" stroke="#0c161d" strokeWidth="1.5" fill="#ffffff" />
          <text x="32" y="63" fontSize="7" fontWeight="600" fill="#0c161d" textAnchor="middle" stroke="none">P3</text>
          
          {/* Bipartite Assignment Edges */}
          <line x1="39" y1="20" x2="121" y2="40" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="39" y1="40" x2="121" y2="20" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" />
          
          {/* Optimal Matched Pair Edges (Steel Blue) animated */}
          <motion.line
            x1="39" y1="20" x2="121" y2="20"
            stroke="#38a8ff"
            strokeWidth="2"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeCurve }}
          />
          <motion.line
            x1="39" y1="40" x2="121" y2="60"
            stroke="#38a8ff"
            strokeWidth="2"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeCurve }}
          />
          <motion.line
            x1="39" y1="60" x2="121" y2="40"
            stroke="#70bfff"
            strokeWidth="2"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeCurve }}
          />
          
          {/* Task / Shift Nodes (Right Column) */}
          <rect x="121" y="13" width="14" height="14" rx="2" stroke="#0c161d" strokeWidth="1.5" fill="#f0f8ff" />
          <text x="128" y="23" fontSize="7" fontWeight="600" fill="#0c161d" textAnchor="middle" stroke="none">T1</text>
          
          <rect x="121" y="33" width="14" height="14" rx="2" stroke="#0c161d" strokeWidth="1.5" fill="#f0f8ff" />
          <text x="128" y="43" fontSize="7" fontWeight="600" fill="#0c161d" textAnchor="middle" stroke="none">T2</text>
          
          <rect x="121" y="53" width="14" height="14" rx="2" stroke="#0c161d" strokeWidth="1.5" fill="#f0f8ff" />
          <text x="128" y="63" fontSize="7" fontWeight="600" fill="#0c161d" textAnchor="middle" stroke="none">T3</text>
        </svg>
      ),
    },
    {
      title: 'Resource Allocation',
      tag: 'Bounded Knapsack & Packing',
      description: 'Maximize throughput and capital asset utilization under complex operational, legal, and budget constraints using integer linear programming.',
      contactSubject: 'Resource%20Allocation%20Optimization%20Inquiry',
      diagram: (reduceMotion) => (
        <svg viewBox="0 0 160 80" className="w-full h-full" fill="none" stroke="currentColor">
          {/* Capacity Container Boundary */}
          <rect x="24" y="14" width="112" height="52" rx="4" stroke="#0c161d" strokeWidth="1.75" strokeDasharray="3 3" fill="#ffffff" />
          
          {/* Optimal Packed Compartments */}
          <motion.rect
            x="28" y="18" width="48" height="28" rx="2"
            fill="#f0f8ff" stroke="#0c161d" strokeWidth="1.5"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeCurve }}
          />
          <text x="52" y="34" fontSize="8" fontWeight="600" fill="#0c161d" textAnchor="middle" stroke="none">Item A (42%)</text>
          
          <motion.rect
            x="80" y="18" width="52" height="18" rx="2"
            fill="#38a8ff" stroke="#38a8ff" strokeWidth="1.5"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeCurve }}
          />
          <text x="106" y="30" fontSize="8" fontWeight="600" fill="#ffffff" textAnchor="middle" stroke="none">Item B (31%)</text>
          
          <motion.rect
            x="28" y="50" width="68" height="12" rx="2"
            fill="#0c161d" stroke="#0c161d" strokeWidth="1.5"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: easeCurve }}
          />
          <text x="62" y="59" fontSize="7" fontWeight="600" fill="#ffffff" textAnchor="middle" stroke="none">Item C (25%)</text>
          
          {/* Slack capacity boundary */}
          <rect x="100" y="40" width="32" height="22" rx="2" fill="none" stroke="#70bfff" strokeWidth="1" strokeDasharray="1 2" />
          <text x="116" y="53" fontSize="7" fill="#38a8ff" textAnchor="middle" stroke="none">Zero Slack</text>
        </svg>
      ),
    },
    {
      title: 'Transportation and Logistics',
      tag: 'Vehicle Routing & Traveling Salesperson',
      description: 'Formulate and solve multi-depot vehicle routing (VRP), dynamic airline gate assignments, and multi-modal transit schedules to reduce transit latency.',
      contactSubject: 'Transportation%20and%20Logistics%20Optimization%20Inquiry',
      diagram: (reduceMotion) => (
        <svg viewBox="0 0 160 80" className="w-full h-full" fill="none" stroke="currentColor">
          {/* Central Depot / Hub */}
          <rect x="74" y="34" width="14" height="14" rx="2" stroke="#0c161d" strokeWidth="2" fill="#0c161d" />
          <text x="81" y="44" fontSize="8" fontWeight="700" fill="#ffffff" textAnchor="middle" stroke="none">H</text>
          
          {/* Route Loop 1 (West Circuit) */}
          <motion.path
            d="M74 38 L32 20 L22 52 L54 62 Z"
            stroke="#38a8ff"
            strokeWidth="1.75"
            strokeLinejoin="round"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: easeCurve }}
          />
          <circle cx="32" cy="20" r="4" fill="#ffffff" stroke="#0c161d" strokeWidth="1.5" />
          <circle cx="22" cy="52" r="4" fill="#ffffff" stroke="#0c161d" strokeWidth="1.5" />
          <circle cx="54" cy="62" r="4" fill="#ffffff" stroke="#0c161d" strokeWidth="1.5" />
          
          {/* Route Loop 2 (East Circuit) */}
          <motion.path
            d="M88 42 L132 24 L142 56 L110 64 Z"
            stroke="#70bfff"
            strokeWidth="1.5"
            strokeDasharray="2 3"
            strokeLinejoin="round"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.25, ease: easeCurve }}
          />
          <circle cx="132" cy="24" r="4" fill="#38a8ff" stroke="#0c161d" strokeWidth="1.5" />
          <circle cx="142" cy="56" r="4" fill="#38a8ff" stroke="#0c161d" strokeWidth="1.5" />
          <circle cx="110" cy="64" r="4" fill="#38a8ff" stroke="#0c161d" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Custom Solutions',
      tag: 'MILP & Convex Polytope Optimization',
      description: 'Architect customized Mixed-Integer Linear Programs, non-linear formulations, and bespoke heuristics tailored to your exact physical and operational boundaries.',
      contactSubject: 'Custom%20Mathematical%20Optimization%20Inquiry',
      diagram: (reduceMotion) => (
        <svg viewBox="0 0 160 80" className="w-full h-full" fill="none" stroke="currentColor">
          {/* Feasible Region Polytope (Ax <= b) */}
          <polygon points="34,64 34,32 76,16 128,26 116,64" fill="#f0f8ff" stroke="#0c161d" strokeWidth="1.75" />
          
          {/* Interior Constraint Hyperplane */}
          <line x1="34" y1="44" x2="116" y2="44" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Objective Gradient Contour Vector */}
          <motion.line
            x1="50" y1="60" x2="76" y2="16"
            stroke="#38a8ff"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve }}
          />
          
          {/* Optimal Extreme Vertex */}
          <circle cx="76" cy="16" r="5" fill="#70bfff" stroke="#0c161d" strokeWidth="2" />
          <text x="86" y="18" fontSize="8" fontWeight="700" fill="#0c161d" stroke="none">x* (Global Minima)</text>
          
          {/* Vertex points */}
          <circle cx="34" cy="32" r="3" fill="#ffffff" stroke="#0c161d" strokeWidth="1.5" />
          <circle cx="128" cy="26" r="3" fill="#ffffff" stroke="#0c161d" strokeWidth="1.5" />
          <circle cx="116" cy="64" r="3" fill="#ffffff" stroke="#0c161d" strokeWidth="1.5" />
          <circle cx="34" cy="64" r="3" fill="#ffffff" stroke="#0c161d" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 relative border-b border-[#e2e8f0] overflow-hidden bg-[#f1f5f9]">
      
      {/* 1. Optimization Services Technical Background Image (Balanced Visibility) */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url('/services-optimization-bg.png')`,
        }}
        aria-hidden="true"
      />

      {/* 2. Soft Edge Gradients to Seamlessly Blend Top and Bottom */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-transparent to-white/70" aria-hidden="true" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-3 text-[0.76rem] font-bold tracking-[0.14em] text-[#0284c7] uppercase">
            <span>OUR SERVICES</span>
            <span className="w-11 h-[1.5px] bg-[#38a8ff] inline-block" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0c161d] leading-tight">
            Optimization<br />
            Across <em className="serif-accent">Every Domain</em>
          </h2>
          <div className="max-w-[480px]">
            <p className="text-[#526374] text-[0.96rem] leading-relaxed mb-3">
              We engineer specialized mathematical optimization models and prescriptive algorithms to solve non-linear enterprise friction and unlock measurable operational margins.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0c161d] hover:text-[#0284c7] transition-colors group"
            >
              <span>Discuss Your Problem With An Engineer</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* 6 Service Cards with Tailored Optimization Schematics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.07, ease: easeCurve }}
              className="bg-white/95 backdrop-blur-md border border-[#e2e8f0] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#38a8ff]/50 hover:bg-[#fafcff] hover:shadow-xl hover:shadow-[#38a8ff]/8 transition-all duration-300 group"
            >
              <div>
                {/* Schematic Header Box */}
                <div className="w-full h-24 rounded-lg bg-[#f8fafc]/90 border border-[#e2e8f0] p-2 mb-6 flex items-center justify-center overflow-hidden transition-colors duration-200 group-hover:border-[#38a8ff]/40 group-hover:bg-[#f0f8ff]">
                  {item.diagram(shouldReduceMotion)}
                </div>

                {/* Mathematical Tag */}
                <span className="text-[0.72rem] font-bold tracking-wider text-[#0284c7] uppercase block mb-1.5 font-mono">
                  {item.tag}
                </span>

                <h3 className="text-xl font-bold text-[#0c161d] mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-[#526374] text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9]">
                <a
                  href={`mailto:contact@feyntech.in?subject=${item.contactSubject}`}
                  className="text-xs font-semibold text-[#526374] group-hover:text-[#0284c7] transition-colors"
                >
                  Request Model Specs
                </a>
                <a
                  href={`mailto:contact@feyntech.in?subject=${item.contactSubject}`}
                  className="w-8 h-8 rounded-full border border-[#cbd5e1] flex items-center justify-center text-[#0c161d] group-hover:bg-[#0c161d] group-hover:border-[#0c161d] group-hover:text-white transition-all duration-200"
                  aria-label={`Inquire about ${item.title}`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
