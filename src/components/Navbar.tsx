import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'OptiVerse', href: '#optiverse' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e2e8f0] py-3'
          : 'bg-white/95 backdrop-blur-md border-b border-[#e2e8f0]/80 py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Lockup */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 sm:gap-3.5 group focus-visible:rounded"
          aria-label="Feyntech Homepage"
        >
          <img
            src="/logo.png"
            alt="Feyntech Optimization Solutions"
            className="h-9 sm:h-11 w-auto rounded-md shadow-sm object-contain transition-transform duration-200 group-hover:scale-[1.03]"
          />
          <div className="flex flex-col text-left">
            <span className="text-[1.05rem] sm:text-[1.22rem] font-bold text-[#0c161d] tracking-tight leading-none group-hover:text-[#38a8ff] transition-colors">
              Feyntech
            </span>
            <span className="text-[0.58rem] sm:text-[0.68rem] font-semibold tracking-wider text-[#0284c7] uppercase leading-tight font-mono mt-0.5 sm:mt-1 whitespace-nowrap">
              Optimization Solutions
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 + idx * 0.04 }}
              className="relative text-[0.92rem] font-medium text-[#0c161d] py-1 transition-colors hover:text-[#38a8ff] group focus-visible:rounded"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#38a8ff] transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
            </motion.a>
          ))}
        </nav>

        {/* Action Button - Vibrant Logo Blue */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="hidden sm:inline-flex items-center gap-2.5 bg-[#38a8ff] text-white text-[0.88rem] font-semibold px-5 sm:px-6 py-2.5 rounded-full hover:bg-[#0284c7] transition-all duration-200 shadow-md shadow-[#38a8ff]/25 hover:shadow-lg hover:shadow-[#38a8ff]/35 group focus-visible:ring-2 focus-visible:ring-[#38a8ff]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-[#0c161d] hover:text-[#38a8ff] hover:bg-slate-50 transition-colors focus-visible:rounded"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-b border-[#e2e8f0] px-5 sm:px-6 py-5 overflow-hidden shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#0c161d] hover:text-[#38a8ff] transition-colors py-3 border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#38a8ff] opacity-50" />
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#38a8ff] text-white hover:bg-[#0284c7] font-semibold py-3.5 rounded-lg shadow-md shadow-[#38a8ff]/25 transition-all text-[0.95rem]"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
