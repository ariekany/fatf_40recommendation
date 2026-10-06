import { BeginnerGuide } from '../types/fatf';

export const BEGINNER_GUIDE_EN_21_TO_40: Record<number, BeginnerGuide> = {
  21: {
    recId: 21,
    analogyTitle: 'Confidential Reporting and Legal Safe Harbour for Whistleblowers',
    analogyBody:
      'When a bank teller notices an armed suspect scouting the vault and presses the silent alarm under the counter, two rules apply. First, if the suspect turns out to be an innocent customer, the teller cannot be sued for pressing the alarm in good faith (Safe Harbour). Second, the teller must never lean across the counter and say, "I just pressed the silent alarm on your account, so you might want to leave" (Anti-Tipping-Off).',
    storyTitle: 'When a Relationship Manager Tips Off a Client',
    storySteps: [
      'A bank compliance team files a Suspicious Transaction Report (STR) with the Financial Intelligence Unit (FIU) regarding a wealthy client suspected of bribery.',
      'The client’s Relationship Manager calls the client and warns: "Compliance just reported your account to the FIU, so move your balance before a freeze order arrives."',
      'Under Recommendation 21, that Relationship Manager has committed a criminal offence (Tipping-Off). Meanwhile, the compliance officer who filed the report in good faith is legally protected from any lawsuit by the client.'
    ],
    jargonBuster: [
      {
        term: 'Safe Harbour (Good-Faith Protection)',
        simpleMeaning:
          'Legal immunity protecting bank directors, officers, and staff from civil or criminal liability when they report suspicious activity to the FIU in good faith.'
      },
      {
        term: 'Tipping-Off',
        simpleMeaning:
          'The criminal act of disclosing to a customer or third party that an STR or related information is being filed with the FIU.'
      }
    ],
    misconception: {
      myth: 'If a customer asks why their transfer is delayed, bank staff can be transparent and explain that the account is under AML investigation.',
      reality:
        'Disclosing an AML review or STR to the customer is illegal tipping-off. Staff must use neutral operational language.'
    }
  },
  22: {
    recId: 22,
    analogyTitle: 'Securing the Side Doors Beyond the Banking System',
    analogyBody:
      'Once banks install strict identity checks at the main entrance, launderers stop walking through bank doors with suitcases of cash. Instead, they hire real estate agents to buy luxury villas, ask corporate lawyers to form shell companies, or buy casino chips. Recommendation 22 requires these non-financial professionals—known as Gatekeepers or DNFBPs—to apply the same customer verification rules as banks.',
    storyTitle: 'Buying a Luxury Villa Through a Notary and Real Estate Agent',
    storySteps: [
      'A corrupt official wants to launder $3 million by purchasing a beachfront villa using an offshore company.',
      'Under Recommendation 22, both the real estate agent and the notary handling the property deed must perform Customer Due Diligence (CDD), identify the Ultimate Beneficial Owner (UBO), and verify the source of funds.',
      'Casinos must verify customers at $3,000/€3,000 in transactions, and precious metal/gem dealers must verify cash purchases at $15,000/€15,000.'
    ],
    jargonBuster: [
      {
        term: 'DNFBPs (Designated Non-Financial Businesses and Professions)',
        simpleMeaning:
          'Six non-bank gatekeeper professions subject to AML rules: casinos, real estate agents, precious metal/stone dealers, lawyers/notaries, accountants, and Trust and Company Service Providers (TCSPs).'
      },
      {
        term: 'TCSPs (Trust and Company Service Providers)',
        simpleMeaning:
          'Firms that incorporate companies, provide registered offices, or act as nominee directors or trustees for clients.'
      }
    ],
    misconception: {
      myth: 'Anti-money laundering laws only apply to banks, insurers, and money changers.',
      reality:
        'Real estate agents, notaries, corporate lawyers, accountants, casinos, and gold dealers have mandatory CDD and record-keeping obligations.'
    }
  },
  23: {
    recId: 23,
    analogyTitle: 'Reporting Obligations and Legal Privilege Boundaries for Gatekeepers',
    analogyBody:
      'Beyond verifying client identities (Recommendation 22), non-financial professionals must also file Suspicious Transaction Reports (STRs) when a transaction looks like money laundering. Lawyers and notaries often cite legal professional privilege, so Recommendation 23 draws a clear line: privilege covers legal defense in court, but never covers helping a client buy property, manage bank accounts, or set up shell companies.',
    storyTitle: 'When Legal Privilege Does Not Apply',
    storySteps: [
      'A client hires a corporate law firm to form three offshore companies and purchase a commercial building using funds from an opaque jurisdiction.',
      'Because the lawyer is acting as a financial intermediary rather than defending the client in court, legal professional privilege does not shield the transaction.',
      'The law firm, accountant, or casino must file an STR with the FIU and is strictly prohibited from tipping off the client.'
    ],
    jargonBuster: [
      {
        term: 'Legal Professional Privilege',
        simpleMeaning:
          'Confidentiality protecting genuine legal advice or litigation defense, which cannot be invoked to conceal commercial or financial transactions facilitated for a client.'
      }
    ],
    misconception: {
      myth: 'Everything done through a lawyer’s office is permanently shielded from AML reporting by attorney-client privilege.',
      reality:
        'When lawyers buy real estate, manage client funds, or form companies, they are subject to AML reporting rules.'
    }
  },
  24: {
    recId: 24,
    analogyTitle: 'Unmasking the Real Human Behind a Shell Company',
    analogyBody:
      'Think of a Russian nesting doll (Matryoshka): a local company is owned by a holding company in Panama, which is owned by another entity in the Virgin Islands. Recommendation 24 requires countries to open every layer of the doll until they identify the living, breathing human being (natural person) at the center who actually owns or controls the company—known as the Beneficial Owner.',
    storyTitle: 'Piercing a Multi-Layered Corporate Structure',
    storySteps: [
      'Every company must maintain an accurate register of its shareholders and its true Beneficial Owners (typically anyone holding 25% or more ownership or voting control), supplemented by a central government registry.',
      'Anonymous physical share certificates (bearer shares) that give ownership to whoever holds the paper are banned or immobilized.',
      'Strawmen (nominees) whose names appear on corporate deeds must disclose the true principal behind them to the registry.'
    ],
    jargonBuster: [
      {
        term: 'Beneficial Owner (BO)',
        simpleMeaning:
          'The natural person(s) who ultimately owns or controls a legal person or arrangement, even if ownership is routed through multiple corporate layers.'
      },
      {
        term: 'Bearer Shares',
        simpleMeaning:
          'Unregistered equity securities owned by whoever physically holds the paper certificate, historically abused for anonymous money laundering.'
      }
    ],
    misconception: {
      myth: 'The Beneficial Owner of a company can be another parent holding company.',
      reality:
        'A Beneficial Owner must always be a living natural person, never another corporation or legal entity.'
    }
  },
  25: {
    recId: 25,
    analogyTitle: 'Transparency for Legal Trusts and Private Asset Arrangements',
    analogyBody:
      'Unlike a standard company with registered shareholders, a legal trust splits asset ownership: a Settlor puts assets in, a Trustee manages them, a Protector oversees the trustee, and a Beneficiary receives the payouts. Recommendation 25 requires trustees to record the identities of every single human party connected to the trust so trusts cannot be used as anonymous vaults.',
    storyTitle: 'Tracing the Parties of an Offshore Family Trust',
    storySteps: [
      'A professional trustee managing a family trust must obtain and hold verified identity records for the settlor, co-trustees, protector, and every beneficiary.',
      'When opening a bank account for the trust, the trustee must proactively disclose their trustee status and provide the beneficial ownership details of the trust.',
      'Competent authorities and FIUs must have timely access to trust records held by trustees and trust registries.'
    ],
    jargonBuster: [
      {
        term: 'Express Trust',
        simpleMeaning:
          'A legal arrangement intentionally created by a settlor placing assets under the control of a trustee for the benefit of beneficiaries.'
      },
      {
        term: 'Settlor, Trustee, Protector, Beneficiary',
        simpleMeaning:
          'The four key roles in a trust: the person who contributes the assets (Settlor), the manager (Trustee), the supervisor (Protector), and the recipient of the benefits (Beneficiary).'
      }
    ],
    misconception: {
      myth: 'Placing assets into a private family trust legally hides the identity of the original wealth owner from banks.',
      reality:
        'Banks and trustees must identify all four roles—Settlor, Trustee, Protector, and Beneficiary—before providing financial services.'
    }
  },
  26: {
    recId: 26,
    analogyTitle: 'Fit-and-Proper Vetting and Risk-Based Banking Supervision',
    analogyBody:
      'If a convicted financial criminal cannot get a bank loan, their ultimate shortcut is to buy a small bank or open a money transfer company themselves. Recommendation 26 requires financial regulators to act as strict gatekeepers: vetting the criminal background and integrity of bank owners and directors before granting a license, banishing shell banks entirely, and inspecting high-risk banks more frequently.',
    storyTitle: 'Stopping a Criminal Syndicate from Buying a Bank',
    storySteps: [
      'An investor group applies to acquire a 30% stake in a local bank. The banking supervisor screens the ultimate beneficial owners and rejects the application after discovering prior fraud links.',
      'Regulators prohibit the licensing or operation of any bank that has no physical presence or "mind and management" in the country.',
      'Supervisors allocate more frequent on-site inspections to banks handling high-volume cross-border wires than to low-risk local credit unions.'
    ],
    jargonBuster: [
      {
        term: 'Fit and Proper Test',
        simpleMeaning:
          'Regulatory screening of the criminal record, financial integrity, and professional competence of major shareholders, beneficial owners, and senior executives of financial institutions.'
      }
    ],
    misconception: {
      myth: 'Supervisors must inspect every financial institution on the exact same schedule and with the same intensity.',
      reality:
        'Supervision must be risk-based: frequency and depth of inspections depend on each institution’s AML/CFT risk profile.'
    }
  },
  27: {
    recId: 27,
    analogyTitle: 'Giving Financial Supervisors Real Inspection and Enforcement Teeth',
    analogyBody:
      'A financial regulator without inspection and sanction powers is like a referee without a whistle or red cards. Recommendation 27 ensures supervisors have statutory authority to walk into a bank for unannounced inspections, compel the production of internal audit files without needing a court warrant, and impose binding administrative sanctions when compliance fails.',
    storyTitle: 'Unannounced Supervisory Inspection at a Non-Compliant Bank',
    storySteps: [
      'Supervisors enter a bank to review high-risk correspondent accounts and legally compel the bank to hand over internal compliance emails and transaction logs.',
      'Examiners discover that the bank ignored thousands of automated AML alerts for two years to cut staffing costs.',
      'Using its Recommendation 27 powers, the supervisor restricts the bank from onboarding new foreign clients, fines the institution, and orders the removal of the responsible executive.'
    ],
    jargonBuster: [
      {
        term: 'On-Site and Off-Site Supervision',
        simpleMeaning:
          'Physical examination conducted inside the financial institution (on-site) combined with remote monitoring of periodic regulatory filings and data (off-site).'
      }
    ],
    misconception: {
      myth: 'Banking regulators need a judge’s search warrant before they can review a commercial bank’s customer files.',
      reality:
        'Supervisors must have direct statutory authority to compel any document or record from a regulated institution without a court order.'
    }
  },
  28: {
    recId: 28,
    analogyTitle: 'Supervising Casinos, Real Estate Agents, and Professional Gatekeepers',
    analogyBody:
      'Requiring casinos, real estate agents, and lawyers to check customer IDs (Recommendation 22) only works if someone actually inspects them. Recommendation 28 requires countries to establish supervisory oversight over all non-financial gatekeepers (DNFBPs): casinos must be strictly licensed, while lawyers, accountants, and real estate agents are supervised by government regulators or vetted Self-Regulatory Bodies (SRBs).',
    storyTitle: 'Auditing a Casino and a Real Estate Brokerage',
    storySteps: [
      'Gaming regulators screen the beneficial owners and operators of a casino for organized crime links before issuing an operating license.',
      'A bar association or government supervisor audits law firms and real estate agencies to verify they are collecting beneficial ownership records on property buyers.',
      'Firms that repeatedly ignore CDD rules face fines, license suspension, or disciplinary disbarment.'
    ],
    jargonBuster: [
      {
        term: 'SRB (Self-Regulatory Body)',
        simpleMeaning:
          'A professional body (such as a Bar Association, Notary Chamber, or Institute of Chartered Accountants) empowered by law to regulate and supervise its members for AML/CFT compliance.'
      }
    ],
    misconception: {
      myth: 'Non-financial professions like real estate agents and accountants are left to police themselves informally.',
      reality:
        'Every DNFBP sector must be subject to risk-based AML/CFT supervision by either a government authority or an empowered SRB.'
    }
  },
  29: {
    recId: 29,
    analogyTitle: 'The Financial Intelligence Unit (FIU) as the National Intelligence Hub',
    analogyBody:
      'An individual bank only sees a single puzzle piece—one strange transfer leaving its branch. The Financial Intelligence Unit (FIU) is the national analytical center that receives Suspicious Transaction Reports (STRs) from all banks, crypto exchanges, and gatekeepers nationwide. It connects those puzzle pieces with tax, customs, and registry records, then sends actionable intelligence reports to law enforcement.',
    storyTitle: 'Connecting STRs Across Five Separate Banks',
    storySteps: [
      'Five different banks independently file STRs with the FIU regarding small transfers made by five seemingly unrelated shell companies.',
      'FIU analysts cross-match the five STRs with corporate registry and tax databases, discovering all five companies share the same beneficial owner and are funneling funds to a single overseas account.',
      'Operating with full operational independence from political interference, the FIU disseminates the financial intelligence package to anti-corruption prosecutors.'
    ],
    jargonBuster: [
      {
        term: 'FIU (Financial Intelligence Unit)',
        simpleMeaning:
          'A central, independent national agency responsible for receiving, analyzing, and disseminating financial intelligence regarding suspected money laundering and terrorist financing.'
      },
      {
        term: 'Egmont Group',
        simpleMeaning:
          'The global network of over 170 national FIUs that facilitates secure cross-border exchange of financial intelligence.'
      }
    ],
    misconception: {
      myth: 'The FIU is a police force that arrests suspects and prosecutes them in court.',
      reality:
        'Most FIUs are administrative intelligence hubs that analyze financial flows and hand intelligence packages over to police and prosecutors.'
    }
  },
  30: {
    recId: 30,
    analogyTitle: 'Parallel Financial Investigations: Following the Money alongside the Crime',
    analogyBody:
      'Historically, police would arrest a drug trafficker or corrupt official, lock them in prison, and consider the case closed—leaving the syndicate’s millions sitting untouched in bank accounts and luxury real estate. Recommendation 30 requires law enforcement to conduct a Parallel Financial Investigation alongside the criminal probe to trace, freeze, and seize the entire financial network.',
    storyTitle: 'Tracing the Assets Behind a Narcotics Arrest',
    storySteps: [
      'When police arrest a major smuggling ring, financial investigators immediately launch a parallel probe into the suspects’ bank accounts, corporate holdings, and properties.',
      'Investigators trace the illicit proceeds through three money mules and two real estate holdings.',
      'Before the trial even concludes, prosecutors freeze the properties and bank accounts so the criminal network cannot fund new operations or hire replacements.'
    ],
    jargonBuster: [
      {
        term: 'Parallel Financial Investigation',
        simpleMeaning:
          'An investigation into the financial aspects of a crime conducted simultaneously with the traditional criminal investigation into the predicate offence.'
      }
    ],
    misconception: {
      myth: 'Financial investigations only start after a criminal has been convicted by a judge.',
      reality:
        'Waiting until conviction gives criminals months to move their wealth; financial tracing must run in parallel from the start of the investigation.'
    }
  },
  31: {
    recId: 31,
    analogyTitle: 'Investigative Tools for Complex Financial Crime',
    analogyBody:
      'You cannot dismantle an encrypted international laundering network armed only with basic street-policing tools. Recommendation 31 requires countries to equip financial investigators with specialized legal powers: production orders to compel bank records without tipping off suspects, undercover operations, communications interception, and Controlled Delivery (tracking a shipment of cash or contraband to catch the kingpin at the destination).',
    storyTitle: 'Using Controlled Delivery to Catch the Ultimate Boss',
    storySteps: [
      'Border officers discover $500,000 in undeclared cash hidden inside a courier’s vehicle.',
      'Instead of arresting the low-level driver immediately at the border, investigators obtain authorization for a Controlled Delivery and covertly track the courier to the delivery warehouse.',
      'Simultaneously, investigators query a central bank account registry to identify every account held by the syndicate boss without alerting individual banks.'
    ],
    jargonBuster: [
      {
        term: 'Controlled Delivery',
        simpleMeaning:
          'An investigative technique allowing illicit or suspect consignments of cash or goods to pass out of, through, or into a country under covert police surveillance to identify the masterminds.'
      }
    ],
    misconception: {
      myth: 'Police must send manual letters to every single bank in the country to find out where a suspect holds an account.',
      reality:
        'Recommendation 31 requires mechanisms—such as central account registries—so investigators can rapidly identify account ownership.'
    }
  },
  32: {
    recId: 32,
    analogyTitle: 'Monitoring Physical Cross-Border Cash Couriers',
    analogyBody:
      'When digital wire transfers are closely monitored, criminals often revert to packing physical cash, bearer cheques, or gold bullion into luggage and crossing national borders. Recommendation 32 requires customs authorities to enforce a strict declaration or disclosure system for anyone carrying currency or Bearer Negotiable Instruments (BNIs) worth $10,000/€10,000 or more across a border.',
    storyTitle: 'Stopping an Undeclared Cash Shipment at the Airport',
    storySteps: [
      'A passenger preparing to board an international flight checks "No" on the customs currency declaration form.',
      'X-ray screening reveals €180,000 in cash and signed bearer cheques concealed in the lining of the suitcase.',
      'Customs officers restrain the currency to investigate suspected laundering, impose sanctions for the false declaration, and share the report directly with the FIU.'
    ],
    jargonBuster: [
      {
        term: 'BNI (Bearer Negotiable Instruments)',
        simpleMeaning:
          'Monetary instruments such as checks, promissory notes, traveler’s checks, or money orders in bearer form that can be cashed by whoever holds them.'
      }
    ],
    misconception: {
      myth: 'FATF rules make it illegal to carry more than $10,000 in cash across an international border.',
      reality:
        'Carrying legitimate funds above $10,000/€10,000 is legal as long as you truthfully declare it to customs and can prove its lawful origin.'
    }
  },
  33: {
    recId: 33,
    analogyTitle: 'Measuring Real AML/CFT Results Through Comprehensive Statistics',
    analogyBody:
      'A country might pass dozens of anti-money laundering laws on paper, yet never convict a single launderer or confiscate a single dollar. Recommendation 33 requires governments to maintain comprehensive statistics across the entire enforcement chain—how many STRs were received, how many led to investigations, how many prosecutions and convictions occurred, and how much criminal property was actually confiscated.',
    storyTitle: 'Diagnosing a Bottleneck in the National Enforcement Pipeline',
    storySteps: [
      'National statistics show the FIU received 45,000 STRs and disseminated 1,200 intelligence reports to police, but courts recorded only 3 money laundering convictions all year.',
      'The data reveals that while banks are reporting actively, police and prosecutors lack specialized financial crime training to turn FIU reports into courtroom convictions.',
      'Using these statistics, the government establishes dedicated financial crime prosecution units.'
    ],
    jargonBuster: [
      {
        term: 'AML/CFT Effectiveness Metrics',
        simpleMeaning:
          'Quantitative data tracking STRs received/disseminated, ML/TF investigations, prosecutions, convictions, property frozen/seized/confiscated, and Mutual Legal Assistance requests.'
      }
    ],
    misconception: {
      myth: 'Receiving a huge number of STRs from banks automatically proves a country’s AML system is effective.',
      reality:
        'High STR volume without corresponding investigations, prosecutions, and asset confiscations indicates a bottleneck rather than success.'
    }
  },
  34: {
    recId: 34,
    analogyTitle: 'Two-Way Typology Guidance and Feedback Between Regulators and Banks',
    analogyBody:
      'If banks send thousands of Suspicious Transaction Reports (STRs) into the FIU every year and never hear a word back, compliance teams are flying blind—they do not know which reports were useful and which were false alarms. Recommendation 34 requires supervisors and FIUs to provide practical guidelines, red-flag typologies, and constructive feedback so reporting institutions can spot emerging criminal methods.',
    storyTitle: 'Sharing New Fraud Typologies with Frontline Banks',
    storySteps: [
      'The FIU notices a sudden wave of syndicates using shell import-export companies and fake shipping invoices to move illicit funds overseas.',
      'Under Recommendation 34, the FIU and banking supervisor publish a typology advisory detailing the exact invoice anomalies and transaction patterns to watch for.',
      'Banks update their screening rules based on this feedback, reducing low-value defensive reports and catching high-priority trade-based laundering networks.'
    ],
    jargonBuster: [
      {
        term: 'ML/TF Typologies',
        simpleMeaning:
          'Case studies, methods, techniques, and behavioral red flags observed in real-world money laundering and terrorist financing schemes.'
      }
    ],
    misconception: {
      myth: 'Communication between the FIU and banks should strictly be a one-way street from banks to the government.',
      reality:
        'Effective AML systems depend on continuous feedback, typology sharing, and clear supervisory guidance from authorities back to the private sector.'
    }
  },
  35: {
    recId: 35,
    analogyTitle: 'Effective, Proportionate, and Dissuasive Sanctions for Breaches',
    analogyBody:
      'If a bank earns $50 million in fees by processing suspicious offshore wires and the regulator fines them $10,000, the fine is treated as a minor business expense—a "parking ticket" for financial crime. Recommendation 35 requires countries to enforce a range of effective, proportionate, and dissuasive criminal, civil, or administrative sanctions against both the institution and the senior directors or managers personally responsible.',
    storyTitle: 'Holding Both the Bank and Its Executives Accountable',
    storySteps: [
      'Supervisors prove that a bank’s senior leadership deliberately disabled transaction monitoring filters to process high-commission transfers without delay.',
      'Regulators impose a multi-million-dollar penalty that strips away all profits gained from the non-compliance and restricts high-risk business lines.',
      'Under Recommendation 35, the executives who approved the breach are personally fined, removed from office, and banned from working in the financial sector.'
    ],
    jargonBuster: [
      {
        term: 'Effective, Proportionate, and Dissuasive Sanctions',
        simpleMeaning:
          'Penalties scaled to the gravity of the violation that are severe enough to deter the offender and the wider industry from repeating the breach.'
      }
    ],
    misconception: {
      myth: 'When a bank violates AML laws, only the corporate entity itself can be fined.',
      reality:
        'Recommendation 35 explicitly requires sanctions to be applicable to directors and senior management of financial institutions and DNFBPs.'
    }
  },
  36: {
    recId: 36,
    analogyTitle: 'Joining the Global Treaties That Anchor International AML Law',
    analogyBody:
      'Financial crime crosses borders in seconds, so national laws cannot operate on incompatible legal standards. Recommendation 36 requires every country to ratify and fully implement four foundational United Nations conventions—covering narcotics trafficking (Vienna), transnational organized crime (Palermo), corruption (Merida), and terrorist financing—so every jurisdiction speaks the same legal language.',
    storyTitle: 'Using UN Conventions as a Legal Bridge Between Countries',
    storySteps: [
      'A public official steals infrastructure funds in Country A and hides the proceeds in bank accounts in Country B.',
      'Even if Country A and Country B do not have a bilateral treaty, both have ratified the UN Convention against Corruption (Merida) and the Palermo Convention.',
      'Using these conventions as the legal basis, Country B freezes the stolen funds and cooperates to return the assets to Country A.'
    ],
    jargonBuster: [
      {
        term: 'Vienna, Palermo, Merida, and TF Conventions',
        simpleMeaning:
          'The four core UN treaties covering Illicit Drug Traffic (Vienna 1988), Transnational Organized Crime (Palermo 2000), Corruption (Merida 2003), and Suppression of Terrorist Financing (1999).'
      }
    ],
    misconception: {
      myth: 'Signing an international UN treaty at a diplomatic ceremony is enough to satisfy Recommendation 36.',
      reality:
        'A country must ratify the conventions and enact domestic legislation that actually implements their provisions in national courts.'
    }
  },
  37: {
    recId: 37,
    analogyTitle: 'Mutual Legal Assistance (MLA): Obtaining Court-Admissible Evidence Abroad',
    analogyBody:
      'If a prosecutor in Country A is trying a money laundering case in court, but the bank statements and witness testimonies are sitting in Country B, Country A’s police cannot simply fly to Country B and seize the files. Recommendation 37 requires countries to provide rapid, constructive Mutual Legal Assistance (MLA)—a formal government-to-government legal channel to gather court-admissible evidence abroad without blocking requests over bank secrecy.',
    storyTitle: 'Securing Foreign Bank Records for a Domestic Trial',
    storySteps: [
      'Prosecutors in Country A send a formal Mutual Legal Assistance request to the Central Authority of Country B seeking certified bank records and witness depositions.',
      'Under Recommendation 37, Country B cannot refuse the request on the grounds of bank secrecy or because the crime also involves tax matters.',
      'Country B’s Central Authority compels the certified bank records and transmits them to Country A for use as evidence in the criminal trial.'
    ],
    jargonBuster: [
      {
        term: 'MLA (Mutual Legal Assistance)',
        simpleMeaning:
          'The formal treaty or reciprocity process by which one country obtains official evidence, witness testimony, or search orders from another country for use in criminal prosecutions.'
      },
      {
        term: 'Dual Criminality',
        simpleMeaning:
          'The principle that the underlying conduct is considered a criminal offence in both the requesting and the requested country.'
      }
    ],
    misconception: {
      myth: 'A country can refuse an international MLA request if the suspect’s money is held in a private bank covered by domestic bank secrecy laws.',
      reality:
        'Recommendation 37 strictly prohibits countries from using bank secrecy or fiscal/tax matters as grounds to refuse Mutual Legal Assistance.'
    }
  },
  38: {
    recId: 38,
    analogyTitle: 'Freezing, Confiscating, and Sharing Stolen Assets Across Borders',
    analogyBody:
      'Tracing stolen funds to a foreign mansion or offshore account is pointless if the money remains untouched overseas. Recommendation 38 requires countries to act rapidly on foreign requests to identify, freeze, seize, and confiscate laundered property—even recognizing non-conviction-based confiscation orders when the criminal has fled or died—and encourages asset-sharing agreements between the cooperating nations.',
    storyTitle: 'Recovering Embezzled Funds Hidden in Foreign Real Estate',
    storySteps: [
      'Country A traces $15 million in embezzled state funds to luxury apartments and bank accounts in Country B and sends an urgent MLA restraint request.',
      'Authorities in Country B immediately freeze the accounts and place the apartments under official asset management so they cannot be sold.',
      'Following a final confiscation order, Country B liquidates the properties and repatriates or shares the recovered funds with Country A.'
    ],
    jargonBuster: [
      {
        term: 'Asset Sharing / Repatriation',
        simpleMeaning:
          'Agreements between jurisdictions to return confiscated criminal proceeds to the victim country or share proceeds among the authorities that coordinated the investigation.'
      }
    ],
    misconception: {
      myth: 'If a corrupt official dies abroad before trial, the foreign country keeps the frozen money forever or returns it to the criminal’s heirs.',
      reality:
        'Under Recommendation 38, countries must be able to execute foreign non-conviction-based confiscation orders in cases of death or flight.'
    }
  },
  39: {
    recId: 39,
    analogyTitle: 'Closing Safe Havens Through Extradition of Financial Criminals',
    analogyBody:
      'Without extradition, a financial criminal could launder millions in one country, board a flight to another jurisdiction, and live openly without fear of trial. Recommendation 39 ensures there are no safe havens for money launderers or terrorist financiers: countries must execute extradition requests without undue delay, or—if their constitution bars extraditing their own citizens—prosecute the suspect domestically right away.',
    storyTitle: 'When a Fugitive Launderer Flees to Their Home Country',
    storySteps: [
      'A suspect orchestrates a $40 million investment fraud and money laundering scheme in Country A, then flees to Country B, where they hold citizenship.',
      'Country B’s constitution prohibits extraditing its own citizens to foreign courts.',
      'Under Recommendation 39, Country B cannot let the fugitive walk free. It must immediately submit the case to its own domestic prosecutors and try the suspect locally in cooperation with Country A.'
    ],
    jargonBuster: [
      {
        term: 'Aut Dedere Aut Judicare (Extradite or Prosecute)',
        simpleMeaning:
          'The international legal obligation requiring a state that refuses to extradite its own national to prosecute that person in its own domestic courts without delay.'
      }
    ],
    misconception: {
      myth: 'If a criminal escapes to a country that does not extradite its own citizens, they are permanently immune from punishment.',
      reality:
        'Under the "extradite or prosecute" rule, the home country is legally bound to prosecute the suspect in its own courts using evidence provided by the victim country.'
    }
  },
  40: {
    recId: 40,
    analogyTitle: 'Fast, Direct Agency-to-Agency Intelligence Sharing (Diagonal & Horizontal)',
    analogyBody:
      'Formal Mutual Legal Assistance (Recommendation 37) is required for courtroom evidence, but it can take weeks or months—whereas a wire transfer clears in seconds. Recommendation 40 empowers FIUs, banking supervisors, police, and customs agencies to exchange intelligence rapidly and directly with their foreign counterparts (such as FIU-to-FIU via the Egmont Secure Web) during the investigative stage.',
    storyTitle: 'Tracing a Multi-Jurisdiction Wire Transfer in Under 24 Hours',
    storySteps: [
      'An FIU detects a suspicious $2 million transfer routed from a local bank through an intermediary in Country B to a shell company in Country C.',
      'Instead of waiting months for diplomatic channels, the FIU sends an encrypted intelligence request via the Egmont Secure Web to the FIUs in Country B and Country C.',
      'Within hours, the foreign FIUs return beneficial ownership and bank intelligence, enabling investigators to trace the funds before they are withdrawn.'
    ],
    jargonBuster: [
      {
        term: 'Horizontal and Diagonal Cooperation',
        simpleMeaning:
          'Direct cooperation between equivalent counterparts across borders (Horizontal, e.g., FIU-to-FIU) and regulated cooperation between different types of authorities (Diagonal).'
      }
    ],
    misconception: {
      myth: 'Every single request for financial intelligence from a foreign country requires a formal diplomatic treaty request signed by a judge.',
      reality:
        'Intelligence-stage sharing happens rapidly between counterpart agencies (FIU-to-FIU, supervisor-to-supervisor, police-to-police) under Recommendation 40.'
    }
  }
};
