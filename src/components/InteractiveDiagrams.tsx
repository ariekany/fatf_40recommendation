import React, { useState } from 'react';
import { DiagramType } from '../types/fatf';
import { useLanguage } from '../context/LanguageContext';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Scale,
  Building2,
  FileSearch,
  Lock,
  Globe,
  RefreshCw,
  Check,
  X
} from 'lucide-react';

interface InteractiveDiagramProps {
  type: DiagramType;
  sectionColor: string;
}

export const InteractiveDiagram: React.FC<InteractiveDiagramProps> = ({
  type,
  sectionColor
}) => {
  if (!type) return null;

  switch (type) {
    case 'r1-rba':
      return <R1RiskSpectrumSimulator sectionColor={sectionColor} />;
    case 'r3-predicates':
      return <R3PredicatesExplorer />;
    case 'r6-tfs':
      return <R6SanctionsLifecycleWheel />;
    case 'r10-cdd':
      return <R10CddDecisionTree />;
    case 'r16-wire':
      return <R16PaymentTransparencyPipeline />;
    case 'r22-dnfbp':
      return <R22DnfbpSectorSelector />;
    case 'r24-bo':
      return <R24BoCascadeSimulator />;
    case 'r29-fiu':
      return <R29FiuHubWheel />;
    case 'r32-cash':
      return <R32CashCourierSimulator />;
    case 'r36-conventions':
      return <R36ConventionsChecklist />;
    case 'r37-mla':
      return <R37MlaSortingSimulator />;
    case 'r40-coop':
      return <R40CooperationNetworkMap />;
    default:
      return null;
  }
};

/* ============================================================================
   R1: RISK-BASED APPROACH SPECTRUM SIMULATOR
   ============================================================================ */
