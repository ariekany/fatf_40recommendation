import {
  GlossaryTerm,
  IntroSlide,
  SectionId,
  SectionMeta
} from '../types/fatf';

export const ID_SECTIONS: Record<
  SectionId,
  Pick<SectionMeta, 'title' | 'shortTitle' | 'description'>
> = {
  A: {
    title:
      'AML/CFT Policies and Coordination atau Kebijakan & Koordinasi Anti Pencucian Uang dan Pendanaan Terorisme (APU-PPT)',
    shortTitle: 'Policies & Coordination (Kebijakan & Koordinasi)',
    description:
      'Bagian pertama ini mengatur pemetaan risiko dan kerja sama antarlembaga di dalam negeri. Negara menyusun National Risk Assessment (NRA) atau Penilaian Risiko Nasional untuk mengetahui titik mana yang paling rawan kejahatan keuangan, lalu menerapkan Risk-Based Approach (RBA) atau Pendekatan Berbasis Risiko bersama seluruh instansi terkait.'
  },
  B: {
    title:
      'Money Laundering and Confiscation atau Pencucian Uang dan Perampasan Aset',
    shortTitle: 'ML & Confiscation (Pidana Pencucian Uang & Sita Aset)',
    description:
      'Mengatur dasar hukum untuk memidanakan pelaku Money Laundering (ML) atau Pencucian Uang atas minimal 21 kategori kejahatan asal (Predicate Offences). Bagian ini juga mengatur Confiscation atau Perampasan Aset agar harta hasil kejahatan dapat dibekukan dan diambil alih oleh negara.'
  },
  C: {
    title:
      'Terrorist Financing and Financing of Proliferation atau Pendanaan Terorisme & Proliferasi Senjata Pemusnah Massal',
    shortTitle: 'TF & Proliferation (Pendanaan Terorisme & Senjata Massal)',
    description:
      'Fokus memutus aliran dana untuk Terrorist Financing (TF) atau Pendanaan Terorisme serta Proliferation Financing (PF) atau Pendanaan Proliferasi Senjata Pemusnah Massal. Mekanismenya mencakup Targeted Financial Sanctions (TFS) atau Sanksi Keuangan Terarah serta perlindungan terhadap Non-Profit Organisations (NPOs) atau Organisasi Nirlaba/Yayasan agar tidak disalahgunakan.'
  },
  D: {
    title:
      'Preventive Measures atau Langkah-Langkah Pencegahan di Sektor Keuangan & Profesi',
    shortTitle: 'Preventive Measures (Pencegahan di Bank & Profesi)',
    description:
      'Cakupan terluas dari standar ini (R.9 sampai R.23) yang mengatur kewajiban pencegahan di perbankan dan profesi. Meliputi Customer Due Diligence (CDD) atau Uji Tuntas Nasabah, penyimpanan arsip (Record-Keeping), pengawasan Politically Exposed Persons (PEPs) atau Pejabat Publik Berisiko Tinggi, pengaturan Virtual Asset Service Providers (VASPs) atau Penyedia Jasa Aset Virtual, pelaporan Suspicious Transaction Report (STR) atau Laporan Transaksi Keuangan Mencurigakan (LTKM), hingga kewajiban bagi Designated Non-Financial Businesses and Professions (DNFBPs) atau Profesi & Bisnis Non-Keuangan.'
  },
  E: {
    title:
      'Transparency and Beneficial Ownership of Legal Persons and Arrangements atau Transparansi Pemilik Manfaat Perusahaan & Perikatan Hukum',
    shortTitle: 'Beneficial Ownership (Transparansi Pemilik Asli)',
    description:
      'Mencegah penyalahgunaan perusahaan cangkang (Shell Companies) untuk menyembunyikan uang. Bagian ini mengatur keterbukaan data pada Legal Persons (Badan Hukum seperti PT dan Yayasan) serta Legal Arrangements (Perikatan Hukum seperti Express Trust), sehingga identitas Beneficial Owner (BO) atau Pemilik Manfaat Sebenarnya dapat diketahui oleh perbankan dan aparat.'
  },
  F: {
    title:
      'Powers and Responsibilities of Competent Authorities and Other Institutional Measures atau Kewenangan Otoritas, Pengawas, dan Unit Intelijen Keuangan',
    shortTitle: 'Competent Authorities & FIU (Otoritas, Pengawas & PPATK)',
    description:
      'Mengatur wewenang dan tanggung jawab lembaga penegak aturan, mulai dari Financial Supervisors (Otoritas Pengawas Keuangan seperti OJK dan BI), Self-Regulatory Bodies (SRBs) atau Organisasi Profesi, Financial Intelligence Unit (FIU) atau Unit Intelijen Keuangan (di Indonesia: PPATK), Law Enforcement Authorities (LEAs) atau Aparat Penegak Hukum, pengawasan Cash Couriers (Kurir Uang Tunai) di perbatasan, hingga sanksi hukum.'
  },
  G: {
    title:
      'International Cooperation atau Kerja Sama Internasional Lintas Negara',
    shortTitle: 'International Cooperation (Kerja Sama Internasional)',
    description:
      'Mengatur kerja sama lintas batas negara karena dana hasil kejahatan sering dipindahkan ke luar negeri. Mencakup pelaksanaan Konvensi PBB, Mutual Legal Assistance (MLA) atau Bantuan Hukum Timbal Balik antar-pengadilan, penyitaan aset lintas yurisdiksi, Extradition atau Ekstradisi tersangka, serta pertukaran informasi cepat antar-otoritas.'
  }
};

