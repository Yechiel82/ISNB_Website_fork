import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Dewasa Di tengah Luka, Luka yang Membentuk Kasih yang Menyembuhkan" description="Kenangan adalah mozaik kehidupan yang tersusun dari serpihan masa lalu mengajarkan kita untuk untuk melihat setiap momen, baik manis maupun pahit sebagai bagian" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="./KisahKehidupanDanPelayanan.jpeg"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
            Dewasa Di tengah Luka, Luka yang Membentuk Kasih yang Menyembuhkan
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
              Kenangan adalah mozaik kehidupan yang tersusun dari serpihan masa lalu mengajarkan kita untuk untuk melihat setiap momen, baik manis maupun pahit sebagai bagian dari rencana indah Tuhan. Luka-luka yang kita alami bukan untuk membuat kita tenggelam dalam kepahitan, melainkan untuk menempa kita menjadi pribadi yang dewasa, matang, dan anggun. Menjalani hidup ini dengan penuh iman, kesabaran, dan pengharapan memberi kekuatan untuk terus melangkah, meski tantangan dan cobaan menghadang.
Buku ini berbagi nilai-nilai kehidupan yang telah menempa perjalanan seorang hamba Tuhan: bahwa keteguhan dalam iman kepada Tuhan, kesabaran dalam perjuangan, kasih dan pengampunan di tengah luka, serta kemandirian dan ketangguhan untuk bertahan, berbuah manis. Melalui kisah-kisah nyata yang tertuang didalamnya, kita akan menemukan inspirasi dan kekuatan untuk menghadapi masa-masa sulit, serta belajar memandang setiap kenangan sebagai warisan tak ternilai yang membentuk pribadi lebih baik.
	Buku ini mengingatkan bahwa hidup adalah perjuangan yang harus dijalani dalam pengharapan dan keyakinan bahwa bahwa hari esok selalu membawa kebaikan baru. Mari berjalan bersama menapaki jejak kehidupan, meresapi hikmah di balik setiap cerita, dan menemukan keindahan dalam perjalanan hidup yang penuh dengan warna, di bawah naungan kasih dan pertolongan Tuhan.              </p>

            </div>

            <p className="text-xl font-semibold text-gray-800">
              Soon
            </p>

            <button
              onClick={() => window.location.href='/'}
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