import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-12 pt-12">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Tentang Kami
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Visi</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Membawa Pribadi-pribadi untuk mengenal TUHAN dengan benar sehingga mereka kembali hidup memiliki pengharapan kepada TUHAN dan mereka dimampukan untuk membagi hidup mereka dengan menjadi saksi TUHAN sampai keujung bumi.</p>
        </div>
      </div>
      
      <div className="padding-container max-container w-full pb-12">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <div>
            <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
              <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">1</h2>
              <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-5">Memberikan pembelajaran rumah baca, keterampilan hidup kepada masyarakat yang kurang mampu atau yang membutuhkan dan rumah singgah bagi anak yatim-piatu.</p>
            </div>

            <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
              <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">2</h2>
              <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-5">Mengajarkan hidup berkarakter, menghormati sesama, dan turut serta dalam membangun bangsa dalam bidang skill yang mereka kuasai</p>
            </div>
            
            <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
              <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">3</h2>
              <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-5">Mengembangkan kapasitas SDM masyarakat melalui pelatihan, training dan pembinaan.</p>
            </div>

            <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
              <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">4</h2>
              <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-5"> PKBM (pusat kegiatan belajar mengajar) untuk masyarakat yang membutuhkan untuk mendapatkan kesetaraan pendidikan yang memadai, seperti ujian paket A, paket B, paket C.</p>
            </div>

          </div>
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Misi</h2>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full px-4">
        <Image 
          src="/Visi_Door_.jpeg"
          alt="Visi dan Misi"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-2xl lg:rounded-3xl xl:rounded-4xl 2xl:rounded-5xl mb-10"
        />
      </div>
    </section>
  )
}

export default About
