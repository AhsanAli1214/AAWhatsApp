import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const faqs = [
  {
    q: "Is AAWhatsApp APK safe to install?",
    a: "Yes, AAWhatsApp is designed with a 'Permission-Clean' infrastructure. It does not require location or media permissions to function, making it significantly safer than other mods like GBWhatsApp.",
  },
  {
    q: "How does the Anti-Ban v1.0 feature work?",
    a: "Our latest anti-ban script uses advanced server-side masking protocols. It identifies your modded client as an official version to WhatsApp's servers, drastically reducing the risk of being banned.",
  },
  {
    q: "Will I lose my chats when I switch?",
    a: "No, you can back up your chats on your current WhatsApp and restore them in AAWhatsApp by renaming the backup folder to 'AAWhatsApp' before verifying your number.",
  },
  {
    q: "What is PRO PROTOCOL Build 2.0.26?",
    a: "PRO PROTOCOL is our premium security architecture. Build 2.0.26 is the latest stable release optimized for 2026 Android security updates.",
  },
  {
    q: "Does AAWhatsApp share my data?",
    a: "Absolutely not. AAWhatsApp is built on the principle of Data Sovereignty. All your messages and media stay strictly on your device and are never uploaded to our servers.",
  },
];

export function FAQSection() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
    <section className="space-y-8 py-12">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground">
          Everything you need to know about AAWhatsApp PRO PROTOCOL
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="glass-card px-6 rounded-2xl border border-white/5 data-[state=open]:border-primary/20 transition-all"
          >
            <AccordionTrigger className="text-left font-bold hover:no-underline hover:text-primary transition-colors py-6">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
