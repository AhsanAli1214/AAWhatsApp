import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Download, 
  Settings, 
  HelpCircle, 
  RefreshCw, 
  Scale, 
  ShieldCheck, 
  Zap,
  ArrowLeft
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { AdPlaceholder } from "@/components/AdPlaceholder";

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

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="h-full bg-card/50 border-border/50 hover-elevate cursor-pointer transition-all duration-300 group">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className={`${categoryColors[post.category]} border`}>
                <span className="mr-1.5">{categoryIcons[post.category]}</span>
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </Badge>
            </div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2" data-testid={`text-blog-title-${post.id}`}>
              {post.title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} min read
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function Blog() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>AA WhatsApp Official Blog 2026 – Anti-Ban, Privacy & Mod Tips</title>
        <meta
          name="description"
          content="AA WhatsApp Blog: The latest on Anti-Ban v2.0, WhatsApp mod privacy, installation guides, and troubleshooting for 2026. Stay secure with AA Mods."
        />
        <meta
          name="keywords"
          content="AA WhatsApp blog, WhatsApp mod tips 2026, AA WhatsApp updates, WhatsApp privacy blog, anti-ban guide, AA Mods news"
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/blog" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blog – AA Mods | The Definitive Guide to WhatsApp Mods 2026" />
        <meta property="og:description" content="Expert guides on AA WhatsApp, privacy security, Anti-Ban technology, and all top WhatsApp mods for Android." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aa-mods.vercel.app/blog" />
      </Helmet>

      <div className="fixed inset-0 hero-gradient pointer-events-none z-0" />
      <Navigation />

      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10 gap-2 text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <BookOpen className="w-3.5 h-3.5 mr-1.5" />
              Knowledge Base
            </Badge>
            <h1 className="text-4xl md:text-5xl font-black font-display mb-4">
              AA Mods <span className="text-primary">Security Hub</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The definitive resource for WhatsApp mod security, privacy engineering, and Anti-Ban technology.
            </p>
          </motion.div>

          <div className="mb-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-secondary/20 border border-white/5 text-center">
              <div className="text-3xl font-black text-primary mb-1">16+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Expert Articles</div>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/20 border border-white/5 text-center">
              <div className="text-3xl font-black text-primary mb-1">2026</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Latest Tech</div>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/20 border border-white/5 text-center">
              <div className="text-3xl font-black text-primary mb-1">100%</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Security Focus</div>
            </div>
          </div>

          <AdPlaceholder format="leaderboard" className="mb-12" />

          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <Link href={`/blog/${featuredPost.slug}`}>
                <Card className="bg-gradient-to-br from-primary/10 via-card/80 to-card border-primary/20 hover-elevate cursor-pointer group overflow-hidden">
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            Featured
                          </Badge>
                          <Badge variant="outline" className={`${categoryColors[featuredPost.category]} border`}>
                            {categoryIcons[featuredPost.category]}
                            <span className="ml-1.5">{featuredPost.category.charAt(0).toUpperCase() + featuredPost.category.slice(1)}</span>
                          </Badge>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors" data-testid="text-featured-title">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 text-base md:text-lg line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime} min read
                          </span>
                        </div>
                        <Button className="group/btn" data-testid="button-read-featured">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/50 border-border/50 p-8 hover-elevate group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Privacy First Content</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our blog is dedicated to transparency. We explain how our Permission-Clean™ technology 
                  works and why it's the safest choice for mod users.
                </p>
              </Card>
              <Card className="bg-card/50 border-border/50 p-8 hover-elevate group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Anti-Ban v2.0 Updates</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Stay ahead of server-side detections. We post regular updates on how to maintain 
                  a 100% stable WhatsApp experience without risk of bans.
                </p>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/20 via-card to-card border-primary/20 p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <ShieldCheck className="w-64 h-64 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 relative z-10">Experience the Best Mod</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
                Join thousands of users who have switched to AAWhatsApp for the perfect balance 
                of premium features and absolute privacy.
              </p>
              <Link href="/download">
                <Button size="lg" className="font-bold px-10 h-14 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 relative z-10" data-testid="button-download-cta">
                  <Download className="w-5 h-5 mr-2" />
                  Get AA WhatsApp v2.0
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border/50 py-8 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground text-sm">
          <AdPlaceholder format="mobile" className="mb-4" />
          <p>&copy; 2026 AA Mods. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
