import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, ArrowUpRight } from 'lucide-react';

interface GlossTipProps {
  termId: string;
  onOpenGlossary?: (termId: string) => void;
}

export const GlossTip: React.FC<GlossTipProps> = ({ termId, onOpenGlossary }) => {
  const { glossaryTerms, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const entry = glossaryTerms.find((item) => item.id === termId);

  if (!entry) return null;

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F3EFE6] hover:bg-[#EAE3D2] text-[#141E1B] border border-[#DFD7C4] transition-colors cursor-pointer"
        aria-expanded={open}
      >
        <BookOpen className="w-3.5 h-3.5 text-[#0B4F3F] shrink-0" />
        <span>{entry.term}</span>
      </button>

      {open && (
        <div
          role="tooltip"
          className="absolute z-40 bottom-full left-0 mb-2 w-80 sm:w-96 p-4 rounded-xl bg-[#11221D] text-[#FAF8F5] shadow-xl border border-[#253D35] space-y-2 text-left"
        >
          <div className="flex items-center justify-between gap-2 border-b border-[#253D35] pb-1.5">
            <span className="text-xs font-mono text-[#E2B86B]">{entry.category}</span>
            <span className="text-[11px] font-mono text-[#A3B5AE]">
              {t('FATF Glossary Definition', 'Definisi Glosarium FATF')}
            </span>
          </div>
          <div className="text-sm font-semibold text-white">{entry.term}</div>
          <p className="text-xs text-[#E2E8E5] leading-relaxed">{entry.shortDef}</p>
          {onOpenGlossary && (
            <div className="pt-1.5 border-t border-[#253D35] flex justify-end">
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  onOpenGlossary(entry.id);
                }}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#E2B86B] hover:text-amber-200"
              >
                <span>
                  {t(
                    'Open full definition in Glossary',
                    'Buka definisi lengkap di Glosarium'
                  )}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
