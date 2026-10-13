import React from 'react';
import { A4PageWrapper } from '../A4PageWrapper';
import { BookOpen, CheckSquare, Layers, Eye, Sparkles, HelpCircle } from 'lucide-react';

export const HowToUsePage: React.FC = () => {
  return (
    <A4PageWrapper pageNumber={3} categoryLabel="02 / HOW TO USE">
      <div className="flex flex-col justify-between h-full py-2">
        {/* Header Block */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#F2C45C] mb-1">
            <BookOpen className="w-4 h-4 text-[#F2C45C]" />
            <span>دليل الاستفادة القصوى</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F3E8] leading-tight">
            كيف تستخدم هذه المكتبة؟
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB2BF] mt-1 font-mono">
            How To Navigate & Execute With This Strategic Blueprint Library
          </p>
        </div>

        {/* 3-Step Practical Methodology */}
        <div className="my-4">
          <h3 className="text-xs sm:text-sm font-bold text-[#F7F3E8] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#19C878]" />
            <span>منهجية التطبيق في 3 خطوات عملية:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-[#101823] border border-[#F2C45C]/20 flex flex-col justify-between relative overflow-hidden">
              <span className="absolute top-2 left-2 font-mono text-3xl font-black text-[#F2C45C]/15 select-none">
                01
              </span>
              <div>
                <span className="inline-block px-2 py-0.5 rounded bg-[#F2C45C]/10 text-[#F2C45C] font-mono text-xs font-bold mb-2">
                  الخطوة الأولى
                </span>
                <h4 className="font-bold text-sm sm:text-base text-[#F7F3E8] mb-1">
                  حدّد هدفك بوضوح
                </h4>
                <p className="text-[11.5px] text-[#AAB2BF] leading-relaxed">
                  هل تريد جمع إيميلات (Leads)، أم بيع خدمة باستشارة هاتفية، أم بيع كورس رقمي، أم ترويج عرض أفلييت؟
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-[#101823] border border-[#F2C45C]/20 flex flex-col justify-between relative overflow-hidden">
              <span className="absolute top-2 left-2 font-mono text-3xl font-black text-[#F2C45C]/15 select-none">
                02
              </span>
              <div>
                <span className="inline-block px-2 py-0.5 rounded bg-[#19C878]/10 text-[#19C878] font-mono text-xs font-bold mb-2">
                  الخطوة الثانية
                </span>
                <h4 className="font-bold text-sm sm:text-base text-[#F7F3E8] mb-1">
                  اختر الـ Funnel المطابق
                </h4>
                <p className="text-[11.5px] text-[#AAB2BF] leading-relaxed">
                  تصفح الفهرس وخريطة القرار للوصول للخريطة البصرية الأكثر كفاءة لطبيعة عرضك ودرجة وعي جمهورك.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-[#101823] border border-[#F2C45C]/20 flex flex-col justify-between relative overflow-hidden">
              <span className="absolute top-2 left-2 font-mono text-3xl font-black text-[#F2C45C]/15 select-none">
                03
              </span>
              <div>
                <span className="inline-block px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-mono text-xs font-bold mb-2">
                  الخطوة الثالثة
                </span>
                <h4 className="font-bold text-sm sm:text-base text-[#F7F3E8] mb-1">
                  استخدمها كأساس هندسي
                </h4>
                <p className="text-[11.5px] text-[#AAB2BF] leading-relaxed">
                  قبل فتح أداة التصميم، جهز نصوص الصفحات، روابط المتابعة، والترقيات وفقاً لتسلسل الخريطة المعتمد.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Anatomy of a Funnel Map Page */}
        <div className="my-2 p-4 rounded-xl bg-[#0B111A] border border-[#F2C45C]/25">
          <h3 className="text-xs sm:text-sm font-bold text-[#F2C45C] mb-3 flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#F2C45C]" />
            <span>تشريح بطاقة الفانل — ماذا ستجد في كل صفحة؟</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-right text-[11px]">
            <div className="p-2 rounded bg-[#101823] border border-zinc-800">
              <span className="text-[#F2C45C] font-bold block">1. اسم ونوع الفانل</span>
              <span className="text-zinc-400 text-[10px]">الاسم العربي والمصطلح الإنجليزي الشائع</span>
            </div>
            <div className="p-2 rounded bg-[#101823] border border-zinc-800">
              <span className="text-[#F2C45C] font-bold block">2. الهدف الاستراتيجي</span>
              <span className="text-zinc-400 text-[10px]">النتيجة المباشرة التي صُمم الفانل لتحقيقها</span>
            </div>
            <div className="p-2 rounded bg-[#101823] border border-zinc-800">
              <span className="text-[#F2C45C] font-bold block">3. الفئة المستهدفة</span>
              <span className="text-zinc-400 text-[10px]">من يجب عليه استخدام هذا النموذج بالتحديد</span>
            </div>
            <div className="p-2 rounded bg-[#101823] border border-zinc-800">
              <span className="text-[#F2C45C] font-bold block">4. مصادر الترافيك</span>
              <span className="text-zinc-400 text-[10px]">أنسب قنوات الزوار (إعلانات، بحث، سوشيال)</span>
            </div>
            <div className="p-2 rounded bg-[#101823] border border-zinc-800">
              <span className="text-[#19C878] font-bold block">5. الخريطة البصرية</span>
              <span className="text-zinc-400 text-[10px]">التدفق الكامل من أول لمسة لصفحة الشكر</span>
            </div>
            <div className="p-2 rounded bg-[#101823] border border-zinc-800">
              <span className="text-[#19C878] font-bold block">6. لماذا يعمل؟</span>
              <span className="text-zinc-400 text-[10px]">الأساس النفسي والبيعي لنجاح هذا المسار</span>
            </div>
            <div className="p-2 rounded bg-[#101823] border border-zinc-800">
              <span className="text-amber-300 font-bold block">7. أشهر خطأ تنفيذي</span>
              <span className="text-zinc-400 text-[10px]">الفخ الذي يجب الحذر منه عند الإطلاق</span>
            </div>
            <div className="p-2 rounded bg-[#101823] border border-zinc-800">
              <span className="text-amber-300 font-bold block">8. الملاحظة التنفيذية</span>
              <span className="text-zinc-400 text-[10px]">تلميحة ترفع معدل التحويل فوراً</span>
            </div>
          </div>
        </div>

        {/* Legend / Key Colors */}
        <div className="p-3 rounded-lg bg-[#101823] border border-[#F2C45C]/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px]">
          <span className="font-bold text-zinc-300">دليل الألوان البصري في الخرائط:</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-zinc-400">
              <span className="w-2.5 h-2.5 rounded bg-zinc-700 inline-block" />
              <span>ترافيك</span>
            </span>
            <span className="flex items-center gap-1 text-[#F2C45C]">
              <span className="w-2.5 h-2.5 rounded bg-[#F2C45C] inline-block" />
              <span>صفحة / تحويل</span>
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded bg-emerald-500 inline-block" />
              <span>دفع وشراء</span>
            </span>
            <span className="flex items-center gap-1 text-sky-400">
              <span className="w-2.5 h-2.5 rounded bg-sky-500 inline-block" />
              <span>متابعة بريدية</span>
            </span>
          </div>
        </div>
      </div>
    </A4PageWrapper>
  );
};
