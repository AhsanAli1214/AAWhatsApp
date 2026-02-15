// AA WhatsApp Configuration
export const AA_WHATSAPP_CONFIG = {
  version: "V4.0",
  baseVersion: "2.25.36.73",
  updateDate: {
    display: "February 15, 2026",
    short: "15/02/2026",
    iso: "2026-02-15",
  },
  downloadLink: "https://aa-mods.vercel.app/aa-whatsapp/download",
  directDownloadLink: "https://ahsanali.short.gy/aa-wa-latest",
  changelog: `FIXED: App Crash Problem When Link Device or Register Number
NEW: Profile cover photo support for enhanced personalization
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
};

// AA Business Configuration
export const AA_BUSINESS_CONFIG = {
  version: "V1.0",
  baseVersion: "2.25.29.77",
  updateDate: {
    display: "January 31, 2026",
    short: "31/01/2026",
    iso: "2026-01-31",
  },
  downloadLink: "https://aa-mods.vercel.app/aa-business/download",
  directDownloadLink: "https://ahsanali.short.gy/aa-wa-pro",
  mirrorDownloadLink: "https://www.mediafire.com/file/aabusiness_v1.0.apk",
  changelog: `NEW: Enterprise deployment toolkit for faster onboarding
NEW: Advanced bulk broadcasting segmentation controls
IMPROVED: Auto-reply accuracy and scheduling reliability
IMPROVED: Analytics dashboards with clearer KPI breakdowns
FIXED: Minor sync issues in catalog management`,
};

// CapCut Pro Configuration
export const CAPCUT_PRO_CONFIG = {
  version: "V17.3.0",
  baseVersion: "v17.3.0 Stable",
  updateDate: {
    display: "February 14, 2026",
    short: "14/02/2026",
    iso: "2026-02-14",
  },
  downloadLink: "https://aa-mods.vercel.app/capcut-pro/download",
  directDownloadLink: "https://ahsanali.short.gy/capcut-ahsan",
  features: [
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
};

// Remini Mod Configuration
export const REMINI_MOD_CONFIG = {
  version: "v3.7.701",
  baseVersion: "3.7.701.2024",
  updateDate: {
    display: "February 15, 2026",
    short: "15/02/2026",
    iso: "2026-02-15",
  },
  downloadLink: "https://aa-mods.vercel.app/remini-mod/download",
  directDownloadLink: "https://ahsanali.short.gy/remini-ahsan",
  features: [
    "Premium/VIP Unlocked",
    "Unlimited Pro Cards",
    "No Ads, No Watermarks",
    "Advanced AI Technology",
    "High-Resolution Output",
    "100% Working & Safe",
  ],
};

// Legacy Exports for Backward Compatibility
export const APP_VERSIONS = {
  aaWhatsApp: AA_WHATSAPP_CONFIG.version,
  aaBusiness: AA_BUSINESS_CONFIG.version,
  capcutPro: CAPCUT_PRO_CONFIG.version,
  reminiMod: REMINI_MOD_CONFIG.version,
} as const;

export const APP_VERSION_LOWER = {
  aaWhatsApp: AA_WHATSAPP_CONFIG.version.toLowerCase(),
  aaBusiness: AA_BUSINESS_CONFIG.version.toLowerCase(),
  capcutPro: CAPCUT_PRO_CONFIG.version.toLowerCase(),
  reminiMod: REMINI_MOD_CONFIG.version.toLowerCase(),
} as const;

export const APP_BASE_VERSIONS = {
  aaWhatsApp: AA_WHATSAPP_CONFIG.baseVersion,
  aaBusiness: AA_BUSINESS_CONFIG.baseVersion,
  capcutPro: CAPCUT_PRO_CONFIG.baseVersion,
  reminiMod: REMINI_MOD_CONFIG.baseVersion,
} as const;

const splitLines = (value: string) =>
  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^(NEW:|IMPROVED:|FIXED:|✅)\s*/i, "").trim());

export const APP_FEATURES = {
  aaWhatsApp: splitLines(AA_WHATSAPP_CONFIG.changelog),
  aaBusiness: splitLines(AA_BUSINESS_CONFIG.changelog),
  capcutPro: CAPCUT_PRO_CONFIG.features,
  reminiMod: REMINI_MOD_CONFIG.features,
} as const;

export const APP_CHANGELOGS = {
  aaWhatsApp: AA_WHATSAPP_CONFIG.changelog,
  aaBusiness: AA_BUSINESS_CONFIG.changelog,
  capcutPro: CAPCUT_PRO_CONFIG.features.join("\n"),
  reminiMod: REMINI_MOD_CONFIG.features.join("\n"),
} as const;

export const APP_UPDATE_DATES = {
  aaWhatsApp: AA_WHATSAPP_CONFIG.updateDate,
  aaBusiness: AA_BUSINESS_CONFIG.updateDate,
  capcutPro: CAPCUT_PRO_CONFIG.updateDate,
  reminiMod: REMINI_MOD_CONFIG.updateDate,
} as const;

export const APP_DOWNLOAD_LINKS = {
  aaWhatsApp: AA_WHATSAPP_CONFIG.downloadLink,
  aaBusiness: AA_BUSINESS_CONFIG.downloadLink,
  capcutPro: CAPCUT_PRO_CONFIG.downloadLink,
  reminiMod: REMINI_MOD_CONFIG.downloadLink,
} as const;

export const APP_DIRECT_DOWNLOAD_LINKS = {
  aaWhatsApp: AA_WHATSAPP_CONFIG.directDownloadLink,
  aaBusiness: AA_BUSINESS_CONFIG.directDownloadLink,
  capcutPro: CAPCUT_PRO_CONFIG.directDownloadLink,
  reminiMod: REMINI_MOD_CONFIG.directDownloadLink,
} as const;

export const APP_MIRROR_DOWNLOAD_LINKS = {
  aaBusiness: AA_BUSINESS_CONFIG.mirrorDownloadLink,
  capcutPro: CAPCUT_PRO_CONFIG.directDownloadLink,
} as const;

export const APP_WHATSAPP_PACKAGE_NAMES = {
  legacy: "com.gbwhatsapp",
  modern: "com.aawhatsapp",
} as const;

export const APP_WHATSAPP_PACKAGE_DOWNLOAD_LINKS = {
  legacy: "https://ahsanali.short.gy/aa-whatsapp",
  modern: "https://ahsanali.short.gy/aa-wa-latest",
} as const;


// Global Floating Poster Configuration
export const FLOATING_POSTER_CONFIG = {
  // Turn this on/off anytime
  enabled: true,
  // Change this to any poster image link
  imageUrl: "https://i.postimg.cc/HsPkz8Hy/Gemini-Generated-Image-qb1oceqb1oceqb1o.png",
  // Optional click destination (leave empty to disable click-through)
  targetUrl: "",
  alt: "AA Mods Poster",
} as const;
