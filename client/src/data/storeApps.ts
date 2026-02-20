import reminiLogo from "@assets/download_1771149808669.png";
import { APP_CONFIGS, APP_FEATURES, type AppKey } from "@/config/appConfig";

const AA_WHATSAPP_ICON_URL = "https://i.postimg.cc/N0p0fsf1/81ddf498-7efe-4101-83b1-101a77abf065.jpg";
const CAPCUT_ICON_URL = "https://i.postimg.cc/q71j1h4d/capcut-pro.png";
const AA_BUSINESS_ICON_URL = "https://i.postimg.cc/59vMs9dS/a8abc6a4_b6d9_4453_8a6a_08ffa7ad85d7.jpg";
const YOUTUBE_ICON_URL = "https://i.postimg.cc/4y3bZ6cj/download-1-removebg-preview.png";
const YOUTUBE_MUSIC_ICON_URL = "https://i.postimg.cc/y6wzMTBm/cropped-circle-image-(3).png";

export type AppIconType = "whatsapp" | "business" | "capcut" | "remini" | "youtube" | "youtubeMusic";

type AppEditableContent = {
  slug: string;
  name: string;
  developer: string;
  category: string;
  rating: string;
  downloads: string;
  iconType: AppIconType;
  iconImage?: string;
  gradient: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  blogMarkdown: string;
  note?: string;
  seeMoreMods?: Array<{ label: string; slug: string }>;
};

const APP_CONTENT: Record<AppKey, AppEditableContent> = {
  aaWhatsApp: {
    slug: "aa-whatsapp",
    name: "AA WhatsApp",
    developer: "AA Mods",
    category: "Communication",
    rating: "4.9",
    downloads: "10M+",
    iconType: "whatsapp",
    iconImage: AA_WHATSAPP_ICON_URL,
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
    note:
      "If installation protection appears, tap Install anyway from Android security prompt. Keep AA Mods Services updated for best compatibility.",
    seeMoreMods: [{ label: "YouTube Premium Mod APK", slug: "youtube-premium-mod" }],
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
  aaBusiness: {
    slug: "aa-business",
    name: "AA Business",
    developer: "AA Mods",
    category: "Business",
    rating: "4.8",
    downloads: "5M+",
    iconType: "business",
    iconImage: AA_BUSINESS_ICON_URL,
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
  capcutPro: {
    slug: "capcut-pro",
    name: "CapCut Pro",
    developer: "AA Mods",
    category: "Video Players & Editors",
    rating: "4.7",
    downloads: "50M+",
    iconType: "capcut",
    iconImage: CAPCUT_ICON_URL,
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
  reminiMod: {
    slug: "remini-mod",
    name: "Remini Mod",
    developer: "AA Mods",
    category: "Photography",
    rating: "4.6",
    downloads: "20M+",
    iconType: "remini",
    iconImage: reminiLogo,
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
  youtubePremium: {
    slug: "youtube-premium-mod",
    name: "YouTube Premium Mod",
    developer: "AA Mods",
    category: "Video",
    rating: "4.5",
    downloads: "30M+",
    iconType: "youtube",
    iconImage: YOUTUBE_ICON_URL,
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
    seeMoreMods: [{ label: "YouTube Music Mod APK", slug: "youtube-music-mod" }],
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
  youtubeMusic: {
    slug: "youtube-music-mod",
    name: "YouTube Music Mod",
    developer: "AA Mods",
    category: "Music & Audio",
    rating: "4.5",
    downloads: "15M+",
    iconType: "youtubeMusic",
    iconImage: YOUTUBE_MUSIC_ICON_URL,
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
    seeMoreMods: [{ label: "YouTube Premium Mod APK", slug: "youtube-premium-mod" }],
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
};

export type StoreApp = AppEditableContent & {
  key: AppKey;
  version: string;
  baseVersion: string;
  updatedDisplay: string;
  updatedISO: string;
  directDownloadLink: string;
  whatsNew: string[];
};

const getFallbackDownloadLink = (appKey: AppKey) =>
  APP_CONFIGS[appKey].directDownloadLink ?? APP_CONFIGS[appKey].downloadLink;

export const storeApps: StoreApp[] = (Object.keys(APP_CONFIGS) as AppKey[]).map((appKey) => {
  const config = APP_CONFIGS[appKey];
  const content = APP_CONTENT[appKey];

  return {
    key: appKey,
    ...content,
    version: config.version,
    baseVersion: config.baseVersion,
    updatedDisplay: config.updateDate.display,
    updatedISO: config.updateDate.iso,
    directDownloadLink: getFallbackDownloadLink(appKey),
    whatsNew: APP_FEATURES[appKey],
  };
});

export const getStoreApp = (slug: string) => storeApps.find((app) => app.slug === slug);

/*
  Easy maintenance notes:
  - Add/edit/remove app technical data in APP_CONFIGS (client/src/config/appConfig.ts)
  - Add/edit/remove app page content + markdown blog in APP_CONTENT above
  - Home + details pages update automatically
*/
