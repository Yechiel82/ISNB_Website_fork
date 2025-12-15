import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="PULIH ATAS LUKA EMOSI" description="“Pulih Atas Luka Emosi” adalah sebuah perjalanan sunyi menuju ruang-ruang batin yang sering kita sembunyikan—tempat di mana rasa sakit memahat kita tanpa suara." />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Pulih_Atas_Luka_Emosi.jpg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
PULIH ATAS LUKA EMOSI
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
“Pulih Atas Luka Emosi” adalah sebuah perjalanan sunyi menuju ruang-ruang batin yang sering kita sembunyikan—tempat di mana rasa sakit memahat kita tanpa suara. Buku ini menuntun pembaca menelusuri jejak luka yang pernah diremehkan, disentuh dengan kelembutan Firman dan kejujuran reflektif yang memulihkan. Setiap halamannya mengajak kita berhenti sejenak, bernapas lebih dalam, dan menyadari bahwa di balik remuknya hati masih tersisa cahaya kasih Allah yang sanggup menata ulang hidup kita. 
Ini adalah undangan untuk pulih: perlahan, jujur, dan dengan keberanian baru untuk percaya bahwa apa yang pernah melukai tidak harus menentukan masa depan kita—sebab Sang Penyembuh hadir, bekerja dalam diam, memulihkan dalam kasih.              </p>

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