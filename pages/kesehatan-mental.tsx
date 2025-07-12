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
                src="./kesehatan_mental.jpg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Kesehatan Mental Seorang Pendamping Pejuang Kanker
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
              Menjadi pendamping  seorang pejuang kanker bukan pilihan. Melainkan panggilan yang justru datang dan memilih kita. Ada masa ketikahati terasa penuh kasih dan pengharapan, namun ada pula saat di mana jiwa seakan terhimpit beban yang tak terlihat.
Dalam perjalanan ini, sering kali kesehatan mental seorang pemdamping sering terabaikan: dianggap kuat dan sanggup. Tetapi dalam sunyi jutru mengalami kerapuhan. Buku ini hadir untuk menyapa mereka yang berjuang untuk tetap kuat tetapi tidak tahu kepada siapa harus bersandar.

Buku ini bukan sekedar bacaan, tetapi sahabat perjalanan. Ia mengajak kita berhenti sejenak, meresapi dan menemukan jawaban yang lebih dalam dari skedar kekuatan manusia. Setiap kata didalamnya adalah undangan untuk melihat bahwa kesehatan mental kitapun penting. Serta untuk menyadari bahwa di tengah kelemahan ada kasih Tuhan yang menopang.Karena seorang pendamping yang sehat jiwanya akan menjadi sumber kekuatan yang besar bagi mereka yang berjuang melawan kanker.
              </p>

            </div>

            <p className="text-xl font-semibold text-gray-800">
              Price Rp70.000
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