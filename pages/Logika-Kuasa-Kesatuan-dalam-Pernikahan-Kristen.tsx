import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kuasa Kesatuan dalam Pernikahan Kristen" description="Logika Kuasa Kesatuan dalam Pernikahan Kristen" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika Kuasa Kesatuan dalam Pernikahan Kristen.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kuasa Kesatuan dalam Pernikahan Kristen
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Buku Logika Kuasa Kesatuan dalam Pernikahan Kristen mengajak pembaca memasuki pemahaman yang lebih dalam tentang makna pernikahan sebagai misteri ilahi, bukan sekadar hubungan sosial atau emosional. Berangkat dari kisah penciptaan hingga pengajaran Yesus dalam Injil, buku ini menyingkap bahwa kesatuan dalam pernikahan adalah karya Allah—sebuah panggilan bagi dua pribadi yang berbeda untuk menjadi satu tanpa kehilangan identitas. Melalui pendekatan teologis yang reflektif, pembaca dibimbing melihat bahwa kesatuan bukanlah hasil dominasi, melainkan buah dari kasih yang rela memberi diri, mengampuni, dan bertumbuh bersama dalam anugerah. 
Lebih dari sekadar konsep, buku ini menolong pasangan memahami realitas pernikahan dalam kehidupan sehari-hari—dengan segala dinamika konflik, perbedaan karakter, dan luka hati yang sering muncul. Dengan ilustrasi “taman” sebagai gambaran pernikahan, penulis menekankan bahwa kesatuan harus diusahakan melalui komunikasi yang sehat, kerendahan hati, pengampunan, dan kehidupan rohani bersama. Pada akhirnya, pernikahan dipahami sebagai perjalanan spiritual, di mana dua orang tidak hanya hidup berdampingan, tetapi diproses untuk semakin serupa dengan Kristus, sehingga relasi mereka menjadi kesaksian nyata dari kasih Allah yang setia dan memulihkan.              </p>
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
