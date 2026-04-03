import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kuasa Lidah Perkataan" description="Logika Kuasa Lidah Perkataan" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika Kuasa Lidah Perkataan.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kuasa Lidah Perkataan
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Buku Logika Kuasa Lidah Perkataan: Teologi Firman, Paradoks Kata, dan Transformasi Hidup membawa pembaca masuk ke dalam pemahaman mendalam bahwa kata bukan sekadar alat komunikasi, melainkan kekuatan rohani yang membentuk realitas hidup manusia. Berangkat dari fondasi teologis bahwa dunia diciptakan melalui Firman Allah, buku ini menelusuri hubungan erat antara pikiran, iman, dan perkataan sebagai satu kesatuan yang menentukan arah kehidupan. Dengan pendekatan yang reflektif dan analitis, penulis mengungkap bahwa setiap kata yang diucapkan manusia adalah benih yang ditanam dalam “tanah” kehidupan, yang pada waktunya akan menghasilkan buah, baik kehidupan maupun kehancuran. 
Lebih jauh, buku ini mengupas paradoks lidah manusia: organ kecil yang mampu memuji Tuhan sekaligus melukai sesama, membangun masa depan sekaligus menghancurkan potensi. Melalui eksplorasi teologi Alkitab, logika spiritual, serta dinamika psikologis, pembaca diajak menyadari bahwa perkataan tidak pernah netral, ia selalu membawa konsekuensi moral dan spiritual. Dengan gaya bahasa yang tajam namun inspiratif, buku ini tidak hanya menawarkan pemahaman konseptual, tetapi juga mengarahkan pada transformasi praktis, yaitu bagaimana menyelaraskan hati, pikiran, dan perkataan agar menjadi saluran kehidupan, berkat, dan pemulihan.              </p>
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
