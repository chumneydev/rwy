import { z, reference, defineCollection } from "astro:content";

const docCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    category: reference("categories"),
    publishedDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
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
