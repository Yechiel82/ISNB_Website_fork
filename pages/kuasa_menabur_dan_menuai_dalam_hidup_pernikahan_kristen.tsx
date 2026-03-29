import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Kuasa Menabur dan Menuai dalam Hidup Pernikahan Kristen" description="Kuasa Menabur dan Menuai dalam Hidup Pernikahan Kristen adalah buku yang membahas bagaimana prinsip-prinsip iman dapat diterapkan dalam konteks pernikahan Kristen." />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Rev. Dr. Henry Ekacahya Putra, S.Tm, M.M..webp"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Kuasa Menabur dan Menuai dalam Hidup Pernikahan Kristen
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Pernikahan bukanlah sekadar pertemuan dua hati yang terikat cinta, melainkan sebuah ladang ilahi yang dipercayakan Tuhan untuk diolah dengan penuh kesadaran rohani. Buku ini mengajak setiap pasangan untuk memahami bahwa setiap kata, sikap, dan keputusan sehari-hari adalah benih yang sedang ditanam di tanah relasi mereka. Melalui perspektif hukum rohani menabur dan menuai, pembaca dibimbing untuk melihat bahwa keindahan sebuah hubungan tidak terjadi secara kebetulan, melainkan hasil dari ketekunan dalam menanam kasih, pengampunan, dan kesetiaan di setiap musim kehidupan.
Lebih dari sekadar panduan praktis, karya ini mengeksplorasi paradoks kerajaan Allah dalam rumah tangga: bahwa kebahagiaan sejati justru ditemukan saat seseorang berani melepaskan ego demi pertumbuhan bersama. Dengan pembagian tiga musim besar, yang dimulai dari membangun fondasi rancangan ilahi, mengusahakan ladang melalui pengolahan karakter, hingga menuai buah kedamaian, buku ini memberikan pengharapan bagi setiap pasangan . Pada akhirnya, tujuan tertinggi yang ditawarkan adalah sebuah pernikahan yang tidak hanya membahagiakan secara pribadi, tetapi juga menjadi kesaksian hidup yang memancarkan kemuliaan Tuhan bagi dunia.

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