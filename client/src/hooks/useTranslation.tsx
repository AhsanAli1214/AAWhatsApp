import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "en" | "es" | "pt" | "ar" | "fr" | "ur" | "ru" | "id";

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  nav_home: { 
    en: "Home", 
    es: "Inicio", 
    pt: "Início", 
    ar: "الرئيسية",
    fr: "Accueil",
    ur: "ہوم",
    ru: "Главная",
    id: "Beranda"
  },
  adblock_title: {
    en: "Ad-Blocker Detected",
    es: "Bloqueador de anuncios detectado",
    pt: "Bloqueador de anúncios detectado",
    ar: "تم اكتشاف مانع الإعلانات",
    fr: "Bloqueur de publicités détecté",
    ur: "ایڈ بلاکر کا پتہ چلا",
    ru: "Обнаружен блокировщик рекламы",
    id: "Pemblokir Iklan Terdeteksi"
  },
  adblock_description: {
    en: "To keep AAWhatsApp free and maintained, please disable your ad-blocker for this site and refresh the page.",
    es: "Para mantener AAWhatsApp gratuito y actualizado, desactive su bloqueador de anuncios para este sitio y actualice la página.",
    pt: "Para manter o AAWhatsApp gratuito e atualizado, desative o seu bloqueador de anúncios para este site e atualize a página.",
    ar: "للحفاظ على AAWhatsApp مجانًا، يرجى تعطيل مانع الإعلانات لهذا الموقع وتحديث الصفحة.",
    fr: "Pour garder AAWhatsApp gratuit et maintenu, veuillez désactiver votre bloqueur de publicités pour ce site et rafraîchir la page.",
    ur: "AAWhatsApp کو مفت رکھنے کے لیے، براہ کرم اس سائٹ کے لیے اپنے ایڈ بلاکر کو غیر فعال کریں اور صفحہ کو ریفریش کریں۔",
    ru: "Чтобы AAWhatsApp оставался бесплатным, пожалуйста, отключите блокировщик рекламы для этого сайта и обновите страницу.",
    id: "Agar AAWhatsApp tetap gratis, harap nonaktifkan pemblokir iklan Anda untuk situs ini dan segarkan halaman."
  },
  refresh_page: {
    en: "Refresh Page",
    es: "Actualizar página",
    pt: "Atualizar página",
    ar: "تحديث الصفحة",
    fr: "Rafraîchir la page",
    ur: "صفحہ کو ریفریش کریں",
    ru: "Обновить страницу",
    id: "Segarkan Halaman"
  },
  nav_apk: { 
    en: "Download APK", 
    es: "Descargar APK", 
    pt: "Baixar APK", 
    ar: "تحميل APK",
    fr: "Télécharger APK",
    ur: "تحميل APK",
    ru: "Скачать APK",
    id: "Unduh APK"
  },
  nav_support: { 
    en: "Support", 
    es: "Soporte", 
    pt: "Suporte", 
    ar: "الدعم",
    fr: "Support",
    ur: "سپورٹ",
    ru: "Поддержка",
    id: "Dukungan"
  },
  hero_title: { 
    en: "PRO PROTOCOL", 
    es: "PROTOCOLO PRO", 
    pt: "PROTOCOLO PRO", 
    ar: "بروتوكول برو",
    fr: "PROTOCOLE PRO",
    ur: "پرو پروٹوکول",
    ru: "ПРО ПРОТОКОЛ",
    id: "PROTOKOL PRO"
  },
  hero_subtitle: { 
    en: "AA WhatsApp is a next-generation WhatsApp mod designed for users who value privacy and security.",
    es: "AA WhatsApp es un mod de WhatsApp de próxima generación diseñado para usuarios que valoran la privacidad.",
    pt: "AA WhatsApp é um mod de WhatsApp de próxima geração projetado para usuários que valorizam a privacidade.",
    ar: "AA WhatsApp هو تطبيق WhatsApp معدل من الجيل التالي مصمم للمستخدمين الذين يقدرون الخصوصية.",
    fr: "AA WhatsApp est un mod WhatsApp de nouvelle génération conçu pour les utilisateurs qui apprécient la confidentialité.",
    ur: "AA واٹس ایپ ایک اگلی نسل کا واٹس ایپ موڈ ہے جو ان صارفین کے لیے ڈیزائن کیا گیا ہے جو رازداری اور سیکیورٹی کی قدر کرتے ہیں۔",
    ru: "AA WhatsApp — это мод WhatsApp нового поколения, созданный для пользователей, которые ценят конфиденциальность и безопасность.",
    id: "AA WhatsApp adalah mod WhatsApp generasi berikutnya yang dirancang untuk pengguna yang menghargai privasi dan keamanan."
  },
  download_btn: { 
    en: "Download AAWhatsApp APK", 
    es: "Descargar AAWhatsApp APK", 
    pt: "Baixar AAWhatsApp APK", 
    ar: "تحميل AAWhatsApp APK",
    fr: "Télécharger AAWhatsApp APK",
    ur: "AAWhatsApp APK ڈاؤن لوڈ کریں",
    ru: "Скачать AAWhatsApp APK",
    id: "Unduh AAWhatsApp APK"
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  const dir = (language === "ar" || language === "ur") ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
}
