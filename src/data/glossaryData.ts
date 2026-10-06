import { GlossaryTerm } from '../types/fatf';

export const DESIGNATED_CATEGORIES_OF_OFFENCES: {
  id: number;
  name: string;
  examples: string;
}[] = [
  { id: 1, name: 'Participation in an organised criminal group and racketeering', examples: 'Mafia syndicates, cartels, structured criminal enterprises, protection rackets.' },
  { id: 2, name: 'Terrorism, including terrorist financing', examples: 'Acts of terror, funding terrorist cells, foreign terrorist fighter travel funding (R.5).' },
  { id: 3, name: 'Trafficking in human beings and migrant smuggling', examples: 'Forced labor rings, cross-border illegal smuggling networks, modern slavery.' },
  { id: 4, name: 'Sexual exploitation, including sexual exploitation of children', examples: 'Commercial sexual exploitation networks, child abuse material proceeds.' },
  { id: 5, name: 'Illicit trafficking in narcotic drugs and psychotropic substances', examples: 'Production, wholesale distribution, and cross-border movement of controlled narcotics.' },
  { id: 6, name: 'Illicit arms trafficking', examples: 'Illegal trade in small arms, light weapons, heavy weaponry, and unrecorded munitions.' },
  { id: 7, name: 'Illicit trafficking in stolen and other goods', examples: 'Fencing stolen vehicles, cultural antiquities, cargo theft syndicates.' },
  { id: 8, name: 'Corruption and bribery', examples: 'Public official bribery, embezzlement of state funds, kickback schemes, UNCAC offences.' },
  { id: 9, name: 'Fraud', examples: 'Investment Ponzi schemes, wire fraud, business email compromise, procurement fraud.' },
  { id: 10, name: 'Counterfeiting currency', examples: 'Printing, minting, or distributing forged banknotes and coins.' },
  { id: 11, name: 'Counterfeiting and piracy of products', examples: 'Fake pharmaceuticals, luxury goods counterfeiting, commercial-scale IP piracy.' },
  { id: 12, name: 'Environmental crime', examples: 'Illegal logging, wildlife trafficking, illegal fishing, hazardous waste dumping, illegal mining.' },
  { id: 13, name: 'Murder, grievous bodily injury', examples: 'Contract killings, violent assault for hire generating criminal proceeds.' },
  { id: 14, name: 'Kidnapping, illegal restraint and hostage-taking', examples: 'Kidnap-for-ransom operations, unlawful detention for financial extortion.' },
  { id: 15, name: 'Robbery or theft', examples: 'Armed bank robbery, organized retail theft, high-value vault heists.' },
  { id: 16, name: 'Smuggling (including in relation to customs and excise duties and taxes)', examples: 'Contraband tobacco/alcohol/fuel smuggling evading border duties and excises.' },
  { id: 17, name: 'Tax crimes (related to direct taxes and indirect taxes)', examples: 'Criminal tax evasion, VAT carousel fraud, falsified offshore tax declarations.' },
  { id: 18, name: 'Extortion', examples: 'Ransomware demands, blackmail, coercive extraction of funds or property.' },
  { id: 19, name: 'Forgery', examples: 'Falsification of official deeds, identity documents, financial instruments, or certificates.' },
  { id: 20, name: 'Piracy', examples: 'Maritime piracy, hijacking of commercial vessels and cargo for ransom.' },
  { id: 21, name: 'Insider trading and market manipulation', examples: 'Trading on material non-public information, pump-and-dump securities schemes.' }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'beneficial-owner',
    term: 'Beneficial Owner (BO)',
    shortDef: 'The natural person(s) who ultimately owns or controls a customer and/or the natural person on whose behalf a transaction is being conducted.',
    fullDef: 'Always refers to natural (physical) persons, never another legal entity. For legal persons: (i) natural persons with controlling ownership interest (e.g., ≥25%), (ii) if doubt or none, natural persons exercising control through other means, or (iii) fallback to the senior managing official. For legal arrangements (trusts): includes the settlor(s), trustee(s), protector(s) (if any), each beneficiary or class of beneficiaries, and any other natural person exercising ultimate effective control over the arrangement (including through a chain of control/ownership).',
    category: 'Core Concept',
    relatedRecs: [10, 12, 22, 24, 25]
  },
  {
    id: 'cdd',
    term: 'Customer Due Diligence (CDD)',
    shortDef: 'Four-part process to identify and verify customers, their beneficial owners, the nature of the business relationship, and ongoing monitoring.',
    fullDef: 'Under R.10, CDD comprises four mandatory measures: (a) identifying the customer and verifying that identity using reliable, independent source documents, data or information; (b) identifying the beneficial owner and taking reasonable measures to verify identity so the institution understands the ownership and control structure; (c) understanding and obtaining information on the purpose and intended nature of the business relationship; and (d) conducting ongoing due diligence on the business relationship and scrutiny of transactions undertaken throughout the course of that relationship.',
    category: 'Compliance & Measure',
    relatedRecs: [10, 11, 12, 17, 22]
  },
  {
    id: 'dnfbp',
    term: 'DNFBP (Designated Non-Financial Businesses and Professions)',
    shortDef: 'Six non-financial gatekeeper sectors subject to AML/CFT preventive measures: casinos, realtors, precious metal/stone dealers, lawyers/notaries/accountants, and TCSPs.',
    fullDef: 'Defined by FATF to cover: (a) Casinos (including internet and ship-based casinos); (b) Real estate agents; (c) Dealers in precious metals and dealers in precious stones; (d) Lawyers, notaries, other independent legal professionals and accountants when preparing or carrying out specified financial/corporate activities for clients; and (e) Trust and Company Service Providers (TCSPs) providing specified company/trust services.',
    category: 'Actor & Entity',
    relatedRecs: [1, 22, 23, 28, 34, 35],
    subItems: [
      'Casinos (threshold: USD/EUR 3,000)',
      'Real estate agents (both buyers and vendors)',
      'Dealers in precious metals & precious stones (cash threshold: USD/EUR 15,000)',
      'Lawyers, notaries, independent legal professionals & accountants',
      'Trust and Company Service Providers (TCSPs)'
    ]
  },
  {
    id: 'fiu',
    term: 'Financial Intelligence Unit (FIU)',
    shortDef: 'National central agency responsible for receiving, analysing, and disseminating suspicious transaction reports (STRs) and other AML/CFT intelligence.',
    fullDef: 'Under R.29, countries must establish an FIU with three core functions: (1) Receipt of STRs and other relevant reports (cash transaction reports, wire reports, cross-border declarations); (2) Operational analysis (focusing on specific targets/trails) and Strategic analysis (focusing on macro ML/TF trends and typologies); and (3) Dissemination of intelligence spontaneously and upon request to competent authorities. Must have operational independence, autonomy, secure facilities, and apply for Egmont Group membership.',
    category: 'Actor & Entity',
    relatedRecs: [2, 20, 29, 31, 32, 40]
  },
  {
    id: 'mvts',
    term: 'Money or Value Transfer Services (MVTS)',
    shortDef: 'Financial services that accept cash, cheques, or other monetary value in one location and pay a corresponding sum in another location.',
    fullDef: 'Includes formal remittance businesses as well as informal value transfer systems such as hawala, hundi, and fei-chen. Transactions can involve one or more intermediaries and a final payment to a third party. Under R.14, all MVTS providers must be licensed or registered, and their agents must either be licensed/registered or listed on a current agent roster accessible to competent authorities.',
    category: 'Actor & Entity',
    relatedRecs: [14, 16, 26]
  },
  {
    id: 'npo',
    term: 'Non-Profit Organisation (NPO)',
    shortDef: 'A legal person or arrangement or organisation that primarily engages in raising or disbursing funds for charitable, religious, cultural, educational, social or fraternal purposes.',
    fullDef: 'FATF uses a functional definition (not all non-profits qualify). Under R.8, countries must identify which organisations fall within this definition, assess their terrorist financing risks, and apply focused, proportionate, risk-based measures without unduly disrupting legitimate charitable activities. NPOs are NOT reporting entities and should not be required to perform CDD on beneficiaries.',
    category: 'Actor & Entity',
    relatedRecs: [8]
  },
  {
    id: 'pep',
    term: 'Politically Exposed Person (PEP)',
    shortDef: 'Individuals who are or have been entrusted with prominent public functions (foreign, domestic, or in an international organisation), plus family and close associates.',
    fullDef: 'Three categories: (1) Foreign PEPs: Heads of State/government, senior politicians, senior government/judicial/military officials, senior executives of state-owned corporations, important political party officials in a foreign country (always treated as high-risk requiring enhanced measures under R.12); (2) Domestic PEPs: same roles domestically (enhanced measures apply when higher-risk); (3) International Organisation PEPs: directors, deputy directors, and board members of international bodies. Does NOT cover middle-ranking or more junior individuals. Requirements extend to family members and close associates.',
    category: 'Actor & Entity',
    relatedRecs: [10, 12, 22]
  },
  {
    id: 'rba',
    term: 'Risk-Based Approach (RBA)',
    shortDef: 'Allocating AML/CFT resources and calibrating preventive/supervisory measures commensurate with the identified level of ML/TF/PF risk.',
    fullDef: 'The foundational principle of the FATF Standards (R.1). Where risks are higher, countries and institutions must apply enhanced measures to manage and mitigate those risks. Where risks are lower, simplified measures may be allowed (provided there is zero suspicion of ML/TF). RBA never permits exemptions from Targeted Financial Sanctions (R.6/R.7).',
    category: 'Core Concept',
    relatedRecs: [1, 8, 10, 15, 26, 28]
  },
  {
    id: 'srb',
    term: 'Self-Regulatory Body (SRB)',
    shortDef: 'A body that represents a profession (e.g., lawyers, notaries, accountants) and regulates persons qualified to practice in that field.',
    fullDef: 'An SRB is made up of members of the profession, has a role in regulating the persons who are qualified to enter and who practise in the profession, and also performs certain supervisory or monitoring-type functions. Under R.28, SRBs may supervise non-casino DNFBPs if they can enforce compliance, ensure fit-and-proper standards, and impose sanctions. Under R.15, SRBs CANNOT supervise Virtual Asset Service Providers (VASPs).',
    category: 'Actor & Entity',
    relatedRecs: [15, 23, 28, 34]
  },
  {
    id: 'str',
    term: 'Suspicious Transaction Report (STR)',
    shortDef: 'Mandatory prompt report filed with the FIU when an FI or DNFBP suspects or has reasonable grounds to suspect funds are proceeds of criminal activity or linked to TF.',
    fullDef: 'Under R.20 and R.23, reporting entities must file an STR promptly with the FIU whenever they suspect or have reasonable grounds to suspect that funds are the proceeds of a criminal activity or are related to terrorist financing. Applies regardless of the transaction amount and explicitly covers attempted transactions. Reporters are protected from civil/criminal liability for good-faith reporting and strictly prohibited from tipping off the customer (R.21).',
    category: 'Compliance & Measure',
    relatedRecs: [10, 16, 18, 20, 21, 23, 29, 33, 34]
  },
  {
    id: 'tcsp',
    term: 'Trust and Company Service Provider (TCSP)',
    shortDef: 'Businesses or persons providing company formation, director/nominee services, registered offices, or trustee services to third parties.',
    fullDef: 'Under R.22(e), TCSPs are DNFBPs when they prepare or carry out transactions for a client concerning: acting as a formation agent of legal persons; acting as (or arranging for another person to act as) a director or secretary of a company, a partner of a partnership, or a similar position; providing a registered office, business address or accommodation, correspondence or administrative address; acting as (or arranging for another person to act as) a trustee of an express trust or performing the equivalent function; or acting as (or arranging for another person to act as) a nominee shareholder for another person.',
    category: 'Actor & Entity',
    relatedRecs: [22, 23, 24, 25, 28]
  },
  {
    id: 'vasp',
    term: 'Virtual Asset (VA) & Virtual Asset Service Provider (VASP)',
    shortDef: 'Digital representation of value that can be digitally traded/transferred (VA), and any business exchanging, transferring, safekeeping, or issuing VAs (VASP).',
    fullDef: 'A Virtual Asset (VA) is a digital representation of value that can be digitally traded, or transferred, and can be used for payment or investment purposes (excludes digital representations of fiat currencies, securities, and other financial assets already covered elsewhere). A VASP is any natural or legal person who as a business conducts one or more of five activities for or on behalf of another person: (i) exchange between VAs and fiat currencies; (ii) exchange between one or more forms of VAs; (iii) transfer of VAs; (iv) safekeeping and/or administration of VAs or instruments enabling control over VAs; and (v) participation in and provision of financial services related to an issuer’s offer and/or sale of a VA. Occasional transaction CDD threshold for VASPs is USD/EUR 1,000.',
    category: 'Actor & Entity',
    relatedRecs: [15, 16]
  },
  {
    id: 'bni',
    term: 'Bearer Negotiable Instruments (BNIs)',
    shortDef: 'Monetary instruments in bearer form (travellers cheques, negotiable cheques, promissory notes, money orders) where title passes upon physical delivery.',
    fullDef: 'Includes monetary instruments in bearer form such as: travellers cheques; negotiable instruments (including cheques, promissory notes and money orders) that are either in bearer form, endorsed without restriction, made out to a fictitious payee, or otherwise in such form that title thereto passes upon delivery; and incomplete instruments (including cheques, promissory notes and money orders) signed, but with the payee’s name omitted. Covered by R.32 cross-border declaration/disclosure rules (unlike gold or precious stones).',
    category: 'Core Concept',
    relatedRecs: [32]
  },
  {
    id: 'designated-person',
    term: 'Designation & Designated Person/Entity',
    shortDef: 'Identification of a person or entity subject to targeted financial sanctions pursuant to UNSC resolutions (1267/1988, 1373, 1718, 1737).',
    fullDef: 'Designation means the identification of a person, group, undertaking, or entity that is subject to targeted financial sanctions pursuant to United Nations Security Council resolutions on terrorism (1267/1999, 1988/2011), domestic/third-country designations under UNSCR 1373 (2001), or proliferation financing resolutions (DPRK 1718 series, Iran 1737/2231 series). Evidentiary standard is "reasonable grounds" or "reasonable basis" to suspect or believe—never conditional on the existence of a criminal proceeding.',
    category: 'Sanctions & Legal',
    relatedRecs: [6, 7, 16]
  },
  {
    id: 'freeze-seize-confiscate',
    term: 'Freeze vs. Seize vs. Confiscation',
    shortDef: 'Three distinct stages of asset control: Freeze (prohibit transfer/movement), Seize (authority takes custody/administration), Confiscation (permanent deprivation of ownership).',
    fullDef: '• Freeze: Prohibiting the transfer, conversion, disposition or movement of any property, equipment or other instrumentalities on the basis of, and for the duration of the validity of, an action initiated by a competent authority or a court under a freezing mechanism (property remains held by the person/FI).\n• Seize: Prohibiting the transfer, conversion, disposition or movement of property on the basis of an action initiated by a competent authority or a court, where the competent authority or court assumes custody, control, or administration of the property.\n• Confiscation (including forfeiture): The permanent deprivation of funds or other assets by order of a competent authority or a court, transferring title to the State.',
    category: 'Sanctions & Legal',
    relatedRecs: [4, 6, 7, 30, 32, 38]
  },
  {
    id: 'without-delay',
    term: 'Without Delay',
    shortDef: 'Ideally within a matter of hours of a designation by the UN Security Council or its Sanctions Committees.',
    fullDef: 'For the purposes of Targeted Financial Sanctions (R.6 and R.7), "without delay" means, ideally, within a matter of hours of a designation by the United Nations Security Council or its relevant Sanctions Committees (e.g., 1267, 1988, 1718 Committees), in order to prevent the flight or dissipation of funds or other assets linked to terrorists, terrorist organisations, or WMD proliferators.',
    category: 'Sanctions & Legal',
    relatedRecs: [6, 7]
  },
  {
    id: 'shell-bank',
    term: 'Shell Bank & Physical Presence',
    shortDef: 'A bank that has no physical presence (meaningful mind and management) in the country in which it is incorporated and licensed, and is unaffiliated with a regulated financial group.',
    fullDef: 'Physical presence means meaningful mind and management located within a country. The mere existence of a local agent or low-level staff does NOT constitute physical presence. Under R.13 and R.26, countries must refuse the establishment or continued operation of shell banks, and financial institutions must refuse to enter into or continue correspondent banking relationships with shell banks or allow their accounts to be used by respondent institutions that permit shell banks.',
    category: 'Actor & Entity',
    relatedRecs: [13, 26]
  },
  {
    id: 'express-trust',
    term: 'Express Trust & Legal Arrangement',
    shortDef: 'A trust clearly created by the settlor, usually in the form of a document (e.g., a written deed of trust), as distinct from trusts arising by operation of law.',
    fullDef: 'Legal arrangements refer to express trusts or other similar legal arrangements (such as fiducie, certain types of Treuhand, fideicomiso, and Waqf). In an express trust, ownership and control are separated: the settlor transfers assets to a trustee who manages them according to the trust deed for the benefit of specified beneficiaries or a class of beneficiaries, sometimes overseen by a protector.',
    category: 'Core Concept',
    relatedRecs: [10, 22, 25]
  },
  {
    id: 'asset-recovery',
    term: 'Asset Recovery',
    shortDef: 'End-to-end process of identifying, tracing, freezing, seizing, confiscating, managing, and returning or sharing criminal property.',
    fullDef: 'Under R.4 and R.38, countries must establish policies and operational frameworks that prioritise asset recovery both domestically and internationally. Includes conviction-based confiscation, non-conviction-based confiscation, value-based confiscation (property of corresponding value), voiding prejudicial transfers, and asset management/sharing.',
    category: 'Sanctions & Legal',
    relatedRecs: [4, 30, 31, 38]
  },
  {
    id: 'financial-group',
    term: 'Financial Group',
    shortDef: 'A group consisting of a parent company (or other legal person exercising control) together with its branches and/or majority-owned subsidiaries subject to AML/CFT policies.',
    fullDef: 'Under R.18, financial groups are required to implement group-wide AML/CFT programmes applicable to all branches and majority-owned subsidiaries. These programmes must include policies and procedures for sharing information within the group for CDD and ML/TF risk management (including information on unusual transactions or the fact that an STR has been filed, protected by strong confidentiality and anti-tipping-off safeguards).',
    category: 'Actor & Entity',
    relatedRecs: [17, 18, 22, 26]
  },
  {
    id: 'payable-through-accounts',
    term: 'Payable-Through Accounts',
    shortDef: 'Correspondent accounts used directly by third parties to transact business on their own behalf.',
    fullDef: 'Under R.13(e), where a correspondent banking relationship involves payable-through accounts, the correspondent financial institution must be satisfied that the respondent bank has performed CDD on those customers who have direct access to the accounts of the correspondent bank, and that the respondent bank is able to provide relevant CDD data upon request to the correspondent bank.',
    category: 'Compliance & Measure',
    relatedRecs: [13]
  },
  {
    id: 'law-vs-enforceable-means',
    term: 'Law vs. Enforceable Means',
    shortDef: 'Basic obligations (CDD, record keeping, STR reporting) must be set in Law (legislative acts); detailed operational elements may be in Enforceable Means (binding regulations/guidelines with sanctions).',
    fullDef: '• Law: Any legislation issued or approved through a Parliamentary process or other fundamental means by which legally binding norms are created under the national constitution (including court decisions in common law systems).\n• Enforceable Means: Regulations, guidelines, instructions or other documents or mechanisms that set out enforceable AML/CFT requirements in mandatory language with sanctions for non-compliance, issued by a competent authority.',
    category: 'Sanctions & Legal',
    relatedRecs: [10, 11, 20, 26, 35]
  },
  {
    id: 'should-means-must',
    term: '"Should" = Must',
    shortDef: 'Throughout the FATF Recommendations, the word "should" has the same mandatory meaning as "must" for assessing compliance.',
    fullDef: 'As stated in the Official Introduction to the FATF Standards: "For the purposes of assessing compliance with the FATF Recommendations, the word should has the same meaning as must." Examples given in the Interpretive Notes are illustrative guidance only and are not mandatory parts of the Standard unless explicitly stated.',
    category: 'Core Concept',
    relatedRecs: [1, 10, 35]
  },
  {
    id: 'proceeds-criminal-property',
    term: 'Proceeds & Criminal Property',
    shortDef: 'Proceeds = any property derived from or obtained, directly or indirectly, through the commission of an offence. Criminal property = proceeds + instrumentalities.',
    fullDef: '• Proceeds refers to any property derived from or obtained, directly or indirectly, through the commission of an offence.\n• Criminal property encompasses proceeds of crime, instrumentalities used or intended for use in the commission of an offence, and property of corresponding value, whether held directly by the offender or by non-bona-fide third parties.',
    category: 'Sanctions & Legal',
    relatedRecs: [3, 4, 20, 30, 38]
  },
  {
    id: 'nominator-nominee',
    term: 'Nominator & Nominee Shareholder/Director',
    shortDef: 'A nominee exercises functions on behalf of and subject to the directions of another person (the nominator).',
    fullDef: 'Added in the March 2022 revision of R.24: A Nominator is an individual (or group of individuals) or legal person that issues instructions (directly or indirectly) to a nominee to act on their behalf in the capacity of a director or a shareholder. A Nominee Director or Nominee Shareholder acts routinely on the instructions of the nominator. Under R.24, countries must require nominees to disclose their status and the identity of their nominator to the company and registry, license them, or prohibit them altogether.',
    category: 'Actor & Entity',
    relatedRecs: [22, 24]
  },
  {
    id: 'designated-categories',
    term: 'Designated Categories of Offences (21 Categories)',
    shortDef: 'The 21 mandatory crime categories that every country must include within its scope of money laundering predicate offences under R.3.',
    fullDef: 'Under R.3, whether a country defines predicate offences via an all-crimes approach, a threshold approach (max >1 year or min >6 months imprisonment), a list approach, or a combination, its predicate offences must at a minimum cover a range of offences within each of the 21 FATF Designated Categories of Offences.',
    category: 'Sanctions & Legal',
    relatedRecs: [3, 20],
    subItems: DESIGNATED_CATEGORIES_OF_OFFENCES.map(
      (c) => `${c.id}. ${c.name}`
    )
  }
];
