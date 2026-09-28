import React, { useState } from 'react';
import { Download, Check, Copy, ShieldCheck } from 'lucide-react';
import { APP_CONFIG, DOWNLOAD_LINK } from '../config';

export const DownloadButton: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(DOWNLOAD_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      aria-labelledby="download-section-title"
      className="w-full flex flex-col items-center gap-3 pt-2 pb-1"
    >
      <h2 id="download-section-title" className="sr-only">
        تحميل التطبيق
      </h2>

      {/* Primary Semantic Download Anchor */}
      <a
        href={DOWNLOAD_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`تحميل تطبيق ${APP_CONFIG.appName} الإصدار ${APP_CONFIG.version} للأندرويد`}
        className="w-full max-w-sm py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-bold text-lg shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 transition-all duration-200 border border-indigo-400/30 cursor-pointer text-center select-none"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shadow-inner">
          <Download className="w-5 h-5 text-white animate-pulse" aria-hidden="true" />
        </div>
        <span className="tracking-wide">تحميل التطبيق</span>
      </a>

      {/* Version and Technical Details */}
      <div className="flex items-center justify-center gap-3 text-xs text-slate-400 mt-0.5">
        <span className="font-semibold text-slate-300">الإصدار {APP_CONFIG.version}</span>
        <span className="text-slate-600" aria-hidden="true">•</span>
        <span>{APP_CONFIG.fileSize}</span>
        <span className="text-slate-600" aria-hidden="true">•</span>
        <span className="flex items-center gap-1 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
          <span>آمن ومباشر</span>
        </span>
      </div>

      {/* Copy Direct Link Button */}
      <div className="flex items-center gap-2 mt-1">
        <button
          type="button"
          onClick={handleCopyLink}
          className="text-[11px] text-slate-400 hover:text-indigo-300 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span className="text-emerald-400">تم نسخ رابط التحميل!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <span>نسخ رابط التحميل المباشر</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
