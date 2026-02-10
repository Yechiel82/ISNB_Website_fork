import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="60 days self-healing for terminal illness" description="Dalam menghadapi kabar buruk dan diagnosis penyakit berat yang mengguncang, buku &quot;60 Days Self-Healing for Terminal Illness&quot; hadir sebagai panduan yang tegas na" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="./Menemukan_Kembali_Jejak_Pemuridan_Didunia_yang_Riuh.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Menemukan Kembali Jejak Pemuridan Didunia yang Riuh
          </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Di tengah riuhnya dunia yang mendewakan performa, buku ini hadir sebagai kompas spiritual untuk menemukan kembali esensi sejati pengikut Kristus melalui metodologi "Saya Pengikut Kristus" (SPK).
Dr. (HC) Kartono menegaskan bahwa pemuridan bukanlah sekadar identitas sosial, melainkan transformasi radikal yang menjembatani kedalaman teologi dengan realitas hidup sehari-hari.
Melalui peta jalan praktis dekonstruksi dan rekonstruksi karakter, buku ini menuntun setiap jiwa untuk tidak lagi menghidupi iman sebagai teori yang membeku, melainkan sebagai napas kehidupan yang meluap menjadi kesaksian hidup demi kemuliaan Allah yang kekal.
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