export interface IntroBeginnerModule {
  slideId: string;
  analogyTitle: string;
  analogyBody: string;
  everydayExampleTitle: string;
  everydaySteps: { stepTitle: string; stepDetail: string }[];
  jargonBuster: { term: string; simpleMeaning: string }[];
  whyShouldICare: string[];
}

export const ID_INTRO_BEGINNER_MODULES: Record<string, IntroBeginnerModule> = {
  S0: {
    slideId: 'S0',
    analogyTitle:
      'Mengapa Uang Hasil Kejahatan Perlu "Dicuci" Terlebih Dahulu?',
    analogyBody:
      'Seseorang yang memperoleh uang tunai Rp 10 miliar dari korupsi atau perdagangan gelap tidak bisa langsung membawa uang itu ke ruang pamer untuk membeli mobil mewah. Transaksi tunai sebesar itu tanpa riwayat penghasilan yang jelas akan langsung memicu pertanyaan dari pihak dealer, kantor pajak, maupun penegak hukum. Agar uang tersebut aman dibelanjakan, pelaku memasukkannya ke dalam perputaran bisnis samaran sehingga ketika keluar dari perbankan, uang itu tercatat seolah-olah sebagai keuntungan usaha yang sah. Proses menyamarkan asal-usul dana inilah yang disebut Money Laundering (ML) atau Pencucian Uang.',
    everydayExampleTitle:
      'Alur di Lapangan: Kedai Kopi Sepi yang Mencatat Omzet Miliaran',
    everydaySteps: [
      {
        stepTitle:
          '1. Placement atau Penempatan (Memasukkan Uang ke Sistem Keuangan)',
        stepDetail:
          'Jaringan kejahatan memegang uang tunai ilegal Rp 5 miliar lalu mendirikan kedai kopi. Meski pengunjung harian sangat sedikit, kasir mencetak ratusan struk penjualan fiktif setiap malam dan menyetorkan uang tunai kejahatan tadi ke rekening bank dengan keterangan pendapatan kedai.'
      },
      {
        stepTitle:
          '2. Layering atau Pelapisan (Mengaburkan Jejak Transaksi)',
        stepDetail:
          'Setelah masuk ke rekening kedai kopi, dana ditransfer ke perusahaan pemasok fiktif di luar negeri, ditukarkan ke Virtual Assets (VA) atau Aset Kripto, lalu dikirim kembali ke rekening perusahaan konsultan di negara lain agar riwayat asalnya terputus.'
      },
      {
        stepTitle:
          '3. Integration atau Integrasi (Menyatukan Kembali Dana yang Tampak Sah)',
        stepDetail:
          'Dana yang telah berpindah lintas negara tadi dikembalikan sebagai dividen investasi untuk membeli properti atau aset bisnis. Di atas kertas, pelaku kini memiliki dokumen perbankan yang menunjukkan seolah-olah kekayaannya berasal dari hasil usaha.'
      }
    ],
    jargonBuster: [
      {
        term: 'Anti-Money Laundering (AML) atau Anti Pencucian Uang (APU)',
        simpleMeaning:
          'Rangkaian aturan dan pengawasan untuk mendeteksi serta menghentikan upaya menyamarkan uang hasil tindak pidana agar tampak legal.'
      },
      {
        term: 'Countering the Financing of Terrorism (CFT) atau Pencegahan Pendanaan Terorisme (PPT)',
        simpleMeaning:
          'Upaya memutus aliran dana untuk kegiatan atau kelompok teroris, baik dana tersebut berasal dari sumber legal (seperti gaji dan donasi) maupun dari kejahatan.'
      },
      {
        term: 'Countering Proliferation Financing (CPF) atau Pencegahan Pendanaan Proliferasi Senjata Pemusnah Massal',
        simpleMeaning:
          'Pengawasan untuk menghentikan aliran dana yang dipakai membeli komponen Weapons of Mass Destruction (WMD) atau Senjata Pemusnah Massal (nuklir, kimia, biologi).'
      }
    ],
    whyShouldICare: [
      'Aliran uang hasil kejahatan yang dibelikan tanah dan properti secara masif sering mendongkrak harga hunian hingga sulit dijangkau masyarakat.',
      'Dana korupsi dan penggelapan pajak yang dilarikan ke luar negeri mengurangi anggaran publik untuk pendidikan, kesehatan, dan infrastruktur.',
      'Selama pelaku kejahatan leluasa menikmati hasil keuntungannya, kejahatan narkotika, penipuan daring, dan perdagangan orang akan terus berulang.'
    ]
  },
  S1: {
    slideId: 'S1',
    analogyTitle:
      'Peran Financial Action Task Force (FATF) sebagai Penyusun Standar Pengamanan Keuangan Global',
    analogyBody:
      'Dalam penerbangan internasional, keselamatan penumpang bergantung pada standar pemeriksaan bandara yang seragam di setiap negara. Jika satu bandara mengabaikan pemeriksaan bagasi, pesawat yang terbang dari bandara tersebut tetap membahayakan negara tujuan. Prinsip serupa berlaku di sektor keuangan melalui Financial Action Task Force (FATF) atau Badan Penentu Standar Global Anti Kejahatan Keuangan. Lembaga ini menyusun 40 standar pengamanan keuangan dan mengevaluasi apakah setiap negara menerapkannya secara konsisten.',
    everydayExampleTitle:
      'Dampak bagi Masyarakat apabila Suatu Negara Masuk Grey List atau Black List FATF',
    everydaySteps: [
      {
        stepTitle:
          '1. Pengiriman Uang Pendidikan dan Pembayaran Dagang Menjadi Lebih Lambat',
        stepDetail:
          'Apabila suatu negara masuk ke dalam Jurisdictions under Increased Monitoring (Grey List / Daftar Abu-Abu) atau High-Risk Jurisdictions (Black List / Daftar Hitam) FATF, perbankan internasional wajib memeriksa setiap transaksi dari negara tersebut secara berlapis, sehingga pengiriman uang memakan waktu lebih lama.'
      },
      {
        stepTitle:
          '2. Biaya Remitansi Pekerja Migran dan Eksportir Meningkat',
        stepDetail:
          'Sebagian bank koresponden asing akan mengurangi kerja sama dengan bank domestik untuk menghindari risiko, yang berdampak pada naiknya biaya potongan transfer lintas negara.'
      },
      {
        stepTitle:
          '3. Kepercayaan Investor Internasional Menurun',
        stepDetail:
          'Lembaga pemeringkat dan investor global mempertimbangkan status FATF dalam menilai risiko suatu negara. Sejak Oktober 2023, Indonesia telah berstatus sebagai anggota penuh FATF.'
      }
    ],
    jargonBuster: [
      {
        term: 'Financial Action Task Force (FATF) atau Gugus Tugas Aksi Keuangan',
        simpleMeaning:
          'Lembaga antar-pemerintah yang didirikan tahun 1989 untuk menetapkan standar internasional antipencucian uang, pendanaan terorisme, dan proliferasi senjata.'
      },
      {
        term: 'Mutual Evaluation (ME) atau Evaluasi Timbal Balik Antarnegara',
        simpleMeaning:
          'Proses penilaian menyeluruh oleh tim penguji lintas negara untuk memeriksa kecukupan regulasi dan efektivitas penegakan hukum APU-PPT suatu negara.'
      },
      {
        term: 'FATF-Style Regional Bodies (FSRBs) atau Badan Regional Sejenis FATF (contoh: APG)',
        simpleMeaning:
          'Sembilan organisasi regional mitra FATF di berbagai kawasan dunia, seperti Asia/Pacific Group on Money Laundering (APG) di Asia Pasifik.'
      }
    ],
    whyShouldICare: [
      'Penilaian FATF yang baik menjaga kelancaran transaksi perbankan nasional dengan perbankan internasional.',
      'Standar global mempersempit ruang gerak pelaku korupsi yang mencoba menyembunyikan hasil kejahatannya di yurisdiksi lain.'
    ]
  },
  S2: {
    slideId: 'S2',
    analogyTitle:
      'Mengapa Aturan FATF Terus Diperbarui Sejak 1990 hingga 2026?',
    analogyBody:
      'Metode kejahatan keuangan selalu berubah mengikuti perkembangan zaman dan teknologi. Pada tahun 1990, jaringan narkotika masih menyetorkan uang tunai langsung ke loket bank. Ketika pengawasan bank diperketat, pelaku beralih membeli properti mewah, berjudi di kasino, serta menggunakan jasa notaris dan perusahaan cangkang (1996–2003). Setelah munculnya ancaman pendanaan terorisme lintas batas dan berkembangnya aset kripto, Financial Action Task Force (FATF) kembali menyesuaikan aturannya agar celah-celah baru tersebut tertutup.',
    everydayExampleTitle:
      'Tiga Fase Utama Perubahan Standar FATF',
    everydaySteps: [
      {
        stepTitle:
          'Fase 1990: Pengawasan Uang Tunai Hasil Narkotika di Perbankan',
        stepDetail:
          'Saat pertama kali disusun oleh negara-negara G7, 40 Rekomendasi awal ditujukan untuk mencegah perbankan menerima simpanan uang tunai dari perdagangan narkotika.'
      },
      {
        stepTitle:
          'Fase 2001–2003: Cakupan Pendanaan Terorisme & Sektor Profesi Non-Bank (DNFBPs)',
        stepDetail:
          'FATF menambahkan Special Recommendations on Terrorist Financing (Rekomendasi Khusus Pendanaan Terorisme) serta memperluas kewajiban pemeriksaan pelanggan ke kasino, agen properti, pedagang logam mulia, notaris, dan akuntan.'
      },
      {
        stepTitle:
          'Fase 2012–2026: Risk-Based Approach (RBA), Aset Kripto (VASP) & Beneficial Ownership (BO)',
        stepDetail:
          'Standar modern menempatkan Risk-Based Approach (RBA) atau Pendekatan Berbasis Risiko sebagai landasan utama, mengatur Virtual Asset Service Providers (VASPs) atau Bursa Kripto, serta memperketat keterbukaan Beneficial Owner (BO) atau Pemilik Manfaat perusahaan.'
      }
    ],
    jargonBuster: [
      {
        term: '40+9 Recommendations atau 40+9 Rekomendasi FATF',
        simpleMeaning:
          'Struktur standar FATF pada periode 2001–2012 (40 aturan antipencucian uang ditambah 9 aturan khusus pendanaan terorisme) sebelum dilebur menjadi 40 Rekomendasi terpadu pada 2012.'
      },
      {
        term: 'Interpretive Notes (INR) atau Catatan Interpretatif',
        simpleMeaning:
          'Penjelasan teknis mengikat yang melengkapi teks Rekomendasi agar setiap negara memiliki acuan pelaksanaan yang seragam.'
      }
    ],
    whyShouldICare: [
      'Prosedur verifikasi identitas saat membuka rekening bank atau akun kripto merupakan bagian dari pengamanan yang lahir dari kasus-kasus kejahatan keuangan di masa lalu.'
    ]
  },
  S3: {
    slideId: 'S3',
    analogyTitle:
      'Memahami 40 Rekomendasi sebagai Tujuh Lapis Pengamanan (Bagian A–G)',
    analogyBody:
      'Membaca 40 Rekomendasi secara terpisah sering terasa rumit. Akan lebih mudah jika kita melihatnya sebagai tujuh lapis pengamanan yang saling terhubung: (A) Pemetaan risiko dan koordinasi kebijakan, (B) Pemidanaan pencucian uang dan perampasan aset, (C) Pembekuan dana teroris dan proliferasi senjata, (D) Pemeriksaan nasabah dan pelaporan di perbankan maupun profesi, (E) Pembukaan identitas pemilik manfaat di balik perusahaan, (F) Kewenangan PPATK, pengawas, dan penegak hukum, serta (G) Kerja sama hukum lintas negara.',
    everydayExampleTitle:
      'Dua Ukuran Penilaian Negara dalam Evaluasi FATF',
    everydaySteps: [
      {
        stepTitle:
          '1. Technical Compliance atau Kepatuhan Teknis (Kelengkapan Regulasi)',
        stepDetail:
          'Tim asesor menilai apakah undang-undang dan peraturan di suatu negara telah memuat ketentuan Rekomendasi 1 sampai 40, dengan empat tingkat penilaian: Compliant (C), Largely Compliant (LC), Partially Compliant (PC), atau Non-Compliant (NC).'
      },
      {
        stepTitle:
          '2. Effectiveness atau Efektivitas (Hasil Nyata di Lapangan)',
        stepDetail:
          'Regulasi tertulis tidak cukup tanpa pembuktian pelaksanaan. Karena itu, FATF mengukur kinerja nyata melalui 11 Immediate Outcomes (IOs) atau 11 Sasaran Hasil Langsung.'
      },
      {
        stepTitle:
          '3. Kedudukan Kata "Should" dalam Naskah FATF',
        stepDetail:
          'Dalam dokumen resmi FATF, rumusan "Countries should..." ditetapkan memiliki arti yang sama dengan "must" (wajib dilaksanakan).'
      }
    ],
    jargonBuster: [
      {
        term: 'Technical Compliance (TC) atau Kepatuhan Teknis Peraturan',
        simpleMeaning:
          'Penilaian atas kelengkapan kerangka undang-undang dan regulasi suatu negara dibandingkan dengan persyaratan dalam 40 Rekomendasi FATF.'
      },
      {
        term: 'Immediate Outcomes (IO 1–11) atau 11 Sasaran Hasil Langsung (Efektivitas)',
        simpleMeaning:
          'Sebelas indikator untuk mengukur hasil nyata di lapangan, mulai dari pemahaman risiko, kualitas laporan intelijen, hingga vonis pidana dan perampasan aset.'
      }
    ],
    whyShouldICare: [
      'Memahami pengelompokan Bagian A sampai G memudahkan kita melihat hubungan antara aturan di perbankan, tugas PPATK, hingga proses penyidikan di pengadilan.'
    ]
  }
};

