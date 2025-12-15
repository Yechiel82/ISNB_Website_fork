import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="7 Pilar Kekuatan Gereja" description="Dalam denyut nadi zaman yang tak pernah berhenti, tersembunyi kerinduan mendalam akan gereja yang berdiri tegak bagai mercusuar di tengah badai kehidupan. Buku " />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="./7-Pilar-Kekuatan-Gereja.png"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            7 Pilar Kekuatan Gereja
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
              Dalam denyut nadi zaman yang tak pernah berhenti, tersembunyi kerinduan mendalam akan gereja yang berdiri tegak bagai mercusuar di tengah badai kehidupan. Buku "7 Pilar Kekuatan Gereja" hadir sebagai peta bintang, menuntun kita menelusuri fondasi abadi yang memancarkan daya ilahi. Terinspirasi dari kisah jemaat mula-mula yang bersemi di Kisah Para Rasul 6:1-7, buku ini merangkai tujuh pilar esensial, bagai tujuh mata air yang menyegarkan dan menghidupkan. Dari pucuk kepemimpinan yang memandang visi surgawi hingga jemaat yang berakar kuat dalam kebenaran, dari pelayanan yang memeluk setiap jiwa hingga pengelolaan berkat yang penuh hikmat, setiap pilar adalah simfoni kekuatan yang berpadu, menggerakkan gereja menuju panggilan mulianya.

              Lebih dari sekadar teori, buku ini adalah seruan jiwa untuk membangun komunitas iman yang bukan hanya megah dalam jumlah, namun juga kaya dalam roh dan relevan dalam sentuhan kasihnya kepada dunia. Dengan bahasa yang membangkitkan bara semangat, "7 Pilar Kekuatan Gereja" mengajak setiap pemimpin, pelayan, dan anggota jemaat untuk menyelami kedalaman prinsip-prinsip ini, menabur benih perubahan, dan menuai gereja yang berdaya guna. Bersiaplah untuk menemukan kembali cetak biru ilahi, merajut kembali kekuatan yang tersembunyi, dan menyaksikan gereja bangkit menjadi pelita yang menerangi kegelapan, membawa harapan dan kemuliaan bagi Sang Raja di atas segala raja.
              </p>

            </div>

            <p className="text-xl font-semibold text-gray-800">
              Price Rp100.000
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