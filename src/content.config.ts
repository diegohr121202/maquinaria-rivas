import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de blog: artículos en Markdown con frontmatter tipado.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Equipo Maquinaria Rivas'),
    heroImage: z.string(),        // ruta en /public (ej. /assets/photos/…)
    heroAlt: z.string(),
    category: z.string().default('Guías'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
