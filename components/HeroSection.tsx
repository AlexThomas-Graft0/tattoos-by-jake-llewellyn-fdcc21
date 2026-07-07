'use client';

import { motion, type Variants } from 'framer-motion';
import { MapPin, ShieldCheck, Sparkles, ArrowRight, Clock } from 'lucide-react';

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
      stiffness: 70,
      damping: 15,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative min-h-[95vh] flex items-center justify-center bg-[#121212] overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Decorative Editorial Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Radial Gradient Glow */}
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-[#D4AF37]/5 blur-[120px]" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[100px]" />
        
        {/* Fine-line geometric grid watermark */}
        <svg
          className="absolute right-0 top-1/4 opacity-[0.03] text-[#D4AF37] w-[400px] h-[400px]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <circle cx="50" cy="50" r="40" />
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="0" y1="50" x2="100" y2="50" />
          <polygon points="50,10 90,50 50,90 10,50" />
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: High-End Editorial Copy & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-8"
          >
            {/* Status & Location Micro-Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium font-mono">
                Private Studio • Gilfach Bargoed
              </span>
            </motion.div>

            {/* Editorial Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F7] tracking-tight leading-[1.1]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Precision in Ink, <br />
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F7] via-[#D4AF37] to-[#F5F5F7]">
                  Custom-Tailored
                </span>{' '}
                for You.
              </h1>
            </motion.div>

            {/* Editorial Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#8E8E93] font-normal leading-relaxed max-w-xl font-sans"
            >
              Illustrative blackwork and fine-line tattooing crafted to flow naturally with your body. From a private, professional studio in the heart of Gilfach Bargoed.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 sm:items-center"
            >
              {/* Primary CTA: Custom Booking */}
              <a
                href="#booking-hub"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#D4AF37] text-[#F5F5F7] text-sm font-medium tracking-wider uppercase transition-all duration-300 overflow-hidden"
              >
                {/* Fill effect on hover */}
                <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#121212] transition-colors duration-300">
                  Book Your Custom Design
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>

              {/* Secondary CTA: Flash Board */}
              <a
                href="#flash-board"
                className="group inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wider uppercase text-[#8E8E93] hover:text-[#F5F5F7] transition-colors duration-200"
              >
                <span className="relative">
                  Browse Available Flash
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8E8E93]/30 group-hover:bg-[#F5F5F7] transition-colors duration-200" />
                </span>
              </a>
            </motion.div>

            {/* Studio Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs text-[#8E8E93] leading-tight">
                  Fully Licensed & <br />Insured Solo Studio
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs text-[#8E8E93] leading-tight">
                  100% Single-Use, <br />Sterile Equipment
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs text-[#8E8E93] leading-tight">
                  6A Gwerthonor Place, <br />Gilfach Bargoed
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Crisp High-Resolution Split-Screen Artwork Image */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Elegant outer gold frame container */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[3/4] p-2 border border-white/10 bg-[#1C1C1E]">
              {/* Inner gold accent lines on corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#D4AF37]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#D4AF37]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37]" />

              <div className="relative w-full h-full overflow-hidden bg-[#121212]">
                <motion.img
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1200"
                  alt="Intricate fine-line botanical blackwork tattoo flowing gracefully on a forearm"
                  className="w-full h-full object-cover object-center filter grayscale contrast-115 brightness-95 transition-all duration-700"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/10 to-transparent" />

                {/* Overlaid Micro Metadata Panel */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#121212]/90 backdrop-blur-md border border-white/5 p-4 flex justify-between items-center">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono">
                      Featured Work
                    </span>
                    <span className="block text-sm text-[#F5F5F7] font-medium mt-0.5">
                      Botanical Sleeve Study
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase tracking-widest text-[#8E8E93] font-mono">
                      Style
                    </span>
                    <span className="block text-sm text-[#F5F5F7] font-medium mt-0.5">
                      Fine-line Blackwork
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Editorial Badge */}
            <div className="absolute -top-4 -right-4 bg-[#1C1C1E] border border-[#D4AF37]/30 p-4 shadow-xl hidden sm:flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#8E8E93] font-mono">
                  Booking Status
                </p>
                <p className="text-xs text-[#F5F5F7] font-medium">
                  Accepting Custom Concepts
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}