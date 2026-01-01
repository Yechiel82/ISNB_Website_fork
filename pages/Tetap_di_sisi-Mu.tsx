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
                src="/Tetap_di_sisi-Mu.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Tetap di sisi-Mu: 60 Catatan Hati Perjuangan dan Pemulihan Diri Seorang Pendamping Terminal Illness
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Buku "Tetap di sisi-Mu: 60 Catatan Hati Perjuangan dan Pemulihan Diri Seorang Pendamping Terminal Illness" karya Pdt. Dr. Arianto adalah sebuah elegi kejujuran sekaligus kidung harapan yang lahir dari kedalaman hati seorang pendamping di tengah badai penyakit terminal yang merenggut peta kehidupan. 
Melalui enam puluh catatan harian yang intim dan menyentuh sanubari, pembaca diajak menapaki lorong-lorong kelam penuh ketakutan, kelelahan, dan ketidakpastian, di mana setiap langkahnya menjadi pencarian akan Sang Gunung Batu yang tak tergoyahkan saat dunia seolah runtuh. 
Sejalan dengan janji dalam Yesaya 61:1, bahwa Tuhan mengutus kita untuk menyembuhkan mereka yang remuk hati, buku ini bukan sekadar narasi tentang penderitaan, melainkan kesaksian agung tentang bagaimana tangan Tuhan menjamah setiap luka, memulihkan jiwa yang letih, dan mengubah air mata kesetiaan menjadi mata air pengharapan yang mengalir bagi sesama.
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