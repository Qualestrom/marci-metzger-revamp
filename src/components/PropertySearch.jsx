import React, { useState, useMemo } from 'react';
import { Search, MapPin, Home, SlidersHorizontal, ArrowUpDown, Bed, Bath, DollarSign, CheckCircle2, RotateCcw } from 'lucide-react';
import { FEATURED_LISTINGS } from '../data/listings';
import { ASSETS } from '../data/assets';

export default function PropertySearch() {
  const [location, setLocation] = useState('All Locations');
  const [propertyType, setPropertyType] = useState('Any Type');
  const [sortBy, setSortBy] = useState('Newest');
  const [bedrooms, setBedrooms] = useState('Any Number');
  const [bathrooms, setBathrooms] = useState('Any Number');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Active filter state applied on search
  const [appliedFilters, setAppliedFilters] = useState({
    location: 'All Locations',
    propertyType: 'Any Type',
    sortBy: 'Newest',
    bedrooms: 'Any Number',
    bathrooms: 'Any Number',
    minPrice: '',
    maxPrice: ''
  });

  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setAppliedFilters({
      location,
      propertyType,
      sortBy,
      bedrooms,
      bathrooms,
      minPrice,
      maxPrice
    });
    setHasSearched(true);

    // Scroll slightly to results if on mobile
    const element = document.getElementById('search-results');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleReset = () => {
    setLocation('All Locations');
    setPropertyType('Any Type');
    setSortBy('Newest');
    setBedrooms('Any Number');
    setBathrooms('Any Number');
    setMinPrice('');
    setMaxPrice('');
    setAppliedFilters({
      location: 'All Locations',
      propertyType: 'Any Type',
      sortBy: 'Newest',
      bedrooms: 'Any Number',
      bathrooms: 'Any Number',
      minPrice: '',
      maxPrice: ''
    });
    setHasSearched(false);
  };

  // Filter listings based on appliedFilters
  const filteredListings = useMemo(() => {
    return FEATURED_LISTINGS.filter((item) => {
      // Location
      if (appliedFilters.location !== 'All Locations' && item.location !== appliedFilters.location) {
        return false;
      }
      // Type
      if (appliedFilters.propertyType !== 'Any Type' && item.type !== appliedFilters.propertyType) {
        return false;
      }
      // Bedrooms
      if (appliedFilters.bedrooms !== 'Any Number') {
        const minBeds = parseInt(appliedFilters.bedrooms, 10);
        if (appliedFilters.bedrooms === 'Studio' && item.bedrooms !== 0) return false;
        if (!isNaN(minBeds) && item.bedrooms < minBeds) return false;
      }
      // Bathrooms
      if (appliedFilters.bathrooms !== 'Any Number') {
        const minBaths = parseInt(appliedFilters.bathrooms, 10);
        if (!isNaN(minBaths) && item.bathrooms < minBaths) return false;
      }
      // Min Price
      if (appliedFilters.minPrice) {
        const minP = parseInt(appliedFilters.minPrice.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(minP) && item.price < minP) return false;
      }
      // Max Price
      if (appliedFilters.maxPrice) {
        const maxP = parseInt(appliedFilters.maxPrice.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(maxP) && item.price > maxP) return false;
      }
      return true;
    }).sort((a, b) => {
      switch (appliedFilters.sortBy) {
        case 'Newest':
          return new Date(b.date) - new Date(a.date);
        case 'Oldest':
          return new Date(a.date) - new Date(b.date);
        case 'Least Expensive to Most':
          return a.price - b.price;
        case 'Most Expensive to Least':
          return b.price - a.price;
        case 'Bedrooms Low to High':
          return a.bedrooms - b.bedrooms;
        case 'Bedrooms High to Low':
          return b.bedrooms - a.bedrooms;
        case 'Bathrooms Low to High':
          return a.bathrooms - b.bathrooms;
        case 'Bathrooms High to Low':
          return b.bathrooms - a.bathrooms;
        default:
          return 0;
      }
    });
  }, [appliedFilters]);

  return (
    <section id="listings" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 mb-20">
      {/* Docked Luxury Search Card */}
      <div className="bg-surface rounded-2xl shadow-docked border border-border-light overflow-hidden transition-all duration-300">
        {/* Card Header with subtle luxury accent */}
        <div className="bg-gradient-to-r from-obsidian via-charcoal to-obsidian px-6 sm:px-10 py-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-champagne mb-1">
              SEARCH LISTINGS
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
              FIND YOUR DREAM HOME
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/70 font-light">
              Southern Nevada MLS Access
            </span>
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Search Controls Form */}
        <form onSubmit={handleSearch} className="p-6 sm:p-8 lg:p-10 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Location Select */}
            <div>
              <label htmlFor="search-location" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-champagne absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="search-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-alabaster rounded-lg border border-border-light text-sm font-medium text-obsidian focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="All Locations">All Locations</option>
                  <option value="Pahrump">Pahrump</option>
                  <option value="Henderson">Henderson</option>
                  <option value="Las Vegas">Las Vegas</option>
                </select>
              </div>
            </div>

            {/* Property Type Select */}
            <div>
              <label htmlFor="search-type" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                Property Type
              </label>
              <div className="relative">
                <Home className="w-4 h-4 text-champagne absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="search-type"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-alabaster rounded-lg border border-border-light text-sm font-medium text-obsidian focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="Any Type">Any Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Single Family">Single Family</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Land">Land</option>
                </select>
              </div>
            </div>

            {/* Sort By Select */}
            <div>
              <label htmlFor="search-sort" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                Sort By
              </label>
              <div className="relative">
                <ArrowUpDown className="w-4 h-4 text-champagne absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="search-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-alabaster rounded-lg border border-border-light text-sm font-medium text-obsidian focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                  <option value="Least Expensive to Most">Least Expensive to Most</option>
                  <option value="Most Expensive to Least">Most Expensive to Least</option>
                  <option value="Bedrooms Low to High">Bedrooms Low to High</option>
                  <option value="Bedrooms High to Low">Bedrooms High to Low</option>
                  <option value="Bathrooms Low to High">Bathrooms Low to High</option>
                  <option value="Bathrooms High to Low">Bathrooms High to Low</option>
                </select>
              </div>
            </div>

            {/* Bedrooms Select */}
            <div>
              <label htmlFor="search-bedrooms" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                Bedrooms
              </label>
              <div className="relative">
                <Bed className="w-4 h-4 text-champagne absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="search-bedrooms"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-alabaster rounded-lg border border-border-light text-sm font-medium text-obsidian focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="Any Number">Any Number</option>
                  <option value="Studio">Studio</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>

            {/* Bathrooms Select */}
            <div>
              <label htmlFor="search-bathrooms" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                Baths
              </label>
              <div className="relative">
                <Bath className="w-4 h-4 text-champagne absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="search-bathrooms"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-alabaster rounded-lg border border-border-light text-sm font-medium text-obsidian focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="Any Number">Any Number</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </div>

            {/* Min Price */}
            <div>
              <label htmlFor="search-min-price" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                Min Price
              </label>
              <div className="relative">
                <DollarSign className="w-4 h-4 text-champagne absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="search-min-price"
                  type="text"
                  placeholder="e.g. 200,000"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-alabaster rounded-lg border border-border-light text-sm font-medium text-obsidian placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Max Price */}
            <div>
              <label htmlFor="search-max-price" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                Max Price
              </label>
              <div className="relative">
                <DollarSign className="w-4 h-4 text-champagne absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="search-max-price"
                  type="text"
                  placeholder="e.g. 800,000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-alabaster rounded-lg border border-border-light text-sm font-medium text-obsidian placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Submit & Reset Buttons */}
            <div className="flex items-end gap-2">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-obsidian text-alabaster text-xs font-semibold uppercase tracking-widest hover:bg-champagne hover:text-white transition-all duration-300 shadow-sm"
              >
                <Search className="w-3.5 h-3.5" />
                <span>SEARCH NOW</span>
              </button>
              {(hasSearched || location !== 'All Locations' || propertyType !== 'Any Type' || minPrice || maxPrice) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-2.5 rounded-lg border border-border-light text-muted hover:text-obsidian hover:bg-alabaster transition-colors"
                  title="Reset Filters"
                  aria-label="Reset Filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Live Filter Results Showcase */}
        <div id="search-results" className="px-6 sm:px-10 pb-10 pt-2 border-t border-border-light/60 bg-alabaster/40">
          <div className="flex items-center justify-between py-4 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Available Featured Properties
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-champagne-soft text-champagne-dark">
                {filteredListings.length} {filteredListings.length === 1 ? 'Home' : 'Homes'} Found
              </span>
            </div>
            {hasSearched && (
              <span className="text-xs text-muted italic">
                Filtered view active
              </span>
            )}
          </div>

          {filteredListings.length === 0 ? (
            <div className="text-center py-12 px-4 bg-white rounded-xl border border-dashed border-border-light">
              <Home className="w-10 h-10 text-muted/40 mx-auto mb-3" />
              <h3 className="text-lg font-serif font-bold text-obsidian mb-1">
                No matching listings in this range
              </h3>
              <p className="text-xs text-muted max-w-sm mx-auto mb-4">
                Try widening your price range, choosing "All Locations", or resetting filters to browse all available Nevada properties.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-obsidian text-alabaster text-xs font-semibold tracking-wider hover:bg-champagne transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <div
                  key={listing.id}
                  className="group bg-white rounded-xl overflow-hidden border border-border-light shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col"
                >
                  {/* Property Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-obsidian/85 text-white backdrop-blur-sm">
                        {listing.type}
                      </span>
                      {listing.tag && (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-champagne text-white backdrop-blur-sm shadow-sm">
                          {listing.tag}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-base font-bold font-serif text-obsidian shadow-sm">
                      {listing.priceFormatted}
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-serif font-bold text-obsidian group-hover:text-champagne transition-colors mb-1">
                        {listing.title}
                      </h4>
                      <p className="text-xs text-muted flex items-center gap-1 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" />
                        <span className="truncate">{listing.address}</span>
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border-light/70 flex items-center justify-between text-xs text-muted">
                      {listing.bedrooms > 0 && (
                        <span className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-obsidian" />
                          <strong className="text-obsidian">{listing.bedrooms}</strong> Beds
                        </span>
                      )}
                      {listing.bathrooms > 0 && (
                        <span className="flex items-center gap-1">
                          <Bath className="w-3.5 h-3.5 text-obsidian" />
                          <strong className="text-obsidian">{listing.bathrooms}</strong> Baths
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Home className="w-3.5 h-3.5 text-obsidian" />
                        <strong className="text-obsidian">{listing.sqft}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

