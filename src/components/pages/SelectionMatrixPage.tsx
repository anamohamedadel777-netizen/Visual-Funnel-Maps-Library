import React from 'react';
import { A4PageWrapper } from '../A4PageWrapper';
import { SELECTION_MATRIX_DATA } from '../../data/funnelsData';
import { Table, Check, X } from 'lucide-react';

interface SelectionMatrixPageProps {
  pageNumber: number;
}

export const SelectionMatrixPage: React.FC<SelectionMatrixPageProps> = ({ pageNumber }) => {
  return (
    <A4PageWrapper pageNumber={pageNumber} categoryLabel="FUNNEL SELECTION MATRIX">
      <div className="flex flex-col justify-between h-full py-2">
        {/* Header Block */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#F2C45C] mb-1">
            <Table className="w-4 h-4 text-[#F2C45C]" />
            <span>مصفوفة المقارنة الاستراتيجية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F3E8] leading-tight">
            مصفوفة مقارنة الـ Funnels
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB2BF] mt-1 font-mono">
            High-Level Comparison Matrix: Speed, Complexity, & Suitability
          </p>
        </div>

        {/* Dense Executive Table */}
        <div className="my-2 overflow-x-auto rounded-xl border border-[#F2C45C]/20 bg-[#0B111A]">
          <table className="w-full text-right text-[10px] sm:text-[11px] border-collapse">
            <thead>
              <tr className="bg-[#101823] border-b border-[#F2C45C]/20 text-[#F2C45C] font-bold">
                <th className="p-2 font-mono">#</th>
                <th className="p-2">نوع الـ Funnel</th>
                <th className="p-2">الهدف الرئيسي</th>
                <th className="p-2 text-center">الصعوبة</th>
                <th className="p-2">سرعة الإطلاق</th>
                <th className="p-2">أنسب ترافيك</th>
                <th className="p-2 text-center">للمبتدئين؟</th>
                <th className="p-2 text-center">نمط البيع</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80 text-[#AAB2BF]">
              {SELECTION_MATRIX_DATA.slice(0, 16).map((row) => (
                <tr key={row.number} className="hover:bg-[#101823]/60 transition-colors">
                  <td className="p-2 font-mono text-[#F2C45C] font-semibold tabular-nums">{row.number}</td>
                  <td className="p-2 font-bold text-[#F7F3E8] whitespace-nowrap">{row.nameAr}</td>
                  <td className="p-2 text-[10px] leading-tight text-zinc-300">{row.goalAr}</td>
                  <td className="p-2 text-center whitespace-nowrap">
                    <span className={`px-1.5 py-0.5 rounded text-[9.5px] font-mono ${
                      row.complexity === 'سهل' ? 'bg-emerald-950/60 text-emerald-400' :
                      row.complexity === 'متوسط' ? 'bg-amber-950/60 text-amber-300' :
                      'bg-rose-950/60 text-rose-300'
                    }`}>
                      {row.complexity}
                    </span>
                  </td>
                  <td className="p-2 font-mono text-[10px] whitespace-nowrap text-zinc-400">{row.speedToLaunch}</td>
                  <td className="p-2 text-[10px] text-zinc-300 leading-tight">{row.bestTraffic}</td>
                  <td className="p-2 text-center">
                    {row.isBeginnerFriendly ? (
                      <span className="inline-block text-[#19C878] font-bold">✓ نعم</span>
                    ) : (
                      <span className="inline-block text-zinc-500">متمرس</span>
                    )}
                  </td>
                  <td className="p-2 text-center whitespace-nowrap">
                    <span className="text-[10px] text-zinc-300">{row.salesDirectness}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary note below table */}
        <div className="p-2.5 rounded-lg bg-[#101823] border border-zinc-800 text-[10.5px] text-[#AAB2BF] flex items-center justify-between">
          <span>* الترتيب يتبع مسار النضج التسويقي: ابدأ بالنماذج البسيطة لتثبيت الرسالة ثم انتقل للنماذج المعقدة.</span>
          <span className="font-mono text-[#F2C45C]">PAGE 1 OF MATRIX</span>
        </div>
      </div>
    </A4PageWrapper>
  );
};
