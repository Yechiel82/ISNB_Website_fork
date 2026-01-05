import { Document } from '@contentful/rich-text-types';
import { Asset, Entry, EntrySkeletonType } from 'contentful';

export interface AuthorFields {
    name: string;
    avatar?: Asset;
}

export type AuthorSkeleton = EntrySkeletonType<AuthorFields, "author">;

export interface NewsFields {
    title: string;
    slug: string;
    author: Entry<AuthorSkeleton>; // Reference to Author entry
    publishedDate: string; // ISO date string
    thumbnail?: Asset;
    content: Document;
}

export type NewsEntrySkeleton = EntrySkeletonType<NewsFields, "title">;
export type NewsEntry = Entry<NewsEntrySkeleton>;