export const EN_INTRO_BEGINNER_MODULES: Record<string, IntroBeginnerModule> = {
  S0: {
    slideId: 'S0',
    analogyTitle: 'Why Illicit Cash Has to Pass Through a Legitimate Front',
    analogyBody:
      'Someone holding $10 million in cash from bribery or narcotics trafficking cannot simply walk into a real estate office or car dealership and pay out of a duffel bag without attracting immediate scrutiny from tax and law enforcement authorities. To spend large sums safely, offenders route the money through commercial fronts and layered transfers so that, on paper, the funds appear to come from lawful business activity.',
    everydayExampleTitle: 'How the Three Laundering Stages Work in Practice',
    everydaySteps: [
      {
        stepTitle: '1. Placement (Entering the Financial System)',
        stepDetail:
          'A criminal network controls $2 million in street cash and opens a cash-intensive café. Even with few real customers, the manager records hundreds of fictitious daily cash sales and deposits the criminal cash into the café’s bank account.'
      },
      {
        stepTitle: '2. Layering (Separating Funds from Their Source)',
        stepDetail:
          'From the café’s bank account, the money is wired to an offshore supplier controlled by the same network, converted into virtual assets, and transferred to a consulting entity in a third jurisdiction to obscure the audit trail.'
      },
      {
        stepTitle: '3. Integration (Returning as Apparent Business Profit)',
        stepDetail:
          'The offshore entity wires the funds back as investment dividends used to purchase commercial property. The beneficial owner now holds formal banking records that make the wealth appear legitimate.'
      }
    ],
    jargonBuster: [
      {
        term: 'AML (Anti-Money Laundering)',
        simpleMeaning:
          'Laws, regulations, and institutional controls designed to prevent offenders from disguising criminal proceeds as legitimate funds.'
      },
      {
        term: 'CFT (Countering the Financing of Terrorism)',
        simpleMeaning:
          'Controls that stop funds—whether derived from lawful donations and salaries or from criminal activity—from reaching terrorist individuals or organizations.'
      },
      {
        term: 'PF (Proliferation Financing)',
        simpleMeaning:
          'Preventing financial flows and services from being used to acquire materials or technology for nuclear, chemical, or biological weapons of mass destruction.'
      }
    ],
    whyShouldICare: [
      'Unchecked laundering distorts housing and property markets when illicit capital is parked in real estate.',
      'Corruption and tax evasion drained through offshore structures reduce public budgets for healthcare, education, and infrastructure.',
      'Removing the financial profit from organized crime reduces the incentive and working capital for narcotics, fraud, and human trafficking networks.'
    ]
  },
  S1: {
    slideId: 'S1',
    analogyTitle: 'How Global Financial Safety Standards Prevent Weak Links',
    analogyBody:
      'International aviation security relies on every airport enforcing consistent baggage screening. If one airport skips security checks, flights departing from that hub create risks for every destination connected to it. The Financial Action Task Force (FATF) applies the same principle to the global financial system: it sets 40 baseline standards and conducts peer evaluations to verify that jurisdictions implement them effectively.',
    everydayExampleTitle: 'Practical Effects When a Jurisdiction Enters the FATF Grey or Black List',
    everydaySteps: [
      {
        stepTitle: '1. Slower Cross-Border Payments and Trade Clearing',
        stepDetail:
          'When a jurisdiction is placed under Increased Monitoring (Grey List) or a Call for Action (Black List), foreign financial institutions apply enhanced verification to cross-border wires, slowing down tuition transfers and commercial invoices.'
      },
      {
        stepTitle: '2. Higher Remittance and Correspondent Banking Costs',
        stepDetail:
          'Global correspondent banks may reduce or terminate relationships with local respondent banks, increasing transaction fees for migrant workers and exporters.'
      },
      {
        stepTitle: '3. Impact on Sovereign Risk Perception',
        stepDetail:
          'Institutional investors and credit rating agencies factor FATF compliance into country risk assessments, affecting capital flows and borrowing costs.'
      }
    ],
    jargonBuster: [
      {
        term: 'Mutual Evaluation',
        simpleMeaning:
          'A peer-review assessment in which specialists from other member jurisdictions examine a country’s legal framework and enforcement results.'
      },
      {
        term: 'FSRBs (FATF-Style Regional Bodies, e.g., APG)',
        simpleMeaning:
          'Nine regional bodies—such as the Asia/Pacific Group on Money Laundering—that assess and support implementation of the FATF Standards across more than 200 jurisdictions.'
      },
      {
        term: 'Grey List vs. Black List',
        simpleMeaning:
          'Jurisdictions under Increased Monitoring (Grey List) have committed to action plans to address strategic deficiencies; High-Risk Jurisdictions subject to a Call for Action (Black List) face counter-measures.'
      }
    ],
    whyShouldICare: [
      'Consistent compliance keeps cross-border banking channels open and reduces safe havens for stolen public assets.'
    ]
  },
  S2: {
    slideId: 'S2',
    analogyTitle: 'Why the FATF Standards Have Been Revised Since 1990',
    analogyBody:
      'Financial crime methods shift whenever regulatory controls tighten. In 1990, the primary concern was cash deposits from narcotics trafficking into retail banks. As banking controls matured, laundering activity moved into real estate, casinos, professional gatekeepers, multi-layered offshore companies, and eventually virtual assets. Each major revision of the FATF Recommendations reflects those operational shifts.',
    everydayExampleTitle: 'Key Milestones in the Evolution of the Standards',
    everydaySteps: [
      {
        stepTitle: '1990: Addressing Narcotics Cash in the Banking Sector',
        stepDetail:
          'The original 40 Recommendations focused on customer identification and suspicious reporting for cash deposits linked to drug trafficking.'
      },
      {
        stepTitle: '2001–2003: Terrorist Financing & Non-Bank Gatekeepers (DNFBPs)',
        stepDetail:
          'FATF added Special Recommendations on terrorist financing and extended customer due diligence duties to casinos, real estate agents, precious metal dealers, lawyers, notaries, and accountants.'
      },
      {
        stepTitle: '2012–2026: Risk-Based Approach, Virtual Assets & Beneficial Ownership',
        stepDetail:
          'The 2012 consolidation placed the Risk-Based Approach first (R.1), while subsequent updates regulated Virtual Asset Service Providers (R.15), strengthened beneficial ownership registries (R.24/R.25), and updated payment transparency (R.16).'
      }
    ],
    jargonBuster: [
      {
        term: 'The 40+9 Recommendations',
        simpleMeaning:
          'The structure used between 2001 and 2012 combining 40 AML Recommendations with 9 Special Recommendations on Terrorist Financing prior to their 2012 consolidation.'
      },
      {
        term: 'Interpretive Notes',
        simpleMeaning:
          'Binding operational requirements attached to the Recommendations that specify how countries and institutions must implement each rule.'
      }
    ],
    whyShouldICare: [
      'Knowing how the rules evolved explains why financial institutions and virtual asset platforms verify customer identity, beneficial ownership, and transaction purpose today.'
    ]
  },
  S3: {
    slideId: 'S3',
    analogyTitle: 'Reading the 40 Recommendations as Seven Connected Components',
    analogyBody:
      'Rather than viewing the 40 Recommendations as isolated rules, it helps to read them as seven connected parts of a national system: (A) Risk assessment and domestic coordination, (B) Criminal offenses and asset confiscation, (C) Terrorist and proliferation sanctions, (D) Preventive duties for financial institutions and professions, (E) Beneficial ownership transparency, (F) Supervisory, FIU, and law enforcement powers, and (G) Cross-border legal and intelligence cooperation.',
    everydayExampleTitle: 'The Two Dimensions of a FATF Assessment',
    everydaySteps: [
      {
        stepTitle: '1. Technical Compliance (40 Recommendations)',
        stepDetail:
          'Evaluates whether a country has enacted the required laws, regulations, and institutional powers across Recommendations 1 to 40, rated from Compliant to Non-Compliant.'
      },
      {
        stepTitle: '2. Effectiveness (11 Immediate Outcomes)',
        stepDetail:
          'Evaluates whether those laws work in practice—measuring risk understanding, supervision, intelligence dissemination, prosecutions, convictions, and asset recovery.'
      }
    ],
    jargonBuster: [
      {
        term: 'Technical Compliance (R.1–R.40)',
        simpleMeaning:
          'Assessment of the legal, regulatory, and institutional framework written into domestic law.'
      },
      {
        term: 'Effectiveness (Immediate Outcomes 1–11)',
        simpleMeaning:
          'Assessment of tangible operational results achieved by the jurisdiction’s AML/CFT system.'
      }
    ],
    whyShouldICare: [
      'Grouping the Recommendations into Sections A through G clarifies how frontline customer checks connect to financial intelligence and courtroom asset recovery.'
    ]
  }
};
