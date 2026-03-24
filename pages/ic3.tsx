import React from 'react';
import Image from "next/image";
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
        <span className="flex -space-x-4 overflow-hidden">
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

export default function IC3() {
  return (
    <>
      <Seo title="IC3 - Indonesia Christian Cancer Community" description="Indonesia Christian Cancer Community hadir untuk memperlengkapi anda dalam pengenalan Tuhan dengan benar." />
      <Navbar />

      <main className="w-full pb-12 min-h-screen">
        {/* Header Section */}
        <div className="bg-green-90 relative overflow-hidden">
          <div className="max-container padding-container relative w-full flex flex-col items-center justify-center py-16 md:py-24 z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Indonesia Christian Cancer Community
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Bersama menghadapi perjuangan, berbagi kekuatan, dan merasakan kasih Tuhan dalam setiap langkah penyembuhan.
            </p>
          </div>
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        {/* Carousel Section */}
        <section className="2xl:max-container relative flex flex-col py-10 lg:py-20">
          <h2 className="bold-32 lg:bold-50 text-center mb-10 text-gray-900" >
            Di bawah naungan Yayasan Satu Visi Bagi Indonesia
          </h2>

          <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
            <CampSite
              backgroundImage="bg-bg-img-1"
              title="Indonesia Christian Cancer Community"
              subtitle="Surabaya"
              peopleJoined="Komunitas Penyintas Kanker dan Caregiver"
            />
            <CampSite
              backgroundImage="bg-bg-img-2"
              title="Indonesia Christian Cancer Community"
              subtitle="Semarang"
              peopleJoined="Komunitas Penyintas Kanker dan Caregiver"
            />
            <CampSite
              backgroundImage="bg-bg-img-3"
              title="Indonesia Christian Cancer Community"
              subtitle="Jakarta"
              peopleJoined="Komunitas Penyintas Kanker dan Caregiver"
            />
            <CampSite
              backgroundImage="bg-bg-img-4"
              title="Indonesia Christian Cancer Community"
              subtitle="Yogyakarta"
              peopleJoined="Komunitas Penyintas Kanker dan Caregiver"
            />
            <CampSite
              backgroundImage="bg-bg-img-5"
              title="Indonesia Christian Cancer Community"
              subtitle="Manado"
              peopleJoined="Komunitas Penyintas Kanker dan Caregiver"
            />
            <CampSite
              backgroundImage="bg-bg-img-12"
              title="Indonesia Christian Cancer Community"
              subtitle="Jakarta"
              peopleJoined="Komunitas Penyintas Kanker dan Caregiver"
            />
            <CampSite
              backgroundImage="bg-bg-img-8"
              title="Indonesia Christian Cancer Community"
              subtitle="Pontianak"
              peopleJoined="Komunitas Penyintas Kanker dan Caregiver"
            />
            <CampSite
              backgroundImage="bg-bg-img-9"
              title="Indonesia Christian Cancer Community"
              subtitle="Semarang"
              peopleJoined="Komunitas Penyintas Kanker dan Caregiver"
            />
            <CampSite
              backgroundImage="bg-bg-img-10"
              title="Indonesia Christian Cancer Community"
              subtitle="Surabaya"
              peopleJoined="Komunitas Penyintas Kanker dan Caregiver"
            />
            <CampSite
              backgroundImage="bg-bg-img-11"
              title="Indonesia Christian Cancer Community"
              subtitle="Yogyakarta"
              peopleJoined="Komunitas Penyintas Kanker dan Caregiver"
            />
          </div>

          <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
            <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
              <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                <strong>Merasa Hilang</strong> dan Tak Tahu Kemana?
              </h2>
              <p className="regular-14 xl:regular-16 mt-5 text-white">
                <strong>Indonesia Christian Cancer Community </strong>hadir pada beragam kota dan siap untuk memperlengkapi anda dalam pengenalan Tuhan dengan benar sehingga para anggota dapat merasakan kehadiran Tuhan dalam hidup mereka.
              </p>
              <Image
                src="/quote.svg"
                alt="camp-2"
                width={186}
                height={219}
                className="camp-quote"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}