const R1RiskSpectrumSimulator: React.FC<{ sectionColor: string }> = () => {
  const [riskLevel, setRiskLevel] = useState<number>(3);
  const [hasSuspicion, setHasSuspicion] = useState<boolean>(false);
  const [isPfSanctions, setIsPfSanctions] = useState<boolean>(false);

  const effectiveRegime = isPfSanctions
    ? 'STRICT_TFS'
    : hasSuspicion
    ? 'SUSPICION_OVERRIDE'
    : riskLevel <= 2
    ? 'SIMPLIFIED'
    : riskLevel === 3
    ? 'STANDARD'
    : 'ENHANCED';

  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
      aria-label="Interactive Risk-Based Approach Spectrum Simulator"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-teal-800">
            Interactive Simulation · Recommendation 1
          </div>
          <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
            Risk-Based Approach (RBA) Calibration Lab
          </h4>
        </div>
        <div className="text-xs text-slate-600 font-mono tabular-nums">
          Assessed Risk Score: {riskLevel} / 5
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4 bg-slate-50 p-4 rounded-lg border border-slate-200/80">
          <div>
            <label
              htmlFor="r1-risk-slider"
              className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-2"
            >
              <span>1. Assessed ML/TF Risk Level</span>
              <span className="font-mono tabular-nums text-teal-800">
                {riskLevel === 1 && 'Level 1: Proven Low Risk'}
                {riskLevel === 2 && 'Level 2: Lower Risk'}
                {riskLevel === 3 && 'Level 3: Baseline Standard Risk'}
                {riskLevel === 4 && 'Level 4: Elevated Risk'}
                {riskLevel === 5 && 'Level 5: High Risk (e.g. Foreign PEP)'}
              </span>
            </label>
            <input
              id="r1-risk-slider"
              type="range"
              min={1}
              max={5}
              step={1}
              value={riskLevel}
              onChange={(e) => setRiskLevel(Number(e.target.value))}
              className="w-full accent-teal-700 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
              <span>1 (Low)</span>
              <span>2</span>
              <span>3 (Standard)</span>
              <span>4</span>
              <span>5 (High)</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 space-y-2.5">
            <div className="text-xs font-semibold text-slate-800">
              2. Mandatory Override Conditions
            </div>
            <button
              type="button"
              onClick={() => setHasSuspicion(!hasSuspicion)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium border transition-colors ${
                hasSuspicion
                  ? 'bg-red-50 border-red-300 text-red-900'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>Suspicion of ML/TF Exists</span>
              <span className="font-mono font-semibold">
                {hasSuspicion ? 'ACTIVE (Override)' : 'OFF'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setIsPfSanctions(!isPfSanctions)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium border transition-colors ${
                isPfSanctions
                  ? 'bg-amber-50 border-amber-300 text-amber-900'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>R.7 Proliferation Sanctions Match</span>
              <span className="font-mono font-semibold">
                {isPfSanctions ? 'ACTIVE (Strict Freeze)' : 'OFF'}
              </span>
            </button>
          </div>
        </div>

        {/* Live Output Stage */}
        <div className="lg:col-span-7 space-y-3">
          {effectiveRegime === 'STRICT_TFS' && (
            <div className="p-4 rounded-lg bg-amber-50/80 border border-amber-300 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>Strict Liability Rule: R.7 Targeted Financial Sanctions</span>
              </div>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                Per INR.1, proliferation financing risk assessment <strong>never</strong> excuses or dilutes full implementation of R.7 Targeted Financial Sanctions. Regardless of whether the customer or sector is rated low-risk, designated assets must be <strong>frozen without delay</strong>.
              </p>
            </div>
          )}

          {effectiveRegime === 'SUSPICION_OVERRIDE' && (
            <div className="p-4 rounded-lg bg-red-50/80 border border-red-300 space-y-2">
              <div className="flex items-center gap-2 text-red-900 font-semibold text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Suspicion Override: Simplified Measures Prohibited</span>
              </div>
              <p className="text-xs text-red-900/90 leading-relaxed">
                Even if a customer or product normally sits at Risk Level {riskLevel}, <strong>simplified measures are strictly forbidden whenever there is a suspicion of ML or TF</strong>. File a Suspicious Transaction Report (STR) under R.20 and apply enhanced scrutiny (avoiding tipping-off under R.10/R.21).
              </p>
            </div>
          )}

          {effectiveRegime === 'SIMPLIFIED' && (
            <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Lower Risk Regime: Simplified Measures Permitted (SDD)</span>
              </div>
              <p className="text-xs text-emerald-900/90 leading-relaxed">
                Where lower risk is proven by national and institutional assessment (and zero suspicion exists), simplified measures may be applied:
              </p>
              <ul className="text-xs text-emerald-950 space-y-1 list-disc pl-4">
                <li>Verifying customer & beneficial owner identity after establishment of the business relationship (e.g., above a defined transaction threshold).</li>
                <li>Reducing the frequency of customer identification updates.</li>
                <li>Inferring the purpose and intended nature of the relationship from the type of transaction/account established.</li>
              </ul>
            </div>
          )}

          {effectiveRegime === 'STANDARD' && (
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                <Sliders className="w-4 h-4 shrink-0 text-teal-700" />
                <span>Baseline Risk Regime: Standard CDD & Monitoring</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Apply all four standard R.10 CDD components prior to or during onboarding:
              </p>
              <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4">
                <li>Identify & verify customer via reliable, independent source documents.</li>
                <li>Identify & take reasonable measures to verify Beneficial Owner(s).</li>
                <li>Understand the purpose and intended nature of the business relationship.</li>
                <li>Conduct ongoing due diligence and transaction scrutiny throughout the relationship.</li>
              </ul>
            </div>
          )}

          {effectiveRegime === 'ENHANCED' && (
            <div className="p-4 rounded-lg bg-teal-950 text-white space-y-2">
              <div className="flex items-center gap-2 font-semibold text-sm text-teal-200">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>Higher Risk Regime: Mandatory Enhanced Due Diligence (EDD)</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Higher identified risk requires commensurate enhanced mitigation measures under R.1, R.10, R.12, and R.19:
              </p>
              <ul className="text-xs text-slate-200 space-y-1 list-disc pl-4">
                <li>Obtain senior management approval before establishing or continuing the relationship.</li>
                <li>Verify Source of Wealth (SoW) and Source of Funds (SoF).</li>
                <li>Gather additional independent information on the customer, BO, and reasons for intended/performed transactions.</li>
                <li>Increase the number and timing of controls applied and select transaction patterns that need further examination.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   R3: 21 DESIGNATED CATEGORIES OF PREDICATE OFFENCES EXPLORER
   ============================================================================ */
const R3PredicatesExplorer: React.FC = () => {
  const { designatedOffences, t } = useLanguage();
  const [selectedId, setSelectedId] = useState<number>(1);
  const [approach, setApproach] = useState<'all' | 'threshold' | 'list'>('threshold');
  const current =
    designatedOffences.find((c) => c.id === selectedId) ||
    designatedOffences[0];

  return (
    <div
      className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-xl p-6 space-y-5 shadow-2xs"
      aria-label="21 Designated Categories of Offences Explorer"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EDE6D6] pb-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#1E3A8A] font-semibold">
            {t(
              'Interactive Legal Explorer · Recommendation 3',
              'Penjelajah Hukum Interaktif · Rekomendasi 3'
            )}
          </div>
          <h4 className="text-lg font-semibold text-[#141E1B] mt-0.5 font-display">
            {t(
              'The 21 Mandatory Designated Categories of Predicate Offences',
              '21 Kategori Wajib Tindak Pidana Asal (Predicate Offences)'
            )}
          </h4>
        </div>
        <div className="flex items-center gap-1 bg-[#F3EFE6] p-1 rounded-lg border border-[#E5DEC9]">
          {(['all', 'threshold', 'list'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setApproach(mode)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                approach === mode
                  ? 'bg-[#FFFDF9] text-[#141E1B] shadow-2xs border border-[#DFD7C4]'
                  : 'text-[#5A6B65] hover:text-[#141E1B]'
              }`}
            >
              {mode === 'all' && t('All-Crimes Approach', 'Pendekatan Semua Kejahatan')}
              {mode === 'threshold' &&
                t('Threshold Approach (>1 yr max)', 'Pendekatan Ambang Batas (>1 thn)')}
              {mode === 'list' && t('List Approach', 'Pendekatan Daftar')}
            </button>
          ))}
        </div>
      </div>

      <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-200 text-xs text-slate-800">
        {approach === 'all' && (
          <span>
            <strong>
              {t('All-Crimes Approach:', 'Pendekatan Semua Kejahatan (All-Crimes):')}
            </strong>{' '}
            {t(
              'Every criminal offence under domestic law is automatically a predicate offence for money laundering. Must still ensure all 21 FATF categories below are criminalised in domestic law.',
              'Setiap tindak pidana dalam hukum nasional secara otomatis menjadi tindak pidana asal pencucian uang. Negara tetap wajib memastikan seluruh 21 kategori di bawah ini telah dikriminalisasi.'
            )}
          </span>
        )}
        {approach === 'threshold' && (
          <span>
            <strong>
              {t('Threshold Approach:', 'Pendekatan Ambang Batas Ancaman Pidana:')}
            </strong>{' '}
            {t(
              'Covers all offences punishable by a maximum penalty of more than 1 year imprisonment (or minimum penalty of more than 6 months). Must still include a range of offences in all 21 categories below.',
              'Mencakup seluruh kejahatan yang diancam pidana penjara maksimum lebih dari 1 tahun (atau minimum lebih dari 6 bulan), dan wajib mencakup serangkaian kejahatan di seluruh 21 kategori berikut.'
            )}
          </span>
        )}
        {approach === 'list' && (
          <span>
            <strong>
              {t('List (or Combined) Approach:', 'Pendekatan Daftar (atau Gabungan):')}
            </strong>{' '}
            {t(
              'Explicitly enumerates predicate crimes in the statute. To comply with R.3, the statutory list must cover a range of offences within every single one of the 21 categories below.',
              'Merinci daftar tindak pidana asal di dalam Undang-Undang. Agar patuh pada R.3, daftar tersebut wajib mencakup serangkaian tindak pidana di setiap 21 kategori berikut.'
            )}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {designatedOffences.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedId(cat.id)}
            className={`text-left px-3 py-2 rounded-lg text-xs border transition-colors flex items-start gap-2 cursor-pointer ${
              selectedId === cat.id
                ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] font-medium'
                : 'bg-[#F9F6F0] text-[#23312D] border-[#E5DEC9] hover:bg-[#F3EFE6]'
            }`}
          >
            <span className="font-mono tabular-nums opacity-75 shrink-0">
              {String(cat.id).padStart(2, '0')}.
            </span>
            <span className="line-clamp-1">{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="p-4 rounded-lg bg-[#10211C] text-[#FAF8F5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-mono text-[#E2B86B]">
            {t('Category', 'Kategori')} #{String(current.id).padStart(2, '0')}{' '}
            {t('of 21', 'dari 21')}
          </div>
          <div className="text-sm font-semibold">{current.name}</div>
          <div className="text-xs text-[#D5E0DC]">
            <strong>{t('Typical Typologies & Scope:', 'Contoh Modus & Cakupan:')}</strong>{' '}
            {current.examples}
          </div>
        </div>
        <div className="text-xs font-mono text-[#C8D6D0] shrink-0 border-t sm:border-t-0 sm:border-l border-[#253D35] pt-2 sm:pt-0 sm:pl-4">
          <div>
            {t(
              'No prior predicate conviction required',
              'Tanpa syarat vonis pidana asal terlebih dahulu'
            )}
          </div>
          <div>
            {t(
              'Applies regardless of property value',
              'Berlaku berapapun nilai harta kekayaan'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   R6 & R7: TARGETED FINANCIAL SANCTIONS LIFECYCLE WHEEL
   ============================================================================ */
const R6SanctionsLifecycleWheel: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [regime, setRegime] = useState<'1267' | '1373' | 'R7'>('1267');

  const stages = [
    {
      step: '01. Designate',
      title: 'Identification & Designation ("Reasonable Grounds")',
      detail:
        regime === '1267'
          ? 'UN Security Council 1267/1988 Committees designate Al-Qaida, ISIL (Da’esh), or Taliban-associated persons/entities under Chapter VII.'
          : regime === '1373'
          ? 'Domestic competent authority (own motion or after examining a foreign request) designates terrorist persons/entities under UNSCR 1373.'
          : 'UN Security Council 1718 Committee (DPRK) or 2231 mechanism (Iran) designates WMD proliferators and financiers under Chapter VII.',
      rule: 'Evidentiary standard: "Reasonable grounds/basis" — NEVER conditional on criminal proceedings.'
    },
    {
      step: '02. Freeze Without Delay',
      title: 'Ex Parte Asset Freeze (Ideally Within Hours)',
      detail:
        'All natural and legal persons in the jurisdiction must freeze—without delay and without prior notice—all funds or other assets owned or controlled (wholly or jointly, directly or indirectly) by the designated person/entity, plus derived funds.',
      rule: 'Timeline: "Without delay" = ideally within a matter of hours of UNSC listing.'
    },
    {
      step: '03. Prohibit Availability',
      title: 'Total Prohibition on Making Funds/Services Available',
      detail:
        'Prohibit nationals and any persons/entities within the jurisdiction from making any funds, financial assets, economic resources, or financial/related services available directly or indirectly for the benefit of designated persons.',
      rule: 'Covers both direct transfers and indirect benefit through front companies or intermediaries.'
    },
    {
      step: '04. Report to Authorities',
      title: 'Mandatory Reporting of Frozen Assets & Attempted Transactions',
      detail:
        'Financial institutions and DNFBPs must immediately report to competent authorities any assets frozen or actions taken in compliance with the prohibition requirements, including attempted transactions.',
      rule: 'Protects bona fide third parties acting in good faith.'
    },
    {
      step: '05. Exemptions Check',
      title: 'Humanitarian Exemptions (June 2026) & Basic Expenses',
      detail:
        regime === 'R7'
          ? 'Permits authorised access for basic expenses, extraordinary expenses, or prior contracts (provided no prohibited items/designated beneficiary and prior UN Committee notice).'
          : 'Under June 2026 INR.6 (UNSCR 2664, 2761, 2615), payments and provision of goods/services necessary to ensure timely delivery of humanitarian assistance or support basic human needs by permitted actors are exempt from freeze/prohibition.',
      rule: 'Ensures TFS never blocks legitimate UN/humanitarian lifelines.'
    },
    {
      step: '06. De-List & Unfreeze',
      title: 'De-Listing Petitions & False Positive Unfreezing',
      detail:
        'Publicly known procedures to submit de-listing requests (via the UN Office of the Ombudsperson for 1267, UN Focal Point for 1988/R.7, or domestic review for 1373) and promptly unfreeze funds of false positives (same/similar name).',
      rule: 'Immediate communication of de-listings and unfreezing orders to FIs and DNFBPs.'
    }
  ];

  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
      aria-label="Targeted Financial Sanctions Lifecycle Simulator"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-red-700">
            Interactive Sanctions Lifecycle · Recommendations 6 & 7
          </div>
          <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
            Targeted Financial Sanctions (TFS) 6-Stage Execution Wheel
          </h4>
        </div>
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
          <button
            type="button"
            onClick={() => setRegime('1267')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              regime === '1267' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            UNSCR 1267/1988 (UN List)
          </button>
          <button
            type="button"
            onClick={() => setRegime('1373')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              regime === '1373' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            UNSCR 1373 (Domestic/Foreign)
          </button>
          <button
            type="button"
            onClick={() => setRegime('R7')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              regime === 'R7' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            R.7 Proliferation (1718/2231)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {stages.map((st, idx) => (
          <button
            key={st.step}
            type="button"
            onClick={() => setActiveStage(idx)}
            className={`p-3 rounded-lg border text-left transition-colors ${
              activeStage === idx
                ? 'bg-red-700 text-white border-red-700'
                : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="text-[11px] font-mono opacity-80">{st.step.split('.')[0]}</div>
            <div className="text-xs font-semibold mt-0.5 line-clamp-2">
              {st.step.split('. ')[1]}
            </div>
          </button>
        ))}
      </div>

      <div className="p-5 rounded-lg bg-slate-900 text-white space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-red-300">{stages[activeStage].step}</span>
          <span className="text-xs font-mono text-slate-400">
            Regime: {regime === '1267' ? 'UNSC 1267/1988' : regime === '1373' ? 'UNSC 1373' : 'UNSC WMD Proliferation'}
          </span>
        </div>
        <h5 className="text-base font-semibold">{stages[activeStage].title}</h5>
        <p className="text-xs text-slate-200 leading-relaxed">{stages[activeStage].detail}</p>
        <div className="pt-2 border-t border-slate-800 text-xs font-mono text-amber-300">
          Mandatory Standard: {stages[activeStage].rule}
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   R10: CUSTOMER DUE DILIGENCE DECISION TREE
   ============================================================================ */
const R10CddDecisionTree: React.FC = () => {
  const [newRel, setNewRel] = useState(false);
  const [occasionalAmount, setOccasionalAmount] = useState(8000);
  const [isWire, setIsWire] = useState(false);
  const [hasSuspicion, setHasSuspicion] = useState(false);
  const [hasIdDoubts, setHasIdDoubts] = useState(false);
  const [wouldTipOff, setWouldTipOff] = useState(false);

  const cddTriggered =
    newRel || occasionalAmount >= 15000 || isWire || hasSuspicion || hasIdDoubts;

  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
      aria-label="Customer Due Diligence Trigger Decision Tree"
    >
      <div className="border-b border-slate-100 pb-4">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-700">
          Interactive Compliance Decision Tree · Recommendation 10
        </div>
        <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
          When Is Customer Due Diligence (CDD) Mandatory — and When Does Tipping-Off Override It?
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
          <div className="text-xs font-semibold text-slate-800">
            Configure Customer Scenario Triggers:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setNewRel(!newRel)}
              className={`px-3 py-2 rounded-lg text-xs font-medium border text-left flex items-center justify-between ${
                newRel
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-white text-slate-700 border-slate-200'
              }`}
            >
              <span>Establishing Business Relation</span>
              <span className="font-mono">{newRel ? 'YES' : 'NO'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsWire(!isWire)}
              className={`px-3 py-2 rounded-lg text-xs font-medium border text-left flex items-center justify-between ${
                isWire
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-white text-slate-700 border-slate-200'
              }`}
            >
              <span>R.16 Wire / Payment Transfer</span>
              <span className="font-mono">{isWire ? 'YES' : 'NO'}</span>
            </button>

            <button
              type="button"
              onClick={() => setHasIdDoubts(!hasIdDoubts)}
              className={`px-3 py-2 rounded-lg text-xs font-medium border text-left flex items-center justify-between ${
                hasIdDoubts
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-white text-slate-700 border-slate-200'
              }`}
            >
              <span>Doubts on Existing ID Data</span>
              <span className="font-mono">{hasIdDoubts ? 'YES' : 'NO'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const next = !hasSuspicion;
                setHasSuspicion(next);
                if (!next) setWouldTipOff(false);
              }}
              className={`px-3 py-2 rounded-lg text-xs font-medium border text-left flex items-center justify-between ${
                hasSuspicion
                  ? 'bg-red-700 text-white border-red-700'
                  : 'bg-white text-slate-700 border-slate-200'
              }`}
            >
              <span>Suspicion of ML or TF</span>
              <span className="font-mono">{hasSuspicion ? 'YES' : 'NO'}</span>
            </button>
          </div>

          <div className="pt-2">
            <label
              htmlFor="r10-occ-slider"
              className="flex justify-between text-xs font-medium text-slate-700 mb-1"
            >
              <span>Occasional Transaction Amount (Single or Linked):</span>
              <span className="font-mono font-semibold tabular-nums text-emerald-800">
                USD/EUR {occasionalAmount.toLocaleString()}
              </span>
            </label>
            <input
              id="r10-occ-slider"
              type="range"
              min={0}
              max={30000}
              step={1000}
              value={occasionalAmount}
              onChange={(e) => setOccasionalAmount(Number(e.target.value))}
              className="w-full accent-emerald-700 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>0</span>
              <span className="text-emerald-700 font-semibold">15,000 Threshold</span>
              <span>30,000</span>
            </div>
          </div>

          {hasSuspicion && (
            <div className="pt-2 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setWouldTipOff(!wouldTipOff)}
                className={`w-full px-3 py-2.5 rounded-lg text-xs font-medium border flex items-center justify-between ${
                  wouldTipOff
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white text-slate-800 border-slate-300'
                }`}
              >
                <span>Would performing CDD tip off the customer?</span>
                <span className="font-mono">{wouldTipOff ? 'YES (Tip-Off Risk)' : 'NO'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Decision Result */}
        <div className="lg:col-span-6 flex flex-col justify-between p-5 rounded-lg bg-slate-900 text-white space-y-4">
          {hasSuspicion && wouldTipOff ? (
            <div className="space-y-2">
              <div className="text-xs font-mono text-amber-300 uppercase">
                INR.10 Tipping-Off Exception Triggered
              </div>
              <h5 className="text-base font-semibold text-white">
                DO NOT Pursue CDD → Immediately File STR (R.20)
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Where the FI forms a suspicion of ML/TF and reasonably believes that performing the CDD process will tip-off the customer, it is <strong>permitted not to pursue the CDD process</strong>, and instead should <strong>file a Suspicious Transaction Report (STR)</strong> with the FIU.
              </p>
            </div>
          ) : cddTriggered ? (
            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 uppercase">
                Mandatory CDD Triggered under R.10
              </div>
              <h5 className="text-base font-semibold text-white">
                Execute All 4 CDD Measures Before/During Onboarding
              </h5>
              <ol className="text-xs text-slate-200 space-y-1.5 list-decimal pl-4">
                <li>Identify customer & verify via reliable, independent sources.</li>
                <li>Identify Beneficial Owner(s) & verify (3-step cascade for legal persons).</li>
                <li>Understand purpose & intended nature of the business relationship.</li>
                <li>Conduct ongoing due diligence & transaction scrutiny.</li>
              </ol>
              <div className="pt-2 border-t border-slate-800 text-xs text-amber-300 font-mono">
                If unable to comply with (1)–(3): Do NOT open account / do NOT perform transaction / terminate relationship + consider filing an STR.
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase">
                Below Occasional Threshold & No Other Trigger Active
              </div>
              <h5 className="text-base font-semibold text-white">
                Full R.10 CDD Not Triggered (Unless Linked Transactions Reach 15,000)
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                An occasional non-wire transaction of USD/EUR {occasionalAmount.toLocaleString()} with no business relationship, no suspicion of ML/TF, and no ID doubts sits below the USD/EUR 15,000 threshold. Note: FIs must still screen against TFS lists (R.6/R.7) and monitor for linked structuring!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   R16: PAYMENT TRANSPARENCY PIPELINE (JUNE 2025 REVISION)
   ============================================================================ */
const R16PaymentTransparencyPipeline: React.FC = () => {
  const [scope, setScope] = useState<'cross-border' | 'domestic' | 'card-withdrawal'>('cross-border');
  const [aboveThreshold, setAboveThreshold] = useState<boolean>(true);
  const [originatorType, setOriginatorType] = useState<'natural' | 'legal'>('natural');
  const [payeeCheckMode, setPayeeCheckMode] = useState<'pre' | 'per-tx' | 'holistic'>('pre');

  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
      aria-label="Recommendation 16 Payment Transparency Pipeline Simulator"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-700">
            June 2025 Revised Standard · Recommendation 16
          </div>
          <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
            ISO 20022 Payment Transparency Chain & Misdirected Payment Controls
          </h4>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
          <button
            type="button"
            onClick={() => setScope('cross-border')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              scope === 'cross-border' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Cross-Border Payment
          </button>
          <button
            type="button"
            onClick={() => setScope('domestic')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              scope === 'domestic' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Domestic Payment
          </button>
          <button
            type="button"
            onClick={() => setScope('card-withdrawal')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              scope === 'card-withdrawal' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Cross-Border Card Cash Withdrawal
          </button>
        </div>
      </div>

      {/* Parameter Bar */}
      {scope !== 'card-withdrawal' && (
        <div className="flex flex-wrap items-center gap-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Amount vs. De Minimis (USD/EUR 1,000):</span>
            <button
              type="button"
              onClick={() => setAboveThreshold(!aboveThreshold)}
              className={`px-2.5 py-1 rounded font-mono font-medium border ${
                aboveThreshold
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-white text-slate-800 border-slate-300'
              }`}
            >
              {aboveThreshold ? '> USD/EUR 1,000 (Full Verified Packet)' : '≤ USD/EUR 1,000 (Below Threshold)'}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Originator Entity:</span>
            <button
              type="button"
              onClick={() =>
                setOriginatorType(originatorType === 'natural' ? 'legal' : 'natural')
              }
              className="px-2.5 py-1 rounded font-mono font-medium bg-white border border-slate-300 text-slate-800"
            >
              {originatorType === 'natural' ? 'Natural Person' : 'Legal Person (Company)'}
            </button>
          </div>
        </div>
      )}

      {/* 3-Institution Payment Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/60 space-y-2">
          <div className="text-xs font-mono text-emerald-800 font-semibold">
            1. ORDERING FI
          </div>
          <div className="text-sm font-semibold text-slate-900">
            Originates Structured Message
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {scope === 'card-withdrawal'
              ? 'Includes card/account number with transaction; provides cardholder name to acquirer within 3 business days upon request.'
              : aboveThreshold
              ? 'Verifies originator info for accuracy using reliable independent sources before executing payment; retains 5-year records.'
              : 'Includes basic originator & beneficiary info; verification not mandatory unless ML/TF suspicion exists.'}
          </p>
        </div>

        <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/60 space-y-2">
          <div className="text-xs font-mono text-emerald-800 font-semibold">
            2. INTERMEDIARY FI
          </div>
          <div className="text-sm font-semibold text-slate-900">
            Preserves Packet & Screens
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ensures all originator & beneficiary data remains intact with the payment message across borders; takes reasonable measures (straight-through processing) to detect missing fields and applies risk-based execute/reject/suspend policies.
          </p>
        </div>

        <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/60 space-y-2">
          <div className="text-xs font-mono text-emerald-800 font-semibold">
            3. BENEFICIARY FI
          </div>
          <div className="text-sm font-semibold text-slate-900">
            Verifies & Detects Misdirection
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Verifies beneficiary identity (if not previously verified) and detects missing data or misdirected payments using one of 3 INR.16 mechanisms:
          </p>
          <div className="flex flex-wrap gap-1 pt-1">
            {(['pre', 'per-tx', 'holistic'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setPayeeCheckMode(m)}
                className={`px-2 py-0.5 text-[11px] rounded border font-mono ${
                  payeeCheckMode === m
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
              >
                {m === 'pre' && 'Pre-Validation (CoP)'}
                {m === 'per-tx' && 'Per-Tx Name+Acct'}
                {m === 'holistic' && 'Holistic Monitoring'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Live ISO 20022 Packet Inspector */}
      <div className="p-4 rounded-lg bg-slate-900 text-white space-y-2 font-mono text-xs">
        <div className="text-emerald-400 font-semibold">
          Required Structured Data Packet Traveling in Payment Message:
        </div>
        {scope === 'card-withdrawal' ? (
          <div className="text-slate-200 space-y-1">
            <div>• Card Number / Account Number (travels with withdrawal message)</div>
            <div>• Cardholder Name (made available to acquirer within 3 business days on request)</div>
          </div>
        ) : scope === 'domestic' && !aboveThreshold ? (
          <div className="text-slate-200 space-y-1">
            <div>• Originator Name + Account Number (or Unique Transaction Reference Number / UETR)</div>
            <div>• Full Originator Info supplied within 3 business days upon request by Beneficiary FI / Authorities</div>
          </div>
        ) : !aboveThreshold ? (
          <div className="text-slate-200 space-y-1">
            <div>• Originator Name + Originator Account Number (or UETR)</div>
            <div>• Beneficiary Name + Beneficiary Account Number (or UETR)</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200">
            <div>• Originator Name (Verified)</div>
            <div>• Beneficiary Name</div>
            <div>• Originator & Beneficiary Account Numbers (or UETR)</div>
            <div>• Originator Address</div>
            <div>• Beneficiary Country & Town</div>
            <div>
              {originatorType === 'natural'
                ? '• Originator Date of Birth (Natural Person)'
                : '• Originator BIC / LEI / Unique Official Identifier (Legal Person)'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ============================================================================
   R22: DNFBP SECTOR & THRESHOLD SELECTOR
   ============================================================================ */
const R22DnfbpSectorSelector: React.FC = () => {
  const [sector, setSector] = useState<number>(0);

  const sectors = [
    {
      name: 'Casinos (incl. Internet & Ship-Based)',
      threshold: 'USD/EUR 3,000',
      trigger: 'When customers engage in financial transactions ≥ USD/EUR 3,000.',
      specialRule:
        'Identifying a customer at the casino entrance alone is NOT necessarily sufficient — the casino must be able to link CDD information for a particular customer to the actual transactions they conduct inside the casino.',
      supervision: 'Must be licensed and comprehensively supervised by a competent authority (R.28).'
    },
    {
      name: 'Real Estate Agents',
      threshold: 'All Real Estate Buy/Sell Transactions',
      trigger: 'When involved in transactions for their client concerning the buying and selling of real estate.',
      specialRule:
        'Must perform R.10 CDD measures on BOTH the purchasers AND the vendors (sellers) of the property.',
      supervision: 'Supervised by a competent authority or qualifying SRB on a risk-sensitive basis (R.28).'
    },
    {
      name: 'Dealers in Precious Metals & Stones',
      threshold: 'USD/EUR 15,000 (Cash)',
      trigger:
        'When engaging in any CASH transaction with a customer ≥ USD/EUR 15,000 (single operation or linked operations).',
      specialRule:
        'Applies to both R.22 CDD/record-keeping and R.23 STR reporting when cash transactions reach or exceed USD/EUR 15,000.',
      supervision: 'Supervised by a competent authority or qualifying SRB (R.28).'
    },
    {
      name: 'Lawyers, Notaries & Accountants',
      threshold: '6 Specified Client Activities (No Monetary Floor)',
      trigger:
        'When preparing for or carrying out transactions for clients concerning: (1) buying/selling real estate; (2) managing client money, securities or assets; (3) managing bank/savings/securities accounts; (4) organising contributions for company creation/operation/management; (5) creating, operating or managing legal persons/arrangements; (6) buying/selling business entities.',
      specialRule:
        'STR exemption under R.23 where information is covered by legal professional privilege or professional secrecy. Dissuading a client from illegal activity is NOT tipping-off. Countries are strongly encouraged to extend STR reporting to all accountant activities including auditing.',
      supervision: 'Supervised by a competent authority or qualifying Self-Regulatory Body (SRB).'
    },
    {
      name: 'Trust & Company Service Providers (TCSPs)',
      threshold: '5 Corporate / Trust Services (No Monetary Floor)',
      trigger:
        'When preparing or carrying out transactions for a client: (1) acting as formation agent of legal persons; (2) acting as/arranging a director, secretary, or partner; (3) providing a registered office, business or correspondence address; (4) acting as/arranging a trustee of an express trust; (5) acting as/arranging a nominee shareholder.',
      specialRule:
        'Critical gatekeepers for R.24 (Legal Persons) and R.25 (Legal Arrangements) beneficial ownership accuracy.',
      supervision: 'Supervised by a competent authority or qualifying SRB (R.28).'
    }
  ];

  const current = sectors[sector];

  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
      aria-label="DNFBP Gatekeeper Sector and Threshold Explorer"
    >
      <div className="border-b border-slate-100 pb-4">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-700">
          Interactive Gatekeeper Matrix · Recommendations 22, 23 & 28
        </div>
        <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
          DNFBP Professions: CDD Triggers, Thresholds & Special Rules
        </h4>
      </div>

      <div className="flex flex-wrap gap-2">
        {sectors.map((s, idx) => (
          <button
            key={s.name}
            type="button"
            onClick={() => setSector(idx)}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors ${
              sector === idx
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
          <div className="text-xs font-mono text-slate-500">APPLICABLE THRESHOLD</div>
          <div className="text-sm font-semibold text-emerald-800 font-mono">
            {current.threshold}
          </div>
          <p className="text-xs text-slate-600 pt-1">{current.trigger}</p>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
          <div className="text-xs font-mono text-slate-500">INTERPRETIVE NOTE RULE</div>
          <div className="text-sm font-semibold text-slate-900">Key Operational Requirement</div>
          <p className="text-xs text-slate-600 pt-1">{current.specialRule}</p>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
          <div className="text-xs font-mono text-slate-500">R.28 SUPERVISION MODEL</div>
          <div className="text-sm font-semibold text-slate-900">Oversight Authority</div>
          <p className="text-xs text-slate-600 pt-1">{current.supervision}</p>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   R24: BENEFICIAL OWNERSHIP 3-STEP CASCADE & MULTI-PRONGED REGISTRY
   ============================================================================ */
const R24BoCascadeSimulator: React.FC = () => {
  const [maxShareholderPct, setMaxShareholderPct] = useState<number>(30);
  const [hasVetoOrOtherControl, setHasVetoOrOtherControl] = useState<boolean>(false);

  const activeStep =
    maxShareholderPct >= 25
      ? 1
      : hasVetoOrOtherControl
      ? 2
      : 3;

  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
      aria-label="Beneficial Ownership Cascade and Multi-Pronged Simulator"
    >
      <div className="border-b border-slate-100 pb-4">
        <div className="text-xs font-mono uppercase tracking-wider text-violet-700">
          Interactive BO Identification Lab · Recommendation 24 & INR.10
        </div>
        <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
          Legal Person Beneficial Ownership 3-Step Cascade & Multi-Pronged Verification
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
          <div>
            <label
              htmlFor="r24-pct-slider"
              className="flex justify-between text-xs font-semibold text-slate-800 mb-1"
            >
              <span>Highest Ultimate Natural Person Ownership %:</span>
              <span className="font-mono tabular-nums text-violet-800">
                {maxShareholderPct}%
              </span>
            </label>
            <input
              id="r24-pct-slider"
              type="range"
              min={0}
              max={100}
              step={5}
              value={maxShareholderPct}
              onChange={(e) => setMaxShareholderPct(Number(e.target.value))}
              className="w-full accent-violet-700 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>0% (Dispersed)</span>
              <span className="text-violet-700 font-semibold">25% Threshold</span>
              <span>100%</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setHasVetoOrOtherControl(!hasVetoOrOtherControl)}
            className={`w-full px-3 py-2.5 rounded-lg text-xs font-medium border flex items-center justify-between ${
              hasVetoOrOtherControl
                ? 'bg-violet-700 text-white border-violet-700'
                : 'bg-white text-slate-700 border-slate-200'
            }`}
          >
            <span>Natural person exercises control via other means (veto, board appointment, family pact)?</span>
            <span className="font-mono shrink-0 ml-2">
              {hasVetoOrOtherControl ? 'YES' : 'NO'}
            </span>
          </button>

          <div className="p-3 rounded bg-violet-50 border border-violet-200 text-xs text-violet-950 space-y-1">
            <div className="font-semibold">March 2022 R.24 Multi-Pronged Sources:</div>
            <div>1. Company itself holds verified BO registry</div>
            <div>2. Public Authority / BO Register (or equivalent mechanism)</div>
            <div>3. Supplementary CDD + Discrepancy Reporting by FIs/DNFBPs</div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-2.5">
          <div
            className={`p-3.5 rounded-lg border transition-colors ${
              activeStep === 1
                ? 'bg-violet-900 text-white border-violet-900'
                : 'bg-slate-50 text-slate-500 border-slate-200'
            }`}
          >
            <div className="text-xs font-mono font-semibold">
              STEP (i.i) — Controlling Ownership Interest (≥ 25% Example)
            </div>
            <p className="text-xs mt-1">
              Identify the natural person(s) who ultimately have a controlling ownership interest in the legal person ({maxShareholderPct}% {maxShareholderPct >= 25 ? '≥ 25% — IDENTIFIED HERE' : '< 25% — Proceed to Step i.ii'}).
            </p>
          </div>

          <div
            className={`p-3.5 rounded-lg border transition-colors ${
              activeStep === 2
                ? 'bg-violet-900 text-white border-violet-900'
                : 'bg-slate-50 text-slate-500 border-slate-200'
            }`}
          >
            <div className="text-xs font-mono font-semibold">
              STEP (i.ii) — Control Through Other Means
            </div>
            <p className="text-xs mt-1">
              Where there is doubt under (i.i) or no natural person exerts control through ownership interests, identify the natural person(s) exercising control of the legal person through other means (personal connections, financing, shareholders’ agreements, power to appoint senior management).
            </p>
          </div>

          <div
            className={`p-3.5 rounded-lg border transition-colors ${
              activeStep === 3
                ? 'bg-violet-900 text-white border-violet-900'
                : 'bg-slate-50 text-slate-500 border-slate-200'
            }`}
          >
            <div className="text-xs font-mono font-semibold">
              STEP (i.iii) — Fallback Only: Senior Managing Official
            </div>
            <p className="text-xs mt-1">
              Where no natural person is identified under (i.i) or (i.ii) after exhausting all means, identify and verify the relevant natural person who holds the position of <strong>senior managing official</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   R29: FINANCIAL INTELLIGENCE UNIT (FIU) HUB WHEEL
   ============================================================================ */
const R29FiuHubWheel: React.FC = () => {
  const [selectedFunction, setSelectedFunction] = useState<'receipt' | 'analysis' | 'dissemination'>('receipt');

  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
      aria-label="Financial Intelligence Unit Core Functions Hub"
    >
      <div className="border-b border-slate-100 pb-4">
        <div className="text-xs font-mono uppercase tracking-wider text-amber-800">
          Interactive Institutional Architecture · Recommendation 29
        </div>
        <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
          The Financial Intelligence Unit (FIU): National Receipt, Analysis & Dissemination Hub
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => setSelectedFunction('receipt')}
          className={`p-4 rounded-lg border text-left transition-colors ${
            selectedFunction === 'receipt'
              ? 'bg-amber-700 text-white border-amber-700'
              : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
          }`}
        >
          <div className="text-xs font-mono opacity-80">CORE FUNCTION 01</div>
          <div className="text-sm font-semibold mt-0.5">1. Central Receipt Inbox</div>
          <p className="text-xs mt-1 opacity-90">
            STRs from FIs/DNFBPs/VASPs, cross-border cash declarations (R.32), cash transaction reports, and domestic authority info.
          </p>
        </button>

        <button
          type="button"
          onClick={() => setSelectedFunction('analysis')}
          className={`p-4 rounded-lg border text-left transition-colors ${
            selectedFunction === 'analysis'
              ? 'bg-amber-700 text-white border-amber-700'
              : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
          }`}
        >
          <div className="text-xs font-mono opacity-80">CORE FUNCTION 02</div>
          <div className="text-sm font-semibold mt-0.5">2. Operational & Strategic Analysis</div>
          <p className="text-xs mt-1 opacity-90">
            Enriches reports with additional reporting-entity info + timely access to financial, administrative & LE databases.
          </p>
        </button>

        <button
          type="button"
          onClick={() => setSelectedFunction('dissemination')}
          className={`p-4 rounded-lg border text-left transition-colors ${
            selectedFunction === 'dissemination'
              ? 'bg-amber-700 text-white border-amber-700'
              : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
          }`}
        >
          <div className="text-xs font-mono opacity-80">CORE FUNCTION 03</div>
          <div className="text-sm font-semibold mt-0.5">3. Intelligence Dissemination</div>
          <p className="text-xs mt-1 opacity-90">
            Spontaneous and on-request dissemination to domestic LE, prosecutors, supervisors, and foreign FIUs via Egmont Group.
          </p>
        </button>
      </div>

      <div className="p-4 rounded-lg bg-slate-900 text-white text-xs space-y-2">
        {selectedFunction === 'receipt' && (
          <>
            <div className="font-mono text-amber-300 font-semibold">
              INFLOWS TO THE FIU (R.20, R.23, R.29, R.32):
            </div>
            <p className="text-slate-200 leading-relaxed">
              • <strong>Suspicious Transaction Reports (STRs):</strong> Mandatory prompt reports from FIs, DNFBPs, and VASPs on completed or attempted suspicious transactions of any value.<br />
              • <strong>Other Reports & Declarations:</strong> R.32 cross-border currency/BNI declarations & disclosures, large cash transaction reports, wire transfer reports, and requestable supplementary data from any reporting entity.
            </p>
          </>
        )}
        {selectedFunction === 'analysis' && (
          <>
            <div className="font-mono text-amber-300 font-semibold">
              DUAL ANALYTICAL ENGINE (INR.29):
            </div>
            <p className="text-slate-200 leading-relaxed">
              • <strong>Operational Analysis:</strong> Uses available and obtainable info to identify specific targets (persons, assets, criminal networks), follow the trail of particular activities/transactions, and determine links to proceeds of crime, ML, predicates, or TF.<br />
              • <strong>Strategic Analysis:</strong> Identifies ML and TF related macro trends, typologies, and geographic/sectoral vulnerabilities to feed into the National Risk Assessment (R.1) and supervisory guidance (R.34).
            </p>
          </>
        )}
        {selectedFunction === 'dissemination' && (
          <>
            <div className="font-mono text-amber-300 font-semibold">
              AUTONOMOUS DISSEMINATION & SAFEGUARDS (INR.29 & R.40):
            </div>
            <p className="text-slate-200 leading-relaxed">
              • <strong>Spontaneous & On-Request:</strong> Disseminates intelligence packages to law enforcement (triggering R.30 parallel financial investigations), supervisors, customs, and tax authorities.<br />
              • <strong>Operational Independence & Egmont Group:</strong> Autonomous decision-making free from political or industry interference, strict facility/IT security clearances, and international FIU-to-FIU exchange via the Egmont Group.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

/* ============================================================================
   R32: CROSS-BORDER CASH COURIER SIMULATOR
   ============================================================================ */
const R32CashCourierSimulator: React.FC = () => {
  const [cargoType, setCargoType] = useState<'currency' | 'bni' | 'gold'>('currency');
  const [amount, setAmount] = useState<number>(22000);
  const [declaredTruthfully, setDeclaredTruthfully] = useState<boolean>(false);

  const aboveThreshold = amount > 15000;

  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
      aria-label="Cross-Border Cash Courier Border Inspection Simulator"
    >
      <div className="border-b border-slate-100 pb-4">
        <div className="text-xs font-mono uppercase tracking-wider text-amber-800">
          Interactive Border Control Simulator · Recommendation 32
        </div>
        <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
          Physical Cross-Border Transportation of Currency & Bearer Negotiable Instruments
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 space-y-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
          <div>
            <div className="text-xs font-semibold text-slate-800 mb-2">
              1. Select Traveller Cargo Type:
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setCargoType('currency')}
                className={`px-2.5 py-2 rounded-lg text-xs font-medium border ${
                  cargoType === 'currency'
                    ? 'bg-amber-700 text-white border-amber-700'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
              >
                Banknotes / Cash
              </button>
              <button
                type="button"
                onClick={() => setCargoType('bni')}
                className={`px-2.5 py-2 rounded-lg text-xs font-medium border ${
                  cargoType === 'bni'
                    ? 'bg-amber-700 text-white border-amber-700'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
              >
                BearerCheques (BNI)
              </button>
              <button
                type="button"
                onClick={() => setCargoType('gold')}
                className={`px-2.5 py-2 rounded-lg text-xs font-medium border ${
                  cargoType === 'gold'
                    ? 'bg-amber-700 text-white border-amber-700'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
              >
                Gold / Diamonds
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="r32-amount-slider"
              className="flex justify-between text-xs font-semibold text-slate-800 mb-1"
            >
              <span>2. Value in Suitcase (Inbound or Outbound):</span>
              <span className="font-mono tabular-nums text-amber-800">
                USD/EUR {amount.toLocaleString()}
              </span>
            </label>
            <input
              id="r32-amount-slider"
              type="range"
              min={1000}
              max={50000}
              step={1000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-amber-700 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>1,000</span>
              <span className="text-amber-800 font-semibold">15,000 Max Threshold</span>
              <span>50,000</span>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setDeclaredTruthfully(!declaredTruthfully)}
              className={`w-full px-3 py-2.5 rounded-lg text-xs font-medium border flex items-center justify-between ${
                declaredTruthfully
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-red-700 text-white border-red-700'
              }`}
            >
              <span>3. Traveller Customs Declaration / Disclosure:</span>
              <span className="font-mono">
                {declaredTruthfully ? 'TRUTHFUL DECLARATION' : 'FALSE / UNDECLARED'}
              </span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 p-5 rounded-lg bg-slate-900 text-white flex flex-col justify-between space-y-3">
          {cargoType === 'gold' ? (
            <div className="space-y-2">
              <div className="text-xs font-mono text-amber-300 uppercase">
                INR.32 Scope Carve-Out: Gold & Precious Stones
              </div>
              <h5 className="text-base font-semibold">
                Not Covered by R.32 (Subject to General Customs Laws & R.22/23)
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Per the Interpretive Note to Recommendation 32, <strong>gold, precious metals, and precious stones are NOT covered by R.32</strong> despite their high liquidity. Instead, they are governed under national customs legislation (and dealers are subject to R.22/R.23 for cash transactions ≥ USD/EUR 15,000). Countries should consider notifying foreign customs counterparts when unusual cross-border movements of gold are discovered.
              </p>
            </div>
          ) : aboveThreshold && !declaredTruthfully ? (
            <div className="space-y-2">
              <div className="text-xs font-mono text-red-400 uppercase">
                R.32 Violation: False Declaration / Failure to Declare
              </div>
              <h5 className="text-base font-semibold">
                Stop/Restrain Currency or BNI + Question Carrier + Sanction + Notify FIU
              </h5>
              <ul className="text-xs text-slate-200 space-y-1.5 list-disc pl-4">
                <li><strong>Stop or Restrain:</strong> Competent authorities have legal authority to stop/restrain the USD/EUR {amount.toLocaleString()} for a reasonable time to ascertain if ML/TF evidence exists.</li>
                <li><strong>Demand Origin & Intended Use:</strong> Require carrier to provide additional info on the origin and intended use of the currency/BNIs.</li>
                <li><strong>Sanctions & Confiscation:</strong> Impose effective, proportionate, dissuasive sanctions for the false declaration, and confiscate under R.4 if linked to ML/TF/predicates.</li>
                <li><strong>FIU Feed:</strong> Information is transmitted to the FIU (R.29).</li>
              </ul>
            </div>
          ) : aboveThreshold && declaredTruthfully ? (
            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 uppercase">
                Compliant Declaration Above Threshold (&gt; USD/EUR 15,000)
              </div>
              <h5 className="text-base font-semibold">
                Declaration Recorded & Made Available to the FIU
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                The traveller truthfully declared USD/EUR {amount.toLocaleString()} in {cargoType === 'currency' ? 'currency' : 'bearer negotiable instruments'}. The declaration data (amount and identification of the bearer) is retained by customs and made available to the Financial Intelligence Unit (FIU). Unless suspicion of ML/TF arises, legitimate capital movement proceeds without trade interference.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase">
                Below Maximum Preset Threshold (≤ USD/EUR 15,000)
              </div>
              <h5 className="text-base font-semibold">
                Below Threshold — Subject to Stop/Restraint Only If ML/TF Suspicion Exists
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                In a threshold declaration system (max USD/EUR 15,000), carrying USD/EUR {amount.toLocaleString()} does not trigger a mandatory threshold declaration. However, under R.32(b), authorities still retain the legal power to stop or restrain currency/BNIs of ANY amount if there is suspicion of ML, TF, or predicate offences!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   R36: INTERNATIONAL CONVENTIONS CHECKLIST
   ============================================================================ */
const R36ConventionsChecklist: React.FC = () => {
  const conventions = [
    {
      name: 'Vienna Convention (1988)',
      fullName: 'UN Convention against Illicit Traffic in Narcotic Drugs and Psychotropic Substances',
      status: 'Mandatory (R.36)',
      focus: 'Criminalisation of drug money laundering, confiscation of narcotics proceeds, extradition & MLA.'
    },
    {
      name: 'Palermo Convention (2000)',
      fullName: 'UN Convention against Transnational Organized Crime',
      status: 'Mandatory (R.36)',
      focus: 'Broadens ML criminalisation to serious crimes & organized criminal groups, corporate liability, international cooperation.'
    },
    {
      name: 'Terrorist Financing Convention (1999)',
      fullName: 'International Convention for the Suppression of the Financing of Terrorism',
      status: 'Mandatory (R.36)',
      focus: 'Criminalisation of wilful provision/collection of funds for terrorist acts (foundation for R.5).'
    },
    {
      name: 'Merida Convention / UNCAC (2003)',
      fullName: 'United Nations Convention against Corruption',
      status: 'Mandatory (R.36)',
      focus: 'Bribery, embezzlement, PEP scrutiny, laundering proceeds of corruption, international asset return.'
    },
    {
      name: 'Budapest Convention (2001) & Warsaw Convention (2005)',
      fullName: 'CoE Cybercrime Convention & CoE Laundering/Search/Seizure/Confiscation Convention',
      status: 'Encouraged (R.36)',
      focus: 'Regional/thematic treaties on electronic evidence, cyber-enabled financial crime, and rapid cross-border freezing.'
    }
  ];

  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-4"
      aria-label="Recommendation 36 International Instruments Matrix"
    >
      <div className="border-b border-slate-100 pb-3">
        <div className="text-xs font-mono uppercase tracking-wider text-sky-800">
          Treaty Compliance Matrix · Recommendation 36
        </div>
        <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
          Mandatory UN Conventions vs. Encouraged Regional Instruments
        </h4>
      </div>
      <div className="divide-y divide-slate-100">
        {conventions.map((c) => (
          <div
            key={c.name}
            className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-900">{c.name}</span>
                <span className="text-xs font-mono text-slate-500">· {c.status}</span>
              </div>
              <div className="text-xs text-slate-600">{c.fullName}</div>
              <div className="text-xs text-slate-500 mt-0.5">{c.focus}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================================
   R37: MUTUAL LEGAL ASSISTANCE (MLA) REFUSAL GROUNDS SORTING SIMULATOR
   ============================================================================ */
const R37MlaSortingSimulator: React.FC = () => {
  const [selectedGround, setSelectedGround] = useState<number>(0);

  const scenarios = [
    {
      claim: '"Request Denied: The offence also involves fiscal / tax matters."',
      verdict: 'INVALID REFUSAL GROUND (Prohibited by R.37(c))',
      allowed: false,
      explanation:
        'Recommendation 37(c) explicitly forbids countries from refusing to execute an MLA request on the sole ground that the offence is also considered to involve fiscal (tax) matters.'
    },
    {
      claim: '"Request Denied: Our national bank secrecy act forbids disclosing customer account records."',
      verdict: 'INVALID REFUSAL GROUND (Prohibited by R.37(d) & R.9)',
      allowed: false,
      explanation:
        'Recommendation 37(d) forbids refusing an MLA request on the grounds of laws that impose secrecy or confidentiality requirements on financial institutions or DNFBPs.'
    },
    {
      claim: '"Request Denied: Your country calls this crime Wire Fraud, whereas our statute calls it Electronic Deception under a different chapter."',
      verdict: 'INVALID REFUSAL GROUND (Conduct-Based Dual Criminality — R.37)',
      allowed: false,
      explanation:
        'Where dual criminality is required, R.37 mandates that it is satisfied regardless of whether both countries place the offence within the same category or denominate it by the same terminology, provided both criminalise the underlying conduct.'
    },
    {
      claim: '"Request Denied: The requested non-coercive witness interview lacks dual criminality."',
      verdict: 'INVALID REFUSAL GROUND (Non-Coercive MLA Requires No Dual Criminality)',
      allowed: false,
      explanation:
        'Countries must render mutual legal assistance notwithstanding the absence of dual criminality if the assistance does not involve coercive actions.'
    },
    {
      claim: '"Exception Invoked: The requested documents are defence counsel notes protected by bona fide Legal Professional Privilege."',
      verdict: 'VALID EXCEPTION (Protected under R.37(d))',
      allowed: true,
      explanation:
        'R.37(d) recognises a narrow exception where the relevant information was obtained by lawyers/notaries/independent legal professionals in circumstances where legal professional privilege or legal professional secrecy legitimately applies.'
    }
  ];

  const current = scenarios[selectedGround];

  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
      aria-label="Mutual Legal Assistance Refusal Grounds Simulator"
    >
      <div className="border-b border-slate-100 pb-4">
        <div className="text-xs font-mono uppercase tracking-wider text-sky-800">
          Interactive MLA Adjudicator · Recommendation 37
        </div>
        <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
          Test Foreign MLA Request Objections: Prohibited Excuse vs. Valid Exception
        </h4>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {scenarios.map((sc, idx) => (
          <button
            key={sc.claim}
            type="button"
            onClick={() => setSelectedGround(idx)}
            className={`p-3 rounded-lg border text-left text-xs transition-colors flex items-center justify-between gap-4 ${
              selectedGround === idx
                ? 'bg-sky-900 text-white border-sky-900 font-medium'
                : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span>{sc.claim}</span>
            <span className="font-mono shrink-0 text-[11px] opacity-80">
              Inspect Ruling →
            </span>
          </button>
        ))}
      </div>

      <div
        className={`p-4 rounded-lg border space-y-1.5 ${
          current.allowed
            ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
            : 'bg-red-50 border-red-300 text-red-950'
        }`}
      >
        <div className="flex items-center gap-2 text-xs font-mono font-bold">
          {current.allowed ? (
            <Check className="w-4 h-4 text-emerald-700" />
          ) : (
            <X className="w-4 h-4 text-red-700" />
          )}
          <span>{current.verdict}</span>
        </div>
        <p className="text-xs leading-relaxed">{current.explanation}</p>
      </div>
    </div>
  );
};

/* ============================================================================
   R40: INTERNATIONAL COOPERATION NETWORK MAP
   ============================================================================ */
const R40CooperationNetworkMap: React.FC = () => {
  const [channel, setChannel] = useState<'fiu' | 'sup' | 'le' | 'diag'>('fiu');

  const channels = {
    fiu: {
      title: 'FIU ↔ Foreign FIU (Egmont Group Channel)',
      mechanism:
        'Exchange regardless of whether counterpart FIU is administrative, law enforcement, judicial, or hybrid.',
      scope:
        'All info accessible under R.29 (STRs, financial, administrative, LE data), conducted spontaneously and upon request. Includes power to act on foreign FIU request to suspend/withhold consent to a suspicious transaction.'
    },
    sup: {
      title: 'Supervisor ↔ Foreign Financial Supervisor',
      mechanism:
        'Bilateral/Multilateral MOUs and supervisory colleges for cross-border financial groups.',
      scope:
        'Exchange regulatory, prudential, and AML/CFT information — including internal controls, CDD info, customer files, and sample accounts/transactions. Authorised to conduct inquiries on behalf of foreign supervisors.'
    },
    le: {
      title: 'Law Enforcement ↔ Foreign Law Enforcement (Interpol / Europol / ARIN)',
      mechanism:
        'Police-to-police intelligence channels, Asset Recovery Inter-Agency Networks (ARINs), and Joint Investigative Teams (JITs).',
      scope:
        'Exchange domestically available information for intelligence/investigative purposes (prior to MLA), trace criminal property spontaneously, and use domestic investigative powers on behalf of foreign counterparts.'
    },
    diag: {
      title: 'Non-Counterpart ("Diagonal") Cooperation',
      mechanism:
        'Indirect exchange through an intermediate domestic counterpart authority (or direct exchange where permitted).',
      scope:
        'Allows e.g. an FIU or Supervisor in Country A to obtain information from a different type of authority in Country B, provided the requesting authority always makes clear the purpose and on whose behalf the request is made.'
    }
  };

  const current = channels[channel];

  return (
    <div
      className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
      aria-label="Recommendation 40 International Cooperation Channels"
    >
      <div className="border-b border-slate-100 pb-4">
        <div className="text-xs font-mono uppercase tracking-wider text-sky-800">
          Interactive Intelligence Network · Recommendation 40
        </div>
        <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
          Cross-Border Counterpart & Diagonal Cooperation Channels
        </h4>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {(
          [
            ['fiu', 'FIU ↔ FIU'],
            ['sup', 'Supervisor ↔ Supervisor'],
            ['le', 'Police ↔ Police / ARIN'],
            ['diag', 'Diagonal (Non-Counterpart)']
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setChannel(key)}
            className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-colors ${
              channel === key
                ? 'bg-sky-800 text-white border-sky-800'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-lg bg-slate-900 text-white space-y-2">
        <div className="text-xs font-mono text-sky-300">{current.title}</div>
        <div className="text-xs text-slate-300">
          <strong className="text-white">Channel & Status Rule:</strong> {current.mechanism}
        </div>
        <div className="text-xs text-slate-300">
          <strong className="text-white">Permitted Intelligence Scope:</strong> {current.scope}
        </div>
        <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-amber-300">
          Mandatory Safeguards: Purpose limitation (prior authorisation required before re-disseminating) · Strict confidentiality · No refusal on tax/secrecy grounds.
        </div>
      </div>
    </div>
  );
};