export const ID_INTRO_SLIDES: IntroSlide[] = [
  {
    id: 'S0',
    stepNumber: '01',
    title:
      'Mengenal AML, CFT, dan CPF: Tiga Fokus Utama Kejahatan Keuangan',
    subtitle:
      'Perbedaan mendasar antara Money Laundering (ML), Terrorist Financing (TF), dan Proliferation Financing (PF) sebelum mempelajari 40 Rekomendasi.',
    essence:
      'Financial Action Task Force (FATF) atau Badan Penentu Standar Global Anti Kejahatan Keuangan menyusun aturan untuk menangkal tiga jenis ancaman: (1) Money Laundering (ML) atau Pencucian Uang, yaitu menyamarkan uang hasil tindak pidana agar terlihat berasal dari usaha yang sah; (2) Terrorist Financing (TF) atau Pendanaan Terorisme, yakni pengumpulan dana (baik dari sumber yang halal maupun dari kejahatan) untuk membiayai kegiatan atau kelompok teroris; dan (3) Proliferation Financing (PF) atau Pendanaan Proliferasi, yaitu pembiayaan pengadaan senjata pemusnah massal (nuklir, kimia, dan biologi).',
    keyPoints: [
      {
        heading: 'Money Laundering (ML) atau Pencucian Uang (TPPU)',
        detail:
          'Pelaku korupsi, narkotika, atau penipuan tidak bisa langsung membelanjakan uang hasil kejahatan dalam jumlah besar tanpa menimbulkan kecurigaan. Mereka biasanya memutar dana tersebut melalui tiga tahapan: Placement (memasukkan uang ke sistem keuangan), Layering (memindahkan uang berkali-kali untuk memutus jejak), dan Integration (menggabungkan kembali dana tersebut ke dalam aset atau bisnis yang tampak legal).'
      },
      {
        heading: 'Terrorist Financing (TF) atau Pendanaan Terorisme (TPPT)',
        detail:
          'Alurnya sering berkebalikan dengan pencucian uang. Sumber dananya bisa berasal dari uang bersih, seperti penghasilan pribadi atau donasi sosial yang disalahgunakan, yang kemudian disalurkan untuk membiayai operasional jaringan teroris, logistik, atau keberangkatan Foreign Terrorist Fighters (FTFs) atau Teroris Lintas Negara.'
      },
      {
        heading: 'Proliferation Financing (PF) atau Pendanaan Proliferasi Senjata Pemusnah Massal',
        detail:
          'Berfokus pada pemutusan aliran dana dan layanan keuangan yang digunakan untuk membeli komponen atau teknologi Weapons of Mass Destruction (WMD) atau Senjata Pemusnah Massal (nuklir, biologi, kimia) yang dilarang oleh resolusi Dewan Keamanan PBB.'
      }
    ],
    interactiveType: 'triad-cards',
    quiz: {
      question:
        'Apa perbedaan mendasar antara Money Laundering (ML) atau Pencucian Uang dengan Terrorist Financing (TF) atau Pendanaan Terorisme?',
      options: [
        'Money Laundering hanya memakai uang tunai, sedangkan Terrorist Financing hanya memakai aset kripto.',
        'Money Laundering selalu berawal dari uang hasil kejahatan yang ingin disamarkan asal-usulnya, sedangkan Terrorist Financing bisa berasal dari dana legal (seperti donasi atau gaji) maupun dana ilegal yang ditujukan untuk membiayai terorisme.',
        'Terrorist Financing baru dianggap melanggar hukum jika nilainya di atas USD 10.000, sedangkan Money Laundering tidak punya batas nominal.',
        'Money Laundering diawasi oleh PBB, sedangkan Terrorist Financing hanya diawasi oleh bank lokal.'
      ],
      correctIndex: 1,
      explanation:
        'Dalam Money Laundering (ML), uangnya selalu berasal dari tindak pidana asal (Predicate Offence) dan tujuannya menyembunyikan sumber uang tersebut. Pada Terrorist Financing (TF), sumber uangnya bisa legal maupun ilegal, karena yang menjadi ukuran utama adalah tujuan penggunaannya untuk mendukung teroris atau organisasi teroris.'
    }
  },
  {
    id: 'S1',
    stepNumber: '02',
    title:
      'Mengenal Financial Action Task Force (FATF) atau Badan Penentu Standar Global Anti Kejahatan Keuangan',
    subtitle:
      'Peran FATF di lebih dari 200 yurisdiksi dunia serta dampak nyata dari daftar pantauan Grey List dan Black List.',
    essence:
      'Dibentuk pada KTT G7 di Paris tahun 1989, Financial Action Task Force (FATF) atau Gugus Tugas Aksi Keuangan adalah lembaga antar-pemerintah yang menyusun standar global antipencucian uang, pendanaan terorisme, dan proliferasi senjata. Bersama 9 organisasi regionalnya yang disebut FATF-Style Regional Bodies (FSRBs) atau Badan Regional Sejenis FATF (seperti Asia/Pacific Group on Money Laundering atau APG di kawasan Asia Pasifik), standar ini diterapkan oleh lebih dari 200 yurisdiksi. Indonesia resmi tercatat sebagai anggota penuh FATF sejak Oktober 2023.',
    keyPoints: [
      {
        heading: 'Standard-Setter (Penyusun Standar) & Peer Reviewer (Evaluasi Antarnegara)',
        detail:
          'FATF beranggotakan 40 yurisdiksi utama dan bekerja bersama 9 FATF-Style Regional Bodies (FSRBs). Secara berkala, mereka mengadakan Mutual Evaluation (ME) atau Evaluasi Timbal Balik, di mana tim asesor dari negara lain memeriksa kecukupan regulasi dan penegakan hukum di negara yang sedang diuji.'
      },
      {
        heading: 'Dua Aspek Penilaian: Technical Compliance (Kepatuhan Teknis) vs. Effectiveness (Efektivitas)',
        detail:
          'Evaluasi FATF menghasilkan dua penilaian: (1) Technical Compliance, yang menguji kesesuaian undang-undang dan regulasi tertulis terhadap 40 Rekomendasi (dengan peringkat C, LC, PC, atau NC); dan (2) Effectiveness, yang mengukur hasil nyata di lapangan melalui 11 Immediate Outcomes (IOs) atau Sasaran Hasil Langsung, seperti jumlah perkara yang divonis dan nilai aset yang berhasil dirampas.'
      },
      {
        heading: 'Grey List (Daftar Abu-Abu) & Black List (Daftar Hitam) FATF',
        detail:
          'Negara dengan kelemahan mendasar akan dimasukkan ke dalam Jurisdictions under Increased Monitoring (dikenal sebagai Grey List atau Daftar Abu-Abu, yakni negara yang sedang menjalankan rencana perbaikan bersama FATF) atau High-Risk Jurisdictions subject to a Call for Action (dikenal sebagai Black List atau Daftar Hitam, yakni negara berisiko tinggi yang dikenai pembatasan keuangan internasional).'
      }
    ],
    interactiveType: 'mandate-pillars',
    quiz: {
      question:
        'Saat tim asesor Financial Action Task Force (FATF) melakukan Mutual Evaluation atau Evaluasi Timbal Balik terhadap suatu negara, dua aspek utama apa yang dinilai?',
      options: [
        'Jumlah gedung bank di ibu kota dan nilai tukar mata uang negara tersebut.',
        'Technical Compliance (kelengkapan aturan hukum terhadap 40 Rekomendasi) dan Effectiveness (hasil nyata di lapangan berdasarkan 11 Immediate Outcomes).',
        'Hanya apakah negara tersebut sudah menandatangani perjanjian ekstradisi dengan negara G7.',
        'Tingkat suku bunga bank sentral dan cadangan emas nasional.'
      ],
      correctIndex: 1,
      explanation:
        'Evaluasi FATF menilai dua sisi sekaligus: Technical Compliance (kelengkapan kerangka hukum sesuai R.1–R.40) dan Effectiveness (seberapa efektif aturan tersebut dijalankan di lapangan, diukur melalui 11 Immediate Outcomes).'
    }
  },
  {
    id: 'S2',
    stepNumber: '03',
    title:
      'Perkembangan Standar FATF (1990 – Pembaruan 2025/2026)',
    subtitle:
      'Perubahan fokus dari uang tunai kartel narkotika pada tahun 1990 hingga pengaturan aset kripto, pemilik manfaat perusahaan, dan transparansi pembayaran.',
    essence:
      'Standar FATF terus disesuaikan mengikuti perubahan pola kejahatan keuangan. Dimulai dari 40 Rekomendasi tahun 1990 yang menitikberatkan pada penyetoran uang tunai hasil narkotika di perbankan, cakupan ini diperluas pasca-2001 melalui Special Recommendations on Terrorist Financing (Rekomendasi Khusus Pendanaan Terorisme). Pada tahun 2012, seluruh aturan digabungkan menjadi 40 Rekomendasi dengan fondasi Risk-Based Approach (RBA) atau Pendekatan Berbasis Risiko, kemudian diperbarui pada periode 2019–2026 untuk mengatur Virtual Asset Service Providers (VASPs) atau Penyedia Jasa Aset Kripto, Beneficial Ownership (BO) atau Pemilik Manfaat, serta transparansi transfer pembayaran.',
    keyPoints: [
      {
        heading: '1990, 1996 & 2001–2003: Dari Narkotika ke Kejahatan Terorganisir & Terorisme',
        detail:
          'Rekomendasi awal tahun 1990 berfokus pada peredaran uang narkotika, lalu direvisi pada 1996 agar mencakup tindak pidana asal lainnya. Setelah peristiwa 2001, FATF menerbitkan Special Recommendations untuk memutus pendanaan terorisme, dan pada 2003 mewajibkan sektor non-bank seperti notaris, agen properti, dan kasino (DNFBPs) menerapkan pemeriksaan nasabah.'
      },
      {
        heading: 'Revisi 2012: Penyatuan 40 Rekomendasi & Penerapan RBA (R.1)',
        detail:
          'Pada Februari 2012, FATF menyatukan seluruh aturannya ke dalam format 40 Rekomendasi yang berlaku saat ini. Revisi ini menempatkan Risk-Based Approach (RBA) atau Pendekatan Berbasis Risiko pada Rekomendasi 1 dan menambahkan aturan pencegahan Proliferation Financing (PF) atau Pendanaan Senjata Pemusnah Massal pada Rekomendasi 7.'
      },
      {
        heading: 'Pembaruan 2019–2026: Kripto (R.15), Pemilik Manfaat (R.24/25) & Transfer Dana (R.16)',
        detail:
          'Pada 2019, FATF mewajibkan pengawasan atas Virtual Asset Service Providers (VASPs) atau Bursa Kripto. Pada 2022–2023, aturan Beneficial Ownership (BO) atau Pemilik Manfaat diperketat untuk menutup celah perusahaan cangkang, diikuti penguatan aturan perampasan aset (R.4/R.38), perlindungan yayasan/NPO (R.8), serta revisi transparansi pembayaran (R.16) dan pengecualian kemanusiaan PBB (INR.6) pada 2025–2026.'
      }
    ],
    interactiveType: 'timeline',
    quiz: {
      question:
        'Apa perubahan utama dalam revisi standar Financial Action Task Force (FATF) tahun 2012 dan pembaruan setelahnya?',
      options: [
        'FATF menghapus semua aturan untuk bank dan menyerahkannya ke kepolisian.',
        'FATF menyatukan aturan menjadi 40 Rekomendasi dengan Risk-Based Approach (RBA) atau Pendekatan Berbasis Risiko sebagai fondasi utama (R.1), lalu memperluas aturan ke kripto (VASP) dan transparansi Beneficial Ownership (Pemilik Manfaat).',
        'FATF melarang penggunaan mata uang asing di seluruh dunia.',
        'FATF membebaskan pengacara, notaris, dan pedagang emas dari segala aturan antipencucian uang.'
      ],
      correctIndex: 1,
      explanation:
        'Revisi 2012 menyatukan standar menjadi 40 Rekomendasi dengan menempatkan Risk-Based Approach (RBA) di Rekomendasi 1, sementara pembaruan berikutnya mengatur sektor aset kripto (VASP pada R.15) dan transparansi pemilik manfaat perusahaan (R.24 & R.25).'
    }
  },
  {
    id: 'S3',
    stepNumber: '04',
    title:
      'Struktur Dokumen Standar FATF: Teks Rekomendasi, Interpretive Notes, dan Glossary',
    subtitle:
      'Susunan 7 Bagian (A–G) serta alasan mengapa kata "Should" dalam teks FATF bermakna "Wajib".',
    essence:
      'Dokumen Standar FATF terdiri dari tiga komponen yang saling mengikat: (1) Teks 40 Rekomendasi yang memuat kewajiban pokok, (2) Interpretive Notes (INR) atau Catatan Interpretatif yang menguraikan rincian teknis pelaksanaan, dan (3) FATF Glossary atau Kamus Definisi Resmi yang menetapkan batasan hukum setiap istilah. Ketiga bagian ini sama-sama digunakan sebagai dasar penilaian negara.',
    keyPoints: [
      {
        heading: 'Makna Kata "Should" yang Setara dengan "Must" (Wajib)',
        detail:
          'Teks bahasa Inggris FATF menggunakan rumusan "Countries should...". Dalam bagian pengantar dan kamus resmi FATF, ditegaskan bahwa untuk keperluan penilaian kepatuhan, kata "should" memiliki arti yang sama dengan "must" (wajib). Ketidakpatuhan terhadap ketentuan tersebut akan mengurangi nilai evaluasi negara.'
      },
      {
        heading: 'Interpretive Notes (INR) atau Catatan Interpretatif & FATF Glossary (Kamus Resmi)',
        detail:
          'Teks Rekomendasi memuat aturan umumnya, sedangkan Interpretive Notes (INR) memuat rincian operasionalnya (seperti batas nominal transaksi USD/EUR 15.000 pada INR.10 atau batas USD/EUR 1.000 untuk transfer dana pada INR.16). Adapun FATF Glossary (Kamus Resmi) menentukan cakupan istilah seperti Financial Institutions (Lembaga Keuangan), DNFBPs, dan Beneficial Owner.'
      },
      {
        heading: 'Susunan 7 Bagian (Section A sampai Section G)',
        detail:
          'Ke-40 Rekomendasi dibagi ke dalam 7 bagian tematik: Bagian A (Kebijakan & Risiko), Bagian B (Pidana Pencucian Uang & Sita Aset), Bagian C (Pendanaan Terorisme & Proliferasi), Bagian D (Pencegahan di Bank & Profesi), Bagian E (Transparansi Pemilik Manfaat), Bagian F (Kewenangan PPATK, Pengawas & Penegak Hukum), serta Bagian G (Kerja Sama Internasional).'
      }
    ],
    interactiveType: 'architecture',
    quiz: {
      question:
        'Dalam naskah resmi Financial Action Task Force (FATF), bagaimana kedudukan kata "should" (misalnya "Countries should criminalise money laundering...") saat dilakukan evaluasi terhadap suatu negara?',
      options: [
        'Sekadar anjuran sukarela yang boleh diabaikan.',
        'Bermakna WAJIB (setara dengan "must"), dan baik teks Rekomendasi, Interpretive Notes (Catatan Interpretatif), maupun Glossary (Kamus Definisi) semuanya mengikat dalam penilaian.',
        'Hanya mengikat bagi negara-negara di benua Eropa saja.',
        'Baru akan berlaku efektif 20 tahun setelah diterbitkan.'
      ],
      correctIndex: 1,
      explanation:
        'Bagian pengantar dokumen Standar FATF menegaskan bahwa untuk keperluan penilaian kepatuhan, kata "should" memiliki makna yang sama dengan "must" (wajib).'
    }
  }
];

