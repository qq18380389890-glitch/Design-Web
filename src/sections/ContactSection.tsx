import React from 'react';
import FadeIn from '../components/FadeIn';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white rounded-t-[60px] sm:rounded-t-[80px] md:rounded-t-[100px] overflow-hidden relative">
      <div className="max-w-[1800px] mx-auto px-8 sm:px-12 md:px-20 lg:px-32 py-32 sm:py-48">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-24 lg:gap-40 items-center mb-48">
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <FadeIn delay={0.1}>
                <span className="text-[#0C0C0C]/30 uppercase text-xs sm:text-sm tracking-[0.6em] font-bold">Contact / 联系我</span>
              </FadeIn>
              <FadeIn delay={0.15}>
                <h2 className="text-[#0C0C0C] font-black uppercase leading-[0.85] tracking-tighter" style={{ fontSize: 'clamp(3rem, 7vw, 120px)' }}>
                  Let's create<br/>something<br/>wonderful.
                </h2>
              </FadeIn>
            </div>
            
            <div className="flex flex-col gap-12 border-t border-[#0C0C0C]/5 pt-16">
              <FadeIn delay={0.2} className="flex flex-col gap-4">
                <span className="text-[#0C0C0C]/20 uppercase text-[10px] tracking-widest font-bold">Official Channel / 渠道</span>
                <a href="mailto:1611146752@qq.com" className="text-[#0C0C0C] font-bold text-2xl sm:text-3xl md:text-4xl hover:tracking-tighter transition-all duration-300">
                  1611146752@qq.com
                </a>
              </FadeIn>
              <FadeIn delay={0.25} className="flex flex-col gap-4">
                <span className="text-[#0C0C0C]/20 uppercase text-[10px] tracking-widest font-bold">Priority Call / 手机</span>
                <a href="tel:18380389890" className="text-[#0C0C0C] font-bold text-2xl sm:text-3xl md:text-4xl hover:tracking-tighter transition-all duration-300">
                  +86 18380389890
                </a>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} className="relative w-full max-w-[240px] opacity-10 grayscale hover:opacity-100 transition-opacity duration-700">
              <img 
                src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
                alt="" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          </div>

          {/* Right Column - Form */}
          <FadeIn delay={0.4} className="bg-[#0C0C0C] p-10 sm:p-16 lg:p-20 rounded-[60px] lg:rounded-[80px] shadow-[0_100px_80px_rgba(0,0,0,0.1)] relative">
             <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-4">
                    <label className="text-white/20 uppercase text-[9px] tracking-[0.3em] font-bold">Name / 姓名</label>
                    <input type="text" placeholder="Your Name" className="bg-white/5 border-none rounded-2xl p-6 text-white text-sm focus:ring-1 focus:ring-white/20 transition-all outline-none" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-white/20 uppercase text-[9px] tracking-[0.3em] font-bold">Email / 邮件</label>
                    <input type="email" placeholder="example@qq.com" className="bg-white/5 border-none rounded-2xl p-6 text-white text-sm focus:ring-1 focus:ring-white/20 transition-all outline-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-white/20 uppercase text-[9px] tracking-[0.3em] font-bold">Inquiry / 咨询内容</label>
                  <textarea placeholder="Tell me about your project..." rows={4} className="bg-white/5 border-none rounded-3xl p-8 text-white text-sm focus:ring-1 focus:ring-white/20 transition-all outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="bg-white text-[#0C0C0C] font-bold py-8 rounded-full uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-[0.98] transition-all hover:bg-[#F0F0F0]">
                  Send Message / 发送
                </button>
             </form>
          </FadeIn>
        </div>

        {/* Brand/Legal Footer Integration */}
        <footer className="mt-32 pt-16 border-t border-[#0C0C0C]/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex items-center gap-8 text-[#0C0C0C]/20 text-[10px] uppercase tracking-[0.4em] font-bold">
                <span className="opacity-40">© 2024</span>
                <span>YIN YUHANG PORTFOLIO</span>
              </div>
              <div className="flex flex-wrap justify-center gap-10 text-[#0C0C0C]/30 text-[9px] uppercase tracking-[0.3em] font-black">
                   <a href="#" className="hover:text-[#0C0C0C] transition-colors">Behance</a>
                   <a href="#" className="hover:text-[#0C0C0C] transition-colors">Bilibili</a>
                   <a href="#" className="hover:text-[#0C0C0C] transition-colors">Zhihu</a>
                   <a href="#" className="hover:text-[#0C0C0C] transition-colors">LinkedIn</a>
              </div>
            </div>
        </footer>
      </div>
    </section>
  );
}
