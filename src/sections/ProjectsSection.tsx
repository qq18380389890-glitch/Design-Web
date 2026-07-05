import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const PROJECTS = [
  {
    num: "01",
    tag: "AIGC SYSTEM",
    name: "灵感画布",
    desc: "0-1 设计全模态 AIGC 画布，构建低噪节点流转与智能衍生体验。",
    accent: "#31D0AA",
    images: [
      "/src/assets/images/regenerated_image_1778994380936.png",
      "/src/assets/images/regenerated_image_1778994390348.png"
    ],
    pdfLink: "/pdfs/linggan-canvas-case.pdf",
    capsuleText: "PDF CASE STUDY / AIGC 画布设计",
    metaText: "CASE 001  /  AIGC CANVAS"
  },
  {
    num: "02",
    tag: "ENTERPRISE",
    name: "小智协同",
    desc: "将管线管理方法论产品化，打通任务派发、流程编排与状态追踪。",
    accent: "#2F80FF",
    images: [
      "/src/assets/images/regenerated_image_1779017603652.png",
      "/src/assets/images/regenerated_image_1778994390348.png"
    ],
    pdfLink: "/pdfs/xiaozhixietong.pdf",
    capsuleText: "PDF CASE STUDY / 协同流程设计",
    metaText: "CASE 002  /  COLLAB SYSTEM"
  },
  {
    num: "03",
    tag: "DESIGN SYSTEM",
    name: "INTRANETR",
    desc: "升级企业内网多端体验，沉淀高复用组件与统一内容管理规范。",
    accent: "#F58220",
    images: [
      "/src/assets/images/regenerated_image_1779017627995.png",
      "/src/assets/images/regenerated_image_1778994380936.png"
    ],
    pdfLink: "/pdfs/INTRANETR.pdf",
    capsuleText: "PDF CASE STUDY / 企业内网设计",
    metaText: "CASE 003  /  INTRANET UI"
  }
];

interface ProjectItemProps {
  project: (typeof PROJECTS)[number];
  index: number;
  progress: any;
}

function ProjectMeta({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div
      className="absolute top-12 right-12 hidden md:flex items-center gap-3 z-30 select-none pointer-events-none"
      style={{ opacity: 0.6 }}
    >
      <div className="w-14 h-[1px]" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />
      <span
        className="font-mono uppercase whitespace-nowrap"
        style={{
          fontSize: '9.5px',
          letterSpacing: '0.22em',
          color: 'rgba(255,255,255,0.28)',
          fontWeight: 600,
          lineHeight: 1
        }}
      >
        {project.metaText}
      </span>
      <div
        className="w-1 h-1 rounded-full"
        style={{
          backgroundColor: project.accent,
          opacity: 0.45
        }}
      />
    </div>
  );
}

