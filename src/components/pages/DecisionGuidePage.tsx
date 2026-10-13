import React from 'react';
import { A4PageWrapper } from '../A4PageWrapper';
import { DECISION_GUIDE } from '../../data/funnelsData';
import { Compass, CheckCircle2, ArrowLeft, Target, Sparkles } from 'lucide-react';

interface DecisionGuidePageProps {
  pageNumber: number;
}

export const DecisionGuidePage: React.FC<DecisionGuidePageProps> = ({ pageNumber }) => {
  return (
    <A4PageWrapper pageNumber={pageNumber} categoryLabel="STRATEGIC DECISION GUIDE">
      <div className="flex flex-col justify-between h-full py-2">
        {/* Header Block */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#F2C45C] mb-1">
            <Compass className="w-4 h-4 text-[#F2C45C]" />
            <span>بوصلة الاختيار</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F3E8] leading-tight">
            كيف تختار الـ Funnel المناسبة لمشروعك؟
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB2BF] mt-1 font-mono">
            Strategic Decision Tree: Aligning Funnel Structure With Business Reality
          </p>
        </div>

        {/* Intro context */}
        <p className="text-xs sm:text-sm text-[#F7F3E8]/90 leading-relaxed my-2">
          لا تبدأ أبداً بالسؤال: <em>"ما هو الفانل الأكثر شهرة؟"</em> بل اسأل: <em>"ما هو السلوك الطبيعي لعميلي قبل أن يثق بي؟"</em>. فيما يلي مسار اتخاذ القرار الموصى به بناءً على نموذج عملك الحالي:
        </p>

        {/* Decision Pathways List */}
        <div className="space-y-2.5 my-2">
          {DECISION_GUIDE.map((item, index) => (
            <div 
              key={index} 
              className="p-3 sm:p-3.5 rounded-xl bg-[#101823] border border-[#F2C45C]/15 flex flex-col gap-1.5"
            >
              <div className="flex items-start gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F2C45C]/10 text-[#F2C45C] text-xs font-mono font-bold shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-xs sm:text-[13px] text-[#F7F3E8] leading-snug">
                    {item.condition}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs font-bold text-[#19C878]">
                    <span>الـ Funnel الموصى به:</span>
                    <span className="font-mono bg-[#05070B] px-2 py-0.5 rounded border border-[#19C878]/30">
                      {item.recommended}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-[#AAB2BF] leading-relaxed">
                    <strong>السبب الاستراتيجي:</strong> {item.reason}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Rule of Thumb */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#101823] to-[#0B111A] border border-[#F2C45C]/25 text-[11.5px] text-[#F7F3E8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F2C45C] shrink-0" />
            <span>
              <strong>قاعدة ذهبية:</strong> كلما زاد سعر العرض، زادت الحاجة إلى محتوى أطول (Long-Form) أو مكالمة فردية حية.
            </span>
          </div>
          <span className="font-mono text-xs text-[#F2C45C] font-bold">GOLDEN RULE</span>
        </div>
      </div>
    </A4PageWrapper>
  );
};
