'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { MapPin, Clock, ArrowUp, ShieldCheck, Check, ExternalLink } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText('6A Gwerthonor Place, Gilfach Bargoed CF81 8JQ');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      // Fallback silent failure
    }
  };

  const quickLinks = [
    { label: 'Portfolio Gallery', href: '#portfolio-gallery' },
    { label: 'Available Flash', href: '#flash-board' },
    { label: 'Booking Hub', href: '#booking-hub' },
    { label: 'About & Safety', href: '#about-and-safety' },
    { label: 'Contact & Directions', href: '#contact-and-directions' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#1C1C1E] text-[#F5F5F7] border-t border-[#D4AF37]/10 py-16 md:py-24 font-sans">
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.03),transparent_50%)] pointer-events-none" />
      
      {/* Elegant SVG Fine-Line Mandalas/Botanical Line Art background decoration */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 opacity-[0.03] text-[#D4AF37] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" />
          <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 15 15 L 85 85 M 15 85 L 85 15" />
          <polygon points="50,10 60,40 90,50 60,60 50,90 40,60 10,50 40,40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.06]"
        >
          {/* Column 1: Brand & Statement */}
          <motion.div variants={itemVariants} className="md:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium block">
                The Private Studio
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-light tracking-wide text-white">
                Tattoos by <br />
                <span className="text-[#D4AF37]">Jake Llewellyn</span>
              </h2>
            </div>
            
            <p className="text-[#8E8E93] text-sm leading-relaxed max-w-sm">
              Illustrative blackwork and fine-line tattooing crafted to flow naturally with your body. Operating from a private, clinical-grade space in Gilfach Bargoed.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#8E8E93]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Fully Licensed & Insured Solo Studio</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#8E8E93]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>100% Single-Use, Sterile Equipment</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div variants={itemVariants} className="md:col-span-3 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Explore
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-[#8E8E93] hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 scale-0 group-hover:scale-100 transition-transform duration-200 origin-center mr-1" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Studio Details & Hours */}
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              The Space
            </h3>
            
            <div className="space-y-4">
              <button 
                onClick={handleCopyAddress}
                className="group text-left block space-y-1 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 p-2 -m-2 rounded transition-all duration-200"
                title="Click to copy address"
              >
                <div className="flex items-center gap-2 text-xs text-[#8E8E93] group-hover:text-[#D4AF37] transition-colors">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Studio Location (Click to copy)</span>
                </div>
                <div className="text-sm text-white group-hover:underline decoration-[#D4AF37]/50 underline-offset-4">
                  6A Gwerthonor Place, Gilfach Bargoed CF81 8JQ
                </div>
                {copied && (
                  <span className="text-[10px] text-[#16A34A] flex items-center gap-1 mt-1 font-mono">
                    <Check className="w-3 h-3" /> Address copied to clipboard
                  </span>
                )}
              </button>

              <div className="space-y-1 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#8E8E93]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Opening Hours</span>
                </div>
                <div className="text-sm text-[#8E8E93] space-y-0.5">
                  <p className="text-white">Tuesday to Saturday: <span className="font-mono text-xs">10:00 - 18:00</span></p>
                  <p>Sunday & Monday: <span className="text-xs">Closed (By special appointment)</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Legal & Fine Print */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1.5">
            <p className="text-xs text-[#8E8E93]">
              © 2026 Tattoos by Jake Llewellyn. All rights reserved. Precision ink in Gilfach Bargoed, South Wales.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-[11px] text-[#8E8E93]/60">
              <a href="#about-and-safety" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#about-and-safety" className="hover:text-white transition-colors">Terms & Conditions</a>
              <span>•</span>
              {/* Subtle Admin Portal link as requested */}
              <a 
                href="#contact-and-directions" 
                className="opacity-20 hover:opacity-100 hover:text-[#D4AF37] transition-all duration-200 font-mono text-[10px]"
                title="Secure Portal"
              >
                Admin Portal
              </a>
            </div>
          </div>

          {/* Back to top button */}
          <a
            href="#hero-section"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] hover:border-[#D4AF37]/40 bg-white/[0.02] text-xs text-[#8E8E93] hover:text-[#D4AF37] transition-all duration-300"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
}