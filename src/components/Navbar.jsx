import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { ASSETS } from '../data/assets';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Listings', href: '#listings' },
    { name: "Let's Move", href: '#get-it-sold' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-alabaster/95 backdrop-blur-md shadow-md py-3 border-b border-border-light'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-champagne rounded"
            aria-label="Marci Metzger Home"
          >
            <img
              src={ASSETS.logo.src}
              alt={ASSETS.logo.alt}
              className={`h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                !isScrolled ? 'brightness-110 drop-shadow-sm' : ''
              }`}
              onError={(e) => {
                e.currentTarget.src = ASSETS.logo.fallback;
              }}
            />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group py-1 ${
                  isScrolled
                    ? 'text-obsidian hover:text-champagne'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-champagne transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Direct Call CTA (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:2069196886"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                isScrolled
                  ? 'bg-obsidian text-alabaster hover:bg-champagne hover:text-white'
                  : 'bg-white/95 text-obsidian hover:bg-champagne hover:text-white backdrop-blur-sm'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-champagne" />
              <span>CALL NOW: (206) 919-6886</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-champagne ${
                isScrolled ? 'text-obsidian' : 'text-white'
              }`}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden fixed inset-x-0 top-full bg-alabaster/98 backdrop-blur-lg border-b border-border-light shadow-2xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-obsidian hover:text-champagne transition-colors py-1 border-b border-border-light/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href="tel:2069196886"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-obsidian text-alabaster text-xs font-semibold uppercase tracking-wider hover:bg-champagne transition-colors"
            >
              <Phone className="w-4 h-4 text-champagne" />
              <span>CALL NOW: (206) 919-6886</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
