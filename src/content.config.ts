import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    appStoreUrl: z.string(),
    icon: z.string(),
    category: z.string(),
    status: z.enum(['live', 'coming-soon']),
    color: z.string(),
    problem: z.string(),
    steps: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    pricing: z.array(
      z.object({
        plan: z.string(),
        price: z.string(),
        features: z.array(z.string()),
      })
    ),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    relatedApp: z.string().optional(),
  }),
});

export const collections = { apps, blog };
