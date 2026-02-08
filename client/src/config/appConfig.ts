export const APP_VERSIONS = {
  aaWhatsApp: "V3.50",
  aaBusiness: "V1.0",
} as const;

export const APP_VERSION_LOWER = {
  aaWhatsApp: APP_VERSIONS.aaWhatsApp.toLowerCase(),
  aaBusiness: APP_VERSIONS.aaBusiness.toLowerCase(),
} as const;

export const APP_DOWNLOAD_LINKS = {
  aaWhatsApp: "https://aa-mods.vercel.app/aa-whatsapp/download",
  aaBusiness: "https://aa-mods.vercel.app/aa-business/download",
} as const;

export const APP_DIRECT_DOWNLOAD_LINKS = {
  aaWhatsApp: "https://ahsanali.short.gy/aa-whatsapp",
  aaBusiness: "https://ahsanali.short.gy/aa-wa-pro",
} as const;

export const APP_MIRROR_DOWNLOAD_LINKS = {
  aaBusiness: "https://www.mediafire.com/file/aabusiness_v1.0.apk",
} as const;
