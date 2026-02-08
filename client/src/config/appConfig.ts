export const APP_VERSIONS = {
  aaWhatsApp: "V3.50",
  aaBusiness: "V1.0",
} as const;

export const APP_VERSION_LOWER = {
  aaWhatsApp: APP_VERSIONS.aaWhatsApp.toLowerCase(),
  aaBusiness: APP_VERSIONS.aaBusiness.toLowerCase(),
} as const;

export const APP_BASE_VERSIONS = {
  aaWhatsApp: "2.25.36.73",
  aaBusiness: "2.25.29.77",
} as const;

export const APP_CHANGELOGS = {
  aaWhatsApp: `NEW: Profile cover photo support for enhanced personalization
NEW: Status character limit increased up to 500 characters
NEW: Status notification alerts when contacts post new updates
NEW: Read receipt notifications fully restored and improved
NEW: Fresh icons added to home screen and chat options for faster navigation
IMPROVED: Voice message clarity and playback stability
IMPROVED: Message sending and receiving speed with delays fully resolved
IMPROVED: Anti-ban and account protection system
IMPROVED: Overall performance, responsiveness, and app stability
FIXED: Delayed message delivery issues
FIXED: Random lag during chats and status viewing
FIXED: Voice message playback and recording bugs
FIXED: Minor crashes affecting some devices`,
  aaBusiness: `NEW: Enterprise deployment toolkit for faster onboarding
NEW: Advanced bulk broadcasting segmentation controls
IMPROVED: Auto-reply accuracy and scheduling reliability
IMPROVED: Analytics dashboards with clearer KPI breakdowns
FIXED: Minor sync issues in catalog management`,
} as const;

export const APP_UPDATE_DATES = {
  aaWhatsApp: {
    display: "February 08, 2026",
    short: "08/02/2026",
    iso: "2026-02-08",
  },
  aaBusiness: {
    display: "January 31, 2026",
    short: "31/01/2026",
    iso: "2026-01-31",
  },
} as const;

export const APP_DOWNLOAD_LINKS = {
  aaWhatsApp: "https://aa-mods.vercel.app/aa-whatsapp/download",
  aaBusiness: "https://aa-mods.vercel.app/aa-business/download",
} as const;

export const APP_WHATSAPP_PACKAGE_NAMES = {
  legacy: "com.gbwhatsapp",
  modern: "com.aawhatsapp",
} as const;

export const APP_WHATSAPP_PACKAGE_DOWNLOAD_LINKS = {
  legacy: "https://ahsanali.short.gy/aa-whatsapp",
  modern: "https://ahsanali.short.gy/aa-wa-latest",
} as const;

export const APP_DIRECT_DOWNLOAD_LINKS = {
  aaWhatsApp: "https://ahsanali.short.gy/aa-wa-latest",
  aaBusiness: "https://ahsanali.short.gy/aa-wa-pro",
} as const;

export const APP_MIRROR_DOWNLOAD_LINKS = {
  aaBusiness: "https://www.mediafire.com/file/aabusiness_v1.0.apk",
} as const;
