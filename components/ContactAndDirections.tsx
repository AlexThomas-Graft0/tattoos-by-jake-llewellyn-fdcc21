'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { MapPin, Clock, Car, Train, Send, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

export function ContactAndDirections() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormStatus('success');
    setFormData({ fullName: '', email: '', message: '' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="contact-and-directions"
      className="relative bg-[#121212] text-[#F5F5F7] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Background Subtle Art Deco Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF37] block mb-3">
            Location & Inquiries
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif tracking-tight text-[#F5F5F7] mb-6">
            Find the Studio
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* LEFT COLUMN: Location, Hours, Directions */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            
            {/* Address & Hours Card */}
            <div className="bg-[#1C1C1E] border border-[#D4AF37]/15 p-8 relative overflow-hidden group hover:border-[#D4AF37]/35 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {/* Address */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#D4AF37]/10 text-[#D4AF37]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-serif tracking-wide text-[#F5F5F7]">Studio Address</h3>
                  </div>
                  <p className="text-[#8E8E93] text-sm leading-relaxed mb-4 pl-1">
                    6A Gwerthonor Place,<br />
                    Gilfach Bargoed CF81 8JQ
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=6A+Gwerthonor+Place,+Gilfach+Bargoed+CF81+8JQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] hover:text-[#F5F5F7] transition-colors duration-200 group/link"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#D4AF37]/10 text-[#D4AF37]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-serif tracking-wide text-[#F5F5F7]">Opening Hours</h3>
                  </div>
                  <div className="space-y-2 pl-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8E8E93]">Tue – Sat</span>
                      <span className="font-mono text-[#F5F5F7]">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8E8E93]">Sun & Mon</span>
                      <span className="font-mono text-[#D4AF37]/80 text-xs">Closed *</span>
                    </div>
                    <p className="text-[11px] text-[#8E8E93] italic pt-1 border-t border-[#121212]">
                      * Sunday & Monday by special appointment only.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Premium Map Component */}
            <div className="relative aspect-[16/9] w-full bg-[#1C1C1E] border border-[#D4AF37]/15 overflow-hidden group">
              {/* Abstract Dark City Grid Backdrop */}
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                alt="Abstract dark pattern map representation"
                className="w-full h-full object-cover opacity-30 grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Map Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/50" />
              
              {/* Custom Map Marker UI */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-16 h-16 bg-[#D4AF37]/20 rounded-full animate-ping" />
                  <div className="absolute w-8 h-8 bg-[#D4AF37]/40 rounded-full blur-sm" />
                  <div className="relative bg-[#121212] border border-[#D4AF37] p-3 shadow-2xl flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="text-xs font-mono tracking-widest text-[#F5F5F7] uppercase whitespace-nowrap">
                      Jake Llewellyn Studio
                    </span>
                  </div>
                </div>
              </div>

              {/* Float Map Label */}
              <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-[#121212]/90 backdrop-blur-md border border-[#D4AF37]/20 p-4 max-w-sm">
                <p className="text-xs font-mono text-[#D4AF37] mb-1">South Wales Valleys</p>
                <p className="text-xs text-[#8E8E93] leading-relaxed">
                  Located in Gilfach Bargoed, easily accessible by rail and road networks.
                </p>
              </div>
            </div>

            {/* Travel & Parking Advice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* By Car */}
              <div className="bg-[#1C1C1E]/50 border border-[#D4AF37]/10 p-6 hover:border-[#D4AF37]/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Car className="w-5 h-5 text-[#D4AF37]" />
                  <h4 className="text-sm font-serif tracking-wide text-[#F5F5F7]">By Car</h4>
                </div>
                <p className="text-[#8E8E93] text-xs leading-relaxed">
                  Free on-street parking is available directly along Gwerthonor Place and adjacent streets. Please allow an extra 10 minutes before your session to find a parking space.
                </p>
              </div>

              {/* By Train */}
              <div className="bg-[#1C1C1E]/50 border border-[#D4AF37]/10 p-6 hover:border-[#D4AF37]/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Train className="w-5 h-5 text-[#D4AF37]" />
                  <h4 className="text-sm font-serif tracking-wide text-[#F5F5F7]">By Train</h4>
                </div>
                <p className="text-[#8E8E93] text-xs leading-relaxed">
                  The studio is a convenient 8-minute walk from Bargoed Train Station, which has direct links to Cardiff Central and the surrounding valleys.
                </p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: General Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="bg-[#1C1C1E] border border-[#D4AF37]/15 p-8 relative">
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-[#F5F5F7] mb-3">
                  Have a General Question?
                </h3>
                <p className="text-sm text-[#8E8E93] leading-relaxed">
                  Use this form for general inquiries, press, or studio questions. For tattoo bookings, please use our dedicated{' '}
                  <a
                    href="#booking-hub"
                    className="text-[#D4AF37] underline underline-offset-4 hover:text-[#F5F5F7] transition-colors duration-200"
                  >
                    Booking & Enquiry Hub
                  </a>
                  .
                </p>
              </div>

              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-8 text-center"
                >
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-lg font-serif text-[#F5F5F7] mb-2">Message Dispatched</h4>
                  <p className="text-xs text-[#8E8E93] leading-relaxed mb-6">
                    Thank you for reaching out. Jake will review your general inquiry and get back to you within 2-3 business days.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] hover:text-[#F5F5F7] transition-colors"
                  >
                    Send another message <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-[#8E8E93] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g., Lowri Roberts"
                      className="w-full bg-[#121212] border border-[#D4AF37]/15 text-[#F5F5F7] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all duration-200 placeholder-[#8E8E93]/40"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#8E8E93] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., lowri@example.co.uk"
                      className="w-full bg-[#121212] border border-[#D4AF37]/15 text-[#F5F5F7] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all duration-200 placeholder-[#8E8E93]/40"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#8E8E93] mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your question or message here..."
                      className="w-full bg-[#121212] border border-[#D4AF37]/15 text-[#F5F5F7] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all duration-200 placeholder-[#8E8E93]/40 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#121212] transition-all duration-300 py-4 px-6 text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}