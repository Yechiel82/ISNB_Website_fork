import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Menjangkau Jiwa di Dunia Maya" description="Menjangkau Jiwa di Dunia Maya: Penginjilan dan Pemuridan dalam Era Digital Di tengah dunia yang semakin terkoneksi namun terasing, ketika kabar berseliweran leb" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="./menjangkau-jiwa-di-dunia-maya.png"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Menjangkau Jiwa di Dunia Maya
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
                Menjangkau Jiwa di Dunia Maya: Penginjilan dan Pemuridan dalam Era Digital
                Di tengah dunia yang semakin terkoneksi namun terasing, ketika kabar berseliweran lebih cepat dari doa, dan notifikasi mengalahkan suara hati, buku ini hadir sebagai pelita yang menuntun gereja dan umat Tuhan untuk tidak sekadar hadir, tetapi berdampak dalam ruang digital. Dengan napas teologi yang dalam dan strategi yang membumi, buku ini mengupas bagaimana Injil tetap berkuasa di balik layar, dan pemuridan tetap mungkin walau tanpa sentuhan tangan. Ia menantang kita untuk mewartakan Kristus di tengah hiruk-pikuk dunia maya—bukan dengan kebisingan algoritma, tetapi dengan kelembutan kasih yang menembus batas layar. Inilah undangan untuk menjadi saksi yang setia di zaman yang berubah, menjangkau jiwa yang haus kebenaran dengan pesan yang kekal dan hidup.
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