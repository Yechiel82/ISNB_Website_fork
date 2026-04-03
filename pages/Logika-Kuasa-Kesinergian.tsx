import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kuasa Kesinergian" description="Logika Kuasa Kesinergian" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika Kuasa Kesinergian.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kuasa Kesinergian
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Keluarga sering kali dipandang sebagai unit sosial yang sederhana, namun di baliknya tersimpan dinamika mendalam yang mempertemukan antara kasih manusia dan anugerah Ilahi. Buku ini mengajak Anda menjelajahi "Logika Kuasa Kesinergian," sebuah konsep paradoks di mana kekuatan sejati dalam rumah tangga tidak ditemukan melalui dominasi atau kontrol, melainkan melalui kerendahan hati, pengampunan, dan kesediaan untuk saling memberi diri. Menggunakan metafora "taman relasi," penulis membawa kita memahami bahwa keluarga adalah ekosistem spiritual yang memerlukan perawatan sabar untuk menumbuhkan benih iman, kesetiaan, dan kasih di tengah badai kehidupan yang tak terduga.
Melalui perpaduan refleksi teologis yang tajam dan aplikasi praktis yang membumi, buku ini menuntun setiap pasangan dan orang tua untuk melihat rumah tangga bukan sekadar tempat tinggal, melainkan ruang kerja Allah yang hidup. Anda akan dituntun untuk membangun fondasi yang kokoh, memerangi "gulma" konflik, hingga akhirnya menuai buah pemulihan yang memberkati dunia di sekitar. Ini adalah undangan bagi setiap jiwa untuk menemukan kembali desain awal Sang Pencipta dan menghidupi kuasa yang tak terlihat namun nyata, guna membentuk generasi masa depan yang berakar kuat dalam kasih Kristus.              </p>
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
