import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="SUKABUMI KOTA POLISI: Polisi Bersama Rakyat Menjaga Negeri" description="sebuah monumen aksara yang mengabadikan ikatan suci dan takdir sejarah antara Kota Sukabumi dengan denyut nadi institusi kepolisian Republik Indonesia. Di dalam" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Sukabumi_Kota_Polisi.jpeg"

                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
SUKABUMI KOTA POLISI: Polisi Bersama Rakyat Menjaga Negeri
            </h2>

            <div className="text-gray-600 space-y-4">
              <p>
sebuah monumen aksara yang mengabadikan ikatan suci dan takdir sejarah antara Kota Sukabumi dengan denyut nadi institusi kepolisian Republik Indonesia. Di dalamnya, tersemat kisah panjang nan heroik sejak jejak kolonial, di mana bumi Sukabumi telah dipilih Sang Takdir sebagai kawah candradimuka, tempat jiwa-jiwa Bhayangkara mengukir janji kesetiaan dan profesionalisme, menumbuhkan rasa bangga yang penuh suka cita akan peran strategisnya sebagai lokasi Sekolah Pembentukan Perwira (Setukpa). Dengan penuh haru dan kekaguman, narasi ini membentangkan selimut sejarah, merayakan Sukabumi sebagai mahkota kehormatan yang resmi menyandang predikat "Kota Polisi", menegaskan bahwa kota ini adalah pusaka bangsa yang tak terpisahkan dari dedikasi para penjaga negeri.
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