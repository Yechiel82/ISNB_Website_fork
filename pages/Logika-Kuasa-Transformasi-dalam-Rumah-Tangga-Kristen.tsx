import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kuasa Transformasi dalam Rumah Tangga Kristen" description="Logika Kuasa Transformasi dalam Rumah Tangga Kristen" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/logika kuasa transformasi dalam rumah tangga kristen.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kuasa Transformasi dalam Rumah Tangga Kristen
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Rumah tangga sering kali dipandang sekadar sebagai institusi sosial atau rutinitas domestik untuk membesarkan anak dan menjalani hidup bersama. Namun, di balik kesederhanaan struktur tersebut, tersimpan sebuah misteri rohani yang luas dan  mendalam: keluarga adalah taman yang Tuhan percayakan sebagai ruang pertumbuhan, pemulihan, dan transformasi kehidupan. Buku ini hadir untuk membongkar cara pandang konvensional dan mengajak pembaca melihat bahwa keluarga bukanlah tempat berkumpulnya orang-orang sempurna, melainkan sebuah laboratorium kehidupan di mana karakter diuji, ego dipatahkan, dan kasih dimurnikan melalui kasih karunia Allah.
Melalui pendekatan teologis yang praktis, penulis menyajikan "logika Kerajaan Allah" yang sering kali paradoks, di mana kekuatan justru lahir dari kelemahan dan kemenangan muncul melalui pengorbanan. Buku ini tidak hanya menawarkan teori, tetapi menjadi undangan untuk sebuah perjalanan spiritual dalam merawat relasi, mengelola konflik, dan menghidupi pengampunan sebagai bagian dari karya pembentukan ilahi. Dengan menempatkan Kristus sebagai pusat, setiap dinamika di meja makan hingga percakapan sederhana menjadi benih kekekalan yang akan membentuk warisan iman bagi generasi mendatang.              </p>
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
