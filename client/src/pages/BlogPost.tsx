import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link, useLocation, useParams } from "wouter";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, BookOpen, Download, Settings, HelpCircle, RefreshCw, Scale, ChevronRight, ChevronDown, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getBlogPostBySlug, getRelatedPosts, BlogPost as BlogPostType } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";

const categoryIcons: Record<string, React.ReactNode> = {
  download: <Download className="w-4 h-4" />,
  features: <Settings className="w-4 h-4" />,
  comparison: <Scale className="w-4 h-4" />,
  guide: <BookOpen className="w-4 h-4" />,
  troubleshooting: <HelpCircle className="w-4 h-4" />,
  update: <RefreshCw className="w-4 h-4" />,
};

const categoryColors: Record<string, string> = {
  download: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  features: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  comparison: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  guide: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  troubleshooting: "bg-red-500/20 text-red-400 border-red-500/30",
  update: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
};

function RelatedPostCard({ post, basePath }: { post: BlogPostType; basePath: string }) {
  return (
    <Link href={`${basePath}/${post.slug}`}>
      <Card className="bg-card/50 border-border/50 hover-elevate cursor-pointer group h-full">
        <CardContent className="p-4">
          <Badge variant="outline" className={`${categoryColors[post.category]} border mb-3 text-xs`}>
            {categoryIcons[post.category]}
            <span className="ml-1">{post.category}</span>
          </Badge>
          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {post.title}
          </h4>
          <p className="text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const [location] = useLocation();
  const path = location.split("?")[0];
  let basePath = "/blog";
  if (path.startsWith("/aa-whatsapp/blog")) {
    basePath = "/aa-whatsapp/blog";
  } else if (path.startsWith("/aa-business/blog")) {
    basePath = "/aa-business/blog";
  }
  const post = getBlogPostBySlug(params.slug || "");
  const relatedPosts = post ? getRelatedPosts(post.slug, 3) : [];

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Link href={basePath}>
            <Button data-testid="button-back-to-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = `https://aa-mods.vercel.app${basePath}/${post.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        });
      } catch (err) {
        navigator.clipboard.writeText(url);
      }
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{post.metaTitle} | Ultimate AA WhatsApp Guide 2026</title>
        <meta name="description" content={`${post.metaDescription} Read the definitive 2026 guide by AA Mods specialists.`} />
        <meta
          name="keywords"
          content={`${post.keywords.join(", ")}, AA WhatsApp, WhatsApp mod guide, WhatsApp mod tutorial, WhatsApp privacy tips, Anti-Ban WhatsApp, 2026 update`}
        />
        <link rel="canonical" href={`https://aa-mods.vercel.app${basePath}/${post.slug}`} />
        <meta property="og:title" content={`${post.metaTitle} – AA Mods Official`} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://aa-mods.vercel.app${basePath}/${post.slug}`} />
        <meta property="og:image" content={`https://aa-mods.vercel.app/blog-og/${post.slug}.png`} />
        <meta property="og:site_name" content="AA Mods" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:section" content={post.category} />
        {post.keywords.map((keyword) => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}
        <meta property="article:author" content="AA Mods Security Team" />
        <meta name="robots" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:site" content="@AAModsOfficial" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.metaDescription,
            "keywords": post.keywords.join(", "),
            "articleSection": post.category,
            "image": `https://aa-mods.vercel.app/blog-og/${post.slug}.png`,
            "author": {
              "@type": "Organization",
              "name": "AA Mods Security Team",
                "url": `https://aa-mods.vercel.app${basePath}`
            },
            "publisher": {
              "@type": "Organization",
              "name": "AA Mods",
              "logo": {
                "@type": "ImageObject",
                "url": "https://aa-mods.vercel.app/favicon.png"
              }
            },
            "datePublished": post.publishedAt,
            "dateModified": post.publishedAt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://aa-mods.vercel.app${basePath}/${post.slug}`
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://aa-mods.vercel.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `https://aa-mods.vercel.app${basePath}`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://aa-mods.vercel.app${basePath}/${post.slug}`
              }
            ]
          })}
        </script>
        {post.faqs && post.faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": post.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      <div className="fixed inset-0 hero-gradient pointer-events-none z-0" />
      <Navigation />

      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
              <Link href="/">
                <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={basePath}>
                <span className="hover:text-primary transition-colors cursor-pointer">Blog</span>
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
            </nav>

            <article className="max-w-4xl mx-auto">
              <header className="mb-10">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <Badge variant="outline" className={`${categoryColors[post.category]} border`}>
                    {categoryIcons[post.category]}
                    <span className="ml-1.5">{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
                  </Badge>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-display mb-6 leading-tight" data-testid="text-post-title">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min read
                  </span>
                  <Button variant="ghost" size="sm" onClick={handleShare} className="ml-auto" data-testid="button-share">
                    <Share2 className="w-4 h-4 mr-1.5" />
                    Share
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.keywords.slice(0, 5).map((keyword) => (
                    <Badge key={keyword} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </header>

              <div className="prose prose-invert prose-lg max-w-none mb-12
                prose-headings:font-display prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-foreground
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:marker:text-primary
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-muted prose-pre:border prose-pre:border-border
                prose-table:hidden
                prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:border prose-th:border-border prose-th:text-foreground
                prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-border prose-td:text-muted-foreground
                prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r
              ">
                <ReactMarkdown
                  components={{
                    table: ({ children }) => (
                      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                        {children}
                      </div>
                    ),
                    thead: () => null,
                    tbody: ({ children }) => <>{children}</>,
                    tr: ({ children }) => (
                      <div className="bg-secondary/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col gap-4 hover:border-primary/40 hover:bg-secondary/40 transition-all duration-300 shadow-xl group/card">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover/card:scale-110 transition-transform">
                            <Settings className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary/70">System Info</span>
                        </div>
                        <div className="space-y-4">
                          {children}
                        </div>
                      </div>
                    ),
                    td: ({ children, index }: any) => (
                      <div className="flex justify-between items-center gap-6 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{index === 0 ? "Specification" : "Detail"}</span>
                        <span className={`text-base font-black ${index === 1 ? "text-primary text-glow" : "text-foreground"}`}>{children}</span>
                      </div>
                    )
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {post.faqs && post.faqs.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    Frequently Asked Questions
                  </h2>
                  <Card className="bg-card/50 border-border/50">
                    <Accordion type="single" collapsible className="w-full">
                      {post.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`} className="border-border/50">
                          <AccordionTrigger className="px-6 text-left hover:no-underline hover:text-primary" data-testid={`accordion-faq-${index}`}>
                            <span className="font-semibold text-foreground">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </section>
              )}

              <Card className="bg-gradient-to-br from-primary/20 via-card to-card border-primary/20 p-8 md:p-12 mb-16 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <ShieldCheck className="w-48 h-48 text-primary" />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Ready for Total Privacy?</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      Get the latest AAWhatsApp build with <strong>Privacy Core™</strong>. 
                      No location tracking, no bank data access, just pure communication.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Anti-Ban v1.0
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                        <ShieldCheck className="w-3.5 h-3.5" /> Secure Build
                      </div>
                    </div>
                  </div>
                  <Link href="/download">
                    <Button size="lg" className="font-black px-10 h-12 rounded-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 text-xl transition-all" data-testid="button-download-post">
                      <Download className="w-6 h-6 mr-3" />
                      DOWNLOAD NOW
                    </Button>
                  </Link>
                </div>
              </Card>

              {relatedPosts.length > 0 && (
                <section>
                  <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedPosts.map((relatedPost) => (
                      <RelatedPostCard key={relatedPost.id} post={relatedPost} basePath={basePath} />
                    ))}
                  </div>
                </section>
              )}

              <div className="flex justify-between items-center mt-12 pt-8 border-t border-border/50">
                <Link href={basePath}>
                  <Button variant="outline" data-testid="button-all-articles">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    All Articles
                  </Button>
                </Link>
                <Link href="/download">
                  <Button variant="outline" data-testid="button-download-footer">
                    Download AA WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </article>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border/50 py-8 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground text-sm">
          <p>&copy; 2026 AA Mods. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
