import { BeginnerGuide } from '../types/fatf';

export const BEGINNER_GUIDE_EN_1_TO_20: Record<number, BeginnerGuide> = {
  1: {
    recId: 1,
    analogyTitle: 'How Hospital Emergency Triage Allocates Attention',
    analogyBody:
      'In a hospital emergency room, doctors do not treat patients strictly in the order they walk through the door; they prioritize by severity. A patient with chest pain receives immediate intensive care, while someone with a scraped knee gets a quick bandage. Recommendation 1 applies this Risk-Based Approach (RBA) to financial crime: countries and banks must concentrate scrutiny on high-risk areas (such as shell companies or politically exposed persons) while simplifying procedures for verifiable low-risk customers.',
    storyTitle: 'Comparing a Student Savings Account with a Cross-Border Diamond Trader',
    storySteps: [
      'A university student opens a basic account to receive a $150 monthly allowance from her parents.',
      'That same afternoon, a newly incorporated trading firm requests an account to wire $5 million per week to offshore diamond brokers.',
      'Without a Risk-Based Approach, a bank might waste resources applying identical paperwork to both customers.',
      'Under Recommendation 1, the student undergoes Simplified Due Diligence (SDD), while the diamond trader undergoes Enhanced Due Diligence (EDD) to verify its beneficial owners and source of funds.'
    ],
    jargonBuster: [
      {
        term: 'Risk-Based Approach (RBA)',
        simpleMeaning:
          'Calibrating anti-money laundering controls to match actual risk levels rather than applying uniform rules to every customer.'
      },
      {
        term: 'National Risk Assessment (NRA)',
        simpleMeaning:
          'A government-led diagnostic study mapping where money laundering and terrorist financing risks are highest across the country.'
      },
      {
        term: 'EDD vs. SDD',
        simpleMeaning:
          'Enhanced Due Diligence (stricter verification for high-risk clients) versus Simplified Due Diligence (streamlined checks for proven low-risk clients).'
      }
    ],
    misconception: {
      myth: 'Applying a Risk-Based Approach means banks should refuse entire categories of customers that appear risky (wholesale de-risking).',
      reality:
        'FATF opposes indiscriminate de-risking because pushing legitimate customers out of regulated banking drives transactions into unmonitored underground channels.'
    }
  },
  2: {
    recId: 2,
    analogyTitle: 'Connecting Intelligence Across National Agencies',
    analogyBody:
      'Financial criminals move funds across commercial banks, customs borders, tax registries, and crypto exchanges within hours. If the Financial Intelligence Unit (FIU), police, customs, and banking regulators operate in isolated silos, the trail goes cold. Recommendation 2 requires domestic agencies to coordinate policies and share intelligence while aligning with data protection laws.',
    storyTitle: 'Linking Customs Seizures with Tax and FIU Records',
    storySteps: [
      'Customs officers at an airport question a passenger carrying an unusual quantity of gold bullion.',
      'Separately, tax authorities note the same individual owns twelve luxury properties despite declaring zero income, while police are investigating his links to a smuggling ring.',
      'If these agencies do not communicate, the passenger merely pays a minor customs fine and walks away.',
      'Under Recommendation 2, inter-agency gateways allow the FIU, customs, tax, and police to connect their findings into a joint investigation.'
    ],
    jargonBuster: [
      {
        term: 'Competent Authorities',
        simpleMeaning:
          'Public agencies with designated AML/CFT responsibilities, including the FIU, law enforcement, prosecutors, financial supervisors, and customs.'
      },
      {
        term: 'Proliferation Financing (PF)',
        simpleMeaning:
          'Providing funds or financial services for the manufacture, acquisition, or delivery of chemical, biological, or nuclear weapons.'
      }
    ],
    misconception: {
      myth: 'Data privacy laws prevent domestic regulators and financial intelligence units from sharing case data with each other.',
      reality:
        'Recommendation 2 requires countries to ensure privacy and data protection rules work in harmony with inter-agency AML/CFT cooperation.'
    }
  },
  3: {
    recId: 3,
    analogyTitle: 'Why Hiding Criminal Proceeds Is a Separate Crime',
    analogyBody:
      'Before modern anti-money laundering laws, someone who helped a narcotics cartel disguise millions in cash through a chain of businesses could claim they never touched the drugs themselves. Recommendation 3 makes Money Laundering (ML) an independent criminal offence across at least 21 designated categories of underlying crime (predicate offences), covering placement, layering, and integration.',
    storyTitle: 'How Illicit Proceeds Pass Through Three Stages',
    storySteps: [
      'Placement: An embezzlement ring deposits stolen cash into dozens of small business accounts to enter the banking system.',
      'Layering: The funds are wired across three jurisdictions and used to purchase bearer instruments and shell company shares to obscure the audit trail.',
      'Integration: The funds return as apparent foreign investment to purchase a commercial office tower.',
      'Under Recommendation 3, prosecutors can charge both the original embezzlers (self-laundering) and the third-party facilitators who disguised the funds.'
    ],
    jargonBuster: [
      {
        term: 'Predicate Offence',
        simpleMeaning:
          'The underlying crime (such as corruption, tax evasion, fraud, or drug trafficking) that generated the illegal proceeds.'
      },
      {
        term: 'Self-Laundering',
        simpleMeaning:
          'When the person who committed the original crime also launders the resulting proceeds, incurring criminal liability for both offences.'
      }
    ],
    misconception: {
      myth: 'To convict someone of money laundering, prosecutors must first secure a separate court conviction for the underlying predicate crime.',
      reality:
        'FATF standards state that a prior conviction for the predicate offence is not required; illicit origin can be proven through circumstantial and financial evidence.'
    }
  },
  4: {
    recId: 4,
    analogyTitle: 'Removing the Profit Motive from Financial Crime',
    analogyBody:
      'Many career criminals view a five-year prison sentence as an acceptable trade-off if $20 million in stolen wealth is waiting for them and their families upon release. Recommendation 4 requires countries to trace, freeze, seize, and permanently confiscate criminal proceeds, instrumentalities, and property of corresponding value—including through Non-Conviction Based (NCB) confiscation when a suspect flees or dies.',
    storyTitle: 'Recovering Stolen Assets After a Suspect Flees Abroad',
    storySteps: [
      'A corrupt procurement official diverts $12 million in public hospital funds into luxury apartments and offshore accounts.',
      'When investigators uncover the scheme, prosecutors obtain an immediate ex-parte freezing order to lock the bank accounts and property titles without prior notice.',
      'Before trial begins, the suspect flees the country (or passes away), preventing a standard criminal conviction.',
      'Using Non-Conviction Based (NCB) confiscation under Recommendation 4, the court forfeits the stolen assets directly to the state.'
    ],
    jargonBuster: [
      {
        term: 'Freezing vs. Confiscation',
        simpleMeaning:
          'Freezing temporarily prohibits the transfer or movement of assets during an investigation; confiscation permanently transfers ownership to the state by final order.'
      },
      {
        term: 'Non-Conviction Based (NCB) Confiscation',
        simpleMeaning:
          'Judicial forfeiture directed against the illicit property itself (in rem) when the offender has died, fled, or is immune from prosecution.'
      },
      {
        term: 'Property of Corresponding Value',
        simpleMeaning:
          'Legitimate assets seized as an equivalent substitute when the original criminal proceeds have been spent or hidden beyond reach.'
      }
    ],
    misconception: {
      myth: 'If a launderer spends all the stolen cash on non-refundable luxury travel, the state cannot recover anything from their other legitimate assets.',
      reality:
        'Courts can confiscate legitimate property of equivalent value owned by the offender.'
    }
  },
  5: {
    recId: 5,
    analogyTitle: 'Cutting Off Funds to Terrorist Networks Regardless of Source',
    analogyBody:
      'While money laundering always starts with dirty money that criminals try to make look clean, Terrorist Financing (TF) often starts with clean money—such as salaries, donations, or small business profits—funneled toward violent ends. Recommendation 5 requires countries to criminalize financing terrorist acts, terrorist organizations, or individual terrorists, even if the funds are never linked to a specific attack.',
    storyTitle: 'Financing Logistical Support Without a Specific Attack',
    storySteps: [
      'A group of donors collects $8,000 from legitimate wages and transfers it to a known foreign terrorist organization.',
      'The funds are not earmarked for weapons; instead, they pay for rent, food, and travel documents for the group’s members.',
      'Even if no attack is carried out—and even if the funds came from legal employment—every participant who knowingly provided or collected the funds commits a criminal offence under Recommendation 5.'
    ],
    jargonBuster: [
      {
        term: 'Terrorist Financing (TF)',
        simpleMeaning:
          'Willfully providing or collecting funds or assets, from either legitimate or unlawful sources, with the knowledge that they will be used by terrorists or terrorist organizations.'
      },
      {
        term: 'Foreign Terrorist Fighters (FTFs)',
        simpleMeaning:
          'Individuals who travel to a state other than their residence or nationality to perpetrate, plan, or participate in terrorist acts—financing their travel is a criminal offence under R.5.'
      }
    ],
    misconception: {
      myth: 'Sending money to a terrorist group is only a crime if the money comes from illegal activities or is used to buy weapons.',
      reality:
        'Financing a terrorist organization or individual terrorist for any purpose (including living expenses) using clean money is a serious criminal offence.'
    }
  },
  6: {
    recId: 6,
    analogyTitle: 'Freezing Terrorist Assets Without Delay',
    analogyBody:
      'Once the UN Security Council or a national authority designates a person or group as a terrorist financier, waiting days for courtroom paperwork gives them ample time to empty their accounts. Recommendation 6 requires all financial institutions and citizens to freeze designated assets "without delay"—ideally within a matter of hours—without giving prior notice to the target.',
    storyTitle: 'How a Sanctions Designation Triggers an Immediate Freeze',
    storySteps: [
      'The United Nations Security Council adds an individual to the UNSCR 1267 sanctions list at 10:00 AM.',
      'Automated sanctions-screening software at a domestic bank detects a matching account holder at 11:30 AM.',
      'Without notifying the customer, the bank immediately freezes the account balance, blocks incoming and outgoing transfers, and reports the freeze to the FIU and regulator.'
    ],
    jargonBuster: [
      {
        term: 'Targeted Financial Sanctions (TFS)',
        simpleMeaning:
          'Asset freezes and prohibitions against making funds or services available to specific designated persons or entities.'
      },
      {
        term: 'UNSCR 1267 vs. UNSCR 1373',
        simpleMeaning:
          'UN Resolution 1267 (and successors) covers centrally designated Al-Qaida and ISIL lists; UN Resolution 1373 requires countries to designate terrorist targets at the national level.'
      }
    ],
    misconception: {
      myth: 'Freezing an account "without delay" means within five to seven business days after internal legal review.',
      reality:
        'In the FATFGlossary, "without delay" means ideally within a matter of hours of a designation by the UN Security Council.'
    }
  },
  7: {
    recId: 7,
    analogyTitle: 'Blocking the Financial Networks Behind Weapons of Mass Destruction',
    analogyBody:
      'State-sponsored networks attempting to build nuclear, chemical, or biological weapons rarely buy components under their own names. Instead, they use front companies, shipping intermediaries, and trade finance letters of credit to purchase dual-use machinery. Recommendation 7 requires immediate asset freezes against persons and entities designated by the UN Security Council for proliferation financing.',
    storyTitle: 'Stopping a Front Company’s Trade Finance Transaction',
    storySteps: [
      'An import-export company requests a letter of credit from a commercial bank to purchase high-grade industrial centrifuges.',
      'The bank screens the shipping vessel and the ultimate parent company against UN Security Council proliferation sanctions lists.',
      'Discovering that the parent entity is controlled by a designated proliferation network, the bank freezes the funds without delay and reports the attempted transaction to authorities.'
    ],
    jargonBuster: [
      {
        term: 'Proliferation Financing (PF) TFS',
        simpleMeaning:
          'Targeted financial sanctions imposed under UN Security Council resolutions to prevent the financing of nuclear, chemical, or biological weapons programs.'
      }
    ],
    misconception: {
      myth: 'Proliferation financing sanctions only matter for defense contractors and military suppliers.',
      reality:
        'Commercial banks, maritime insurers, and trade finance providers are the primary channels targeted by front companies acquiring dual-use goods.'
    }
  },
  8: {
    recId: 8,
    analogyTitle: 'Protecting High-Risk Charities Without Paralyzing Humanitarian Aid',
    analogyBody:
      'Charities and Non-Profit Organizations (NPOs) often operate in conflict zones where cash is required to deliver food and medical relief. Terrorist groups sometimes exploit this goodwill—either by setting up sham charities or diverting funds in the field. Recommendation 8 explicitly states that countries must not burden every local hobby club or community group; instead, they must apply focused, risk-based measures only to the subset of NPOs at genuine risk of terrorist financing abuse.',
    storyTitle: 'Safeguarding Aid Deliveries in a Conflict Zone',
    storySteps: [
      'A humanitarian foundation raises donations domestically to build clinics in a conflict-affected foreign region.',
      'Because operating near active militant groups carries higher TF risk, the foundation verifies its local partner organizations, tracks disbursements through regulated banking channels where possible, and audits project completion.',
      'Meanwhile, low-risk domestic charities face no unnecessary regulatory barriers that would disrupt their legitimate charitable work.'
    ],
    jargonBuster: [
      {
        term: 'FATF NPO Definition',
        simpleMeaning:
          'A legal person or arrangement or organization that primarily engages in raising or disbursing funds for charitable, religious, cultural, educational, social, or fraternal purposes.'
      }
    ],
    misconception: {
      myth: 'Recommendation 8 treats all charities and non-profits as high-risk entities that banks should avoid.',
      reality:
        'FATF revised Recommendation 8 specifically to stop over-regulation and bank de-risking of legitimate humanitarian organizations.'
    }
  },
  9: {
    recId: 9,
    analogyTitle: 'Ensuring Bank Secrecy Laws Never Block AML Investigations',
    analogyBody:
      'Customer privacy is an important principle in everyday banking so unauthorized third parties cannot snoop on personal finances. However, some jurisdictions historically used strict "bank secrecy" statutes to refuse requests from their own financial regulators, FIUs, or foreign counterparts. Recommendation 9 establishes an absolute rule: domestic secrecy or confidentiality laws must never inhibit the implementation of any FATF Recommendation.',
    storyTitle: 'Overriding Secrecy Claims During a Corruption Probe',
    storySteps: [
      'The Financial Intelligence Unit (FIU) requests transaction histories for three corporate accounts suspected of receiving kickbacks.',
      'The bank’s legal counsel cannot cite customer confidentiality agreements or banking privacy statutes to withhold the records.',
      'Under Recommendation 9, statutory gateways mandate full disclosure to competent authorities and permit cross-border information sharing between supervisors and FIUs.'
    ],
    jargonBuster: [
      {
        term: 'Financial Institution Secrecy Laws',
        simpleMeaning:
          'Statutory or contractual banking confidentiality rules, which must be legally overridden whenever competent authorities request records for AML/CFT purposes.'
      }
    ],
    misconception: {
      myth: 'Signing a private non-disclosure agreement with a private wealth bank prevents regulators from viewing account records.',
      reality:
        'Statutory AML obligations override private contracts and banking secrecy provisions.'
    }
  },
  10: {
    recId: 10,
    analogyTitle: 'Customer Due Diligence (CDD): Knowing Who Is Really Behind the Account',
    analogyBody:
      'A bank cannot prevent financial crime if it allows people to open accounts under fake names or hide behind opaque corporate shells. Recommendation 10 is the cornerstone of preventive banking: financial institutions are prohibited from keeping anonymous accounts and must perform Customer Due Diligence (CDD)—verifying the customer’s identity, identifying the Ultimate Beneficial Owner (UBO), understanding the purpose of the account, and monitoring transactions over time.',
    storyTitle: 'What Happens When a Client Refuses to Disclose Beneficial Ownership',
    storySteps: [
      'A newly formed company applies to open a corporate bank account.',
      'The bank performs CDD: it checks the company registration, verifies the representative’s authority, and asks who the natural persons (Beneficial Owners) behind the parent holding company are.',
      'The representative refuses to reveal who owns the parent company overseas.',
      'Under Recommendation 10, the bank must refuse to open the account (or terminate an existing relationship) and consider filing a Suspicious Transaction Report (STR) with the FIU.'
    ],
    jargonBuster: [
      {
        term: 'CDD (Customer Due Diligence)',
        simpleMeaning:
          'The four-part process of identifying and verifying the customer, identifying the beneficial owner, understanding the nature of the business relationship, and conducting ongoing monitoring.'
      },
      {
        term: 'Beneficial Owner (UBO)',
        simpleMeaning:
          'The living human being(s) who ultimately own or control a customer or on whose behalf a transaction is being conducted.'
      }
    ],
    misconception: {
      myth: 'Customer Due Diligence is a one-time identity check completed on the day the customer opens an account.',
      reality:
        'CDD requires Ongoing Due Diligence throughout the life of the relationship to ensure transactions match the customer’s known risk profile and source of funds.'
    }
  },
  11: {
    recId: 11,
    analogyTitle: 'The 5-Year Rule for Reconstructing the Paper Trail',
    analogyBody:
      'Complex corruption or fraud schemes are often uncovered years after the initial transfers took place. If banks delete transaction logs or discard customer identity files after twelve months, investigators hit a dead end. Recommendation 11 requires financial institutions to retain all transaction records and CDD files for at least five years so authorities can reconstruct individual transactions as courtroom evidence.',
    storyTitle: 'Reconstructing a Four-Year-Old Laundering Trail',
    storySteps: [
      'In 2026, anti-corruption prosecutors uncover a bribery scheme that occurred in 2022.',
      'Investigators issue a production order to the bank where the suspect closed his account in 2023.',
      'Because Recommendation 11 mandates retaining CDD records for at least 5 years after the relationship ends (and transaction records for 5 years after the transaction), the bank retrieves the complete archive within hours.'
    ],
    jargonBuster: [
      {
        term: '5-Year Retention Rule',
        simpleMeaning:
          'The mandatory minimum period (5 years) to retain transaction records from the date of the transaction, and CDD/KYC files from the date the account or relationship is closed.'
      }
    ],
    misconception: {
      myth: 'Once a customer closes their bank account, the bank can immediately purge their identity documents to save storage space.',
      reality:
        'The 5-year retention clock for CDD identity documents only starts ticking on the day the business relationship officially ends.'
    }
  },
  12: {
    recId: 12,
    analogyTitle: 'Why Politically Exposed Persons (PEPs) Require Extra Scrutiny',
    analogyBody:
      'Heads of state, senior ministers, judges, military generals, and state-owned enterprise executives hold authority over public budgets, procurement contracts, and licenses. Because that power creates an inherent vulnerability to bribery and embezzlement, Recommendation 12 classifies them—along with their immediate family members and close associates—as Politically Exposed Persons (PEPs) who require Enhanced Due Diligence.',
    storyTitle: 'Onboarding the Family Member of a Government Minister',
    storySteps: [
      'The spouse of a senior cabinet minister opens a wealth management account and deposits $2 million.',
      'Screening identifies the client as a PEP family member.',
      'Under Recommendation 12, the bank obtains senior management approval to open the account, takes reasonable measures to establish the Source of Wealth and Source of Funds, and conducts enhanced ongoing monitoring.'
    ],
    jargonBuster: [
      {
        term: 'PEP (Politically Exposed Person)',
        simpleMeaning:
          'An individual entrusted with a prominent public function (foreign, domestic, or within an international organization), along with their family members and close associates.'
      },
      {
        term: 'Source of Wealth vs. Source of Funds',
        simpleMeaning:
          'Source of Wealth explains how the client accumulated their overall net worth; Source of Funds explains the exact origin of the specific money used in a given transaction.'
      }
    ],
    misconception: {
      myth: 'Being classified as a PEP means the person is suspected of corruption and should be denied a bank account.',
      reality:
        'PEP status is preventive, not an accusation of wrongdoing; banks can serve honest PEPs after applying Enhanced Due Diligence.'
    }
  },
  13: {
    recId: 13,
    analogyTitle: 'Vetting Foreign Correspondent Banks Before Opening a Cross-Border Gateway',
    analogyBody:
      'When a local bank in Country A has no physical branch in New York or London, it relies on a large international bank (the Correspondent) to process foreign-currency wires for its customers (the Respondent). Because the Correspondent Bank does not directly know the Respondent’s underlying customers, Recommendation 13 requires strict vetting of the Respondent Bank’s AML controls and an absolute ban on dealing with Shell Banks.',
    storyTitle: 'Preventing a Weak Foreign Bank from Using Your Payment Rails',
    storySteps: [
      'A small offshore bank asks a major international bank to open a US dollar correspondent account.',
      'Before agreeing, the correspondent bank gathers public information on the respondent’s supervision, evaluates its AML/CFT controls, obtains senior management approval, and confirms it does not permit its accounts to be used by shell banks.',
      'Payable-through accounts (where the respondent’s customers write checks directly on the correspondent account) are only allowed if the respondent performs full CDD and can provide customer files upon request.'
    ],
    jargonBuster: [
      {
        term: 'Correspondent vs. Respondent Bank',
        simpleMeaning:
          'The Correspondent Bank provides payment and clearing services; the Respondent Bank is the foreign client institution using those services for its customers.'
      },
      {
        term: 'Payable-Through Account (PTA)',
        simpleMeaning:
          'A correspondent account that allows the respondent bank’s own customers to transact directly through the account.'
      }
    ],
    misconception: {
      myth: 'The correspondent bank must perform individual KYC on every single retail customer of the respondent bank.',
      reality:
        'The correspondent bank assesses the respondent institution’s AML systems as a whole, rather than performing retail CDD on every underlying customer (except for specific payable-through verification requirements).'
    }
  },
  14: {
    recId: 14,
    analogyTitle: 'Licensing Remittance Providers and Stopping Underground Banking',
    analogyBody:
      'Millions of migrant workers send money home through Money or Value Transfer Services (MVTS) rather than traditional banks. However, unlicensed underground remittance networks (such as informal Hawala brokers) can move millions across borders without leaving a paper trail. Recommendation 14 requires every remittance provider to be licensed or registered, monitor its network of local agents, and subject illegal operators to sanctions.',
    storyTitle: 'Bringing Informal Remittance Channels into Regulated Oversight',
    storySteps: [
      'An unlicensed shop owner takes $50,000 in cash from a local client and messages an associate in another country to hand out equivalent local currency from a safe.',
      'Because no regulated wire transfer occurred, this unlicensed MVTS operation bypasses AML monitoring and violates Recommendation 14.',
      'Licensed remittance companies, by contrast, must register with the financial regulator, maintain an updated list of all sub-agents, and include those agents in their AML compliance programs.'
    ],
    jargonBuster: [
      {
        term: 'MVTS (Money or Value Transfer Services)',
        simpleMeaning:
          'Financial services that accept cash, checks, or other stores of value in one location and pay a corresponding sum to a beneficiary in another location.'
      }
    ],
    misconception: {
      myth: 'If a licensed remittance company uses independent corner shops as agents, the main company is not responsible for the agents’ AML compliance.',
      reality:
        'Licensed MVTS providers must include all agents in their AML/CFT programmes and monitor them for compliance.'
    }
  },
  15: {
    recId: 15,
    analogyTitle: 'Assessing New Fintech Products and Regulating Crypto Exchanges (VASPs)',
    analogyBody:
      'Every time a new financial technology emerges—whether instant mobile wallets or virtual assets (cryptocurrencies)—criminals test it for speed and anonymity. Recommendation 15 has two core mandates: first, banks must assess ML/TF risks before launching any new product or technology; second, countries must license or register Virtual Asset Service Providers (VASPs) and enforce the Crypto Travel Rule.',
    storyTitle: 'How a Regulated Crypto Exchange Applies Recommendation 15',
    storySteps: [
      'Before launching a new instant peer-to-peer payment app, a financial institution conducts a pre-launch AML risk assessment and builds transaction limits and monitoring into the software.',
      'For cryptocurrencies, Virtual Asset Service Providers (exchanges and custodial wallet providers) must be licensed, supervised, and perform full CDD on users (with an occasional transaction threshold of $1,000/€1,000).',
      'When transferring crypto between exchanges, VASPs must securely transmit originator and beneficiary identity data immediately (the Travel Rule).'
    ],
    jargonBuster: [
      {
        term: 'VASP (Virtual Asset Service Provider)',
        simpleMeaning:
          'Any business that exchanges, transfers, safekeeps, or provides financial services for virtual assets (cryptocurrencies) on behalf of others.'
      },
      {
        term: 'Crypto Travel Rule',
        simpleMeaning:
          'The requirement that VASPs obtain, hold, and securely transmit originator and beneficiary identity information immediately alongside virtual asset transfers.'
      }
    ],
    misconception: {
      myth: 'Cryptocurrency exchanges are technology companies rather than financial institutions, so AML rules do not apply to them.',
      reality:
        'Recommendation 15 subjects VASPs to the full suite of FATF preventive, licensing, and Travel Rule obligations.'
    }
  },
  16: {
    recId: 16,
    analogyTitle: 'The Wire Transfer Travel Rule: Keeping Sender and Receiver Identities Attached',
    analogyBody:
      'Imagine if international postal parcels were allowed to travel with no return address and no recipient name—customs would have no way to trace contraband. Recommendation 16 (the Wire Transfer Travel Rule) ensures that cross-border electronic funds transfers of $1,000/€1,000 or more always carry verified originator (sender) and beneficiary (receiver) information across every bank in the payment chain.',
    storyTitle: 'Tracing an International Wire Across Three Banks',
    storySteps: [
      'Ordering Institution (Bank A): Verifies the sender’s name, account number, and address before initiating a $5,000 cross-border wire.',
      'Intermediary Institution (Bank B): Ensures all originator and beneficiary data remains intact in the payment message and checks for missing fields.',
      'Beneficiary Institution (Bank C): Verifies the identity of the recipient and screens both parties against sanctions lists before crediting the account.'
    ],
    jargonBuster: [
      {
        term: 'Travel Rule (Recommendation 16)',
        simpleMeaning:
          'The requirement that originator and beneficiary identity details "travel" with a wire transfer through every ordering, intermediary, and beneficiary institution.'
      }
    ],
    misconception: {
      myth: 'An intermediary bank in the middle of a wire transfer can strip out the sender’s name to protect privacy.',
      reality:
        'Intermediary banks are legally required to preserve all originator and beneficiary information accompanying a wire transfer.'
    }
  },
  17: {
    recId: 17,
    analogyTitle: 'Relying on Third-Party CDD Without Outsourcing Final Responsibility',
    analogyBody:
      'When a customer opens an investment account through a subsidiary or regulated partner bank that has already verified their identity, repeating the entire document collection from scratch can be redundant. Recommendation 17 allows a bank to rely on a regulated third party to perform CDD—provided the bank obtains the core CDD information immediately, can access document copies upon request, and retains 100% of the legal liability if the third party’s checks were flawed.',
    storyTitle: 'Opening a Brokerage Account Through a Partner Bank',
    storySteps: [
      'A retail bank has already verified a customer’s identity and beneficial ownership.',
      'When that customer opens an account with an affiliated brokerage firm, the brokerage relies on the bank’s CDD under Recommendation 17.',
      'The brokerage immediately receives the customer’s CDD data from the bank—knowing that if the bank failed to spot a forged passport, regulators will hold the brokerage legally responsible.'
    ],
    jargonBuster: [
      {
        term: 'Third-Party Reliance vs. Outsourcing',
        simpleMeaning:
          'Reliance (R.17) applies when relying on an independent regulated financial institution or DNFBP; it does not apply to outsourced service providers or agents acting under contract for the bank.'
      }
    ],
    misconception: {
      myth: 'If Bank A relies on Bank B to perform KYC and Bank B makes a major mistake, Bank A is excused from regulatory penalties.',
      reality:
        'Under Recommendation 17, ultimate responsibility for CDD always remains with the financial institution relying on the third party.'
    }
  },
  18: {
    recId: 18,
    analogyTitle: 'Internal Controls and Group-Wide Compliance Across Foreign Branches',
    analogyBody:
      'If a multinational banking group enforces strict AML rules at its headquarters in London or Singapore, but its subsidiary branch in a smaller country has weak oversight, launderers will simply walk into the foreign branch to enter the global group. Recommendation 18 requires financial institutions to maintain strong internal controls (an independent compliance officer, staff screening, ongoing training, and independent audit) and apply group-wide AML programs across all branches and majority-owned subsidiaries worldwide.',
    storyTitle: 'Sharing Suspicious Activity Intelligence Across a Banking Group',
    storySteps: [
      'A client attempts to deposit suspicious funds at a banking group’s subsidiary in Country X and is turned away.',
      'The next day, the same client tries to open an account at the group’s branch in Country Y.',
      'Because Recommendation 18 requires group-wide information sharing (including branch-to-headquarters reporting of underlying STR facts for risk management), the group’s compliance team blocks the onboarding across all branches.'
    ],
    jargonBuster: [
      {
        term: 'Group-Wide AML/CFT Programme',
        simpleMeaning:
          'Enterprise-wide compliance policies, customer data sharing, and audit standards applied consistently across a parent bank and all its domestic and foreign branches and subsidiaries.'
      }
    ],
    misconception: {
      myth: 'If a foreign country has weaker AML laws than the bank’s home country, the foreign branch only needs to follow the weaker local rules.',
      reality:
        'Where host-country AML requirements are less strict than home-country rules, foreign branches and subsidiaries must apply the stricter home-country standards.'
    }
  },
  19: {
    recId: 19,
    analogyTitle: 'Enhanced Scrutiny and Countermeasures for High-Risk Countries',
    analogyBody:
      'Just as airports apply heightened security screening to flights arriving from high-risk conflict zones, banks must apply heightened scrutiny to transactions involving jurisdictions with strategic AML/CFT deficiencies. Recommendation 19 requires Enhanced Due Diligence (EDD) on relationships and transactions involving countries on the FATF Grey List or Black List, and requires proportionate countermeasures against the highest-risk jurisdictions.',
    storyTitle: 'Handling a Commercial Wire from a High-Risk Jurisdiction',
    storySteps: [
      'A domestic manufacturer receives an order and a $900,000 wire transfer from a buyer located in a jurisdiction listed on the FATF "Call for Action" (Black List).',
      'Under Recommendation 19, the bank cannot process the transfer on standard autopilot.',
      'The bank applies Enhanced Due Diligence—verifying the shipping bills of lading, the true beneficial owners of the buyer, and the source of funds—while regulators may also restrict establishing branches or correspondent links with that country.'
    ],
    jargonBuster: [
      {
        term: 'FATF Black List vs. Grey List',
        simpleMeaning:
          'The Black List ("High-Risk Jurisdictions subject to a Call for Action") triggers mandatory EDD and countermeasures; the Grey List ("Jurisdictions under Increased Monitoring") identifies countries actively working with FATF to fix strategic deficiencies.'
      }
    ],
    misconception: {
      myth: 'Only transactions coming from countries officially named by FATF require geographic risk assessment.',
      reality:
        'Banks must apply Enhanced Due Diligence when called for by FATF and independently when a country’s risk profile warrants it.'
    }
  },
  20: {
    recId: 20,
    analogyTitle: 'Filing Suspicious Transaction Reports (STRs) Promptly with the FIU',
    analogyBody:
      'All customer identity checks and monitoring systems lead to a critical moment: when a bank spots a transaction that makes no economic sense or appears linked to crime, what must it do? Recommendation 20 mandates that if a financial institution suspects—or has reasonable grounds to suspect—that funds are the proceeds of a criminal activity or are related to terrorist financing, it must report its suspicions promptly to the Financial Intelligence Unit (FIU).',
    storyTitle: 'Why Even an Cancelled Transaction Must Be Reported',
    storySteps: [
      'A new customer walks into a bank branch to deposit $45,000 in cash.',
      'When the teller asks for standard source-of-funds documentation, the customer becomes nervous, grabs the cash back, and leaves without completing the deposit.',
      'Even though no money entered the bank, the attempted transaction raised reasonable suspicion—so under Recommendation 20, the bank must file an STR with the FIU.'
    ],
    jargonBuster: [
      {
        term: 'STR (Suspicious Transaction Report)',
        simpleMeaning:
          'A confidential report filed by a reporting institution with the national FIU detailing completed or attempted transactions suspected of involving illicit proceeds or terrorist financing.'
      }
    ],
    misconception: {
      myth: 'Banks only need to file an STR if the suspicious transaction exceeds a specific dollar threshold or if the customer actually completes the transfer.',
      reality:
        'Under Recommendation 20, STRs must be filed regardless of the monetary amount and must also cover attempted transactions.'
    }
  }
};
