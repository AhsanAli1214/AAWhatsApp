import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { Footer } from "@/components/Footer";

const blogPosts = [
  {
    slug: "aa-business-whatsapp-complete-guide",
    title: "AA Business WhatsApp: Complete Guide for 2026",
    excerpt: "Learn everything about AA Business WhatsApp - from installation to advanced features. The ultimate guide for business owners.",
    category: "Guide",
    date: "January 2026",
    readTime: "12 min read",
    featured: true
  },
  {
    slug: "auto-reply-setup-tutorial",
    title: "How to Set Up Auto Reply in AA Business WhatsApp",
    excerpt: "Step-by-step tutorial on configuring automatic responses for your business. Never miss a customer message again.",
    category: "Tutorial",
    date: "January 2026",
    readTime: "8 min read",
    featured: false
  },
  {
    slug: "aa-business-vs-official-whatsapp-business",
    title: "AA Business vs Official WhatsApp Business: Full Comparison",
    excerpt: "Detailed comparison of features, privacy, and capabilities between AA Business and the official WhatsApp Business app.",
    category: "Comparison",
    date: "January 2026",
    readTime: "10 min read",
    featured: true
  },
  {
    slug: "message-scheduling-guide",
    title: "Schedule Messages Like a Pro: Complete Tutorial",
    excerpt: "Master the art of message scheduling. Learn how to plan campaigns and reach customers at the perfect time.",
    category: "Tutorial",
    date: "December 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    slug: "customer-label-organization",
    title: "Organize Customers with Labels: Best Practices",
    excerpt: "Effective strategies for using customer labels to streamline your business communication workflow.",
    category: "Tips",
    date: "December 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    slug: "privacy-security-business-whatsapp",
    title: "Privacy & Security in AA Business WhatsApp",
    excerpt: "Understanding the security features that protect your business data. Anti-Ban v1.0 and Privacy Core explained.",
    category: "Security",
    date: "December 2025",
    readTime: "9 min read",
    featured: true
  },
  {
    slug: "migrate-from-gb-whatsapp-business",
    title: "How to Migrate from GB WhatsApp Business to AA Business",
    excerpt: "Complete migration guide with step-by-step instructions to switch from GB WhatsApp Business safely.",
    category: "Guide",
    date: "November 2025",
    readTime: "8 min read",
    featured: false
  },
  {
    slug: "product-catalog-optimization",
    title: "Optimize Your Product Catalog for More Sales",
    excerpt: "Tips and tricks to create an effective product catalog that converts viewers into customers.",
    category: "Tips",
    date: "November 2025",
    readTime: "7 min read",
    featured: false
  }
];

const categories = ["All", "Guide", "Tutorial", "Comparison", "Tips", "Security"];

export default function BusinessBlog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AA Business WhatsApp Blog 2026 - Enterprise Guides & Tutorials</title>
        <meta
          name="description"
          content="AA Business WhatsApp blog with enterprise guides, automation tutorials, and privacy updates. Learn how to grow and secure your business messaging."
        />
        <meta
          name="keywords"
          content="AA Business WhatsApp blog, business WhatsApp guides, enterprise WhatsApp tutorials, AA Business updates, WhatsApp business automation"
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/aa-business/blog" />
        <meta property="og:title" content="AA Business WhatsApp Blog - Enterprise Guides 2026" />
        <meta
          property="og:description"
          content="Enterprise guides and tutorials for AA Business WhatsApp, including automation, security, and growth strategies."
        />
        <meta property="og:url" content="https://aa-mods.vercel.app/aa-business/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aa-mods.vercel.app/images/business-hero-new.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AA Business WhatsApp Blog - Enterprise Guides" />
        <meta
          name="twitter:description"
          content="Enterprise WhatsApp tutorials and security updates for AA Business."
        />
        <meta name="twitter:image" content="https://aa-mods.vercel.app/images/business-hero-new.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "AA Business WhatsApp Blog",
            "description": "Enterprise guides, tutorials, and updates for AA Business WhatsApp.",
            "url": "https://aa-mods.vercel.app/aa-business/blog",
            "publisher": {
              "@type": "Organization",
              "name": "AA Mods",
              "logo": {
                "@type": "ImageObject",
                "url": "https://aa-mods.vercel.app/favicon.svg"
              }
            }
          })}
        </script>
      </Helmet>
      <BusinessNavbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-500 border-blue-500/20">
              Business Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AA Business <span className="text-blue-500">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guides, tutorials, and tips to get the most out of AA Business WhatsApp
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-blue-500" : "border-blue-500/30 hover:bg-blue-500/10 cursor-pointer"}
              >
                {category}
              </Badge>
            ))}
          </div>

          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post, index) => (
                  <Card key={index} className="border-blue-500/20 hover:border-blue-500/40 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-blue-500/10 text-blue-500">
                          {post.category}
                        </Badge>
                        <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-500 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold mb-6">All Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-blue-500/10 hover:border-blue-500/30 transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Want to stay updated with the latest news and tutorials?
            </p>
            <a href="https://t.me/AA_ModsOfficial" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-500 hover:bg-blue-600">
                Join Our Telegram
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
