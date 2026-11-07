import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const Team: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.16, 1, 0.3, 1];

  const teamMembers = [
    {
      initials: 'AC',
      name: 'Atul Chavan',
      role: 'CEO & Co-Founder',
      focus: 'Executive Leadership & Strategy',
    },
    {
      initials: 'AK',
      name: 'Akshay Chavan',
      role: 'Head of Business Administration',
      focus: 'Corporate Finance & Governance',
    },
    {
      initials: 'AA',
      name: 'Aditya Ambekar',
      role: 'Head of Business Operations',
      focus: 'Program Execution & Client Delivery',
    },
    {
      initials: 'SB',
      name: 'Sayan Bhattacharya',
      role: 'CTO & Co-Founder',
      focus: 'Mathematical Architecture & Solvers',
    },
    {
      initials: 'AC',
      name: 'Akash Chakrabarti',
      role: 'Head of Product Design UI/UX',
      focus: 'Decision Systems & Product Experience',
    },
    {
      initials: 'SC',
      name: 'Sameer Chavan',
      role: 'Business Developer & Operations Head',
      focus: 'Market Growth & Operational Execution',
    },
    {
      initials: 'SM',
      name: 'Shubham Mane',
      role: 'System Architect',
      focus: 'Distributed Systems & Technical Infrastructure',
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-24 bg-[#f8fafc] relative border-b border-[#e2e8f0]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-3 text-[0.76rem] font-bold tracking-[0.14em] text-[#0284c7] uppercase">
            <span>OUR TEAM</span>
            <span className="w-11 h-[1.5px] bg-[#38a8ff] inline-block" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0c161d] leading-tight">
            The People Behind <em className="serif-accent">Feyntech</em>
          </h2>
          <div className="max-w-[480px]">
            <p className="text-[#526374] text-[0.96rem] leading-relaxed">
              A multidisciplinary leadership team driven by rigorous operations research, advanced algorithmic computer science, and real-world industrial impact.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name + idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: easeCurve }}
              className="bg-white border border-[#e2e8f0] rounded-xl p-6 sm:p-7 text-center flex flex-col items-center justify-between hover:border-[#38a8ff]/50 hover:bg-[#fafcff] hover:shadow-lg hover:shadow-[#38a8ff]/8 transition-all duration-300 group w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] min-h-[270px] sm:min-h-[290px]"
            >
              <div className="flex flex-col items-center w-full">
                {/* Refined Monogram Circle - Clean Light Hover State */}
                <div className="w-16 h-16 rounded-full bg-[#f0f8ff] text-[#0c161d] font-bold text-base flex items-center justify-center border border-[#38a8ff]/30 mb-5 group-hover:bg-[#e0f2fe] group-hover:text-[#0284c7] group-hover:border-[#38a8ff]/60 group-hover:shadow-sm transition-all duration-200">
                  {member.initials}
                </div>

                <h3 className="text-base font-bold text-[#0c161d] mb-1 tracking-tight">
                  {member.name}
                </h3>
                
                <p className="text-xs font-semibold text-[#0284c7] mb-2">
                  {member.role}
                </p>
              </div>

              <div className="pt-3 border-t border-[#f1f5f9] w-full mt-3">
                <span className="text-[0.72rem] text-[#526374] leading-tight block">
                  {member.focus}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
