import { GetStaticProps } from 'next';
import Seo from '@/components/Seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { getNewsItems } from '@/lib/contentful';
import { NewsEntry } from '@/types/news';

interface NewsPageProps {
    news: NewsEntry[];
}

export default function NewsPage({ news }: NewsPageProps) {
    return (
        <>
            <Seo
                title="Berita & Artikel"
                description="Berita dan artikel terbaru dari Yayasan Satu Visi Bagi Indonesia. Dapatkan informasi terkini seputar kegiatan sosial dan kemanusiaan kami."
                url="https://yayasansatuvisibagiindonesia.com/news" // Assuming this is the real domain, or uses a variable if available
            />

            <Navbar />

            <main className="flexBetween max-container padding-container relative z-30 py-12 flex-col">
                <div className="w-full flex flex-col gap-10">

                    <div className="flex flex-col gap-4">
                        <div className='relative pl-5 border-l-4 border-green-50'>
                            <h2 className="bold-40 lg:bold-64">Berita Terbaru</h2>
                            <p className="regular-16 text-gray-30 mt-2">Informasi dan kegiatan terbaru dari kami</p>
                        </div>
                    </div>

                    {news.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl">
                            <p className="bold-20 text-gray-50 mb-2">Belum ada berita.</p>
                            <p className="regular-16 text-gray-30 text-center max-w-md">
                                Saat ini belum ada artikel yang diterbitkan. Silakan kembali lagi nanti atau cek Contentful Anda.
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {news.map((item) => (
                                <NewsCard key={item.sys.id} news={item} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const news = await getNewsItems();

    return {
        props: {
            news,
        },
        revalidate: 60, // ISR: Revalidate every 60 seconds to update content without full rebuild
    };
};
