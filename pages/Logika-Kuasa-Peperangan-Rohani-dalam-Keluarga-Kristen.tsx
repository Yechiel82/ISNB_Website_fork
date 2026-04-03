import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kuasa Peperangan Rohani dalam Keluarga Kristen" description="Logika Kuasa Peperangan Rohani dalam Keluarga Kristen" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/logika kuasa peperangan rohani dalam keluarga kristen.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kuasa Peperangan Rohani dalam Keluarga Kristen
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Banyak keluarga Kristen yang sering kali terjebak dalam pemahaman bahwa ancaman terbesar rumah tangga berasal dari faktor eksternal seperti tekanan ekonomi atau pengaruh budaya. Namun, buku ini menyingkap sebuah realitas yang lebih dalam: adanya peperangan rohani yang berlangsung di ruang paling intim kehidupan manusia. Peperangan ini jarang muncul dalam bentuk yang dramatis, melainkan menyelinap melalui kesalahpahaman kecil yang berulang, luka hati yang tidak tersembuhkan, hingga komunikasi yang perlahan memburuk. Melalui "Logika Kuasa," penulis mengajak kita untuk menyadari bahwa setiap konflik di permukaan sering kali merupakan bayangan dari pergumulan spiritual yang membutuhkan penanganan lebih dari sekadar solusi manusiawi.
Dengan pendekatan yang inspiratif dan transformatif, buku ini membimbing setiap anggota keluarga untuk mengubah medan peperangan tersebut menjadi sebuah taman kehidupan. Anda akan diajak untuk tidak hanya berhenti pada pemulihan luka, tetapi juga bagaimana mengusahakan agar rumah tangga menjadi ruang di mana kehidupan Ilahi benar-benar bertumbuh. Di tengah dunia yang semakin kompleks, buku ini hadir sebagai kompas bagi pasangan dan orang tua untuk membangun pertahanan rohani yang kokoh. Fokusnya bukan pada pencapaian keluarga yang sempurna, melainkan keluarga yang bersedia belajar dari kegagalan, terus mengampuni, dan senantiasa kembali kepada Kristus sebagai sumber kemenangan yang sejati.              </p>
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
