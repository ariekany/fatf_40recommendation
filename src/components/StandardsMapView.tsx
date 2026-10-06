import React, { useState } from 'react';
import { SectionId, UserProgress } from '../types/fatf';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Sliders,
  Clock
} from 'lucide-react';

interface StandardsMapViewProps {
  onSelectRec: (id: number) => void;
  onOpenIntro: (id: string) => void;
  onOpenExplorer: () => void;
  onOpenQuizArena: () => void;
  onOpenQuickStudy: () => void;
  progress: UserProgress;
}

export const StandardsMapView: React.FC<StandardsMapViewProps> = ({
  onSelectRec,
  onOpenIntro,
  onOpenExplorer,
  onOpenQuickStudy,
  progress
}) => {
  const { t, actorLabel, sections, recommendations, introSlides, deepStudyData } =
    useLanguage();
  const [selectedSection, setSelectedSection] = useState<SectionId | 'ALL'>('ALL');

  const visibleSections =
    selectedSection === 'ALL'
      ? sections
      : sections.filter((s) => s.id === selectedSection);

  const totalVisited = progress.visitedRecs.length;
  const totalQuizzesPassed = progress.quizPassedRecs.length;

  return (
    <div className="space-y-10">
      {/* Institutional Hero & Operational Utility Bar */}
      <section className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#0B4F3F] font-semibold">
              <span>
                {t(
                  'INTERNATIONAL AML/CFT/CPF STANDARDS',
                  'STANDAR INTERNASIONAL APU-PPT/PPSPM'
                )}
              </span>
              <span aria-hidden="true">·</span>
              <span>{t('ADOPTED FEB 2012', 'DIADOPSI FEB 2012')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#92400E]">
                {t('UPDATED JUNE 2026 EDITION', 'EDISI PEMBARUAN JUNI 2026')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#141E1B] tracking-tight font-display">
              {t(
                'The FATF 40 Recommendations Interactive Architecture Map',
                'Peta Belajar Interaktif 40 Rekomendasi Financial Action Task Force (FATF) atau Badan Penentu Standar Global Anti Kejahatan Keuangan'
              )}
            </h1>

            <p className="text-sm sm:text-base text-[#3F4E49] leading-relaxed max-w-2xl">
              {t(
                'Explore all 40 Recommendations across 7 sections (A–G), 29 binding Interpretive Notes (including the June 2025 R.16 Payment Transparency and June 2026 INR.6 Humanitarian Exemption updates), 40 global enforcement case studies, and 12 interactive compliance diagrams.',
                'Pelajari 40 Rekomendasi Financial Action Task Force (FATF) dalam 7 bagian utama (A–G). Setiap modul dilengkapi istilah asli Bahasa Inggris beserta terjemahannya, ilustrasi praktis, 40 studi kasus penegakan hukum dunia, serta 12 simulasi kepatuhan interaktif.'
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenQuickStudy}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#0B4F3F] text-[#FAF8F5] hover:bg-[#083B2F] transition-colors cursor-pointer whitespace-nowrap shadow-2xs"
              >
                <Clock className="w-4 h-4 text-[#E2B86B]" />
                <span>
                  {t(
                    'Start 5-Min Daily Quick Study',
                    'Mulai Belajar Cepat 5 Menit'
                  )}
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectRec(1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#11221D] text-[#FAF8F5] hover:bg-[#1B352D] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>
                  {t('Launch Recommendation 1', 'Mulai Rekomendasi 1')}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onOpenIntro('S0')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#F3EFE6] border border-[#DFD7C4] text-[#141E1B] hover:bg-[#EAE3D2] transition-colors cursor-pointer whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-[#0B4F3F]" />
                <span>
                  {t(
                    '4-Slide Intro Journey (S0–S3)',
                    '4 Slide Pengantar Dasar (S0–S3)'
                  )}
                </span>
              </button>

              <button
                type="button"
                onClick={onOpenExplorer}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#FFFDF9] border border-[#DFD7C4] text-[#141E1B] hover:bg-[#F3EFE6] transition-colors cursor-pointer whitespace-nowrap"
              >
                <Sliders className="w-4 h-4 text-[#5A6B65]" />
                <span>
                  {t(
                    'Filter by Audience / Threshold',
                    'Filter Aktor / Ambang Batas'
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Right Operational Summary Box */}
          <div className="lg:col-span-4 bg-[#F3EFE6]/80 border border-[#DFD7C4] rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#DFD7C4] pb-3">
              <span className="text-xs font-mono uppercase text-[#5A6B65]">
                {t('Your Mastery Ledger', 'Catatan Kemajuan Belajar')}
              </span>
              <span className="text-xs font-mono font-bold text-[#0B4F3F] tabular-nums">
                {Math.round(((totalVisited + totalQuizzesPassed) / 80) * 100)}%{' '}
                {t('Overall', 'Total')}
              </span>
            </div>

            <dl className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#FFFDF9] rounded-lg border border-[#E5DEC9]">
                <dt className="text-[#5A6B65]">
                  {t('Slides Studied', 'Slide Dipelajari')}
                </dt>
                <dd className="text-lg font-bold text-[#141E1B] font-mono tabular-nums mt-0.5">
                  {totalVisited} / 40
                </dd>
              </div>
              <div className="p-3 bg-[#FFFDF9] rounded-lg border border-[#E5DEC9]">
                <dt className="text-[#5A6B65]">
                  {t('Quizzes Verified', 'Kuis Terverifikasi')}
                </dt>
                <dd className="text-lg font-bold text-[#0B4F3F] font-mono tabular-nums mt-0.5">
                  {totalQuizzesPassed} / 40
                </dd>
              </div>
            </dl>

            <div className="text-xs text-[#5A6B65] font-mono flex items-center justify-between pt-1">
              <span>
                {t('* = Interpretive Note (29)', '* = Catatan Interpretatif (29)')}
              </span>
              <span>
                {t('◆ = Interactive Sim (12)', '◆ = Simulasi Interaktif (12)')}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Intro Journey Strip */}
        <div className="pt-4 border-t border-[#E5DEC9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs font-mono text-[#5A6B65]">
            {t(
              'FOUNDATION MODULES (BEFORE R.1):',
              'MODUL FONDASI DASAR (SEBELUM R.1):'
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 flex-1">
            {introSlides.map((s) => {
              const visited = progress.visitedIntro.includes(s.id);
              const passed = progress.quizPassedIntro.includes(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => onOpenIntro(s.id)}
                  className="px-3 py-2 rounded-lg bg-[#F3EFE6]/70 hover:bg-[#EAE3D2] border border-[#E5DEC9] text-left flex items-center justify-between gap-2 transition-colors cursor-pointer"
                >
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-[#0B4F3F] font-semibold">
                      {s.id}
                    </span>
                    <span className="text-xs font-medium text-[#141E1B] ml-1.5">
                      {s.title}
                    </span>
                  </div>
                  {passed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  ) : visited ? (
                    <span className="w-2 h-2 rounded-full bg-[#0B4F3F] shrink-0" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Filter Segmented Control */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 bg-[#FFFDF9] p-1.5 rounded-xl border border-[#E5DEC9] shadow-2xs">
          <button
            type="button"
            onClick={() => setSelectedSection('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              selectedSection === 'ALL'
                ? 'bg-[#11221D] text-[#FAF8F5]'
                : 'text-[#5A6B65] hover:text-[#141E1B]'
            }`}
          >
            {t('All 7 Sections (40)', 'Semua 7 Bagian (40)')}
          </button>
          {sections.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => setSelectedSection(sec.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                selectedSection === sec.id
                  ? 'text-white'
                  : 'text-[#5A6B65] hover:text-[#141E1B]'
              }`}
              style={
                selectedSection === sec.id
                  ? { backgroundColor: sec.color }
                  : undefined
              }
            >
              {t('Sec', 'Bag')} {sec.id} ({sec.recIds.length})
            </button>
          ))}
        </div>
      </div>

      {/* Sections A–G Grid */}
      <div className="space-y-10">
        {visibleSections.map((section) => {
          const sectionRecs = recommendations.filter(
            (r) => r.section === section.id
          );
          const sectionCompleted = sectionRecs.filter((r) =>
            progress.quizPassedRecs.includes(r.id)
          ).length;

          return (
            <section
              key={section.id}
              className="space-y-4"
              aria-label={`Section ${section.id}: ${section.title}`}
            >
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#DFD7C4] pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span
                      className="font-bold uppercase tracking-wider"
                      style={{ color: section.color }}
                    >
                      {t('Section', 'Bagian')} {section.id} · {section.range}
                    </span>
                    <span aria-hidden="true" className="text-[#8E9B96]">
                      ·
                    </span>
                    <span className="text-[#5A6B65] tabular-nums">
                      {sectionRecs.length}{' '}
                      {t('Recommendations', 'Rekomendasi')}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#141E1B] font-display">
                    {section.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#3F4E49]">
                    {section.description}
                  </p>
                </div>

                <div className="text-xs font-mono text-[#5A6B65] tabular-nums shrink-0">
                  {t('Quizzes Verified:', 'Kuis Lulus:')} {sectionCompleted} /{' '}
                  {sectionRecs.length}
                </div>
              </div>

              {/* Recommendation Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sectionRecs.map((rec) => {
                  const isVisited = progress.visitedRecs.includes(rec.id);
                  const isPassed = progress.quizPassedRecs.includes(rec.id);

                  return (
                    <button
                      key={rec.id}
                      type="button"
                      onClick={() => onSelectRec(rec.id)}
                      className="group text-left bg-[#FFFDF9] hover:bg-[#F3EFE6]/60 border border-[#E5DEC9] hover:border-[#C7B99E] rounded-xl p-5 transition-all flex flex-col justify-between gap-4 cursor-pointer relative overflow-hidden shadow-2xs"
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-1"
                        style={{ backgroundColor: section.color }}
                      />

                      <div className="space-y-2">
                        {/* Clean unboxed kicker line per Zero-Pill Rule */}
                        <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#5A6B65]">
                          <div className="flex items-center gap-1.5">
                            <span
                              className="font-bold tabular-nums"
                              style={{ color: section.color }}
                            >
                              R.{rec.id}
                              {rec.interpretiveNote ? '*' : ''}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>
                              {t('Old:', 'Lama:')} {rec.oldNumber}
                            </span>
                            {rec.diagram && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="text-[#0B4F3F] font-semibold">
                                  ◆ {t('Interactive Lab', 'Simulasi')}
                                </span>
                              </>
                            )}
                          </div>

                          {isPassed ? (
                            <span className="text-emerald-800 font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>{t('Done', 'Lulus')}</span>
                            </span>
                          ) : isVisited ? (
                            <span className="text-[#5A6B65]">
                              {t('Read', 'Dibaca')}
                            </span>
                          ) : null}
                        </div>

                        <h3 className="text-base font-bold text-[#141E1B] group-hover:text-[#0B4F3F] transition-colors leading-snug font-display">
                          {rec.title}
                        </h3>

                        <p className="text-xs text-[#3F4E49] line-clamp-2 leading-relaxed">
                          {rec.essence}
                        </p>

                        {deepStudyData[rec.id] && (
                          <div className="text-[11px] text-[#5A6B65] pt-1 line-clamp-1">
                            <span className="font-mono font-semibold text-[#92400E]">
                              {t('Case:', 'Kasus:')}
                            </span>{' '}
                            {deepStudyData[rec.id].caseStudy.title}
                          </div>
                        )}
                      </div>

                      <div className="pt-3 border-t border-[#EDE6D6] flex items-center justify-between gap-2 text-[11px] font-mono text-[#5A6B65]">
                        <span className="truncate">
                          {t('Actors:', 'Aktor:')}{' '}
                          {rec.audience.map((a) => actorLabel(a)).join(' / ')}
                        </span>
                        <span className="text-[#0B4F3F] font-semibold group-hover:translate-x-0.5 transition-transform shrink-0">
                          {t('Study →', 'Pelajari →')}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
