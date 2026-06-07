import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import SectionHeader from '../components/SectionHeader';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-32 pb-48 overflow-hidden">
      {/* Decorative Icons */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" referrerPolicy="no-referrer" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] z-0">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" referrerPolicy="no-referrer" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" referrerPolicy="no-referrer" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] z-0">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" referrerPolicy="no-referrer" className="w-full h-auto" />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center max-w-5xl text-center">
        <SectionHeader title="关于我" subtitle="ABOUT ME" />

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText 
            text="拥有九年 UI/UX 全链路经验，长期深耕 B 端 SaaS 与复杂业务系统。我擅长从模糊需求中梳理业务逻辑、信息架构与核心流程，并结合 AI 与 Vibe Coding 输出可交互 Demo，提升产研对齐效率。我关注设计系统、交互规范与落地质量，让复杂产品具备清晰、稳定、可持续迭代的体验。"
            className="text-[#D7E2EA] font-medium leading-[2] max-w-[800px] text-center tracking-wider"
            style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.6rem)' } as any}
          />

          <FadeIn delay={0.1} y={20} className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mt-4">
             {['B端系统', 'SaaS', '信息架构', 'Design System', '交互规范', 'Vibe Coding', 'Figma', 'AI Workflow'].map((skill, i) => (
               <span key={i} className="px-6 py-2.5 border border-[#D7E2EA]/10 rounded-full text-[#D7E2EA]/70 whitespace-nowrap bg-white/[0.03] backdrop-blur-sm" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.1rem)' }}>
                 {skill}
               </span>
             ))}
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
             <div className="px-12 py-5 bg-[#D7E2EA] text-[#0C0C0C] rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all duration-300 cursor-pointer shadow-[0_20px_50px_rgba(215,226,234,0.15)]">
                与我沟通
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
