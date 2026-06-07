import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef, useEffect, useState } from 'react';

const IMAGES = [
  "/src/assets/images/regenerated_image_1779686948408.gif",
  "/src/assets/images/regenerated_image_1779696542396.png",
  "/src/assets/images/regenerated_image_1779697559862.png",
  "/src/assets/images/regenerated_image_1779697553406.png",
  "/src/assets/images/regenerated_image_1779687609028.png",
  "/src/assets/images/regenerated_image_1779880267079.png",
  "/src/assets/images/regenerated_image_1779772145926.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "/src/assets/images/regenerated_image_1779696548915.png",
  "/src/assets/images/regenerated_image_1779761468124.png",
  "/src/assets/images/regenerated_image_1779701309716.png",
  "/src/assets/images/regenerated_image_1779435663513.gif",
  "/src/assets/images/regenerated_image_1779440266911.png",
  "/src/assets/images/regenerated_image_1779772094813.gif",
  "/src/assets/images/regenerated_image_1779772130429.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

export default function MarqueeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const row1 = IMAGES.slice(0, 11);
  const row2 = IMAGES.slice(11);

  return (
    <section ref={containerRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves Right */}
        <motion.div 
          className="flex gap-3 whitespace-nowrap will-change-transform"
          style={{ x: x1 }}
        >
          {[...row1, ...row1].map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt="" 
              className="w-[300px] sm:w-[420px] h-[200px] sm:h-[270px] rounded-2xl object-cover flex-shrink-0"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ))}
        </motion.div>

        {/* Row 2 - Moves Left */}
        <motion.div 
          className="flex gap-3 whitespace-nowrap will-change-transform"
          style={{ x: x2 }}
        >
          {[...row2, ...row2].map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt="" 
              className="w-[300px] sm:w-[420px] h-[200px] sm:h-[270px] rounded-2xl object-cover flex-shrink-0"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
