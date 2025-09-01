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
                src="/Konseling.png"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Buku Ajar Konseling Kristen
          </h2>

            <div className="text-gray-600 space-y-4">
              <p>
buku ini menyajikan pedoman pembelajaran yang sistematis, mendalam, dan aplikatif untuk memahami serta menerapkan konseling yang berlandaskan iman Kristen. Buku ini menekankan bahwa konseling Kristen adalah suatu pelayanan yang lahir dari kasih Kristus dan berlandaskan kebenaran Firman Tuhan serta karya Roh Kudus. Penulis buku, Dr. Yusup Heri Harianto, M.Th., menyajikan materi yang tidak hanya bersifat teoretis, tetapi juga mengaitkan pengetahuan akademis dengan praktik pelayanan rohani yang nyata. Materi yang dibahas mencakup prinsip-prinsip, fungsi, teknik, dan etika konseling, serta peran Roh Kudus, Firman Tuhan, dan doa di dalamnya. Selain itu, buku ini secara tegas membedakan konseling Kristen dari konseling sekuler, dengan menegaskan bahwa kebenaran moralitasnya berakar pada Alkitab yang tidak pernah berubah. Secara profesional, buku ini merupakan panduan esensial untuk melengkapi para mahasiswa, dosen, dan pelayan Tuhan agar siap menjadi konselor Kristen yang memiliki ketajaman pengetahuan, kedalaman spiritualitas, dan hati yang penuh kasih Kristus.
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