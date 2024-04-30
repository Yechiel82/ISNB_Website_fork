import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Tentang Kami
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Visi</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Membawa Pribadi-pribadi untuk mengenal TUHAN dengan benar sehingga mereka kembali hidup memiliki pengharapan kepada TUHAN dan mereka dimampukan untuk membagi hidup mereka dengan menjadi saksi TUHAN sampai keujung bumi.</p>
        </div>
      </div>
      
      <div className="padding-container max-container w-full pb-24">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
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
              <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-5">mengembangkan kapasitas SDM masyarakat melalui pelatihan, training dan pembinaan.</p>
            </div>

            <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
              <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">4</h2>
              <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-5">Membuka PKBM (pusat kegiatan belajar mengajar) untuk masyarakat yang membutuhkan untuk mendapatkan kesetaraan pendidikan yang memadai, seperti ujian paket A, paket B, paket C.</p>
            </div>

          </div>
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Misi</h2>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/Visi_Door_.jpeg"
          alt="boat"
          width={1440}
          height={580}
          // className="w-full object-cover object-center 2xl:rounded-5xl"
          className="w-full object-cover object-center rounded-2xl lg:rounded-3xl xl:rounded-4xl 2xl:rounded-5xl mb-10"
        />
      </div>

        {/* INI BAGIAN YANG KEk TUJUAN DAN AWAL */}
        {/* <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto" */}
          {/* /> */}
          {/* <div className="flexBetween flex-col"> */}
            {/* <div className='flex w-full flex-col'> */}
              {/* <div className="flexBetween w-full"> */}
                {/* <p className="regular-16 text-gray-20">1</p> */}
                {/* <p className="bold-16 text-green-50">48 min</p> */}
              {/* </div> */}
              {/* <p className="bold-20 mt-2">Visi</p> */}
            {/* </div> */}

            {/* <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Misi</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div> */}
          {/* </div> */}
        {/* </div> */}
    </section>
  )
}

export default Guide