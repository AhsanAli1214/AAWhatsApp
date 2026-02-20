import { APP_DOWNLOAD_REDIRECTS, SECURE_DOWNLOAD_ASSETS, getSecureDownloadUrl } from "@shared/downloadAssets";

export { APP_DOWNLOAD_REDIRECTS, SECURE_DOWNLOAD_ASSETS, getSecureDownloadUrl };

type UpdateDate = {
  display: string;
  short: string;
  iso: string;
};

type AppConfigEntry = {
  version: string;
  baseVersion: string;
  updateDate: UpdateDate;
  downloadLink: string;
  directDownloadLink?: string;
  mirrorDownloadLink?: string;
  changelog?: string;
  features?: readonly string[];
};

const SHARED_LINKS = {
  aaModsServices: "https://ahsanali.short.gy/services-ahsan",
} as const;

const APP_ROUTES = {
  aaWhatsApp: "https://aa-mods.vercel.app/aa-whatsapp/download",
  aaBusiness: "https://aa-mods.vercel.app/aa-business/download",
  capcutPro: "https://aa-mods.vercel.app/capcut-pro/download",
  reminiMod: "https://aa-mods.vercel.app/remini-mod/download",
  youtubePremium: "https://aa-mods.vercel.app/youtube-premium-mod/install",
  youtubeMusicHome: "https://aa-mods.vercel.app/youtube-music-mod",
  youtubeMusicFeatures: "https://aa-mods.vercel.app/youtube-music-mod/features",
  youtubeMusicInstall: "https://aa-mods.vercel.app/youtube-music-mod/install",
} as const;

const splitLines = (value: string) =>
  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^(NEW:|IMPROVED:|FIXED:|✅)\s*/i, "").trim());

const getFeatures = (config: Pick<AppConfigEntry, "features" | "changelog">) => {
  if (config.features) {
    return [...config.features];
  }

  if (config.changelog) {
    return splitLines(config.changelog);
  }

  return [];
};

const mapConfigValues = <T>(selector: (config: AppConfigEntry) => T) =>
  Object.fromEntries(
    Object.entries(APP_CONFIGS).map(([appKey, config]) => [appKey, selector(config)]),
  ) as Record<keyof typeof APP_CONFIGS, T>;

export const APP_CONFIGS = {
  aaWhatsApp: {
    version: "V4.0",
    baseVersion: "2.25.36.73",
    updateDate: {
      display: "February 15, 2026",
      short: "15/02/2026",
      iso: "2026-02-15",
    },
    downloadLink: APP_ROUTES.aaWhatsApp,
    directDownloadLink: getSecureDownloadUrl(SECURE_DOWNLOAD_ASSETS.aaWhatsAppModern),
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
  },
  aaBusiness: {
    version: "V1.0",
    baseVersion: "2.25.29.77",
    updateDate: {
      display: "January 31, 2026",
      short: "31/01/2026",
      iso: "2026-01-31",
    },
    downloadLink: APP_ROUTES.aaBusiness,
    directDownloadLink: getSecureDownloadUrl(SECURE_DOWNLOAD_ASSETS.aaBusinessMain),
    mirrorDownloadLink: getSecureDownloadUrl(SECURE_DOWNLOAD_ASSETS.aaBusinessMirror),
    changelog: `NEW: Enterprise deployment toolkit for faster onboarding
NEW: Advanced bulk broadcasting segmentation controls
IMPROVED: Auto-reply accuracy and scheduling reliability
IMPROVED: Analytics dashboards with clearer KPI breakdowns
FIXED: Minor sync issues in catalog management`,
  },
  capcutPro: {
    version: "V17.3.0",
    baseVersion: "v17.3.0 Stable",
    updateDate: {
      display: "February 14, 2026",
      short: "14/02/2026",
      iso: "2026-02-14",
    },
    downloadLink: APP_ROUTES.capcutPro,
    directDownloadLink: getSecureDownloadUrl(SECURE_DOWNLOAD_ASSETS.capcutProMain),
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
  },
  reminiMod: {
    version: "v3.7.1260",
    baseVersion: "3.7.1260.202519018",
    updateDate: {
      display: "February 15, 2026",
      short: "15/02/2026",
      iso: "2026-02-15",
    },
    downloadLink: APP_ROUTES.reminiMod,
    directDownloadLink: getSecureDownloadUrl(SECURE_DOWNLOAD_ASSETS.reminiModMain),
    features: [
      "Premium/VIP Unlocked",
      "Unlimited Pro Cards",
      "No Ads, No Watermarks",
      "Advanced AI Technology",
      "Internet connection Issue Solved",
      "100% Working & Safe",
    ],
  },
  youtubePremium: {
    version: "v20.45.39",
    baseVersion: "20.45.39 stable",
    updateDate: {
      display: "February 17, 2026",
      short: "17/02/2026",
      iso: "2026-02-17",
    },
    downloadLink: APP_ROUTES.youtubePremium,
    aaModsServicesDownloadLink: SHARED_LINKS.aaModsServices,
    youtubeApkDownloadLink: "https://ahsanali.short.gy/youtube-ahsan",
    features: [
      "Ad-free playback",
      "Background play",
      "SponsorBlock + RYD",
      "Enhanced 1080p bitrate",
      "AA Mods Services login support",
    ],
  },
  youtubeMusic: {
    version: "v8.20.52",
    baseVersion: "8.20.52 stable",
    updateDate: {
      display: "February 20, 2026",
      short: "20/02/2026",
      iso: "2026-02-20",
    },
    downloadLink: APP_ROUTES.youtubeMusicInstall,
    aaModsServicesDownloadLink: SHARED_LINKS.aaModsServices,
    homeLink: APP_ROUTES.youtubeMusicHome,
    featuresLink: APP_ROUTES.youtubeMusicFeatures,
    installLink: APP_ROUTES.youtubeMusicInstall,
    features: [
      "Ad-free music streaming",
      "Background playback",
      "Offline downloads",
      "OLED dark theme",
      "High quality audio unlock",
    ],
  },
} as const satisfies Record<string, AppConfigEntry>;

