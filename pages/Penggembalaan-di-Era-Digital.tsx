import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Penggembalaan di Era Digital" description="Buku ini adalah panggilan bagi gereja untuk hadir secara nyata di tengah arus digital yang kian deras—ketika media sosial menjadi ruang perjumpaan baru dan laya" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="./penggembalaan-di-era-digital.png"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Penggembalaan di Era Digital
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
              Buku ini adalah panggilan bagi gereja untuk hadir secara nyata di tengah arus digital yang kian deras—ketika media sosial menjadi ruang perjumpaan baru dan layar menjadi mimbar kehidupan. Dengan landasan teologi yang kokoh dan analisis sosial yang tajam, buku ini menuntun para gembala untuk menjangkau jiwa di dunia maya, membangun komunitas iman yang berakar pada Firman, serta menggembalakan dengan kasih Kristus yang tak berubah meski zaman terus berganti. 

Lebih dari sekadar adaptasi teknologi, buku ini adalah seruan untuk menjadi terang dan suara yang meneduhkan di tengah era yang kompleks dan sering kali sunyi dari kehadiran kasih sejati. Di jalan yang baru, namun dengan kasih yang lama: kasih Yesus Kristus yang tak pernah berubah.
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