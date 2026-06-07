import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Simple cn utility for class merging
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const NAV_ITEMS = [
  { id: 'about', label: '关于', offset: '01' },
  { id: 'projects', label: '项目', offset: '02' },
  { id: 'services', label: '服务', offset: '03' },
  { id: 'contact', label: '联系', offset: '04' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'services', 'contact'];
      let currentSection = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if top of section is at or above the viewport top (with consideration for nav height)
          if (rect.top <= 140) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-1/2 -translate-x-1/2 z-[1000] w-full flex justify-center"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: 'min(var(--container-wide), calc(100vw - var(--container-padding) * 2))' }}
          className={cn(
            "h-[72px] rounded-full border border-white/[0.12] flex items-center justify-between pl-[25px] pr-8 mt-8",
            "bg-[#080808]/72 backdrop-blur-[24px] shadow-[0_24px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.08)]"
          )}
        >
          {/* Left: Branding */}
          <div className="flex items-center gap-3.5 h-[48px] group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-[44px] h-[44px] flex-none flex items-center justify-center overflow-hidden rounded-full border border-white/[0.12] bg-white/[0.08] backdrop-blur-md">
              <img
                src="/src/assets/images/regenerated_image_1779190331085.png"
                alt="Y-Logo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.15] scale-[1.12]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight pt-0.5">
              <span className="font-extrabold tracking-[0.1em] text-[#D7E2EA] group-hover:text-white transition-colors text-[16px]">YUHANG</span>
              <span className="text-[14px] text-[#D7E2EA]/40 font-medium tracking-[0.18em] uppercase mt-0.5">UIUX DESIGNER</span>
            </div>
          </div>

          {/* Middle: Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative px-4 font-medium transition-all duration-300 flex items-center gap-1.5",
                  "h-[48px] text-[18px]",
                  activeSection === item.id ? "text-white" : "text-[#D7E2EA]/60 hover:text-[#D7E2EA]"
                )}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-x-1 inset-y-1 bg-white/5 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="opacity-40 font-mono mt-0.5 text-[16px]">
                  {item.offset}
                </span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Right: CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center gap-2 h-[48px] px-6 rounded-full border border-white/[0.16] bg-white/[0.08] backdrop-blur-md hover:bg-white/[0.12] text-[#D7E2EA] transition-all hover:scale-[1.02] active:scale-95 group"
            >
              <span className="text-[16px] leading-[20px] font-medium">与我沟通</span>
              <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 transition-transform opacity-60" />
            </button>

            <button
              className="md:hidden p-2 text-[#D7E2EA] hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[990] bg-[#0C0C0C]/90 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col gap-8 w-full max-w-[280px]">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left flex items-end gap-4 group"
                >
                  <span className="text-sm font-mono text-white/30 pb-1">{item.offset}</span>
                  <span className="text-4xl font-bold text-[#D7E2EA] group-hover:text-white transition-colors uppercase tracking-tight">
                    {item.label}
                  </span>
                </motion.button>
              ))}

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollToSection('contact')}
                className="mt-8 flex items-center justify-between w-full p-6 rounded-3xl border border-white/10 bg-white/5 text-xl font-bold text-white group"
              >
                <span>与我沟通</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
