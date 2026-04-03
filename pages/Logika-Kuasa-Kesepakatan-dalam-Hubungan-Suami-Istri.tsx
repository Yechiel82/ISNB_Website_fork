import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kuasa Kesepakatan dalam Hubungan Suami Istri" description="Logika Kuasa Kesepakatan dalam Hubungan Suami Istri" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika Kuasa Kesepakatan dalam Hubungan Suami Istri.jpeg"
                alt="Product Image"
                className="w-full h-auto object/cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kuasa Kesepakatan dalam Hubungan Suami Istri
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Buku Logika Kuasa Kesepakatan dalam Hubungan Suami Istri: Menemukan, Mengusahakan, dan Menuai Kuasa Kesatuan dalam Perjanjian Pernikahan mengangkat sebuah kebenaran mendasar bahwa kekuatan terbesar dalam pernikahan bukan terletak pada dominasi, melainkan pada kesepakatan yang dibangun di atas kasih, komitmen, dan kesadaran akan perjanjian ilahi. Penulis menuntun pembaca untuk memahami bahwa kesepakatan bukan sekadar kompromi emosional, tetapi sebuah keputusan rohani dan rasional yang memiliki daya transformasi. Dengan pendekatan yang sistematis dan reflektif, buku ini menguraikan bagaimana pasangan suami istri dapat menemukan titik temu dalam perbedaan, membangun komunikasi yang sehat, serta mengelola konflik sebagai sarana pertumbuhan, bukan perpecahan.
Lebih dalam lagi, buku ini menyoroti bahwa kesatuan dalam pernikahan adalah hasil dari proses yang disengaja—ditemukan melalui pengenalan yang jujur, diusahakan dengan disiplin kasih, dan dituai dalam bentuk harmoni serta kekuatan bersama. Setiap prinsip yang disajikan tidak hanya bersifat teoritis, tetapi juga aplikatif, mengarahkan pasangan untuk mengalami kuasa kesatuan yang nyata dalam kehidupan sehari-hari. Dengan gaya bahasa yang inspiratif dan penuh kedalaman, buku ini menolong pembaca melihat pernikahan sebagai panggilan mulia yang memancarkan nilai spiritual, emosional, dan relasional secara utuh.              </p>
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
