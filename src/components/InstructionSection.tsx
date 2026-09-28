import React, { useState } from 'react';
import { AlertCircle, ZoomIn, Info } from 'lucide-react';
import { APP_CONFIG } from '../config';
import { ImageModal } from './ImageModal';

interface InstructionSectionProps {
  customImageUrl?: string;
}

export const InstructionSection: React.FC<InstructionSectionProps> = ({
  customImageUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imgSrc = customImageUrl || APP_CONFIG.instructionImage;
  const hasCustomImage = !imageError && imgSrc && imgSrc !== '/images/install_guide.png';

  return (
    <>
      <section
        aria-labelledby="instructions-section-title"
        className="w-full mt-6 pt-5 border-t border-slate-800/80"
      >
        {/* Section Header (Semantic H2) */}
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-6 h-6 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Info className="w-3.5 h-3.5" aria-hidden="true" />
          </div>
          <h2 id="instructions-section-title" className="text-base font-bold text-slate-200">
            {APP_CONFIG.installInstructions.title}
          </h2>
        </div>

        {/* Warning Callout Box */}
        <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/25 text-amber-200/90 text-xs sm:text-sm leading-relaxed mb-3.5">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="font-medium text-amber-100">
              {APP_CONFIG.installInstructions.warningNotice}
            </p>
          </div>
        </div>

        {/* Semantic Ordered Steps List */}
        <ol className="space-y-2 text-xs text-slate-300 list-none p-0 m-0">
          <li className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800/70">
            <span
              aria-hidden="true"
              className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-[11px] flex items-center justify-center shrink-0"
            >
              1
            </span>
            <span>اضغط على زر <strong className="text-indigo-300">«تحميل التطبيق»</strong> بالأعلى.</span>
          </li>

          <li className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800/70">
            <span
              aria-hidden="true"
              className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-[11px] flex items-center justify-center shrink-0"
            >
              2
            </span>
            <span>اضغط على <strong className="text-amber-300">«مزيد من الخيارات»</strong> أو <strong className="text-amber-300">«التفاصيل»</strong>.</span>
          </li>

          <li className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800/70">
            <span
              aria-hidden="true"
              className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px] flex items-center justify-center shrink-0"
            >
              3
            </span>
            <span>اختر <strong className="text-emerald-300">«تنزيل على أي حال»</strong> ثم افتح الملف للتثبيت مباشرة.</span>
          </li>
        </ol>

        {/* Optional Instruction Image */}
        {hasCustomImage && (
          <div className="w-full flex justify-center mt-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group relative cursor-pointer w-full max-w-sm rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900 shadow-lg hover:border-slate-600 transition duration-300 block"
              aria-label="تكبير صورة تعليمات التحميل"
            >
              <img
                src={imgSrc}
                alt="توضيح خطوة الضغط على مزيد من الخيارات ثم تنزيل على أي حال لتثبيت تطبيق عالم الأنمي"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover rounded-xl"
                onError={() => setImageError(true)}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-white font-medium backdrop-blur-[2px]">
                <ZoomIn className="w-4 h-4 text-indigo-300" aria-hidden="true" />
                <span>اضغط لتكبير الصورة</span>
              </div>
            </button>
          </div>
        )}
      </section>

      {/* Modal Zoom View */}
      {hasCustomImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="تعليمات التحميل"
        >
          <div className="w-full max-w-sm mx-auto overflow-hidden rounded-xl">
            <img
              src={imgSrc}
              alt="توضيح خطوات تنزيل وتثبيت تطبيق عالم الأنمي"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
          </div>
        </ImageModal>
      )}
    </>
  );
};
