import React from 'react';
import { Mail, Phone } from "lucide-react";

export default function FooterSection() {
  const quickAccess = [
    { name: "关于我", link: "#about" },
    { name: "专业服务", link: "#services" },
    { name: "精选作品", link: "#projects" },
    { name: "与我沟通", link: "#contact" }
  ];

  return (
    <footer
      id="contact"
      className="overflow-hidden bg-[#0C0C0C] py-14 text-[#D7E2EA] md:py-24"
    >
      <div className="container-wide grid gap-12 md:grid-cols-[1.4fr_0.6fr_0.8fr] md:items-start">
        <div>
          <p className="text-[clamp(2.6rem,7.5vw,94px)] font-black uppercase leading-[0.85] tracking-tight text-transparent" style={{ WebkitTextStroke: '1.2px #D7E2EA' }}>
            YUHANG
            <br />
            DESIGNER
          </p>
        </div>

        <div className="md:pt-4">
          <p className="mb-6 font-black uppercase tracking-[0.4em] opacity-30" style={{ fontSize: '14px' }}>
            快速入口
          </p>
          <div className="grid gap-3 text-sm font-bold">
            {quickAccess.map((item, i) => (
              <a key={item.name} href={item.link} className="w-fit transition hover:opacity-50 tracking-wider" style={i === 0 ? { fontSize: '14px' } : undefined}>
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="md:pt-4">
          <p className="mb-6 font-black uppercase tracking-[0.4em] opacity-30" style={{ fontSize: '14px' }}>
            与我沟通
          </p>
          <div className="grid gap-4 text-sm font-bold leading-relaxed">
            <a className="flex items-center gap-3 transition hover:opacity-50 tracking-wider" href="mailto:1611146752@qq.com">
              <Mail size={14} className="opacity-40" /> 1611146752@qq.com
            </a>
            <a className="flex items-center gap-3 transition hover:opacity-50 tracking-wider" href="tel:18380389890">
              <Phone size={14} className="opacity-40" /> 18380389890
            </a>
            <p className="opacity-30 uppercase tracking-[0.2em] mt-2" style={{ fontSize: '14px' }}>成都 / UI&UX 设计师</p>
          </div>
        </div>
      </div>

      <div className="container-wide mt-12 flex items-end gap-2 sm:gap-3">
        <div className="h-16 flex-1 rounded-[28px] bg-[#6D39FF] sm:h-24" />
        <div className="grid h-16 w-16 grid-cols-2 gap-2 sm:h-24 sm:w-24">
          <span className="rounded-full bg-[#B9FF3A]" />
          <span className="rounded-full bg-[#B9FF3A]" />
          <span className="rounded-full bg-[#B9FF3A]" />
          <span className="rounded-full bg-[#B9FF3A]" />
        </div>
        <div className="h-16 flex-1 rounded-l-full rounded-r-[22px] bg-[#D7E2EA] sm:h-24" />
        <div className="h-16 flex-1 rounded-full bg-[#7649FF] sm:h-24" />
        <div
          className="h-16 flex-1 bg-[#D7E2EA] sm:h-24"
          style={{
            clipPath: "polygon(0 0,62% 0,100% 50%,62% 100%,0 100%,36% 50%)",
          }}
        />
        <div className="h-16 flex-1 rounded-l-full bg-[#FFB13B] sm:h-24" />
        <div className="h-16 flex-1 rounded-full bg-[#FF2F9B] sm:h-24" />
      </div>
    </footer>
  );
}
