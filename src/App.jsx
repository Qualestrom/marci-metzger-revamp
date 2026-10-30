import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertySearch from './components/PropertySearch';
import AgentBio from './components/AgentBio';
import GetItSold from './components/GetItSold';
import PhotoGallery from './components/PhotoGallery';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-alabaster text-obsidian flex flex-col font-sans selection:bg-champagne selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Docked Property Search (Overlapping Hero) & Featured Listings */}
        <PropertySearch />

        {/* 4. Agent Bio & Affiliation Badges */}
        <AgentBio />

        {/* 5. Get It Sold Editorial Showcase */}
        <GetItSold />

        {/* 6. Interactive Photo Gallery & Lightbox */}
        <PhotoGallery />

        {/* 7. Our Services */}
        <Services />

        {/* 8. Call or Visit / Contact & Map */}
        <ContactSection />
      </main>

      {/* 9. Luxury Footer */}
      <Footer />
    </div>
  );
}
