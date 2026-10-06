import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionMeta } from '../types/fatf';
import {
  Briefcase,
  AlertOctagon,
  Globe,
  ShieldAlert,
  Eye,
  Compass
} from 'lucide-react';

interface DeepStudyDossierProps {
  recId: number;
  section: SectionMeta;
}

export const DeepStudyDossier: React.FC<DeepStudyDossierProps> = ({
  recId,
  section
}) => {
  const { deepStudyData, t } = useLanguage();
  const study = deepStudyData[recId];
  const [activeTab, setActiveTab] = useState<'all' | 'case' | 'practical' | 'redflags'>('all');

  if (!study) return null;

  return (
    <section
      className="space-y-6 pt-4 border-t border-[#E5DEC9]"
      aria-label={`In-Depth Practical Guide and Global Case Study for Recommendation ${recId}`}
    >
      {/* Section Header & View Mode Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div
            className="text-xs font-mono uppercase tracking-wider font-semibold"
            style={{ color: section.color }}
          >
            {t(
              'Beyond the Textbook · Real-World Mastery & Global Case Dossier',
              'Di Luar Buku Teks · Pemahaman Praktis & Studi Kasus Dunia Nyata'
            )}
          </div>
          <h2 className="text-xl font-bold text-[#141E1B] mt-0.5 font-display">
            {t(
              `How R.${recId} Works in Practice & What Happened When It Failed`,
              `Bagaimana R.${recId} Bekerja di Lapangan & Studi Kasus Pelanggarannya di Dunia`
            )}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-1 bg-[#F3EFE6] p-1 rounded-lg border border-[#E5DEC9]">
          {(
            [
              ['all', t('Full Dossier', 'Semua Materi')],
              ['practical', t('Practical Guide', 'Penjelasan Praktis')],
              ['case', t('Global Case Study', 'Studi Kasus Global')],
              ['redflags', t('Red Flags & Assessor Lens', 'Red Flags & Lensa Asesor')]
            ] as const
          ).map(([tabKey, label]) => (
            <button
              key={tabKey}
              type="button"
              onClick={() => setActiveTab(tabKey)}
              className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tabKey
                  ? 'bg-[#FFFDF9] text-[#141E1B] shadow-2xs border border-[#E5DEC9]'
                  : 'text-[#5A6B65] hover:text-[#141E1B]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. PRACTICAL EXPLANATION ("Why It Exists" & "Monday Morning Reality") */}
      {(activeTab === 'all' || activeTab === 'practical') && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#FFFDF9] border border-[#E5DEC9] shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#5A6B65] font-semibold">
              <Compass className="w-4 h-4" style={{ color: section.color }} />
              <span>
                {t(
                  'Why This Rule Exists (Plain Language)',
                  'Mengapa Aturan Ini Ada (Bahasa Lugas)'
                )}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#23312D] leading-relaxed">
              {study.plainEnglishWhy}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FFFDF9] border border-[#E5DEC9] shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#5A6B65] font-semibold">
              <Briefcase className="w-4 h-4" style={{ color: section.color }} />
              <span>
                {t(
                  'Monday Morning Reality (Operational Practice)',
                  'Praktik Operasional Nyata di Lapangan'
                )}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#23312D] leading-relaxed">
              {study.mondayMorningReality}
            </p>
          </div>
        </div>
      )}

      {/* 2. REAL-WORLD GLOBAL ENFORCEMENT CASE STUDY */}
      {(activeTab === 'all' || activeTab === 'case') && (
        <div className="rounded-xl border border-[#253D35] bg-[#10211C] text-[#FAF8F5] overflow-hidden shadow-md">
          <div
            className="px-6 py-4 border-b border-[#233B33] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            style={{ backgroundColor: `${section.color}30` }}
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E2B86B]">
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span>
                  {t(
                    `GLOBAL ENFORCEMENT CASE STUDY · R.${recId} BREACH`,
                    `STUDI KASUS PENEGAKAN HUKUM GLOBAL · PELANGGARAN R.${recId}`
                  )}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                {study.caseStudy.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#C8D6D0] shrink-0">
              {study.caseStudy.jurisdictionAndYear}
            </span>
          </div>

          <div className="p-6 space-y-4">
            <div className="space-y-1.5">
              <div className="text-xs font-mono uppercase text-[#9AB0A8]">
                {t(
                  '1. What Happened in the Real World',
                  '1. Kronologi Kejadian Nyata di Dunia'
                )}
              </div>
              <p className="text-xs sm:text-sm text-[#EAE6DF] leading-relaxed">
                {study.caseStudy.whatHappened}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-rose-950/45 border border-rose-800/60 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-300 uppercase">
                  <AlertOctagon className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {t(
                      `2. How Recommendation ${recId} Was Breached`,
                      `2. Letak Pelanggaran Rekomendasi ${recId}`
                    )}
                  </span>
                </div>
                <p className="text-xs text-[#F4ECEE] leading-relaxed">
                  {study.caseStudy.theBreach}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-emerald-950/45 border border-emerald-800/60 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-300 uppercase">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {t(
                      '3. Fallout, Penalties & Global Lesson',
                      '3. Dampak Sanksi & Pelajaran Kepatuhan'
                    )}
                  </span>
                </div>
                <p className="text-xs text-[#E8F3EE] leading-relaxed">
                  {study.caseStudy.consequencesAndLesson}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. CRIMINAL EVASION PLAYBOOK & MUTUAL EVALUATION ASSESSOR LENS */}
      {(activeTab === 'all' || activeTab === 'redflags') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 p-5 rounded-xl bg-amber-50/70 border border-amber-300/70 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-amber-900">
              <ShieldAlert className="w-4 h-4 text-amber-800 shrink-0" />
              <span>
                {t(
                  'Criminal Evasion Playbook & Red Flags to Watch',
                  'Modus Operandi Pelaku & Indikator Red Flags'
                )}
              </span>
            </div>
            <ul className="space-y-2">
              {study.criminalPlaybookAndRedFlags.map((flag, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-amber-950 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="font-mono font-bold text-amber-800 shrink-0">
                    0{idx + 1}.
                  </span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 p-5 rounded-xl bg-[#F3EFE6]/90 border border-[#DFD7C4] space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#0B4F3F]">
                <Eye className="w-4 h-4 text-[#0B4F3F] shrink-0" />
                <span>
                  {t(
                    'What FATF Assessors Actually Test',
                    'Apa yang Diuji oleh Asesor Evaluasi FATF'
                  )}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#23312D] leading-relaxed">
                {study.assessorLens}
              </p>
            </div>
            <div className="pt-2 border-t border-[#DFD7C4] text-[11px] font-mono text-[#5A6B65]">
              {t(
                'Mutual Evaluation Lens · Technical Compliance vs. Real-World Effectiveness',
                'Lensa Evaluasi Bersama · Kepatuhan Teknis vs. Efektivitas Nyata'
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
