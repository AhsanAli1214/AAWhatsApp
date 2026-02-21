import {
  APP_DOWNLOAD_REDIRECTS,
  SECURE_DOWNLOAD_ASSETS,
  getSecureDownloadUrl,
} from "@shared/downloadAssets";
import reminiLogo from "@assets/download_1771149808669.png";
import { AA_WHATSAPP_ICON_URL } from "@/lib/branding";

// --- Technical & Shared Links ---
export const STORE_LINKS = {
  aaModsServices: "https://ahsanali.short.gy/services-ahsan",
  telegramChannel: "https://t.me/AA_ModsOfficial",
} as const;

export const APP_EDITOR_GUIDE = {
  file: "client/src/data/appData.ts",
  notes: [
    "All app content is managed in this file.",
    "Each app has its own dedicated section inside APP_DATA.",
    "Add a new app by duplicating one section and updating slug, metadata, links, and content.",
  ],
} as const;

// --- Icon URLs ---
const ICONS = {
  aaWhatsApp: AA_WHATSAPP_ICON_URL,
  capcutPro: "https://i.postimg.cc/q71j1h4d/capcut-pro.png",
  aaBusiness: "https://i.postimg.cc/15TztvX9/cropped-circle-image-(4).png",
  youtube: "https://i.postimg.cc/mkXHyrFx/cropped_circle_image_(6).png",
  youtubeMusic: "https://i.postimg.cc/y6wzMTBm/cropped-circle-image-(3).png",
  remini: reminiLogo,
};

