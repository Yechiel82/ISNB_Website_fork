import React from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

export default function IC3Page() {
  return (
    <>
      <Seo title="IC3 - Indonesia Christian Cancer Community" description="Indonesia Christian Cancer Community hadir pada beragam kota dan siap untuk memperlengkapi anda dalam pengenalan Tuhan dengan benar." />
      <Navbar />

      <main className="w-full pb-12">
        <section className="2xl:max-container relative flex flex-col py-10 lg:py-20">
          <h1 className="bold-40 lg:bold-70 text-center mb-10 px-4">Di bawah naungan Yayasan Satu Visi Bagi Indonesia</h1>

          <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
            <CampSite backgroundImage="bg-bg-img-1" title="Indonesia Christian Cancer Community" subtitle="Surabaya" peopleJoined="Komunitas Penyintas Kanker dan Caregiver" />
            <CampSite backgroundImage="bg-bg-img-2" title="Indonesia Christian Cancer Community" subtitle="Semarang" peopleJoined="Komunitas Penyintas Kanker dan Caregiver" />
            <CampSite backgroundImage="bg-bg-img-3" title="Indonesia Christian Cancer Community" subtitle="Jakarta" peopleJoined="Komunitas Penyintas Kanker dan Caregiver" />
            <CampSite backgroundImage="bg-bg-img-4" title="Indonesia Christian Cancer Community" subtitle="Yogyakarta" peopleJoined="Komunitas Penyintas Kanker dan Caregiver" />
            <CampSite backgroundImage="bg-bg-img-5" title="Indonesia Christian Cancer Community" subtitle="Manado" peopleJoined="Komunitas Penyintas Kanker dan Caregiver" />
            <CampSite backgroundImage="bg-bg-img-12" title="Indonesia Christian Cancer Community" subtitle="Jakarta" peopleJoined="Komunitas Penyintas Kanker dan Caregiver" />
            <CampSite backgroundImage="bg-bg-img-8" title="Indonesia Christian Cancer Community" subtitle="Pontianak" peopleJoined="Komunitas Penyintas Kanker dan Caregiver" />
            <CampSite backgroundImage="bg-bg-img-9" title="Indonesia Christian Cancer Community" subtitle="Semarang" peopleJoined="Komunitas Penyintas Kanker dan Caregiver" />
            <CampSite backgroundImage="bg-bg-img-10" title="Indonesia Christian Cancer Community" subtitle="Surabaya" peopleJoined="Komunitas Penyintas Kanker dan Caregiver" />
            <CampSite backgroundImage="bg-bg-img-11" title="Indonesia Christian Cancer Community" subtitle="Yogyakarta" peopleJoined="Komunitas Penyintas Kanker dan Caregiver" />
          </div>

          <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
            <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl shadow-xl">
              <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                <strong>Merasa Hilang</strong> dan Tak Tahu Kemana?
              </h2>
              <p className="regular-14 xl:regular-16 mt-5 text-white">
                <strong>Indonesia Christian Cancer Community </strong>hadir pada beragam kota dan siap untuk memperlengkapi anda dalam pengenalan Tuhan dengan benar sehingga para anggota dapat merasakan kehadiran Tuhan dalam hidup mereka.
              </p>
              <Image src="/quote.svg" alt="camp-2" width={186} height={219} className="camp-quote" />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">IC3 Sudah Ada di 6 Kota di Indonesia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Jaringan komunitas kami terus berkembang untuk memberikan dukungan yang lebih dekat dengan Anda.
            </p>
          </div>

          <div className="relative w-full aspect-[5/3] max-w-5xl mx-auto bg-gray-50 rounded-2xl overflow-hidden shadow-sm border">
             <Image
               src="/ic3-map.svg"
               alt="Peta Persebaran 6 Kota IC3 di Indonesia"
               fill
               className="object-contain"
             />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
