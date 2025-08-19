import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="./gereja_penjaga_asa.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Gereja Penjaga Asa :  Membangun fondasi Indonesia Emas 2045 dari ancaman bahaya penyalahgunaan Narkoba.            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Di tengah badai senyap yang mengoyak sendi-sendi bangsa, bahaya Narkoba telah menjelma menjadi ancaman multidimensional yang merenggut tunas harapan dan mengancam cita-cita luhur Indonesia Emas 2045. Buku ini hadir bukan hanya sebagai cermin realitas pahit tersebut, melainkan sebagai manifesto tegas yang menyuarakan sebuah kebenaran fundamental: bahwa di balik setiap kehancuran, terbitlah fajar pemulihan melalui "Peran Krusial" Gereja Tuhan. Dengan mengurai anatomi ancaman secara lugas dan menawarkan "Bimbingan Konseling Kristen" sebagai solusi holistik yang menyentuh tubuh, jiwa, dan roh, buku ini adalah "Seruan Aksi" yang menggerakkan. 
Ini adalah panduan strategis yang menuntun Pemimpin Gereja untuk mengemban "Peran Preventif" dan "Rehabilitatif", membangun benteng pertahanan moral, dan merangkul kaum muda. Mari kita singkap tabir kegelapan, kuatkan tekad, dan melangkah bersama dalam "Kolaborasi Strategis" yang sinergis, karena Optimisme untuk Indonesia yang bebas narkoba, berkarakter kuat, dan berdaya saing global Harus Diwujudkan.
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