// --- App Definitions (The Single Source of Truth) ---
export const APP_DATA = {
  // ===== AA WhatsApp Section =====
  aaWhatsApp: {
    // Technical Info
    version: "V4.0",
    baseVersion: "2.25.36.73",
    updateDate: { display: "February 15, 2026", iso: "2026-02-15" },
    downloadLink: "https://aa-mods.vercel.app/aa-whatsapp/download",
    directDownloadLink: getSecureDownloadUrl(
      SECURE_DOWNLOAD_ASSETS.aaWhatsAppModern,
    ),
    primaryDownloadLabel: "Download com.aawhatsapp",
    mirrorDownloadLink: getSecureDownloadUrl(
      SECURE_DOWNLOAD_ASSETS.aaWhatsAppLegacy,
    ),
    mirrorDownloadLabel: "Download com.gbwhatsapp",
    changelog: [
      "FIXED: App Crash Problem When Link Device or Register Number",
      "NEW: Profile cover photo support for enhanced personalization",
      "NEW: Status character limit increased up to 500 characters",
      "NEW: Status notification alerts when contacts post new updates",
      "NEW: Read receipt notifications fully restored and improved",
      "NEW: Fresh icons added to home screen and chat options for faster navigation",
      "IMPROVED: Voice message clarity and playback stability",
      "IMPROVED: Message sending and receiving speed with delays fully resolved",
      "IMPROVED: Anti-ban and account protection system",
      "IMPROVED: Overall performance, responsiveness, and app stability",
    ],
    // Page Content
    slug: "aa-whatsapp",
    name: "AA WhatsApp",
    developer: "AA Mods",
    category: "Communication",
    rating: "4.9",
    downloads: "10M+",
    iconType: "whatsapp",
    iconImage: ICONS.aaWhatsApp,
    gradient: "from-emerald-500 to-teal-500",
    subtitle: "Secure messaging with anti-ban architecture",
    shortDescription:
      "Privacy-focused WhatsApp experience with anti-ban, better media controls, and stable day-to-day performance.",
    longDescription:
      "AA WhatsApp is the flagship communication app by AA Mods. It is built around privacy-first behavior while maintaining a smooth everyday messaging experience.",
    seoTitle: "AA WhatsApp Download Latest Version | AA Mods",
    seoDescription:
      "Download AA WhatsApp latest version by AA Mods with anti-ban protection, privacy controls, and full update details.",
    seoKeywords:
      "AA WhatsApp, AA WhatsApp APK, Anti-Ban WhatsApp, WhatsApp mod 2026, privacy WhatsApp mod, AA Mods",
    note: "If installation protection appears, tap Install anyway from Android security prompt and continue setup.",
    seeMoreMods: [
      { label: "YouTube Premium Mod APK", slug: "youtube-premium-mod" },
    ],
    whatsNew: [
      "FIXED: App Crash Problem When Link Device or Register Number",
      "NEW: Profile cover photo support for enhanced personalization",
      "NEW: Status character limit increased up to 500 characters",
      "NEW: Status notification alerts when contacts post new updates",
      "NEW: Read receipt notifications fully restored and improved",
      "NEW: Fresh icons added to home screen and chat options for faster navigation",
      "IMPROVED: Voice message clarity and playback stability",
      "IMPROVED: Message sending and receiving speed with delays fully resolved",
      "IMPROVED: Anti-ban and account protection system",
      "IMPROVED: Overall performance, responsiveness, and app stability",
    ],
    blogMarkdown: `## Overview
AA WhatsApp is designed for users who want a **privacy-first WhatsApp mod** without giving up stability or speed.

## Why users choose AA WhatsApp
- Enhanced anti-ban hardening for safer long-term usage
- Better permission behavior focused on minimum required access
- Stable messaging flow with optimized media delivery
- Rich customization and quality-of-life controls

## Privacy and protection highlights
### Permission strategy
AA WhatsApp follows a cleaner permission model focused on core communication requirements.

### Account safety
The app includes regular anti-ban tuning and package-level optimizations to reduce suspicious behavior.

## Installation flow
1. Download APK from the direct button.
2. Enable Unknown Sources if Android requests it.
3. Install and verify your number.
4. Restore chats and configure privacy settings.

## Final thoughts
If you want a balance of performance, customization, and privacy improvements, AA WhatsApp is the most complete AA Mods communication build.`,
  },
  // ===== AA Business Section =====
  aaBusiness: {
    version: "V1.0",
    baseVersion: "2.25.29.77",
    updateDate: { display: "January 31, 2026", iso: "2026-01-31" },
    downloadLink: "https://aa-mods.vercel.app/aa-business/download",
    directDownloadLink: getSecureDownloadUrl(
      SECURE_DOWNLOAD_ASSETS.aaBusinessMain,
    ),
    mirrorDownloadLink: getSecureDownloadUrl(
      SECURE_DOWNLOAD_ASSETS.aaBusinessMirror,
    ),
    changelog: [
      "NEW: Enterprise deployment toolkit for faster onboarding",
      "NEW: Advanced bulk broadcasting segmentation controls",
      "IMPROVED: Auto-reply accuracy and scheduling reliability",
      "IMPROVED: Analytics dashboards with clearer KPI breakdowns",
      "FIXED: Minor sync issues in catalog management",
    ],
    slug: "aa-business",
    name: "AA Business",
    developer: "AA Mods",
    category: "Business",
    rating: "4.8",
    downloads: "5M+",
    iconType: "business",
    iconImage: ICONS.aaBusiness,
    gradient: "from-blue-500 to-cyan-500",
    subtitle: "Business messaging automation and operations toolkit",
    shortDescription:
      "Professional communication app with scheduling, automation, and customer support workflows.",
    longDescription:
      "AA Business is designed for sellers, teams, and service operators who handle high-volume customer chats.",
    seoTitle: "AA Business APK Download Latest Version | AA Mods",
    seoDescription:
      "Get AA Business by AA Mods with business automation, customer communication tools, and enterprise-style reliability.",
    seoKeywords:
      "AA Business APK, WhatsApp business mod, business broadcast app, customer support messaging, AA Mods",
    whatsNew: [
      "NEW: Enterprise deployment toolkit for faster onboarding",
      "NEW: Advanced bulk broadcasting segmentation controls",
      "IMPROVED: Auto-reply accuracy and scheduling reliability",
      "IMPROVED: Analytics dashboards with clearer KPI breakdowns",
      "FIXED: Minor sync issues in catalog management",
    ],
    blogMarkdown: `## Overview
AA Business is built for teams that need **high-volume communication** with faster response operations.

## Core business features
- Bulk broadcasting with segmentation controls
- Better auto-reply scheduling for support and sales
- Productivity-focused chat handling for daily operations
- Cleaner analytics visibility for campaign tracking

## Best for
### Small business teams
Great for handling customer messages, product queries, and repeat follow-up workflows.

### Service operations
Useful for support teams that need quick replies and organized communication routines.

## Workflow benefits
- Faster first response time
- Better customer follow-up consistency
- More organized outreach and support structure`,
  },
  // ===== CapCut Pro Section =====
  capcutPro: {
    version: "V17.3.0",
    baseVersion: "v17.3.0 Stable",
    updateDate: { display: "February 14, 2026", iso: "2026-02-14" },
    downloadLink: "https://aa-mods.vercel.app/capcut-pro/download",
    directDownloadLink: getSecureDownloadUrl(
      SECURE_DOWNLOAD_ASSETS.capcutProMain,
    ),
    changelog: [
      "AI features working",
      "All templates unlocked",
      "Business creator mode enabled",
      "Security notice removed",
      "Multiple languages available",
      "Regional restrictions removed",
      "No internet connection error",
      "No watermark on export",
      "Optimized & cleaned resources",
      "Faster loading & smooth UI",
      "Battery & performance optimized",
    ],
    slug: "capcut-pro",
    name: "CapCut Pro",
    developer: "AA Mods",
    category: "Video Players & Editors",
    rating: "4.7",
    downloads: "50M+",
    iconType: "capcut",
    iconImage: ICONS.capcutPro,
    gradient: "from-violet-500 to-purple-500",
    subtitle: "Premium mobile editing for creators",
    shortDescription:
      "Advanced editing build with premium templates, AI tools, and export-focused optimization.",
    longDescription:
      "CapCut Pro by AA Mods is tuned for creators who need a smoother timeline, premium resources, and stable long-session editing.",
    seoTitle: "CapCut Pro APK Latest Download | AA Mods",
    seoDescription:
      "Download CapCut Pro latest version from AA Mods with premium templates, AI editing tools, and stable export support.",
    seoKeywords:
      "CapCut Pro APK, CapCut premium unlocked, no watermark export, AI video editing, AA Mods",
    whatsNew: [
      "AI features working",
      "All templates unlocked",
      "Business creator mode enabled",
      "Security notice removed",
      "Multiple languages available",
      "Regional restrictions removed",
      "No internet connection error",
      "No watermark on export",
      "Optimized & cleaned resources",
      "Faster loading & smooth UI",
      "Battery & performance optimized",
    ],
    blogMarkdown: `## Overview
CapCut Pro is for creators who need **faster editing flow** with unlocked premium resources.

## Feature highlights
- Premium templates and transitions enabled
- AI features available for quicker edits
- No-watermark export workflow
- Better performance and battery behavior

## Creator-focused benefits
### Faster project completion
With premium assets and smoother rendering, creators can publish content quicker.

### Cleaner export pipeline
Optimized output handling helps keep rendering and final export more consistent.

## Recommended use cases
- Short-form social content
- Business promo videos
- Daily creator reels and edits`,
  },
  // ===== Remini Mod Section =====
  reminiMod: {
    version: "v3.7.1260",
    baseVersion: "3.7.1260.202519018",
    updateDate: { display: "February 15, 2026", iso: "2026-02-15" },
    downloadLink: "https://aa-mods.vercel.app/remini-mod/download",
    directDownloadLink: getSecureDownloadUrl(
      SECURE_DOWNLOAD_ASSETS.reminiModMain,
    ),
    changelog: [
      "Premium/VIP Unlocked",
      "Unlimited Pro Cards",
      "No Ads, No Watermarks",
      "Advanced AI Technology",
      "Internet connection Issue Solved",
      "100% Working & Safe",
    ],
    slug: "remini-mod",
    name: "Remini Mod",
    developer: "AA Mods",
    category: "Photography",
    rating: "4.6",
    downloads: "20M+",
    iconType: "remini",
    iconImage: ICONS.remini,
    gradient: "from-orange-500 to-rose-500",
    subtitle: "AI photo enhancement and restoration",
    shortDescription:
      "Premium enhancement pipeline for portraits, old images, and blurry photos.",
    longDescription:
      "Remini Mod by AA Mods improves image detail with AI enhancement flows for portraits, old memories, and low-quality camera output.",
    seoTitle: "Remini Mod APK Download Latest | AA Mods",
    seoDescription:
      "Install Remini Mod latest version by AA Mods for AI restoration, portrait enhancement, and premium image tools.",
    seoKeywords:
      "Remini Mod APK, AI photo enhancement, portrait restore app, premium photo tools, AA Mods",
    whatsNew: [
      "Premium/VIP Unlocked",
      "Unlimited Pro Cards",
      "No Ads, No Watermarks",
      "Advanced AI Technology",
      "Internet connection Issue Solved",
      "100% Working & Safe",
    ],
    blogMarkdown: `## Overview
Remini Mod is focused on turning low-quality images into cleaner and sharper results using AI enhancement.

## What you get
- Premium/VIP style enhancement flow
- Portrait detail reconstruction
- Old photo restoration tools
- Better output consistency for social posting

## Best scenarios
### Blurry photos
Helps recover edges and facial detail in soft or noisy images.

### Old memories
Useful for restoring historical photos and family albums.

## Why it works
The build is optimized around enhancement quality while reducing interruptions for a smoother editing session.`,
  },
  // ===== YouTube Premium Mod Section =====
  youtubePremium: {
    version: "v20.45.39",
    baseVersion: "20.45.39 stable",
    updateDate: { display: "February 17, 2026", iso: "2026-02-17" },
    downloadLink: "https://aa-mods.vercel.app/youtube-premium-mod/install",
    directDownloadLink: getSecureDownloadUrl(
      SECURE_DOWNLOAD_ASSETS.youtubePremiumMain,
    ),
    aaModsServicesRequired: true,
    changelog: [
      "Ad-free playback",
      "Background play",
      "SponsorBlock + RYD",
      "Enhanced 1080p bitrate",
      "AA Mods Services login support",
    ],
    slug: "youtube-premium-mod",
    name: "YouTube Premium Mod",
    developer: "AA Mods",
    category: "Video",
    rating: "4.5",
    downloads: "30M+",
    iconType: "youtube",
    iconImage: ICONS.youtube,
    gradient: "from-red-500 to-rose-500",
    subtitle: "Enhanced playback controls for video streaming",
    shortDescription:
      "Cleaner watch experience with background playback and quality-focused controls.",
    longDescription:
      "YouTube Premium Mod by AA Mods is designed for uninterrupted viewing with advanced playback behavior and support components through AA Mods Services.",
    seoTitle: "YouTube Premium Mod APK Download | AA Mods",
    seoDescription:
      "Download YouTube Premium Mod by AA Mods with advanced playback options, SponsorBlock support, and updated builds.",
    seoKeywords:
      "YouTube Premium Mod APK, background playback mod, SponsorBlock APK, ad-free video app, AA Mods",
    seeMoreMods: [
      { label: "YouTube Music Mod APK", slug: "youtube-music-mod" },
    ],
    whatsNew: [
      "Ad-free playback",
      "Background play",
      "SponsorBlock + RYD",
      "Enhanced 1080p bitrate",
      "AA Mods Services login support",
    ],
    blogMarkdown: `## Overview
YouTube Premium Mod is built for users who want a smoother video experience with stronger playback control.

## Main features
- Ad-free style viewing behavior
- Background playback support
- Better bitrate and quality behavior
- AA Mods Services compatibility for account flow

## User experience improvements
### Daily viewing
Reduces interruption and improves continuity for long sessions.

### Control options
Provides extra playback options not always available in standard builds.

## Good to know
For login-related features, keep AA Mods Services updated to the latest compatible release.`,
  },
  // ===== YouTube Music Mod Section =====
  youtubeMusic: {
    version: "v8.45.32",
    baseVersion: "8.45.32 stable",
    updateDate: { display: "February 20, 2026", iso: "2026-02-20" },
    downloadLink: "https://aa-mods.vercel.app/youtube-music-mod/install",
    directDownloadLink: getSecureDownloadUrl(
      SECURE_DOWNLOAD_ASSETS.youtubeMusicMain,
    ),
    aaModsServicesRequired: true,
    changelog: [
      "Ad-free music streaming",
      "Background playback",
      "Offline downloads",
      "OLED dark theme",
      "High quality audio unlock",
    ],
    slug: "youtube-music-mod",
    name: "YouTube Music Mod",
    developer: "AA Mods",
    category: "Music & Audio",
    rating: "4.5",
    downloads: "15M+",
    iconType: "youtubeMusic",
    iconImage: ICONS.youtubeMusic,
    gradient: "from-fuchsia-500 to-pink-500",
    subtitle: "Premium listening with playback freedom",
    shortDescription:
      "High-quality audio, background listening, and smoother daily music performance.",
    longDescription:
      "YouTube Music Mod by AA Mods brings premium listening behavior, streamlined controls, and reliable long-session music playback.",
    seoTitle: "YouTube Music Mod APK Latest Download | AA Mods",
    seoDescription:
      "Get YouTube Music Mod latest version by AA Mods with background playback, high quality audio, and premium listening controls.",
    seoKeywords:
      "YouTube Music Mod APK, background music playback, high quality audio unlock, music mod app, AA Mods",
    seeMoreMods: [
      { label: "YouTube Premium Mod APK", slug: "youtube-premium-mod" },
    ],
    whatsNew: [
      "Ad-free music streaming",
      "Background playback",
      "Offline downloads",
      "OLED dark theme",
      "High quality audio unlock",
    ],
    blogMarkdown: `## Overview
YouTube Music Mod is optimized for uninterrupted listening with premium-style playback behavior.

## Feature set
- Background listening support
- High-quality audio behavior
- OLED-friendly UI style
- Stable long-session playback controls

## Listening use cases
### Work sessions
Keep audio running in background while using other apps.

### Daily commute
Improved control flow for long listening periods.

## Summary
If you need better playback freedom and cleaner listening UX, this is the strongest AA Mods music build.`,
  },
} as const;

export type AppKey = keyof typeof APP_DATA;
export const storeApps = Object.values(APP_DATA);
export const getStoreApp = (slug: string) =>
  storeApps.find((app) => app.slug === slug);
export const storeCategories = [
  "All",
  ...Array.from(new Set(storeApps.map((app) => app.category))),
];
