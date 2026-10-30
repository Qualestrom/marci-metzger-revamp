import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Play, Pause, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/assets';

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const touchStartX = useRef(null);
  const slides = ASSETS.gallery;
  const slideDuration = 5000; // 5 seconds per slide

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgress(0);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Auto-play progress loop
  useEffect(() => {
    if (!isPlaying || isHovered || lightboxOpen) return;

    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, lightboxOpen, nextSlide, slideDuration]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  const currentSlide = slides[currentIndex];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-alabaster relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-soft text-champagne-dark text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span>EXCLUSIVE PROPERTY SHOWCASE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-obsidian tracking-tight mb-4">
            PHOTO GALLERY
          </h2>
          <div className="w-16 h-0.5 bg-champagne mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted font-light">
            Take an interactive visual tour of featured residential interiors, custom estates, and desert landscapes across Pahrump.
          </p>
        </div>

        {/* Carousel Showcase Container */}
        <div className="max-w-5xl mx-auto">
          {/* Main Slide Card */}
          <div
            className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-obsidian shadow-2xl border border-border-light group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => setLightboxOpen(true)}
          >
            {/* Top Auto-Play Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-champagne-light via-champagne to-champagne-dark transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Slide Image with Keyframe Zoom & Fade Animation */}
            <div key={currentIndex} className="w-full h-full relative overflow-hidden animate-gallery-fade">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="w-full h-full object-cover animate-zoom-subtle"
                onError={(e) => {
                  e.currentTarget.src = currentSlide.fallback;
                }}
              />
            </div>

            {/* Editorial Multi-Stop Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-obsidian/20 pointer-events-none" />

            {/* Interactive Play/Pause & Counter Badge (Top Right) */}
            <div
              className="absolute top-5 right-5 z-20 flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105"
                title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                aria-label={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-champagne-light" /> : <Play className="w-3.5 h-3.5 text-white ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105"
                title="Fullscreen Lightbox"
                aria-label="Fullscreen Lightbox"
              >
                <Maximize2 className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

            {/* Animated Caption & Counter Badge (Bottom) */}
            <div
              key={`caption-${currentIndex}`}
              className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none animate-slide-up"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-champagne/90 text-obsidian text-[11px] font-bold tracking-widest uppercase mb-2 shadow-sm">
                  <span>PHOTO {currentIndex + 1} OF {slides.length}</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white drop-shadow-md">
                  {currentSlide.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 font-light drop-shadow">
                  {currentSlide.caption}
                </p>
              </div>

              <span className="text-[11px] text-white/60 tracking-wider hidden sm:block uppercase">
                Click to expand
              </span>
            </div>

            {/* Next / Prev Controls */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-obsidian flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group/btn z-20"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6 -ml-0.5 transition-transform duration-200 group-hover/btn:-translate-x-0.5 text-obsidian" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-obsidian flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group/btn z-20"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 -mr-0.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 text-obsidian" />
            </button>
          </div>

          {/* Active Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6 mb-8">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-500 rounded-full ${
                  idx === currentIndex
                    ? 'w-10 h-2 bg-champagne shadow-sm'
                    : 'w-2 h-2 bg-border-light hover:bg-muted'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Clickable Thumbnail Strip */}
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 group focus:outline-none ${
                    isActive
                      ? 'ring-2 ring-champagne scale-105 shadow-md'
                      : 'opacity-60 hover:opacity-100 hover:scale-[1.02]'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = slide.fallback;
                    }}
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-champagne/15 border border-champagne rounded-xl pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Animated Transitions */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-gallery-fade"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-transform duration-200 hover:scale-105 z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div key={`lightbox-${currentIndex}`} className="relative max-h-[72vh] w-auto max-w-full overflow-hidden rounded-xl shadow-2xl border border-white/10 animate-gallery-fade">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="max-h-[72vh] w-auto max-w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = currentSlide.fallback;
                }}
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 text-center text-white">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-champagne mb-1 block">
                {currentIndex + 1} / {slides.length}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {currentSlide.title}
              </h3>
              <p className="text-xs text-white/70 mt-1">
                {currentSlide.caption}
              </p>
            </div>

            {/* Modal Next / Prev */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white text-white hover:text-obsidian transition-all duration-200 hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white text-white hover:text-obsidian transition-all duration-200 hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Lightbox Mini Thumbnails */}
            <div className="flex gap-2 mt-4 overflow-x-auto max-w-md py-1 px-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`relative w-12 h-9 rounded-md overflow-hidden shrink-0 border transition-all ${
                    idx === currentIndex
                      ? 'border-champagne scale-110 opacity-100'
                      : 'border-transparent opacity-40 hover:opacity-80'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
