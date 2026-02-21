import { supabase } from "./supabase";

type BlogPostEntry = {
  slug?: string;
  publishedAt?: string;
};

async function loadBlogPosts(): Promise<BlogPostEntry[]> {
  return [];
}

export async function generateSitemap() {
  try {
    const baseUrl = "https://aa-mods.vercel.app";
    const today = new Date().toISOString().split("T")[0];

    // Fetch dynamic apps from Supabase
    const { data: apps } = await supabase.from('apps').select('slug');
    const appSlugs = apps?.map(a => a.slug) || [];

    // Static routes
    const staticRoutes = [
      { path: "/", priority: "1.0", changefreq: "daily" },
      { path: "/privacy", priority: "0.3", changefreq: "monthly" },
      { path: "/terms", priority: "0.3", changefreq: "monthly" },
      { path: "/support", priority: "0.5", changefreq: "weekly" },
    ];

    const appSubRoutes = ["", "/about", "/comparison", "/features", "/faq", "/download", "/blog"];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add static routes
    staticRoutes.forEach(route => {
      xml += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    });

    // Add dynamic app routes
    appSlugs.forEach(slug => {
      appSubRoutes.forEach(sub => {
        const path = sub === "" ? `/${slug}` : `/${slug}${sub}`;
        xml += `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${sub === "" ? "0.9" : "0.8"}</priority>
  </url>`;
      });
    });

    // Add blog posts for both blog entry points
    const blogPosts = await loadBlogPosts();
    if (Array.isArray(blogPosts)) {
      const blogPrefixes = ["/blog", "/aa-whatsapp/blog", "/aa-business/blog"];
      blogPosts.forEach(post => {
        if (post && post.slug) {
          const publishedDate = new Date(post.publishedAt || today);
          const lastmod = Number.isNaN(publishedDate.getTime())
            ? today
            : publishedDate.toISOString().split("T")[0];
          blogPrefixes.forEach(prefix => {
            xml += `
  <url>
    <loc>${baseUrl}${prefix}/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;
          });
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
