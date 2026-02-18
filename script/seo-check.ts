import { readFile } from "node:fs/promises";
import { blogPosts } from "../client/src/data/blogPosts";
import { generateSitemap } from "../server/lib/sitemap";

type CheckResult = {
  name: string;
  passed: boolean;
  details?: string;
};

function assert(condition: boolean, name: string, details?: string): CheckResult {
  return { name, passed: condition, details };
}

async function checkSitemapEntries(): Promise<CheckResult[]> {
  const xml = await generateSitemap();
  const missing: string[] = [];
  blogPosts.forEach((post) => {
    const blogUrl = `https://aa-mods.vercel.app/blog/${post.slug}`;
    const aaBlogUrl = `https://aa-mods.vercel.app/aa-whatsapp/blog/${post.slug}`;
    if (!xml.includes(`<loc>${blogUrl}</loc>`)) {
      missing.push(blogUrl);
    }
    if (!xml.includes(`<loc>${aaBlogUrl}</loc>`)) {
      missing.push(aaBlogUrl);
    }
  });
  return [
    assert(
      missing.length === 0,
      "Sitemap includes blog post URLs",
      missing.length ? `Missing: ${missing.join(", ")}` : undefined
    ),
  ];
}

async function checkStaticSitemapCriticalRoutes(): Promise<CheckResult[]> {
  const staticSitemap = await readFile("client/public/sitemap.xml", "utf-8");
  const requiredRoutes = [
    "https://aa-mods.vercel.app/capcut-pro",
    "https://aa-mods.vercel.app/capcut-pro/features",
    "https://aa-mods.vercel.app/capcut-pro/download",
    "https://aa-mods.vercel.app/remini-mod",
    "https://aa-mods.vercel.app/remini-mod/features",
    "https://aa-mods.vercel.app/remini-mod/download",
    "https://aa-mods.vercel.app/youtube-premium-mod",
    "https://aa-mods.vercel.app/youtube-premium-mod/features",
    "https://aa-mods.vercel.app/youtube-premium-mod/install",
    "https://aa-mods.vercel.app/aa-business/comparison",
  ];

  const missing = requiredRoutes.filter((url) => !staticSitemap.includes(`<loc>${url}</loc>`));

  return [
    assert(
      missing.length === 0,
      "Static sitemap.xml includes CapCut, Remini, YouTube, and Business comparison routes",
      missing.length ? `Missing: ${missing.join(", ")}` : undefined
    ),
  ];
}

async function checkCanonicalTags(): Promise<CheckResult[]> {
  const blogPage = await readFile("client/src/pages/Blog.tsx", "utf-8");
  const blogPostPage = await readFile("client/src/pages/BlogPost.tsx", "utf-8");
  return [
    assert(
      blogPage.includes('rel="canonical"'),
      "Blog listing page has canonical tag"
    ),
    assert(
      blogPage.includes("og:url"),
      "Blog listing page includes og:url metadata"
    ),
    assert(
      blogPostPage.includes('rel="canonical"'),
      "Blog post page has canonical tag"
    ),
    assert(
      blogPostPage.includes("BreadcrumbList"),
      "Blog post page includes breadcrumb structured data"
    ),
  ];
}

async function checkRobots(): Promise<CheckResult[]> {
  const routesFile = await readFile("server/routes.ts", "utf-8");
  return [
    assert(
      routesFile.includes("Sitemap: https://aa-mods.vercel.app/sitemap.xml"),
      "robots.txt references sitemap.xml"
    ),
  ];
}

