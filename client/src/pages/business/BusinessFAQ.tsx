import { motion } from "framer-motion";
import { Link } from "wouter";
import { HelpCircle, Download, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { APP_VERSIONS } from "@/config/appConfig";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is AA Business WhatsApp?",
        a: "AA Business WhatsApp is a modified version of WhatsApp Business designed specifically for entrepreneurs and businesses. It includes all official WhatsApp Business features plus advanced privacy controls, automation tools, and customization options.",
      },
      {
        q: "Is AA Business WhatsApp safe to use?",
        a: "Yes, AA Business WhatsApp is completely safe. It features our exclusive Anti-Ban v1.0 technology and Privacy Core, which means it never accesses your bank apps, location, or personal files. Over 5 million businesses trust AA Business for their communication needs.",
      },
      {
        q: "Can I use AA Business with my existing WhatsApp Business account?",
        a: "Yes, you can transfer your existing WhatsApp Business account to AA Business. Simply backup your chats in the official app, install AA Business, and restore your backup during setup.",
      },
    ],
  },
  {
    category: "Features",
    questions: [
      {
        q: "How does the Auto Reply feature work?",
        a: "Auto Reply allows you to set up automatic responses for when you're unavailable. You can create custom messages for different scenarios like 'Away', 'Busy', or 'Outside Business Hours'. You can also set specific times when auto-reply should be active.",
      },
      {
        q: "Can I schedule messages to be sent later?",
        a: "Yes, AA Business includes a powerful message scheduling feature. You can compose a message and set a specific date and time for it to be sent automatically. This is perfect for marketing campaigns, reminders, or reaching customers in different time zones.",
      },
      {
        q: "What are Quick Replies and how do I use them?",
        a: "Quick Replies are pre-saved message templates that you can send with just a tap. They're perfect for FAQs, pricing information, or any message you send frequently. You can create unlimited quick replies and organize them with labels.",
      },
      {
        q: "Does AA Business support product catalogs?",
        a: "Yes, AA Business fully supports WhatsApp Business catalogs. You can add products and services, set prices, add descriptions and images, and share your catalog directly in chats.",
      },
    ],
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        q: "What is Anti-Ban v1.0 technology?",
        a: "Anti-Ban v1.0 is our advanced protection system that prevents account restrictions. It uses sophisticated techniques to make your modified app appear identical to the official WhatsApp Business to their servers, ensuring your account remains safe.",
      },
      {
        q: "Can I hide my online status and blue ticks?",
        a: "Yes, AA Business includes comprehensive privacy controls. You can hide your online status, disable blue ticks (read receipts), hide typing indicators, and control who can see your last seen, profile photo, and status.",
      },
      {
        q: "Does AA Business access my personal data?",
        a: "No. AA Business features our Privacy Core technology which ensures the app never accesses your bank applications, location data, or personal files. Your business and personal data remain completely private.",
      },
    ],
  },
  {
    category: "Installation",
    questions: [
      {
        q: "How do I install AA Business WhatsApp?",
        a: "Download the APK from our official download page, enable 'Install from Unknown Sources' in your device settings, open the downloaded file, and follow the installation prompts. Then verify your business phone number to start using the app.",
      },
      {
        q: "Can I use AA Business alongside regular WhatsApp?",
        a: "Yes, AA Business can run alongside regular WhatsApp or WhatsApp Business on the same device. This allows you to keep personal and business communications separate.",
      },
      {
        q: "How do I update AA Business to the latest version?",
        a: "Simply download the latest version from our download page and install it over your existing installation. Your chats and settings will be preserved. We recommend enabling notifications from our Telegram channel for update alerts.",
      },
      {
        q: `What is the size of AA Business WhatsApp ${APP_VERSIONS.aaBusiness}?`,
        a: "The app size is approximately 125MB, optimized for high performance and stability across all Android devices.",
      },
      {
        q: "Does AA Business support bulk broadcasting?",
        a: "Yes, AA Business allows you to send bulk offers to unlimited clients without fear of bans, thanks to our specialized 'Warm-up' algorithm.",
      },
    ],
  },
];

export default function BusinessFAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AA Business WhatsApp FAQ - Support & Guides</title>
        <meta
          name="description"
          content="Answers to common questions about AA Business WhatsApp, including bulk messaging, security, and enterprise features."
        />
        <meta
          name="keywords"
          content="AA Business FAQ, WhatsApp Business mod help, enterprise WhatsApp support, bulk messaging FAQ, AA Business troubleshooting"
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/aa-business/faq" />
      </Helmet>
      <BusinessNavbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-500 border-blue-500/20">
              <HelpCircle className="w-3 h-3 mr-1" />
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-blue-500">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about AA Business WhatsApp
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <h2 className="text-xl font-bold mb-4 text-blue-500">
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${sectionIndex}-${index}`}
                      className="border border-blue-500/10 rounded-lg px-4 data-[state=open]:border-blue-500/30"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-12"
          >
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              Join our Telegram community for instant support from our team and
              other users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/AA_ModsOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  <Send className="w-5 h-5 mr-2" />
                  Join Telegram
                </Button>
              </a>
              <Link href="/aa-business/download">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500/30 hover:bg-blue-500/10"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
