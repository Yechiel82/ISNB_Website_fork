import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kuasa dalam Perjanjian Pernikahan Kristen" description="Logika Kuasa dalam Perjanjian Pernikahan Kristen" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika Kuasa dalam Perjanjian Pernikahan Kristen.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kuasa dalam Perjanjian Pernikahan Kristen
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Logika Kuasa dalam Perjanjian Pernikahan Kristen adalah karya inspiratif yang menuntun pasangan suami istri, calon pasangan, maupun pelayan Tuhan untuk memahami pernikahan dari perspektif Kerajaan Allah. Buku ini mengintegrasikan kedalaman teologi dengan kepekaan pastoral, menghadirkan wawasan tentang bagaimana kasih, kesetiaan, dan pengorbanan bekerja sebagai kekuatan rohani yang membangun relasi yang utuh dan bertahan. Melalui struktur yang sistematis dan refleksi yang tajam, buku ini tidak hanya memperkaya pemahaman, tetapi juga memberikan panduan praktis untuk menghidupi perjanjian pernikahan sebagai panggilan ilahi yang memancarkan kemuliaan Tuhan dalam kehidupan sehari-hari.              </p>
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
