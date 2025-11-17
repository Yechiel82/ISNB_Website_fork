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
                src="/Sampul Logika Anugerah-1.png"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Logika Anugerah
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
"Logika Anugerah" adalah sebuah eksplorasi mendalam yang secara kritis membongkar 'logika marketplace', sebuah sistem transaksional berbasis kinerja, utang, dan ketakutan yang tanpa sadar mendominasi kehidupan kita. Sebagai antitesis yang radikal, buku ini memperkenalkan 'Logika Anugerah' sebagai 'sistem operasi' ilahi yang membebaskan, di mana identitas kita tidak lagi dibangun di atas pencapaian, melainkan di atas penerimaan tak bersyarat di dalam Kristus. 
Ini adalah undangan inspiratif untuk memindahkan kebenaran Injil dari sekadar pemahaman intelektual di kepala menjadi transformasi sejati di hati, membekali Anda untuk menerapkan hikmat 'bodoh' dari anugerah ini secara praktis di tempat kerja, dalam keluarga, dan di medan perang batin melawan perfeksionisme, sehingga Anda dapat hidup dalam kemerdekaan yang seutuhnya.              </p>

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