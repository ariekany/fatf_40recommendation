export type SectionId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type AudienceType =
  | 'Country'
  | 'FI'
  | 'DNFBP'
  | 'VASP'
  | 'NPO'
  | 'Competent Authority';

export interface SectionMeta {
  id: SectionId;
  title: string;
  shortTitle: string;
  range: string;
  recIds: number[];
  color: string;
  bgTint: string;
  borderTint: string;
  textTint: string;
  description: string;
}

export interface ObligationItem {
  id: string;
  title: string;
  body: string;
  children?: string[];
}

export interface ThresholdItem {
  value: string;
  context: string;
}

export interface QuizQuestion {
  q?: string;
  question?: string;
  options: string[];
  answer?: number;
  explain?: string;
  correctIndex?: number;
  explanation?: string;
}

export type DiagramType =
  | 'r1-rba'
  | 'r3-predicates'
  | 'r6-tfs'
  | 'r10-cdd'
  | 'r16-wire'
  | 'r22-dnfbp'
  | 'r24-bo'
  | 'r29-fiu'
  | 'r32-cash'
  | 'r36-conventions'
  | 'r37-mla'
  | 'r40-coop'
  | 'mandate-pillars'
  | 'timeline'
  | 'architecture'
  | null;

export interface Recommendation {
  id: number;
  section: SectionId;
  title: string;
  oldNumber: string;
  interpretiveNote: boolean;
  audience: AudienceType[];
  essence: string;
  obligations: ObligationItem[];
  inHighlights?: string[];
  thresholds: ThresholdItem[];
  keyTerms: string[];
  related: number[];
  diagram: DiagramType;
  quiz: QuizQuestion;
  revisionNote?: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  shortDef: string;
  fullDef: string;
  category: 'Actor & Entity' | 'Core Concept' | 'Sanctions & Legal' | 'Compliance & Measure';
  relatedRecs: number[];
  subItems?: string[];
}

export interface IntroSlide {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  essence: string;
  keyPoints: { heading: string; detail: string }[];
  interactiveType:
    | 'triad-cards'
    | 'global-network'
    | 'history-timeline'
    | 'architecture-layers'
    | 'mandate-pillars'
    | 'timeline'
    | 'architecture';
  quiz: QuizQuestion;
}

export interface DeepStudyMaterial {
  recId: number;
  plainEnglishWhy: string;
  mondayMorningReality: string;
  criminalPlaybookAndRedFlags: string[];
  caseStudy: {
    title: string;
    jurisdictionAndYear: string;
    whatHappened: string;
    theBreach: string;
    consequencesAndLesson: string;
    assessorLens?: string;
  };
  assessorLens?: string;
}

export interface BeginnerGuide {
  recId: number;
  analogyTitle: string;
  analogyBody: string;
  storyTitle: string;
  storySteps: string[];
  jargonBuster: { term: string; simpleMeaning: string }[];
  misconception: { myth: string; reality: string };
}

export interface UserProgress {
  visitedIntro: string[];
  visitedRecs: number[];
  quizPassedRecs: number[];
  quizPassedIntro: string[];
  quizAnswers: Record<string, number>; // key: 'rec-10' or 'intro-S0'
  bookmarkedRecs: number[];
  completedQuickSessions?: number;
  lastQuickStudyDate?: string;
}
