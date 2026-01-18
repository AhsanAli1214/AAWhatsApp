import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Palette, 
  Ghost, 
  MessageSquare, 
  Lock, 
  CheckCircle2, 
  XCircle,
  ChevronDown
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { FeatureCard } from "@/components/FeatureCard";
import { DownloadCard } from "@/components/DownloadCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <div className="fixed inset-0 hero-gradient pointer-events-none z-0" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Latest Version 2026 Released
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6">
              Experience WhatsApp <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300 text-glow">
                Without Limits
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Unlock advanced privacy features, custom themes, and large file sharing capabilities. The most trusted WhatsApp mod of 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <ScrollLink to="download" smooth={true} offset={-100}>
                <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                  Download APK v19.45
                </button>
              </ScrollLink>
              <ScrollLink to="features" smooth={true} offset={-100}>
                <button className="px-8 py-4 rounded-full bg-secondary border border-white/5 hover:bg-secondary/80 text-foreground font-semibold text-lg transition-all w-full sm:w-auto">
                  Explore Features
                </button>
              </ScrollLink>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 mx-auto max-w-[300px]">
              {/* Phone Mockup */}
              <div className="rounded-[3rem] border-8 border-secondary bg-background overflow-hidden shadow-2xl shadow-primary/20 relative aspect-[9/19]">
                 {/* Scenic mountain landscape from unsplash for phone screen */}
                 <img 
                   src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80" 
                   alt="App Interface" 
                   className="w-full h-full object-cover opacity-80"
                 />
                 
                 {/* Overlay UI elements to make it look like a chat app */}
                 <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 flex flex-col justify-between p-6">
                   <div className="space-y-4 pt-8">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50" />
                        <div className="h-2 w-24 bg-white/20 rounded-full" />
                     </div>
                     <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/5 max-w-[80%]">
                       <div className="h-2 w-full bg-white/40 rounded-full mb-2" />
                       <div className="h-2 w-2/3 bg-white/40 rounded-full" />
                     </div>
                     <div className="p-4 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/20 max-w-[80%] ml-auto">
                       <div className="h-2 w-full bg-primary/40 rounded-full mb-2" />
                       <div className="h-2 w-2/3 bg-primary/40 rounded-full" />
                     </div>
                   </div>
                 </div>
              </div>
            </div>
            
            {/* Decorative Elements behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-20">
          <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Why Choose <span className="text-primary">AAWhatsApp</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've packed the most requested features into a lightweight, stable package that keeps you safe and private.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Ghost}
              title="Ultimate Privacy"
              description="Hide your online status, blue ticks, second ticks, and even 'typing...' status while seeing everyone else's."
              delay={0.1}
            />
            <FeatureCard 
              icon={Shield}
              title="Anti-Ban Protection"
              description="Our advanced anti-ban technology keeps your account safe and secure from temporary or permanent bans."
              delay={0.2}
            />
            <FeatureCard 
              icon={Palette}
              title="Custom Themes"
              description="Access thousands of themes or create your own. Change fonts, bubbles, ticks, and launcher icons."
              delay={0.3}
            />
            <FeatureCard 
              icon={Zap}
              title="Large Media Sharing"
              description="Send videos up to 1GB and high-resolution images without compression. No more blurry photos."
              delay={0.4}
            />
            <FeatureCard 
              icon={MessageSquare}
              title="Auto-Reply & Scheduler"
              description="Schedule messages for birthdays or meetings. Set up auto-replies when you're busy or sleeping."
              delay={0.5}
            />
            <FeatureCard 
              icon={Lock}
              title="Built-in App Lock"
              description="Secure your chats with fingerprint, pattern, or PIN lock directly within the app."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-24 bg-secondary/20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-16">
            Better Than The Rest
          </h2>

          <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-secondary/40 backdrop-blur-md rounded-3xl border border-white/5 p-8">
              <div className="grid grid-cols-5 gap-4 mb-6 pb-6 border-b border-white/5 font-display font-bold text-lg text-center">
                <div className="text-left pl-4 text-muted-foreground">Feature</div>
                <div className="text-primary">AAWhatsApp</div>
                <div className="text-muted-foreground">GBWhatsApp</div>
                <div className="text-muted-foreground">FMWhatsApp</div>
                <div className="text-muted-foreground">Official</div>
              </div>

              {[
                { feature: "Anti-Ban System", aa: true, gb: true, fm: true, off: true },
                { feature: "Message Scheduler", aa: true, gb: true, fm: true, off: false },
                { feature: "Hide View Status", aa: true, gb: true, fm: true, off: false },
                { feature: "Anti-Delete Msg", aa: true, gb: true, fm: true, off: false },
                { feature: "Send 1GB Video", aa: true, gb: false, fm: false, off: false },
                { feature: "Custom Fonts", aa: true, gb: true, fm: true, off: false },
                { feature: "No Ads", aa: true, gb: false, fm: false, off: true },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-5 gap-4 py-4 items-center text-center hover:bg-white/5 rounded-xl transition-colors">
                  <div className="text-left pl-4 font-medium">{row.feature}</div>
                  <div className="flex justify-center">
                    {row.aa ? <CheckCircle2 className="text-primary w-6 h-6" /> : <XCircle className="text-red-500 w-6 h-6" />}
                  </div>
                  <div className="flex justify-center opacity-50">
                    {row.gb ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                  </div>
                  <div className="flex justify-center opacity-50">
                    {row.fm ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                  </div>
                  <div className="flex justify-center opacity-50">
                    {row.off ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Ready to Upgrade?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Download the latest version of AAWhatsApp APK now. Enjoy a seamless, ad-free experience with all premium features unlocked.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Base update 2.24.2.76",
                  "Exclusive Anti-Ban V10.2",
                  "Fixed 'Expired' error",
                  "Added new iOS Emojis 2026"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <DownloadCard />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-secondary/20 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="bg-secondary/40 px-6 rounded-2xl hover:bg-secondary/60 hover:no-underline font-semibold text-lg">
                Is AAWhatsApp safe to use?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 text-muted-foreground text-base leading-relaxed">
                Yes, AAWhatsApp is scanned daily for malware and viruses. It uses the same servers as official WhatsApp to send messages, so your chats remain end-to-end encrypted. However, using any modded app carries a small risk, so we recommend using a secondary number.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b-0">
              <AccordionTrigger className="bg-secondary/40 px-6 rounded-2xl hover:bg-secondary/60 hover:no-underline font-semibold text-lg">
                Will I get banned for using this?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 text-muted-foreground text-base leading-relaxed">
                AAWhatsApp comes with Anti-Ban V10.2 protection which significantly reduces the risk of bans. To be extra safe, avoid using "mass message" features excessively and keep the app updated.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="bg-secondary/40 px-6 rounded-2xl hover:bg-secondary/60 hover:no-underline font-semibold text-lg">
                How do I update without losing chats?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 text-muted-foreground text-base leading-relaxed">
                Simply download the new version and install it OVER the existing one. Do not uninstall the old version first. We always recommend backing up your chats to local storage (Settings {'>'} Chats {'>'} Chat Backup) before updating.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b-0">
              <AccordionTrigger className="bg-secondary/40 px-6 rounded-2xl hover:bg-secondary/60 hover:no-underline font-semibold text-lg">
                Can I use two WhatsApp accounts?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 text-muted-foreground text-base leading-relaxed">
                Absolutely! AAWhatsApp has a built-in account switcher feature. Alternatively, you can install AAWhatsApp alongside the official WhatsApp app to run two numbers on one phone simultaneously.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                AA
              </div>
              <span className="font-bold font-display text-lg">AAWhatsApp</span>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
          
          <div className="text-center md:text-left text-xs text-muted-foreground/60 leading-relaxed">
            <p className="mb-2">
              Disclaimer: AAWhatsApp is a modified version of WhatsApp. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with WhatsApp Inc. or any of its subsidiaries or its affiliates.
            </p>
            <p>
              &copy; 2026 AAWhatsApp Team. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
