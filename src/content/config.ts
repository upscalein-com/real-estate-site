import { defineCollection, z } from "astro:content";

const properties = defineCollection({
    type: 'content', 
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