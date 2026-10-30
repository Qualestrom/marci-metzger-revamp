import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('sending');
    // Simulate interactive submission feedback
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-alabaster relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-soft text-champagne-dark text-xs font-semibold uppercase tracking-widest mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-obsidian tracking-tight mb-4">
            CALL OR VISIT
          </h2>
          <div className="w-16 h-0.5 bg-champagne mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
            Have questions about buying, selling, or the Pahrump market? We are ready to assist you seven days a week.
          </p>
        </div>

        {/* Two-Column Form & Direct Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16">
          {/* Left Column: Send Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-2xl shadow-luxury border border-border-light">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-obsidian mb-2">
                Send Message
              </h3>
              <p className="text-sm text-muted font-light">
                Leave a note below and Marci will get back to you promptly.
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-serif font-bold text-lg mb-1">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700">
                  Thank you for reaching out. Marci Metzger will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 bg-alabaster rounded-lg border border-border-light text-sm text-obsidian focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all placeholder:text-muted/60"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Email <span className="text-champagne font-bold">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-alabaster rounded-lg border border-border-light text-sm text-obsidian focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all placeholder:text-muted/60"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property you're looking for or your listing goals..."
                    className="w-full px-4 py-3 bg-alabaster rounded-lg border border-border-light text-sm text-obsidian focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all placeholder:text-muted/60 resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-obsidian text-alabaster text-xs font-semibold uppercase tracking-widest hover:bg-champagne hover:text-white transition-all duration-300 shadow-md disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <span>SENDING...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>SEND</span>
                      </>
                    )}
                  </button>
                </div>

                {/* reCAPTCHA Disclaimer */}
                <p className="text-[11px] text-muted text-center leading-normal pt-2">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-obsidian">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-obsidian">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/14259412560"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/20">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-100 font-medium">
                    Fast Response
                  </div>
                  <div className="text-base font-semibold">
                    Message us on WhatsApp
                  </div>
                </div>
              </div>
              <span className="text-lg">→</span>
            </a>

            {/* Direct Information Card */}
            <div className="bg-white p-8 rounded-2xl shadow-luxury border border-border-light space-y-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-champagne block mb-1">
                  OFFICIAL REAL ESTATE OFFICE
                </span>
                <h4 className="text-xl font-serif font-bold text-obsidian">
                  Marci Metzger - THE RIDGE REALTY GROUP
                </h4>
              </div>

              <div className="space-y-4 pt-2 border-t border-border-light/70 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-obsidian text-xs uppercase tracking-wider font-semibold mb-0.5">
                      Location
                    </strong>
                    <span className="text-muted leading-relaxed">
                      3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-obsidian text-xs uppercase tracking-wider font-semibold mb-0.5">
                      Phone Number
                    </strong>
                    <a
                      href="tel:2069196886"
                      className="text-base font-semibold text-obsidian hover:text-champagne transition-colors"
                    >
                      (206) 919-6886
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-obsidian text-xs uppercase tracking-wider font-semibold mb-0.5">
                      Office Hours
                    </strong>
                    <p className="text-muted text-sm font-medium">
                      Open today: 08:00 am – 07:00 pm
                    </p>
                    <p className="text-muted text-xs">
                      Open daily: 8:00 am - 7:00 pm
                    </p>
                    <p className="text-xs text-champagne-dark font-medium mt-2 italic">
                      "Appointments outside office hours available upon request. Just call!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Google Maps Embed */}
        <div className="rounded-2xl overflow-hidden shadow-luxury border border-border-light bg-white">
          <div className="px-6 py-4 bg-white border-b border-border-light flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-champagne" />
              <span className="text-xs font-semibold uppercase tracking-wider text-obsidian">
                Office Location: 3190 HW-160, Suite F, Pahrump, NV 89048
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=3190+HW-160+Suite+F+Pahrump+NV+89048"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-champagne hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="relative w-full h-[360px] sm:h-[420px]">
            <iframe
              title="Marci Metzger Office Location"
              src="https://maps.google.com/maps?q=3190%20HW-160,%20Suite%20F,%20Pahrump,%20NV%2089048&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
