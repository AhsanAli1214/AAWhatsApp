import { blogPosts } from "../../client/src/data/blogPosts";

export function generateSitemap() {
  try {
    const baseUrl = "https://aa-mods.vercel.app";
    const today = new Date().toISOString().split('T')[0];

    // Static routes with specific priorities
    const routes = [
      { path: "/", priority: "1.0", changefreq: "daily" },
      { path: "/aa-whatsapp", priority: "0.9", changefreq: "daily" },
      { path: "/aa-business", priority: "0.9", changefreq: "daily" },
      { path: "/aa-whatsapp/download", priority: "1.0", changefreq: "daily" },
      { path: "/aa-business/download", priority: "1.0", changefreq: "daily" },
      { path: "/blog", priority: "0.8", changefreq: "daily" },
      { path: "/aa-whatsapp/blog", priority: "0.8", changefreq: "daily" },
      { path: "/aa-business/blog", priority: "0.8", changefreq: "daily" },
      { path: "/support", priority: "0.5", changefreq: "weekly" },
      { path: "/privacy", priority: "0.3", changefreq: "monthly" },
      { path: "/terms", priority: "0.3", changefreq: "monthly" },
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add static routes
    routes.forEach(route => {
      xml += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    });

    // Add blog posts with highest priority
    if (Array.isArray(blogPosts)) {
      blogPosts.forEach(post => {
        if (post && post.slug) {
          xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.publishedAt || today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
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
