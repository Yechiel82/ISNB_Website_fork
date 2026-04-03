import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kuasa Keintiman Fisik dalam Hubungan Suami Istri" description="Logika Kuasa Keintiman Fisik dalam Hubungan Suami Istri" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika Kuasa Keintiman Fisik dalam Hubungan Suami Istri.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kuasa Keintiman Fisik dalam Hubungan Suami Istri
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Buku Logika Kuasa Keintiman Fisik dalam Hubungan Suami Istri: Teologi Tubuh, Kasih, dan Perjanjian menghadirkan sebuah refleksi teologis yang mendalam mengenai makna keintiman dalam pernikahan Kristen. Keintiman fisik tidak lagi dipahami sekadar sebagai kebutuhan biologis atau ekspresi emosional, melainkan sebagai bahasa tubuh yang mengungkapkan kasih, penerimaan, dan penyerahan diri dalam perjanjian ilahi. Dalam terang Injil, tubuh manusia dipulihkan dari sekadar fungsi biologis menjadi sarana komunikasi kasih yang hidup, di mana dua pribadi dipersatukan bukan hanya secara fisik, tetapi juga secara spiritual dan eksistensial. 
Lebih jauh, buku ini menelusuri perjalanan keintiman dari rancangan awal Allah, distorsi akibat dosa, hingga pemulihan melalui kasih Kristus. Dengan pendekatan yang reflektif, teologis, dan praktis, pembaca diajak memahami bahwa keintiman adalah ruang di mana kasih diuji, dimurnikan, dan diwujudkan melalui kerendahan hati, kesetiaan, dan pengorbanan. Keintiman menjadi tempat di mana teologi tidak hanya dipahami, tetapi dialami dalam kehidupan sehari-hari seperti dalam sentuhan, kehadiran, dan komitmen yang terus diperbarui. Pada akhirnya, buku ini menegaskan bahwa tubuh bukan sekadar bagian dari kehidupan manusia, tetapi bagian dari karya Allah yang menyatakan kasih-Nya secara nyata dalam pernikahan.              </p>
            </div>

            <p className="text-xl font-semibold text-gray-800">
              Price Soon
            </p>

            <button
              onClick={() => window.location.href = '/'}
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
