import { Document } from '@contentful/rich-text-types';
import { Asset, Entry, EntrySkeletonType } from 'contentful';

export interface NewsFields {
    title: string;
    slug: string;
    author: string;
    publishedDate: string; // ISO date string
    authorImage?: Asset;
    thumbnail?: Asset;
    content: Document;
}

export type NewsEntrySkeleton = EntrySkeletonType<NewsFields, "title">;
export type NewsEntry = Entry<NewsEntrySkeleton>;
