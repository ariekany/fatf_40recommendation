import { Recommendation, SectionMeta } from '../types/fatf';

export const SECTIONS: SectionMeta[] = [
  {
    id: 'A',
    title: 'AML/CFT Policies and Coordination',
    shortTitle: 'Policies & Coordination',
    range: 'R.1 – R.2',
    recIds: [1, 2],
    color: '#134E4A',
    bgTint: 'bg-teal-950/5',
    borderTint: 'border-teal-900/25',
    textTint: 'text-teal-900',
    description: 'Assessing national & institutional ML/TF/PF risks, applying the Risk-Based Approach, and coordinating domestic policy & operational authorities.'
  },
  {
    id: 'B',
    title: 'Money Laundering and Confiscation',
    shortTitle: 'ML & Confiscation',
    range: 'R.3 – R.4',
    recIds: [3, 4],
    color: '#1E3A8A',
    bgTint: 'bg-blue-950/5',
    borderTint: 'border-blue-900/25',
    textTint: 'text-blue-900',
    description: 'Criminalising money laundering across 21 designated predicate categories and prioritising conviction and non-conviction-based asset recovery.'
  },
  {
    id: 'C',
    title: 'Terrorist Financing and Financing of Proliferation',
    shortTitle: 'TF & Proliferation',
    range: 'R.5 – R.8',
    recIds: [5, 6, 7, 8],
    color: '#881337',
    bgTint: 'bg-rose-950/5',
    borderTint: 'border-rose-900/25',
    textTint: 'text-rose-900',
    description: 'Criminalising terrorist financing, freezing terrorist & WMD proliferator assets without delay under UNSC resolutions, and safeguarding NPOs.'
  },
  {
    id: 'D',
    title: 'Preventive Measures',
    shortTitle: 'Preventive Measures',
    range: 'R.9 – R.23',
    recIds: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    color: '#065F46',
    bgTint: 'bg-emerald-950/5',
    borderTint: 'border-emerald-900/25',
    textTint: 'text-emerald-900',
    description: 'Customer Due Diligence, record keeping, PEPs, correspondent banking, MVTS, Virtual Assets, Payment Transparency, STRs, and DNFBP gatekeeper duties.'
  },
  {
    id: 'E',
    title: 'Transparency and Beneficial Ownership of Legal Persons and Arrangements',
    shortTitle: 'Beneficial Ownership',
    range: 'R.24 – R.25',
    recIds: [24, 25],
    color: '#4C1D95',
    bgTint: 'bg-violet-950/5',
    borderTint: 'border-violet-900/25',
    textTint: 'text-violet-900',
    description: 'Preventing the misuse of companies, foundations, and express trusts via multi-pronged beneficial ownership transparency and banning new bearer shares.'
  },
  {
    id: 'F',
    title: 'Powers and Responsibilities of Competent Authorities, and Other Institutional Measures',
    shortTitle: 'Competent Authorities',
    range: 'R.26 – R.35',
    recIds: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    color: '#92400E',
    bgTint: 'bg-amber-950/5',
    borderTint: 'border-amber-900/25',
    textTint: 'text-amber-900',
    description: 'Supervision of FIs & DNFBPs, the Financial Intelligence Unit (FIU), parallel financial investigations, law enforcement powers, cash couriers, and sanctions.'
  },
  {
    id: 'G',
    title: 'International Cooperation',
    shortTitle: 'International Cooperation',
    range: 'R.36 – R.40',
    recIds: [36, 37, 38, 39, 40],
    color: '#155E75',
    bgTint: 'bg-cyan-950/5',
    borderTint: 'border-cyan-900/25',
    textTint: 'text-cyan-900',
    description: 'Global treaties, rapid Mutual Legal Assistance (MLA), cross-border asset freezing & confiscation, extradition, and diagonal intelligence sharing.'
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 1,
    section: 'A',
    title: 'Assessing risks and applying a risk-based approach',
    oldNumber: 'New (2012)',
    interpretiveNote: true,
    audience: ['Country', 'FI', 'DNFBP'],
    essence: 'Know your risks first, then match the strength of your defences to the level of risk.',
    obligations: [
      {
        id: 'R1-1',
        title: 'National Risk Assessment & Coordination',
        body: 'Countries should identify, assess, and understand the money laundering and terrorist financing (ML/TF) risks for the country, and should take action, including designating an authority or mechanism to coordinate actions to assess risks, and apply resources, aimed at ensuring the risks are mitigated effectively.'
      },
      {
        id: 'R1-2',
        title: 'Proportionality: Enhanced vs. Simplified Measures',
        body: 'Based on that assessment, countries should apply a risk-based approach (RBA) to ensure that measures to prevent or mitigate ML/TF are commensurate with the risks identified. Where countries identify higher risks, they should ensure that their AML/CFT regime adequately addresses such risks. Where countries identify lower risks, they may decide to allow simplified measures under certain conditions (never where there is a suspicion of ML/TF).'
      },
      {
        id: 'R1-3',
        title: 'Proliferation Financing (PF) Risk Assessment',
        body: 'Countries should also identify, assess, and understand the proliferation financing risks for the country. In the context of R.1, "proliferation financing risk" refers strictly and only to the potential breach, non-implementation, or evasion of the targeted financial sanctions obligations referred to in Recommendation 7.'
      },
      {
        id: 'R1-4',
        title: 'Institutional Risk Assessment by FIs & DNFBPs',
        body: 'Countries should require financial institutions and DNFBPs to identify, assess, and take effective action to mitigate their money laundering, terrorist financing, and proliferation financing risks.'
      }
    ],
    inHighlights: [
      'RBA grants flexibility and discretion appropriate to sector size and capacity—not a "zero-failure" regime, but a proportionate resource allocation framework.',
      'Documented institutional risk assessments may be waived by competent authorities where specific sector risks are already clearly identified and understood.',
      'Countries may exempt specific entities/activities from AML/CFT requirements only in strictly limited and justified circumstances where proven low risk exists.',
      'Proliferation financing risk rules NEVER allow simplified measures or exemptions from full implementation of R.7 targeted financial sanctions (freezing is strict liability).'
    ],
    thresholds: [],
    keyTerms: ['rba', 'dnfbp', 'should-means-must'],
    related: [7, 10, 15, 19, 26],
    diagram: 'r1-rba',
    quiz: {
      q: 'Under Recommendation 1, when may countries or financial institutions permit simplified AML/CFT measures?',
      options: [
        'Where risks have been assessed as lower AND there is no suspicion of money laundering or terrorist financing.',
        'Whenever a customer has held an account for more than 12 months.',
        'For any transaction involving Targeted Financial Sanctions under Recommendation 7.',
        'Whenever a suspicion of money laundering involves less than USD/EUR 15,000.'
      ],
      answer: 0,
      explain: 'Simplified measures are permitted only where lower risks have been identified through an adequate risk assessment, and are strictly prohibited whenever there is a suspicion of ML/TF or for R.7 TFS obligations.'
    }
  },
  {
    id: 2,
    section: 'A',
    title: 'National cooperation and coordination',
    oldNumber: 'R.31',
    interpretiveNote: true,
    audience: ['Country', 'Competent Authority'],
    essence: 'One country, one team — a national policy hub that makes all domestic authorities coordinate and share intelligence while respecting data privacy compatibility.',
    obligations: [
      {
        id: 'R2-1',
        title: 'Risk-Informed National AML/CFT/CPF Policies',
        body: 'Countries should have national AML/CFT/CPF policies, informed by the risks identified, which should be regularly reviewed, and should designate an authority or have a coordination or other mechanism that is responsible for such policies.'
      },
      {
        id: 'R2-2',
        title: 'Policy & Operational Domestic Cooperation',
        body: 'Countries should ensure that policy-makers, the financial intelligence unit (FIU), law enforcement authorities, supervisors and other relevant competent authorities, at the policy-making and operational levels, have effective mechanisms in place which enable them to cooperate, and, where appropriate, coordinate and exchange information domestically with each other concerning the development and implementation of policies and activities to combat ML, TF and PF.'
      },
      {
        id: 'R2-3',
        title: 'Compatibility with Data Protection & Privacy Rules',
        body: 'This should include cooperation and coordination between relevant authorities to ensure the compatibility of AML/CFT/CPF requirements with Data Protection and Privacy rules and other similar provisions (e.g., data security/localisation).'
      }
    ],
    inHighlights: [
      'Inter-agency frameworks may be managed by a single overarching body or separate mechanisms for ML, TF, and PF, led by a designated authority.',
      'Participants typically include central government ministries, law enforcement, prosecution, FIU, intelligence agencies, customs, financial supervisors, SRBs, tax authorities, import-export control, and company/BO registries.',
      'Operational cooperation tools include clearly defined agency roles, standardised information formats, secure communication channels, joint investigative teams, and shared data platforms.'
    ],
    thresholds: [],
    keyTerms: ['fiu', 'srb', 'rba'],
    related: [1, 29, 40],
    diagram: null,
    quiz: {
      q: 'Recommendation 2 explicitly requires relevant authorities to coordinate so that AML/CFT/CPF requirements are compatible with:',
      options: [
        'Data Protection and Privacy rules and similar provisions (such as data security and localisation).',
        'Foreign bank secrecy statutes that prohibit sharing beneficial ownership records.',
        'Corporate dividend distribution schedules.',
        'Municipal zoning ordinances.'
      ],
      answer: 0,
      explain: 'R.2 requires cooperation between AML/CFT authorities and data protection authorities to ensure AML/CFT/CPF compliance and information sharing work harmoniously with data protection and privacy rules.'
    }
  },
  {
    id: 3,
    section: 'B',
    title: 'Money laundering offence',
    oldNumber: 'R.1 & R.2',
    interpretiveNote: true,
    audience: ['Country'],
    essence: 'Make laundering a crime — rooted in the Vienna & Palermo Conventions — covering all serious crimes and the 21 designated predicate categories.',
    obligations: [
      {
        id: 'R3-1',
        title: 'Criminalisation under Vienna & Palermo Conventions',
        body: 'Countries should criminalise money laundering on the basis of the United Nations Convention against Illicit Traffic in Narcotic Drugs and Psychotropic Substances, 1988 (the Vienna Convention) and the United Nations Convention against Transnational Organized Crime, 2000 (the Palermo Convention).'
      },
      {
        id: 'R3-2',
        title: 'Widest Range of Predicate Offences',
        body: 'Countries should apply the crime of money laundering to all serious offences, with a平 view to including the widest range of predicate offences.'
      }
    ],
    inHighlights: [
      'Predicate offences may be described by: (a) all offences, (b) a threshold linked to a category of serious offences or penalty of imprisonment (>1 year max, or >6 months min), (c) a list of predicate offences, or (d) a combination.',
      'Whichever approach is adopted, each country must at a minimum include a range of offences within each of the 21 FATF Designated Categories of Offences.',
      'Predicate offences extend to conduct that occurred in another country which constitutes an offence in that country and would have constituted a predicate offence domestically.',
      'Applies to any type of property, regardless of its value, that directly or indirectly represents the proceeds of crime.',
      'Proving that property is the proceeds of crime should NOT require a criminal conviction for the underlying predicate offence.',
      'Criminal, civil, or administrative liability and dissuasive sanctions must apply to legal persons as well as natural persons; includes ancillary offences (attempt, aiding/abetting, conspiracy, counselling).'
    ],
    thresholds: [
      { value: 'Max > 1 Year (or Min > 6 Months)', context: 'Imprisonment penalty standard when a country uses the threshold approach to define predicate offences' },
      { value: '21 Categories', context: 'Mandatory Designated Categories of Predicate Offences' }
    ],
    keyTerms: ['designated-categories', 'proceeds-criminal-property'],
    related: [4, 5, 20, 36],
    diagram: 'r3-predicates',
    quiz: {
      q: 'Under Recommendation 3, if a country uses a "threshold approach" to define money laundering predicate offences, what minimum penalty threshold must it capture?',
      options: [
        'All offences punishable by a maximum penalty of more than one year imprisonment (or a minimum penalty of more than six months).',
        'Only offences punishable by life imprisonment.',
        'Only offences where stolen funds exceed USD/EUR 1,000,000.',
        'Only offences where a prior predicate conviction has already been secured in court.'
      ],
      answer: 0,
      explain: 'INR.3 specifies that threshold systems must cover all offences punishable by a maximum penalty of more than 1 year (or minimum > 6 months), and proving ML does not require a prior predicate conviction.'
    }
  },
  {
    id: 4,
    section: 'B',
    title: 'Confiscation and provisional measures',
    oldNumber: 'R.3',
    interpretiveNote: true,
    audience: ['Country', 'Competent Authority'],
    essence: 'Take the profit out of crime — prioritise asset recovery to trace, suspend, freeze, seize, and confiscate illicit wealth with or without a conviction.',
    obligations: [
      {
        id: 'R4-1',
        title: 'National Priority on Asset Recovery',
        body: 'Countries should have policies and operational frameworks that prioritise asset recovery in both the domestic and international contexts.'
      },
      {
        id: 'R4-2',
        title: 'Comprehensive Provisional & Confiscation Toolkit',
        body: 'Countries should have measures that enable their competent authorities to: (a) identify, trace and evaluate criminal property and property of corresponding value; (b) suspend or withhold consent to a transaction; (c) take any appropriate investigative measures; (d) expeditiously freeze and seize criminal property and property of corresponding value; (e) confiscate criminal property and property of corresponding value through conviction-based confiscation; (f) confiscate criminal property without requiring a criminal conviction (non-conviction-based confiscation); (g) enforce confiscation orders; and (h) effectively manage frozen, seized or confiscated property.'
      }
    ],
    inHighlights: [
      'Reach extends to property held by third parties who are not bona fide purchasers for value (e.g., property under effective control of the defendant, gifted, or transferred significantly above/below market value).',
      'FIU must have authority to suspend or withhold consent to a suspicious transaction for a defined maximum duration to allow analysis and provisional action.',
      'Freezing and seizing must be able to occur ex parte and without prior notice to prevent dissipation (subject to judicial review).',
      'Countries should have mechanisms to void contracts/transfers where parties knew or should have known they would prejudice the State’s ability to recover criminal property.',
      'Countries should consider establishing an asset recovery fund (for law enforcement, health, education) and mechanisms to return confiscated property to legitimate owners or compensate victims.'
    ],
    revisionNote: 'Substantially revised in November 2023 to elevate asset recovery as a strategic priority and mandate non-conviction-based confiscation and FIU transaction suspension powers.',
    thresholds: [],
    keyTerms: ['freeze-seize-confiscate', 'asset-recovery', 'proceeds-criminal-property'],
    related: [3, 30, 31, 32, 38],
    diagram: null,
    quiz: {
      q: 'What is "non-conviction-based confiscation" under Recommendation 4?',
      options: [
        'Confiscation of criminal property through judicial proceedings without requiring a criminal conviction of the offender.',
        'Automatic confiscation by a commercial bank for late loan payments.',
        'Confiscation limited strictly to physical cash under USD/EUR 1,000.',
        'Confiscation that can only be ordered after the offender serves a 10-year prison sentence.'
      ],
      answer: 0,
      explain: 'Non-conviction-based confiscation enables courts/authorities to confiscate criminal property without a criminal conviction (e.g., when the offender has died, fled, is immune, or is unknown, or where property is proven of criminal origin).'
    }
  },
  {
    id: 5,
    section: 'C',
    title: 'Terrorist financing offence',
    oldNumber: 'SR.II',
    interpretiveNote: true,
    audience: ['Country'],
    essence: 'Criminalise giving or collecting money or assets for terrorist acts, terrorist organisations, or individual terrorists — even if no attack ever occurs.',
    obligations: [
      {
        id: 'R5-1',
        title: 'Criminalisation under the 1999 TF Convention',
        body: 'Countries should criminalise terrorist financing on the basis of the International Convention for the Suppression of the Financing of Terrorism, 1999.'
      },
      {
        id: 'R5-2',
        title: 'Acts, Organisations & Individual Terrorists (No Link to Specific Act Required)',
        body: 'Countries should criminalise not only the financing of terrorist acts, but also the financing of terrorist organisations and individual terrorists even in the absence of a link to a specific terrorist act or acts.'
      },
      {
        id: 'R5-3',
        title: 'TF as Money Laundering Predicate Offence',
        body: 'Countries should ensure that such offences are designated as money laundering predicate offences.'
      }
    ],
    inHighlights: [
      'Covers wilful provision or collection of funds or other assets, directly or indirectly, from legitimate OR illegitimate sources.',
      'Explicitly includes financing the travel of individuals who travel to a State other than their residence/nationality for the purpose of perpetration, planning, preparation of, or participation in terrorist acts, or providing/receiving terrorist training (Foreign Terrorist Fighters).',
      'Does not require that the funds or other assets were actually used to carry out or attempt a terrorist act, nor be linked to a specific terrorist act.',
      'Applies regardless of whether the person alleged to have committed the offence is in the same country or a different country from the one in which the terrorist/organisation is located.',
      'Criminalising TF solely on the basis of aiding and abetting, attempt, or conspiracy is NOT sufficient to comply with R.5.'
    ],
    thresholds: [],
    keyTerms: ['designated-categories', 'proceeds-criminal-property'],
    related: [3, 6, 8, 20, 36],
    diagram: null,
    quiz: {
      q: 'To establish a Terrorist Financing offence under Recommendation 5, must prosecutors prove that the funds were linked to or actually used in a specific terrorist attack?',
      options: [
        'No — financing a terrorist organisation or individual terrorist is an offence even in the complete absence of a link to a specific terrorist act.',
        'Yes — an attack must have been completed or attempted using those exact funds.',
        'Yes — unless the funds came from narcotics trafficking.',
        'Only if the amount exceeds USD/EUR 15,000.'
      ],
      answer: 0,
      explain: 'R.5 explicitly mandates that TF offences should not require that the funds were actually used to carry out or attempt a terrorist act, nor be linked to a specific terrorist act.'
    }
  },
  {
    id: 6,
    section: 'C',
    title: 'Targeted financial sanctions related to terrorism and terrorist financing',
    oldNumber: 'SR.III',
    interpretiveNote: true,
    audience: ['Country', 'FI', 'DNFBP', 'Competent Authority'],
    essence: 'Freeze, without delay, the funds and assets of anyone designated by the UN Security Council (1267/1988) or domestically (1373) as linked to terrorism.',
    obligations: [
      {
        id: 'R6-1',
        title: 'Freeze Without Delay & Prohibit Making Funds Available',
        body: 'Countries should implement targeted financial sanctions regimes to comply with United Nations Security Council resolutions relating to the prevention and suppression of terrorism and terrorist financing. The resolutions require countries to freeze without delay the funds or other assets of, and to ensure that no funds or other assets are made available, directly or indirectly, to or for the benefit of, any person or entity designated.'
      },
      {
        id: 'R6-2',
        title: 'Two Designation Tracks: UNSC (1267/1988) & Domestic/Third-Country (1373)',
        body: 'Applies to any person or entity: (i) designated by, or under the authority of, the UN Security Council under Chapter VII of the Charter of the United Nations, including in accordance with resolution 1267 (1999) and its successor resolutions; or (ii) designated by that country pursuant to resolution 1373 (2001).'
      }
    ],
    inHighlights: [
      'Evidentiary standard for designation is "reasonable grounds" or "reasonable basis" to suspect or believe a person/entity meets the criteria—NOT conditional on the existence of a criminal proceeding.',
      '"Without delay" means ideally within a matter of hours of a designation by the UNSC or its Committees.',
      'Freezing obligation extends to all funds/assets owned or controlled (wholly or jointly, directly or indirectly) by designated persons, and funds derived or generated from them—not just those tied to a specific plot.',
      'Designations must be communicated immediately to FIs and DNFBPs, which must report frozen assets and attempted transactions to competent authorities.',
      'Must include publicly known procedures for de-listing, unfreezing false positives (persons inadvertently affected with the same/similar name), and authorising access for basic expenses.',
      'June 2026 Revision (Humanitarian Exemptions): Incorporating UNSCR 2664 (2022), 2761 (2024), and 2615 (2021)—processing or payment of funds, economic resources, or provision of goods/services necessary to ensure timely delivery of humanitarian assistance or support basic human needs by permitted humanitarian actors is permitted and does not violate asset freeze/prohibition rules.'
    ],
    revisionNote: 'Updated June 2026 to integrate UN Security Council humanitarian exemptions (UNSCR 2664, 2761, 2615) ensuring legitimate humanitarian aid delivery is not impeded by TFS asset freezes.',
    thresholds: [
      { value: 'Without Delay (Hours)', context: 'Timeframe to freeze assets upon UNSC or domestic designation' }
    ],
    keyTerms: ['designated-person', 'without-delay', 'freeze-seize-confiscate'],
    related: [5, 7, 8, 16, 35],
    diagram: 'r6-tfs',
    quiz: {
      q: 'What evidentiary standard applies when a country designates a person or entity under UNSCR 1373 pursuant to Recommendation 6?',
      options: [
        '"Reasonable grounds" or "reasonable basis" to suspect or believe the designation criteria are met, without requiring a criminal proceeding.',
        'Proof beyond a reasonable doubt following a completed criminal trial.',
        'A signed confession from the designated individual.',
        'Prior approval from the commercial bank holding the account.'
      ],
      answer: 0,
      explain: 'INR.6 specifies that designations operate on a preventative "reasonable grounds/basis" standard and must not be conditional upon the existence of a criminal investigation, prosecution, or conviction.'
    }
  },
  {
    id: 7,
    section: 'C',
    title: 'Targeted financial sanctions related to proliferation',
    oldNumber: 'New (2012)',
    interpretiveNote: true,
    audience: ['Country', 'FI', 'DNFBP', 'Competent Authority'],
    essence: 'Freeze without delay the funds and assets of UN-designated persons and entities linked to the proliferation of Weapons of Mass Destruction (WMD).',
    obligations: [
      {
        id: 'R7-1',
        title: 'UNSC WMD Proliferation Sanctions Implementation',
        body: 'Countries should implement targeted financial sanctions to comply with United Nations Security Council resolutions relating to the prevention, suppression and disruption of proliferation of weapons of mass destruction and its financing.'
      },
      {
        id: 'R7-2',
        title: 'Freeze Without Delay & Prohibit Funds Availability',
        body: 'These resolutions require countries to freeze without delay the funds or other assets of, and to ensure that no funds or other assets are made available, directly or indirectly, to or for the benefit of, any person or entity designated by, or under the authority of, the United Nations Security Council under Chapter VII of the Charter of the United Nations.'
      }
    ],
    inHighlights: [
      'Focused specifically on UNSC Chapter VII designations: DPRK regime (Resolution 1718 (2006) and successor resolutions) and Iran regime (Resolution 1737 (2006), continued by Resolution 2231 (2015)).',
      'Requires freezing without delay by all natural and legal persons within the country, extending to all owned/controlled assets and derived funds.',
      'Permits specific authorised payments due under contracts entered into prior to the listing of such person/entity, provided the contract is not related to prohibited items, designated persons do not receive payment, and advance notice is given to the relevant UN Sanctions Committee.',
      'Provides de-listing petition routes via the UN Focal Point for De-listing (Resolution 1730) and prompt unfreezing for false positives.'
    ],
    thresholds: [
      { value: 'Without Delay (Hours)', context: 'Mandatory freeze speed upon UNSC 1718 / 2231 Committee designation' }
    ],
    keyTerms: ['designated-person', 'without-delay', 'freeze-seize-confiscate'],
    related: [1, 2, 6, 15, 16, 35],
    diagram: 'r6-tfs',
    quiz: {
      q: 'According to Recommendation 1 and Recommendation 7, how is "Proliferation Financing risk" defined within the FATF Standards?',
      options: [
        'Strictly and only as the potential breach, non-implementation, or evasion of the targeted financial sanctions obligations referred to in Recommendation 7.',
        'Any international trade transaction involving dual-use industrial electronics.',
        'Any cross-border wire transfer exceeding USD/EUR 15,000.',
        'Domestic arms manufacturing licensed by a national Ministry of Defence.'
      ],
      answer: 0,
      explain: 'In the context of R.1 and R.7, proliferation financing risk refers strictly and only to the potential breach, non-implementation, or evasion of the UNSC targeted financial sanctions under R.7.'
    }
  },
  {
    id: 8,
    section: 'C',
    title: 'Non-profit organisations',
    oldNumber: 'SR.VIII',
    interpretiveNote: true,
    audience: ['Country', 'NPO', 'Competent Authority'],
    essence: 'Protect charities from terrorist abuse with a scalpel, not a hammer — applying focused, proportionate, risk-based measures without disrupting legitimate humanitarian work.',
    obligations: [
      {
        id: 'R8-1',
        title: 'Identify Functional NPOs & Assess TF Risks',
        body: 'Countries should review the adequacy of laws and regulations that relate to non-profit organisations which the country has identified as being vulnerable to terrorist financing abuse. Countries should identify the organisations which fall within the FATF definition of non-profit organisations and assess their terrorist financing risks.'
      },
      {
        id: 'R8-2',
        title: 'Focused, Proportionate & Risk-Based Measures (No Undue Disruption)',
        body: 'Countries should have in place focused, proportionate and risk-based measures, without unduly disrupting or discouraging legitimate NPO activities, in line with the risk-based approach.'
      },
      {
        id: 'R8-3',
        title: 'Three Vectors of Terrorist Abuse to Prevent',
        body: 'The purpose of these measures is to protect such organisations from terrorist financing abuse, including: (a) by terrorist organisations posing as legitimate entities; (b) to exploit legitimate entities as conduits for terrorist financing, including for the purpose of escaping asset-freezing measures; and (c) to conceal or obscure the clandestine diversion of funds intended for legitimate purposes to terrorist organisations.'
      }
    ],
    inHighlights: [
      'FATF functional definition: a legal person or arrangement or organisation that primarily engages in raising or disbursing funds for charitable, religious, cultural, educational, social or fraternal purposes, or for the carrying out of other types of "good works".',
      'Not all NPOs are high-risk; many represent low risk. Countries must NOT treat all NPOs as high-risk or apply blanket burdensome rules.',
      'NPOs are NOT reporting entities and should NOT be required to conduct Customer Due Diligence (CDD) on their donors or beneficiaries.',
      'Four pillars of effective approach: (a) sustained outreach to NPOs and donors, (b) targeted risk-based oversight/monitoring, (c) effective information gathering and investigation, and (d) capacity to respond to international requests.'
    ],
    revisionNote: 'Revised in November 2023 to prevent over-regulation and "de-risking" of legitimate NPOs and explicitly state that NPOs are not reporting entities and do not conduct CDD.',
    thresholds: [],
    keyTerms: ['npo', 'rba'],
    related: [1, 5, 6],
    diagram: null,
    quiz: {
      q: 'Under Recommendation 8, are Non-Profit Organisations (NPOs) considered AML/CFT "reporting entities" required to perform Customer Due Diligence (CDD)?',
      options: [
        'No — NPOs are not reporting entities, should not be required to conduct CDD, and must be overseen with focused, proportionate risk-based measures.',
        'Yes — every charity must perform full CDD on every beneficiary receiving food aid.',
        'Yes — all NPOs are classified as Financial Institutions under FATF rules.',
        'Only religious NPOs are exempt; educational NPOs must file STRs.'
      ],
      answer: 0,
      explain: 'INR.8 explicitly clarifies that NPOs are not reporting entities, should not be required to conduct CDD, and measures must be focused and proportionate so legitimate charitable activities are not unduly disrupted.'
    }
  },
  {
    id: 9,
    section: 'D',
    title: 'Financial institution secrecy laws',
    oldNumber: 'R.4',
    interpretiveNote: false,
    audience: ['Country', 'FI'],
    essence: 'Banking secrecy can never be used as an excuse to block AML/CFT compliance or information sharing.',
    obligations: [
      {
        id: 'R9-1',
        title: 'Override Secrecy Laws that Inhibit FATF Implementation',
        body: 'Countries should ensure that financial institution secrecy laws do not inhibit implementation of the FATF Recommendations.'
      }
    ],
    inHighlights: [
      'Applies across all areas where information access or sharing is required: competent authorities accessing records (R.27, R.29, R.31), international cooperation (R.37, R.40), group-wide information sharing (R.18), correspondent banking (R.13), third-party reliance (R.17), and wire transfer transparency (R.16).'
    ],
    thresholds: [],
    keyTerms: ['law-vs-enforceable-means', 'financial-group'],
    related: [10, 11, 16, 18, 29, 31, 37, 40],
    diagram: null,
    quiz: {
      q: 'If a country’s commercial banking statute contains strict customer secrecy provisions that conflict with FIU access to transaction records, what does Recommendation 9 require?',
      options: [
        'The country must ensure that financial institution secrecy laws do not inhibit implementation of the FATF Recommendations.',
        'The FIU must obtain written consent from the suspected money launderer before viewing the account.',
        'The bank may refuse to file Suspicious Transaction Reports to protect client privacy.',
        'Secrecy laws take precedence for accounts over USD/EUR 1,000,000.'
      ],
      answer: 0,
      explain: 'Recommendation 9 is absolute: financial institution secrecy laws must never inhibit the implementation of any FATF Recommendation.'
    }
  },
  {
    id: 10,
    section: 'D',
    title: 'Customer due diligence',
    oldNumber: 'R.5',
    interpretiveNote: true,
    audience: ['FI', 'DNFBP'],
    essence: 'No anonymous accounts; know exactly who your customer is and the real human beneficial owner behind them — and keep monitoring throughout the relationship.',
    obligations: [
      {
        id: 'R10-1',
        title: 'Prohibition of Anonymous & Fictitious Accounts',
        body: 'Financial institutions should be prohibited from keeping anonymous accounts or accounts in obviously fictitious names.'
      },
      {
        id: 'R10-2',
        title: 'Four Mandatory CDD Triggers',
        body: 'Financial institutions should be required to undertake customer due diligence (CDD) measures when: (i) establishing business relations; (ii) carrying out occasional transactions: (a) above the applicable designated threshold (USD/EUR 15,000), or (b) that are wire transfers in the circumstances covered by the Interpretive Note to Recommendation 16; (iii) there is a suspicion of money laundering or terrorist financing; or (iv) the financial institution has doubts about the veracity or adequacy of previously obtained customer identification data.'
      },
      {
        id: 'R10-3',
        title: 'The Four Core CDD Measures (Set Out in Law)',
        body: 'The principle that financial institutions should conduct CDD should be set out in law. The CDD measures to be taken are as follows: (a) Identifying the customer and verifying that customer’s identity using reliable, independent source documents, data or information; (b) Identifying the beneficial owner, and taking reasonable measures to verify the identity of the beneficial owner, such that the financial institution is satisfied that it knows who the beneficial owner is (including understanding the ownership and control structure of legal persons and arrangements); (c) Understanding and, as appropriate, obtaining information on the purpose and intended nature of the business relationship; (d) Conducting ongoing due diligence on the business relationship and scrutiny of transactions undertaken throughout the course of that relationship to ensure that the transactions being conducted are consistent with the institution’s knowledge of the customer, their business and risk profile, including, where necessary, the source of funds.'
      },
      {
        id: 'R10-4',
        title: 'Timing of Verification, Failure to Complete CDD & Existing Customers',
        body: 'FIs should verify the identity of the customer and beneficial owner before or during the course of establishing a business relationship or conducting occasional transactions (or complete verification as soon as reasonably practicable where ML/TF risks are effectively managed and essential not to interrupt normal conduct of business). Where the FI is unable to comply with (a)–(c), it should be required NOT to open the account, NOT to commence business relations or NOT to perform the transaction; or should be required to terminate the business relationship; and should consider making a suspicious transaction report (STR). Requirements apply to all new customers and to existing customers on the basis of materiality and risk.'
      }
    ],
    inHighlights: [
      'CDD & Tipping-Off Rule: Where an FI forms a suspicion of ML/TF and reasonably believes performing the CDD process will tip off the customer, it is permitted NOT to pursue the CDD process, and instead should file an STR.',
      'Legal Person Beneficial Ownership 3-Step Cascade: (i.i) Identity of natural person(s) who ultimately have a controlling ownership interest (e.g., ≥25% threshold); (i.ii) To the extent there is doubt or no natural person exerts control through ownership interests, the natural person(s) exercising control through other means; (i.iii) Where no natural person is identified under (i.i) or (i.ii), the natural person who holds the position of senior managing official.',
      'Legal Arrangements (Trusts) BO: Identify the settlor, the trustee(s), the protector (if any), the beneficiaries or class of beneficiaries, and any other natural person exercising ultimate effective control.',
      'Life Insurance Beneficiaries: Take the name of a specifically named beneficiary (or sufficient info for a designated class/characteristics) as soon as identified; verify the beneficiary’s identity at the time of payout.',
      'Enhanced vs. Simplified CDD: Higher risk requires Enhanced CDD (additional customer info, senior management approval, source of funds/wealth, enhanced monitoring). Lower risk allows Simplified CDD (never acceptable if suspicion of ML/TF exists).'
    ],
    thresholds: [
      { value: 'USD/EUR 15,000', context: 'Occasional transactions threshold (single or linked operations)' },
      { value: '25% Ownership', context: 'Illustrative controlling ownership threshold example for Legal Person BO' },
      { value: 'USD/EUR 1,000 /yr (or 2,500 single)', context: 'Illustrative low-risk life insurance premium example in INR.10' }
    ],
    keyTerms: ['cdd', 'beneficial-owner', 'rba', 'str', 'law-vs-enforceable-means'],
    related: [1, 11, 12, 16, 17, 20, 22, 24, 25],
    diagram: 'r10-cdd',
    quiz: {
      q: 'What should a financial institution do if it suspects ML/TF during onboarding, and reasonably believes that continuing the CDD verification process would tip off the customer?',
      options: [
        'It is permitted not to pursue the CDD process, and instead should file a Suspicious Transaction Report (STR) with the FIU.',
        'It must confront the customer directly and demand a notarized explanation.',
        'It must open the account anyway and wait 5 years before reporting.',
        'It should apply Simplified Due Diligence to avoid alerting the customer.'
      ],
      answer: 0,
      explain: 'INR.10 explicitly provides that if performing CDD would tip off a suspected customer, the FI is permitted not to complete CDD and should instead file an STR.'
    }
  },
  {
    id: 11,
    section: 'D',
    title: 'Record keeping',
    oldNumber: 'R.10',
    interpretiveNote: false,
    audience: ['FI', 'DNFBP'],
    essence: 'Write it down and keep it for at least 5 years — records must allow investigators to reconstruct every individual transaction for court.',
    obligations: [
      {
        id: 'R11-1',
        title: '5-Year Transaction Record Retention',
        body: 'Financial institutions should be required to maintain, for at least five years, all necessary records on transactions, both domestic and international, to enable them to comply swiftly with information requests from the competent authorities. Such records must be sufficient to permit reconstruction of individual transactions (including the amounts and types of currency involved, if any) so as to provide, if necessary, evidence for prosecution of criminal activity.'
      },
      {
        id: 'R11-2',
        title: '5-Year CDD, Account File & Analysis Record Retention',
        body: 'Financial institutions should be required to keep all records obtained through CDD measures (e.g., copies or records of official identification documents like passports, identity cards, driving licences or similar documents), account files and business correspondence, including the results of any analysis undertaken (e.g., inquiries to establish the background and purpose of complex, unusual large transactions), for at least five years after the business relationship is ended, or after the date of the occasional transaction.'
      },
      {
        id: 'R11-3',
        title: 'Mandated by Law & Swiftly Accessible',
        body: 'Financial institutions should be required by law to maintain records on transactions and information obtained through the CDD measures. The CDD information and the transaction records should be available to domestic competent authorities upon appropriate authority.'
      }
    ],
    thresholds: [
      { value: 'At least 5 Years', context: 'Transaction records (from transaction date) AND CDD/account records (after relationship ends or occasional transaction date)' }
    ],
    keyTerms: ['cdd', 'law-vs-enforceable-means'],
    related: [10, 16, 17, 22, 29, 31],
    diagram: null,
    quiz: {
      q: 'For how long must a financial institution retain CDD identification records and account files under Recommendation 11?',
      options: [
        'At least 5 years after the business relationship has ended (or after the date of an occasional transaction).',
        'At least 6 months from the date the account was opened.',
        '2 years from the customer’s last login.',
        'Only while the account has a positive balance.'
      ],
      answer: 0,
      explain: 'R.11 requires CDD records, account files, business correspondence, and analysis results to be retained for at least 5 years after the business relationship ends (and transaction records for at least 5 years after the transaction).'
    }
  },
  {
    id: 12,
    section: 'D',
    title: 'Politically exposed persons',
    oldNumber: 'R.6',
    interpretiveNote: true,
    audience: ['FI', 'DNFBP'],
    essence: 'Prominent public power carries corruption risk — foreign PEPs always require enhanced measures, and domestic/international-org PEPs require them when higher-risk.',
    obligations: [
      {
        id: 'R12-1',
        title: 'Foreign PEPs: Mandatory Enhanced Measures (Beyond Normal CDD)',
        body: 'Financial institutions should be required, in relation to foreign politically exposed persons (PEPs) (whether as customer or beneficial owner), in addition to performing normal customer due diligence measures, to: (a) have appropriate risk-management systems to determine whether the customer or the beneficial owner is a politically exposed person; (b) obtain senior management approval for establishing (or continuing, for existing customers) such business relationships; (c) take reasonable measures to establish the source of wealth and source of funds; and (d) conduct enhanced ongoing monitoring of the business relationship.'
      },
      {
        id: 'R12-2',
        title: 'Domestic & International Organisation PEPs',
        body: 'Financial institutions should be required to take reasonable measures to determine whether a customer or beneficial owner is a domestic PEP or a person who is or has been entrusted with a prominent function by an international organisation. In cases of a higher risk business relationship with such persons, financial institutions should be required to apply the measures referred to in paragraphs (b), (c) and (d).'
      },
      {
        id: 'R12-3',
        title: 'Extension to Family Members & Close Associates',
        body: 'The requirements for all types of PEP should also apply to family members or close associates of such PEPs.'
      }
    ],
    inHighlights: [
      'Life Insurance Policies: FIs should take reasonable measures to determine whether the beneficiaries and/or, where required, the beneficial owner of the beneficiary, are PEPs. This must occur, at the latest, at the time of the payout.',
      'Where higher risks are identified on a life insurance policy with a PEP beneficiary, FIs must inform senior management before the payout of the policy proceeds, conduct enhanced scrutiny on the whole business relationship with the policyholder, and consider making an STR.'
    ],
    thresholds: [],
    keyTerms: ['pep', 'cdd', 'beneficial-owner'],
    related: [10, 18, 20, 22],
    diagram: null,
    quiz: {
      q: 'Which two financial origins must a financial institution take reasonable measures to establish when onboarding a foreign Politically Exposed Person (PEP)?',
      options: [
        'Source of wealth AND source of funds.',
        'Credit bureau score AND mortgage history.',
        'Employer tax identification number AND utility bill.',
        'Sovereign bond rating AND central bank reserve ratio.'
      ],
      answer: 0,
      explain: 'Under R.12(c), for foreign PEPs (and higher-risk domestic/international-org PEPs), institutions must take reasonable measures to establish both the source of wealth and the source of funds.'
    }
  },
  {
    id: 13,
    section: 'D',
    title: 'Correspondent banking',
    oldNumber: 'R.7',
    interpretiveNote: true,
    audience: ['FI'],
    essence: 'Before a bank provides correspondent services to a foreign bank, it must vet the respondent’s supervision and AML controls — and never touch a shell bank.',
    obligations: [
      {
        id: 'R13-1',
        title: 'Five Mandatory Cross-Border Correspondent Controls',
        body: 'Financial institutions should be required, in relation to cross-border correspondent banking and other similar relationships, in addition to performing normal customer due diligence measures, to: (a) gather sufficient information about a respondent institution to understand fully the nature of the respondent’s business and to determine from publicly available information the reputation of the institution and the quality of supervision, including whether it has been subject to a ML/TF investigation or regulatory action; (b) assess the respondent institution’s AML/CFT controls; (c) obtain approval from senior management before establishing new correspondent relationships; (d) clearly understand the respective responsibilities of each institution; and (e) with respect to "payable-through accounts", be satisfied that the respondent bank has conducted CDD on the customers having direct access to accounts of the correspondent bank, and that it is able to provide relevant CDD information upon request to the correspondent bank.'
      },
      {
        id: 'R13-2',
        title: 'Total Prohibition on Shell Banks',
        body: 'Financial institutions should be prohibited from entering into, or continuing, a correspondent banking relationship with shell banks. Financial institutions should be required to satisfy themselves that respondent institutions do not permit their accounts to be used by shell banks.'
      }
    ],
    inHighlights: [
      'Correspondent banking is the provision of banking services by one bank (the "correspondent bank") to another bank (the "respondent bank").',
      'Similar relationships to which R.13 applies include relationships established for securities transactions or funds transfers, whether for a cross-border financial institution as principal or for its customers.',
      'Shell bank = a bank that has no physical presence (meaningful mind and management) in the country in which it is incorporated and licensed, and which is unaffiliated with a regulated financial group subject to effective consolidated supervision.'
    ],
    thresholds: [],
    keyTerms: ['shell-bank', 'payable-through-accounts', 'cdd'],
    related: [10, 16, 26],
    diagram: null,
    quiz: {
      q: 'What is a financial institution’s obligation regarding "shell banks" under Recommendation 13?',
      options: [
        'Prohibited from entering into or continuing a correspondent relationship with shell banks, and must ensure respondent banks do not allow shell banks to use their accounts.',
        'Permitted to bank shell banks if they charge a 5% compliance fee.',
        'Permitted to open correspondent accounts for shell banks if the transaction is under USD/EUR 15,000.',
        'Required only to file an annual statistical summary of shell bank balances.'
      ],
      answer: 0,
      explain: 'R.13 strictly prohibits correspondent relationships with shell banks and requires FIs to satisfy themselves that respondent institutions do not permit their accounts to be used by shell banks.'
    }
  },
  {
    id: 14,
    section: 'D',
    title: 'Money or value transfer services',
    oldNumber: 'SR.VI',
    interpretiveNote: true,
    audience: ['Country', 'FI', 'Competent Authority'],
    essence: 'Hawala, remitters, and money transfer operators must be licensed or registered, monitored, and their agents brought into the AML/CFT net.',
    obligations: [
      {
        id: 'R14-1',
        title: 'Licensing or Registration & Compliance Monitoring',
        body: 'Countries should take measures to ensure that natural or legal persons that provide money or value transfer services (MVTS) are licensed or registered, and subject to effective systems for monitoring and ensuring compliance with the relevant measures called for in the FATF Recommendations.'
      },
      {
        id: 'R14-2',
        title: 'Identify & Sanction Unlicensed MVTS Operators',
        body: 'Countries should take action to identify natural or legal persons that carry out MVTS without a licence or registration, and to apply appropriate sanctions.'
      },
      {
        id: 'R14-3',
        title: 'Oversight of MVTS Agents',
        body: 'Any natural or legal person working as an agent should also be licensed or registered by a competent authority, or the MVTS provider should maintain a current list of its agents accessible by competent authorities in the countries in which the MVTS provider and its agents operate, and should include them in its AML/CFT programmes and monitor them for compliance with these programmes.'
      }
    ],
    inHighlights: [
      'A country need not impose a separate licensing or registration system onto natural or legal persons that are already licensed or registered as financial institutions within that country and which, under such licence or registration, are permitted to perform MVTS and are already subject to the full range of FATF obligations.'
    ],
    thresholds: [],
    keyTerms: ['mvts'],
    related: [10, 16, 26, 27, 35],
    diagram: null,
    quiz: {
      q: 'How must agents of a Money or Value Transfer Service (MVTS) provider be regulated under Recommendation 14?',
      options: [
        'Either licensed/registered by a competent authority, OR the MVTS provider must maintain a current list of its agents accessible to competent authorities and include/monitor them in its AML/CFT programme.',
        'Agents are completely exempt from AML/CFT rules because they are subcontractors.',
        'Agents only need to register if they process more than USD/EUR 10,000,000 per month.',
        'Agents are supervised exclusively by municipal Chambers of Commerce.'
      ],
      answer: 0,
      explain: 'Under R.14, MVTS agents must either be directly licensed/registered, or the principal MVTS provider must maintain an accessible current agent list AND include/monitor them in its AML/CFT programme.'
    }
  },
  {
    id: 15,
    section: 'D',
    title: 'New technologies',
    oldNumber: 'R.8',
    interpretiveNote: true,
    audience: ['Country', 'FI', 'VASP', 'Competent Authority'],
    essence: 'Assess ML/TF risks before launching new products or technologies — and license, regulate, and supervise Virtual Asset Service Providers (VASPs) under a competent authority.',
    obligations: [
      {
        id: 'R15-1',
        title: 'Pre-Launch Risk Assessment of New Products & Technologies',
        body: 'Countries and financial institutions should identify and assess the money laundering or terrorist financing risks that may arise in relation to (a) the development of new products and new business practices, including new delivery mechanisms, and (b) the use of new or developing technologies for both new and pre-existing products. In the case of financial institutions, such a risk assessment should take place prior to the launch of the new products, business practices or the use of new or developing technologies. They should take appropriate measures to manage and mitigate those risks.'
      },
      {
        id: 'R15-2',
        title: 'Regulation, Licensing/Registration & Supervision of VASPs',
        body: 'To manage and mitigate the risks emerging from virtual assets, countries should ensure that virtual asset service providers are regulated for AML/CFT purposes, and licensed or registered and subject to effective systems for monitoring and ensuring compliance with the relevant measures called for in the FATF Recommendations.'
      }
    ],
    inHighlights: [
      'Countries should consider virtual assets as "property", "proceeds", "funds", "funds or other assets", or other "corresponding value".',
      'VASPs must be licensed or registered at minimum in the jurisdiction(s) where they are created (for legal persons) or where their place of business is located (for natural persons).',
      'VASPs must be supervised by a competent authority — NOT a self-regulatory body (SRB).',
      'Preventive measures (R.10 to R.21) apply to VASPs with two specific qualifications:',
      '• R.10 Qualification: The occasional transactions designated threshold above which VASPs are required to conduct CDD is USD/EUR 1,000.',
      '• R.16 Qualification (Crypto Travel Rule): Originating VASPs must obtain and hold required and accurate originator information and required beneficiary information on virtual asset transfers, submit this info to the beneficiary VASP/FI (if any) immediately and securely, and make it available on request to appropriate authorities.'
    ],
    revisionNote: 'Expanded in June 2019 (INR.15) to establish binding global obligations for Virtual Assets (VAs) and Virtual Asset Service Providers (VASPs), including the USD/EUR 1,000 CDD threshold and Travel Rule.',
    thresholds: [
      { value: 'USD/EUR 1,000', context: 'Occasional transaction CDD threshold for Virtual Asset Service Providers (VASPs)' }
    ],
    keyTerms: ['vasp', 'rba', 'srb', 'cdd'],
    related: [1, 7, 10, 16, 26, 27, 35, 37, 40],
    diagram: null,
    quiz: {
      q: 'Can a Self-Regulatory Body (SRB) serve as the AML/CFT supervisor for Virtual Asset Service Providers (VASPs) under Recommendation 15?',
      options: [
        'No — VASPs must be supervised or monitored by a competent authority, not a self-regulatory body.',
        'Yes — any industry crypto association can serve as an SRB supervisor.',
        'Yes — provided the VASP only trades stablecoins.',
        'VASPs do not require supervision if they use public blockchains.'
      ],
      answer: 0,
      explain: 'INR.15 Paragraph 6 explicitly states: "VASPs should be supervised or monitored by a competent authority (not a SRB), which should conduct risk-based supervision or monitoring."'
    }
  },
  {
    id: 16,
    section: 'D',
    title: 'Payment transparency',
    oldNumber: 'SR.VII',
    interpretiveNote: true,
    audience: ['FI', 'VASP'],
    essence: 'Every cross-border and domestic payment must carry structured originator and beneficiary information through the entire payment chain so money trails never break.',
    obligations: [
      {
        id: 'R16-1',
        title: 'Structured Originator & Beneficiary Data Across the Entire Payment Chain',
        body: 'Countries should ensure that financial institutions include required and accurate originator information, and required beneficiary information, on payments or value transfers and related messages, that the information is structured in line with payment messaging standards (e.g., ISO 20022), and that the information remains with the payment or value transfer throughout the payment chain.'
      },
      {
        id: 'R16-2',
        title: 'Monitoring for Missing Information & Detecting Misdirected Payments',
        body: 'Countries should ensure that financial institutions monitor payments or value transfers for the purpose of detecting those which lack required originator and/or beneficiary information, and take appropriate measures.'
      },
      {
        id: 'R16-3',
        title: 'TFS Freezing & Prohibition Screening in Payment Processing',
        body: 'Countries should ensure that, in the context of processing payments or value transfers, financial institutions take freezing action and should prohibit conducting transactions with designated persons and entities, as per the obligations set out in the relevant United Nations Security Council resolutions, such as resolution 1267 (1999) and its successor resolutions, and resolution 1373 (2001), relating to the prevention and suppression of terrorism and terrorist financing, as well as UNSC resolutions relating to proliferation financing.'
      }
    ],
    inHighlights: [
      'June 2025 Revision ("Wire Transfers" updated to "Payment Transparency"):',
      'De minimis threshold: Country may adopt a threshold no higher than USD/EUR 1,000 for cross-border payments.',
      'Cross-Border Below Threshold (≤ USD/EUR 1,000): Must include (a) name of originator; (b) name of beneficiary; and (c) an account number for each, or a unique transaction reference number (UETR). Need not be verified unless suspicion of ML/TF exists.',
      'Cross-Border Above Threshold (> USD/EUR 1,000): Must include verified originator name + beneficiary name + account numbers/UETR PLUS: (1) originator address, (2) beneficiary country and town, (3) originator date of birth (for natural persons), and (4) for legal persons: Business Identifier Code (BIC), Legal Entity Identifier (LEI), or unique official identifier.',
      'Domestic Payments: Include originator info as for cross-border, or at minimum account number/UETR if full info can be made available by Ordering FI to Beneficiary FI and authorities within 3 business days.',
      'Exemptions & Card/Cash Rules: FI-to-FI own-account transfers and net settlements are exempt. Card purchases of goods/services are exempt if card number accompanies all transfers. Cash withdrawals require account/card number; cross-border card cash withdrawals require cardholder name made available to acquirer within 3 business days.',
      'Beneficiary FI Misdirected Payment Detection: Beneficiary FI must verify beneficiary identity and implement mechanisms to detect misdirected payments via: (a) per-transaction name/account alignment check, (b) holistic ongoing monitoring, or (c) pre-validation (Confirmation of Payee).',
      'MVTS Providers: Must comply in all countries where they operate; where an MVTS controls both ordering and beneficiary sides, it must review information from both sides and file an STR in ANY country affected.'
    ],
    revisionNote: 'Comprehensively revised in June 2025 (retitled "Payment Transparency") to align with ISO 20022 structured data fields (address, town, DOB, BIC/LEI), cross-border card cash withdrawals, and Beneficiary FI confirmation of payee / misdirected payment controls.',
    thresholds: [
      { value: 'USD/EUR 1,000', context: 'Maximum de minimis threshold for cross-border payment transparency' },
      { value: '3 Business Days', context: 'Maximum timeframe to provide domestic originator info or cross-border cardholder withdrawal name on request' }
    ],
    keyTerms: ['mvts', 'vasp', 'designated-person', 'str'],
    related: [6, 7, 10, 11, 14, 15, 20],
    diagram: 'r16-wire',
    quiz: {
      q: 'Under the June 2025 revision of Recommendation 16 (Payment Transparency), what must happen to required originator and beneficiary information during a payment or value transfer?',
      options: [
        'It must be structured (e.g., ISO 20022) and remain with the payment or value transfer throughout the entire payment chain.',
        'It may be stripped out by intermediary banks to save bandwidth.',
        'It is only required if the payment exceeds USD/EUR 100,000.',
        'It only needs to be kept by the customer at home.'
      ],
      answer: 0,
      explain: 'R.16 mandates that required and accurate originator and beneficiary information be structured and remain with the payment throughout the entire payment chain (Originator → Ordering FI → Intermediary FIs → Beneficiary FI).'
    }
  },
  {
    id: 17,
    section: 'D',
    title: 'Reliance on third parties',
    oldNumber: 'R.9',
    interpretiveNote: true,
    audience: ['FI', 'DNFBP'],
    essence: 'You may rely on a regulated third party to perform initial CDD steps — but ultimate legal responsibility always stays with you.',
    obligations: [
      {
        id: 'R17-1',
        title: 'Ultimate Responsibility Remains with the Relying Institution',
        body: 'Countries may permit financial institutions to rely on third parties to perform elements (a)–(c) of the CDD measures set out in Recommendation 10 or to introduce business, provided that the criteria set out below are met. Where such reliance is permitted, the ultimate responsibility for CDD measures remains with the financial institution relying on the third party.'
      },
      {
        id: 'R17-2',
        title: 'Four Mandatory Conditions for Third-Party Reliance',
        body: 'The criteria that should be met are as follows: (a) A financial institution relying upon a third party should immediately obtain the necessary information concerning elements (a)–(c) of the CDD measures set out in Recommendation 10; (b) Financial institutions should take adequate steps to satisfy themselves that copies of identification data and other relevant documentation relating to the CDD requirements will be made available from the third party upon request without delay; (c) The financial institution should satisfy itself that the third party is regulated, and supervised or monitored for, and has measures in place for compliance with, CDD and record-keeping requirements in line with Recommendations 10 and 11; (d) When determining in which countries the third party that meets the conditions can be based, countries should have regard to information available on the level of country risk.'
      }
    ],
    inHighlights: [
      'Does NOT apply to outsourcing or agency relationships (where the outsourced/agent entity is contractually part of the FI itself).',
      'Reliance covers only elements (a)–(c) of R.10 (customer ID, BO ID, purpose/nature of relationship) — NEVER element (d) ongoing due diligence and transaction monitoring.',
      'Intra-Group Reliance: When relying on a third party that is part of the same financial group, competent authorities may consider that criteria (b) and (c) are met through the group AML/CFT programme (R.18), and that country risk (d) is adequately mitigated by group AML/CFT policies.'
    ],
    thresholds: [],
    keyTerms: ['cdd', 'financial-group'],
    related: [10, 11, 18, 19, 22],
    diagram: null,
    quiz: {
      q: 'When a financial institution relies on a regulated third party to perform CDD under Recommendation 17, who bears the ultimate responsibility if the CDD is deficient?',
      options: [
        'The financial institution relying on the third party.',
        'Exclusively the third party that introduced the customer.',
        'The customer’s external auditor.',
        'The domestic Financial Intelligence Unit.'
      ],
      answer: 0,
      explain: 'R.17 is explicit: "Where such reliance is permitted, the ultimate responsibility for CDD measures remains with the financial institution relying on the third party."'
    }
  },
  {
    id: 18,
    section: 'D',
    title: 'Internal controls and foreign branches and subsidiaries',
    oldNumber: 'R.15 & R.22',
    interpretiveNote: true,
    audience: ['FI', 'DNFBP'],
    essence: 'AML is an inside job — establish management-level compliance, employee screening, training, independent audit, and group-wide programmes across all foreign branches.',
    obligations: [
      {
        id: 'R18-1',
        title: 'Internal AML/CFT Programmes & Group-Wide Information Sharing',
        body: 'Financial institutions should be required to implement programmes against money laundering and terrorist financing. Financial groups should be required to implement group-wide programmes against money laundering and terrorist financing, including policies and procedures for sharing information within the group for AML/CFT purposes.'
      },
      {
        id: 'R18-2',
        title: 'Home-Country Standards for Foreign Branches & Subsidiaries',
        body: 'Financial institutions should be required to ensure that their foreign branches and majority-owned subsidiaries apply AML/CFT measures consistent with the home country requirements implementing the FATF Recommendations through the financial groups’ group-wide programmes against money laundering and terrorist financing.'
      }
    ],
    inHighlights: [
      'Four pillars of an internal AML/CFT programme (regard to ML/TF risks and size of business): (a) compliance management arrangements (including appointment of a compliance officer at the management level); (b) screening procedures to ensure high standards when hiring employees; (c) an ongoing employee training programme; and (d) an independent audit function to test the system.',
      'Group-wide programmes must allow branches/subsidiaries to provide customer, account, and transaction information to group-level compliance, audit, and AML/CFT functions when necessary for ML/TF risk management (including information/analysis of unusual transactions and the fact that an STR has been filed), subject to strong confidentiality and anti-tipping-off safeguards.',
      'Host-Country Conflict Rule: Where the host country’s minimum AML/CFT requirements are less strict than the home country, branches/subsidiaries must implement the home country requirements to the extent that host country laws and regulations permit. If the host country does not permit proper implementation, financial groups should apply appropriate additional measures to manage ML/TF risks and inform their home supervisor (who may require the group to close its operations in the host country).'
    ],
    thresholds: [],
    keyTerms: ['financial-group', 'str'],
    related: [9, 17, 21, 23, 26],
    diagram: null,
    quiz: {
      q: 'What must a financial group do if a foreign host country’s laws are less strict than the home country’s AML/CFT requirements?',
      options: [
        'Ensure its foreign branch/subsidiary applies the home country requirements to the extent host country laws permit (and if host law prohibits it, apply additional risk-mitigation measures and inform the home supervisor).',
        'Apply only the weaker host country standards to remain competitive locally.',
        'Stop filing Suspicious Transaction Reports in both countries.',
        'Transfer all high-risk customers to the weaker host country branch.'
      ],
      answer: 0,
      explain: 'R.18 and INR.18 require foreign branches and majority-owned subsidiaries to apply home-country standards to the extent host law permits; if host law prevents this, the group must apply additional measures, notify the home supervisor, and potentially close host operations.'
    }
  },
  {
    id: 19,
    section: 'D',
    title: 'Higher-risk countries',
    oldNumber: 'R.21',
    interpretiveNote: true,
    audience: ['Country', 'FI', 'DNFBP'],
    essence: 'Apply proportionate Enhanced Due Diligence to relationships involving high-risk jurisdictions called out by the FATF — and be ready to deploy countermeasures.',
    obligations: [
      {
        id: 'R19-1',
        title: 'Proportionate Enhanced Due Diligence (EDD)',
        body: 'Financial institutions should be required to apply enhanced due diligence measures to business relationships and transactions with natural and legal persons, and financial institutions, from countries for which this is called for by the FATF. The type of enhanced due diligence measures applied should be effective and proportionate to the risks.'
      },
      {
        id: 'R19-2',
        title: 'Countermeasures (On FATF Call or Independently)',
        body: 'Countries should be able to apply countermeasures when called upon to do so by the FATF. Countries should also be able to apply countermeasures independently of any call by the FATF to do so. Such countermeasures should be effective and proportionate to the risks.'
      }
    ],
    inHighlights: [
      'Examples of countermeasures include: (a) requiring FIs to apply specific elements of enhanced due diligence; (b) introducing enhanced relevant reporting mechanisms or systematic reporting of financial transactions; (c) refusing the establishment of subsidiaries or branches or representative offices of FIs from the country concerned; (d) prohibiting FIs from establishing branches or representative offices within the country concerned; (e) limiting business relationships or financial transactions with the identified country or persons in that country; (f) prohibiting FIs from relying on third parties located in the country concerned to conduct CDD; (g) requiring FIs to review and amend, or if necessary terminate, correspondent relationships with FIs in the country concerned; (h) requiring increased supervisory examination and/or external audit requirements for branches/subsidiaries based in the country; (i) requiring financial groups to apply enhanced external audit requirements.'
    ],
    thresholds: [],
    keyTerms: ['rba', 'cdd'],
    related: [1, 10, 13, 17, 23],
    diagram: null,
    quiz: {
      q: 'Under Recommendation 19, when must countries be able to apply countermeasures against a higher-risk country?',
      options: [
        'Both when called upon to do so by the FATF AND independently of any call by the FATF.',
        'Only after a unanimous vote of the World Trade Organization.',
        'Only against countries with a population under 1 million.',
        'Never — countermeasures are prohibited by international banking custom.'
      ],
      answer: 0,
      explain: 'R.19 requires countries to have the legal authority and capacity to apply proportionate countermeasures both when called upon by the FATF and independently based on their own risk assessments.'
    }
  },
  {
    id: 20,
    section: 'D',
    title: 'Reporting of suspicious transactions',
    oldNumber: 'R.13 & SR.IV',
    interpretiveNote: true,
    audience: ['FI', 'DNFBP'],
    essence: 'If you suspect or have reasonable grounds to suspect funds are criminal proceeds or linked to terrorist financing, you must report promptly to the FIU — regardless of amount and including attempted transactions.',
    obligations: [
      {
        id: 'R20-1',
        title: 'Mandatory Prompt STR Filing Set Out in Law',
        body: 'If a financial institution suspects or has reasonable grounds to suspect that funds are the proceeds of a criminal activity, or are related to terrorist financing, it should be required, by law, to report promptly its suspicions to the financial intelligence unit (FIU).'
      }
    ],
    inHighlights: [
      '"Criminal activity" refers to all predicate offences under R.3 (or ideally to all offences that would constitute a predicate offence domestically).',
      'All suspicious transactions, including ATTEMPTED transactions, must be reported regardless of the amount of the transaction (zero de minimis threshold for STRs).',
      'The reporting requirement must be a direct mandatory obligation in law—any "indirect reporting" regime is unacceptable.'
    ],
    thresholds: [
      { value: 'Zero Threshold (Any Amount)', context: 'All suspicious transactions—including attempted transactions—must be reported regardless of value' }
    ],
    keyTerms: ['str', 'fiu', 'proceeds-criminal-property', 'law-vs-enforceable-means'],
    related: [3, 5, 10, 16, 21, 23, 29],
    diagram: null,
    quiz: {
      q: 'A prospective customer walks into a bank to wire EUR 150, behaves suspiciously, and abandons the transaction when asked for ID. What does Recommendation 20 require?',
      options: [
        'The suspicious attempted transaction must be reported promptly to the FIU, regardless of its small amount.',
        'No report is required because the transaction was under USD/EUR 15,000.',
        'No report is required because the transaction was never completed.',
        'The bank should only warn the customer not to return.'
      ],
      answer: 0,
      explain: 'INR.20 mandates that all suspicious transactions, including attempted transactions, must be reported promptly to the FIU regardless of the amount.'
    }
  },
  {
    id: 21,
    section: 'D',
    title: 'Tipping-off and confidentiality',
    oldNumber: 'R.14',
    interpretiveNote: false,
    audience: ['FI', 'DNFBP'],
    essence: 'Protect good-faith reporters with legal safe harbour — and strictly prohibit warning ("tipping off") anyone that an STR or related information is being filed.',
    obligations: [
      {
        id: 'R21-1',
        title: 'Safe Harbour Protection for Good-Faith Reporting',
        body: 'Financial institutions, their directors, officers and employees should be: (a) protected by law from criminal and civil liability for breach of any restriction on disclosure of information imposed by contract or by any legislative, regulatory or administrative provision, if they report their suspicions in good faith to the FIU, even if they did not know precisely what the underlying criminal activity was, and regardless of whether illegal activity actually occurred.'
      },
      {
        id: 'R21-2',
        title: 'Legal Prohibition on Tipping-Off',
        body: 'Financial institutions, their directors, officers and employees should be: (b) prohibited by law from disclosing ("tipping-off") the fact that a suspicious transaction report (STR) or related information is being filed with the FIU. These provisions are not intended to inhibit information sharing under Recommendation 18.'
      }
    ],
    thresholds: [],
    keyTerms: ['str', 'fiu', 'financial-group', 'law-vs-enforceable-means'],
    related: [10, 18, 20, 23],
    diagram: null,
    quiz: {
      q: 'What protection does Recommendation 21(a) grant to a bank employee who files a Suspicious Transaction Report (STR) in good faith, if the customer later turns out to be innocent?',
      options: [
        'Protection by law from both criminal and civil liability for breach of confidentiality, regardless of whether illegal activity actually occurred.',
        'Protection only if the customer is eventually convicted in court.',
        'Partial immunity limited to USD/EUR 15,000 in civil damages.',
        'No protection unless the customer signed a waiver.'
      ],
      answer: 0,
      explain: 'R.21(a) guarantees legal protection from criminal and civil liability for good-faith reporting to the FIU, even if the reporter did not know the precise crime and regardless of whether illegal activity actually occurred.'
    }
  },
  {
    id: 22,
    section: 'D',
    title: 'DNFBPs: customer due diligence',
    oldNumber: 'R.12',
    interpretiveNote: true,
    audience: ['DNFBP'],
    essence: 'Casinos, real estate agents, precious metal/stone dealers, lawyers, notaries, accountants, and TCSPs are gatekeepers to the financial system and must perform CDD in defined scenarios.',
    obligations: [
      {
        id: 'R22-1',
        title: 'Application of R.10, 11, 12, 15, and 17 to Six Gatekeeper Sectors',
        body: 'The customer due diligence and record-keeping requirements set out in Recommendations 10, 11, 12, 15, and 17, apply to designated non-financial businesses and professions (DNFBPs) in the following situations:\n(a) Casinos — when customers engage in financial transactions equal to or above the applicable designated threshold (USD/EUR 3,000).\n(b) Real estate agents — when they are involved in transactions for their client concerning the buying and selling of real estate.\n(c) Dealers in precious metals and dealers in precious stones — when they engage in any cash transaction with a customer equal to or above the applicable designated threshold (USD/EUR 15,000).\n(d) Lawyers, notaries, other independent legal professionals and accountants — when they prepare for or carry out transactions for their client concerning the following activities: buying and selling of real estate; managing of client money, securities or other assets; management of bank, savings or securities accounts; organisation of contributions for the creation, operation or management of companies; creation, operation or management of legal persons or arrangements, and buying and selling of business entities.\n(e) Trust and company service providers (TCSPs) — when they prepare for or carry out transactions for a client concerning: acting as a formation agent of legal persons; acting as (or arranging for another person to act as) a director or secretary of a company, a partner of a partnership, or a similar position; providing a registered office, business address or accommodation, correspondence or administrative address; acting as (or arranging for another person to act as) a trustee of an express trust or performing the equivalent function; acting as (or arranging for another person to act as) a nominee shareholder for another person.'
      }
    ],
    inHighlights: [
      'Casinos (including internet and ship-based casinos): Designated threshold is USD/EUR 3,000. Conducting customer identification purely at the door/entry is NOT necessarily sufficient—the casino must be able to link CDD information for a particular customer to the transactions that the customer conducts in the casino.',
      'Real Estate Agents: Must comply with R.10 CDD requirements with respect to BOTH the purchasers and the vendors of the property.',
      'Dealers in Precious Metals and Stones: Designated threshold for cash transactions (whether in a single operation or in several operations that appear to be linked) is USD/EUR 15,000.'
    ],
    thresholds: [
      { value: 'USD/EUR 3,000', context: 'Casinos financial transactions threshold' },
      { value: 'USD/EUR 15,000 (Cash)', context: 'Dealers in precious metals and precious stones cash transactions threshold' }
    ],
    keyTerms: ['dnfbp', 'tcsp', 'cdd', 'beneficial-owner'],
    related: [10, 11, 12, 15, 17, 23, 24, 25, 28],
    diagram: 'r22-dnfbp',
    quiz: {
      q: 'When a real estate agent is involved in a property sale under Recommendation 22, on whom must the agent perform Customer Due Diligence (CDD)?',
      options: [
        'Both the purchasers AND the vendors (sellers) of the property.',
        'Only the purchaser paying the money.',
        'Only the vendor selling the property.',
        'Neither, provided a commercial bank provides the mortgage.'
      ],
      answer: 0,
      explain: 'INR.22 explicitly states that real estate agents should comply with the requirements of Recommendation 10 with respect to both the purchasers and the vendors of the property.'
    }
  },
  {
    id: 23,
    section: 'D',
    title: 'DNFBPs: other measures',
    oldNumber: 'R.16',
    interpretiveNote: true,
    audience: ['DNFBP'],
    essence: 'Internal controls, high-risk country EDD, STR reporting, and anti-tipping-off rules apply to DNFBPs too — while respecting bona fide legal professional privilege.',
    obligations: [
      {
        id: 'R23-1',
        title: 'Extension of R.18 to R.21 to DNFBPs',
        body: 'The requirements set out in Recommendations 18 to 21 apply to all designated non-financial businesses and professions, subject to the following qualifications:\n(a) Lawyers, notaries, other independent legal professionals and accountants should be required to report suspicious transactions when, on behalf of or for a client, they engage in a financial transaction in relation to the activities described in paragraph (d) of Recommendation 22. Countries are strongly encouraged to extend the reporting requirement to the rest of the professional activities of accountants, including auditing.\n(b) Dealers in precious metals and dealers in precious stones should be required to report suspicious transactions when they engage in any cash transaction with a customer equal to or above the applicable designated threshold (USD/EUR 15,000).\n(c) Trust and company service providers should be required to report suspicious transactions for a client when, on behalf of or for a client, they engage in a transaction in relation to the activities referred to in paragraph (e) of Recommendation 22.'
      }
    ],
    inHighlights: [
      'Legal Professional Privilege / Professional Secrecy Exception: Lawyers, notaries, other independent legal professionals, and accountants acting as independent legal professionals are NOT required to report suspicious transactions if the relevant information was obtained in circumstances where they are subject to professional secrecy or legal professional privilege (ordinarily covering information received in ascertaining the legal position of their client, or in performing their task of defending or representing that client in judicial, administrative, arbitration, or mediation proceedings).',
      'Countries may allow lawyers, notaries, other independent legal professionals and accountants to send their STR to their appropriate self-regulatory organisations (SRBs), provided there are appropriate forms of cooperation between these organisations and the FIU.',
      'Where lawyers, notaries, other independent legal professionals and accountants seek to dissuade a client from engaging in illegal activity, this does NOT amount to tipping-off.'
    ],
    thresholds: [
      { value: 'USD/EUR 15,000 (Cash)', context: 'STR reporting trigger threshold for dealers in precious metals and precious stones' }
    ],
    keyTerms: ['dnfbp', 'str', 'srb', 'tcsp'],
    related: [18, 19, 20, 21, 22, 28],
    diagram: null,
    quiz: {
      q: 'Under the Interpretive Note to Recommendation 23, does a lawyer attempting to dissuade a client from engaging in illegal activity commit prohibited "tipping-off"?',
      options: [
        'No — seeking to dissuade a client from engaging in illegal activity does not amount to tipping-off.',
        'Yes — any legal advice mentioning AML laws is a felony.',
        'Yes — unless the FIU is present in the room.',
        'Only if the client is a foreign Politically Exposed Person.'
      ],
      answer: 0,
      explain: 'INR.23 explicitly states: "Where lawyers, notaries, other independent legal professionals and accountants acting as independent legal professionals seek to dissuade a client from engaging in illegal activity, this does not amount to tipping-off."'
    }
  },
  {
    id: 24,
    section: 'E',
    title: 'Transparency and beneficial ownership of legal persons',
    oldNumber: 'R.33',
    interpretiveNote: true,
    audience: ['Country', 'Competent Authority'],
    essence: 'Every company must have a findable real human behind it — enforce a multi-pronged approach to accurate, up-to-date beneficial ownership data, ban new bearer shares, and neutralize nominee secrecy.',
    obligations: [
      {
        id: 'R24-1',
        title: 'Assess Risks & Prevent Misuse of Legal Persons',
        body: 'Countries should assess the risks of misuse of legal persons for money laundering or terrorist financing, and take measures to prevent their misuse.'
      },
      {
        id: 'R24-2',
        title: 'Multi-Pronged Access to Adequate, Accurate & Up-to-Date BO Information',
        body: 'Countries should ensure that there is adequate, accurate and up-to-date information on the beneficial ownership and control of legal persons that can be obtained or accessed rapidly and efficiently by competent authorities, through either a register of beneficial ownership or an alternative mechanism. Countries should not rely on a single mechanism, but should use a multi-pronged approach combining multiple sources of information.'
      },
      {
        id: 'R24-3',
        title: 'Ban New Bearer Shares & Control Nominee Shareholders/Directors',
        body: 'Countries should prohibit the issuance of new bearer shares and bearer share warrants, and take effective measures to ensure that existing bearer shares and bearer share warrants are not misused for ML/TF. Countries should also take effective measures to ensure that nominee shareholders and directors are not misused for ML/TF. Countries should consider facilitating access to beneficial ownership and control information by financial institutions and DNFBPs undertaking the requirements set out in Recommendations 10 and 22.'
      }
    ],
    inHighlights: [
      'March 2022 Landmark Revision Highlights:',
      'Basic Information (Publicly Available in Company Registry): Company name, proof of incorporation, legal form and status, address of the registered office, basic regulating powers (memorandum & articles of association), a list of directors, and a unique identifier (e.g., tax ID), plus a register of shareholders/members with number of shares and categories/voting rights.',
      'Multi-Pronged BO Approach requires combining: (a) Companies obtaining and holding their own adequate, accurate, up-to-date BO info; (b) BO info held by a public authority/body (e.g., company registry, tax authority, FIU) OR an equally efficient alternative mechanism; and (c) Supplementary information (including CDD info held by FIs/DNFBPs and discrepancy reporting).',
      'Quality Standards: "Adequate" = sufficient to identify the natural person(s) who are the BO(s) and the means/mechanisms through which they exercise ownership/control. "Accurate" = verified using reliable, independent documents/data. "Up-to-date" = updated within a reasonable period (e.g., within 1 month of any change).',
      'Retention: Basic and BO records must be maintained for at least 5 years after the date on which the company is dissolved or otherwise ceases to exist.',
      'Existing Bearer Shares: Must be converted into registered shares/warrants, OR immobilised with a regulated FI/professional intermediary, OR require holders to notify the company and be recorded prior to exercising any rights.',
      'Nominee Shareholders & Directors: Must obey at least one of three mechanisms: (1) Disclose nominee status and the identity of the Nominator to the company and relevant registry (with nominee status recorded publicly); (2) Be licensed, record nominator identity, and make it available to authorities; or (3) Prohibit the use of nominee shares/directors altogether.',
      'Public Procurement: Countries should ensure public authorities have timely access to BO information on legal persons in the course of public procurement.'
    ],
    revisionNote: 'Substantially revised in March 2022 to mandate a multi-pronged approach (BO registry or equivalent public body mechanism), prohibit all new bearer shares/warrants, regulate nominees/nominators, and ensure BO visibility in public procurement.',
    thresholds: [
      { value: 'Within 1 Month', context: 'Illustrative reasonable timeframe for updating BO information after a change' },
      { value: 'At least 5 Years', context: 'Record retention period after a company is dissolved or ceases to exist' }
    ],
    keyTerms: ['beneficial-owner', 'nominator-nominee', 'cdd', 'tcsp'],
    related: [1, 10, 22, 25, 31, 37, 40],
    diagram: 'r24-bo',
    quiz: {
      q: 'What does the revised Recommendation 24 require regarding the issuance of new bearer shares and bearer share warrants?',
      options: [
        'Countries must prohibit the issuance of new bearer shares and bearer share warrants, and convert, immobilise, or control existing ones.',
        'New bearer shares are freely allowed if printed on watermarked security paper.',
        'New bearer shares are permitted for companies with fewer than 10 employees.',
        'Bearer shares only need to be declared when crossing an international airport border.'
      ],
      answer: 0,
      explain: 'Under the March 2022 revision of R.24, countries must strictly prohibit the issuance of any new bearer shares and bearer share warrants, and subject any pre-existing ones to conversion, immobilisation, or pre-exercise disclosure.'
    }
  },
  {
    id: 25,
    section: 'E',
    title: 'Transparency and beneficial ownership of legal arrangements',
    oldNumber: 'R.34',
    interpretiveNote: true,
    audience: ['Country', 'DNFBP', 'Competent Authority'],
    essence: 'Express trusts and similar legal arrangements cannot hide their controllers — trustees must obtain, verify, and hold full beneficial ownership and service-provider records.',
    obligations: [
      {
        id: 'R25-1',
        title: 'Assess Misuse Risks of Express Trusts & Similar Legal Arrangements',
        body: 'Countries should assess the risks of the misuse of legal arrangements for money laundering or terrorist financing and take measures to prevent their misuse.'
      },
      {
        id: 'R25-2',
        title: 'Efficient Access to Adequate, Accurate & Up-to-Date Trust BO Info',
        body: 'In particular, countries should ensure that there is adequate, accurate and up-to-date information on express trusts and other similar legal arrangements, including information on the settlor(s), trustee(s) and beneficiary(ies), that can be obtained or accessed efficiently and in a timely manner by competent authorities. Countries should consider facilitating access to beneficial ownership and control information by financial institutions and DNFBPs undertaking the requirements set out in Recommendations 10 and 22.'
      }
    ],
    inHighlights: [
      'February 2023 Revision Highlights:',
      'Scope: Applies to express trusts and other similar legal arrangements (e.g., fiducie, certain types of Treuhand, fideicomiso, Waqf) governed under a country’s law, OR administered in the country, OR where a trustee resides in the country, OR where foreign trusts have sufficient links (e.g., holding real estate or bank accounts in the country).',
      'Trustee Obligations: Trustees of any express trust must obtain and hold adequate, accurate, and up-to-date BO information regarding the trust: identities of the settlor(s), trustee(s), protector(s) (if any), beneficiaries or class of beneficiaries and objects of a power, and any other natural person exercising ultimate effective control over the trust.',
      'If any party to the trust is a legal person or arrangement, the trustee must also hold the BO information of that legal person/arrangement.',
      'Trustees must also hold basic information on other regulated agents of, and service providers to, the trust (including investment advisers/managers, accountants, and tax advisers).',
      'Trustees must disclose their status as a trustee to FIs and DNFBPs when forming a business relationship or carrying out an occasional transaction above the threshold.',
      'Retention: Trustees and authorities must maintain this information for at least 5 years after their involvement with the trust ceases.'
    ],
    revisionNote: 'Revised in February 2023 to align with R.24 standards (adequate, accurate, up-to-date BO info), cover foreign trusts administered locally or holding local assets, and include objects of a power.',
    thresholds: [
      { value: 'At least 5 Years', context: 'Retention of trust BO and service provider info after trustee involvement ceases' }
    ],
    keyTerms: ['express-trust', 'beneficial-owner', 'tcsp', 'cdd'],
    related: [10, 22, 24, 31, 37, 40],
    diagram: null,
    quiz: {
      q: 'Under Recommendation 25, what must a trustee do when forming a business relationship with a bank or DNFBP on behalf of an express trust?',
      options: [
        'Disclose their status as a trustee to the financial institution or DNFBP, and maintain adequate, accurate, and up-to-date BO information on all parties to the trust.',
        'Register the trust deed as a public company on the stock exchange.',
        'Keep the existence of the trust secret from the bank under common-law fiduciary duty.',
        'Transfer all trust assets into bearer shares.'
      ],
      answer: 0,
      explain: 'INR.25 requires trustees to hold full BO info on the settlor, trustees, protector, beneficiaries/class, and ultimate controllers, and to affirmatively disclose their status as a trustee when dealing with FIs and DNFBPs.'
    }
  },
  {
    id: 26,
    section: 'F',
    title: 'Regulation and supervision of financial institutions',
    oldNumber: 'R.23',
    interpretiveNote: true,
    audience: ['Country', 'Competent Authority'],
    essence: 'No financial institution without a supervisor; bar criminals from owning or managing FIs, ban shell banks, and calibrate supervisory intensity to ML/TF risk.',
    obligations: [
      {
        id: 'R26-1',
        title: 'Comprehensive AML/CFT Regulation & Supervision',
        body: 'Countries should ensure that financial institutions are subject to adequate regulation and supervision and are effectively implementing the FATF Recommendations.'
      },
      {
        id: 'R26-2',
        title: 'Market Entry Fit & Proper Controls + Ban on Shell Banks',
        body: 'Competent authorities or financial supervisors should take the necessary legal or regulatory measures to prevent criminals or their associates from holding, or being the beneficial owner of, a significant or controlling interest, or holding a management function in, a financial institution. Countries should not approve the establishment, or continued operation, of shell banks.'
      },
      {
        id: 'R26-3',
        title: 'Core Principles FIs vs. Other FIs & Risk-Based Supervision',
        body: 'For financial institutions subject to the Core Principles (Basel Banking, IAIS Insurance, IOSCO Securities), the regulatory and supervisory measures that apply for prudential purposes, and which are also relevant to money laundering and terrorist financing, should apply in a similar manner for AML/CFT purposes. This should include consolidated group supervision for AML/CFT purposes. Other financial institutions should be licensed or registered and adequately regulated, and subject to supervision or monitoring for AML/CFT purposes, having regard to the risk of money laundering or terrorist financing in that sector. At a minimum, where financial institutions provide a money or value transfer service (MVTS), or a money or currency changing service, they should be licensed or registered, and subject to effective systems for monitoring and ensuring compliance with national AML/CFT requirements.'
      }
    ],
    inHighlights: [
      'Risk-Based Supervision: Supervisors must allocate supervisory resources based on ML/TF risks—understanding both the country risks and the institutional risk profile (customers, products, services, delivery channels, geography, and quality of internal risk management).',
      'Frequency and intensity of on-site and off-site AML/CFT supervision of FIs/groups must be periodically reviewed and promptly updated when major events or developments occur in the management and operations of the FI/group.',
      'Supervisors must have sufficient operational independence, autonomy, resources, and high integrity standards.'
    ],
    thresholds: [],
    keyTerms: ['shell-bank', 'mvts', 'financial-group', 'rba'],
    related: [1, 13, 14, 15, 18, 27, 34, 35, 40],
    diagram: null,
    quiz: {
      q: 'What must financial supervisors do at the market-entry stage under Recommendation 26?',
      options: [
        'Prevent criminals or their associates from holding (or being the beneficial owner of) a significant/controlling interest or management function in an FI, and refuse the establishment or continued operation of shell banks.',
        'Guarantee a minimum 10% annual return on equity for all new banks.',
        'Allow shell banks to operate provided they pay double licensing fees.',
        'Delegate bank licensing to private accounting firms.'
      ],
      answer: 0,
      explain: 'R.26 requires strict fit-and-proper market entry controls barring criminals/associates from ownership or management of FIs, and strictly forbids approving shell banks.'
    }
  },
  {
    id: 27,
    section: 'F',
    title: 'Powers of supervisors',
    oldNumber: 'R.29',
    interpretiveNote: false,
    audience: ['Country', 'Competent Authority'],
    essence: 'Supervisors need real enforcement teeth: the authority to conduct inspections, compel production of any document without a court order, and impose sanctions including revoking licences.',
    obligations: [
      {
        id: 'R27-1',
        title: 'Power to Supervise, Monitor & Conduct Inspections',
        body: 'Supervisors should have adequate powers to supervise or monitor, and ensure compliance by, financial institutions with requirements to combat money laundering and terrorist financing, including the authority to conduct inspections.'
      },
      {
        id: 'R27-2',
        title: 'Power to Compel Production of Information',
        body: 'Supervisors should be authorised to compel production of any information from financial institutions that is relevant to monitoring such compliance.'
      },
      {
        id: 'R27-3',
        title: 'Power to Impose Sanctions Including Licence Withdrawal',
        body: 'Supervisors should be authorised to impose sanctions, in line with Recommendation 35, for failure to comply with such requirements. Supervisors should have powers to impose a range of disciplinary and financial sanctions, including the power to withdraw, restrict or suspend the financial institution’s licence, where applicable.'
      }
    ],
    thresholds: [],
    keyTerms: ['law-vs-enforceable-means'],
    related: [9, 26, 28, 35, 40],
    diagram: null,
    quiz: {
      q: 'Which of the following powers MUST financial supervisors possess under Recommendation 27?',
      options: [
        'Authority to conduct inspections, compel production of relevant compliance information, and impose disciplinary/financial sanctions including withdrawing, restricting, or suspending an FI’s licence.',
        'Authority to sentence bank directors directly to prison without a court trial.',
        'Authority to set commercial mortgage interest rates for retail customers.',
        'Authority to grant exemptions from UN Security Council asset freezes.'
      ],
      answer: 0,
      explain: 'R.27 requires supervisors to have inspection powers, power to compel information production, and power to impose a range of sanctions under R.35 including licence withdrawal/suspension.'
    }
  },
  {
    id: 28,
    section: 'F',
    title: 'Regulation and supervision of DNFBPs',
    oldNumber: 'R.24',
    interpretiveNote: true,
    audience: ['Country', 'Competent Authority'],
    essence: 'Casinos require comprehensive licensing and supervisory regimes; other DNFBPs must be monitored on a risk-sensitive basis by a government supervisor or a qualifying Self-Regulatory Body (SRB).',
    obligations: [
      {
        id: 'R28-1',
        title: 'Comprehensive Licensing & Supervision of Casinos',
        body: 'Casinos should be subject to a comprehensive regulatory and supervisory regime that ensures that they have effectively implemented the necessary AML/CFT measures. At a minimum: (a) casinos should be required to be licensed; (b) competent authorities should take the necessary legal or regulatory measures to prevent criminals or their associates from holding, or being the beneficial owner of, a significant or controlling interest, holding a management function in, or being an operator of, a casino; and (c) competent authorities should ensure that casinos are effectively supervised for compliance with AML/CFT requirements.'
      },
      {
        id: 'R28-2',
        title: 'Risk-Sensitive Supervision of Other DNFBPs (Supervisor or SRB)',
        body: 'Countries should ensure that the other categories of DNFBPs are subject to effective systems for monitoring and ensuring compliance with AML/CFT requirements. This should be performed on a risk-sensitive basis. This may be performed by (a) a supervisor or (b) an appropriate self-regulatory body (SRB), provided that such a body can ensure that its members comply with their obligations to combat money laundering and terrorist financing.'
      },
      {
        id: 'R28-3',
        title: 'Fit & Proper Controls and Sanctions Across All DNFBPs',
        body: 'The supervisor or SRB should also (a) take the necessary measures to prevent criminals or their associates from being professionally accredited, or holding or being the beneficial owner of a significant or controlling interest or holding a management function in a DNFBP, and (b) have effective, proportionate, and dissuasive sanctions in line with Recommendation 35 available to deal with failure to comply with AML/CFT requirements.'
      }
    ],
    inHighlights: [
      'Supervisors or SRBs must determine the frequency and intensity of on-site and off-site supervision of DNFBPs on the basis of their understanding of the ML/TF risks, taking into account the characteristics of the DNFBPs (diversity and number) and the degree of discretion allowed under the RBA.'
    ],
    thresholds: [],
    keyTerms: ['dnfbp', 'srb', 'rba', 'beneficial-owner'],
    related: [1, 22, 23, 26, 27, 34, 35],
    diagram: null,
    quiz: {
      q: 'Under Recommendation 28, which DNFBP sector MUST be licensed and supervised directly by a competent authority rather than solely monitored by a self-regulatory body?',
      options: [
        'Casinos (including internet and ship-based casinos).',
        'Independent bookkeepers.',
        'Residential interior designers.',
        'University law professors.'
      ],
      answer: 0,
      explain: 'R.28(a) mandates that casinos be licensed and subject to a comprehensive regulatory and supervisory regime by competent authorities, whereas other DNFBPs may be monitored by a supervisor or an appropriate SRB.'
    }
  },
  {
    id: 29,
    section: 'F',
    title: 'Financial intelligence units',
    oldNumber: 'R.26',
    interpretiveNote: true,
    audience: ['Country', 'Competent Authority'],
    essence: 'The FIU is the country’s suspicious-money inbox, analytical brain, and intelligence distribution hub — operating with full operational independence and Egmont Group connectivity.',
    obligations: [
      {
        id: 'R29-1',
        title: 'National Centre for Receipt, Analysis & Dissemination',
        body: 'Countries should establish a financial intelligence unit (FIU) that serves as a national centre for the receipt and analysis of: (a) suspicious transaction reports; and (b) other information relevant to money laundering, associated predicate offences and terrorist financing, and for the dissemination of the results of that analysis.'
      },
      {
        id: 'R29-2',
        title: 'Timely Access to Additional & Law Enforcement/Administrative Information',
        body: 'The FIU should be able to obtain additional information from reporting entities, and should have access on a timely basis to the financial, administrative and law enforcement information that it requires to undertake its functions properly.'
      }
    ],
    inHighlights: [
      'Three Core Functions: (1) Receipt (STRs, cash transaction reports, wire transfer reports, cross-border declarations/disclosures); (2) Analysis; and (3) Dissemination (spontaneously AND upon request to domestic competent authorities).',
      'Two Types of FIU Analysis: (a) Operational Analysis — uses available and obtainable info to identify specific targets (persons, assets, criminal networks), follow the trail of particular activities/transactions, and determine links between those targets and possible proceeds of crime, ML, predicate offences, or TF; and (b) Strategic Analysis — uses available and obtainable info to identify ML/TF related trends and patterns to help set policies and goals.',
      'Operational Independence & Autonomy: The FIU must have authority and capacity to carry out its functions freely, including the autonomous decision to analyse, request, and/or disseminate specific information—free from any undue political, government, or industry influence or interference.',
      'Information Security & Confidentiality: Strict rules governing security/confidentiality of information, security clearance levels for staff, and restricted access to FIU facilities and IT systems.',
      'Egmont Group: The FIU should apply for membership in the Egmont Group of Financial Intelligence Units.'
    ],
    thresholds: [],
    keyTerms: ['fiu', 'str', 'proceeds-criminal-property'],
    related: [2, 4, 20, 30, 31, 32, 40],
    diagram: 'r29-fiu',
    quiz: {
      q: 'What are the two distinct types of analysis that every Financial Intelligence Unit (FIU) must conduct under the Interpretive Note to Recommendation 29?',
      options: [
        'Operational analysis (identifying specific targets, money trails, and links to crime) AND Strategic analysis (identifying macro ML/TF trends and patterns).',
        'Credit risk analysis AND Actuarial mortality analysis.',
        'Macroeconomic inflation forecasting AND Foreign exchange arbitrage.',
        'Tax audit assessment AND Customs tariff classification.'
      ],
      answer: 0,
      explain: 'INR.29 requires every FIU to conduct both Operational analysis (target-specific trails and links) and Strategic analysis (macro trends, typologies, and systemic vulnerabilities).'
    }
  },
  {
    id: 30,
    section: 'F',
    title: 'Responsibilities of law enforcement and investigative authorities',
    oldNumber: 'R.27',
    interpretiveNote: true,
    audience: ['Country', 'Competent Authority'],
    essence: 'Follow the money alongside the crime — conduct proactive parallel financial investigations for all major proceeds-generating offences and act fast to trace and freeze assets.',
    obligations: [
      {
        id: 'R30-1',
        title: 'Designated ML/TF Law Enforcement Authorities',
        body: 'Countries should ensure that designated law enforcement authorities have responsibility for money laundering and terrorist financing investigations within the framework of national AML/CFT policies.'
      },
      {
        id: 'R30-2',
        title: 'Proactive Parallel Financial Investigations',
        body: 'At least in all cases related to major proceeds-generating offences, these designated law enforcement authorities should develop a pro-active parallel financial investigation when pursuing the investigation of money laundering, associated predicate offences and terrorist financing. This should include cases where the associated predicate offence occurs outside their jurisdictions.'
      },
      {
        id: 'R30-3',
        title: 'Expeditious Asset Tracing, Freezing & Multi-Disciplinary Teams',
        body: 'Countries should ensure that competent authorities have responsibility for expeditiously identifying, tracing and initiating actions to freeze and seize property that is, or may become, subject to confiscation, or is suspected of being proceeds of crime. Countries should also make use, when necessary, of permanent or temporary multi-disciplinary groups specialised in financial or asset investigations. Countries should ensure that, when necessary, cooperative investigations with appropriate competent authorities in other countries take place.'
      }
    ],
    inHighlights: [
      'A "financial investigation" is an enquiry into the financial affairs related to a criminal activity, with a view to: (i) identifying the extent of criminal networks and/or the scale of criminality; (ii) identifying and tracing the proceeds of crime, terrorist funds or any other assets that are, or may become, subject to confiscation; and (iii) developing evidence which can be used in criminal proceedings.',
      'Law enforcement investigators of predicate offences should either be authorised to pursue the investigation of any related ML/TF offences during a parallel investigation, or be able to refer the case to another agency to follow up with such investigations.',
      'Countries should consider taking measures to allow competent authorities to postpone or waive the arrest of suspected persons and/or the seizure of the money for the purpose of identifying persons involved in such activities or for evidence gathering (enabling controlled deliveries).'
    ],
    thresholds: [],
    keyTerms: ['asset-recovery', 'freeze-seize-confiscate', 'proceeds-criminal-property'],
    related: [3, 4, 29, 31, 38, 40],
    diagram: null,
    quiz: {
      q: 'What does Recommendation 30 require law enforcement authorities to do in all cases related to major proceeds-generating offences?',
      options: [
        'Develop a proactive parallel financial investigation (including where the associated predicate offence occurred outside their jurisdiction) and expeditiously trace/freeze criminal property.',
        'Wait until all criminal appeals on the predicate offence conclude (typically 5–10 years later) before looking for the money.',
        'Delegate all asset tracing to private debt collection agencies.',
        'Only investigate the financial trail if the suspect voluntarily provides bank statements.'
      ],
      answer: 0,
      explain: 'R.30 requires designated law enforcement authorities to conduct proactive parallel financial investigations alongside predicate crime investigations, tracing and freezing assets expeditiously.'
    }
  },
  {
    id: 31,
    section: 'F',
    title: 'Powers of law enforcement and investigative authorities',
    oldNumber: 'R.28',
    interpretiveNote: false,
    audience: ['Country', 'Competent Authority'],
    essence: 'Give investigators the full investigative toolbox — compulsory production, search & seizure, undercover ops, communications interception, and quiet asset identification without prior notice to the owner.',
    obligations: [
      {
        id: 'R31-1',
        title: 'Compulsory Production, Search, Witness Statements & Seizure',
        body: 'When conducting investigations of money laundering, associated predicate offences and terrorist financing, competent authorities should be able to obtain access to all necessary documents and information for use in those investigations, and in prosecutions and related actions. This should include powers to use compulsory measures for the production of records held by financial institutions, DNFBPs and other natural or legal persons, for the search of persons and premises, for taking witness statements, and for the seizure and obtaining of evidence.'
      },
      {
        id: 'R31-2',
        title: 'Special Investigative Techniques',
        body: 'Countries should ensure that competent authorities conducting investigations are able to use a wide range of investigative techniques suitable for the investigation of money laundering, associated predicate offences and terrorist financing. These investigative techniques include: undercover operations, intercepting communications, accessing computer systems and controlled delivery.'
      },
      {
        id: 'R31-3',
        title: 'Account & Asset Identification Without Prior Notification to Owner',
        body: 'Countries should have effective mechanisms in place to identify, in a timely manner, whether natural or legal persons hold or control accounts. They should also have mechanisms to ensure that competent authorities have a process to identify assets without prior notification to the owner. When conducting investigations of money laundering, associated predicate offences and terrorist financing, competent authorities should be able to ask for all relevant information held by the FIU.'
      }
    ],
    inHighlights: [
      'Competent authorities should also have timely access to a wide range of information, including basic and beneficial ownership information, tax records, information held by asset registries (e.g., for land, real estate, vehicles, shares, or other assets), and information held by citizenship/residency/social-benefit registries.'
    ],
    thresholds: [],
    keyTerms: ['fiu', 'beneficial-owner', 'asset-recovery'],
    related: [4, 9, 24, 25, 29, 30, 37],
    diagram: null,
    quiz: {
      q: 'Under Recommendation 31, when law enforcement authorities use mechanisms to identify assets held by a suspect, what safeguard prevents the suspect from moving the assets?',
      options: [
        'Competent authorities must have a process to identify assets WITHOUT prior notification to the owner.',
        'Authorities must publish a 30-day newspaper notice before querying any registry.',
        'Authorities must obtain a notarized permission slip from the account holder.',
        'Assets can only be identified after the suspect leaves the country.'
      ],
      answer: 0,
      explain: 'R.31 requires countries to have effective mechanisms to identify whether persons hold/control accounts and a process to identify assets without prior notification to the owner.'
    }
  },
  {
    id: 32,
    section: 'F',
    title: 'Cash couriers',
    oldNumber: 'SR.IX',
    interpretiveNote: true,
    audience: ['Country', 'Competent Authority'],
    essence: 'Physical cross-border transportation of currency and bearer negotiable instruments (BNIs) must be detected via a declaration or disclosure system — with power to restrain and sanction false declarations.',
    obligations: [
      {
        id: 'R32-1',
        title: 'Cross-Border Declaration or Disclosure System (Inbound & Outbound)',
        body: 'Countries should have measures in place to detect the physical cross-border transportation of currency and bearer negotiable instruments, including through a declaration system and/or disclosure system.'
      },
      {
        id: 'R32-2',
        title: 'Authority to Stop or Restrain Currency/BNIs',
        body: 'Countries should ensure that their competent authorities have the legal authority to stop or restrain currency or bearer negotiable instruments that are suspected to be related to terrorist financing, money laundering or predicate offences, or that are falsely declared or disclosed.'
      },
      {
        id: 'R32-3',
        title: 'Sanctions for False Declarations & Confiscation Measures',
        body: 'Countries should ensure that effective, proportionate and dissuasive sanctions are available to deal with persons who make false declarations or disclosures. In cases where the currency or bearer negotiable instruments are related to terrorist financing, money laundering or predicate offences, countries should also adopt measures, including legislative ones consistent with Recommendation 4, which would enable the confiscation of such currency or instruments.'
      }
    ],
    inHighlights: [
      'Maximum Threshold: For declaration systems, the preset threshold cannot exceed USD/EUR 15,000. Applies to BOTH incoming and outgoing physical transportation (by traveller, mail, or containerised cargo).',
      'Three Declaration System Options vs. Disclosure System: (i) Written declaration for all travellers; (ii) Written declaration for all travellers carrying amounts above the threshold; (iii) Oral declaration system (e.g., Red/Green customs channels) above the threshold; OR a Disclosure System where travellers must give truthful answers upon request by authorities.',
      'Information obtained through the declaration/disclosure process must be available to the FIU.',
      'Gold, Precious Metals & Precious Stones: Recommendation 32 does NOT cover gold, precious metals, or precious stones (despite their high liquidity); these are instead governed by customs laws and R.22/23, though countries should consider notifying foreign customs counterparts when unusual cross-border movements of gold/precious metals/stones are discovered.'
    ],
    thresholds: [
      { value: 'Max USD/EUR 15,000', context: 'Maximum preset threshold for cross-border currency & BNI declarations (inbound and outbound)' }
    ],
    keyTerms: ['bni', 'fiu', 'freeze-seize-confiscate'],
    related: [4, 29, 38, 40],
    diagram: 'r32-cash',
    quiz: {
      q: 'Does Recommendation 32 (Cash Couriers) cover a traveller carrying a suitcase of gold bullion or uncut diamonds across an international border?',
      options: [
        'No — R.32 covers currency and Bearer Negotiable Instruments (BNIs); gold, precious metals, and precious stones are not covered by R.32 (though subject to customs laws).',
        'Yes — gold bullion is classified as a Bearer Negotiable Instrument under R.32.',
        'Yes — but only for outbound flights.',
        'R.32 only covers credit cards and mobile banking apps.'
      ],
      answer: 0,
      explain: 'INR.32 explicitly notes that gold, precious metals, and precious stones are NOT covered by Recommendation 32, even though they have high liquidity (they are instead covered under general customs laws and R.22/R.23).'
    }
  },
  {
    id: 33,
    section: 'F',
    title: 'Statistics',
    oldNumber: 'R.32',
    interpretiveNote: false,
    audience: ['Country', 'Competent Authority'],
    essence: 'You cannot manage what you do not measure — maintain comprehensive national statistics on STRs, investigations, prosecutions, convictions, frozen/confiscated property, and MLA requests.',
    obligations: [
      {
        id: 'R33-1',
        title: 'Four Mandatory Categories of AML/CFT System Statistics',
        body: 'Countries should maintain comprehensive statistics on matters relevant to the effectiveness and efficiency of their AML/CFT systems. This should include statistics on: (a) the STRs received and disseminated; (b) on money laundering and terrorist financing investigations, prosecutions and convictions; (c) on property frozen, seized and confiscated; and (d) on mutual legal assistance or other international requests for cooperation.'
      }
    ],
    thresholds: [],
    keyTerms: ['str', 'freeze-seize-confiscate'],
    related: [1, 2, 20, 29, 30, 37, 40],
    diagram: null,
    quiz: {
      q: 'Which of the following is NOT one of the four mandatory statistical categories required by Recommendation 33?',
      options: [
        'Total number of ATMs and retail bank branches per square kilometre.',
        'Suspicious Transaction Reports (STRs) received and disseminated.',
        'Money laundering and terrorist financing investigations, prosecutions, and convictions.',
        'Property frozen, seized, and confiscated, and MLA/international cooperation requests.'
      ],
      answer: 0,
      explain: 'R.33 specifically requires statistics on: (1) STRs received/disseminated, (2) ML/TF investigations, prosecutions, and convictions, (3) property frozen/seized/confiscated, and (4) MLA and international cooperation requests.'
    }
  },
  {
    id: 34,
    section: 'F',
    title: 'Guidance and feedback',
    oldNumber: 'R.25',
    interpretiveNote: false,
    audience: ['Country', 'Competent Authority'],
    essence: 'Regulators, FIUs, and SRBs must not only police — they must establish practical guidelines and provide constructive feedback to help FIs and DNFBPs detect and report suspicious transactions.',
    obligations: [
      {
        id: 'R34-1',
        title: 'Supervisory & FIU Guidelines and Feedback to Reporting Entities',
        body: 'Competent authorities, supervisors and SRBs should establish guidelines, and provide feedback, which will assist financial institutions and designated non-financial businesses and professions in applying national measures to combat money laundering and terrorist financing, and, in particular, in detecting and reporting suspicious transactions.'
      }
    ],
    thresholds: [],
    keyTerms: ['srb', 'dnfbp', 'str', 'fiu'],
    related: [1, 20, 23, 26, 28, 29],
    diagram: null,
    quiz: {
      q: 'What is the primary purpose of the guidelines and feedback required under Recommendation 34?',
      options: [
        'To assist financial institutions and DNFBPs in applying national AML/CFT measures, and in particular in detecting and reporting suspicious transactions.',
        'To advise commercial banks on how to maximize foreign exchange trading profits.',
        'To publicly name every customer who has ever been the subject of an STR.',
        'To replace binding statutory laws with voluntary suggestions.'
      ],
      answer: 0,
      explain: 'R.34 requires competent authorities, supervisors, and SRBs to issue guidelines and provide feedback to help FIs and DNFBPs implement AML/CFT rules and detect/report suspicious transactions.'
    }
  },
  {
    id: 35,
    section: 'F',
    title: 'Sanctions',
    oldNumber: 'R.17',
    interpretiveNote: false,
    audience: ['Country', 'Competent Authority'],
    essence: 'Rules without consequences are merely suggestions — ensure a range of effective, proportionate, and dissuasive criminal, civil, or administrative sanctions reaching both entities and their directors/senior management.',
    obligations: [
      {
        id: 'R35-1',
        title: 'Effective, Proportionate & Dissuasive Sanctions (Criminal, Civil or Administrative)',
        body: 'Countries should ensure that there is a range of effective, proportionate and dissuasive sanctions, whether criminal, civil or administrative, available to deal with natural or legal persons covered by Recommendations 6, and 8 to 23, that fail to comply with AML/CFT requirements.'
      },
      {
        id: 'R35-2',
        title: 'Reach Both Entities AND Their Directors & Senior Management',
        body: 'Sanctions should be applicable not only to financial institutions and DNFBPs, but also to their directors and senior management.'
      }
    ],
    thresholds: [],
    keyTerms: ['dnfbp', 'should-means-must', 'law-vs-enforceable-means'],
    related: [6, 8, 10, 15, 22, 26, 27, 28],
    diagram: null,
    quiz: {
      q: 'Under Recommendation 35, to whom must AML/CFT compliance sanctions be applicable?',
      options: [
        'Not only to financial institutions and DNFBPs (and VASPs), but also to their directors and senior management.',
        'Only to junior front-desk tellers.',
        'Only to the corporate entity itself; individual executives must always be immune.',
        'Only to foreign banks operating without a local branch.'
      ],
      answer: 0,
      explain: 'R.35 explicitly mandates: "Sanctions should be applicable not only to financial institutions and DNFBPs, but also to their directors and senior management."'
    }
  },
  {
    id: 36,
    section: 'G',
    title: 'International instruments',
    oldNumber: 'R.35 & SR.I',
    interpretiveNote: false,
    audience: ['Country'],
    essence: 'Sign on the dotted line and fully implement the four foundational UN Conventions on drugs, transnational organized crime, corruption, and terrorist financing.',
    obligations: [
      {
        id: 'R36-1',
        title: 'Four Mandatory United Nations Conventions',
        body: 'Countries should take immediate steps to become party to and implement fully the Vienna Convention, 1988; the Palermo Convention, 2000; the United Nations Convention against Corruption, 2003 (the Merida Convention / UNCAC); and the Terrorist Financing Convention, 1999.'
      },
      {
        id: 'R36-2',
        title: 'Encouraged Regional & Thematic Conventions',
        body: 'Where applicable, countries are also encouraged to ratify and implement other relevant international conventions, such as the Council of Europe Convention on Cybercrime, 2001 (Budapest Convention); the Inter-American Convention against Terrorism, 2002; and the Council of Europe Convention on Laundering, Search, Seizure and Confiscation of the Proceeds from Crime and on the Financing of Terrorism, 2005 (Warsaw Convention).'
      }
    ],
    thresholds: [],
    keyTerms: ['designated-categories', 'proceeds-criminal-property'],
    related: [3, 5, 37, 38, 39],
    diagram: 'r36-conventions',
    quiz: {
      q: 'Which four international treaties are strictly MANDATORY for all countries to become party to and fully implement under Recommendation 36?',
      options: [
        'Vienna Convention (1988), Palermo Convention (2000), UN Convention against Corruption / UNCAC (2003), and Terrorist Financing Convention (1999).',
        'Basel III Accord, Paris Climate Agreement, Geneva Convention, and Antarctic Treaty.',
        'Cybercrime Convention (2001) only.',
        'Schengen Border Code and Maastricht Treaty.'
      ],
      answer: 0,
      explain: 'R.36 mandates becoming party to and fully implementing the Vienna (1988), Palermo (2000), UNCAC/Merida (2003), and Terrorist Financing (1999) Conventions (while regional conventions like Budapest Cybercrime are encouraged).'
    }
  },
  {
    id: 37,
    section: 'G',
    title: 'Mutual legal assistance',
    oldNumber: 'R.36 & SR.V',
    interpretiveNote: false,
    audience: ['Country', 'Competent Authority'],
    essence: 'When another country requests formal legal assistance to investigate or prosecute ML, predicate crimes, or TF, provide rapid, constructive assistance — without hiding behind tax matters or bank secrecy.',
    obligations: [
      {
        id: 'R37-1',
        title: 'Rapid, Constructive & Effective Widest Range of MLA',
        body: 'Countries should rapidly, constructively and effectively provide the widest possible range of mutual legal assistance (MLA) in relation to money laundering, associated predicate offences and terrorist financing investigations, prosecutions, and related proceedings. Countries should have an adequate legal basis for providing assistance and, where appropriate, should have in place treaties, arrangements or other mechanisms to enhance cooperation.'
      },
      {
        id: 'R37-2',
        title: 'Prohibited Grounds for Refusal (No Fiscal or Secrecy Refusals)',
        body: 'In particular, countries should: (a) Not prohibit, or place unreasonable or unduly restrictive conditions on, the provision of mutual legal assistance; (b) Ensure that they have clear and efficient processes for the timely prioritisation and execution of mutual legal assistance requests, including a central authority and a case management system; (c) Not refuse to execute a request for mutual legal assistance on the sole ground that the offence is also considered to involve fiscal matters; (d) Not refuse to execute a request for mutual legal assistance on the grounds of laws that impose secrecy or confidentiality requirements on financial institutions or DNFBPs (except where the relevant information was obtained in circumstances where legal professional privilege or legal professional secrecy applies); (e) Maintain the confidentiality of mutual legal assistance requests that they receive and the information contained in them, subject to fundamental principles of domestic law.'
      },
      {
        id: 'R37-3',
        title: 'Dual Criminality Flexibility & Full R.31 Investigative Powers',
        body: 'Countries should render mutual legal assistance, notwithstanding the absence of dual criminality, if the assistance does not involve coercive actions. Where dual criminality is required for mutual legal assistance, that requirement should be deemed to be satisfied regardless of whether both countries place the offence within the same category of offence, or denominate the offence by the same terminology, provided that both countries criminalise the conduct underlying the offence. All powers and investigative techniques required under R.31 should also be available for use in response to MLA requests.'
      }
    ],
    thresholds: [],
    keyTerms: ['dnfbp', 'proceeds-criminal-property'],
    related: [3, 9, 23, 31, 36, 38, 39, 40],
    diagram: 'r37-mla',
    quiz: {
      q: 'Under Recommendation 37, how is "dual criminality" evaluated when a requested country requires dual criminality for coercive Mutual Legal Assistance?',
      options: [
        'It is deemed satisfied if both countries criminalise the underlying conduct, regardless of whether they place the offence in the same category or use the same terminology.',
        'Both countries must use the exact same statutory title, section number, and language.',
        'Dual criminality is never allowed to be waived even for non-coercive assistance.',
        'Requests involving fiscal or tax matters must always be refused.'
      ],
      answer: 0,
      explain: 'R.37 mandates conduct-based dual criminality (ignoring differences in offence category or terminology), requires non-coercive MLA to be provided even without dual criminality, and prohibits refusing MLA on fiscal/tax or bank-secrecy grounds.'
    }
  },
  {
    id: 38,
    section: 'G',
    title: 'Mutual legal assistance: freezing and confiscation',
    oldNumber: 'R.38',
    interpretiveNote: true,
    audience: ['Country', 'Competent Authority'],
    essence: 'Cross-border asset recovery — take expeditious action on foreign requests to trace, freeze, seize, and confiscate criminal property, and recognise foreign confiscation orders (including non-conviction-based orders).',
    obligations: [
      {
        id: 'R38-1',
        title: 'Expeditious Cross-Border Tracing, Freezing, Seizing & Confiscation',
        body: 'Countries should ensure that they have the authority to take expeditious action in response to requests by foreign countries to identify, trace, evaluate, investigate, freeze, seize and confiscate criminal property and property of corresponding value.'
      },
      {
        id: 'R38-2',
        title: 'Recognise & Enforce Foreign Orders + Asset Management & Sharing',
        body: 'Countries should also be able to recognise and enforce foreign freezing, seizing or confiscation orders; manage such property effectively at all stages of the asset recovery process; and be able to share or return confiscated property. Countries should have in place the widest range of treaties, arrangements or other mechanisms to enhance international cooperation in asset recovery.'
      }
    ],
    inHighlights: [
      'November 2023 Revision Highlights:',
      'Must be able to respond to requests based on BOTH conviction-based and non-conviction-based confiscation proceedings (at minimum when the perpetrator is unavailable by reason of death, flight, absence, or unknown identity) and related provisional measures.',
      'Relying on Foreign Findings of Fact: When recognising and enforcing a foreign freezing, seizing, or confiscation order, the requested country should be able to rely on the findings of fact stated in the foreign order (no redundant domestic re-investigation required).',
      'Countries should empower their own courts/competent authorities to issue freezing, seizing, or confiscation orders for property located abroad.',
      'Informal communication prior to and around submitting a formal MLA request should be actively used to ensure requests are complete and actionable.'
    ],
    revisionNote: 'Substantially revised in November 2023 alongside R.4 to streamline recognition of foreign freezing/confiscation orders (relying on foreign findings of fact), mandate NCB confiscation cooperation, and strengthen asset sharing/return.',
    thresholds: [],
    keyTerms: ['freeze-seize-confiscate', 'asset-recovery', 'proceeds-criminal-property'],
    related: [4, 30, 31, 32, 37, 40],
    diagram: null,
    quiz: {
      q: 'When a requested country recognises and enforces a foreign confiscation order under Recommendation 38, how should it treat the factual basis of that order?',
      options: [
        'It should be able to rely on the findings of fact stated in the foreign order without conducting a full new domestic investigation.',
        'It must retry the entire criminal trial from scratch with all foreign witnesses flying in.',
        'It can only enforce orders for physical cash under USD/EUR 15,000.',
        'It must reject any non-conviction-based confiscation order.'
      ],
      answer: 0,
      explain: 'INR.38 specifies that countries should be able to recognise and enforce foreign freezing/seizing/confiscation orders (both conviction and non-conviction based) by relying on the findings of fact contained in the foreign order.'
    }
  },
  {
    id: 39,
    section: 'G',
    title: 'Extradition',
    oldNumber: 'R.39',
    interpretiveNote: false,
    audience: ['Country', 'Competent Authority'],
    essence: 'No safe havens for money launderers or terrorist financiers — execute extradition requests without undue delay, or if you do not extradite your own nationals, prosecute them domestically (aut dedere aut judicare).',
    obligations: [
      {
        id: 'R39-1',
        title: 'Constructive Execution Without Undue Delay & No Safe Havens',
        body: 'Countries should constructively and effectively execute extradition requests in relation to money laundering and terrorist financing, without undue delay. Countries should also take all possible measures to ensure that they do not provide safe havens for individuals charged with the financing of terrorism.'
      },
      {
        id: 'R39-2',
        title: 'Extraditable Offences, Case Management & Extradite or Prosecute Own Nationals',
        body: 'In particular, countries should: (a) ensure money laundering and terrorist financing are extraditable offences; (b) ensure that they have clear and efficient processes for the timely execution of extradition requests including prioritisation where appropriate and a case management system; (c) not place unreasonable or unduly restrictive conditions on the execution of requests; and (d) ensure they have an adequate legal framework for extradition. Each country should extradite its own nationals, or, where a country does not extradite its own nationals solely on the grounds of nationality, that country should, at the request of the country seeking extradition, submit the case without undue delay to its competent authorities for the purpose of prosecution of the offences set forth in the request.'
      },
      {
        id: 'R39-3',
        title: 'Conduct-Based Dual Criminality & Simplified Extradition Mechanisms',
        body: 'Where dual criminality is required for extradition, that requirement should be deemed to be satisfied regardless of whether both countries place the offence within the same category of offence, or denominate the offence by the same terminology, provided that both countries criminalise the conduct underlying the offence. Consistent with fundamental principles of domestic law, countries should have simplified extradition mechanisms (such as allowing direct transmission of requests for provisional arrests between appropriate authorities, extraditing persons based only on warrants of arrests or judgments, or introducing a simplified extradition of consenting persons who waive formal extradition proceedings).'
      }
    ],
    thresholds: [],
    keyTerms: ['proceeds-criminal-property'],
    related: [3, 5, 36, 37],
    diagram: null,
    quiz: {
      q: 'What must a country do under Recommendation 39 if it refuses an extradition request for a money laundering suspect solely because the suspect is one of its own citizens?',
      options: [
        'Submit the case without undue delay to its own competent authorities for domestic prosecution, and cooperate with the requesting country on procedural and evidentiary aspects.',
        'Release the suspect unconditionally and close the file.',
        'Impose a small administrative fine of USD/EUR 500.',
        'Wait until the suspect renounces their citizenship.'
      ],
      answer: 0,
      explain: 'R.39 codifies the principle of "aut dedere aut judicare" (extradite or prosecute): if extradition is refused solely on nationality grounds, the country must submit the case without undue delay to its own authorities for prosecution.'
    }
  },
  {
    id: 40,
    section: 'G',
    title: 'Other forms of international cooperation',
    oldNumber: 'R.40',
    interpretiveNote: true,
    audience: ['Country', 'Competent Authority'],
    essence: 'Beyond formal court treaties, FIUs, financial supervisors, and law enforcement agencies must rapidly exchange intelligence across borders — both spontaneously and upon request.',
    obligations: [
      {
        id: 'R40-1',
        title: 'Widest Range of Spontaneous & On-Request International Cooperation',
        body: 'Countries should ensure that their competent authorities can rapidly, constructively and effectively provide the widest range of international cooperation in relation to money laundering, associated predicate offences and terrorist financing. Countries should do so both spontaneously and upon request, and there should be a lawful basis for providing cooperation.'
      },
      {
        id: 'R40-2',
        title: 'Efficient Channels, MOUs & Information Safeguards',
        body: 'Countries should authorise their competent authorities to use the most efficient means to cooperate. Should competent authorities need bilateral or multilateral agreements or arrangements, such as a Memorandum of Understanding (MOU), these should be negotiated and signed in a timely way with the widest range of foreign counterparts. Competent authorities should use clear channels or mechanisms for the effective transmission and execution of requests for information or other types of assistance, and have clear and efficient processes for the prioritisation and timely execution of requests, and for safeguarding the information received.'
      }
    ],
    inHighlights: [
      'General Principles: Competent authorities must NOT prohibit or place unreasonable conditions on information exchange, nor refuse a request on the grounds that: (a) it involves fiscal/tax matters; (b) laws require FI/DNFBP secrecy or confidentiality (except legal privilege); (c) there is an inquiry, investigation or proceeding underway in the requested country (unless the assistance would impede it); or (d) the nature or status (civil, administrative, law enforcement, etc.) of the requesting counterpart authority is different from its foreign counterpart.',
      'Purpose Limitation & Confidentiality: Exchanged information must be used only for the purpose for which it was sought or provided; any dissemination to other authorities/third parties requires prior authorisation from the requested authority.',
      'FIU-to-FIU Cooperation: FIUs should exchange information with foreign FIUs regardless of their organizational status (administrative, law enforcement, judicial, or hybrid), have power to exchange all domestically accessible info, and be able to act on a foreign FIU request to suspend/withhold consent to a transaction.',
      'Supervisor-to-Supervisor Cooperation: Financial supervisors should exchange prudential and AML/CFT information (including CDD info, customer files, and sample accounts/transactions) especially for shared financial groups.',
      'Law Enforcement-to-Law Enforcement Cooperation: Exchange domestically available info for intelligence/investigative purposes, form joint investigative teams, participate in Asset Recovery Inter-Agency Networks (ARINs), and spontaneously share criminal property intelligence.',
      'Diagonal Cooperation (Between Non-Counterparts): Countries should permit their competent authorities to exchange information indirectly (or directly) with non-counterparts, applying the principle of reciprocity.'
    ],
    thresholds: [],
    keyTerms: ['fiu', 'financial-group', 'asset-recovery'],
    related: [2, 9, 24, 25, 26, 29, 30, 37, 38],
    diagram: 'r40-coop',
    quiz: {
      q: 'What does "spontaneous information sharing" mean under Recommendation 40?',
      options: [
        'A competent authority proactively providing relevant AML/CFT intelligence to a foreign counterpart on its own initiative, without waiting for a prior request.',
        'Publishing confidential Suspicious Transaction Reports on social media.',
        'Allowing commercial banks to wire funds without originator names.',
        'Sharing information only after a 2-year diplomatic treaty ratification.'
      ],
      answer: 0,
      explain: 'R.40 requires competent authorities to cooperate both "spontaneously" (proactively alerting foreign counterparts when they uncover cross-border ML/TF links) and "upon request".'
    }
  }
];
