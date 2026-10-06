/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AudienceType, UserProgress } from './types/fatf';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { StandardsMapView } from './components/StandardsMapView';
import { IntroJourneyView } from './components/IntroJourneyView';
import { SlideViewer } from './components/SlideViewer';
import { ExplorerView } from './components/ExplorerView';
import { GlossaryView } from './components/GlossaryView';
import { QuizArenaView } from './components/QuizArenaView';
import { QuickStudyView } from './components/QuickStudyView';

type ViewMode =
  | 'map'
  | 'intro'
  | 'slide'
  | 'explorer'
  | 'glossary'
  | 'quiz'
  | 'quick';

const STORAGE_KEY = 'fatf_40_learning_progress_v1';

const DEFAULT_PROGRESS: UserProgress = {
  visitedIntro: [],
  visitedRecs: [],
  quizPassedRecs: [],
  quizPassedIntro: [],
  quizAnswers: {},
  bookmarkedRecs: []
};

function AppContent() {
  const { lang, setLang, t } = useLanguage();
  const [view, setView] = useState<ViewMode>('map');
  const [activeIntroId, setActiveIntroId] = useState<string>('S0');
  const [activeRecId, setActiveRecId] = useState<number>(1);
  const [explorerActorFilter, setExplorerActorFilter] = useState<
    AudienceType | 'ALL'
  >('ALL');
  const [highlightedGlossaryTerm, setHighlightedGlossaryTerm] = useState<
    string | null
  >(null);

  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_PROGRESS, ...JSON.parse(saved) };
      }
    } catch {
      // ignore storage errors
    }
    return DEFAULT_PROGRESS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore storage errors
    }
  }, [progress]);

  const handleMarkIntroVisited = (id: string) => {
    setProgress((prev) =>
      prev.visitedIntro.includes(id)
        ? prev
        : { ...prev, visitedIntro: [...prev.visitedIntro, id] }
    );
  };

  const handleMarkRecVisited = (id: number) => {
    setProgress((prev) =>
      prev.visitedRecs.includes(id)
        ? prev
        : { ...prev, visitedRecs: [...prev.visitedRecs, id] }
    );
  };

  const handleToggleBookmark = (id: number) => {
    setProgress((prev) => ({
      ...prev,
      bookmarkedRecs: prev.bookmarkedRecs.includes(id)
        ? prev.bookmarkedRecs.filter((item) => item !== id)
        : [...prev.bookmarkedRecs, id]
    }));
  };

  const handleAnswerQuiz = (
    quizKey: string,
    optionIdx: number,
    isCorrect: boolean
  ) => {
    setProgress((prev) => {
      const nextAnswers = { ...prev.quizAnswers, [quizKey]: optionIdx };
      let nextPassedRecs = [...prev.quizPassedRecs];
      let nextPassedIntro = [...prev.quizPassedIntro];

      if (quizKey.startsWith('rec-')) {
        const recNum = Number(quizKey.replace('rec-', ''));
        if (isCorrect && !nextPassedRecs.includes(recNum)) {
          nextPassedRecs.push(recNum);
        }
      } else if (quizKey.startsWith('intro-')) {
        const introId = quizKey.replace('intro-', '');
        if (isCorrect && !nextPassedIntro.includes(introId)) {
          nextPassedIntro.push(introId);
        }
      }

      return {
        ...prev,
        quizAnswers: nextAnswers,
        quizPassedRecs: nextPassedRecs,
        quizPassedIntro: nextPassedIntro
      };
    });
  };

  const handleResetQuiz = (quizKey: string) => {
    setProgress((prev) => {
      const nextAnswers = { ...prev.quizAnswers };
      delete nextAnswers[quizKey];
      return {
        ...prev,
        quizAnswers: nextAnswers
      };
    });
  };

  const handleResetAllProgress = () => {
    setProgress(DEFAULT_PROGRESS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleCompleteQuickSession = () => {
    setProgress((prev) => ({
      ...prev,
      completedQuickSessions: (prev.completedQuickSessions || 0) + 1,
      lastQuickStudyDate: new Date().toISOString().slice(0, 10)
    }));
  };

  const openRecommendationSlide = (id: number) => {
    setActiveRecId(id);
    setView('slide');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openIntroSlide = (id: string) => {
    setActiveIntroId(id);
    setView('intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openGlossaryTerm = (termId: string) => {
    setHighlightedGlossaryTerm(termId);
    setView('glossary');
  };

  const openExplorerWithActor = (actor: AudienceType) => {
    setExplorerActorFilter(actor);
    setView('explorer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalQuizCorrect =
    progress.quizPassedIntro.length + progress.quizPassedRecs.length;
  const totalCompletionPct = Math.round(
    ((progress.visitedRecs.length + progress.quizPassedRecs.length) / 80) * 100
  );

  const navItems: { key: ViewMode; label: string }[] = [
    { key: 'map', label: t('Standards Map', 'Peta Standar') },
    { key: 'intro', label: t('Intro Journey', 'Pengantar') },
    {
      key: 'slide',
      label: `${t('Slide Viewer', 'Slide')} (R.${activeRecId})`
    },
    { key: 'explorer', label: t('Explorer', 'Direktori') },
    { key: 'glossary', label: t('Glossary', 'Glosarium') }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F0] text-[#141E1B]">
      {/* Strict 3-Zone Top Bar Contract with Warm Archival Ivory & Sovereign Emerald Theme */}
      <header className="sticky top-0 z-30 bg-[#FFFDF9]/95 backdrop-blur-xs border-b border-[#E5DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#map"
            onClick={(e) => {
              e.preventDefault();
              setView('map');
            }}
            className="text-lg font-bold tracking-tight text-[#141E1B] font-display whitespace-nowrap shrink-0"
          >
            FATF 40 Standards
          </a>

          {/* Zone 2: 5 clean text navigation links */}
          <nav
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#5A6B65]"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isActive = view === item.key;
              return (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.key === 'explorer') {
                      setExplorerActorFilter('ALL');
                    }
                    setView(item.key);
                  }}
                  className={`py-1 transition-colors whitespace-nowrap border-b-2 ${
                    isActive
                      ? 'text-[#141E1B] border-[#0B4F3F] font-semibold'
                      : 'border-transparent hover:text-[#141E1B] hover:border-[#D4C9B4]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher + Primary Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Bilingual Language Toggle (EN / ID) */}
            <div
              className="inline-flex items-center bg-[#F3EFE6] p-0.5 rounded-lg border border-[#DFD7C4]"
              role="group"
              aria-label="Language Selector"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 text-[11px] font-mono font-bold rounded-md transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#11221D] text-[#FAF8F5] shadow-2xs'
                    : 'text-[#5A6B65] hover:text-[#141E1B]'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2 py-1 text-[11px] font-mono font-bold rounded-md transition-colors cursor-pointer ${
                  lang === 'id'
                    ? 'bg-[#0B4F3F] text-[#FAF8F5] shadow-2xs'
                    : 'text-[#5A6B65] hover:text-[#141E1B]'
                }`}
                title="Bahasa Indonesia"
              >
                ID
              </button>
            </div>

            <button
              type="button"
              onClick={() => setView('quick')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                view === 'quick'
                  ? 'bg-[#0B4F3F] text-[#FAF8F5]'
                  : 'bg-[#F3EFE6] text-[#0B4F3F] hover:bg-[#EAE3D2] border border-[#DFD7C4]'
              }`}
            >
              {t('5-Min Quick Study', 'Belajar 5 Menit')}
            </button>

            <button
              type="button"
              onClick={() => setView('quiz')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer tabular-nums ${
                view === 'quiz'
                  ? 'bg-[#0B4F3F] text-[#FAF8F5]'
                  : 'bg-[#11221D] text-[#FAF8F5] hover:bg-[#1B352D]'
              }`}
            >
              {t('Quiz Arena', 'Arena Kuis')} ({totalQuizCorrect}/44)
            </button>
          </div>
        </div>

        {/* Mobile Compact Nav Row */}
        <div className="md:hidden flex items-center gap-4 px-4 py-2 overflow-x-auto border-t border-[#EDE6D6] text-xs font-medium text-[#5A6B65]">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setView(item.key)}
              className={`whitespace-nowrap shrink-0 ${
                view === item.key ? 'text-[#0B4F3F] font-bold underline' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Thin Progress Rail */}
        <div
          className="h-0.5 w-full bg-[#EDE6D6] overflow-hidden"
          role="progressbar"
          aria-valuenow={totalCompletionPct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Overall Course Completion Progress"
        >
          <div
            className="h-full bg-[#0B4F3F] transition-transform duration-200 origin-left"
            style={{ transform: `scaleX(${totalCompletionPct / 100})` }}
          />
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {view === 'map' && (
          <StandardsMapView
            onSelectRec={openRecommendationSlide}
            onOpenIntro={openIntroSlide}
            onOpenExplorer={() => {
              setExplorerActorFilter('ALL');
              setView('explorer');
            }}
            onOpenQuizArena={() => setView('quiz')}
            onOpenQuickStudy={() => setView('quick')}
            progress={progress}
          />
        )}

        {view === 'quick' && (
          <QuickStudyView
            progress={progress}
            onMarkRecVisited={handleMarkRecVisited}
            onAnswerQuiz={handleAnswerQuiz}
            onResetQuiz={handleResetQuiz}
            onCompleteQuickSession={handleCompleteQuickSession}
            onSelectRec={openRecommendationSlide}
            onOpenIntro={openIntroSlide}
          />
        )}

        {view === 'intro' && (
          <IntroJourneyView
            activeIntroId={activeIntroId}
            onSelectIntro={openIntroSlide}
            onStartRecommendations={() => openRecommendationSlide(1)}
            progress={progress}
            onMarkIntroVisited={handleMarkIntroVisited}
            onAnswerQuiz={handleAnswerQuiz}
            onResetQuiz={handleResetQuiz}
          />
        )}

        {view === 'slide' && (
          <SlideViewer
            activeRecId={activeRecId}
            onSelectRec={openRecommendationSlide}
            onBackToMap={() => setView('map')}
            onOpenGlossaryTerm={openGlossaryTerm}
            onFilterByActor={openExplorerWithActor}
            progress={progress}
            onMarkRecVisited={handleMarkRecVisited}
            onToggleBookmark={handleToggleBookmark}
            onAnswerQuiz={handleAnswerQuiz}
            onResetQuiz={handleResetQuiz}
          />
        )}

        {view === 'explorer' && (
          <ExplorerView
            initialActorFilter={explorerActorFilter}
            onSelectRec={openRecommendationSlide}
            progress={progress}
          />
        )}

        {view === 'glossary' && (
          <GlossaryView
            highlightedTermId={highlightedGlossaryTerm}
            onSelectRec={openRecommendationSlide}
          />
        )}

        {view === 'quiz' && (
          <QuizArenaView
            progress={progress}
            onAnswerQuiz={handleAnswerQuiz}
            onResetQuiz={handleResetQuiz}
            onResetAllProgress={handleResetAllProgress}
            onSelectRec={openRecommendationSlide}
          />
        )}
      </main>

      {/* Persistent Compliance Framing Footer (§7 Item 7) */}
      <footer className="bg-[#FFFDF9] border-t border-[#E5DEC9] mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5A6B65]">
          <p className="leading-relaxed">
            {t(
              'Educational summary of the FATF Recommendations (June 2026 edition). For authoritative text:',
              'Ringkasan edukasi Rekomendasi FATF (edisi Juni 2026). Untuk teks resmi yang mengikat:'
            )}{' '}
            <a
              href="https://www.fatf-gafi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0B4F3F] hover:underline"
            >
              www.fatf-gafi.org
            </a>
          </p>

          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] text-[#5A6B65] tabular-nums">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
              className="text-[#0B4F3F] hover:underline font-sans font-semibold cursor-pointer"
            >
              {lang === 'en'
                ? 'Ganti ke Bahasa Indonesia (ID)'
                : 'Switch to English (EN)'}
            </button>
            <span aria-hidden="true">·</span>
            <span>
              {t('Visited:', 'Dibaca:')} {progress.visitedRecs.length}/40
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {t('Quizzes Passed:', 'Kuis Lulus:')} {totalQuizCorrect}/44
            </span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setView('quiz')}
              className="text-[#141E1B] hover:underline font-sans font-medium cursor-pointer"
            >
              {t('Manage Progress', 'Kelola Progres')}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
