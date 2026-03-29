import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Cara_memahami_kerangka_berpikir_jurnal_penelitian_kualitatif_bagi_pemula" description="Kuasa Menabur dan Menuai dalam Hidup Pernikahan Kristen adalah buku yang membahas bagaimana prinsip-prinsip iman dapat diterapkan dalam konteks pernikahan Kristen." />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Cara_memahami_kerangka_berpikir_jurnal_penelitian_kualitatif_bagi_pemula.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Cara Memahami Kerangka Berpikir Jurnal Penelitian Kualitatif Bagi Pemula
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Buku Logika Cara Memahami Kerangka Berpikir Sebelum Membuat Jurnal Penelitian Kualitatif Bagi Pemula menghadirkan sebuah pendekatan yang unik dengan mengintegrasikan teologi, logika, dan pengalaman kehidupan dalam memahami proses penelitian kualitatif. Tidak sekadar menjadi panduan teknis, buku ini menempatkan penelitian sebagai perjalanan intelektual sekaligus spiritual, sebuah proses pencarian kebenaran yang berangkat dari kesadaran akan keterbatasan manusia dan kerinduan untuk memahami realitas secara lebih mendalam. Pembaca diajak untuk membangun fondasi pengetahuan yang kokoh, memahami hakikat penelitian kualitatif, serta mengembangkan kerangka berpikir yang sistematis sebelum masuk ke tahap penulisan jurnal ilmiah.
Melalui alur yang terstruktur yang mulai dari menemukan masalah, merumuskan pertanyaan penelitian, mengkaji literatur, hingga menganalisis dan menafsirkan data. Buku ini menuntun pembaca pemula untuk berpikir secara logis, reflektif, dan kritis.

Lebih dari itu, buku ini menegaskan bahwa penelitian bukan hanya soal menghasilkan karya akademik, tetapi juga sarana pembentukan karakter: melatih kerendahan hati intelektual, kejujuran dalam menafsirkan data, dan tanggung jawab dalam menyampaikan kebenaran. Dengan pendekatan naratif dan ilustratif, buku ini menjembatani kesenjangan antara dunia akademik dan kehidupan nyata, sehingga penelitian menjadi relevan, bermakna, dan transformatif.
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