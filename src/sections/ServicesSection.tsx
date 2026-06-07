import React from 'react';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';

const SERVICES = [
  {
    num: "01",
    title: "B端体验设计",
    desc: "深度理解业务角色、权限边界与任务流程，构建清晰、高效、可落地的 SaaS 产品体验。"
  },
  {
    num: "02",
    title: "信息架构梳理",
    desc: "将复杂需求转化为页面结构、业务流程与交互规则，降低用户理解成本与操作成本。"
  },
  {
    num: "03",
    title: "高效原型交付",
    desc: "结合 Figma、AI 与 Vibe Coding 输出可交互 Demo，帮助产研快速对齐方案与细节。"
  },
  {
    num: "04",
    title: "设计系统建设",
    desc: "构建组件库、交互规范与标准化交付模板，提升多端一致性、复用效率与还原质量。"
  },
  {
    num: "05",
    title: "体验策略优化",
    desc: "围绕业务目标、用户路径与关键转化，设计反馈、容错与状态预判机制，推动体验持续迭代。"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-20 py-20 sm:py-24 md:py-32 overflow-hidden -mt-10 shadow-[0_-30px_60px_rgba(0,0,0,0.03)]">
      <div className="container-main">
        <SectionHeader title="专业服务" subtitle="SERVICES" light />

        <div className="max-w-5xl mx-auto flex flex-col">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.1} y={20} className="border-b border-[#0C0C0C]/10 last:border-b-0 py-8 sm:py-10 md:py-12">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <span className="font-black text-[#0C0C0C] leading-none shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                  {service.num}
                </span>
                <div className="flex flex-col gap-2 md:gap-4">
                  <h3 className="font-medium uppercase text-[#0C0C0C]" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', marginLeft: i === 0 ? '16px' : undefined, paddingLeft: i === 0 ? '1px' : undefined }}>
                    {service.title}
                  </h3>
                  <p className="font-light leading-relaxed text-[#0C0C0C]/60 max-w-2xl" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', marginLeft: i === 0 ? '16px' : undefined }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
