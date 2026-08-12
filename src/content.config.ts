import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SECTIONS } from './lib/sections';

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/posts',
    // Folders are for local organization only — URL slug stays the filename.
    generateId: ({ entry }) =>
      entry
        .split(/[/\\]/)
        .pop()!
        .replace(/\.[^.]+$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    section: z.enum(SECTIONS),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    excerpt: z.string(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    pinned: z.boolean().default(false),
  }),
});

export const collections = { posts };
