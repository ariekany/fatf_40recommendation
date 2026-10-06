import { BeginnerGuide } from '../types/fatf';

export const BEGINNER_GUIDE_ID_1_TO_20: Record<number, BeginnerGuide> = {
  1: {
    recId: 1,
    analogyTitle:
      'Cara Kerja Triase di Unit Gawat Darurat (UGD) Rumah Sakit',
    analogyBody:
      'Di UGD rumah sakit, dokter tidak memeriksa pasien berdasarkan urutan datang semata, melainkan berdasarkan tingkat kegawatan. Pasien yang mengalami serangan jantung langsung ditangani secara intensif, sedangkan pasien yang hanya luka gores ringan cukup diberi perawatan sederhana. Prinsip yang sama diterapkan oleh Financial Action Task Force (FATF) atau Badan Penentu Standar Global Anti Kejahatan Keuangan melalui Rekomendasi 1 tentang Risk-Based Approach (RBA) atau Pendekatan Berbasis Risiko. Negara dan perbankan diminta memusatkan pengawasan ketat pada area berisiko tinggi (seperti perusahaan cangkang atau transaksi pejabat publik) dan menyederhanakan prosedur bagi masyarakat umum yang berisiko rendah.',
    storyTitle:
      'Perbedaan Pemeriksaan: Tabungan Mahasiswa vs. Perusahaan Ekspor Berlian',
    storySteps: [
      'Rina, seorang mahasiswi, membuka rekening tabungan untuk menerima uang saku Rp 1,5 juta per bulan dari orang tuanya.',
      'Pada hari yang sama, sebuah perusahaan baru bernama PT Permata Global mengajukan pembukaan rekening untuk mengirim dana Rp 50 miliar per minggu ke luar negeri.',
      'Sebelum diterapkannya Risk-Based Approach (RBA) atau Pendekatan Berbasis Risiko, bank kerap menerapkan prosedur administrasi yang seragam bagi keduanya.',
      'Melalui Rekomendasi 1, Rina cukup melalui Simplified Due Diligence (SDD) atau Pemeriksaan Sederhana yang ringkas, sedangkan PT Permata Global harus melewati Enhanced Due Diligence (EDD) atau Pemeriksaan Mendalam atas sumber dana dan pemilik aslinya.'
    ],
    jargonBuster: [
      {
        term: 'Risk-Based Approach (RBA) atau Pendekatan Berbasis Risiko',
        simpleMeaning:
          'Metode pengelolaan kepatuhan yang menyesuaikan ketatnya pengawasan dengan tingkat bahaya nyata: risiko tinggi diperiksa secara mendalam, sedangkan risiko rendah disederhanakan.'
      },
      {
        term: 'National Risk Assessment (NRA) atau Penilaian Risiko Nasional',
        simpleMeaning:
          'Dokumen pemetaan resmi negara yang mengidentifikasi sektor, produk, atau wilayah mana saja yang paling rawan dimanfaatkan untuk pencucian uang dan pendanaan terorisme.'
      },
      {
        term: 'Enhanced Due Diligence (EDD) vs. Simplified Due Diligence (SDD)',
        simpleMeaning:
          'Enhanced Due Diligence (EDD) atau Uji Tuntas Mendalam diterapkan pada nasabah berisiko tinggi, sedangkan Simplified Due Diligence (SDD) atau Uji Tuntas Sederhana diterapkan pada nasabah yang terbukti berisiko rendah.'
      }
    ],
    misconception: {
      myth: 'Menerapkan Risk-Based Approach (RBA) berarti bank sebaiknya menolak seluruh nasabah dari sektor usaha yang dianggap berisiko (De-risking).',
      reality:
        'Financial Action Task Force (FATF) tidak menganjurkan penolakan pukul rata (De-risking), sebab langkah tersebut justru mendorong masyarakat beralih ke jalur transaksi tunai bawah tanah yang tidak terpantau. RBA bertujuan mengelola risiko secara terukur, bukan menghindari layanan.'
    }
  },
  2: {
    recId: 2,
    analogyTitle:
      'Koordinasi Antarlembaga agar Penanganan Kasus Tidak Berjalan Sendiri-Sendiri',
    analogyBody:
      'Pelaku kejahatan keuangan dapat memindahkan dana lintas bank, bea cukai, kantor pajak, hingga bursa aset kripto dalam waktu singkat. Apabila setiap instansi bekerja secara terpisah tanpa berbagi informasi, jejak dana tersebut akan mudah terputus. Oleh sebab itu, Rekomendasi 2 mengatur National Cooperation and Coordination atau Kerja Sama dan Koordinasi Nasional. Melalui aturan ini, Financial Intelligence Unit (FIU) atau Unit Intelijen Keuangan (di Indonesia: PPATK), Kepolisian, Kejaksaan, KPK, OJK, Bank Indonesia, Pajak, dan Bea Cukai diwajibkan memiliki saluran koordinasi yang terhubung.',
    storyTitle:
      'Ketika Temuan Bea Cukai, Pajak, dan PPATK Dihubungkan',
    storySteps: [
      'Petugas Bea Cukai di bandara mendapati penumpang membawa emas batangan dalam jumlah tidak wajar.',
      'Di tempat terpisah, otoritas pajak mencatat orang yang sama memiliki belasan properti mewah meskipun laporan pajaknya nihil, sementara kepolisian sedang menyelidikinya terkait jaringan narkotika.',
      'Jika ketiga instansi tersebut tidak bertukar data, penanganan kasus hanya berhenti pada denda administrasi pabean.',
      'Melalui mekanisme Rekomendasi 2, pertukaran informasi antar-otoritas diselaraskan dengan aturan Data Protection and Privacy (Perlindungan Data Pribadi) sehingga penyidikan terpadu dapat segera dilakukan.'
    ],
    jargonBuster: [
      {
        term: 'Competent Authorities atau Otoritas yang Berwenang',
        simpleMeaning:
          'Instansi pemerintah yang memiliki mandat dalam pencegahan dan pemberantasan kejahatan keuangan, meliputi PPATK, Polri, Kejaksaan, KPK, OJK, BI, Pajak, dan Bea Cukai.'
      },
      {
        term: 'Proliferation Financing (PF) atau Pendanaan Proliferasi Senjata Pemusnah Massal',
        simpleMeaning:
          'Penyediaan dana atau layanan keuangan untuk pengadaan bahan maupun teknologi Weapons of Mass Destruction (WMD) atau Senjata Pemusnah Massal (nuklir, kimia, biologi).'
      }
    ],
    misconception: {
      myth: 'Berlakunya Undang-Undang Perlindungan Data Pribadi (PDP) membuat bank dan PPATK tidak lagi diperbolehkan saling bertukar data rekening yang dicurigai.',
      reality:
        'Rekomendasi 2 mengharuskan pemerintah menyelaraskan aturan pelindungan data pribadi dengan kewajiban Anti-Money Laundering / Countering the Financing of Terrorism (AML/CFT) atau APU-PPT agar ketentuan privasi tidak menghambat penegakan hukum.'
    }
  },
  3: {
    recId: 3,
    analogyTitle:
      'Bagaimana Bisnis Samaran Dipakai untuk Menyamarkan Uang Kejahatan',
    analogyBody:
      'Uang tunai hasil tindak pidana tidak dapat langsung digunakan untuk membeli aset bernilai besar tanpa menimbulkan kecurigaan mengenai asal-usulnya. Pelaku biasanya mencampurkan uang ilegal tersebut ke dalam pembukuan bisnis harian agar tampak seperti pendapatan usaha yang sah. Rekomendasi 3 mewajibkan setiap negara memidanakan perbuatan Money Laundering (ML) atau Pencucian Uang ini, dengan cakupan sekurang-kurangnya 21 Designated Categories of Offences atau 21 Kategori Tindak Pidana Asal (seperti korupsi, narkotika, penipuan, perpajakan, dan kejahatan lingkungan).',
    storyTitle:
      'Modus Restoran Sepi Pengunjung yang Menyetor Omzet Miliaran',
    storySteps: [
      'Seorang pelaku memiliki uang tunai Rp 2 miliar setiap bulan dari peredaran narkotika dan tidak berani menyetorkannya langsung ke rekening pribadi.',
      'Ia kemudian menyewa ruko dan membuka restoran pizza yang sehari-hari sangat jarang dikunjungi pembeli.',
      'Setiap malam, ia menginput ratusan transaksi penjualan tunai fiktif ke mesin kasir dan memasukkan uang hasil narkotika tersebut ke dalam laci kas.',
      'Pada akhir bulan, uang itu disetorkan ke bank sebagai pendapatan restoran. Tindakan menyamarkan asal-usul hasil kejahatan inilah yang dikategorikan sebagai Money Laundering (ML) atau Tindak Pidana Pencucian Uang (TPPU).'
    ],
    jargonBuster: [
      {
        term: 'Predicate Offence atau Tindak Pidana Asal',
        simpleMeaning:
          'Kejahatan awal yang menghasilkan uang atau harta tidak sah, seperti korupsi, narkotika, penipuan, penyelundupan, atau penggelapan pajak.'
      },
      {
        term: 'Self-Laundering atau Pencucian Uang oleh Pelaku Tindak Pidana Asal',
        simpleMeaning:
          'Kondisi ketika pelaku kejahatan asal (misalnya pelaku korupsi) juga menyembunyikan atau mencuci sendiri hasil kejahatannya, sehingga dapat dituntut atas kedua tindak pidana tersebut.'
      }
    ],
    misconception: {
      myth: 'Penyidik dan jaksa harus menunggu putusan pengadilan atas kejahatan asalnya (misalnya perkara korupsinya) inkrah terlebih dahulu sebelum dapat memproses perkara pencucian uangnya.',
      reality:
        'Berdasarkan Rekomendasi 3, pembuktian pencucian uang tidak mensyaratkan adanya putusan pengadilan terlebih dahulu atas tindak pidana asalnya. Bukti keadaan yang objektif mengenai ketidakwajaran dan penyamaran harta sudah cukup untuk memulai penuntutan.'
    }
  },
  4: {
    recId: 4,
    analogyTitle:
      'Menghilangkan Keuntungan Ekonomi dari Kejahatan melalui Perampasan Aset',
    analogyBody:
      'Hukuman penjara saja sering kali tidak memberi efek jera apabila pelaku masih dapat menikmati uang hasil kejahatannya setelah bebas. Untuk memutus insentif ekonomi tersebut, Rekomendasi 4 mengatur Confiscation and Provisional Measures atau Perampasan Aset dan Tindakan Sementara. Negara wajib memiliki kewenangan hukum untuk melakukan Freeze (pembekuan), Seize (penyitaan), dan Confiscate (perampasan permanen untuk negara) atas hasil maupun alat kejahatan, termasuk ketika pelaku melarikan diri atau meninggal dunia.',
    storyTitle:
      'Penanganan Aset Ketika Tersangka Meninggal Dunia atau Melarikan Diri',
    storySteps: [
      'Seorang pejabat menggelapkan anggaran publik Rp 80 miliar, membelikannya sejumlah properti komersial, lalu melarikan diri ke luar negeri.',
      'Sebelum persidangan selesai, tersangka meninggal dunia di luar negeri. Pada sistem hukum lama yang hanya mengenal perampasan pidana biasa, perkara gugur sehingga properti tersebut tetap dikuasai keluarganya.',
      'Dengan mekanisme Non-Conviction Based Confiscation (NCBF) atau Perampasan Aset Tanpa Pemidanaan pada Rekomendasi 4, pengadilan dapat memeriksa status ketidakwajaran aset tersebut dan merampasnya kembali untuk negara.'
    ],
    jargonBuster: [
      {
        term: 'Freeze (Pembekuan), Seize (Penyitaan), dan Confiscate (Perampasan)',
        simpleMeaning:
          'Freeze adalah mengunci rekening atau aset sementara waktu; Seize adalah mengambil alih penguasaan fisik aset; sedangkan Confiscate adalah mencabut hak milik secara permanen melalui putusan pengadilan untuk diserahkan kepada Negara.'
      },
      {
        term: 'Non-Conviction Based Confiscation (NCBF) atau Perampasan Aset Tanpa Pemidanaan',
        simpleMeaning:
          'Prosedur hukum untuk merampas aset hasil kejahatan melalui putusan pengadilan ketika pelakunya tidak dapat dipidana karena meninggal dunia, melarikan diri, atau tidak diketahui keberadaannya.'
      },
      {
        term: 'Value-Based Confiscation atau Perampasan Aset dengan Nilai Setara',
        simpleMeaning:
          'Kewenangan pengadilan untuk merampas harta lain milik pelaku yang nilainya setara apabila uang hasil kejahatan aslinya telah habis dikonsumsi atau tidak lagi ditemukan.'
      }
    ],
    misconception: {
      myth: 'Apabila uang hasil kejahatan sudah habis dibelanjakan atau dialihkan atas nama kerabat, negara tidak lagi bisa menyita aset pelaku.',
      reality:
        'Rekomendasi 4 memberikan wewenang kepada pengadilan untuk membatalkan pengalihan aset yang dilakukan dengan iktikad buruk serta merampas aset lain milik pelaku yang nilainya setara.'
    }
  },
  5: {
    recId: 5,
    analogyTitle:
      'Mengapa Pendanaan Terorisme Sering Berasal dari Sumber Dana yang Tampak Sah',
    analogyBody:
      'Berbeda dengan Money Laundering (ML) yang menyamarkan uang hasil kejahatan agar tampak bersih, Terrorist Financing (TF) atau Pendanaan Terorisme (Rekomendasi 5) kerap menggunakan dana yang berasal dari sumber legal, seperti penghasilan pribadi, keuntungan usaha kecil, atau donasi amal yang disalahgunakan untuk membiayai jaringan teror. Rekomendasi 5 menegaskan bahwa pemberian dana kepada organisasi teroris atau teroris individu tetap merupakan tindak pidana meskipun dana tersebut digunakan untuk biaya hidup sehari-hari dan belum terkait dengan serangan tertentu.',
    storyTitle:
      'Pembiayaan Tiket Perjalanan dan Biaya Hidup Anggota Jaringan Teroris',
    storySteps: [
      'Seseorang menghimpun dana Rp 30 juta dari beberapa rekannya untuk membelikan tiket pesawat dan menyewa tempat tinggal bagi rekrutan Foreign Terrorist Fighters (FTFs) atau Teroris Lintas Negara.',
      'Saat diperiksa, ia beralasan bahwa uang tersebut hanya digunakan untuk biaya transportasi dan kebutuhan makan, bukan untuk membeli senjata atau bahan peledak.',
      'Menurut Rekomendasi 5, pembelaan tersebut tidak menggugurkan pidana. Penyediaan dana atau aset untuk keperluan apa pun kepada teroris individu maupun organisasi teroris tetap dikategorikan sebagai tindak pidana pendanaan terorisme.'
    ],
    jargonBuster: [
      {
        term: 'Terrorist Financing (TF) atau Tindak Pidana Pendanaan Terorisme (TPPT)',
        simpleMeaning:
          'Penyediaan atau pengumpulan dana maupun aset dengan niat atau pengetahuan bahwa dana tersebut akan digunakan untuk aksi teroris, organisasi teroris, atau teroris individu.'
      },
      {
        term: 'Foreign Terrorist Fighters (FTFs) atau Teroris Lintas Negara',
        simpleMeaning:
          'Individu yang melakukan perjalanan ke negara lain untuk melakukan, merencanakan, mempersiapkan, atau mengikuti pelatihan aksi terorisme.'
      }
    ],
    misconception: {
      myth: 'Pelaku baru dapat dipidana atas pendanaan terorisme apabila jaksa dapat membuktikan secara spesifik aksi pengeboman mana yang dibiayai dengan uang tersebut.',
      reality:
        'Rekomendasi 5 menetapkan bahwa pembiayaan terhadap teroris individu atau organisasi teroris merupakan tindak pidana meskipun tidak dikaitkan dengan satu aksi serangan teror tertentu.'
    }
  },
  6: {
    recId: 6,
    analogyTitle:
      'Pembekuan Rekening Seketika Saat Nama Masuk Daftar Sanksi Teroris',
    analogyBody:
      'Di era perbankan digital, dana di dalam rekening dapat dipindahkan ke yurisdiksi lain hanya dalam hitungan detik. Apabila proses pemblokiran rekening milik teroris harus menunggu prosedur administrasi berminggu-minggu, dana tersebut akan lebih dulu ditarik. Karena itu, Rekomendasi 6 mengatur Targeted Financial Sanctions (TFS) related to Terrorism and Terrorist Financing atau Sanksi Keuangan Terarah Terorisme: begitu suatu nama ditetapkan dalam daftar sanksi PBB atau daftar nasional, lembaga keuangan wajib membekukan asetnya Without Delay (Tanpa Penundaan, idealnya dalam hitungan jam) tanpa pemberitahuan terlebih dahulu kepada pemilik rekening.',
    storyTitle:
      'Proses Pembekuan Otomatis Setelah Penetapan Daftar Sanksi',
    storySteps: [
      'Dewan Keamanan PBB memperbarui daftar sanksi teroris global dengan memasukkan nama "Target X".',
      'Sistem kepatuhan di perbankan dan penyedia jasa aset kripto secara otomatis memindai database nasabah terhadap pembaruan daftar tersebut.',
      'Sistem mendeteksi adanya rekening yang dikendalikan oleh Target X dengan saldo Rp 900 juta.',
      'Tanpa memberi tahu Target X (Ex Parte), bank langsung membekukan rekening tersebut dan melaporkannya kepada PPATK serta otoritas terkait.'
    ],
    jargonBuster: [
      {
        term: 'Targeted Financial Sanctions (TFS) atau Sanksi Keuangan Terarah',
        simpleMeaning:
          'Kewajiban membekukan aset tanpa penundaan sekaligus larangan menyediakan dana atau layanan keuangan apa pun kepada pihak yang tercantum dalam daftar sanksi.'
      },
      {
        term: 'Without Delay atau Tanpa Penundaan (Dalam Hitungan Jam)',
        simpleMeaning:
          'Standar waktu pelaksanaan sanksi FATF yang berarti pembekuan harus dilakukan segera, idealnya dalam hitungan jam sejak penetapan nama dalam daftar sanksi.'
      },
      {
        term: 'UNSCR 1267 & UNSCR 1373 (Resolusi Dewan Keamanan PBB)',
        simpleMeaning:
          'UNSCR 1267 adalah rezim daftar sanksi Dewan Keamanan PBB untuk jaringan Al-Qaida dan ISIL; sedangkan UNSCR 1373 mewajibkan negara menyusun daftar pembekuan teroris tingkat nasional (di Indonesia: DTTOT).'
      }
    ],
    misconception: {
      myth: 'Bank harus menunggu putusan pengadilan pidana terlebih dahulu sebelum dapat membekukan rekening orang yang tercantum dalam daftar sanksi teroris PBB atau DTTOT.',
      reality:
        'Targeted Financial Sanctions (TFS) adalah langkah administratif-preventif yang berlaku mengikat secara hukum begitu suatu nama ditetapkan dalam daftar sanksi resmi.'
    }
  },
  7: {
    recId: 7,
    analogyTitle:
      'Memutus Transaksi Perusahaan Perantara Pengadaan Senjata Pemusnah Massal',
    analogyBody:
      'Pengadaan komponen untuk program senjata nuklir atau rudal balistik ilegal jarang dilakukan secara terang-terangan atas nama instansi militer, melainkan melalui jaringan perusahaan dagang samaran (Front Companies) dan perantara perkapalan. Rekomendasi 7 mengatur Targeted Financial Sanctions (TFS) related to Proliferation atau Sanksi Keuangan Terarah Proliferasi. Aturan ini menerapkan kewajiban pembekuan aset Without Delay (dalam hitungan jam) terhadap individu, entitas, atau kapal yang ditetapkan oleh Dewan Keamanan PBB karena terlibat dalam pengembangan Weapons of Mass Destruction (WMD) atau Senjata Pemusnah Massal.',
    storyTitle:
      'Deteksi Kepemilikan Terselubung pada Transaksi Pembelian Mesin Industri',
    storySteps: [
      'Sebuah perusahaan perdagangan mengajukan transfer lintas negara sebesar USD 400.000 untuk membeli peralatan sentrifugal berkecepatan tinggi.',
      'Melalui pemeriksaan sanksi dan struktur kepemilikan, bank mendapati bahwa mayoritas saham perusahaan tersebut dikendalikan secara tidak langsung oleh entitas yang masuk daftar sanksi proliferasi Dewan Keamanan PBB.',
      'Sesuai Rekomendasi 7, bank segera membekukan dana transaksi tersebut, menghentikan pembayaran, dan menyampaikan laporan kepada PPATK serta otoritas pengawas.'
    ],
    jargonBuster: [
      {
        term: 'Proliferation Financing (PF) atau Pendanaan Proliferasi Senjata Pemusnah Massal',
        simpleMeaning:
          'Penyediaan dana atau layanan keuangan untuk pembuatan, perolehan, atau pengiriman senjata nuklir, kimia, maupun biologi yang bertentangan dengan resolusi PBB.'
      },
      {
        term: 'Dual-Use Goods atau Barang Penggunaan Ganda',
        simpleMeaning:
          'Bahan, mesin, atau teknologi yang memiliki fungsi industri sipil yang sah, namun juga dapat digunakan untuk memproduksi senjata pemusnah massal atau rudal.'
      }
    ],
    misconception: {
      myth: 'Pendanaan Proliferasi (R.7) memiliki sasaran yang sama persis dengan Pendanaan Terorisme (R.6).',
      reality:
        'Rekomendasi 6 menyasar individu dan organisasi teroris, sedangkan Rekomendasi 7 menyasar jaringan pendanaan dan pengadaan senjata pemusnah massal (WMD) berdasarkan resolusi Dewan Keamanan PBB.'
    }
  },
  8: {
    recId: 8,
    analogyTitle:
      'Pengawasan Proporsional pada Yayasan Amal agar Bantuan Kemanusiaan Tidak Terhambat',
    analogyBody:
      'Lembaga amal atau Non-Profit Organisations (NPOs) berperan menyalurkan bantuan sosial ke berbagai daerah, termasuk wilayah bencana dan konflik. Di sisi lain, jaringan teroris pernah memanfaatkan sejumlah yayasan sebagai kedok pengumpulan dana. Apabila pemerintah menerapkan aturan yang terlalu kaku terhadap seluruh yayasan tanpa pandang bulu, kegiatan sosial yang sah justru akan lumpuh. Karena itu, Rekomendasi 8 (hasil revisi 2023) mewajibkan pengawasan yang terfokus dan proporsional hanya terhadap kategori NPO yang terbukti memiliki risiko disalahgunakan untuk Terrorist Financing (TF) atau Pendanaan Terorisme.',
    storyTitle:
      'Membedakan Perkumpulan Sosial Lokal dengan Yayasan yang Beroperasi di Zona Konflik',
    storySteps: [
      'Organisasi A adalah perkumpulan warga lokal yang menghimpun iuran bulanan untuk kegiatan beasiswa dan perbaikan fasilitas lingkungan.',
      'Organisasi B menghimpun donasi lintas negara dalam jumlah besar dan menyalurkan dana tunai ke wilayah luar negeri yang sedang dilanda konflik bersenjata.',
      'Berdasarkan Rekomendasi 8, pemerintah tidak membebani Organisasi A dengan pengawasan berat, melainkan memfokuskan pembinaan tata kelola dan verifikasi mitra penyalur pada Organisasi B.'
    ],
    jargonBuster: [
      {
        term: 'Non-Profit Organisations (NPOs) atau Organisasi Nirlaba / Yayasan Amal',
        simpleMeaning:
          'Dalam definisi FATF: badan hukum atau organisasi yang kegiatan utamanya menghimpun atau menyalurkan dana untuk tujuan amal, keagamaan, budaya, pendidikan, atau sosial.'
      },
      {
        term: 'Focused, Proportionate, and Risk-Based Measures (Langkah Terfokus & Berbasis Risiko)',
        simpleMeaning:
          'Prinsip pengawasan terhadap NPO yang disesuaikan dengan tingkat risiko nyata sehingga tidak menghambat penyaluran bantuan kemanusiaan yang sah.'
      }
    ],
    misconception: {
      myth: 'FATF mewajibkan perbankan menggolongkan seluruh yayasan dan organisasi sosial sebagai nasabah berisiko tinggi.',
      reality:
        'Revisi Rekomendasi 8 tahun 2023 secara tegas melarang perlakuan pukul rata terhadap NPO dan meminta agar layanan perbankan bagi lembaga kemanusiaan yang sah tetap terjaga.'
    }
  },
  9: {
    recId: 9,
    analogyTitle:
      'Kerahasiaan Data Nasabah Tidak Boleh Menghalangi Pengawasan dan Penegakan Hukum',
    analogyBody:
      'Ketentuan rahasia bank berfungsi melindungi data keuangan nasabah dari pihak luar yang tidak berkepentingan. Namun di masa lalu, aturan rahasia bank di sejumlah negara kerap dijadikan alasan untuk menolak memberikan dokumen transaksi kepada pengawas perbankan maupun aparat penegak hukum. Rekomendasi 9 tentang Financial Institution Secrecy Laws atau Undang-Undang Kerahasiaan Lembaga Keuangan menetapkan bahwa aturan kerahasiaan bank tidak boleh menghambat pelaksanaan kewajiban dalam Rekomendasi FATF.',
    storyTitle:
      'Pengecualian Rahasia Bank Saat Permintaan Data oleh PPATK dan Pengawas',
    storySteps: [
      'Financial Intelligence Unit (FIU) atau PPATK menelusuri aliran dana mencurigakan sebesar Rp 20 miliar yang masuk ke sebuah rekening perbankan.',
      'Ketika PPATK meminta dokumen pembukaan rekening dan mutasi transaksi, bank tidak dapat menolak permintaan tersebut dengan dalih undang-undang rahasia bank.',
      'Sesuai Rekomendasi 9, undang-undang nasional memberikan pengecualian tegas sehingga akses data bagi otoritas berwenang dan pertukaran informasi kepatuhan antar-bank dapat berjalan.'
    ],
    jargonBuster: [
      {
        term: 'Financial Institution Secrecy Laws atau Undang-Undang Rahasia Bank/Lembaga Keuangan',
        simpleMeaning:
          'Ketentuan hukum yang menjaga kerahasiaan data nasabah dari publik, namun wajib memiliki pengecualian bagi otoritas berwenang (PPATK, OJK/BI, Penegak Hukum) dalam pelaksanaan APU-PPT.'
      }
    ],
    misconception: {
      myth: 'Penerapan Rekomendasi 9 membuat data saldo rekening nasabah dapat diakses secara bebas oleh masyarakat umum.',
      reality:
        'Privasi data nasabah terhadap publik tetap dilindungi oleh undang-undang; pembukaan akses hanya berlaku secara terbatas untuk otoritas resmi dan prosedur kepatuhan yang diatur hukum.'
    }
  },
  10: {
    recId: 10,
    analogyTitle:
      'Mengenali Identitas Nasabah dan Menelusuri Manusia Asli di Balik Perusahaan (CDD)',
    analogyBody:
      'Lembaga keuangan tidak diperbolehkan membuka rekening tanpa nama (anonim) atau menggunakan identitas palsu. Melalui Rekomendasi 10 tentang Customer Due Diligence (CDD) atau Uji Tuntas Nasabah, bank wajib memverifikasi identitas setiap calon nasabah, memahami tujuan pembukaan rekening, serta memantau kesesuaian transaksinya. Apabila nasabah berbentuk badan hukum seperti PT atau Yayasan, bank wajib menelusuri struktur kepemilikannya hingga menemukan manusia asli yang memegang kendali akhir, yaitu Beneficial Owner (BO) atau Pemilik Manfaat Sebenarnya.',
    storyTitle:
      'Menemukan Pemilik Manfaat Sebenarnya di Balik Direktur Pinjam Nama',
    storySteps: [
      'Pak Budi, yang sehari-hari bekerja sebagai sopir dengan penghasilan Rp 4 juta per bulan, datang ke bank sebagai Direktur Utama PT Megah Abadi untuk membuka rekening perusahaan dan menyetor dana Rp 50 miliar.',
      'Jika bank hanya memeriksa akta pendirian secara administratif, Pak Budi akan tercatat sebagai pemilik dana tersebut.',
      'Melalui prosedur Customer Due Diligence (CDD) atau Uji Tuntas Nasabah pada Rekomendasi 10, petugas bank menggali informasi mengenai sumber dana dan pihak yang sesungguhnya mengendalikan perusahaan.',
      'Dari verifikasi tersebut diketahui bahwa Pak Budi hanya dipinjam namanya (Nominee), sedangkan Beneficial Owner (BO) atau Pemilik Manfaat Sebenarnya di balik PT tersebut adalah seorang tersangka korupsi.'
    ],
    jargonBuster: [
      {
        term: 'Customer Due Diligence (CDD) atau Uji Tuntas Nasabah (Prinsip Mengenal Pengguna Jasa)',
        simpleMeaning:
          'Empat kewajiban dasar lembaga keuangan: (1) Mengidentifikasi dan memverifikasi nasabah, (2) Mengidentifikasi Beneficial Owner, (3) Memahami tujuan hubungan usaha, dan (4) Melakukan pemantauan transaksi berkelanjutan.'
      },
      {
        term: 'Beneficial Owner (BO) atau Pemilik Manfaat Sebenarnya',
        simpleMeaning:
          'Orang perseorangan (manusia alami, bukan perusahaan lain) yang pada akhirnya memiliki dana, menikmati keuntungan, atau memegang kendali efektif atas suatu nasabah atau badan hukum.'
      },
      {
        term: 'Ongoing Due Diligence atau Pemantauan Berkelanjutan',
        simpleMeaning:
          'Kewajiban bank untuk memantau transaksi nasabah secara berkala guna memastikan aktivitas rekening tetap sesuai dengan profil usaha dan sumber dana nasabah.'
      }
    ],
    misconception: {
      myth: 'Kewajiban Customer Due Diligence (CDD) sudah selesai sepenuhnya begitu nasabah menyerahkan fotokopi KTP saat hari pertama membuka rekening.',
      reality:
        'CDD berlangsung sepanjang masa hubungan usaha. Bank wajib terus memantau kewajaran transaksi dan memperbarui data nasabah apabila terjadi perubahan profil risiko.'
    }
  },
  11: {
    recId: 11,
    analogyTitle:
      'Menyimpan Rekaman Transaksi dan Identitas Selama Minimal 5 Tahun',
    analogyBody:
      'Dalam penyelidikan kecelakaan transportasi, kotak hitam (Black Box) dibutuhkan untuk merekonstruksi kejadian secara akurat. Di bidang keuangan, perkara korupsi atau penipuan berskala besar sering kali baru terungkap beberapa tahun setelah uangnya dipindahkan. Apabila bank menghapus bukti transfer dan dokumen identitas nasabah dalam waktu singkat, penelusuran aliran dana akan terhenti. Karena itu, Rekomendasi 11 tentang Record-Keeping atau Penyimpanan Dokumen mewajibkan lembaga keuangan menyimpan arsip transaksi dan dokumen CDD sekurang-kurangnya selama 5 tahun.',
    storyTitle:
      'Menelusuri Kembali Aliran Dana Suap yang Terjadi Empat Tahun Sebelumnya',
    storySteps: [
      'Pada tahun 2026, penyidik menangani perkara suap pengadaan proyek yang transaksinya berlangsung pada tahun 2022.',
      'Perusahaan perantara yang digunakan pelaku telah dibubarkan dan rekening banknya sudah ditutup sejak tahun 2023.',
      'Berdasarkan aturan Record-Keeping (Rekomendasi 11), bank masih menyimpan seluruh arsip pembukaan rekening, data Beneficial Owner, serta catatan mutasi transfer selama minimal 5 tahun sejak rekening ditutup.',
      'Arsip tersebut diserahkan secara cepat kepada penyidik sehingga alur pengiriman uang dari pengirim hingga penerima dapat dibuktikan di persidangan.'
    ],
    jargonBuster: [
      {
        term: 'Record-Keeping atau Penyimpanan Dokumen & Catatan Transaksi',
        simpleMeaning:
          'Kewajiban menyimpan seluruh catatan transaksi domestik maupun internasional serta dokumen identitas/CDD nasabah selama minimal 5 tahun.'
      },
      {
        term: 'Reconstruction of Individual Transactions atau Rekonstruksi Transaksi Individual',
        simpleMeaning:
          'Kelengkapan rincian arsip transaksi (tanggal, nominal, mata uang, pengirim, dan penerima) sehingga alur pergerakan dana dapat disusun ulang sebagai alat bukti.'
      }
    ],
    misconception: {
      myth: 'Batas waktu 5 tahun penyimpanan dokumen identitas (KTP/akta) nasabah dihitung sejak tanggal nasabah pertama kali membuka rekening.',
      reality:
        'Untuk dokumen identitas dan berkas CDD, masa simpan minimal 5 tahun baru mulai dihitung setelah hubungan usaha berakhir atau setelah rekening ditutup oleh nasabah.'
    }
  },
  12: {
    recId: 12,
    analogyTitle:
      'Pengawasan Lebih Ketat bagi Pejabat Publik yang Mengelola Kewenangan Negara (PEPs)',
    analogyBody:
      'Pejabat tinggi negara seperti Menteri, Kepala Daerah, Anggota Parlemen, Hakim, Perwira Tinggi, maupun Direksi BUMN memegang kewenangan besar atas anggaran publik dan perizinan. Dalam banyak kasus korupsi, pelaku jarang menyimpan uang suap di rekening pribadinya sendiri, melainkan menggunakan rekening pasangan, anak, atau rekan bisnis dekatnya. Oleh karena itu, Rekomendasi 12 mewajibkan pemeriksaan mendalam terhadap Politically Exposed Persons (PEPs) atau Orang yang Populer Secara Politis beserta anggota keluarga dan pihak yang terasosiasi dekat dengannya.',
    storyTitle:
      'Pembelian Properti Mewah oleh Anggota Keluarga Pejabat Publik',
    storySteps: [
      'Seorang mahasiswa berusia 20 tahun yang belum memiliki penghasilan tetap hendak mentransfer Rp 40 miliar melalui bank untuk membeli apartemen mewah.',
      'Sistem penyaringan bank mengidentifikasi bahwa nasabah tersebut adalah anak kandung dari pejabat tinggi yang sedang membawahi proyek infrastruktur besar (Family Member of a PEP).',
      'Sesuai Rekomendasi 12, bank wajib meminta persetujuan Senior Management (Manajemen Senior) serta memverifikasi Source of Wealth (Sumber Kekayaan) dan Source of Funds (Sumber Dana) secara mendalam.',
      'Setelah diketahui bahwa dana Rp 40 miliar itu berasal dari transfer perusahaan rekanan proyek ayahnya, bank menahan transaksi dan melaporkan temuan tersebut ke PPATK.'
    ],
    jargonBuster: [
      {
        term: 'Politically Exposed Persons (PEPs) atau Orang yang Populer Secara Politis (Pejabat Publik Berisiko Tinggi)',
        simpleMeaning:
          'Individu yang memegang fungsi publik strategis di dalam negeri (Domestic PEPs), di negara asing (Foreign PEPs), atau di organisasi internasional, termasuk keluarga dekat dan rekan bisnis kepercayaannya.'
      },
      {
        term: 'Source of Wealth (Sumber Kekayaan) vs. Source of Funds (Sumber Dana)',
        simpleMeaning:
          'Source of Wealth menjelaskan bagaimana total harta kekayaan nasabah terkumpul dari waktu ke waktu; sedangkan Source of Funds menjelaskan asal uang spesifik yang digunakan dalam suatu transaksi tertentu.'
      }
    ],
    misconception: {
      myth: 'Seseorang yang berstatus sebagai PEP dilarang membuka rekening atau bertransaksi di perbankan.',
      reality:
        'Pejabat publik tetap berhak menggunakan layanan perbankan secara normal; status PEP hanya mengharuskan bank menerapkan verifikasi tambahan (EDD) untuk mencegah penyalahgunaan dana publik.'
    }
  },
  13: {
    recId: 13,
    analogyTitle:
      'Memeriksa Rekam Jejak Bank Mitra di Luar Negeri dalam Hubungan Perbankan Koresponden',
    analogyBody:
      'Untuk memproses pengiriman mata uang asing ke luar negeri, sebuah bank umumnya menjalin kerja sama rekening dengan bank mitra di negara tujuan yang disebut Correspondent Banking atau Perbankan Koresponden. Apabila bank mitra di luar negeri tersebut memiliki pengawasan yang lemah dan menerima dana dari sindikat kejahatan, aliran uang ilegal itu akan ikut masuk ke dalam jaringan bank domestik. Karena itu, Rekomendasi 13 mewajibkan bank menilai kualitas pengendalian APU-PPT bank mitranya serta melarang keras hubungan kerja sama dengan Shell Bank atau Bank Cangkang.',
    storyTitle:
      'Menolak Permohonan Rekening Koresponden dari Bank Tanpa Kantor Fisik',
    storySteps: [
      'Sebuah entitas bernama "Pacific Island Bank" mengajukan pembukaan rekening koresponden Dolar AS kepada sebuah bank internasional.',
      'Berdasarkan Rekomendasi 13, bank internasional tersebut meneliti izin operasional, kualitas pengawasan di negara asal, serta keberadaan kantor dan manajemen fisik Pacific Island Bank.',
      'Dari hasil pemeriksaan ditemukan bahwa entitas tersebut hanya memiliki alamat kotak surat tanpa kantor fisik maupun manajemen nyata (Shell Bank). Permohonan kerja sama tersebut langsung ditolak.'
    ],
    jargonBuster: [
      {
        term: 'Correspondent Bank vs. Respondent Bank',
        simpleMeaning:
          'Correspondent Bank adalah bank yang menyediakan layanan kliring dan pembayaran internasional; sedangkan Respondent Bank adalah bank mitra yang menggunakan layanan tersebut.'
      },
      {
        term: 'Payable-Through Accounts (PTA) atau Rekening Koresponden Akses Langsung',
        simpleMeaning:
          'Rekening koresponden yang memungkinkan nasabah milik bank responden melakukan transaksi secara langsung melalui rekening tersebut, sehingga memerlukan verifikasi tambahan.'
      }
    ],
    misconception: {
      myth: 'Rekomendasi 13 mengharuskan bank koresponden memeriksa KTP seluruh nasabah ritel dari bank mitranya satu per satu.',
      reality:
        'Bank koresponden tidak melakukan CDD langsung atas setiap nasabah ritel bank mitra, melainkan menilai keandalan sistem APU-PPT dan kualitas pengawasan regulasi dari bank responden tersebut.'
    }
  },
  14: {
    recId: 14,
    analogyTitle:
      'Perizinan dan Pengawasan Layanan Transfer Uang (Remitansi & Hawala)',
    analogyBody:
      'Selain melalui perbankan, pengiriman uang lintas daerah dan lintas negara banyak dilakukan melalui perusahaan remitansi atau Money or Value Transfer Services (MVTS) atau Penyedia Jasa Transfer Uang. Di samping penyelenggara resmi, terdapat pula jaringan pengiriman uang informal tanpa izin (seperti Hawala) yang memindahkan dana antarnegara hanya melalui kesepakatan antar-broker tanpa pencatatan perbankan. Rekomendasi 14 mewajibkan seluruh penyelenggara MVTS memiliki izin resmi, menerapkan aturan APU-PPT, dan mengawasi seluruh agen loketnya.',
    storyTitle:
      'Cara Kerja Jaringan Transfer Tanpa Izin dan Mengapa Wajib Ditertibkan',
    storySteps: [
      'Seorang pelaku di Negara A ingin mengirimkan dana Rp 2 miliar kepada rekannya di Negara B tanpa melalui transfer bank.',
      'Ia menyerahkan uang tunai Rp 2 miliar kepada perantara lokal di Negara A dan menerima kode sandi khusus.',
      'Perantara di Negara A menghubungi rekannya di Negara B untuk menyerahkan uang tunai Rp 2 miliar dari kas lokal kepada pemegang kode sandi tersebut, lalu keduanya menyelesaikan selisih tagihan lewat faktur dagang.',
      'Jalur transfer tanpa izin seperti ini rawan dimanfaatkan untuk kejahatan lintas batas, sehingga Rekomendasi 14 mewajibkan penindakan terhadap penyelenggara ilegal serta pendaftaran seluruh agen resmi.'
    ],
    jargonBuster: [
      {
        term: 'Money or Value Transfer Services (MVTS) atau Penyedia Jasa Transfer Uang / Remitansi',
        simpleMeaning:
          'Layanan keuangan yang menerima uang tunai atau nilai di satu tempat dan membayarkannya kepada penerima di lokasi lain.'
      },
      {
        term: 'Hawala / Informal Value Transfer System (Sistem Transfer Nilai Informal)',
        simpleMeaning:
          'Mekanisme pengiriman uang non-bank berbasis jaringan perantara di berbagai lokasi tanpa pergerakan fisik uang maupun transfer kabel perbankan.'
      }
    ],
    misconception: {
      myth: 'Konter atau toko kecil yang menjadi agen loket pengiriman uang tidak perlu dicatat dalam sistem kepatuhan perusahaan remitansi.',
      reality:
        'Rekomendasi 14 mewajibkan penyelenggara MVTS memelihara daftar lengkap seluruh agennya dan melibatkan mereka dalam program kepatuhan APU-PPT.'
    }
  },
  15: {
    recId: 15,
    analogyTitle:
      'Uji Risiko Produk Keuangan Baru dan Pengaturan Platform Aset Kripto (VASP)',
    analogyBody:
      'Inovasi teknologi keuangan seperti pembayaran digital instan dan Virtual Assets (VA) atau Aset Kripto memudahkan transaksi masyarakat, namun kecepatan dan sifat lintas batasnya juga kerap dimanfaatkan pelaku pencucian uang. Untuk mengantisipasi hal tersebut, Rekomendasi 15 tentang New Technologies menetapkan dua kewajiban: pertama, lembaga keuangan wajib menguji risiko pencucian uang sebelum meluncurkan produk atau teknologi baru; kedua, seluruh platform kripto atau Virtual Asset Service Providers (VASPs) wajib berizin resmi dan menerapkan pemeriksaan nasabah sebagaimana lembaga keuangan.',
    storyTitle:
      'Pelacakan Pencairan Aset Kripto Hasil Peretasan di Bursa Resmi',
    storySteps: [
      'Seorang peretas mencuri aset kripto senilai Rp 50 miliar dan berusaha menukarkannya menjadi mata uang rupiah melalui sebuah platform bursa kripto.',
      'Berdasarkan Rekomendasi 15, setiap Virtual Asset Service Provider (VASP) atau Pedagang Aset Kripto wajib memverifikasi identitas pengguna (CDD) serta menyertakan identitas pengirim dan penerima saat transfer aset kripto (Crypto Travel Rule).',
      'Ketika aset kripto hasil peretasan tersebut masuk ke dompet bursa, perangkat analitik blockchain mendeteksi riwayat alamat asalnya, sehingga akun dibekukan dan dilaporkan ke PPATK.'
    ],
    jargonBuster: [
      {
        term: 'Virtual Assets (VA) atau Aset Virtual / Aset Kripto',
        simpleMeaning:
          'Representasi nilai digital yang dapat diperdagangkan atau ditransfer secara elektronik untuk pembayaran atau investasi (seperti Bitcoin dan USDT), tidak termasuk mata uang fiat digital bank sentral.'
      },
      {
        term: 'Virtual Asset Service Providers (VASPs) atau Penyedia Jasa Aset Virtual / Bursa Kripto',
        simpleMeaning:
          'Badan usaha yang menyediakan layanan pertukaran, transfer, atau penyimpanan (kustodian) aset kripto bagi pelanggan.'
      }
    ],
    misconception: {
      myth: 'Transaksi aset kripto berada di luar jangkauan regulasi antipencucian uang karena berjalan di jaringan blockchain.',
      reality:
        'Melalui Rekomendasi 15, seluruh platform VASP wajib memiliki izin atau terdaftar, memverifikasi identitas pelanggan, menerapkan Travel Rule, dan melaporkan transaksi mencurigakan kepada FIU.'
    }
  },
  16: {
    recId: 16,
    analogyTitle:
      'Kewajiban Mencantumkan Identitas Pengirim dan Penerima pada Setiap Transfer Dana',
    analogyBody:
      'Dalam pengiriman kargo internasional, setiap paket wajib mencantumkan identitas pengirim dan penerima secara jelas agar isinya dapat dipertanggungjawabkan. Prinsip yang sama berlaku pada pengiriman uang melalui Rekomendasi 16 tentang Wire Transfers (dikenal sebagai The Travel Rule). Setiap transfer dana lintas negara (umumnya senilai USD/EUR 1.000 ke atas) wajib disertai informasi terverifikasi mengenai nama, nomor rekening, dan alamat Originator (Pengirim) serta Beneficiary (Penerima) yang terus melekat di sepanjang rantai bank.',
    storyTitle:
      'Penahanan Transfer Lintas Negara yang Tidak Mencantumkan Identitas Pengirim',
    storySteps: [
      'Sebuah perusahaan di Negara A mengirimkan transfer USD 50.000 ke Negara C melalui Bank Perantara (Intermediary Bank) di Negara B.',
      'Untuk menyembunyikan pihak pengirim, pesan pembayaran elektronik dikirimkan dengan kolom nama pengirim yang dikosongkan.',
      'Sesuai Rekomendasi 16, sistem penyaringan pada Bank Perantara di Negara B mendeteksi bahwa pesan transfer tersebut tidak memuat informasi wajib Originator.',
      'Bank Perantara menahan pemrosesan dana, meminta kelengkapan data kepada bank pengirim, atau menolak transaksi tersebut dan mempertimbangkan pelaporan mencurigakan.'
    ],
    jargonBuster: [
      {
        term: 'Wire Transfer Travel Rule atau Aturan Informasi Transfer Dana (R.16)',
        simpleMeaning:
          'Ketentuan yang mengharuskan data identitas Pengirim (Originator) dan Penerima (Beneficiary) disertakan secara utuh di sepanjang jalur pengiriman dana antarbank.'
      },
      {
        term: 'Originator (Pengirim) & Beneficiary (Penerima Transfer)',
        simpleMeaning:
          'Originator adalah pihak yang memerintahkan pengiriman dana; sedangkan Beneficiary adalah pihak tujuan yang menerima dana tersebut.'
      }
    ],
    misconception: {
      myth: 'Selama bank pengirim sudah memeriksa KTP pengirim uang, data pengirim tersebut tidak perlu diteruskan kepada bank penerima di luar negeri.',
      reality:
        'Bank perantara dan bank penerima tetap memerlukan data pengirim untuk menyaring daftar sanksi dan memantau kewajaran transaksi, sehingga informasi tersebut wajib ikut dikirimkan.'
    }
  },
  17: {
    recId: 17,
    analogyTitle:
      'Mengandalkan Pemeriksaan Identitas dari Lembaga Mitra Tanpa Melepas Tanggung Jawab Hukum',
    analogyBody:
      'Ketika seorang nasabah yang telah melewati pemeriksaan identitas lengkap di Bank A hendak membuka akun investasi pada Perusahaan Sekuritas B yang bermitra dengan bank tersebut, Rekomendasi 17 tentang Reliance on Third Parties atau Ketergantungan pada Pihak Ketiga mengizinkan Sekuritas B memanfaatkan hasil pemeriksaan CDD dari Bank A. Namun terdapat ketentuan tegas: data pokok CDD harus diserahkan seketika, dan apabila pemeriksaan awal ternyata lalai, tanggung jawab hukum akhir tetap berada pada Sekuritas B.',
    storyTitle:
      'Ketentuan Saat Perusahaan Manajemen Aset Mengandalkan CDD dari Bank Mitra',
    storySteps: [
      'Perusahaan Manajemen Aset B menerima nasabah baru dengan mengandalkan pemeriksaan identitas (CDD) yang sebelumnya dilakukan oleh Bank Mitra A.',
      'Sesuai Rekomendasi 17, Manajemen Aset B wajib memperoleh informasi pokok CDD secara langsung (Immediately) saat menerima nasabah tersebut.',
      'Bank Mitra A juga wajib menjamin bahwa salinan dokumen identitas akan diserahkan tanpa penundaan apabila sewaktu-waktu diminta.',
      'Apabila di kemudian hari ditemukan kelalaian dalam verifikasi nasabah tersebut, tanggung jawab di hadapan regulator tetap melekat pada Manajemen Aset B.'
    ],
    jargonBuster: [
      {
        term: 'Reliance on Third Parties (R.17) vs. Outsourcing / Agency',
        simpleMeaning:
          'Reliance (R.17) adalah mengandalkan lembaga keuangan atau DNFBP lain yang diawasi secara resmi; sedangkan Outsourcing (alih daya) adalah menggunakan penyedia jasa eksternal yang bekerja di bawah kontrak lembaga keuangan itu sendiri.'
      }
    ],
    misconception: {
      myth: 'Jika lembaga keuangan menggunakan hasil CDD dari bank lain sesuai Rekomendasi 17, maka seluruh tanggung jawab hukum berpindah ke bank pertama tersebut.',
      reality:
        'Rekomendasi 17 menetapkan bahwa tanggung jawab akhir (Ultimate Responsibility) atas pemeriksaan nasabah selalu tetap berada pada lembaga keuangan yang menerima nasabah.'
    }
  },
  18: {
    recId: 18,
    analogyTitle:
      'Standar Pengendalian Internal yang Seragam dari Kantor Pusat hingga Cabang Luar Negeri',
    analogyBody:
      'Sebuah grup perbankan yang memiliki pengendalian ketat di kantor pusat tetap akan menghadapi risiko besar apabila kantor cabang atau anak perusahaannya di luar negeri menerapkan aturan yang longgar. Pelaku pencucian uang akan selalu mencari cabang dengan pengawasan paling lemah untuk masuk ke dalam jaringan bank tersebut. Oleh sebab itu, Rekomendasi 18 tentang Internal Controls and Foreign Branches and Subsidiaries mewajibkan setiap lembaga keuangan memiliki pengendalian internal yang memadai serta menerapkan Group-Wide Programmes (program APU-PPT terpadu di seluruh grup usaha, termasuk cabang luar negeri).',
    storyTitle:
      'Pertukaran Peringatan Risiko Antar-Cabang dalam Satu Grup Perbankan',
    storySteps: [
      'Kantor cabang sebuah bank di Singapura menutup rekening seorang nasabah dan mengirimkan laporan STR setelah mendeteksi aliran dana penipuan.',
      'Beberapa hari kemudian, nasabah yang sama mencoba membuka rekening baru pada anak perusahaan milik grup bank tersebut di negara lain.',
      'Melalui kebijakan Group-Wide AML/CFT Program pada Rekomendasi 18, informasi risiko mengenai nasabah tersebut dapat dibagikan secara aman di tingkat grup sehingga upaya pembukaan rekening baru dapat dicegah.'
    ],
    jargonBuster: [
      {
        term: 'Internal Controls atau Pengendalian Internal (Tiga Lini Pertahanan)',
        simpleMeaning:
          'Kerangka pengawasan internal bank yang mencakup unit bisnis di garis depan, Compliance Officer (Pejabat Kepatuhan) setingkat manajemen, serta fungsi Audit Independen.'
      },
      {
        term: 'Group-Wide Programmes atau Program APU-PPT Terintegrasi Tingkat Grup',
        simpleMeaning:
          'Kebijakan kepatuhan terpadu yang berlaku di seluruh kantor cabang dan anak perusahaan mayoritas, termasuk mekanisme berbagi informasi risiko nasabah secara aman.'
      }
    ],
    misconception: {
      myth: 'Kantor cabang bank di luar negeri cukup mengikuti aturan negara setempat meskipun standar APU-PPT di negara tersebut lebih rendah daripada di negara asal kantor pusat.',
      reality:
        'Rekomendasi 18 mewajibkan kantor cabang dan anak perusahaan di luar negeri menerapkan standar negara asal (Home Country) yang lebih tinggi apabila regulasi di negara tuan rumah (Host Country) kurang ketat.'
    }
  },
  19: {
    recId: 19,
    analogyTitle:
      'Pemeriksaan Mendalam dan Tindakan Pengamanan terhadap Negara Berisiko Tinggi',
    analogyBody:
      'Apabila suatu yurisdiksi memiliki kelemahan mendasar dalam sistem hukum antipencucian uangnya, transaksi yang berasal dari wilayah tersebut membawa risiko lebih tinggi bagi perbankan internasional. Rekomendasi 19 tentang Higher-Risk Countries mewajibkan lembaga keuangan menerapkan Enhanced Due Diligence (EDD) atau Pemeriksaan Mendalam terhadap hubungan usaha maupun transaksi dari negara berisiko tinggi. Lebih jauh, terhadap negara yang masuk daftar Call for Action (Black List) FATF, pemerintah wajib menerapkan Countermeasures atau Tindakan Pengamanan/Pembatasan Keuangan.',
    storyTitle:
      'Verifikasi Berlapis atas Transaksi dari Yurisdiksi Berisiko Tinggi',
    storySteps: [
      'Sebuah perusahaan domestik menerima transfer masuk sebesar USD 800.000 dari bank yang berkedudukan di negara yang tercantum dalam daftar pantauan FATF.',
      'Sesuai Rekomendasi 19, bank penerima tidak memproses transaksi tersebut sebagai transfer biasa, melainkan menerapkan prosedur Enhanced Due Diligence (EDD).',
      'Bank meminta dokumen kontrak perdagangan asli, bukti pengiriman barang pabean, struktur Beneficial Owner pengirim, serta persetujuan manajemen senior sebelum dana dapat dikreditkan.'
    ],
    jargonBuster: [
      {
        term: 'High-Risk Jurisdictions subject to a Call for Action (FATF Black List / Daftar Hitam)',
        simpleMeaning:
          'Negara dengan kelemahan strategis yang serius sehingga FATF menyerukan seluruh yurisdiksi untuk menerapkan Countermeasures (Tindakan Balasan/Pengamanan).'
      },
      {
        term: 'Jurisdictions under Increased Monitoring (FATF Grey List / Daftar Abu-Abu)',
        simpleMeaning:
          'Negara yang memiliki kelemahan strategis dalam rezim APU-PPT namun sedang menjalankan rencana aksi perbaikan bersama FATF.'
      },
      {
        term: 'Countermeasures atau Tindakan Pengamanan Ekstra',
        simpleMeaning:
          'Langkah pembatasan terhadap negara berisiko tinggi, seperti kewajiban pelaporan khusus transaksi, pembatasan pembukaan cabang bank, atau penghentian hubungan koresponden.'
      }
    ],
    misconception: {
      myth: 'Prosedur Enhanced Due Diligence (EDD) lintas negara hanya berlaku terhadap negara yang tercantum dalam daftar resmi FATF saja.',
      reality:
        'Rekomendasi 19 mewajibkan penerapan EDD baik terhadap negara yang ditetapkan oleh FATF maupun negara lain yang dinilai berisiko tinggi berdasarkan evaluasi mandiri pemerintah atau bank.'
    }
  },
  20: {
    recId: 20,
    analogyTitle:
      'Kewajiban Melaporkan Transaksi Mencurigakan Tanpa Menunggu Bukti Pengadilan (STR / LTKM)',
    analogyBody:
      'Petugas bank bukan penyidik kepolisian maupun hakim, sehingga mereka tidak perlu menunggu adanya bukti kejahatan yang sempurna sebelum menyampaikan laporan. Apabila pola transaksi nasabah terlihat tidak wajar atau memiliki indikasi terkait tindak pidana maupun pendanaan terorisme, Rekomendasi 20 tentang Reporting of Suspicious Transactions mewajibkan bank segera mengirimkan Suspicious Transaction Report (STR) atau Laporan Transaksi Keuangan Mencurigakan (LTKM) kepada Financial Intelligence Unit (FIU / PPATK), berapapun nilai nominalnya dan termasuk percobaan transaksi yang dibatalkan.',
    storyTitle:
      'Melaporkan Percobaan Transaksi Ketika Nasabah Membatalkan Setoran karena Gugup',
    storySteps: [
      'Seorang calon nasabah datang ke kantor cabang membawa uang tunai Rp 1,5 miliar untuk ditransfer ke luar negeri.',
      'Petugas teller menanyakan identitas, sumber dana, serta dokumen pendukung tujuan pengiriman uang tersebut sesuai prosedur CDD.',
      'Karena enggan menyerahkan dokumen dan identitasnya, orang tersebut membatalkan transaksi lalu bergegas meninggalkan kantor cabang.',
      'Meskipun tidak ada uang yang jadi disetorkan ke bank, Rekomendasi 20 mewajibkan bank tetap melaporkan peristiwa tersebut ke PPATK sebagai Attempted Transaction (Percobaan Transaksi Mencurigakan).'
    ],
    jargonBuster: [
      {
        term: 'Suspicious Transaction Report (STR) atau Laporan Transaksi Keuangan Mencurigakan (LTKM)',
        simpleMeaning:
          'Laporan rahasia yang disampaikan oleh pihak pelapor kepada FIU (PPATK) ketika ditemukan indikasi bahwa suatu transaksi terkait hasil tindak pidana atau pendanaan terorisme.'
      },
      {
        term: 'Attempted Transactions atau Percobaan Transaksi',
        simpleMeaning:
          'Transaksi yang hendak dilakukan oleh nasabah namun batal terlaksana (baik karena dibatalkan nasabah maupun ditolak bank), yang wajib tetap dilaporkan apabila mencurigakan.'
      }
    ],
    misconception: {
      myth: 'Transaksi mencurigakan yang bernilai kecil tidak perlu dilaporkan sebagai STR/LTKM ke PPATK.',
      reality:
        'Rekomendasi 20 menetapkan bahwa pelaporan STR/LTKM tidak mengenal batas nominal minimum; berapapun nilainya, transaksi yang mencurigakan wajib dilaporkan.'
    }
  }
};
