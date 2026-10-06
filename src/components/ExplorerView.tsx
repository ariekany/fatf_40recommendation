import React, { useState, useMemo } from 'react';
import {
  AudienceType,
  SectionId,
  UserProgress
} from '../types/fatf';
import { useLanguage } from '../context/LanguageContext';
import {
  Search,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Bookmark
} from 'lucide-react';

interface ExplorerViewProps {
  initialActorFilter: AudienceType | 'ALL';
  onSelectRec: (id: number) => void;
  progress: UserProgress;
}

export const ExplorerView: React.FC<ExplorerViewProps> = ({
  initialActorFilter,
  onSelectRec,
  progress
}) => {
  const { t, actorLabel, recommendations, sections, deepStudyData } =
    useLanguage();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sectionFilter, setSectionFilter] = useState<SectionId | 'ALL'>('ALL');
  const [actorFilter, setActorFilter] = useState<AudienceType | 'ALL'>(
    initialActorFilter
  );
  const [onlyWithThreshold, setOnlyWithThreshold] = useState<boolean>(false);
  const [onlyWithIN, setOnlyWithIN] = useState<boolean>(false);
  const [onlyWithDiagram, setOnlyWithDiagram] = useState<boolean>(false);
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);

  const audienceOptions: { value: AudienceType | 'ALL'; label: string }[] = [
    { value: 'ALL', label: t('All Actors', 'Semua Aktor') },
    { value: 'Country', label: t('Country / Legislature', 'Negara / Pembentuk UU') },
    { value: 'FI', label: t('Financial Institutions (FI)', 'Lembaga Keuangan (PJK/FI)') },
    { value: 'DNFBP', label: 'DNFBP' },
    { value: 'VASP', label: t('VASPs', 'VASP (Aset Virtual)') },
    { value: 'NPO', label: t('NPOs', 'NPO (Organisasi Nirlaba)') },
    { value: 'Competent Authority', label: t('Competent Authorities', 'Otoritas Berwenang') }
  ];

  const filteredRecs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return recommendations.filter((rec) => {
      if (sectionFilter !== 'ALL' && rec.section !== sectionFilter) return false;
      if (actorFilter !== 'ALL' && !rec.audience.includes(actorFilter))
        return false;
      if (onlyWithThreshold && rec.thresholds.length === 0) return false;
      if (onlyWithIN && !rec.interpretiveNote) return false;
      if (onlyWithDiagram && !rec.diagram) return false;
      if (onlyBookmarked && !progress.bookmarkedRecs.includes(rec.id))
        return false;

      if (q) {
        const matchId =
          `r.${rec.id}` === q || `r${rec.id}` === q || String(rec.id) === q;
        const matchTitle = rec.title.toLowerCase().includes(q);
        const matchOld = rec.oldNumber.toLowerCase().includes(q);
        const matchEssence = rec.essence.toLowerCase().includes(q);
        const matchObligations = rec.obligations.some(
          (o) =>
            o.title.toLowerCase().includes(q) || o.body.toLowerCase().includes(q)
        );
        const matchIN = rec.inHighlights?.some((h) =>
          h.toLowerCase().includes(q)
        );
        const matchThreshold = rec.thresholds.some(
          (th) =>
            th.value.toLowerCase().includes(q) ||
            th.context.toLowerCase().includes(q)
        );
        const deepStudy = deepStudyData[rec.id];
        const matchCaseStudy =
          deepStudy &&
          (deepStudy.caseStudy.title.toLowerCase().includes(q) ||
            deepStudy.caseStudy.whatHappened.toLowerCase().includes(q) ||
            deepStudy.caseStudy.jurisdictionAndYear.toLowerCase().includes(q) ||
            deepStudy.plainEnglishWhy.toLowerCase().includes(q));
        return (
          matchId ||
          matchTitle ||
          matchOld ||
          matchEssence ||
          matchObligations ||
          matchIN ||
          matchThreshold ||
          Boolean(matchCaseStudy)
        );
      }

      return true;
    });
  }, [
    recommendations,
    deepStudyData,
    searchQuery,
    sectionFilter,
    actorFilter,
    onlyWithThreshold,
    onlyWithIN,
    onlyWithDiagram,
    onlyBookmarked,
    progress.bookmarkedRecs
  ]);

  const resetFilters = () => {
    setSearchQuery('');
    setSectionFilter('ALL');
    setActorFilter('ALL');
    setOnlyWithThreshold(false);
    setOnlyWithIN(false);
    setOnlyWithDiagram(false);
    setOnlyBookmarked(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-6 space-y-5 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EDE6D6] pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#0B4F3F] font-semibold">
              {t(
                'Full-Text Search & Multi-Faceted Filter',
                'Pencarian Teks Lengkap & Filter Multi-Kriteria'
              )}
            </div>
            <h1 className="text-2xl font-bold text-[#141E1B] mt-0.5 font-display">
              {t(
                'FATF 40 Recommendation Explorer',
                'Direktori Penjelajah 40 Rekomendasi FATF'
              )}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#5A6B65] tabular-nums">
              {t(
                `Showing ${filteredRecs.length} of 40 Recommendations`,
                `Menampilkan ${filteredRecs.length} dari 40 Rekomendasi`
              )}
            </span>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-[#2C3A35] hover:text-[#141E1B] bg-[#F3EFE6] hover:bg-[#EAE3D2] border border-[#DFD7C4] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('Reset', 'Atur Ulang')}</span>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#6E7D77] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t(
              "Search across all 40 titles, obligations, case studies, thresholds (e.g. '15,000', '1MDB', 'Danske', 'shell bank', 'ISO 20022')...",
              "Cari di seluruh 40 rekomendasi, kewajiban, studi kasus, atau ambang batas (mis. '15.000', '1MDB', 'Danske', 'shell bank', 'nominee')..."
            )}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#D4C9B4] text-sm text-[#141E1B] focus:outline-none focus:border-[#0B4F3F] bg-[#F9F6F0]/70"
          />
        </div>

        {/* Filter Controls */}
        <div className="space-y-3">
          {/* Section Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-[#5A6B65] mr-1">
              {t('Section:', 'Bagian:')}
            </span>
            <button
              type="button"
              onClick={() => setSectionFilter('ALL')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                sectionFilter === 'ALL'
                  ? 'bg-[#11221D] text-[#FAF8F5]'
                  : 'bg-[#F3EFE6] text-[#2C3A35] hover:bg-[#EAE3D2]'
              }`}
            >
              {t('All Sections', 'Semua Bagian')}
            </button>
            {sections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => setSectionFilter(sec.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
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
                {sec.id}: {sec.shortTitle}
              </button>
            ))}
          </div>

          {/* Audience Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-[#5A6B65] mr-1">
              {t('Audience:', 'Aktor:')}
            </span>
            {audienceOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setActorFilter(opt.value)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  actorFilter === opt.value
                    ? 'bg-[#0B4F3F] text-white'
                    : 'bg-[#F3EFE6] text-[#2C3A35] hover:bg-[#EAE3D2]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Attribute Toggles */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-mono text-[#5A6B65] mr-1">
              {t('Attributes:', 'Atribut:')}
            </span>
            <button
              type="button"
              onClick={() => setOnlyWithThreshold(!onlyWithThreshold)}
              className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                onlyWithThreshold
                  ? 'bg-[#92400E] text-white border-[#92400E]'
                  : 'bg-[#FFFDF9] text-[#2C3A35] border-[#DFD7C4] hover:bg-[#F3EFE6]'
              }`}
            >
              {t(
                'Has Monetary / Time Threshold (11)',
                'Memiliki Ambang Batas Nominal / Waktu (11)'
              )}
            </button>

            <button
              type="button"
              onClick={() => setOnlyWithIN(!onlyWithIN)}
              className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                onlyWithIN
                  ? 'bg-[#0B4F3F] text-white border-[#0B4F3F]'
                  : 'bg-[#FFFDF9] text-[#2C3A35] border-[#DFD7C4] hover:bg-[#F3EFE6]'
              }`}
            >
              {t('Has Interpretive Note * (29)', 'Memiliki Catatan Interpretatif * (29)')}
            </button>

            <button
              type="button"
              onClick={() => setOnlyWithDiagram(!onlyWithDiagram)}
              className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                onlyWithDiagram
                  ? 'bg-[#11221D] text-white border-[#11221D]'
                  : 'bg-[#FFFDF9] text-[#2C3A35] border-[#DFD7C4] hover:bg-[#F3EFE6]'
              }`}
            >
              {t('Has Interactive Simulation Lab ◆ (12)', 'Memiliki Simulasi Interaktif ◆ (12)')}
            </button>

            <button
              type="button"
              onClick={() => setOnlyBookmarked(!onlyBookmarked)}
              className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer flex items-center gap-1 ${
                onlyBookmarked
                  ? 'bg-amber-700 text-white border-amber-700'
                  : 'bg-[#FFFDF9] text-[#2C3A35] border-[#DFD7C4] hover:bg-[#F3EFE6]'
              }`}
            >
              <Bookmark className="w-3 h-3" />
              <span>
                {t('Bookmarked', 'Tersimpan')} ({progress.bookmarkedRecs.length})
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Table / List */}
      {filteredRecs.length === 0 ? (
        <div className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-12 text-center space-y-3">
          <p className="text-base font-semibold text-[#141E1B]">
            {t(
              'No Recommendations match your active filters.',
              'Tidak ada Rekomendasi yang sesuai dengan filter pencarian Anda.'
            )}
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#11221D] text-[#FAF8F5] hover:bg-[#1B352D] transition-colors cursor-pointer"
          >
            {t('Reset All Filters', 'Atur Ulang Semua Filter')}
          </button>
        </div>
      ) : (
        <div className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl divide-y divide-[#EDE6D6] overflow-hidden shadow-2xs">
          {filteredRecs.map((rec) => {
            const sec = sections.find((s) => s.id === rec.section)!;
            const isPassed = progress.quizPassedRecs.includes(rec.id);

            return (
              <div
                key={rec.id}
                onClick={() => onSelectRec(rec.id)}
                className="p-5 hover:bg-[#F3EFE6]/50 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer"
              >
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#5A6B65]">
                    <span
                      className="font-bold tabular-nums"
                      style={{ color: sec.color }}
                    >
                      R.{String(rec.id).padStart(2, '0')}
                      {rec.interpretiveNote ? '*' : ''}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {t('Section', 'Bagian')} {sec.id} ({sec.shortTitle})
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
                    {rec.diagram && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#0B4F3F] font-semibold">
                          ◆ {t('Interactive Lab', 'Simulasi Interaktif')}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#141E1B] font-display">
                    {t('Recommendation', 'Rekomendasi')} {rec.id}: {rec.title}
                  </h3>

                  <p className="text-xs text-[#3F4E49] leading-relaxed">
                    {rec.essence}
                  </p>

                  {deepStudyData[rec.id] && (
                    <div className="text-xs text-[#23312D] pt-0.5">
                      <span className="font-mono font-semibold text-[#92400E]">
                        {t('Global Case Study:', 'Studi Kasus Global:')}
                      </span>{' '}
                      {deepStudyData[rec.id].caseStudy.title} (
                      {deepStudyData[rec.id].caseStudy.jurisdictionAndYear})
                    </div>
                  )}

                  {rec.thresholds.length > 0 && (
                    <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-amber-900">
                      {rec.thresholds.map((th, i) => (
                        <span key={i}>
                          {t('Threshold:', 'Ambang Batas:')}{' '}
                          <strong>{th.value}</strong> ({th.context})
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {isPassed && (
                    <span className="text-xs font-mono text-emerald-800 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{t('Verified', 'Lulus')}</span>
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#11221D] text-[#FAF8F5]">
                    <span>{t('Open Slide', 'Buka Slide')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
