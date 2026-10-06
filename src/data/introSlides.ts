import { IntroSlide } from '../types/fatf';

export const INTRO_SLIDES: IntroSlide[] = [
  {
    id: 'S0',
    stepNumber: '01',
    title: 'What is the FATF?',
    subtitle: 'The Global Standard-Setter Against Illicit Finance',
    essence: 'Established in 1989 by the G7 in Paris, the Financial Action Task Force (FATF) is an inter-governmental policy-making body that sets international standards to prevent Money Laundering (ML), Terrorist Financing (TF), and Proliferation Financing (PF).',
    keyPoints: [
      {
        heading: 'Money Laundering (ML)',
        detail: 'Processing criminal proceeds to disguise their illegal origin—moving dirty money through Placement, Layering, and Integration so criminals can enjoy illicit profits without jeopardising their source.'
      },
      {
        heading: 'Terrorist Financing (TF)',
        detail: 'Wilful provision or collection of funds or other assets—from either legitimate or illegitimate sources—with the intention or knowledge that they are to be used to support terrorist acts, terrorist organisations, or individual terrorists.'
      },
      {
        heading: 'Proliferation Financing (PF)',
        detail: 'Potential breach, non-implementation, or evasion of the targeted financial sanctions obligations referred to in Recommendation 7 aimed at preventing the proliferation of chemical, biological, or nuclear weapons of mass destruction (WMD).'
      }
    ],
    interactiveType: 'triad-cards',
    quiz: {
      q: 'How does Terrorist Financing (TF) fundamentally differ from Money Laundering (ML) regarding the source of funds?',
      options: [
        'TF funds can originate from completely legitimate sources as well as criminal ones, whereas ML always requires an underlying predicate crime.',
        'TF only applies to transactions above USD/EUR 15,000, whereas ML has no threshold.',
        'ML only applies to cash transactions, whereas TF only applies to wire transfers.',
        'TF requires a completed terrorist attack to be prosecuted, whereas ML does not.'
      ],
      answer: 0,
      explain: 'Under Recommendation 5, Terrorist Financing covers funds from both legitimate (e.g., salaries, charitable donations) and illegitimate sources, and requires no link to a specific completed terrorist act.'
    }
  },
  {
    id: 'S1',
    stepNumber: '02',
    title: 'Why the Recommendations Matter',
    subtitle: 'Global Network of 200+ Jurisdictions & Mutual Evaluations',
    essence: 'Endorsed by over 200 countries and jurisdictions through the FATF and 9 FATF-Style Regional Bodies (FSRBs), compliance is rigorously peer-reviewed through Mutual Evaluations assessing both Technical Compliance and Real-World Effectiveness.',
    keyPoints: [
      {
        heading: 'Global Reach (FATF + 9 FSRBs)',
        detail: '39 direct FATF members plus 9 regional bodies (APG, CFATF, EAG, ESAAMLG, GABAC, GAFILAT, GIABA, MENAFATF, MONEYVAL) bind over 200 jurisdictions to one unified rulebook.'
      },
      {
        heading: 'Mutual Evaluations (Dual Pillar)',
        detail: 'Peer assessments by FATF, FSRBs, IMF, and World Bank grade countries on Two Pillars: Technical Compliance (40 Recommendations rated C, LC, PC, or NC) and Effectiveness (11 Immediate Outcomes rated High, Substantial, Moderate, or Low).'
      },
      {
        heading: 'Grey List & Black List Consequences',
        detail: 'Jurisdictions with strategic deficiencies face ICRG monitoring ("Increased Monitoring / Grey List") or "High-Risk Jurisdictions Subject to a Call for Action / Black List" triggering enhanced due diligence and countermeasures under R.19.'
      }
    ],
    interactiveType: 'global-network',
    quiz: {
      q: 'What are the two core pillars evaluated during an FATF Mutual Evaluation of a country?',
      options: [
        'Technical Compliance (laws/rules against the 40 Recommendations) and Effectiveness (how well the system works in practice across 11 Immediate Outcomes).',
        'GDP Growth Rate and Total Banking Sector Assets.',
        'Number of Bank Branches and Number of Licensed Lawyers.',
        'Central Bank Interest Rates and Foreign Exchange Reserves.'
      ],
      answer: 0,
      explain: 'FATF Mutual Evaluations assess both Technical Compliance (whether the legal and institutional framework satisfies the 40 Recommendations) and Effectiveness (whether results are achieved in practice).'
    }
  },
  {
    id: 'S2',
    stepNumber: '03',
    title: 'A Short History of the Standards',
    subtitle: 'From 1990 Drug Proceeds to 2026 Modern Digital & Humanitarian Standards',
    essence: 'The FATF Standards have continuously evolved in response to emerging threats—from narcotics money laundering in 1990, to post-2001 terrorist financing Special Recommendations, to the unified 2012 40 Recommendations and modern 2022–2026 updates.',
    keyPoints: [
      {
        heading: '1990 → 1996 → 2001 → 2003',
        detail: 'Original 40 Recommendations (1990) targeted drug money laundering; broadened in 1996 beyond drugs; expanded in Oct 2001 with 8 (later 9) Special Recommendations on Terrorist Financing; comprehensively revised in 2003.'
      },
      {
        heading: '2012 Consolidation & RBA Anchor',
        detail: 'In February 2012, the 40 Recommendations and 9 Special Recommendations were merged into today’s 40 Recommendations, elevating the Risk-Based Approach (R.1) to the very first rule and adding Proliferation Financing (R.7).'
      },
      {
        heading: '2019–2026 Landmark Revisions',
        detail: 'Virtual Assets & VASPs (R.15, 2019); Beneficial Ownership transparency (R.24 in 2022, R.25 in 2023); Asset Recovery overhaul (R.4 & R.38, Nov 2023); Payment Transparency / ISO 20022 (R.16, June 2025); and UN Humanitarian Exemptions (INR.6, June 2026).'
      }
    ],
    interactiveType: 'history-timeline',
    quiz: {
      q: 'What happened to the 9 Special Recommendations on Terrorist Financing in the February 2012 revision?',
      options: [
        'They were fully integrated and merged into the unified 40 FATF Recommendations.',
        'They were repealed and replaced by voluntary banking guidelines.',
        'They were transferred exclusively to domestic tax authorities.',
        'They were separated into a standalone treaty managed only by Interpol.'
      ],
      answer: 0,
      explain: 'In February 2012, the 9 Special Recommendations (SR.I–SR.IX) were merged with the 40 Recommendations into one unified set of 40 FATF Recommendations.'
    }
  },
  {
    id: 'S3',
    stepNumber: '04',
    title: 'How to Read the Standards',
    subtitle: 'Structural Architecture, Binding Language & Legal Mechanisms',
    essence: 'To interpret any FATF obligation accurately, you must read three layers together: the Recommendation text, its Interpretive Note (IN), and the General Glossary—remembering that "should" always means "must".',
    keyPoints: [
      {
        heading: 'The 3-Layer Standard Architecture',
        detail: 'The Recommendations + the 29 Interpretive Notes + the applicable definitions in the Glossary together comprise the authoritative FATF Standards. Examples inside Interpretive Notes are illustrative guidance only.'
      },
      {
        heading: '"Should" = "Must"',
        detail: 'For the purposes of assessing compliance with the FATF Recommendations, the word "should" has the exact same mandatory meaning as "must".'
      },
      {
        heading: 'Law vs. Enforceable Means',
        detail: 'Basic obligations (CDD in R.10, record keeping in R.11, STR reporting in R.20) MUST be set out in Law (parliamentary legislation or judicial precedent). More detailed elements may be set in Law or Enforceable Means (binding regulations/guidelines backed by sanctions).'
      }
    ],
    interactiveType: 'architecture-layers',
    quiz: {
      q: 'In the text of the FATF Recommendations and Interpretive Notes, what does the word "should" mean for compliance assessments?',
      options: [
        'It has the exact same mandatory meaning as "must".',
        'It indicates an optional best practice that countries can ignore.',
        'It applies only to developed G7 economies.',
        'It means the requirement takes effect only after 10 years.'
      ],
      answer: 0,
      explain: 'Per the FATF Introduction: "For the purposes of assessing compliance with the FATF Recommendations, the word should has the same meaning as must."'
    }
  }
];
