import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const apps = [
  {
    slug: "aa-whatsapp",
    name: "AA WhatsApp",
    version: "V4.0",
    developer: "AA Mods",
    category: "Communication",
    rating: "4.9",
    downloads: "10M+",
    subtitle: "Secure messaging with anti-ban architecture",
    short_description: "Privacy-focused WhatsApp experience with anti-ban, better media controls, and stable day-to-day performance.",
    gradient: "from-emerald-500 to-teal-500",
    icon_image: "https://i.postimg.cc/N0p0fsf1/81ddf498-7efe-4101-83b1-101a77abf065.jpg",
    long_description: "AA WhatsApp is the flagship communication app by AA Mods. It is built around privacy-first behavior while maintaining a smooth everyday messaging experience.",
    seo_title: "AA WhatsApp Download Latest Version | AA Mods",
    seo_description: "Download AA WhatsApp latest version by AA Mods with anti-ban protection, privacy controls, and full update details.",
    seo_keywords: "AA WhatsApp, AA WhatsApp APK, Anti-Ban WhatsApp, WhatsApp mod 2026, privacy WhatsApp mod, AA Mods",
    direct_download_link: "https://aa-mods.vercel.app/aa-whatsapp/download",
    whats_new: ["FIXED: App Crash Problem", "NEW: Profile cover photo"],
    changelog: ["Initial release", "V4.0 Update"]
  }
];

async function setupAndMigrate() {
  console.log('Setting up Supabase table and migrating data...');
  
  // We can't easily create tables via API, but we can try to insert and see if it fails
  // User should have created the table 'apps' in Supabase dashboard as per standard Supabase flow
  // However, I will attempt to use a clever SQL RPC if available, but usually it's not.
  // I'll proceed with upsert assuming the table exists or will be created by the user.
  
  for (const app of apps) {
    const { error } = await supabase.from('apps').upsert(app, { onConflict: 'slug' });
    if (error) {
      console.error("Error migrating " + app.slug + ":", error.message);
      if (error.message.includes("public.apps")) {
        console.log("\nIMPORTANT: Please create the 'apps' table in your Supabase SQL Editor with these columns:");
        console.log("slug (text, primary key), name (text), version (text), developer (text), category (text), rating (text), downloads (text), subtitle (text), short_description (text), long_description (text), icon_image (text), gradient (text), seo_title (text), seo_description (text), seo_keywords (text), direct_download_link (text), whats_new (text[]), changelog (text[]), blog_markdown (text)");
      }
    } else {
      console.log("Migrated " + app.slug);
    }
  }
}
setupAndMigrate();