export const ID_GLOSSARY_TERMS: Record<
  string,
  Pick<GlossaryTerm, 'term' | 'shortDef' | 'fullDef' | 'subItems'>
> = {
  'accounts': {
    term: 'Accounts atau Rekening Keuangan',
    shortDef:
      'Mencakup rekening tabungan dan giro perbankan, rekening efek/sekuritas, polis asuransi jiwa berinvestasi, serta fasilitas penyimpanan dana serupa.',
    fullDef:
      'Dalam kamus Financial Action Task Force (FATF), istilah "Accounts" (Rekening) diartikan luas: meliputi rekening giro, tabungan, deposito, rekening efek atau sekuritas, polis asuransi jiwa yang memiliki nilai tunai atau investasi, serta hubungan penyimpanan aset sejenis di lembaga keuangan.'
  },
  'beneficial-owner': {
    term: 'Beneficial Owner (BO) atau Pemilik Manfaat Sebenarnya',
    shortDef:
      'Manusia alami (Natural Person, bukan badan hukum) yang pada akhirnya memiliki, menikmati manfaat ekonomi, atau memegang kendali tertinggi atas suatu nasabah atau perusahaan.',
    fullDef:
      'Beneficial Owner (BO) atau Pemilik Manfaat adalah orang perseorangan (Natural Person) yang pada akhirnya memiliki atau mengendalikan seorang nasabah dan/atau orang yang atas namanya suatu transaksi dilakukan. Istilah ini juga mencakup orang perseorangan yang memegang kendali efektif tertinggi (Ultimate Effective Control) atas suatu badan hukum (Legal Person) atau perikatan hukum (Trust). Badan hukum lain tidak dapat ditetapkan sebagai Beneficial Owner akhir karena penelusuran harus bermuara pada manusia aslinya.'
  },
  'bearer-negotiable-instruments': {
    term: 'Bearer Negotiable Instruments (BNIs) atau Instrumen Pembayaran Atas Unjuk',
    shortDef:
      'Surat berharga yang dapat langsung dicairkan oleh siapa pun yang memegang fisiknya, seperti cek perjalanan, wesel, atau cek yang tidak mencantumkan nama penerima.',
    fullDef:
      'Bearer Negotiable Instruments (BNIs) atau Instrumen Pembayaran Atas Unjuk mencakup instrumen moneter atas unjuk seperti Traveller’s Cheques (Cek Perjalanan), serta instrumen yang dapat diperdagangkan (cek, surat sanggup bayar/promes, dan perintah bayar/wesel) yang diterbitkan tanpa nama atau sudah ditandatangani tetapi nama penerimanya dikosongkan, sehingga hak kepemilikannya berpindah cukup melalui penyerahan fisik kertasnya.'
  },
  'competent-authorities': {
    term: 'Competent Authorities atau Otoritas yang Berwenang',
    shortDef:
      'Seluruh instansi pemerintah yang memegang wewenang dalam rezim APU-PPT, mulai dari PPATK (FIU), Kepolisian, Kejaksaan, KPK, OJK, BI, Pajak, hingga Bea Cukai.',
    fullDef:
      'Competent Authorities atau Otoritas yang Berwenang merujuk pada seluruh otoritas publik yang memiliki tanggung jawab dalam pencegahan dan pemberantasan pencucian uang serta pendanaan terorisme. Cakupannya meliputi Financial Intelligence Unit (FIU) atau Unit Intelijen Keuangan (PPATK), Law Enforcement Authorities (LEAs) atau Aparat Penegak Hukum, Financial Supervisors (Pengawas Keuangan seperti OJK dan BI), serta otoritas pajak dan bea cukai.'
  },
  'confiscation': {
    term: 'Confiscation atau Perampasan Aset secara Permanen oleh Negara',
    shortDef:
      'Pencabutan hak milik atas harta hasil kejahatan secara permanen berdasarkan putusan pengadilan atau otoritas berwenang sehingga beralih menjadi milik Negara.',
    fullDef:
      'Confiscation (Perampasan Aset, atau Forfeiture) adalah pencabutan permanen atas dana atau aset lainnya berdasarkan penetapan atau putusan pengadilan maupun otoritas yang berwenang. Melalui tindakan ini, hak kepemilikan pelaku atas aset tersebut berakhir dan beralih kepada Negara.'
  },
  'correspondent-banking': {
    term: 'Correspondent Banking atau Perbankan Koresponden Lintas Negara',
    shortDef:
      'Layanan perbankan yang disediakan oleh satu bank (Correspondent Bank) kepada bank lain di luar negeri (Respondent Bank) untuk memproses pembayaran internasional dan kliring valuta asing.',
    fullDef:
      'Correspondent Banking atau Perbankan Koresponden adalah penyediaan layanan perbankan oleh satu bank ("Correspondent Bank" atau Bank Koresponden) kepada bank lain ("Respondent Bank" atau Bank Responden), meliputi penyediaan rekening giro/nostro-vostro, pengelolaan kas, transfer dana lintas negara, kliring cek, dan layanan Payable-Through Accounts (PTA).'
  },
  'criminal-activity': {
    term: 'Criminal Activity & Designated Categories of Offences atau Aktivitas Kriminal & 21 Kategori Tindak Pidana Asal',
    shortDef:
      'Seluruh tindak pidana yang menjadi sumber uang hasil kejahatan (Predicate Offences / Tindak Pidana Asal), yang minimal mencakup 21 kategori kejahatan berat.',
    fullDef:
      'Criminal Activity mencakup seluruh tindak pidana yang menghasilkan harta kekayaan ilegal (Predicate Offences atau Tindak Pidana Asal). Dalam pemidanaan pencucian uang pada Rekomendasi 3, setiap negara wajib mencakup seluruh kejahatan serius yang minimal meliputi 21 Designated Categories of Offences (21 Kategori Tindak Pidana Asal yang Ditetapkan FATF).'
  },
  'dnfbp': {
    term: 'Designated Non-Financial Businesses and Professions (DNFBPs) atau Profesi dan Bisnis Non-Keuangan Tertentu (PPSPM)',
    shortDef:
      'Enam sektor usaha dan profesi di luar lembaga keuangan yang wajib menerapkan aturan APU-PPT: Kasino, Agen Properti, Pedagang Emas/Permata, Pengacara/Notaris, Akuntan, dan Penyedia Jasa Perusahaan.',
    fullDef:
      'Designated Non-Financial Businesses and Professions (DNFBPs), atau di Indonesia dikenal sebagai Pihak Pelapor Sektor Profesi dan Barang Mewah (PPSPM), mencakup 6 sektor non-keuangan yang wajib menerapkan langkah pencegahan pencucian uang:',
    subItems: [
      '1. Casinos (Kasino, baik kasino fisik maupun kasino daring/internet).',
      '2. Real Estate Agents (Agen Properti, ketika terlibat dalam transaksi jual-beli tanah, rumah, atau bangunan bagi kliennya).',
      '3. Dealers in Precious Metals and Dealers in Precious Stones (Pedagang Logam Mulia/Emas dan Pedagang Batu Mulia/Berlian, saat melakukan transaksi tunai dengan pelanggan sebesar USD/EUR 15.000 atau lebih).',
      '4. Lawyers, Notaries, Other Independent Legal Professionals and Accountants (Pengacara, Notaris, PPAT, dan Akuntan Independen saat menyiapkan atau melakukan transaksi jual-beli properti, mengelola dana/rekening klien, atau mendirikan badan usaha).',
      '5. Trust and Company Service Providers / TCSPs (Penyedia Jasa Wali Amanat dan Perusahaan yang memberikan layanan pendirian badan hukum, direktur/pemegang saham pinjam nama, kantor virtual, atau wali amanat).'
    ]
  },
  'financial-institutions': {
    term: 'Financial Institutions (FIs) atau Penyedia Jasa Keuangan (PJK)',
    shortDef:
      'Setiap orang atau badan usaha yang menjalankan satu atau lebih dari 13 kegiatan jasa keuangan (perbankan, transfer dana, asuransi jiwa, sekuritas, hingga penukaran valuta asing) untuk nasabah.',
    fullDef:
      'Financial Institutions (FIs) atau Penyedia Jasa Keuangan (PJK) adalah setiap orang atau badan usaha yang melakukan satu atau lebih dari 13 kegiatan keuangan berikut untuk atau atas nama nasabah:',
    subItems: [
      '1. Penerimaan simpanan dan dana masyarakat lainnya (tabungan, giro, deposito perbankan).',
      '2. Pemberian pinjaman atau kredit (kredit konsumsi, KPR, anjak piutang, pembiayaan perdagangan).',
      '3. Sewa guna usaha pembiayaan (Financial Leasing).',
      '4. Money or Value Transfer Services (MVTS) atau Layanan Transfer Uang atau Nilai.',
      '5. Penerbitan dan pengelolaan alat pembayaran (kartu kredit, kartu debit, cek, uang elektronik).',
      '6. Pemberian jaminan dan komitmen keuangan (Financial Guarantees).',
      '7. Perdagangan instrumen pasar uang, valuta asing, derivatif, efek, dan komoditas berjangka.',
      '8. Partisipasi dalam penerbitan efek (Underwriting) dan layanan keuangan terkait.',
      '9. Pengelolaan portofolio individu dan kolektif (Manajer Investasi / Reksa Dana).',
      '10. Penyimpanan dan pengadministrasian uang tunai atau sekuritas likuid atas nama pihak lain (Kustodian).',
      '11. Investasi atau pengelolaan dana atau uang atas nama pihak lain.',
      '12. Penjaminan dan penempatan asuransi jiwa serta asuransi terkait investasi lainnya.',
      '13. Penukaran uang dan mata uang asing (Money Changing / Pedagang Valuta Asing).'
    ]
  },
  'freeze': {
    term: 'Freeze / Freezing atau Pembekuan Aset Sementara',
    shortDef:
      'Penguncian sementara atas dana atau aset sehingga tidak dapat dipindahkan, dijual, atau dicairkan selama proses pemeriksaan atau sanksi berlangsung.',
    fullDef:
      'Freeze (Pembekuan) berarti melarang pemindahan, konversi, pelepasan, atau pergerakan dana maupun aset lainnya berdasarkan tindakan otoritas berwenang atau pengadilan. Selama masa pembekuan, aset tersebut dikunci namun status kepemilikannya belum berpindah sampai ada putusan akhir.'
  },
  'fundamental-principles-of-domestic-law': {
    term: 'Fundamental Principles of Domestic Law atau Prinsip-Prinsip Dasar Hukum Nasional / Konstitusi',
    shortDef:
      'Asas hukum mendasar dalam konstitusi suatu negara, seperti hak atas peradilan yang adil (Due Process) dan perlindungan pihak ketiga yang beriktikad baik.',
    fullDef:
      'Merujuk pada asas-asas hukum pokok yang tertuang dalam konstitusi atau undang-undang dasar suatu negara yang menjadi landasan sistem hukum nasionalnya, misalnya asas praduga tak bersalah dan perlindungan hak milik bagi pembeli yang beriktikad baik (bona fide third parties).'
  },
  'legal-arrangements': {
    term: 'Legal Arrangements atau Perikatan / Pengaturan Hukum (Express Trusts)',
    shortDef:
      'Hubungan hukum pengelolaan harta seperti Express Trust (Perwalian/Amanat) di mana pemilik harta menyerahkan asetnya kepada Wali Amanat (Trustee) untuk dikelola bagi penerima manfaat.',
    fullDef:
      'Legal Arrangements merujuk pada Express Trusts (Perikatan Amanat/Perwalian) atau pengaturan hukum serupa (seperti Fiducie, Treuhand, atau Fideicomiso). Dalam skema ini, Settlor (Pendiri) menyerahkan aset kepada Trustee (Wali Amanat) untuk dikelola demi kepentingan Beneficiary (Penerima Manfaat) sesuai perjanjian.'
  },
  'legal-persons': {
    term: 'Legal Persons atau Badan Hukum (Perusahaan, Yayasan, Koperasi)',
    shortDef:
      'Entitas selain manusia alami—seperti Perseroan Terbatas (PT), Yayasan, Koperasi, atau Firma—yang dapat memiliki harta kekayaan dan membuka rekening atas namanya sendiri.',
    fullDef:
      'Legal Persons (Badan Hukum) merujuk pada setiap entitas selain orang perseorangan (Natural Person) yang dapat menjalin hubungan usaha permanen dengan lembaga keuangan atau memiliki harta kekayaan sendiri, meliputi Perseroan Terbatas (Companies/Corporations), Yayasan (Foundations), Anstalt, Koperasi, dan Persekutuan (Partnerships).'
  },
  'mvts': {
    term: 'Money or Value Transfer Services (MVTS) atau Penyedia Jasa Transfer Uang / Remitansi',
    shortDef:
      'Layanan keuangan yang menerima uang di satu tempat lalu membayarkan nilainya kepada penerima di lokasi atau negara lain, baik melalui jalur formal maupun jaringan tradisional.',
    fullDef:
      'Money or Value Transfer Services (MVTS) atau Penyedia Jasa Transfer Uang adalah layanan keuangan yang menerima uang tunai, cek, atau instrumen nilai lainnya di satu lokasi dan membayarkan nilai setara kepada penerima di lokasi lain melalui komunikasi, pesan, transfer, atau jaringan kliring (mencakup penyelenggara remitansi resmi maupun jaringan informal seperti Hawala).'
  },
  'non-profit-organisations': {
    term: 'Non-Profit Organisations (NPOs) atau Organisasi Nirlaba / Yayasan Amal',
    shortDef:
      'Badan hukum atau organisasi yang kegiatan utamanya menghimpun atau menyalurkan dana untuk tujuan amal, keagamaan, budaya, pendidikan, atau sosial.',
    fullDef:
      'Dalam standar FATF (khususnya Rekomendasi 8), Non-Profit Organisation (NPO) didefinisikan secara spesifik sebagai badan hukum, perikatan hukum, atau organisasi yang kegiatan utamanya menghimpun atau menyalurkan dana untuk tujuan amal, keagamaan, kebudayaan, pendidikan, sosial, atau kemanusiaan.'
  },
  'pep': {
    term: 'Politically Exposed Persons (PEPs) atau Orang yang Populer Secara Politis (Pejabat Publik Berisiko Tinggi)',
    shortDef:
      'Individu yang memegang atau pernah memegang jabatan publik strategis—seperti Kepala Negara, Menteri, Anggota Parlemen, Hakim Agung, Perwira Tinggi, atau Direksi BUMN—beserta keluarga dan rekan dekatnya.',
    fullDef:
      'Politically Exposed Persons (PEPs) adalah individu yang memegang fungsi publik penting sehingga memiliki akses pada pengelolaan anggaran negara atau kewenangan perizinan strategis:',
    subItems: [
      '1. Foreign PEPs (PEP Asing): Kepala Negara, Menteri, Politisi Senior, Pejabat Tinggi Pemerintah/Pengadilan/Militer, Eksekutif BUMN, dan Пejabat Partai Politik dari negara asing (selalu dikenai Enhanced Due Diligence / EDD).',
      '2. Domestic PEPs (PEP Domestik): Pejabat publik strategis di dalam negeri (kepala daerah, menteri, anggota parlemen, hakim, petinggi militer/kepolisian, direksi BUMN) yang dikenai EDD apabila hubungan usahanya berisiko tinggi.',
      '3. International Organisation PEPs (PEP Organisasi Internasional): Direktur, wakil direktur, dan anggota dewan pimpinan organisasi internasional (seperti PBB, Bank Dunia, IMF).',
      '4. Family Members & Close Associates (Anggota Keluarga & Pihak yang Terasosiasi Dekat): Pasangan, anak, orang tua, saudara, maupun rekan bisnis dekat PEP yang ikut dikenai pemeriksaan ketat karena rawan digunakan untuk menampung dana PEP.'
    ]
  },
  'proceeds': {
    term: 'Proceeds of Crime atau Hasil Tindak Pidana (Harta Kekayaan Hasil Kejahatan)',
    shortDef:
      'Segala bentuk uang atau harta kekayaan yang diperoleh secara langsung maupun tidak langsung dari suatu tindak pidana.',
    fullDef:
      'Proceeds (Hasil Tindak Pidana) berarti setiap harta kekayaan yang berasal dari atau diperoleh, baik secara langsung maupun tidak langsung, melalui dilakukannya suatu tindak pidana, termasuk aset yang telah dikonversi menjadi properti, saham, atau aset kripto.'
  },
  'property': {
    term: 'Property / Funds or Other Assets atau Harta Kekayaan / Dana dan Aset Lainnya',
    shortDef:
      'Segala jenis aset bernilai, baik berwujud maupun tidak berwujud, bergerak maupun tidak bergerak, uang tunai, saldo bank, aset kripto, emas, properti, hingga dokumen hak milik.',
    fullDef:
      'Property (Harta Kekayaan) mencakup aset dalam bentuk apa pun, baik berwujud (tangible) maupun tidak berwujud (intangible), bergerak (movable) maupun tidak bergerak (immovable), fisik maupun digital, serta dokumen atau instrumen hukum yang membuktikan hak kepemilikan atas aset tersebut.'
  },
  'seize': {
    term: 'Seize / Seizure atau Penyitaan Penguasaan Fisik Aset',
    shortDef:
      'Pengambilalihan penguasaan fisik dan pengelolaan atas aset hasil kejahatan oleh penyidik, jaksa, atau pengadilan selama proses hukum berjalan.',
    fullDef:
      'Seize (Penyitaan) berarti melarang pemindahan, konversi, pelepasan, atau pergerakan harta kekayaan berdasarkan penetapan pengadilan atau otoritas berwenang, disertai dengan pengambilalihan penguasaan fisik atau pengelolaan atas harta tersebut oleh negara sementara menunggu putusan pengadilan.'
  },
  'shell-bank': {
    term: 'Shell Bank atau Bank Cangkang (Bank Tanpa Kehadiran Fisik)',
    shortDef:
      'Bank yang hanya memiliki izin di atas kertas tanpa kantor fisik maupun manajemen nyata di negara tempatnya didirikan, serta tidak tergabung dalam grup perbankan yang diawasi.',
    fullDef:
      'Shell Bank (Bank Cangkang) adalah bank yang tidak memiliki kehadiran fisik (tidak memiliki kantor dan manajemen nyata / "mind and management") di negara tempat bank tersebut didirikan dan memperoleh izin, serta tidak berafiliasi dengan grup jasa keuangan teregulasi yang tunduk pada pengawasan terkonsolidasi. FATF melarang pendirian dan hubungan koresponden dengan Shell Bank.'
  },
  'should': {
    term: '"Should" dalam Standar FATF = WAJIB ("Must")',
    shortDef:
      'Dalam teks Rekomendasi FATF, kata "Should" memiliki kedudukan hukum yang sama dengan "Must" (Wajib) saat negara dievaluasi.',
    fullDef:
      'Untuk keperluan penilaian kepatuhan terhadap Rekomendasi FATF, kata bahasa Inggris "should" memiliki makna yang setara dengan "must" (wajib). Rumusan "Countries should..." merupakan kewajiban yang dinilai secara mengikat oleh tim asesor.'
  },
  'srb': {
    term: 'Self-Regulatory Body (SRB) atau Lembaga Pengatur Mandiri / Organisasi Profesi Resmi',
    shortDef:
      'Organisasi profesi resmi (seperti asosiasi notaris, advokat, atau akuntan) yang diberi kewenangan untuk mengatur, mengawasi, dan mendisiplinkan anggotanya.',
    fullDef:
      'Self-Regulatory Body (SRB) adalah badan atau organisasi resmi yang mewakili suatu profesi (pengacara, notaris, PPAT, atau akuntan independen) dan memiliki kewenangan menetapkan syarat profesi, standar kepatuhan APU-PPT, serta melakukan pengawasan dan penjatuhan sanksi disiplin kepada anggotanya.'
  },
  'targeted-financial-sanctions': {
    term: 'Targeted Financial Sanctions (TFS) atau Sanksi Keuangan Terarah',
    shortDef:
      'Kewajiban membekukan aset tanpa penundaan (dalam hitungan jam) serta larangan memberikan dana atau layanan apa pun kepada pihak yang masuk daftar sanksi Terorisme atau Proliferasi.',
    fullDef:
      'Targeted Financial Sanctions (TFS) mencakup dua tindakan: (1) Asset Freezing (Pembekuan Aset) tanpa penundaan (Without Delay, idealnya dalam hitungan jam), dan (2) Larangan menyediakan dana, aset, atau jasa keuangan apa pun, baik secara langsung maupun tidak langsung, bagi individu atau entitas yang tercantum dalam daftar sanksi Dewan Keamanan PBB maupun daftar nasional.'
  },
  'terrorist-financing': {
    term: 'Terrorist Financing (TF) atau Tindak Pidana Pendanaan Terorisme (TPPT)',
    shortDef:
      'Penyediaan atau pengumpulan dana untuk aksi teroris, organisasi teroris, atau teroris individu, baik dari sumber yang sah maupun dari hasil kejahatan.',
    fullDef:
      'Terrorist Financing (Pendanaan Terorisme) meliputi pembiayaan aksi teroris, organisasi teroris, maupun teroris individu untuk keperluan apa pun (termasuk biaya hidup dan perjalanan Foreign Terrorist Fighters), terlepas dari apakah dana tersebut berasal dari sumber yang legal maupun ilegal, dan meskipun dana tersebut belum digunakan dalam aksi teror tertentu.'
  },
  'tcsp': {
    term: 'Trust and Company Service Providers (TCSPs) atau Penyedia Jasa Wali Amanat dan Perusahaan',
    shortDef:
      'Badan usaha atau biro jasa yang memberikan layanan pendirian perusahaan, penyediaan direktur/pemegang saham pinjam nama (nominee), kantor virtual, atau jasa Wali Amanat.',
    fullDef:
      'Trust and Company Service Providers (TCSPs) merujuk pada orang atau bisnis yang menyediakan jasa pendirian badan hukum, bertindak sebagai atau menyediakan direktur maupun pemegang saham pinjam nama (Nominee Director/Shareholder), menyediakan alamat kantor terdaftar bagi perusahaan, atau bertindak sebagai Wali Amanat (Trustee) bagi suatu Express Trust.'
  },
  'virtual-asset': {
    term: 'Virtual Asset (VA) atau Aset Virtual / Aset Kripto',
    shortDef:
      'Representasi nilai secara digital yang dapat diperdagangkan atau ditransfer secara elektronik untuk pembayaran atau investasi (seperti Bitcoin, Ethereum, USDT), di luar uang digital resmi bank sentral.',
    fullDef:
      'Virtual Asset (Aset Virtual/Kripto) adalah representasi nilai secara digital yang dapat diperdagangkan atau ditransfer secara digital dan digunakan untuk pembayaran atau investasi. Definisi ini tidak mencakup representasi digital dari mata uang fiat resmi negara (seperti saldo bank digital atau Central Bank Digital Currency / CBDC) maupun sekuritas yang telah diatur secara terpisah.'
  },
  'vasp': {
    term: 'Virtual Asset Service Provider (VASP) atau Penyedia Jasa Aset Virtual / Pedagang Aset Kripto',
    shortDef:
      'Perusahaan atau platform (seperti bursa kripto dan penyedia dompet kustodian) yang menukarkan, mentransfer, atau menyimpan aset kripto milik pelanggan.',
    fullDef:
      'Virtual Asset Service Provider (VASP) adalah setiap orang atau badan usaha yang menjalankan satu atau lebih dari 5 kegiatan bisnis berikut untuk atau atas nama pihak lain:',
    subItems: [
      '1. Pertukaran antara Aset Virtual (kripto) dan Mata Uang Fiat (seperti Rupiah atau Dolar).',
      '2. Pertukaran antara satu atau lebih bentuk Aset Virtual (misalnya menukar Bitcoin ke USDT).',
      '3. Transfer Aset Virtual (memindahkan aset kripto dari satu alamat dompet ke alamat lainnya atas nama pelanggan).',
      '4. Penyimpanan (Custody) dan/atau pengadministrasian Aset Virtual atau instrumen kendali atas Aset Virtual (seperti dompet kustodian yang memegang Private Key pelanggan).',
      '5. Partisipasi dalam dan penyediaan layanan keuangan terkait penawaran dan/atau penjualan Aset Virtual oleh penerbit (Initial Coin Offering / ICO).'
    ]
  },
  'without-delay': {
    term: '"Without Delay" atau Tanpa Penundaan (Dalam Hitungan Jam)',
    shortDef:
      'Standar waktu dalam Sanksi Keuangan Terarah (R.6 & R.7) yang mengharuskan pembekuan aset dilakukan segera, idealnya dalam hitungan jam sejak nama masuk daftar sanksi.',
    fullDef:
      'Dalam konteks Targeted Financial Sanctions (Rekomendasi 6 dan Rekomendasi 7), frasa "Without Delay" (Tanpa Penundaan) bermakna idealnya dalam hitungan jam (a matter of hours) sejak suatu nama ditetapkan oleh Dewan Keamanan PBB atau otoritas sanksi yang berwenang, guna mencegah pemindahan dana sebelum sempat dibekukan.'
  }
};

