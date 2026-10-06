import React, { useState, useEffect, useMemo } from 'react';
import {
  Recommendation,
  UserProgress
} from '../types/fatf';
import { useLanguage } from '../context/LanguageContext';
import { QuizPanel } from './QuizPanel';
import {
  Play,
  Pause,
  RotateCcw,
  RefreshCw,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export type StudyPlanMode =
  | 'adaptive'
  | 'unexplored'
  | 'revisions'
  | 'thresholds';

interface QuickStudyViewProps {
  progress: UserProgress;
  onMarkRecVisited: (id: number) => void;
  onAnswerQuiz: (quizKey: string, optionIdx: number, isCorrect: boolean) => void;
  onResetQuiz: (quizKey: string) => void;
  onCompleteQuickSession: () => void;
  onSelectRec: (id: number) => void;
  onOpenIntro: (id: string) => void;
}

const REVISION_REC_IDS = [1, 4, 6, 8, 15, 16, 24, 25, 38];

export const QuickStudyView: React.FC<QuickStudyViewProps> = ({
  progress,
  onMarkRecVisited,
  onAnswerQuiz,
  onResetQuiz,
  onCompleteQuickSession,
  onSelectRec
}) => {
  const {
    t,
    actorLabel,
    recommendations,
    sections,
    glossaryTerms,
    deepStudyData,
    beginnerGuides
  } = useLanguage();

  const [planMode, setPlanMode] = useState<StudyPlanMode>('adaptive');
  const [shuffleSeed, setShuffleSeed] = useState<number>(0);
  const [activeStage, setActiveStage] = useState<1 | 2 | 3>(1);

  // 5-Minute (300 seconds) Interactive Study Timer
  const [secondsLeft, setSecondsLeft] = useState<number>(300);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  // Flashcards state for Stage 2
  const [revealedFlashIds, setRevealedFlashIds] = useState<string[]>([]);
  const [sessionCompletedBanner, setSessionCompletedBanner] =
    useState<boolean>(false);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  // Compute Section Coverage & Gap Analysis
  const sectionStats = useMemo(() => {
    return sections.map((sec) => {
      const total = sec.recIds.length;
      const visited = sec.recIds.filter((id) =>
        progress.visitedRecs.includes(id)
      ).length;
      const passed = sec.recIds.filter((id) =>
        progress.quizPassedRecs.includes(id)
      ).length;
      const pct = Math.round(((visited + passed) / (total * 2)) * 100);
      return {
        section: sec,
        total,
        visited,
        passed,
        unexploredCount: total - visited,
        pct
      };
    });
  }, [sections, progress.visitedRecs, progress.quizPassedRecs]);

  const lowestCoverageSections = useMemo(() => {
    return [...sectionStats].sort((a, b) => a.pct - b.pct);
  }, [sectionStats]);

  // Generate Personalized 5-Minute Lesson Plan (3 Target Recommendations)
  const lessonPlan = useMemo(() => {
    const unvisitedRecs = recommendations.filter(
      (r) => !progress.visitedRecs.includes(r.id)
    );
    const unpassedRecs = recommendations.filter(
      (r) => !progress.quizPassedRecs.includes(r.id)
    );
    const wrongQuizRecs = recommendations.filter((r) => {
      const ans = progress.quizAnswers[`rec-${r.id}`];
      return ans !== undefined && ans !== r.quiz.answer;
    });

    let pool: Recommendation[] = [];
    let planRationale = '';

    if (planMode === 'unexplored') {
      pool = unvisitedRecs.length >= 3 ? unvisitedRecs : recommendations;
      planRationale =
        unvisitedRecs.length > 0
          ? t(
              `Targeting ${unvisitedRecs.length} Recommendations you have not yet opened.`,
              `Menargetkan ${unvisitedRecs.length} Rekomendasi yang belum pernah Anda buka.`
            )
          : t(
              'You have visited all 40 slides! Reviewing across all sections.',
              'Anda telah membuka seluruh 40 slide! Meninjau ulang lintas bagian.'
            );
    } else if (planMode === 'revisions') {
      const revRecs = recommendations.filter((r) =>
        REVISION_REC_IDS.includes(r.id)
      );
      const unvisitedRevs = revRecs.filter(
        (r) =>
          !progress.visitedRecs.includes(r.id) ||
          !progress.quizPassedRecs.includes(r.id)
      );
      pool = unvisitedRevs.length >= 3 ? unvisitedRevs : revRecs;
      planRationale = t(
        'Focused on the 2019–2026 landmark revisions (R.16 Payment Transparency, INR.6 Humanitarian Exemptions, R.24/25 BO, R.4/38 Asset Recovery, R.15 VASPs).',
        'Berfokus pada revisi-revisi penting 2019–2026 (R.16 Transparansi Pembayaran, INR.6 Pengecualian Kemanusiaan, R.24/25 Pemilik Manfaat, R.4/38 Pemulihan Aset, R.15 VASP).'
      );
    } else if (planMode === 'thresholds') {
      const threshRecs = recommendations.filter(
        (r) => r.thresholds.length > 0
      );
      const unpassedThresh = threshRecs.filter(
        (r) => !progress.quizPassedRecs.includes(r.id)
      );
      pool = unpassedThresh.length >= 3 ? unpassedThresh : threshRecs;
      planRationale = t(
        'Focused on statutory monetary floors and deadlines (USD/EUR 15,000 CDD & cash couriers, USD/EUR 3,000 casinos, USD/EUR 1,000 VASPs & wires, 5-year retention).',
        'Berfokus pada ambang batas nominal dan tenggat waktu wajib (USD/EUR 15.000 CDD & kurir uang tunai, USD/EUR 3.000 kasino, USD/EUR 1.000 VASP & transfer kawat, retensi 5 tahun).'
      );
    } else {
      const weakestSecIds = lowestCoverageSections
        .slice(0, 3)
        .map((s) => s.section.id);
      const priorityUnvisited = unvisitedRecs.filter((r) =>
        weakestSecIds.includes(r.section)
      );

      const combined = [
        ...wrongQuizRecs,
        ...priorityUnvisited,
        ...unvisitedRecs,
        ...unpassedRecs,
        ...recommendations
      ];

      const seen = new Set<number>();
      pool = combined.filter((r) => {
        if (seen.has(r.id)) return false;
        seen.add(r.id);
        return true;
      });

      const weakestSec = lowestCoverageSections[0]?.section;
      planRationale = weakestSec
        ? t(
            `Prioritising Section ${weakestSec.id} (${weakestSec.shortTitle} — ${lowestCoverageSections[0].pct}% complete) and ${unvisitedRecs.length} unexplored slides.`,
            `Memprioritaskan Bagian ${weakestSec.id} (${weakestSec.shortTitle} — ${lowestCoverageSections[0].pct}% selesai) serta ${unvisitedRecs.length} slide yang belum dijelajahi.`
          )
        : t(
            'Adaptive sequence across your remaining unverified topics.',
            'Urutan adaptif berdasarkan topik yang belum terverifikasi.'
          );
    }

    const offset = (shuffleSeed * 3) % Math.max(1, pool.length);
    const rotated = [...pool.slice(offset), ...pool.slice(0, offset)];
    const selectedRecs = rotated.slice(0, 3);

    const termIds = Array.from(
      new Set(selectedRecs.flatMap((r) => r.keyTerms))
    ).slice(0, 4);
    const terms = termIds
      .map((id) => glossaryTerms.find((gt) => gt.id === id))
      .filter((gt): gt is NonNullable<typeof gt> => Boolean(gt));

    return {
      recs: selectedRecs,
      terms,
      rationale: planRationale,
      unvisitedTotal: unvisitedRecs.length,
      unpassedTotal: unpassedRecs.length
    };
  }, [
    t,
    recommendations,
    glossaryTerms,
    planMode,
    shuffleSeed,
    progress.visitedRecs,
    progress.quizPassedRecs,
    progress.quizAnswers,
    lowestCoverageSections
  ]);

  const stage1VisitedCount = lessonPlan.recs.filter((r) =>
    progress.visitedRecs.includes(r.id)
  ).length;
  const stage2RevealedCount = lessonPlan.terms.filter((gt) =>
    revealedFlashIds.includes(gt.id)
  ).length;
  const stage3PassedCount = lessonPlan.recs.filter((r) =>
    progress.quizPassedRecs.includes(r.id)
  ).length;

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleRegeneratePlan = () => {
    setShuffleSeed((prev) => prev + 1);
    setRevealedFlashIds([]);
    setSessionCompletedBanner(false);
    setActiveStage(1);
    setSecondsLeft(300);
    setTimerRunning(false);
  };

  const handleFinishSession = () => {
    lessonPlan.recs.forEach((r) => onMarkRecVisited(r.id));
    onCompleteQuickSession();
    setSessionCompletedBanner(true);
    setTimerRunning(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header & 5-Minute Timer Bar */}
      <section className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#EDE6D6] pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#0B4F3F] font-semibold">
              <span>
                {t('ADAPTIVE MICRO-LEARNING', 'PEMBELAJARAN MIKRO ADAPTIF')}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {t('5-MINUTE DAILY SPRINT', 'RENCANA BELAJAR HARIAN 5 MENIT')}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#92400E]">
                {t(
                  `${lessonPlan.unvisitedTotal} OF 40 SLIDES UNEXPLORED`,
                  `${lessonPlan.unvisitedTotal} DARI 40 SLIDE BELUM DIJELAJAHI`
                )}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#141E1B] font-display">
              {t(
                'Quick Study: Your 5-Minute Daily Lesson Plan',
                'Belajar Cepat: Rencana Belajar Harian 5 Menit Anda'
              )}
            </h1>
            <p className="text-xs sm:text-sm text-[#3F4E49] max-w-2xl leading-relaxed">
              {lessonPlan.rationale}
            </p>
          </div>

          {/* 5:00 Timer Control Box */}
          <div className="bg-[#11221D] text-[#FAF8F5] rounded-xl p-4 flex items-center justify-between gap-5 shrink-0 border border-[#253D35]">
            <div>
              <div className="text-[11px] font-mono text-[#E2B86B] uppercase">
                {t('5-Min Sprint Timer', 'Timer Belajar 5 Menit')}
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold tabular-nums tracking-tight mt-0.5">
                {formatTime(secondsLeft)}
              </div>
              <div className="text-[11px] font-mono text-[#A3B5AE] tabular-nums">
                {t('Sessions Completed:', 'Sesi Selesai:')}{' '}
                {progress.completedQuickSessions || 0}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTimerRunning(!timerRunning)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  timerRunning
                    ? 'bg-amber-700 hover:bg-amber-800 text-white'
                    : 'bg-[#0B4F3F] hover:bg-[#0E6652] text-white border border-[#E2B86B]/30'
                }`}
              >
                {timerRunning ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>{t('Pause', 'Jeda')}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>
                      {secondsLeft < 300
                        ? t('Resume', 'Lanjutkan')
                        : t('Start 5:00', 'Mulai 5:00')}
                    </span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setTimerRunning(false);
                  setSecondsLeft(300);
                }}
                className="p-2 rounded-lg bg-[#193029] hover:bg-[#234239] text-[#C8D6D0] hover:text-white transition-colors cursor-pointer"
                aria-label="Reset 5-Minute Timer"
                title={t('Reset Timer', 'Atur Ulang Timer')}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Plan Focus Selector & Regenerate Button */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 bg-[#F3EFE6] p-1 rounded-lg border border-[#E5DEC9]">
            {(
              [
                ['adaptive', t('Smart Adaptive (Gaps First)', 'Adaptif Cerdas (Prioritas Area Kosong)')],
                ['unexplored', t('Unexplored Frontier', 'Slide Belum Pernah Dibuka')],
                ['revisions', t('2022–2026 Revisions', 'Fokus Revisi 2022–2026')],
                ['thresholds', t('Thresholds & Deadlines Drill', 'Latihan Ambang Batas & Waktu')]
              ] as const
            ).map(([mode, label]) => (
              <button
                key={mode}
                type="button"
                onClick={() => {
                  setPlanMode(mode);
                  setShuffleSeed(0);
                  setSessionCompletedBanner(false);
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  planMode === mode
                    ? 'bg-[#FFFDF9] text-[#141E1B] shadow-2xs border border-[#DFD7C4]'
                    : 'text-[#5A6B65] hover:text-[#141E1B]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleRegeneratePlan}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border border-[#DFD7C4] bg-[#F3EFE6]/70 text-[#141E1B] hover:bg-[#EAE3D2] transition-colors cursor-pointer whitespace-nowrap"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#0B4F3F]" />
            <span>
              {t('Generate Fresh 5-Min Plan', 'Buat Rencana 5 Menit Baru')}
            </span>
          </button>
        </div>

        {/* Section Coverage Radar Strip (Highlighting Unexplored Areas) */}
        <div className="pt-2 border-t border-[#EDE6D6] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#5A6B65]">
            <span>
              {t(
                'YOUR COVERAGE BY SECTION (LOWEST COVERAGE PRIORITISED):',
                'CAKUPAN BELAJAR PER BAGIAN (CAKUPAN TERENDAH DIPRIORITASKAN):'
              )}
            </span>
            <span className="tabular-nums">
              {t('Visited', 'Dibaca')} {progress.visitedRecs.length}/40 ·{' '}
              {t('Verified', 'Lulus')} {progress.quizPassedRecs.length}/40
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {sectionStats.map(({ section, unexploredCount, pct }) => (
              <div
                key={section.id}
                className="p-2.5 rounded-lg bg-[#F9F6F0] border border-[#E5DEC9] space-y-1"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold" style={{ color: section.color }}>
                    {t('Sec', 'Bag')} {section.id}
                  </span>
                  <span className="text-[#141E1B] font-semibold tabular-nums">
                    {pct}%
                  </span>
                </div>
                <div className="h-1 w-full bg-[#E5DEC9] rounded-full overflow-hidden">
                  <div
                    className="h-full transition-transform duration-200 origin-left"
                    style={{
                      backgroundColor: section.color,
                      transform: `scaleX(${pct / 100})`
                    }}
                  />
                </div>
                <div className="text-[10px] font-mono text-[#5A6B65] truncate">
                  {unexploredCount === 0
                    ? t('All explored', 'Selesai dibaca')
                    : `${unexploredCount} ${t('unexplored', 'belum dibaca')}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Stage Guided Lesson Stepper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => setActiveStage(1)}
          className={`p-4 rounded-xl border text-left transition-colors cursor-pointer flex items-center justify-between gap-3 ${
            activeStage === 1
              ? 'bg-[#11221D] text-[#FAF8F5] border-[#11221D]'
              : 'bg-[#FFFDF9] text-[#141E1B] border-[#E5DEC9] hover:bg-[#F3EFE6]'
          }`}
        >
          <div>
            <div className="text-[11px] font-mono opacity-75">
              {t('STAGE 1 · MIN 0:00–2:00', 'TAHAP 1 · MENIT 0:00–2:00')}
            </div>
            <div className="text-sm font-bold mt-0.5 font-display">
              {t('Core Concept & Case Briefing', 'Konsep Inti & Studi Kasus')}
            </div>
            <div className="text-xs opacity-80 font-mono tabular-nums mt-0.5">
              {stage1VisitedCount} / {lessonPlan.recs.length}{' '}
              {t('Studied', 'Dipelajari')}
            </div>
          </div>
          {stage1VisitedCount === lessonPlan.recs.length && (
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveStage(2)}
          className={`p-4 rounded-xl border text-left transition-colors cursor-pointer flex items-center justify-between gap-3 ${
            activeStage === 2
              ? 'bg-[#11221D] text-[#FAF8F5] border-[#11221D]'
              : 'bg-[#FFFDF9] text-[#141E1B] border-[#E5DEC9] hover:bg-[#F3EFE6]'
          }`}
        >
          <div>
            <div className="text-[11px] font-mono opacity-75">
              {t('STAGE 2 · MIN 2:00–3:30', 'TAHAP 2 · MENIT 2:00–3:30')}
            </div>
            <div className="text-sm font-bold mt-0.5 font-display">
              {t('Terms & Thresholds Flash-Drill', 'Kartu Kilat Istilah & Ambang Batas')}
            </div>
            <div className="text-xs opacity-80 font-mono tabular-nums mt-0.5">
              {stage2RevealedCount} / {lessonPlan.terms.length}{' '}
              {t('Terms Reviewed', 'Istilah Ditinjau')}
            </div>
          </div>
          {stage2RevealedCount === lessonPlan.terms.length &&
            lessonPlan.terms.length > 0 && (
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            )}
        </button>

        <button
          type="button"
          onClick={() => setActiveStage(3)}
          className={`p-4 rounded-xl border text-left transition-colors cursor-pointer flex items-center justify-between gap-3 ${
            activeStage === 3
              ? 'bg-[#11221D] text-[#FAF8F5] border-[#11221D]'
              : 'bg-[#FFFDF9] text-[#141E1B] border-[#E5DEC9] hover:bg-[#F3EFE6]'
          }`}
        >
          <div>
            <div className="text-[11px] font-mono opacity-75">
              {t('STAGE 3 · MIN 3:30–5:00', 'TAHAP 3 · MENIT 3:30–5:00')}
            </div>
            <div className="text-sm font-bold mt-0.5 font-display">
              {t('Rapid Mastery Check', 'Kuis Penguasaan Cepat')}
            </div>
            <div className="text-xs opacity-80 font-mono tabular-nums mt-0.5">
              {stage3PassedCount} / {lessonPlan.recs.length}{' '}
              {t('Verified', 'Terverifikasi')}
            </div>
          </div>
          {stage3PassedCount === lessonPlan.recs.length && (
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          )}
        </button>
      </div>

      {/* STAGE 1: 2-MINUTE CORE CONCEPT BRIEFING */}
      {activeStage === 1 && (
        <section className="space-y-4" aria-label="Stage 1: Core Concept Briefing">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-[#141E1B] font-display">
                {t(
                  'Stage 1 (2 Mins): High-Yield Recommendation Summaries & Case Studies',
                  'Tahap 1 (2 Menit): Ringkasan Rekomendasi & Studi Kasus Dunia Nyata'
                )}
              </h2>
              <p className="text-xs text-[#3F4E49]">
                {t(
                  'Read the core essence, practical rationale, global case study, and obligations for your 3 target Recommendations.',
                  'Pelajari intisari, alasan praktis, studi kasus pelanggaran global, dan kewajiban pokok dari 3 Rekomendasi target hari ini.'
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                lessonPlan.recs.forEach((r) => onMarkRecVisited(r.id));
                setActiveStage(2);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#0B4F3F] text-white hover:bg-[#083B2F] transition-colors cursor-pointer shrink-0"
            >
              <span>
                {t(
                  'Mark All 3 Read & Continue to Stage 2',
                  'Tandai Ketiganya Selesai & Lanjut ke Tahap 2'
                )}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {lessonPlan.recs.map((rec, index) => {
              const sec = sections.find((s) => s.id === rec.section)!;
              const isVisited = progress.visitedRecs.includes(rec.id);

              return (
                <article
                  key={rec.id}
                  className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl overflow-hidden shadow-2xs"
                >
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: sec.color }}
                  />
                  <div className="p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#EDE6D6] pb-4">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#5A6B65]">
                          <span
                            className="font-bold"
                            style={{ color: sec.color }}
                          >
                            0{index + 1} · {t('Section', 'Bagian')} {sec.id} ({sec.shortTitle})
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>
                            {t('Old Ref:', 'Ref Lama:')} {rec.oldNumber}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>
                            {t('Actors:', 'Aktor:')}{' '}
                            {rec.audience.map((a) => actorLabel(a)).join(', ')}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[#141E1B] font-display">
                          {t('Recommendation', 'Rekomendasi')} {rec.id}: {rec.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => onMarkRecVisited(rec.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                            isVisited
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                              : 'bg-[#11221D] border-[#11221D] text-white hover:bg-[#1B352D]'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>
                            {isVisited
                              ? t('Studied', 'Sudah Dipelajari')
                              : t('Mark Studied', 'Tandai Dipelajari')}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectRec(rec.id)}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F3EFE6] hover:bg-[#EAE3D2] text-[#141E1B] border border-[#DFD7C4] transition-colors cursor-pointer"
                        >
                          {t('Full Slide →', 'Slide Lengkap →')}
                        </button>
                      </div>
                    </div>

                    {/* Plain-Language Essence & Practical Why */}
                    <div className="p-4 rounded-lg bg-[#F9F6F0] border border-[#E5DEC9] space-y-2">
                      <div className="text-[11px] font-mono uppercase text-[#0B4F3F] font-semibold">
                        {t(
                          'In Plain Words & Real-World Logic',
                          'Intisari Santai & Logika Praktis'
                        )}
                      </div>
                      <p className="text-sm font-semibold text-[#141E1B] leading-relaxed">
                        {rec.essence}
                      </p>
                      {beginnerGuides[rec.id] && (
                        <div className="pt-2 mt-2 border-t border-[#E5DEC9] space-y-1.5">
                          <div className="text-[11px] font-mono font-bold text-[#9A7228]">
                            {beginnerGuides[rec.id].analogyTitle}
                          </div>
                          <p className="text-xs text-[#141E1B] leading-relaxed">
                            {beginnerGuides[rec.id].analogyBody}
                          </p>
                        </div>
                      )}
                      {deepStudyData[rec.id] && (
                        <p className="text-xs text-[#23312D] leading-relaxed pt-1 border-t border-[#E5DEC9]">
                          {deepStudyData[rec.id].plainEnglishWhy}
                        </p>
                      )}
                    </div>

                    {/* Global Breach Case Study Snapshot */}
                    {deepStudyData[rec.id] && (
                      <div className="p-4 rounded-lg bg-[#10211C] text-[#FAF8F5] border border-[#253D35] space-y-1.5">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#E2B86B]">
                          <span>
                            {t(
                              `GLOBAL BREACH CASE STUDY · R.${rec.id}`,
                              `STUDI KASUS PELANGGARAN GLOBAL · R.${rec.id}`
                            )}
                          </span>
                          <span className="text-[#A3B5AE]">
                            {deepStudyData[rec.id].caseStudy.jurisdictionAndYear}
                          </span>
                        </div>
                        <div className="text-sm font-bold text-white font-display">
                          {deepStudyData[rec.id].caseStudy.title}
                        </div>
                        <p className="text-xs text-[#D5E0DC] leading-relaxed">
                          {deepStudyData[rec.id].caseStudy.whatHappened}
                        </p>
                        <p className="text-xs text-rose-300 pt-1 border-t border-[#253D35]">
                          <strong className="text-white">
                            {t('The Breach:', 'Pelanggaran:')}
                          </strong>{' '}
                          {deepStudyData[rec.id].caseStudy.theBreach}
                        </p>
                      </div>
                    )}

                    {/* Key Obligations Digest */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {rec.obligations.map((ob, idx) => (
                        <div
                          key={ob.id}
                          className="p-3.5 rounded-lg border border-[#E5DEC9] bg-[#FFFDF9] space-y-1"
                        >
                          <div className="text-xs font-semibold text-[#141E1B]">
                            <span
                              className="font-mono mr-1.5"
                              style={{ color: sec.color }}
                            >
                              {idx + 1}.
                            </span>
                            {ob.title}
                          </div>
                          <p className="text-xs text-[#3F4E49] leading-relaxed line-clamp-3">
                            {ob.body}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Thresholds or Top IN Highlight */}
                    {(rec.thresholds.length > 0 ||
                      (rec.inHighlights && rec.inHighlights.length > 0)) && (
                      <div className="pt-2 border-t border-[#EDE6D6] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        {rec.thresholds.length > 0 ? (
                          <div className="font-mono text-amber-950 bg-amber-50/80 px-3 py-1.5 rounded border border-amber-300/80">
                            <strong>{t('Key Number:', 'Angka Penting:')}</strong>{' '}
                            {rec.thresholds
                              .map((th) => `${th.value} (${th.context})`)
                              .join(' · ')}
                          </div>
                        ) : (
                          <div className="text-[#3F4E49]">
                            <strong className="text-[#141E1B]">
                              INR.{rec.id}:
                            </strong>{' '}
                            {rec.inHighlights?.[0]}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* STAGE 2: 90-SECOND TERMS & THRESHOLDS FLASH-DRILL */}
      {activeStage === 2 && (
        <section
          className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-6 space-y-6 shadow-2xs"
          aria-label="Stage 2: Key Terms and Thresholds Flash-Drill"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EDE6D6] pb-4">
            <div>
              <h2 className="text-lg font-bold text-[#141E1B] font-display">
                {t(
                  'Stage 2 (90 Secs): Active Recall Flash-Drill',
                  'Tahap 2 (90 Detik): Kartu Kilat Pengingat Aktif'
                )}
              </h2>
              <p className="text-xs text-[#3F4E49]">
                {t(
                  'Mentally recall each FATF Glossary definition or threshold from today’s Recommendations, then click the card to reveal and verify.',
                  'Ingat kembali definisi Glosarium FATF atau ambang batas dari Rekomendasi hari ini, lalu klik kartu untuk membuka jawabannya.'
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveStage(3)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#0B4F3F] text-white hover:bg-[#083B2F] transition-colors cursor-pointer shrink-0"
            >
              <span>
                {t(
                  'Proceed to Stage 3: Rapid Mastery Quizzes',
                  'Lanjut ke Tahap 3: Kuis Penguasaan Cepat'
                )}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lessonPlan.terms.map((term) => {
              const isRevealed = revealedFlashIds.includes(term.id);
              return (
                <div
                  key={term.id}
                  onClick={() =>
                    setRevealedFlashIds((prev) =>
                      prev.includes(term.id) ? prev : [...prev, term.id]
                    )
                  }
                  className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                    isRevealed
                      ? 'bg-emerald-50/50 border-emerald-400'
                      : 'bg-[#F9F6F0] hover:bg-[#F3EFE6] border-[#DFD7C4]'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#5A6B65]">
                      <span>{term.category}</span>
                      <span className="text-[#0B4F3F] font-semibold">
                        {isRevealed
                          ? t('● REVEALED', '● TERBUKA')
                          : t('Click to Reveal Definition →', 'Klik untuk Buka Definisi →')}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#141E1B] font-display">
                      {term.term}
                    </h3>

                    {isRevealed ? (
                      <div className="space-y-2 pt-2 border-t border-emerald-200/80">
                        <p className="text-xs font-medium text-[#141E1B] leading-relaxed">
                          {term.shortDef}
                        </p>
                        <p className="text-xs text-[#23312D] leading-relaxed">
                          {term.fullDef}
                        </p>
                      </div>
                    ) : (
                      <p className="text-xs text-[#5A6B65] italic py-4">
                        {t(
                          `What is the authoritative FATF Glossary definition and scope for "${term.term}"? Click to flip card.`,
                          `Apa definisi dan cakupan hukum resmi Glosarium FATF untuk "${term.term}"? Klik kartu ini untuk membalik.`
                        )}
                      </p>
                    )}
                  </div>

                  <div className="text-[11px] font-mono text-[#5A6B65] pt-2 border-t border-[#E5DEC9]">
                    {t('Linked Recommendations:', 'Rekomendasi Terkait:')}{' '}
                    {term.relatedRecs.map((id) => `R.${id}`).join(', ')}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Statutory Threshold Quick Table for Today's Lesson */}
          <div className="p-4 rounded-xl bg-[#10211C] text-[#FAF8F5] border border-[#253D35] space-y-3">
            <div className="text-xs font-mono text-[#E2B86B] uppercase">
              {t(
                'Essential Statutory Numbers Memory Check',
                'Pengingat Cepat Angka & Ambang Batas Wajib FATF'
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#182E27] border border-[#253D35]">
                <div className="font-mono font-bold text-white">USD/EUR 15,000</div>
                <div className="text-[#D5E0DC] mt-0.5">
                  {t(
                    'R.10 occasional CDD, R.22 precious metals/stones cash, & R.32 max border cash declaration threshold.',
                    'CDD transaksi insidental R.10, transaksi tunai pedagang logam/batu mulia R.22, & batas maks deklarasi uang tunai perbatasan R.32.'
                  )}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#182E27] border border-[#253D35]">
                <div className="font-mono font-bold text-white">USD/EUR 1,000 / 3,000</div>
                <div className="text-[#D5E0DC] mt-0.5">
                  {t(
                    'USD/EUR 1,000 for R.15 VASP CDD & R.16 cross-border payment de minimis; USD/EUR 3,000 for R.22 Casinos.',
                    'USD/EUR 1.000 untuk CDD VASP R.15 & transfer lintas batas R.16; USD/EUR 3.000 untuk Kasino R.22.'
                  )}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#182E27] border border-[#253D35]">
                <div className="font-mono font-bold text-white">
                  {t('5 Years / 3 Business Days', '5 Tahun / 3 Hari Kerja')}
                </div>
                <div className="text-[#D5E0DC] mt-0.5">
                  {t(
                    'At least 5 years retention (R.11, R.24, R.25); 3 business days to supply domestic R.16 originator info on request.',
                    'Minimal 5 tahun masa simpan dokumen (R.11, R.24, R.25); 3 hari kerja untuk menyerahkan data pengirim transfer domestik R.16.'
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STAGE 3: 90-SECOND RAPID MASTERY QUIZ VERIFICATION */}
      {activeStage === 3 && (
        <section
          className="space-y-5"
          aria-label="Stage 3: Rapid Mastery Check"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-[#141E1B] font-display">
                {t(
                  'Stage 3 (90 Secs): Verify Your 3 Lesson Recommendations',
                  'Tahap 3 (90 Detik): Verifikasi 3 Rekomendasi Hari Ini'
                )}
              </h2>
              <p className="text-xs text-[#3F4E49]">
                {t(
                  'Answer all 3 knowledge checks below to lock in today’s 5-minute sprint and update your permanent mastery score.',
                  'Jawab ketiga soal uji pemahaman di bawah ini untuk menuntaskan sesi belajar 5 menit hari ini dan memperbarui skor Anda.'
                )}
              </p>
            </div>

            <button
              type="button"
              onClick={handleFinishSession}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#0B4F3F] text-white hover:bg-[#083B2F] transition-colors cursor-pointer shrink-0"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {t('Complete 5-Minute Session', 'Selesaikan Sesi 5 Menit')}
              </span>
            </button>
          </div>

          {sessionCompletedBanner && (
            <div className="p-5 rounded-xl bg-[#10211C] text-[#FAF8F5] border border-[#0B4F3F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#E2B86B] uppercase">
                  {t(
                    '● Daily 5-Minute Sprint Logged',
                    '● Sesi Belajar Harian 5 Menit Tercatat'
                  )}
                </div>
                <h3 className="text-lg font-bold font-display">
                  {t(
                    `Session Complete! You have studied ${progress.visitedRecs.length}/40 slides and verified ${progress.quizPassedRecs.length}/40 Recommendation quizzes.`,
                    `Sesi Selesai! Anda telah mempelajari ${progress.visitedRecs.length}/40 slide dan lulus ${progress.quizPassedRecs.length}/40 kuis Rekomendasi.`
                  )}
                </h3>
                <p className="text-xs text-[#C8D6D0]">
                  {t(
                    'Want another 5-minute round on the next set of unexplored Recommendations?',
                    'Ingin lanjut satu putaran 5 menit lagi untuk Rekomendasi berikutnya?'
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={handleRegeneratePlan}
                className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#E2B86B] text-[#11221D] hover:bg-amber-300 transition-colors cursor-pointer shrink-0"
              >
                {t('Load Next 5-Min Lesson →', 'Muat Sesi 5 Menit Berikutnya →')}
              </button>
            </div>
          )}

          <div className="space-y-4">
            {lessonPlan.recs.map((rec) => (
              <QuizPanel
                key={rec.id}
                quizKey={`rec-${rec.id}`}
                label={`${t('Recommendation', 'Rekomendasi')} ${rec.id}: ${rec.title}`}
                quiz={rec.quiz}
                selectedOption={progress.quizAnswers[`rec-${rec.id}`]}
                onSelectAnswer={onAnswerQuiz}
                onResetAnswer={onResetQuiz}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
