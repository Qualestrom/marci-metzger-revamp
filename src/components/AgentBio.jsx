import React from 'react';
import { Phone, Award, TrendingUp, Users, Calendar, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets';
import LogosBanner from './LogosBanner';

export default function AgentBio() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-alabaster relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Two-Column Agent Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Luxury Accent Backing Card */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-champagne/20 to-transparent rounded-2xl transform -rotate-2 -z-10" />
              <div className="absolute -inset-1 bg-champagne/40 rounded-2xl blur-sm -z-10 opacity-40" />

              {/* Main Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-luxury border border-border-light">
                <img
                  src={ASSETS.marciProfile.src}
                  alt={ASSETS.marciProfile.alt}
                  className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = ASSETS.marciProfile.fallback;
                  }}
                />
                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-obsidian/90 backdrop-blur-md text-white p-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-champagne/20 text-champagne shrink-0">
                    <Award className="w-5 h-5 text-champagne" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-champagne-light">
                      The Ridge Realty Group
                    </div>
                    <div className="text-sm font-medium text-white/90">
                      Pahrump & Southern Nevada
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Metrics Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-soft text-champagne-dark text-xs font-semibold uppercase tracking-widest mb-4 w-fit">
              <span>MEET YOUR REALTOR</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-obsidian tracking-tight mb-2">
              MARCI METZGER
            </h2>

            <h3 className="text-lg sm:text-xl font-sans font-semibold tracking-wider uppercase text-champagne mb-6">
              REALTOR FOR NEARLY 3 DECADES!
            </h3>

            <p className="text-base sm:text-lg text-muted font-light leading-relaxed mb-6">
              With nearly 30 years of hands-on real estate mastery across Pahrump, Nye County, and the greater Southern Nevada corridor, Marci Metzger provides unparalleled local advocacy. From first-time homebuyers to commercial investors and luxury residential sellers, she turns high-stakes decisions into confident, seamless victories.
            </p>

            {/* Direct Phone Link */}
            <div className="mb-8">
              <a
                href="tel:2069196886"
                className="inline-flex items-center gap-3 text-lg sm:text-xl font-bold font-serif text-obsidian hover:text-champagne transition-colors group"
              >
                <div className="p-2.5 rounded-full bg-champagne/15 text-champagne group-hover:bg-champagne group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>Direct Contact: 206-919-6886</span>
              </a>
            </div>

            {/* Key Highlight Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-white border border-border-light shadow-sm">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-champagne mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-obsidian">30</span>
                  <span className="text-xl font-serif font-bold text-champagne">Years</span>
                </div>
                <span className="text-xs font-medium text-muted uppercase tracking-wider">
                  Nearly 30 Years Experience
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left border-y sm:border-y-0 sm:border-x border-border-light py-4 sm:py-0 sm:px-4">
                <div className="flex items-center gap-1.5 text-champagne mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-obsidian">~90</span>
                </div>
                <span className="text-xs font-medium text-muted uppercase tracking-wider">
                  ~90 Clients Helped in 2021
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-champagne mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-obsidian">$28.5M</span>
                </div>
                <span className="text-xs font-medium text-muted uppercase tracking-wider">
                  $28.5M Closed in Sales
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust / Affiliation Logos Banner */}
        <LogosBanner />
      </div>
    </section>
  );
}
