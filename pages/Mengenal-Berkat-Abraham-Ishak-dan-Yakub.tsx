import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Mengenal Berkat Abraham Ishak dan Yakub" description="Mengenal Berkat Abraham Ishak dan Yakub" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/mengenal berkat abraham ishak dan yakub.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Mengenal Berkat Abraham Ishak dan Yakub
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Buku Mengenal Berkat Abraham, Ishak, dan Yakub: Rahasia Perjanjian Allah dan Transformasi Hidup Orang Percaya mengajak pembaca menelusuri jejak iman para bapa leluhur sebagai fondasi untuk memahami karya Allah yang tidak pernah terputus dalam sejarah umat-Nya. Dengan pendekatan teologis yang mendalam namun tetap komunikatif, penulis menyingkap bahwa berkat yang diberikan kepada Abraham, Ishak, dan Yakub bukan sekadar warisan historis, melainkan realitas perjanjian yang hidup dan relevan bagi setiap orang percaya masa kini. Di dalamnya, pembaca diajak melihat bahwa berkat ilahi tidak berdiri sendiri, tetapi selalu terkait dengan panggilan, ketaatan, dan relasi yang intim dengan Allah.
Lebih jauh, buku ini menuntun pembaca untuk menyadari bahwa berkat perjanjian bukan hanya tentang menerima, tetapi juga tentang mengalami transformasi hidup yang nyata. Dari kehidupan Abraham yang melangkah dalam iman, Ishak yang belajar percaya dalam ketaatan, hingga Yakub yang diproses melalui pergumulan, setiap kisah menjadi cermin perjalanan rohani orang percaya. Dengan gaya yang inspiratif dan menggugah, buku ini membuka pemahaman bahwa berkat sejati bukan hanya terlihat dalam kelimpahan, tetapi dalam perubahan hati, pemulihan identitas, dan kesetiaan Allah yang terus bekerja dalam setiap musim kehidupan.              </p>
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