async function checkCapCutPages(): Promise<CheckResult[]> {
  const capcutPage = await readFile("client/src/pages/CapCutProPage.tsx", "utf-8");
  const capcutFeaturesPage = await readFile("client/src/pages/CapCutFeaturesPage.tsx", "utf-8");
  const capcutDownloadPage = await readFile("client/src/pages/CapCutDownloadPage.tsx", "utf-8");
  const reminiPage = await readFile("client/src/pages/ReminiModPage.tsx", "utf-8");
  const reminiFeaturesPage = await readFile("client/src/pages/ReminiFeaturesPage.tsx", "utf-8");
  const reminiDownloadPage = await readFile("client/src/pages/ReminiDownloadPage.tsx", "utf-8");

  return [
    assert(capcutPage.includes('rel="canonical"'), "CapCut Pro page has canonical tag"),
    assert(capcutFeaturesPage.includes('rel="canonical"'), "CapCut Features page has canonical tag"),
    assert(capcutDownloadPage.includes('rel="canonical"'), "CapCut Download page has canonical tag"),
    assert(reminiPage.includes('rel="canonical"'), "Remini Mod page has canonical tag"),
    assert(reminiFeaturesPage.includes('rel="canonical"'), "Remini Features page has canonical tag"),
    assert(reminiDownloadPage.includes('rel="canonical"'), "Remini Download page has canonical tag"),
    assert(capcutPage.includes("og:url"), "CapCut Pro page includes og:url metadata"),
    assert(capcutFeaturesPage.includes("og:url"), "CapCut Features page includes og:url metadata"),
    assert(capcutDownloadPage.includes("og:url"), "CapCut Download page includes og:url metadata"),
    assert(reminiPage.includes("og:url"), "Remini Mod page includes og:url metadata"),
    assert(reminiFeaturesPage.includes("og:url"), "Remini Features page includes og:url metadata"),
    assert(reminiDownloadPage.includes("og:url"), "Remini Download page includes og:url metadata"),
  ];
}

async function checkYouTubeAndBusinessPages(): Promise<CheckResult[]> {
  const youtubeHomePage = await readFile("client/src/pages/YouTubePremiumPage.tsx", "utf-8");
  const youtubeFeaturesPage = await readFile("client/src/pages/YouTubePremiumFeaturesPage.tsx", "utf-8");
  const youtubeInstallPage = await readFile("client/src/pages/YouTubePremiumInstallPage.tsx", "utf-8");
  const businessComparisonPage = await readFile("client/src/pages/business/BusinessComparison.tsx", "utf-8");

  return [
    assert(youtubeHomePage.includes('rel="canonical"'), "YouTube Premium page has canonical tag"),
    assert(youtubeFeaturesPage.includes('rel="canonical"'), "YouTube Premium Features page has canonical tag"),
    assert(youtubeInstallPage.includes('rel="canonical"'), "YouTube Premium Install page has canonical tag"),
    assert(youtubeHomePage.includes("og:url"), "YouTube Premium page includes og:url metadata"),
    assert(youtubeFeaturesPage.includes("og:url"), "YouTube Premium Features page includes og:url metadata"),
    assert(youtubeInstallPage.includes("og:url"), "YouTube Premium Install page includes og:url metadata"),
    assert(youtubeHomePage.includes("name=\"description\""), "YouTube Premium page has description meta"),
    assert(youtubeFeaturesPage.includes("name=\"description\""), "YouTube Premium Features page has description meta"),
    assert(youtubeInstallPage.includes("name=\"description\""), "YouTube Premium Install page has description meta"),
    assert(businessComparisonPage.includes('rel="canonical"'), "Business Comparison page has canonical tag"),
    assert(businessComparisonPage.includes("og:url"), "Business Comparison page includes og:url metadata"),
    assert(businessComparisonPage.includes("name=\"description\""), "Business Comparison page has description meta"),
  ];
}

async function runChecks() {
  const results: CheckResult[] = [];
  results.push(...(await checkSitemapEntries()));
  results.push(...(await checkStaticSitemapCriticalRoutes()));
  results.push(...(await checkCanonicalTags()));
  results.push(...(await checkCapCutPages()));
  results.push(...(await checkYouTubeAndBusinessPages()));
  results.push(...(await checkRobots()));

  const failed = results.filter((result) => !result.passed);
  results.forEach((result) => {
    const status = result.passed ? "PASS" : "FAIL";
    const suffix = result.details ? ` (${result.details})` : "";
    console.log(`[${status}] ${result.name}${suffix}`);
  });

  if (failed.length > 0) {
    process.exitCode = 1;
  }
}

runChecks();
