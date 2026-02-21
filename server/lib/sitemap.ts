import { APP_DOWNLOAD_REDIRECTS } from "../../shared/downloadAssets";

type BlogPostEntry = {
  slug?: string;
  publishedAt?: string;
};

async function loadBlogPosts(): Promise<BlogPostEntry[]> {
  try {
    // Attempt to load blog posts dynamically if the file exists
    const module = await import("../../client/src/data/blogPosts").catch(() => ({ blogPosts: [] }));
    const posts = (module as { blogPosts?: BlogPostEntry[] }).blogPosts;
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.warn("Sitemap blog post load failed, using static routes only.", error);
    return [];
  }
}

export async function generateSitemap() {
  try {
    const baseUrl = "https://aa-mods.vercel.app";
    const today = new Date().toISOString().split("T")[0];

    // Get all app slugs from downloadAssets
    const appSlugs = Object.keys(APP_DOWNLOAD_REDIRECTS);
    
    // Core static routes
    const routes = [
      { path: "/", priority: "1.0", changefreq: "daily" },
      { path: "/terms-of-service", priority: "0.3", changefreq: "monthly" },
      { path: "/privacy-policy", priority: "0.3", changefreq: "monthly" },
    ];

    // Dynamically add app detail pages
    appSlugs.forEach(slug => {
      routes.push({ path: `/app/${slug}`, priority: "0.9", changefreq: "weekly" });
    });

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

    // Add routes
    routes.forEach(route => {
      xml += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    });

    // Add blog posts if any
    const blogPosts = await loadBlogPosts();
    if (Array.isArray(blogPosts)) {
      blogPosts.forEach(post => {
        if (post && post.slug) {
          const publishedDate = new Date(post.publishedAt || today);
          const lastmod = Number.isNaN(publishedDate.getTime())
            ? today
            : publishedDate.toISOString().split("T")[0];
          
          xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
        }
      });
    }

    xml += "\n</urlset>";
    return xml.trim();
  } catch (error) {
    console.error("Error in generateSitemap:", error);
    throw error;
  }
}