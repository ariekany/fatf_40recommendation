import { BeginnerGuide } from '../types/fatf';

export const BEGINNER_GUIDE_ID_21_TO_40: Record<number, BeginnerGuide> = {
  21: {
    recId: 21,
    analogyTitle:
      'Kerahasiaan Pelaporan ke PPATK dan Perlindungan Hukum bagi Pelapor',
    analogyBody:
      'Pelaporan transaksi mencurigakan ke Financial Intelligence Unit (FIU / PPATK) harus dilakukan secara tertutup agar pelaku kejahatan tidak sempat memindahkan dana atau menghilangkan barang bukti. Karena itu, Rekomendasi 21 tentang Tipping-Off and Confidentiality mengatur dua prinsip yang berjalan beriringan: pertama, pegawai bank yang melapor dengan iktikad baik mendapat Safe Harbour atau Perlindungan Hukum sehingga tidak dapat dituntut oleh nasabah; kedua, pegawai bank dilarang memberitahukan kepada nasabah bahwa transaksi mereka sedang dilaporkan ke PPATK (larangan Tipping-Off).',
    storyTitle:
      'Dampak Hukum Apabila Pegawai Bank Membocorkan Laporan kepada Nasabah',
    storySteps: [
      'Seorang nasabah prioritas menyetorkan uang tunai Rp 15 miliar yang tidak sesuai dengan profil usahanya, sehingga unit kepatuhan pusat bank mengirimkan Suspicious Transaction Report (STR) atau Laporan Transaksi Keuangan Mencurigakan (LTKM) ke PPATK.',
      'Karena mengenal dekat nasabah tersebut, pimpinan cabang menghubungi sang nasabah dan memberitahukan bahwa transaksinya baru saja dilaporkan ke PPATK.',
      'Setelah menerima informasi itu, nasabah langsung memindahkan sisa dananya ke luar negeri dan melarikan diri sebelum penyidikan dimulai.',
      'Tindakan pimpinan cabang tersebut melanggar larangan Tipping-Off (Pembocoran Rahasia Laporan) dan dapat dikenai sanksi pidana.'
    ],
    jargonBuster: [
      {
        term: 'Tipping-Off atau Pembocoran Rahasia Pelaporan LTKM/STR',
        simpleMeaning:
          'Tindakan terlarang memberitahukan atau memberi isyarat kepada nasabah maupun pihak ketiga bahwa suatu laporan STR/LTKM sedang atau telah disampaikan ke PPATK/FIU.'
      },
      {
        term: 'Safe Harbour (Good-Faith Reporting Protection) atau Perlindungan Hukum Pelapor Beriktikad Baik',
        simpleMeaning:
          'Jaminan undang-undang bahwa pihak pelapor beserta direksi dan pegawainya tidak dapat dituntut secara pidana maupun perdata selama melaporkan kecurigaan dengan iktikad baik.'
      }
    ],
    misconception: {
      myth: 'Apabila bank meminta dokumen tambahan atas transaksi yang tidak wajar, petugas bank wajib menjelaskan kepada nasabah bahwa transaksinya sedang dilaporkan ke PPATK.',
      reality:
        'Petugas bank dilarang menyebutkan adanya pelaporan LTKM/STR atau pemeriksaan PPATK kepada nasabah yang bersangkutan.'
    }
  },
  22: {
    recId: 22,
    analogyTitle:
      'Menerapkan Pemeriksaan Identitas Pelanggan pada Profesi dan Bisnis Non-Bank (DNFBPs)',
    analogyBody:
      'Ketika pengawasan di sektor perbankan semakin ketat, pelaku pencucian uang kerap mengalihkan dananya ke sektor non-bank: membeli properti mewah melalui Agen Properti dan Notaris, membeli emas batangan dan berlian secara tunai, berjudi di kasino, atau meminta bantuan Pengacara serta Akuntan untuk mendirikan perusahaan cangkang. Rekomendasi 22 mewajibkan enam sektor Designated Non-Financial Businesses and Professions (DNFBPs) atau Profesi dan Bisnis Non-Keuangan Tertentu menerapkan Customer Due Diligence (CDD) atau Uji Tuntas Nasabah sebagaimana yang berlaku di perbankan.',
    storyTitle:
      'Pengalihan Dana Hasil Korupsi ke Properti Mewah dan Logam Mulia',
    storySteps: [
      'Seorang pelaku korupsi menghindari penyetoran uang tunai Rp 30 miliar langsung ke bank karena khawatir terdeteksi sistem pemantauan.',
      'Ia menggunakan jasa penyedia layanan korporasi dan Notaris untuk mendirikan PT atas nama orang lain, lalu membeli tiga unit vila melalui Agen Properti.',
      'Selain itu, ia membeli berlian dan emas batangan senilai Rp 5 miliar secara tunai di pedagang perhiasan.',
      'Berdasarkan Rekomendasi 22, Kasino, Agen Properti, Pedagang Logam Mulia/Permata, Notaris, Pengacara, dan Akuntan wajib memverifikasi identitas klien, sumber dana, serta Beneficial Owner dalam transaksi-transaksi tersebut.'
    ],
    jargonBuster: [
      {
        term: 'Designated Non-Financial Businesses and Professions (DNFBPs) atau Pihak Pelapor Sektor Profesi & Barang Mewah (PPSPM)',
        simpleMeaning:
          'Enam sektor non-bank yang wajib menerapkan aturan APU-PPT: (1) Kasino, (2) Agen Properti, (3) Pedagang Logam Mulia & Batu Mulia, (4) Pengacara & Notaris, (5) Akuntan, dan (6) Trust and Company Service Providers (TCSPs).'
      },
      {
        term: 'Professional Gatekeepers atau Penjaga Gerbang Profesional',
        simpleMeaning:
          'Istilah bagi pengacara, notaris, dan akuntan karena jasa keahlian mereka dapat menjadi pintu masuk bagi dana nasabah ke dalam sistem hukum dan bisnis.'
      }
    ],
    misconception: {
      myth: 'Kewajiban pemeriksaan identitas pelanggan (CDD) hanya berlaku untuk bank, perusahaan asuransi, dan pasar modal.',
      reality:
        'Sektor properti, kasino, pedagang emas/berlian, serta jasa notaris dan akuntan juga wajib menerapkan CDD sesuai ketentuan Rekomendasi 22.'
    }
  },
  23: {
    recId: 23,
    analogyTitle:
      'Kewajiban Pelaporan Transaksi Mencurigakan bagi Notaris, Pengacara, dan Sektor Non-Bank',
    analogyBody:
      'Melanjutkan Rekomendasi 22, setelah Kasino, Agen Properti, Pedagang Emas, Notaris, Pengacara, dan Akuntan melakukan pemeriksaan identitas klien (R.22), Rekomendasi 23 tentang DNFBPs: Other Measures mewajibkan mereka mengirimkan Suspicious Transaction Report (STR) atau Laporan Transaksi Keuangan Mencurigakan (LTKM) kepada Financial Intelligence Unit (FIU / PPATK) apabila menemukan transaksi yang mencurigakan. Pengecualian hanya berlaku secara terbatas ketika pengacara sedang memberikan nasihat hukum atau membela klien dalam proses peradilan (Legal Professional Privilege).',
    storyTitle:
      'Batas Antara Kerahasiaan Pembelaan Pengadilan dan Transaksi Bisnis Klien',
    storySteps: [
      'Situasi A (Tunduk pada Rahasia Profesi): Seorang tersangka menyewa pengacara untuk membelanya di pengadilan pidana. Pengacara tidak diwajibkan melaporkan informasi pembelaan perkara tersebut ke PPATK.',
      'Situasi B (Wajib Melapor ke PPATK): Klien yang sama meminta pengacara tersebut mengurus pembelian gedung komersial senilai Rp 100 miliar dan menitipkan pembayarannya melalui rekening firma hukum untuk menyamarkan identitas pembeli.',
      'Karena pada Situasi B pengacara bertindak sebagai perantara transaksi keuangan dan properti, Rekomendasi 23 mewajibkan pelaporan transaksi mencurigakan ke PPATK.'
    ],
    jargonBuster: [
      {
        term: 'Legal Professional Privilege / Professional Secrecy atau Hak Kerahasiaan Profesi Hukum',
        simpleMeaning:
          'Perlindungan kerahasiaan komunikasi antara pengacara/notaris dan klien saat menilai posisi hukum atau membela perkara di pengadilan, namun tidak mencakup pengurusan transaksi keuangan atau properti yang mencurigakan.'
      }
    ],
    misconception: {
      myth: 'Seluruh kegiatan yang dilakukan pengacara atau notaris untuk kliennya dilindungi oleh rahasia jabatan dan tidak dapat dilaporkan ke PPATK.',
      reality:
        'Pengurusan jual-beli properti, pengelolaan dana klien, serta pendirian badan usaha yang mencurigakan tetap wajib dilaporkan ke PPATK/FIU.'
    }
  },
  24: {
    recId: 24,
    analogyTitle:
      'Menelusuri Manusia Asli di Balik Kepemilikan Perusahaan Berlapis (Beneficial Ownership)',
    analogyBody:
      'Pelaku kejahatan keuangan kerap menyusun struktur kepemilikan perusahaan secara berlapis, seperti boneka kayu Matryoshka: PT A di dalam negeri dimiliki oleh Perusahaan B di luar negeri, yang sahamnya dimiliki oleh Perusahaan C di negara lain. Tujuannya agar nama manusia asli yang mengendalikan perusahaan tersebut tidak terlihat di permukaan. Rekomendasi 24 tentang Transparency and Beneficial Ownership of Legal Persons mewajibkan negara mencatat siapa Beneficial Owner (BO) atau Pemilik Manfaat Sebenarnya di balik setiap badan hukum serta melarang penggunaan Bearer Shares atau Saham Atas Unjuk.',
    storyTitle:
      'Menelusuri Pemilik Manfaat di Balik Perusahaan Pemenang Tender',
    storySteps: [
      'Sebuah proyek pemerintah senilai Rp 200 miliar dimenangkan oleh PT Maju Jaya.',
      'Di dalam akta pendirian, pemegang saham PT Maju Jaya tercatat sebagai dua perusahaan investasi asing, tanpa mencantumkan nama pejabat daerah.',
      'Melalui data Beneficial Ownership Registry (Daftar Pemilik Manfaat) sesuai Rekomendasi 24, penyidik menelusuri orang perseorangan yang memegang kendali akhir atas kedua perusahaan induk tersebut.',
      'Penelusuran menunjukkan bahwa pengendali dan penerima manfaat akhir dari perusahaan tersebut adalah kerabat dekat pejabat pemberi proyek.'
    ],
    jargonBuster: [
      {
        term: 'Shell Company atau Perusahaan Cangkang',
        simpleMeaning:
          'Perusahaan yang terdaftar secara hukum namun tidak memiliki kantor fisik, karyawan, maupun kegiatan operasional nyata, dan hanya digunakan untuk menampung atau memindahkan dana.'
      },
      {
        term: 'Bearer Shares atau Saham Atas Unjuk (Saham Tanpa Nama)',
        simpleMeaning:
          'Sertifikat saham fisik yang tidak mencantumkan nama pemiliknya, sehingga siapa pun yang memegang fisik kertas tersebut menjadi pemilik perusahaan. Instrumen ini dilarang oleh FATF.'
      },
      {
        term: 'Nominee Director / Shareholder atau Direktur / Pemegang Saham Pinjam Nama',
        simpleMeaning:
          'Seseorang yang namanya dicantumkan sebagai direktur atau pemegang saham di akta perusahaan untuk mewakili dan menutupi identitas pemilik sebenarnya (Nominator).'
      }
    ],
    misconception: {
      myth: 'Beneficial Owner (Pemilik Manfaat) dari sebuah PT otomatis adalah orang yang menjabat sebagai Direktur Utama pada akta perusahaan.',
      reality:
        'Direktur Utama bisa saja hanya pengurus profesional atau pihak yang dipinjam namanya. Beneficial Owner adalah manusia asli yang memiliki saham pengendali, menikmati keuntungan akhir, atau memegang kendali efektif tertinggi.'
    }
  },
  25: {
    recId: 25,
    analogyTitle:
      'Keterbukaan Identitas Para Pihak dalam Perikatan Pengelolaan Harta (Express Trust)',
    analogyBody:
      'Selain mendirikan perseroan terbatas (Rekomendasi 24), pengelolaan kekayaan dalam jumlah besar juga sering menggunakan skema Legal Arrangements atau Express Trust (Perikatan Amanat Pengelolaan Harta). Dalam skema ini, pemilik harta (Settlor) menyerahkan asetnya kepada Wali Amanat (Trustee) untuk dikelola bagi kepentingan penerima manfaat (Beneficiary). Agar kontrak Trust tidak dipakai untuk menyembunyikan harta hasil korupsi atau penggelapan pajak, Rekomendasi 25 mewajibkan setiap Trustee menyimpan data identitas seluruh pihak di dalam Trust dan mengungkapkannya saat berhubungan dengan bank maupun otoritas.',
    storyTitle:
      'Pengungkapan Identitas Pendiri dan Penerima Manfaat pada Offshore Trust',
    storySteps: [
      'Seorang wajib pajak mengalihkan kepemilikan gedung komersial dan depositonya ke dalam sebuah "Offshore Family Trust" di luar negeri yang dikelola oleh seorang Trustee (Wali Amanat).',
      'Di dalam kontrak Trust tersebut, ia menunjuk dirinya sebagai Protector (pengawas yang memiliki hak mengganti Wali Amanat) dan keluarganya sebagai Beneficiary (penerima hasil pengelolaan harta).',
      'Berdasarkan Rekomendasi 25, ketika Trustee membuka rekening bank atau membeli aset atas nama Trust, ia wajib memberitahukan statusnya sebagai Trustee dan menyerahkan identitas Settlor, Protector, serta Beneficiary kepada bank.'
    ],
    jargonBuster: [
      {
        term: 'Legal Arrangements / Express Trust atau Perikatan Hukum Pengelolaan Harta (Perwalian/Amanat)',
        simpleMeaning:
          'Hubungan hukum di mana pemilik harta (Settlor) menyerahkan asetnya kepada Wali Amanat (Trustee) untuk dikelola bagi kepentingan penerima manfaat (Beneficiary).'
      },
      {
        term: 'Settlor, Trustee, Protector, and Beneficiary',
        simpleMeaning:
          'Empat pihak utama dalam Trust: Settlor (penyerah harta), Trustee (pengelola harta), Protector (pengawas yang memiliki hak veto), dan Beneficiary (penerima manfaat harta).'
      }
    ],
    misconception: {
      myth: 'Negara yang sistem hukum perdatanya tidak mengatur lembaga Anglo-Saxon Trust secara domestik tidak perlu menerapkan Rekomendasi 25.',
      reality:
        'Ketentuan Rekomendasi 25 tetap berlaku karena Trust yang dibentuk di luar negeri sering membuka rekening bank atau membeli properti di dalam negeri, dan warga domestik dapat bertindak sebagai Wali Amanat bagi Trust asing.'
    }
  },
  26: {
    recId: 26,
    analogyTitle:
      'Mencegah Pelaku Kejahatan Menguasai Bank serta Pengawasan Berbasis Risiko',
    analogyBody:
      'Apabila sindikat kejahatan berhasil membeli saham pengendali atau menduduki kursi direksi sebuah bank, pengendalian internal bank tersebut akan lumpuh dari dalam. Untuk mencegah hal itu, Rekomendasi 26 tentang Regulation and Supervision of Financial Institutions mewajibkan otoritas pengawas keuangan (seperti OJK dan Bank Indonesia) menjalankan Fit and Proper Test (Uji Kelayakan dan Kepatutan) yang ketat terhadap calon pemilik maupun pengurus bank, melarang izin bagi Shell Bank (Bank Cangkang), serta mengawasi lembaga keuangan berdasarkan profil risikonya.',
    storyTitle:
      'Pemeriksaan Latar Belakang Saat Akuisisi Saham Perbankan',
    storySteps: [
      'Sebuah konsorsium perusahaan investasi mengajukan permohonan untuk membeli 60% saham pengendali pada sebuah bank kecil.',
      'Sesuai Rekomendasi 26, otoritas pengawas perbankan melakukan pemeriksaan mendalam (Fit and Proper Test) terhadap asal-usul modal dan rekam jejak Beneficial Owner konsorsium tersebut.',
      'Dari penelusuran ditemukan bahwa dana akuisisi berasal dari jaringan perjudian ilegal lintas batas, sehingga regulator menolak permohonan pembelian saham tersebut.'
    ],
    jargonBuster: [
      {
        term: 'Risk-Based Supervision atau Pengawasan Berbasis Risiko oleh Regulator (OJK/BI)',
        simpleMeaning:
          'Pendekatan pengawasan yang menyesuaikan frekuensi dan kedalaman pemeriksaan (audit) dengan tingkat risiko pencucian uang pada masing-masing lembaga keuangan.'
      },
      {
        term: 'Fit and Proper Test (Market Entry Controls) atau Uji Kelayakan dan Kepatutan',
        simpleMeaning:
          'Pemeriksaan latar belakang oleh regulator untuk memastikan pemegang saham pengendali, komisaris, dan direksi lembaga keuangan memiliki integritas dan bebas dari rekam jejak kriminal.'
      }
    ],
    misconception: {
      myth: 'Siapa pun yang memiliki kecukupan modal berhak membeli saham pengendali atau mendirikan lembaga perbankan.',
      reality:
        'Selain kecukupan modal, calon pemegang saham pengendali dan pengurus bank wajib lulus uji integritas serta verifikasi sumber dana oleh otoritas pengawas.'
    }
  },
  27: {
    recId: 27,
    analogyTitle:
      'Kewenangan Otoritas Pengawas untuk Melakukan Inspeksi, Meminta Dokumen, dan Menjatuhkan Sanksi',
    analogyBody:
      'Pengaturan perbankan tidak akan berjalan efektif apabila lembaga pengawasnya tidak memiliki wewenang pemeriksaan dan penindakan yang memadai. Rekomendasi 27 tentang Powers of Supervisors mengharuskan otoritas pengawas keuangan (seperti OJK dan Bank Indonesia) memiliki kewenangan hukum untuk melakukan inspeksi langsung ke dalam bank, meminta dokumen atau data nasabah apa pun tanpa perlu penetapan pengadilan, serta menjatuhkan sanksi administratif hingga pencabutan izin usaha.',
    storyTitle:
      'Temuan Inspeksi Langsung atas Sistem Pemantauan Transaksi Bank',
    storySteps: [
      'Laporan berkala yang disampaikan sebuah lembaga keuangan kepada regulator menunjukkan seluruh indikator kepatuhan berada dalam kondisi baik.',
      'Menggunakan kewenangan Rekomendasi 27, tim pengawas melakukan pemeriksaan langsung di tempat (On-Site Inspection) pada kantor pusat lembaga tersebut.',
      'Pengawas memeriksa sistem pemantauan transaksi dan menemukan bahwa sejumlah parameter peringatan berisiko tinggi telah dinonaktifkan tanpa prosedur yang sah.',
      'Otoritas pengawas langsung memerintahkan pengaktifan kembali sistem tersebut dan menjatuhkan sanksi administratif kepada manajemen.'
    ],
    jargonBuster: [
      {
        term: 'On-Site and Off-Site Supervision atau Pengawasan Langsung di Tempat & Pengawasan Jarak Jauh',
        simpleMeaning:
          'Off-site supervision adalah analisis terhadap laporan data yang dikirim bank ke regulator; sedangkan On-site supervision adalah pemeriksaan fisik langsung oleh tim pengawas di kantor bank.'
      },
      {
        term: 'Power to Compel Production of Records atau Kewenangan Meminta Paksa Dokumen',
        simpleMeaning:
          'Kewenangan hukum bagi pengawas untuk mewajibkan bank menyerahkan dokumen, pembukuan, atau data nasabah guna keperluan pemeriksaan tanpa memerlukan surat perintah pengadilan.'
      }
    ],
    misconception: {
      myth: 'Bank dapat menolak menyerahkan dokumen nasabah kepada pemeriksa OJK atau Bank Indonesia dengan alasan menjaga kerahasiaan bank.',
      reality:
        'Berdasarkan Rekomendasi 27, otoritas pengawas keuangan memiliki kewenangan undang-undang untuk memeriksa seluruh dokumen dan data nasabah demi kepentingan pengawasan APU-PPT.'
    }
  },
  28: {
    recId: 28,
    analogyTitle:
      'Pengawasan Kepatuhan pada Kasino, Agen Properti, Notaris, dan Pedagang Logam Mulia',
    analogyBody:
      'Apabila sektor perbankan diawasi secara ketat oleh OJK dan Bank Indonesia (R.26 & R.27), maka sektor profesi dan bisnis non-keuangan juga memerlukan pengawas yang jelas. Rekomendasi 28 tentang Regulation and Supervision of DNFBPs mewajibkan pemerintah menetapkan otoritas pengawas—baik kementerian/lembaga pemerintah maupun Self-Regulatory Bodies (SRBs) atau Organisasi Profesi Resmi—untuk mengaudit dan menindak Kasino, Agen Properti, Pedagang Emas/Permata, Notaris, Pengacara, Akuntan, dan TCSP.',
    storyTitle:
      'Audit Kepatuhan Berbasis Risiko pada Agen Properti dan Kasino',
    storySteps: [
      'Sebuah perusahaan agen properti melayani pembelian sejumlah properti mewah oleh perusahaan cangkang luar negeri tanpa pernah mendokumentasikan identitas Beneficial Owner pembeli.',
      'Berdasarkan Rekomendasi 28, instansi pengawas sektor DNFBP melakukan pemeriksaan kepatuhan berbasis risiko terhadap berkas transaksi agen properti tersebut.',
      'Atas kelalaian melakukan prosedur CDD dan ketiadaan mekanisme pelaporan LTKM, pengawas menjatuhkan sanksi administratif serta mewajibkan perbaikan prosedur internal.'
    ],
    jargonBuster: [
      {
        term: 'Self-Regulatory Body (SRB) atau Lembaga Pengatur Mandiri / Organisasi Profesi Resmi',
        simpleMeaning:
          'Organisasi profesi resmi (seperti organisasi notaris, advokat, atau akuntan) yang diberi kewenangan untuk mengatur standar profesi, mengawasi kepatuhan APU-PPT, dan menjatuhkan sanksi disiplin kepada anggotanya.'
      }
    ],
    misconception: {
      myth: 'Pedagang logam mulia, agen properti, dan kantor notaris tidak tunduk pada audit kepatuhan APU-PPT karena bukan lembaga perbankan.',
      reality:
        'Seluruh sektor DNFBP/PPSPM wajib berada di bawah pengawasan berbasis risiko oleh instansi pemerintah yang ditunjuk atau Self-Regulatory Body (SRB).'
    }
  },
  29: {
    recId: 29,
    analogyTitle:
      'Peran Financial Intelligence Unit (FIU / PPATK) sebagai Pusat Analisis Intelijen Keuangan',
    analogyBody:
      'Satu bank hanya dapat melihat mutasi transaksi yang terjadi di dalam banknya sendiri dan tidak dapat melihat apabila dana tersebut langsung dipecah ke beberapa bank lain. Oleh karena itu, setiap negara memerlukan satu lembaga pusat yang menerima laporan transaksi mencurigakan dari seluruh bank dan profesi, memadukannya dengan basis data perpajakan serta kepabeanan, lalu menyusun peta aliran dana untuk diserahkan kepada penegak hukum. Lembaga pusat tersebut adalah Financial Intelligence Unit (FIU) atau Unit Intelijen Keuangan (di Indonesia: PPATK), sebagaimana diatur dalam Rekomendasi 29.',
    storyTitle:
      'Menggabungkan Laporan dari Berbagai Bank untuk Memetakan Jaringan Sindikat',
    storySteps: [
      'Bank A mengirimkan laporan transaksi mencurigakan (STR/LTKM) atas mutasi dana Rp 500 juta milik seorang nasabah.',
      'Pada pekan yang sama, Bank B, Bank C, sebuah platform kripto, dan pedagang emas juga mengirimkan laporan terpisah mengenai beberapa individu yang seluruh alirannya bermuara ke satu perusahaan cangkang.',
      'Analis di Financial Intelligence Unit (FIU / PPATK) memadukan kelima laporan tersebut dengan data registrasi korporasi dan perpajakan.',
      'Dari hasil analisis tersebut, PPATK memetakan jaringan pencucian uang senilai Rp 80 miliar dan menyerahkan Laporan Hasil Analisis kepada penyidik penegak hukum.'
    ],
    jargonBuster: [
      {
        term: 'Financial Intelligence Unit (FIU) atau Unit Intelijen Keuangan (di Indonesia: PPATK)',
        simpleMeaning:
          'Lembaga pusat nasional yang bertugas menerima laporan transaksi mencurigakan dari pihak pelapor, melakukan analisis intelijen keuangan, dan meneruskan hasilnya kepada aparat penegak hukum.'
      },
      {
        term: 'Operational Independence and Autonomy atau Independensi Operasional FIU',
        simpleMeaning:
          'Jaminan bahwa FIU/PPATK memiliki kewenangan mandiri untuk menganalisis dan meneruskan laporan intelijen keuangan tanpa campur tangan politik.'
      },
      {
        term: 'Egmont Group of Financial Intelligence Units (Jaringan Global FIU)',
        simpleMeaning:
          'Wadah kerja sama internasional yang menghubungkan lebih dari 170 FIU di dunia untuk memfasilitasi pertukaran informasi intelijen keuangan lintas negara secara aman.'
      }
    ],
    misconception: {
      myth: 'PPATK (FIU) memiliki kewenangan untuk menangkap tersangka secara langsung dan menuntutnya di pengadilan.',
      reality:
        'PPATK merupakan FIU bertipe administratif yang menganalisis aliran dana dan menghasilkan produk intelijen keuangan, sedangkan tindakan penangkapan, penyidikan, dan penuntutan dilakukan oleh aparat penegak hukum (Polri, KPK, Kejaksaan, BNN, atau PPNS Pajak/Bea Cukai).'
    }
  },
  30: {
    recId: 30,
    analogyTitle:
      'Menjalankan Penyidikan Keuangan Paralel Bersamaan dengan Penyidikan Kejahatan Asal',
    analogyBody:
      'Apabila penegak hukum hanya berfokus membuktikan tindak pidana asalnya (seperti narkotika atau korupsi) tanpa menelusuri ke mana keuntungan kejahatannya mengalir, jaringan kriminal tersebut tetap memiliki modal untuk beroperasi kembali. Rekomendasi 30 tentang Responsibilities of Law Enforcement and Investigative Authorities mewajibkan aparat penegak hukum menjalankan Parallel Financial Investigation atau Penyidikan Keuangan Paralel: setiap kali menyidik tindak pidana yang menghasilkan keuntungan ekonomi besar, penyidik wajib sekaligus melacak aliran uang dan asetnya.',
    storyTitle:
      'Menelusuri Pemodal Utama Pembalakan Liar melalui Aliran Dana',
    storySteps: [
      'Aparat penegak hukum menangkap pelaku lapangan beserta truk pengangkut kayu dalam perkara pembalakan liar (Illegal Logging).',
      'Agar penanganan perkara tidak berhenti pada pelaku lapangan, penyidik menjalankan Parallel Financial Investigation (Penyidikan Keuangan Paralel) sesuai Rekomendasi 30.',
      'Penyidik menelusuri rekening yang membayar sewa alat berat, biaya pengiriman kargo, hingga perusahaan penampung hasil penjualan kayu ilegal tersebut.',
      'Dari jejak keuangan itu, penyidik menetapkan pemodal utamanya sebagai tersangka pencucian uang dan membekukan rekening perusahaan penampungnya.'
    ],
    jargonBuster: [
      {
        term: 'Parallel Financial Investigation atau Penyidikan Keuangan Paralel',
        simpleMeaning:
          'Penyelidikan terhadap aliran dana, rekening keuangan, dan kepemilikan aset yang dilakukan secara serentak sejak awal penyidikan tindak pidana asalnya.'
      }
    ],
    misconception: {
      myth: 'Penyidikan pencucian uang baru dapat dimulai setelah perkara kejahatan asalnya memperoleh putusan pengadilan yang berkekuatan hukum tetap.',
      reality:
        'Penyidikan keuangan harus dilakukan secara paralel sejak awal agar aset hasil kejahatan dapat segera dilacak dan dibekukan sebelum dipindahkan ke luar negeri.'
    }
  },
  31: {
    recId: 31,
    analogyTitle:
      'Kewenangan Penyidik dan Penggunaan Teknik Penyidikan Khusus',
    analogyBody:
      'Jaringan pencucian uang modern memanfaatkan komunikasi terenkripsi dan struktur perusahaan lintas batas untuk menyembunyikan jejak. Untuk menghadapinya, Rekomendasi 31 tentang Powers of Law Enforcement and Investigative Authorities mewajibkan negara membekali penyidik dengan kewenangan hukum yang memadai: meminta paksa dokumen dari bank atau perusahaan (Compulsory Production of Records), melakukan penggeledahan dan penyitaan, serta menggunakan teknik penyidikan khusus seperti penyadapan komunikasi (Intercepting Communications), operasi penyamaran (Undercover Operations), dan pengiriman terkendali (Controlled Delivery).',
    storyTitle:
      'Penggunaan Teknik Pengiriman Terkendali (Controlled Delivery) untuk Mengungkap Pengendali Jaringan',
    storySteps: [
      'Aparat mendeteksi seorang kurir tiba di bandara membawa koper berisi uang tunai hasil kejahatan lintas negara.',
      'Apabila kurir tersebut langsung ditangkap di area bandara, penyidik akan kesulitan membuktikan siapa pengendali utama yang menunggu kiriman dana tersebut.',
      'Dengan teknik Controlled Delivery (Pengiriman Terkendali) dan penyadapan resmi sesuai Rekomendasi 31, penyidik memantau pergerakan kurir secara tertutup hingga koper diserahkan kepada pimpinan sindikat di sebuah hotel.',
      'Saat serah-terima berlangsung, penyidik menangkap pimpinan sindikat beserta barang bukti transaksi di lokasi.'
    ],
    jargonBuster: [
      {
        term: 'Controlled Delivery atau Pengiriman Terkendali',
        simpleMeaning:
          'Teknik penyidikan yang membiarkan kiriman uang atau barang ilegal tetap bergerak di bawah pengawasan tertutup aparat guna mengungkap jaringan dan menangkap pelaku utama di tujuan akhir.'
      },
      {
        term: 'Central Account Registry / Mechanism atau Mekanisme Identifikasi Rekening Terpusat',
        simpleMeaning:
          'Sistem yang memungkinkan penyidik mengidentifikasi secara cepat di lembaga keuangan mana saja seorang tersangka memiliki atau mengendalikan rekening.'
      }
    ],
    misconception: {
      myth: 'Penyidik tidak dapat melacak rekening seorang tersangka apabila tersangka menolak menyebutkan nama bank tempat ia menyimpan uang.',
      reality:
        'Melalui kewenangan Rekomendasi 31 dan koordinasi bersama FIU serta otoritas pengawas, penyidik dapat mengidentifikasi seluruh rekening dan aset keuangan milik tersangka.'
    }
  },
  32: {
    recId: 32,
    analogyTitle:
      'Pengawasan Pembawaan Uang Tunai dan Surat Berharga di Perbatasan (Cash Couriers)',
    analogyBody:
      'Ketika jalur transfer perbankan diawasi secara ketat (R.16), sebagian pelaku kejahatan memilih cara konvensional dengan membawa uang kertas tunai atau surat berharga atas unjuk di dalam koper melintasi bandara dan pelabuhan. Rekomendasi 32 tentang Cash Couriers atau Kurir Uang Tunai mewajibkan setiap negara menerapkan sistem deklarasi di perbatasan: setiap orang yang membawa uang tunai atau Bearer Negotiable Instruments (BNIs) melintasi batas negara di atas ambang tertentu (standar maksimal FATF USD/EUR 10.000; di Indonesia Rp 100 juta) wajib melaporkannya kepada Bea Cukai.',
    storyTitle:
      'Penindakan Pembawaan Uang Tunai Tanpa Deklarasi di Bandara Internasional',
    storySteps: [
      'Seorang penumpang penerbangan internasional melewati jalur hijau Bea Cukai tanpa melaporkan barang bawaannya.',
      'Melalui pemindaian mesin X-Ray, petugas Bea Cukai menemukan tumpukan uang kertas valuta asing senilai Rp 10 miliar di dalam bagasi penumpang tersebut.',
      'Saat dimintai keterangan mengenai asal-usul dan tujuan penggunaan dana, penumpang memberikan penjelasan yang tidak konsisten.',
      'Berdasarkan Rekomendasi 32, petugas Bea Cukai berwenang menahan uang tunai tersebut, mengenakan sanksi atas pelanggaran deklarasi, serta berkoordinasi dengan PPATK dan penyidik untuk memeriksa indikasi pencucian uang.'
    ],
    jargonBuster: [
      {
        term: 'Cash Couriers atau Kurir Pembawa Uang Tunai Lintas Batas',
        simpleMeaning:
          'Individu yang membawa atau menyelundupkan uang tunai fisik maupun instrumen pembayaran atas unjuk melintasi perbatasan negara.'
      },
      {
        term: 'Bearer Negotiable Instruments (BNIs) atau Instrumen Pembayaran Atas Unjuk',
        simpleMeaning:
          'Surat berharga yang dapat langsung dicairkan oleh pemegang fisiknya, seperti Traveller’s Cheques (Cek Perjalanan), wesel, atau cek yang ditandatangani tanpa nama penerima.'
      }
    ],
    misconception: {
      myth: 'Ketentuan batas Rp 100 juta (atau USD 10.000) di bandara berarti masyarakat dilarang membawa uang tunai melebihi jumlah tersebut saat bepergian.',
      reality:
        'Aturan tersebut bukan larangan mutlak bagi dana yang sah, melainkan kewajiban deklarasi (pelaporan pada formulir Bea Cukai serta izin Bank Indonesia untuk uang kertas rupiah berjumlah besar) agar asal-usul dana dapat diverifikasi.'
    }
  },
  33: {
    recId: 33,
    analogyTitle:
      'Mengukur Efektivitas Penegakan Hukum melalui Statistik Nasional Komprehensif',
    analogyBody:
      'Keberhasilan rezim antipencucian uang suatu negara tidak dapat dinilai hanya dari banyaknya undang-undang yang diterbitkan, melainkan dari hasil penegakan hukumnya. Untuk mengukur kinerja tersebut secara objektif, Rekomendasi 33 tentang Statistics mewajibkan negara memelihara data statistik nasional yang lengkap: jumlah laporan STR/LTKM yang diterima PPATK, jumlah perkara yang naik ke tahap penyidikan dan penuntutan, jumlah putusan pemidanaan di pengadilan, hingga nilai aset kejahatan yang berhasil dirampas negara.',
    storyTitle:
      'Mendeteksi Kemacetan Penanganan Perkara dari Data Statistik Nasional',
    storySteps: [
      'Dalam evaluasi nasional, tercatat perbankan mengirimkan 100.000 laporan transaksi mencurigakan (STR) setiap tahun kepada FIU.',
      'Namun ketika tabel Statistik Nasional (Rekomendasi 33) diperiksa, terlihat bahwa dari 100.000 laporan tersebut hanya 2 perkara yang berujung pada putusan pengadilan dengan nilai penyitaan aset yang sangat kecil.',
      'Data statistik ini membantu pemerintah mengidentifikasi letak hambatan antara analisis intelijen dan proses penyidikan sehingga perbaikan dapat difokuskan secara tepat.'
    ],
    jargonBuster: [
      {
        term: 'Comprehensive AML/CFT Statistics atau Statistik Komprehensif Efektivitas APU-PPT',
        simpleMeaning:
          'Kumpulan data resmi nasional (jumlah STR, penyidikan, penuntutan, vonis, aset yang dibekukan/dirampas, serta permintaan bantuan internasional) untuk mengevaluasi efektivitas sistem APU-PPT.'
      }
    ],
    misconception: {
      myth: 'Tingginya jumlah laporan transaksi mencurigakan yang dikirim oleh bank sudah cukup membuktikan bahwa suatu negara berhasil memberantas pencucian uang.',
      reality:
        'Jumlah laporan hanya mencerminkan tahap awal deteksi; efektivitas sistem diukur dari tindak lanjut penyidikan, vonis pemidanaan, dan nilai aset kejahatan yang berhasil dirampas.'
    }
  },
  34: {
    recId: 34,
    analogyTitle:
      'Pemberian Pedoman Tipologi dan Umpan Balik Dua Arah kepada Pihak Pelapor',
    analogyBody:
      'Kualitas laporan transaksi mencurigakan dari perbankan dan profesi non-bank sangat bergantung pada kejelasan panduan dari regulator. Apabila pihak pelapor terus mengirimkan laporan tanpa pernah memperoleh evaluasi atau informasi mengenai tren kejahatan terbaru, deteksi di lapangan menjadi kurang akurat. Rekomendasi 34 tentang Guidance and Feedback mewajibkan otoritas pengawas, Self-Regulatory Bodies (SRBs), dan FIU (PPATK) menerbitkan pedoman praktis, kajian modus kejahatan (Typologies), serta umpan balik berkala kepada pihak pelapor.',
    storyTitle:
      'Mengenali Pola Rekening Penampung (Money Mule) melalui Pedoman PPATK',
    storySteps: [
      'Jaringan penipuan daring menggunakan modus baru dengan menyewa rekening milik mahasiswa untuk menampung dan memutar dana hasil kejahatan.',
      'Pada awalnya, sejumlah kantor cabang bank daerah belum mengenali pola tersebut karena nominal transaksi di tiap rekening relatif kecil.',
      'Sesuai Rekomendasi 34, PPATK bersama otoritas pengawas menerbitkan pedoman Typologies & Red Flags (Tipologi dan Indikator Mencurigakan) mengenai karakteristik rekening penampung serta memberikan umpan balik kepada perbankan.',
      'Berbekal indikator tersebut, perbankan dapat mendeteksi dan melaporkan jaringan rekening penampung secara lebih akurat.'
    ],
    jargonBuster: [
      {
        term: 'Guidance and Feedback atau Pedoman dan Umpan Balik',
        simpleMeaning:
          'Pemberian panduan teknis serta evaluasi kualitas pelaporan oleh FIU (PPATK) dan otoritas pengawas kepada lembaga keuangan maupun DNFBP.'
      },
      {
        term: 'Typologies and Red Flags atau Kajian Tipologi (Modus) & Indikator Mencurigakan',
        simpleMeaning:
          'Typologies adalah pola atau teknik yang digunakan pelaku untuk mencuci uang; sedangkan Red Flags adalah tanda-tanda peringatan pada transaksi atau perilaku nasabah.'
      }
    ],
    misconception: {
      myth: 'Komunikasi dalam rezim APU-PPT hanya berjalan satu arah dari bank kepada PPATK.',
      reality:
        'Rekomendasi 34 mewajibkan komunikasi dua arah di mana otoritas dan FIU aktif memberikan panduan serta umpan balik guna meningkatkan kualitas deteksi pihak pelapor.'
    }
  },
  35: {
    recId: 35,
    analogyTitle:
      'Sanksi yang Proporsional dan Memberi Efek Jera bagi Perusahaan maupun Direksi',
    analogyBody:
      'Apabila sebuah lembaga keuangan memperoleh keuntungan puluhan miliar rupiah dari memfasilitasi transaksi nasabah berisiko tinggi, namun ancaman denda di dalam regulasi hanya bernilai beberapa juta rupiah, denda tersebut hanya akan dianggap sebagai biaya operasional biasa. Rekomendasi 35 tentang Sanctions mewajibkan setiap negara menyediakan sanksi (pidana, perdata, atau administratif) yang Effective, Proportionate, and Dissuasive (Efektif, Proporsional, dan Memberi Efek Jera), serta memastikan sanksi tersebut dapat dijatuhkan baik kepada badan usahanya maupun secara langsung kepada jajaran Direksi dan Manajemen Seniornya.',
    storyTitle:
      'Penjatuhan Denda Korporasi dan Pencopotan Pejabat Eksekutif yang Lalai',
    storySteps: [
      'Manajemen senior sebuah lembaga keuangan mengabaikan temuan unit kepatuhan demi mempertahankan pendapatan komisi dari nasabah berisiko tinggi.',
      'Ketika pelanggaran sistemik tersebut ditemukan dalam pemeriksaan regulator, sanksi berdasarkan Rekomendasi 35 diterapkan.',
      'Lembaga keuangan tersebut dijatuhi denda finansial yang melebihi nilai keuntungan dari pelanggaran tersebut.',
      'Pada saat bersamaan, direktur yang bertanggung jawab dikenai sanksi pencopotan jabatan dan larangan berkarir di sektor jasa keuangan.'
    ],
    jargonBuster: [
      {
        term: 'Effective, Proportionate, and Dissuasive Sanctions (Sanksi yang Efektif, Proporsional, dan Memberi Efek Jera)',
        simpleMeaning:
          'Tiga tolok ukur sanksi FATF: dapat diterapkan secara nyata (Effective), sebanding dengan tingkat pelanggaran (Proportionate), dan cukup tegas untuk mencegah pengulangan (Dissuasive).'
      }
    ],
    misconception: {
      myth: 'Sanksi atas pelanggaran kewajiban APU-PPT hanya dapat dijatuhkan kepada perusahaan bank secara institusi, bukan kepada pejabat pengurusnya.',
      reality:
        'Rekomendasi 35 secara tegas mensyaratkan agar sanksi dapat diterapkan langsung kepada Directors and Senior Management (Direksi dan Manajemen Senior) selain kepada badan hukumnya.'
    }
  },
  36: {
    recId: 36,
    analogyTitle:
      'Penyelarasan Hukum Nasional dengan Empat Konvensi Internasional PBB',
    analogyBody:
      'Kerja sama penegakan hukum antarnegara sering terkendala apabila perbuatan yang dianggap sebagai tindak pidana di satu negara belum diatur dalam undang-undang negara lain. Untuk menyamakan standar hukum pidana secara global, Perserikatan Bangsa-Bangsa (PBB) menetapkan empat konvensi internasional utama. Rekomendasi 36 tentang International Instruments mewajibkan setiap negara meratifikasi dan mengimplementasikan secara penuh keempat konvensi PBB tersebut ke dalam hukum nasionalnya.',
    storyTitle:
      'Empat Konvensi PBB yang Menjadi Landasan Hukum Kejahatan Lintas Batas',
    storySteps: [
      '1. Vienna Convention (Konvensi Wina 1988): Mengatur pemidanaan peredaran gelap narkotika dan pencucian uang hasil narkotika.',
      '2. Palermo Convention (Konvensi Palermo 2000): Mengatur pemberantasan sindikat kejahatan transnasional terorganisir, perdagangan orang, dan penyelundupan.',
      '3. Merida Convention / UNCAC (Konvensi PBB Antikorupsi 2003): Mengatur pemidanaan korupsi serta mekanisme pemulihan aset hasil korupsi lintas negara.',
      '4. Terrorist Financing Convention (Konvensi Pendanaan Terorisme 1999): Mengatur pemidanaan penghimpunan dan penyediaan dana bagi aksi terorisme.'
    ],
    jargonBuster: [
      {
        term: 'Ratification and Full Implementation atau Ratifikasi dan Implementasi Penuh Konvensi PBB',
        simpleMeaning:
          'Kewajiban mengesahkan perjanjian internasional menjadi undang-undang nasional serta menjalankan ketentuan pidana dan kerja samanya di pengadilan domestik.'
      }
    ],
    misconception: {
      myth: 'Penandatanganan konvensi PBB oleh perwakilan diplomatik sudah cukup untuk memenuhi persyaratan Rekomendasi 36.',
      reality:
        'Selain menandatangani dan meratifikasi, negara wajib mengadopsi ketentuan konvensi tersebut ke dalam undang-undang domestik dan menerapkannya secara efektif.'
    }
  },
  37: {
    recId: 37,
    analogyTitle:
      'Memperoleh Alat Bukti Sah dari Luar Negeri melalui Mutual Legal Assistance (MLA)',
    analogyBody:
      'Ketika pelaku tindak pidana menyembunyikan dana hasil kejahatan di bank luar negeri, penyidik domestik tidak memiliki yurisdiksi untuk langsung menggeledah bank di negara lain. Agar dokumen rekening koran atau keterangan saksi dari luar negeri sah dijadikan alat bukti di pengadilan, permintaannya harus diajukan melalui jalur resmi antarnegara yang disebut Mutual Legal Assistance (MLA) atau Bantuan Timbal Balik dalam Masalah Pidana. Rekomendasi 37 mewajibkan setiap negara melayani permintaan MLA secara cepat, konstruktif, dan tanpa hambatan birokrasi yang tidak semestinya.',
    storyTitle:
      'Pengajuan Permintaan MLA untuk Membuktikan Rekening Luar Negeri di Persidangan',
    storySteps: [
      'Jaksa penuntut umum menangani perkara korupsi di mana terdakwa membantah memiliki simpanan dana di luar negeri.',
      'Dari informasi awal intelijen keuangan (FIU), diketahui terdapat rekening terkait di Negara X, namun laporan intelijen FIU tidak dapat langsung dijadikan alat bukti di pengadilan.',
      'Melalui Otoritas Pusat (Central Authority), pemerintah mengirimkan permintaan resmi Mutual Legal Assistance (MLA) sesuai Rekomendasi 37 kepada Negara X.',
      'Otoritas Negara X memperoleh dokumen mutasi bank resmi yang telah dilegalisir dan menyerahkannya kepada jaksa untuk dihadirkan sebagai alat bukti sah di persidangan.'
    ],
    jargonBuster: [
      {
        term: 'Mutual Legal Assistance (MLA) atau Bantuan Timbal Balik dalam Masalah Pidana',
        simpleMeaning:
          'Mekanisme kerja sama hukum resmi antarnegara untuk memperoleh alat bukti pengadilan, memeriksa saksi, melakukan penggeledahan, atau menyita dokumen di yurisdiksi asing.'
      },
      {
        term: 'Dual Criminality atau Prinsip Kriminalitas Ganda',
        simpleMeaning:
          'Prinsip bahwa tindak pidana yang dimintakan bantuan hukum sama-sama dikriminalisasi baik di negara peminta maupun di negara yang dimintai bantuan.'
      }
    ],
    misconception: {
      myth: 'Suatu negara dapat menolak permintaan MLA dari negara lain dengan alasan ketentuan rahasia bank atau karena perkaranya berkaitan dengan pajak.',
      reality:
        'Rekomendasi 37 secara tegas melarang penolakan permintaan MLA atas dasar rahasia bank maupun alasan bahwa tindak pidana tersebut melibatkan urusan perpajakan.'
    }
  },
  38: {
    recId: 38,
    analogyTitle:
      'Kerja Sama Lintas Negara untuk Membekukan, Merampas, dan Memulangkan Aset Kejahatan',
    analogyBody:
      'Apabila Rekomendasi 37 berfokus pada perolehan dokumen bukti dan keterangan saksi lintas batas, maka Rekomendasi 38 tentang Mutual Legal Assistance: Freezing and Confiscation berfokus pada tindakan mengunci, menyita, merampas, dan mengembalikan harta hasil kejahatan yang disembunyikan di luar negeri. Negara wajib memiliki wewenang hukum untuk merespons cepat permintaan negara lain dalam melakukan Freeze (pembekuan), Seize (penyitaan), dan Confiscate (perampasan) aset, termasuk mengeksekusi perintah perampasan tanpa pemidanaan (NCBF) serta mengatur pemulangan aset (Asset Repatriation).',
    storyTitle:
      'Pelacakan dan Pemulangan Aset Korupsi yang Dibelikan Properti di Luar Negeri',
    storySteps: [
      'Seorang pelaku korupsi mengalihkan dana publik sebesar USD 100 juta untuk membeli properti dan menyimpan deposito di beberapa negara.',
      'Pengadilan di negara asal mengeluarkan penetapan pembekuan dan perampasan aset, termasuk perintah Non-Conviction Based Confiscation atas aset pelaku yang melarikan diri.',
      'Berdasarkan Rekomendasi 38, otoritas di negara tempat aset berada mengakui dan melaksanakan perintah penyitaan tersebut.',
      'Melalui kesepakatan pemulangan dan pembagian aset (Asset Sharing / Repatriation), hasil lelang aset tersebut dikembalikan ke kas negara asal.'
    ],
    jargonBuster: [
      {
        term: 'Asset Freezing, Seizure, Confiscation & Repatriation (Pembekuan, Penyitaan, Perampasan & Pemulangan Aset Lintas Negara)',
        simpleMeaning:
          'Rangkaian tindakan hukum internasional untuk mengamankan aset hasil kejahatan di yurisdiksi asing, merampas hak miliknya, dan memulangkannya ke negara korban.'
      },
      {
        term: 'Asset Sharing Agreements atau Perjanjian Pembagian Aset Sitaan',
        simpleMeaning:
          'Pengaturan kerja sama antarnegara mengenai pengembalian atau pembagian nilai aset hasil perampasan lintas batas.'
      }
    ],
    misconception: {
      myth: 'Aset hasil kejahatan yang sudah dibelikan properti di negara lain tidak dapat lagi disita atau dipulangkan ke negara asal.',
      reality:
        'Melalui Rekomendasi 38 dan Konvensi PBB Antikorupsi (UNCAC), negara tempat aset berada wajib membantu membekukan, merampas, dan memulangkan aset hasil kejahatan tersebut.'
    }
  },
  39: {
    recId: 39,
    analogyTitle:
      'Kewajiban Ekstradisi Buronan atau Mengadili Sendiri di Pengadilan Domestik',
    analogyBody:
      'Pelaku pencucian uang dan pendanaan terorisme sering berusaha melarikan diri ke negara lain untuk menghindari persidangan. Rekomendasi 39 tentang Extradition atau Ekstradisi mewajibkan setiap negara menetapkan pencucian uang dan pendanaan terorisme sebagai tindak pidana yang dapat diekstradisi serta memproses penyerahan buronan tanpa penundaan. Apabila konstitusi suatu negara melarang mengekstradisi warga negaranya sendiri ke luar negeri, negara tersebut wajib menyerahkan perkara itu kepada penuntut umumnya sendiri untuk diadili di dalam negeri (asas Aut Dedere Aut Judicare).',
    storyTitle:
      'Penerapan Asas "Serahkan atau Adili" (Aut Dedere Aut Judicare)',
    storySteps: [
      'Seorang warga Negara X melakukan tindak pidana pencucian uang di Negara Y, kemudian melarikan diri kembali ke Negara X.',
      'Pemerintah Negara Y mengajukan permintaan resmi Extradition (Ekstradisi) kepada Negara X.',
      'Undang-undang dasar Negara X tidak mengizinkan penyerahan warga negaranya sendiri kepada yurisdiksi asing.',
      'Sesuai Rekomendasi 39, Negara X wajib mengambil alih berkas pembuktian dari Negara Y dan mengadili pelaku tersebut di pengadilan domestik Negara X.'
    ],
    jargonBuster: [
      {
        term: 'Extradition atau Ekstradisi (Penyerahan Tersangka/Terpidana Lintas Negara)',
        simpleMeaning:
          'Proses penyerahan resmi seorang tersangka atau terpidana oleh negara tempat ia ditemukan kepada negara tempat tindak pidana dilakukan untuk diadili atau menjalani pidana.'
      },
      {
        term: 'Aut Dedere Aut Judicare ("Extradite or Prosecute" / Ekstradisi atau Adili)',
        simpleMeaning:
          'Prinsip hukum internasional bahwa negara yang menolak mengekstradisi buronan karena alasan kewarganegaraan wajib mengadili pelaku tersebut di pengadilan domestiknya.'
      }
    ],
    misconception: {
      myth: 'Tersangka pencucian uang yang berhasil pulang ke negara asalnya yang melarang ekstradisi warga negara akan terbebas dari tuntutan pidana.',
      reality:
        'Rekomendasi 39 mewajibkan negara asal untuk segera memproses dan mengadili warganya tersebut di pengadilan domestik bekerja sama dengan negara peminta.'
    }
  },
  40: {
    recId: 40,
    analogyTitle:
      'Jalur Pertukaran Informasi Cepat Antar-Lembaga Sejenis Lintas Negara (FIU, Pengawas & Polisi)',
    analogyBody:
      'Pengiriman dana hasil kejahatan lintas negara dapat berlangsung dalam hitungan detik, sedangkan prosedur resmi antar-pengadilan (MLA pada Rekomendasi 37) memerlukan waktu untuk kelengkapan dokumen diplomatik. Untuk menjembatani kebutuhan kecepatan di tahap penyelidikan awal dan pengawasan, Rekomendasi 40 tentang Other Forms of International Cooperation mewajibkan tersedianya jalur kerja sama langsung antar-lembaga sejenis (Counterpart-to-Counterpart): PPATK bertukar intelijen langsung dengan FIU asing melalui jaringan Egmont Group, OJK/BI bertukar informasi pengawasan dengan regulator bank asing, dan kepolisian berkoordinasi melalui jaringan Interpol.',
    storyTitle:
      'Pelacakan Dana Kejahatan Siber Lintas Negara melalui Jalur Cepat FIU-ke-FIU',
    storySteps: [
      'Sebuah perusahaan mengalami penipuan pengalihan faktur elektronik (Business Email Compromise) sehingga dana Rp 25 miliar miliknya terkirim ke rekening di Negara A dan segera diteruskan ke Negara B.',
      'Untuk mencegah dana tersebut ditarik tunai sebelum proses MLA selesai, PPATK menggunakan jalur cepat Rekomendasi 40 (FIU-to-FIU Cooperation melalui Egmont Secure Web) untuk mengirimkan informasi intelijen darurat ke FIU Negara A dan Negara B.',
      'FIU di negara tujuan segera menelusuri rekening penampung dan menginformasikan kepada otoritas setempat untuk melakukan penahanan sementara sambil menunggu pengajuan surat resmi MLA dari kejaksaan.'
    ],
    jargonBuster: [
      {
        term: 'Counterpart-to-Counterpart Cooperation atau Kerja Sama Langsung Antar-Lembaga Sejenis',
        simpleMeaning:
          'Pertukaran informasi intelijen dan pengawasan secara langsung antar-instansi yang setara lintas negara (FIU dengan FIU, Pengawas dengan Pengawas, serta Penegak Hukum dengan Penegak Hukum).'
      },
      {
        term: 'Spontaneous Information Sharing atau Pertukaran Informasi secara Spontan/Proaktif',
        simpleMeaning:
          'Penyampaian informasi intelijen secara proaktif kepada otoritas negara mitra tanpa menunggu permintaan terlebih dahulu ketika ditemukan indikasi kejahatan yang berkaitan dengan negara mitra tersebut.'
      },
      {
        term: 'Diagonal Cooperation atau Kerja Sama Lintas Jenis Otoritas',
        simpleMeaning:
          'Pertukaran informasi antara otoritas yang berbeda fungsi di negara lain (misalnya aparat penegak hukum di Negara A meminta informasi melalui jalur FIU kepada otoritas pengawas di Negara B).'
      }
    ],
    misconception: {
      myth: 'Setiap pertukaran informasi awal antara PPATK, OJK, atau Kepolisian dengan mitra luar negerinya harus selalu melalui jalur diplomatik kementerian luar negeri dan perjanjian MLA.',
      reality:
        'Untuk kepentingan intelijen keuangan, pengawasan perbankan, dan penyelidikan awal, Rekomendasi 40 menyediakan saluran komunikasi langsung antar-lembaga yang cepat dan terjamin kerahasiaannya.'
    }
  }
};
