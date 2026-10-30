import React from 'react';
import { ASSETS } from '../data/assets';
import { CheckCircle2, ShieldCheck, Building2, HelpCircle } from 'lucide-react';

export default function Services() {
  const serviceIcons = [CheckCircle2, Building2, ShieldCheck];

  return (
    <section id="services" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-soft text-champagne-dark text-xs font-semibold uppercase tracking-widest mb-3">
            <span>FULL-SPECTRUM REAL ESTATE SOLUTIONS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-obsidian tracking-tight mb-4">
            OUR SERVICES
          </h2>
          <div className="w-16 h-0.5 bg-champagne mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
            Comprehensive guidance across residential acquisitions, commercial investments, and mortgage consultation in Southern Nevada.
          </p>
        </div>

        {/* 3-Column Luxury Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ASSETS.services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <div
                key={service.id}
                className="group bg-alabaster rounded-2xl overflow-hidden border border-border-light shadow-sm hover:shadow-luxury-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Aspect Box */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = service.fallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    
                    <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-obsidian shadow-sm group-hover:bg-champagne group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-champagne mb-2">
                      SERVICE 0{index + 1}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-obsidian mb-4 group-hover:text-champagne transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-champagne/40 mb-4" />
                    <p className="text-sm text-muted font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-8 pb-8 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-obsidian hover:text-champagne transition-colors group/link"
                  >
                    <span>Connect With Marci</span>
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1 text-champagne">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

