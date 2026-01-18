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

import logoImg from "@assets/icon_1768754567492.png";

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
              Latest Version Released
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6">
              AAWhatsApp APK Download – <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300 text-glow">
                Latest WhatsApp Mod
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Advanced Privacy, Anti-Ban, Large Media Sharing & Custom Themes. Experience the powerful unofficial WhatsApp mod that builds on the features of GBWhatsApp and FMWhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <ScrollLink to="download" smooth={true} offset={-100}>
                <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                  Download APK
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
                   src={logoImg} 
                   alt="App Interface" 
                   className="w-full h-full object-contain p-8 bg-gradient-to-b from-primary/10 to-background"
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
              title="Privacy Suite"
              description="Hide online status, second ticks, and 'typing...' indicators. View deleted messages with anti-revoke and save statuses directly."
              delay={0.1}
            />
            <FeatureCard 
              icon={Shield}
              title="Security & Anti-Ban"
              description="Advanced anti-ban engine reduces suspension risk. Built-in app lock (PIN/fingerprint) for app and individual chats."
              delay={0.2}
            />
            <FeatureCard 
              icon={Palette}
              title="Full UI Control"
              description="1000s of themes, custom fonts, bubble styles, and animations. Dark/light modes and vibrant skins for a unique interface."
              delay={0.3}
            />
            <FeatureCard 
              icon={Zap}
              title="Pro Media Sharing"
              description="Send 1GB+ videos and 100+ high-definition images at once with minimal compression. Perfect for large documents."
              delay={0.4}
            />
            <FeatureCard 
              icon={MessageSquare}
              title="Business Assistant"
              description="Auto-reply for busy hours and message scheduling. DND mode to cut data for WhatsApp while staying connected on other apps."
              delay={0.5}
            />
            <FeatureCard 
              icon={Lock}
              title="Group & Broadcast"
              description="High limits for pinned chats and group members (hundreds). Broadcast messages to unlimited contacts effortlessly."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Detailed Info Sections */}
      <section id="about" className="py-24 relative z-10 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">About AAWhatsApp</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AAWhatsApp is a premium, powerful unofficial WhatsApp mod designed for users who demand more from their messaging experience. Building on the legacies of GBWhatsApp and FMWhatsApp, AAWhatsApp 2026 brings together the most requested privacy controls, customization options, and media sharing capabilities into a single, high-performance package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="glass-card p-8 rounded-3xl border border-white/5 bg-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to provide a messaging environment that respects your privacy and gives you total creative control. We believe you should be able to communicate without the artificial limits of the official app, whether that's sharing high-quality 1GB+ videos or customizing every pixel of your chat interface.
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-white/5 bg-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Core Benefits</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Enhanced Stealth: Read messages and view statuses invisibly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Uncompressed Media: Send photos and videos in full original quality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Superior Anti-Ban: Regularly updated engine to keep your account safe.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">Advanced Privacy Features</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <span className="text-foreground font-bold">Hide Read Receipts & Status:</span> AAWhatsApp lets you hide your online status, second (blue) ticks, and even the "typing..." and "recording..." indicators. You get both global options (freeze last seen) and selective privacy toggles for specific contacts.
                </p>
                <p>
                  <span className="text-foreground font-bold">View Deleted Messages:</span> With the built-in anti-revoke feature, you can see messages your friends delete. It also includes a game-changing status downloader to save photos and videos directly.
                </p>
                <p>
                  <span className="text-foreground font-bold">In-App Chat Lock:</span> Secure your app and individual chats with a built-in PIN or fingerprint lock, adding an extra security layer without third-party apps.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">Chat & Messaging Tools</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <span className="text-foreground font-bold">Auto-Reply & Scheduler:</span> Set automated replies for orders or schedule messages for birthdays and meetings. It works as a mini-business assistant for your busy lifestyle.
                </p>
                <p>
                  <span className="text-foreground font-bold">Do Not Disturb (DND):</span> Disable WhatsApp's internet connection only, allowing you to use other apps without being disturbed by incoming messages.
                </p>
                <p>
                  <span className="text-foreground font-bold">Broadcast & Group Tools:</span> Pin up to 100 chats, send broadcast messages to unlimited contacts, and manage large group chats with hundreds of members.
                </p>
                <p>
                  <span className="text-foreground font-bold">Message Filtering:</span> Sort and clear chats efficiently with advanced search and filtering tools, similar to professional inbox management.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">File & Media Sharing</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  AAWhatsApp matches or exceeds the highest limits in the mod world. Send up to <span className="text-primary font-bold">90 photos</span> or <span className="text-primary font-bold">1GB+ video clips</span> at once without the heavy compression found in the official app.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Bulk Media: Send 100+ images in a single message.</li>
                  <li>High-Quality: Shared files retain their original clarity and resolution.</li>
                  <li>Status Download: Save friends' status updates and view "view once" media even after it expires.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">Customization & Themes</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Radically change the app's look with full UI control. Download <span className="text-primary font-bold">thousands of user-created themes</span> or build your own from scratch.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fonts & Layout: Change message bubble styles, font types/sizes, and UI animations.</li>
                  <li>Emojis & Stickers: Use custom emoji packs (iOS, Facebook, Google styles) and unlimited stickers.</li>
                  <li>Animated Themes: Enjoy visual flair with Aero-inspired animated skins.</li>
                </ul>
              </div>
            </motion.div>
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
                { feature: "Send 1GB+ Video", aa: true, gb: true, fm: true, off: false },
                { feature: "Custom Themes", aa: true, gb: true, fm: true, off: false },
                { feature: "Anti-Revoke", aa: true, gb: true, fm: true, off: false },
                { feature: "Status Downloader", aa: true, gb: true, fm: true, off: false },
                { feature: "Per-Chat Lock", aa: true, gb: true, fm: true, off: false },
                { feature: "DND Mode", aa: true, gb: true, fm: true, off: false },
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
                Yes, it retains official encryption, but it's an unofficial mod. We recommend using it on a spare number and keeping the app updated from trusted sources to reduce any risks.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b-0">
              <AccordionTrigger className="bg-secondary/40 px-6 rounded-2xl hover:bg-secondary/60 hover:no-underline font-semibold text-lg">
                Can I use two WhatsApp accounts?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 text-muted-foreground text-base leading-relaxed">
                Absolutely! AAWhatsApp supports dual/multiple accounts on one device, similar to GBWhatsApp. You can run two numbers simultaneously on the same phone.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="bg-secondary/40 px-6 rounded-2xl hover:bg-secondary/60 hover:no-underline font-semibold text-lg">
                Does it support auto-reply?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 text-muted-foreground text-base leading-relaxed">
                Yes, AAWhatsApp includes business-friendly tools like auto-reply and message scheduling, giving you flexibility similar to FMWhatsApp and GBWhatsApp styles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b-0">
              <AccordionTrigger className="bg-secondary/40 px-6 rounded-2xl hover:bg-secondary/60 hover:no-underline font-semibold text-lg">
                How do media limits compare?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 text-muted-foreground text-base leading-relaxed">
                AAWhatsApp matches or exceeds the highest limits: send 1GB+ videos and 100+ images in a single message with minimal compression, far surpassing the 16MB stock limit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b-0">
              <AccordionTrigger className="bg-secondary/40 px-6 rounded-2xl hover:bg-secondary/60 hover:no-underline font-semibold text-lg">
                Do I need to uninstall official WhatsApp?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 text-muted-foreground text-base leading-relaxed">
                No, you can run official WhatsApp and AAWhatsApp side-by-side using different phone numbers. This is perfect for separating work and personal life.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b-0">
              <AccordionTrigger className="bg-secondary/40 px-6 rounded-2xl hover:bg-secondary/60 hover:no-underline font-semibold text-lg">
                How do I update AAWhatsApp?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 text-muted-foreground text-base leading-relaxed">
                To update, simply download the latest APK from our site and install it over your existing version. Your chats will remain intact. Always back up your chats before updating for extra safety.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-b-0">
              <AccordionTrigger className="bg-secondary/40 px-6 rounded-2xl hover:bg-secondary/60 hover:no-underline font-semibold text-lg">
                Can I restore chats from official WhatsApp?
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 text-muted-foreground text-base leading-relaxed">
                Yes! During the setup process, AAWhatsApp will detect any local backups from official WhatsApp and offer to restore them, making the transition seamless.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary/5 rounded-3xl p-8 mb-12 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4">Safety & Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <p>
                AAWhatsApp runs smoothly on modern Android devices (4.3+ or 5.0+) without requiring root access. While it is optimized to be lighter than flashy mods like Aero, it still offers multi-language support (40+ languages) for global users.
              </p>
              <p>
                <span className="text-yellow-500 font-bold">⚠️ Caution:</span> Remember that all mods violate WhatsApp's terms. Always use a secondary number, update often to benefit from anti-ban fixes, and scan APKs for malware before installation.
              </p>
            </div>
          </div>
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
            <p>
              &copy; 2026 AAWhatsApp Team. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
