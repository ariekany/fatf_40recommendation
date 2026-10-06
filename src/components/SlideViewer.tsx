import React, { useState, useEffect } from 'react';
import { AudienceType, UserProgress } from '../types/fatf';
import { useLanguage } from '../context/LanguageContext';
import { GlossTip } from './GlossTip';
import { INDrawer } from './INDrawer';
import { InteractiveDiagram } from './InteractiveDiagrams';
import { QuizPanel } from './QuizPanel';
import { DeepStudyDossier } from './DeepStudyDossier';
import { BeginnerGuideCard } from './BeginnerGuideCard';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  ChevronDown,
  ChevronUp,
  FileText,
  Grid,
  CheckCircle2,
  Scale
} from 'lucide-react';

interface SlideViewerProps {
  activeRecId: number;
  onSelectRec: (id: number) => void;
  onBackToMap: () => void;
  onOpenGlossaryTerm: (termId: string) => void;
  onFilterByActor: (actor: AudienceType) => void;
  progress: UserProgress;
  onMarkRecVisited: (id: number) => void;
  onToggleBookmark: (id: number) => void;
  onAnswerQuiz: (quizKey: string, optionIdx: number, isCorrect: boolean) => void;
  onResetQuiz: (quizKey: string) => void;
}

const AUDIENCE_LABELS_EN: Record<AudienceType, string> = {
  Country: 'Country / Legislature',
  FI: 'Financial Institutions (FI)',
  DNFBP: 'DNFBPs (Gatekeepers)',
  VASP: 'Virtual Asset Providers (VASP)',
  NPO: 'Non-Profit Organisations (NPO)',
  'Competent Authority': 'Competent / Supervisory Authorities'
};

const AUDIENCE_LABELS_ID: Record<AudienceType, string> = {
  Country: 'Negara / Pembentuk UU',
  FI: 'Penyedia Jasa Keuangan (PJK/FI)',
  DNFBP: 'Profesi & Bisnis Non-Keuangan (DNFBP)',
  VASP: 'Penyedia Jasa Aset Virtual (VASP)',
  NPO: 'Organisasi Nirlaba / Yayasan (NPO)',
  'Competent Authority': 'Otoritas Berwenang & Pengawas'
};

