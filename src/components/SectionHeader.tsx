import React from 'react';
import FadeIn from './FadeIn';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  light?: boolean;
  titleClassName?: string;
}

export default function SectionHeader({ title, subtitle, align = 'center', light = false, titleClassName = '' }: SectionHeaderProps) {
  const isLeft = align === 'left';
  
  return (
    <FadeIn className={`flex flex-col ${isLeft ? 'items-start text-left' : 'items-center justify-center text-center'} mb-20 sm:mb-24 md:mb-[100px] w-full`}>
      <div className={`flex flex-col ${isLeft ? 'items-start' : 'items-center justify-center'} gap-4 sm:gap-5 md:gap-6 w-full`}>
        {/* 中文大标题 */}
        <h2 
          className={`${light ? 'text-[#0C0C0C]' : 'hero-heading'} font-[900] uppercase leading-tight tracking-tight ${isLeft ? 'text-left' : 'text-center'} ${titleClassName}`}
          style={{ fontSize: 'clamp(3.5rem, 12vw, 160px)' }}
        >
          {title}
        </h2>
        
        {/* 英文小标签 - Add pl- tracking compensation to center optically */}
        <span 
          className={`${light ? 'text-[#0C0C0C]/40' : 'text-[#D7E2EA]/30'} text-[16px] font-medium uppercase tracking-[0.28em] md:tracking-[0.32em] ${isLeft ? 'text-left font-mono' : 'text-center pl-[0.28em] md:pl-[0.32em]'} block`}
        >
          {subtitle}
        </span>
        
        {/* 短横线装饰 */}
        <div 
          className={`w-12 md:w-16 h-[2px] ${light ? 'bg-[#0C0C0C]/10' : 'bg-[#D7E2EA]/20'} mt-1 md:mt-2`} 
        />
      </div>
    </FadeIn>
  );
}
