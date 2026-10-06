import { ObligationItem, QuizQuestion, ThresholdItem } from '../types/fatf';

export interface IdRecTranslation {
  title: string;
  essence: string;
  obligations: ObligationItem[];
  inHighlights?: string[];
  thresholds: ThresholdItem[];
  quiz: QuizQuestion;
  revisionNote?: string;
}

export const ID_RECS_1_TO_20: Record<number, IdRecTranslation> = {
  1: {
    title:
      'Assessing Risks and Applying a Risk-Based Approach (RBA) atau Menilai Risiko dan Menerapkan Pendekatan Berbasis Risiko',
    essence:
      'Negara dan lembaga keuangan terlebih dahulu memetakan area yang paling rawan kejahatan melalui National Risk Assessment (NRA) atau Penilaian Risiko Nasional, kemudian menyesuaikan tingkat pengawasan melalui Risk-Based Approach (RBA) atau Pendekatan Berbasis Risiko: area berisiko tinggi diperiksa secara mendalam, sedangkan area yang terbukti berisiko rendah dapat menerapkan prosedur yang lebih sederhana.',
    obligations: [
      {
        id: 'R1-1',
        title:
          'National Risk Assessment (NRA) atau Penilaian Risiko Nasional & Koordinasi',
        body: 'Setiap negara wajib mengidentifikasi, menilai, dan memahami risiko Money Laundering (ML) atau Pencucian Uang dan Terrorist Financing (TF) atau Pendanaan Terorisme di wilayahnya, serta menunjuk otoritas atau mekanisme untuk mengoordinasikan penilaian risiko dan alokasi sumber daya secara tepat.'
      },
      {
        id: 'R1-2',
        title:
          'Proporsionalitas: Enhanced Due Diligence (EDD) atau Pemeriksaan Mendalam vs. Simplified Due Diligence (SDD) atau Pemeriksaan Sederhana',
        body: 'Berdasarkan hasil penilaian risiko tersebut, negara wajib menerapkan Risk-Based Approach (RBA) atau Pendekatan Berbasis Risiko. Apabila risiko tergolong tinggi, lembaga keuangan wajib menerapkan langkah yang diperketat atau Enhanced Due Diligence (EDD). Apabila risiko terbukti rendah, negara dapat mengizinkan langkah yang disederhanakan atau Simplified Due Diligence (SDD), namun SDD tidak boleh diterapkan jika terdapat kecurigaan pencucian uang atau pendanaan terorisme.'
      },
      {
        id: 'R1-3',
        title:
          'Proliferation Financing (PF) Risk Assessment atau Penilaian Risiko Pendanaan Proliferasi Senjata Pemusnah Massal',
        body: 'Negara dan lembaga keuangan wajib menilai serta memitigasi risiko Proliferation Financing (PF) atau Pendanaan Proliferasi, yakni potensi pelanggaran, ketidakpatuhan, atau penghindaran terhadap kewajiban Targeted Financial Sanctions (TFS) atau Sanksi Keuangan Terarah Dewan Keamanan PBB dalam Rekomendasi 7.'
      },
      {
        id: 'R1-4',
        title:
          'Institutional Risk Assessment atau Penilaian Risiko Internal oleh Lembaga Keuangan (FI) & Profesi (DNFBP)',
        body: 'Setiap Financial Institutions (FIs) atau Penyedia Jasa Keuangan (PJK) dan Designated Non-Financial Businesses and Professions (DNFBPs) atau Profesi Non-Keuangan wajib mengidentifikasi, menilai, dan memitigasi risiko pencucian uang, pendanaan terorisme, dan proliferasi pada profil nasabah, produk, jalur distribusi, serta wilayah operasionalnya.'
      }
    ],
    inHighlights: [
      'Risk-Based Approach (RBA) mengarahkan sumber daya kepatuhan pada ancaman yang nyata, bukan sekadar pemenuhan daftar periksa administratif yang seragam.',
      'Dalam penilaian risiko Proliferation Financing (PF), tidak diperkenankan adanya penyederhanaan atau pengecualian terhadap kewajiban pembekuan sanksi PBB pada Rekomendasi 7.',
      'Hasil penilaian risiko harus diperbarui secara berkala dan dikomunikasikan kepada seluruh sektor pelapor.'
    ],
    thresholds: [],
    quiz: {
      q: 'Berdasarkan Rekomendasi 1 tentang Risk-Based Approach (RBA) atau Pendekatan Berbasis Risiko, kapan lembaga keuangan diizinkan menerapkan Simplified Due Diligence (SDD) atau Pemeriksaan Sederhana?',
      options: [
        'Ketika tingkat risikonya terbukti rendah berdasarkan penilaian risiko yang memadai dan tidak terdapat kecurigaan pencucian uang maupun pendanaan terorisme.',
        'Setiap kali nasabah telah memiliki rekening lebih dari 1 tahun.',
        'Untuk transaksi yang melibatkan daftar sanksi Proliferation Financing (PF) Rekomendasi 7.',
        'Setiap kali nilai transaksinya di bawah USD/EUR 15.000 meskipun terdapat indikasi mencurigakan.'
      ],
      answer: 0,
      explain:
        'Simplified Due Diligence (SDD) atau Pemeriksaan Sederhana hanya diizinkan apabila tingkat risikonya telah dinilai rendah dan sama sekali tidak terdapat kecurigaan TPPU/TPPT maupun keterkaitan dengan sanksi proliferasi R.7.'
    }
  },
  2: {
    title:
      'National Cooperation and Coordination atau Kerja Sama dan Koordinasi Nasional Antar-Lembaga',
    essence:
      'Kebijakan antipencucian uang nasional harus disusun berdasarkan hasil pemetaan risiko dan dijalankan secara terpadu. Financial Intelligence Unit (FIU / PPATK), Kepolisian, Kejaksaan, KPK, Pengawas Keuangan (OJK/BI), Pajak, dan Bea Cukai wajib memiliki mekanisme koordinasi operasional yang selaras dengan aturan Data Protection and Privacy (Perlindungan Data Pribadi).',
    obligations: [
      {
        id: 'R2-1',
        title:
          'National AML/CFT/CPF Policies atau Kebijakan Nasional Berbasis Risiko',
        body: 'Negara wajib memiliki kebijakan nasional pemberantasan pencucian uang, pendanaan terorisme, dan proliferasi yang didasarkan pada risiko yang teridentifikasi serta ditinjau secara berkala.'
      },
      {
        id: 'R2-2',
        title:
          'Inter-Agency Coordination Mechanism atau Mekanisme Koordinasi Kebijakan & Operasional',
        body: 'Pemerintah wajib menunjuk otoritas atau mekanisme koordinasi nasional agar pembuat kebijakan, Financial Intelligence Unit (FIU) atau PPATK, Law Enforcement Authorities (LEAs) atau Aparat Penegak Hukum, dan Supervisors (Otoritas Pengawas seperti OJK/BI) dapat bekerja sama dan bertukar informasi pada tingkat kebijakan maupun operasional.'
      },
      {
        id: 'R2-3',
        title:
          'Compatibility with Data Protection and Privacy Rules atau Keselarasan dengan Aturan Perlindungan Data Pribadi',
        body: 'Negara wajib memastikan adanya kerja sama antar-otoritas agar pelaksanaan kewajiban APU-PPT dan pendanaan proliferasi berjalan selaras (kompatibel) dengan ketentuan Perlindungan Data Pribadi dan Privasi.'
      }
    ],
    inHighlights: [
      'Melibatkan koordinasi lintas kementerian, FIU (PPATK), kepolisian, kejaksaan, KPK, bea cukai, pajak, OJK, BI, hingga pengelola registri badan hukum.',
      'Dapat dijalankan melalui satuan tugas gabungan (Joint Taskforces) dan saluran pertukaran informasi yang terjamin keamanannya.'
    ],
    thresholds: [],
    quiz: {
      q: 'Dalam Rekomendasi 2 tentang National Cooperation and Coordination (Kerja Sama Nasional), pemerintah wajib memastikan aturan APU-PPT berjalan selaras (kompatibel) dengan:',
      options: [
        'Data Protection and Privacy Rules atau Aturan Perlindungan Data Pribadi dan Privasi.',
        'Aturan rahasia bank di yurisdiksi bebas pajak.',
        'Jadwal pembagian dividen perusahaan terbuka.',
        'Peraturan perizinan bangunan daerah.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 2 mewajibkan koordinasi antar-otoritas agar ketentuan Perlindungan Data Pribadi (Privacy/Data Protection) dan kewajiban pertukaran data APU-PPT tidak saling bertentangan.'
    }
  },
  3: {
    title:
      'Money Laundering Offence atau Tindak Pidana Pencucian Uang (TPPU)',
    essence:
      'Negara wajib menetapkan pencucian uang sebagai tindak pidana berdasarkan Vienna Convention (Konvensi Wina 1988) dan Palermo Convention (Konvensi Palermo 2000), dengan cakupan seluruh kejahatan serius yang sekurang-kurangnya meliputi 21 Designated Categories of Offences atau 21 Kategori Tindak Pidana Asal.',
    obligations: [
      {
        id: 'R3-1',
        title:
          'Criminalisation under Vienna & Palermo Conventions atau Kriminalisasi Berdasarkan Konvensi PBB',
        body: 'Negara wajib memidanakan perbuatan mengonversi, mentransfer, menyembunyikan, menyamarkan asal-usul, atau menguasai harta kekayaan yang diketahui berasal dari tindak pidana sesuai standar Konvensi Wina 1988 dan Konvensi Palermo 2000.'
      },
      {
        id: 'R3-2',
        title:
          'Predicate Offences (21 Designated Categories) atau Cakupan 21 Kategori Tindak Pidana Asal',
        body: 'Tindak pidana pencucian uang wajib diterapkan terhadap hasil dari seluruh kejahatan serius, yang minimal mencakup 21 kategori tindak pidana asal (korupsi, narkotika, penipuan, perpajakan, penyelundupan, kejahatan lingkungan, perdagangan orang, dan lainnya), termasuk apabila tindak pidana asalnya dilakukan di negara lain.'
      }
    ],
    inHighlights: [
      'Bagi negara yang menerapkan pendekatan ambang batas ancaman pidana (Threshold Approach), tindak pidana asal wajib mencakup seluruh kejahatan dengan ancaman penjara maksimal lebih dari 1 tahun (atau minimal lebih dari 6 bulan).',
      'Pembuktian pencucian uang tidak mensyaratkan adanya putusan pengadilan terlebih dahulu atas tindak pidana asalnya (No Prior Conviction Required).',
      'Pertanggungjawaban hukum berlaku bagi orang perseorangan (Natural Persons) maupun korporasi (Legal Persons).'
    ],
    thresholds: [
      {
        value: 'Ancaman > 1 Tahun (atau Min > 6 Bulan)',
        context:
          'Ambang ancaman pidana penjara apabila negara menggunakan Threshold Approach untuk menetapkan Predicate Offences (Tindak Pidana Asal)'
      },
      {
        value: '21 Kategori Kejahatan',
        context:
          'Designated Categories of Offences (Kategori Tindak Pidana Asal Wajib dalam Kamus FATF)'
      }
    ],
    quiz: {
      q: 'Menurut Interpretive Note Rekomendasi 3 tentang Money Laundering Offence (Tindak Pidana Pencucian Uang), apakah penuntut umum harus menunggu putusan pengadilan atas kejahatan asalnya (Predicate Offence) sebelum dapat menuntut perkara pencucian uang?',
      options: [
        'Tidak perlu; pembuktian pencucian uang tidak boleh mensyaratkan adanya putusan pemidanaan terlebih dahulu atas tindak pidana asalnya.',
        'Wajib menunggu putusan kasasi Mahkamah Agung atas kejahatan asalnya.',
        'Hanya dapat dilakukan tanpa putusan awal apabila nilainya di atas USD 10 juta.',
        'Hanya berlaku untuk perkara narkotika.'
      ],
      answer: 0,
      explain:
        'Standar FATF menegaskan bahwa penuntutan Money Laundering (TPPU) dapat dilakukan berdasarkan bukti keadaan yang objektif tanpa harus menunggu putusan pengadilan atas tindak pidana asalnya.'
    }
  },
  4: {
    title:
      'Confiscation and Provisional Measures atau Perampasan Aset dan Tindakan Sementara (Pembekuan & Penyitaan)',
    essence:
      'Negara wajib memiliki kerangka hukum untuk melakukan Freeze (pembekuan), Seize (penyitaan), dan Confiscate (perampasan permanen untuk negara) atas hasil dan alat kejahatan, termasuk melalui Non-Conviction Based Confiscation (NCBF) atau Perampasan Aset Tanpa Pemidanaan apabila pelaku meninggal dunia atau melarikan diri.',
    obligations: [
      {
        id: 'R4-1',
        title:
          'Provisional Measures (Freezing and Seizing) atau Tindakan Sementara Pembekuan & Penyitaan Cepat',
        body: 'Otoritas berwenang wajib dapat membekukan dan menyita aset yang diduga hasil kejahatan secara cepat dan Ex Parte (tanpa pemberitahuan awal kepada pemiliknya) guna mencegah pemindahan atau pengalihan aset.'
      },
      {
        id: 'R4-2',
        title:
          'Confiscation of Proceeds, Instrumentalities & Corresponding Value atau Perampasan Hasil, Alat Kejahatan & Aset Senilai',
        body: 'Negara wajib memiliki kewenangan merampas harta hasil kejahatan (baik secara langsung maupun yang telah diubah bentuknya), alat yang digunakan dalam kejahatan, maupun aset lain milik pelaku yang nilainya setara (Value-Based Confiscation).'
      },
      {
        id: 'R4-3',
        title:
          'Non-Conviction Based Confiscation (NCBF) atau Perampasan Aset Tanpa Pemidanaan',
        body: 'Apabila pelaku meninggal dunia, melarikan diri, tidak hadir, atau tidak dapat dituntut secara pidana, negara wajib memiliki mekanisme hukum untuk merampas aset hasil kejahatan melalui proses pengadilan tanpa menunggu putusan pemidanaan.'
      }
    ],
    inHighlights: [
      'Revisi Rekomendasi 4 mengharuskan negara menetapkan Asset Recovery (Pemulihan Aset) sebagai prioritas kebijakan nasional.',
      'Mencakup kewenangan membatalkan pengalihan aset beriktikad buruk kepada pihak ketiga yang bertujuan menghambat penyitaan.',
      'Negara wajib memiliki mekanisme pengelolaan aset sitaan (Asset Management) agar nilai ekonomis barang sitaan tetap terjaga.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apa tujuan dari mekanisme Non-Conviction Based Confiscation (NCBF) atau Perampasan Aset Tanpa Pemidanaan pada Rekomendasi 4?',
      options: [
        'Memungkinkan pengadilan merampas harta hasil kejahatan untuk negara ketika pelakunya meninggal dunia, melarikan diri (buron), atau tidak dapat dituntut secara pidana.',
        'Mengizinkan bank mengambil alih tabungan nasabah tanpa proses hukum.',
        'Mengganti hukuman penjara dengan denda administratif ringan.',
        'Hanya digunakan untuk barang temuan di pelabuhan.'
      ],
      answer: 0,
      explain:
        'Non-Conviction Based Confiscation (NCBF) memastikan bahwa aset hasil kejahatan tetap dapat dirampas melalui putusan pengadilan meskipun tersangkanya meninggal dunia atau melarikan diri.'
    }
  },
  5: {
    title:
      'Terrorist Financing Offence atau Tindak Pidana Pendanaan Terorisme (TPPT)',
    essence:
      'Negara wajib memidanakan penyediaan atau pengumpulan dana untuk Terrorist Acts (Aksi Terorisme), Terrorist Organisations (Organisasi Teroris), maupun Individual Terrorists (Teroris Individu), baik dana tersebut berasal dari sumber legal maupun ilegal, dan meskipun belum terkait dengan satu aksi serangan teror tertentu.',
    obligations: [
      {
        id: 'R5-1',
        title:
          'Criminalisation of Terrorist Financing atau Kriminalisasi Pendanaan Terorisme sesuai Konvensi PBB 1999',
        body: 'Negara wajib memidanakan setiap orang yang dengan sengaja menyediakan atau mengumpulkan dana maupun aset dengan niat atau pengetahuan bahwa dana tersebut akan digunakan untuk aksi teroris, organisasi teroris, atau teroris individu.'
      },
      {
        id: 'R5-2',
        title:
          'No Link to a Specific Terrorist Act Required & Foreign Terrorist Fighters (FTFs)',
        body: 'Tindak pidana pendanaan terorisme tetap berlaku meskipun dana tersebut tidak dikaitkan dengan satu aksi serangan teror spesifik, serta wajib mencakup pembiayaan perjalanan dan pelatihan Foreign Terrorist Fighters (FTFs) atau Teroris Lintas Negara.'
      }
    ],
    inHighlights: [
      'Pendanaan terorisme wajib ditetapkan sebagai salah satu Predicate Offences (Tindak Pidana Asal) dari pencucian uang.',
      'Berlaku atas dana atau aset dari sumber yang sah (seperti gaji atau donasi) maupun sumber tidak sah, serta tetap dapat dipidana meskipun aksi teror direncanakan di negara lain.'
    ],
    thresholds: [],
    quiz: {
      q: 'Berdasarkan Rekomendasi 5 tentang Terrorist Financing Offence (Tindak Pidana Pendanaan Terorisme), pernyataan manakah yang tepat?',
      options: [
        'Membiayai organisasi teroris atau perjalanan Foreign Terrorist Fighters (FTFs) merupakan tindak pidana meskipun dananya berasal dari sumber legal dan belum dikaitkan dengan satu serangan teror tertentu.',
        'Pendanaan terorisme baru dapat dipidana apabila aksi serangan telah terjadi.',
        'Dana yang berasal dari penghasilan pribadi yang sah dikecualikan dari delik pendanaan terorisme.',
        'Hanya pembelian senjata api yang termasuk pendanaan terorisme, sedangkan biaya perjalanan tidak termasuk.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 5 menegaskan bahwa penyediaan dana untuk keperluan apa pun kepada teroris individu atau organisasi teroris merupakan tindak pidana tanpa harus menunggu terjadinya serangan.'
    }
  },
  6: {
    title:
      'Targeted Financial Sanctions Related to Terrorism and Terrorist Financing atau Sanksi Keuangan Terarah Terkait Terorisme',
    essence:
      'Ketika individu atau entitas ditetapkan dalam daftar sanksi teroris Dewan Keamanan PBB (UNSCR 1267) atau daftar teroris nasional (UNSCR 1373 / DTTOT), seluruh pihak wajib membekukan asetnya Without Delay (Tanpa Penundaan, idealnya dalam hitungan jam) dengan tetap memperhatikan Humanitarian Exemptions atau Pengecualian Bantuan Kemanusiaan PBB.',
    obligations: [
      {
        id: 'R6-1',
        title:
          'Two Sanctions Regimes: UNSCR 1267/1988/1989 (Daftar PBB) & UNSCR 1373 (Daftar Nasional / DTTOT)',
        body: 'Negara wajib memiliki mekanisme pelaksanaan sanksi berdasarkan dua rezim: (1) Resolusi Dewan Keamanan PBB 1267/1989 dan 1988 terhadap jaringan Al-Qaida, ISIL (Da’esh), dan pihak terafiliasi; serta (2) Resolusi PBB 1373 untuk penetapan daftar teroris nasional maupun permintaan dari negara lain (di Indonesia: DTTOT).'
      },
      {
        id: 'R6-2',
        title:
          'Freeze Without Delay & Ex Parte atau Pembekuan Tanpa Penundaan (Dalam Hitungan Jam) dan Tanpa Pemberitahuan Awal',
        body: 'Seluruh orang perseorangan dan entitas di dalam negeri wajib membekukan dana atau aset pihak yang masuk daftar sanksi Without Delay (tanpa penundaan, idealnya dalam hitungan jam) secara Ex Parte (tanpa pemberitahuan awal kepada target), serta dilarang menyediakan dana atau layanan keuangan bagi mereka.'
      },
      {
        id: 'R6-3',
        title:
          'Humanitarian Exemptions (Pembaruan Juni 2026) atau Pengecualian Bantuan Kemanusiaan DK PBB',
        body: 'Sesuai pembaruan Interpretive Note R.6 (Juni 2026) yang mengadopsi Resolusi DK PBB 2664, 2761, dan 2615, pelaksanaan pembekuan sanksi wajib menghormati pengecualian penyaluran bantuan kemanusiaan dan pemenuhan kebutuhan dasar manusia oleh organisasi kemanusiaan yang ditetapkan PBB.'
      }
    ],
    inHighlights: [
      'Frasa "Without Delay" dalam Rekomendasi 6 bermakna idealnya dalam hitungan jam sejak suatu nama ditetapkan dalam daftar sanksi.',
      'Mencakup seluruh aset yang dimiliki atau dikendalikan secara langsung maupun tidak langsung oleh pihak yang dikenai sanksi.',
      'Negara wajib menyediakan prosedur resmi untuk Delisting (penghapusan nama dari daftar) dan pencairan dana bagi pihak yang terkena kesamaan nama (False Positive).'
    ],
    thresholds: [
      {
        value: 'Without Delay (Hitungan Jam)',
        context:
          'Standar waktu pembekuan aset sejak nama ditetapkan dalam daftar sanksi teroris PBB atau nasional'
      }
    ],
    quiz: {
      q: 'Apa makna istilah "Without Delay" (Tanpa Penundaan) dalam pelaksanaan Targeted Financial Sanctions (TFS) pada Rekomendasi 6?',
      options: [
        'Idealnya dalam hitungan jam sejak suatu nama ditetapkan oleh Dewan Keamanan PBB atau otoritas nasional, tanpa memberi tahu target terlebih dahulu.',
        'Dalam waktu 30 hari kerja setelah memperoleh penetapan pengadilan negeri.',
        'Setelah bank menghubungi nasabah untuk meminta konfirmasi.',
        'Hanya berlaku untuk rekening dengan saldo di atas USD 100.000.'
      ],
      answer: 0,
      explain:
        'Dalam standar FATF, "Without Delay" berarti idealnya dalam hitungan jam agar dana tidak sempat ditarik atau dipindahkan sebelum dibekukan.'
    }
  },
  7: {
    title:
      'Targeted Financial Sanctions Related to Proliferation atau Sanksi Keuangan Terarah Terkait Proliferasi Senjata Pemusnah Massal',
    essence:
      'Negara wajib melaksanakan pembekuan aset Without Delay (tanpa penundaan, dalam hitungan jam) terhadap individu, perusahaan perantara, atau kapal yang ditetapkan dalam resolusi Dewan Keamanan PBB terkait pencegahan dan penghentian Proliferation Financing (PF) atas Weapons of Mass Destruction (WMD) atau Senjata Pemusnah Massal.',
    obligations: [
      {
        id: 'R7-1',
        title:
          'Freeze Without Delay under UNSC Proliferation Resolutions atau Pembekuan Tanpa Tunda Sesuai Resolusi DK PBB',
        body: 'Negara wajib mengimplementasikan resolusi Dewan Keamanan PBB yang mengharuskan seluruh pihak membekukan Without Delay (tanpa penundaan) dana atau aset milik individu maupun entitas yang ditetapkan terlibat dalam Proliferation Financing (PF) atau Pendanaan Proliferasi Senjata Pemusnah Massal.'
      },
      {
        id: 'R7-2',
        title:
          'Broad Asset & Ownership Coverage atau Cakupan Kepemilikan dan Kendali Tidak Langsung',
        body: 'Kewajiban pembekuan berlaku atas seluruh dana atau aset yang dimiliki atau dikendalikan secara langsung maupun tidak langsung oleh pihak yang dikenai sanksi (termasuk perusahaan cangkang dan kapal perantara), serta mencakup bunga atau imbal hasil yang timbul dari aset tersebut.'
      }
    ],
    inHighlights: [
      'Daftar sanksi pada Rekomendasi 7 bersumber dari penetapan Dewan Keamanan PBB terkait rezim non-proliferasi.',
      'Lembaga keuangan dapat mengkreditkan bunga atau pembayaran atas kontrak yang dibuat sebelum tanggal penetapan sanksi ke dalam rekening yang dibekukan, sepanjang dana tambahan tersebut ikut langsung dibekukan.'
    ],
    thresholds: [
      {
        value: 'Without Delay (Hitungan Jam)',
        context:
          'Standar waktu pembekuan aset sejak penetapan daftar sanksi proliferasi Dewan Keamanan PBB'
      }
    ],
    quiz: {
      q: 'Sasaran utama dari Targeted Financial Sanctions (TFS) pada Rekomendasi 7 adalah:',
      options: [
        'Individu dan entitas yang ditetapkan oleh Dewan Keamanan PBB karena terkait pendanaan dan pengadaan Weapons of Mass Destruction (WMD) atau Senjata Pemusnah Massal.',
        'Pelanggar peraturan lalu lintas.',
        'Seluruh pedagang valuta asing ritel.',
        'Perusahaan yang terlambat menyampaikan laporan pajak tahunan.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 7 ditujukan untuk memutus aliran dana dan layanan keuangan bagi jaringan proliferasi senjata pemusnah massal (nuklir, kimia, dan biologi) yang ditetapkan oleh Dewan Keamanan PBB.'
    }
  },
  8: {
    title:
      'Non-Profit Organisations (NPOs) atau Pelindungan Organisasi Nirlaba dan Yayasan Amal dari Penyalahgunaan Pendanaan Terorisme',
    essence:
      'Negara wajib mengidentifikasi kategori Non-Profit Organisations (NPOs) atau Organisasi Nirlaba/Yayasan yang berdasarkan karakteristiknya berisiko disalahgunakan untuk Terrorist Financing (TF) atau Pendanaan Terorisme, lalu menerapkan pengawasan yang terfokus, proporsional, dan berbasis risiko tanpa menghambat kegiatan kemanusiaan yang sah.',
    obligations: [
      {
        id: 'R8-1',
        title:
          'Identify the Subset of NPOs at Risk atau Mengidentifikasi Kelompok NPO yang Berisiko',
        body: 'Negara wajib mengkaji sektor organisasinya secara berkala untuk mengidentifikasi organisasi yang masuk dalam definisi FATF tentang Non-Profit Organisations (NPOs) serta menilai kelompok mana yang berisiko dimanfaatkan oleh jaringan pendanaan terorisme.'
      },
      {
        id: 'R8-2',
        title:
          'Focused, Proportionate, and Risk-Based Measures atau Langkah Pengawasan yang Terfokus, Proporsional & Berbasis Risiko',
        body: 'Terhadap NPO yang teridentifikasi berisiko, negara wajib menerapkan langkah pembinaan, transparansi tata kelola keuangan, serta pengawasan yang terfokus dan proporsional tanpa mempersulit maupun menghentikan aktivitas amal dan bantuan kemanusiaan yang sah.'
      }
    ],
    inHighlights: [
      'Revisi Rekomendasi 8 (November 2023) menegaskan bahwa pengawasan NPO tidak boleh dilakukan secara pukul rata dan melarang penutupan akses perbankan secara sepihak (De-risking) terhadap lembaga amal yang sah.',
      'Tingkat pengawasan harus sepadan dengan profil risiko nyata dari masing-masing NPO.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apa prinsip utama dalam revisi Rekomendasi 8 mengenai Non-Profit Organisations (NPOs) atau Organisasi Nirlaba/Yayasan?',
      options: [
        'Menerapkan langkah yang terfokus, proporsional, dan berbasis risiko (Focused, Proportionate, and Risk-Based) terhadap NPO yang berisiko disalahgunakan untuk pendanaan terorisme, tanpa menghambat kegiatan amal yang sah.',
        'Melarang seluruh yayasan amal menggunakan rekening perbankan.',
        'Menetapkan seluruh organisasi nirlaba sebagai entitas berisiko tinggi.',
        'Membebaskan seluruh yayasan dari kewajiban pencatatan laporan keuangan.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 8 menekankan pengawasan berbasis risiko yang terfokus pada NPO yang benar-benar berisiko, sembari melindungi kelancaran aktivitas sosial dan kemanusiaan yang sah.'
    }
  },
  9: {
    title:
      'Financial Institution Secrecy Laws atau Undang-Undang Kerahasiaan Lembaga Keuangan (Rahasia Bank)',
    essence:
      'Negara wajib memastikan bahwa Financial Institution Secrecy Laws atau Undang-Undang Kerahasiaan Lembaga Keuangan (Rahasia Bank) tidak menghalangi pelaksanaan seluruh Rekomendasi FATF, baik dalam hal akses data oleh otoritas berwenang maupun pertukaran informasi kepatuhan antar-lembaga keuangan.',
    obligations: [
      {
        id: 'R9-1',
        title:
          'No Secrecy Impediment to FATF Recommendations atau Rahasia Bank Tidak Boleh Menghalangi Standar FATF',
        body: 'Undang-undang rahasia bank tidak boleh menghambat pelaksanaan kewajiban dalam Rekomendasi FATF, baik ketika otoritas berwenang (FIU/PPATK, Pengawas, Penegak Hukum) meminta dokumen transaksi, maupun ketika lembaga keuangan saling berbagi informasi yang dipersyaratkan untuk Correspondent Banking (R.13), Wire Transfers (R.16), Third-Party Reliance (R.17), atau Group-Wide Programmes (R.18).'
      }
    ],
    inHighlights: [
      'Tanpa pemenuhan Rekomendasi 9, kewajiban pelaporan mencurigakan dan pemeriksaan oleh otoritas pengawas di Bagian D dan Bagian F tidak dapat berjalan efektif.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apa ketentuan pokok dalam Rekomendasi 9 mengenai Financial Institution Secrecy Laws atau Undang-Undang Rahasia Bank?',
      options: [
        'Undang-undang rahasia bank tidak boleh menghalangi pelaksanaan Rekomendasi FATF, baik akses informasi oleh otoritas berwenang maupun pertukaran data kepatuhan antar-lembaga keuangan.',
        'Bank wajib mengumumkan saldo seluruh nasabahnya kepada masyarakat umum.',
        'Bank dapat menolak permintaan data dari PPATK dan OJK dengan alasan rahasia bank.',
        'Rahasia bank hanya berlaku bagi rekening dengan saldo di atas Rp 10 miliar.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 9 memastikan bahwa ketentuan rahasia bank dikecualikan secara hukum untuk kepentingan pengawasan, analisis intelijen keuangan (PPATK), penegakan hukum, dan kepatuhan standar FATF.'
    }
  },
  10: {
    title:
      'Customer Due Diligence (CDD) atau Uji Tuntas Nasabah (Prinsip Mengenal Pengguna Jasa)',
    essence:
      'Lembaga keuangan dilarang memelihara rekening anonim atau menggunakan nama fiktif, serta wajib menjalankan empat tahapan Customer Due Diligence (CDD) atau Uji Tuntas Nasabah: mengidentifikasi dan memverifikasi nasabah, mengidentifikasi Beneficial Owner (BO) atau Pemilik Manfaat Sebenarnya, memahami tujuan hubungan usaha, dan melakukan pemantauan transaksi secara berkelanjutan.',
    obligations: [
      {
        id: 'R10-1',
        title:
          'No Anonymous Accounts & When CDD is Required (Larangan Rekening Anonim & 4 Kondisi Wajib CDD)',
        body: 'Lembaga keuangan dilarang membuka rekening anonim atau rekening dengan nama samaran. Prosedur CDD wajib dilakukan saat: (1) Membuka hubungan usaha baru, (2) Melakukan Occasional Transactions (Transaksi Tidak Berkala) di atas USD/EUR 15.000 atau Wire Transfer di atas USD/EUR 1.000, (3) Terdapat kecurigaan TPPU/TPPT, atau (4) Terdapat keraguan atas kebenaran data identitas nasabah.'
      },
      {
        id: 'R10-2',
        title:
          'Four Core Elements of CDD atau Empat Tahapan Utama Pemeriksaan CDD',
        body: 'Empat langkah CDD meliputi: (a) Mengidentifikasi dan memverifikasi identitas nasabah menggunakan dokumen sumber yang independen; (b) Mengidentifikasi Beneficial Owner (BO) atau Pemilik Manfaat Sebenarnya dan memverifikasi orang perseorangan di balik badan hukum; (c) Memahami tujuan dan sifat hubungan usaha; serta (d) Melakukan Ongoing Due Diligence (Pemantauan Berkelanjutan) atas transaksi sepanjang hubungan usaha.'
      },
      {
        id: 'R10-3',
        title:
          'Failure to Complete CDD & Risk of Tipping-Off (Tindakan Apabila CDD Tidak Dapat Diselesaikan)',
        body: 'Apabila lembaga keuangan tidak dapat menyelesaikan prosedur CDD, lembaga keuangan wajib menolak membuka rekening, menolak memproses transaksi, atau mengakhiri hubungan usaha, serta mempertimbangkan pelaporan STR/LTKM ke PPATK. Apabila pelaksanaan CDD dikhawatirkan akan membocorkan kecurigaan (Tipping-Off) kepada nasabah, lembaga keuangan diizinkan menghentikan proses CDD dan wajib segera menyampaikan laporan STR/LTKM kepada PPATK.'
      }
    ],
    inHighlights: [
      'Untuk nasabah berbentuk badan hukum (Legal Persons), verifikasi Beneficial Owner dilakukan secara berjenjang: mengidentifikasi orang perseorangan pemegang saham pengendali (misalnya >= 25%), pihak yang mengendalikan melalui cara lain, atau pejabat manajemen senior apabila keduanya tidak ditemukan.',
      'Pemantauan berkelanjutan (Ongoing Due Diligence) memastikan transaksi yang berjalan tetap sesuai dengan profil usaha dan sumber dana nasabah.'
    ],
    thresholds: [
      {
        value: 'USD/EUR 15.000',
        context:
          'Ambang batas Occasional Transactions (Transaksi Tidak Berkala, baik tunggal maupun beberapa transaksi yang tampak saling terkait) yang wajib dikenai CDD'
      },
      {
        value: 'USD/EUR 1.000',
        context:
          'Ambang batas transaksi Wire Transfer (Transfer Dana sesuai R.16) yang wajib diverifikasi identitasnya'
      }
    ],
    quiz: {
      q: 'Berdasarkan Interpretive Note Rekomendasi 10 tentang Customer Due Diligence (CDD), apa yang harus dilakukan bank apabila saat memeriksa nasabah yang mencurigakan, bank khawatir pertanyaan lebih lanjut justru akan membocorkan kecurigaan (Tipping-Off) kepada nasabah tersebut?',
      options: [
        'Bank diizinkan untuk tidak melanjutkan proses CDD tersebut, dan wajib segera mengirimkan Suspicious Transaction Report (STR / LTKM) kepada PPATK (FIU).',
        'Petugas bank memberi tahu nasabah bahwa rekeningnya sedang dilaporkan ke PPATK.',
        'Bank tetap memproses transaksi tanpa melapor.',
        'Bank memberikan fasilitas kredit tambahan kepada nasabah tersebut.'
      ],
      answer: 0,
      explain:
        'Sesuai INR.10, apabila melanjutkan prosedur CDD berisiko menimbulkan Tipping-Off kepada nasabah yang dicurigai, bank diizinkan tidak melanjutkan CDD dan wajib segera menyampaikan laporan STR/LTKM ke PPATK.'
    }
  },
  11: {
    title:
      'Record-Keeping atau Kewajiban Penyimpanan Dokumen dan Catatan Transaksi (Minimal 5 Tahun)',
    essence:
      'Lembaga keuangan wajib menyimpan seluruh catatan transaksi domestik maupun internasional serta berkas identitas Customer Due Diligence (CDD) selama minimal 5 tahun agar dapat diserahkan secara cepat kepada otoritas berwenang guna merekonstruksi transaksi individual.',
    obligations: [
      {
        id: 'R11-1',
        title:
          '5-Year Transaction Record Retention atau Penyimpanan Catatan Transaksi Minimal 5 Tahun',
        body: 'Lembaga keuangan wajib menyimpan seluruh catatan transaksi domestik dan internasional selama sekurang-kurangnya 5 tahun sejak tanggal transaksi dilaksanakan. Catatan tersebut harus cukup rinci sehingga setiap transaksi individual dapat direkonstruksi sebagai alat bukti di pengadilan.'
      },
      {
        id: 'R11-2',
        title:
          '5-Year CDD & Account Files Retention After Relationship Ends (5 Tahun Sejak Hubungan Usaha Berakhir)',
        body: 'Seluruh dokumen yang diperoleh melalui proses CDD (salinan KTP, paspor, akta perusahaan, data Beneficial Owner), berkas rekening, korespondensi bisnis, serta hasil analisis internal wajib disimpan selama minimal 5 tahun setelah hubungan usaha berakhir (setelah penutupan rekening) atau setelah tanggal transaksi tidak berkala.'
      },
      {
        id: 'R11-3',
        title:
          'Swift Availability to Domestic Authorities atau Ketersediaan Cepat bagi Otoritas Domestik',
        body: 'Seluruh arsip transaksi dan dokumen CDD wajib tersedia secara cepat (Swiftly) bagi otoritas berwenang di dalam negeri (PPATK, OJK/BI, dan aparat penegak hukum) sesuai kewenangannya.'
      }
    ],
    inHighlights: [
      'Titik awal perhitungan 5 tahun berbeda antara dua jenis dokumen: catatan transaksi dihitung 5 tahun sejak tanggal transaksi dilakukan, sedangkan dokumen identitas/CDD dihitung 5 tahun sejak hubungan usaha atau rekening berakhir.'
    ],
    thresholds: [
      {
        value: 'Minimal 5 Tahun',
        context:
          'Masa simpan wajib catatan transaksi (sejak tanggal transaksi) & berkas identitas CDD (sejak hubungan usaha berakhir)'
      }
    ],
    quiz: {
      q: 'Seorang nasabah membuka rekening di Bank A pada tahun 2018 dan menutup rekeningnya secara resmi pada tahun 2026. Berdasarkan Rekomendasi 11 (Record-Keeping), sampai tahun berapakah Bank A wajib menyimpan berkas identitas CDD nasabah tersebut?',
      options: [
        'Minimal sampai tahun 2031 (yaitu 5 tahun setelah hubungan usaha berakhir pada tahun 2026).',
        'Hanya sampai tahun 2023 (5 tahun sejak tanggal pembukaan rekening).',
        'Dapat langsung dihapus pada hari penutupan rekening di tahun 2026.',
        'Hanya wajib disimpan selama 6 bulan.'
      ],
      answer: 0,
      explain:
        'Untuk dokumen CDD dan berkas rekening, masa simpan minimal 5 tahun dihitung sejak hubungan usaha berakhir (2026 + 5 = 2031).'
    }
  },
  12: {
    title:
      'Politically Exposed Persons (PEPs) atau Pemeriksaan Mendalam terhadap Pejabat Publik Berisiko Tinggi, Keluarga & Koleganya',
    essence:
      'Lembaga keuangan wajib menerapkan sistem manajemen risiko dan prosedur Enhanced Due Diligence (EDD) terhadap Foreign PEPs (PEP Asing) serta Domestic PEPs (PEP Domestik) dan International Organisation PEPs yang berisiko tinggi—termasuk anggota keluarga dan pihak yang terasosiasi dekat—dengan memperoleh persetujuan Manajemen Senior, menelusuri sumber kekayaan dan sumber dana, serta memantau rekening secara diperketat.',
    obligations: [
      {
        id: 'R12-1',
        title:
          'Mandatory EDD for Foreign PEPs atau Pemeriksaan Mendalam Wajib bagi PEP Asing',
        body: 'Terhadap Foreign PEPs (pejabat publik dari negara asing), selain menjalankan CDD normal, lembaga keuangan wajib: (a) Memiliki sistem manajemen risiko untuk menentukan apakah nasabah atau Beneficial Owner-nya adalah PEP; (b) Memperoleh persetujuan Senior Management (Manajemen Senior) untuk membuka atau melanjutkan hubungan usaha; (c) Mengambil langkah yang wajar untuk menetapkan Source of Wealth (Sumber Kekayaan) dan Source of Funds (Sumber Dana); serta (d) Melakukan pemantauan hubungan usaha secara diperketat.'
      },
      {
        id: 'R12-2',
        title:
          'Domestic PEPs & International Organisation PEPs (PEP Domestik & Organisasi Internasional)',
        body: 'Terhadap Domestic PEPs (pejabat publik di dalam negeri) dan pejabat International Organisations, lembaga keuangan wajib mengambil langkah wajar untuk mengidentifikasi status mereka dan—apabila hubungan usahanya dinilai berisiko tinggi—menerapkan langkah-langkah EDD sebagaimana berlaku pada PEP Asing.'
      },
      {
        id: 'R12-3',
        title:
          'Family Members and Close Associates atau Anggota Keluarga & Pihak yang Terasosiasi Dekat',
        body: 'Seluruh ketentuan pemeriksaan bagi kategori PEP di atas wajib diterapkan pula terhadap Family Members (anggota keluarga dekat) dan Close Associates (rekan bisnis dekat atau pihak yang terasosiasi erat dengan PEP tersebut).'
      }
    ],
    inHighlights: [
      'Untuk polis Life Insurance (Asuransi Jiwa), perusahaan asuransi wajib mengidentifikasi apakah penerima manfaat (Beneficiary) merupakan PEP paling lambat pada saat pembayaran klaim.'
    ],
    thresholds: [],
    quiz: {
      q: 'Mengapa Rekomendasi 12 mewajibkan ketentuan pemeriksaan Politically Exposed Persons (PEPs) diterapkan juga terhadap Family Members (Anggota Keluarga) dan Close Associates (Rekan Dekat)?',
      options: [
        'Karena pelaku korupsi kerap menggunakan rekening anggota keluarga atau rekan dekatnya untuk menampung dan menyamarkan hasil tindak pidana.',
        'Karena seluruh anggota keluarga pejabat berstatus sebagai aparatur sipil negara.',
        'Untuk keperluan penawaran produk kredit konsumtif.',
        'Hanya berlaku apabila anggota keluarga tersebut berdomisili di luar negeri.'
      ],
      answer: 0,
      explain:
        'Pelaku korupsi jarang menyimpan dana suap di rekening pribadinya, sehingga Rekomendasi 12 mencakup anggota keluarga dan pihak yang terasosiasi dekat dengan PEP.'
    }
  },
  13: {
    title:
      'Correspondent Banking atau Pengamanan Hubungan Perbankan Koresponden Lintas Negara',
    essence:
      'Dalam menjalin hubungan Correspondent Banking lintas batas, bank wajib meneliti profil bisnis, reputasi pengawasan, serta pengendalian APU-PPT dari bank mitranya (Respondent Bank), memperoleh persetujuan Manajemen Senior, serta dilarang menjalin atau melanjutkan hubungan dengan Shell Bank (Bank Cangkang).',
    obligations: [
      {
        id: 'R13-1',
        title:
          'Vetting Respondent Banks atau Pemeriksaan atas Bank Mitra Luar Negeri',
        body: 'Sebelum membuka hubungan Correspondent Banking lintas batas, selain melakukan CDD normal, bank wajib mengumpulkan informasi yang cukup mengenai kegiatan bisnis bank responden, menilai reputasi dan mutu pengawasannya (termasuk apakah pernah dikenai penyidikan atau sanksi APU-PPT), menilai kecukupan kontrol APU-PPT bank responden, memperoleh persetujuan Manajemen Senior, dan mendokumentasikan tanggung jawab masing-masing lembaga.'
      },
      {
        id: 'R13-2',
        title:
          'Payable-Through Accounts (PTAs) & Absolute Ban on Shell Banks (Larangan Bank Cangkang)',
        body: 'Apabila hubungan koresponden mencakup Payable-Through Accounts (PTA), bank koresponden wajib memastikan bahwa bank responden telah menjalankan CDD terhadap nasabah yang memiliki akses langsung ke rekening tersebut. Selain itu, lembaga keuangan dilarang menjalin atau melanjutkan hubungan perbankan koresponden dengan Shell Bank (Bank Cangkang).'
      }
    ],
    inHighlights: [
      'Bank juga wajib memastikan bahwa bank respondennya di luar negeri tidak mengizinkan rekeningnya digunakan oleh Shell Bank.'
    ],
    thresholds: [],
    quiz: {
      q: 'Dalam hubungan Correspondent Banking (Perbankan Koresponden) menurut Rekomendasi 13, ketentuan apa yang berlaku terhadap Shell Bank (Bank Cangkang)?',
      options: [
        'Bank dilarang memulai atau melanjutkan hubungan perbankan koresponden dengan Shell Bank, serta wajib memastikan bank mitra tidak mengizinkan rekeningnya digunakan oleh Shell Bank.',
        'Boleh menjalin hubungan koresponden dengan mengenakan biaya tambahan.',
        'Hanya diizinkan untuk transaksi di bawah USD 10.000.',
        'Cukup meminta surat pernyataan dari pengurus Shell Bank.'
      ],
      answer: 0,
      explain:
        'Shell Bank (bank tanpa kehadiran dan manajemen fisik di negara tempatnya didirikan serta tidak tergabung dalam grup keuangan teregulasi) dilarang secara mutlak dalam hubungan perbankan koresponden.'
    }
  },
  14: {
    title:
      'Money or Value Transfer Services (MVTS) atau Pengaturan & Pengawasan Penyedia Jasa Transfer Uang (Remitansi)',
    essence:
      'Setiap penyelenggara Money or Value Transfer Services (MVTS) atau Penyedia Jasa Transfer Uang/Remitansi wajib memiliki izin resmi (Licensed) atau terdaftar (Registered), tunduk pada pengawasan APU-PPT, memelihara daftar agennya, serta negara wajib menindak penyelenggara transfer dana ilegal tanpa izin.',
    obligations: [
      {
        id: 'R14-1',
        title:
          'Mandatory Licensing or Registration & Sanctioning Illegal MVTS (Kewajiban Izin & Penindakan Remitansi Ilegal)',
        body: 'Negara wajib memastikan bahwa setiap orang atau badan usaha yang menyediakan layanan Money or Value Transfer Services (MVTS) memiliki izin resmi atau terdaftar pada otoritas berwenang, serta wajib mengidentifikasi dan menjatuhkan sanksi terhadap pihak yang menyelenggarakan layanan MVTS tanpa izin.'
      },
      {
        id: 'R14-2',
        title:
          'Oversight of MVTS Agents atau Pengawasan terhadap Agen Pengiriman Uang',
        body: 'Penyelenggara MVTS yang menggunakan agen wajib memelihara daftar terkini seluruh agennya yang dapat diakses oleh otoritas berwenang, serta wajib memasukkan para agen tersebut ke dalam program kepatuhan APU-PPT dan memantau kepatuhannya.'
      }
    ],
    inHighlights: [
      'Cakupan MVTS meliputi penyelenggara remitansi formal maupun sistem pengiriman nilai informal/tradisional seperti Hawala atau Hundi.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apa kewajiban penyelenggara Money or Value Transfer Services (MVTS) terhadap agen-agen loket yang bekerja untuknya menurut Rekomendasi 14?',
      options: [
        'Memelihara daftar terkini seluruh agennya, memasukkan para agen tersebut ke dalam program kepatuhan APU-PPT, dan memantau kepatuhan mereka.',
        'Membebaskan agen dari kewajiban pencatatan identitas pengirim.',
        'Hanya mendaftarkan agen yang berlokasi di kota besar.',
        'Mengalihkan seluruh tanggung jawab pengawasan kepada agen.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 14 mengharuskan penyelenggara MVTS mendata seluruh agennya dan mengintegrasikan mereka ke dalam program kepatuhan APU-PPT.'
    }
  },
  15: {
    title:
      'New Technologies and Virtual Assets (VA / VASP) atau Teknologi Baru dan Pengaturan Aset Virtual (Kripto)',
    essence:
      'Negara dan lembaga keuangan wajib menilai risiko pencucian uang dan pendanaan terorisme sebelum meluncurkan produk atau teknologi baru, serta wajib mengatur, memberi izin, dan mengawasi seluruh Virtual Asset Service Providers (VASPs) atau Penyedia Jasa Aset Kripto agar menerapkan kewajiban APU-PPT (termasuk Crypto Travel Rule).',
    obligations: [
      {
        id: 'R15-1',
        title:
          'Pre-Launch Risk Assessment for New Technologies atau Penilaian Risiko Sebelum Peluncuran Produk/Teknologi Baru',
        body: 'Negara dan lembaga keuangan wajib mengidentifikasi dan menilai risiko pencucian uang serta pendanaan terorisme yang timbul dari pengembangan produk baru, praktik bisnis baru, mekanisme pengiriman layanan baru, serta penggunaan teknologi baru, dan wajib melakukan penilaian risiko tersebut sebelum peluncuran produk atau teknologi.'
      },
      {
        id: 'R15-2',
        title:
          'Regulation, Licensing & AML/CFT Controls for VASPs (Pengaturan dan Pengawasan Platform Aset Kripto / VASP)',
        body: 'Negara wajib memastikan bahwa Virtual Asset Service Providers (VASPs) memiliki izin resmi atau terdaftar, diawasi oleh otoritas yang berwenang (bukan oleh Self-Regulatory Body), serta menerapkan seluruh langkah pencegahan dalam Rekomendasi 10 sampai 21, termasuk kewajiban CDD untuk transaksi tidak berkala di atas USD/EUR 1.000 dan penerapan Travel Rule pada transfer aset virtual.'
      }
    ],
    inHighlights: [
      'Berdasarkan Interpretive Note R.15 (Crypto Travel Rule), VASP pengirim dan VASP penerima wajib memperoleh, menyimpan, dan mengirimkan informasi identitas Originator dan Beneficiary secara aman dan seketika pada setiap transfer aset virtual.',
      'VASP juga tunduk pada kewajiban pembekuan tanpa penundaan dalam Targeted Financial Sanctions (R.6 & R.7).'
    ],
    thresholds: [
      {
        value: 'USD/EUR 1.000',
        context:
          'Ambang batas Occasional Transactions (Transaksi Tidak Berkala) pada VASP yang wajib dikenai pemeriksaan CDD'
      }
    ],
    quiz: {
      q: 'Berapakah ambang batas nilai Occasional Transactions (Transaksi Tidak Berkala) bagi Virtual Asset Service Providers (VASPs) yang mewajibkan pelaksanaan Customer Due Diligence (CDD) menurut Interpretive Note Rekomendasi 15?',
      options: [
        'USD/EUR 1.000.',
        'USD/EUR 100.000.',
        'Tidak terdapat kewajiban CDD pada transaksi aset virtual.',
        'Hanya berlaku untuk penarikan uang tunai di kantor fisik.'
      ],
      answer: 0,
      explain:
        'Mengingat kecepatan dan sifat lintas batas transaksi aset virtual, Interpretive Note Rekomendasi 15 menetapkan ambang batas transaksi tidak berkala pada VASP sebesar USD/EUR 1.000.'
    }
  },
  16: {
    title:
      'Wire Transfers (Payment Transparency / The Travel Rule) atau Transparansi Transfer Dana & Aturan Informasi Pengirim-Penerima',
    essence:
      'Setiap transaksi Wire Transfer atau Transfer Dana wajib disertai informasi akurat dan terverifikasi mengenai Originator (Pengirim) serta Beneficiary (Penerima) yang terus melekat di sepanjang rantai pembayaran (Travel Rule), sementara bank perantara dan bank penerima wajib memantau kelengkapan data tersebut dan menyaring daftar sanksi.',
    obligations: [
      {
        id: 'R16-1',
        title:
          'Ordering Financial Institution Duties atau Kewajiban Lembaga Keuangan Pengirim',
        body: 'Untuk setiap transfer dana lintas batas senilai USD/EUR 1.000 atau lebih, lembaga keuangan pengirim (Ordering FI) wajib menyertakan informasi Originator yang akurat dan telah diverifikasi (nama, nomor rekening, serta alamat/nomor identitas resmi/tanggal dan tempat lahir) beserta informasi Beneficiary (nama dan nomor rekening) di dalam pesan pembayaran.'
      },
      {
        id: 'R16-2',
        title:
          'Intermediary & Beneficiary Institution Duties atau Kewajiban Bank Perantara & Bank Penerima',
        body: 'Lembaga keuangan perantara (Intermediary FI) wajib memastikan seluruh informasi Originator dan Beneficiary tetap menyertai pesan transfer. Lembaga keuangan penerima (Beneficiary FI) wajib memverifikasi identitas penerima serta memiliki prosedur berbasis risiko untuk mendeteksi dan menindaklanjuti transfer yang masuk tanpa informasi lengkap, sekaligus melakukan penyaringan terhadap daftar sanksi (R.6 & R.7).'
      }
    ],
    inHighlights: [
      'Pembaruan Rekomendasi 16 (Juni 2025) menyelaraskan struktur data pembayaran dengan standar ISO 20022 dan memperkuat mekanisme verifikasi kesesuaian penerima (Confirmation of Payee).',
      'Transfer lintas batas di bawah USD/EUR 1.000 tetap wajib mencantumkan nama dan nomor rekening pengirim serta penerima, dan wajib diverifikasi apabila muncul kecurigaan TPPU/TPPT.'
    ],
    thresholds: [
      {
        value: 'USD/EUR 1.000',
        context:
          'Ambang batas Qualifying Cross-Border Wire Transfers yang wajib disertai data Originator terverifikasi lengkap'
      }
    ],
    quiz: {
      q: 'Apa tujuan utama dari ketentuan Wire Transfers (The Travel Rule) pada Rekomendasi 16?',
      options: [
        'Memastikan informasi identitas Originator (Pengirim) dan Beneficiary (Penerima) tersedia secara langsung bagi penegak hukum, FIU, serta lembaga keuangan pengirim, perantara, dan penerima guna melacak pelaku kejahatan dan menyaring daftar sanksi.',
        'Meningkatkan pendapatan komisi transfer antarbank.',
        'Menghapus identitas pengirim saat melewati bank perantara.',
        'Membatasi jadwal pengiriman uang internasional.'
      ],
      answer: 0,
      explain:
        'Dengan mewajibkan data pengirim dan penerima terus menyertai pesan pembayaran, transaksi anonim dapat dicegah dan penyaringan daftar sanksi dapat dilakukan di setiap titik.'
    }
  },
  17: {
    title:
      'Reliance on Third Parties atau Ketergantungan pada Pihak Ketiga untuk Pemeriksaan CDD',
    essence:
      'Lembaga keuangan dapat mengandalkan pihak ketiga (lembaga keuangan atau DNFBP lain yang teregulasi) untuk melaksanakan tahapan CDD, dengan syarat informasi pokok CDD diperoleh seketika, salinan dokumen disediakan tanpa penundaan saat diminta, dan tanggung jawab akhir (Ultimate Responsibility) tetap berada pada lembaga keuangan yang mengandalkan pihak ketiga tersebut.',
    obligations: [
      {
        id: 'R17-1',
        title:
          'Ultimate Responsibility & Strict Conditions for Reliance (Tanggung Jawab Akhir & Syarat Ketergantungan)',
        body: 'Apabila negara mengizinkan lembaga keuangan mengandalkan pihak ketiga untuk melakukan identifikasi nasabah, identifikasi Beneficial Owner, dan pemahaman tujuan hubungan usaha, tanggung jawab akhir (Ultimate Responsibility) atas CDD tetap berada pada lembaga keuangan yang menerima nasabah. Syaratnya: (a) Memperoleh informasi pokok CDD secara seketika (Immediately); (b) Memastikan salinan dokumen identitas akan diserahkan oleh pihak ketiga tanpa penundaan saat diminta; (c) Memastikan pihak ketiga diatur dan diawasi secara resmi; serta (d) Memperhatikan risiko negara tempat pihak ketiga berkedudukan.'
      },
      {
        id: 'R17-2',
        title:
          'Intra-Group Reliance atau Ketergantungan di Dalam Satu Grup Keuangan',
        body: 'Apabila pihak ketiga merupakan bagian dari grup usaha keuangan yang sama, otoritas pengawas dapat menganggap persyaratan di atas telah terpenuhi apabila grup tersebut menerapkan kebijakan CDD, penyimpanan dokumen, dan program APU-PPT tingkat grup (R.18) yang diawasi secara terkonsolidasi.'
      }
    ],
    inHighlights: [
      'Ketentuan Rekomendasi 17 tentang Third-Party Reliance tidak berlaku untuk hubungan Outsourcing (alih daya) atau keagenan, karena penyedia jasa alih daya bertindak langsung sebagai bagian dari operasional lembaga keuangan itu sendiri.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apabila Bank B mengandalkan hasil pemeriksaan Customer Due Diligence (CDD) yang dilakukan oleh Bank A sesuai Rekomendasi 17, siapakah yang memegang tanggung jawab hukum akhir (Ultimate Responsibility) apabila proses CDD tersebut terbukti tidak memadai?',
      options: [
        'Tanggung jawab akhir tetap berada pada Bank B (lembaga keuangan yang mengandalkan pihak ketiga tersebut).',
        'Bank B bebas dari tanggung jawab dan hanya Bank A yang dikenai sanksi.',
        'Tanggung jawab beralih kepada nasabah.',
        'Tanggung jawab beralih kepada otoritas pengawas.'
      ],
      answer: 0,
      explain:
        'Prinsip pokok Rekomendasi 17 menetapkan bahwa meskipun pelaksanaan teknis CDD dapat mengandalkan pihak ketiga yang memenuhi syarat, tanggung jawab akhir selalu tetap melekat pada lembaga keuangan yang menerima nasabah.'
    }
  },
  18: {
    title:
      'Internal Controls and Foreign Branches and Subsidiaries atau Pengendalian Internal dan Pengawasan Cabang/Anak Perusahaan di Luar Negeri',
    essence:
      'Lembaga keuangan wajib menerapkan program pengendalian internal (penunjukan pejabat kepatuhan, penyaringan karyawan, pelatihan berkelanjutan, dan audit independen) serta Group-Wide Programmes (program APU-PPT terintegrasi di seluruh cabang dan anak perusahaan domestik maupun luar negeri, termasuk berbagi informasi risiko secara aman).',
    obligations: [
      {
        id: 'R18-1',
        title:
          'Internal Controls (Four Pillars) atau Empat Pilar Pengendalian Internal',
        body: 'Lembaga keuangan wajib memiliki program internal APU-PPT yang mencakup: (a) Penunjukan Compliance Officer (Pejabat Kepatuhan) pada tingkat manajemen; (b) Prosedur penyaringan (Screening) untuk memastikan standar integritas saat merekrut karyawan; (c) Program pelatihan karyawan secara berkelanjutan; dan (d) Fungsi Audit Independen untuk menguji efektivitas sistem.'
      },
      {
        id: 'R18-2',
        title:
          'Group-Wide AML/CFT Programmes & Information Sharing (Program Tingkat Grup & Berbagi Informasi)',
        body: 'Grup usaha keuangan wajib menerapkan program APU-PPT di tingkat grup pada seluruh kantor cabang dan anak perusahaan mayoritasnya, termasuk kebijakan berbagi informasi CDD dan manajemen risiko transaksi tidak wajar di dalam grup disertai pengamanan kerahasiaan.'
      },
      {
        id: 'R18-3',
        title:
          'Foreign Branches and Subsidiaries Apply Higher Home Standards (Penerapan Standar Negara Asal yang Lebih Tinggi)',
        body: 'Kantor cabang dan anak perusahaan di luar negeri wajib menerapkan langkah APU-PPT yang sejalan dengan persyaratan negara asal (Home Country) apabila ketentuan di negara tuan rumah (Host Country) kurang ketat. Apabila hukum negara tuan rumah tidak mengizinkan penerapan tersebut, grup keuangan wajib menerapkan langkah mitigasi tambahan dan memberi tahu pengawas di negara asalnya.'
      }
    ],
    inHighlights: [
      'Pertukaran informasi di dalam satu grup keuangan (termasuk informasi bahwa suatu transaksi telah dilaporkan sebagai STR ke FIU) diizinkan untuk keperluan manajemen risiko grup dengan tetap menjaga kerahasiaan dari Tipping-Off.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apa kewajiban sebuah grup perbankan apabila kantor cabangnya di luar negeri berada di negara tuan rumah (Host Country) yang standar APU-PPT-nya lebih rendah dibandingkan negara asal kantor pusatnya (Home Country) menurut Rekomendasi 18?',
      options: [
        'Cabang luar negeri tersebut wajib menerapkan standar negara asal (Home Country) yang lebih tinggi, sepanjang diizinkan oleh hukum negara tuan rumah.',
        'Cabang luar negeri cukup mengikuti aturan lokal yang lebih longgar.',
        'Cabang luar negeri dibebaskan dari kewajiban menunjuk pejabat kepatuhan.',
        'Kantor pusat tidak diperbolehkan memantau kepatuhan cabang luar negerinya.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 18 mewajibkan cabang dan anak perusahaan mayoritas di luar negeri menerapkan standar negara asal yang lebih tinggi guna menjaga integritas seluruh grup usaha.'
    }
  },
  19: {
    title:
      'Higher-Risk Countries atau Pemeriksaan Mendalam dan Tindakan Pengamanan terhadap Negara Berisiko Tinggi',
    essence:
      'Lembaga keuangan wajib menerapkan Enhanced Due Diligence (EDD) atau Pemeriksaan Mendalam terhadap hubungan usaha dan transaksi dari negara berisiko tinggi (termasuk yang ditetapkan oleh FATF), sementara negara wajib mampu menerapkan Countermeasures atau Tindakan Balasan/Pengamanan terhadap yurisdiksi berisiko tinggi.',
    obligations: [
      {
        id: 'R19-1',
        title:
          'Mandatory Enhanced Due Diligence (EDD) for High-Risk Jurisdictions',
        body: 'Lembaga keuangan wajib menerapkan langkah Enhanced Due Diligence (EDD) yang proporsional dengan tingkat risikonya terhadap hubungan usaha dan transaksi dengan orang perseorangan, perusahaan, maupun lembaga keuangan dari negara-negara yang diserukan oleh FATF maupun yang diidentifikasi secara mandiri oleh negara.'
      },
      {
        id: 'R19-2',
        title:
          'Applying Countermeasures atau Penerapan Tindakan Pengamanan/Pembatasan Keuangan',
        body: 'Negara wajib mampu menerapkan Countermeasures (tindakan pengamanan dan pembatasan) yang efektif dan proporsional terhadap negara berisiko tinggi, baik ketika diserukan oleh FATF (Call for Action / Black List) maupun secara independen.'
      },
      {
        id: 'R19-3',
        title:
          'Advisory Mechanism to Financial Institutions atau Pemberitahuan Berkala kepada Sektor Keuangan',
        body: 'Negara wajib memiliki mekanisme untuk secara rutin menginformasikan kepada lembaga keuangan mengenai kelemahan sistem APU-PPT pada yurisdiksi lain (daftar Grey List dan Black List FATF).'
      }
    ],
    inHighlights: [
      'Contoh Countermeasures dalam INR.19 meliputi: kewajiban pelaporan khusus transaksi keuangan, pembatasan pendirian cabang atau kantor perwakilan bank dari negara bersangkutan, hingga penghentian hubungan perbankan koresponden.'
    ],
    thresholds: [],
    quiz: {
      q: 'Berdasarkan Rekomendasi 19 tentang Higher-Risk Countries (Negara Berisiko Tinggi), tindakan apa yang wajib diambil oleh negara anggota ketika Financial Action Task Force (FATF) mengeluarkan seruan "Call for Action" terhadap suatu yurisdiksi berisiko tinggi (Black List)?',
      options: [
        'Mewajibkan penerapan Enhanced Due Diligence (EDD) serta menerapkan Countermeasures (Tindakan Pengamanan/Pembatasan) yang efektif dan proporsional.',
        'Mengizinkan penerapan Simplified Due Diligence (SDD) bagi nasabah dari negara tersebut.',
        'Mengecualikan pelaporan STR atas transaksi dari negara tersebut.',
        'Membuka cabang perbankan tanpa izin pengawas di negara tersebut.'
      ],
      answer: 0,
      explain:
        'Terhadap yurisdiksi dalam daftar "Call for Action" (Black List FATF), negara wajib menerapkan EDD sekaligus Countermeasures guna melindungi sistem keuangan dari risiko pencucian uang dan pendanaan terorisme.'
    }
  },
  20: {
    title:
      'Reporting of Suspicious Transactions atau Kewajiban Pelaporan Transaksi Keuangan Mencurigakan (STR / LTKM)',
    essence:
      'Apabila lembaga keuangan mencurigai atau memiliki alasan wajar untuk menduga bahwa suatu dana merupakan hasil tindak pidana (Proceeds of Crime) atau terkait Terrorist Financing (Pendanaan Terorisme), lembaga keuangan wajib segera menyampaikan Suspicious Transaction Report (STR) atau Laporan Transaksi Keuangan Mencurigakan (LTKM) kepada Financial Intelligence Unit (FIU / PPATK), tanpa batas nominal minimum dan mencakup percobaan transaksi.',
    obligations: [
      {
        id: 'R20-1',
        title:
          'Prompt Mandatory STR Filing to the FIU atau Kewajiban Pelaporan Segera ke PPATK (FIU)',
        body: 'Apabila lembaga keuangan mencurigai atau memiliki alasan yang masuk akal untuk menduga bahwa dana merupakan hasil kegiatan kriminal atau terkait dengan pendanaan terorisme, lembaga keuangan wajib berdasarkan undang-undang untuk segera (Promptly) melaporkan kecurigaannya kepada Financial Intelligence Unit (FIU / PPATK).'
      },
      {
        id: 'R20-2',
        title:
          'No Monetary Threshold & Includes Attempted Transactions (Tanpa Batas Nominal & Mencakup Percobaan Transaksi)',
        body: 'Seluruh transaksi yang mencurigakan, termasuk Attempted Transactions (percobaan transaksi yang batal terlaksana), wajib dilaporkan kepada FIU/PPATK tanpa memandang nilai nominal transaksinya.'
      }
    ],
    inHighlights: [
      'Kewajiban pelaporan STR berlaku pula terhadap transaksi yang diduga berkaitan dengan tindak pidana perpajakan (Tax Matters).',
      'Pelaporan harus disampaikan segera setelah lembaga keuangan menyimpulkan adanya unsur mencurigakan.'
    ],
    thresholds: [
      {
        value: 'Rp 0 / USD 0 (Tanpa Batas Minimum)',
        context:
          'Suspicious Transaction Reports (STR / LTKM) wajib dilaporkan berapapun nominalnya, termasuk percobaan transaksi (Attempted Transactions)'
      }
    ],
    quiz: {
      q: 'Seorang calon nasabah hendak menyetorkan uang tunai Rp 800 juta ke bank, namun ketika petugas menanyakan sumber dana dan dokumen pendukung usaha, ia membatalkan setorannya dan langsung pergi. Menurut Rekomendasi 20, apa kewajiban bank?',
      options: [
        'Bank tetap wajib melaporkan kejadian tersebut sebagai Suspicious Transaction Report (STR / LTKM) kepada PPATK karena termasuk Attempted Transaction (Percobaan Transaksi Mencurigakan).',
        'Bank tidak perlu melapor karena transaksi batal dilakukan.',
        'Bank hanya melapor apabila orang tersebut datang kembali.',
        'Bank hanya mencatatnya di buku tamu cabang.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 20 mewajibkan pelaporan atas Attempted Transactions (percobaan transaksi yang mencurigakan meskipun batal terlaksana) kepada FIU/PPATK.'
    }
  }
};
