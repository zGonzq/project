import { defineCollection, z } from 'astro:content';
import { g } from 'framer-motion/client';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    githubUrl: z.string(),
  }),
});

export const collections = {
  projects,
};