import React from 'react';
import { 
  Printer, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  SlidersHorizontal, 
  ListFilter,
  Maximize2,
  Minimize2,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { CATEGORIES } from '../data/funnelsData';

interface ReaderControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  viewMode: 'single' | 'continuous';
  onViewModeChange: (mode: 'single' | 'continuous') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onToggleToc: () => void;
  isTocOpen: boolean;
}

export const ReaderControls: React.FC<ReaderControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  viewMode,
  onViewModeChange,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onToggleToc,
  isTocOpen
}) => {
  const handlePrint = () => {
    // If currently in single page mode, ensure all pages are printable or trigger window.print
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B111A]/95 backdrop-blur-md border-b border-[#F2C45C]/15 px-4 sm:px-6 py-3 no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Zone 1: Wordmark & Product Title */}
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#101823] border border-[#F2C45C]/30 flex items-center justify-center text-[#F2C45C]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h1 className="font-extrabold text-sm sm:text-base text-[#F7F3E8] tracking-tight leading-none whitespace-nowrap">
                مكتبة خرائط الـ Funnels
              </h1>
              <span className="font-mono text-[10px] text-zinc-400 tracking-wider uppercase block mt-0.5">
                Visual Funnel Maps Library
              </span>
            </div>
          </div>

          <button
            onClick={onToggleToc}
            className={`md:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              isTocOpen 
                ? 'bg-[#F2C45C] text-[#05070B] border-[#F2C45C]' 
                : 'bg-[#101823] text-zinc-300 border-zinc-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>الفهرس</span>
          </button>
        </div>

        {/* Zone 2: Navigation, View Mode & Search */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative min-w-[180px] sm:min-w-[220px]">
            <Search className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="ابحث عن فانل أو هدف..."
              className="w-full bg-[#101823] border border-zinc-800 rounded-lg pr-8 pl-3 py-1.5 text-xs text-[#F7F3E8] placeholder:text-zinc-500 focus:outline-none focus:border-[#F2C45C]/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center p-0.5 bg-[#101823] border border-zinc-800 rounded-lg text-xs">
            <button
              onClick={() => onViewModeChange('continuous')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                viewMode === 'continuous'
                  ? 'bg-[#05070B] text-[#F2C45C] font-semibold border border-[#F2C45C]/20 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              تصفح كامل
            </button>
            <button
              onClick={() => onViewModeChange('single')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                viewMode === 'single'
                  ? 'bg-[#05070B] text-[#F2C45C] font-semibold border border-[#F2C45C]/20 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              صفحة بصفحة
            </button>
          </div>

          {/* Page Navigator (Single mode or quick jump) */}
          <div className="flex items-center gap-1 bg-[#101823] border border-zinc-800 rounded-lg px-1.5 py-1">
            <button
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage <= 1}
              className="p-1 rounded text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
              title="الصفحة السابقة"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1 font-mono text-xs text-zinc-300 px-1">
              <span className="font-bold text-[#F2C45C] tabular-nums">{currentPage}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-500 tabular-nums">{totalPages}</span>
            </div>
            <button
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage >= totalPages}
              className="p-1 rounded text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
              title="الصفحة التالية"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Zone 3: Primary Action (PDF Print & TOC Toggle) */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleToc}
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
              isTocOpen 
                ? 'bg-[#101823] text-[#F2C45C] border-[#F2C45C]/40' 
                : 'bg-[#101823] text-zinc-300 border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>جدول المحتويات</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F2C45C] text-[#05070B] font-bold text-xs hover:bg-[#D99B25] transition-colors shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>تصدير PDF (A4)</span>
          </button>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="max-w-7xl mx-auto mt-2.5 pt-2 border-t border-zinc-800/60 flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] scrollbar-none">
        <span className="text-zinc-500 text-[10px] font-mono shrink-0 ml-1">تصفية حسب:</span>
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-2.5 py-1 rounded-md shrink-0 whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-[#F2C45C] text-[#05070B] font-bold'
              : 'bg-[#101823] text-zinc-400 hover:text-zinc-200 border border-zinc-800'
          }`}
        >
          الكل (24 خريطة)
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-2.5 py-1 rounded-md shrink-0 whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-[#F2C45C] text-[#05070B] font-bold'
                : 'bg-[#101823] text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            {cat.titleAr}
          </button>
        ))}
      </div>
    </header>
  );
};
