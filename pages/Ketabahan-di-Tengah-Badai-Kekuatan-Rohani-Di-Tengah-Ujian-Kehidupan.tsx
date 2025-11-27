import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Ketabahan di Tengah Badai Kekuatan Rohani Di Tengah Ujian Kehidupan" description="Ketabahan di Tengah Badai adalah sebuah biografi yang mengisahkan perjalanan hidup dan pelayanan Rina Nahuway, seorang wanita yang menghadapi badai kehidupan de" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="./buku_rina.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Ketabahan di Tengah Badai Kekuatan Rohani Di Tengah Ujian Kehidupan
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
              Ketabahan di Tengah Badai adalah sebuah biografi yang mengisahkan perjalanan hidup dan pelayanan Rina Nahuway, seorang wanita yang menghadapi badai kehidupan dengan kekuatan doa dan iman yang kokoh.              </p>
              <p>
              Buku ini menggambarkan bagaimana Tuhan menyatakan kuasa-Nya melalui ketekunan Rina dalam menghadapi tantangan besar, termasuk kehilangan suaminya tercinta, Pdt. Jacob Nahuway.              </p>
              <p>
              Dengan karunia mendengar suara Tuhan secara jelas dan nyata, Rina menjalani hidup yang penuh makna, menjadi alat kasih Tuhan, dan menginspirasi banyak orang melalui pelayanannya yang setia.                </p>
              <p>
              Melalui setiap halaman, pembaca akan dibawa menyelami bagaimana doa bukan sekadar ritual, tetapi sebuah kekuatan yang nyata untuk membawa pengharapan, kesembuhan, dan mujizat. Rina Nahuway menjadi saksi iman bahwa badai terbesar sekalipun dapat dihadapi dengan keberanian dan ketabahan ketika kita bersandar pada Tuhan. Buku ini bukan hanya sebuah kesaksian yang menguatkan, tetapi juga sebuah undangan untuk mengenal kasih Tuhan yang setia dan kuasa-Nya yang mengubahkan.              </p>
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