export const SlideViewer: React.FC<SlideViewerProps> = ({
  activeRecId,
  onSelectRec,
  onBackToMap,
  onOpenGlossaryTerm,
  onFilterByActor,
  progress,
  onMarkRecVisited,
  onToggleBookmark,
  onAnswerQuiz,
  onResetQuiz
}) => {
  const { lang, t, recommendations, sections } = useLanguage();

  const rec =
    recommendations.find((r) => r.id === activeRecId) || recommendations[0];
  const section =
    sections.find((s) => s.id === rec.section) || sections[0];

  const [expandedObligations, setExpandedObligations] = useState<string[]>([]);
  const [inDrawerOpen, setInDrawerOpen] = useState<boolean>(false);

  // Expand all obligations by default when switching slides so critical content is immediately available
  useEffect(() => {
    setExpandedObligations(rec.obligations.map((o) => o.id));
    setInDrawerOpen(false);
    onMarkRecVisited(rec.id);
  }, [rec.id]);

  // Keyboard left/right navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        inDrawerOpen
      ) {
        return;
      }
      if (e.key === 'ArrowLeft' && rec.id > 1) {
        onSelectRec(rec.id - 1);
      } else if (e.key === 'ArrowRight' && rec.id < 40) {
        onSelectRec(rec.id + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rec.id, inDrawerOpen, onSelectRec]);

  const toggleObligation = (id: string) => {
    setExpandedObligations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allExpanded = expandedObligations.length === rec.obligations.length;
  const isBookmarked = progress.bookmarkedRecs.includes(rec.id);
  const isQuizPassed = progress.quizPassedRecs.includes(rec.id);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Top Section Jump Bar & Back to Map */}
      <div className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
        <div className="flex flex-wrap items-center gap-1.5">
          {sections.map((sec) => {
            const isActiveSec = sec.id === section.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => onSelectRec(sec.recIds[0])}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  isActiveSec
                    ? 'text-white shadow-2xs'
                    : 'bg-[#F3EFE6]/70 text-[#2C3A35] hover:bg-[#EAE3D2] border border-[#E5DEC9]'
                }`}
                style={isActiveSec ? { backgroundColor: sec.color } : undefined}
              >
                <span className="font-mono font-bold">
                  {t('Sec', 'Bag')} {sec.id}
                </span>
                <span className="hidden sm:inline">· {sec.shortTitle}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onBackToMap}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#141E1B] hover:bg-[#EAE3D2] bg-[#F3EFE6] border border-[#DFD7C4] transition-colors whitespace-nowrap cursor-pointer"
        >
          <Grid className="w-3.5 h-3.5 text-[#0B4F3F]" />
          <span>{t('Back to Map', 'Kembali ke Peta')}</span>
        </button>
      </div>

      {/* Within-Section Number Rail */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        <span className="text-xs font-mono text-[#5A6B65] mr-1 shrink-0">
          {t('Section', 'Bagian')} {section.id} ({section.range}):
        </span>
        {section.recIds.map((id) => {
          const isCurrent = id === rec.id;
          const isDone = progress.quizPassedRecs.includes(id);
          const isSeen = progress.visitedRecs.includes(id);
          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelectRec(id)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-colors shrink-0 flex items-center gap-1 cursor-pointer ${
                isCurrent
                  ? 'text-white font-bold shadow-2xs'
                  : isDone
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                  : isSeen
                  ? 'bg-[#FFFDF9] text-[#141E1B] border border-[#D4C9B4]'
                  : 'bg-[#F3EFE6] text-[#5A6B65] hover:bg-[#EAE3D2]'
              }`}
              style={isCurrent ? { backgroundColor: section.color } : undefined}
            >
              <span>R.{id}</span>
              {isDone && !isCurrent && (
                <CheckCircle2 className="w-3 h-3 text-emerald-700" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Slide Container */}
      <article className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl overflow-hidden shadow-xs">
        {/* Section Color Top Accent Bar */}
        <div className="h-2 w-full" style={{ backgroundColor: section.color }} />

        <div className="p-6 sm:p-8 space-y-8">
          {/* 1. HEADER (RecHeader) */}
          <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#E5DEC9] pb-6">
            <div className="space-y-2">
              {/* Unboxed Metadata Line per Design Constitution */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#5A6B65]">
                <span className="font-semibold" style={{ color: section.color }}>
                  {t('Section', 'Bagian')} {section.id}: {section.title}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {t('2003/SR Ref:', 'Ref 2003/SR:')} {rec.oldNumber}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {rec.interpretiveNote
                    ? t(
                        'Interpretive Note (INR) Available *',
                        'Tersedia Catatan Interpretatif (INR) *'
                      )
                    : t(
                        'Self-Contained Text (No Separate IN)',
                        'Teks Mandiri (Tanpa INR Terpisah)'
                      )}
                </span>
                {isQuizPassed && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-800 font-semibold">
                      {t('● Quiz Verified', '● Kuis Lulus')}
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-[#141E1B] font-display">
                {t('Recommendation', 'Rekomendasi')} {rec.id}: {rec.title}
              </h1>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {rec.interpretiveNote && (
                <button
                  type="button"
                  onClick={() => setInDrawerOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-95 whitespace-nowrap cursor-pointer shadow-2xs"
                  style={{ backgroundColor: section.color }}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>
                    {t(
                      `Open Interpretive Note (INR.${rec.id})`,
                      `Buka Catatan Interpretatif (INR.${rec.id})`
                    )}
                  </span>
                </button>
              )}

              <button
                type="button"
                onClick={() => onToggleBookmark(rec.id)}
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'bg-amber-50 border-amber-400 text-amber-800'
                    : 'bg-[#FFFDF9] border-[#E5DEC9] text-[#5A6B65] hover:text-[#141E1B] hover:bg-[#F3EFE6]'
                }`}
                aria-label={isBookmarked ? 'Remove Bookmark' : 'Bookmark Recommendation'}
                title={
                  isBookmarked
                    ? t('Bookmarked', 'Tersimpan di Markah')
                    : t('Bookmark for review', 'Simpan ke Markah')
                }
              >
                <Bookmark
                  className="w-4 h-4"
                  fill={isBookmarked ? 'currentColor' : 'none'}
                />
              </button>
            </div>
          </header>

          {/* 2. ESSENCE CARD ("In plain words") */}
          <section
            className="p-5 rounded-xl border space-y-1.5"
            style={{
              backgroundColor: `${section.color}0A`,
              borderColor: `${section.color}35`
            }}
            aria-label="In Plain Words Summary"
          >
            <div
              className="text-xs font-mono uppercase tracking-wider font-semibold"
              style={{ color: section.color }}
            >
              {t(
                `In Plain Words · Essence of R.${rec.id}`,
                `Intisari Bahasa Lugas · Esensi R.${rec.id}`
              )}
            </div>
            <p className="text-base sm:text-lg font-medium text-[#141E1B] leading-relaxed">
              {rec.essence}
            </p>
            {rec.revisionNote && (
              <p className="text-xs text-[#3F4E49] pt-2 border-t border-[#E5DEC9]">
                <strong className="text-[#141E1B]">
                  {t(
                    'June 2026 Edition Update Note:',
                    'Catatan Pembaruan Edisi Juni 2026:'
                  )}
                </strong>{' '}
                {rec.revisionNote}
              </p>
            )}
          </section>

          {/* 3. WHO MUST ACT? (ActorChips) & 5. NUMBERS TO REMEMBER (ThresholdBadges) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2.5" aria-label="Who Must Act">
              <div className="text-xs font-mono uppercase tracking-wider text-[#5A6B65]">
                {t(
                  'Who Must Act? (Click Actor to Filter Explorer)',
                  'Siapa yang Wajib Bertindak? (Klik Aktor untuk Filter)'
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {rec.audience.map((actor) => (
                  <button
                    key={actor}
                    type="button"
                    onClick={() => onFilterByActor(actor)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F3EFE6] hover:bg-[#EAE3D2] text-[#141E1B] border border-[#DFD7C4] transition-colors cursor-pointer"
                  >
                    {lang === 'id'
                      ? AUDIENCE_LABELS_ID[actor]
                      : AUDIENCE_LABELS_EN[actor]}{' '}
                    →
                  </button>
                ))}
              </div>
            </section>

            <section className="space-y-2.5" aria-label="Numbers and Deadlines to Remember">
              <div className="text-xs font-mono uppercase tracking-wider text-[#5A6B65]">
                {t(
                  'Numbers & Statutory Thresholds to Remember',
                  'Angka, Ambang Batas & Tenggat Waktu Penting'
                )}
              </div>
              {rec.thresholds.length > 0 ? (
                <div className="space-y-2">
                  {rec.thresholds.map((th, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-amber-50/80 border border-amber-300/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                    >
                      <span className="font-mono text-xs sm:text-sm font-bold text-amber-950 tabular-nums">
                        {th.value}
                      </span>
                      <span className="text-xs text-amber-900">{th.context}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-[#F3EFE6]/60 border border-[#E5DEC9] text-xs text-[#5A6B65] font-mono">
                  {t(
                    'No fixed monetary floor — obligation applies across all qualifying activities/risks.',
                    'Tanpa ambang batas nominal minimum — kewajiban berlaku atas seluruh aktivitas/risiko yang memenuhi syarat.'
                  )}
                </div>
              )}
            </section>
          </div>

          {/* 3B. BEGINNER-FRIENDLY LAYMAN GUIDE (Analogy, Story, Jargon Buster, Myth vs Reality) */}
          <BeginnerGuideCard recId={rec.id} section={section} />

          {/* 4. CORE OBLIGATIONS (ObligationAccordion) */}
          <section className="space-y-3" aria-label="Core Obligations">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#141E1B] font-display">
                {t('Core Obligations', 'Kewajiban Pokok')} ({rec.obligations.length})
              </h2>
              <button
                type="button"
                onClick={() =>
                  setExpandedObligations(
                    allExpanded ? [] : rec.obligations.map((o) => o.id)
                  )
                }
                className="text-xs font-medium text-[#0B4F3F] hover:underline transition-colors cursor-pointer"
              >
                {allExpanded
                  ? t('Collapse All', 'Tutup Semua')
                  : t('Expand All', 'Buka Semua')}
              </button>
            </div>

            <div className="space-y-2.5">
              {rec.obligations.map((ob, idx) => {
                const isExpanded = expandedObligations.includes(ob.id);
                return (
                  <div
                    key={ob.id}
                    className="border border-[#E5DEC9] rounded-xl overflow-hidden bg-[#F9F6F0]/60"
                  >
                    <button
                      type="button"
                      onClick={() => toggleObligation(ob.id)}
                      aria-expanded={isExpanded}
                      className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-4 hover:bg-[#F3EFE6] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="font-mono text-xs font-bold tabular-nums"
                          style={{ color: section.color }}
                        >
                          0{idx + 1}.
                        </span>
                        <span className="text-sm font-semibold text-[#141E1B]">
                          {ob.title}
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#5A6B65] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#5A6B65] shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 pt-2 border-t border-[#E5DEC9]/80 bg-[#FFFDF9]">
                        <p className="text-xs sm:text-sm text-[#23312D] leading-relaxed whitespace-pre-line">
                          {ob.body}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 6. INTERPRETIVE NOTE INLINE PREVIEW + DRAWER TRIGGER */}
          {rec.interpretiveNote && rec.inHighlights && rec.inHighlights.length > 0 && (
            <section
              className="p-5 rounded-xl bg-[#F3EFE6]/70 border border-[#DFD7C4] space-y-3"
              aria-label="Interpretive Note Highlights"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#0B4F3F]" />
                  <h3 className="text-sm font-bold text-[#141E1B]">
                    {t(
                      `Interpretive Note (INR.${rec.id}) Binding Highlights`,
                      `Poin Penting Mengikat Catatan Interpretatif (INR.${rec.id})`
                    )}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setInDrawerOpen(true)}
                  className="text-xs font-semibold text-[#0B4F3F] hover:underline cursor-pointer"
                >
                  {t(
                    `Open Dedicated INR.${rec.id} Reader Drawer →`,
                    `Buka Panel Lengkap INR.${rec.id} →`
                  )}
                </button>
              </div>
              <ul className="space-y-2">
                {rec.inHighlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-[#23312D] leading-relaxed flex items-start gap-2"
                  >
                    <span
                      className="font-mono font-bold shrink-0"
                      style={{ color: section.color }}
                    >
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* DEEP-DIVE INTERACTIVE SIMULATION (if present on this slide) */}
          {rec.diagram && (
            <section aria-label="Interactive Deep-Dive Simulation">
              <InteractiveDiagram
                type={rec.diagram}
                sectionColor={section.color}
              />
            </section>
          )}

          {/* REAL-WORLD MASTERY, FLEXIBLE EXPLANATION & GLOBAL CASE DOSSIER */}
          <DeepStudyDossier recId={rec.id} section={section} />

          {/* 7. KEY TERMS (GlossTips) & 8. RELATED RECOMMENDATIONS (CrossLinks) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-[#E5DEC9]">
            <section className="space-y-2.5" aria-label="Key Glossary Terms">
              <div className="text-xs font-mono uppercase tracking-wider text-[#5A6B65]">
                {t(
                  'Key Glossary Terms (Hover or Click for Definition)',
                  'Istilah Glosarium Utama (Arahkan Kursor atau Klik)'
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {rec.keyTerms.map((termId) => (
                  <GlossTip
                    key={termId}
                    termId={termId}
                    onOpenGlossary={onOpenGlossaryTerm}
                  />
                ))}
              </div>
            </section>

            <section className="space-y-2.5" aria-label="Related Recommendations">
              <div className="text-xs font-mono uppercase tracking-wider text-[#5A6B65]">
                {t(
                  'Related Cross-Linked Recommendations',
                  'Rekomendasi Terkait (Tautan Silang)'
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {rec.related.map((relId) => {
                  const relRec = recommendations.find((r) => r.id === relId);
                  if (!relRec) return null;
                  return (
                    <button
                      key={relId}
                      type="button"
                      onClick={() => onSelectRec(relId)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FFFDF9] hover:bg-[#F3EFE6] text-[#141E1B] border border-[#E5DEC9] transition-colors cursor-pointer"
                      title={relRec.title}
                    >
                      <span className="font-mono font-semibold text-[#0B4F3F]">
                        R.{relId}
                      </span>
                      <span> · {relRec.title}</span>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* 9. CHECK YOURSELF (QuizPanel) */}
          <QuizPanel
            quizKey={`rec-${rec.id}`}
            label={`${t('Recommendation', 'Rekomendasi')} ${rec.id}`}
            quiz={rec.quiz}
            selectedOption={progress.quizAnswers[`rec-${rec.id}`]}
            onSelectAnswer={onAnswerQuiz}
            onResetAnswer={onResetQuiz}
          />

          {/* Slide Footer Navigation */}
          <footer className="flex items-center justify-between pt-4 border-t border-[#E5DEC9]">
            <button
              type="button"
              disabled={rec.id <= 1}
              onClick={() => onSelectRec(rec.id - 1)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border border-[#E5DEC9] bg-[#F3EFE6]/70 text-[#141E1B] hover:bg-[#EAE3D2] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                {rec.id > 1
                  ? `${t('Prev:', 'Sebelumnya:')} R.${rec.id - 1}`
                  : t('Start of Recommendations', 'Awal Rekomendasi')}
              </span>
            </button>

            <div className="text-xs font-mono text-[#5A6B65] tabular-nums">
              {t(
                `Recommendation ${rec.id} of 40`,
                `Rekomendasi ${rec.id} dari 40`
              )}
            </div>

            <button
              type="button"
              disabled={rec.id >= 40}
              onClick={() => onSelectRec(rec.id + 1)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#11221D] text-[#FAF8F5] hover:bg-[#1B352D] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <span>
                {rec.id < 40
                  ? `${t('Next:', 'Selanjutnya:')} R.${rec.id + 1}`
                  : t('Completed All 40', 'Selesai Seluruh 40 Rekomendasi')}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </footer>
        </div>
      </article>

      {/* Slide-Over Interpretive Note Drawer */}
      <INDrawer
        rec={rec}
        section={section}
        isOpen={inDrawerOpen}
        onClose={() => setInDrawerOpen(false)}
      />
    </div>
  );
};
