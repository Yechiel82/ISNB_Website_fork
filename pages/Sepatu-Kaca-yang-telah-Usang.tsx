import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Sepatu Kaca yang telah Usang" description="Buku &quot;Sepatu Kaca&quot; bukanlah sekadar untaian kata yang berkilauan layaknya kisah-kisah istana yang megah. Ia justru terlahir dari sunyi dan pilu, di mana sepatu " />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="./SepatuKaca_page.jpg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Sepatu Kaca yang telah Usang
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
              Buku "Sepatu Kaca" bukanlah sekadar untaian kata yang berkilauan layaknya kisah-kisah istana yang megah. Ia justru terlahir dari sunyi dan pilu, di mana sepatu kaca impian telah retak oleh jejak panjang penderitaan dan pergumulan batin. Bukan dari podium kemenangan yang gemuruh, buku ini hadir dari lantai kehidupan yang basah oleh air mata, di mana luka menjelma aksara yang menyimpan jejak ziarah sebuah jiwa. Ia adalah refleksi kontemplatif, perjalanan pulang seorang yang pernah terpanggil namun sempat tersesat, kini merangkai kembali langkah menuju keheningan suci, tempat Sang Pencipta menanti.
              </p>

            </div>

            <p className="text-xl font-semibold text-gray-800">
              Price Rp99.000
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