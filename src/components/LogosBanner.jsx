import React from 'react';
import { ASSETS } from '../data/assets';

export default function LogosBanner() {
  return (
    <div className="pt-12 sm:pt-16 border-t border-border-light/80">
      <div className="text-center mb-8">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-muted">
          Accreditations & Professional Affiliations
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
        {ASSETS.trustBadges.map((badge) => (
          <div
            key={badge.id}
            className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white hover:bg-white/80 border border-border-light/50 hover:border-champagne/40 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[200px] h-28"
          >
            <img
              src={badge.image}
              alt={badge.name}
              className="max-h-16 max-w-[120px] w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = badge.fallback;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
