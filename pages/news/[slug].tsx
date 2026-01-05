import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getNewsItem, getNewsItems } from '@/lib/contentful';
import { NewsEntry, NewsFields } from '@/types/news';
import { Asset } from 'contentful';

interface NewsDetailPageProps {
    newsItem: NewsEntry | null;
}

const RichTextOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const { file, title } = node.data.target.fields;
            const imageUrl = file?.url ? `https:${file.url}` : '';
            if (!imageUrl) return null;
            return (
                <div className="my-8 relative h-[400px] w-full rounded-2xl overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title || "Embedded Image"}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        },
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="regular-16 text-gray-50 mb-6 leading-relaxed">{children}</p>,
        [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="bold-32 text-green-50 mt-10 mb-4">{children}</h2>,
        [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="bold-24 text-gray-90 mt-8 mb-4">{children}</h3>,
        [BLOCKS.QUOTE]: (node: any, children: any) => (
            <blockquote className="border-l-4 border-green-50 pl-4 italic text-gray-50 my-6">
                {children}
            </blockquote>
        ),
    },
};

export default function NewsDetailPage({ newsItem }: NewsDetailPageProps) {
    if (!newsItem) {
        return (
            <div className="flexCenter min-h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    // Explicitly access fields. Note: Types might be inferred loosely by contentful sdk
    const fields = newsItem.fields;
    const title = fields.title as unknown as string;
    const author = fields.author as unknown as string;
    const publishedDate = fields.publishedDate as unknown as string;
    const content = fields.content as any; // Document type matches but casting avoids generic mismatch
    const thumbnail = fields.thumbnail as unknown as Asset | undefined;
    const authorImage = fields.authorImage as unknown as Asset | undefined;

    // access nested contentful asset fields
    const thumbnailFile = thumbnail?.fields?.file as unknown as { url: string } | undefined;
    const imageUrl = thumbnailFile?.url ? `https:${thumbnailFile.url}` : null;

    const authorImageFile = authorImage?.fields?.file as unknown as { url: string } | undefined;
    const authorImageUrl = authorImageFile?.url
        ? `https:${authorImageFile.url}`
        : '/person-1.png';

    return (
        <>
            <Head>
                <title>{title} | Satu Visi Bagi Indonesia</title>
            </Head>

            <Navbar />

            <main className="max-container padding-container relative z-30 py-12">
                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-10 text-center">
                        <div className="flexCenter gap-4 mb-4 text-gray-30 regular-14">
                            <span>{publishedDate ? new Date(publishedDate).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : ''}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-30"></span>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={authorImageUrl}
                                    alt={author}
                                    width={24}
                                    height={24}
                                    className="rounded-full bg-gray-200"
                                />
                                <span>By {author}</span>
                            </div>
                        </div>
                        <h1 className="bold-40 lg:bold-64 mb-8 leading-tight">{title}</h1>

                        {imageUrl && (
                            <div className="relative h-[300px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg">
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="bg-white p-6 lg:p-10 rounded-3xl shadow-sm border border-gray-100">
                        <div className="prose max-w-none">
                            {content && documentToReactComponents(content, RichTextOptions)}
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const newsItems = await getNewsItems();

    // Generate paths for existing news
    const paths = newsItems.map((item) => ({
        params: { slug: item.fields.slug as unknown as string },
    }));

    return {
        paths,
        fallback: 'blocking', // Important for ISR: allow new pages to be generated on request
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const newsItem = await getNewsItem(slug);

    if (!newsItem) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            newsItem,
        },
        revalidate: 60,
    };
};
