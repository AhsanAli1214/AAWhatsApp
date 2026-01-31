import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
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

function BlogCard({ post, index, accentColor = "primary" }: { post: BlogPost; index: number; accentColor?: "primary" | "amber" }) {
  const isAmber = accentColor === "amber";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className={`h-full bg-card/50 border-border/50 hover-elevate cursor-pointer transition-all duration-300 group`}>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className={`${categoryColors[post.category]} border`}>
                <span className="mr-1.5">{categoryIcons[post.category]}</span>
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </Badge>
            </div>
            <h3 className={`text-lg font-bold text-foreground transition-colors line-clamp-2 ${isAmber ? "group-hover:text-amber-500" : "group-hover:text-primary"}`}>
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
              <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${isAmber ? "text-amber-500" : "text-primary"}`} />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function Blog() {
  const [location] = useLocation();
  const isBusiness = location.includes('type=business') || window.location.search.includes('type=business');
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{isBusiness ? "AA Business WhatsApp Blog" : "AA WhatsApp Blog"} 2026 – Anti-Ban & Security</title>
        <meta name="description" content={`Explore the official AA ${isBusiness ? "Business " : ""}WhatsApp blog for the latest updates, security guides, and Anti-Ban technology insights.`} />
        <link rel="canonical" href={`https://aa-mods.vercel.app/blog${isBusiness ? "?type=business" : ""}`} />
      </Helmet>

      <div className="fixed inset-0 hero-gradient pointer-events-none z-0" />
      <Navigation />

      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/">
            <Button variant="ghost" className={`mb-8 gap-2 text-muted-foreground ${isBusiness ? "hover:text-amber-500 hover:bg-amber-500/10" : "hover:text-primary hover:bg-primary/10"}`}>
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className={`mb-4 ${isBusiness ? "text-amber-500 border-amber-500/30" : "text-primary border-primary/30"}`}>
              <BookOpen className="w-3.5 h-3.5 mr-1.5" />
              {isBusiness ? "Enterprise Knowledge Base" : "Knowledge Base"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-black font-display mb-4">
              AA {isBusiness ? "Business" : ""} <span className={isBusiness ? "text-amber-500" : "text-primary"}>Security Hub</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The definitive resource for {isBusiness ? "enterprise" : "personal"} WhatsApp mod security, privacy engineering, and Anti-Ban technology.
            </p>
          </motion.div>

          <div className="mb-12 flex justify-center gap-4">
            <Link href="/blog">
              <Button 
                variant={!isBusiness ? "default" : "outline"} 
                className={!isBusiness ? "bg-primary" : ""}
              >
                Personal Mod
              </Button>
            </Link>
            <Link href="/blog?type=business">
              <Button 
                variant={isBusiness ? "default" : "outline"}
                className={isBusiness ? "bg-amber-500 text-black" : ""}
              >
                Business Mod
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(isBusiness ? otherPosts.slice(0, 6) : otherPosts).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} accentColor={isBusiness ? "amber" : "primary"} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
