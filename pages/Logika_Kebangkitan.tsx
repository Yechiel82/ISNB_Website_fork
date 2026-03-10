import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kebangkitan" description="&quot;Logika Penebusan&quot; adalah sebuah eksplorasi mendalam yang secara kritis membongkar 'logika marketplace', sebuah sistem transaksional berbasis kinerja, utang, dan" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika_Kebangkitan.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kebangkitan
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
                Logika Kebangkitan
                Buku ini lahir dari sebuah kegelisahan yang tenang namun mendesak, hadir di antara iman yang terlalu cepat merasa aman dan skeptisisme yang terlalu lekas merasa unggul. Di ruang yang jujur namun tak nyaman ini, narasi bergerak melampaui sekadar catatan sejarah yang membeku di tepi makam, mengajak jiwa untuk melangkah ke wilayah di mana nalar menemui batasnya dan iman menjadi sebuah langkah yang tak terelakkan. Penulis menenun fakta-fakta sejarah yang kokoh. Semua ini mulai dari salib yang nyata hingga makam yang sunyi, sungguh-sungguh menjadi sebuah peta pencarian makna yang mendalam bagi setiap manusia yang pernah bertanya: "Apakah kematian benar-benar akhir?".
              </p>
            </div>

            <p className="text-xl font-semibold text-gray-800">
              Price Soon
            </p>

            <button
              onClick={() => window.location.href = '/'}
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