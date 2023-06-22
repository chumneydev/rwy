import { z, reference, defineCollection } from "astro:content";

const docCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    category: reference("categories"),
    publishedDate: z.date(),
    updatedDate: z.date().optional(),
  }),
});

const categoryCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  docs: docCollection,
  categories: categoryCollection,
};
