import React from 'react';
import { FunnelStep } from '../types/funnel';
import { X, Sparkles, TrendingUp, HelpCircle, CheckCircle2 } from 'lucide-react';

interface StepDetailModalProps {
  step: FunnelStep | null;
  onClose: () => void;
}

export const StepDetailModal: React.FC<StepDetailModalProps> = ({ step, onClose }) => {
  if (!step) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#0B111A] border border-[#F2C45C]/30 p-6 text-right shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-1.5 rounded-lg bg-[#101823] text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 rounded bg-[#F2C45C]/10 text-[#F2C45C] text-xs font-mono font-bold">
            {step.type.toUpperCase()}
          </span>
          {step.benchmarkRate && (
            <span className="px-2 py-0.5 rounded bg-[#19C878]/10 text-[#19C878] text-xs font-mono font-semibold border border-[#19C878]/30">
              معدل التحويل المتوقع: {step.benchmarkRate}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-[#F7F3E8] mb-1">
          {step.titleAr}
        </h3>
        <p className="font-mono text-xs text-zinc-400 mb-4">
          {step.titleEn}
        </p>

        {/* Description */}
        <div className="p-3 rounded-xl bg-[#101823] border border-zinc-800/80 mb-4 text-xs sm:text-sm text-[#AAB2BF] leading-relaxed">
          {step.descriptionAr}
        </div>

        {/* Tactical Advice & Micro-copy Tip */}
        {step.tacticalTip && (
          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-[#F2C45C]/30 text-xs sm:text-[13px] text-amber-200/90 leading-relaxed mb-4">
            <div className="flex items-center gap-1.5 font-bold text-[#F2C45C] mb-1">
              <Sparkles className="w-4 h-4 text-[#F2C45C]" />
              <span>توجيه تكتيكي لتحسين هذه الخطوة:</span>
            </div>
            {step.tacticalTip}
          </div>
        )}

        {/* Action button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-lg bg-[#F2C45C] text-[#05070B] font-bold text-xs sm:text-sm hover:bg-[#D99B25] transition-colors"
        >
          فهمت، العودة للخريطة
        </button>
      </div>
    </div>
  );
};
