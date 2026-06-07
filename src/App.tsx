import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FooterSection from './sections/FooterSection';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="flex flex-col w-full overflow-x-clip bg-[#0C0C0C] font-kanit selection:bg-[#BBCCD7] selection:text-[#0C0C0C]">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}
