import Image from 'next/image'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row relative" >

      <div className="relative z-20 flex flex-1 flex-col xl:w-3/5">
        <h1 className="bold-52 lg:bold-88 text-green-90" >Yayasan Satu Visi Bagi Indonesia</h1>

        <p className="regular-16 mt-6 text-gray-50 xl:max-w-[600px] bg-white bg-opacity-80 p-6 rounded-2xl shadow-sm border border-gray-10 leading-relaxed">
          Yayasan Satu Visi Bagi Indonesia adalah lembaga nirlaba, nonpolitik, dan independen.
          Memfokuskan pada bidang keagamaan, sosial, dan kemanusiaan, yayasan ini bertujuan
          membangun fondasi kuat dalam Iman Kristen untuk menghadapi tantangan hidup.
          Didirikan oleh <strong>Pdt. Dr. Erika Fanny</strong> dan <strong>Pdt. Dr. Arianto</strong>.
        </p>

        <div className="my-11 flex flex-wrap gap-5 items-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50/10 rounded-full border border-green-50/20">
            <span className="regular-16 lg:regular-20 text-green-50 font-semibold">Berdiri Sejak 2017</span>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center xl:justify-end">
        <div className="relative w-full max-w-[500px] aspect-square">
            <div className="absolute inset-0 bg-green-50 rounded-full opacity-10 blur-3xl transform translate-x-10 translate-y-10"></div>
             <Image
                src="/satuvisibagiindonesia-removebg.png"
                alt="Logo Yayasan Satu Visi Bagi Indonesia"
                width={500}
                height={500}
                className="relative z-10 object-contain drop-shadow-xl"
                priority
             />
        </div>
      </div>
    </section>
  )
}

export default Hero
