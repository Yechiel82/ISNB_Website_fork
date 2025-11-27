import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Buku Ajar Pendidikan Kewarganegaraan," description="&quot;Buku Ajar Pendidikan Kewarganegaraan,&quot; buku ini berfungsi sebagai panduan yang komprehensif dan tegas untuk menanamkan nilai-nilai kewarganegaraan yang berland" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/PKN.png"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
Buku Ajar Pendidikan Kewarganegaraan,
          </h2>

            <div className="text-gray-600 space-y-4">
              <p>
"Buku Ajar Pendidikan Kewarganegaraan," buku ini berfungsi sebagai panduan yang komprehensif dan tegas untuk menanamkan nilai-nilai kewarganegaraan yang berlandaskan Pancasila, UUD 1945, NKRI, dan semangat Bhinneka Tunggal Ika. Buku ini tidak sekadar menyajikan teori, tetapi secara profesional menekankan keterkaitan antara pengetahuan akademis dengan sikap dan keterampilan yang dibutuhkan dalam praktik kehidupan berbangsa dan bernegara. Tujuannya adalah untuk membentuk karakter mahasiswa agar menjadi warga negara yang cerdas, bermoral, berintegritas, dan berjiwa nasionalis. Materi yang dibahas mencakup hakikat, landasan, tujuan pendidikan kewarganegaraan, hingga isu-isu penting seperti Filsafat Pancasila, Integrasi Nasional, Demokrasi Indonesia, Hak dan Kewajiban Warga Negara, serta Bela Negara. Dengan pendekatan yang sistematis dan aplikatif, buku ini merupakan instrumen esensial untuk membekali mahasiswa dan pihak terkait agar memiliki kesadaran, tanggung jawab, dan kebanggaan sebagai warga negara Indonesia.
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