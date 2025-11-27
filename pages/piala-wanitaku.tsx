import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Piala Wanitaku" description="Buku Piala WanitaKu adalah sebuah perjalanan rohani yang menggugah, menyentuh relung hati terdalam setiap wanita yang merindukan hidup dalam kehendak Allah. Mel" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="./buku-Piala-WanitaKU.png"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Piala Wanitaku
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
              Buku Piala WanitaKu adalah sebuah perjalanan rohani yang menggugah, menyentuh relung hati terdalam setiap wanita yang merindukan hidup dalam kehendak Allah. Melalui simbol "piala" yang diurai secara mendalam dan puitis, buku ini membukakan makna kehidupan perempuan yang dibentuk, ditempa, dan dimurnikan untuk menjadi kehormatan bagi Tuhan. Dengan bahasa yang lembut namun tegas, penulis membawa kita menyelami proses pembentukan ilahi yang penuh luka, air mata, dan kesendirian—namun semuanya mengarah pada satu tujuan: menjadi piala kemuliaan di tangan Sang Pencipta.
              Setiap halaman menggugah kita untuk merenungkan identitas sejati, kekuatan tersembunyi, dan panggilan surgawi seorang wanita. Buku ini bukan sekadar renungan, melainkan undangan untuk mengalami transformasi: dari bejana yang retak menjadi piala yang mulia. Dengan kombinasi teologi Reformed Injili, ilustrasi nyata, dan refleksi yang menyentuh, Piala WanitaKu layak menjadi sahabat rohani setiap wanita di sepanjang musim hidupnya—baik dalam lembah penderitaan maupun di puncak penggenapan.
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