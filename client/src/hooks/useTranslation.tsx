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
    fr: "AA WhatsApp est un mod WhatsApp de nouvelle generación conçu pour les utilisateurs qui apprécient la confidentialité.",
    ur: "AA واٹس ایپ ایک اگلی نسل کا واٹس ایپ موڈ ہے جو ان صارفین کے لیے ڈیزائن کیا گیا ہے جو رازداری اور سیکیورٹی کی قدر کرتے ہیں۔",
    ru: "AA WhatsApp — это мод WhatsApp нового поколения, созданный для пользователей, которые ценят конфиденциальность и безопасность.",
    id: "AA WhatsApp adalah mod WhatsApp generasi berikutnya yang dirancang untuk pengguna yang menghargai privasi dan keamanan."
  },
  feature_anti_ban_title: {
    en: "Military-Grade Anti-Ban v2.0",
    es: "Anti-Ban de grado militar v2.0",
    pt: "Anti-Ban de grau militar v2.0",
    ar: "مكافحة الحظر من الدرجة العسكرية v2.0",
    fr: "Anti-Ban de qualité militaire v2.0",
    ur: "ملٹری گریڈ اینٹی بین v2.0",
    ru: "Анти-бан военного уровня v2.0",
    id: "Anti-Ban Kelas Militer v2.0"
  },
  feature_anti_ban_desc: {
    en: "Experience 100% account stability with our daily-updated bypassing scripts that stay ahead of security checks.",
    es: "Experimente una estabilidad de cuenta del 100% con nuestros scripts de omisión actualizados diariamente.",
    pt: "Experimente 100% de estabilidade de conta com nossos scripts de bypass atualizados diariamente.",
    ar: "استمتع باستقرار الحساب بنسبة 100% من خلال نصوص التجاوز المحدثة يوميًا.",
    fr: "Profitez d'une stabilité de compte à 100% avec nos scripts de contournement mis à jour quotidiennement.",
    ur: "روزانہ اپ ڈیٹ ہونے والے بائی پاسنگ اسکرپٹس کے ساتھ 100% اکاؤنٹ کے استحکام کا تجربہ کریں۔",
    ru: "Обеспечьте 100% стабильность аккаунта с помощью наших ежедневно обновляемых скриптов обхода.",
    id: "Nikmati stabilitas akun 100% dengan skrip bypass yang diperbarui setiap hari."
  },
  feature_privacy_title: {
    en: "Zero-Permission Privacy Core™",
    es: "Núcleo de privacidad de permiso cero™",
    pt: "Núcleo de privacidade de permissão zero™",
    ar: "نواة الخصوصية عديمة التصاريح™",
    fr: "Cœur de confidentialité sans permission™",
    ur: "زیرو پرمیشن پرائیویسی کور™",
    ru: "Ядро конфиденциальности с нулевыми разрешениями™",
    id: "Inti Privasi Tanpa Izin™"
  },
  feature_privacy_desc: {
    en: "Total isolation of your banking, files, and location data. No hidden trackers, just pure anonymous messaging.",
    es: "Aislamiento total de sus datos bancarios, archivos y ubicación. Sin rastreadores ocultos.",
    pt: "Isolamento total de seus dados bancários, arquivos e localização. Sem rastreadores ocultos.",
    ar: "عزل كامل لبياناتك المصرفية وملفاتك وموقعك. لا توجد أدوات تتبع مخفية.",
    fr: "Isolation totale de vos données bancaires, fichiers et localisation. Aucun traqueur caché.",
    ur: "آپ کے بینکنگ، فائلز اور لوکیشن ڈیٹا کی مکمل تنہائی۔ کوئی پوشیدہ ٹریکرز نہیں۔",
    ru: "Полная изоляция ваших банковских данных, файлов и местоположения. Никаких скрытых трекеров.",
    id: "Isolasi total data perbankan, file, dan lokasi Anda. Tanpa pelacak tersembunyi."
  },
  feature_themes_title: {
    en: "4000+ Premium Visual Themes",
    es: "Más de 4000 temas visuales premium",
    pt: "Mais de 4000 temas visuais premium",
    ar: "أكثر من 4000 سمة مرئية مميزة",
    fr: "Plus de 4000 thèmes visuels premium",
    ur: "4000+ پریمیم بصری تھیمز",
    ru: "Более 4000 премиальных визуальных тем",
    id: "4000+ Tema Visual Premium"
  },
  feature_themes_desc: {
    en: "Transform your interface with an elite library of custom styles, fonts, and layouts tailored for your vibe.",
    es: "Transforme su interfaz con una biblioteca de élite de estilos y diseños personalizados.",
    pt: "Transforme sua interface com uma biblioteca de elite de estilos e layouts personalizados.",
    ar: "قم بتحويل واجهتك من خلال مكتبة نخبوية من الأنماط والتخطيطات المخصصة.",
    fr: "Transformez votre interface avec une bibliothèque d'élite de styles et de mises en page personnalisés.",
    ur: "اپنی مرضی کے مطابق اسٹائلز اور لے آؤٹ کی ایلیٹ لائبریری کے ساتھ اپنے انٹرفیس کو تبدیل کریں۔",
    ru: "Преобразите свой интерфейс с помощью элитной библиотеки пользовательских стилей и макетов.",
    id: "Ubah antarmuka Anda dengan perpustakaan elit gaya dan tata letak khusus."
  },
  feature_ghost_title: {
    en: "Ghost Protocol Anonymity",
    es: "Anonimato del protocolo fantasma",
    pt: "Anonimato do protocolo fantasma",
    ar: "إخفاء الهوية في بروتوكول الشبح",
    fr: "Anonymat du protocole fantôme",
    ur: "گھوسٹ پروٹوکول گمنامی",
    ru: "Анонимность протокола «Призрак»",
    id: "Anonimitas Protokol Hantu"
  },
  feature_ghost_desc: {
    en: "Invisibly view statuses, read messages, and hide your 'Typing' or 'Recording' status from everyone.",
    es: "Vea estados y lea mensajes de forma invisible, y oculte su estado de escritura.",
    pt: "Visualize status e leia mensagens de forma invisível e oculte seu status de digitação.",
    ar: "عرض الحالات وقراءة الرسائل بشكل غير مرئي، وإخفاء حالة الكتابة الخاصة بك.",
    fr: "Visualisez les statuts et lisez les messages de manière invisible, et masquez votre statut d'écriture.",
    ur: "پوشیدہ طور پر اسٹیٹس دیکھیں، پیغامات پڑھیں، اور اپنی 'ٹائپنگ' اسٹیٹس چھپائیں۔",
    ru: "Невидимо просматривайте статусы и сообщения, скрывайте свой статус набора текста.",
    id: "Lihat status dan baca pesan secara tidak terlihat, serta sembunyikan status mengetik Anda."
  },
  feature_media_title: {
    en: "Unrestricted HD Media Turbo",
    es: "Turbo de medios HD sin restricciones",
    pt: "Turbo de mídia HD sem restrições",
    ar: "وسائط HD غير مقيدة",
    fr: "Média HD sans restriction Turbo",
    ur: "غیر محدود ایچ ڈی میڈیا ٹربو",
    ru: "Неограниченное HD-медиа Турбо",
    id: "Turbo Media HD Tanpa Batas"
  },
  feature_media_desc: {
    en: "Send 2GB+ files and 100+ images instantly without compression. Your memories stay in crystalline quality.",
    es: "Envíe archivos de más de 2 GB e imágenes de más de 100 al instante sin compresión.",
    pt: "Envie arquivos de mais de 2 GB e mais de 100 imagens instantaneamente sem compressão.",
    ar: "أرسل ملفات تزيد مساحتها عن 2 جيجابايت وأكثر من 100 صورة على الفور بدون ضغط.",
    fr: "Envoyez instantanément des fichiers de plus de 2 Go et plus de 100 images sans compression.",
    ur: "بغیر کمپریشن کے فوری طور پر 2GB+ فائلیں اور 100+ تصاویر بھیجیں۔",
    ru: "Мгновенно отправляйте файлы размером более 2 ГБ и более 100 изображений без сжатия.",
    id: "Kirim file 2GB+ dan 100+ gambar secara instan tanpa kompresi."
  },
  feature_speed_title: {
    en: "Lightning Core Performance",
    es: "Rendimiento del núcleo relámpago",
    pt: "Desempenho do núcleo relâmpago",
    ar: "أداء النواة البرقية",
    fr: "Performance du cœur éclair",
    ur: "لائٹننگ کور کی کارکردگی",
    ru: "Молниеносная производительность ядра",
    id: "Performa Inti Kilat"
  },
  feature_speed_desc: {
    en: "Hardened for speed. AAWhatsApp is optimized to run smoother and faster than any other mod available.",
    es: "Optimizado para ser más suave y rápido que cualquier otro mod disponible.",
    pt: "Otimizado para rodar de forma mais suave e rápida do que qualquer outro mod disponível.",
    ar: "تم تحسينه ليعمل بشكل أكثر سلاسة وأسرع من أي تطبيق معدل آخر متاح.",
    fr: "Optimisé pour fonctionner de manière plus fluide et plus rapide que tout autre mod disponible.",
    ur: "کسی بھی دوسرے دستیاب موڈ کے مقابلے میں زیادہ ہموار اور تیز چلانے کے لیے آپٹمائزڈ۔",
    ru: "Оптимизировано для работы более плавно и быстро, чем любой другой доступный мод.",
    id: "Dioptimalkan agar berjalan lebih lancar dan lebih cepat daripada mod lain yang tersedia."
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
