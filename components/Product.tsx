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
      price: " Soon"
    },
    
    {
      id: 'kesehatan-mental',
      image: './kesehatan_mental.jpg',
      badge: 'New Released',
      title: 'Kesehatan Mental Pendamping Pasien Kanker',
      price: " Soon"
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
      price: " Soon"
    },
    {
      id: '7-Pilar-Kekuatan-Gereja',
      image: '7-Pilar-Kekuatan-Gereja.png',
      badge: 'New Released',
      title: 'Dalam denyut nadi zaman yang tak pernah berhenti, tersembunyi kerinduan mendalam akan gereja yang berdiri tegak bagai mercusuar di tengah badai kehidupan. Buku "7 Pilar Kekuatan Gereja" hadir sebagai peta bintang, menuntun kita menelusuri fondasi abadi yang memancarkan daya ilahi.',
      price: "Soon"
    },
    {
      id: 'Sepatu-Kaca-yang-telah-Usang',
      image: 'SepatuKaca_page.jpg',
      badge: 'New Released',
      title: ' Buku "Sepatu Kaca" bukanlah sekadar untaian kata yang berkilauan layaknya kisah-kisah istana yang megah. Ia justru terlahir dari sunyi dan pilu, di mana sepatu kaca impian telah retak oleh jejak panjang penderitaan dan pergumulan batin.',
      price: "Soon"
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
