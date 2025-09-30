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
                src="/sampul-sejauh-langkah-Kaki.png"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Sejauh Langkah Kaki.
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
"Sejauh Langkah Kaki" adalah sebuah kompilasi kisah otentik yang dihimpun dari pengalaman hidup para penjelajah kehidupan yang telah "banyak makan asam garam." 
      Buku ini adalah persembahan mutiara-mutiara kebijaksanaan bernilai tinggi, di mana setiap kontributor dengan jujur menuangkan narasi perjalanan yang penuh liku, pergumulan, dan titik balik krusial. Jauh dari sekadar cerita, setiap halaman menawarkan pembelajaran kehidupan yang sangat mahal, mengubah tantangan menjadi insight mendalam, dan menjadikannya sumber inspirasi yang kuat untuk menuntun pembaca menemukan makna dan kekuatan dalam setiap langkah mereka sendiri. 
       Ada refleksi yang mendalam yang membawa pembaca masuk ke dalam perjalanan yang ada
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