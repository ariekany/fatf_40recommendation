import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  AudienceType,
  BeginnerGuide,
  DeepStudyMaterial,
  GlossaryTerm,
  IntroSlide,
  Recommendation,
  SectionMeta
} from '../types/fatf';
import { RECOMMENDATIONS, SECTIONS } from '../data/fatfData';
import { INTRO_SLIDES } from '../data/introSlides';
import {
  DESIGNATED_CATEGORIES_OF_OFFENCES,
  GLOSSARY_TERMS
} from '../data/glossaryData';
import { DEEP_STUDY_DATA } from '../data/caseStudiesAndDeepDive';
import {
  ID_DESIGNATED_OFFENCES,
  ID_GLOSSARY_TERMS,
  ID_INTRO_SLIDES,
  ID_SECTIONS
} from '../data/idTranslationsPart1';
import { ID_RECS_1_TO_20 } from '../data/idRecs1to20';
import { ID_RECS_21_TO_40 } from '../data/idRecs21to40';
import { ID_DEEP_STUDY_DATA } from '../data/idDeepStudy';
import { BEGINNER_GUIDE_ID_1_TO_20 } from '../data/beginnerGuideId1to20';
import { BEGINNER_GUIDE_ID_21_TO_40 } from '../data/beginnerGuideId21to40';
import { BEGINNER_GUIDE_EN_1_TO_20 } from '../data/beginnerGuideEn1to20';
import { BEGINNER_GUIDE_EN_21_TO_40 } from '../data/beginnerGuideEn21to40';
import {
  EN_INTRO_BEGINNER_MODULES,
  ID_INTRO_BEGINNER_MODULES,
  IntroBeginnerModule
} from '../data/introBeginnerData';

export type Language = 'en' | 'id';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, id: string) => string;
  actorLabel: (actor: AudienceType) => string;
  sections: SectionMeta[];
  recommendations: Recommendation[];
  introSlides: IntroSlide[];
  glossaryTerms: GlossaryTerm[];
  designatedOffences: { id: number; name: string; examples: string }[];
  deepStudyData: Record<number, DeepStudyMaterial>;
  beginnerGuides: Record<number, BeginnerGuide>;
  introBeginnerModules: Record<string, IntroBeginnerModule>;
}

const LANG_STORAGE_KEY = 'fatf_40_language_pref';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'en' || saved === 'id') return saved;
    } catch {
      // ignore
    }
    return 'id';
  });

  useEffect(() => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = (next: Language) => {
    setLangState(next);
  };

  const t = (en: string, id: string) => (lang === 'id' ? id : en);

  const actorLabel = (actor: AudienceType): string => {
    if (lang === 'en') return actor;
    switch (actor) {
      case 'Country':
        return 'Negara';
      case 'FI':
        return 'PJK (FI)';
      case 'DNFBP':
        return 'DNFBP';
      case 'VASP':
        return 'VASP (Kripto)';
      case 'NPO':
        return 'NPO (Yayasan)';
      case 'Competent Authority':
        return 'Otoritas Berwenang';
      default:
        return actor;
    }
  };

  const sections = useMemo<SectionMeta[]>(() => {
    if (lang === 'en') return SECTIONS;
    return SECTIONS.map((sec) => {
      const tr = ID_SECTIONS[sec.id];
      return tr
        ? {
            ...sec,
            title: tr.title,
            shortTitle: tr.shortTitle,
            description: tr.description
          }
        : sec;
    });
  }, [lang]);

  const recommendations = useMemo<Recommendation[]>(() => {
    if (lang === 'en') return RECOMMENDATIONS;
    const allIdRecs = { ...ID_RECS_1_TO_20, ...ID_RECS_21_TO_40 };
    return RECOMMENDATIONS.map((rec) => {
      const tr = allIdRecs[rec.id];
      if (!tr) return rec;
      return {
        ...rec,
        title: tr.title,
        essence: tr.essence,
        obligations: tr.obligations,
        inHighlights: tr.inHighlights ?? rec.inHighlights,
        thresholds: tr.thresholds,
        quiz: tr.quiz,
        revisionNote: tr.revisionNote ?? rec.revisionNote
      };
    });
  }, [lang]);

  const introSlides = useMemo<IntroSlide[]>(() => {
    return lang === 'id' ? ID_INTRO_SLIDES : INTRO_SLIDES;
  }, [lang]);

  const glossaryTerms = useMemo<GlossaryTerm[]>(() => {
    if (lang === 'en') return GLOSSARY_TERMS;
    return GLOSSARY_TERMS.map((gt) => {
      const tr = ID_GLOSSARY_TERMS[gt.id];
      if (!tr) return gt;
      return {
        ...gt,
        term: tr.term,
        shortDef: tr.shortDef,
        fullDef: tr.fullDef,
        subItems: tr.subItems ?? gt.subItems
      };
    });
  }, [lang]);

  const designatedOffences = useMemo(() => {
    return lang === 'id'
      ? ID_DESIGNATED_OFFENCES
      : DESIGNATED_CATEGORIES_OF_OFFENCES;
  }, [lang]);

  const deepStudyData = useMemo(() => {
    return lang === 'id' ? ID_DEEP_STUDY_DATA : DEEP_STUDY_DATA;
  }, [lang]);

  const beginnerGuides = useMemo<Record<number, BeginnerGuide>>(() => {
    return lang === 'id'
      ? { ...BEGINNER_GUIDE_ID_1_TO_20, ...BEGINNER_GUIDE_ID_21_TO_40 }
      : { ...BEGINNER_GUIDE_EN_1_TO_20, ...BEGINNER_GUIDE_EN_21_TO_40 };
  }, [lang]);

  const introBeginnerModules = useMemo<Record<string, IntroBeginnerModule>>(() => {
    return lang === 'id' ? ID_INTRO_BEGINNER_MODULES : EN_INTRO_BEGINNER_MODULES;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
        actorLabel,
        sections,
        recommendations,
        introSlides,
        glossaryTerms,
        designatedOffences,
        deepStudyData,
        beginnerGuides,
        introBeginnerModules
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
