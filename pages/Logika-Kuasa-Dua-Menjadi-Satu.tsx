import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kuasa Dua Menjadi Satu" description="Logika Kuasa Dua Menjadi Satu" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika Kuasa Dua Menjadi Satu.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kuasa Dua Menjadi Satu
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Buku Logika Kuasa Dua Menjadi Satu mengajak pembaca menyelami misteri terdalam dari pernikahan Kristen sebagai sebuah kesatuan ilahi yang melampaui sekadar ikatan sosial atau emosional. Berakar pada kebenaran teologis yang kuat, buku ini menyingkap bahwa “menjadi satu” bukanlah proses kehilangan identitas, melainkan perjalanan transformasi di mana dua pribadi dipersatukan dalam kasih Allah. Dengan pendekatan yang reflektif dan argumentatif, penulis menyoroti bagaimana kesatuan dalam pernikahan merupakan karya anugerah yang menuntut kerendahan hati, pengorbanan, dan komitmen untuk terus bertumbuh bersama di dalam Kristus.
Lebih jauh, buku ini mengeksplorasi paradoks yang melekat dalam kehidupan pernikahan, antara perbedaan dan kesatuan, antara konflik dan kasih, antara kelemahan manusia dan kekuatan ilahi. Melalui pemaparan yang mendalam namun tetap aplikatif, pembaca diajak memahami bahwa dinamika ini bukanlah ancaman, melainkan sarana pembentukan karakter dan kedewasaan rohani. Dengan gaya bahasa yang hidup dan menggugah, buku ini menolong setiap pasangan untuk melihat pernikahan sebagai panggilan kudus yang mencerminkan hubungan Kristus dan jemaat-Nya.              </p>
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
