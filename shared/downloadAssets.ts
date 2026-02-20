export const SECURE_DOWNLOAD_ASSETS = {
  aaWhatsAppModern: "aa-whatsapp-modern",
  aaWhatsAppLegacy: "aa-whatsapp-legacy",
  aaBusinessMain: "aa-business-main",
  aaBusinessMirror: "aa-business-mirror",
  capcutProMain: "capcut-pro-main",
  reminiModMain: "remini-mod-main",
  youtubePremiumMain: "youtube-premium-main",
  youtubeMusicMain: "youtube-music-main",
} as const;

const redirectMap = {
  [SECURE_DOWNLOAD_ASSETS.aaWhatsAppModern]: "https://ahsanali.short.gy/aa-wa-latest",
  [SECURE_DOWNLOAD_ASSETS.aaWhatsAppLegacy]: "https://ahsanali.short.gy/aa-whatsapp",
  [SECURE_DOWNLOAD_ASSETS.aaBusinessMain]: "https://ahsanali.short.gy/aa-wa-pro",
  [SECURE_DOWNLOAD_ASSETS.aaBusinessMirror]: "https://www.mediafire.com/file/aabusiness_v1.0.apk",
  [SECURE_DOWNLOAD_ASSETS.capcutProMain]: "https://ahsanali.short.gy/capcut-ahsan",
  [SECURE_DOWNLOAD_ASSETS.reminiModMain]: "https://ahsanali.short.gy/remini-ahsan",
  [SECURE_DOWNLOAD_ASSETS.youtubePremiumMain]: "https://ahsanali.short.gy/youtube-ahsan",
  [SECURE_DOWNLOAD_ASSETS.youtubeMusicMain]: "https://via.placeholder.com/350x100/1e88e5/ffffff?text=++DOWNLOAD+LATEST+MOD++v8.20.52++",
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