export const ID_DESIGNATED_OFFENCES: {
  id: number;
  name: string;
  examples: string;
}[] = [
  {
    id: 1,
    name: 'Participation in an organised criminal group and racketeering atau Keikutsertaan dalam Kelompok Kejahatan Terorganisir & Pemerasan Terorganisir',
    examples:
      'Sindikat mafia, geng kejahatan lintas batas, jaringan pemerasan perlindungan (protection rackets), dan persekongkolan kriminal.'
  },
  {
    id: 2,
    name: 'Terrorism, including terrorist financing atau Terorisme dan Pendanaan Terorisme',
    examples:
      'Serangan teror, penghimpunan dana teroris, pembiayaan sel jaringan ekstremis, dan pendanaan perjalanan Foreign Terrorist Fighters (FTF).'
  },
  {
    id: 3,
    name: 'Trafficking in human beings and migrant smuggling atau Perdagangan Orang (TPPO) dan Penyelundupan Migran',
    examples:
      'Jaringan kerja paksa (termasuk sindikat penipuan daring paksa), eksploitasi seksual komersial, dan penyelundupan manusia lintas batas.'
  },
  {
    id: 4,
    name: 'Sexual exploitation, including sexual exploitation of children atau Eksploitasi Seksual, Termasuk Eksploitasi Seksual Anak',
    examples:
      'Jaringan prostitusi paksa, materi pelecehan seksual anak secara komersial di internet, dan pemerasan seksual.'
  },
  {
    id: 5,
    name: 'Illicit trafficking in narcotic drugs and psychotropic substances atau Peredaran Gelap Narkotika dan Psikotropika',
    examples:
      'Produksi, penyelundupan, dan distribusi sabu, kokain, heroin, ganja sintetis, serta bahan kimia prekursor narkoba.'
  },
  {
    id: 6,
    name: 'Illicit arms trafficking atau Perdagangan Gelap Senjata Api dan Amunisi',
    examples:
      'Penyelundupan senjata api ilegal, bahan peledak, dan peralatan tempur ke kelompok kriminal atau daerah konflik.'
  },
  {
    id: 7,
    name: 'Illicit trafficking in stolen and other goods atau Perdagangan Barang Curian dan Barang Ilegal Lainnya',
    examples:
      'Jaringan penadah kendaraan bermotor curian lintas negara, pencurian kargo, dan penyelundupan benda purbakala atau karya seni curian.'
  },
  {
    id: 8,
    name: 'Corruption and bribery atau Korupsi dan Penyuapan',
    examples:
      'Suap proyek pemerintah, penggelapan anggaran negara (APBN/APBD), gratifikasi pejabat publik, dan pemerasan oleh aparat.'
  },
  {
    id: 9,
    name: 'Fraud atau Penipuan dan Kecurangan Keuangan',
    examples:
      'Investasi bodong (Skema Ponzi), penipuan perbankan, Business Email Compromise (BEC), dan kecurangan pengadaan barang.'
  },
  {
    id: 10,
    name: 'Counterfeiting currency atau Pemalsuan Mata Uang',
    examples:
      'Pencetakan dan pengedaran uang kertas atau uang logam palsu baik mata uang domestik maupun valuta asing.'
  },
  {
    id: 11,
    name: 'Counterfeiting and piracy of products atau Pemalsuan Produk dan Pembajakan Hak Kekayaan Intelektual',
    examples:
      'Pabrik obat-obatan palsu berbahaya, suku cadang palsu, barang mewah tiruan skala industri, dan pembajakan komersial.'
  },
  {
    id: 12,
    name: 'Environmental crime atau Kejahatan Lingkungan Hidup dan Sumber Daya Alam',
    examples:
      'Pembalakan liar (Illegal Logging), penambangan ilegal (Illegal Mining), perdagangan satwa liar dilindungi, dan penyelundupan limbah beracun.'
  },
  {
    id: 13,
    name: 'Murder, grievous bodily injury atau Pembunuhan dan Penganiayaan Berat',
    examples:
      'Pembunuhan bayaran (Contract Killing), kekerasan fisik berat demi keuntungan materi, dan kejahatan nyawa terorganisir.'
  },
  {
    id: 14,
    name: 'Kidnapping, illegal restraint and hostage-taking atau Penculikan dan Penyanderaan untuk Tebusan',
    examples:
      'Penculikan demi uang tebusan (Ransom Kidnapping), penyanderaan kru kapal, dan penyekapan ilegal.'
  },
  {
    id: 15,
    name: 'Robbery or theft atau Perampokan dan Pencurian',
    examples:
      'Perampokan bank bersenjata, pembobolan brankas, pencurian aset kripto dalam jumlah besar, dan pencurian terorganisir.'
  },
  {
    id: 16,
    name: 'Smuggling (including in relation to customs and excise duties and taxes) atau Penyelundupan Kepabeanan dan Cukai',
    examples:
      'Penyelundupan barang impor tanpa bea masuk, penyelundupan rokok atau minuman keras tanpa pita cukai, dan penghindaran pabean.'
  },
  {
    id: 17,
    name: 'Tax crimes (related to direct taxes and indirect taxes) atau Tindak Pidana Perpajakan',
    examples:
      'Penggelapan Pajak Penghasilan (PPh) dan Pajak Pertambahan Nilai (PPN), penerbitan faktur pajak fiktif, dan penyembunyian harta di luar negeri.'
  },
  {
    id: 18,
    name: 'Extortion atau Pemerasan dan Pengancaman',
    examples:
      'Pemerasan uang tutup mulut (Blackmail), pemerasan serangan siber (Ransomware), dan pengancaman pelaku usaha.'
  },
  {
    id: 19,
    name: 'Forgery atau Pemalsuan Dokumen dan Surat Berharga',
    examples:
      'Pemalsuan sertifikat tanah, paspor atau identitas palsu, akta perusahaan palsu, dan dokumen pengiriman perdagangan (Bill of Lading) palsu.'
  },
  {
    id: 20,
    name: 'Piracy atau Pembajakan Kapal di Laut Lepas',
    examples:
      'Pembajakan kapal kargo dan kapal tanker di jalur pelayaran internasional untuk meminta tebusan maupun merampas muatan.'
  },
  {
    id: 21,
    name: 'Insider trading and market manipulation atau Perdagangan Orang Dalam dan Manipulasi Pasar Modal',
    examples:
      'Menggunakan informasi rahasia perusahaan sebelum diumumkan ke publik untuk membeli saham, serta rekayasa harga saham di bursa (Pump and Dump).'
  }
];
