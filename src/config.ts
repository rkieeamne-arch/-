/**
 * ====================================================================
 * ⚙️ إعدادات تطبيق عالم الأنمي (Anime World Configuration)
 * ====================================================================
 * يمكنك تعديل رابط التحميل والرابط الأساسي للموقع (Canonical URL) والمعلومات الأساسية من هذا الملف مباشرة.
 */

// 🌐 الرابط الأساسي للموقع (Canonical URL) لمحركات البحث Google
export const CANONICAL_URL = "https://ais-pre-tc3dydvbufjqcfbvsfumvm-287014606431.europe-west2.run.app/";

// 🔗 رابط التحميل المباشر من ميديا فاير (MediaFire)
export const DOWNLOAD_LINK = "https://www.mediafire.com/file/7j2hnsnisggc3aq/%25D8%25B9%25D8%25A7%25D9%2584%25D9%2585_%25D8%25A3%25D9%2586%25D9%2585%25D9%258A.apk/file";

export const APP_CONFIG = {
  // اسم التطبيق
  appName: "عالم الأنمي",
  appEnglishName: "Anime World",
  
  // عنوان الصفحة في محركات البحث
  seoTitle: "تحميل تطبيق عالم الأنمي - Anime World",
  
  // وصف الصفحة لمحركات البحث (Meta Description)
  seoDescription: "قم بتحميل تطبيق عالم الأنمي (Anime World) لأجهزة Android من الرابط المباشر. تطبيق بسيط لمتابعة الأنمي والاستمتاع بأعمالك المفضلة دون إعلانات مزعجة - الإصدار 1.0.0.",

  // الوصف المختصر الظاهر في أعلى الصفحة
  appTagline: "تطبيق بسيط لمتابعة الأنمي والاستمتاع بأعمالك المفضلة دون إعلانات مزعجة.",
  
  // الروابط الأساسية
  canonicalUrl: CANONICAL_URL,
  downloadLink: DOWNLOAD_LINK,
  
  // رقم إصدار التطبيق
  version: "1.0.0",
  
  // حجم الملف التقريبي
  fileSize: "8.4 ميجابايت",
  
  // متطلبات النظام
  requiredSystem: "Android 7.0+",
  
  // نوع الملف
  fileType: "APK للأندرويد",

  // نص تنبيه وإرشادات التحميل
  installInstructions: {
    title: "تعليمات التحميل",
    warningNotice: "إذا ظهر لك تحذير أثناء تنزيل التطبيق، فهذا طبيعي. اضغط على «مزيد من الخيارات» ثم اختر «تنزيل على أي حال».",
    step1: "اضغط على زر تحميل التطبيق في الأعلى",
    step2: "في حال ظهور رسالة أمان النظام، اضغط «مزيد من التفاصيل» أو «مزيد من الخيارات»",
    step3: "اختر «تنزيل على أي حال» ثم قم بتثبيت التطبيق مباشرة",
  },
  
  // روابط الصور
  mainAppImage: "/images/app_preview.png",
  instructionImage: "/images/install_guide.png",
  ogImage: "/og-image.jpg",
  
  // نص الفوتر
  footerText: "Anime World • Version 1.0.0",
};
