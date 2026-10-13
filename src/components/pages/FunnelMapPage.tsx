import React from 'react';
import { A4PageWrapper } from '../A4PageWrapper';
import { FunnelMapData, FunnelStep } from '../../types/funnel';
import { FunnelFlowVisualizer } from '../FunnelFlowVisualizer';
import { 
  Target, 
  Users, 
  Radio, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Clock, 
  Layers
} from 'lucide-react';

interface FunnelMapPageProps {
  funnel: FunnelMapData;
  pageNumber: number;
  onSelectStep?: (step: FunnelStep) => void;
}

export const FunnelMapPage: React.FC<FunnelMapPageProps> = ({
  funnel,
  pageNumber,
  onSelectStep
}) => {
  return (
    <A4PageWrapper 
      pageNumber={pageNumber} 
      categoryLabel={`MAP #${String(funnel.number).padStart(2, '0')} // ${funnel.nameEn.toUpperCase()}`}
    >
      <div className="flex flex-col justify-between h-full space-y-2.5">
        {/* Top Header Block */}
        <div>
          <div className="flex items-center justify-between gap-2 border-b border-[#F2C45C]/15 pb-2 mb-1.5">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#F2C45C] bg-[#101823] px-2 py-0.5 rounded border border-[#F2C45C]/30 tabular-nums">
                  MAP #{String(funnel.number).padStart(2, '0')}
                </span>
                <span className="font-mono text-[10px] text-zinc-400">
                  {funnel.nameEn}
                </span>
                <span className="text-zinc-600">·</span>
                <span className="text-[10px] text-[#AAB2BF]">
                  صعوبة: <strong className="text-[#F2C45C]">{funnel.complexity}</strong>
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#F7F3E8] leading-tight">
                {funnel.nameAr}
              </h2>
            </div>
            
            <div className="hidden sm:flex flex-col items-end text-left shrink-0">
              <span className="text-[9px] text-zinc-500 font-mono">EST. LAUNCH</span>
              <span className="text-xs font-mono font-bold text-[#19C878] flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {funnel.estimatedTimeToLaunch}
              </span>
            </div>
          </div>

          {/* Subtitle / Tagline */}
          <p className="text-[11.5px] text-[#F2C45C]/90 font-medium mb-2 leading-snug">
            {funnel.tagline}
          </p>

          {/* Quick Specs: Goal, Best For, Traffic Sources (Clean 3-Column Strip) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-right text-[11px] mb-1.5">
            <div className="p-2 rounded-lg bg-[#101823] border border-zinc-800">
              <span className="font-bold text-[#F2C45C] flex items-center gap-1 mb-0.5 text-[11px]">
                <Target className="w-3 h-3 text-[#F2C45C] shrink-0" />
                الهدف الاستراتيجي:
              </span>
              <p className="text-[#AAB2BF] text-[10px] sm:text-[10.5px] leading-snug line-clamp-2">
                {funnel.goal}
              </p>
            </div>

            <div className="p-2 rounded-lg bg-[#101823] border border-zinc-800">
              <span className="font-bold text-[#19C878] flex items-center gap-1 mb-0.5 text-[11px]">
                <Users className="w-3 h-3 text-[#19C878] shrink-0" />
                مناسب لـ:
              </span>
              <p className="text-[#AAB2BF] text-[10px] sm:text-[10.5px] leading-snug line-clamp-2">
                {funnel.bestFor}
              </p>
            </div>

            <div className="p-2 rounded-lg bg-[#101823] border border-zinc-800">
              <span className="font-bold text-sky-400 flex items-center gap-1 mb-0.5 text-[11px]">
                <Radio className="w-3 h-3 text-sky-400 shrink-0" />
                مصادر الترافيك الفعالة:
              </span>
              <div className="flex flex-wrap gap-1 mt-0.5">
                {funnel.trafficSources.slice(0, 3).map((source, idx) => (
                  <span key={idx} className="bg-[#05070B] text-zinc-300 text-[9px] px-1.5 py-0.2 rounded border border-zinc-800">
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* HERO: The Visual Funnel Flow Map */}
        <div className="my-1">
          <FunnelFlowVisualizer steps={funnel.steps} onSelectStep={onSelectStep} />
        </div>

        {/* Strategic Analysis Grid: Why it works, When to use, Common Mistake, Implementation Note */}
        <div className="space-y-1.5 text-right text-[11px]">
          {/* Why it works & When to use row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            <div className="p-2 rounded-lg bg-[#0B111A] border border-[#F2C45C]/15">
              <span className="font-bold text-[#F2C45C] flex items-center gap-1 mb-1 text-[11px]">
                <CheckCircle2 className="w-3 h-3 text-[#F2C45C] shrink-0" />
                لماذا ينجح هذا الـ Funnel؟
              </span>
              <ul className="space-y-0.5 text-[#AAB2BF] text-[10px]">
                {funnel.whyItWorks.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-1 leading-tight">
                    <span className="text-[#F2C45C] font-mono">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-2 rounded-lg bg-[#0B111A] border border-[#F2C45C]/15 flex flex-col justify-between">
              <div>
                <span className="font-bold text-[#19C878] flex items-center gap-1 mb-1 text-[11px]">
                  <Sparkles className="w-3 h-3 text-[#19C878] shrink-0" />
                  متى تستخدمه بالتحديد؟
                </span>
                <p className="text-[#AAB2BF] text-[10px] leading-snug">
                  {funnel.whenToUse}
                </p>
              </div>
              <div className="mt-1 pt-1 border-t border-zinc-800/80 text-[9.5px] text-zinc-400 flex items-center justify-between font-mono">
                <span>المؤشر الحاسم (KPI):</span>
                <span className="text-[#19C878] font-bold">{funnel.keyMetric}</span>
              </div>
            </div>
          </div>

          {/* Warnings & Implementation Note row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            <div className="p-2 rounded-lg bg-amber-950/20 border border-amber-500/25">
              <span className="font-bold text-amber-300 flex items-center gap-1 mb-0.5 text-[11px]">
                <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0" />
                أشهر خطأ تنفيذي:
              </span>
              <p className="text-amber-100/90 text-[10px] leading-snug">
                {funnel.commonMistake}
              </p>
            </div>

            <div className="p-2 rounded-lg bg-[#101823] border border-[#F2C45C]/25">
              <span className="font-bold text-[#F2C45C] flex items-center gap-1 mb-0.5 text-[11px]">
                <Layers className="w-3 h-3 text-[#F2C45C] shrink-0" />
                ملاحظة تنفيذية لرفع التحويل:
              </span>
              <p className="text-[#F7F3E8]/90 text-[10px] leading-snug">
                {funnel.implementationNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </A4PageWrapper>
  );
};
