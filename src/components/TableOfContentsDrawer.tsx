import React from 'react';
import { FUNNEL_MAPS } from '../data/funnelsData';
import { X, BookOpen, ChevronLeft, Sparkles, Layers, PenTool, AlertTriangle, Table } from 'lucide-react';

interface TableOfContentsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: number;
  onSelectPage: (page: number) => void;
}

export const TableOfContentsDrawer: React.FC<TableOfContentsDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  onSelectPage
}) => {
  if (!isOpen) return null;

  const handleJump = (page: number) => {
    onSelectPage(page);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm no-print">
      <div 
        className="w-full max-w-md h-full bg-[#0B111A] border-r border-[#F2C45C]/20 p-5 flex flex-col justify-between overflow-y-auto text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#F2C45C]" />
              <h3 className="font-extrabold text-sm sm:text-base text-[#F7F3E8]">
                فهرس الصفحات والخرائط
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded bg-[#101823] text-zinc-400 hover:text-white border border-zinc-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Section 1: Intro Chapters */}
          <div className="mb-4">
            <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider block mb-2">
              المقدمة والمنهجية
            </span>
            <div className="space-y-1">
              <button
                onClick={() => handleJump(1)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                  currentPage === 1 ? 'bg-[#F2C45C] text-[#05070B] font-bold' : 'hover:bg-[#101823] text-zinc-300'
                }`}
              >
                <span>غلاف الدليل (Cover Page)</span>
                <span className="font-mono text-[10px]">ص 01</span>
              </button>
              <button
                onClick={() => handleJump(2)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                  currentPage === 2 ? 'bg-[#F2C45C] text-[#05070B] font-bold' : 'hover:bg-[#101823] text-zinc-300'
                }`}
              >
                <span>ما هي خريطة الـ Funnel؟</span>
                <span className="font-mono text-[10px]">ص 02</span>
              </button>
              <button
                onClick={() => handleJump(3)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                  currentPage === 3 ? 'bg-[#F2C45C] text-[#05070B] font-bold' : 'hover:bg-[#101823] text-zinc-300'
                }`}
              >
                <span>كيف تستخدم هذه المكتبة؟</span>
                <span className="font-mono text-[10px]">ص 03</span>
              </button>
              <button
                onClick={() => handleJump(4)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                  currentPage === 4 ? 'bg-[#F2C45C] text-[#05070B] font-bold' : 'hover:bg-[#101823] text-zinc-300'
                }`}
              >
                <span>فهرس التصنيفات الـ 10</span>
                <span className="font-mono text-[10px]">ص 04</span>
              </button>
            </div>
          </div>

          {/* Section 2: 24 Funnel Maps */}
          <div className="mb-4">
            <span className="text-[10px] font-mono uppercase text-[#F2C45C] tracking-wider block mb-2">
              خرائط الـ Funnels الـ 24 المعتمدة
            </span>
            <div className="space-y-1 max-h-[360px] overflow-y-auto pr-1">
              {FUNNEL_MAPS.map((f, i) => {
                const pageNum = i + 5;
                const isSelected = currentPage === pageNum;
                return (
                  <button
                    key={f.id}
                    onClick={() => handleJump(pageNum)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                      isSelected ? 'bg-[#F2C45C] text-[#05070B] font-bold' : 'hover:bg-[#101823] text-zinc-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-mono text-[10px] text-zinc-500 tabular-nums">#{f.number}</span>
                      <span className="truncate">{f.nameAr}</span>
                    </div>
                    <span className="font-mono text-[10px] shrink-0">ص {String(pageNum).padStart(2, '0')}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Strategic Conclusion Pages */}
          <div>
            <span className="text-[10px] font-mono uppercase text-[#19C878] tracking-wider block mb-2">
              الأدلة الاستراتيجية ومساحة العمل
            </span>
            <div className="space-y-1">
              <button
                onClick={() => handleJump(29)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                  currentPage === 29 ? 'bg-[#F2C45C] text-[#05070B] font-bold' : 'hover:bg-[#101823] text-zinc-300'
                }`}
              >
                <span>كيف تختار الـ Funnel المناسبة؟</span>
                <span className="font-mono text-[10px]">ص 29</span>
              </button>
              <button
                onClick={() => handleJump(30)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                  currentPage === 30 ? 'bg-[#F2C45C] text-[#05070B] font-bold' : 'hover:bg-[#101823] text-zinc-300'
                }`}
              >
                <span>مصفوفة المقارنة الاستراتيجية</span>
                <span className="font-mono text-[10px]">ص 30</span>
              </button>
              <button
                onClick={() => handleJump(31)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                  currentPage === 31 ? 'bg-[#F2C45C] text-[#05070B] font-bold' : 'hover:bg-[#101823] text-zinc-300'
                }`}
              >
                <span>أشهر أخطاء بناء الـ Funnels</span>
                <span className="font-mono text-[10px]">ص 31</span>
              </button>
              <button
                onClick={() => handleJump(32)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                  currentPage === 32 ? 'bg-[#F2C45C] text-[#05070B] font-bold' : 'hover:bg-[#101823] text-zinc-300'
                }`}
              >
                <span>مخطط بناء الفانل الخاص بي (Notes)</span>
                <span className="font-mono text-[10px]">ص 32</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-500 text-center font-mono">
          32 TOTAL PAGES // EXECUTIVE SUITE
        </div>
      </div>
    </div>
  );
};
