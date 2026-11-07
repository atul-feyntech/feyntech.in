import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, Copy, Check, Terminal } from 'lucide-react';

export const OptiVerse: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Short, genuine typing animation for the solve call that runs once
  const [typedSolve, setTypedSolve] = useState(shouldReduceMotion ? 'solution = model.solve()' : '');
  const [hasTyped, setHasTyped] = useState(false);

  const fullSolveCode = 'solution = model.solve()';

  const triggerTyping = () => {
    if (hasTyped || shouldReduceMotion) {
      setTypedSolve(fullSolveCode);
      return;
    }
    setHasTyped(true);
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setTypedSolve(fullSolveCode.slice(0, index));
      if (index >= fullSolveCode.length) {
        clearInterval(interval);
      }
    }, 45);
  };

  const codeString = `from optiverse import Model

# Initialize mathematical optimization model
model = Model(name="enterprise_milp")

# Add decision variables with bounds and types
x = model.add_variable("x_flow", var_type="continuous", lb=0)
y = model.add_variable("y_assign", var_type="binary")

# Formulate operational constraints
model.add_constraint(2.5 * x + 40.0 * y <= 250.0, name="capacity_limit")
model.set_objective(15.0 * x - 85.0 * y, sense="maximize")

# Execute deterministic solver
solution = model.solve()
print(f"Status: {solution.status} | Objective: {solution.obj_value}")`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section id="optiverse" className="py-16 sm:py-24 bg-[#080d12] text-white relative overflow-hidden">
      {/* Subtle Blue Glow matching the logo */}
      <div 
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#38a8ff]/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Description Content */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeCurve }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-3 text-[0.76rem] font-bold tracking-[0.14em] text-[#70bfff] uppercase mb-4">
              <span>OPTIVERSE</span>
              <span className="w-11 h-[1.5px] bg-[#38a8ff] inline-block" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              OptiVerse<br />
              <span className="serif-accent text-[#70bfff]">Our Open Source Initiative</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-4">
              OptiVerse is Feyntech's comprehensive open-source Python library for optimization techniques solving real-world problems across various domains.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 sm:mb-8">
              We provide robust, efficient, and innovative solutions for optimization, decision-making, and resource allocation in fields such as politics, business, sports scheduling, finance, logistics, transportation, HR, and more.
            </p>

            {/* Quick Install Pill */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-[#38a8ff]/35 px-4 py-2 rounded-lg text-xs font-mono text-gray-200 mb-6 sm:mb-8 select-all shadow-inner max-w-full overflow-x-auto">
              <Terminal className="w-3.5 h-3.5 text-[#70bfff] shrink-0" />
              <span>pip install optiverse</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 lg:mb-0">
              <a
                href="https://opti-verse.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#38a8ff] to-[#0284c7] text-white font-semibold text-sm px-6 py-3.5 rounded-md hover:brightness-110 transition-all shadow-lg shadow-[#38a8ff]/25 border border-[#38a8ff]/40 group"
              >
                <span>Visit opti-verse.org</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="https://github.com/feyntech-opt/OptiVerse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white/5 border border-white/15 text-white font-semibold text-sm px-6 py-3.5 rounded-md hover:bg-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Code Terminal IDE Window */}
          <div className="lg:col-span-6">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onViewportEnter={triggerTyping}
              transition={{ duration: 0.6, delay: 0.15, ease: easeCurve }}
              className="bg-[#0e1620] border border-[#38a8ff]/35 rounded-xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm"
            >
              {/* Terminal Window Header */}
              <div className="bg-[#090f16] px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-[0.72rem] sm:text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#38a8ff]" />
                  <span>optiverse_milp.py</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Copy code to clipboard"
                  title="Copy code"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Code Body */}
              <div className="p-4 sm:p-6 bg-[#080d12] overflow-x-auto leading-relaxed text-gray-200 text-[0.7rem] sm:text-xs">
                <div className="flex"><span className="text-gray-600 select-none w-8">1</span><span><span className="text-[#f97583]">from</span> <span className="text-[#79b8ff]">optiverse</span> <span className="text-[#f97583]">import</span> Model</span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">2</span><span></span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">3</span><span className="text-gray-500 italic"># Initialize mathematical optimization model</span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">4</span><span>model = Model(name=<span className="text-[#9ecbff]">"enterprise_milp"</span>)</span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">5</span><span></span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">6</span><span className="text-gray-500 italic"># Add decision variables with bounds and types</span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">7</span><span>x = model.add_variable(<span className="text-[#9ecbff]">"x_flow"</span>, var_type=<span className="text-[#9ecbff]">"continuous"</span>, lb=0)</span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">8</span><span>y = model.add_variable(<span className="text-[#9ecbff]">"y_assign"</span>, var_type=<span className="text-[#9ecbff]">"binary"</span>)</span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">9</span><span></span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">10</span><span className="text-gray-500 italic"># Formulate operational constraints</span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">11</span><span>model.add_constraint(2.5 * x + 40.0 * y &lt;= 250.0, name=<span className="text-[#9ecbff]">"capacity_limit"</span>)</span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">12</span><span>model.set_objective(15.0 * x - 85.0 * y, sense=<span className="text-[#9ecbff]">"maximize"</span>)</span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">13</span><span></span></div>
                <div className="flex"><span className="text-gray-600 select-none w-8">14</span><span className="text-gray-500 italic"># Execute deterministic solver</span></div>
                <div className="flex">
                  <span className="text-gray-600 select-none w-8">15</span>
                  <span>
                    {typedSolve}
                    {hasTyped && typedSolve.length < fullSolveCode.length && (
                      <span className="inline-block w-1.5 h-3.5 bg-[#38a8ff] ml-0.5 animate-pulse" />
                    )}
                  </span>
                </div>
                <div className="flex"><span className="text-gray-600 select-none w-8">16</span><span><span className="text-[#f97583]">print</span>(f<span className="text-[#9ecbff]">"Status: &#123;solution.status&#125; | Objective: &#123;solution.obj_value&#125;"</span>)</span></div>
              </div>

              {/* Footer Tags */}
              <div className="bg-[#090f16] px-6 py-3 border-t border-white/10 flex flex-wrap gap-2 text-xs text-gray-400">
                <span className="bg-[#38a8ff]/15 border border-[#38a8ff]/35 text-[#70bfff] px-3 py-1 rounded-full">Python 3.9+</span>
                <span className="bg-[#38a8ff]/15 border border-[#38a8ff]/35 text-[#70bfff] px-3 py-1 rounded-full">MILP / Simplex</span>
                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Open Source (MIT)</span>
                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">PyPI Package</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
