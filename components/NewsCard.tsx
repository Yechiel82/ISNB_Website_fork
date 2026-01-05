import Image from 'next/image';
import Link from 'next/link';
import { NewsEntry } from '@/types/news';
import { Asset } from 'contentful';

interface NewsCardProps {
    news: NewsEntry;
}

const NewsCard = ({ news }: NewsCardProps) => {
    const { title, slug, publishedDate } = news.fields;
    // Cast author to any or specific Entry type to avoid 'never' issue
    const author = news.fields.author as any;
    const thumbnail = news.fields.thumbnail as unknown as Asset | undefined;

    // Contentful images start with //, so we prepend https:
    const thumbnailFile = thumbnail?.fields?.file as unknown as { url: string } | undefined;
    const imageUrl = thumbnailFile?.url
        ? `https:${thumbnailFile.url}`
        : '/satuvisibagiindonesia-removebg.png'; // Fallback to logo or placeholder

    // Extract author details safely
    const authorName = (author?.fields?.name as unknown as string) || 'Admin';
    const authorAvatar = author?.fields?.avatar as unknown as Asset | undefined;
    const authorAvatarFile = authorAvatar?.fields?.file as unknown as { url: string } | undefined;
    const authorImageUrl = authorAvatarFile?.url
        ? `https:${authorAvatarFile.url}`
        : '/person-1.png';

    return (
        <Link href={`/news/${slug}`} className="flex w-full flex-col gap-4 rounded-3xl border border-gray-200 p-5 transition-all hover:-translate-y-1 bg-white shadow-sm hover:shadow-lg">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-gray-100">
                <Image
                    src={imageUrl}
                    alt={title as unknown as string}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col gap-2 h-full justify-between">
                <div>
                    <h3 className="bold-20 capitalize line-clamp-2 mb-2">{title as unknown as string}</h3>

                    <div className="flex items-center gap-2 mb-2">
                        <Image src={authorImageUrl} alt="author" width={24} height={24} className="rounded-full bg-gray-200" />
                        <span className="regular-14 text-gray-50">{authorName}</span>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="regular-14 text-gray-30">
                        {publishedDate ? new Date(publishedDate as unknown as string).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                    </span>
                    <span className="text-green-50 regular-14 font-bold group-hover:underline">Read more</span>
                </div>
            </div>
        </Link>
    )
}

export default NewsCard;
