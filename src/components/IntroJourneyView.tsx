import React, { useState, useEffect } from 'react';
import { UserProgress } from '../types/fatf';
import { useLanguage } from '../context/LanguageContext';
import { QuizPanel } from './QuizPanel';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
  Lightbulb,
  BookOpen,
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface IntroJourneyViewProps {
  activeIntroId: string;
  onSelectIntro: (id: string) => void;
  onStartRecommendations: () => void;
  progress: UserProgress;
  onMarkIntroVisited: (id: string) => void;
  onAnswerQuiz: (quizKey: string, optionIdx: number, isCorrect: boolean) => void;
  onResetQuiz: (quizKey: string) => void;
}

export const IntroJourneyView: React.FC<IntroJourneyViewProps> = ({
  activeIntroId,
  onSelectIntro,
  onStartRecommendations,
  progress,
  onMarkIntroVisited,
  onAnswerQuiz,
  onResetQuiz
}) => {
  const { t, introSlides, introBeginnerModules } = useLanguage();
  const currentIndex = Math.max(
    0,
    introSlides.findIndex((s) => s.id === activeIntroId)
  );
  const slide = introSlides[currentIndex];
  const beginnerModule = introBeginnerModules[slide.id];

  useEffect(() => {
    onMarkIntroVisited(slide.id);
  }, [slide.id]);

  // Interactive states for S0, S1, S2, S3
  const [activeTriad, setActiveTriad] = useState<'ML' | 'TF' | 'PF'>('ML');
  const [activePillar, setActivePillar] = useState<'TC' | 'EFF' | 'FSRB'>('TC');
  const [activeEra, setActiveEra] = useState<number>(5);
  const [activeLayer, setActiveLayer] = useState<'REC' | 'IN' | 'GLOSS' | 'LAW'>('REC');

  const eras = [
    {
      year: '1989–1990',
      title: t(
        'G7 Paris Summit & Original 40 Recommendations',
        'KTT G7 Paris & 40 Rekomendasi Awal'
      ),
      body: t(
        'FATF established by the G7 Summit in Paris (July 1989). In April 1990, the original 40 Recommendations were issued to combat the misuse of financial systems by persons laundering drug money.',
        'FATF didirikan oleh KTT G7 di Paris (Juli 1989). Pada April 1990, 40 Rekomendasi pertama diterbitkan untuk memerangi penyalahgunaan sistem keuangan oleh pencuci uang hasil narkotika.'
      )
    },
    {
      year: '1996',
      title: t(
        'First Major Revision: Beyond Narcotics',
        'Revisi Besar Pertama: Melampaui Narkotika'
      ),
      body: t(
        'Recommendations revised for the first time to reflect evolving money laundering typologies and to broaden predicate offences beyond drug trafficking.',
        'Rekomendasi direvisi untuk pertama kalinya guna merespons perkembangan modus pencucian uang dan memperluas tindak pidana asal melampaui kejahatan narkotika.'
      )
    },
    {
      year: '2001–2004',
      title: t(
        'Eight (Later Nine) Special Recommendations on Terrorist Financing',
        'Delapan (Lalu Sembilan) Rekomendasi Khusus Pendanaan Terorisme'
      ),
      body: t(
        'Following September 2001, FATF expanded its mandate to incorporate terrorist financing, issuing the 8 Special Recommendations (Oct 2001) and adding the 9th on Cash Couriers (Oct 2004), alongside the 2003 comprehensive revision.',
        'Pasca September 2001, FATF memperluas mandatnya mencakup Pendanaan Terorisme dengan menerbitkan 8 Rekomendasi Khusus (Okt 2001) dan menambahkan SR.IX tentang Kurir Uang Tunai (Okt 2004), beserta revisi menyeluruh tahun 2003.'
      )
    },
    {
      year: 'Feb 2012',
      title: t(
        'The Unified 40 Recommendations & RBA Foundation',
        'Penyatuan 40 Rekomendasi & Fondasi Pendekatan Berbasis Risiko (RBA)'
      ),
      body: t(
        'Merged the 40 Recommendations + 9 Special Recommendations into today’s unified 40 Recommendations (Sections A–G), placing the Risk-Based Approach (R.1) first and introducing Targeted Financial Sanctions for WMD Proliferation (R.7).',
        'Menggabungkan 40 Rekomendasi + 9 Rekomendasi Khusus menjadi 40 Rekomendasi terpadu saat ini (Bagian A–G), menempatkan Pendekatan Berbasis Risiko (R.1) di urutan pertama, serta menambahkan Sanksi Keuangan Terarah Proliferasi Senjata Pemusnah Massal (R.7).'
      )
    },
    {
      year: '2019–2023',
      title: t(
        'Virtual Assets (R.15), Beneficial Ownership (R.24/25) & Asset Recovery (R.4/38)',
        'Aset Virtual (R.15), Pemilik Manfaat (R.24/25) & Pemulihan Aset (R.4/38)'
      ),
      body: t(
        'Binding VASP regulation & USD/EUR 1,000 travel rule (2019); multi-pronged BO registries & bearer share ban (R.24 in 2022, R.25 in 2023); non-conviction-based confiscation & NPO protection (Nov 2023).',
        'Pengaturan mengikat VASP & Travel Rule USD/EUR 1.000 (2019); transparansi BO multi-jalur & larangan saham atas unjuk (R.24 tahun 2022, R.25 tahun 2023); perampasan aset tanpa pemidanaan & pelindungan NPO berbasis risiko (Nov 2023).'
      )
    },
    {
      year: '2025–June 2026',
      title: t(
        'Payment Transparency (R.16, June 2025) & Humanitarian Exemptions (INR.6, June 2026)',
        'Transparansi Pembayaran (R.16, Juni 2025) & Pengecualian Kemanusiaan (INR.6, Juni 2026)'
      ),
      body: t(
        'R.16 modernized for structured ISO 20022 data and Beneficiary FI confirmation of payee / misdirected payment detection (June 2025); INR.6 updated with UNSC humanitarian exemptions under Resolutions 2664, 2761, and 2615 (June 2026).',
        'R.16 dimodernisasi untuk struktur data ISO 20022 dan verifikasi keselarasan nama penerima (Juni 2025); INR.6 diperbarui dengan pengecualian bantuan kemanusiaan DK PBB sesuai Resolusi 2664, 2761, dan 2615 (Juni 2026).'
      )
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Intro Step Selector Bar */}
      <div className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2 text-xs font-mono text-[#0B4F3F] font-semibold">
          <Compass className="w-4 h-4 text-[#0B4F3F]" />
          <span>
            {t('FOUNDATION BRIEFING (S0–S3)', 'MODUL PENGANTAR DASAR (S0–S3)')}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1 max-w-2xl">
          {introSlides.map((s) => {
            const isCurrent = s.id === slide.id;
            const isVisited = progress.visitedIntro.includes(s.id);
            const isQuizDone = progress.quizPassedIntro.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onSelectIntro(s.id)}
                className={`px-3 py-2 rounded-lg text-left border transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#11221D] text-[#FAF8F5] border-[#11221D]'
                    : 'bg-[#F3EFE6]/70 text-[#2C3A35] border-[#DFD7C4] hover:bg-[#EAE3D2]'
                }`}
              >
                <div className="truncate">
                  <div className="text-[10px] font-mono opacity-75">
                    {s.id} · {t('Step', 'Tahap')} {s.stepNumber}
                  </div>
                  <div className="text-xs font-semibold truncate">{s.title}</div>
                </div>
                {isQuizDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                ) : isVisited ? (
                  <span className="w-2 h-2 rounded-full bg-[#0B4F3F] shrink-0" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Slide Card */}
      <article className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
        <header className="border-b border-[#E5DEC9] pb-5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0B4F3F] font-semibold">
            <span>
              {t('Intro Slide', 'Slide Pengantar')} {slide.id}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {t(
                `Foundation Module ${slide.stepNumber} of 04`,
                `Modul Fondasi ${slide.stepNumber} dari 04`
              )}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-[#92400E]">
              {t('June 2026 Edition', 'Edisi Juni 2026')}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#141E1B] font-display">
            {slide.title}
          </h1>
          <p className="text-sm text-[#3F4E49]">{slide.subtitle}</p>
        </header>

        {/* Essence Box */}
        <div className="p-5 rounded-xl bg-[#0B4F3F]/6 border border-[#0B4F3F]/25 space-y-1">
          <div className="text-xs font-mono uppercase tracking-wider text-[#0B4F3F] font-semibold">
            {t('In Plain Words · Core Essence', 'Intisari Bahasa Lugas · Esensi Utama')}
          </div>
          <p className="text-sm sm:text-base text-[#141E1B] leading-relaxed font-medium">
            {slide.essence}
          </p>
        </div>

        {/* 3 Key Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {slide.keyPoints.map((kp, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#F3EFE6]/70 border border-[#DFD7C4] space-y-1.5"
            >
              <div className="text-xs font-mono text-[#0B4F3F] font-semibold">
                0{idx + 1}. {t('CORE PRINCIPLE', 'PRINSIP UTAMA')}
              </div>
              <h3 className="text-sm font-semibold text-[#141E1B]">
                {kp.heading}
              </h3>
              <p className="text-xs text-[#23312D] leading-relaxed">
                {kp.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Beginner-Friendly Layman Walkthrough for Intro Modules */}
        {beginnerModule && (
          <div className="rounded-xl border border-[#D5CCB4] bg-[#F9F6F0] overflow-hidden space-y-5 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5DEC9] pb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0F3E2E] text-[#FAF8F5] flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#9A7228] font-bold">
                    {t(
                      'PRACTICAL ILLUSTRATION & TERMINOLOGY',
                      'GAMBARAN PRAKTIS & ISTILAH KUNCI'
                    )}
                  </div>
                  <h3 className="text-base font-bold text-[#141E1B] font-display">
                    {beginnerModule.analogyTitle}
                  </h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#0F3E2E]/10 text-[#0F3E2E] text-[11px] font-mono font-semibold">
                {t('Contextual Overview', 'Panduan Pengantar')}
              </span>
            </div>

            {/* Everyday Analogy */}
            <div className="p-4 rounded-lg bg-[#FFFDF9] border-l-4 border-l-[#0F3E2E] border border-[#E5DEC9]">
              <p className="text-xs sm:text-sm text-[#141E1B] leading-relaxed">
                {beginnerModule.analogyBody}
              </p>
            </div>

            {/* Step-by-step Everyday Example */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0F3E2E] font-bold">
                <BookOpen className="w-4 h-4" />
                <span>{beginnerModule.everydayExampleTitle}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {beginnerModule.everydaySteps.map((step, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-[#FFFDF9] border border-[#E5DEC9] space-y-1.5"
                  >
                    <div className="text-xs font-bold text-[#0F3E2E]">
                      {step.stepTitle}
                    </div>
                    <p className="text-xs text-[#23312D] leading-relaxed">
                      {step.stepDetail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Jargon Buster & Why Should Everyday Citizens Care */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-1">
              <div className="lg:col-span-7 p-4 rounded-lg bg-[#FFFDF9] border border-[#E5DEC9] space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#0F3E2E] font-bold">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>
                    {t(
                      'Key Terminology',
                      'Penjelasan Istilah Penting'
                    )}
                  </span>
                </div>
                <div className="space-y-2">
                  {beginnerModule.jargonBuster.map((jb, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-[#F9F6F0] border border-[#E5DEC9]"
                    >
                      <div className="text-xs font-mono font-bold text-[#0F3E2E]">
                        {jb.term}
                      </div>
                      <div className="text-xs text-[#3F4E49] mt-0.5 leading-relaxed">
                        {jb.simpleMeaning}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-4 rounded-lg bg-[#0F3E2E]/5 border border-[#0F3E2E]/20 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#9A7228] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {t(
                      'Why Does This Matter to Everyday Citizens?',
                      'Mengapa Orang Awam Perlu Peduli?'
                    )}
                  </span>
                </div>
                <ul className="space-y-2">
                  {beginnerModule.whyShouldICare.map((reason, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-[#141E1B] leading-relaxed flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F3E2E] shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Sandbox per Intro Slide */}
        {slide.interactiveType === 'triad-cards' && (
          <div className="p-6 rounded-xl bg-[#10211C] text-[#FAF8F5] space-y-4 border border-[#253D35]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#253D35] pb-3">
              <div>
                <div className="text-xs font-mono text-[#E2B86B]">
                  {t(
                    'INTERACTIVE COMPARISON LAB · S0',
                    'SIMULASI PERBANDINGAN INTERAKTIF · S0'
                  )}
                </div>
                <h4 className="text-base font-semibold font-display">
                  {t(
                    'Compare the Three Core Mandates: ML vs. TF vs. PF',
                    'Bandingkan Tiga Mandat Utama: TPPU (ML) vs. TPPT (TF) vs. Proliferasi (PF)'
                  )}
                </h4>
              </div>
              <div className="flex items-center gap-1 bg-[#193029] p-1 rounded-lg">
                {(['ML', 'TF', 'PF'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTriad(tab)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                      activeTriad === tab
                        ? 'bg-[#0B4F3F] text-white border border-[#E2B86B]/40'
                        : 'text-[#C8D6D0] hover:text-white'
                    }`}
                  >
                    {tab === 'ML' && t('Money Laundering (ML)', 'Pencucian Uang (ML)')}
                    {tab === 'TF' && t('Terrorist Financing (TF)', 'Pendanaan Terorisme (TF)')}
                    {tab === 'PF' && t('Proliferation Financing (PF)', 'Pendanaan Proliferasi (PF)')}
                  </button>
                ))}
              </div>
            </div>

            {activeTriad === 'ML' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-lg bg-[#182E27] border border-[#253D35] space-y-1">
                  <div className="font-mono text-[#E2B86B]">
                    {t('SOURCE OF FUNDS', 'ASAL-USUL DANA')}
                  </div>
                  <div className="font-semibold text-white">
                    {t('Always Illicit Proceeds', 'Selalu dari Hasil Kejahatan')}
                  </div>
                  <p className="text-[#D5E0DC]">
                    {t(
                      'Derived from a predicate crime across the 21 Designated Categories of Offences (R.3).',
                      'Berasal dari tindak pidana asal di dalam 21 Kategori Tindak Pidana Asal wajib (R.3).'
                    )}
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#182E27] border border-[#253D35] space-y-1">
                  <div className="font-mono text-[#E2B86B]">
                    {t('PRIMARY MOTIVE', 'TUJUAN UTAMA PELAKU')}
                  </div>
                  <div className="font-semibold text-white">
                    {t('Conceal Illegal Origin', 'Menyamarkan Asal-Usul Ilegal')}
                  </div>
                  <p className="text-[#D5E0DC]">
                    {t(
                      'Disguise ownership/audit trail so criminals can enjoy illicit profits safely (Placement → Layering → Integration).',
                      'Menyembunyikan kepemilikan dan jejak audit agar pelaku dapat menikmati hasil kejahatan secara aman (Placement → Layering → Integration).'
                    )}
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#182E27] border border-[#253D35] space-y-1">
                  <div className="font-mono text-[#E2B86B]">
                    {t('ANCHOR RECOMMENDATIONS', 'REKOMENDASI KUNCI')}
                  </div>
                  <div className="font-semibold text-white">
                    R.3, R.4, R.10, R.20, R.24
                  </div>
                  <p className="text-[#D5E0DC]">
                    {t(
                      'Criminalisation (R.3), confiscation (R.4), preventive CDD/STRs (R.10–23), and BO transparency (R.24–25).',
                      'Kriminalisasi (R.3), perampasan aset (R.4), pencegahan CDD/STR (R.10–23), dan transparansi Pemilik Manfaat (R.24–25).'
                    )}
                  </p>
                </div>
              </div>
            )}

            {activeTriad === 'TF' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-lg bg-[#182E27] border border-[#253D35] space-y-1">
                  <div className="font-mono text-rose-300">
                    {t('SOURCE OF FUNDS', 'ASAL-USUL DANA')}
                  </div>
                  <div className="font-semibold text-white">
                    {t('Legitimate OR Illegitimate', 'Sumber Sah (Legal) MAUPUN Ilegal')}
                  </div>
                  <p className="text-[#D5E0DC]">
                    {t(
                      'Can originate from clean donations, salaries, or businesses as well as criminal activity (R.5).',
                      'Dapat berasal dari donasi, gaji, atau usaha yang sah maupun dari aktivitas kriminal (R.5).'
                    )}
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#182E27] border border-[#253D35] space-y-1">
                  <div className="font-mono text-rose-300">
                    {t('PRIMARY MOTIVE', 'TUJUAN UTAMA PELAKU')}
                  </div>
                  <div className="font-semibold text-white">
                    {t(
                      'Fund Future Terrorist Acts/Groups',
                      'Mendukung Aksi / Organisasi / Individu Teroris'
                    )}
                  </div>
                  <p className="text-[#D5E0DC]">
                    {t(
                      'Supports terrorist acts, terrorist organisations, or individual terrorists (including FTF travel) — no link to a specific attack required.',
                      'Mendukung aksi teror, organisasi teroris, atau teroris individu (termasuk perjalanan FTF) — tanpa mensyaratkan kaitan dengan satu serangan spesifik.'
                    )}
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#182E27] border border-[#253D35] space-y-1">
                  <div className="font-mono text-rose-300">
                    {t('ANCHOR RECOMMENDATIONS', 'REKOMENDASI KUNCI')}
                  </div>
                  <div className="font-semibold text-white">
                    R.5, R.6, R.8 (SR.II, III, VIII)
                  </div>
                  <p className="text-[#D5E0DC]">
                    {t(
                      'TF criminalisation (R.5), UNSCR 1267/1373 asset freezes without delay + June 2026 humanitarian exemption (R.6), NPO protection (R.8).',
                      'Kriminalisasi TPPT (R.5), pembekuan aset UNSCR 1267/1373 tanpa penundaan + pengecualian kemanusiaan Juni 2026 (R.6), pelindungan NPO (R.8).'
                    )}
                  </p>
                </div>
              </div>
            )}

            {activeTriad === 'PF' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-lg bg-[#182E27] border border-[#253D35] space-y-1">
                  <div className="font-mono text-amber-300">
                    {t('FATF STRICT DEFINITION', 'DEFINISI KETAT FATF')}
                  </div>
                  <div className="font-semibold text-white">
                    {t('Breach/Evasion of R.7 TFS', 'Pelanggaran / Penghindaran Sanksi R.7')}
                  </div>
                  <p className="text-[#D5E0DC]">
                    {t(
                      'In R.1, PF risk refers strictly and only to potential breach, non-implementation, or evasion of R.7 Targeted Financial Sanctions.',
                      'Dalam R.1, risiko pendanaan proliferasi merujuk secara ketat dan terbatas pada potensi pelanggaran atau penghindaran Sanksi Keuangan Terarah R.7.'
                    )}
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#182E27] border border-[#253D35] space-y-1">
                  <div className="font-mono text-amber-300">
                    {t('PRIMARY MOTIVE', 'TUJUAN UTAMA PELAKU')}
                  </div>
                  <div className="font-semibold text-white">
                    {t('WMD Programmes (DPRK / Iran)', 'Program Senjata Pemusnah Massal')}
                  </div>
                  <p className="text-[#D5E0DC]">
                    {t(
                      'Evading UN Security Council Chapter VII sanctions (Resolutions 1718 and 1737/2231 lines) via front companies and trade networks.',
                      'Menghindari sanksi Bab VII Dewan Keamanan PBB (Resolusi 1718 dan 1737/2231) melalui perusahaan cangkang dan jaringan perdagangan.'
                    )}
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#182E27] border border-[#253D35] space-y-1">
                  <div className="font-mono text-amber-300">
                    {t('ANCHOR RECOMMENDATIONS', 'REKOMENDASI KUNCI')}
                  </div>
                  <div className="font-semibold text-white">
                    R.1, R.2, R.7, R.15, R.16
                  </div>
                  <p className="text-[#D5E0DC]">
                    {t(
                      'National/FI PF risk assessment (R.1), domestic coordination (R.2), and freezing without delay (R.7).',
                      'Penilaian risiko proliferasi nasional & PJK (R.1), koordinasi domestik (R.2), dan pembekuan tanpa penundaan (R.7).'
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {slide.interactiveType === 'global-network' && (
          <div className="p-6 rounded-xl bg-[#10211C] text-[#FAF8F5] space-y-4 border border-[#253D35]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#253D35] pb-3">
              <div>
                <div className="text-xs font-mono text-[#E2B86B]">
                  {t(
                    'INTERACTIVE EVALUATION MATRIX · S1',
                    'MATRIKS EVALUASI INTERAKTIF · S1'
                  )}
                </div>
                <h4 className="text-base font-semibold font-display">
                  {t(
                    'How Mutual Evaluations Grade 200+ Countries',
                    'Bagaimana Evaluasi Bersama (MER) Menilai Lebih dari 200 Yurisdiksi'
                  )}
                </h4>
              </div>
              <div className="flex flex-wrap items-center gap-1 bg-[#193029] p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setActivePillar('TC')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer ${
                    activePillar === 'TC'
                      ? 'bg-[#0B4F3F] text-white'
                      : 'text-[#C8D6D0]'
                  }`}
                >
                  {t(
                    'Pillar 1: Technical Compliance (40 Recs)',
                    'Pilar 1: Kepatuhan Teknis (40 Rek)'
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActivePillar('EFF')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer ${
                    activePillar === 'EFF'
                      ? 'bg-[#0B4F3F] text-white'
                      : 'text-[#C8D6D0]'
                  }`}
                >
                  {t(
                    'Pillar 2: Effectiveness (11 Outcomes)',
                    'Pilar 2: Efektivitas (11 IO)'
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActivePillar('FSRB')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer ${
                    activePillar === 'FSRB'
                      ? 'bg-[#0B4F3F] text-white'
                      : 'text-[#C8D6D0]'
                  }`}
                >
                  {t(
                    'Global Network (FATF + 9 FSRBs)',
                    'Jaringan Global (FATF + 9 FSRB)'
                  )}
                </button>
              </div>
            </div>

            {activePillar === 'TC' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#182E27] border border-emerald-500/30">
                  <div className="font-mono text-emerald-400 font-bold">
                    C · Compliant
                  </div>
                  <p className="text-[#D5E0DC] mt-1">
                    {t(
                      'There are no shortcomings in respect of the Recommendation.',
                      'Tidak terdapat kekurangan apa pun terhadap pemenuhan Rekomendasi.'
                    )}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#182E27] border border-teal-500/30">
                  <div className="font-mono text-teal-300 font-bold">
                    LC · Largely Compliant
                  </div>
                  <p className="text-[#D5E0DC] mt-1">
                    {t(
                      'There are only minor shortcomings in law or enforceable means.',
                      'Hanya terdapat kekurangan minor dalam kerangka hukum/peraturan.'
                    )}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#182E27] border border-amber-500/30">
                  <div className="font-mono text-amber-300 font-bold">
                    PC · Partially Compliant
                  </div>
                  <p className="text-[#D5E0DC] mt-1">
                    {t(
                      'There are moderate shortcomings in the legal/regulatory framework.',
                      'Terdapat kekurangan tingkat sedang dalam kerangka hukum/peraturan.'
                    )}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#182E27] border border-rose-500/30">
                  <div className="font-mono text-rose-400 font-bold">
                    NC · Non-Compliant
                  </div>
                  <p className="text-[#D5E0DC] mt-1">
                    {t(
                      'There are major shortcomings in implementing the Recommendation.',
                      'Terdapat kekurangan mendasar/besar dalam implementasi Rekomendasi.'
                    )}
                  </p>
                </div>
              </div>
            )}

            {activePillar === 'EFF' && (
              <div className="space-y-2 text-xs text-[#E2E8E5]">
                <p>
                  <strong>
                    {t(
                      'Effectiveness (11 Immediate Outcomes — IO.1 to IO.11): ',
                      'Efektivitas (11 Immediate Outcomes — IO.1 s.d. IO.11): '
                    )}
                  </strong>
                  {t(
                    'Having laws on paper is not enough. Assessors verify whether the country actually achieves real-world outcomes (e.g., IO.6 FIU intelligence use, IO.7 ML investigations/prosecutions, IO.8 confiscation of criminal proceeds, IO.5 BO transparency), rated on a 4-tier scale: High (HE), Substantial (SE), Moderate (ME), or Low (LE).',
                    'Memiliki Undang-Undang di atas kertas saja tidak cukup. Tim asesor memverifikasi apakah negara benar-benar mencapai hasil nyata di lapangan (misalnya IO.6 pemanfaatan intelijen FIU, IO.7 penyidikan & vonis TPPU, IO.8 perampasan aset kejahatan, IO.5 transparansi BO), yang dinilai dalam 4 tingkat: High (HE), Substantial (SE), Moderate (ME), atau Low (LE).'
                  )}
                </p>
              </div>
            )}

            {activePillar === 'FSRB' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-[#E2E8E5]">
                <div className="p-2.5 rounded bg-[#182E27]">
                  • <strong>APG:</strong> Asia/Pacific Group on Money Laundering
                </div>
                <div className="p-2.5 rounded bg-[#182E27]">
                  • <strong>MONEYVAL:</strong> Council of Europe Committee of Experts
                </div>
                <div className="p-2.5 rounded bg-[#182E27]">
                  • <strong>GAFILAT & CFATF:</strong> Latin America & Caribbean Bodies
                </div>
                <div className="p-2.5 rounded bg-[#182E27]">
                  • <strong>MENAFATF:</strong> Middle East & North Africa FATF
                </div>
                <div className="p-2.5 rounded bg-[#182E27]">
                  • <strong>ESAAMLG, GIABA & GABAC:</strong> Eastern/Southern, West & Central Africa
                </div>
                <div className="p-2.5 rounded bg-[#182E27]">
                  • <strong>EAG:</strong> Eurasian Group on Combating ML/TF
                </div>
              </div>
            )}
          </div>
        )}

        {slide.interactiveType === 'history-timeline' && (
          <div className="p-6 rounded-xl bg-[#10211C] text-[#FAF8F5] space-y-4 border border-[#253D35]">
            <div className="text-xs font-mono text-[#E2B86B]">
              {t(
                'INTERACTIVE TIMELINE · S2 (CLICK ANY MILESTONE)',
                'LINIMASA SEJARAH INTERAKTIF · S2 (KLIK TONGAK SEJARAH)'
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {eras.map((item, idx) => (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveEra(idx)}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                    activeEra === idx
                      ? 'bg-[#0B4F3F] text-white border-[#E2B86B]'
                      : 'bg-[#182E27] text-[#C8D6D0] border-[#253D35] hover:bg-[#1E3930]'
                  }`}
                >
                  <div className="text-xs font-mono font-bold">{item.year}</div>
                  <div className="text-[11px] mt-1 line-clamp-2 opacity-90">
                    {item.title}
                  </div>
                </button>
              ))}
            </div>
            <div className="p-4 rounded-lg bg-[#182E27] border border-[#253D35] space-y-1">
              <div className="text-xs font-mono text-[#E2B86B]">
                {eras[activeEra].year}
              </div>
              <div className="text-sm font-semibold text-white">
                {eras[activeEra].title}
              </div>
              <p className="text-xs text-[#D5E0DC] leading-relaxed">
                {eras[activeEra].body}
              </p>
            </div>
          </div>
        )}

        {slide.interactiveType === 'architecture-layers' && (
          <div className="p-6 rounded-xl bg-[#10211C] text-[#FAF8F5] space-y-4 border border-[#253D35]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#253D35] pb-3">
              <div>
                <div className="text-xs font-mono text-[#E2B86B]">
                  {t(
                    'INTERACTIVE LEGAL ARCHITECTURE · S3',
                    'ARSITEKTUR HUKUM INTERAKTIF · S3'
                  )}
                </div>
                <h4 className="text-base font-semibold font-display">
                  {t(
                    'Inspect the Four Legal Pillars of the FATF Rulebook',
                    'Telusuri Empat Pilar Hukum Buku Standar FATF'
                  )}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1 bg-[#193029] p-1 rounded-lg">
                {(
                  [
                    ['REC', t('1. 40 Recommendations', '1. 40 Rekomendasi')],
                    ['IN', t('2. 29 Interpretive Notes', '2. 29 Catatan Interpretatif')],
                    ['GLOSS', t('3. General Glossary', '3. Glosarium Umum')],
                    ['LAW', t('4. Law vs. Enforceable Means', '4. UU vs. Peraturan Mengikat')]
                  ] as const
                ).map(([k, lbl]) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setActiveLayer(k)}
                    className={`px-2.5 py-1.5 rounded text-xs font-medium cursor-pointer ${
                      activeLayer === k
                        ? 'bg-[#0B4F3F] text-white'
                        : 'text-[#C8D6D0]'
                    }`}
                  >
                    {lbl}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#182E27] border border-[#253D35] text-xs text-[#E2E8E5] leading-relaxed">
              {activeLayer === 'REC' && (
                <div>
                  <strong className="text-white">
                    {t(
                      'Layer 1 — The 40 Recommendations (Sections A–G): ',
                      'Lapisan 1 — 40 Rekomendasi (Bagian A–G): '
                    )}
                  </strong>
                  {t(
                    'Set out the core principles and obligations that every country must implement. Remember: throughout the Recommendations, the word "should" has the exact same mandatory meaning as "must".',
                    'Menetapkan prinsip-prinsip dan kewajiban pokok yang harus diterapkan oleh setiap negara. Ingat: di seluruh teks Rekomendasi, kata "should" memiliki arti wajib yang sama persis dengan "must".'
                  )}
                </div>
              )}
              {activeLayer === 'IN' && (
                <div>
                  <strong className="text-white">
                    {t(
                      'Layer 2 — The 29 Interpretive Notes (INR): ',
                      'Lapisan 2 — 29 Catatan Interpretatif (INR): '
                    )}
                  </strong>
                  {t(
                    'Clarify and detail the application of 29 specific Recommendations (e.g., INR.1, INR.6, INR.10, INR.15, INR.16, INR.24). They are equally binding as part of the Standard. Note: Examples given inside Interpretive Notes are illustrative guidance only, not mandatory rules.',
                    'Memperjelas dan merinci penerapan teknis dari 29 Rekomendasi (mis. INR.1, INR.6, INR.10, INR.15, INR.16, INR.24). Memiliki kekuatan mengikat yang sama sebagai bagian dari Standar. Catatan: Contoh di dalam INR bersifat ilustrasi panduan.'
                  )}
                </div>
              )}
              {activeLayer === 'GLOSS' && (
                <div>
                  <strong className="text-white">
                    {t(
                      'Layer 3 — The General Glossary: ',
                      'Lapisan 3 — Glosarium Umum: '
                    )}
                  </strong>
                  {t(
                    'Defines the legal scope of terms used in the Recommendations (e.g., what counts as a "Financial Institution", "DNFBP", "Beneficial Owner", "Without Delay", or "Designated Categories of Offences"). If a country’s domestic definition omits a Glossary element, its compliance rating suffers!',
                    'Mendefinisikan cakupan hukum istilah yang digunakan dalam Rekomendasi (mis. cakupan "Penyedia Jasa Keuangan", "DNFBP", "Pemilik Manfaat", "Tanpa Penundaan", atau "21 Kategori Tindak Pidana Asal"). Jika definisi hukum domestik mengabaikan unsur Glosarium, nilai kepatuhan negara akan turun!'
                  )}
                </div>
              )}
              {activeLayer === 'LAW' && (
                <div>
                  <strong className="text-white">
                    {t(
                      'Layer 4 — Law vs. Enforceable Means: ',
                      'Lapisan 4 — Undang-Undang (Law) vs. Sarana yang Dapat Dipaksakan (Enforceable Means): '
                    )}
                  </strong>
                  {t(
                    'Basic obligations (CDD in R.10, Record Keeping in R.11, STR Reporting in R.20) must be set out in Law (parliamentary act or judicial precedent). More detailed operational elements may be set out in either Law or Enforceable Means (binding supervisory regulations/guidelines backed by R.35 sanctions for non-compliance).',
                    'Kewajiban pokok (CDD pada R.10, Penatausahaan Dokumen pada R.11, Pelaporan STR pada R.20) WAJIB diatur dalam Undang-Undang (Law). Elemen operasional yang lebih rinci dapat diatur dalam Undang-Undang maupun Peraturan Mengikat (Enforceable Means seperti POJK/PBI yang disertai sanksi R.35).'
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quiz Panel */}
        <QuizPanel
          quizKey={`intro-${slide.id}`}
          label={`${t('Intro', 'Pengantar')} ${slide.id}: ${slide.title}`}
          quiz={slide.quiz}
          selectedOption={progress.quizAnswers[`intro-${slide.id}`]}
          onSelectAnswer={onAnswerQuiz}
          onResetAnswer={onResetQuiz}
        />

        {/* Navigation Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E5DEC9]">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => onSelectIntro(introSlides[currentIndex - 1].id)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-[#E5DEC9] bg-[#F3EFE6]/70 text-[#141E1B] hover:bg-[#EAE3D2] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {t('Previous Intro Slide', 'Slide Pengantar Sebelumnya')}
            </span>
          </button>

          {currentIndex < introSlides.length - 1 ? (
            <button
              type="button"
              onClick={() => onSelectIntro(introSlides[currentIndex + 1].id)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#11221D] text-[#FAF8F5] hover:bg-[#1B352D] transition-colors cursor-pointer"
            >
              <span>
                {t('Next:', 'Selanjutnya:')} {introSlides[currentIndex + 1].title}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onStartRecommendations}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#0B4F3F] text-white hover:bg-[#083B2F] transition-colors cursor-pointer"
            >
              <span>
                {t(
                  'Proceed to Recommendation 1 (Slide Viewer)',
                  'Lanjut ke Rekomendasi 1 (Slide Viewer)'
                )}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </article>
    </div>
  );
};