export type AppKey = keyof typeof APP_CONFIGS;

export const AA_WHATSAPP_CONFIG = APP_CONFIGS.aaWhatsApp;
export const AA_BUSINESS_CONFIG = APP_CONFIGS.aaBusiness;
export const CAPCUT_PRO_CONFIG = APP_CONFIGS.capcutPro;
export const REMINI_MOD_CONFIG = APP_CONFIGS.reminiMod;
export const YOUTUBE_PREMIUM_CONFIG = APP_CONFIGS.youtubePremium;
export const YOUTUBE_MUSIC_CONFIG = APP_CONFIGS.youtubeMusic;

export const getAppConfig = <T extends AppKey>(appKey: T) => APP_CONFIGS[appKey];

// Legacy Exports for Backward Compatibility
export const APP_VERSIONS = mapConfigValues((config) => config.version) as {
  [K in AppKey]: (typeof APP_CONFIGS)[K]["version"];
};

export const APP_VERSION_LOWER = mapConfigValues((config) => config.version.toLowerCase()) as {
  [K in AppKey]: string;
};

export const APP_BASE_VERSIONS = mapConfigValues((config) => config.baseVersion) as {
  [K in AppKey]: (typeof APP_CONFIGS)[K]["baseVersion"];
};

export const APP_FEATURES = mapConfigValues((config) => getFeatures(config)) as {
  [K in AppKey]: string[];
};

export const APP_CHANGELOGS = mapConfigValues((config) => {
  if (config.changelog) {
    return config.changelog;
  }

  return getFeatures(config).join("\n");
}) as {
  [K in AppKey]: string;
};

export const APP_UPDATE_DATES = mapConfigValues((config) => config.updateDate) as {
  [K in AppKey]: (typeof APP_CONFIGS)[K]["updateDate"];
};

export const APP_DOWNLOAD_LINKS = {
  ...mapConfigValues((config) => config.downloadLink),
  youtubeMusic: YOUTUBE_MUSIC_CONFIG.homeLink,
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
  legacy: getSecureDownloadUrl(SECURE_DOWNLOAD_ASSETS.aaWhatsAppLegacy),
  modern: getSecureDownloadUrl(SECURE_DOWNLOAD_ASSETS.aaWhatsAppModern),
} as const;

// Global Floating Poster Configuration
export const FLOATING_POSTER_CONFIG = {
  enabled: true,
  imageUrl: "https://i.postimg.cc/tgHVCwP3/Gemini-Generated-Image-r9qxbr9qxbr9qxbr.png",
  targetUrl: "https://t.me/AA_ModsOfficial",
  alt: "AA Mods Poster",
} as const;
