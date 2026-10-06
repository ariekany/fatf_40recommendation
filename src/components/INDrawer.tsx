import React from 'react';
import { Recommendation, SectionMeta } from '../types/fatf';
import { useLanguage } from '../context/LanguageContext';
import { X, FileText, CheckCircle2 } from 'lucide-react';

interface INDrawerProps {
  rec: Recommendation;
  section: SectionMeta;
  isOpen: boolean;
  onClose: () => void;
}

export const INDrawer: React.FC<INDrawerProps> = ({
  rec,
  section,
  isOpen,
  onClose
}) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#11221D]/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label={`Interpretive Note to Recommendation ${rec.id}`}
    >
      <div className="w-full max-w-xl bg-[#FFFDF9] h-full shadow-2xl border-l border-[#E5DEC9] flex flex-col justify-between overflow-y-auto">
        <div className="p-6 space-y-6">
          <div className="flex items-start justify-between gap-4 border-b border-[#E5DEC9] pb-4">
            <div>
              <div
                className="text-xs font-mono uppercase tracking-wider font-semibold"
                style={{ color: section.color }}
              >
                {t(
                  `Interpretive Note (INR.${rec.id}) · Binding Standard Layer`,
                  `Catatan Interpretatif (INR.${rec.id}) · Lapisan Standar Mengikat`
                )}
              </div>
              <h3 className="text-xl font-bold text-[#141E1B] mt-1 font-display">
                {t('Recommendation', 'Rekomendasi')} {rec.id}: {rec.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-[#6E7D77] hover:text-[#141E1B] hover:bg-[#F3EFE6] transition-colors"
              aria-label="Close Interpretive Note Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 rounded-lg bg-[#F3EFE6]/80 border border-[#DFD7C4] text-xs text-[#2C3A35] leading-relaxed">
            <strong>
              {t(
                'How to read this Interpretive Note: ',
                'Cara membaca Catatan Interpretatif ini: '
              )}
            </strong>
            {t(
              'Per the FATF Introduction, the Interpretive Notes form an integral, binding part of the FATF Standards alongside the Recommendations and Glossary. Throughout this note, the word "should" has the same mandatory meaning as "must".',
              'Sesuai Pengantar Standar FATF, Catatan Interpretatif merupakan bagian tak terpisahkan dan mengikat dari Standar FATF bersama dengan 40 Rekomendasi dan Glosarium. Di seluruh teks ini, kata "should" memiliki arti wajib yang sama dengan "must" (wajib).'
            )}
          </div>

          {rec.revisionNote && (
            <div className="p-4 rounded-lg bg-amber-50/90 border border-amber-300/80 space-y-1">
              <div className="text-xs font-mono font-semibold text-amber-900 uppercase">
                {t(
                  'Recent Standard Revision Highlight (June 2026 Edition)',
                  'Sorotan Revisi Standar Terbaru (Edisi Juni 2026)'
                )}
              </div>
              <p className="text-xs text-amber-950 leading-relaxed">
                {rec.revisionNote}
              </p>
            </div>
          )}

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#141E1B] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0B4F3F]" />
              <span>
                {t(
                  `Key Binding Requirements & Operational Rules in INR.${rec.id}`,
                  `Ketentuan Mengikat & Aturan Operasional Utama dalam INR.${rec.id}`
                )}
              </span>
            </h4>

            {rec.inHighlights && rec.inHighlights.length > 0 ? (
              <ul className="space-y-3">
                {rec.inHighlights.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-lg bg-white border border-[#E5DEC9] text-xs text-[#141E1B] leading-relaxed flex items-start gap-2.5 shadow-2xs"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: section.color }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-[#6E7D77]">
                {t(
                  `Recommendation ${rec.id} is self-contained in the main Recommendation text and does not have a separate Interpretive Note.`,
                  `Rekomendasi ${rec.id} telah diatur secara lengkap dalam teks utama Rekomendasi dan tidak memiliki Catatan Interpretatif terpisah.`
                )}
              </p>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-[#E5DEC9] bg-[#F3EFE6]/60 flex items-center justify-between">
          <span className="text-xs text-[#6E7D77] font-mono">
            {t(
              'FATF Recommendations · Updated June 2026',
              'Rekomendasi FATF · Edisi Juni 2026'
            )}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#11221D] text-[#FAF8F5] hover:bg-[#1B352D] transition-colors cursor-pointer"
          >
            {t('Close Panel', 'Tutup Panel')}
          </button>
        </div>
      </div>
    </div>
  );
};
