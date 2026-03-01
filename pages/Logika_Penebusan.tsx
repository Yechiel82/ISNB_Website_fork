import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Penebusan" description="&quot;Logika Penebusan&quot; adalah sebuah eksplorasi mendalam yang secara kritis membongkar 'logika marketplace', sebuah sistem transaksional berbasis kinerja, utang, dan" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika_Penebusan.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Logika Penebusan
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Dalam dunia yang mengagungkan keberhasilan, pretasi, kekuasaan, dan pencapaian, Logika Penebusan menghadirkan perspektif yang unik, yang kontras dan membebaskan: Allah menyatakan kemuliaan-Nya justru melalui salib. Buku ini secara khusus menggali untuk menemukan makna penebusan bukan sekadar sebagai peristiwa historis, tetapi sebagai pola ilahi yang membentuk seluruh kehidupan orang percaya. Dengan merujuk pada kekayaan teologi klasik dan pemikiran kontemporer, buku ini menunjukkan bagaimana salib Kristus menjadi pusat identitas, sumber pengharapan, dan fondasi kesaksian gereja dan umat Tuhan
Lebih dari sekadar kajian doktrinal, buku ini merupakan undangan menuju pembaharuan dan transformasi. Pembaca diajak melihat penderitaan, komunitas, misi, dan kehidupan sehari-hari dari umat tebusan Tuhan dalam terang karya Kristus yang menebus. Penebusan tidak berhenti pada pengampunan dosa, tetapi bergerak maju menuju pembaruan relasi, pembentukan karakter, dan kehadiran yang membawa terang di tengah dunia yang terluka parah. Melalui bahasa yang reflektif dan mendalam, buku ini menolong setiap pembaca hidup sebagai “surat terbuka”, surat  yang memancarkan kasih dan kebenaran Allah dalam realitas konkret kehidupan.
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