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
                src="./Setiap_Kita_Punya_Cerita.jpeg"
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
              Setiap kita punya cerita. Perjalanan cerita harus dibagikan. Berbagai kisah ditulis disana dengan satu kerinduan bahwa hidup jadi berkat. Tiap penulis mengukir kisah dari perjalanan berbeda. Sakit, doa yang dijawab Tuhan dengan cara unik,  kisah mukjizat, impian yang indah, dll. 
              </p>

            </div>

            <p className="text-xl font-semibold text-gray-800">
              Price Rp80.000
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