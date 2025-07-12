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
                src="./Cover Book - Kristen dan Budaya Tionghoa-1-1.png"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Kristen dan Budaya Tionghoa: Harmoni Pelayanan dalam Pemuridan Jemaat Etnis Tionghoa
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Buku "Kristen dan Budaya Tionghoa: Harmoni Pelayanan dalam Pemuridan Jemaat Etnis Tionghoa" karya Pendeta Dr. Nicodemus Chen, M.Th., hadir sebagai panduan esensial di tengah dinamika Kekristenan global. Dengan tegas menantang pemahaman konvensional mengenai pemuridan, karya ini menawarkan perspektif inovatif yang menunjukkan bagaimana nilai-nilai luhur budaya Tionghoa dapat secara harmonis diintegrasikan ke dalam praktik pelayanan Kristen. Melalui analisis mendalam dan studi kasus nyata, buku ini membuktikan bahwa menjadi seorang Kristen tidak berarti meninggalkan akar budaya, melainkan justru menemukan dimensi baru dari iman yang relevan dan transformatif. Ini adalah sumber wawasan tak ternilai bagi para pemimpin gereja, pelayan Tuhan, akademisi, dan setiap individu yang merindukan pertumbuhan iman otentik dan berdampak, menyajikan strategi serta rekomendasi praktis untuk menciptakan "harmoni pelayanan" yang kuat, memberdayakan jemaat menjadi murid Kristus yang berakar teguh pada Alkitab sambil bangga merefleksikan identitas budaya mereka. Bacalah buku ini untuk menemukan jalan baru dalam pemuridan yang inspiratif dan mampu membawa transformasi nyata bagi komunitas Kristen Tionghoa global.
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