import React from 'react';
import { A4PageWrapper } from '../A4PageWrapper';
import { COMMON_MISTAKES } from '../../data/funnelsData';
import { AlertOctagon, CheckCircle2, XCircle } from 'lucide-react';

interface CommonMistakesPageProps {
  pageNumber: number;
}

export const CommonMistakesPage: React.FC<CommonMistakesPageProps> = ({ pageNumber }) => {
  return (
    <A4PageWrapper pageNumber={pageNumber} categoryLabel="COMMON PITFALLS & AUDIT">
      <div className="flex flex-col justify-between h-full py-2">
        {/* Header Block */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-1">
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            <span>تشخيص الأعطال الشائعة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F3E8] leading-tight">
            أشهر أخطاء بناء الـ Funnels
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB2BF] mt-1 font-mono">
            6 Costly Blunders That Destroy Conversion & How To Fix Them
          </p>
        </div>

        {/* 6 Mistakes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2">
          {COMMON_MISTAKES.map((item) => (
            <div 
              key={item.number} 
              className="p-3 rounded-xl bg-[#101823] border border-rose-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-2 mb-1.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">
                    {item.number}
                  </span>
                  <h3 className="font-bold text-xs sm:text-[12.5px] text-[#F7F3E8] leading-snug">
                    {item.titleAr}
                  </h3>
                </div>

                <div className="mb-2 p-2 rounded bg-rose-950/20 border border-rose-900/30 text-[10.5px] text-rose-200/90 leading-relaxed">
                  <div className="flex items-center gap-1 font-bold text-rose-400 mb-0.5">
                    <XCircle className="w-3 h-3 text-rose-400 shrink-0" />
                    <span>الضرر والنتيجة:</span>
                  </div>
                  {item.consequenceAr}
                </div>
              </div>

              <div className="p-2 rounded bg-emerald-950/20 border border-emerald-900/30 text-[10.5px] text-emerald-200/90 leading-relaxed">
                <div className="flex items-center gap-1 font-bold text-[#19C878] mb-0.5">
                  <CheckCircle2 className="w-3 h-3 text-[#19C878] shrink-0" />
                  <span>الحل الجذري:</span>
                </div>
                {item.solutionAr}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom audit callout */}
        <div className="p-3 rounded-lg bg-[#0B111A] border border-[#F2C45C]/20 text-[11px] text-[#AAB2BF] flex items-center justify-between">
          <span>افحص الـ Funnel الخاص بك قبل إطلاق الحملة: إذا وجدت أحد هذه الأخطاء، أصلحه فوراً قبل إنفاق دولار واحد في الإعلانات.</span>
          <span className="font-mono text-[#F2C45C] font-bold">PRE-LAUNCH AUDIT</span>
        </div>
      </div>
    </A4PageWrapper>
  );
};
