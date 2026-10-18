import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // 1. Imported the official loader

const properties = defineCollection({
    // 2. Added the glob loader targeting your markdown property files
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/properties" }), 
    schema: z.object({
        title: z.string(),
        price: z.string(),
        location: z.string(),
        bedrooms: z.number(),
        bathrooms: z.number(),
        area: z.number().optional(),
        status: z.enum(['For Sale', 'For Rent', 'Sold']),
        image: z.string(),
        gallery: z.array(z.string()).optional(),
        agent: z.string().optional(),
    }),
});

export const collections = {
    properties,
};
