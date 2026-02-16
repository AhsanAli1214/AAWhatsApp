export type AppSectionKey =
  | "description"
  | "features"
  | "screenshots"
  | "changelog"
  | "download"
  | "faqs"
  | "how-to-install"
  | "disclaimer";

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
}

export interface AppFaq {
  question: string;
  answer: string;
}

export interface AppRecord {
  id: string;
  appName: string;
  slug: string;
  appConfigKey: string;
  version: string;
  size: string;
  developer: string;
  androidVersion: string;
  downloadLinks: string[];
  features: string[];
  screenshots: string[];
  changelog: string;
  seo: SeoConfig;
  categories: string[];
  tags: string[];
  faqs: AppFaq[];
  description: string;
  howToInstall?: string;
  disclaimer?: string;
  status: "draft" | "published";
  downloads: number;
  updatedAt: string;
  createdAt: string;
}
