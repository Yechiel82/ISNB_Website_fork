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
                src="Langkah_Kecil.jpg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Langkah Kecil, Kasih Besar
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
              Kumpulan 52 renungan yang berisi nilai-nilai kehidupan tentang pernikahan, parenting dan dinamika rumah tangga ini bukan sekedar tulisan, melainkan wujud panggilan untuk membangun warisan sejarah iman bagi generasi.
              </p>
              <p>
              Di tengah zaman yang semakin cepat dan dunia yang penuh tantangan, kelaurga bukan hanya tempat berlindung, tetapi medan pertempuran rohani yang sesungguhnya. Tuhan memanggil keluarga-keluarga untuk bangkit, bersatu dan berjalan bersama sebagai satu team. Ketika suami, istri dan anak-anak bersatu dalam doa dan kebenaran dalam Firman Tuhan maka keluarga akan menjadi benteng  iman yang kuat dan terang bagi lingkungan sekitar.
              </p>
              <p>
              Melalui pelayanan digital sahabat doa FKK (SDFKK) bersama Pdt. Fu, kami melihat bagaimana doa dan Firman Tuhan menembus tembok-tembok gereja dan ke rumah-rumah, menjangkau hati, membangkitkan iman, dan menuntun keluarga mengenal rancangan kehidupan ilahi yang Tuhan siapkan bagi setiap pribadi. Pelayanan ini bukan hanya memulihkan, tetapi juga menggerakkan.
              </p>
              <p>
              Kami percaya bahwa inilah waktunya setiap kota mengalami pergerakan doa di setiap keluarga. Kiranya melalui buku ini, lahir keluarga-keluarga yang kuat, berdampak, dan membangun sejarah iman yang akan dikenang oleh generasi selanjutnya.
              </p>
              <p>
              Dengan Hikmat ilahi, mari kita bangun keluarga yang hidup dalam Thrive Life, hidup yang penuh kelimpahan, kesehatan dan penggenapan janji Tuhan.              </p>
            </div>

            <p className="text-xl font-semibold text-gray-800">
              Price Coming Soon
            </p>

            <button
              onClick={() => window.location.href='https://shp.ee/6kl0cs8'}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact for info
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}