import React from 'react';

interface A4PageWrapperProps {
  pageNumber: number;
  totalPages?: number;
  categoryLabel?: string;
  children: React.ReactNode;
  showChrome?: boolean;
}

export const A4PageWrapper: React.FC<A4PageWrapperProps> = ({
  pageNumber,
  totalPages = 30,
  categoryLabel = 'Visual Funnel Maps Library',
  children,
  showChrome = true
}) => {
  return (
    <div
      id={`page-${pageNumber}`}
      className="a4-page-sheet relative mx-auto bg-[#05070B] text-[#F7F3E8] border border-[#F2C45C]/15 shadow-2xl transition-all duration-300 print:border-none print:shadow-none select-text rounded-none sm:rounded-lg overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '820px',
        minHeight: '1160px',
        boxSizing: 'border-box'
      }}
    >
      {/* Luxury subtle ambient gradient background */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-40 print:opacity-20"
        style={{
          background: 'radial-gradient(circle at 85% 15%, rgba(242, 196, 92, 0.05) 0%, transparent 60%), radial-gradient(circle at 15% 85%, rgba(93, 169, 255, 0.03) 0%, transparent 50%)'
        }}
      />

      {/* Outer Luxury Safe Margin Container (18mm - 22mm scale) */}
      <div className="relative z-10 flex h-full min-h-[1160px] flex-col justify-between p-5 sm:p-7 md:p-8 print:p-8">
        {/* Subtle Editorial Top Header Ribbon */}
        {showChrome && pageNumber > 1 && (
          <header className="mb-4 flex items-center justify-between border-b border-[#F2C45C]/15 pb-2.5 text-[11px] sm:text-xs">
            <div className="flex items-center gap-2 text-[#AAB2BF]">
              <span className="font-semibold tracking-wide text-[#F2C45C]">مكتبة خرائط الـ Funnels</span>
              <span className="text-zinc-600">·</span>
              <span className="font-sans text-[10px] tracking-wider text-zinc-400 uppercase">Executive Edition</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#AAB2BF]">
              <span>{categoryLabel}</span>
            </div>
          </header>
        )}

        {/* Core Page Content Area */}
        <main className="flex-1 flex flex-col justify-between">
          {children}
        </main>

        {/* Editorial Minimal Footer */}
        {showChrome && pageNumber > 1 && (
          <footer className="mt-4 flex items-center justify-between border-t border-[#F2C45C]/15 pt-2.5 text-[10px] sm:text-[11px] text-[#AAB2BF]">
            <div className="flex items-center gap-2">
              <span className="font-sans tracking-widest text-[#F2C45C]/80 uppercase">Visual Funnel Maps Library</span>
              <span className="text-zinc-700">|</span>
              <span className="text-zinc-400">خرائط بصرية توضح رحلة العميل قبل البدء في التصميم</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-xs tabular-nums text-[#F2C45C]">
              <span>صفحة</span>
              <span className="font-bold text-[#F7F3E8]">{String(pageNumber).padStart(2, '0')}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-500">{totalPages}</span>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};
