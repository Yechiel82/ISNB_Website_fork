import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Kita Hanya Punya Saat Ini" description="Kita Hanya Punya Saat Ini adalah seruan tegas bagi setiap anak Tuhan yang merindukan hubungan mendalam dengan Tuhan untuk merangkul momen kini sebagai anugerah " />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="./Kita_Hanya_Punya_Saat_Ini.png"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Kita Hanya Punya Saat Ini
          </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Kita Hanya Punya Saat Ini adalah seruan tegas bagi setiap anak Tuhan yang merindukan hubungan mendalam dengan Tuhan untuk merangkul momen kini sebagai anugerah ilahi yang suci. Berpijak pada kebenaran Alkitab seperti Pengkhotbah 3:1-8 dan Efesus 5:16, buku ini mengajak pembaca untuk melepaskan belenggu masa lalu dan kecemasan masa depan, menegaskan bahwa saat ini adalah waktu yang ditentukan Tuhan untuk iman, kasih, dan pelayanan. Dengan pendekatan  yang Alkitabiah, buku ini menggugah kesadaran rohani melalui eksplorasi mendalam, panduan studi kelompok kecil, dan refleksi devosional harian, menjadikan setiap detik sebagai kesempatan untuk hidup dalam kedaulatan Tuhan yang mulia.
Dengan narasi yang kuat dan penuh inspirasi, Kita Hanya Punya Saat Ini menawarkan peta jalan praktis untuk menghidupi iman di tengah dunia yang penuh distraksi. Buku ini mengajarkan bahwa momen sekarang adalah arena penebusan, di mana anugerah Tuhan mengubah penyesalan menjadi pembaruan dan keraguan menjadi tindakan kasih. Ini adalah panggilan mendesak untuk hidup dengan penuh kesadaran dan tujuan, memastikan bahwa setiap langkah dalam momen ini menjadi persembahan bagi kemuliaan Tuhan yang kekal.
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