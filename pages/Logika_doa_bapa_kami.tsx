import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Cara Memahami Kerangka Berpikir Jurnal Penelitian kuantitatif Bagi Pemula" description="Buku Logika Cara Memahami Kerangka Berpikir Sebelum Membuat Jurnal Penelitian Kualitatif Bagi Pemula menghadirkan sebuah pendekatan yang unik dengan mengintegrasikan teologi, logika, dan pengalaman kehidupan dalam memahami proses penelitian kualitatif." />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika_doa_bapa_kami.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Logika Doa Bapa Kami
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Banyak orang terjebak dalam rutinitas doa sebagai sekadar rangkaian kata tanpa memahami kedalaman makna di baliknya. Buku ini hadir untuk membongkar sekat tersebut dengan mengeksplorasi "Logika Doa Bapa Kami" bukan hanya sebagai liturgi, melainkan sebagai cetak biru rasionalitas ilahi yang menata ulang prioritas hidup manusia. Penulis mengajak pembaca menyelami setiap bait doa yang diajarkan Kristus, mulai dari membangun fondasi relasi yang intim dengan Sang Bapa, hingga memahami bagaimana kehendak surga dapat bermanifestasi secara logis dalam realitas sehari-hari. Ini adalah perjalanan intelektual dan spiritual untuk menemukan bahwa doa yang benar adalah sebuah keselarasan antara pikiran manusia dan rancangan kekekalan.
Lebih dari sekadar penjelasan teologis, karya ini menawarkan transformasi cara hidup melalui perspektif Kerajaan Allah. Dengan gaya bahasa yang menginspirasi, buku ini mengupas paradoks doa: bagaimana penyerahan diri sepenuhnya kepada kehendak ilahi justru menjadi jalan menuju kebebasan sejati, dan bagaimana permohonan yang sederhana mampu membangkitkan keberanian untuk hidup benar di tengah dunia yang kompleks. Pembaca ditantang untuk tidak lagi melihat doa sebagai aktivitas pasif, melainkan sebagai irama kehidupan yang aktif, sebuah logika anugerah yang memulihkan hubungan dengan sesama dan mengarahkan setiap langkah kaki menuju tujuan yang lebih besar dari diri sendiri.

              </p>

            </div>

            <p className="text-xl font-semibold text-gray-800">
              Price Soon
            </p>

            <button
              onClick={() => window.location.href='/'}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}