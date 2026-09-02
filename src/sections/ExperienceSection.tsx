import React from 'react';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';

const EXPERIENCES = [
  {
    company: "九天语绘（成都）科技有限公司",
    role: "UX 设计师",
    period: "2026.02 - 至今",
    desc: "主导全模态 AIGC 创作画布的核心体验设计，负责节点工作流、信息降噪与关键交互方案。"
  },
  {
    company: "猪哥云（四川）数字科技有限公司",
    role: "UX 设计师",
    period: "2025.05 - 2026.02",
    desc: "负责对话式 AI 与智能助手体验设计，构建从业务引导、表单预填到风险反馈的高效人机交互流程。"
  },
  {
    company: "成都光恒互动科技有限公司",
    role: "UI & UX 设计师",
    period: "2024.02 - 2025.05",
    desc: "负责小智协同 B 端平台全链路设计，将管线管理方法论转化为流程编排、任务派发与协同工作台体验。"
  },
  {
    company: "维塔士电脑软件（成都）有限公司",
    role: "UI & UX 设计师",
    period: "2022.08 - 2024.02",
    desc: "系统化构建企业级 B 端产品信息架构与设计语言，覆盖内网、论坛与技能库等多场景体验升级落地。"
  },
  {
    company: "成都世纪天裕科技有限公司",
    role: "UI 设计师",
    period: "2020.12 - 2022.08",
    desc: "独立完成多端产品界面设计与迭代优化，制定设计规范并协同产品研发持续提升操作效率与视觉品质。"
  }
];

export default function ExperienceSection() {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-20 py-20 sm:py-32 overflow-hidden -mt-10">
      <div className="container-main">
        <div className="px-4">
          <SectionHeader title="经历轨迹" subtitle="CAREER PATH" align="left" titleClassName="-ml-[9px]" />
        </div>

        <div className="flex flex-col border-t border-[#D7E2EA]/10">
          {EXPERIENCES.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1} className="border-b border-[#D7E2EA]/10 py-10 group hover:bg-white/[0.02] transition-colors duration-500">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-start gap-6 px-4">
                <div className="flex flex-col text-left">
                  <span className="text-[#D7E2EA]/40 font-mono text-base uppercase tracking-widest flex md:items-center md:h-8">{exp.period}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#D7E2EA] text-xl md:text-2xl md:leading-8 font-bold">{exp.company}</h3>
                  <p className="text-[#D7E2EA]/60 font-light leading-relaxed max-w-xl">{exp.desc}</p>
                </div>
                <div className="text-right flex md:items-center md:justify-end md:h-8 md:self-start">
                   <span className="inline-block border border-[#D7E2EA]/20 rounded-full px-6 py-2 text-[#D7E2EA] text-xs uppercase tracking-widest font-medium group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C] transition-all duration-300">
                     {exp.role}
                   </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education */}
        <div className="mt-32">
          <FadeIn className="mb-10">
            <h2 className="text-[#D7E2EA] font-bold uppercase text-2xl tracking-widest">教育背景 / EDUCATION</h2>
          </FadeIn>
          <FadeIn className="border-t border-[#D7E2EA]/10 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-start gap-6 px-4">
              <span className="text-[#D7E2EA]/40 font-mono text-base uppercase tracking-widest flex md:items-center md:h-8">2021 - 2024</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#D7E2EA] text-xl md:text-2xl md:leading-8 font-bold">南开大学 (Nankai University)</h3>
                <p className="text-[#D7E2EA]/60 font-light leading-relaxed max-w-xl">
                  本科 · 视觉传达设计 (Visual Communication Design)
                </p>
              </div>
              <div className="text-right opacity-60 flex md:items-center md:justify-end md:h-8 md:self-start">
                 <span className="text-[#D7E2EA] text-xs uppercase tracking-widest">Bachelor Degree</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
