import React from 'react';
import { FunnelStep, StepType } from '../types/funnel';
import { 
  ArrowDown, 
  Sparkles, 
  CheckCircle2, 
  CreditCard, 
  Mail, 
  Users, 
  Layout, 
  TrendingUp,
  Info
} from 'lucide-react';

interface FunnelFlowVisualizerProps {
  steps: FunnelStep[];
  onSelectStep?: (step: FunnelStep) => void;
  interactive?: boolean;
}

export const FunnelFlowVisualizer: React.FC<FunnelFlowVisualizerProps> = ({
  steps,
  onSelectStep,
  interactive = true
}) => {
  const getStepStyle = (type: StepType, isPrimary?: boolean) => {
    switch (type) {
      case 'traffic':
        return {
          bg: 'bg-[#0B111A]/90',
          border: 'border-zinc-700/60 hover:border-zinc-500',
          badgeBg: 'bg-zinc-800 text-zinc-300',
          accentText: 'text-zinc-400',
          icon: <Users className="w-3 h-3 text-zinc-400" />,
          typeLabel: 'ترافيك ودخول'
        };
      case 'page':
        return {
          bg: 'bg-[#101823]',
          border: 'border-[#F2C45C]/25 hover:border-[#F2C45C]/60',
          badgeBg: 'bg-[#101823] text-[#F2C45C] border border-[#F2C45C]/30',
          accentText: 'text-[#F2C45C]',
          icon: <Layout className="w-3 h-3 text-[#F2C45C]" />,
          typeLabel: 'صفحة تفاعلية'
        };
      case 'conversion':
        return {
          bg: isPrimary ? 'bg-[#14202d] shadow-sm' : 'bg-[#101823]',
          border: 'border-[#F2C45C] ring-1 ring-[#F2C45C]/30',
          badgeBg: 'bg-[#F2C45C] text-[#05070B] font-bold',
          accentText: 'text-[#F2C45C]',
          icon: <Sparkles className="w-3 h-3 text-[#05070B]" />,
          typeLabel: 'نقطة التحويل'
        };
      case 'checkout':
        return {
          bg: 'bg-[#101c24]',
          border: 'border-emerald-500/50 hover:border-emerald-400',
          badgeBg: 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30',
          accentText: 'text-emerald-400',
          icon: <CreditCard className="w-3 h-3 text-emerald-400" />,
          typeLabel: 'شراء ودفع'
        };
      case 'upsell':
        return {
          bg: 'bg-[#161a26]',
          border: 'border-amber-400/40 hover:border-amber-300',
          badgeBg: 'bg-amber-950/80 text-amber-300 border border-amber-500/30',
          accentText: 'text-amber-300',
          icon: <TrendingUp className="w-3 h-3 text-amber-300" />,
          typeLabel: 'ترقية ما بعد الشراء'
        };
      case 'followup':
        return {
          bg: 'bg-[#0d1624]',
          border: 'border-sky-500/30 hover:border-sky-400',
          badgeBg: 'bg-sky-950/80 text-sky-300 border border-sky-500/30',
          accentText: 'text-sky-300',
          icon: <Mail className="w-3 h-3 text-sky-300" />,
          typeLabel: 'متابعة آلية مؤتمتة'
        };
      case 'outcome':
      default:
        return {
          bg: 'bg-[#0f1d1c]',
          border: 'border-[#19C878]/50 hover:border-[#19C878]',
          badgeBg: 'bg-[#19C878]/20 text-[#19C878] border border-[#19C878]/40',
          accentText: 'text-[#19C878]',
          icon: <CheckCircle2 className="w-3 h-3 text-[#19C878]" />,
          typeLabel: 'الهدف النهائي'
        };
    }
  };

  return (
    <div className="relative w-full rounded-xl bg-[#090E16]/80 p-3 sm:p-3.5 border border-[#F2C45C]/15 backdrop-blur-sm">
      {/* Decorative Blueprint Grid Lines */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-10 rounded-xl"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(242, 196, 92, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(242, 196, 92, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header bar of visualizer */}
      <div className="relative z-10 flex items-center justify-between pb-2 mb-2 border-b border-zinc-800/80 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F2C45C]" />
          <span className="font-bold tracking-wide text-[#F7F3E8] text-[11.5px]">المخطط الإرشادي للتسلسل (Visual Sequence Flow)</span>
        </div>
        <div className="flex items-center gap-2 text-[10.5px] text-zinc-400">
          {interactive && (
            <span className="text-[#F2C45C] bg-[#F2C45C]/10 px-2 py-0.5 rounded text-[9.5px] flex items-center gap-1">
              <Info className="w-3 h-3" />
              انقر للتفاصيل والتكتيكات
            </span>
          )}
        </div>
      </div>

      {/* Step Nodes Flow Container */}
      <div className="relative z-10 flex flex-col gap-1">
        {steps.map((step, index) => {
          const style = getStepStyle(step.type, step.isPrimary);
          const isLast = index === steps.length - 1;

          return (
            <div key={step.id} className="relative flex flex-col items-center">
              {/* Individual Step Card */}
              <div
                onClick={() => interactive && onSelectStep && onSelectStep(step)}
                className={`w-full text-right transition-all duration-200 rounded-lg p-2 sm:p-2.5 border ${style.bg} ${style.border} ${
                  interactive ? 'cursor-pointer hover:border-[#F2C45C]/70 hover:bg-[#121c2a]' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  {/* Left: Step Type Tag & Benchmark */}
                  <div className="flex items-center gap-1.5 order-2">
                    {step.benchmarkRate && (
                      <span className="font-mono text-[9.5px] font-semibold text-[#19C878] bg-[#19C878]/10 px-1.5 py-0.5 rounded border border-[#19C878]/25 tabular-nums">
                        {step.benchmarkRate}
                      </span>
                    )}
                    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9.5px] font-medium ${style.badgeBg}`}>
                      {style.icon}
                      <span>{style.typeLabel}</span>
                    </span>
                  </div>

                  {/* Right: Step Number & Title */}
                  <div className="flex items-center gap-2 order-1">
                    <span className="flex items-center justify-center w-5 h-5 rounded bg-[#05070B] border border-zinc-700/80 font-mono text-[10px] font-bold text-[#F2C45C] tabular-nums shrink-0">
                      {index + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-xs sm:text-[13px] text-[#F7F3E8] leading-tight">
                        {step.titleAr}
                      </h4>
                      <span className="font-mono text-[9.5px] text-zinc-400 hidden sm:inline">
                        / {step.titleEn}
                      </span>
                      {step.isPrimary && (
                        <span className="text-[9px] bg-[#F2C45C] text-[#05070B] px-1 py-0.2 rounded font-black tracking-tight">
                          إغلاق
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step Description */}
                <p className="mt-1 text-[11px] text-[#AAB2BF] leading-snug line-clamp-2">
                  {step.descriptionAr}
                </p>

                {/* Tactical Tip Mini Callout (Compact Inline) */}
                {step.tacticalTip && (
                  <div className="mt-1 pt-1 border-t border-zinc-800/40 flex items-center justify-between text-[10px] text-amber-200/90">
                    <div className="flex items-center gap-1 truncate">
                      <Sparkles className="w-3 h-3 text-[#F2C45C] shrink-0" />
                      <span className="truncate"><strong className="text-[#F2C45C]">تلميحة:</strong> {step.tacticalTip}</span>
                    </div>
                    {interactive && (
                      <span className="text-zinc-500 hover:text-zinc-300 text-[9px] shrink-0 font-mono">
                        عرض المزيد ←
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Connecting Sleek Down Arrow between steps */}
              {!isLast && (
                <div className="h-3.5 flex items-center justify-center my-0.5">
                  <div className="w-px h-full bg-gradient-to-b from-[#F2C45C]/40 to-[#F2C45C] relative flex items-center justify-center">
                    <ArrowDown className="w-2.5 h-2.5 text-[#F2C45C] absolute -bottom-1" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
