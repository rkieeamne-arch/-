import React, { useEffect } from 'react';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { APP_CONFIG, CANONICAL_URL } from './config';
import { AppScreenshot } from './components/AppScreenshot';
import { DownloadButton } from './components/DownloadButton';
import { InstructionSection } from './components/InstructionSection';
import appIcon from './assets/images/anime_world_icon_1790613345211.jpg';

export default function App() {
  // Sync canonical link and og:url with CANONICAL_URL variable from config.ts
  useEffect(() => {
    const canonicalEl = document.getElementById('canonical-link') as HTMLLinkElement | null;
    if (canonicalEl && CANONICAL_URL) {
      canonicalEl.href = CANONICAL_URL;
    }
    const ogUrlEl = document.getElementById('og-url') as HTMLMetaElement | null;
    if (ogUrlEl && CANONICAL_URL) {
      ogUrlEl.content = CANONICAL_URL;
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      
      {/* Subtle Background Glows (Restrained & Elegant) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Semantic Container */}
      <main className="w-full max-w-md mx-auto px-4 py-6 sm:py-10 flex flex-col items-center">
        
        {/* 1. Semantic Header & H1 Title Section */}
        <header className="text-center w-full mb-3">
          {/* App Icon Beside App Title */}
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/25 border border-blue-400/30 shrink-0 bg-[#070b14]">
              <img
                src={appIcon}
                alt="شعار تطبيق عالم الأنمي - Anime World"
                width={56}
                height={56}
                fetchPriority="high"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-100 to-cyan-200 bg-clip-text text-transparent">
              {APP_CONFIG.appName}
            </h1>
          </div>

          {/* Short Tagline */}
          <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-xs sm:max-w-sm mx-auto text-balance">
            {APP_CONFIG.appTagline}
          </p>

          {/* Minimal Key Highlights */}
          <ul className="flex items-center justify-center gap-3 mt-3 text-[11px] text-slate-400 list-none p-0 m-0">
            <li className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              <span>سيرفرات سريعة</span>
            </li>
            <li className="text-slate-700" aria-hidden="true">•</li>
            <li className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
              <span>جودة عالية 1080p</span>
            </li>
            <li className="text-slate-700" aria-hidden="true">•</li>
            <li className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>بدون إعلانات</span>
            </li>
          </ul>
        </header>

        {/* 2. App Screenshot Showcase */}
        <div className="w-full flex justify-center my-1">
          <AppScreenshot />
        </div>

        {/* 3. Direct Download CTA & Version Info */}
        <div className="w-full">
          <DownloadButton />
        </div>

        {/* 4. Download & Installation Instructions */}
        <div className="w-full">
          <InstructionSection />
        </div>

      </main>

      {/* 5. Minimal Semantic Footer */}
      <footer className="w-full py-4 border-t border-slate-800/60 text-center text-xs text-slate-500">
        <p>{APP_CONFIG.footerText}</p>
      </footer>

    </div>
  );
}
