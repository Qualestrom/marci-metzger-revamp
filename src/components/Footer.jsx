import React from 'react';
import { ArrowUp } from 'lucide-react';
import { ASSETS } from '../data/assets';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/MarciHomes/',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/marciandlauren_nvrealtors/',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/marci-metzger-30642496/',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Yelp',
      url: 'https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.44 13.923l2.84 2.12c.74.55.93 1.58.4 2.34-.52.74-1.54.95-2.31.44l-3.35-2.25c-.33-.22-.52-.6-.5-.99.02-.4.25-.75.6-.92l2.32-.72zm-.54-2.823l1.89-3.23c.48-.82 1.52-1.09 2.34-.61.82.47 1.1 1.51.63 2.33l-2.02 3.48c-.2.34-.56.56-.96.57-.4 0-.77-.2-1-.54l-.88-2zm-2.03 2.15l-3.52.88c-.93.23-1.85-.33-2.07-1.25-.23-.92.32-1.85 1.25-2.08l3.9-.98c.39-.1.8.04 1.07.35.27.31.34.74.19 1.12l-.82 1.96zm.26 2.51l-1.68 3.56c-.4 1.05-1.57 1.56-2.61 1.14-1.04-.41-1.56-1.57-1.15-2.61l1.86-3.95c.18-.39.55-.66.98-.71.43-.05.86.12 1.14.44l1.46 2.13zm2.5-4.88l3.44-1.92c.83-.46 1.87-.17 2.34.66.46.83.17 1.87-.66 2.34l-3.79 2.11c-.36.2-.8.19-1.14-.04-.34-.23-.53-.62-.48-1.03l.29-2.12z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-obsidian text-white pt-16 pb-12 border-t border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Logo & Realtor Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="inline-block mb-3">
              <img
                src={ASSETS.logo.src}
                alt={ASSETS.logo.alt}
                className="h-10 sm:h-12 w-auto brightness-0 invert drop-shadow-sm"
                onError={(e) => {
                  e.currentTarget.src = ASSETS.logo.fallback;
                }}
              />
            </a>
            <p className="text-xs text-white/60 max-w-sm">
              The Ridge Realty Group • 3190 HW-160, Suite F, Pahrump, NV 89048 • (206) 919-6886
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-champagne hover:text-obsidian flex items-center justify-center transition-all duration-300 text-white shadow-sm"
                aria-label={`Visit Marci Metzger on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p className="text-center sm:text-left">
            Copyright © 2023 Marci Metzger Homes - All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <span>Equal Housing Opportunity</span>
            <span>REALTOR®</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

