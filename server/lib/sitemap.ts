import { APP_DETAIL_SLUGS } from "../../shared/downloadAssets";

type SitemapRoute = {
  path: string;
  priority: string;
  changefreq: "daily" | "weekly" | "monthly";
};

const DEFAULT_SITE_URL = "https://aa-mods.vercel.app";

function getSiteUrl(req?: any) {
  if (req) {
    const host = req.get('host');
    const protocol = req.protocol;
    return `${protocol}://${host}`;
  }
  const fromEnv = process.env.SITE_URL || process.env.PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
  const raw = fromEnv || vercelUrl || DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function generateSitemap(req?: any) {
  const baseUrl = getSiteUrl(req);
  const today = new Date().toISOString().split("T")[0];

  const routes: SitemapRoute[] = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/terms-of-service", priority: "0.5", changefreq: "monthly" },
    { path: "/privacy-policy", priority: "0.5", changefreq: "monthly" },
    ...APP_DETAIL_SLUGS.map((slug) => ({
      path: `/app/${slug}`,
      priority: "0.9",
      changefreq: "weekly" as const,
    })),
  ];

  const uniqueRoutes = Array.from(new Map(routes.map((route) => [route.path, route])).values());

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  uniqueRoutes.forEach((route) => {
    xml += `\n  <url>`;
    xml += `\n    <loc>${escapeXml(`${baseUrl}${route.path}`)}</loc>`;
    xml += `\n    <lastmod>${today}</lastmod>`;
    xml += `\n    <changefreq>${route.changefreq}</changefreq>`;
    xml += `\n    <priority>${route.priority}</priority>`;
    xml += `\n  </url>`;
  });

  xml += "\n</urlset>";
  return xml;
}
