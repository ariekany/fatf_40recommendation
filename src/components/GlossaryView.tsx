import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, ArrowRight } from 'lucide-react';

interface GlossaryViewProps {
  highlightedTermId: string | null;
  onSelectRec: (id: number) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  highlightedTermId,
  onSelectRec
}) => {
  const { t, glossaryTerms, designatedOffences } = useLanguage();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  useEffect(() => {
    if (highlightedTermId) {
      const el = document.getElementById(`gloss-${highlightedTermId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [highlightedTermId]);

  const categories = [
    { value: 'ALL', label: t('All Categories', 'Semua Kategori') },
    { value: 'Actor & Entity', label: t('Actor & Entity', 'Aktor & Entitas') },
    { value: 'Core Concept', label: t('Core Concept', 'Konsep Inti') },
    { value: 'Compliance & Measure', label: t('Compliance & Measure', 'Kepatuhan & Pencegahan') },
    { value: 'Sanctions & Legal', label: t('Sanctions & Legal', 'Sanksi & Hukum') }
  ];

  const filteredTerms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return glossaryTerms.filter((item) => {
      if (categoryFilter !== 'ALL' && item.category !== categoryFilter) {
        return false;
      }
      if (q) {
        return (
          item.term.toLowerCase().includes(q) ||
          item.shortDef.toLowerCase().includes(q) ||
          item.fullDef.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [glossaryTerms, searchQuery, categoryFilter]);

  return (
    <div className="space-y-8">
      <div className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-6 space-y-5 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EDE6D6] pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#0B4F3F] font-semibold">
              {t(
                'Authoritative Definitions · Layer 3 of the FATF Standard',
                'Definisi Resmi Mengikat · Lapisan Ke-3 Standar FATF'
              )}
            </div>
            <h1 className="text-2xl font-bold text-[#141E1B] mt-0.5 font-display">
              {t(
                'FATF General Glossary & Legal Definitions',
                'Glosarium Umum & Definisi Hukum FATF'
              )}
            </h1>
          </div>

          <div className="text-xs font-mono text-[#5A6B65] tabular-nums">
            {t(
              `Showing ${filteredTerms.length} of ${glossaryTerms.length} Core Terms`,
              `Menampilkan ${filteredTerms.length} dari ${glossaryTerms.length} Istilah Inti`
            )}
          </div>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 text-[#6E7D77] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t(
              "Search glossary definitions (e.g., 'Beneficial Owner', 'Without delay', 'Shell bank', 'VASP', 'Nominator')...",
              "Cari definisi glosarium (mis. 'Pemilik Manfaat', 'Tanpa penundaan', 'Bank Cangkang', 'VASP', 'Nominee')..."
            )}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#D4C9B4] text-sm text-[#141E1B] focus:outline-none focus:border-[#0B4F3F] bg-[#F9F6F0]/70"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setCategoryFilter(cat.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                categoryFilter === cat.value
                  ? 'bg-[#11221D] text-[#FAF8F5]'
                  : 'bg-[#F3EFE6] text-[#2C3A35] hover:bg-[#EAE3D2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Terms List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((item) => {
          const isHighlighted = highlightedTermId === item.id;
          return (
            <article
              key={item.id}
              id={`gloss-${item.id}`}
              className={`bg-[#FFFDF9] rounded-xl p-6 border transition-all flex flex-col justify-between gap-4 shadow-2xs ${
                isHighlighted
                  ? 'border-[#0B4F3F] ring-2 ring-[#0B4F3F]/20'
                  : 'border-[#E5DEC9]'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#5A6B65]">
                  <span className="text-[#0B4F3F] font-semibold">
                    {item.category}
                  </span>
                  <span>
                    {t('FATF Standard Term', 'Istilah Standar FATF')}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-[#141E1B] font-display">
                  {item.term}
                </h2>

                <p className="text-xs font-medium text-[#141E1B] bg-[#F3EFE6]/70 p-3 rounded-lg border border-[#DFD7C4] leading-relaxed">
                  {item.shortDef}
                </p>

                <p className="text-xs text-[#23312D] leading-relaxed whitespace-pre-line">
                  {item.fullDef}
                </p>

                {item.subItems && item.subItems.length > 0 && (
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-[#5A6B65] uppercase mb-1.5">
                      {t('Enumerated Scope', 'Rincian Cakupan')} ({item.subItems.length}):
                    </div>
                    <ul className="grid grid-cols-1 gap-1 text-xs text-[#23312D] bg-[#F9F6F0] p-3 rounded-lg border border-[#E5DEC9] max-h-48 overflow-y-auto">
                      {item.subItems.map((sub, i) => (
                        <li key={i} className="truncate" title={sub}>
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#EDE6D6] flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-[#5A6B65]">
                  {t(
                    'Appears in Recommendations:',
                    'Terkait dengan Rekomendasi:'
                  )}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.relatedRecs.map((recId) => (
                    <button
                      key={recId}
                      type="button"
                      onClick={() => onSelectRec(recId)}
                      className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-[#F3EFE6] hover:bg-[#11221D] hover:text-white text-[#141E1B] border border-[#DFD7C4] transition-colors cursor-pointer"
                    >
                      R.{recId} →
                    </button>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Dedicated 21 Designated Categories of Offences Reference Grid */}
      <section className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-6 space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EDE6D6] pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#1E3A8A] font-semibold">
              {t(
                'Complete Statutory Reference · Recommendation 3 & Glossary',
                'Referensi Hukum Lengkap · Rekomendasi 3 & Glosarium'
              )}
            </div>
            <h2 className="text-xl font-bold text-[#141E1B] mt-0.5 font-display">
              {t(
                'The 21 Designated Categories of Predicate Offences',
                '21 Kategori Tindak Pidana Asal (Predicate Offences) Wajib'
              )}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onSelectRec(3)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#1E3A8A] text-white hover:opacity-95 transition-opacity cursor-pointer shrink-0"
          >
            <span>
              {t(
                'Open R.3 Money Laundering Offence',
                'Buka Slide R.3 Tindak Pidana TPPU'
              )}
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {designatedOffences.map((cat) => (
            <div
              key={cat.id}
              className="p-3.5 rounded-lg bg-[#F9F6F0] border border-[#E5DEC9] space-y-1"
            >
              <div className="text-xs font-semibold text-[#141E1B] flex items-start gap-2">
                <span className="font-mono text-[#1E3A8A] tabular-nums shrink-0 font-bold">
                  {String(cat.id).padStart(2, '0')}.
                </span>
                <span>{cat.name}</span>
              </div>
              <p className="text-[11px] text-[#3F4E49] pl-6 leading-relaxed">
                {cat.examples}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
