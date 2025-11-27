import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Salib" description="Logika Salib adalah sebuah perjalanan intelektual dan spiritual yang berani menembus jantung misteri iman Kristen: mengapa Sang Putra Allah harus disalibkan di " />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/logika_salib.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Logika Salib
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Logika Salib adalah sebuah perjalanan intelektual dan spiritual yang berani menembus jantung misteri iman Kristen: mengapa Sang Putra Allah harus disalibkan di depan publik dunia? Buku ini menyingkapkan paradoks salib,skandal sekaligus kemuliaan, kelemahan sekaligus kekuatan, kebodohan di mata manusia namun hikmat Allah yang menyelamatkan. Dengan nada kritis, rasional, dan tetap penuh kehangatan iman, penulis mengajak pembaca merenungi salib bukan hanya sebagai simbol religius, tetapi sebagai pusat logika ilahi yang membongkar kesombongan dunia dan membangkitkan pengharapan yang baru.

Di tengah krisis iman, kegelisahan eksistensial, dan budaya modern yang kerap menolak penderitaan, Logika Salib hadir sebagai suara yang mengingatkan bahwa jalan penderitaan Kristus adalah pesan publik Allah yang relevan bagi segala bangsa. Buku ini bukan sekadar wacana akademis, melainkan undangan untuk menatap salib sebagai bahasa universal kasih, pengampunan, dan transformasi. Membaca buku ini ibarat berdiri di kaki Golgota: hati diguncang oleh skandal, pikiran ditantang oleh misteri, dan jiwa dipulihkan oleh kasih yang tak terukur.
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