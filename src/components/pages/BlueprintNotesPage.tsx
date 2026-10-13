import React, { useState, useEffect } from 'react';
import { A4PageWrapper } from '../A4PageWrapper';
import { PenTool, Save, RotateCcw, Check, Sparkles } from 'lucide-react';

interface BlueprintNotesPageProps {
  pageNumber: number;
}

export const BlueprintNotesPage: React.FC<BlueprintNotesPageProps> = ({ pageNumber }) => {
  const [formData, setFormData] = useState({
    goal: '',
    audience: '',
    offer: '',
    traffic: '',
    funnelType: '',
    pages: '',
    buildFirst: '',
    notes: ''
  });

  const [savedNotification, setSavedNotification] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('funnel_blueprint_notes');
      if (saved) {
        setFormData(JSON.parse(saved));
      }
    } catch (e) {
      // localStorage may fail in restricted sandboxes
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    try {
      localStorage.setItem('funnel_blueprint_notes', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleManualSave = () => {
    try {
      localStorage.setItem('funnel_blueprint_notes', JSON.stringify(formData));
      setSavedNotification(true);
      setTimeout(() => setSavedNotification(false), 2000);
    } catch (e) {}
  };

  const handleReset = () => {
    const empty = {
      goal: '',
      audience: '',
      offer: '',
      traffic: '',
      funnelType: '',
      pages: '',
      buildFirst: '',
      notes: ''
    };
    setFormData(empty);
    try {
      localStorage.removeItem('funnel_blueprint_notes');
    } catch (e) {}
  };

  return (
    <A4PageWrapper pageNumber={pageNumber} categoryLabel="MY FUNNEL BLUEPRINT & NOTES">
      <div className="flex flex-col justify-between h-full py-2">
        {/* Header Block */}
        <div className="flex items-center justify-between border-b border-[#F2C45C]/15 pb-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F2C45C] mb-0.5">
              <PenTool className="w-4 h-4 text-[#F2C45C]" />
              <span>مساحة العمل التنفيذية</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F7F3E8] leading-tight">
              مخطط بناء الفانل الخاص بي (My Funnel Blueprint)
            </h2>
            <p className="text-[11px] text-[#AAB2BF] font-mono">
              Actionable Strategy Sheet: Fill Out Before Touching Page Builders
            </p>
          </div>

          <div className="flex items-center gap-2 no-print">
            <button
              onClick={handleManualSave}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded bg-[#F2C45C] text-[#05070B] hover:bg-[#D99B25] transition-colors"
            >
              {savedNotification ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
              <span>{savedNotification ? 'تم الحفظ' : 'حفظ'}</span>
            </button>
            <button
              onClick={handleReset}
              className="p-1 text-xs text-zinc-400 hover:text-rose-400 rounded transition-colors"
              title="إعادة التعيين"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Writable Form Grid (Styled for both on-screen editing & clean physical handwriting on print) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2 text-right">
          {/* Goal */}
          <div className="p-2.5 rounded-lg bg-[#101823] border border-zinc-800">
            <label className="block text-xs font-bold text-[#F2C45C] mb-1">
              1. هدفي التجاري النهائي (My Core Objective):
            </label>
            <input
              type="text"
              value={formData.goal}
              onChange={(e) => handleChange('goal', e.target.value)}
              placeholder="مثال: جمع 1,000 عميل محتمل لخدمة التصميم خلال 30 يوماً..."
              className="w-full bg-[#05070B] border border-zinc-700/80 rounded p-1.5 text-xs text-[#F7F3E8] placeholder:text-zinc-600 focus:outline-none focus:border-[#F2C45C] print:border-b print:border-t-0 print:border-x-0 print:bg-transparent"
            />
          </div>

          {/* Target Audience */}
          <div className="p-2.5 rounded-lg bg-[#101823] border border-zinc-800">
            <label className="block text-xs font-bold text-[#19C878] mb-1">
              2. جمهوري المستهدف بدقة (Target Audience):
            </label>
            <input
              type="text"
              value={formData.audience}
              onChange={(e) => handleChange('audience', e.target.value)}
              placeholder="مثال: مؤسسو شركات البرمجيات الناشئة الباحثون عن تحسين واجهاتهم..."
              className="w-full bg-[#05070B] border border-zinc-700/80 rounded p-1.5 text-xs text-[#F7F3E8] placeholder:text-zinc-600 focus:outline-none focus:border-[#F2C45C] print:border-b print:border-t-0 print:border-x-0 print:bg-transparent"
            />
          </div>

          {/* The Offer */}
          <div className="p-2.5 rounded-lg bg-[#101823] border border-zinc-800">
            <label className="block text-xs font-bold text-sky-400 mb-1">
              3. العرض الذي أقدمه (The Irresistible Offer):
            </label>
            <input
              type="text"
              value={formData.offer}
              onChange={(e) => handleChange('offer', e.target.value)}
              placeholder="مثال: جلسة تدقيق واجهات لمدة 45 دقيقة + خطة تصحيحية مخصصة..."
              className="w-full bg-[#05070B] border border-zinc-700/80 rounded p-1.5 text-xs text-[#F7F3E8] placeholder:text-zinc-600 focus:outline-none focus:border-[#F2C45C] print:border-b print:border-t-0 print:border-x-0 print:bg-transparent"
            />
          </div>

          {/* Traffic Source */}
          <div className="p-2.5 rounded-lg bg-[#101823] border border-zinc-800">
            <label className="block text-xs font-bold text-amber-300 mb-1">
              4. مصدر الترافيك الأساسي (Traffic Source):
            </label>
            <input
              type="text"
              value={formData.traffic}
              onChange={(e) => handleChange('traffic', e.target.value)}
              placeholder="مثال: منشورات لينكد إن العضوية + رسائل تواصل مخصصة..."
              className="w-full bg-[#05070B] border border-zinc-700/80 rounded p-1.5 text-xs text-[#F7F3E8] placeholder:text-zinc-600 focus:outline-none focus:border-[#F2C45C] print:border-b print:border-t-0 print:border-x-0 print:bg-transparent"
            />
          </div>

          {/* Funnel Type Chosen */}
          <div className="p-2.5 rounded-lg bg-[#101823] border border-zinc-800">
            <label className="block text-xs font-bold text-[#F2C45C] mb-1">
              5. نوع الـ Funnel المختار من المكتبة:
            </label>
            <input
              type="text"
              value={formData.funnelType}
              onChange={(e) => handleChange('funnelType', e.target.value)}
              placeholder="مثال: Call Booking Funnel (خريطة رقم #05)..."
              className="w-full bg-[#05070B] border border-zinc-700/80 rounded p-1.5 text-xs text-[#F7F3E8] placeholder:text-zinc-600 focus:outline-none focus:border-[#F2C45C] print:border-b print:border-t-0 print:border-x-0 print:bg-transparent"
            />
          </div>

          {/* What I'll Build First */}
          <div className="p-2.5 rounded-lg bg-[#101823] border border-zinc-800">
            <label className="block text-xs font-bold text-[#19C878] mb-1">
              6. ما الذي سأبنيه أولاً اليوم؟ (First Action Item):
            </label>
            <input
              type="text"
              value={formData.buildFirst}
              onChange={(e) => handleChange('buildFirst', e.target.value)}
              placeholder="مثال: كتابة نص صفحة الحجز وإعداد أسئلة التأهيل في Calendly..."
              className="w-full bg-[#05070B] border border-zinc-700/80 rounded p-1.5 text-xs text-[#F7F3E8] placeholder:text-zinc-600 focus:outline-none focus:border-[#F2C45C] print:border-b print:border-t-0 print:border-x-0 print:bg-transparent"
            />
          </div>
        </div>

        {/* Required Pages Checklist */}
        <div className="p-2.5 rounded-lg bg-[#101823] border border-zinc-800 my-1 text-right">
          <label className="block text-xs font-bold text-[#F2C45C] mb-1">
            7. الصفحات والأصول المطلوبة لبناء هذا الفانل (Required Asset Checklist):
          </label>
          <input
            type="text"
            value={formData.pages}
            onChange={(e) => handleChange('pages', e.target.value)}
            placeholder="مثال: صفحة الهبوط، استمارة التأهيل، صفحة الشكر، وسلسلة 3 رسائل تذكير واتساب..."
            className="w-full bg-[#05070B] border border-zinc-700/80 rounded p-1.5 text-xs text-[#F7F3E8] placeholder:text-zinc-600 focus:outline-none focus:border-[#F2C45C] print:border-b print:border-t-0 print:border-x-0 print:bg-transparent"
          />
        </div>

        {/* Strategic Notes */}
        <div className="p-2.5 rounded-lg bg-[#101823] border border-zinc-800 my-1 text-right">
          <label className="block text-xs font-bold text-zinc-300 mb-1">
            8. الملاحظات الاستراتيجية والتعديلات الخاصة بمشروعي:
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            placeholder="دوّن أي أفكار إضافية، زوايا إعلانية، عروض ترقية Upsell مقترحة، أو مؤشرات قياس تريد تتبعها بدقة..."
            className="w-full bg-[#05070B] border border-zinc-700/80 rounded p-2 text-xs text-[#F7F3E8] placeholder:text-zinc-600 focus:outline-none focus:border-[#F2C45C] resize-none print:border print:border-zinc-800 print:bg-transparent"
          />
        </div>

        {/* Printable Signature & Date line */}
        <div className="p-2.5 rounded-lg bg-[#0B111A] border border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
          <div className="flex items-center gap-4">
            <span>التاريخ: ____________</span>
            <span>المسؤول عن التنفيذ: ____________</span>
          </div>
          <span className="font-mono text-[#F2C45C] font-semibold">PLAN → EXECUTE → CONVERT</span>
        </div>
      </div>
    </A4PageWrapper>
  );
};
