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
                src="/Panggilanku-Seorang-Guru-3-di-Era-Digital.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Panggilanku Seorang Guru 3 di Era Digital
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
"Panggilanku Seorang Guru ke-3 di Era Digital" adalah sebuah simfoni refleksi bagi para pejuang di garda depan peradaban—para guru. Buku ini mengajak pembaca menapaki lorong-lorong pemahaman baru tentang panggilan suci, di mana papan tulis digital bertemu dengan hati nurani yang teguh. Di tengah badai disrupsi teknologi, tulisan-tulisan di dalamnya berfungsi sebagai kompas, memandu guru untuk tidak hanya bertahan, namun justru bersinar sebagai Kurator Pengetahuan dan Arsitek Karakter. Ini adalah sebuah deklarasi tentang peran guru yang melampaui sekat kelas; sebuah janji bahwa melalui pemahaman mendalam, penyelesaian masalah yang humanis, dan kontribusi yang signifikan, seorang guru dapat menabur benih makna abadi dalam jiwa anak didiknya, menjadikan teknologi sebagai sayap, bukan rantai, bagi masa depan pendidikan.
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