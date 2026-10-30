import React from 'react';
import { Phone, Search, ArrowRight, Award } from 'lucide-react';
import { ASSETS } from '../data/assets';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-28 md:pb-36 overflow-hidden"
    >
      {/* Background Image with Fallback */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroBg.src}
          alt={ASSETS.heroBg.alt}
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in"
          onError={(e) => {
            e.currentTarget.src = ASSETS.heroBg.fallback;
          }}
        />
        {/* Editorial Multi-Stop Gradient Overlay for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/65 to-obsidian/45 backdrop-brightness-[0.88]" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-obsidian/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-widest uppercase text-champagne-light mb-6 shadow-sm">
          <Award className="w-4 h-4 text-champagne" />
          <span>MARCI METZGER - THE RIDGE REALTY GROUP</span>
        </div>

        {/* H1 Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white mb-6 drop-shadow-md">
          Pahrump Realtor
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed mb-10 drop-shadow">
          Guiding buyers and sellers across Southern Nevada with nearly three decades of trusted local expertise.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="tel:2069196886"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-obsidian transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 text-obsidian" />
            <span>CALL NOW</span>
          </a>

          <a
            href="#listings"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:-translate-y-0.5"
          >
            <Search className="w-4 h-4 text-champagne-light" />
            <span>SEARCH PROPERTIES</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
}

