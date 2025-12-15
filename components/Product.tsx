import React from 'react';

const Product = () => {
  const products = [
    {
      id: 'panggilangkuSeorangGuru',
      image: './Panggilanku_seorang_guru.jpeg',
      badge: 'Preorder Now!',
      title: 'Buku ini ditulis oleh 16 guru, menguraikan soal panggilan menjadi guru dari berbagai sudut pandang.',
      price: "60.000",
    },
    {
      id: 'saatAkuMelepasDiaPergi',
      image: './Melepas Dia Pergi.png',
      badge: 'Latest Product',
      title: 'Saat Aku Melepas Dia Pergi Siap atau tidak siap, perpisahan pasti akan terjadi.',
      price: "80.000",
    },
    {
      id: 'meiAi',
      image: './mei-ai.png',
      badge: 'Kids Friendly',
      title: 'buku kisah nyata diangkat dari seorang anak usia 5 tahun dimana mamanya tengah berjuang dalam kanker ganas.',
      price: "50.000",
    },
    {
      id: 'Ketabahan-di-Tengah-Badai-Kekuatan-Rohani-Di-Tengah-Ujian-Kehidupan',
      image: './buku_rina.jpeg',
      badge: 'Recommended Book',
      title: 'Ketabahan di Tengah Badai adalah sebuah biografi yang mengisahkan perjalanan hidup dan pelayanan Rina Nahuway seorang wanita yang menghadapi badai kehidupan dengan kekuatan doa dan iman yang kokoh',
      price: " Soon",
    },
    {
      id: 'Setiap-Kita-Punya-Cerita',
      image: './Setiap_Kita_Punya_Cerita.jpeg',
      badge: 'Best Seller',
      title: 'Setiap kita punya cerita. Perjalanan cerita harus dibagikan. Berbagai kisah ditulis disana dengan satu kerinduan bahwa hidup jadi berkat. Tiap penulis mengukir kisah dari perjalanan berbeda. Sakit, doa yang dijawab Tuhan dengan cara unik,  kisah mukjizat, impian yang indah, dll. ',
      price: "80.000",
    },
    {
      id: 'dewasa-di-tengah-luka-luka-yang-membentuk-kasih-yang-menyembuhkan',
      image: './KisahKehidupanDanPelayanan.jpeg',
      badge: 'Best Seller',
      title: 'Kenangan adalah mozaik kehidupan yang tersusun dari serpihan masa lalu mengajarkan kita untuk untuk melihat setiap momen, baik manis maupun pahit sebagai bagian dari rencana indah Tuhan. Luka-luka yang kita alami bukan untuk membuat kita tenggelam dalam kepahitan, melainkan untuk menempa kita menjadi pribadi yang dewasa, matang, dan anggun. Menjalani hidup ini dengan penuh iman, kesabaran, dan pengharapan memberi kekuatan untuk terus melangkah, meski tantangan dan cobaan menghadang.\nBuku ini berbagi nilai-nilai kehidupan yang telah menempa perjalanan seorang hamba Tuhan: bahwa keteguhan dalam iman kepada Tuhan, kesabaran dalam perjuangan, kasih dan pengampunan di tengah luka, serta kemandirian dan ketangguhan untuk bertahan, berbuah manis. Melalui kisah-kisah nyata yang tertuang didalamnya, kita akan menemukan inspirasi dan kekuatan untuk menghadapi masa-masa sulit, serta belajar memandang setiap kenangan sebagai warisan tak ternilai yang membentuk pribadi lebih baik.\nBuku ini mengingatkan bahwa hidup adalah perjuangan yang harus dijalani dalam pengharapan dan keyakinan bahwa bahwa hari esok selalu membawa kebaikan baru. Mari berjalan bersama menapaki jejak kehidupan, meresapi hikmah di balik setiap cerita, dan menemukan keindahan dalam perjalanan hidup yang penuh dengan warna, di bawah naungan kasih dan pertolongan Tuhan.',
      price: " Soon"
    },
    {
      id: 'melepas-untuk-terbang',
      image: './empty-nest.jpg',
      badge: 'Best Seller',
      title: 'Empty Nest bukanlah akhir dari sebuah perjalanan, melainkan awal dari penemuan diri yang baru. Dalam keheningan, ada kesempatan untuk bertumbuh, mencintai, dan merangkul harapan. Temukan kebijaksanaan, inspirasi, dan dorongan untuk menjadikan fase ini sebagai momen transformasi yang indah. Mari bersama-sama merayakan setiap langkah menuju masa depan yang penuh kemungkinan.',
      price: "Rp70.000"
    },
    
    {
      id: 'kesehatan-mental',
      image: './kesehatan_mental.jpg',
      badge: 'New Released',
      title: 'Kesehatan Mental Pendamping Pasien Kanker',
      price: " Rp70.000"
    },
    {
      id: 'langkah-kecil-kasih-besar',
      image: 'Langkah_Kecil.jpg',
      badge: 'New Released',
      title: 'Kumpulan 52 renungan yang berisi nilai-nilai kehidupan tentang pernikahan, parenting dan dinamika rumah tangga ini bukan sekedar tulisan, melainkan wujud panggilan untuk membangun warisan sejarah iman bagi generasi.',
      price: " Soon"
    },
    {
      id: 'piala-wanitaku',
      image: 'buku-Piala-WanitaKU.png',
      badge: 'New Released',
      title: 'Piala WanitaKu adalah sebuah perjalanan rohani yang menggugah, menyentuh relung hati terdalam setiap wanita yang merindukan hidup dalam kehendak Allah. Melalui simbol "piala" yang diurai secara mendalam dan puitis, buku ini membukakan makna kehidupan perempuan yang dibentuk, ditempa, dan dimurnikan untuk menjadi kehormatan bagi Tuhan.',
      price: "Rp100.000"
    },
    {
      id: '7-Pilar-Kekuatan-Gereja',
      image: '7-Pilar-Kekuatan-Gereja.png',
      badge: 'New Released',
      title: 'Dalam denyut nadi zaman yang tak pernah berhenti, tersembunyi kerinduan mendalam akan gereja yang berdiri tegak bagai mercusuar di tengah badai kehidupan. Buku "7 Pilar Kekuatan Gereja" hadir sebagai peta bintang, menuntun kita menelusuri fondasi abadi yang memancarkan daya ilahi.',
      price: "Rp100.000"
    },
    {
      id: 'Sepatu-Kaca-yang-telah-Usang',
      image: 'SepatuKaca_page.jpg',
      badge: 'New Released',
      title: ' Buku "Sepatu Kaca" bukanlah sekadar untaian kata yang berkilauan layaknya kisah-kisah istana yang megah. Ia justru terlahir dari sunyi dan pilu, di mana sepatu kaca impian telah retak oleh jejak panjang penderitaan dan pergumulan batin.',
      price: "Rp99.000"
    },
    {
      id: 'menjangkau-jiwa-di-dunia-maya',
      image: 'menjangkau-jiwa-di-dunia-maya.png',
      badge: 'New Released',
      title: 'Menjangkau Jiwa di Dunia Maya: Penginjilan dan Pemuridan dalam Era DigitalDi tengah dunia yang semakin terkoneksi namun terasing, ketika kabar berseliweran lebih cepat dari doa, dan notifikasi mengalahkan suara hati',
      price: "Soon"
    },
    {
      id: 'Penggembalaan-di-Era-Digital',
      image: 'penggembalaan-di-era-digital.png',
      badge: 'New Released',
      title: 'Buku ini adalah panggilan bagi gereja untuk hadir secara nyata di tengah arus digital yang kian deras—ketika media sosial menjadi ruang perjumpaan baru dan layar menjadi mimbar kehidupan.',
      price: "Soon"
    },
    {
      id: 'Dari-Jemari-Ke-hati',
      image: 'dari-jemari-ke-hati.png',
      badge: 'New Released',
      title: 'Bagaikan pelita yang berkobar di tengah gemerlap layar dan alunan kode digital, Dari Jemari ke Hati: Mengalirkan Berkat melalui Dunia Digital mengundang jemaat untuk menari dalam ritme iman, menjadikan setiap ketikan doa dan setiap unggahan kesaksian kasih Kristus. Berpijak pada firman Tuhan seperti Amsal 4:23 dan Ibrani 10:24-25, buku ini adalah panggilan suci untuk merangkul dunia maya sebagai ladang misi, membangun komunitas virtual yang hangat, menjaga hati di tengah distraksi, dan memancarkan terang ilahi hingga ke ujung bumi. Dengan penuh harapan, buku ini mengalirkan semangat untuk melayani, mengubah layar menjadi jendela rohani, dan menginspirasi setiap jiwa untuk menjadi berkat dari jemari ke hati, dari dunia ke surga.',
      price: "Soon"
    },
    {
      id: 'Kristen-dan-budaya-tionghoa',
      image: 'Cover Book - Kristen dan Budaya Tionghoa-1-1.png',
      badge: 'New Released',
      title: 'Buku "Kristen dan Budaya Tionghoa: Harmoni Pelayanan dalam Pemuridan Jemaat Etnis Tionghoa" karya Pendeta Dr. Nicodemus Chen, M.Th., hadir sebagai panduan esensial di tengah dinamika Kekristenan global. ',
      price: "Soon"
    },
    {
      id: 'Panggilanku-Seorang-Guru-2',
      image: './COVERFRONTBACK-1.png',
      badge: 'New Released',
      title: 'Panggilanku Seorang Guru 2: Strategi Pengajaran Brilian untuk Transformasi Pembelajaran hadir untuk menginspirasi guru agar berani keluar dari pola lama, mencoba hal baru, dan menemukan kembali sukacita mengajar. ',
      price: "Soon"
    },
    {
      id: 'gereja_penjaga_asa',
      image: './gereja_penjaga_asa.jpeg',
      badge: 'New Released',
      title: 'Di tengah badai senyap yang mengoyak sendi-sendi bangsa, bahaya Narkoba telah menjelma menjadi ancaman multidimensional yang merenggut tunas harapan dan mengancam cita-cita luhur Indonesia Emas 2045. ',
      price: "Soon"
    },
    {
      id: '60-days-self-healing-for-terminal-illness',
      image: './self-healing-1.png',
      badge: 'New Released',
      title: 'Dalam menghadapi kabar buruk dan diagnosis penyakit berat yang mengguncang, buku "60 Days Self-Healing for Terminal Illness" hadir sebagai panduan yang tegas namun penuh kasih. Ditulis oleh Pdt. Dr. Erika Fanny dari pengalaman pribadinya sebagai pejuang penyakit kronis, buku ini mengajak Anda pada sebuah perjalanan batin selama 60 hari. Ini bukanlah janji kesembuhan instan, melainkan sebuah deklarasi bahwa pemulihan sejati dimulai dari dalam, dari kesiapan untuk menghadapi luka, air mata, dan kebingungan tanpa rasa malu. Buku ini secara lugas menegaskan bahwa nilai hidup tidak ditentukan oleh seberapa sempurna atau sehatnya tubuh, tetapi oleh keberanian untuk tetap berjuang dan menemukan arti di tengah badai. Melalui setiap hari refleksi dan doa, Anda akan dipimpin untuk menyusun ulang harapan, berdamai dengan tubuh, dan menemukan kekuatan di tengah kelemahan. Dengan nada yang profesional dan penuh pengharapan, buku ini membimbing Anda untuk menyadari bahwa Anda berharga, bahkan di saat tak berdaya. Pesan utamanya urgen: jangan biarkan diagnosis merampas martabat dan sukacita Anda. Dengan setiap bab yang menyentuh, buku ini menjadi sahabat yang mengingatkan bahwa di balik sakit yang nyata, ada jiwa yang bisa tetap utuh dan kuat, dan bahwa terang bisa muncul dari dalam diri.',
      price: "Soon"
    },
    {
      id: 'Applied-Ethics-In-The-Light-Of-Gods-Word',
      image: './Sampul Applied Ethics-1.png',
      badge: 'New Released',
      title: 'Di tengah dunia yang kehilangan kompas moralnya, buku ini hadir sebagai panggilan untuk keberanian intelektual dan spiritual, mengundang Anda untuk menjadi duta besar Kerajaan yang diperlengkapi. Dengan fondasi kokoh dalam teologi Reformed, "Etika Terapan: Di Bawah Kedaulatan-Nya" akan membongkar isu-isu paling kompleks bukan untuk memberi Anda daftar aturan, melainkan untuk menempa sebuah imajinasi moral yang dibentuk oleh narasi agung Alkitab.',
      price: "Soon"
    },
    {
      id: 'Kita_Hanya_Punya_Saat_Ini',
      image: './Kita_Hanya_Punya_Saat_Ini.png',
      badge: 'New Released',
      title: 'Kita Hanya Punya Saat Ini adalah seruan tegas bagi setiap anak Tuhan yang merindukan hubungan mendalam dengan Tuhan untuk merangkul momen kini sebagai anugerah ilahi yang suci. Berpijak pada kebenaran Alkitab seperti Pengkhotbah 3:1-8 dan Efesus 5:16, buku ini mengajak pembaca untuk melepaskan belenggu masa lalu dan kecemasan masa depan, menegaskan bahwa saat ini adalah waktu yang ditentukan Tuhan untuk iman, kasih, dan pelayanan.',
      price: "Soon"
    },
    {
      id: 'Buku_Ajar_Konseling_Kristen',
      image: './Konseling.png',
      badge: 'New Released',
      title: 'buku ini menyajikan pedoman pembelajaran yang sistematis, mendalam, dan aplikatif untuk memahami serta menerapkan konseling yang berlandaskan iman Kristen.',
      price: "Soon"
    },
    {
      id: 'Buku_Ajar_Pendidikan_Kewarganegaraan',
      image: './PKN.png',
      badge: 'New Released',
      title: 'buku ini berfungsi sebagai panduan yang komprehensif dan tegas untuk menanamkan nilai-nilai kewarganegaraan yang berlandaskan Pancasila, UUD 1945, NKRI, dan semangat Bhinneka Tunggal Ika.',
      price: "Soon"
    },
    {
      id: 'Membawa_Terang_Injil_Bagi_Masyarakat_Di_Pulau_Bali',
      image: './Terang_Injil.jpeg',
      badge: 'New Released',
      title: 'Buku ini menyajikan panduan komprehensif untuk penginjilan di Bali, sebuah pulau dengan dominasi Hindu (92,11%) dan tantangan spiritual yang kompleks, seperti sistem Desa Adat, praktik okultisme, dan resistensi budaya. Melalui analisis konteks geografis, demografis, dan budaya Bali, buku ini menguraikan strategi kontekstual seperti doa, puasa, pujian, dan penggunaan seni lokal untuk mematahkan benteng kegelapan dalam peperangan rohani. Dengan landasan Alkitabiah dari ayat-ayat seperti Matius 28:19-20, 2 Korintus 10:4, dan Kolose 4:5-6, buku ini menawarkan kesaksian nyata, panduan praktis, dan sumber daya teologi untuk memobilisasi gereja, membangun kelompok sel, dan memanfaatkan media sosial serta pariwisata, dengan visi menjadikan Bali mercusuar Injil melalui kerjasama antar-gereja dan doa yang penuh kuasa.',
      price: "Soon"
    },
    {
      id: 'Sejauh_Langkah_Kaki',
      image: './sampul-sejauh-langkah-Kaki.png',
      badge: 'New Released',
      title: ' "Sejauh Langkah Kaki" adalah sebuah kompilasi kisah otentik yang dihimpun dari pengalaman hidup para penjelajah kehidupan yang telah "banyak makan asam garam." ',
      price: "Soon"
    },
    {
      id: 'Logika_Salib',
      image: './logika_salib.jpeg',
      badge: 'New Released',
      title: 'Logika Salib adalah sebuah perjalanan intelektual dan spiritual yang berani menembus jantung misteri iman Kristen: mengapa Sang Putra Allah harus disalibkan di depan publik dunia? Buku ini menyingkapkan paradoks salib, skandal sekaligus kemuliaan, kelemahan sekaligus kekuatan, kebodohan di mata manusia namun hikmat Allah yang menyelamatkan. Dengan nada kritis, rasional, dan tetap penuh kehangatan iman, penulis mengajak pembaca merenungi salib bukan hanya sebagai simbol religius, tetapi sebagai pusat logika ilahi yang membongkar kesombongan dunia dan membangkitkan pengharapan yang baru.',
      price: "Soon"
    },
    {
      id: 'Taman_Edenku',
      image: './Taman_Edenku.jpeg',
      badge: 'New Released',
      title: 'Jauh di dalam diri setiap individu, tersembunyi sebuah "Taman Eden", sebuah lanskap unik berisi potensi ilahi yang menunggu untuk diolah. Buku ini bukan sekadar panduan motivasi, melainkan sebuah peta strategis yang tegas dan praktis untuk perjalanan transformatif Anda. Anda akan dibimbing untuk menemukan benih-benih anugerah yang spesifik bagi Anda, melampaui identifikasi talenta biasa menuju pengenalan panggilan sejati. Selanjutnya, Anda akan diperlengkapi untuk mengusahakan taman tersebut dengan disiplin seorang pengelola yang setia, mengubah kerja keras menjadi ibadah dan tantangan menjadi pupuk pertumbuhan. Puncaknya, buku ini akan menunjukkan cara menuai berkat yang berkelanjutan, buah-buah keberhasilan yang tidak hanya memperkaya hidup Anda, tetapi juga menjadi persembahan kemuliaan bagi Sang Tuan Kebun. "Taman Edenku" adalah undangan radikal untuk berhenti menjadi penonton dan mulai menjadi penjaga kebun yang ahli atas takdir ilahi Anda.',
      price: "Soon"
    },
    {
      id: 'Sukabumi_Kota_Polisi_Polisi_Bersama_Rakyat_Menjaga_Negeri',
      image: './Sukabumi_Kota_Polisi.jpeg',
      badge: 'New Released',
      title: 'SUKABUMI KOTA POLISI: Polisi Bersama Rakyat Menjaga Negeri',
      price: "Soon"
    },
    {
      id: 'Logika_Anugerah',
      image: './Sampul Logika Anugerah-1.png',
      badge: 'New Released',
      title: 'Logika Anugerah adalah sebuah eksplorasi mendalam yang secara kritis membongkar logika marketplace, sebuah sistem transaksional berbasis kinerja, utang, dan ketakutan yang tanpa sadar mendominasi kehidupan kita. Sebagai antitesis yang radikal, buku ini memperkenalkan Logika Anugerah sebagai sistem operasi ilahi yang membebaskan, di mana identitas kita tidak lagi dibangun di atas pencapaian, melainkan di atas penerimaan tak bersyarat di dalam Kristus. ',
      price: "Soon"
    },
    
    {
      id: 'Pulih_Atas_Luka_Emosi',
      image: './Pulih_Atas_Luka_Emosi.jpg',
      badge: 'New Released',
      title: '“Pulih Atas Luka Emosi” adalah sebuah perjalanan sunyi menuju ruang-ruang batin yang sering kita sembunyikan—tempat di mana rasa sakit memahat kita tanpa suara. Buku ini menuntun pembaca menelusuri jejak luka yang pernah diremehkan, disentuh dengan kelembutan Firman dan kejujuran reflektif yang memulihkan. Setiap halamannya mengajak kita berhenti sejenak, bernapas lebih dalam, dan menyadari bahwa di balik remuknya hati masih tersisa cahaya kasih Allah yang sanggup menata ulang hidup kita. ',
      price: "Soon"
    },
    
    {
      id: 'Panggilanku-Seorang-Guru-3-di-Era-Digital',
      image: './Panggilanku-Seorang-Guru-3-di-Era-Digital.jpeg',
      badge: 'New Released',
      title: '“Panggilanku Seorang Guru ke-3 di Era Digital” adalah sebuah simfoni refleksi bagi para pejuang di garda depan peradaban—para guru. Buku ini mengajak pembaca menapaki lorong-lorong pemahaman baru tentang panggilan suci, di mana papan tulis digital bertemu dengan hati nurani yang teguh. Di tengah badai disrupsi teknologi, tulisan-tulisan di dalamnya berfungsi sebagai kompas, memandu guru untuk tidak hanya bertahan, namun justru bersinar sebagai Kurator Pengetahuan dan Arsitek Karakter. Ini adalah sebuah deklarasi tentang peran guru yang melampaui sekat kelas; sebuah janji bahwa melalui pemahaman mendalam, penyelesaian masalah yang humanis, dan kontribusi yang signifikan, seorang guru dapat menabur benih makna abadi dalam jiwa anak didiknya, menjadikan teknologi sebagai sayap, bukan rantai, bagi masa depan pendidikan.',
      price: "Soon"
    },
    
    {
      id: 'Logika_Iman',
      image: './logika_iman.jpeg',
      badge: 'New Released',
      title: 'Logika Iman menghadirkan sebuah kerangka pemikiran yang tegas dan terang mengenai rasionalitas iman Kristen di tengah dunia modern yang dipenuhi skeptisisme, relativisme, dan pencarian makna yang tak kunjung usai.',
      price: "Soon"
    },
    
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <a
            key={product.id}
            href={`/${product.id}`}
            className="group block"
          >
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                    {product.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-4">
                  <p className="line-clamp-2 text-sm text-gray-600">
                    {product.title}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-gray-900">
                    Rp{product.price.toLocaleString()}
                  </span>
                  <button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Product;

// import React from 'react'


// const Product = () => {
//     return (

// <div className="padding-container max-container w-full pb-24">
//     <div className="flex flex-wrap justify-between gap-5 lg:gap-10">

//         {/* Product 1 */}
//         <a href="/panggilangkuSeorangGuru">
//             <div className="product-box" style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <img src="./Panggilanku_seorang_guru.jpeg" alt="Product 1" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }} />
//                 <div className="product-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                     <h2 className="bold-40 lg:bold-50 xl:max-w-[390px] text-center">Preorder<br />Now!</h2>
//                     <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1 text-center">Buku ini ditulis oleh 16 guru, menguraikan<br/>soal panggilan menjadi guru dari berbagai sudut pandang.</p>
//                     <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
//                         <button className="button">Buy Now</button>
//                         {/* <button className="button" onClick={() => window.location.href='https://shopee.co.id/erika_arianto'}>Buy Now</button> */}
//                         <p className="regular-16 text-gray-30 xl:max-w-[520px]">Rp60.000</p>
//                     </div>
//                 </div>
//             </div>
//         </a>

//         {/* Product 2 */}
//         <a href="/saatAkuMelepasDiaPergi">
//             <div className="product-box" style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <img src="./Melepas Dia Pergi.png" alt="Product 3" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }} />
//                 <div className="product-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                     <h2 className="bold-40 lg:bold-50 xl:max-w-[390px] text-center">Latest<br />Product</h2>
//                     <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1 text-center">Saat Aku Melepas Dia Pergi Siap atau tidak siap,<br/> perpisahan pasti akan terjadi.</p>
//                     <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
//                         <button className="button"> Buy Now</button>
//                         <p className="regular-16 text-gray-30 xl:max-w-[520px]">Rp80.000</p>
//                     </div>
//                 </div>
//             </div>
//         </a>

//         {/* Product 3 */}
//         <a href="/meiAi">
//             <div className="product-box" style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <img src="./mei-ai.png" alt="Product 2" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }} />
//                 <div className="product-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                     <h2 className="bold-40 lg:bold-50 xl:max-w-[390px] text-center">Kids<br />Friendly</h2>
//                     <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1 text-center ">buku kisah nyata diangkat dari seorang anak usia 5 tahun<br/>dimana mamanya tengah berjuang dalam kanker ganas.</p>
//                     <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
//                         <button className="button">Buy Now</button>
//                         <p className="regular-16 text-gray-30 xl:max-w-[520px]">Rp50.000</p>
//                     </div>
//                 </div>
//             </div>
//         </a>
//         {/* Product 4 */}
//         <a href="/Ketabahan-di-Tengah-Badai-Kekuatan-Rohani-Di-Tengah-Ujian-Kehidupan">
//             <div className="product-box" style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <img src="./buku_rina.jpeg" alt="Product 4" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }} />
//                 <div className="product-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                     <h2 className="bold-40 lg:bold-50 xl:max-w-[390px] text-center">Recommended<br />Book</h2>
//                     <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1 text-center ">etabahan di Tengah Badai adalah sebuah biografi yang mengisahkan perjalanan hidup dan pelayanan Rina Nahuway<br/>seorang wanita yang menghadapi badai kehidupan dengan kekuatan doa dan iman yang kokoh</p>
//                     <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
//                         <button className="button">Buy Now</button>
//                         <p className="regular-16 text-gray-30 xl:max-w-[520px]">Rp50.000</p>
//                     </div>
//                 </div>
//             </div>
//         </a>
//     </div>
// </div>


//     )}
// export default Product;
