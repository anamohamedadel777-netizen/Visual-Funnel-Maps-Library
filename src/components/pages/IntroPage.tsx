import React from 'react';
import { A4PageWrapper } from '../A4PageWrapper';
import { Compass, Target, ArrowRightLeft, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';

export const IntroPage: React.FC = () => {
  return (
    <A4PageWrapper pageNumber={2} categoryLabel="01 / INTRODUCTION">
      <div className="flex flex-col justify-between h-full py-2">
        {/* Header Block */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#F2C45C] mb-1">
            <Compass className="w-4 h-4 text-[#F2C45C]" />
            <span>المدخل الاستراتيجي</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F3E8] leading-tight">
            ما هي خريطة الـ Funnel؟
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB2BF] mt-1 font-mono">
            Demystifying The Funnel Blueprint Before Opening Design Tools
          </p>
        </div>

        {/* Highlighted Quote Box */}
        <div className="my-5 p-5 rounded-xl bg-gradient-to-r from-[#101823] to-[#0B111A] border-r-4 border-r-[#F2C45C] border border-[#F2C45C]/20 shadow-lg">
          <p className="text-base sm:text-lg font-bold text-[#F7F3E8] leading-relaxed italic">
            "أكبر خطأ ليس ضعف التصميم، بل بناء Funnel قبل فهم من أين يدخل العميل وإلى أين يجب أن يذهب."
          </p>
          <span className="block mt-2 text-xs text-[#F2C45C] font-mono">
            — مبدأ التصميم البصري الموجه بالنتائج
          </span>
        </div>

        {/* Definition Paragraphs */}
        <div className="space-y-4 text-xs sm:text-sm text-[#F7F3E8]/90 leading-relaxed text-justify">
          <p>
            <strong>خريطة الـ Funnel (Funnel Map)</strong> هي تمثيل بصري هندسي لرحلة العميل من أول نقطة تواصل يرى فيها إعلانك أو محتواك، وحتى وصوله إلى الهدف التجاري النهائي — سواء كان تسجيل بيانات، حجز استشارة، شراء منتج، أو الانضمام لبرنامج تدريبي.
          </p>
          <p>
            معظم المسوقين والمصممين يقعون في فخ البدء المباشر بفتح أدوات بناء الصفحات (مثل WordPress أو ClickFunnels أو Webflow) وتصميم صفحة جميلة معزولة. والنتيجة الحتمية هي: صفحات تبدو رائعة ولكنها لا تبيع، لأن حلقة الوصل بين عقلية الزائر والخطوة التالية مفقودة تماماً.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="my-4">
          <h3 className="text-xs sm:text-sm font-bold text-[#F2C45C] mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F2C45C]" />
            <span>كيف تساعدك هذه المكتبة في اتخاذ القرار؟</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#101823] border border-[#F2C45C]/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#F7F3E8] mb-1">
                  <Target className="w-4 h-4 text-[#F2C45C]" />
                  <span>1. اختيار الفانل المناسب للهدف</span>
                </div>
                <p className="text-[11.5px] text-[#AAB2BF] leading-relaxed">
                  تحديد المسار المطابق لنوع عرضك (خدمة، كورس، أفلييت، منتج مادي) وتجنب تشتيت الجمهور في مسارات غير ملائمة.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#101823] border border-[#F2C45C]/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#F7F3E8] mb-1">
                  <ArrowRightLeft className="w-4 h-4 text-[#19C878]" />
                  <span>2. وضوح التسلسل قبل بدء التصميم</span>
                </div>
                <p className="text-[11.5px] text-[#AAB2BF] leading-relaxed">
                  معرفة كل صفحة، ونموذج إدخال، ورسالة تأكيد مسبقاً، حتى تترابط الكلمات التسويقية في سياق نفسي واحد متماسك.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#101823] border border-[#F2C45C]/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#F7F3E8] mb-1">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>3. تفادي بناء صفحات عشوائية</span>
                </div>
                <p className="text-[11.5px] text-[#AAB2BF] leading-relaxed">
                  حماية ميزانيتك ووقتك من إهدار ساعات في بناء صفحات ونوافذ فرعية لا تخدم هدف التحويل الحقيقي.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#101823] border border-[#F2C45C]/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#F7F3E8] mb-1">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  <span>4. الربط المحكم بين الترافيك والعرض</span>
                </div>
                <p className="text-[11.5px] text-[#AAB2BF] leading-relaxed">
                  ضمان تطابق الرسالة الإعلانية مع صفحة الهبوط ومع سلسلة المتابعة البريدية دون أي انقطاع ذهني.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Takeaway note */}
        <div className="p-3 rounded-lg bg-[#0B111A] border border-zinc-800 text-[11px] text-[#AAB2BF] flex items-center justify-between">
          <span>الخلاصة: خريطة الـ Funnel هي المخطط المعماري الذي يسبق وضع حجر الأساس في البناء.</span>
          <span className="font-mono text-[#F2C45C] font-semibold">RULE #01</span>
        </div>
      </div>
    </A4PageWrapper>
  );
};
