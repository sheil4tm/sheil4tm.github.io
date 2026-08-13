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
    rating: z
      .number()
      .min(0)
      .max(5)
      .refine((value) => value % 0.5 === 0, {
        message: 'rating must be in steps of 0.5 (e.g. 3, 3.5, 4)',
      })
      .optional(),
  }),
});

export const collections = { posts };
