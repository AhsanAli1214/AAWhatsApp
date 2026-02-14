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
  const capcutFeatures = await readFile("client/src/pages/CapCutFeaturesPage.tsx", "utf-8");
  const capcutDownload = await readFile("client/src/pages/CapCutDownloadPage.tsx", "utf-8");
  
  return [
    assert(capcutPage.includes('rel="canonical"'), "CapCut Pro page has canonical tag"),
    assert(capcutFeatures.includes('BreadcrumbList'), "CapCut Features page has BreadcrumbList schema"),
    assert(capcutDownload.includes('SoftwareApplication') || capcutFeatures.includes('SoftwareApplication'), "CapCut has SoftwareApplication schema"),
  ];
}

async function runChecks() {
  const results: CheckResult[] = [];
  results.push(...(await checkSitemapEntries()));
  results.push(...(await checkCanonicalTags()));
  results.push(...(await checkCapCutPages()));
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
