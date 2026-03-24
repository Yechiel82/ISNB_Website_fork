import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function PercetakanBuku() {

  const carouselImages = [
    "/Setiap_Kita_Punya_Cerita.jpeg",
    "/KisahKehidupanDanPelayanan.jpeg",
    "/mei-ai.png",
    "/buku_rina.jpeg",
    "/Tetap_di_sisi-Mu.jpeg"
  ];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const adminPhone = '62888888888';
  const message = 'Halo admin, Saya ingin konsultasi mengenai percetakan buku';
  const whatsappLink = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <Seo title="Percetakan Buku" description="Layanan percetakan buku one-stop: typewriting, formatting, ISBN, dan lainnya." />
      <Navbar />

      <main className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Percetakan Buku</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan layanan percetakan buku one-stop solution untuk membantu Anda menerbitkan karya terbaik Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">Layanan Lengkap Kami</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Typewriting & Editing:</strong> Membantu merapikan naskah tulisan Anda.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Formatting & Layouting:</strong> Desain tata letak halaman yang profesional dan menarik.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Pendaftaran ISBN:</strong> Kami urus pendaftaran ISBN buku Anda hingga selesai.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Percetakan Berkualitas:</strong> Hasil cetak buku dengan standar terbaik dan harga kompetitif.</span>
              </li>
            </ul>

            <div className="pt-6">
              <p className="text-gray-600 mb-4">Untuk informasi harga dan konsultasi lebih lanjut:</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hubungi Admin (0888888888)
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group">
              {carouselImages.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Contoh Hasil Cetak Buku ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              ))}

              {/* Navigation dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 border-t pt-12">
           <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
             <Image src="/empty-nest.jpg" alt="Book Example 1" fill className="object-cover" />
           </div>
           <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
             <Image src="/kesehatan_mental.jpg" alt="Book Example 2" fill className="object-cover" />
           </div>
           <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
             <Image src="/buku_rina.jpeg" alt="Book Example 3" fill className="object-cover" />
           </div>
           <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
             <Image src="/mei-ai.png" alt="Book Example 4" fill className="object-cover" />
           </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
