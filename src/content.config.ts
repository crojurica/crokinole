import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Vijesti: svaka vijest je jedna .md datoteka u src/content/vijesti/.
const vijesti = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vijesti' }),
  schema: z.object({
    naslov: z.string(),
    datum: z.coerce.date(),
    sazetak: z.string(),
    skica: z.boolean().default(false), // true = ne objavljuje se
  }),
});

export const collections = { vijesti };
