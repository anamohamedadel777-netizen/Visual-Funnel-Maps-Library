import React from 'react';
import { A4PageWrapper } from '../A4PageWrapper';
import { Layers, ShieldCheck, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export const CoverPage: React.FC = () => {
  return (
    <A4PageWrapper pageNumber={1} showChrome={false} categoryLabel="COVER">
      <div className="relative flex flex-col justify-between h-full py-8 sm:py-12 text-center select-none overflow-hidden">
        {/* Subtle Geometric Linear Funnel Flow Artwork */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <svg width="600" height="700" viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,40 550,40 450,220 150,220" stroke="#F2C45C" strokeWidth="1.5" strokeDasharray="6 6" />
            <polygon points="150,250 450,250 380,410 220,410" stroke="#F2C45C" strokeWidth="2" />
            <polygon points="220,440 380,440 330,580 270,580" stroke="#F2C45C" strokeWidth="2.5" />
            <circle cx="300" cy="640" r="28" stroke="#19C878" strokeWidth="3" />
            <line x1="300" y1="40" x2="300" y2="612" stroke="#F2C45C" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Top Header Badge & Tagline */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101823] border border-[#F2C45C]/35 text-[#F2C45C] text-xs font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F2C45C]" />
            <span className="font-mono uppercase tracking-widest text-[11px]">PREMIUM STRATEGIC BONUS</span>
          </div>
          <p className="text-xs sm:text-sm text-[#AAB2BF] tracking-wide font-medium">
            الدليل البصري التنفيذي لأصحاب المشاريع وصناع الـ Funnels
          </p>
        </div>

        {/* Core Center Title & Typography Hero */}
        <div className="relative z-10 my-auto py-8 flex flex-col items-center">
          {/* Subtle Decorative Golden Accent Line */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#F2C45C] to-transparent mb-6" />

          {/* Main Arabic Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F7F3E8] leading-[1.2] max-w-2xl">
            مكتبة خرائط الـ <span className="text-[#F2C45C] underline decoration-[#F2C45C]/40 underline-offset-8">Funnels</span>
          </h1>

          {/* English Subtitle */}
          <h2 className="mt-4 font-sans text-xl sm:text-2xl font-bold tracking-widest text-[#D99B25] uppercase">
            Visual Funnel Maps Library
          </h2>

          {/* Supporting Primary Arabic Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-[#F7F3E8]/90 max-w-xl font-normal leading-relaxed">
            خرائط بصرية تساعدك على فهم رحلة العميل وتسلسل الخطوات قبل أن تبدأ في التصميم
          </p>

          {/* Secondary Subtitle */}
          <p className="mt-3 text-xs sm:text-sm text-[#AAB2BF] max-w-lg font-light">
            من الفكرة إلى التحويل — افهم المسار، اضبط الرسالة، ولا تبنِ صفحة عشوائية بعد اليوم
          </p>

          {/* Quick Pillars Ribbon */}
          <div className="mt-10 grid grid-cols-3 gap-3 w-full max-w-lg text-right">
            <div className="p-3 rounded-lg bg-[#101823]/80 border border-[#F2C45C]/15 text-center">
              <span className="block font-mono text-xl font-black text-[#F2C45C] tabular-nums">24+</span>
              <span className="text-[11px] text-[#AAB2BF]">خريطة متكاملة</span>
            </div>
            <div className="p-3 rounded-lg bg-[#101823]/80 border border-[#F2C45C]/15 text-center">
              <span className="block font-mono text-xl font-black text-[#F2C45C] tabular-nums">10</span>
              <span className="text-[11px] text-[#AAB2BF]">تصنيفات بيعية</span>
            </div>
            <div className="p-3 rounded-lg bg-[#101823]/80 border border-[#F2C45C]/15 text-center">
              <span className="block font-mono text-xl font-black text-[#19C878] tabular-nums">100%</span>
              <span className="text-[11px] text-[#AAB2BF]">مخططات تنفيذية</span>
            </div>
          </div>
        </div>

        {/* Bottom Publisher & Quality Guarantee */}
        <div className="relative z-10 pt-4 border-t border-[#F2C45C]/15 flex items-center justify-between text-xs text-[#AAB2BF]">
          <div className="flex items-center gap-2 text-right">
            <ShieldCheck className="w-4 h-4 text-[#F2C45C]" />
            <span>منتج استراتيجي مرجعي مصمم للطباعة والقراءة التنفيذية (A4 Format)</span>
          </div>
          <div className="font-mono text-[11px] text-[#F2C45C]">
            EDITION 2026 // 2.0
          </div>
        </div>
      </div>
    </A4PageWrapper>
  );
};
