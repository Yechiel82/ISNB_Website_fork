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
                src="./self-healing-1.png"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            60 days self-healing for terminal illness
          </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Dalam menghadapi kabar buruk dan diagnosis penyakit berat yang mengguncang, buku "60 Days Self-Healing for Terminal Illness" hadir sebagai panduan yang tegas namun penuh kasih. Ditulis oleh Pdt. Dr. Erika Fanny dari pengalaman pribadinya sebagai pejuang penyakit kronis, buku ini mengajak Anda pada sebuah perjalanan batin selama 60 hari. Ini bukanlah janji kesembuhan instan, melainkan sebuah deklarasi bahwa pemulihan sejati dimulai dari dalam, dari kesiapan untuk menghadapi luka, air mata, dan kebingungan tanpa rasa malu. Buku ini secara lugas menegaskan bahwa nilai hidup tidak ditentukan oleh seberapa sempurna atau sehatnya tubuh, tetapi oleh keberanian untuk tetap berjuang dan menemukan arti di tengah badai.
Melalui setiap hari refleksi dan doa, Anda akan dipimpin untuk menyusun ulang harapan, berdamai dengan tubuh, dan menemukan kekuatan di tengah kelemahan. Dengan nada yang profesional dan penuh pengharapan, buku ini membimbing Anda untuk menyadari bahwa Anda berharga, bahkan di saat tak berdaya. Pesan utamanya urgen: jangan biarkan diagnosis merampas martabat dan sukacita Anda. Dengan setiap bab yang menyentuh, buku ini menjadi sahabat yang mengingatkan bahwa di balik sakit yang nyata, ada jiwa yang bisa tetap utuh dan kuat, dan bahwa terang bisa muncul dari dalam diri.
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