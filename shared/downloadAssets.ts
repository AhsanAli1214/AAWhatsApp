export const SECURE_DOWNLOAD_ASSETS = {
  aaWhatsAppModern: "aa-whatsapp-modern",
  aaWhatsAppLegacy: "aa-whatsapp-legacy",
  aaBusinessMain: "aa-business-main",
  aaBusinessMirror: "aa-business-mirror",
  capcutProMain: "capcut-pro-main",
  reminiModMain: "remini-mod-main",
} as const;

export const APP_DOWNLOAD_REDIRECTS = {
  [SECURE_DOWNLOAD_ASSETS.aaWhatsAppModern]: "https://ahsanali.short.gy/aa-wa-latest",
  [SECURE_DOWNLOAD_ASSETS.aaWhatsAppLegacy]: "https://ahsanali.short.gy/aa-whatsapp",
  [SECURE_DOWNLOAD_ASSETS.aaBusinessMain]: "https://ahsanali.short.gy/aa-wa-pro",
  [SECURE_DOWNLOAD_ASSETS.aaBusinessMirror]: "https://www.mediafire.com/file/aabusiness_v1.0.apk",
  [SECURE_DOWNLOAD_ASSETS.capcutProMain]: "https://ahsanali.short.gy/capcut-ahsan",
  [SECURE_DOWNLOAD_ASSETS.reminiModMain]: "https://ahsanali.short.gy/remini-ahsan",
} as const;

export type SecureDownloadAsset = keyof typeof APP_DOWNLOAD_REDIRECTS;

export const getSecureDownloadUrl = (asset: SecureDownloadAsset) =>
  `/secure-download?asset=${encodeURIComponent(asset)}`;
