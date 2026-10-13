import React, { useState, useMemo, useEffect } from 'react';
import { FUNNEL_MAPS, CATEGORIES } from './data/funnelsData';
import { FunnelStep } from './types/funnel';
import { ReaderControls } from './components/ReaderControls';
import { TableOfContentsDrawer } from './components/TableOfContentsDrawer';
import { StepDetailModal } from './components/StepDetailModal';
import { CoverPage } from './components/pages/CoverPage';
import { IntroPage } from './components/pages/IntroPage';
import { HowToUsePage } from './components/pages/HowToUsePage';
import { CategoryIndexPage } from './components/pages/CategoryIndexPage';
import { FunnelMapPage } from './components/pages/FunnelMapPage';
import { DecisionGuidePage } from './components/pages/DecisionGuidePage';
import { SelectionMatrixPage } from './components/pages/SelectionMatrixPage';
import { CommonMistakesPage } from './components/pages/CommonMistakesPage';
import { BlueprintNotesPage } from './components/pages/BlueprintNotesPage';
import { Sparkles, Layers, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'single' | 'continuous'>('continuous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);
  const [inspectedStep, setInspectedStep] = useState<FunnelStep | null>(null);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const totalPages = 32;

  // Track scroll position for Back-to-Top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for single page mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        // In RTL, left arrow moves to next page
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
      } else if (e.key === 'ArrowRight') {
        // In RTL, right arrow moves to previous page
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  // Handle jump to category from Category Index
  const handleSelectCategoryFromIndex = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Find the first funnel matching this category and jump to its page
    const foundIndex = FUNNEL_MAPS.findIndex((f) => f.category === categoryId);
    if (foundIndex !== -1) {
      const pageNum = foundIndex + 5;
      setCurrentPage(pageNum);
      if (viewMode === 'continuous') {
        const el = document.getElementById(`page-${pageNum}`);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (viewMode === 'continuous') {
      const el = document.getElementById(`page-${page}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter funnels based on search query and category
  const filteredFunnels = useMemo(() => {
    return FUNNEL_MAPS.filter((f) => {
      const matchesCategory = selectedCategory === 'all' || f.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        f.nameAr.toLowerCase().includes(q) ||
        f.nameEn.toLowerCase().includes(q) ||
        f.goal.toLowerCase().includes(q) ||
        f.tagline.toLowerCase().includes(q) ||
        f.steps.some(
          (s) =>
            s.titleAr.toLowerCase().includes(q) ||
            s.titleEn.toLowerCase().includes(q) ||
            s.descriptionAr.toLowerCase().includes(q)
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#05070B] text-[#F7F3E8] selection:bg-[#F2C45C]/20 selection:text-[#F2C45C]">
      {/* Top Controls Toolbar */}
      <ReaderControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onToggleToc={() => setIsTocOpen(!isTocOpen)}
        isTocOpen={isTocOpen}
      />

      {/* Table of Contents Drawer */}
      <TableOfContentsDrawer
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        currentPage={currentPage}
        onSelectPage={handlePageChange}
      />

      {/* Step Detail Inspector Modal */}
      <StepDetailModal
        step={inspectedStep}
        onClose={() => setInspectedStep(null)}
      />

      {/* Active Search & Filter Banner (if filter active) */}
      {(selectedCategory !== 'all' || searchQuery) && (
        <div className="max-w-4xl mx-auto px-4 py-2 mt-3 bg-[#101823] border border-[#F2C45C]/20 rounded-xl flex items-center justify-between text-xs text-[#AAB2BF] no-print">
          <div className="flex items-center gap-2">
            <span className="text-[#F2C45C] font-bold">تصفية نشطة:</span>
            <span>
              تم العثور على <strong>{filteredFunnels.length}</strong> من أصل 24 خريطة
            </span>
            {selectedCategory !== 'all' && (
              <span className="font-mono bg-[#05070B] text-zinc-300 px-2 py-0.5 rounded text-[10px]">
                {CATEGORIES.find((c) => c.id === selectedCategory)?.titleAr}
              </span>
            )}
            {searchQuery && (
              <span className="font-mono bg-[#05070B] text-[#F2C45C] px-2 py-0.5 rounded text-[10px]">
                "{searchQuery}"
              </span>
            )}
          </div>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs text-[#F2C45C] hover:underline"
          >
            إلغاء التصفية
          </button>
        </div>
      )}

      {/* Core Book Reader Workspace */}
      <main className="py-6 sm:py-10 px-2 sm:px-4 md:px-6">
        {viewMode === 'continuous' ? (
          /* Continuous Scroll Mode: Stack of true A4 portrait pages */
          <div className="flex flex-col gap-12 sm:gap-16 print:gap-0 max-w-[820px] mx-auto">
            {/* Page 1: Cover */}
            <CoverPage />

            {/* Page 2: Intro */}
            <IntroPage />

            {/* Page 3: How to Use */}
            <HowToUsePage />

            {/* Page 4: Category Index */}
            <CategoryIndexPage onSelectCategory={handleSelectCategoryFromIndex} />

            {/* Pages 5 to 28: 24 Funnel Maps */}
            {FUNNEL_MAPS.map((funnel, index) => {
              const pageNumber = index + 5;
              const matchesSearch = filteredFunnels.some((f) => f.id === funnel.id);

              if (searchQuery || selectedCategory !== 'all') {
                if (!matchesSearch) return null;
              }

              return (
                <FunnelMapPage
                  key={funnel.id}
                  funnel={funnel}
                  pageNumber={pageNumber}
                  onSelectStep={(step) => setInspectedStep(step)}
                />
              );
            })}

            {/* Final Strategic Pages */}
            {(!searchQuery && selectedCategory === 'all') && (
              <>
                <DecisionGuidePage pageNumber={29} />
                <SelectionMatrixPage pageNumber={30} />
                <CommonMistakesPage pageNumber={31} />
                <BlueprintNotesPage pageNumber={32} />
              </>
            )}
          </div>
        ) : (
          /* Single Page Focus Mode */
          <div className="max-w-[820px] mx-auto">
            {currentPage === 1 && <CoverPage />}
            {currentPage === 2 && <IntroPage />}
            {currentPage === 3 && <HowToUsePage />}
            {currentPage === 4 && (
              <CategoryIndexPage onSelectCategory={handleSelectCategoryFromIndex} />
            )}
            {currentPage >= 5 && currentPage <= 28 && (
              <FunnelMapPage
                funnel={FUNNEL_MAPS[currentPage - 5]}
                pageNumber={currentPage}
                onSelectStep={(step) => setInspectedStep(step)}
              />
            )}
            {currentPage === 29 && <DecisionGuidePage pageNumber={29} />}
            {currentPage === 30 && <SelectionMatrixPage pageNumber={30} />}
            {currentPage === 31 && <CommonMistakesPage pageNumber={31} />}
            {currentPage === 32 && <BlueprintNotesPage pageNumber={32} />}

            {/* Bottom Single Page Pagination Helper */}
            <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-[#0B111A] border border-[#F2C45C]/15 text-xs text-[#AAB2BF] no-print">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage <= 1}
                className="px-3 py-1.5 rounded-lg bg-[#101823] text-zinc-300 hover:text-white disabled:opacity-30 border border-zinc-800 transition-colors"
              >
                ← الصفحة السابقة
              </button>

              <div className="font-mono text-xs">
                <span>الصفحة </span>
                <strong className="text-[#F2C45C] text-sm tabular-nums">{currentPage}</strong>
                <span> من </span>
                <strong className="text-zinc-400 tabular-nums">{totalPages}</strong>
              </div>

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage >= totalPages}
                className="px-3 py-1.5 rounded-lg bg-[#101823] text-zinc-300 hover:text-white disabled:opacity-30 border border-zinc-800 transition-colors"
              >
                الصفحة التالية →
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && viewMode === 'continuous' && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-30 p-2.5 rounded-full bg-[#F2C45C] text-[#05070B] shadow-lg hover:bg-[#D99B25] transition-all duration-200 no-print"
          title="العودة للأعلى"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
