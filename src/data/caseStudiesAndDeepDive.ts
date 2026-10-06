import { DeepStudyMaterial } from '../types/fatf';

export const DEEP_STUDY_DATA: Record<number, DeepStudyMaterial> = {
  1: {
    recId: 1,
    plainEnglishWhy:
      'Before 2012, AML compliance was often treated like a robotic "tick-box" exercise: banks spent 80% of their time collecting utility bills from low-risk local pensioners while missing billions flowing through offshore shell companies. Recommendation 1 flipped the script: figure out where your actual threats are first, then aim your heaviest compliance firepower at the highest risks.',
    mondayMorningReality:
      'At the national level, the government publishes a National Risk Assessment (NRA) identifying its biggest vulnerabilities (e.g., luxury real estate, cross-border wire corridors, or crypto). Inside a bank or law firm, the Compliance team builds an Enterprise-Wide Risk Assessment (EWRA) and scores customers as Low, Medium, or High Risk. Low-risk retail accounts get streamlined onboarding; high-risk offshore holding companies face deep investigation into where their wealth came from.',
    criminalPlaybookAndRedFlags: [
      'Exploiting "blind spots" in a country’s National Risk Assessment—such as moving from heavily policed big banks into lightly supervised regional credit unions or luxury car dealerships.',
      'Disguising high-risk cross-border trade flows as routine domestic commercial accounts to qualify for Simplified Due Diligence (SDD).',
      'Using newly formed front companies to evade UN WMD proliferation sanctions (where simplified measures are strictly forbidden).'
    ],
    caseStudy: {
      title: 'Commonwealth Bank of Australia (CBA) — Intelligent Deposit Machine (IDM) Blind Spot',
      jurisdictionAndYear: 'Australia · 2017–2018 (AUSTRAC Enforcement)',
      whatHappened:
        'CBA rolled out "Intelligent Deposit Machines" (ATMs that accepted up to 200 notes at a time and instantly credited accounts globally) without conducting a proper ML/TF risk assessment before or after launch. Drug syndicates and cuckoo-smurfing networks realised they could feed millions of dollars in street cash into these machines anonymously 24/7.',
      theBreach:
        'Direct breach of R.1 (and R.15): Failure to identify, assess, and mitigate the obvious high ML/TF risks of anonymous high-velocity cash deposit machines, treating them as standard low-risk retail ATM channels.',
      consequencesAndLesson:
        'CBA paid a record AUD 700 million civil penalty after AUSTRAC uncovered over 53,000 unreported threshold transactions and widespread syndicate abuse. Lesson: A risk-based approach is only as strong as the honesty and thoroughness of your risk assessment.'
    },
    assessorLens:
      'FATF assessors (under Immediate Outcome 1) check whether a country’s National Risk Assessment is just a dusty PDF sitting on a shelf, or whether supervisors, police, and banks actually shifted their budgets and staff toward the high-risk sectors identified in the NRA.'
  },
  2: {
    recId: 2,
    plainEnglishWhy:
      'Criminals love bureaucratic silos. If the customs agency seizes cash at the airport, the tax office audits a front company, the FIU receives a bank alert, and the police investigate a gang—but none of those agencies talk to each other because of turf wars or misread privacy laws—the launderer walks free.',
    mondayMorningReality:
      'Countries establish an inter-agency AML/CFT National Coordination Committee (bringing together the Central Bank, FIU, Police, Prosecutors, Tax, Customs, and Data Protection Commissioner). Operational taskforces sit in the same room (or share secure digital platforms) so privacy rules and AML rules work together rather than blocking intelligence sharing.',
    criminalPlaybookAndRedFlags: [
      'Splitting criminal schemes across multiple regulators (e.g., combining an insurance product, a securities broker, and a free-trade zone warehouse) knowing those regulators rarely share files.',
      'Weaponising strict data-localisation or privacy laws to argue that a local subsidiary cannot share suspicious customer identities with domestic or group authorities.'
    ],
    caseStudy: {
      title: 'Project Titan & Joint Public-Private Financial Intelligence Taskforces (JMLIT / Fintel Alliance)',
      jurisdictionAndYear: 'United Kingdom & Global · 2015–Present',
      whatHappened:
        'For years, UK banks filed hundreds of thousands of isolated SARs while law enforcement investigated major organized crime groups in parallel silos. Neither side could see the full network until the UK created the Joint Money Laundering Intelligence Taskforce (JMLIT) under R.2 coordination principles, bringing the NCA, FCA, HMRC, and major banks into a legal information-sharing hub.',
      theBreach:
        'Prior to coordinated taskforces, fragmented agency silos and over-cautious interpretations of data privacy rules allowed complex laundering rings to hop between banks faster than paper referrals could travel.',
      consequencesAndLesson:
        'Within its first years, JMLIT coordination directly enabled hundreds of arrests, account freezes of over £130M+, and inspired FATF’s revision of R.2 to explicitly require compatibility between AML/CFT and Data Protection/Privacy authorities.'
    },
    assessorLens:
      'Assessors interview the Data Protection Commissioner and the FIU separately to verify whether privacy laws are ever used as a pretext to block domestic AML/CFT coordination.'
  },
  3: {
    recId: 3,
    plainEnglishWhy:
      'You cannot prosecute someone for "cleaning dirty money" if your criminal code only counts drug money as dirty, or if prosecutors have to wait five years to win a separate trial on the underlying crime first. Recommendation 3 ensures that proceeds from ALL 21 major crime categories count as money laundering—and that laundering is a standalone crime.',
    mondayMorningReality:
      'When financial investigators find a professional launderer moving €5 million through layered accounts using fake invoices, forged contracts, and crypto swaps, prosecutors can charge standalone Money Laundering under R.3 using circumstantial evidence (no legitimate income, complex concealment) without needing a prior conviction for the specific foreign fraud or bribery that generated the cash.',
    criminalPlaybookAndRedFlags: [
      'Moving proceeds from tax evasion, environmental crime (illegal logging/mining), or foreign corruption into jurisdictions that historically omitted those offences from their predicate crime list.',
      'Using "professional third-party money launderers" (controllers who never touch the drugs or fraud themselves) hoping prosecutors cannot link the cash to a specific date and time of a predicate crime.'
    ],
    caseStudy: {
      title: 'The "Russian Laundromat" & Moldovan Judicial Mirror-Order Scheme ($20+ Billion)',
      jurisdictionAndYear: 'Eastern Europe, Baltics & Global · 2010–2014',
      whatHappened:
        'Organized networks used fabricated debt agreements between UK shell companies, backed by corrupt court orders in Moldova, to move over $20 billion out of Russia through Latvian and Estonian banks into global financial centres. In several jurisdictions, prosecutors initially struggled because they demanded proof of a specific prior predicate conviction in Russia before charging money laundering.',
      theBreach:
        'Weak implementation of R.3 principles where domestic courts required a prior foreign predicate conviction or failed to prosecute standalone third-party laundering based on objective typologies.',
      consequencesAndLesson:
        'Led to the collapse of multiple banks (including ABLV and Trasta Komercbanka), criminal prosecutions of complicit judges, and tough FATF/MONEYVAL enforcement insisting that no predicate conviction is required to prove money laundering.'
    },
    assessorLens:
      'Assessors check two things: (1) Are all 21 Designated Categories of Offences covered in law? (2) Are courts actually convicting standalone and third-party money laundering, or only tacking ML charges onto simple domestic drug busts?'
  },
  4: {
    recId: 4,
    plainEnglishWhy:
      'Many career criminals treat a 4-year prison sentence as an acceptable "cost of doing business" if €50 million is waiting for them in a family member’s villa when they get out. Recommendation 4 is designed to take the profit out of crime—freezing assets immediately without tipping off the suspect, and confiscating illicit wealth even if the suspect flees or dies.',
    mondayMorningReality:
      'When an STR reveals a sudden €3 million wire from a suspected procurement fraud, the FIU uses its R.4 administrative power to immediately suspend the transaction for 72 hours. Prosecutors obtain an ex parte (no-notice) freezing order. Even if the corrupt official flees to a non-extradition country, authorities use Non-Conviction-Based (NCB) confiscation or unexplained wealth orders to forfeit the luxury apartment and bank balances.',
    criminalPlaybookAndRedFlags: [
      'Transferring luxury houses, yachts, and shareholdings into the names of spouses, children, or straw associates ("nominees") for €1 just before an indictment.',
      'Commingling dirty funds with a legitimate restaurant or construction company so the original criminal bills can no longer be traced—which is why R.4 mandates "value-based confiscation" (taking clean property of corresponding value).'
    ],
    caseStudy: {
      title: '1MDB Sovereign Wealth Fund Kleptocracy — $1.7+ Billion Non-Conviction Asset Recovery',
      jurisdictionAndYear: 'Malaysia, USA, Switzerland, Singapore · 2015–2024',
      whatHappened:
        'Over $4.5 billion was siphoned from Malaysia’s 1MDB development fund by financier Jho Low and corrupt officials, spent on a $250M superyacht (Equanimity), Beverly Hills mansions, Picasso paintings, and Hollywood films. Even while Jho Low remained a fugitive abroad (preventing an immediate in-person criminal trial), the US DOJ Kleptocracy Asset Recovery Initiative and partner authorities filed sweeping Non-Conviction-Based (in rem) civil forfeiture actions against the assets themselves.',
      theBreach:
        'Demonstrated why traditional conviction-only confiscation fails when masterminds flee across borders or hide behind third-party straw owners.',
      consequencesAndLesson:
        'Over $1.7 billion in stolen assets was successfully confiscated via non-conviction-based forfeiture and returned to the people of Malaysia. Directly shaped the November 2023 overhaul of FATF Recommendation 4.'
    },
    assessorLens:
      'Under Immediate Outcome 8, assessors compare the total billions estimated in a country’s criminal economy against the actual euros/dollars confiscated and returned to victims.'
  },
  5: {
    recId: 5,
    plainEnglishWhy:
      'Unlike money laundering (which starts with a crime and hides the money), terrorist financing often starts with clean money (a salary, a personal loan, or a small cash collection) aimed at funding future horror. If police had to wait until a bomb went off—or prove which specific attack a $2,000 transfer was meant to buy—they could never stop terrorist cells in time.',
    mondayMorningReality:
      'Under R.5, prosecutors can charge anyone who wilfully collects or provides funds or assets knowing they will be used by a terrorist organisation or an individual terrorist—even for day-to-day living expenses, safe houses, propaganda, or a plane ticket for a Foreign Terrorist Fighter (FTF), and even if no attack is ever carried out.',
    criminalPlaybookAndRedFlags: [
      'Raising small sums via crowdfunding, social media appeals, or prepaid gift cards disguised as humanitarian aid.',
      'Financing travel, airline tickets, outdoor tactical gear, and hotel stays along border transit hubs for Foreign Terrorist Fighters (FTFs).',
      'Using informal cash couriers and P2P crypto wallets to fund cell logistics (food, rent, SIM cards) rather than weapons.'
    ],
    caseStudy: {
      title: 'Lafarge SA — Corporate Payments to Armed Terrorist Groups in Syria',
      jurisdictionAndYear: 'Syria, France & United States · 2013–2022',
      whatHappened:
        'Between 2013 and 2014, French cement giant Lafarge’s Syrian subsidiary paid nearly $6 million in "taxes", passes, and raw material purchases via middlemen to ISIS and the Al-Nusra Front so its Jalabiya cement plant could keep operating while competitors fled. Executives argued they were not ideologically supporting terrorism—just paying protection money to keep a factory open.',
      theBreach:
        'Under R.5 and the 1999 TF Convention, terrorist financing does NOT require ideological sympathy or a link to a specific attack—only the wilful provision of funds with the knowledge that they will benefit a terrorist organisation.',
      consequencesAndLesson:
        'In 2022, Lafarge pleaded guilty in US federal court to conspiring to provide material support to foreign terrorist organizations, paying $778 million in forfeitures and fines, alongside ongoing French criminal prosecutions.'
    },
    assessorLens:
      'Assessors examine whether a country’s TF law covers funding an individual terrorist’s living/travel costs when there is zero link to a specific planned attack.'
  },
  6: {
    recId: 6,
    plainEnglishWhy:
      'Criminal trials take months or years, but a terrorist financier can empty a bank account in 30 seconds on a smartphone. Recommendation 6 creates a global emergency brake: the moment the UN Security Council (or a national authority under UNSCR 1373) designates a terrorist financier, every bank and business must freeze their assets "without delay" (within hours).',
    mondayMorningReality:
      'Automated sanctions-screening software inside banks ingests UN Security Council 1267/1988 XML updates in real time. If a match hits, the account is frozen immediately without warning the customer, and reported to the regulator. At the same time, under the June 2026 INR.6 revision (implementing UNSCR 2664), compliance teams allow verified UN/humanitarian lifelines to pay for food and medicine in crisis zones without violating the freeze.',
    criminalPlaybookAndRedFlags: [
      'Using family members, associates, or newly registered companies as un-designated fronts to hold and move assets on behalf of a listed terrorist leader.',
      'Moving funds in the 48-hour window when a country requires manual government gazette publication before UN designations become legally binding domestically.'
    ],
    caseStudy: {
      title: 'The "48-Hour Gazette Gap" & Al-Barakaat / Global Terrorist Designation Freezes',
      jurisdictionAndYear: 'Global / Multiple FATF Mutual Evaluations · 2001–2026',
      whatHappened:
        'In numerous FATF Mutual Evaluations across Europe, Asia, and Latin America, assessors discovered that when the UN 1267 Committee added a terrorist financier to the sanctions list in New York on a Friday afternoon, domestic law required a local Minister to sign a decree and publish it in the Official Gazette on Tuesday morning—giving terrorists a 72-hour window to withdraw all their funds.',
      theBreach:
        'Failure to implement UN designations "without delay" (which FATF defines as ideally within a matter of hours) via automatic direct legal effect mechanisms.',
      consequencesAndLesson:
        'Countries were downgraded to Partially Compliant or Non-Compliant and placed on the FATF Grey List until they enacted laws giving UNSC designations immediate automatic legal effect the minute the UN publishes them—while the June 2026 INR.6 update added explicit humanitarian exemptions (UNSCR 2664/2761/2615) to protect legitimate aid.'
    },
    assessorLens:
      'Assessors literally measure the clock: how many hours elapsed between the exact timestamp of the last UN 1267 designation in New York and the moment domestic banks were legally bound to freeze?'
  },
  7: {
    recId: 7,
    plainEnglishWhy:
      'Building nuclear or chemical weapons of mass destruction (WMD) requires buying specialized centrifuges, carbon fiber, and electronics on the international market—and paying for them in US dollars or euros. Recommendation 7 cuts off the financial oxygen to UN-designated WMD proliferation networks (specifically under the DPRK 1718 and Iran 2231 UN Security Council regimes).',
    mondayMorningReality:
      'Trade-finance banks and VASPs screen not only names on the UN 1718 list, but also vessel IMO numbers, maritime shipping companies, front trading firms in third countries, and beneficial owners to ensure they are not indirectly providing funds or financial services to designated proliferation entities.',
    criminalPlaybookAndRedFlags: [
      'Setting up non-descript import/export front companies in major Asian or Middle Eastern shipping hubs to pay invoices on behalf of sanctioned DPRK banks (like Foreign Trade Bank).',
      'Using ship-to-ship oil transfers with falsified bills of lading and paying via layered ledger accounts ("ledger banking") so wires never touch the sanctioned country directly.',
      'Stealing cryptocurrency from exchanges (e.g., Lazarus Group hacks) and laundering it through mixers and OTC brokers to fund ballistic missile programmes.'
    ],
    caseStudy: {
      title: 'Chinpo Shipping Company & Korea Kwangson Banking Corp (KKBC) Sanctions Evasion',
      jurisdictionAndYear: 'Singapore, Panama & DPRK · 2013–2016',
      whatHappened:
        'When Panamanian authorities stopped the North Korean cargo ship Chong Chon Gang in the Panama Canal, they found 25 shipping containers of undeclared Cuban fighter jets, missiles, and radar systems hidden under 200,000 bags of sugar. Investigations revealed that Singapore-based Chinpo Shipping had paid $72,000 to the Panama Canal agent using funds held in an commingled bank account managed as a shadow ledger for sanctioned DPRK entities.',
      theBreach:
        'Breach of R.7 Targeted Financial Sanctions: Acting as a financial conduit and making funds/financial services available for the benefit of UN-designated WMD proliferation entities.',
      consequencesAndLesson:
        'Chinpo Shipping was convicted and fined in Singapore, and global banks dramatically tightened trade-finance vessel and dual-use screening.'
    },
    assessorLens:
      'Assessors test whether countries freeze assets held *indirectly* through front companies controlled by DPRK/Iranian UN-designated entities, not just accounts opened literally under "Pyongyang Nuclear Corp".'
  },
  8: {
    recId: 8,
    plainEnglishWhy:
      'Charities operate in the world’s most dangerous conflict zones—which makes them uniquely vulnerable to terrorist exploitation. However, early after 2001, some governments and banks reacted with a sledgehammer: shutting down charity bank accounts ("de-risking") or treating every local soup kitchen like a money laundering suspect. Recommendation 8 demands a surgical scalpel: protect vulnerable NPOs without choking legitimate humanitarian aid.',
    mondayMorningReality:
      'Regulators first map which non-profits actually match the FATF functional definition (raising/disbursing funds for charitable/good works) and which specific subset operates near active terrorist threats. They conduct outreach to help those NPOs verify their local partner disbursements—while never treating NPOs as AML "reporting entities" or forcing them to run CDD on starving aid recipients.',
    criminalPlaybookAndRedFlags: [
      'Sham charities: Terrorist operatives setting up a fake orphan or relief charity to raise money and wire it to conflict zones.',
      'Conduit exploitation: Skimming 20% of cash withdrawals meant for legitimate field hospitals in areas controlled by armed groups.'
    ],
    caseStudy: {
      title: 'The Global Charity "De-Risking" Crisis & FATF’s November 2023 R.8 Overhaul',
      jurisdictionAndYear: 'Global Humanitarian Corridors · 2014–2023',
      whatHappened:
        'On one side, cases like the Holy Land Foundation (convicted in the US in 2008 for funneling $12M to Hamas via zakat committees) showed how charities could be abused. On the other side, throughout the 2010s, overly broad domestic rules caused banks to close accounts of legitimate international NGOs delivering famine and earthquake relief, forcing aid workers to carry physical cash in backpacks—which actually *increased* terrorist financing risk!',
      theBreach:
        'Misapplication of R.8 by imposing blanket, burdensome requirements on the entire NPO sector rather than focused, proportionate, risk-based measures.',
      consequencesAndLesson:
        'In November 2023, FATF rewrote R.8 and INR.8 to explicitly ban one-size-fits-all over-regulation, clarify that NPOs are NOT reporting entities and do NOT perform CDD, and stop unwarranted de-risking.'
    },
    assessorLens:
      'Assessors penalize countries both if they ignore high-risk NPOs AND if they impose heavy-handed rules that disrupt legitimate civil society and humanitarian work.'
  },
  9: {
    recId: 9,
    plainEnglishWhy:
      'For decades, certain offshore and banking centres advertised "ironclad criminal penalty bank secrecy"—meaning a banker could go to jail for telling a foreign regulator or even domestic police who owned an account. Recommendation 9 is one sentence that demolishes that wall: financial institution secrecy laws must never inhibit any FATF Recommendation.',
    mondayMorningReality:
      'Statutory AML laws explicitly include a "safe harbour and override clause": whenever the FIU (R.29), financial supervisor (R.27), law enforcement (R.31), or a group compliance team (R.18) requests customer or transaction data under the AML law, commercial banking privacy statutes are legally overridden.',
    criminalPlaybookAndRedFlags: [
      'Opening accounts in jurisdictions where a court order signed by a high-court judge is still required before the FIU or bank supervisor can look at a suspicious account file.'
    ],
    caseStudy: {
      title: 'The Historic Dismantling of Numbered Secret Bank Accounts (UBS / Credit Suisse / Offshore Reforms)',
      jurisdictionAndYear: 'Europe, Caribbean & Global · 2008–2018',
      whatHappened:
        'Historically, numbered accounts and statutory banking secrecy prevented domestic supervisors, foreign tax/MLA authorities, and even parent-bank compliance officers in London or New York from seeing the true identity of clients booked in secrecy hubs. Major enforcement actions (including the 2009 UBS $780M DOJ settlement and 2014 Credit Suisse $2.6B plea) exposed how secrecy laws shielded massive cross-border tax crimes and corruption.',
      theBreach:
        'Using statutory banking secrecy to block supervisory access (R.27), group-wide AML oversight (R.18), and international cooperation (R.37/R.40).',
      consequencesAndLesson:
        'Global pressure through the FATF and OECD forced the rewriting of banking statutes worldwide so that statutory secrecy never blocks AML/CFT access or cross-border supervisory/MLA sharing.'
    },
    assessorLens:
      'Assessors check every single dependency: Can the FIU get bank records without a court order? Can a foreign branch share customer files with its parent group compliance team?'
  },
  10: {
    recId: 10,
    plainEnglishWhy:
      'Recommendation 10 is the cornerstone of preventive AML. If a criminal can walk into a bank, open an account under "Blue Ocean Trading Ltd.", and wire millions without the bank ever verifying who the real human being behind Blue Ocean Trading is—or without checking if the transactions match what the company claims to do—every other AML rule collapses.',
    mondayMorningReality:
      'Before opening an account (or executing an occasional transaction ≥ USD/EUR 15,000), the bank executes the 4 pillars of CDD: (1) Verify the customer via independent documents; (2) Peel back every layer of corporate ownership until finding the natural human Beneficial Owner(s); (3) Record the purpose and expected activity of the account; and (4) Continuously monitor whether real-time transactions match that profile. If a bakery suddenly receives $4M from a British Virgin Islands oil broker, ongoing CDD triggers an investigation.',
    criminalPlaybookAndRedFlags: [
      'Structuring ("smurfing") occasional cash transactions at $14,500 across multiple branches to stay just under the USD/EUR 15,000 threshold.',
      'Creating multi-layered corporate chains (a Delaware LLC owned by a Nevis LLC owned by a Panama Foundation) so lazy compliance teams just list the local nominee director as the "Beneficial Owner".',
      'Buying a clean "shelf company" with an existing 3-year bank account and abruptly changing its business activity without notifying the bank.'
    ],
    caseStudy: {
      title: 'Danske Bank Estonia Branch — €200 Billion Non-Resident Portfolio Scandal',
      jurisdictionAndYear: 'Estonia, Denmark & United States · 2007–2015 (2022 $2B Guilty Plea)',
      whatHappened:
        'Danske Bank’s Estonian branch onboarded roughly 10,000 "non-resident" customers—mostly UK limited liability partnerships (LLPs) and BVI/Belize shell companies controlled by illicit actors in Russia and the former Soviet Union. The branch allowed these shells to move €200 billion through its accounts while accepting fabricated financial statements and failing to verify the true natural-person beneficial owners or the commercial purpose of the billions flowing through.',
      theBreach:
        'Catastrophic failure of all four R.10 CDD pillars: rubber-stamping shell companies without verifying ultimate Beneficial Owners (R.10(b)), ignoring the bogus purpose of relationships (R.10(c)), and failing to conduct ongoing transaction scrutiny (R.10(d)).',
      consequencesAndLesson:
        'Danske Bank’s CEO resigned, Estonian regulators shut the branch down, and in December 2022 Danske Bank pleaded guilty in the US and forfeited $2 billion. It remains the textbook case of what happens when R.10 CDD is treated as paper collection.'
    },
    assessorLens:
      'Assessors check whether banks mechanically stop at the 25% ownership threshold or whether they actively apply the 3-step cascade—and whether they refuse to open accounts when CDD cannot be completed.'
  },
  11: {
    recId: 11,
    plainEnglishWhy:
      'Financial crime investigations rarely happen the day a wire is sent. Often, a corruption scheme or terrorist network is uncovered three years later. If the bank deleted the wire logs, passport scans, or compliance analyst notes after 12 months, the money trail goes dead and prosecutors have zero admissible evidence for court.',
    mondayMorningReality:
      'Every financial institution maintains an immutable archive of (1) all domestic and international transaction records for at least 5 years from the transaction date, and (2) all CDD identification files, account correspondence, and internal unusual-transaction analysis notes for at least 5 years after the customer closes their account—retrievable swiftly when subpoenaed by the FIU or police.',
    criminalPlaybookAndRedFlags: [
      'Immediately closing an account the day after routing a multi-million-dollar layering transfer, hoping the bank purges closed-account files after 1 year.',
      'Using informal remitters that keep paper ledgers in code words or overwrite digital logs every 30 days.'
    ],
    caseStudy: {
      title: 'Liberty Reserve — $6 Billion Digital Currency Laundromat & Destruction of Records',
      jurisdictionAndYear: 'Costa Rica & United States · 2006–2013',
      whatHappened:
        'Liberty Reserve operated as a centralized digital currency payment processor in Costa Rica with 5.5 million user accounts and 78 million transactions totaling $6 billion—deliberately allowing users to open accounts under fake names like "Russian Hackers" and "Joe Bogus" at "123 Fake Main Street" while failing to maintain verifiable CDD or auditable transaction reconstruction records for authorities.',
      theBreach:
        'Systemic violation of R.10 (anonymous/fictitious accounts) and R.11 (failure to maintain verifiable CDD and reconstructable transaction records accessible to competent authorities).',
      consequencesAndLesson:
        'Taken down in a coordinated 17-country law enforcement action; founder Arthur Budovsky was sentenced to 20 years in federal prison.'
    },
    assessorLens:
      'Assessors test how fast banks can actually retrieve a 4-year-old file—including internal compliance inquiry notes—when a competent authority demands it.'
  },
  12: {
    recId: 12,
    plainEnglishWhy:
      'When a senior government minister, general, or state-oil executive steals $50 million from their country’s treasury, they rarely deposit it under their own name in a local bank. They wire it abroad or put it in the name of their spouse, brother-in-law, or close business associate. Recommendation 12 forces financial institutions to shine a floodlight on Politically Exposed Persons (PEPs) and their inner circle.',
    mondayMorningReality:
      'If a customer or Beneficial Owner is a Foreign PEP, the account is automatically treated as high risk: a branch manager cannot open it alone—Senior Management must approve it, the bank must independently verify both Source of Wealth (how they accumulated their net worth) and Source of Funds (where the specific deposit came from), and subject the account to permanent enhanced monitoring. The exact same rules apply to higher-risk Domestic PEPs and International Organisation PEPs, plus family members and close associates.',
    criminalPlaybookAndRedFlags: [
      'Using a "close associate" (a childhood friend, personal lawyer, or romantic partner who doesn’t share the politician’s surname) to buy London or Paris luxury real estate and hold offshore bank accounts.',
      'Claiming a $15 million deposit comes from "consulting fees" or "agricultural exports" when the customer’s official government salary is $60,000 a year.'
    ],
    caseStudy: {
      title: 'Teodorin Obiang (Equatorial Guinea Vice President) & "Ill-Gotten Gains" Luxury Assets',
      jurisdictionAndYear: 'France, United States & Switzerland · 2011–2021',
      whatHappened:
        'Despite earning an official government salary of less than $100,000 per year as Minister of Agriculture/Forestry and later Vice President, Teodorin Obiang moved over $300 million through banks and shell companies in the US, France, and Switzerland—buying a €107 million 101-room mansion on Avenue Foch in Paris, a fleet of Bugattis and Ferraris, a Gulfstream jet, and Michael Jackson’s crystal glove.',
      theBreach:
        'Multiple banks and gatekeepers failed to apply R.12 Foreign PEP controls: accepting implausible explanations for Source of Wealth/Funds and failing to stop obvious kleptocratic diversion of state forestry and treasury revenues.',
      consequencesAndLesson:
        'French courts convicted Obiang in the landmark "Biens Mal Acquis" (Ill-Gotten Gains) case and confiscated the Paris mansion and supercars; US DOJ forfeited $30M in Malibu real estate and memorabilia; Swiss authorities auctioned 25 luxury supercars for $27M to fund social programmes.'
    },
    assessorLens:
      'Assessors check whether banks understand the difference between Source of Funds (e.g., "wired from Bank X") and Source of Wealth (how the PEP legitimately earned that fortune in the first place).'
  },
  13: {
    recId: 13,
    plainEnglishWhy:
      'Small banks in high-risk or offshore jurisdictions cannot clear US Dollars or Euros on their own—they need a "correspondent account" at a major global bank in New York, Frankfurt, or London. If that global correspondent bank doesn’t vet the smaller respondent bank’s AML controls—or lets a "shell bank" (a brass-plate bank with no real office or supervision) use its pipes—trillions in dirty money can flood into the global financial system.',
    mondayMorningReality:
      'Before opening a cross-border correspondent relationship, a bank investigates the respondent bank’s regulatory history, assesses its AML/CFT controls, gets senior management sign-off, documents responsibilities, verifies "payable-through account" CDD, and confirms the respondent is NOT a shell bank and does not allow shell banks to nest inside its accounts.',
    criminalPlaybookAndRedFlags: [
      '"Nested correspondent banking": A shady offshore bank that lost its own USD correspondent account quietly routes its wires through an account held at a regional bank that *does* have a New York correspondent.',
      'Operating a licensed "shell bank" in an island jurisdiction where the entire "headquarters" is just a P.O. Box and a local secretary while the real owners run it from abroad.'
    ],
    caseStudy: {
      title: 'ABLV Bank (Latvia) & Wachovia Casa de Cambio Correspondent Banking Failures',
      jurisdictionAndYear: 'Latvia, Mexico & United States · 2010 & 2018',
      whatHappened:
        'In 2018, the US Treasury’s FinCEN issued a Section 311 finding naming Latvia’s ABLV Bank a primary money laundering concern, revealing that ABLV had institutionalized money laundering as a pillar of its business model—using its cross-border correspondent accounts to funnel billions for shell companies linked to the Moldovan $1B bank theft, Azerbaijani Laundromat, and UN-sanctioned North Korean ballistic missile procurement. Earlier in 2010, Wachovia paid $160M after allowing Mexican casas de cambio to funnel $378 billion through its correspondent wires and bulk cash channels with inadequate respondent AML assessment.',
      theBreach:
        'Failure under R.13 to properly assess respondent AML/CFT controls, prevent nested shell-company abuse, and monitor high-risk cross-border correspondent corridors.',
      consequencesAndLesson:
        'Cut off from USD correspondent banking, ABLV collapsed into liquidation within days—proving that R.13 correspondent banking controls are one of the most powerful enforcement levers in global finance.'
    },
    assessorLens:
      'Assessors verify that R.13 is applied strictly to *cross-border* correspondent relationships, and that shell banks are 100% eradicated both directly and via nested respondents.'
  },
  14: {
    recId: 14,
    plainEnglishWhy:
      'Millions of migrant workers rely on Money or Value Transfer Services (MVTS)—including traditional remitters like Western Union as well as informal hawala, hundi, and fei-chen networks—to send money home. Because value can cross borders without a wire ever touching a bank (settled later via trade goods or cash pooling), unlicensed underground remitters are a favorite channel for cartels and terrorist financiers.',
    mondayMorningReality:
      'Every MVTS provider—formal or informal—must be licensed or registered and supervised. Every local corner-shop agent they use must either be licensed/registered directly OR listed on an up-to-date agent roster accessible to authorities and actively monitored by the principal MVTS provider’s AML programme.',
    criminalPlaybookAndRedFlags: [
      'Running an unregistered hawala network out of a travel agency, jewelry shop, or mobile phone store, settling balances across borders using over/under-invoiced trade containers.',
      'Rogue retail agents breaking a $50,000 cartel cash drop into forty $1,250 remittances using stolen or fake customer IDs ("cuckoo smurfing").'
    ],
    caseStudy: {
      title: 'The "Vancouver Model" & Silver International Underground Hawala Bank',
      jurisdictionAndYear: 'Canada, China & Global · 2015–2019 (Project E-Pirate)',
      whatHappened:
        'Royal Canadian Mounted Police (Project E-Pirate) raided Silver International Investments in Richmond, BC—an unregistered underground MVTS operating out of an office complex that laundered up to CAD 220 million per year (and potentially over $500M across its network). Drug traffickers dropped suitcases of fentanyl street cash at Silver International; that cash was handed to wealthy VIP gamblers to buy casino chips in Vancouver, while the gamblers repaid the drug cartels via underground bank transfers in China.',
      theBreach:
        'Operating a massive unlicensed shadow MVTS network in defiance of R.14 licensing, registration, and AML monitoring mandates.',
      consequencesAndLesson:
        'Led to the Cullen Commission public inquiry into Money Laundering in British Columbia and sweeping legislative crackdowns on unregistered MVTS operators and casino cash drops.'
    },
    assessorLens:
      'Assessors ask police and financial regulators: "How many unlicensed hawala or underground MVTS operators did you proactively identify and shut down last year?" Having a law banning unlicensed MVTS scores poorly if zero enforcement happens.'
  },
  15: {
    recId: 15,
    plainEnglishWhy:
      'Every time finance invents a faster way to move value—from prepaid cards to peer-to-peer apps to cryptocurrencies—criminals rush in before regulators write the rules. Recommendation 15 has two rules: (1) Banks must assess ML/TF risks *before* launching any new tech or product; and (2) Virtual Asset Service Providers (VASPs—crypto exchanges, custodians, brokers) must be licensed, supervised by a real government authority, perform CDD at USD/EUR 1,000, and obey the Crypto Travel Rule.',
    mondayMorningReality:
      'A crypto exchange cannot operate from a "no-headquarters" cloud setup: it must be licensed where it is incorporated/operates, screen users at onboarding and for occasional transactions ≥ USD/EUR 1,000, and transmit originator and beneficiary identity data immediately and securely whenever sending crypto to another VASP (the R.16 Travel Rule).',
    criminalPlaybookAndRedFlags: [
      'Operating "no-KYC" offshore crypto exchanges or nested OTC brokers that advertise anonymous conversions between Bitcoin/USDT and cash.',
      'Chain-hopping across bridges, privacy coins (Monero), and Tornado Cash-style mixers to obscure ransomware, darknet market, and DPRK hack proceeds.'
    ],
    caseStudy: {
      title: 'Binance ($4.3 Billion Plea) & Bitzlato Darknet Crypto Enforcement',
      jurisdictionAndYear: 'United States & Global · 2023',
      whatHappened:
        'In November 2023, the world’s largest cryptocurrency exchange, Binance, pleaded guilty to failing to maintain an effective AML programme, operating an unlicensed money transmitting business, and violating sanctions laws. Regulators revealed that for years Binance prioritized rapid user growth over R.15 compliance—allowing users to trade without KYC verification, failing to file a single SAR with FinCEN despite billions flowing to darknet market Hydra, ransomware gangs, Hamas’s Al-Qassam Brigades, and sanctioned Iranian/Russian entities, and coaching VIP users to use VPNs to evade geographical controls.',
      theBreach:
        'Wholesale breach of R.15 (and R.10, R.16, R.20): Operating VASP services without required licensing, CDD, Travel Rule data transmission, or STR reporting.',
      consequencesAndLesson:
        'Binance paid a historic $4.3 billion penalty, was placed under a 5-year independent compliance monitorship, and its founder Changpeng Zhao stepped down and served a federal prison sentence. Demonstrated that VASPs face the exact same enforcement teeth as traditional banks.'
    },
    assessorLens:
      'Assessors check whether a country supervises VASPs via a government Competent Authority (remember: Self-Regulatory Bodies are strictly banned from supervising VASPs!) and whether the Crypto Travel Rule is actually enforced.'
  },
  16: {
    recId: 16,
    plainEnglishWhy:
      'Imagine if international parcels arrived with the sender’s name torn off the box—customs would never know if a package came from a legitimate factory or a cartel lab. Recommendation 16 (revised in June 2025 as "Payment Transparency") ensures that every electronic payment carries a structured digital passport (Originator + Beneficiary details in ISO 20022 format) from the first bank all the way to the final bank.',
    mondayMorningReality:
      'When sending a cross-border transfer above the de minimis threshold (USD/EUR 1,000), the Ordering FI must include verified Originator Name, Account Number (or UETR), Address, Date of Birth (for natural persons) or BIC/LEI/Official ID (for legal persons), plus Beneficiary Name, Account, and Country/Town. Intermediary banks must never strip this data out, and the Beneficiary FI must verify the recipient and check for misdirected payments (e.g., via Confirmation of Payee).',
    criminalPlaybookAndRedFlags: [
      '"Wire stripping" (or cover-payment manipulation): Modifying or deleting the originating customer’s name or Iranian/Syrian/Russian address from SWIFT messages before routing the payment through a New York clearing bank.',
      'Exploiting mismatched account names ("misdirected payments") to deposit fraud proceeds into mule accounts whose true holder name differs from the payee name typed on the wire.'
    ],
    caseStudy: {
      title: 'Standard Chartered, BNP Paribas ($8.9B) & HSBC "Wire Stripping" Enforcement',
      jurisdictionAndYear: 'United Kingdom, France, Switzerland & USA · 2012–2015',
      whatHappened:
        'Across a series of landmark enforcement cases (including BNP Paribas’s $8.9 billion guilty plea in 2014 and Standard Chartered’s $667M+ settlements), investigators discovered that bank staff systematically "stripped" or omitted originator names and addresses from SWIFT wire messages (or replaced MT103 serial messages with opaque MT202 cover payments) on tens of billions of dollars in transactions involving sanctioned entities in Sudan, Iran, and Cuba so that automated filters at US clearing banks wouldn’t flag and freeze the payments.',
      theBreach:
        'Direct breach of R.16: Intentionally omitting or stripping required originator/beneficiary information from the payment chain and frustrating TFS screening.',
      consequencesAndLesson:
        'Resulted in over $15 billion in combined fines across major European banks, revolutionized SWIFT MT202COV transparency standards, and culminated in the June 2025 FATF revision of R.16 mandating structured ISO 20022 fields and Beneficiary FI Confirmation of Payee controls.'
    },
    assessorLens:
      'Assessors inspect whether Intermediary FIs have automated filters that detect wires arriving with blank or meaningless originator fields (like "12345" or "One Customer") and suspend or reject them.'
  },
  17: {
    recId: 17,
    plainEnglishWhy:
      'When a multinational client opens an account with a wealth manager in Zurich after being introduced by a regulated private bank in London, forcing the client to mail the exact same certified passport and corporate structure charts twice is inefficient. Recommendation 17 allows the second institution to rely on the first institution’s initial CDD—with one unbreakable rule: you can outsource the legwork, but you can NEVER outsource the legal blame.',
    mondayMorningReality:
      'Before relying on a third-party bank or DNFBP for CDD elements (a)–(c), the relying bank must (1) get the customer & BO data *immediately*, (2) have a binding agreement that copies of ID documents will be handed over *without delay* on request, (3) verify the third party is regulated and supervised for R.10/R.11, and (4) check the country risk of where the third party sits.',
    criminalPlaybookAndRedFlags: [
      'Using "business introducers" or unregulated offshore corporate formation agents in high-risk jurisdictions who sign a one-page certificate claiming "We verified the Beneficial Owner" while refusing to send the underlying passport and trust documents unless a court orders it.'
    ],
    caseStudy: {
      title: '1MDB & Cross-Border Private Bank "Introducer Reliance" Failures',
      jurisdictionAndYear: 'Switzerland, Singapore & Luxembourg · 2016–2018 (FINMA & MAS Actions)',
      whatHappened:
        'During the 1MDB investigations, regulators in Switzerland (FINMA) and Singapore (MAS) shut down BSI Bank and Falcon Private Bank after finding that private bankers blindly relied on representations from offshore intermediaries and third-party introducers regarding the beneficial ownership of sovereign-linked shell companies ("Good Star Ltd." and "Aabar Investments PJS Ltd."—a BVI clone of a real Abu Dhabi state fund) without obtaining independent verification documents immediately.',
      theBreach:
        'Breach of R.17 and R.10: Blindly trusting third-party introducers without immediately obtaining required CDD information or verifying that underlying documentation was reliable and accessible without delay.',
      consequencesAndLesson:
        'Both BSI Bank and Falcon Private Bank lost their banking licences, proving that "the introducer told us they checked the client" is zero defence under R.17.'
    },
    assessorLens:
      'Assessors test whether banks ever rely on third parties for *ongoing monitoring* (R.10(d))—which is strictly forbidden under R.17.'
  },
  18: {
    recId: 18,
    plainEnglishWhy:
      'A global bank is only as strong as its weakest overseas branch. If a bank has world-class compliance in Frankfurt or Toronto, but lets a tiny subsidiary in a loosely regulated tax haven operate with 2 junior compliance staff, no independent audit, and no data sharing with headquarters, international syndicates will flock to that overseas branch.',
    mondayMorningReality:
      'Every FI must maintain the 4 internal control pillars: (1) Management-level Compliance Officer, (2) Employee screening, (3) Ongoing staff training, and (4) Independent AML audit. Furthermore, financial groups must run a Group-Wide AML/CFT Programme where foreign branches share unusual transaction and STR intelligence with Group Compliance—and always apply the stricter Home-Country standard if the Host Country’s laws are weaker.',
    criminalPlaybookAndRedFlags: [
      'Corrupting or bribing local branch relationship managers in foreign subsidiaries (highlighting why employee screening and independent audit are mandatory).',
      'Exploiting a foreign subsidiary that runs on an isolated legacy IT system disconnected from the parent bank’s global transaction monitoring engine.'
    ],
    caseStudy: {
      title: 'TD Bank ($3.09 Billion Guilty Plea) & Danske Bank IT/Group Control Failures',
      jurisdictionAndYear: 'United States & Global · 2024',
      whatHappened:
        'In October 2024, TD Bank became the largest bank in US history to plead guilty to Bank Secrecy Act programme failures, paying $3.09 billion. Prosecutors revealed that for nearly a decade, TD Bank imposed a "flat-cost paradigm" that froze AML compliance budgets and left $18.3 trillion in transaction volume unmonitored due to unpatched internal control gaps. Meanwhile, failing employee screening and controls allowed five bank insiders at retail branches to accept bribes (including Tens of thousands in gift cards) to open hundreds of fake shell accounts for Chinese fentanyl-money-laundering networks that deposited over $470M in bulk cash.',
      theBreach:
        'Fundamental breach of R.18: Failure to maintain effective internal controls, employee screening/oversight, independent audit remediation, and group-wide risk management.',
      consequencesAndLesson:
        'Alongside the $3.09B fine, regulators imposed an unprecedented asset cap on TD Bank’s US growth and prosecuted both the laundering rings and complicit bank employees.'
    },
    assessorLens:
      'Assessors check what happens when a host country’s law forbids a foreign subsidiary from sharing customer files with its parent group: under R.18, the home supervisor must be notified and may force the bank to shut down the foreign branch.'
  },
  19: {
    recId: 19,
    plainEnglishWhy:
      'When a country refuses to fix gaping holes in its AML/CFT system, it becomes a magnet for dirty money globally. Three times a year, the FATF publishes two public lists: "High-Risk Jurisdictions subject to a Call for Action" (the Black List) and "Jurisdictions under Increased Monitoring" (the Grey List). Recommendation 19 requires banks to apply Enhanced Due Diligence to high-risk countries and empowers governments to deploy tough countermeasures.',
    mondayMorningReality:
      'Every time FATF updates its public statements in February, June, and October, banks update their country-risk engines. Transactions involving Black-Listed jurisdictions (currently DPRK, Iran, and Myanmar) face strict Enhanced Due Diligence (and for DPRK/Iran, full countermeasures—such as terminating correspondent banking, banning new branches, and systematic transaction reporting).',
    criminalPlaybookAndRedFlags: [
      'Routing payments from a Black-Listed or Grey-Listed jurisdiction through a neutral "transit hub" company in a neighboring country so the wire appears to originate from a low-risk jurisdiction.'
    ],
    caseStudy: {
      title: 'FATF Call for Countermeasures Against DPRK, Iran & Myanmar + Grey-List Economic Impact',
      jurisdictionAndYear: 'Global FATF Plenary Actions · 2011–2026',
      whatHappened:
        'Under Recommendation 19, the FATF has maintained an active call on all members and jurisdictions to apply effective countermeasures against the DPRK and Iran to protect the international financial system from ML/TF/PF risks, and called for enhanced due diligence proportionate to risks arising from Myanmar. Independent IMF research (2021) studying 89 countries also proved that even being placed on the FATF "Grey List" reduces a country’s cross-border capital inflows by an average of 7.6% of GDP as global institutions tighten due diligence.',
      theBreach:
        'Failure by financial institutions to update country-risk matrices after FATF Plenary updates or allowing indirect correspondent nesting for banks in Black-Listed jurisdictions.',
      consequencesAndLesson:
        'Demonstrates why R.19 is the global enforcement engine of the FATF: countries work urgently to fix their laws to exit the Grey/Black Lists because the economic cost of R.19 scrutiny is immense.'
    },
    assessorLens:
      'Assessors check whether a country can impose countermeasures *independently* based on its own national risk assessment, even if the FATF hasn’t issued a formal call yet.'
  },
  20: {
    recId: 20,
    plainEnglishWhy:
      'Banks and gatekeepers sit on the front lines where criminals first touch the financial system. If a bank teller or compliance analyst spots a customer trying to wire money using a forged invoice or acting like a money mule, the bank cannot simply close the account and stay quiet—because that criminal will just walk across the street to the next bank. Recommendation 20 mandates prompt reporting of all suspicious transactions (including attempted ones!) to the FIU.',
    mondayMorningReality:
      'Whenever an FI suspects—or has reasonable grounds to suspect—that funds are the proceeds of a criminal activity or related to terrorist financing, it must file a Suspicious Transaction Report (STR) promptly with the FIU. There is ZERO minimum dollar threshold: a suspicious $200 attempted transfer that the customer cancels when asked for ID must still be reported.',
    criminalPlaybookAndRedFlags: [
      '"Testing the waters": Attempting a small transaction or asking probing questions about what amount triggers bank reporting, then walking out when the teller asks for identification.',
      '"Defensive / late filing" by banks: Waiting 9 months until an investigative journalist publishes a corruption exposé about a billionaire client before finally filing an STR.'
    ],
    caseStudy: {
      title: 'The Madoff $65 Billion Ponzi Scheme & Westpac Child Exploitation Reporting Failures',
      jurisdictionAndYear: 'United States (2014 JPMorgan $2.6B Settlement) & Australia (2020 Westpac AUD 1.3B Penalty)',
      whatHappened:
        'In 2014, JPMorgan Chase forfeited $1.7 billion (plus $900M in fines) for failing to file timely US Suspicious Activity Reports on Bernard Madoff’s main business account despite decades of glaring red flags (billions in round-trip checks with zero securities clearing activity, and JPMorgan’s own London risk team warning in 2008—and filing a UK report—that Madoff’s returns appeared too good to be true while US staff filed nothing with FinCEN). Similarly, in 2020 Westpac paid AUD 1.3 billion in Australia after failing to report millions of cross-border transfers and missing red flags on frequent low-value transfers to the Philippines linked to child sexual exploitation.',
      theBreach:
        'Breach of R.20: Failing to promptly report transactions where reasonable grounds existed to suspect proceeds of crime (including low-value transfers showing clear typologies of predicate offences).',
      consequencesAndLesson:
        'Reinforced the iron rule of R.20: STR obligations have no monetary floor, cover attempted transactions, and require *prompt* reporting the moment reasonable grounds for suspicion arise.'
    },
    assessorLens:
      'Assessors examine STR turnaround time (do banks take 3 days or 120 days to file after an alert triggers?) and whether STRs are filed on attempted transactions.'
  },
  21: {
    recId: 21,
    plainEnglishWhy:
      'Recommendation 21 is a two-sided shield for the person filing an STR. First, it gives legal immunity ("safe harbour") so a customer can never sue a bank employee for breach of contract or privacy if an STR was filed in good faith—even if the customer turns out to be 100% innocent. Second, it makes "tipping-off" a crime: bank staff must never whisper to the customer, "Hey, compliance just filed a report on your wire to the FIU."',
    mondayMorningReality:
      'When exiting a suspicious customer or asking for supporting invoices, relationship managers use carefully scripted neutral language ("routine regulatory account review") so they never reveal that an STR has been or is being filed with the FIU—while sharing necessary risk intelligence internally with Group Compliance under R.18.',
    criminalPlaybookAndRedFlags: [
      'Bribing or cultivating a friendly private-banking relationship manager to warn the cartel or PEP the moment the bank’s internal AML team opens an STR investigation.',
      'Filing lawsuits against banks after an account freeze to force disclosure of whether an STR was submitted.'
    ],
    caseStudy: {
      title: 'Private Banker Tipping-Off Convictions (Operation Car Wash / European Private Banking)',
      jurisdictionAndYear: 'Switzerland, UK & Brazil · 2015–2021',
      whatHappened:
        'In multiple enforcement cases across Europe and Latin America, relationship managers who received lucrative bonuses from high-net-worth kleptocrat clients secretly messaged their clients on encrypted apps to warn them: "Compliance is preparing a report to the FIU on your offshore company—move your balances out before Friday." In response, the clients emptied their accounts and destroyed evidence before police could execute freezing orders.',
      theBreach:
        'Direct criminal violation of R.21(b): Disclosing ("tipping off") the fact that an STR or related information is being filed with the FIU.',
      consequencesAndLesson:
        'Bankers convicted of tipping-off face prison sentences and permanent industry bans, while banks face strict walling-off rules separating sales/relationship staff from STR filing teams.'
    },
    assessorLens:
      'Assessors check the exact wording of the safe-harbour statute: does it protect directors, officers, AND employees from both civil and criminal liability even if the reporter didn’t know the exact underlying crime?'
  },
  22: {
    recId: 22,
    plainEnglishWhy:
      'Once banks tightened their AML doors, criminals turned to non-financial "gatekeepers" to wash their money: buying luxury penthouses in cash via real estate agents, buying casino chips and cashing out clean "winnings" checks, buying gold bars, or paying lawyers, accountants, and Trust & Company Service Providers (TCSPs) to set up anonymous shell companies. Recommendation 22 brings these six gatekeeper sectors (DNFBPs) under the CDD and record-keeping net.',
    mondayMorningReality:
      'Casinos must run CDD at USD/EUR 3,000 and link the customer’s ID to their actual table/slot transactions. Real estate agents must run CDD on BOTH the buyer AND the seller of a property. Precious metal/stone dealers run CDD on cash deals ≥ USD/EUR 15,000. Lawyers, notaries, accountants, and TCSPs run CDD whenever setting up companies/trusts, buying/selling real estate or businesses, or managing client money.',
    criminalPlaybookAndRedFlags: [
      'Walk-in high rollers at casinos handing $50,000 in rubber-banded street cash to buy chips, playing minimally for 20 minutes, and cashing out for a casino check.',
      'Buying luxury apartments in London, Vancouver, Dubai, or Sydney using an anonymous offshore company where the real estate agent only checks the seller and ignores who owns the buyer company.',
      'Hiring a boutique law firm or TCSP to form 20 shell companies with nominee directors.'
    ],
    caseStudy: {
      title: 'Crown & Star Casinos (Australia) + The Panama Papers (Mossack Fonseca TCSP)',
      jurisdictionAndYear: 'Panama, Australia & Global · 2016–2023',
      whatHappened:
        'In 2016, the Panama Papers leak exposed 11.5 million files from Panamanian law firm and TCSP Mossack Fonseca, showing it had formed over 214,000 shell companies—often failing to identify the true beneficial owners behind drug lords, sanction evaders, and corrupt politicians. Separately, between 2021 and 2023, Australian inquiries and AUSTRAC actions against Crown Resorts (AUD 450M fine) and Star Entertainment revealed casinos allowing high-risk junket operators linked to transnational organized crime to bring plastic shopping bags of cash into VIP rooms without linking CDD or verifying source of funds.',
      theBreach:
        'Systemic failure by DNFBPs (TCSPs, lawyers, and casinos) to apply R.22 CDD, beneficial ownership verification, and PEP controls.',
      consequencesAndLesson:
        'Mossack Fonseca collapsed and shut down globally; Crown and Star faced massive fines and license overhauls; and countries worldwide tightened DNFBP gatekeeper supervision.'
    },
    assessorLens:
      'Assessors check whether real estate agents actually verify *both* buyers and sellers, and whether casinos link entry IDs to specific chip purchases ≥ USD/EUR 3,000.'
  },
  23: {
    recId: 23,
    plainEnglishWhy:
      'Doing CDD (R.22) is useless if a lawyer, accountant, real estate agent, or TCSP spots a blatant money laundering scheme and isn’t required to file a Suspicious Transaction Report (STR). Recommendation 23 extends internal controls (R.18), high-risk country rules (R.19), STR reporting (R.20), and anti-tipping-off (R.21) to all DNFBPs—while carefully defining the boundary of bona fide Legal Professional Privilege.',
    mondayMorningReality:
      'When a lawyer represents a client in a courtroom defence or gives legal advice on the law, that communication is protected by Legal Professional Privilege. However, when a lawyer or accountant acts as a financial/corporate intermediary—buying real estate, managing a client escrow account, or setting up a shell company—and suspects ML/TF, Privilege does NOT shield sham criminal transactions: they must file an STR (and telling a client "Don’t break the law" is NOT considered tipping-off).',
    criminalPlaybookAndRedFlags: [
      'Routing dirty real-estate purchase money through a law firm’s "Client Trust / IOLTA Account" so the commercial bank only sees a reputable law firm’s name on the wire.',
      'Abusing claims of "attorney-client privilege" over purely commercial company-formation and escrow services.'
    ],
    caseStudy: {
      title: 'Abuse of Law Firm Client Escrow Accounts in Global Kleptocracy & Real Estate Schemes',
      jurisdictionAndYear: 'United States, UK & Europe · 2016–2024 (Global Witness / FinCEN Gatekeeper Reports)',
      whatHappened:
        'In multiple DOJ and UK enforcement cases (including the 1MDB Manhattan luxury real estate purchases and undercover investigations where journalists posed as corrupt African mineral officials), perpetrators wired tens of millions of dollars directly into prominent law firms’ pooled client trust accounts to purchase real estate, private jets, and yachts. In numerous countries, FATF Mutual Evaluations found that lawyers, realtors, and gold dealers had filed fewer than 10 STRs *in the entire year* nationwide.',
      theBreach:
        'Failure by DNFBPs to file STRs under R.23 when handling client funds, real estate, and company formation, and misusing broad privilege claims to avoid reporting.',
      consequencesAndLesson:
        'Prompted major regulatory reforms (such as FinCEN’s Residential Real Estate Rule and UK SRA enforcement Crackdowns) targeting non-financed real estate transfers and law firm client account misuse.'
    },
    assessorLens:
      'Assessors look straight at the FIU’s annual statistics: if banks file 50,000 STRs a year, and all lawyers, realtors, and accountants combined file 12 STRs, the country fails on DNFBP effectiveness!'
  },
  24: {
    recId: 24,
    plainEnglishWhy:
      'Anonymous shell companies are the #1 getaway vehicle for almost every major financial crime on Earth—from sanctions evasion to cartel laundering to public procurement fraud. Recommendation 24 (massively strengthened in March 2022) demands that countries end corporate anonymity: ban new bearer shares, expose who stands behind nominee directors/shareholders, and build a "multi-pronged" system so authorities can rapidly find the real human Beneficial Owner of any company.',
    mondayMorningReality:
      'A country cannot rely on just one source for Beneficial Ownership (BO) data. Under the March 2022 R.24 standard, it must combine three prongs: (1) The company itself holds verified BO records; (2) A Public Authority / Central BO Registry holds adequate, accurate, and up-to-date BO info (updated within e.g. 1 month of changes); and (3) Banks and DNFBPs cross-check their CDD against the registry and report discrepancies. New bearer shares are 100% prohibited, and nominees must disclose their nominators.',
    criminalPlaybookAndRedFlags: [
      '"Circular ownership": Company A owns 40% of Company B, which owns 40% of Company C, which owns 40% of Company A—across three different jurisdictions.',
      'Hiring professional "straw / nominee directors" who sit on the boards of 600 companies simultaneously so the real mastermind’s name never appears on public paperwork.',
      'Using bearer shares (where whoever physically holds the piece of paper in a briefcase owns the company) to transfer company ownership in a hotel room without any registry record.'
    ],
    caseStudy: {
      title: 'FinCEN Files, Pandora Papers & The Global Ban on Bearer Shares and Opaque Registries',
      jurisdictionAndYear: 'Global · 2020–2024 (Led to March 2022 R.24 Overhaul & US Corporate Transparency Act)',
      whatHappened:
        'Investigations from the FinCEN Files (2020) and Pandora Papers (2021) to World Bank procurement audits revealed that over 70% of grand corruption cases involved anonymous companies registered in jurisdictions where company registries acted as passive "rubber stamps"—accepting unverified filings listing nominee directors or bearer-share structures. When law enforcement served subpoenas on the registered agent, the agent either had no verified BO files or had dissolved the company.',
      theBreach:
        'Reliance on a single, unverified passive mechanism for Beneficial Ownership, permitting bearer shares, and allowing undisclosed nominee shareholders/directors.',
      consequencesAndLesson:
        'In March 2022, FATF overhauled R.24 to mandate the Multi-Pronged Approach (including a public authority BO register or equivalent mechanism), strictly prohibit all new bearer shares, regulate nominees/nominators, and require BO transparency in public procurement.'
    },
    assessorLens:
      'Assessors test the registry live: Is the BO data *verified* (accurate) and updated within weeks (up-to-date), or can anyone type "Mickey Mouse" into an online company registration portal with zero verification?'
  },
  25: {
    recId: 25,
    plainEnglishWhy:
      'Unlike a company (which is registered with the state to exist), an Express Trust is often just a private legal contract signed between a Settlor (who puts the assets in) and a Trustee (who manages them for Beneficiaries). Because trusts don’t always need government incorporation to exist, billionaires, tax evaders, and kleptocrats historically used complex offshore trusts with "protectors" and discretionary beneficiary classes to make wealth legally invisible.',
    mondayMorningReality:
      'Under the February 2023 revision of R.25, trustees (whether professional TCSPs or individual residents) are legally required to obtain, verify, and hold adequate, accurate, and up-to-date BO info on every party to the trust: Settlor(s), Trustee(s), Protector(s), Beneficiaries (or class of beneficiaries and objects of a power), and any natural person with ultimate effective control. When opening a bank account or buying property, the trustee MUST affirmatively disclose their status as a trustee.',
    criminalPlaybookAndRedFlags: [
      'Appointing a trusted family lawyer as "Protector" of a blind discretionary trust with the secret power to fire the trustee and add the corrupt politician as a beneficiary five years later.',
      'Forming a trust under the laws of Jurisdiction A, appointing a trustee in Jurisdiction B, and holding a bank account and luxury villa in Jurisdiction C so each country claims the trust is "foreign".'
    ],
    caseStudy: {
      title: 'Sanctioned Oligarch Superyacht & Real Estate Discretionary Trust Concealment',
      jurisdictionAndYear: 'UK, Crown Dependencies, Cyprus & US (TaskForce KleptoCapture) · 2022–2024',
      whatHappened:
        'When Western authorities moved to freeze the superyachts, private jets, and London/New York estates of sanctioned oligarchs in 2022, investigators discovered that ownership of $500M+ yachts and mansions had been transferred days or years earlier into intricate chains of offshore Express Trusts. In several cases, professional trustees and protectors obscured who held ultimate effective control or changed beneficiaries hours before sanctions hit.',
      theBreach:
        'Exploiting gaps in cross-border trust transparency where foreign trusts holding local assets or administered locally did not have rapidly accessible, verified BO records on settlors, protectors, and beneficiaries.',
      consequencesAndLesson:
        'Directly drove the February 2023 revision of FATF Recommendation 25, expanding obligations to cover foreign trusts that are administered locally or have sufficient links (like local bank accounts or real estate) and requiring full BO records on objects of a power and ultimate controllers.'
    },
    assessorLens:
      'Assessors check whether a country without domestic trust law still regulates foreign trusts that are administered from within its borders or hold local bank accounts/property.'
  },
  26: {
    recId: 26,
    plainEnglishWhy:
      'If criminals can buy a small bank, install their own cronies as directors, or set up a "shell bank" with no real mind and management in the country, they don’t need to trick the bank—they *are* the bank. Recommendation 26 requires strict "fit and proper" market-entry background checks to keep criminals out of bank ownership/management, bans shell banks, and mandates risk-based AML supervision.',
    mondayMorningReality:
      'Financial supervisors run criminal background and beneficial-ownership checks on anyone seeking to acquire a significant/controlling shareholding or executive role in an FI. Supervisors allocate their inspection teams using a Risk-Based Approach: a high-risk cross-border private bank gets frequent, intensive on-site inspections with transaction sample testing, while a low-risk domestic mortgage lender gets lighter periodic reviews.',
    criminalPlaybookAndRedFlags: [
      'Acquiring a struggling regional bank or small payment institution through straw shareholders so an organized crime syndicate can clear its own wires directly.',
      'Incorporating a "brass plate" bank in an island jurisdiction while running all servers and management from an unmonitored office in another country (a prohibited shell bank).'
    ],
    caseStudy: {
      title: 'FBME Bank & Banca Privada d’Andorra (BPA) — Criminal Capture & Supervisory Shutdowns',
      jurisdictionAndYear: 'Cyprus, Tanzania, Andorra & United States · 2014–2017',
      whatHappened:
        'FBME Bank was incorporated in Tanzania (where it held only 10% of its assets and minimal physical operations) while conducting 90% of its global banking out of branches in Cyprus—acting as a magnet for Hezbollah financiers, Syrian WMD proliferators, and transnational organized crime. Similarly, in 2015 FinCEN named Banca Privada d’Andorra (BPA) a primary money laundering concern after senior executives took bribes to help Russian, Chinese, and Venezuelan state-oil (PDVSA) laundering networks wash billions.',
      theBreach:
        'Failures in market-entry / ongoing fit-and-proper controls and consolidated risk-based supervision (R.26), allowing criminal capture of senior management and fragmented cross-border oversight.',
      consequencesAndLesson:
        'Both FBME and BPA were stripped of their licences and liquidated, underscoring why R.26 requires consolidated group supervision and strict fit-and-proper screening.'
    },
    assessorLens:
      'Under Immediate Outcome 3, assessors test whether supervisors allocate inspections based on real ML/TF risk profiles—or whether they just inspect every bank on a mechanical 3-year calendar regardless of risk.'
  },
  27: {
    recId: 27,
    plainEnglishWhy:
      'A bank supervisor without legal powers is just a toothless observer. If a regulator has to beg a bank for permission to enter its offices, or needs a prosecutor to get a criminal search warrant just to read customer files, supervision fails. Recommendation 27 requires supervisors to have statutory power to inspect, compel production of any document, and impose sanctions all the way up to revoking the bank’s licence.',
    mondayMorningReality:
      'Supervisors can walk into any supervised FI for an on-site inspection, demand immediate access to customer CDD folders, board minutes, internal audit reports, and raw transaction logs (without needing a court order), and impose administrative fines, cease-and-desist orders, management removals, or licence revocation.',
    criminalPlaybookAndRedFlags: [
      'Banks stalling supervisory inspections by claiming they need a court subpoena or customer consent before showing sample high-risk account files to examiners.',
      'Treating tiny statutory maximum fines (e.g., a $10,000 cap set in a 1985 banking law) as a minor business expense.'
    ],
    caseStudy: {
      title: 'Pilatus Bank (Malta) — Supervisory Inspection & ECB Licence Revocation',
      jurisdictionAndYear: 'Malta & European Central Bank · 2018–2021',
      whatHappened:
        'Pilatus Bank in Malta catered almost exclusively to ultra-high-net-worth Politically Exposed Persons from Azerbaijan and Venezuela. Following whistleblowers, investigative journalist Daphne Caruana Galizia’s reporting, and the US arrest of the bank’s chairman for sanctions evasion, European and Maltese supervisory interventions examined the bank’s books, froze its operations, imposed record fines, and the European Central Bank permanently withdrew Pilatus Bank’s banking licence.',
      theBreach:
        'Highlighted why supervisors must have and decisively use R.27 powers to compel records, remove unfit owners/managers, and withdraw licences when an institution is pervasively non-compliant.',
      consequencesAndLesson:
        'Malta subsequently overhauled its supervisory inspections and enforcement toolkit under intense MONEYVAL and FATF scrutiny, successfully exiting the FATF Grey List in 2022.'
    },
    assessorLens:
      'Assessors verify that supervisors can compel *any* information directly without needing a court order, and have the legal power to suspend or withdraw licences for AML/CFT breaches.'
  },
  28: {
    recId: 28,
    plainEnglishWhy:
      'Just like banks need regulators (R.26), the six DNFBP gatekeeper sectors (casinos, real estate agents, gold/diamond dealers, lawyers, notaries, accountants, and TCSPs) need someone checking that they actually obey R.22 and R.23. Recommendation 28 sets a two-tier rule: Casinos must be licensed and comprehensively supervised by a government authority; other DNFBPs can be monitored on a risk-sensitive basis by a government supervisor OR a qualifying Self-Regulatory Body (SRB).',
    mondayMorningReality:
      'Casino regulators run strict criminal background checks on casino owners, operators, and junket partners. Meanwhile, Bar Associations, Law Societies, and Accounting Institutes acting as SRBs must separate their "member trade-union advocacy" role from their "AML supervisor" role—conducting real risk-based inspections of law and accounting firms and imposing dissuasive sanctions.',
    criminalPlaybookAndRedFlags: [
      'Organized crime syndicates infiltrating casino operations through unlicensed VIP "junket" tour operators who lend money to high-rollers and collect gambling debts across borders.',
      'Exploiting lawyers or real estate agents in jurisdictions where the local Bar Association or Real Estate Board has zero AML inspectors and never sanctions its own members.'
    ],
    caseStudy: {
      title: 'Suncity Junket Network & UK Office for Professional Body Anti-Money Laundering Supervision (OPBAS)',
      jurisdictionAndYear: 'Macau, Australia & United Kingdom · 2018–2023',
      whatHappened:
        'In the casino sector, Australian Royal Commissions and Macau prosecutions (including the 2023 conviction and 18-year prison sentence of Suncity junket mogul Alvin Chau) exposed how lightly supervised VIP casino junkets operated shadow cross-border banking and proxy betting worth tens of billions. Meanwhile, in the legal and accounting sectors, the UK discovered it had 22 different professional bodies (SRBs) supervising lawyers and accountants with wildly inconsistent standards—leading the UK to establish OPBAS (Office for Professional Body AML Supervision) to police the SRBs themselves.',
      theBreach:
        'Failure under R.28 to prevent criminal infiltration of casino operations/junkets and failure by passive SRBs to enforce AML compliance among legal and accounting members.',
      consequencesAndLesson:
        'Demonstrated that casinos require relentless government licensing/supervision, and that SRBs only satisfy R.28 if they actively inspect and sanction non-compliant members.'
    },
    assessorLens:
      'Assessors scrutinize SRBs closely: Does the Bar Association or Accounting Body actually fine or disbar lawyers/accountants for AML breaches, or does it just protect its members?'
  },
  29: {
    recId: 29,
    plainEnglishWhy:
      'Before Financial Intelligence Units (FIUs) existed, banks had nowhere to send suspicious transaction alerts except directly to local police stations—which lacked financial analysts to connect an account in Bank A with three shell companies in Bank B and a customs cash declaration at the airport. Recommendation 29 makes the FIU the national central brain: receiving STRs, fusing them with tax/customs/police data, running operational and strategic analysis, and disseminating actionable intelligence packages.',
    mondayMorningReality:
      'The FIU operates with complete operational independence—no politician or minister can call the FIU Director and say "Stop analysing my friend’s company." Analysts perform Operational Analysis (mapping specific criminal networks and money trails for police/prosecutors) and Strategic Analysis (spotting macro trends like a spike in crypto-ATM romance scams). The FIU also connects globally with 170+ foreign FIUs through the Egmont Group Secure Web.',
    criminalPlaybookAndRedFlags: [
      'Splitting laundered funds across 8 different banks in the same city—knowing no single bank sees the whole picture, and hoping the national FIU is understaffed or lacks automated graph-analytics software to link the STRs.',
      'Political interference where corrupt officials try to starve the FIU of IT budget or install a partisan loyalist to block dissemination of PEP corruption reports.'
    ],
    caseStudy: {
      title: 'Vatican Financial Intelligence Authority (AIF) & Egmont Group Operational Independence Interventions',
      jurisdictionAndYear: 'Global Egmont Group / Multiple Jurisdictions · 2015–2023',
      whatHappened:
        'Across multiple high-profile cases globally, when domestic authorities improperly raided FIU offices, seized confidential Egmont intelligence files, or subjected FIU directors to political dismissal for analysing politically sensitive corruption cases, the Egmont Group of FIUs immediately stepped in—suspending or threatening to disconnect the jurisdiction from the Egmont Secure Web until the FIU’s operational independence and information security under R.29 were restored.',
      theBreach:
        'Violating R.29 operational independence, autonomy, and strict confidentiality/security of FIU intelligence.',
      consequencesAndLesson:
        'Being disconnected from the Egmont Group blinds a country’s financial intelligence apparatus overnight, making R.29 operational autonomy an untouchable red line in global AML.'
    },
    assessorLens:
      'Under Immediate Outcome 6, assessors check whether law enforcement actually *uses* FIU intelligence dissemination packages to launch investigations—or whether FIU reports go into a black hole.'
  },
  30: {
    recId: 30,
    plainEnglishWhy:
      'Traditionally, police detectives focused 100% on catching the bad guy and seizing the drugs or weapons, leaving the money trail as an afterthought years later—by which time every cent had vanished offshore. Recommendation 30 mandates a cultural revolution in policing: for every major proceeds-generating crime, investigators must launch a proactive **parallel financial investigation** from Day 1 to trace and freeze the money alongside the criminal case.',
    mondayMorningReality:
      'When narcotics, human trafficking, or anti-corruption investigators open a major case, financial investigators sit on the multi-disciplinary team from the very start. They map the syndicate’s bank accounts, crypto wallets, real estate, and foreign facilitators in parallel with the physical surveillance—sometimes even postponing arrests ("controlled delivery") to watch where the cash boss deposits the money.',
    criminalPlaybookAndRedFlags: [
      'Separating the "logistics cell" (who handle the drugs or contraband) from the "finance cell" (who collect and launder the cash via third-party controllers) so a traditional police bust only catches low-level couriers.'
    ],
    caseStudy: {
      title: 'Operation Trojan Shield / ANOM & EncroChat Parallel Financial Takedowns',
      jurisdictionAndYear: 'Europol, FBI, DEA & Australian Federal Police · 2020–2022',
      whatHappened:
        'When international law enforcement infiltrated encrypted criminal phone networks (EncroChat, Sky ECC, and the FBI/AFP-run ANOM app used by over 300 syndicates in 100+ countries), police did not just arrest street couriers. Multi-disciplinary teams conducted simultaneous parallel financial investigations under R.30—mapping underground crypto brokers, Dubai and Marbella real estate vaults, and professional cash-clearing houses before striking.',
      theBreach:
        'Demonstrated the decisive impact of R.30: where countries ran parallel financial investigations, they dismantled the entire financial command structure; where police only seized narcotics without parallel financial teams, syndicates quickly hired replacements.',
      consequencesAndLesson:
        'Resulted in thousands of arrests AND the simultaneous seizure of hundreds of millions in cash, cryptocurrency, luxury estates, and supercars worldwide.'
    },
    assessorLens:
      'Assessors ask police for case files of major drug, fraud, and human trafficking busts: if the file shows 10 arrests for drug trafficking and zero financial inquiries into where the gang’s millions went, the country fails R.30/IO.7.'
  },
  31: {
    recId: 31,
    plainEnglishWhy:
      'You cannot fight 21st-century transnational syndicates using 19th-century policing powers. If investigators cannot compel banks and DNFBPs to hand over records, cannot run undercover operations or wiretaps, or—worst of all—have to send a polite letter to the suspect before checking which banks hold their accounts, the investigation is dead on arrival. Recommendation 31 gives law enforcement the complete investigative toolbox.',
    mondayMorningReality:
      'Investigators have statutory powers for compulsory production of records, search and seizure, witness interviews, and special investigative techniques (undercover ops, communications interception, accessing computer systems, and controlled deliveries). Crucially, they use automated Central Bank Account Registries or quiet query mechanisms to identify every account and asset a suspect owns **without prior notification to the owner**.',
    criminalPlaybookAndRedFlags: [
      'Setting up automatic "canary alerts" with complicit insiders or relying on jurisdictions where a production order is served publicly on the account holder before a freeze takes effect.',
      'Using encrypted messaging apps, burner servers, and dead-drop couriers that can only be penetrated via R.31 special investigative techniques.'
    ],
    caseStudy: {
      title: 'Operation Car Wash (Lava Jato) — Accessing Encrypted Ledgers & Quiet Asset Tracing',
      jurisdictionAndYear: 'Brazil, Switzerland, US & Latin America · 2014–2020',
      whatHappened:
        'What began as an investigation into black-market money dealers (doleiros) at a Brasília car wash uncovered the largest corruption network in Latin American history. Using R.31 powers—wiretaps, search warrants, compulsory bank production without prior notice, and accessing covert computer systems—investigators discovered that engineering giant Odebrecht ran an entire corporate department ("Division of Structured Operations") with its own custom-built encrypted shadow banking software ("Drousys" and "MyWebDay") hosted on overseas servers to pay $788 million in bribes across 12 countries.',
      theBreach:
        'Showed that without R.31 powers to access computer systems, intercept communications, and trace accounts without alerting suspects, sophisticated corporate bribery engines remain invisible.',
      consequencesAndLesson:
        'Led to multi-billion-dollar corporate guilty pleas and asset recoveries across the Americas and Europe.'
    },
    assessorLens:
      'Assessors test how long it takes police to find out which of a country’s 80 banks holds an account for "John Doe"—and verify that John Doe is never tipped off during that search.'
  },
  32: {
    recId: 32,
    plainEnglishWhy:
      'When digital wire transfers and bank deposits get too risky for criminals, they go back to the oldest method in history: stuffing €500 banknotes or blank travellers cheques into a suitcase, car trunk, or shipping container and driving or flying across the border. Recommendation 32 requires countries to police their borders with a Declaration or Disclosure system (threshold max USD/EUR 15,000) covering both currency and Bearer Negotiable Instruments (BNIs).',
    mondayMorningReality:
      'Every traveller entering OR leaving the country with more than the preset threshold (max USD/EUR 15,000) in cash or BNIs must declare it (or truthfully answer customs officers under a disclosure system). If a courier lies or fails to declare—or if customs suspects ML/TF at any amount—officers have the legal authority to **stop or restrain** the cash, question the courier on its origin/use, impose dissuasive sanctions, send the declaration data to the FIU, and confiscate criminal cash under R.4.',
    criminalPlaybookAndRedFlags: [
      '"Cash-courier ants / smurfing": Hiring 10 passengers on the same flight to each carry €9,500 in their carry-on bags so each person stays under a €10,000/15,000 border threshold.',
      'Converting cash into high-purity gold bars, Rolex watches, or uncut diamonds before flying—because R.32 covers currency and BNIs, NOT gold or precious stones (which are instead policed under customs laws and R.22/23).'
    ],
    caseStudy: {
      title: 'Operation Toy Box / Bulk Cash Smuggling & The €500 "Bin Laden" Banknote',
      jurisdictionAndYear: 'Mexico-US Border, European Airports & Global · 2010–2023',
      whatHappened:
        'Because €1 million in €500 banknotes weighs only 2.2 kilograms and fits easily inside a laptop bag, international drug cartels and terrorist couriers routinely used airline mules and commercial cargo to move hundreds of millions in physical banknotes across borders. In one famous Mexico City Airport & mansion raid (Zhenli Ye Gon case), authorities seized $207 million in physical US cash stacked floor-to-ceiling that had been smuggled across borders to pay for methamphetamine precursor chemicals.',
      theBreach:
        'Weak outbound border cash controls, failure to link customs cash declarations to the FIU (R.29), or imposing tiny €200 administrative "slap on the wrist" fines when couriers were caught lying with €500,000 in their luggage.',
      consequencesAndLesson:
        'The European Central Bank permanently stopped printing the €500 banknote in 2019, and FATF assessors strictly test whether customs authorities restrain undeclared cash, impose dissuasive sanctions, and feed intelligence to the FIU.'
    },
    assessorLens:
      'Classic exam trap & assessor check: Does the country monitor BOTH inbound AND outbound travellers? And remember: gold and diamonds are NOT covered by R.32 (they fall under general customs law and R.22/23).'
  },
  33: {
    recId: 33,
    plainEnglishWhy:
      'Many governments claim they have a "world-class AML system." Then FATF assessors arrive and ask four simple questions: How many STRs did you receive and disseminate? How many ML/TF investigations, prosecutions, and convictions did you achieve? How much criminal property did you freeze, seize, and confiscate? How many international MLA requests did you answer and how long did they take? If the country has no reliable numbers, it cannot prove its system works.',
    mondayMorningReality:
      'The National Coordination Committee (R.2), FIU, Judiciary, Asset Recovery Office, and Ministry of Justice maintain unified, reconcilable statistics across all four mandatory R.33 pillars—tracking cases from initial STR or investigation all the way to final conviction and asset confiscation.',
    criminalPlaybookAndRedFlags: [
      'Jurisdictions masking systemic enforcement failures behind inflated or double-counted statistics (e.g., counting every frozen €50 bank account as a "major confiscation success" while zero high-level corruption or third-party laundering cases ever reach trial).'
    ],
    caseStudy: {
      title: 'The "Mutual Evaluation Data Collapse" in FATF 4th Round Assessments',
      jurisdictionAndYear: 'Global FATF / FSRB Mutual Evaluations · 2015–2025',
      whatHappened:
        'During the 4th Round of FATF Mutual Evaluations, dozens of countries discovered during their on-site assessment week that their Police recorded statistics by "number of suspects arrested," their Prosecutors recorded statistics by "number of indictments filed," and their Courts recorded statistics by "principal offence only"—making it impossible to prove how many money laundering investigations actually resulted in convictions or how much confiscated cash was collected.',
      theBreach:
        'Failure under R.33 to maintain comprehensive, consistent national statistics across STRs, ML/TF investigations/prosecutions/convictions, frozen/seized/confiscated property, and MLA requests.',
      consequencesAndLesson:
        'Without credible R.33 statistics, countries cannot demonstrate Effectiveness under the 11 Immediate Outcomes and regularly drop into Enhanced Follow-Up or the FATF Grey List.'
    },
    assessorLens:
      'Assessors cross-check statistics between agencies: if the FIU claims it sent 400 intelligence packages to the Police, and the Police claim they only received 180, the country’s R.33 data integrity is immediately challenged.'
  },
  34: {
    recId: 34,
    plainEnglishWhy:
      'If the FIU and supervisors treat Suspicious Transaction Reports like a one-way black hole—never telling banks or DNFBPs which reports were useful, what new criminal typologies are emerging, or how to spot red flags—compliance teams end up flying blind and filing low-quality "defensive" STRs just to avoid fines. Recommendation 34 requires regulators, FIUs, and SRBs to teach, guide, and give feedback.',
    mondayMorningReality:
      'The FIU and supervisors publish sector-specific red-flag typology guides (e.g., "How to Spot Trade-Based Money Laundering" or "Fentanyl Precursor Payment Red Flags"), hold regular feedback briefings with bank/DNFBP compliance officers, and give direct feedback on the quality and usefulness of STRs submitted.',
    criminalPlaybookAndRedFlags: [
      'Exploiting brand-new laundering methods (such as pig-butchering crypto romance scams, illegal wildlife trade corridors, or sanctions-evasion transshipment hubs) before regulators issue updated typology alerts to front-line banks.'
    ],
    caseStudy: {
      title: 'FinCEN Advisory Alerts & Project Protect (Human Trafficking & Fentanyl Typology Feedback)',
      jurisdictionAndYear: 'Canada (FINTRAC Project Protect) & USA (FinCEN) · 2016–2025',
      whatHappened:
        'In Canada, banks historically filed relatively few STRs on human trafficking for sexual exploitation because front-line compliance analysts didn’t know what a trafficking victim’s bank statement looked like. Under Project Protect (an R.34 guidance and public-private feedback initiative led by FINTRAC and major banks), authorities shared concrete behavioural indicators: frequent late-night hotel bookings, specific online classified ad payments, multiple restaurant single-meal charges paired with zero grocery/rent expenses, and rapid email money transfers to a controller.',
      theBreach:
        'Prior to targeted R.34 feedback and typology guidance, reporting entities lacked practical red flags to detect hidden predicate crimes in routine retail accounts.',
      consequencesAndLesson:
        'Following Project Protect’s R.34 guidance, actionable human-trafficking STRs surged by over 500%, directly rescuing victims and convicting dozens of trafficking ring leaders.'
    },
    assessorLens:
      'Assessors interview private-sector compliance officers (without government officials in the room!) and ask: "Does your FIU and supervisor actually give you helpful feedback on your STRs, or do they just lecture you?"'
  },
  35: {
    recId: 35,
    plainEnglishWhy:
      'If a bank makes $500 million in profit catering to high-risk offshore shell companies, and the maximum penalty in the country’s banking law for breaking AML rules is a $25,000 fine—and no bank executive can ever be personally fined or banned—compliance becomes a joke. Recommendation 35 demands a full spectrum of **effective, proportionate, and dissuasive** criminal, civil, or administrative sanctions that hit both the corporate entity AND its directors and senior management.',
    mondayMorningReality:
      'When an FI, DNFBP, or VASP breaches Recommendations 6 or 8–23, supervisors and courts can deploy graduated sanctions: written warnings, mandatory independent monitors, multi-million/billion-dollar financial penalties that strip away illicit profits, removal and industry debarment of directors/senior executives, and licence revocation.',
    criminalPlaybookAndRedFlags: [
      'Senior bank executives pressuring compliance officers to approve lucrative high-risk clients while assuming that if regulators ever catch on, the bank’s shareholders will pay a corporate fine while executives keep their bonuses.'
    ],
    caseStudy: {
      title: 'Individual Executive Accountability & Record Dissuasive Fines (Rabobank, ING, Binance, Westpac)',
      jurisdictionAndYear: 'Netherlands, USA, UK & Australia · 2018–2024',
      whatHappened:
        'In the Netherlands, ING paid €775 million (2018) and ABN AMRO paid €480 million (2021) for systemic AML failures, while Dutch prosecutors also opened personal criminal investigations into former top executives for failing to prevent structural compliance gaps. In the US, FinCEN and DOJ fined Rabobank $368M (and prosecuted executives who concealed AML audit failures near the US-Mexico border) and fined Binance $4.3B alongside a personal $50M fine and prison sentence for its CEO.',
      theBreach:
        'Demonstrated that R.35 requires sanctions to be truly dissuasive (never a "cost of doing business") and to reach directors and senior management personally.',
      consequencesAndLesson:
        'Many countries that had outdated $50,000 statutory fine caps had to amend their AML Acts to allow penalties up to 10% of annual turnover and personal executive bans to pass FATF R.35 scrutiny.'
    },
    assessorLens:
      'Assessors check two things: (1) Are the maximum penalties in law high enough to scare a major bank as well as a small realtor? (2) Have supervisors actually sanctioned any directors or senior managers in practice?'
  },
  36: {
    recId: 36,
    plainEnglishWhy:
      'Money laundering, corruption, and terrorist financing are global crimes. If Country A and Country B haven’t signed and implemented the same foundational United Nations treaties, their definitions of crimes, extradition rules, and asset recovery obligations won’t match. Recommendation 36 requires every country to sign, ratify, and fully implement the four bedrock UN Conventions.',
    mondayMorningReality:
      'Legislatures must not merely ratify the four mandatory UN treaties at the United Nations—they must pass domestic legislation implementing every mandatory article of: (1) The 1988 Vienna Convention (Drugs), (2) The 2000 Palermo Convention (Transnational Organized Crime), (3) The 2003 Merida Convention / UNCAC (Corruption), and (4) The 1999 Terrorist Financing Convention.',
    criminalPlaybookAndRedFlags: [
      'Fleeing to or stashing corruption proceeds in a jurisdiction that signed the UN Convention against Corruption (UNCAC) for diplomatic photo-ops at the UN, but never passed domestic laws implementing its asset-return or foreign-bribery articles.'
    ],
    caseStudy: {
      title: 'UNCAC Asset Return & The Sani Abacha ($3+ Billion) Kleptocracy Repatriations',
      jurisdictionAndYear: 'Nigeria, Switzerland, Jersey, UK & USA · 2003–2024',
      whatHappened:
        'General Sani Abacha looted an estimated $3 billion to $5 billion from Nigeria’s Central Bank and state oil revenues during the 1990s, wiring the money through London, New York, Jersey, Liechtenstein, and Swiss banks. Utilizing the international legal framework of the 2003 UN Convention against Corruption (UNCAC — mandatory under R.36) alongside Palermo Convention MLA mechanisms, Switzerland, the US, the UK, and Jersey traced, froze, confiscated, and repatriated over $3.6 billion back to Nigeria under monitored development agreements.',
      theBreach:
        'Prior to full implementation of the Vienna, Palermo, and UNCAC treaties under R.36, requested countries lacked a multilateral treaty basis to confiscate and return stolen state assets.',
      consequencesAndLesson:
        'Proved why R.36 requires both ratification AND full domestic implementation of the four mandatory UN Conventions.'
    },
    assessorLens:
      'Assessors don’t just check if the treaty was signed—they cross-check whether R.3 (Vienna/Palermo ML offence) and R.5 (1999 TF Convention offence) are 100% implemented in domestic law.'
  },
  37: {
    recId: 37,
    plainEnglishWhy:
      'A money launderer can wire $10 million across five countries in 10 minutes. Historically, when prosecutors in Country A sent a formal Mutual Legal Assistance (MLA) request ("rogatory letter") to Country B asking for certified bank statements for trial, Country B took 18 months to reply—or rejected the request saying: "Sorry, this involves tax evasion," or "Our bank secrecy law forbids it," or "Your law calls this crime Wire Fraud whereas our law calls it Electronic Swindling." Recommendation 37 bans every single one of those excuses.',
    mondayMorningReality:
      'Every country designates a Central Authority with a modern digital Case Management System to prioritize and execute foreign MLA requests rapidly. Under R.37: (1) You CANNOT refuse an MLA request because it involves fiscal/tax matters; (2) You CANNOT refuse because of bank/DNFBP secrecy (except bona fide legal privilege); (3) Non-coercive assistance requires NO dual criminality; and (4) Where dual criminality applies, it is satisfied if both countries criminalise the *underlying conduct* regardless of terminology.',
    criminalPlaybookAndRedFlags: [
      'Layering funds through 6 jurisdictions knowing that if even one jurisdiction takes 2 years to answer an MLA subpoena, the statute of limitations in the prosecuting country will expire.',
      'Blending commercial fraud with tax evasion in hopes that an offshore financial centre will invoke an old "fiscal offence exception" to block MLA.'
    ],
    caseStudy: {
      title: 'FIFA Global Corruption Investigation & Cross-Border MLA Speed',
      jurisdictionAndYear: 'United States, Switzerland & 20+ Countries · 2015–2022',
      whatHappened:
        'In the FIFA bribery and money laundering investigation, US and Swiss prosecutors traced hundreds of millions of dollars in sports-marketing kickbacks wired through banks in the US, Switzerland, Panama, the Cayman Islands, Israel, and across South America. Corrupt football executives challenged MLA production orders in court by arguing technical differences in how countries defined private-sector commercial bribery and tax reporting.',
      theBreach:
        'Attempts by defendants to exploit technical dual-criminality differences and bank secrecy to block cross-border production of bank records.',
      consequencesAndLesson:
        'Applying R.37 principles—conduct-based dual criminality, overriding bank secrecy, and rapid Central Authority coordination—authorities executed coordinated raids and recovered over $200 million in forfeited corruption proceeds.'
    },
    assessorLens:
      'Under Immediate Outcome 2, assessors ask foreign countries for feedback on the assessed country: "When you sent MLA requests to Country X last year, did they answer constructively within weeks, or did they stall for two years?"'
  },
  38: {
    recId: 38,
    plainEnglishWhy:
      'Winning a conviction in Paris or São Paulo is a hollow victory if the criminal’s €40 million villa and bank accounts are sitting safely in another country that refuses to enforce foreign confiscation orders—or demands a brand-new 3-year trial from scratch before freezing a single euro. Recommendation 38 (overhauled in November 2023) requires countries to act expeditiously to trace, freeze, seize, and confiscate criminal property for foreign partners, and directly recognize foreign confiscation orders.',
    mondayMorningReality:
      'When a foreign court issues a freezing or confiscation order (whether conviction-based OR non-conviction-based), the requested country’s authorities can recognize and enforce that order directly by **relying on the foreign order’s findings of fact**—without re-litigating the crime domestically. Countries also manage frozen assets so they don’t lose value and share or return confiscated proceeds.',
    criminalPlaybookAndRedFlags: [
      'Keeping the criminal operations in Country A while parking all real estate, yachts, and liquid reserves in Country B—specifically picking a Country B that historically refused to recognize foreign Non-Conviction-Based (NCB) forfeiture orders.'
    ],
    caseStudy: {
      title: 'Petrobras / Lava Jato & The $680M+ Swiss-Brazilian-US Cross-Border Asset Recovery',
      jurisdictionAndYear: 'Switzerland, Brazil & United States · 2015–2023',
      whatHappened:
        'Corrupt executives of Brazil’s state oil company Petrobras and construction cartels stashed over $1 billion in secret accounts across dozens of Swiss and offshore banks under shell companies. Rather than forcing Brazilian prosecutors to wait a decade for every final appellate conviction before freezing a dime, Swiss authorities froze over 1,000 accounts expeditiously, recognized both conviction and non-conviction forfeiture mechanisms, relied on shared factual findings, and returned over CHF 680 million+ to Brazil and victims.',
      theBreach:
        'Demonstrated how R.38 overcomes the historical barrier where criminals escaped asset loss simply by parking proceeds across an international border.',
      consequencesAndLesson:
        'Modelled the November 2023 revisions to R.38: informal pre-MLA coordination, direct recognition of foreign orders (including NCB orders), and cross-border asset sharing/return.'
    },
    assessorLens:
      'Assessors check whether a country can enforce a foreign Non-Conviction-Based confiscation order when a kleptocrat has died or fled.'
  },
  39: {
    recId: 39,
    plainEnglishWhy:
      'If a mastermind launders $100 million or finances a terrorist group and then hops on a private jet to a country that refuses to extradite them—and also refuses to put them on trial locally—that country becomes a criminal safe haven. Recommendation 39 establishes an iron rule: **No safe havens**. Either extradite the suspect without undue delay, OR if your constitution forbids extraditing your own citizens, prosecute them at home yourself (*aut dedere aut judicare*).',
    mondayMorningReality:
      'Money laundering and terrorist financing must be extraditable offences. Dual criminality is conduct-based (same name/category not required). Countries use simplified extradition mechanisms (such as direct transmission of provisional arrest requests via Interpol Red Notices and fast-track extradition where the suspect consents). If extradition of a national is refused solely on nationality grounds, the domestic prosecutor must immediately take over the case and prosecute it as a serious offence.',
    criminalPlaybookAndRedFlags: [
      'Acquiring dual citizenship (including via " Citizenship by Investment / Golden Passport" schemes) in a country whose constitution prohibits extraditing its own nationals, then flying there the day before an indictment is unsealed.'
    ],
    caseStudy: {
      title: 'OneCoin ($4 Billion Crypto Fraud) & International Extradition / Aut Dedere Aut Judicare',
      jurisdictionAndYear: 'Europe, United States, UAE & Global · 2017–2024',
      whatHappened:
        'The OneCoin pyramid scheme defrauded victims worldwide of over $4 billion using a fake cryptocurrency and laundered the proceeds through banks, real estate, and investment funds across dozens of countries. While co-founder Karl Sebastian Greenwood was extradited from Thailand to the US (sentenced to 20 years in 2023) and legal head Irina Dilkinska was extradited from Bulgaria (sentenced in 2024), other fugitives across major fraud and laundering cases attempted to hide behind nationality bars in countries that neither extradited nor prosecuted domestically.',
      theBreach:
        'Refusing extradition on nationality grounds without immediately submitting the case for serious domestic prosecution in cooperation with the requesting state.',
      consequencesAndLesson:
        'Reinforced why R.39 requires both simplified extradition procedures and strict enforcement of the "extradite or prosecute" (*aut dedere aut judicare*) rule.'
    },
    assessorLens:
      'Assessors ask: "Show us the list of own-nationals whose extradition you refused over the last 5 years—how many of them did you actually prosecute and convict in your own courts?"'
  },
  40: {
    recId: 40,
    plainEnglishWhy:
      'Formal Mutual Legal Assistance (R.37) is designed to get certified courtroom evidence—which takes weeks. But when an FIU spots a suspicious wire in flight, a bank supervisor is inspecting a cross-border banking group, or police are tracking a fugitive’s wallet at 2:00 AM, waiting weeks for a diplomatic treaty request is fatal. Recommendation 40 requires FIUs, supervisors, and police to share intelligence rapidly across borders—both on request AND **spontaneously** (without even being asked!).',
    mondayMorningReality:
      'FIUs exchange STRs and financial/LE data with any foreign FIU via Egmont regardless of whether the foreign FIU is administrative or police-based (and can freeze/suspend a transaction on a foreign FIU’s request). Financial supervisors share inspection findings and sample customer CDD files with foreign supervisors. Police share intelligence via Interpol/Europol/ARIN networks. Even different types of agencies can cooperate via "diagonal cooperation" while respecting strict purpose-limitation and confidentiality safeguards.',
    criminalPlaybookAndRedFlags: [
      'Exploiting the gap between an administrative FIU in Country A and a police-model FIU in Country B if either country refuses to share intelligence with an agency of a "different legal status".',
      'Moving illicit funds through a multinational bank’s branches in three countries hoping the three national bank supervisors never compare sample customer files.'
    ],
    caseStudy: {
      title: 'Danske / Swedbank Baltic Supervisory College & Egmont Spontaneous FIU Freezes',
      jurisdictionAndYear: 'Nordic-Baltic Corridor & Global Egmont Network · 2018–2024',
      whatHappened:
        'Before the Baltic money laundering scandals broke publicly, fragmented cross-border supervisory sharing meant host supervisors in Estonia/Latvia and home supervisors in Denmark/Sweden were not systematically exchanging sample non-resident customer files and AML inspection findings. In response, Nordic and Baltic financial supervisors formed permanent AML Supervisory Colleges under R.40 principles, while Egmont Group FIUs increasingly used spontaneous intelligence sharing and foreign-requested transaction suspension powers to freeze tens of millions in Business Email Compromise (BEC) and ransomware proceeds mid-flight.',
      theBreach:
        'Historical failure to proactively and spontaneously share supervisory and FIU intelligence across borders before dirty money exited the banking system.',
      consequencesAndLesson:
        'Made R.40 spontaneous sharing, FIU transaction suspension requests, and supervisor-to-supervisor CDD file sharing essential pillars of modern cross-border AML defence.'
    },
    assessorLens:
      'Assessors check the ratio of **spontaneous** disclosures sent to foreign counterparts: if a country is a major financial hub but never proactively alerts foreign FIUs or police when it spots foreign crimes in its banks, it fails R.40 effectiveness.'
  }
};
