import React from 'react';
import { A4PageWrapper } from '../A4PageWrapper';
import { CATEGORIES } from '../../data/funnelsData';
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Link2, 
  Video, 
  Calendar, 
  ShoppingBag, 
  BookOpen, 
  ShieldCheck, 
  Mail,
  FolderOpen
} from 'lucide-react';

interface CategoryIndexPageProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const CategoryIndexPage: React.FC<CategoryIndexPageProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-4 h-4 text-[#F2C45C]" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-[#F2C45C]" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-[#F2C45C]" />;
      case 'Link2': return <Link2 className="w-4 h-4 text-[#F2C45C]" />;
      case 'Video': return <Video className="w-4 h-4 text-[#F2C45C]" />;
      case 'Calendar': return <Calendar className="w-4 h-4 text-[#F2C45C]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4 text-[#F2C45C]" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-[#F2C45C]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-[#F2C45C]" />;
      case 'Mail': return <Mail className="w-4 h-4 text-[#F2C45C]" />;
      default: return <FolderOpen className="w-4 h-4 text-[#F2C45C]" />;
    }
  };

  return (
    <A4PageWrapper pageNumber={4} categoryLabel="03 / CATEGORIES INDEX">
      <div className="flex flex-col justify-between h-full py-2">
        {/* Header Block */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#F2C45C] mb-1">
            <FolderOpen className="w-4 h-4 text-[#F2C45C]" />
            <span>الفهرس الهيكلي</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F3E8] leading-tight">
            فهرس تصنيفات الـ Funnels
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB2BF] mt-1 font-mono">
            10 Strategic Core Clusters Across Business Models & Objectives
          </p>
        </div>

        {/* 10 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              className="group p-3 rounded-xl bg-[#101823] border border-[#F2C45C]/15 hover:border-[#F2C45C]/45 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#05070B] border border-zinc-800 group-hover:border-[#F2C45C]/30 transition-colors">
                      {getIcon(cat.iconName)}
                    </span>
                    <h3 className="font-bold text-xs sm:text-[13px] text-[#F7F3E8] group-hover:text-[#F2C45C] transition-colors">
                      {cat.titleAr}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] bg-[#05070B] text-[#F2C45C] px-2 py-0.5 rounded border border-[#F2C45C]/20">
                    {cat.funnelCount} نماذج
                  </span>
                </div>
                <p className="font-mono text-[10px] text-zinc-500 mb-1">
                  {cat.titleEn}
                </p>
                <p className="text-[11px] text-[#AAB2BF] leading-relaxed line-clamp-2">
                  {cat.descriptionAr}
                </p>
              </div>

              <div className="mt-2 pt-1.5 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500">
                <span className="font-mono">CLASS {String(index + 1).padStart(2, '0')}</span>
                <span className="text-[#F2C45C]/70 group-hover:text-[#F2C45C] font-medium flex items-center gap-1">
                  استعراض الخرائط ←
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom index quick jump footer note */}
        <div className="p-3 rounded-lg bg-[#0B111A] border border-zinc-800/80 flex items-center justify-between text-[11px] text-[#AAB2BF]">
          <span>إجمالي الخرائط المعمارية في هذا الدليل: <strong>24 خريطة تنفيذية تفصيلية</strong></span>
          <span className="font-mono text-[#19C878] font-bold">100% COMPLETE</span>
        </div>
      </div>
    </A4PageWrapper>
  );
};
