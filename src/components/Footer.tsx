import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#e2e8f0] py-12 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          
          {/* Logo & Lockup */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <img src="/logo.png" alt="Feyntech Logo" className="h-10 w-auto rounded-md shadow-sm object-contain transition-transform duration-200 group-hover:scale-[1.03]" />
            <div className="flex flex-col text-left">
              <span className="text-lg font-bold text-[#0c161d] tracking-tight leading-none group-hover:text-[#38a8ff] transition-colors">
                Feyntech
              </span>
              <span className="text-[0.65rem] font-semibold tracking-wider text-[#0284c7] uppercase leading-tight font-mono mt-1">
                Optimization Solutions
              </span>
            </div>
          </a>

          {/* Links */}
          <ul className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-[#526374]">
            <li><a href="#home" className="hover:text-[#38a8ff] transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-[#38a8ff] transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-[#38a8ff] transition-colors">About Us</a></li>
            <li><a href="#optiverse" className="hover:text-[#38a8ff] transition-colors">OptiVerse</a></li>
            <li><a href="#contact" className="hover:text-[#38a8ff] transition-colors">Contact</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#f0f8ff] border border-[#e2e8f0] flex items-center justify-center text-[#0c161d] hover:bg-[#38a8ff] hover:text-white hover:border-[#38a8ff] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/feyntech-opt/OptiVerse"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#f0f8ff] border border-[#e2e8f0] flex items-center justify-center text-[#0c161d] hover:bg-[#38a8ff] hover:text-white hover:border-[#38a8ff] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#f0f8ff] border border-[#e2e8f0] flex items-center justify-center text-[#0c161d] hover:bg-[#38a8ff] hover:text-white hover:border-[#38a8ff] transition-all"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#e2e8f0] text-xs text-[#526374]">
          <span>&copy; {new Date().getFullYear()} Feyntech Optimization Solutions Private Limited. All rights reserved.</span>
          <span>Advanced Optimization for a Better Tomorrow.</span>
        </div>

      </div>
    </footer>
  );
};
