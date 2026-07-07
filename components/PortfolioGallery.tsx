'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, ArrowUpRight, Sparkles } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  styleTag: 'Fine-Line' | 'Illustrative Blackwork' | 'High-Detail Custom';
  placement: string;
  imageAltText: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'item-1',
    title: 'Wild Rose',
    styleTag: 'Fine-Line',
    placement: 'Inner Wrist',
    imageAltText: 'Intricate fine-line botanical rose tattoo on inner wrist.',
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'item-2',
    title: 'The Seeker Raven',
    styleTag: 'Illustrative Blackwork',
    placement: 'Calf',
    imageAltText: 'Bold illustrative blackwork raven tattoo with geometric elements on calf.',
    imageUrl: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'item-3',
    title: 'Sacred Symmetry Sleeve',
    styleTag: 'High-Detail Custom',
    placement: 'Full Forearm',
    imageAltText: 'High-detail custom ornamental sleeve tattoo featuring symmetrical mandalas.',
    imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'item-4',
    title: 'Celestial Alignment',
    styleTag: 'Fine-Line',
    placement: 'Shoulder',
    imageAltText: 'Fine-line celestial crescent moon and delicate stars on upper shoulder.',
    imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'item-5',
    title: 'Serpent & Steel',
    styleTag: 'Illustrative Blackwork',
    placement: 'Outer Thigh',
    imageAltText: 'Illustrative blackwork snake wrapped around a dagger on outer thigh.',
    imageUrl: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'item-6',
    title: 'Anatomical Bloom',
    styleTag: 'High-Detail Custom',
    placement: 'Ribs',
    imageAltText: 'Custom anatomical heart tattoo with fine-line floral blooms growing out of it.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000',
  },
];

const categories = ['All Work', 'Fine-Line', 'Illustrative Blackwork', 'High-Detail Custom'] as const;
type Category = (typeof categories)[number];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All Work');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === 'All Work' || item.styleTag === activeCategory
  );

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    },
    [lightboxIndex, handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <section
      id="portfolio-gallery"
      className="relative bg-[#121212] py-24 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-[#1C1C1E]"
    >
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37] opacity-[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.015] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="h-px w-8 bg-[#D4AF37]/50" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#D4AF37]">
              The Virtual Studio
            </span>
            <span className="h-px w-8 bg-[#D4AF37]/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F5F5F7] tracking-tight mb-6"
          >
            The Ink Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-[#8E8E93] leading-relaxed font-sans"
          >
            Browse a curated collection of completed custom tattoos. Use the filters below to explore specific styles
            crafted with precision and longevity in mind.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap justify-center gap-x-6 gap-y-3 border-b border-[#1C1C1E] pb-4 px-2 max-w-full">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="relative py-2 text-sm uppercase tracking-wider font-mono transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                >
                  <span className={isActive ? 'text-[#F5F5F7] font-medium' : 'text-[#8E8E93] hover:text-[#F5F5F7]'}>
                    {category}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1E] border border-[#1C1C1E] overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Map local index back to global index for lightbox
              const globalIndex = portfolioItems.findIndex((p) => p.id === item.id);

              return (
                <motion.div
                  key={item.id}
                  layout
                  variants={itemVariants}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[4/5] bg-[#121212] overflow-hidden cursor-pointer"
                  onClick={() => setLightboxIndex(globalIndex)}
                >
                  {/* Image wrapper with zoom */}
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAltText}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Micro Metadata View button top right */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-[-4px] group-hover:translate-y-0 transition-all duration-300">
                    <div className="p-2 bg-[#1C1C1E]/90 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] rounded-none">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 border border-[#D4AF37]/20">
                        {item.styleTag}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#8E8E93]">
                        {item.placement}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors duration-300 flex items-center justify-between">
                      {item.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#D4AF37]" />
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-[#8E8E93] text-sm font-sans mb-4">
            Have a bespoke concept you want to bring to life?
          </p>
          <a
            href="#booking-hub"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-[#D4AF37] hover:text-[#F5F5F7] transition-colors group"
          >
            <span>Book Your Custom Design</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0C0C0D]/98 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Bar controls */}
            <div className="w-full flex justify-between items-center z-10">
              <div className="text-[#8E8E93] font-mono text-xs">
                {lightboxIndex + 1} <span className="opacity-40">/</span> {portfolioItems.length}
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="group flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider font-mono text-[#8E8E93] hover:text-[#F5F5F7] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                aria-label="Close Lightbox"
              >
                <span>Close</span>
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Main Stage */}
            <div className="flex-1 flex items-center justify-center relative my-4 max-h-[75vh]">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 md:left-4 z-10 p-3 bg-[#121212]/80 border border-[#1C1C1E] text-[#8E8E93] hover:text-[#F5F5F7] hover:border-[#D4AF37]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <div className="relative max-w-4xl max-h-full aspect-[4/5] overflow-hidden border border-[#1C1C1E]">
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  src={portfolioItems[lightboxIndex].imageUrl}
                  alt={portfolioItems[lightboxIndex].imageAltText}
                  className="w-full h-full object-contain max-h-[65vh] bg-[#121212]"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 md:right-4 z-10 p-3 bg-[#121212]/80 border border-[#1C1C1E] text-[#8E8E93] hover:text-[#F5F5F7] hover:border-[#D4AF37]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Info Bar */}
            <div className="w-full max-w-2xl mx-auto text-center z-10 pb-4">
              <motion.div
                key={`info-${lightboxIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 border border-[#D4AF37]/20">
                    {portfolioItems[lightboxIndex].styleTag}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8E8E93]">
                    Placement: {portfolioItems[lightboxIndex].placement}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F5F7]">
                  {portfolioItems[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E93] max-w-md mx-auto italic">
                  {portfolioItems[lightboxIndex].imageAltText}
                </p>

                <div className="pt-2">
                  <a
                    href="#booking-hub"
                    onClick={() => setLightboxIndex(null)}
                    className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c29f2f] text-[#121212] font-mono text-xs uppercase tracking-widest px-6 py-3 transition-colors font-semibold"
                  >
                    <span>Inquire About Similar Piece</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}