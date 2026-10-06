import React, { useState } from 'react';
import { SectionId, UserProgress } from '../types/fatf';
import { useLanguage } from '../context/LanguageContext';
import { QuizPanel } from './QuizPanel';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface QuizArenaViewProps {
  progress: UserProgress;
  onAnswerQuiz: (quizKey: string, optionIdx: number, isCorrect: boolean) => void;
  onResetQuiz: (quizKey: string) => void;
  onResetAllProgress: () => void;
  onSelectRec: (id: number) => void;
}

export const QuizArenaView: React.FC<QuizArenaViewProps> = ({
  progress,
  onAnswerQuiz,
  onResetQuiz,
  onResetAllProgress,
  onSelectRec
}) => {
  const { t, recommendations, sections, introSlides } = useLanguage();
  const [sectionFilter, setSectionFilter] = useState<
    SectionId | 'INTRO' | 'ALL' | 'UNSOLVED'
  >('ALL');
  const [confirmReset, setConfirmReset] = useState<boolean>(false);

  const totalQuestions = introSlides.length + recommendations.length; // 44
  const totalCorrect =
    progress.quizPassedIntro.length + progress.quizPassedRecs.length;
  const totalAttempted = Object.keys(progress.quizAnswers).length;

  const filteredRecs = recommendations.filter((r) => {
    if (sectionFilter === 'INTRO') return false;
    if (sectionFilter === 'UNSOLVED') {
      return !progress.quizPassedRecs.includes(r.id);
    }
    if (sectionFilter !== 'ALL' && r.section !== sectionFilter) {
      return false;
    }
    return true;
  });

  const showIntroQuizzes =
    sectionFilter === 'ALL' ||
    sectionFilter === 'INTRO' ||
    sectionFilter === 'UNSOLVED';

  const visibleIntroSlides = introSlides.filter((s) => {
    if (sectionFilter === 'UNSOLVED') {
      return !progress.quizPassedIntro.includes(s.id);
    }
    return showIntroQuizzes;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Arena Header & Scoreboard */}
      <div className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-6 space-y-5 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EDE6D6] pb-5">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#0B4F3F] font-semibold">
              {t(
                'Comprehensive Assessment · All 44 Knowledge Checks',
                'Evaluasi Komprehensif · Seluruh 44 Soal Uji Pemahaman'
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#141E1B] mt-0.5 font-display">
              {t(
                'FATF Standards Knowledge Check Arena',
                'Arena Uji Pemahaman Standar FATF'
              )}
            </h1>
            <p className="text-xs sm:text-sm text-[#3F4E49] mt-1">
              {t(
                'Test your mastery across the 4 Foundation Modules and all 40 FATF Recommendations with instant authoritative rationales.',
                'Uji penguasaan Anda atas 4 Modul Fondasi dan seluruh 40 Rekomendasi FATF lengkap dengan pembahasan resmi seketika.'
              )}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-[#F3EFE6]/80 border border-[#DFD7C4] rounded-xl p-4 shrink-0">
            <div>
              <div className="text-xs font-mono text-[#5A6B65]">
                {t('VERIFIED SCORE', 'SKOR TERVERIFIKASI')}
              </div>
              <div className="text-2xl font-bold font-mono text-[#141E1B] tabular-nums">
                {totalCorrect} / {totalQuestions}
              </div>
              <div className="text-[11px] font-mono text-[#0B4F3F] tabular-nums">
                {Math.round((totalCorrect / totalQuestions) * 100)}%{' '}
                {t('Mastery', 'Penguasaan')} ({totalAttempted}{' '}
                {t('attempted', 'dijawab')})
              </div>
            </div>

            {!confirmReset ? (
              <button
                type="button"
                onClick={() => setConfirmReset(true)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-[#5A6B65] hover:text-rose-800 hover:bg-rose-50 border border-[#DFD7C4] bg-[#FFFDF9] transition-colors cursor-pointer"
              >
                {t('Reset Progress', 'Atur Ulang Progres')}
              </button>
            ) : (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    onResetAllProgress();
                    setConfirmReset(false);
                  }}
                  className="px-2.5 py-1.5 rounded text-xs font-semibold bg-rose-800 text-white hover:bg-rose-900 cursor-pointer"
                >
                  {t('Confirm Reset', 'Ya, Hapus')}
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmReset(false)}
                  className="px-2.5 py-1.5 rounded text-xs font-medium bg-[#E5DEC9] text-[#141E1B] cursor-pointer"
                >
                  {t('Cancel', 'Batal')}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSectionFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              sectionFilter === 'ALL'
                ? 'bg-[#11221D] text-[#FAF8F5]'
                : 'bg-[#F3EFE6] text-[#2C3A35] hover:bg-[#EAE3D2]'
            }`}
          >
            {t('All Questions (44)', 'Semua Soal (44)')}
          </button>
          <button
            type="button"
            onClick={() => setSectionFilter('UNSOLVED')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              sectionFilter === 'UNSOLVED'
                ? 'bg-[#92400E] text-white'
                : 'bg-[#F3EFE6] text-[#2C3A35] hover:bg-[#EAE3D2]'
            }`}
          >
            {t('Remaining Unverified', 'Belum Terjawab Benar')} (
            {totalQuestions - totalCorrect})
          </button>
          <button
            type="button"
            onClick={() => setSectionFilter('INTRO')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              sectionFilter === 'INTRO'
                ? 'bg-[#0B4F3F] text-white'
                : 'bg-[#F3EFE6] text-[#2C3A35] hover:bg-[#EAE3D2]'
            }`}
          >
            {t('Intro Modules (4)', 'Modul Pengantar (4)')}
          </button>
          {sections.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => setSectionFilter(sec.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                sectionFilter === sec.id
                  ? 'text-white'
                  : 'bg-[#F3EFE6] text-[#2C3A35] hover:bg-[#EAE3D2]'
              }`}
              style={
                sectionFilter === sec.id
                  ? { backgroundColor: sec.color }
                  : undefined
              }
            >
              {t('Sec', 'Bag')} {sec.id} ({sec.recIds.length})
            </button>
          ))}
        </div>
      </div>

      {/* Intro Quizzes */}
      {visibleIntroSlides.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-[#141E1B] border-b border-[#DFD7C4] pb-2 font-display">
            {t(
              'Foundation Intro Modules (S0–S3)',
              'Modul Pengantar Fondasi Dasar (S0–S3)'
            )}
          </h2>
          {visibleIntroSlides.map((s) => (
            <QuizPanel
              key={s.id}
              quizKey={`intro-${s.id}`}
              label={`${t('Intro', 'Pengantar')} ${s.id}: ${s.title}`}
              quiz={s.quiz}
              selectedOption={progress.quizAnswers[`intro-${s.id}`]}
              onSelectAnswer={onAnswerQuiz}
              onResetAnswer={onResetQuiz}
            />
          ))}
        </div>
      )}

      {/* Recommendation Quizzes */}
      {filteredRecs.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-[#141E1B] border-b border-[#DFD7C4] pb-2 font-display">
            {t(
              `FATF Recommendations Knowledge Checks (${filteredRecs.length})`,
              `Uji Pemahaman 40 Rekomendasi FATF (${filteredRecs.length})`
            )}
          </h2>
          {filteredRecs.map((rec) => (
            <div key={rec.id} className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono font-semibold text-[#5A6B65]">
                  {t('Section', 'Bagian')} {rec.section} ·{' '}
                  {t('Recommendation', 'Rekomendasi')} {rec.id}: {rec.title}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectRec(rec.id)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#0B4F3F] hover:underline cursor-pointer"
                >
                  <span>
                    {t(`Review Slide R.${rec.id}`, `Lihat Slide R.${rec.id}`)}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <QuizPanel
                quizKey={`rec-${rec.id}`}
                label={`R.${rec.id} — ${rec.title}`}
                quiz={rec.quiz}
                selectedOption={progress.quizAnswers[`rec-${rec.id}`]}
                onSelectAnswer={onAnswerQuiz}
                onResetAnswer={onResetQuiz}
              />
            </div>
          ))}
        </div>
      )}

      {visibleIntroSlides.length === 0 && filteredRecs.length === 0 && (
        <div className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-12 text-center space-y-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
          <h3 className="text-lg font-bold text-[#141E1B] font-display">
            {t(
              'All Knowledge Checks in This Filter Are Verified!',
              'Seluruh Soal dalam Filter Ini Telah Dijawab dengan Benar!'
            )}
          </h3>
          <p className="text-xs text-[#3F4E49]">
            {t(
              'Switch to "All Questions (44)" to review your completed answers or retry any question.',
              'Pilih "Semua Soal (44)" untuk meninjau kembali jawaban Anda atau mengulangi kuis.'
            )}
          </p>
        </div>
      )}
    </div>
  );
};
