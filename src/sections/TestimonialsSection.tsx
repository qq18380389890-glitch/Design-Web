import React from 'react';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';

const ADVANTAGES = [
  {
    description: "擅长从业务目标、角色权限与操作链路中拆解复杂需求，梳理清晰的信息架构与核心流程。",
    title: "业务拆解",
    tag: "信息架构",
    number: "01"
  },
  {
    description: "长期服务 B端 SaaS 与企业级系统，关注页面结构、状态反馈、异常处理与多角色协同体验。",
    title: "系统体验",
    tag: "B端 SaaS",
    number: "02"
  },
  {
    description: "结合 Figma、AI 与 Vibe Coding 输出可交互 Demo，让方案更早被验证，也让产研沟通更高效。",
    title: "高效交付",
    tag: "原型验证",
    number: "03"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F8F8F8] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-20 py-32 overflow-hidden -mt-10 shadow-[0_-30px_60px_rgba(0,0,0,0.03)]">
      <div className="container-wide">
        <SectionHeader title="核心优势" subtitle="CORE STRENGTHS" light />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ADVANTAGES.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} y={20} className="bg-white border border-black/5 p-8 rounded-[32px] md:rounded-[40px] flex flex-col justify-between gap-12 h-full group hover:border-black/10 transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2">
              <p className="text-[#0C0C0C] font-light leading-relaxed opacity-80" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)' }}>
                {item.description}
              </p>
              
              <div className="flex items-end justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[#0C0C0C]/40 text-xs uppercase tracking-widest font-medium">{item.tag}</span>
                  <h3 className="text-[#0C0C0C] font-semibold text-xl tracking-tight">{item.title}</h3>
                </div>
                <span className="text-[#0C0C0C]/5 font-black text-5xl leading-none select-none group-hover:text-[#0C0C0C]/10 transition-colors duration-500">
                  {item.number}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
