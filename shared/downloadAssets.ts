const APP_DOWNLOAD_ASSET_IDS = {
  aaWhatsApp: {
    modern: "aa-whatsapp-modern",
    legacy: "aa-whatsapp-legacy",
  },
  aaBusiness: {
    main: "aa-business-main",
    mirror: "aa-business-mirror",
  },
  capcutPro: {
    main: "capcut-pro-main",
  },
  reminiMod: {
    main: "remini-mod-main",
  },
  youtubePremium: {
    main: "youtube-premium-main",
  },
  youtubeMusic: {
    main: "youtube-music-main",
  },
} as const;

export const SECURE_DOWNLOAD_ASSETS = {
  aaWhatsAppModern: APP_DOWNLOAD_ASSET_IDS.aaWhatsApp.modern,
  aaWhatsAppLegacy: APP_DOWNLOAD_ASSET_IDS.aaWhatsApp.legacy,
  aaBusinessMain: APP_DOWNLOAD_ASSET_IDS.aaBusiness.main,
  aaBusinessMirror: APP_DOWNLOAD_ASSET_IDS.aaBusiness.mirror,
  capcutProMain: APP_DOWNLOAD_ASSET_IDS.capcutPro.main,
  reminiModMain: APP_DOWNLOAD_ASSET_IDS.reminiMod.main,
  youtubePremiumMain: APP_DOWNLOAD_ASSET_IDS.youtubePremium.main,
  youtubeMusicMain: APP_DOWNLOAD_ASSET_IDS.youtubeMusic.main,
} as const;

const APP_DOWNLOAD_REDIRECT_GROUPS = {
  aaWhatsApp: {
    [APP_DOWNLOAD_ASSET_IDS.aaWhatsApp.modern]: "https://ahsanali.short.gy/aa-wa-latest",
    [APP_DOWNLOAD_ASSET_IDS.aaWhatsApp.legacy]: "https://ahsanali.short.gy/aa-whatsapp",
  },
  aaBusiness: {
    [APP_DOWNLOAD_ASSET_IDS.aaBusiness.main]: "https://ahsanali.short.gy/aa-wa-pro",
    [APP_DOWNLOAD_ASSET_IDS.aaBusiness.mirror]: "https://www.mediafire.com/file/aabusiness_v1.0.apk",
  },
  capcutPro: {
    [APP_DOWNLOAD_ASSET_IDS.capcutPro.main]: "https://ahsanali.short.gy/capcut-ahsan",
  },
  reminiMod: {
    [APP_DOWNLOAD_ASSET_IDS.reminiMod.main]: "https://ahsanali.short.gy/remini-ahsan",
  },
  youtubePremium: {
    [APP_DOWNLOAD_ASSET_IDS.youtubePremium.main]: "https://ahsanali.short.gy/youtube-ahsan",
  },
  youtubeMusic: {
    [APP_DOWNLOAD_ASSET_IDS.youtubeMusic.main]: "https://ahsanali.short.gy/aa-music-premium",
  },
} as const;

const redirectMap = {
  ...APP_DOWNLOAD_REDIRECT_GROUPS.aaWhatsApp,
  ...APP_DOWNLOAD_REDIRECT_GROUPS.aaBusiness,
  ...APP_DOWNLOAD_REDIRECT_GROUPS.capcutPro,
  ...APP_DOWNLOAD_REDIRECT_GROUPS.reminiMod,
  ...APP_DOWNLOAD_REDIRECT_GROUPS.youtubePremium,
  ...APP_DOWNLOAD_REDIRECT_GROUPS.youtubeMusic,
} as const;

const assertHttpsUrl = (value: string, asset: string) => {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error(`Invalid download URL for asset "${asset}".`);
  }

  if (parsed.protocol !== "https:") {
    throw new Error(`Insecure download URL for asset "${asset}". HTTPS is required.`);
  }
};

Object.entries(redirectMap).forEach(([asset, url]) => {
  assertHttpsUrl(url, asset);
});

export const APP_DOWNLOAD_REDIRECTS = Object.freeze(redirectMap);

export type SecureDownloadAsset = keyof typeof APP_DOWNLOAD_REDIRECTS;

export const getSecureDownloadUrl = (asset: SecureDownloadAsset) => APP_DOWNLOAD_REDIRECTS[asset];
