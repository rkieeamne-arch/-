import React, { useState } from 'react';
import { Play, Star, Bell, Moon, Search, Menu, ChevronLeft, ChevronRight, Flame, ZoomIn } from 'lucide-react';
import { APP_CONFIG } from '../config';
import { ImageModal } from './ImageModal';
import piratePoster from '../assets/images/pirate_anime_poster_1790612518503.jpg';
import detectivePoster from '../assets/images/detective_anime_poster_1790612531504.jpg';
import fantasyPoster from '../assets/images/fantasy_anime_poster_1790612543589.jpg';

interface AppScreenshotProps {
  customImageUrl?: string;
}

const ExactAppScreen: React.FC = () => {
  return (
    <div
      dir="ltr"
      aria-label="واجهة تطبيق عالم الأنمي من الداخل"
      className="w-full bg-[#0b0a14] text-slate-100 select-none font-sans overflow-hidden"
    >
      {/* 1. Top Header Bar */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-white/[0.06] bg-[#0b0a14]">
        {/* Left: Search Pill & Menu Button */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl bg-[#101829] border border-[#1e2d4a]">
            <span className="text-[#22d3ee] font-bold text-[11px] leading-none">بحث</span>
            <Search className="w-3.5 h-3.5 text-[#22d3ee] stroke-[2.5]" aria-hidden="true" />
          </div>
          <div className="w-8 h-8 rounded-2xl bg-[#131424] border border-white/[0.08] flex items-center justify-center">
            <Menu className="w-4 h-4 text-[#8b5cf6]" aria-hidden="true" />
          </div>
        </div>

        {/* Center: App Logo */}
        <div dir="rtl" className="flex items-center gap-1 font-black text-lg tracking-tight">
          <span className="text-white">عالم</span>
          <span className="bg-gradient-to-l from-[#38bdf8] via-[#818cf8] to-[#a855f7] bg-clip-text text-transparent">
            الأنمى
          </span>
        </div>

        {/* Right: Bell & Moon Icons */}
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-8 rounded-2xl bg-[#131424] border border-white/[0.08] flex items-center justify-center text-slate-400">
            <Bell className="w-3.5 h-3.5" aria-hidden="true" />
          </div>
          <div className="w-8 h-8 rounded-2xl bg-[#131424] border border-white/[0.08] flex items-center justify-center text-slate-400">
            <Moon className="w-3.5 h-3.5" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* 2. Hero Featured Card (One Piece) */}
      <div className="relative mx-3 mt-3 rounded-[24px] overflow-hidden border border-white/[0.09] shadow-2xl">
        {/* Background Key Visual Image */}
        <img
          src={piratePoster}
          alt="بوستر أنمي ون بيس داخل تطبيق عالم الأنمي"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Dark Vignette & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0a14]/35 via-[#0b0a14]/65 to-[#0b0a14]/95" />

        {/* Inner Content */}
        <div className="relative z-10 p-3.5 flex flex-col justify-between min-h-[275px]">
          {/* Top Row: Pagination Dots (Left) & Badges (Right) */}
          <div className="flex items-center justify-between pt-0.5">
            {/* Left: Slider Dots */}
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#090d16]/85 backdrop-blur-sm border border-white/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500/80" />
              <span className="w-4 h-1.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee]" />
            </div>

            {/* Right: Trending & Rating Badges */}
            <div className="flex items-center gap-1.5">
              <div className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white text-[10px] font-bold flex items-center gap-1 shadow">
                <span aria-hidden="true">🔥</span>
                <span>رائج الآن</span>
              </div>
              <div className="px-2 py-1 rounded-xl bg-[#0d111c]/90 border border-white/10 flex items-center gap-1">
                <span className="text-[#38bdf8] font-extrabold text-[10px]">9.8</span>
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Middle & Bottom Hero Details */}
          <div className="mt-14 flex flex-col items-end text-right">
            {/* Navigation Arrows & Title */}
            <div className="w-full relative flex items-center justify-end mb-1">
              <div className="absolute left-0 -top-2 w-7 h-7 rounded-full bg-[#0a0d18]/85 border border-white/10 flex items-center justify-center text-slate-200">
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="flex flex-col items-end">
                <div className="w-7 h-7 rounded-full bg-[#0a0d18]/85 border border-white/10 flex items-center justify-center text-slate-200 -mb-2 z-10">
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="text-xl font-black text-white tracking-tight drop-shadow">
                  One Piece
                </div>
              </div>
            </div>

            {/* Genres */}
            <div dir="rtl" className="flex items-center gap-1.5 text-[11px] font-bold text-[#22d3ee] mb-1.5">
              <span>أكشن</span>
              <span className="text-slate-500">·</span>
              <span>مغامرات</span>
              <span className="text-slate-500">·</span>
              <span>أنمي</span>
            </div>

            {/* Description */}
            <p dir="rtl" className="text-[11px] text-slate-200/95 leading-relaxed mb-3.5">
              شاهد أحدث حلقات هذا الأنمي المترجم بجودة عالية وسيرفرات فائقة السرعة.
            </p>

            {/* Bottom Button & Counter */}
            <div className="w-full flex items-center justify-end gap-3">
              <span dir="rtl" className="text-[11px] text-slate-400 font-medium">
                1 من 8
              </span>
              <div className="py-2.5 px-5 rounded-2xl bg-gradient-to-r from-[#9333ea] via-[#6366f1] to-[#06b6d4] text-white font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-indigo-500/30">
                <span>ابدأ المشاهدة الآن</span>
                <Play className="w-3.5 h-3.5 fill-white text-white" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Section Heading: الأكثر شعبية ومشاهدة */}
      <div className="flex items-center justify-end gap-1.5 px-3.5 mt-4 mb-2.5">
        <span className="text-sm font-extrabold text-white">الأكثر شعبية ومشاهدة</span>
        <Flame className="w-4 h-4 text-[#22d3ee]" aria-hidden="true" />
      </div>

      {/* 4. Three Anime Posters Row */}
      <div className="grid grid-cols-3 gap-2.5 px-3 pb-2">
        {/* Card 1: One Piece */}
        <div className="flex flex-col">
          <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-md">
            <img
              src={piratePoster}
              alt="أنمي One Piece مترجم"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded-lg bg-[#0b0d17]/90 border border-white/10 flex items-center gap-0.5 shadow">
              <span className="text-amber-400 font-extrabold text-[9px]">9.8</span>
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" aria-hidden="true" />
            </div>
          </div>
          <span className="text-[10px] font-bold text-white text-right mt-1.5 truncate">
            One Piece
          </span>
        </div>

        {/* Card 2: Meitantei Conan: 30-gou Satsujin Jiken */}
        <div className="flex flex-col">
          <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-md">
            <img
              src={detectivePoster}
              alt="أنمي المحقق كونان Meitantei Conan مترجم"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded-lg bg-[#0b0d17]/90 border border-white/10 flex items-center gap-0.5 shadow">
              <span className="text-amber-400 font-extrabold text-[9px]">9.8</span>
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" aria-hidden="true" />
            </div>
          </div>
          <span className="text-[10px] font-bold text-white text-right mt-1.5 truncate">
            ...an: 30-gou Satsujin Jiken
          </span>
        </div>

        {/* Card 3: Tensei Kizoku, Kantei Skill de Nariagaru */}
        <div className="flex flex-col">
          <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-md">
            <img
              src={fantasyPoster}
              alt="أنمي Kantei Skill de Nariagaru مترجم"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded-lg bg-[#0b0d17]/90 border border-white/10 flex items-center gap-0.5 shadow">
              <span className="text-amber-400 font-extrabold text-[9px]">9.8</span>
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" aria-hidden="true" />
            </div>
          </div>
          <span className="text-[10px] font-bold text-white text-right mt-1.5 truncate">
            ...Kantei Skill de Nari
          </span>
        </div>
      </div>

      {/* Bottom Purple Scroll Indicator Bar */}
      <div className="px-3 pb-3 pt-1 flex justify-start">
        <div className="w-24 h-1 rounded-full bg-[#7c3aed]" />
      </div>
    </div>
  );
};

export const AppScreenshot: React.FC<AppScreenshotProps> = ({ customImageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imgSrc = customImageUrl || APP_CONFIG.mainAppImage;
  const hasExternalImage = !imageError && imgSrc && imgSrc !== '/images/app_preview.png';

  return (
    <>
      <section aria-label="معاينة واجهة التطبيق" className="w-full flex justify-center py-2">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsModalOpen(true);
            }
          }}
          aria-label="اضغط لتكبير معاينة واجهة تطبيق عالم الأنمي"
          className="group relative cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 w-full max-w-[330px] sm:max-w-[350px]"
          title="اضغط لتكبير الصورة"
        >
          {/* Soft Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 via-purple-500/15 to-cyan-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

          {/* Clean Rounded Image Container */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl bg-[#0b0a14]">
            {hasExternalImage ? (
              <img
                src={imgSrc}
                alt="صورة واجهة تطبيق عالم الأنمي لمتابعة الأنمي المترجم"
                loading="eager"
                decoding="async"
                className="w-full h-auto object-cover block"
                onError={() => setImageError(true)}
                referrerPolicy="no-referrer"
              />
            ) : (
              <ExactAppScreen />
            )}

            {/* Hover Zoom Indicator */}
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-white font-medium backdrop-blur-[1px]">
              <div className="px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 flex items-center gap-1.5 shadow-lg">
                <ZoomIn className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
                <span>تكبير الصورة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Zoom Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="صورة تطبيق عالم الأنمي"
      >
        <div className="w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl">
          {hasExternalImage ? (
            <img
              src={imgSrc}
              alt="صورة واجهة تطبيق عالم الأنمي بالحجم الكامل"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover block"
              referrerPolicy="no-referrer"
            />
          ) : (
            <ExactAppScreen />
          )}
        </div>
      </ImageModal>
    </>
  );
};
