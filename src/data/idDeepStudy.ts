import { DeepStudyMaterial } from '../types/fatf';

export const ID_DEEP_STUDY_DATA: Record<number, DeepStudyMaterial> = {
  1: {
    recId: 1,
    plainEnglishWhy:
      'Sebelum tahun 2012, kepatuhan APU-PPT sering diperlakukan seperti formalitas administratif "centang kotak" yang kaku—memperlakukan rekening tabungan pensiunan lokal dengan kecurigaan yang sama seperti perusahaan cangkang lepas pantai milik politisi asing. Hal ini membuang waktu tim kepatuhan pada nasabah berisiko rendah sementara pencuci uang kelas kakap lolos tanpa terdeteksi. Rekomendasi 1 mengubah paradigma dunia ke Pendekatan Berbasis Risiko (Risk-Based Approach / RBA): petakan di mana ancaman sesungguhnya berada, kerahkan pertahanan terkuat (EDD) pada titik berisiko tinggi, dan sederhanakan proses (SDD) pada area yang terbukti berisiko rendah.',
    mondayMorningReality:
      'Setiap negara wajib menyusun Penilaian Risiko Nasional (NRA) lintas kementerian, dan setiap bank, PJK, maupun DNFBP wajib menyusun Penilaian Risiko Bisnis (Institutional Risk Assessment / IRA) milik mereka sendiri. Tim kepatuhan harus memberi skor risiko berdasarkan 4 pilar: Profil Nasabah, Negara/Geografis, Produk/Jasa, dan Saluran Distribusi—lalu memperbaruinya setiap kali meluncurkan produk baru atau ketika tipologi kejahatan berubah.',
    criminalPlaybookAndRedFlags: [
      'Sindikat kejahatan sengaja mencari lembaga keuangan kecil, BPR, koperasi, atau DNFBP yang belum memiliki pemetaan risiko memadai.',
      'Memecah transaksi atau menyamarkan profil perusahaan berisiko tinggi agar tampak seperti UMKM ritel biasa guna mendapatkan fasilitas CDD yang disederhanakan.',
      'Menyalahgunakan yurisdiksi atau produk baru yang belum dievaluasi dalam Penilaian Risiko Nasional.'
    ],
    caseStudy: {
      title: 'Kegagalan Pemetaan Risiko Cabang Non-Residen Danske Bank Estonia',
      jurisdictionAndYear: 'Estonia / Denmark · 2007–2015 (Pengungkapan 2018)',
      whatHappened:
        'Cabang kecil Danske Bank di Estonia mengelola portofolio "nasabah non-residen" (mayoritas perusahaan cangkang dari Rusia dan eks-Uni Soviet serta Inggris/BVI). Sekitar EUR 200 miliar mengalir melalui cabang kecil tersebut selama 8 tahun tanpa penilaian risiko yang memadai maupun sistem pemantauan yang terintegrasi dengan kantor pusat di Kopenhagen.',
      theBreach:
        'Pelanggaran berat terhadap Rekomendasi 1 (kegagalan total mengidentifikasi, menilai, dan memitigasi risiko ekstrem pada segmen nasabah non-residen lintas batas) serta R.10 dan R.18.',
      consequencesAndLesson:
        'Danske Bank diperintahkan menutup seluruh operasinya di Estonia, dikenai denda lebih dari USD 2 miliar oleh otoritas AS dan Eropa, dan CEO beserta jajaran eksekutifnya mundur. Pelajaran utama: Anda tidak dapat memitigasi risiko yang sengaja Anda abaikan karena tergiur laba jangka pendek.',
      assessorLens:
        'Tim penilai FATF (Immediate Outcome 1) tidak hanya melihat apakah dokumen NRA tercetak rapi di atas kertas, melainkan apakah alokasi anggaran pengawasan, jumlah staf FIU, dan kebijakan CDD bank benar-benar berubah mengikuti temuan risiko di NRA tersebut.'
    }
  },
  2: {
    recId: 2,
    plainEnglishWhy:
      'Pelaku kejahatan keuangan bergerak lintas instansi dalam hitungan menit, sementara birokrasi pemerintah sering terjebak dalam ego sektoral ("silo"). Jika PPATK/FIU, Kepolisian, Kejaksaan, Bea Cukai, Pajak, dan OJK/BI tidak saling berbicara atau terhambat tafsir aturan pelindungan data pribadi yang kaku, jaringan pencucian uang akan selalu menang. Rekomendasi 2 mewajibkan seluruh lembaga negara bekerja sebagai satu kesatuan tim nasional.',
    mondayMorningReality:
      'Negara membentuk Komite Koordinasi Nasional APU-PPT (seperti Komite TPPU di Indonesia), menyusun Strategi Nasional (Stranas), membentuk Satgas gabungan (Joint Task Force) antara FIU, penyidik, dan otoritas pajak, serta menyelaraskan Undang-Undang Pelindungan Data Pribadi agar tidak menghalangi pertukaran intelijen kejahatan keuangan.',
    criminalPlaybookAndRedFlags: [
      'Memanfaatkan celah koordinasi antara otoritas pajak, bea cukai, dan pengawas perbankan melalui skema Trade-Based Money Laundering (TBML).',
      'Mengajukan keberatan hukum berbasis privasi data untuk menghambat pertukaran informasi antar-regulator atau di dalam grup keuangan.'
    ],
    caseStudy: {
      title: 'Operasi "Russian Laundromat" & Celah Koordinasi Lintas Instansi',
      jurisdictionAndYear: 'Moldova / Latvia / Eropa · 2010–2014',
      whatHappened:
        'Sindikat kejahatan mencuci lebih dari USD 20 miliar dana ilegal dari Rusia menggunakan putusan pengadilan rekayasa di Moldova, lalu mengalirkan uangnya melalui bank-bank di Latvia ke seluruh dunia. Informasi sebenarnya tersebar di pengadilan, bea cukai, dan pengawas perbankan, namun ketiadaan koordinasi cepat antar-lembaga membuat skema ini berjalan bertahun-tahun.',
      theBreach:
        'Kelemahan koordinasi operasional domestik (R.2) antara lembaga peradilan, pengawas perbankan, dan FIU dalam mendeteksi pola penyalahgunaan sistem hukum dan perbankan secara sistemik.',
      consequencesAndLesson:
        'Puluhan hakim dan pejabat di Moldova diadili, serta sejumlah bank di Eropa Timur dicabut izinnya. Koordinasi nasional tidak boleh sekadar rapat seremonial tahunan, melainkan pertukaran intelijen operasional secara real-time.',
      assessorLens:
        'Asesor menguji IO.1 dengan menanyakan kasus nyata di mana FIU, penyidik, pengawas, dan otoritas pemulihan aset duduk bersama menyelesaikan perkara kompleks, serta mengecek apakah aturan privasi data menghambat pertukaran informasi.'
    }
  },
  3: {
    recId: 3,
    plainEnglishWhy:
      'Dahulu, beberapa negara hanya memidana pencucian uang jika uangnya berasal dari narkotika—sehingga koruptor, pengemplang pajak, atau sindikat kejahatan lingkungan bebas mencuci uangnya di bank secara legal. Rekomendasi 3 menutup celah ini dengan mewajibkan kriminalisasi pencucian uang atas seluruh 21 Kategori Tindak Pidana Asal (Designated Categories of Offences), baik dilakukan di dalam negeri maupun di luar negeri.',
    mondayMorningReality:
      'Jaksa dan penyidik tidak perlu menunggu putusan pengadilan yang berkekuatan hukum tetap (inkracht) atas tindak pidana asal untuk membuktikan bahwa suatu harta adalah hasil kejahatan. Unsur kesengajaan (mens rea) dapat dibuktikan dari keadaan objektif yang menyertai transaksi (misalnya penggunaan berlapis perusahaan cangkang dan dokumen fiktif), dan pencucian uang oleh pelaku tindak pidana asal sendiri (self-laundering) juga dipidana.',
    criminalPlaybookAndRedFlags: [
      'Mengirim hasil korupsi atau kejahatan pajak dari Negara A ke Negara B dengan harapan Negara B tidak menganggap kejahatan pajak asing sebagai tindak pidana asal.',
      'Menggunakan lapisan faktur konsultan fiktif agar terdakwa bisa berdalih "tidak tahu secara pasti" dari kejahatan mana uang tersebut berasal.'
    ],
    caseStudy: {
      title: 'Skandal 1MDB — Pencucian Uang Korupsi Lintas Benua',
      jurisdictionAndYear: 'Malaysia / AS / Swiss / Singapura · 2009–2015',
      whatHappened:
        'Lebih dari USD 4,5 miliar dana investasi negara 1MDB diselewengkan melalui jaringan rumit obligasi, perusahaan cangkang lepas pantai, dan rekening bank di berbagai negara untuk membeli kapal pesiar mewah, properti elit, lukisan langka, hingga membiayai film Hollywood.',
      theBreach:
        'Tindak pidana pencucian uang skala masif (R.3) yang bersumber dari tindak pidana asal korupsi, penyuapan, dan penggelapan lintas yurisdiksi.',
      consequencesAndLesson:
        'Mantan Perdana Menteri dijatuhi hukuman penjara, Goldman Sachs membayar denda lebih dari USD 2,9 miliar, dan miliaran dolar aset berhasil dirampas kembali. Kasus ini membuktikan pentingnya kriminalisasi TPPU atas tindak pidana asal yang terjadi di negara lain.',
      assessorLens:
        'Dalam evaluasi IO.7, FATF memeriksa apakah vonis TPPU di pengadilan suatu negara sudah sejalan dengan profil risiko nasionalnya (misalnya jika risiko tertinggi adalah korupsi dan kejahatan lingkungan, apakah ada vonis TPPU di bidang itu?), serta apakah sanksi pidananya benar-benar memberikan efek jera.'
    }
  },
  4: {
    recId: 4,
    plainEnglishWhy:
      'Memenjara pelaku kejahatan selama beberapa tahun tidak akan menghentikan sindikat kriminal apabila begitu keluar dari penjara, mereka masih bisa menikmati ratusan miliar rupiah hasil kejahatan yang disembunyikan atas nama kerabat atau perusahaan cangkang. Rekomendasi 4 (diperkuat secara besar-besaran pada November 2023) menegaskan bahwa merampas keuntungan kejahatan adalah prioritas utama negara—termasuk melalui perampasan tanpa pemidanaan (Non-Conviction-Based Confiscation) jika pelaku kabur, meninggal dunia, atau kebal hukum.',
    mondayMorningReality:
      'Penyidik dan jaksa wajib membekukan aset secara proaktif di awal penyidikan (bahkan secara ex-parte tanpa pemberitahuan agar aset tidak dilarikan), merampas aset senilai (value-based confiscation) jika uang aslinya sudah habis, membatalkan pengalihan aset rekayasa ke pihak ketiga, serta mengelola aset sitaan (seperti kapal, properti, atau kripto) agar nilainya tidak hancur sebelum putusan pengadilan.',
    criminalPlaybookAndRedFlags: [
      'Menghibahkan rumah mewah, mobil, dan saham kepada pasangan, anak, atau nominee sesaat sebelum penyidikan dimulai.',
      'Mencampur uang hasil kejahatan dengan omzet bisnis restoran atau konstruksi yang sah agar sulit dipisahkan.',
      'Melarikan diri ke luar negeri dengan harapan perkara pidana gugur sehingga aset tidak bisa dirampas.'
    ],
    caseStudy: {
      title: 'Perampasan Aset Tanpa Pemidanaan (NCBC) Skandal Kleptokrasi & Suap Telekomunikasi',
      jurisdictionAndYear: 'Uzbekistan / Swiss / AS / Eropa · 2012–2022',
      whatHappened:
        'Lebih dari USD 850 juta uang suap dari perusahaan telekomunikasi internasional disembunyikan oleh putri presiden saat itu melalui perusahaan cangkang di Gibraltar dan rekening bank di Swiss, Swedia, dan negara lainnya. Karena hambatan yurisdiksi dan status pelaku, proses pidana biasa di satu negara tidak cukup untuk menjangkau seluruh aset.',
      theBreach:
        'Penyembunyian hasil korupsi lintas negara yang menuntut penerapan mekanisme Perampasan Tanpa Pemidanaan (NCBC) dan pengelolaan aset sitaan sesuai Rekomendasi 4.',
      consequencesAndLesson:
        'Melalui tindakan perampasan aset di Swiss, AS, dan Eropa, ratusan juta dolar berhasil dirampas dan dikembalikan melalui dana perwalian PBB yang transparan untuk pembangunan rumah sakit dan pendidikan masyarakat.',
      assessorLens:
        'FATF menilai IO.8 dengan menghitung berapa nilai riil aset yang berhasil dibekukan, disita, dan dirampas dibandingkan dengan skala kejahatan ekonomi di negara tersebut—serta apakah negara memiliki kerangka NCBC yang efektif.'
    }
  },
  5: {
    recId: 5,
    plainEnglishWhy:
      'Berbeda dengan pencucian uang yang memproses uang kotor agar tampak bersih, Pendanaan Terorisme (TF) sering kali menggunakan uang yang berasal dari sumber yang sepenuhnya sah (seperti gaji, hasil usaha kecil, atau donasi amal) dalam jumlah kecil untuk membiayai aksi yang mematikan. Selain itu, menunggu sampai bom meledak untuk memidana penyandang dana adalah langkah yang terlambat. Oleh karena itu, R.5 mewajibkan kriminalisasi pendanaan tidak hanya untuk satu serangan spesifik, tetapi juga untuk mendukung organisasi teroris atau teroris individu secara umum, termasuk biaya perjalanan Foreign Terrorist Fighters (FTF).',
    mondayMorningReality:
      'Sistem pemantauan bank dan FIU tidak bisa hanya mengandalkan ambang batas nominal besar; mereka harus memadukan indikator intelijen geografis, jaringan afiliasi, pola pengumpulan dana (crowdfunding), pengiriman uang ke wilayah konflik, dan pembelian logistik perjalanan FTF.',
    criminalPlaybookAndRedFlags: [
      'Menggalang donasi kemanusiaan palsu melalui media sosial, dompet digital (e-wallet), atau aset kripto.',
      'Penarikan tunai berulang atau transaksi kartu debit di kota-kota perbatasan dekat zona konflik oleh individu yang berupaya bergabung dengan kelompok teroris (FTF).',
      'Menggunakan bisnis ritel mikro untuk menyuplai kebutuhan hidup anggota sel tidur.'
    ],
    caseStudy: {
      title: 'Pendanaan Jaringan Teroris & Korporasi Lafarge di Suriah',
      jurisdictionAndYear: 'Prancis / Suriah / AS · 2013–2014 (Putusan 2022)',
      whatHappened:
        'Perusahaan semen multinasional Lafarge mengaku bersalah di pengadilan AS karena membayar hampir USD 6 juta kepada kelompok teroris ISIS dan Front Al-Nusra melalui perantara agar pabrik semen anak perusahaannya di Suriah Utara tetap diizinkan beroperasi di tengah perang saudara.',
      theBreach:
        'Kriminalisasi Pendanaan Terorisme (R.5) secara tegas berlaku bagi siapa pun—termasuk badan hukum/korporasi—yang dengan sengaja memberikan dana atau dukungan material kepada organisasi teroris, meskipun dengan motif bisnis komersial.',
      consequencesAndLesson:
        'Lafarge dijatuhi pidana denda dan perampasan sebesar USD 778 juta oleh Departemen Kehakiman AS. Motif "menjaga kelangsungan bisnis" tidak menghapus pertanggungjawaban pidana atas pendanaan organisasi teroris.',
      assessorLens:
        'Pada IO.9, asesor memeriksa apakah penegak hukum menyelidiki aspek pendanaan di balik setiap kasus terorisme, dan apakah penyandang dana, fasilitator logistik, serta pengumpul dana dituntut secara efektif.'
    }
  },
  6: {
    recId: 6,
    plainEnglishWhy:
      'Ketika Dewan Keamanan PBB atau otoritas nasional menetapkan seseorang atau kelompok sebagai teroris, kita tidak punya waktu berhari-hari untuk birokrasi pengadilan sebelum memblokir rekening mereka—karena uang dapat dipindahkan lewat ponsel dalam 10 detik. Rekomendasi 6 mewajibkan pembekuan aset dilakukan "tanpa penundaan" (without delay—idealnya dalam hitungan jam), sekaligus memastikan bantuan kemanusiaan yang sah tetap terlindungi (revisi Juni 2026 berdasarkan UNSCR 2664).',
    mondayMorningReality:
      'Setiap PJK, VASP, dan DNFBP wajib memiliki sistem penyaringan sanksi otomatis (sanctions screening) yang langsung diperbarui begitu Daftar Sanksi DK PBB (UNSCR 1267/1988) atau DTTOT nasional diterbitkan. Jika ada kecocokan positif (true match), dana wajib dibekukan seketika tanpa pemberitahuan terlebih dahulu kepada nasabah, dan langsung dilaporkan ke otoritas.',
    criminalPlaybookAndRedFlags: [
      'Menggunakan variasi ejaan nama (transliterasi alfabet Arab/Sirilik ke Latin), alias, atau tanggal lahir palsu untuk mengelabui filter otomatis bank.',
      'Menggunakan kerabat dekat, perantara tidak resmi (hawala), atau dompet kripto yang tidak terdaftar untuk menerima dan memindahkan dana atas nama pihak yang masuk daftar sanksi.'
    ],
    caseStudy: {
      title: 'Kegagalan Penyaringan Sanksi & Keterlambatan Pembekuan Lintas Negara',
      jurisdictionAndYear: 'Global / Evaluasi Bersama FATF · 2019–2024',
      whatHappened:
        'Dalam berbagai evaluasi bersama (Mutual Evaluation) FATF di banyak negara, ditemukan bahwa perubahan daftar sanksi DK PBB membutuhkan waktu 3 hingga 14 hari untuk dituangkan ke dalam surat keputusan menteri lokal sebelum dikirim ke perbankan—memberikan celah waktu bagi jaringan teroris untuk menguras rekening mereka.',
      theBreach:
        'Pelanggaran terhadap standar "tanpa penundaan" (without delay / dalam hitungan jam) pada Rekomendasi 6.',
      consequencesAndLesson:
        'Banyak negara masuk ke dalam Grey List FATF karena jeda waktu administratif ini, sehingga mendorong reformasi hukum untuk menerapkan mekanisme keberlakuan langsung (direct automatic applicability) atas pembaruan daftar sanksi PBB dalam hitungan jam.',
      assessorLens:
        'Asesor FATF (IO.10) menguji secara teknis berapa jam waktu yang dibutuhkan sejak pengumuman PBB di New York hingga seluruh bank dan VASP di negara tersebut memblokir rekening terkait, serta bagaimana pelindungan pengecualian kemanusiaan UNSCR 2664 diterapkan.'
    }
  },
  7: {
    recId: 7,
    plainEnglishWhy:
      'Jaringan pengadaan senjata pemusnah massal (nuklir, rudal balistik, kimia, biologi) tidak membeli bahan baku dengan nama "Kementerian Pertahanan Negara Tertentu". Mereka menggunakan ratusan perusahaan pelayaran cangkang, perantara perdagangan logam, dan rekening atas nama pihak ketiga di pusat-pusat keuangan dunia. Rekomendasi 7 mewajibkan pembekuan tanpa penundaan atas seluruh dana dan aset pihak yang ditetapkan oleh Dewan Keamanan PBB terkait proliferasi senjata pemusnah massal.',
    mondayMorningReality:
      'Unit kepatuhan Trade Finance (L/C, pembiayaan ekspor-impor), perbankan koresponden, asuransi perkapalan, dan VASP harus memantau bukan hanya nama di daftar sanksi PBB, tetapi juga kapal yang mengganti bendera, perusahaan perantara yang dikendalikan oleh pihak tercantum, serta transaksi barang penggunaan ganda (dual-use goods).',
    criminalPlaybookAndRedFlags: [
      'Mendirikan perusahaan perdagangan cangkang di yurisdiksi pihak ketiga untuk membayar faktur mesin presisi atau bahan kimia atas nama entitas yang disanksi.',
      'Mematikan transponder AIS kapal kargo dan melakukan transfer muatan antar-kapal di tengah laut (ship-to-ship transfer) dengan dokumen pengapalan palsu.',
      'Mencuci hasil peretasan kripto untuk membiayai program senjata pemusnah massal.'
    ],
    caseStudy: {
      title: 'Jaringan Perusahaan Cangkang & Bank Perantara Program Rudal',
      jurisdictionAndYear: 'Asia Timur / AS / Global · 2016–2023',
      whatHappened:
        'Entitas yang telah dijatuhi sanksi DK PBB atas program senjata pemusnah massal berhasil mengakses sistem kliring dolar AS melalui puluhan perusahaan depan (front companies) yang terdaftar di luar negeri untuk membeli komoditas, komponen elektronik, dan layanan perkapalan senilai ratusan juta dolar.',
      theBreach:
        'Penghindaran Sanksi Keuangan Terarah Proliferasi (R.7) serta kegagalan mengidentifikasi kendali tidak langsung oleh entitas yang ditetapkan PBB.',
      consequencesAndLesson:
        'Otoritas menjatuhkan denda ratusan juta dolar kepada lembaga keuangan yang memproses transaksi tanpa menyaring struktur kepemilikan perusahaan perantara dan riwayat kapal.',
      assessorLens:
        'Pada IO.11, asesor memeriksa apakah PJK dan DNFBP memahami tipologi penghindaran sanksi proliferasi (terutama di sektor pembiayaan perdagangan dan maritim) dan mampu membekukan aset pihak yang bertindak atas nama entitas tercantum dalam hitungan jam.'
    }
  },
  8: {
    recId: 8,
    plainEnglishWhy:
      'Organisasi Nirlaba (NPO/yayasan amal) bekerja di daerah bencana dan zona konflik yang rawan disusupi oleh kelompok teroris (misalnya menyamar sebagai lembaga kemanusiaan atau menyelewengkan dana bantuan di lapangan). Namun di masa lalu, banyak pemerintah dan bank bereaksi berlebihan dengan menutup rekening seluruh yayasan amal secara pukul rata (de-risking). Rekomendasi 8 (direvisi November 2023) mewajibkan pendekatan yang terfokus, proporsional, dan berbasis risiko: lindungi NPO yang berisiko dari penyalahgunaan TPPT tanpa mengganggu atau melumpuhkan kegiatan amal yang sah.',
    mondayMorningReality:
      'Pemerintah wajib mengidentifikasi sub-kelompok NPO mana yang benar-benar memenuhi definisi FATF dan berisiko disalahgunakan untuk TPPT, melakukan pembinaan tata kelola (transparansi pengurus, laporan keuangan, verifikasi mitra penyalur di lapangan), dan melarang bank menerapkan persyaratan pukul rata yang menghambat penyaluran bantuan kemanusiaan.',
    criminalPlaybookAndRedFlags: [
      'Mengumpulkan dana atas nama bantuan bencana di daerah konflik, namun menarik uang tunai di perbatasan dan menyerahkannya kepada kelompok bersenjata.',
      'Menyusupkan simpatisan jaringan teroris sebagai mitra distribusi lokal (local implementing partner) di wilayah yang sulit diaudit.'
    ],
    caseStudy: {
      title: 'Penyelewengan Dana Yayasan Amal Semu ke Jaringan Konflik vs. Krisis De-Risking NPO',
      jurisdictionAndYear: 'Global / Lintas Yurisdiksi · 2015–2023',
      whatHappened:
        'Sejumlah yayasan semu terbukti menyalurkan jutaan dolar dana donasi ke kelompok teroris di zona konflik melalui penarikan tunai dan mitra lokal fiktif. Sebaliknya, akibat regulasi yang tidak terukur di beberapa negara, organisasi kemanusiaan internasional yang sah justru mengalami pemblokiran transfer bank saat menyalurkan bantuan pangan dan medis darurat.',
      theBreach:
        'Kegagalan menerapkan pengawasan berbasis risiko yang terfokus pada NPO berisiko tinggi, sekaligus kegagalan mencegah dampak negatif (unintended consequences / de-risking) terhadap NPO kemanusiaan yang sah (R.8).',
      consequencesAndLesson:
        'Revisi R.8 tahun 2023 secara eksplisit melarang negara mewajibkan langkah pukul rata (one-size-fits-all) terhadap seluruh NPO dan menekankan pengawasan berbasis risiko yang proporsional.',
      assessorLens:
        'Asesor (IO.10) mengecek dua sisi sekaligus: apakah NPO yang berisiko tinggi terhadap TPPT telah dipetakan dan dibina secara efektif, DAN apakah kebijakan negara tidak secara tidak sah membungkam masyarakat sipil atau menghambat bantuan kemanusiaan.'
    }
  },
  9: {
    recId: 9,
    plainEnglishWhy:
      'Di masa lalu, kerahasiaan bank (bank secrecy) sering dijadikan tameng hukum untuk menolak menyerahkan mutasi rekening koruptor, pengemplang pajak, atau sindikat narkoba kepada penyidik dan pengawas. Rekomendasi 9 singkat namun mutlak: Undang-Undang kerahasiaan lembaga keuangan tidak boleh menghambat pelaksanaan satu pun Rekomendasi FATF.',
    mondayMorningReality:
      'Regulasi perbankan, pasar modal, asuransi, dan pembayaran wajib memiliki klausul tegas bahwa kewajiban rahasia bank gugur demi hukum ketika informasi diminta oleh FIU (PPATK), pengawas keuangan, aparat penegak hukum, pengadilan (MLA), maupun saat pertukaran informasi kepatuhan antar-cabang dalam satu grup keuangan atau koresponden bank.',
    criminalPlaybookAndRedFlags: [
      'Membuka rekening di yurisdiksi yang masih memiliki prosedur birokrasi berbelit untuk membuka rahasia bank bagi penyidik asing.',
      'Mengancam akan menggugat bank secara perdata atas pelanggaran rahasia bank jika bank menyerahkan dokumen CDD kepada bank koresponden.'
    ],
    caseStudy: {
      title: 'Berakhirnya Era Kerahasiaan Bank Absolut dalam Investigasi Lintas Batas',
      jurisdictionAndYear: 'Eropa / Amerika Serikat / Global · 2008–2015',
      whatHappened:
        'Sejumlah bank swasta besar memanfaatkan undang-undang kerahasiaan bank domestik mereka untuk membantu ribuan nasabah kaya raya menyembunyikan puluhan miliar dolar aset yang tidak dilaporkan melalui yayasan dan perusahaan lepas pantai, serta menolak berbagi data dengan otoritas asing.',
      theBreach:
        'Penyalahgunaan ketentuan kerahasiaan bank untuk menghambat pengawasan, pertukaran informasi lintas batas, dan penegakan hukum APU-PPT (R.9, R.37, R.40).',
      consequencesAndLesson:
        'Tekanan internasional, denda miliaran dolar, dan penguatan standar FATF memaksa reformasi hukum global sehingga rahasia bank tidak lagi dapat digunakan untuk menutup akses FIU, pengawas, atau permintaan MLA.',
      assessorLens:
        'Asesor memeriksa apakah di lapangan FIU atau pengawas masih harus meminta izin pengadilan atau persetujuan pejabat politik terlebih dahulu hanya untuk mengakses data rekening bank.'
    }
  },
  10: {
    recId: 10,
    plainEnglishWhy:
      'Rekomendasi 10 adalah fondasi utama pertahanan lembaga keuangan: Anda tidak boleh menerima uang dari orang yang tidak Anda kenal, dan Anda tidak boleh berhenti pada nama di KTP atau akta pendirian perusahaan semata. Anda wajib memverifikasi identitas nasabah dengan dokumen independen, mengidentifikasi siapa manusia nyata (Pemilik Manfaat / Beneficial Owner) di balik perusahaan, memahami tujuan rekening dibuka, dan memantau apakah transaksi hariannya masuk akal dibandingkan profil penghasilannya.',
    mondayMorningReality:
      'Bank dilarang keras membuka rekening anonim atau nama fiktif. CDD wajib dilakukan saat: (1) membuka hubungan usaha, (2) transaksi insidental ≥ USD/EUR 15.000, (3) wire transfer ≥ USD/EUR 1.000, (4) ada kecurigaan TPPU/TPPT, atau (5) data lama diragukan. Jika CDD tidak bisa diselesaikan, bank wajib menolak transaksi/menutup rekening—dan jika proses CDD justru berisiko membocorkan penyelidikan (tipping-off), bank boleh menghentikan CDD dan langsung mengirim STR ke FIU.',
    criminalPlaybookAndRedFlags: [
      'Menggunakan mahasiswa, sopir, atau warga berpenghasilan rendah sebagai nasabah "nominee" (rekening penampung / money mule) untuk mengalirkan miliaran rupiah.',
      'Memecah transaksi tunai insidental tepat di bawah USD/EUR 15.000 (structuring / smurfing) di beberapa cabang berbeda pada hari yang sama.',
      'Menolak menyerahkan bagan kepemilikan saham lapisan atas ketika ditanya siapa Beneficial Owner sebenarnya.'
    ],
    caseStudy: {
      title: 'Kegagalan CDD & Pemantauan Berkelanjutan — Kasus TD Bank & Jaringan Pencucian Uang',
      jurisdictionAndYear: 'Amerika Serikat · 2018–2024 (Putusan 2024)',
      whatHappened:
        'Jaringan pencuci uang menyetorkan ratusan juta dolar uang tunai hasil kejahatan narkotika ke cabang-cabang bank, membeli kartu hadiah (gift cards), cek kasir, dan melakukan transfer kawat internasional. Meskipun profil bisnis nasabah sama sekali tidak sesuai dengan volume setoran tunai raksasa tersebut, pemantauan transaksi berkelanjutan (ongoing due diligence) dan CDD gagal menghentikan aktivitas tersebut.',
      theBreach:
        'Pelanggaran sistemik atas Rekomendasi 10 (kegagalan memverifikasi tujuan hubungan usaha dan melaksanakan pemantauan transaksi berkelanjutan) serta R.18 dan R.20.',
      consequencesAndLesson:
        'TD Bank dijatuhi rekor denda bersejarah sebesar USD 3 miliar dan pembatasan pertumbuhan aset pada tahun 2024. CDD bukanlah sekadar fotokopi KTP saat pembukaan rekening hari pertama, melainkan pemantauan aktif sepanjang umur rekening.',
      assessorLens:
        'Pada IO.4, asesor menguji apakah lembaga keuangan benar-benar menolak nasabah ketika Beneficial Owner tidak dapat diverifikasi, serta seberapa tajam sistem ongoing monitoring mendeteksi anomali profil nasabah.'
    }
  },
  11: {
    recId: 11,
    plainEnglishWhy:
      'Ketika penyidik melacak jaringan korupsi atau terorisme yang terjadi tiga tahun lalu, penyelidikan akan menemui jalan buntu apabila bank berkata, "Maaf, catatan transaksi dan berkas CDD nasabah itu sudah kami hapus." Rekomendasi 11 memastikan jejak audit keuangan selalu tersedia minimal 5 tahun agar setiap transaksi masa lalu dapat direkonstruksi secara utuh di pengadilan.',
    mondayMorningReality:
      'Seluruh catatan transaksi domestik maupun internasional wajib disimpan minimal 5 tahun sejak transaksi selesai. Seluruh dokumen CDD (KTP, paspor, akta perusahaan, data BO, korespondensi, dan hasil analisis kajian risiko/anomali) wajib disimpan minimal 5 tahun sejak rekening ditutup atau hubungan usaha berakhir—dan harus dapat diserahkan dengan cepat kepada otoritas domestik.',
    criminalPlaybookAndRedFlags: [
      'Segera menutup rekening bank dan membubarkan perusahaan cangkang begitu transaksi pencucian uang selesai, berharap bank tidak lagi menyimpan dokumen pembukaan rekeningnya.',
      'Bertransaksi melalui penyedia jasa keuangan informal yang tidak memiliki sistem pengarsipan digital.'
    ],
    caseStudy: {
      title: 'Hilangnya Rekam Jejak Transaksi dalam Skandal Pencucian Uang Lintas Batas',
      jurisdictionAndYear: 'Eropa / Amerika Latin · 2015–2020',
      whatHappened:
        'Dalam penyidikan skandal suap proyek infrastruktur lintas negara (kasus Odebrecht), penyidik menemukan bahwa sejumlah bank kecil di yurisdiksi lepas pantai tidak mendokumentasikan hasil analisis latar belakang transaksi dan korespondensi rekening yang telah ditutup, sehingga menyulitkan rekonstruksi aliran dana suap ke sejumlah pejabat.',
      theBreach:
        'Kegagalan menyimpan dokumen CDD, arsip korespondensi bisnis, dan hasil analisis transaksi selama minimal 5 tahun setelah berakhirnya hubungan usaha (R.11).',
      consequencesAndLesson:
        'Otoritas pengawas mencabut izin operasional sejumlah bank tersebut. Rekomendasi 11 mewajibkan penyimpanan bukan hanya angka mutasi debit-kredit, tetapi juga "hasil analisis yang telah dilakukan" atas transaksi tidak wajar.',
      assessorLens:
        'Asesor menguji seberapa cepat bank dapat menarik kembali berkas CDD lengkap dan catatan transaksi dari 4 tahun lalu ketika diminta oleh FIU atau penyidik.'
    }
  },
  12: {
    recId: 12,
    plainEnglishWhy:
      'Pejabat publik tingkat tinggi (Politically Exposed Persons / PEP)—seperti kepala negara, menteri, jenderal, hakim agung, pimpinan BUMN, atau pejabat organisasi internasional—memiliki wewenang atas anggaran publik dan perizinan strategis. Jika mereka korup, mereka hampir tidak pernah menaruh uang suap di rekening atas nama mereka sendiri, melainkan atas nama pasangan, anak, atau rekan dekat. Karena itu, Rekomendasi 12 mewajibkan pengawasan ekstra ketat (EDD) terhadap PEP asing, PEP domestik, serta anggota keluarga dan pihak yang terasosiasi erat dengan mereka.',
    mondayMorningReality:
      'Untuk PEP Asing, bank WAJIB secara otomatis menerapkan EDD: (1) memiliki sistem manajemen risiko untuk mendeteksi status PEP (termasuk jika PEP adalah Beneficial Owner perusahaan), (2) meminta persetujuan manajemen senior sebelum membuka atau melanjutkan rekening, (3) menelusuri sumber kekayaan (source of wealth) dan sumber dana (source of funds), serta (4) melakukan pemantauan berkelanjutan yang diperketat. Untuk PEP Domestik dan Organisasi Internasional, langkah yang sama wajib diterapkan bila hubungan usaha tersebut berisiko tinggi.',
    criminalPlaybookAndRedFlags: [
      'Membuka rekening bank atau membeli properti mewah di luar negeri atas nama anak yang masih kuliah atau pasangan yang tidak memiliki riwayat bisnis.',
      'Menyembunyikan kepemilikan pejabat publik di balik perusahaan konsultan atau trust yang dikelola oleh rekan bisnis dekat (close associate).',
      'Menerima aliran dana dari kontraktor pemerintah tepat setelah pencairan proyek negara.'
    ],
    caseStudy: {
      title: 'Skandal "Luanda Leaks" & "Teodorin Obiang" — Aset Mewah PEP dan Keluarga',
      jurisdictionAndYear: 'Prancis / AS / Afrika / Eropa · 2010–2021',
      whatHappened:
        'Pejabat tinggi negara beserta anggota keluarganya berhasil mengalirkan ratusan juta dolar dana publik melalui puluhan bank, firma hukum, dan perusahaan konsultan di Eropa dan AS untuk membeli mansion di Paris, jet pribadi, mobil super mewah, dan koleksi benda seni tanpa dihentikan oleh verifikasi Sumber Kekayaan (Source of Wealth) yang memadai.',
      theBreach:
        'Kegagalan lembaga keuangan dan DNFBP dalam menerapkan EDD ketat terhadap PEP, anggota keluarga, dan rekan dekat mereka, khususnya kegagalan memverifikasi secara independen asal-usul kekayaan dibandingkan gaji resmi pejabat negara (R.12 & R.22).',
      consequencesAndLesson:
        'Pengadilan di Prancis dan AS merampas mansion mewah, puluhan mobil sport, dan aset senilai ratusan juta dolar, serta menjatuhkan sanksi berat pada bank dan gatekeeper yang lalai.',
      assessorLens:
        'Asesor memeriksa apakah bank benar-benar membedakan dan memverifikasi "Source of Wealth" (bagaimana total kekayaan nasabah terkumpul sepanjang karirnya) vs. "Source of Funds" (dari mana asal uang untuk transaksi spesifik hari ini), termasuk ketika PEP bersembunyi sebagai Beneficial Owner korporasi.'
    }
  },
  13: {
    recId: 13,
    plainEnglishWhy:
      'Bank koresponden (Correspondent Banking) adalah jalan tol keuangan dunia yang memungkinkan bank di satu negara mengirim mata uang asing (seperti USD atau EUR) ke negara lain melalui bank mitra. Jika sebuah bank besar membuka jalur koresponden bagi bank asing yang pengawasan APU-PPT-nya lemah—atau lebih parah lagi, bagi "Bank Cangkang" (Shell Bank) yang tidak punya kantor dan manajemen fisik nyata—maka miliaran dolar uang kejahatan dapat membanjiri sistem keuangan domestik.',
    mondayMorningReality:
      'Sebelum membuka hubungan koresponden lintas batas, bank wajib mengumpulkan informasi mendalam tentang reputasi dan kualitas pengawasan bank responden, menilai kontrol APU-PPT-nya, meminta persetujuan manajemen senior, dan mendokumentasikan pembagian tanggung jawab. Bank dilarang keras berhubungan dengan Shell Bank dan wajib memastikan bank mitranya juga tidak mengizinkan rekeningnya dipakai oleh Shell Bank (nested shell bank).',
    criminalPlaybookAndRedFlags: [
      'Membeli izin perbankan di yurisdiksi kepulauan kecil tanpa kantor operasional fisik (Shell Bank) untuk mengakses sistem kliring internasional.',
      'Menyalahgunakan rekening koresponden bertingkat (nested correspondent accounts) atau rekening payable-through tanpa transparansi nasabah akhir.'
    ],
    caseStudy: {
      title: 'Kasus ABLV Bank Latvia & Penyalahgunaan Jalur Perbankan Koresponden',
      jurisdictionAndYear: 'Latvia / Amerika Serikat · 2018',
      whatHappened:
        'FinCEN AS mengeluarkan temuan bahwa ABLV Bank telah menjadikan pencucian uang sebagai pilar bisnisnya, memfasilitasi transaksi miliaran dolar bagi perusahaan cangkang yang terhubung dengan korupsi di Eropa Timur dan penghindaran sanksi program rudal Korea Utara melalui jaringan rekening koresponden dolar AS.',
      theBreach:
        'Kelemahan serius dalam uji tuntas perbankan koresponden lintas batas (R.13) serta kegagalan mencegah penyalahgunaan akses kliring internasional oleh entitas cangkang dan jaringan proliferasi.',
      consequencesAndLesson:
        'Pemutusan akses perbankan koresponden USD menyebabkan krisis likuiditas seketika dan likuidasi ABLV Bank dalam hitungan minggu. Hubungan perbankan koresponden menuntut uji tuntas dan pemantauan yang sangat ketat.',
      assessorLens:
        'Asesor mengecek apakah bank koresponden hanya mengisi kuesioner formalitas (Wolfsberg Questionnaire) sekali saat pembukaan rekening, atau benar-benar memantau anomali aliran dana bank responden secara berkelanjutan.'
    }
  },
  14: {
    recId: 14,
    plainEnglishWhy:
      'Jutaan pekerja migran di seluruh dunia mengandalkan Penyelenggara Jasa Pengiriman Uang (MVTS / remitansi) untuk mengirim nafkah ke kampung halaman. Namun di sisi lain, jaringan pengiriman uang bawah tanah tanpa izin (seperti hawala gelap atau kurir kompensasi lintas negara) menjadi urat nadi utama bagi sindikat narkoba, penyelundup manusia, dan kelompok teroris untuk memindahkan dana tanpa jejak perbankan. Rekomendasi 14 mewajibkan setiap penyelenggara MVTS berizin/terdaftar dan diawasi.',
    mondayMorningReality:
      'Otoritas wajib memberi izin atau mendaftarkan seluruh penyelenggara MVTS, menindak tegas layanan remitansi ilegal (unlicensed MVTS), serta mewajibkan perusahaan MVTS mendaftarkan seluruh jaringan agen ritel mereka (seperti toko kelontong atau konter agen) dan mengintegrasikan mereka ke dalam program kepatuhan APU-PPT.',
    criminalPlaybookAndRedFlags: [
      'Menjalankan jaringan "mirror transactions" / hawala gelap: pelaku menyerahkan uang tunai hasil kejahatan di kota A, dan rekanan di negara B mencairkan nilai setara dalam mata uang lokal tanpa ada aliran uang melintasi perbatasan.',
      'Menyusupi agen remitansi ritel kecil untuk memecah pengiriman uang menggunakan ratusan identitas KTP palsu atau curian.'
    ],
    caseStudy: {
      title: 'Jaringan Remitansi Gelap Lintas Negara & Kelalaian Pengawasan Agen MVTS',
      jurisdictionAndYear: 'Amerika Serikat / Eropa / Global · 2012–2017',
      whatHappened:
        'Sejumlah oknum agen ritel dari perusahaan pengiriman uang global dengan sengaja membantu sindikat penipuan dan pencucian uang memproses ratusan juta dolar dengan memecah transaksi di bawah ambang batas pelaporan dan menggunakan identitas palsu, sementara kantor pusat perusahaan gagal menonaktifkan agen-agen bermasalah tersebut tepat waktu.',
      theBreach:
        'Pelanggaran Rekomendasi 14 (kegagalan memantau kepatuhan jaringan agen MVTS) serta kegagalan menindak jaringan pengiriman uang ilegal.',
      consequencesAndLesson:
        'Perusahaan remitansi terkait dijatuhi denda sebesar USD 586 juta dan diwajibkan merombak total sistem pengawasan agennya di seluruh dunia. Penyelenggara MVTS bertanggung jawab penuh atas kepatuhan setiap agennya.',
      assessorLens:
        'Asesor memeriksa apakah aparat penegak hukum secara aktif mengidentifikasi dan menindak jaringan hawala/remitansi ilegal, serta apakah pengawas memeriksa kepatuhan agen-agen MVTS.'
    }
  },
  15: {
    recId: 15,
    plainEnglishWhy:
      'Aset kripto (Virtual Assets) dan inovasi fintech memungkinkan siapa saja memindahkan jutaan dolar melintasi benua dalam hitungan detik, 24 jam sehari. Tanpa regulasi yang setara dengan perbankan, bursa kripto dan penyedia dompet kustodian (VASP) akan menjadi surga utama bagi pencuci uang, sindikat ransomware, dan peretas negara yang dijatuhi sanksi. Rekomendasi 15 mewajibkan VASP diatur, diberi izin, diawasi, dan mematuhi seluruh aturan APU-PPT termasuk "Travel Rule".',
    mondayMorningReality:
      'Sebelum meluncurkan produk atau teknologi baru, PJK wajib menilai risikonya terlebih dahulu. Untuk sektor kripto, setiap VASP wajib berizin/terdaftar, melakukan CDD (dengan ambang batas transaksi insidental di atas USD/EUR 1.000), menyaring sanksi TFS secara instan, dan mematuhi Travel Rule (mengirim dan menyimpan data identitas pengirim & penerima secara aman dan seketika pada setiap transfer aset virtual).',
    criminalPlaybookAndRedFlags: [
      'Menggunakan bursa kripto (VASP) yang terdaftar di yurisdiksi lepas pantai dengan kontrol KYC lemah untuk mencairkan hasil ransomware atau penipuan investasi (pig-butchering).',
      'Melakukan "chain-hopping" (menukar satu koin ke koin lain melalui jembatan lintas blockchain / cross-chain bridges) dan layanan pencampur kripto (mixers/tumblers) untuk memutus jejak on-chain.'
    ],
    caseStudy: {
      title: 'Penindakan Hukum atas Binance & Bursa Kripto Bitzlato / Garantex',
      jurisdictionAndYear: 'Amerika Serikat / Global · 2018–2023 (Putusan 2023)',
      whatHappened:
        'Selama bertahun-tahun, bursa aset virtual terbesar di dunia beroperasi tanpa program APU-PPT dan penyaringan sanksi yang memadai, sehingga memungkinkan terjadinya transaksi antara pengguna di AS dengan yurisdiksi yang dikenai sanksi berat serta aliran dana dari pasar gelap darknet, ransomware, dan bursa tanpa KYC seperti Bitzlato.',
      theBreach:
        'Pelanggaran berat terhadap Rekomendasi 15 (kegagalan VASP menerapkan CDD efektif, penyaringan sanksi keuangan terarah R.6/R.7, dan pelaporan STR atas transaksi aset virtual mencurigakan).',
      consequencesAndLesson:
        'Binance mengaku bersalah dan membayar denda sebesar USD 4,3 miliar, serta pendirinya dijatuhi hukuman pidana dan wajib mundur. Prinsip FATF jelas: "Same activity, same risk, same rules"—teknologi blockchain tidak membebaskan penyelenggara dari kewajiban APU-PPT.',
      assessorLens:
        'Asesor FATF menguji apakah negara telah melisensikan VASP, menindak VASP ilegal yang beroperasi tanpa izin, serta memastikan implementasi teknis Travel Rule berjalan efektif.'
    }
  },
  16: {
    recId: 16,
    plainEnglishWhy:
      'Bayangkan sebuah paket mencurigakan dikirim lewat bandara tanpa nama pengirim dan tanpa alamat tujuan—pihak keamanan tidak akan tahu siapa yang harus diperiksa. Hal yang sama berlaku pada transfer uang (wire transfer): jika pesan pembayaran SWIFT atau transfer elektronik dikosongkan dari identitas pengirim (Originator) dan penerima (Beneficiary), bank tujuan dan FIU menjadi buta. Revisi besar Juni 2025 atas Rekomendasi 16 memperbarui "Travel Rule" ini untuk era pembayaran instan lintas batas agar lebih presisi dan tahan terhadap penipuan.',
    mondayMorningReality:
      'Untuk setiap transfer lintas batas di atas ambang batas (maksimal USD/EUR 1.000), pesan pembayaran wajib memuat data terverifikasi: Nama, Nomor Rekening, serta Alamat / Tanggal & Tempat Lahir / Nomor ID Resmi / Nomor Pelanggan / LEI dari pengirim, serta Nama dan Nomor Rekening penerima. Bank perantara wajib meneruskan seluruh data ini secara utuh dan memblokir pesan yang datanya sengaja dikosongkan.',
    criminalPlaybookAndRedFlags: [
      'Menghapus atau mengganti nama pengirim asli pada kolom pesan pembayaran ("wire stripping") agar sistem filter sanksi bank koresponden tidak mendeteksi keterlibatan pihak yang disanksi.',
      'Memecah transfer elektronik tepat di bawah USD/EUR 1.000 secara berulang kali.'
    ],
    caseStudy: {
      title: 'Skandal "Wire Stripping" — Menghapus Identitas Pengirim dari Pesan SWIFT',
      jurisdictionAndYear: 'Inggris / Eropa / Amerika Serikat · 2001–2012',
      whatHappened:
        'Sejumlah bank internasional besar tertangkap basah melakukan praktik "wire stripping" dan menggunakan pesan pembayaran cover payment tanpa mencantumkan identitas pengirim asli asal negara yang terkena sanksi (seperti Iran dan Sudan), sehingga transaksi senilai miliaran dolar lolos dari sistem penyaringan sanksi di New York.',
      theBreach:
        'Pelanggaran langsung terhadap Rekomendasi 16 (kewajiban menyertakan dan mempertahankan informasi pengirim dan penerima yang akurat di sepanjang rantai pembayaran) serta penghindaran sanksi.',
      consequencesAndLesson:
        'Bank-bank seperti HSBC, Standard Chartered, dan BNP Paribas dijatuhi denda kumulatif lebih dari USD 10 miliar. Revisi R.16 tahun 2025 semakin memperketat struktur data ISO 20022 dan verifikasi keselarasan nama penerima (confirmation of payee).',
      assessorLens:
        'Asesor memeriksa apakah bank perantara dan bank penerima memiliki filter otomatis yang mendeteksi pesan transfer dengan kolom nama pengirim yang kosong atau berisi karakter tidak bermakna.'
    }
  },
  17: {
    recId: 17,
    plainEnglishWhy:
      'Ketika seorang nasabah membuka rekening investasi melalui perusahaan sekuritas atau anak perusahaan bank yang sudah melakukan CDD secara lengkap, mengharuskan nasabah yang sama mengulang proses verifikasi dari nol di setiap entitas dalam grup keuangan yang sama adalah hal yang tidak efisien. Rekomendasi 17 mengizinkan ketergantungan (Reliance) pada pihak ketiga yang terawasi—namun dengan satu aturan emas: Anda boleh mendelegasikan prosesnya, tetapi Anda TIDAK PERNAH boleh mendelegasikan tanggung jawab hukumnya.',
    mondayMorningReality:
      'Jika Bank A mengandalkan CDD yang dilakukan oleh Pihak Ketiga B, Bank A wajib: (1) memperoleh data CDD pokok secara seketika (immediately)—bukan sekadar janji akan dikirim nanti, (2) memastikan B akan menyerahkan salinan dokumen KTP/BO tanpa penundaan saat diminta, (3) memastikan B diatur dan diawasi APU-PPT, dan (4) menilai risiko negara tempat B berada. Perhatian: R.17 tidak berlaku untuk kontrak alih daya (outsourcing/keagenan), karena agen dianggap bagian langsung dari PJK.',
    criminalPlaybookAndRedFlags: [
      'Menggunakan perantara profesional (introducer) di yurisdiksi lepas pantai yang mengklaim telah melakukan CDD atas pemilik manfaat perusahaan cangkang, padahal dokumen aslinya tidak pernah diverifikasi oleh bank penerima.'
    ],
    caseStudy: {
      title: 'Ketergantungan Buta (Blind Reliance) pada Perantara Lepas Pantai dalam Skandal Panama Papers',
      jurisdictionAndYear: 'Global / Panama / Eropa · 2016',
      whatHappened:
        'Banyak bank menerima pembukaan rekening bagi ribuan perusahaan cangkang dengan mengandalkan surat pernyataan dari firma hukum atau penyedia jasa korporasi (intermediaries) tanpa memperoleh informasi Beneficial Owner secara seketika dan tanpa menguji apakah perantara tersebut benar-benar patuh dan diawasi.',
      theBreach:
        'Pelanggaran Rekomendasi 17: menerima nasabah hanya berdasarkan jaminan pihak ketiga tanpa memperoleh data CDD secara langsung dan tanpa memastikan salinan dokumen verifikasi dapat diakses tanpa penundaan.',
      consequencesAndLesson:
        'Bank-bank yang menerapkan "ketergantungan buta" tetap dijatuhi denda penuh oleh regulator karena tanggung jawab akhir CDD tetap melekat mutlak pada lembaga keuangan yang mengandalkan.',
      assessorLens:
        'Asesor menguji di lapangan apakah data CDD benar-benar langsung masuk ke sistem IT bank saat onboarding (immediately obtain), atau hanya disimpan oleh pihak ketiga.'
    }
  },
  18: {
    recId: 18,
    plainEnglishWhy:
      'Sebuah aturan hukum yang sempurna tidak ada artinya jika di dalam bank tidak ada pejabat kepatuhan yang berwenang, staf cabang tidak pernah dilatih, dan cabang luar negeri dibiarkan memakai standar longgar. Lebih buruk lagi, jika seorang pencuci uang ditolak di Cabang Jakarta lalu keesokan harinya membuka rekening di Cabang Singapura milik grup bank yang sama karena kedua cabang tidak berbagi informasi. Rekomendasi 18 mewajibkan pengendalian internal yang tangguh dan program APU-PPT terpadu di seluruh grup keuangan.',
    mondayMorningReality:
      'Setiap PJK wajib menunjuk Compliance Officer di tingkat manajemen, melakukan penyaringan rekrutmen karyawan, pelatihan berkala, dan audit independen. Grup keuangan wajib menerapkan kebijakan tingkat grup, mewajibkan cabang/anak perusahaan di luar negeri menerapkan standar negara asal (home country) jika standar negara tujuan (host country) lebih lemah, serta berbagi informasi transaksi tidak wajar atau fakta telah dilaporkannya STR dengan fungsi kepatuhan grup.',
    criminalPlaybookAndRedFlags: [
      'Menyuap atau bekerja sama dengan oknum pegawai bank di cabang (insider threat) karena lemahnya penyaringan karyawan dan ketiadaan audit internal independen.',
      'Membuka rekening di anak perusahaan grup bank di negara dengan regulasi longgar setelah rekeningnya ditutup karena mencurigakan di kantor pusat.'
    ],
    caseStudy: {
      title: 'Kegagalan Program APU-PPT Tingkat Grup — Kasus HSBC Meksiko & Grup Global',
      jurisdictionAndYear: 'Meksiko / Amerika Serikat / Inggris · 2006–2010 (Putusan 2012)',
      whatHappened:
        'Kartel narkoba Sinaloa dan Norte del Valle mencuci setidaknya USD 881 juta uang tunai melalui anak perusahaan bank di Meksiko—bahkan merancang kotak khusus agar muat di jendela kasir cabang—sementara kantor pusat grup tidak menerapkan standar pemantauan tingkat grup yang memadai dan gagal membagikan peringatan risiko secara efektif di seluruh grup.',
      theBreach:
        'Pelanggaran berat terhadap Rekomendasi 18 (kegagalan menerapkan program APU-PPT tingkat grup, lemahnya fungsi kepatuhan dan audit internal, serta kegagalan memastikan anak perusahaan luar negeri menerapkan standar setara kantor pusat).',
      consequencesAndLesson:
        'HSBC membayar denda sebesar USD 1,9 miliar dan diawasi oleh pemantau independen selama 5 tahun. Kantor pusat grup keuangan tidak boleh membiarkan anak perusahaannya di luar negeri beroperasi dengan standar kepatuhan kelas dua.',
      assessorLens:
        'Asesor memeriksa apakah Compliance Officer memiliki akses langsung dan independensi ke Dewan Komisaris/Direksi, serta apakah informasi STR dapat dibagikan secara aman ke tingkat kepatuhan grup tanpa melanggar aturan tipping-off.'
    }
  },
  19: {
    recId: 19,
    plainEnglishWhy:
      'Jika ada satu negara di dunia yang menolak memidana pencucian uang, membiarkan pendanaan teroris, atau melindungi perusahaan cangkang anonim, maka uang kejahatan dari seluruh dunia akan mengalir melalui negara tersebut. Rekomendasi 19 adalah mekanisme pertahanan kolektif global ("Black List" dan "Grey List" FATF): transaksi yang terkait dengan yurisdiksi berisiko tinggi wajib dikenai Uji Tuntas Diperketat (EDD), dan terhadap negara di Black List wajib dijatuhkan tindakan balasan (countermeasures).',
    mondayMorningReality:
      'Tiga kali setahun (Februari, Juni, Oktober), setelah Sidang Pleno FATF, tim kepatuhan wajib memperbarui daftar negara berisiko tinggi di sistem perbankan: menerapkan EDD proporsional terhadap transaksi dari/ke yurisdiksi dalam Peningkatan Pemantauan (Grey List), dan menerapkan tindakan balasan tegas (seperti membatasi hubungan koresponden, mewajibkan tinjauan pengawasan, atau melarang pembukaan cabang) terhadap yurisdiksi dalam Seruan Tindakan (Black List).',
    criminalPlaybookAndRedFlags: [
      'Merutekan aliran dana dari yurisdiksi berisiko tinggi melalui perusahaan perantara di negara ketiga yang memiliki reputasi baik (hub transit) untuk menyembunyikan yurisdiksi asal dana.'
    ],
    caseStudy: {
      title: 'Dampak Nyata Daftar Hitam & Daftar Abu-Abu FATF terhadap Arus Keuangan Lintas Batas',
      jurisdictionAndYear: 'Global / Sidang Pleno FATF · 2012–2026',
      whatHappened:
        'Studi Dana Moneter Internasional (IMF) menunjukkan bahwa masuknya suatu yurisdiksi ke dalam daftar pemantauan FATF berdampak langsung pada penurunan arus modal masuk hingga rata-rata 7,6% dari PDB karena bank-bank global menerapkan EDD ketat, meninjau ulang hubungan perbankan koresponden, dan memperlambat kliring transaksi sesuai Rekomendasi 19.',
      theBreach:
        'Kelemahan strategis rezim APU-PPT/PPSPM suatu negara yang memicu kewajiban EDD global dan tindakan balasan berdasarkan Rekomendasi 19.',
      consequencesAndLesson:
        'R.19 memberikan insentif ekonomi yang sangat kuat bagi setiap negara untuk memperbaiki celah hukum dan efektivitas penegakan hukumnya agar keluar dari daftar pemantauan FATF.',
      assessorLens:
        'Asesor memeriksa apakah pemerintah secara cepat menerbitkan surat edaran setiap kali FATF memperbarui daftar publiknya, dan apakah sistem bank secara otomatis memicu EDD untuk transaksi terkait negara tersebut.'
    }
  },
  20: {
    recId: 20,
    plainEnglishWhy:
      'Aparat penegak hukum dan PPATK/FIU tidak berada di meja teller atau ruang dealing setiap hari—petugas bank dan PJK-lah yang pertama kali melihat transaksi janggal. Rekomendasi 20 adalah sistem radar peringatan dini nasional: begitu PJK mencurigai atau memiliki alasan wajar untuk mencurigai bahwa dana adalah hasil kejahatan atau terkait pendanaan terorisme, mereka wajib segera melaporkannya melalui Laporan Transaksi Keuangan Mencurigakan (STR / LTKM) ke FIU.',
    mondayMorningReality:
      'Kewajiban melaporkan STR adalah kewajiban langsung dalam Undang-Undang—bukan pilihan diskresi. Tiga aturan mutlak R.20: (1) Wajib dilaporkan SEGERA (promptly) begitu kecurigaan terbentuk, (2) TIDAK ADA batas nominal minimum (transaksi Rp 100.000 pun wajib dilaporkan jika dicurigai terkait terorisme atau kejahatan), dan (3) Percobaan transaksi (attempted transactions) yang batal atau ditolak tetap WAJIB dilaporkan jika mencurigakan.',
    criminalPlaybookAndRedFlags: [
      'Saat petugas bank mulai menanyakan dokumen sumber dana, pelaku langsung membatalkan transaksi dan pergi dengan harapan transaksi yang batal tidak akan dilaporkan ke PPATK/FIU.',
      'Mengirim dana pendanaan terorisme dalam nominal sangat kecil (micro-structuring) agar lolos dari perhatian.'
    ],
    caseStudy: {
      title: 'Skandal Westpac — Kegagalan Melaporkan Jutaan Transaksi Lintas Batas & Indikasi Eksploitasi Anak',
      jurisdictionAndYear: 'Australia · 2013–2019 (Putusan 2020)',
      whatHappened:
        'Otoritas intelijen keuangan Australia (AUSTRAC) menemukan bahwa bank Westpac gagal melaporkan lebih dari 19,5 juta transfer dana internasional tepat waktu, serta gagal mendeteksi dan melaporkan pola transaksi berulang bernilai kecil ke Asia Tenggara yang memiliki indikator kuat terkait jaringan eksploitasi seksual anak secara langsung.',
      theBreach:
        'Pelanggaran masif terhadap Rekomendasi 20 (kegagalan memantau dan segera melaporkan STR atas transaksi yang memiliki indikator tindak pidana asal serius tanpa memandang kecilnya nominal transaksi).',
      consequencesAndLesson:
        'Westpac dijatuhi denda perdata tertinggi dalam sejarah korporasi Australia sebesar AUD 1,3 miliar (sekitar USD 920 juta), dan CEO beserta Ketua Dewan Komisarisnya mengundurkan diri. Tidak ada batas nominal minimum untuk kewajiban STR.',
      assessorLens:
        'Pada IO.4, asesor mengevaluasi kualitas, kecepatan, dan cakupan STR dari setiap sektor (bank, VASP, remitansi, asuransi), serta apakah percobaan transaksi yang dibatalkan juga dilaporkan.'
    }
  },
  21: {
    recId: 21,
    plainEnglishWhy:
      'Agar sistem pelaporan STR bekerja, dua hal harus dijaga secara mutlak: pertama, pegawai bank yang melaporkan kecurigaan dengan itikad baik tidak boleh takut digugat secara perdata atau dipidana oleh nasabah kaya jika ternyata di kemudian hari nasabah tersebut tidak terbukti bersalah (Safe Harbour). Kedua, pegawai bank dilarang keras memberi tahu atau membocorkan ("Tipping-Off") kepada nasabah bahwa rekeningnya sedang dilaporkan ke FIU—karena begitu bocor, pelaku akan langsung melarikan uangnya dan menghilangkan barang bukti.',
    mondayMorningReality:
      'Ketika meminta dokumen tambahan kepada nasabah yang mencurigakan, staf front-office harus menggunakan pertanyaan bisnis/kepatuhan rutin tanpa pernah menyebut kata "STR", "LTKM", atau "PPATK/FIU". Sementara itu, berbagi informasi STR dengan kantor pusat dalam satu grup keuangan (R.18) tetap diizinkan sepanjang dijaga kerahasiaannya.',
    criminalPlaybookAndRedFlags: [
      'Menanam informan atau menyuap relationship manager di dalam bank untuk memberi peringatan dini jika rekening sindikat masuk dalam antrean pelaporan STR.',
      'Mengintimidasi staf kepatuhan bank dengan ancaman gugatan pencemaran nama baik dan pelanggaran rahasia bank.'
    ],
    caseStudy: {
      title: 'Pemidanaan Pejabat Bank karena Membocorkan Penyelidikan (Tipping-Off) kepada Nasabah',
      jurisdictionAndYear: 'Inggris / Eropa / AS · Berbagai Kasus Penegakan Hukum',
      whatHappened:
        'Dalam sejumlah kasus penegakan hukum di Inggris dan Eropa, manajer hubungan nasabah (Private Banking Relationship Managers) terbukti secara diam-diam menghubungi klien VIP mereka melalui pesan terenkripsi untuk memperingatkan bahwa departemen kepatuhan bank baru saja mengirimkan laporan transaksi mencurigakan (SAR/STR) ke FIU, sehingga klien tersebut segera memindahkan jutaan euro ke yurisdiksi lain sebelum surat pembekuan turun.',
      theBreach:
        'Pelanggaran pidana langsung terhadap larangan Tipping-Off dalam Rekomendasi 21(b).',
      consequencesAndLesson:
        'Para manajer bank tersebut dijatuhi hukuman penjara dan dilarang bekerja di sektor keuangan seumur hidup. Kerahasiaan STR adalah syarat mutlak keberhasilan pembekuan aset dan penyidikan.',
      assessorLens:
        'Asesor memeriksa Undang-Undang nasional untuk memastikan pelindungan Safe Harbour R.21(a) tetap berlaku penuh meskipun pelapor tidak tahu persis apa tindak pidana asalnya dan meskipun kejahatan akhirnya tidak terbukti.'
    }
  },
  22: {
    recId: 22,
    plainEnglishWhy:
      'Ketika perbankan memperketat pengawasan APU-PPT, pelaku pencucian uang tidak lagi menyimpan uangnya di tabungan bank. Mereka beralih membeli apartemen dan vila mewah secara tunai, memborong emas batangan dan berlian, menukar uang di meja kasino VIP, atau membayar firma hukum, notaris, akuntan, dan penyedia jasa korporasi (TCSP) untuk mendirikan perusahaan cangkang dan trust. Rekomendasi 22 menjadikan enam profesi dan bisnis non-keuangan ini (DNFBP) sebagai penjaga gerbang (gatekeepers) yang wajib melaksanakan CDD seperti bank.',
    mondayMorningReality:
      'Kasino wajib melakukan CDD untuk transaksi ≥ USD/EUR 3.000 (dan harus bisa melacak chip ke identitas pemain, bukan sekadar cek KTP di pintu masuk). Agen properti wajib melakukan CDD atas PEMBELI sekaligus PENJUAL properti. Pedagang emas/berlian wajib CDD untuk transaksi tunai ≥ USD/EUR 15.000. Advokat, notaris, akuntan, dan TCSP wajib melakukan CDD saat menyiapkan pendirian perusahaan, jual-beli properti, atau mengelola aset klien.',
    criminalPlaybookAndRedFlags: [
      '"Vancouver Model": membawa koper uang tunai hasil narkoba ke kasino VIP, membeli chip, bermain sebentar dengan taruhan kecil, lalu mencairkan sisa chip menjadi cek kasino untuk membeli properti mewah.',
      'Membeli properti komersial atau residensial mewah menggunakan perusahaan cangkang melalui rekening penampungan (client account) milik kantor hukum atau notaris agar nama pembeli asli tidak terlihat oleh bank.'
    ],
    caseStudy: {
      title: 'Komisi Penyelidikan Cullen (Kanada) & Pencucian Uang melalui Kasino dan Properti Mewah',
      jurisdictionAndYear: 'British Columbia, Kanada / Australia · 2015–2022',
      whatHappened:
        'Penyelidikan publik resmi mengungkap bahwa miliaran dolar hasil perdagangan narkotika dan aliran dana gelap lintas batas dicuci melalui kasino-kasino (yang menerima koper berisi uang tunai pecahan kecil tanpa verifikasi sumber kekayaan) serta pembelian properti mewah menggunakan perusahaan anonim dan rekening klien profesional.',
      theBreach:
        'Kegagalan sektor DNFBP—khususnya kasino, agen real estat, dan profesi hukum/notaris—dalam melaksanakan CDD, identifikasi Beneficial Owner, dan verifikasi sumber dana sesuai Rekomendasi 22.',
      consequencesAndLesson:
        'Operator kasino di Kanada dan Australia (seperti Crown Resorts dan Star Entertainment) dijatuhi denda ratusan juta dolar, dan regulasi kepemilikan properti serta DNFBP diperketat secara drastis. Sektor properti dan DNFBP sering menjadi titik terlemah dalam rezim APU-PPT nasional.',
      assessorLens:
        'Dalam hampir setiap Mutual Evaluation FATF, kepatuhan sektor DNFBP (IO.4) menjadi sorotan tajam karena tingkat penerapan CDD di sektor non-keuangan sering jauh tertinggal dibandingkan sektor perbankan.'
    }
  },
  23: {
    recId: 23,
    plainEnglishWhy:
      'Mewajibkan DNFBP melakukan CDD (R.22) saja tidak cukup apabila ketika mereka menemukan klien yang jelas-jelas ingin mencuci uang korupsi, mereka tidak wajib melaporkannya ke FIU. Rekomendasi 23 memperluas kewajiban pengendalian internal (R.18), EDD negara berisiko tinggi (R.19), pelaporan STR (R.20), dan larangan tipping-off (R.21) kepada seluruh sektor DNFBP—dengan tetap menghormati hak kerahasiaan profesi hukum yang sah saat membela klien di pengadilan.',
    mondayMorningReality:
      'Notaris, advokat, akuntan, TCSP, agen properti, kasino, dan pedagang logam/batu mulia (tunai ≥ USD/EUR 15.000) wajib terdaftar di sistem pelaporan FIU (seperti goAML) dan mengirimkan STR. Hak ingkar / kerahasiaan profesi hukum (Legal Professional Privilege) HANYA berlaku ketika advokat sedang menentukan posisi hukum klien atau membela klien dalam proses peradilan—BUKAN saat advokat bertindak sebagai perantara bisnis yang membelikan vila atau mendirikan perusahaan cangkang.',
    criminalPlaybookAndRedFlags: [
      'Menyalahgunakan rekening penampungan klien (client trust account / escrow) milik kantor advokat atau notaris untuk memindahkan dana suap dengan berlindung di balik klaim kerahasiaan profesi hukum.'
    ],
    caseStudy: {
      title: 'Pengungkapan "Pandora Papers" & Penyalahgunaan Gatekeeper Profesional',
      jurisdictionAndYear: 'Global · 2021',
      whatHappened:
        'Kebocoran 11,9 juta dokumen dari 14 penyedia jasa korporasi (TCSP) dan firma hukum mengungkap bagaimana ratusan politisi, miliarder, dan pelaku kejahatan keuangan menyembunyikan properti dan aset senilai miliaran dolar di balik trust dan perusahaan cangkang, sementara jumlah STR yang dilaporkan oleh sektor TCSP, firma hukum, dan agen properti di banyak negara hampir mendekati nol.',
      theBreach:
        'Kegagalan sektor DNFBP dalam melaksanakan pelaporan STR (R.23 & R.20) serta penyalahgunaan klaim kerahasiaan profesi untuk transaksi komersial/korporasi di luar litigasi.',
      consequencesAndLesson:
        'Banyak yurisdiksi memperketat pengawasan terhadap TCSP, notaris, dan profesi hukum serta memperjelas batas tegas antara pembelaan hukum di pengadilan vs. fasilitasi transaksi keuangan.',
      assessorLens:
        'Asesor memeriksa statistik STR nasional: jika sektor properti dan korporasi dinilai berisiko tinggi di NRA, tetapi jumlah STR dari notaris, advokat, TCSP, dan agen properti sangat minim, nilai IO.4 negara tersebut akan turun tajam.'
    }
  },
  24: {
    recId: 24,
    plainEnglishWhy:
      'Hampir setiap skandal pencucian uang, korupsi, dan penghindaran sanksi berskala besar di dunia menggunakan satu alat yang sama: Perusahaan Cangkang (Shell Company) yang menyembunyikan siapa manusia nyata di belakangnya. Rekomendasi 24 (direvisi secara menyeluruh pada Maret 2022) menutup celah anonimitas korporasi dengan mewajibkan Pendekatan Multi-Jalur (Multi-Pronged Approach), melarang saham atas unjuk baru, dan membongkar penggunaan direktur/pemegang saham pinjam nama (nominee).',
    mondayMorningReality:
      'Negara tidak boleh lagi hanya mengandalkan satu sumber data Beneficial Ownership (BO). Negara wajib memadukan: (1) kewajiban perusahaan menyimpan daftar BO sendiri, (2) Registri BO terpusat milik pemerintah (atau mekanisme setara), dan (3) data CDD dari perbankan/DNFBP—dilengkapi mekanisme pelaporan ketidaksesuaian (discrepancy reporting). Selain itu, saham atas unjuk (bearer shares) baru dilarang mutlak, dan pemegang saham/direktur nominee wajib mengungkapkan identitas "Nominator" yang menyuruh mereka.',
    criminalPlaybookAndRedFlags: [
      'Menyusun rantai kepemilikan perusahaan berlapis-lapis lintas 4 yurisdiksi berbeda di mana masing-masing memegang 20% saham agar tidak ada satu pun yang melewati ambang batas 25%.',
      'Menunjuk warga lokal sebagai direktur dan pemegang saham nominee melalui perjanjian fidusia rahasia yang tidak didaftarkan.',
      'Menggunakan perusahaan yang telah lama tidak aktif (shelf company) untuk mengikuti tender pengadaan pemerintah (public procurement).'
    ],
    caseStudy: {
      title: 'Jaringan Perusahaan Cangkang "FinCEN Files" & Reformasi Registri Beneficial Ownership Global',
      jurisdictionAndYear: 'Global / Inggris / BVI / AS · 2020–2024',
      whatHappened:
        'Investigasi FinCEN Files dan kasus-kasus korupsi pengadaan publik menunjukkan bagaimana ribuan perusahaan cangkang (seperti Limited Liability Partnerships dan perusahaan lepas pantai dengan direktur nominee yang menjabat di lebih dari 1.000 perusahaan sekaligus) digunakan untuk mencuci uang kleptokrasi, penipuan pengadaan masa pandemi, dan kejahatan terorganisir.',
      theBreach:
        'Penyalahgunaan badan hukum akibat tidak adanya verifikasi silang atas informasi Pemilik Manfaat (Beneficial Owner) dan maraknya penggunaan direktur/pemegang saham nominee yang tidak transparan (R.24).',
      consequencesAndLesson:
        'Revisi R.24 tahun 2022 mewajibkan verifikasi informasi BO melalui pendekatan multi-jalur, aturan tegas atas nominee, serta akses informasi BO dalam proses pengadaan barang dan jasa pemerintah (public procurement).',
      assessorLens:
        'Pada IO.5, asesor menguji seberapa cepat penegak hukum dapat menemukan manusia pengendali sebenarnya dari suatu perusahaan, dan apakah data di Registri BO pemerintah benar-benar diverifikasi atau sekadar menerima input mandiri tanpa pengecekan.'
    }
  },
  25: {
    recId: 25,
    plainEnglishWhy:
      'Jika perusahaan korporasi (R.24) sudah diwajibkan membuka daftar pemilik manfaatnya, pencuci uang yang canggih akan beralih ke Perikatan Hukum (Legal Arrangements) seperti Express Trust atau struktur serupa. Di dalam Trust, kepemilikan aset dipisahkan: ada pendiri yang menyerahkan aset (Settlor), pengelola (Trustee), pengawas (Protector), dan penerima manfaat (Beneficiary). Tanpa aturan R.25 (direvisi Februari 2023), seorang koruptor dapat menyerahkan vila dan sahamnya ke dalam Trust luar negeri dan mengklaim "secara hukum aset itu bukan milik saya lagi".',
    mondayMorningReality:
      'Setiap Trustee (wali amanat) dari express trust wajib memperoleh dan menyimpan informasi yang memadai, akurat, dan terkini mengenai identitas seluruh pihak di dalam trust: Settlor, Trustee, Protector, seluruh Beneficiary (atau kelas beneficiary), serta manusia nyata yang memegang kendali akhir atas trust tersebut. Trustee juga wajib mengungkapkan statusnya sebagai trustee saat membuka rekening di bank atau bertransaksi dengan DNFBP.',
    criminalPlaybookAndRedFlags: [
      'Membentuk "Discretionary Trust" di yurisdiksi lepas pantai di mana pejabat korup bertindak sebagai Settlor dan Protector tersembunyi yang memiliki wewenang mengganti Trustee kapan saja.',
      'Mengombinasikan Trust sebagai pemegang saham dari perusahaan cangkang BVI yang memiliki rekening bank di negara ketiga.'
    ],
    caseStudy: {
      title: 'Penyembunyian Aset Miliaran Dolar Oligarki & Kleptokrat melalui Jaringan Trust Berlapis',
      jurisdictionAndYear: 'Siprus / Jersey / Inggris / AS · 2014–2023',
      whatHappened:
        'Ketika sanksi internasional dan penyidikan korupsi dijatuhkan terhadap sejumlah oligarki dan pejabat korup, penyidik menemukan bahwa kepemilikan superyacht, jet pribadi, dan real estat di London serta New York telah dialihkan ke dalam jaringan Express Trust berlapis yang dikelola oleh Trustee profesional, bahkan beberapa trust diubah daftar penerima manfaatnya tepat sehari sebelum sanksi diumumkan.',
      theBreach:
        'Penyalahgunaan perikatan hukum (Express Trust) untuk menyamarkan kepemilikan dan kendali akhir atas aset, serta kegagalan mengidentifikasi seluruh pihak dalam struktur trust sesuai Rekomendasi 25.',
      consequencesAndLesson:
        'Revisi R.25 tahun 2023 memperketat kewajiban transparansi bagi negara yang memiliki hukum trust, negara tempat trustee berdomisili, maupun negara tempat aset trust dikelola.',
      assessorLens:
        'Asesor memeriksa apakah bank dan DNFBP benar-benar mengidentifikasi SELURUH pihak dalam trust (Settlor, Trustee, Protector, Beneficiary), bukan hanya mencatat nama Trustee sebagai nasabah.'
    }
  },
  26: {
    recId: 26,
    plainEnglishWhy:
      'Bayangkan jika seorang gembong sindikat kejahatan diizinkan membeli saham mayoritas sebuah bank atau mendirikan perusahaan sekuritas—ia tidak perlu lagi menyelundupkan uang ke dalam sistem keuangan karena ia sendiri yang memiliki banknya! Rekomendasi 26 mewajibkan pengawas keuangan menjaga pintu masuk industri (uji kelayakan dan kepatutan / fit and proper test), melarang keras pendirian Shell Bank, dan mengawasi seluruh PJK dengan pendekatan berbasis risiko.',
    mondayMorningReality:
      'Otoritas pengawas (seperti OJK dan Bank Indonesia) wajib menyaring rekam jejak kriminal dan integritas pemegang saham pengendali, Beneficial Owner, komisaris, dan direksi sebelum memberi izin usaha. Frekuensi dan kedalaman pemeriksaan (on-site dan off-site inspection) harus disesuaikan dengan profil risiko PJK dan temuan NRA.',
    criminalPlaybookAndRedFlags: [
      'Mengakuisisi bank kecil, BPR, perusahaan asuransi, atau penyelenggara fintech yang sedang kesulitan modal menggunakan dana hasil kejahatan melalui pemegang saham nominee.',
      'Mendirikan bank tanpa kehadiran manajemen fisik nyata (Shell Bank).'
    ],
    caseStudy: {
      title: 'Kasus FBME Bank & Pilatus Bank — Ketika Pemilik dan Manajemen Bank Terlibat Pencucian Uang',
      jurisdictionAndYear: 'Siprus / Malta / Eropa · 2014–2018',
      whatHappened:
        'Bank sentral Eropa (ECB) mencabut izin Pilatus Bank di Malta setelah pemilik dan pimpinannya ditangkap atas dakwaan pencucian uang dan pelanggaran sanksi, sementara pemeriksaan pengawasan menemukan bahwa bank tersebut secara masif melayani PEP berisiko tinggi tanpa kontrol APU-PPT yang memadai. Sebelumnya, FBME Bank juga ditutup setelah diidentifikasi memfasilitasi pencucian uang internasional.',
      theBreach:
        'Kegagalan pengendalian pintu masuk pasar (market entry / fit and proper test atas Beneficial Owner bank) serta lemahnya pengawasan berbasis risiko terhadap lembaga keuangan berisiko tinggi (R.26).',
      consequencesAndLesson:
        'Uji kelayakan dan kepatutan (fit and proper test) yang ketat terhadap pemilik manfaat bank serta pengawasan on-site berbasis risiko adalah benteng utama menjaga integritas sektor keuangan.',
      assessorLens:
        'Pada IO.3, asesor menguji apakah pengawas benar-benar memeriksa bank yang berisiko paling tinggi lebih sering dan lebih mendalam dibandingkan lembaga berisiko rendah, serta apakah ada penolakan izin bagi pemohon yang tidak memenuhi syarat integritas.'
    }
  },
  27: {
    recId: 27,
    plainEnglishWhy:
      'Pengawas keuangan tidak akan dihormati oleh industri apabila mereka tidak memiliki wewenang hukum untuk masuk memeriksa ruang kerja bank, meminta dokumen asli tanpa izin pengadilan, dan menjatuhkan sanksi tegas ketika menemukan pelanggaran. Rekomendasi 27 memastikan setiap pengawas memiliki "gigi" yang tajam dan kewenangan penuh.',
    mondayMorningReality:
      'Undang-Undang wajib memberikan kewenangan kepada pengawas untuk melakukan inspeksi di tempat (on-site) maupun jarak jauh (off-site), mewajibkan PJK menyerahkan setiap dokumen atau data transaksi yang relevan untuk pengawasan (tanpa harus meminta penetapan pengadilan terlebih dahulu), serta menjatuhkan sanksi administratif dan pencabutan izin.',
    criminalPlaybookAndRedFlags: [
      'Menunda-nunda penyerahan berkas CDD atau log sistem pemantauan transaksi saat pemeriksaan on-site dengan alasan kendala teknis atau harus menunggu izin kantor pusat.',
      'Menyembunyikan berkas nasabah VIP di server terpisah yang tidak diperlihatkan kepada tim pemeriksa pengawas.'
    ],
    caseStudy: {
      title: 'Penghambatan Pemeriksaan Pengawas & Pencabutan Izin Usaha Lembaga Keuangan',
      jurisdictionAndYear: 'Eropa / Asia / AS · Berbagai Kasus Pengawasan',
      whatHappened:
        'Dalam beberapa kasus pengawasan perbankan lintas batas, manajemen bank berupaya menyembunyikan laporan audit internal yang mengungkap kelemahan fatal sistem pemantauan transaksi dan menghambat akses pemeriksa pengawas terhadap dokumen Beneficial Ownership nasabah non-residen.',
      theBreach:
        'Pelanggaran terhadap kewenangan inspeksi dan kewajiban penyerahan informasi tanpa hambatan kepada otoritas pengawas (R.27).',
      consequencesAndLesson:
        'Otoritas pengawas menggunakan kewenangan R.27 dan R.35 untuk memberhentikan direksi, menunjuk pengelola statuter, dan mencabut izin usaha bank yang menghalangi pemeriksaan.',
      assessorLens:
        'Asesor memeriksa apakah pengawas memiliki sumber daya manusia, alat analitik, dan kewenangan hukum mandiri untuk memaksa penyerahan dokumen dan menjatuhkan tindakan korektif tanpa intervensi politik.'
    }
  },
  28: {
    recId: 28,
    plainEnglishWhy:
      'Jika perbankan diawasi dengan sangat ketat oleh bank sentral dan otoritas jasa keuangan (R.26–27), sementara kasino, agen properti, pedagang emas, notaris, advokat, dan TCSP dibiarkan tanpa pengawas sama sekali, maka seluruh uang kotor akan berpindah ke sektor DNFBP. Rekomendasi 28 mewajibkan pengawasan berbasis risiko dan rezim sanksi yang efektif bagi seluruh sektor DNFBP.',
    mondayMorningReality:
      'Kasino wajib mendapat izin ketat dan pemilik/pengurusnya disaring agar bebas dari sindikat kriminal. Untuk DNFBP lainnya (properti, logam mulia, notaris, advokat, akuntan, TCSP), pengawasan dapat dilakukan oleh instansi pemerintah atau Organisasi Profesi Mandiri (Self-Regulatory Body / SRB seperti asosiasi advokat/notaris/akuntan) asalkan SRB tersebut benar-benar independen, terbebas dari konflik kepentingan, dan menegakkan sanksi.',
    criminalPlaybookAndRedFlags: [
      'Sindikat kejahatan terorganisir mendanai pembangunan kasino fisik atau kasino online melalui perusahaan perantara untuk mencuci uang tunai hasil kejahatan.',
      'Memanfaatkan profesi gatekeeper di yurisdiksi yang asosiasi profesinya (SRB) enggan memeriksa atau menjatuhkan sanksi kepada anggotanya sendiri.'
    ],
    caseStudy: {
      title: 'Kegagalan Pengawasan Kasino & Reformasi Pengawasan Gatekeeper Profesional',
      jurisdictionAndYear: 'Australia / Inggris / Global · 2020–2024',
      whatHappened:
        'Komisi penyelidikan di beberapa negara bagian Australia menemukan bahwa operator kasino besar membiarkan operator tur VIP ("junket operators") yang terhubung dengan kejahatan terorganisir transnasional membawa masuk ratusan juta dolar melalui rekening perantara tanpa pengawasan efektif. Di saat bersamaan, evaluasi FATF di berbagai negara menyoroti lemahnya pengawasan SRB terhadap sektor properti dan penyedia jasa korporasi.',
      theBreach:
        'Kelemahan pengawasan berbasis risiko terhadap sektor kasino dan DNFBP lainnya, serta kegagalan mencegah infiltrasi pihak terafiliasi kriminal dalam operasional kasino (R.28).',
      consequencesAndLesson:
        'Denda ratusan juta dolar dijatuhkan, operasional junket kasino dilarang, dan sejumlah negara membentuk badan pengawas profesional khusus untuk mengawasi kepatuhan APU-PPT sektor hukum, akuntansi, dan properti.',
      assessorLens:
        'Pada IO.3, asesor hampir selalu menguji apakah SRB (asosiasi advokat/notaris/akuntan) benar-benar melakukan inspeksi APU-PPT dan menjatuhkan sanksi, atau hanya berfungsi sebagai organisasi serikat profesi.'
    }
  },
  29: {
    recId: 29,
    plainEnglishWhy:
      'Jutaan laporan STR dan transaksi tunai yang dikirim oleh ribuan bank dan DNFBP tidak akan berguna jika hanya menumpuk di gudang data tanpa dianalisis. Di sisi lain, penyidik kepolisian tidak boleh langsung mengobrak-abrik seluruh database perbankan nasional tanpa indikasi awal. Rekomendasi 29 menetapkan Unit Intelijen Keuangan (FIU—seperti PPATK di Indonesia, FinCEN di AS, atau AUSTRAC di Australia) sebagai pusat saraf intelijen nasional yang independen: menerima laporan, menganalisisnya, dan mendiseminasikan hasil analisis intelijen ke penegak hukum.',
    mondayMorningReality:
      'FIU menjalankan tiga fungsi inti: (1) Menerima STR dan laporan lainnya (seperti laporan transaksi tunai / transfer internasional), (2) Melakukan Analisis Operasional (melacak target dan jaringan spesifik) serta Analisis Strategis (memetakan tren dan modus baru), dan (3) Mendiseminasikan laporan intelijen secara spontan maupun atas permintaan. FIU wajib memiliki independensi operasional penuh, keamanan data ketat, dan menjadi anggota Egmont Group.',
    criminalPlaybookAndRedFlags: [
      'Memecah aliran dana di 15 bank dan 5 bursa kripto berbeda agar masing-masing bank hanya melihat potongan kecil transaksi—namun analisis terpusat di FIU dapat menyatukan seluruh kepingan puzzle tersebut.'
    ],
    caseStudy: {
      title: 'Membongkar Jaringan Pencucian Uang & Korupsi melalui Analisis Jaringan FIU Terpusat',
      jurisdictionAndYear: 'Global / Egmont Group · Berbagai Operasi Intelijen Keuangan',
      whatHappened:
        'Dalam berbagai kasus korupsi pengadaan alat kesehatan dan sindikat penipuan lintas batas, tidak ada satu bank pun yang melihat gambaran utuhnya karena pelaku menyebar puluhan rekening atas nama perusahaan berbeda di belasan bank. Namun, ketika beberapa bank mengirimkan STR terpisah ke FIU nasional, sistem analisis operasional FIU berhasil menghubungkan kesamaan nomor telepon, IP address, dan pola aliran dana menuju satu Beneficial Owner yang sama.',
      theBreach:
        'Upaya pelaku menyamarkan jejak transaksi lintas lembaga keuangan yang berhasil dipatahkan oleh fungsi penerimaan, pengayaan data, dan analisis operasional FIU (R.29).',
      consequencesAndLesson:
        'Tanpa FIU yang independen dan memiliki akses ke basis data kependudukan, pajak, korporasi, dan penegakan hukum, kejahatan keuangan modern yang terfragmentasi mustahil terdeteksi.',
      assessorLens:
        'Pada IO.6, asesor menilai apakah laporan hasil analisis (diseminasi) dari FIU benar-benar digunakan oleh kepolisian, kejaksaan, dan KPK/lembaga antikorupsi untuk membuka penyidikan baru dan melacak aset.'
    }
  },
  30: {
    recId: 30,
    plainEnglishWhy:
      'Sering kali dalam kasus penangkapan bandar narkotika, penyelundupan, atau korupsi, polisi fokus menangkap pelaku lapangan dan menyita barang bukti fisik, tetapi lupa menyelidiki ke mana aliran uang kejahatannya mengalir dan siapa cukong besar di belakangnya. Rekomendasi 30 mewajibkan "Investigasi Keuangan Paralel" (Parallel Financial Investigation) dalam setiap kejahatan yang menghasilkan keuntungan besar: ikuti jejak uangnya (follow the money) bersamaan dengan penyidikan pidananya!',
    mondayMorningReality:
      'Setiap kali aparat penegak hukum menangani kasus tindak pidana asal yang menghasilkan uang banyak (narkoba, korupsi, kejahatan pajak, penipuan, kejahatan lingkungan), mereka wajib secara proaktif menjalankan investigasi keuangan paralel untuk mengidentifikasi jaringan TPPU, melacak aset di dalam maupun luar negeri, dan segera membekukannya agar dapat dirampas.',
    criminalPlaybookAndRedFlags: [
      'Mengorbankan kurir lapangan atau direktur boneka untuk ditangkap polisi, sementara pengendali utama dan aset senilai ratusan miliar rupiah tetap aman karena penyidik hanya memproses tindak pidana asalnya tanpa menelusuri aliran uang.'
    ],
    caseStudy: {
      title: 'Operasi "Follow the Money" — Membongkar Kartel dan Sindikat Kejahatan Lingkungan melalui Jejak Keuangan',
      jurisdictionAndYear: 'Amerika Latin / Eropa / Asia Tenggara · 2018–2024',
      whatHappened:
        'Selama bertahun-tahun, penangkapan pelaku penambangan emas ilegal dan pembalakan liar di lapangan tidak menghentikan perusakan hutan karena pemodal utamanya tidak tersentuh. Ketika penegak hukum mulai menerapkan Investigasi Keuangan Paralel (R.30) bekerja sama dengan FIU, mereka berhasil melacak aliran pembayaran alat berat, perusahaan pengolahan logam, dan rekening penampung para pemodal utama di kota besar.',
      theBreach:
        'Kewajiban melaksanakan investigasi keuangan paralel secara proaktif pada tindak pidana asal yang menghasilkan keuntungan besar serta melacak aset untuk dirampas (R.30).',
      consequencesAndLesson:
        'Penelusuran aliran uang berhasil menjerat pimpinan sindikat dan membekukan aset properti, rekening, serta armada alat berat senilai ratusan juta dolar.',
      assessorLens:
        'Pada IO.7 dan IO.8, asesor mengecek apakah penyidik kepolisian dan kejaksaan secara rutin membuka penyidikan TPPU dan pelacakan aset berdampingan dengan penyidikan tindak pidana asal, bukan sekadar berhenti pada pidana pokoknya.'
    }
  },
  31: {
    recId: 31,
    plainEnglishWhy:
      'Menghadapi sindikat pencucian uang profesional yang menggunakan komunikasi terenkripsi, pengacara korporasi, dan struktur lepas pantai, penyidik tidak bisa hanya mengandalkan pemeriksaan saksi biasa. Rekomendasi 31 mewajibkan negara membekali aparat penegak hukum dengan kewenangan paksa (compulsory powers) dan teknik investigasi khusus yang lengkap.',
    mondayMorningReality:
      'Penyidik wajib memiliki wewenang hukum untuk memaksa penyerahan dokumen dari bank/DNFBP/perusahaan, menggeledah lokasi dan menyita barang bukti, mengambil keterangan saksi, serta menggunakan empat teknik investigasi khusus: (1) Penyamaran (undercover operations), (2) Penyadapan komunikasi (intercepting communications), (3) Akses ke sistem komputer, dan (4) Pengiriman di bawah pengawasan (controlled delivery)—ditambah mekanisme pelacakan rekening terpusat tanpa membocorkan target ke pemilik rekening.',
    criminalPlaybookAndRedFlags: [
      'Menggunakan aplikasi pesan terenkripsi, server luar negeri, dan kurir uang profesional (professional money launderers) yang hanya berkomunikasi lewat kode untuk memindahkan uang tunai dan kripto.'
    ],
    caseStudy: {
      title: 'Operasi "Trojan Shield / ANOM" & Penyergapan Jaringan Pencuci Uang Profesional',
      jurisdictionAndYear: 'Global (FBI, Europol, AFP, dan 16 Negara) · 2018–2021',
      whatHappened:
        'Melalui kombinasi operasi penyamaran (undercover), penyadapan komunikasi terenkripsi yang sah, dan pengiriman di bawah pengawasan (controlled delivery) lintas negara, aparat penegak hukum dari 16 negara berhasil memantau jutaan pesan sindikat kejahatan terorganisir dan jaringan pencuci uang profesional mereka secara langsung.',
      theBreach:
        'Penerapan teknik investigasi khusus dan kerja sama antar-lembaga penegak hukum sesuai Rekomendasi 31 untuk membongkar jaringan TPPU dan kejahatan terorganisir tingkat tinggi.',
      consequencesAndLesson:
        'Operasi tersebut menghasilkan lebih dari 800 penangkapan di seluruh dunia, penyitaan puluhan ton narkotika, serta perampasan lebih dari USD 148 juta uang tunai, barang mewah, dan aset kripto.',
      assessorLens:
        'Asesor memeriksa apakah Undang-Undang Acara Pidana nasional mengizinkan keempat teknik investigasi khusus tersebut untuk penyidikan TPPU dan TPPT, serta apakah penyidik dapat mengidentifikasi pemilik rekening secara cepat.'
    }
  },
  32: {
    recId: 32,
    plainEnglishWhy:
      'Ketika sistem perbankan dan transfer kawat digital diawasi ketat, pelaku kejahatan sering kembali ke metode paling kuno: memasukkan lembaran uang kertas USD/EUR atau instrumen atas unjuk (cek perjalanan, wesel kosong) ke dalam koper, ban serep mobil, atau kontainer kargo dan membawanya melintasi perbatasan negara. Rekomendasi 32 membangun benteng pengawasan Bea Cukai terhadap Kurir Uang Tunai (Cash Couriers).',
    mondayMorningReality:
      'Setiap negara wajib menerapkan sistem Deklarasi (wajib lapor untuk pembawaan ≥ batas maksimal USD/EUR 15.000—banyak negara menetapkan USD/EUR 10.000 atau Rp 100 juta) atau sistem Pengungkapan di seluruh perbatasan bagi uang tunai dan Instrumen Negosiabel Atas Unjuk (BNI), termasuk kiriman pos dan kargo. Petugas Bea Cukai wajib berwenang menghentikan dan menahan uang tunai apabila ada kecurigaan TPPU/TPPT (meskipun di bawah batas deklarasi!) atau jika terjadi deklarasi palsu.',
    criminalPlaybookAndRedFlags: [
      '"Smurfing kurir udara": mengerahkan 10 penumpang dalam satu penerbangan yang masing-masing membawa USD 9.500 (tepat di bawah batas deklarasi USD 10.000) untuk disatukan kembali setelah melewati imigrasi.',
      'Menyembunyikan gepokan uang kertas pecahan tinggi (EUR 500 / USD 100) di dalam peralatan elektronik pada kargo udara atau pos.'
    ],
    caseStudy: {
      title: 'Operasi "In Our Sites / Cash Courier Rings" — Sindikat Kurir Uang Tunai Bandara Internasional',
      jurisdictionAndYear: 'Eropa / Timur Tengah / Asia · 2019–2023',
      whatHappened:
        'Bea Cukai dan Europol membongkar jaringan kurir uang tunai terorganisir yang melakukan ratusan penerbangan lintas negara dengan membawa jutaan euro dan dolar tunai yang disembunyikan di dalam koper berlapis ganda dan kargo komersial untuk mencuci hasil perdagangan narkoba Eropa dan membeli emas di luar negeri.',
      theBreach:
        'Penyelundupan uang tunai lintas batas dan pelanggaran kewajiban deklarasi pabean yang ditindak melalui kewenangan penahanan dan penyitaan Bea Cukai berdasarkan Rekomendasi 32.',
      consequencesAndLesson:
        'Jutaan euro uang tunai berhasil disita di bandara dan informasi deklarasi pabean yang dikirim ke FIU menjadi kunci untuk membongkar seluruh jaringan pencucian uang di belakang para kurir.',
      assessorLens:
        'Asesor memeriksa apakah data deklarasi pembawaan uang tunai dari Bea Cukai benar-benar terhubung langsung ke database FIU, dan apakah petugas perbatasan aktif menahan uang tunai mencurigakan.'
    }
  },
  33: {
    recId: 33,
    plainEnglishWhy:
      'Tanpa data statistik yang akurat dan terukur, pemerintah maupun tim penilai FATF tidak akan pernah tahu apakah rezim APU-PPT suatu negara benar-benar efektif atau hanya sekadar klaim di atas kertas. Rekomendasi 33 mewajibkan negara memelihara statistik komprehensif mengenai efektivitas dan efisiensi sistem APU-PPT mereka.',
    mondayMorningReality:
      'Negara wajib mengumpulkan dan memantau statistik tahunan yang mencakup: (1) jumlah STR yang diterima dan didiseminasikan oleh FIU, (2) jumlah penyidikan, penuntutan, dan vonis pengadilan kasus TPPU dan TPPT, (3) nilai properti yang dibekukan, disita, dan dirampas, serta (4) jumlah permintaan MLA dan kerja sama internasional yang diajukan, diterima, dikabulkan, atau ditolak beserta rata-rata waktu penyelesaiannya.',
    criminalPlaybookAndRedFlags: [
      'Ketiadaan pencatatan statistik terpadu antar-pengadilan, kejaksaan, dan kepolisian sering menyembunyikan fakta bahwa ratusan kasus TPPU berhenti di tengah jalan tanpa vonis atau tanpa perampasan aset.'
    ],
    caseStudy: {
      title: 'Kegagalan Membuktikan Efektivitas dalam Evaluasi Bersama FATF Akibat Kekosongan Data Statistik',
      jurisdictionAndYear: 'Global / Evaluasi Bersama FATF · 2016–2024',
      whatHappened:
        'Sejumlah negara gagal mencapai nilai kelulusan pada berbagai Immediate Outcomes (IO) saat menjalani Mutual Evaluation FATF—bukan semata-mata karena tidak adanya penindakan, melainkan karena kepolisian, kejaksaan, pengadilan, dan otoritas pemulihan aset tidak memiliki statistik terpadu yang konsisten untuk membuktikan berapa kasus TPPU yang diadili dan berapa nilai aset yang benar-benar dirampas.',
      theBreach:
        'Kegagalan memelihara statistik komprehensif mengenai efektivitas dan efisiensi sistem APU-PPT (R.33).',
      consequencesAndLesson:
        'Dalam metodologi FATF, beban pembuktian efektivitas berada pada negara yang dinilai. Statistik yang rapi dan terintegrasi adalah fondasi untuk mengevaluasi kinerja kebijakan nasional dan lulus Mutual Evaluation.',
      assessorLens:
        'Asesor menggunakan data R.33 di setiap bab evaluasi (IO.1 hingga IO.11) untuk menguji klaim pemerintah terhadap kenyataan di lapangan.'
    }
  },
  34: {
    recId: 34,
    plainEnglishWhy:
      'Petugas kepatuhan di bank, perusahaan asuransi, bursa kripto, maupun kantor notaris tidak memiliki akses ke berkas penyidikan polisi. Jika FIU dan pengawas hanya menerima laporan STR satu arah tanpa pernah memberikan panduan (guidance) dan umpan balik (feedback) mengenai modus-modus kejahatan terbaru, maka industri hanya akan mengirimkan laporan defensif yang kurang berkualitas. Rekomendasi 34 membangun kemitraan dua arah antara otoritas dan industri pelapor.',
    mondayMorningReality:
      'Otoritas berwenang, pengawas, dan SRB wajib menerbitkan pedoman praktis sektoral, membagikan laporan tipologi dan indikator red flags terbaru (misalnya modus penipuan online, korupsi pengadaan, atau pendanaan terorisme), serta memberikan umpan balik atas kualitas pelaporan STR agar PJK dan DNFBP dapat mempertajam sistem deteksi mereka.',
    criminalPlaybookAndRedFlags: [
      'Mengubah modus operandi pencucian uang dengan cepat ke sektor baru (misalnya memindahkan dana lewat top-up game online, perdagangan karbon, atau factoring fiktif) sebelum industri memahami indikator red flag-nya.'
    ],
    caseStudy: {
      title: 'Kemitraan Intelijen Publik-Swasta (Public-Private Partnership) dalam Membongkar Jaringan Kejahatan',
      jurisdictionAndYear: 'Inggris (JMLIT) / Australia (Fintel Alliance) / Singapura (COSMIC) · 2016–2026',
      whatHappened:
        'Melalui forum kemitraan dan umpan balik terstruktur antara FIU, penegak hukum, dan perbankan (sesuai semangat R.34 dan R.2), otoritas membagikan indikator tipologi spesifik mengenai jaringan perdagangan manusia, penipuan siber, dan penghindaran sanksi. Hasilnya, kualitas STR yang dikirimkan oleh bank meningkat tajam dan langsung mengarah pada pembekuan ratusan rekening sindikat.',
      theBreach:
        'Pentingnya penyediaan pedoman dan umpan balik yang konstruktif oleh otoritas kepada PJK dan DNFBP sesuai Rekomendasi 34.',
      consequencesAndLesson:
        'Ketika FIU dan pengawas aktif memberikan umpan balik dan tipologi praktis kepada pihak pelapor, tingkat akurasi STR meningkat berkali-kali lipat dibandingkan sekadar pendekatan menghukum.',
      assessorLens:
        'Pada IO.3 dan IO.4, asesor mewawancarai langsung perwakilan bank dan DNFBP untuk menanyakan apakah pedoman dan umpan balik dari FIU/pengawas benar-benar membantu mereka mendeteksi transaksi mencurigakan.'
    }
  },
  35: {
    recId: 35,
    plainEnglishWhy:
      'Jika sebuah bank besar ketahuan membantu mencuci uang miliaran dolar dan menghasilkan keuntungan komisi sebesar USD 50 juta, lalu denda maksimum yang diatur dalam Undang-Undang hanya sebesar USD 10.000, maka denda tersebut tidak lebih dari "biaya operasional bisnis" (cost of doing business). Rekomendasi 35 mewajibkan adanya sanksi yang efektif, proporsional, dan memberikan efek jera (dissuasive)—dan yang paling penting, sanksi tersebut harus dapat dijatuhkan tidak hanya kepada korporasinya, tetapi juga secara pribadi kepada Direksi dan Manajemen Senior yang bertanggung jawab!',
    mondayMorningReality:
      'Negara wajib menyediakan rentang sanksi pidana, perdata, dan administratif yang luas bagi PJK dan DNFBP yang melanggar kewajiban APU-PPT (mulai dari peringatan tertulis, perintah perbaikan, denda finansial besar yang mencabut keuntungan pelanggaran, pemberhentian pengurus, larangan berkarir di industri keuangan, hingga pencabutan izin usaha).',
    criminalPlaybookAndRedFlags: [
      'Manajemen senior sengaja memotong anggaran sistem kepatuhan dan mengabaikan peringatan Compliance Officer demi mengejar target bonus pertumbuhan bisnis, dengan asumsi bahwa jika ketahuan, perusahaanlah yang akan membayar denda dari kas korporasi.'
    ],
    caseStudy: {
      title: 'Pertanggungjawaban Pribadi Eksekutif & Rekor Denda Miliaran Dolar atas Kelalaian APU-PPT',
      jurisdictionAndYear: 'Amerika Serikat / Eropa / Australia · 2018–2024',
      whatHappened:
        'Dalam berbagai kasus penegakan hukum modern (seperti kasus Danske Bank, Rabobank, Westpac, Binance, dan TD Bank), regulator tidak hanya menjatuhkan denda finansial miliaran dolar terhadap institusi, tetapi juga menjatuhkan sanksi individu, pencabutan bonus (clawback), larangan menduduki jabatan di industri keuangan, hingga tuntutan pidana terhadap pejabat eksekutif yang dengan sengaja mengabaikan kewajiban APU-PPT.',
      theBreach:
        'Penerapan sanksi yang efektif, proporsional, dan memberikan efek jera terhadap badan hukum sekaligus direksi dan manajemen senior sesuai Rekomendasi 35.',
      consequencesAndLesson:
        'Budaya kepatuhan di sebuah lembaga keuangan baru benar-benar berubah ketika Direksi dan Manajemen Senior menyadari bahwa kelalaian APU-PPT mengancam karir, harta, dan kebebasan pribadi mereka.',
      assessorLens:
        'Pada IO.3, asesor memeriksa apakah sanksi yang dijatuhkan oleh pengawas di suatu negara benar-benar sepadan dengan beratnya pelanggaran dan skala ekonomi lembaga yang melanggar, atau hanya berupa teguran ringan.'
    }
  },
  36: {
    recId: 36,
    plainEnglishWhy:
      'Kejahatan pencucian uang dan terorisme adalah kejahatan lintas batas negara. Agar hukum pidana di 200 negara dapat saling terhubung dan bekerja sama, seluruh negara harus meratifikasi dan melaksanakan "fondasi perjanjian hukum dunia" yang sama. Rekomendasi 36 mewajibkan implementasi penuh atas empat Konvensi Internasional utama PBB.',
    mondayMorningReality:
      'Setiap negara wajib meratifikasi dan mengimplementasikan ke dalam hukum nasionalnya: (1) Konvensi Wina 1988 (Narkotika), (2) Konvensi Palermo 2000 (Kejahatan Terorganisir Transnasional / UNTOC), (3) Konvensi Merida 2003 (Antikorupsi / UNCAC), dan (4) Konvensi Pendanaan Terorisme 1999.',
    criminalPlaybookAndRedFlags: [
      'Bersembunyi atau menempatkan aset di yurisdiksi yang belum mengadopsi ketentuan kerja sama internasional dan kriminalisasi dalam Konvensi Palermo dan Konvensi Merida (UNCAC).'
    ],
    caseStudy: {
      title: 'Penggunaan Konvensi PBB (UNCAC & Palermo) sebagai Dasar Hukum Pemulihan Aset Lintas Benua',
      jurisdictionAndYear: 'Global / PBB · 2003–2026',
      whatHappened:
        'Dalam banyak kasus korupsi besar di mana dua negara belum memiliki perjanjian ekstradisi atau perjanjian Bantuan Timbal Balik (MLA) bilateral khusus, kejaksaan agung kedua negara berhasil menggunakan Konvensi PBB Antikorupsi (UNCAC / Konvensi Merida) dan Konvensi Palermo secara langsung sebagai dasar hukum traktat untuk menyita dan memulangkan ratusan juta dolar dana korupsi.',
      theBreach:
        'Kewajiban meratifikasi dan mengimplementasikan secara penuh Konvensi Wina, Palermo, Merida, dan Konvensi Pendanaan Terorisme (R.36).',
      consequencesAndLesson:
        'Empat konvensi PBB dalam R.36 berfungsi sebagai jembatan hukum universal yang memungkinkan kerja sama pidana dan pengembalian aset korupsi bahkan di antara negara yang tidak memiliki perjanjian bilateral.',
      assessorLens:
        'Asesor memeriksa apakah ketentuan-ketentuan dalam keempat konvensi tersebut telah benar-benar dituangkan ke dalam pasal-pasal Undang-Undang nasional dan diterapkan di pengadilan.'
    }
  },
  37: {
    recId: 37,
    plainEnglishWhy:
      'Ketika seorang koruptor melakukan kejahatan di Negara A lalu menyimpan uang dan dokumen perusahaan cangkangnya di Negara B, jaksa Negara A tidak bisa terbang begitu saja ke Negara B untuk menggeledah bank di sana. Mereka membutuhkan Bantuan Timbal Balik dalam Masalah Pidana (Mutual Legal Assistance / MLA) agar bukti dari Negara B sah di pengadilan Negara A. Rekomendasi 37 mewajibkan negara memberikan MLA seluas-luasnya secara cepat dan melarang alasan-alasan penolakan yang mengada-ada.',
    mondayMorningReality:
      'Negara wajib memiliki Otoritas Pusat (Central Authority) yang efisien untuk memproses permintaan MLA (pengambilan bukti, pemeriksaan saksi, penggeledahan, penyerahan dokumen bank). Negara DILARANG menolak MLA hanya karena: (1) tindak pidana tersebut juga menyangkut masalah pajak/fiskal, atau (2) aturan kerahasiaan bank/DNFBP. Jika ada syarat kriminalitas ganda (dual criminality), syarat tersebut dianggap terpenuhi apabila kedua negara sama-sama memidana perbuatan pokoknya, meskipun istilah pasalnya berbeda.',
    criminalPlaybookAndRedFlags: [
      'Mengajukan gugatan berlapis di negara tempat aset berada dengan berdalih bahwa dakwaan di negara asal berkaitan dengan sengketa pajak atau bahwa rumusan pasal pidananya tidak identik 100%.'
    ],
    caseStudy: {
      title: 'Kerja Sama MLA Multinasional dalam Skandal Suap Lintas Negara "Operation Car Wash / Lava Jato"',
      jurisdictionAndYear: 'Brasil / Swiss / AS / Lebih dari 30 Negara · 2014–2021',
      whatHappened:
        'Untuk membongkar jaringan suap dan pencucian uang raksasa yang melibatkan perusahaan konstruksi, BUMN, dan ratusan politisi di berbagai negara, Otoritas Pusat MLA memproses ratusan permintaan bantuan timbal balik lintas batas untuk mendapatkan catatan rekening perbankan, struktur Beneficial Ownership perusahaan lepas pantai, dan keterangan saksi kunci.',
      theBreach:
        'Penerapan mekanisme Bantuan Timbal Balik (MLA) yang cepat dan konstruktif tanpa dihambat oleh rahasia bank maupun perbedaan teknis istilah hukum (R.37).',
      consequencesAndLesson:
        'Kecepatan dan kelancaran eksekusi MLA antar-negara memungkinkan pembuktian di pengadilan dan pemulihan miliaran dolar aset negara. Sebaliknya, birokrasi MLA yang memakan waktu bertahun-tahun akan membuat barang bukti dan aset hilang.',
      assessorLens:
        'Pada IO.2, asesor memeriksa waktu rata-rata yang dibutuhkan suatu negara untuk merespons permintaan MLA dari negara lain serta menanyakan pendapat negara-negara mitra mengenai kualitas kerja sama negara tersebut.'
    }
  },
  38: {
    recId: 38,
    plainEnglishWhy:
      'Pelaku kejahatan modern dapat memindahkan aset curian ke lima negara berbeda sebelum surat dakwaan selesai diketik. Jika negara tempat aset disembunyikan menolak membekukan atau merampas aset tersebut atas permintaan negara korban, maka kejahatan lintas negara akan selalu menguntungkan. Rekomendasi 38 (diperkuat secara signifikan pada November 2023 bersama R.4) mewajibkan tindakan cepat lintas negara untuk mengidentifikasi, membekukan, menyita, merampas, dan memulangkan aset kejahatan—termasuk menerima perintah perampasan tanpa pemidanaan (NCBC) dari negara lain!',
    mondayMorningReality:
      'Negara wajib memiliki kewenangan untuk segera merespons permintaan pembekuan dan perampasan dari negara asing (baik secara langsung dengan mengakui perintah pengadilan asing maupun melalui pengajuan ke pengadilan domestik), membentuk jaringan pemulihan aset (Asset Recovery Networks seperti ARIN-AP / Camden Asset Recovery Inter-Agency Network), mengelola aset sitaan agar nilainya terjaga, serta mengatur perjanjian pembagian atau pengembalian aset (asset sharing/repatriation).',
    criminalPlaybookAndRedFlags: [
      'Menyembunyikan hasil korupsi di yurisdiksi asing lalu melarikan diri ke negara ketiga atau mengulur proses pidana hingga terdakwa meninggal dunia, dengan harapan perintah perampasan tanpa pemidanaan (NCBC) dari negara asal tidak dapat dieksekusi di negara tempat uang disimpan.'
    ],
    caseStudy: {
      title: 'Pemulangan Aset Kleptokrasi Lintas Negara (Kasus Abacha & 1MDB)',
      jurisdictionAndYear: 'Nigeria / Malaysia / Swiss / Inggris / AS / Jersey · 2014–2024',
      whatHappened:
        'Ratusan juta dolar dana publik yang dijarah dan disimpan selama puluhan tahun di rekening bank dan properti luar negeri berhasil dibekukan, dirampas (banyak di antaranya melalui mekanisme Non-Conviction-Based Confiscation), dan direpatriasi kembali ke negara asal melalui kerja sama MLA perampasan aset lintas yurisdiksi.',
      theBreach:
        'Pelaksanaan bantuan timbal balik pembekuan, penyitaan, perampasan (termasuk NCBC), dan pengembalian aset lintas batas berdasarkan Rekomendasi 38.',
      consequencesAndLesson:
        'Revisi R.38 tahun 2023 mewajibkan setiap negara mampu mengakui atau mengeksekusi perintah pembekuan dan perampasan asing—termasuk NCBC—serta memfasilitasi pemulangan aset kepada korban atau negara asal.',
      assessorLens:
        'Pada IO.2 dan IO.8, asesor memeriksa kasus nyata di mana negara berhasil membekukan dan mengembalikan aset hasil kejahatan asing yang disembunyikan di wilayahnya, serta seberapa aktif negara mengejar aset hasil kejahatan domestik yang lari ke luar negeri.'
    }
  },
  39: {
    recId: 39,
    plainEnglishWhy:
      'Tidak boleh ada tempat persembunyian yang aman (safe haven) di muka bumi bagi pelaku pencucian uang dan pendanaan terorisme. Rekomendasi 39 memastikan setiap negara menjadikan TPPU dan TPPT sebagai tindak pidana yang dapat diekstradisi—dan jika suatu negara tidak dapat mengekstradisi pelaku karena pelaku adalah warga negaranya sendiri, negara tersebut WAJIB mengadili pelaku tersebut di pengadilan dalam negerinya ("Aut dedere aut judicare": ekstradisi atau adili!).',
    mondayMorningReality:
      'Negara wajib memiliki prosedur ekstradisi yang jelas dan tanpa penundaan yang tidak semestinya, menyediakan mekanisme ekstradisi yang disederhanakan (misalnya penyerahan langsung berdasarkan surat perintah penangkapan atau ketika tersangka menyetujui ekstradisi), serta melimpahkan perkara ke jaksa domestik tanpa penundaan apabila ekstradisi ditolak semata-mata atas alasan kewarganegaraan.',
    criminalPlaybookAndRedFlags: [
      'Melakukan kejahatan pencucian uang besar di luar negeri lalu melarikan diri kembali ke negara kewarganegaraannya (atau membeli kewarganegaraan kedua) yang konstitusinya melarang ekstradisi warga negara sendiri.'
    ],
    caseStudy: {
      title: 'Ekstradisi Lintas Benua & Penerapan Asas "Aut Dedere Aut Judicare" terhadap Buronan Kejahatan Keuangan',
      jurisdictionAndYear: 'Global / Eropa / Amerika Serikat / Asia · 2018–2024',
      whatHappened:
        'Dalam berbagai perkara penipuan kripto lintas batas, pencucian uang kartel, dan skandal korupsi perbankan internasional, para tersangka utama melarikan diri melintasi berbagai negara. Sebagian berhasil diekstradisi ke negara tempat kejahatan dilakukan, sementara tersangka yang tidak dapat diekstradisi karena larangan konstitusional atas ekstradisi warga negara sendiri tetap diadili dan dijatuhi hukuman penjara di pengadilan negara asalnya berdasarkan bukti yang dikirimkan melalui MLA.',
      theBreach:
        'Kewajiban mengekstradisi pelaku TPPU/TPPT atau menyerahkan perkaranya untuk diadili di dalam negeri tanpa penundaan apabila ekstradisi ditolak karena alasan kewarganegaraan (R.39).',
      consequencesAndLesson:
        'Kewarganegaraan tidak pernah boleh menjadi tiket bebas dari hukuman pidana pencucian uang atau pendanaan terorisme.',
      assessorLens:
        'Asesor memeriksa berapa permintaan ekstradisi terkait TPPU/TPPT yang diterima dan dieksekusi, berapa lama prosesnya, dan apakah ada buronan yang dibiarkan bebas setelah permintaan ekstradisinya ditolak.'
    }
  },
  40: {
    recId: 40,
    plainEnglishWhy:
      'Proses Bantuan Timbal Balik formal (MLA — R.37) melalui jalur diplomatik dan pengadilan sangat penting untuk alat bukti di persidangan, tetapi sering membutuhkan waktu berminggu-minggu. Padahal di tahap intelijen dan pengawasan awal, FIU, pengawas perbankan, dan kepolisian perlu bertukar informasi dengan rekan sejawat mereka di luar negeri hari ini juga! Rekomendasi 40 mewajibkan kerja sama internasional non-MLA yang cepat, konstruktif, dan efektif—baik atas permintaan maupun secara spontan (proaktif tanpa diminta).',
    mondayMorningReality:
      'Pertukaran intelijen dilakukan melalui jaringan aman seperti Egmont Secure Web (antar-FIU), Interpol/Europol/ARIN (antar-penegak hukum), dan College of Supervisors / MOU pengawasan (antar-pengawas keuangan), termasuk kerja sama diagonal. Otoritas dilarang menolak pertukaran informasi karena alasan pajak, rahasia bank, sedang berjalannya penyelidikan domestik (kecuali menghambat), atau perbedaan status kelembagaan mitra asing.',
    criminalPlaybookAndRedFlags: [
      'Memindahkan dana hasil kejahatan melintasi 4 negara dalam waktu 24 jam dengan mengandalkan lambatnya birokrasi perjanjian antar-negara—namun dapat dihentikan melalui pertukaran intelijen cepat antar-FIU melalui jaringan Egmont.'
    ],
    caseStudy: {
      title: 'Pembekuan Cepat Dana Kejahatan Siber & BEC melalui Pertukaran Intelijen Spontan Antar-FIU (Egmont Group)',
      jurisdictionAndYear: 'Global / Jaringan Egmont Group · 2019–2025',
      whatHappened:
        'Dalam ratusan kasus Business Email Compromise (BEC) dan peretasan korporasi lintas negara, dana jutaan dolar ditransfer secara mendadak ke rekening penampung di negara lain. Sebelum proses MLA formal sempat dibuat, FIU negara korban mengirimkan intelijen darurat melalui Egmont Secure Web kepada FIU negara tujuan, yang langsung menerbitkan perintah penghentian sementara transaksi dan berkoordinasi dengan kepolisian lokal dalam hitungan jam.',
      theBreach:
        'Penerapan pertukaran informasi cepat, konstruktif, dan spontan antar-otoritas berwenang lintas batas negara sesuai Rekomendasi 40.',
      consequencesAndLesson:
        'Rekomendasi 40 adalah garda terdepan kerja sama operasional harian: informasi yang dibagikan secara spontan oleh satu FIU atau pengawas kepada mitra asingnya sering kali menjadi pemicu terungkapnya skandal kejahatan transnasional besar.',
      assessorLens:
        'Pada IO.2, asesor memeriksa frekuensi dan kecepatan pertukaran informasi FIU-ke-FIU, pengawas-ke-pengawas, dan polisi-ke-polisi, termasuk seberapa sering negara membagikan intelijen secara spontan (proaktif) kepada negara lain.'
    }
  }
};
