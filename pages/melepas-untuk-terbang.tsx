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
                src="./empty-nest.jpg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Setiap Kita Punya Cerita
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
              Empty Nest bukanlah akhir dari sebuah perjalanan, melainkan awal dari penemuan diri yang baru. Dalam keheningan, ada kesempatan untuk bertumbuh, mencintai, dan merangkul harapan. Temukan kebijaksanaan, inspirasi, dan dorongan untuk menjadikan fase ini sebagai momen transformasi yang indah. Mari bersama-sama merayakan setiap langkah menuju masa depan yang penuh kemungkinan.</p>

            </div>

            <p className="text-xl font-semibold text-gray-800">
              Price Coming Soon
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