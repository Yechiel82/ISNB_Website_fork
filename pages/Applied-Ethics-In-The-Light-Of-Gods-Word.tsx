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
                src="./Sampul Applied Ethics-1.png"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Applied Ethics In The Light Of God's Word
          </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Di tengah dunia yang kehilangan kompas moralnya, buku ini hadir sebagai panggilan untuk keberanian intelektual dan spiritual, mengundang Anda untuk menjadi duta besar Kerajaan yang diperlengkapi. Dengan fondasi kokoh dalam teologi Reformed, "Etika Terapan: Di Bawah Kedaulatan-Nya" akan membongkar isu-isu paling kompleks bukan untuk memberi Anda daftar aturan, melainkan untuk menempa sebuah imajinasi moral yang dibentuk oleh narasi agung Alkitab.

Secara tegas menolak pemisahan antara iman yang privat dan kehidupan publik, buku ini menegaskan bahwa Kristus adalah Tuhan atas setiap jengkal kehidupan, dan setiap pilihan adalah tindakan penyembahan. Melalui kerangka kerja yang praktis dan analisis teologis yang mendalam, Anda akan diperlengkapi untuk menavigasi dilema-dilema modern dengan hikmat dan kesetiaan pada Injil. Ini adalah panggilan untuk menjadi garam yang mengawetkan dan terang yang menuntun, serta menjadi agen perubahan yang hidupnya memancarkan keindahan dari pemerintahan Raja kita yang berdaulat.
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