function ProjectItem({ project, index, progress }: ProjectItemProps) {
  const start = index * 0.25;
  const scale = useTransform(progress, [start, 1], [1, 1 - (PROJECTS.length - index) * 0.02]);

  return (
    <div className="sticky top-20 md:top-32 w-full h-[720px] flex items-center justify-center pointer-events-none mb-[15vh]">
      <motion.div
        style={{
          scale,
          background: 'linear-gradient(145deg, rgba(26,29,35,0.96) 0%, rgba(13,15,19,0.98) 56%, rgba(7,8,10,1) 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 56px 120px -34px rgba(0,0,0,0.92)'
        }}
        className="relative w-full h-full rounded-[40px] md:rounded-[60px] p-10 md:p-20 overflow-hidden pointer-events-auto flex flex-col md:grid md:grid-cols-12 gap-12 items-center"
      >
        {/* Background Layers - Micro-Circuitry Aesthetic */}
        <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
          {/* Circuit Logic Traces - Complex path patterns (significantly lowered opacity) */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.012]" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,0 V200 H300 L350,250 V500" stroke="white" fill="none" strokeWidth="0.5" />
            <path d="M110,0 V195 H295 L345,245 V500" stroke="white" fill="none" strokeWidth="0.5" />
            <path d="M800,800 V600 H600 L550,550 V300" stroke="white" fill="none" strokeWidth="0.5" />
            <path d="M810,800 V605 H605 L555,555 V305" stroke="white" fill="none" strokeWidth="0.5" />
            {/* Solder Points */}
            <rect x="347" y="247" width="6" height="6" fill="white" fillOpacity="0.2" />
            <rect x="552" y="552" width="6" height="6" fill="white" fillOpacity="0.2" />
          </svg>

          {/* Data Bus Blocks - Bottom Edge */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1 opacity-20">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-white/40"></div>
            ))}
          </div>

          {/* Component Code Cluster - Top Right (Hidden on mobile) */}
          <ProjectMeta project={project} />

          {/* Massive Number - The Master Chip (Opacity lowered to 0.006) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.006] scale-[1.1]">
            <span className="text-[540px] font-black text-white italic leading-none select-none tracking-tighter">
              {project.num}
            </span>
          </div>

          {/* Micro-Annotation - Corner logic (Opacity lowered to text-white/5) */}
          <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[7px] font-mono text-white/5 vertical-text tracking-widest italic">
            VOLT_STAB: 1.2V // CLOCK: 4.8GHz
          </div>

          {/* Texture Overlay - local CSS grain, avoids external network request */}
          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-screen"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)',
              backgroundSize: '18px 18px'
            }}
          ></div>

          {/* Status Rail - Right (Opacity lowered to 0.2) */}
          <div className="absolute top-1/4 bottom-1/4 right-8 w-[1px] bg-white/5 flex flex-col items-center justify-between py-4 opacity-20">
            <div className="w-2 h-2 border border-white rotate-45"></div>
            <div className="flex-1 w-[0.5px] bg-white/20 my-4"></div>
            <div className="w-1 h-1 bg-white"></div>
          </div>
        </div>

        {/* Narrative Side (Left 4 units) */}
        <div className="md:col-span-4 flex flex-col gap-10 z-20 relative">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span style={{ color: project.accent }} className="text-[14px] font-bold tracking-[0.3em] uppercase">{project.tag}</span>
              <div className="h-[1px] w-6 bg-white/20 hidden xs:block"></div>
              <span className="text-white font-medium text-[14px] tracking-[0.2em] uppercase">Archive 0{project.num}</span>
            </div>
            <h3 className="text-white font-bold uppercase text-3xl md:text-[48px] leading-[1.1] tracking-tight">
              {project.name}
            </h3>
            {/* Low-profile mini information capsule */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-white/10 bg-white/[0.05] text-[#D7E2EA]/65 text-[11px] md:text-[12px] font-mono tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>{project.capsuleText || "2 PREVIEW PAGES / PDF CASE STUDY"}</span>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10 items-start">
            <p className="text-white/70 text-[15px] md:text-[18px] font-normal leading-relaxed max-w-[340px]">
              {project.desc}
            </p>
            {/* Refined primary light button with dynamic accent arrow circle */}
            <a
              href={project.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 pl-6 pr-2 py-2 bg-[#F4F7FA] text-[#0C0C0C] rounded-full text-[14px] font-bold tracking-[0.05em] transition-all hover:translate-y-[-2px] active:translate-y-[0px] hover:shadow-lg shadow-black/40"
            >
              <span>查看案例</span>
              <div style={{ backgroundColor: project.accent }} className="flex items-center justify-center w-8 h-8 rounded-full text-white transition-transform duration-300 group-hover:-rotate-45">
                <ArrowRight className="w-4.5 h-4.5" />
              </div>
            </a>
          </div>
        </div>

        {/* Visual Stage (Right 8 units) */}
        <div className="md:col-span-8 relative w-full h-full flex items-center justify-end z-20">
          {/* Primary Visual - Paper backer with F4F7FA border, rounded inside */}
          <div className="relative w-full max-w-[720px] aspect-video rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#F4F7FA] shadow-2xl z-0 transform">
            <img
              src={project.images[0]}
              alt=""
              className="w-full h-full object-cover rounded-[24px] md:rounded-[40px] grayscale-[0.1] hover:grayscale-0 hover:scale-105 transition-all duration-[1.5s] ease-out"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-20 sm:-mt-24 md:-mt-28 z-20 relative pt-40 pb-32 shadow-[0_-50px_100px_rgba(0,0,0,0.8)] border-t border-t-white/5"
    >
      <div className="container-wide">
        <SectionHeader title="精选作品" subtitle="SELECTED WORK" />

        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <ProjectItem
              key={i}
              project={project}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
