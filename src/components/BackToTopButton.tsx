import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolled past 60% of viewport height
      const threshold = window.innerHeight * 0.6;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially to check scroll state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: { 
      opacity: 1, 
      y: 0,
    },
    exit: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 16,
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top-button"
          aria-label="回到顶部"
          onClick={scrollToTop}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.22, ease: 'easeOut' }}
          whileHover={shouldReduceMotion ? {} : { y: -3 }}
          whileTap={{ scale: 0.94 }}
          className="fixed z-50 flex items-center justify-center rounded-full cursor-pointer select-none
                     md:bottom-8 md:right-8 bottom-6 right-5
                     md:w-[52px] md:h-[52px] w-[46px] h-[46px]
                     bg-[#121418]/72 backdrop-blur-md
                     border border-white/12 text-white/50
                     hover:text-white hover:border-white/30
                     hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
                     transition-colors duration-200"
        >
          <ArrowUp className="md:w-5 md:h-5 w-[18px] h-[18px] transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
