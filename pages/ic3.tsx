import React from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function IC3Page() {
  return (
    <>
      <Seo title="IC3 - Indonesia Christian Cancer Community" description="Indonesia Christian Cancer Community hadir pada beragam kota dan siap untuk memperlengkapi anda dalam pengenalan Tuhan dengan benar." />
      <Navbar />

      <main className="w-full pb-12">
        <section className="max-container relative flex flex-col py-10 lg:py-20">
          <h1 className="bold-40 lg:bold-70 text-center mb-10 px-4">Indonesia Christian Cancer Community</h1>

          <div className="flex flex-col lg:flex-row items-center gap-10 px-4 lg:px-20">
            {/* Left Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/Kebersamaan IC3 di Manado.jpeg"
                  alt="IC3 Community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="bold-32 lg:bold-52 text-green-50">TENTANG IC3</h2>
              <p className="regular-16 lg:regular-18 text-gray-50 leading-relaxed text-justify">
                Indonesia Christian Cancer Community (IC3) merupakan suatu komunitas rohani non-profit dan non-denominasi yang dinaungi oleh Yayasan Satu Visi Bagi Indonesia. IC3 rindu menjadi saluran berkat bagi penderita kanker dan caregiver melalui persekutuan, bimbingan dan dukungan doa sehingga para anggota dapat merasakan kehadiran Tuhan dalam hidup mereka dan mereka dapat tetap memuliakan Tuhan di tengah-tengah masa yang berat di dalam kehidupan mereka.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="max-container px-4 lg:px-20 py-10">
          <div className="bg-green-50 rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col gap-8 text-white">
            <div className="flex flex-col gap-4">
              <h3 className="bold-28 lg:bold-40 border-b-2 border-white/30 pb-4">VISI KAMI</h3>
              <p className="regular-16 lg:regular-18 leading-relaxed">
                Menjadi sahabat sejati bagi para penderita kanker dan caregiver untuk bertumbuh bersama dalam pengenalan akan Tuhan melalui persekutuan yang saling menopang dan membangun, sehingga dalam keadaan apapun nama Tuhan dipermuliakan.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="bold-28 lg:bold-40 border-b-2 border-white/30 pb-4">MISI KAMI</h3>
              <ul className="list-disc pl-5 regular-16 lg:regular-18 leading-relaxed flex flex-col gap-2">
                <li>Memfasilitasi wadah persekutuan dan dukungan doa secara rutin.</li>
                <li>Menyediakan program bimbingan rohani yang menguatkan iman.</li>
                <li>Menyelenggarakan kegiatan edukatif dan inspiratif terkait kesehatan dan kualitas hidup.</li>
                <li>Membangun jaringan kemitraan dengan berbagai pihak untuk memperluas jangkauan pelayanan.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
