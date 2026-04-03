import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Logika Kuasa Keintiman Rohani dalam Kehidupan Pernikahan" description="Logika Kuasa Keintiman Rohani dalam Kehidupan Pernikahan" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Logika Kuasa Keintiman Rohani dalam Kehidupan Pernikahan.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Logika Kuasa Keintiman Rohani dalam Kehidupan Pernikahan
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
Logika Kuasa Keintiman Rohani dalam Kehidupan Pernikahan mengajak pembaca menyelami makna terdalam pernikahan sebagai lebih dari sekadar ikatan sosial atau emosional. Buku ini menyingkap pernikahan sebagai “taman rohani” tempat kasih, pengampunan, kesetiaan, dan pertumbuhan iman ditanam dan dipelihara. Dengan pendekatan teologis yang reflektif, pembaca diajak memahami bahwa keintiman sejati tidak lahir dari kekuatan atau kendali, melainkan dari kerentanan, penyerahan diri, dan kesediaan untuk berjalan bersama Allah dalam relasi yang paling dekat. Pernikahan dipandang sebagai ruang di mana manusia belajar mengenal kasih Allah secara nyata melalui kehidupan sehari-hari.
Lebih jauh, buku ini membimbing pasangan untuk secara praktis mengusahakan keintiman rohani melalui disiplin sederhana seperti doa bersama, hidup dalam Firman, mengelola konflik, dan membangun budaya pengampunan. Setiap dinamika dalam perjalanan pernikahan. Di dalamnya termasuk konflik dan kelemahan yang diungkap sebagai alat pembentukan karakter dan kedewasaan iman. Pada akhirnya, pernikahan tidak hanya berbuah bagi kebahagiaan pribadi, tetapi juga menjadi kesaksian hidup yang memancarkan nilai-nilai Kerajaan Allah. Dari kamar pernikahan hingga kehidupan yang lebih luas, buku ini menunjukkan bahwa kasih yang dihidupi dengan setia memiliki dampak kekal.              </p>
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
