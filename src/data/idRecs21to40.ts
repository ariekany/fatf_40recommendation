import { IdRecTranslation } from './idRecs1to20';

export const ID_RECS_21_TO_40: Record<number, IdRecTranslation> = {
  21: {
    title:
      'Tipping-Off and Confidentiality atau Perlindungan Hukum Pelapor (Safe Harbour) & Larangan Membocorkan Laporan (Tipping-Off)',
    essence:
      'Lembaga keuangan beserta direksi dan karyawannya wajib mendapat perlindungan hukum (Safe Harbour) dari tuntutan pidana maupun perdata ketika menyampaikan laporan STR dengan iktikad baik kepada FIU (PPATK), serta dilarang oleh undang-undang untuk membocorkan kepada siapa pun bahwa suatu laporan STR sedang atau telah disampaikan (larangan Tipping-Off).',
    obligations: [
      {
        id: 'R21-1',
        title:
          'Safe Harbour Protection for Good-Faith Reporting atau Perlindungan Hukum Pelapor Beriktikad Baik',
        body: 'Lembaga keuangan beserta direksi, pejabat, dan karyawannya wajib dilindungi oleh undang-undang dari tanggung jawab pidana maupun perdata atas pelanggaran pembatasan pengungkapan informasi (kerahasiaan kontrak atau rahasia bank) apabila mereka melaporkan kecurigaan dengan iktikad baik (In Good Faith) kepada Financial Intelligence Unit (FIU / PPATK), meskipun mereka tidak mengetahui secara pasti tindak pidana asalnya dan meskipun aktivitas ilegal tersebut akhirnya tidak terbukti.'
      },
      {
        id: 'R21-2',
        title:
          'Prohibition on Tipping-Off atau Larangan Membocorkan Pelaporan STR/LTKM',
        body: 'Lembaga keuangan beserta direksi, pejabat, dan karyawannya dilarang oleh undang-undang untuk mengungkapkan (Tipping-Off) kepada nasabah maupun pihak ketiga bahwa suatu Suspicious Transaction Report (STR / LTKM) atau informasi terkait sedang atau telah dilaporkan kepada FIU (PPATK).'
      }
    ],
    inHighlights: [
      'Ketentuan larangan Tipping-Off ini tidak menghalangi pertukaran informasi risiko secara aman di dalam satu grup usaha keuangan sesuai ketentuan Rekomendasi 18.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apabila sebuah bank dengan iktikad baik (In Good Faith) menyampaikan laporan transaksi mencurigakan (STR/LTKM) mengenai seorang nasabah kepada PPATK, namun hasil penyelidikan menunjukkan transaksi nasabah tersebut sah, apakah nasabah dapat menuntut ganti rugi kepada bank menurut Rekomendasi 21?',
      options: [
        'Tidak dapat; Rekomendasi 21 memberikan perlindungan hukum (Safe Harbour) sehingga bank beserta direksi dan karyawannya bebas dari tuntutan pidana maupun perdata selama melapor dengan iktikad baik.',
        'Nasabah berhak menuntut ganti rugi perdata kepada petugas bank.',
        'Pejabat kepatuhan bank dapat dikenai sanksi pidana karena salah menduga.',
        'Bank wajib mengembalikan seluruh biaya administrasi rekening.'
      ],
      answer: 0,
      explain:
        'Perlindungan hukum (Safe Harbour) pada Rekomendasi 21 menjamin pihak pelapor bebas dari tuntutan hukum perdata maupun pidana sepanjang laporan disampaikan dengan iktikad baik.'
    }
  },
  22: {
    title:
      'DNFBPs: Customer Due Diligence atau Kewajiban Uji Tuntas Nasabah (CDD) bagi Profesi dan Bisnis Non-Keuangan (PPSPM)',
    essence:
      'Enam sektor dalam Designated Non-Financial Businesses and Professions (DNFBPs)—yaitu Kasino, Agen Properti, Pedagang Logam Mulia/Permata, Pengacara/Notaris, Akuntan, dan Penyedia Jasa Perusahaan (TCSP)—wajib menerapkan Customer Due Diligence (R.10), penyimpanan dokumen (R.11), pemeriksaan PEP (R.12), penilaian risiko teknologi baru (R.15), dan ketergantungan pihak ketiga (R.17) pada situasi transaksi yang ditentukan.',
    obligations: [
      {
        id: 'R22-1',
        title:
          'CDD & Record-Keeping for the 6 DNFBP Sectors atau Kewajiban CDD pada 6 Sektor Profesi & Barang Mewah',
        body: 'Kewajiban CDD (R.10), Record-Keeping 5 tahun (R.11), PEPs (R.12), teknologi baru (R.15), dan pihak ketiga (R.17) berlaku bagi: (a) Casinos (Kasino) saat pelanggan melakukan transaksi keuangan sebesar USD/EUR 3.000 atau lebih; (b) Real Estate Agents (Agen Properti) saat terlibat transaksi jual-beli properti bagi klien; (c) Dealers in Precious Metals and Stones (Pedagang Emas & Berlian) saat melakukan transaksi tunai sebesar USD/EUR 15.000 atau lebih; (d) Lawyers, Notaries, and Accountants (Pengacara, Notaris/PPAT & Akuntan) saat menyiapkan atau mengurus jual-beli properti, mengelola dana/rekening klien, atau mendirikan/mengelola badan usaha; serta (e) Trust and Company Service Providers / TCSPs saat mendirikan badan hukum, bertindak sebagai direktur/pemegang saham pinjam nama (nominee), menyediakan kantor terdaftar, atau bertindak sebagai Wali Amanat.'
      }
    ],
    inHighlights: [
      'Dua ambang batas khusus pada Rekomendasi 22: Kasino pada nilai transaksi USD/EUR 3.000, sedangkan Pedagang Logam Mulia dan Batu Mulia pada transaksi tunai USD/EUR 15.000.'
    ],
    thresholds: [
      {
        value: 'USD/EUR 3.000',
        context:
          'Ambang batas transaksi keuangan di Casinos (Kasino) yang wajib dikenai pemeriksaan CDD'
      },
      {
        value: 'USD/EUR 15.000 (Tunai)',
        context:
          'Ambang batas transaksi tunai pada Dealers in Precious Metals and Stones (Pedagang Emas/Permata) yang wajib dikenai CDD'
      }
    ],
    quiz: {
      q: 'Berapakah ambang batas nilai transaksi keuangan di Casinos (Kasino) yang mewajibkan pelaksanaan Customer Due Diligence (CDD) terhadap pelanggan menurut Rekomendasi 22?',
      options: [
        'USD/EUR 3.000 atau lebih.',
        'USD/EUR 100.000.',
        'Hanya apabila pelanggan memenangkan hadiah di atas USD 1 juta.',
        'Kasino dikecualikan dari kewajiban verifikasi identitas pelanggan.'
      ],
      answer: 0,
      explain:
        'Untuk sektor Kasino, ambang batas wajib pelaksanaan CDD menurut Rekomendasi 22 adalah transaksi keuangan senilai USD/EUR 3.000 atau lebih.'
    }
  },
  23: {
    title:
      'DNFBPs: Other Measures atau Kewajiban Pelaporan Mencurigakan (STR/LTKM) & Kontrol Internal bagi Profesi Non-Keuangan',
    essence:
      'Seluruh sektor Designated Non-Financial Businesses and Professions (DNFBPs)—Kasino, Agen Properti, Pedagang Emas/Permata, Notaris, Pengacara, Akuntan, dan TCSP—wajib menerapkan kewajiban pelaporan transaksi mencurigakan ke PPATK (R.20), pengendalian internal (R.18), kewaspadaan negara berisiko tinggi (R.19), serta larangan Tipping-Off (R.21).',
    obligations: [
      {
        id: 'R23-1',
        title:
          'STR Reporting, Internal Controls, High-Risk Countries & No Tipping-Off for DNFBPs',
        body: 'Ketentuan dalam Rekomendasi 18 (Pengendalian Internal), Rekomendasi 19 (Negara Berisiko Tinggi), Rekomendasi 20 (Pelaporan STR/LTKM ke PPATK), dan Rekomendasi 21 (Perlindungan Pelapor & Larangan Tipping-Off) berlaku bagi DNFBPs: Pengacara, Notaris, Akuntan, dan TCSP saat terlibat transaksi keuangan atau korporasi atas nama klien; Pedagang Logam Mulia dan Batu Mulia saat bertransaksi tunai sebesar USD/EUR 15.000 atau lebih; serta Kasino dan Agen Properti.'
      },
      {
        id: 'R23-2',
        title:
          'Legal Professional Privilege / Professional Secrecy (Pengecualian Terbatas Rahasia Profesi Hukum)',
        body: 'Pengacara, notaris, profesi hukum independen, dan akuntan tidak diwajibkan menyampaikan laporan STR apabila informasi yang bersangkutan diperoleh dalam keadaan yang tunduk pada Legal Professional Privilege atau Professional Secrecy, yakni saat menentukan posisi hukum klien atau membela/mewakili klien dalam proses peradilan.'
      }
    ],
    inHighlights: [
      'Hak rahasia profesi hukum (Legal Professional Privilege) hanya mencakup pemberian nasihat hukum dan pembelaan perkara di pengadilan, serta tidak melindungi transaksi keuangan atau properti yang bertujuan mencuci uang.'
    ],
    thresholds: [
      {
        value: 'USD/EUR 15.000 (Tunai)',
        context:
          'Ambang batas transaksi tunai pada Pedagang Logam Mulia & Batu Mulia yang memicu kewajiban pelaporan mencurigakan (STR)'
      }
    ],
    quiz: {
      q: 'Berdasarkan Rekomendasi 23, dalam kondisi apakah seorang Pengacara (Lawyer) atau Notaris dikecualikan dari kewajiban melaporkan transaksi mencurigakan kepada FIU (PPATK)?',
      options: [
        'Apabila informasi tersebut diperoleh dalam situasi yang tunduk pada kerahasiaan profesi hukum (Legal Professional Privilege), yaitu saat menentukan posisi hukum klien atau membela/mewakili klien dalam proses peradilan.',
        'Setiap kali klien membayar jasa secara tunai di atas Rp 1 miliar.',
        'Ketika pengacara mengurus pembelian properti komersial menggunakan perusahaan cangkang.',
        'Pengacara selalu dikecualikan dari kewajiban pelaporan dalam segala aktivitas bisnis.'
      ],
      answer: 0,
      explain:
        'Pengecualian rahasia profesi hanya berlaku saat menentukan posisi hukum atau membela klien dalam proses peradilan, bukan ketika bertindak sebagai perantara transaksi keuangan atau properti.'
    }
  },
  24: {
    title:
      'Transparency and Beneficial Ownership of Legal Persons atau Transparansi Pemilik Manfaat Sebenarnya dari Badan Hukum (PT/Yayasan)',
    essence:
      'Negara wajib memastikan tersedianya informasi yang memadai, akurat, dan terkini mengenai Beneficial Owner (BO) atau Pemilik Manfaat Sebenarnya dari setiap Legal Person (Badan Hukum seperti PT dan Yayasan) melalui Multi-Pronged Approach (Pendekatan Multi-Jalur), melarang penerbitan Bearer Shares (Saham Atas Unjuk), serta mengatur transparansi penggunaan Nominee.',
    obligations: [
      {
        id: 'R24-1',
        title:
          'Multi-Pronged Approach to Beneficial Ownership (Pendekatan Multi-Jalur Informasi Pemilik Manfaat)',
        body: 'Sesuai revisi Rekomendasi 24, negara wajib menggunakan kombinasi mekanisme (Multi-Pronged Approach) agar informasi Beneficial Ownership (BO) atas badan hukum dapat diakses secara cepat oleh otoritas berwenang: (a) Mewajibkan perusahaan memperoleh dan menyimpan data BO-nya; (b) Menyimpan informasi BO pada otoritas publik atau registri pemerintah (seperti sistem administrasi badan hukum); dan (c) Memanfaatkan informasi tambahan yang disimpan oleh lembaga keuangan dan DNFBP.'
      },
      {
        id: 'R24-2',
        title:
          'Prohibition of New Bearer Shares & Controls on Nominees (Larangan Saham Atas Unjuk & Pengaturan Pinjam Nama)',
        body: 'Negara wajib melarang penerbitan Bearer Shares (Saham Atas Unjuk tanpa nama pemilik) atau Bearer Share Warrants yang baru, serta mengubah atau melumpuhkan (immobilise) instrumen lama yang sudah beredar. Selain itu, Nominee Shareholders and Directors (Pemegang Saham dan Direktur Pinjam Nama) wajib mengungkapkan identitas pihak yang menunjuk mereka (Nominator) kepada perusahaan dan registri.'
      }
    ],
    inHighlights: [
      'Otoritas berwenang (termasuk penegak hukum, FIU/PPATK, dan otoritas pengadaan barang/jasa publik) wajib memiliki akses tepat waktu terhadap informasi dasar dan Beneficial Ownership badan hukum.'
    ],
    thresholds: [
      {
        value: 'Maksimal 25% (Contoh Ambang Kepemilikan)',
        context:
          'Ambang batas maksimum kepemilikan saham yang digunakan dalam Interpretive Note R.24 sebagai acuan identifikasi kepemilikan pengendali Beneficial Owner'
      }
    ],
    quiz: {
      q: 'Ketentuan apa yang ditetapkan dalam revisi Rekomendasi 24 terhadap Bearer Shares (Saham Atas Unjuk / Saham Tanpa Nama Pemilik)?',
      options: [
        'Negara wajib melarang penerbitan Bearer Shares dan Bearer Share Warrants baru, serta mengubah atau melumpuhkan (immobilise) saham atas unjuk yang telah ada.',
        'Negara mengizinkan penerbitan Bearer Shares untuk mempercepat transaksi bursa.',
        'Bearer Shares tetap diizinkan bagi perusahaan penanaman modal asing.',
        'Hanya perusahaan pertambangan yang diperbolehkan menerbitkan saham atas unjuk.'
      ],
      answer: 0,
      explain:
        'Karena Bearer Shares memungkinkan peralihan kepemilikan perusahaan secara anonim hanya dengan menyerahkan fisik warkat, Rekomendasi 24 melarang penerbitan baru dan mewajibkan konversi atau imobilisasi atas saham yang telah ada.'
    }
  },
  25: {
    title:
      'Transparency and Beneficial Ownership of Legal Arrangements atau Transparansi Pemilik Manfaat dari Perikatan Hukum (Express Trusts)',
    essence:
      'Negara wajib memastikan setiap Trustee (Wali Amanat) memperoleh dan menyimpan informasi yang akurat dan terkini mengenai Settlor (Pendiri), Trustee (Wali Amanat), Protector (Pengawas), dan Beneficiaries (Penerima Manfaat) dari suatu Legal Arrangement (Express Trust), serta wajib mengungkapkan statusnya saat bertransaksi dengan lembaga keuangan atau DNFBP.',
    obligations: [
      {
        id: 'R25-1',
        title:
          'Duties of Trustees to Hold Accurate BO Information (Kewajiban Wali Amanat Menyimpan Data Para Pihak dalam Trust)',
        body: 'Negara wajib mengharuskan para Trustees (Wali Amanat) dari setiap Express Trust yang diatur berdasarkan hukumnya atau yang dikelola dari wilayahnya untuk memperoleh dan menyimpan informasi yang memadai, akurat, dan terkini mengenai identitas Settlor, Trustee, Protector (apabila ada), para Beneficiaries, serta orang perseorangan lain yang memegang kendali efektif akhir atas Trust tersebut.'
      },
      {
        id: 'R25-2',
        title:
          'Mandatory Disclosure to FIs/DNFBPs & Access by Authorities (Kewajiban Mengungkap Status kepada Bank & Akses Otoritas)',
        body: 'Para Wali Amanat (Trustees) wajib mengungkapkan status mereka sebagai Trustee kepada lembaga keuangan atau DNFBP ketika membuka hubungan usaha atau melakukan transaksi di atas ambang batas atas nama Trust, serta wajib menyerahkan informasi mengenai pihak-pihak dalam Trust secara cepat apabila diminta oleh otoritas berwenang.'
      }
    ],
    inHighlights: [
      'Revisi Rekomendasi 25 (Februari 2023) menegaskan bahwa negara yang tidak memiliki hukum Trust domestik tetap wajib memastikan kewajiban transparansi berlaku apabila Trust asing dikelola oleh penduduknya atau memiliki aset di wilayahnya.'
    ],
    thresholds: [],
    quiz: {
      q: 'Ketika seorang Trustee (Wali Amanat) membuka rekening di bank atas nama suatu Express Trust, apa kewajiban Trustee tersebut menurut Rekomendasi 25?',
      options: [
        'Mengungkapkan statusnya sebagai Trustee kepada bank dan memberikan informasi akurat mengenai Settlor, Protector, Beneficiaries, serta pengendali akhir dari Trust tersebut.',
        'Mencatatkan rekening tersebut sebagai dana pribadi milik Trustee.',
        'Menolak menyebutkan identitas Settlor dengan alasan perjanjian tertutup.',
        'Hanya mencantumkan nama Trust tanpa menyebutkan orang perseorangan di baliknya.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 25 mengharuskan Trustee mendeklarasikan statusnya kepada lembaga keuangan atau DNFBP agar verifikasi Beneficial Ownership atas seluruh pihak dalam Trust dapat dilaksanakan.'
    }
  },
  26: {
    title:
      'Regulation and Supervision of Financial Institutions atau Pengaturan dan Pengawasan Lembaga Keuangan (OJK & Bank Indonesia)',
    essence:
      'Otoritas pengawas wajib menerapkan Fit and Proper Test (Uji Kelayakan dan Kepatutan) untuk mencegah pelaku kejahatan menguasai atau mengelola lembaga keuangan, melarang pendirian Shell Banks (Bank Cangkang), serta menjalankan Risk-Based Supervision (Pengawasan Berbasis Risiko) atas kepatuhan APU-PPT lembaga keuangan.',
    obligations: [
      {
        id: 'R26-1',
        title:
          'Market Entry Controls (Fit and Proper Test) & Ban on Shell Banks (Pengendalian Izin Masuk & Larangan Bank Cangkang)',
        body: 'Otoritas pengawas wajib mengambil langkah hukum atau regulasi untuk mencegah pelaku kejahatan atau pihak terafiliasinya memegang saham signifikan/pengendali, menjadi Beneficial Owner, atau menduduki fungsi manajemen di lembaga keuangan. Selain itu, negara dilarang menyetujui pendirian atau kelanjutan operasional Shell Bank (Bank Cangkang).'
      },
      {
        id: 'R26-2',
        title:
          'Risk-Based AML/CFT Supervision atau Pengawasan APU-PPT Berbasis Risiko',
        body: 'Frekuensi dan intensitas pengawasan APU-PPT (baik pemeriksaan langsung di tempat / On-Site maupun jarak jauh / Off-Site) terhadap lembaga keuangan wajib ditetapkan berdasarkan profil risiko lembaga keuangan tersebut, risiko nasional, serta karakteristik dan ukuran grup usahanya.'
      }
    ],
    inHighlights: [
      'Lembaga keuangan yang tunduk pada Core Principles (perbankan, asuransi, dan pasar modal) diawasi secara terintegrasi, sedangkan penyelenggara jasa keuangan lainnya (termasuk MVTS dan pedagang valuta asing) wajib memiliki izin atau terdaftar dan diawasi kepatuhan APU-PPT-nya.'
    ],
    thresholds: [],
    quiz: {
      q: 'Mengapa Rekomendasi 26 mewajibkan otoritas pengawas menerapkan Market Entry Controls (Fit and Proper Test / Uji Kelayakan dan Kepatutan) terhadap pemegang saham pengendali dan pengurus bank?',
      options: [
        'Untuk mencegah pelaku kejahatan atau kaki tangannya menjadi pemilik manfaat (Beneficial Owner), pemegang saham pengendali, atau direksi pada lembaga keuangan.',
        'Untuk membatasi jumlah kantor cabang bank di daerah.',
        'Untuk menyeragamkan biaya administrasi bulanan bank.',
        'Sekadar melengkapi persyaratan administratif tanpa memeriksa rekam jejak hukum.'
      ],
      answer: 0,
      explain:
        'Fit and Proper Test bertujuan menjaga integritas kepemilikan dan kepengurusan lembaga keuangan agar tidak dikendalikan oleh jaringan kriminal.'
    }
  },
  27: {
    title:
      'Powers of Supervisors atau Kewenangan Otoritas Pengawas Keuangan (Inspeksi, Akses Dokumen & Sanksi)',
    essence:
      'Otoritas pengawas keuangan (seperti OJK dan Bank Indonesia) wajib memiliki kewenangan hukum yang memadai untuk memantau kepatuhan APU-PPT, melakukan inspeksi langsung ke dalam lembaga keuangan, meminta paksa dokumen atau informasi apa pun tanpa memerlukan penetapan pengadilan, serta menjatuhkan sanksi administratif hingga pencabutan izin usaha.',
    obligations: [
      {
        id: 'R27-1',
        title:
          'Authority to Supervise, Inspect & Compel Production of Information (Wewenang Inspeksi & Meminta Paksa Dokumen)',
        body: 'Otoritas pengawas wajib memiliki kewenangan untuk melakukan pemeriksaan di tempat (On-Site Inspection) serta meminta paksa (Compel Production) setiap dokumen, catatan pembukuan, atau data nasabah dari lembaga keuangan yang relevan untuk pemantauan kepatuhan, tanpa memerlukan surat perintah pengadilan terlebih dahulu.'
      },
      {
        id: 'R27-2',
        title:
          'Power to Impose Sanctions & Revoke Licences (Wewenang Menjatuhkan Sanksi & Mencabut Izin Usaha)',
        body: 'Pengawas wajib memiliki kewenangan untuk menjatuhkan sanksi administratif dan finansial (denda, teguran tertulis, perintah perbaikan, pembatasan kegiatan usaha, hingga pembekuan atau pencabutan izin usaha) sesuai Rekomendasi 35 atas ketidakpatuhan terhadap ketentuan APU-PPT.'
      }
    ],
    inHighlights: [
      'Kewenangan pengawas untuk meminta dokumen dari lembaga keuangan tidak boleh dihambat oleh undang-undang rahasia bank (sejalan dengan Rekomendasi 9).'
    ],
    thresholds: [],
    quiz: {
      q: 'Berdasarkan Rekomendasi 27 tentang Powers of Supervisors (Kewenangan Pengawas), apakah otoritas pengawas perbankan memerlukan penetapan pengadilan terlebih dahulu untuk memeriksa dokumen transaksi nasabah dalam rangka audit kepatuhan APU-PPT?',
      options: [
        'Tidak perlu; pengawas wajib memiliki kewenangan langsung berdasarkan undang-undang untuk meminta paksa (Compel Production) dokumen atau informasi guna keperluan pengawasan tanpa penetapan pengadilan.',
        'Wajib memperoleh izin pengadilan negeri terlebih dahulu.',
        'Wajib meminta persetujuan tertulis dari nasabah yang diperiksa.',
        'Hanya dapat melihat ringkasan laporan tahunan yang dipublikasikan.'
      ],
      answer: 0,
      explain:
        'Interpretive Note Rekomendasi 27 menegaskan bahwa kewenangan pengawas untuk memperoleh dokumen dari lembaga keuangan tidak boleh dipersyaratkan menunggu penetapan pengadilan (Court Order).'
    }
  },
  28: {
    title:
      'Regulation and Supervision of DNFBPs atau Pengaturan dan Pengawasan Profesi & Bisnis Non-Keuangan (Kasino, Notaris, Agen Properti, Emas)',
    essence:
      'Seluruh sektor Designated Non-Financial Businesses and Professions (DNFBPs) wajib tunduk pada pengaturan dan pengawasan APU-PPT: Kasino wajib memiliki izin resmi dan diawasi secara komprehensif, sedangkan kategori DNFBP lainnya diawasi berbasis risiko oleh otoritas pemerintah atau Self-Regulatory Body (SRB) atau Organisasi Profesi Resmi.',
    obligations: [
      {
        id: 'R28-1',
        title:
          'Strict Licensing & Supervision of Casinos (Perizinan & Pengawasan Komprehensif Kasino)',
        body: 'Kasino wajib memiliki izin resmi (Licensed), otoritas berwenang wajib mencegah pelaku kejahatan menjadi pemilik manfaat atau pengelola kasino, serta kasino wajib diawasi secara efektif terhadap pemenuhan kewajiban APU-PPT.'
      },
      {
        id: 'R28-2',
        title:
          'Risk-Based Supervision of Other DNFBPs by Government or SRBs (Pengawasan Berbasis Risiko oleh Pemerintah atau SRB)',
        body: 'Untuk kategori DNFBP lainnya (Agen Properti, Pedagang Logam Mulia/Permata, Pengacara, Notaris, Akuntan, dan TCSP), negara wajib memastikan tersedianya sistem pemantauan kepatuhan berbasis risiko oleh otoritas pengawas pemerintah atau oleh Self-Regulatory Body (SRB) yang memiliki kewenangan pengawasan dan penjatuhan sanksi.'
      }
    ],
    inHighlights: [
      'Pengawas DNFBP atau SRB juga wajib mengambil langkah untuk mencegah pelaku kejahatan menguasai atau menduduki fungsi manajemen pada badan usaha/profesi DNFBP.'
    ],
    thresholds: [],
    quiz: {
      q: 'Lembaga manakah yang dapat ditunjuk oleh negara untuk mengawasi kepatuhan APU-PPT pada profesi seperti Pengacara, Notaris, dan Akuntan menurut Rekomendasi 28?',
      options: [
        'Otoritas pengawas pemerintah yang ditunjuk atau Self-Regulatory Body (SRB / Organisasi Profesi Resmi) yang mampu memastikan anggotanya mematuhi kewajiban APU-PPT.',
        'Perkumpulan informal yang tidak memiliki kewenangan pemeriksaan maupun sanksi.',
        'Sektor profesi tidak memerlukan pengawasan APU-PPT.',
        'Diserahkan sepenuhnya pada kebijakan internal masing-masing kantor.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 28 mengizinkan pengawasan DNFBP dijalankan oleh instansi pemerintah yang berwenang atau oleh Self-Regulatory Body (SRB) sepanjang SRB tersebut mampu menegakkan kepatuhan anggotanya.'
    }
  },
  29: {
    title:
      'Financial Intelligence Units (FIUs) atau Unit Intelijen Keuangan Nasional (di Indonesia: PPATK)',
    essence:
      'Negara wajib membentuk Financial Intelligence Unit (FIU)—di Indonesia adalah PPATK—yang bersifat mandiri secara operasional (Operationally Independent) sebagai pusat nasional untuk menerima laporan transaksi mencurigakan (STR/LTKM), melakukan analisis operasional dan strategis, serta mendiseminasikan hasil intelijennya kepada otoritas yang berwenang.',
    obligations: [
      {
        id: 'R29-1',
        title:
          'Three Core Functions: Receive, Analyse & Disseminate (Tiga Fungsi Utama: Menerima, Menganalisis & Meneruskan Intelijen)',
        body: 'FIU bertindak sebagai pusat nasional untuk: (1) Menerima dan meminta laporan transaksi mencurigakan (STR/LTKM) serta informasi relevan lainnya (seperti laporan transaksi tunai atau transfer internasional) dari pihak pelapor; (2) Melakukan Operational Analysis (menelusuri target dan alur transaksi spesifik) serta Strategic Analysis (mengidentifikasi tren dan tipologi pencucian uang); dan (3) Mendiseminasikan hasil analisis tersebut secara spontan maupun atas permintaan kepada otoritas penegak hukum.'
      },
      {
        id: 'R29-2',
        title:
          'Broad Information Access, Operational Independence & Egmont Group Membership (Akses Informasi, Independensi & Egmont Group)',
        body: 'FIU wajib memperoleh akses tepat waktu terhadap informasi keuangan, administratif, dan penegakan hukum seluas-luasnya; memiliki Operational Independence and Autonomy (kemandirian operasional dan anggaran tanpa intervensi); melindungi keamanan dan kerahasiaan informasi; serta mengajukan keanggotaan dalam Egmont Group of Financial Intelligence Units.'
      }
    ],
    inHighlights: [
      'Informasi yang diterima dan diolah oleh FIU wajib dilindungi dengan standar keamanan informasi yang ketat dan hanya didiseminasikan sesuai ketentuan undang-undang.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apa tiga fungsi utama dari Financial Intelligence Unit (FIU) seperti PPATK menurut Rekomendasi 29?',
      options: [
        'Menerima (Receive) laporan transaksi mencurigakan, Menganalisis (Analyse) secara operasional dan strategis, serta Mendiseminasikan (Disseminate) hasil analisis intelijen kepada otoritas yang berwenang.',
        'Menerbitkan uang kartal, mengatur suku bunga acuan, dan menyalurkan kredit perbankan.',
        'Menyelenggarakan persidangan pidana dan menjatuhkan putusan pemidanaan.',
        'Memberikan layanan asuransi simpanan bagi nasabah perbankan.'
      ],
      answer: 0,
      explain:
        'Tiga fungsi pokok FIU dalam Rekomendasi 29 adalah menerima laporan dari pihak pelapor, melakukan analisis intelijen keuangan, dan meneruskan hasil analisis tersebut kepada aparat penegak hukum.'
    }
  },
  30: {
    title:
      'Responsibilities of Law Enforcement and Investigative Authorities atau Tanggung Jawab Aparat Penegak Hukum & Penyidikan Keuangan Paralel',
    essence:
      'Negara wajib menunjuk aparat penegak hukum yang bertanggung jawab menyidik tindak pidana pencucian uang dan pendanaan terorisme, mengembangkan Parallel Financial Investigation (Penyidikan Keuangan Paralel) dalam setiap perkara kejahatan yang menghasilkan keuntungan ekonomi besar, serta segera melacak, membekukan, dan menyita aset hasil kejahatan.',
    obligations: [
      {
        id: 'R30-1',
        title:
          'Designated Law Enforcement Authorities & Parallel Financial Investigations (Penyidik yang Ditunjuk & Penyidikan Keuangan Paralel)',
        body: 'Negara wajib memastikan adanya aparat penegak hukum yang ditunjuk untuk menyidik perkara pencucian uang dan pendanaan terorisme dalam kerangka kebijakan nasional, serta wajib melaksanakan Parallel Financial Investigation (Penyidikan Keuangan Paralel) secara proaktif ketika menyidik tindak pidana asal yang menghasilkan keuntungan besar (korupsi, narkotika, penipuan, penyelundupan, dan lainnya).'
      },
      {
        id: 'R30-2',
        title:
          'Expeditious Tracing, Freezing & Seizing of Criminal Assets (Pelacakan, Pembekuan & Penyitaan Cepat Aset Kejahatan)',
        body: 'Otoritas penegak hukum yang berwenang wajib memiliki tanggung jawab untuk secara cepat mengidentifikasi, melacak (Trace), serta memulai tindakan pembekuan (Freeze) dan penyitaan (Seize) atas harta kekayaan yang diduga merupakan hasil kejahatan.'
      }
    ],
    inHighlights: [
      'Penyidik tindak pidana asal wajib diberi kewenangan untuk menyidik tindak pidana pencucian uangnya sekaligus, atau merujuk perkara keuangan tersebut secara cepat kepada instansi penyidik TPPU yang berwenang.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apa yang dimaksud dengan pelaksanaan "Parallel Financial Investigation" (Penyidikan Keuangan Paralel) pada Rekomendasi 30?',
      options: [
        'Melakukan penyidikan terhadap aliran dana, pencucian uang, dan pelacakan aset secara serentak pada saat menyidik tindak pidana asalnya.',
        'Menunggu perkara tindak pidana asal selesai menjalani hukuman penjara sebelum mulai melacak aset.',
        'Menyidik dua perkara tindak pidana umum yang tidak memiliki aspek keuangan.',
        'Melimpahkan wewenang penyidikan kepolisian kepada lembaga perbankan.'
      ],
      answer: 0,
      explain:
        'Parallel Financial Investigation memastikan penelusuran aliran dana dan pengamanan aset berjalan beriringan sejak awal penyidikan tindak pidana asal.'
    }
  },
  31: {
    title:
      'Powers of Law Enforcement and Investigative Authorities atau Kewenangan Penyidik & Teknik Penyidikan Khusus (Penyadapan, Penyamaran & Pengiriman Terkendali)',
    essence:
      'Dalam menyidik pencucian uang, tindak pidana asal, dan pendanaan terorisme, aparat penegak hukum wajib memiliki kewenangan untuk meminta paksa dokumen dari lembaga keuangan maupun pihak lain, menggeledah tempat, menyita barang bukti, serta menggunakan Special Investigative Techniques (Penyadapan, Operasi Penyamaran, Pengiriman Terkendali, dan Akses Sistem Komputer).',
    obligations: [
      {
        id: 'R31-1',
        title:
          'Compulsory Production of Records, Search & Seizure (Wewenang Meminta Paksa Dokumen, Penggeledahan & Penyitaan)',
        body: 'Otoritas penegak hukum dan penyidik wajib memiliki kewenangan untuk meminta paksa (Compel Production) catatan transaksi, dokumen CDD, dan data yang disimpan oleh lembaga keuangan, DNFBP, maupun orang atau badan hukum lainnya; melakukan penggeledahan orang dan bangunan; memeriksa saksi; serta menyita dan memperoleh barang bukti.'
      },
      {
        id: 'R31-2',
        title:
          'Special Investigative Techniques & Account Identification Mechanisms (Teknik Penyidikan Khusus & Identifikasi Rekening)',
        body: 'Otoritas penyidik wajib dapat menggunakan teknik penyidikan khusus yang meliputi: (a) Undercover Operations (Operasi Penyamaran); (b) Intercepting Communications (Penyadapan Komunikasi); (c) Accessing Computer Systems (Pengaksesan Sistem Komputer); dan (d) Controlled Delivery (Pengiriman Terkendali). Selain itu, negara wajib memiliki mekanisme efektif untuk mengidentifikasi secara tepat waktu apakah seseorang memiliki atau mengendalikan rekening di lembaga keuangan.'
      }
    ],
    inHighlights: [
      'Otoritas penyidik juga wajib memiliki mekanisme untuk meminta informasi yang relevan dari Financial Intelligence Unit (FIU / PPATK).'
    ],
    thresholds: [],
    quiz: {
      q: 'Manakah yang termasuk empat "Special Investigative Techniques" (Teknik Penyidikan Khusus) yang wajib tersedia bagi penyidik menurut Rekomendasi 31?',
      options: [
        'Undercover Operations (Operasi Penyamaran), Intercepting Communications (Penyadapan Komunikasi), Accessing Computer Systems (Pengaksesan Sistem Komputer), dan Controlled Delivery (Pengiriman Terkendali).',
        'Pemeriksaan administratif tahunan oleh akuntan publik.',
        'Penghapusan data transaksi pada server perbankan.',
        'Pemberitahuan terbuka sebelum dilakukan penggeledahan.'
      ],
      answer: 0,
      explain:
        'Keempat teknik penyidikan khusus tersebut dibutuhkan penyidik untuk mengungkap jaringan pencucian uang dan pendanaan terorisme yang kompleks.'
    }
  },
  32: {
    title:
      'Cash Couriers atau Pengawasan Pembawaan Uang Tunai dan Instrumen Pembayaran Lintas Perbatasan (Bea Cukai)',
    essence:
      'Negara wajib menerapkan Declaration System (Sistem Deklarasi) atau Disclosure System untuk mendeteksi pengangkutan fisik uang tunai dan Bearer Negotiable Instruments (BNIs) melintasi perbatasan negara (ambang maksimal USD/EUR 10.000; di Indonesia Rp 100 juta), serta memberi wewenang kepada Bea Cukai untuk menahan uang yang mencurigakan atau dideklarasikan secara tidak benar.',
    obligations: [
      {
        id: 'R32-1',
        title:
          'Cross-Border Declaration or Disclosure System (Sistem Deklarasi/Pengungkapan Uang Tunai Lintas Batas)',
        body: 'Negara wajib memiliki sistem deklarasi tertulis atau pengungkapan wajib bagi pembawaan fisik mata uang tunai dan Bearer Negotiable Instruments (BNIs) yang masuk atau keluar perbatasan negara, baik melalui penumpang perjalanan maupun pos dan kargo. Apabila menggunakan sistem deklarasi berambang batas, ambang tersebut tidak boleh melebihi USD/EUR 10.000 (di Indonesia ditetapkan Rp 100 juta atau setara).'
      },
      {
        id: 'R32-2',
        title:
          'Power to Stop, Restrain & Sanction False Declarations (Wewenang Menahan Uang & Sanksi Deklarasi Palsu)',
        body: 'Otoritas pabean dan perbatasan wajib memiliki kewenangan untuk meminta keterangan asal-usul dan tujuan penggunaan uang, menghentikan atau menahan (Stop or Restrain) uang tunai atau BNI selama waktu yang wajar apabila terdapat kecurigaan TPPU/TPPT atau deklarasi palsu, menjatuhkan sanksi yang efektif, serta menyerahkan informasi deklarasi tersebut kepada FIU (PPATK).'
      }
    ],
    inHighlights: [
      'Rekomendasi 32 juga mendorong koordinasi pabean dan penegak hukum terkait pergerakan lintas batas komoditas bernilai tinggi seperti emas batangan dan batu mulia.'
    ],
    thresholds: [
      {
        value: 'Maksimal USD/EUR 10.000 (Indonesia: Rp 100 Juta)',
        context:
          'Ambang batas maksimum pembawaan uang tunai atau BNI lintas perbatasan yang wajib dideklarasikan kepada Bea Cukai'
      }
    ],
    quiz: {
      q: 'Berapakah ambang batas maksimum pembawaan fisik uang tunai atau Bearer Negotiable Instruments (BNIs) lintas perbatasan yang wajib dideklarasikan menurut Rekomendasi 32?',
      options: [
        'Ambang batas deklarasi tidak boleh melebihi USD/EUR 10.000 (dan di Indonesia ditetapkan sebesar Rp 100 juta atau setara).',
        'USD 1.000.000.',
        'Hanya berlaku untuk pengiriman melalui kargo kapal laut.',
        'Tidak terdapat batas pelaporan bagi penumpang pesawat udara.'
      ],
      answer: 0,
      explain:
        'Standar Rekomendasi 32 menetapkan plafon maksimal ambang batas deklarasi perbatasan sebesar USD/EUR 10.000 (dan dalam regulasi Indonesia diatur sebesar Rp 100.000.000).'
    }
  },
  33: {
    title:
      'Statistics atau Pemeliharaan Statistik Nasional Komprehensif untuk Mengukur Efektivitas APU-PPT',
    essence:
      'Negara wajib memelihara statistik komprehensif mengenai efektivitas dan efisiensi sistem APU-PPT nasionalnya, mencakup jumlah laporan STR/LTKM yang diterima dan didiseminasikan FIU, jumlah penyidikan, penuntutan, dan putusan pemidanaan TPPU/TPPT, nilai harta yang dibekukan, disita, dan dirampas, serta permintaan bantuan hukum internasional.',
    obligations: [
      {
        id: 'R33-1',
        title:
          'Comprehensive National AML/CFT Statistics (Empat Cakupan Statistik Nasional)',
        body: 'Negara wajib memelihara statistik komprehensif yang mencakup: (1) Suspicious Transaction Reports (STR / LTKM) yang diterima dan hasil analisis yang diteruskan oleh FIU (PPATK); (2) Jumlah penyidikan, penuntutan, dan putusan pemidanaan (vonis) perkara Money Laundering (TPPU) dan Terrorist Financing (TPPT); (3) Jumlah dan nilai harta kekayaan yang dibekukan (Frozen), disita (Seized), dan dirampas (Confiscated); serta (4) Jumlah dan tindak lanjut permintaan Mutual Legal Assistance (MLA) maupun kerja sama internasional lainnya.'
      }
    ],
    inHighlights: [
      'Ketersediaan statistik yang akurat menjadi landasan pembuktian kinerja nyata negara saat dievaluasi berdasarkan 11 Immediate Outcomes.'
    ],
    thresholds: [],
    quiz: {
      q: 'Empat kelompok data apa saja yang wajib dipelihara oleh negara dalam Statistik Nasional menurut Rekomendasi 33?',
      options: [
        '(1) STR/LTKM yang diterima & diteruskan FIU; (2) Penyidikan, penuntutan & vonis pidana TPPU/TPPT; (3) Harta yang dibekukan, disita & dirampas; serta (4) Permintaan Mutual Legal Assistance (MLA) & kerja sama internasional.',
        'Volume transaksi tarik tunai di mesin ATM setiap akhir pekan.',
        'Indeks harga saham gabungan dan nilai tukar harian.',
        'Jumlah karyawan perbankan di setiap provinsi.'
      ],
      answer: 0,
      explain:
        'Keempat kelompok statistik pada Rekomendasi 33 digunakan untuk mengevaluasi kinerja sistem APU-PPT dari tahap deteksi hingga pemidanaan dan perampasan aset.'
    }
  },
  34: {
    title:
      'Guidance and Feedback atau Pemberian Pedoman, Tipologi, dan Umpan Balik kepada Pihak Pelapor',
    essence:
      'Otoritas berwenang, lembaga pengawas (OJK/BI), Self-Regulatory Bodies (SRBs), dan FIU (PPATK) wajib menyusun pedoman praktis (Guidance) serta memberikan umpan balik (Feedback) kepada lembaga keuangan dan DNFBPs untuk meningkatkan efektivitas penerapan aturan APU-PPT serta ketajaman deteksi transaksi mencurigakan.',
    obligations: [
      {
        id: 'R34-1',
        title:
          'Issuing Guidelines & Providing Two-Way Feedback (Penerbitan Pedoman & Pemberian Umpan Balik)',
        body: 'Otoritas berwenang, pengawas, SRBs, dan FIU (PPATK) wajib menetapkan pedoman serta memberikan umpan balik yang membantu lembaga keuangan dan DNFBPs dalam menerapkan ketentuan nasional pemberantasan pencucian uang dan pendanaan terorisme, khususnya dalam mendeteksi dan melaporkan transaksi yang mencurigakan.'
      }
    ],
    inHighlights: [
      'Bentuk umpan balik mencakup publikasi kajian tipologi dan indikator mencurigakan (Red Flags), contoh kasus yang telah disamarkan identitasnya (Sanitized Cases), serta evaluasi atas kualitas laporan STR yang dikirimkan.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apa tujuan pemberian "Guidance and Feedback" (Pedoman dan Umpan Balik) oleh FIU (PPATK) dan otoritas pengawas kepada pihak pelapor menurut Rekomendasi 34?',
      options: [
        'Membantu lembaga keuangan dan DNFBPs menerapkan kewajiban APU-PPT secara efektif serta meningkatkan ketepatan mereka dalam mendeteksi dan melaporkan transaksi mencurigakan.',
        'Memberikan informasi rahasia penyidikan kepada nasabah.',
        'Mengambil alih keputusan pemberian kredit komersial di bank.',
        'Mengurangi kewajiban pelaporan bagi bank besar.'
      ],
      answer: 0,
      explain:
        'Pedoman dan umpan balik dari FIU serta otoritas pengawas membantu pihak pelapor mengenali pola modus terbaru sehingga kualitas laporan STR meningkat.'
    }
  },
  35: {
    title:
      'Sanctions atau Sanksi yang Efektif, Proporsional, dan Memberi Efek Jera (Bagi Institusi & Direksi)',
    essence:
      'Negara wajib menyediakan rangkaian sanksi (pidana, perdata, atau administratif) yang Effective, Proportionate, and Dissuasive (Efektif, Proporsional, dan Memberi Efek Jera) terhadap pelanggaran kewajiban APU-PPT dalam Rekomendasi 6 serta Rekomendasi 8 sampai 23, dan sanksi tersebut wajib dapat diterapkan baik kepada badan hukumnya maupun secara langsung kepada Directors and Senior Management (Direksi dan Manajemen Senior).',
    obligations: [
      {
        id: 'R35-1',
        title:
          'Effective, Proportionate, and Dissuasive Sanctions (Sanksi yang Efektif, Proporsional & Memberi Efek Jera)',
        body: 'Negara wajib memastikan tersedianya sanksi pidana, perdata, atau administratif yang efektif, proporsional, dan memberi efek jera bagi orang perseorangan maupun badan hukum yang gagal mematuhi persyaratan APU-PPT dalam Rekomendasi 6 serta Rekomendasi 8 sampai dengan 23.'
      },
      {
        id: 'R35-2',
        title:
          'Applicability to Directors and Senior Management (Penerapan Sanksi kepada Direksi & Manajemen Senior)',
        body: 'Sanksi-sanksi tersebut wajib dapat diterapkan tidak hanya kepada lembaga keuangan atau DNFBP sebagai badan usaha, tetapi juga secara langsung kepada para Directors and Senior Management (Direksi, Komisaris, dan Pejabat Eksekutif Senior).'
      }
    ],
    inHighlights: [
      'Nilai denda dan jenis sanksi administratif harus cukup sepadan dengan skala usaha pelanggar agar tidak sekadar dianggap sebagai biaya operasional.'
    ],
    thresholds: [],
    quiz: {
      q: 'Kepada siapakah sanksi atas pelanggaran kewajiban APU-PPT wajib dapat diterapkan menurut Rekomendasi 35?',
      options: [
        'Tidak hanya kepada lembaga keuangan atau DNFBP sebagai badan hukum, tetapi juga secara langsung kepada para Direktur dan Manajemen Senior (Directors and Senior Management)-nya.',
        'Hanya kepada pegawai kontrak di kantor cabang.',
        'Hanya kepada badan hukum perusahaan, sedangkan jajaran direksi dikecualikan.',
        'Hanya kepada pihak ketiga di luar lembaga keuangan.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 35 mengharuskan sanksi dapat dijatuhkan langsung kepada direksi dan manajemen senior di samping sanksi terhadap korporasinya.'
    }
  },
  36: {
    title:
      'International Instruments atau Ratifikasi dan Implementasi Penuh 4 Konvensi Internasional PBB',
    essence:
      'Negara wajib segera menjadi pihak serta meratifikasi dan mengimplementasikan secara penuh empat konvensi internasional PBB: Vienna Convention (Narkotika 1988), Palermo Convention (Kejahatan Transnasional Terorganisir 2000), Merida Convention / UNCAC (Antikorupsi 2003), dan Terrorist Financing Convention (Pendanaan Terorisme 1999).',
    obligations: [
      {
        id: 'R36-1',
        title:
          'Full Implementation of the Four UN Conventions (Implementasi Penuh 4 Konvensi PBB)',
        body: 'Negara wajib mengambil langkah untuk meratifikasi dan mengimplementasikan secara penuh ke dalam hukum nasionalnya: (1) Vienna Convention 1988; (2) Palermo Convention 2000; (3) Merida Convention / United Nations Convention against Corruption (UNCAC) 2003; dan (4) International Convention for the Suppression of the Financing of Terrorism 1999.'
      }
    ],
    inHighlights: [
      'Negara juga didorong untuk meratifikasi dan melaksanakan konvensi regional yang relevan terkait pemberantasan pencucian uang dan terorisme.'
    ],
    thresholds: [],
    quiz: {
      q: 'Empat konvensi internasional PBB manakah yang wajib diratifikasi dan diimplementasikan secara penuh menurut Rekomendasi 36?',
      options: [
        'Vienna Convention (1988), Palermo Convention (2000), Merida Convention / UNCAC (2003), dan Terrorist Financing Convention (1999).',
        'Konvensi Hukum Laut, Konvensi Perubahan Iklim, Konvensi Penerbangan Sipil, dan Konvensi Pos.',
        'Perjanjian tarif perdagangan bebas bilateral.',
        'Konvensi perlindungan hak cipta dan merek dagang.'
      ],
      answer: 0,
      explain:
        'Keempat konvensi PBB tersebut menjadi dasar penyelarasan hukum pidana internasional dalam pemberantasan narkotika, kejahatan terorganisir, korupsi, dan pendanaan terorisme.'
    }
  },
  37: {
    title:
      'Mutual Legal Assistance (MLA) atau Bantuan Hukum Timbal Balik Lintas Negara dalam Masalah Pidana',
    essence:
      'Negara wajib memberikan Mutual Legal Assistance (MLA) atau Bantuan Timbal Balik dalam Masalah Pidana secara cepat, konstruktif, dan efektif untuk penyidikan, penuntutan, dan proses peradilan terkait pencucian uang, tindak pidana asal, dan pendanaan terorisme, tanpa menolak permintaan karena alasan rahasia bank atau karena perkaranya berkaitan dengan pajak.',
    obligations: [
      {
        id: 'R37-1',
        title:
          'Rapid, Constructive & Effective MLA via a Central Authority (Pelaksanaan MLA melalui Otoritas Pusat)',
        body: 'Negara wajib memiliki dasar hukum yang memadai dan menunjuk Central Authority (Otoritas Pusat) untuk mengirim serta mengeksekusi permintaan Mutual Legal Assistance (MLA) secara cepat dan konstruktif, termasuk perolehan dokumen perbankan asli, pemeriksaan saksi, penggeledahan, dan penyitaan barang bukti.'
      },
      {
        id: 'R37-2',
        title:
          'No Refusal on Secrecy or Fiscal Grounds & Flexible Dual Criminality (Larangan Penolakan atas Dasar Pajak/Rahasia Bank)',
        body: 'Negara dilarang menolak permintaan MLA dengan alasan bahwa tindak pidana tersebut juga melibatkan masalah perpajakan (Fiscal/Tax Matters) atau karena ketentuan rahasia bank. Apabila diberlakukan syarat Dual Criminality (Kriminalitas Ganda), syarat tersebut dianggap terpenuhi sepanjang kedua negara sama-sama mengkriminalisasi perbuatan pokok di balik tindak pidana tersebut.'
      }
    ],
    inHighlights: [
      'Untuk tindakan bantuan yang tidak bersifat memaksa (Non-Coercive Actions), negara wajib memberikan bantuan MLA meskipun tanpa adanya Dual Criminality.'
    ],
    thresholds: [],
    quiz: {
      q: 'Berdasarkan Rekomendasi 37 tentang Mutual Legal Assistance (MLA), alasan manakah yang tidak boleh digunakan oleh suatu negara untuk menolak permintaan MLA dari negara lain?',
      options: [
        'Menolak karena ketentuan Undang-Undang Rahasia Bank atau karena tindak pidana tersebut juga berkaitan dengan masalah perpajakan (Fiscal Matters).',
        'Meminta kelengkapan informasi identitas subjek hukum yang diperiksa.',
        'Menggunakan sistem pengelolaan perkara untuk memantau penyelesaian permintaan.',
        'Menyalurkan permintaan melalui Otoritas Pusat (Central Authority).'
      ],
      answer: 0,
      explain:
        'Rekomendasi 37 melarang penolakan permintaan bantuan hukum timbal balik (MLA) atas dasar kerahasiaan bank maupun karena perkara tersebut menyangkut tindak pidana perpajakan.'
    }
  },
  38: {
    title:
      'Mutual Legal Assistance: Freezing and Confiscation atau Kerja Sama Internasional Pembekuan, Penyitaan, Perampasan & Pemulangan Aset',
    essence:
      'Negara wajib memiliki kewenangan untuk mengambil tindakan cepat dalam merespons permintaan negara asing guna mengidentifikasi, Freeze (membekukan), Seize (menyita), dan Confiscate (merampas) aset hasil kejahatan maupun aset senilai, termasuk mengeksekusi perintah Non-Conviction Based Confiscation (NCBF) serta mengatur pembagian dan pemulangan aset (Asset Repatriation).',
    obligations: [
      {
        id: 'R38-1',
        title:
          'Expeditious Action on Foreign Freezing & Confiscation Requests (Tindakan Cepat atas Permintaan Pembekuan & Perampasan Asing)',
        body: 'Negara wajib memiliki kewenangan untuk segera merespons permintaan dari negara asing guna mengidentifikasi, membekukan (Freeze), menyita (Seize), serta merampas (Confiscate) harta kekayaan hasil pencucian uang, tindak pidana asal, dan pendanaan terorisme, maupun aset dengan nilai setara (Corresponding Value).'
      },
      {
        id: 'R38-2',
        title:
          'Enforcement of Foreign NCBF Orders & Asset Sharing/Repatriation (Eksekusi NCBF Asing & Pemulangan Aset)',
        body: 'Kewenangan tersebut wajib mencakup kemampuan untuk menindaklanjuti permintaan perampasan aset tanpa pemidanaan (Non-Conviction Based Confiscation / NCBF) dari luar negeri (sekurang-kurangnya ketika pelaku meninggal dunia atau melarikan diri), mengelola aset sitaan, serta mengoordinasikan pembagian atau pengembalian aset (Asset Sharing / Repatriation).'
      }
    ],
    inHighlights: [
      'Revisi Rekomendasi 38 menekankan pentingnya komunikasi informal yang cepat sebelum pengajuan resmi MLA agar aset lintas batas dapat segera diamankan sebelum berpindah tangan.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apabila pelaku tindak pidana melarikan aset ke luar negeri lalu meninggal dunia, dan pengadilan negara asal mengeluarkan perintah Non-Conviction Based Confiscation (NCBF / Perampasan Tanpa Pemidanaan), apa kewajiban negara tempat aset berada menurut Rekomendasi 38?',
      options: [
        'Memiliki kewenangan hukum untuk menindaklanjuti permintaan perampasan tanpa pemidanaan (NCBF) tersebut serta bekerja sama dalam pengelolaan dan pengembalian aset.',
        'Membiarkan aset tersebut dikuasai oleh bank tempat penyimpanan.',
        'Menolak permintaan karena tersangka telah meninggal dunia.',
        'Menghapus seluruh catatan kepemilikan aset tersebut.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 38 mengharuskan negara mampu menindaklanjuti perintah perampasan tanpa pemidanaan (NCBF) dari yurisdiksi asing agar aset hasil kejahatan tetap dapat dipulangkan.'
    }
  },
  39: {
    title:
      'Extradition atau Ekstradisi Buronan Pencucian Uang dan Pendanaan Terorisme ("Ekstradisi atau Adili")',
    essence:
      'Negara wajib melaksanakan permintaan Extradition (Ekstradisi) secara konstruktif dan tanpa penundaan atas tindak pidana pencucian uang dan pendanaan terorisme. Apabila suatu negara menolak mengekstradisi tersangka semata-mata atas dasar kewarganegaraan, negara tersebut wajib menyerahkan perkara itu kepada penuntut umumnya sendiri untuk diadili di dalam negeri (asas Aut Dedere Aut Judicare).',
    obligations: [
      {
        id: 'R39-1',
        title:
          'ML and TF as Extraditable Offences & Simplified Procedures (Pencucian Uang & Terorisme sebagai Pidana yang Dapat Diekstradisi)',
        body: 'Negara wajib memastikan bahwa Money Laundering (Pencucian Uang) dan Terrorist Financing (Pendanaan Terorisme) merupakan tindak pidana yang dapat diekstradisi (Extraditable Offences), memiliki prosedur yang jelas untuk memproses permintaan ekstradisi tanpa penundaan, serta menyederhanakan mekanisme penyerahan tersangka.'
      },
      {
        id: 'R39-2',
        title:
          'Aut Dedere Aut Judicare ("Extradite or Prosecute" / Ekstradisi atau Adili di Dalam Negeri)',
        body: 'Apabila suatu negara tidak mengekstradisi warga negaranya sendiri atas dasar kewarganegaraan, negara tersebut wajib—atas permintaan negara yang meminta ekstradisi—menyerahkan perkara tersebut tanpa penundaan kepada otoritas yang berwenang untuk dilakukan penuntutan pidana di dalam negeri serta bekerja sama dalam aspek pembuktiannya.'
      }
    ],
    inHighlights: [
      'Apabila ekstradisi mensyaratkan Dual Criminality (Kriminalitas Ganda), persyaratan tersebut dianggap terpenuhi sepanjang kedua negara sama-sama mengkriminalisasi perbuatan pokok di balik tindak pidana tersebut.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apa kewajiban suatu negara menurut Rekomendasi 39 apabila negara tersebut menolak mengekstradisi tersangka pencucian uang semata-mata karena tersangka adalah warga negaranya sendiri?',
      options: [
        'Wajib tanpa penundaan menyerahkan perkara tersebut kepada otoritas penuntut umumnya sendiri untuk diadili di pengadilan domestik (asas Aut dedere aut judicare).',
        'Membebaskan tersangka dari segala tuntutan pidana.',
        'Menolak seluruh bukti yang dikirimkan oleh negara peminta.',
        'Hanya mengenakan sanksi teguran administratif.'
      ],
      answer: 0,
      explain:
        'Asas "Aut dedere aut judicare" (Ekstradisi atau Adili) dalam Rekomendasi 39 memastikan pelaku pencucian uang dan pendanaan terorisme tetap diadili meskipun tidak diekstradisi karena alasan kewarganegaraan.'
    }
  },
  40: {
    title:
      'Other Forms of International Cooperation atau Bentuk Kerja Sama Internasional Lainnya (Jalur Cepat FIU-ke-FIU, Pengawas & Polisi)',
    essence:
      'Negara wajib memastikan seluruh otoritas berwenangnya (FIU/PPATK, Pengawas Keuangan, Kepolisian, Bea Cukai, Pajak) dapat memberikan kerja sama internasional secara cepat, konstruktif, dan efektif kepada mitra sejawatnya di luar negeri (Counterpart-to-Counterpart), baik atas permintaan maupun secara spontan (Spontaneous Information Sharing).',
    obligations: [
      {
        id: 'R40-1',
        title:
          'Rapid, Constructive & Spontaneous Counterpart Cooperation (Pertukaran Informasi Cepat & Spontan Antar-Lembaga)',
        body: 'Negara wajib memastikan otoritas berwenangnya dapat memberikan kerja sama internasional seluas-luasnya secara cepat dan konstruktif melalui saluran yang aman, baik atas dasar permintaan maupun secara spontan/proaktif (Spontaneous), terkait pencucian uang, tindak pidana asal, dan pendanaan terorisme.'
      },
      {
        id: 'R40-2',
        title:
          'Four Direct Channels: FIU, Financial Supervisors, Law Enforcement & Diagonal Cooperation (Empat Jalur Langsung)',
        body: 'Kerja sama langsung mencakup: (a) Pertukaran intelijen antar-FIU (seperti melalui Egmont Group) tanpa memandang status kelembagaan FIU mitra; (b) Pertukaran informasi pengawasan antar-Financial Supervisors (OJK/BI dengan pengawas asing); (c) Pertukaran informasi intelijen dan pembentukan tim penyidikan bersama antar-Law Enforcement; serta (d) Diagonal Cooperation (kerja sama lintas jenis otoritas apabila relevan).'
      }
    ],
    inHighlights: [
      'Otoritas berwenang wajib dapat melakukan penelusuran informasi (Inquiries) atas nama mitra asingnya dan tidak boleh menolak kerja sama atas dasar urusan perpajakan maupun kerahasiaan bank.',
      'Informasi yang dipertukarkan wajib dijaga kerahasiaannya dan hanya digunakan sesuai peruntukan yang disetujui oleh otoritas pemberi informasi.'
    ],
    thresholds: [],
    quiz: {
      q: 'Apa fungsi utama dari mekanisme kerja sama internasional pada Rekomendasi 40 (seperti jalur FIU-ke-FIU melalui Egmont Group atau Pengawas-ke-Pengawas) dibandingkan jalur Mutual Legal Assistance (MLA) pada Rekomendasi 37?',
      options: [
        'Memfasilitasi pertukaran intelijen, pelacakan awal aliran dana, dan informasi pengawasan secara langsung dan cepat antar-lembaga sejenis sebelum diperlukannya proses pembuktian pengadilan melalui MLA.',
        'Menggantikan wewenang hakim dalam menjatuhkan putusan pidana.',
        'Mempublikasikan data intelijen secara terbuka.',
        'Hanya digunakan untuk sengketa perdata komersial.'
      ],
      answer: 0,
      explain:
        'Rekomendasi 40 menyediakan saluran cepat antar-otoritas sejenis untuk keperluan intelijen, pengawasan, dan pelacakan awal, yang kemudian dapat ditindaklanjuti dengan permintaan resmi MLA (R.37/R.38) guna memperoleh alat bukti pengadilan.'
    }
  }
};
