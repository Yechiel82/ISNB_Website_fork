import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Taman Edenku" description="Jauh di dalam diri setiap individu, tersembunyi sebuah &quot;Taman Eden&quot;, sebuah lanskap unik berisi potensi ilahi yang menunggu untuk diolah. Buku ini bukan sekadar" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/taman_edenku.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Taman Edenku
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Jauh di dalam diri setiap individu, tersembunyi sebuah "Taman Eden", sebuah lanskap unik berisi potensi ilahi yang menunggu untuk diolah. 
Buku ini bukan sekadar panduan motivasi, melainkan sebuah peta strategis yang tegas dan praktis untuk perjalanan transformatif Anda. Anda akan dibimbing untuk menemukan benih-benih anugerah yang spesifik bagi Anda, melampaui identifikasi talenta biasa menuju pengenalan panggilan sejati. Selanjutnya, Anda akan diperlengkapi untuk mengusahakan taman tersebut dengan disiplin seorang pengelola yang setia, mengubah kerja keras menjadi ibadah dan tantangan menjadi pupuk pertumbuhan. 	
Puncaknya, buku ini akan menunjukkan cara menuai berkat yang berkelanjutan, buah-buah keberhasilan yang tidak hanya memperkaya hidup Anda, tetapi juga menjadi persembahan kemuliaan bagi Sang Tuan Kebun. "Taman Edenku" adalah undangan radikal untuk berhenti menjadi penonton dan mulai menjadi penjaga kebun yang ahli atas takdir ilahi Anda.
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