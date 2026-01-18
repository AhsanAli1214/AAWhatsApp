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

import heroImage from "@assets/generated_images/modern_professional_blog_hero_image_for_aawhatsapp_mod..png";
import privacyImage from "@assets/generated_images/futuristic_illustration_of_privacy_features_for_aawhatsapp..png";
import themesImage from "@assets/generated_images/creative_visual_showing_multiple_whatsapp_theme_styles_for_aawhatsapp..png";
import mediaImage from "@assets/generated_images/smartphone_mockup_displaying_aawhatsapp_media_sharing_features..png";
import securityImage from "@assets/generated_images/professional_cybersecurity-themed_illustration_for_aawhatsapp..png";
import comparisonImage from "@assets/generated_images/clean_comparison_illustration_showing_aawhatsapp_vs_other_mods..png";
import ctaImage from "@assets/generated_images/call-to-action_image_for_downloading_aawhatsapp_apk..png";
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
            <div className="relative z-10 mx-auto max-w-lg">
              <img 
                src={heroImage} 
                alt="AAWhatsApp Interface" 
                className="w-full h-auto rounded-[2rem] shadow-2xl shadow-primary/20"
                loading="eager"
                width="800"
                height="600"
              />
            </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={privacyImage} 
                alt="Privacy Features" 
                className="w-full h-auto rounded-3xl shadow-xl border border-white/5"
                loading="lazy"
                width="600"
                height="400"
              />
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img 
                src={securityImage} 
                alt="Security & Anti-Ban" 
                className="w-full h-auto rounded-3xl shadow-xl border border-white/5"
                loading="lazy"
                width="600"
                height="400"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
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
              </div>
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={mediaImage} 
                alt="Media Sharing" 
                className="w-full h-auto rounded-3xl shadow-xl border border-white/5"
                loading="lazy"
                width="600"
                height="400"
              />
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img 
                src={themesImage} 
                alt="Customization & Themes" 
                className="w-full h-auto rounded-3xl shadow-xl border border-white/5"
                loading="lazy"
                width="600"
                height="400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={comparisonImage} 
                alt="Comparison" 
                className="w-full h-auto rounded-3xl shadow-xl border border-white/5"
                loading="lazy"
                width="600"
                height="400"
              />
            </motion.div>

            <div className="overflow-x-auto">
              <div className="bg-secondary/40 backdrop-blur-md rounded-3xl border border-white/5 p-8">
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/5 font-display font-bold text-lg text-center">
                  <div className="text-left pl-4 text-muted-foreground">Feature</div>
                  <div className="text-primary">AAWhatsApp</div>
                  <div className="text-muted-foreground">Official</div>
                </div>

                {[
                  { feature: "Anti-Ban System", aa: true, off: true, detail: "Advanced AI-powered engine vs standard protection" },
                  { feature: "Message Scheduler", aa: true, off: false, detail: "Automate your replies and business messages" },
                  { feature: "Hide View Status", aa: true, off: false, detail: "Watch statuses without leaving a trace" },
                  { feature: "Anti-Delete Msg", aa: true, off: false, detail: "Read messages even after they're deleted" },
                  { feature: "Media Size Limit", aa: true, off: false, detail: "Send 2GB+ vs 16MB standard limit" },
                  { feature: "Photo Quality", aa: true, off: false, detail: "Zero compression HD sharing vs heavy compression" },
                  { feature: "Custom Themes", aa: true, off: false, detail: "1000s of UI skins vs standard light/dark" },
                  { feature: "Anti-Revoke", aa: true, off: false, detail: "Prevent others from deleting sent messages" },
                  { feature: "Status Downloader", aa: true, off: false, detail: "Download any status with one tap" },
                  { feature: "Per-Chat Lock", aa: true, off: false, detail: "Secure individual chats with Fingerprint/PIN" },
                  { feature: "DND Mode", aa: true, off: false, detail: "Mute WhatsApp internet while staying online elsewhere" },
                  { feature: "Ghost Mode", aa: true, off: false, detail: "Hide second tick and 'typing...' indicator" },
                ].map((row, i) => (
                  <div key={i} className="py-6 border-b border-white/5 last:border-0 hover:bg-white/5 rounded-xl transition-all px-4">
                    <div className="grid grid-cols-3 gap-4 items-center text-center">
                      <div className="text-left font-bold text-lg">{row.feature}</div>
                      <div className="flex justify-center">
                        <CheckCircle2 className="text-primary w-7 h-7" />
                      </div>
                      <div className="flex justify-center opacity-30">
                        {row.off ? <CheckCircle2 className="w-7 h-7" /> : <XCircle className="w-7 h-7" />}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground text-left">{row.detail}</div>
                  </div>
                ))}
              </div>
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
              
              <div className="mb-8 rounded-3xl overflow-hidden shadow-xl border border-white/5">
                <img 
                  src={ctaImage} 
                  alt="Download AAWhatsApp" 
                  className="w-full h-auto"
                  loading="lazy"
                  width="600"
                  height="300"
                />
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Official Base Update",
                  "Exclusive Anti-Ban Engine",
                  "Fixed 'Expired' error",
                  "Added new iOS Emojis"
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to know about AAWhatsApp's features and safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                q: "Is AAWhatsApp safe to use?",
                a: "Yes, it retains official end-to-end encryption. However, as an unofficial mod, we recommend keeping it updated and using it responsibly to ensure maximum account safety."
              },
              {
                q: "Can I use two WhatsApp accounts?",
                a: "Absolutely! AAWhatsApp is designed to run side-by-side with the official app or other mods, allowing you to manage multiple numbers on a single device easily."
              },
              {
                q: "Does it support auto-reply?",
                a: "Yes, it includes advanced business tools like auto-reply, message scheduling, and a powerful DND mode to help you manage your communication more effectively."
              },
              {
                q: "What are the media limits?",
                a: "You can send videos up to 1GB and share 100+ high-quality images at once. Unlike the official app, AAWhatsApp doesn't aggressively compress your files."
              },
              {
                q: "Do I need to root my phone?",
                a: "No, AAWhatsApp works perfectly on all standard Android devices without requiring root access or any special system modifications."
              },
              {
                q: "How do I update the app?",
                a: "Simply download the latest APK from our website and install it. It will automatically update your existing installation while keeping all your chats safe."
              },
              {
                q: "Is it really Anti-Ban?",
                a: "We include a cutting-edge anti-ban engine that is constantly updated to match the latest security protocols, significantly reducing the risk of account suspension."
              },
              {
                q: "Can I customize the UI?",
                a: "Yes! Access thousands of free themes, custom fonts, bubble styles, and unique animations to make your WhatsApp look exactly how you want it."
              },
              {
                q: "What is DND Mode?",
                a: "The Do Not Disturb mode allows you to disable internet access for AAWhatsApp specifically, so you can stay online in other apps without being interrupted."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-primary/10 shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/5 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" />
                <span className="text-xl font-bold font-display">AAWhatsApp</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                The ultimate WhatsApp modification for advanced privacy, unlimited customization, and high-performance media sharing.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><ScrollLink to="faq" smooth={true} className="hover:text-primary cursor-pointer transition-colors">FAQs</ScrollLink></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} AAWhatsApp. All rights reserved. Not affiliated with WhatsApp Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
