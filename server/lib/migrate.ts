import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
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
    icon_image: "https://i.postimg.cc/N0p0fsf1/81ddf498-7efe-4101-83b1-101a77abf065.jpg"
  },
  {
    slug: "aa-business",
    name: "AA Business",
    version: "V1.0",
    developer: "AA Mods",
    category: "Business",
    rating: "4.8",
    downloads: "5M+",
    subtitle: "Business messaging automation and operations toolkit",
    short_description: "Professional communication app with scheduling, automation, and customer support workflows.",
    gradient: "from-blue-500 to-cyan-500",
    icon_image: "https://i.postimg.cc/15TztvX9/cropped-circle-image-(4).png"
  },
  {
    slug: "capcut-pro",
    name: "CapCut Pro",
    version: "V17.3.0",
    developer: "AA Mods",
    category: "Video Players & Editors",
    rating: "4.7",
    downloads: "50M+",
    subtitle: "Premium mobile editing for creators",
    short_description: "Advanced editing build with premium templates, AI tools, and export-focused optimization.",
    gradient: "from-violet-500 to-purple-500",
    icon_image: "https://i.postimg.cc/q71j1h4d/capcut-pro.png"
  },
  {
    slug: "remini-mod",
    name: "Remini Mod",
    version: "v3.7.1260",
    developer: "AA Mods",
    category: "Photography",
    rating: "4.6",
    downloads: "20M+",
    subtitle: "AI photo enhancement and restoration",
    short_description: "Premium enhancement pipeline for portraits, old images, and blurry photos.",
    gradient: "from-orange-500 to-rose-500",
    icon_image: "https://i.postimg.cc/download_1771149808669.png"
  },
  {
    slug: "youtube-premium-mod",
    name: "YouTube Premium Mod",
    version: "v20.45.39",
    developer: "AA Mods",
    category: "Video",
    rating: "4.5",
    downloads: "30M+",
    subtitle: "Enhanced playback controls for video streaming",
    short_description: "Cleaner watch experience with background playback and quality-focused controls.",
    gradient: "from-red-500 to-rose-500",
    icon_image: "https://i.postimg.cc/4y3bZ6cj/download-1-removebg-preview.png"
  },
  {
    slug: "youtube-music-mod",
    name: "YouTube Music Mod",
    version: "v8.45.32",
    developer: "AA Mods",
    category: "Music & Audio",
    rating: "4.5",
    downloads: "15M+",
    subtitle: "Premium listening with playback freedom",
    short_description: "High-quality audio, background listening, and smoother daily music performance.",
    gradient: "from-fuchsia-500 to-pink-500",
    icon_image: "https://i.postimg.cc/y6wzMTBm/cropped-circle-image-(3).png"
  }
];

async function migrate() {
  console.log('Starting migration to Supabase...');
  for (const app of apps) {
    const { error } = await supabase.from('apps').upsert(app, { onConflict: 'slug' });
    if (error) console.error("Error migrating " + app.slug + ":", error.message);
    else console.log("Migrated " + app.slug);
  }
}
migrate();
