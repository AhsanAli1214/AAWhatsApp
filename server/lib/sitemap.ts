type BlogPostEntry = {
  slug?: string;
  publishedAt?: string;
};

async function loadBlogPosts(): Promise<BlogPostEntry[]> {
  try {
    const module = await import("../../client/src/data/blogPosts");
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

    // Static routes with specific priorities
    const routes = [
      { path: "/", priority: "1.0", changefreq: "daily" },
      { path: "/aa-whatsapp", priority: "0.9", changefreq: "daily" },
      { path: "/aa-whatsapp/features", priority: "0.8", changefreq: "weekly" },
      { path: "/aa-whatsapp/about", priority: "0.7", changefreq: "monthly" },
      { path: "/aa-whatsapp/comparison", priority: "0.8", changefreq: "weekly" },
      { path: "/aa-whatsapp/faq", priority: "0.8", changefreq: "daily" },
      { path: "/aa-whatsapp/download", priority: "1.0", changefreq: "daily" },
      { path: "/aa-whatsapp/blog", priority: "0.8", changefreq: "daily" },
      { path: "/blog", priority: "0.8", changefreq: "daily" },
      { path: "/sitemap", priority: "0.3", changefreq: "monthly" },
      
      { path: "/aa-business", priority: "0.9", changefreq: "daily" },
      { path: "/aa-business/about", priority: "0.7", changefreq: "monthly" },
      { path: "/aa-business/features", priority: "0.8", changefreq: "weekly" },
      { path: "/aa-business/download", priority: "1.0", changefreq: "daily" },
      { path: "/aa-business/comparison", priority: "0.8", changefreq: "weekly" },
      { path: "/aa-business/faq", priority: "0.8", changefreq: "daily" },
      { path: "/aa-business/blog", priority: "0.8", changefreq: "daily" },
      { path: "/aa-business-whatsapp", priority: "0.7", changefreq: "monthly" },
      { path: "/business-download", priority: "0.7", changefreq: "monthly" },
      { path: "/faq", priority: "0.7", changefreq: "weekly" },
      { path: "/download", priority: "0.8", changefreq: "daily" },
      
      { path: "/privacy", priority: "0.3", changefreq: "monthly" },
      { path: "/terms", priority: "0.3", changefreq: "monthly" },
      { path: "/support", priority: "0.5", changefreq: "weekly" },
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
