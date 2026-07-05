import React from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import { ContactButton } from '../components/Buttons';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between bg-[#0C0C0C]">
      {/* Hero Heading Container */}
      <div className="relative flex-1 flex flex-col justify-center items-center overflow-visible px-[max(var(--container-padding),calc((100vw-var(--container-wide))/2))]">
        <div className="overflow-visible w-full flex justify-center transform -translate-y-[272px]">
          <FadeIn delay={0.15} y={40} className="w-full">
            <h1 
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-center w-full"
              style={{ fontSize: '200px', marginTop: '200px', paddingLeft: '2px' }}
            >
              嗨，我是阴宇航
            </h1>
          </FadeIn>
        </div>

        {/* Hero Portrait - Center and offset down as requested */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 mt-[200px]">
          <FadeIn delay={0.6} y={30}>
            <Magnet 
              padding={150} 
              strength={3}
              style={{
                marginLeft: '0px',
                marginTop: '0px',
                paddingLeft: '0px',
                height: '800px',
                width: '748px',
                paddingRight: '0px',
                paddingBottom: '0px',
                marginRight: '0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img 
                src="/src/assets/images/regenerated_image_1779017627994.png" 
                alt="Portrait"
                className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </Magnet>
          </FadeIn>
        </div>

        {/* Brand Cloud */}
        <div className="absolute bottom-[20%] w-full flex justify-center items-center gap-10 sm:gap-16 md:gap-24 opacity-20 z-0 select-none flex-nowrap overflow-hidden">
           {['SAAS DESIGN', 'VIRTUOS', 'SYNERGY', 'PLANET ORBIT', 'Vibe Coding'].map((brand, i) => (
             <FadeIn key={i} delay={0.8 + (i * 0.1)} y={10} className="text-[#D7E2EA] font-black text-[16px] tracking-[0.4em] uppercase whitespace-nowrap">
                {brand}
             </FadeIn>
           ))}
        </div>
      </div>

      {/* Bottom Bar - Synchronized with Navbar width */}
      <div className="w-full flex justify-center pb-12 sm:pb-16 md:pb-20 relative z-20">
        <div 
          className="flex justify-between items-end"
          style={{ width: 'min(var(--container-wide), calc(100vw - var(--container-padding) * 2))' }}
        >
          <FadeIn delay={0.35} y={20} className="max-w-[200px] sm:max-w-[320px] md:max-w-[480px]">
            <p className="text-[#D7E2EA]/70 font-normal tracking-wide leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.25rem)' }}>
              资深交互设计师 & AI 产品专家<br/>
              深耕 B 端复杂系统与体验落地
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton label="与我沟通" onClick={scrollToContact} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
