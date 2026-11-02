import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      description: z.string().max(200),
      publishDate: z.coerce.date(),
      author: z.string().default('Staff'),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      thumbnail: image().optional(),
    }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().max(200).optional(),
  }),
});

export const collections = { blog, about };