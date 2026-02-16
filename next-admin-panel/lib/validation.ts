import { z } from "zod";

const externalUrl = z
  .string()
  .url()
  .refine((url) => /^https:\/\//.test(url), "Only https links are allowed");

const faqSchema = z.object({
  question: z.string().min(4).max(160),
  answer: z.string().min(4).max(1000),
});

export const appSchema = z.object({
  appName: z.string().min(2).max(120),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  appConfigKey: z.string().min(2).max(80),
  version: z.string().min(1).max(30),
  size: z.string().min(1).max(20),
  developer: z.string().min(1).max(80),
  androidVersion: z.string().min(1).max(30),
  downloadLinks: z.array(externalUrl).min(1),
  features: z.array(z.string().min(2).max(180)).min(1),
  screenshots: z.array(externalUrl),
  changelog: z.string().min(2).max(5000),
  seo: z.object({
    title: z.string().min(10).max(80),
    description: z.string().min(40).max(160),
    keywords: z.array(z.string().min(2).max(40)),
  }),
  categories: z.array(z.string().min(2).max(40)),
  tags: z.array(z.string().min(2).max(40)),
  description: z.string().min(20).max(10000),
  faqs: z.array(faqSchema),
  howToInstall: z.string().optional(),
  disclaimer: z.string().optional(),
  status: z.enum(["draft", "published"]),
});

export type AppPayload = z.infer<typeof appSchema>;
