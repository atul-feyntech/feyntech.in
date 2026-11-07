import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Mail, ArrowUpRight, Copy, Check, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.16, 1, 0.3, 1];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('contact@feyntech.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-3 text-[0.76rem] font-bold tracking-[0.14em] text-[#0284c7] uppercase">
            <span>CONTACT US</span>
            <span className="w-11 h-[1.5px] bg-[#38a8ff] inline-block" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0c161d] leading-tight">
            Let's Build<br />
            Smarter Solutions <em className="serif-accent">Together.</em>
          </h2>
          <div className="max-w-[480px]">
            <p className="text-[#526374] text-[0.96rem] leading-relaxed">
              Have a complex operations research, logistics, or resource allocation challenge? Connect directly with our modeling team for an initial engineering review.
            </p>
          </div>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Our Office */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: easeCurve }}
            className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#38a8ff]/50 hover:bg-white hover:shadow-lg hover:shadow-[#38a8ff]/8 transition-all duration-300 group"
          >
            <div>
              <div className="w-11 h-11 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-[#0284c7] mb-6 group-hover:bg-[#f0f8ff] group-hover:border-[#38a8ff]/40 transition-colors duration-200">
                <MapPin className="w-5 h-5 text-[#0284c7]" />
              </div>
              <h3 className="text-xl font-bold text-[#0c161d] mb-3 tracking-tight">Our Office</h3>
              <p className="text-[#526374] text-sm leading-relaxed">
                SRNO. 129/5, FL. NO. 08, Aditya Apartment, Wakad, Pune - 411033, MH, IN
              </p>
            </div>
            <div className="pt-6 border-t border-[#e2e8f0] mt-6">
              <span className="text-xs font-semibold text-[#526374]">
                Registered Engineering Headquarters
              </span>
            </div>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.16, ease: easeCurve }}
            className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#38a8ff]/50 hover:bg-white hover:shadow-lg hover:shadow-[#38a8ff]/8 transition-all duration-300 group"
          >
            <div>
              <div className="w-11 h-11 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-[#0284c7] mb-6 group-hover:bg-[#f0f8ff] group-hover:border-[#38a8ff]/40 transition-colors duration-200">
                <Mail className="w-5 h-5 text-[#0284c7]" />
              </div>
              <h3 className="text-xl font-bold text-[#0c161d] mb-3 tracking-tight">Email</h3>
              <p className="text-[#526374] text-sm leading-relaxed mb-4">
                Reach our leadership and optimization consultants directly:
              </p>
              <a
                href="mailto:contact@feyntech.in"
                className="text-base font-bold text-[#0c161d] hover:text-[#0284c7] transition-colors inline-block"
              >
                contact@feyntech.in
              </a>
            </div>
            
            <div className="pt-6 border-t border-[#e2e8f0] mt-6 flex items-center justify-between">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#526374] hover:text-[#0c161d] transition-colors focus-visible:ring-1 focus-visible:ring-[#38a8ff] rounded"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Card 3: Featured Dark Get in Touch */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.24, ease: easeCurve }}
            className="bg-[#0c161d] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-[#38a8ff]/20 transition-all duration-300 group border border-[#1e2e3d]"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#70bfff] mb-4">
                <Clock className="w-3.5 h-3.5 text-[#38a8ff]" />
                <span>Response within 24h</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Get in Touch</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Discuss your business bottlenecks with our modeling engineers and evaluate mathematical viability.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                Start Technical Consultation
              </span>
              <a
                href="mailto:contact@feyntech.in?subject=Operations%20Research%20Consultation%20Inquiry"
                className="w-10 h-10 rounded-full bg-[#38a8ff] border border-[#38a8ff] flex items-center justify-center text-white hover:bg-[#0284c7] hover:border-[#0284c7] shadow-md shadow-[#38a8ff]/30 transition-all duration-200"
                aria-label="Send Consultation Inquiry"
              >
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
