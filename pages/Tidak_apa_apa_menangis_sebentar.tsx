import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Tidak Apa-apa Menangis Sebentar" description="&quot;Tidak Apa-apa Menangis Sebentar&quot; adalah sebuah eksplorasi mendalam yang secara kritis membongkar 'logika marketplace', sebuah sistem transaksional berbasis kinerja, utang, dan" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Tidak_apa_apa_menangis_sebentar.png"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Tidak Apa-apa Menangis Sebentar
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
                Buku ini hadir sebagai sebuah pelukan sunyi bagi setiap perempuan yang telah terlalu lama berdiri tegak demi orang lain hingga lupa cara untuk duduk dan beristirahat tanpa rasa bersalah. Melalui untaian narasi yang mendalam dan teduh, Pdt. Dr. Erika Fanny mengajak pembaca untuk merobohkan tembok kebohongan halus yang menyatakan bahwa air mata adalah tanda runtuhnya iman. Sebaliknya, buku ini menegaskan bahwa kelelahan jiwa bukanlah sebuah dosa, melainkan bahasa jujur dari kemanusiaan yang sedang mencari ruang untuk menjadi utuh kembali di hadapan Sang Pencipta.Bukan menawarkan solusi instan atau tuntutan untuk segera pulih, karya ini justru memberikan izin yang langka bagi jiwa yang letih untuk berhenti sejenak dan bernapas di tengah hiruk pikuk ekspektasi dunia. Dengan sentuhan semi puitis yang menyentuh relung batin, pembaca dihantar untuk menyadari bahwa Tuhan tidak pernah mencari pahlawan rohani yang tidak bisa lelah, melainkan anak-anak yang berani datang apa adanya dengan hati yang retak. Inilah sebuah undangan untuk merayakan kerapuhan sebagai bentuk iman yang paling murni, di mana menangis sebentar bukanlah sebuah kekalahan, melainkan langkah awal menuju pemulihan yang sejati.
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