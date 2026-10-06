import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionMeta } from '../types/fatf';
import {
  Lightbulb,
  BookOpen,
  HelpCircle,
  Sparkles,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface BeginnerGuideCardProps {
  recId: number;
  section: SectionMeta;
}

export const BeginnerGuideCard: React.FC<BeginnerGuideCardProps> = ({
  recId,
  section
}) => {
  const { beginnerGuides, t } = useLanguage();
  const guide = beginnerGuides[recId];
  const [isExpanded, setIsExpanded] = useState(true);

  if (!guide) return null;

  return (
    <div className="mb-8 border border-[#D5CCB4] bg-[#FFFDF9] shadow-sm overflow-hidden">
      {/* Header Bar */}
      <div
        className="px-6 py-4 bg-[#F3EFE6] border-b border-[#E5DEC9] flex flex-wrap items-center justify-between gap-4 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 flex items-center justify-center text-white shrink-0 shadow-xs"
            style={{ backgroundColor: section.color }}
          >
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-[#0F3E2E] text-[#F9F6F0]">
                {t('PRACTICAL GUIDE', 'PANDUAN DASAR')}
              </span>
              <span className="font-mono text-[11px] text-[#7A7365]">
                R.{recId} • {t('Context & Case Illustration', 'Ilustrasi & Istilah Kunci')}
              </span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#141C18] mt-0.5">
              {t(
                'Concept Illustration, Case Flow & Key Terms',
                'Gambaran Konsep, Alur Kasus & Daftar Istilah'
              )}
            </h3>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#0F3E2E] bg-[#FFFDF9] border border-[#D5CCB4] hover:border-[#141C18] transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? (
            <>
              {t('Hide Section', 'Sembunyikan')}
              <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              {t('Show Section', 'Tampilkan')}
              <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="p-6 md:p-8 space-y-6">
          {/* 1. Everyday Analogy */}
          <div
            className="p-5 md:p-6 bg-[#F9F6F0] border-l-4 border border-[#E5DEC9]"
            style={{ borderLeftColor: section.color }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#9A7228]" />
              <span className="font-mono text-[11px] uppercase tracking-widest font-bold text-[#9A7228]">
                {t('1. Practical Illustration', '1. Gambaran Praktis')}
              </span>
            </div>
            <h4 className="font-serif text-lg md:text-xl font-bold text-[#141C18] mb-2.5">
              {guide.analogyTitle}
            </h4>
            <p className="text-sm md:text-base text-[#141C18] leading-relaxed">
              {guide.analogyBody}
            </p>
          </div>

          {/* 2. Step-by-Step Story */}
          <div className="border border-[#E5DEC9] bg-[#FFFDF9] p-5 md:p-6">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-[#0F3E2E]" />
              <span className="font-mono text-[11px] uppercase tracking-widest font-bold text-[#0F3E2E]">
                {t(
                  '2. Operational Scenario',
                  '2. Contoh Penerapan di Lapangan'
                )}
              </span>
            </div>
            <h4 className="font-serif text-base md:text-lg font-bold text-[#141C18] mb-4">
              {guide.storyTitle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {guide.storySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#F9F6F0] border border-[#E5DEC9] flex items-start gap-3.5"
                >
                  <span
                    className="w-6 h-6 shrink-0 flex items-center justify-center font-mono text-xs font-bold text-white mt-0.5"
                    style={{ backgroundColor: section.color }}
                  >
                    {idx + 1}
                  </span>
                  <p className="text-xs md:text-sm text-[#141C18] leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Jargon Buster & 4. Myth vs Reality */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Jargon Buster */}
            <div className="lg:col-span-7 border border-[#E5DEC9] bg-[#F9F6F0] p-5">
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle className="w-4 h-4 text-[#0F3E2E]" />
                <span className="font-mono text-[11px] uppercase tracking-widest font-bold text-[#0F3E2E]">
                  {t(
                    '3. Key Terminology',
                    '3. Penjelasan Istilah Teknis'
                  )}
                </span>
              </div>
              <div className="space-y-3">
                {guide.jargonBuster.map((jb, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-[#FFFDF9] border border-[#E5DEC9]"
                  >
                    <div className="font-mono text-xs font-bold text-[#0F3E2E] mb-1">
                      {jb.term}
                    </div>
                    <p className="text-xs md:text-sm text-[#4A5550] leading-relaxed">
                      {jb.simpleMeaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Myth vs Reality */}
            <div className="lg:col-span-5 border border-[#E5DEC9] bg-[#FFFDF9] p-5 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest font-bold text-[#9A7228] mb-3">
                  {t(
                    '4. Common Misconception',
                    '4. Meluruskan Salah Kaprah'
                  )}
                </div>

                {/* Myth */}
                <div className="p-3.5 bg-rose-950/5 border border-rose-900/20 mb-3">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-rose-900 font-bold mb-1">
                    <XCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                    {t('MISCONCEPTION', 'ANGGAPAN YANG KELIRU')}
                  </div>
                  <p className="text-xs md:text-sm text-[#141C18] italic leading-relaxed">
                    "{guide.misconception.myth}"
                  </p>
                </div>

                {/* Reality */}
                <div className="p-3.5 bg-[#0F3E2E]/5 border border-[#0F3E2E]/25">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#0F3E2E] font-bold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F3E2E] shrink-0" />
                    {t('FATF STANDARD', 'KETENTUAN SEBENARNYA')}
                  </div>
                  <p className="text-xs md:text-sm text-[#141C18] leading-relaxed font-medium">
                    {guide.misconception.reality}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
