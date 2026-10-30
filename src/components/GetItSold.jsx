import React from 'react';
import { ASSETS } from '../data/assets';
import { TrendingUp, Sparkles, Compass, CheckCircle } from 'lucide-react';

export default function GetItSold() {
  const icons = [TrendingUp, Sparkles, Compass];

  return (
    <section id="get-it-sold" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-soft text-champagne-dark text-xs font-semibold uppercase tracking-widest mb-3">
            <span>PROVEN STRATEGIES & TOP-TIER RESULTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-obsidian tracking-tight mb-4">
            GET IT SOLD
          </h2>
          <div className="w-16 h-0.5 bg-champagne mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
            Delivering white-glove listing services, unmatched market analytics, and aggressive digital exposure to maximize every property's valuation.
          </p>
        </div>

        {/* 3-Card Alternating Editorial Grid */}
        <div className="space-y-16 sm:space-y-24">
          {ASSETS.soldFeatures.map((item, index) => {
            const Icon = icons[index % icons.length];
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column (6 cols) */}
                <div
                  className={`lg:col-span-6 relative ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-2xl bg-alabaster shadow-luxury border border-border-light aspect-[16/11]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = item.fallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                    
                    {/* Index Badge */}
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-obsidian font-serif font-bold text-sm flex items-center justify-center shadow-md">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Text Content Column (6 cols) */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-2 text-champagne mb-3">
                    <Icon className="w-5 h-5 text-champagne" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                      FEATURE {index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-obsidian tracking-tight mb-4 leading-snug">
                    {item.title}
                  </h3>

                  <div className="w-12 h-0.5 bg-champagne/60 mb-5" />

                  <p className="text-base sm:text-lg text-muted font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-obsidian hover:text-champagne transition-colors group"
                    >
                      <span>Inquire About Selling</span>
                      <span className="text-champagne transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
