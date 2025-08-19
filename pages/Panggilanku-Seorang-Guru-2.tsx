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
                src="./COVERFRONTBACK-1.png"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Panggilanku Seorang Guru 2
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Strategi Pengajaran Brilian untuk Transformasi Pembelajaran hadir untuk menginspirasi guru agar berani keluar dari pola lama, mencoba hal baru, dan menemukan kembali sukacita mengajar. Buku ini bukan untuk menghakimi, melainkan mengingatkan kita akan alasan awal mengajar: bukan sekadar menuntaskan materi, tetapi menghidupkan kelas dan membangkitkan semangat belajar. 

Penulisnya pun adalah orang-orang biasa yang menyimpan kerinduan sama: menjadi inspirasi, sekecil apa pun bentuknya. Di dalamnya, Anda akan menemukan gagasan dan strategi yang bukan hanya teknis, tetapi juga menyentuh hati. Sebab transformasi pembelajaran lahir dari guru yang mau terus belajar, berani berinovasi, dan menghadirkan energi positif di kelasnya. 

Mari menjadi guru yang hadir, bukan sekadar untuk mengajar tetapi untuk menginspirasi, memberi kehidupan yang terus berdenyut di hati murid, bahkan setelah mereka meninggalkan bangku sekolah.
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