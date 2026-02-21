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

    // Static routes mapped from client/src/App.tsx (+ sitemap.xml endpoint)
    const staticRoutes = [
      { path: "/", priority: "1.0", changefreq: "daily" },
      { path: "/aa-whatsapp", priority: "0.9", changefreq: "daily" },
      { path: "/aa-business", priority: "0.9", changefreq: "daily" },
      { path: "/capcut-pro", priority: "0.9", changefreq: "daily" },
      { path: "/remini-mod", priority: "0.9", changefreq: "daily" },
      { path: "/youtube-premium-mod", priority: "0.9", changefreq: "daily" },
      { path: "/privacy", priority: "0.3", changefreq: "monthly" },
      { path: "/terms", priority: "0.3", changefreq: "monthly" },
      { path: "/support", priority: "0.5", changefreq: "weekly" },
    ];

    const appSlugs = ["aa-whatsapp", "aa-business", "capcut-pro", "remini-mod", "youtube-premium-mod"];
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
        // Skip duplicate root paths if already in staticRoutes
        if (sub !== "" || !staticRoutes.find(r => r.path === `/${slug}`)) {
          xml += `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${sub === "" ? "0.9" : "0.8"}</priority>
  </url>`;
        }
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
