export interface AppSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface ModApp {
  slug: string;
  name: string;
  version: string;
  size: string;
  developer: string;
  android: string;
  updated: string;
  mediafire: string;
  category: string;
  tags: string[];
  description: string;
  features: string[];
  screenshots: string[];
  seo: AppSeo;
}

const appModules = import.meta.glob("../../../data/apps/*.json", {
  eager: true,
}) as Record<string, ModApp>;

const apps = Object.values(appModules).sort(
  (a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime(),
);

export const getAllApps = () => apps;

export const getAppBySlug = (slug: string) =>
  apps.find((app) => app.slug === slug) ?? null;

export const getCategories = () =>
  Array.from(new Set(apps.map((app) => app.category))).sort((a, b) =>
    a.localeCompare(b),
  );

export const getAppsByCategory = (category: string) =>
  apps.filter(
    (app) => app.category.toLowerCase() === decodeURIComponent(category).toLowerCase(),
  );

export const searchApps = (query: string) => {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return apps;
  }

  return apps.filter((app) => {
    const keywordBlob = [
      app.name,
      app.description,
      app.category,
      app.tags.join(" "),
      app.seo.keywords.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return keywordBlob.includes(normalized);
  });
};

export const getSimilarApps = (currentSlug: string, category: string) =>
  apps.filter((app) => app.slug !== currentSlug && app.category === category).slice(0, 4);
