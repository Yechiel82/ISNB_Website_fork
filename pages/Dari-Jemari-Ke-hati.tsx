import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Dari Jemari Ke Hati" description="Bagaikan pelita yang berkobar di tengah gemerlap layar dan alunan kode digital, Dari Jemari ke Hati: Mengalirkan Berkat melalui Dunia Digital mengundang jemaat " />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="./dari-jemari-ke-hati.png"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Dari Jemari Ke Hati
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Bagaikan pelita yang berkobar di tengah gemerlap layar dan alunan kode digital, Dari Jemari ke Hati: Mengalirkan Berkat melalui Dunia Digital mengundang jemaat untuk menari dalam ritme iman, menjadikan setiap ketikan doa dan setiap unggahan kesaksian kasih Kristus. Berpijak pada firman Tuhan seperti Amsal 4:23 dan Ibrani 10:24-25, buku ini adalah panggilan suci untuk merangkul dunia maya sebagai ladang misi, membangun komunitas virtual yang hangat, menjaga hati di tengah distraksi, dan memancarkan terang ilahi hingga ke ujung bumi. Dengan penuh harapan, buku ini mengalirkan semangat untuk melayani, mengubah layar menjadi jendela rohani, dan menginspirasi setiap jiwa untuk menjadi berkat dari jemari ke hati, dari dunia ke surga.

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