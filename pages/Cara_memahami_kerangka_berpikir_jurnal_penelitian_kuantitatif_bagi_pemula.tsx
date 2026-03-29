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
                src="/Cara_memahami_kerangka_berpikir_jurnal_penelitian_kuantitatif_bagi_pemula.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Cara Memahami Kerangka Berpikir Jurnal Penelitian Kuantitatif Bagi Pemula
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Buku Logika Cara Memahami Kerangka Berpikir Sebelum Membuat Jurnal Penelitian Kuantitatif Bagi Pemula menghadirkan sebuah pendekatan yang unik dan mendalam dalam memahami dunia penelitian, dengan menempatkan logika, iman, dan metode ilmiah sebagai satu kesatuan yang saling melengkapi. Penulis mengajak pembaca untuk tidak sekadar mempelajari teknik penelitian kuantitatif, tetapi terlebih dahulu membangun fondasi berpikir yang benar tentang hakikat pengetahuan, kebenaran, dan peran manusia sebagai pencari makna. Melalui pembahasan yang sistematis, pembaca dituntun dari pemahaman filosofis dan teologis menuju praktik ilmiah yang konkret, mulai dari menemukan masalah penelitian, menyusun kerangka teori, merumuskan hipotesis, hingga memahami analisis data dan penulisan jurnal ilmiah. 
Lebih dari sekadar buku metodologi, karya ini menyoroti dimensi etis dan spiritual dalam penelitian ilmiah. Penelitian dipandang bukan hanya sebagai aktivitas akademik, tetapi sebagai perjalanan intelektual yang membentuk karakter, menuntut kejujuran, dan mengarahkan manusia pada kerendahan hati di hadapan kebenaran. Dengan gaya bahasa reflektif dan aplikatif, buku ini menolong para pemula untuk melihat bahwa di balik angka, data, dan statistik, terdapat realitas yang lebih luas yang membutuhkan hikmat dalam menafsirkannya. Dengan demikian, penelitian tidak hanya menghasilkan pengetahuan, tetapi juga membentuk cara berpikir yang dewasa dan bertanggung jawab.
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