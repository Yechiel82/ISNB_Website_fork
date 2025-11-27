import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PUBLICATIONS } from '@/constants/publications';
import Image from 'next/image';
import Seo from '@/components/Seo';

const SmartFlipbook = dynamic(() => import('@/components/SmartFlipbook'), { ssr: false });

export default function FlipBookPage() {
  const [selectedPub, setSelectedPub] = useState<typeof PUBLICATIONS[0] | null>(null);

  return (
    <>
      <Seo
        title="Perpustakaan Digital - Yayasan Satu Visi Bagi Indonesia"
        description="Baca publikasi, majalah, dan laporan tahunan terbaru dari Yayasan Satu Visi Bagi Indonesia."
      />
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-container padding-container">

          {selectedPub ? (
            <div>
              <button
                onClick={() => setSelectedPub(null)}
                className="mb-6 flex items-center gap-2 text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Kembali ke Perpustakaan
              </button>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">{selectedPub.title}</h2>
              <SmartFlipbook fileUrl={selectedPub.pdfUrl} />
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <h1 className="bold-40 lg:bold-64 text-green-90 mb-4">Perpustakaan Digital</h1>
                <p className="regular-16 text-gray-50 max-w-2xl mx-auto">
                  Jelajahi koleksi publikasi, majalah, dan laporan tahunan Yayasan Satu Visi Bagi Indonesia.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PUBLICATIONS.map((pub) => (
                  <div
                    key={pub.id}
                    onClick={() => setSelectedPub(pub)}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
                      <Image
                        src={pub.cover}
                        alt={pub.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <div className="p-6">
                      <h3 className="bold-20 text-gray-90 mb-2 group-hover:text-green-600 transition-colors">{pub.title}</h3>
                      <p className="regular-14 text-gray-30 line-clamp-3">{pub.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-green-600 font-medium text-sm">
                        <span>Baca Sekarang</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
