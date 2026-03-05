import { useState } from 'react';
import '../app/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  const [lang, setLang] = useState<'id' | 'en'>('id');

  const idTitle = "Menemukan Kembali Jejak Pemuridan Didunia yang Riuh";
  const enTitle = "Rediscovering the Footsteps of Discipleship in a Chaotic World";
  const idDesc = "Di tengah riuhnya dunia yang mendewakan performa, buku ini hadir sebagai kompas spiritual untuk menemukan kembali esensi sejati pengikut Kristus melalui metodologi \"Saya Pengikut Kristus\" (SPK). Dr. (HC) Kartono menegaskan bahwa pemuridan bukanlah sekadar identitas sosial, melainkan transformasi radikal yang menjembatani kedalaman teologi dengan realitas hidup sehari-hari. Melalui peta jalan praktis dekonstruksi dan rekonstruksi karakter, buku ini menuntun setiap jiwa untuk tidak lagi menghidupi iman sebagai teori yang membeku, melainkan sebagai napas kehidupan yang meluap menjadi kesaksian hidup demi kemuliaan Allah yang kekal.";
  const enDesc = "Amidst a world that idolizes performance, this book serves as a spiritual compass to rediscover the true essence of being a follower of Christ through the “I Am a Follower of Christ” (SPK) methodology. Dr. (HC) Kartono emphasizes that discipleship is not merely a social identity, but a radical transformation that bridges the depth of theology with the realities of everyday life. Through a practical roadmap of deconstruction and reconstruction of character, this book guides every soul to no longer live out their faith as a frozen theory, but as the breath of life that overflows into a living testimony for the eternal glory of God.";

  return (
    <>
      <Seo
        title={lang === 'id' ? idTitle : enTitle}
        description={lang === 'id' ? idDesc : enDesc}
      />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setLang('id')}
              className={`px-4 py-2 rounded-md transition-colors ${lang === 'id' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              ID
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-md transition-colors ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/MenemukanKembali_LOGO.png"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {lang === 'id' ? idTitle : enTitle}
            </h2>

            <div className="text-gray-600 space-y-4 whitespace-pre-line">
              <p>
                {lang === 'id' ? (
                  <>
                    Di tengah riuhnya dunia yang mendewakan performa, buku ini hadir sebagai kompas spiritual untuk menemukan kembali esensi sejati pengikut Kristus melalui metodologi "Saya Pengikut Kristus" (SPK).
                    <br /><br />
                    Dr. (HC) Kartono menegaskan bahwa pemuridan bukanlah sekadar identitas sosial, melainkan transformasi radikal yang menjembatani kedalaman teologi dengan realitas hidup sehari-hari.
                    <br /><br />
                    Melalui peta jalan praktis dekonstruksi dan rekonstruksi karakter, buku ini menuntun setiap jiwa untuk tidak lagi menghidupi iman sebagai teori yang membeku, melainkan sebagai napas kehidupan yang meluap menjadi kesaksian hidup demi kemuliaan Allah yang kekal.
                  </>
                ) : (
                  enDesc
                )}
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