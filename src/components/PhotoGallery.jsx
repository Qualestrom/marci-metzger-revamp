import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { ASSETS } from '../data/assets';

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const slides = ASSETS.gallery;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlide = slides[currentIndex];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-alabaster relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-soft text-champagne-dark text-xs font-semibold uppercase tracking-widest mb-3">
            <span>PROPERTY PORTFOLIO</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-obsidian tracking-tight mb-4">
            PHOTO GALLERY
          </h2>
          <div className="w-16 h-0.5 bg-champagne mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted font-light">
            Take a visual tour of featured residential interiors, custom estates, and desert landscapes across Pahrump.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="max-w-5xl mx-auto">
          {/* Main Slide Card */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-obsidian shadow-2xl border border-border-light group">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover transition-all duration-500"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = currentSlide.fallback;
              }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-obsidian/30 pointer-events-none" />

            {/* Caption & Counter Badge */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-champagne mb-1 block">
                  IMAGE {currentIndex + 1} OF {slides.length}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white drop-shadow">
                  {currentSlide.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light drop-shadow">
                  {currentSlide.caption}
                </p>
              </div>

              {/* Lightbox Trigger */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="self-start sm:self-auto p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-obsidian backdrop-blur-md transition-all duration-300 shadow-md"
                aria-label="View Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Next / Prev Controls */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-obsidian flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 opacity-90 hover:opacity-100"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6 -ml-0.5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-obsidian flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 opacity-90 hover:opacity-100"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 -mr-0.5" />
            </button>
          </div>

          {/* Active Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6 mb-8">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-8 h-2 bg-champagne'
                    : 'w-2 h-2 bg-border-light hover:bg-muted'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Clickable Thumbnail Strip */}
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none ${
                  idx === currentIndex
                    ? 'border-champagne shadow-md scale-105 ring-2 ring-champagne/30'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = slide.fallback;
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
              onError={(e) => {
                e.currentTarget.src = currentSlide.fallback;
              }}
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-serif font-bold text-white">
                {currentSlide.title}
              </h3>
              <p className="text-xs text-white/70">
                {currentSlide.caption}
              </p>
            </div>

            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
