import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kebangkitan" description="&quot;Logika Penebusan&quot; adalah sebuah eksplorasi mendalam yang secara kritis membongkar 'logika marketplace', sebuah sistem transaksional berbasis kinerja, utang, dan" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika_Kekekalan.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kekekalan
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
                Buku ini merupakan sebuah eksplorasi intelektual yang berani, berdiri tepat di persimpangan krusial antara iman yang teguh dan rasionalitas yang tajam. Penulis menantang dikotomi klasik yang sering kali memisahkan sejarah dari teologi, mengajak pembaca untuk tidak lagi memenjarakan figur Yesus dalam ruang iman yang kebal kritik atau sekadar mereduksi-Nya menjadi objek sejarah yang kehilangan daya gugahnya. Dengan argumentasi yang solid dan mendalam, buku ini membuktikan bahwa iman Kristen tidak memerlukan perlindungan dari penyelidikan rasional; sebaliknya, keduanya saling menguji dan menerangi untuk menyingkapkan kebenaran yang melampaui waktu.
                Melalui penelusuran data sejarah, analisis terhadap klaim kebangkitan, hingga konsekuensi eksistensial dari makna salib, penulis membawa kita melampaui sekadar pembuktian teoretis menuju pertanyaan fundamental: bagaimana seharusnya manusia hidup jika kekekalan sungguh telah menyentuh sejarah?
              </p>
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