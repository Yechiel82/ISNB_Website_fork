import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Membawa Terang Injil Bagi Masyarakat Di Pulau Bali" description="Buku ini menyajikan panduan komprehensif untuk penginjilan di Bali, sebuah pulau dengan dominasi Hindu (92,11%) dan tantangan spiritual yang kompleks, seperti s" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Terang_Injil.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Membawa Terang Injil Bagi Masyarakat Di Pulau Bali
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Buku ini menyajikan panduan komprehensif untuk penginjilan di Bali, sebuah pulau dengan dominasi Hindu (92,11%) dan tantangan spiritual yang kompleks, seperti sistem Desa Adat, praktik okultisme, dan resistensi budaya. Melalui analisis konteks geografis, demografis, dan budaya Bali, buku ini menguraikan strategi kontekstual seperti doa, puasa, pujian, dan penggunaan seni lokal untuk mematahkan benteng kegelapan dalam peperangan rohani. 
Dengan landasan Alkitabiah dari ayat-ayat seperti Matius 28:19-20, 2 Korintus 10:4, dan Kolose 4:5-6, buku ini menawarkan kesaksian nyata, panduan praktis, dan sumber daya teologi untuk memobilisasi gereja, membangun kelompok sel, dan memanfaatkan media sosial serta pariwisata, dengan visi menjadikan Bali mercusuar Injil melalui kerjasama antar-gereja dan doa yang penuh kuasa.
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