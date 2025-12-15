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
                src="/logika_iman.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Logika Iman            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Logika Iman menghadirkan sebuah kerangka pemikiran yang tegas dan terang mengenai rasionalitas iman Kristen di tengah dunia modern yang dipenuhi skeptisisme, relativisme, dan pencarian makna yang tak kunjung usai. 
Buku ini menegaskan bahwa iman bukanlah sekadar perasaan religius atau keyakinan pribadi, tetapi struktur pengetahuan yang berakar pada pewahyuan Allah, historisitas Kristus, dan rasionalitas yang diperbarui oleh Roh Kudus. Dengan memadukan teologi Reformed, filsafat kontemporer, dan analisis budaya modern, karya ini membuka mata pembaca atas urgensi memiliki iman yang kokoh secara intelektual dan relevan secara eksistensial. 
 Logika Iman menjadi penuntun penting bagi siapa pun yang ingin memahami mengapa percaya kepada Kristus bukan hanya mungkin, tetapi juga paling masuk akal, paling memerdekakan, dan paling dibutuhkan pada zaman ini.
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