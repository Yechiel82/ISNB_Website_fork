import { createClient } from 'contentful';
import { NewsEntry, NewsEntrySkeleton } from '@/types/news';

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

// Safe check to see if Contentful is configured
const isConfigured = !!(SPACE_ID && ACCESS_TOKEN);

const client = isConfigured
    ? createClient({
        space: SPACE_ID,
        accessToken: ACCESS_TOKEN,
    })
    : null;

export const getNewsItems = async (): Promise<NewsEntry[]> => {
    if (!client) {
        console.warn("Contentful client not configured. Check environment variables.");
        return [];
    }

    try {
        const response = await client.getEntries<NewsEntrySkeleton>({
            content_type: 'title',
            order: ['-fields.publishedDate'] as any,
        });
        return response.items;
    } catch (error) {
        console.error("Error fetching news items:", error);
        return [];
    }
};

export const getNewsItem = async (slug: string): Promise<NewsEntry | null> => {
    if (!client) {
        console.warn("Contentful client not configured.");
        return null;
    }

    try {
        const response = await client.getEntries<NewsEntrySkeleton>({
            content_type: 'title',
            'fields.slug': slug,
            limit: 1,
        } as any);

        return response.items[0] || null;
    } catch (error) {
        console.error(`Error fetching news item with slug ${slug}:`, error);
        return null;
    }
};
