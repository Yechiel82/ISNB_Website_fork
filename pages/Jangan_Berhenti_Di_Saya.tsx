import { useState } from 'react';
import '../app/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Home() {
  const [lang, setLang] = useState<'id' | 'en'>('id');

  return (
    <>
      <Seo
        title={lang === 'id' ? "Jangan Berhenti di Saya" : "Don't Stop at Me"}
        description={lang === 'id' ? "Dalam menghadapi kabar buruk dan diagnosis penyakit berat yang mengguncang, buku \"60 Days Self-Healing for Terminal Illness\" hadir sebagai panduan yang tegas na" : "“Don't Stop at Me” is a prophetic call for every believer to move beyond static Christianity toward a living, dynamic discipleship."}
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
                src="/JanganBerhentiDisayaLOGO.png"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {lang === 'id' ? "Jangan Berhenti di Saya" : "Don't Stop at Me"}
            </h2>

            <div className="text-gray-600 space-y-4 whitespace-pre-line">
              {lang === 'id' ? (
                <p>
                  sebuah panggilan profetis bagi setiap orang percaya untuk keluar dari kekristenan yang statis menuju pemuridan yang hidup, bergerak, dan melipatgandakan kehidupan. Buku ini menegaskan bahwa anugerah Allah tidak pernah dimaksudkan untuk berhenti pada satu pribadi, melainkan mengalir sebagai estafet iman dari generasi ke generasi. Dengan fondasi Firman Tuhan yang kuat dan refleksi teologis yang tajam, pembaca diajak untuk dapat memahami bahwa menjadi murid Kristus bukan sekadar menerima keselamatan saja, tetapi mengalami transformasi jati diri yang nyata dengan iman yang berakar, karakter yang dibentuk, relasi yang dipulihkan, dan hidup yang siap diutus bagi misi Allah.
                  {"\n\n"}
                  Melalui pendekatan yang profesional, tegas, dan semi puitis, buku ini menggugah tekad rohani untuk menghidupi Amanat Agung sebagai perintah ilahi, bukan pilihan opsional. “Jangan Berhenti di Saya” menantang pembaca untuk menolak iman yang mandul dan memilih menjadi saluran kehidupan yang melahirkan murid-murid baru. Inilah undangan untuk menjadi mata rantai yang setia dalam karya penebusan Allah. Hal yang mendasar dan yang terutama adalah dimuridkan untuk memuridkan, diubah untuk mengubah, dan hidup bukan sebagai tujuan akhir mendapatkan berkat, melainkan sebagai alat Tuhan agar kemuliaan Kristus terus bergerak, nyata (dapat dirasakan) dan berlipat ganda sampai ke ujung bumi.
                </p>
              ) : (
                <p>
                  “Don't Stop at Me” is a prophetic call for every believer to move beyond static Christianity toward a living, dynamic discipleship that multiplies life. This book affirms that God's grace is never meant to stop at one person, but to flow as a relay of faith from generation to generation. With a strong foundation in God’s Word and sharp theological reflection, readers are invited to understand that being a disciple of Christ is not merely about receiving salvation, but experiencing a real transformation of identity with deep-rooted faith, shaped character, restored relationships, and a life ready to be sent out for God’s mission.
                </p>
              )}
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