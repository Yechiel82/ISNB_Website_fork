import Image from "next/image";

interface CommunityCardProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CommunityCard = ({ backgroundImage, title, subtitle, peopleJoined }: CommunityCardProps) => {
  return (
    <div className={`h-full w-full min-w-[300px] lg:min-w-[500px] ${backgroundImage} bg-cover bg-no-repeat rounded-2xl p-6 lg:px-20 lg:py-10 shadow-lg`}>
     <div className="flex h-full flex-col items-start justify-between">
      <div className="flexCenter gap-4 bg-black/30 p-4 rounded-xl backdrop-blur-sm">
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>
      <div className="flexCenter gap-6 mt-4">
        <p className="bold-16 md:bold-20 text-white drop-shadow-md">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Communities = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">

      <h2 className="bold-40 lg:bold-64 text-center mb-10 text-green-90" >Di Bawah Naungan Yayasan</h2>

      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto px-6 lg:h-[400px]">
        <CommunityCard
          backgroundImage="bg-bg-img-1"
          title="Indonesia Christian Cancer Community"
          subtitle="Surabaya"
          peopleJoined="Komunitas Penyintas Kanker"
        />
        <CommunityCard
          backgroundImage="bg-bg-img-2"
          title="Indonesia Christian Cancer Community"
          subtitle="Semarang"
          peopleJoined="Komunitas Penyintas Kanker"
        />
        <CommunityCard
          backgroundImage="bg-bg-img-3"
          title="Indonesia Christian Cancer Community"
          subtitle="Jakarta"
          peopleJoined="Komunitas Penyintas Kanker"
        />
        <CommunityCard
          backgroundImage="bg-bg-img-4"
          title="Indonesia Christian Cancer Community"
          subtitle="Yogyakarta"
          peopleJoined="Komunitas Penyintas Kanker"
        />
         <CommunityCard
          backgroundImage="bg-bg-img-5"
          title="Indonesia Christian Cancer Community"
          subtitle="Manado"
          peopleJoined="Komunitas Penyintas Kanker"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-20 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Merasa Hilang</strong> dan Tak Tahu Kemana?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            <strong>Indonesia Christian Cancer Community </strong>hadir pada beragam kota dan siap untuk memperlengkapi anda dalam pengenalan Tuhan dengan benar.
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Communities
