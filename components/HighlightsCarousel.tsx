'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

interface HighlightItem {
  id: string;
  title: string;
  style: string;
  placement: string;
  imageUrl: string;
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'sentinel-owl',
    title: 'The Sentinel Owl',
    style: 'Illustrative Blackwork',
    placement: 'Outer Forearm',
    imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'micro-fern',
    title: 'Micro-Botanical Fern',
    style: 'Fine-Line Single Needle',
    placement: 'Collarbone',
    imageUrl: 'https://images.unsplash.com/photo-1560707303-4e980c876924?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'geom-mandala',
    title: 'Geometric Mandala',
    style: 'High-Detail Custom Blackwork',
    placement: 'Upper Back',
    imageUrl: 'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'sacred-symmetry',
    title: 'Sacred Symmetry Sleeve',
    style: 'High-Detail Custom',
    placement: 'Full Forearm',
    imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'serpent-steel',
    title: 'Serpent & Steel',
    style: 'Illustrative Blackwork',
    placement: 'Outer Thigh',
    imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=800',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 15 },
  },
};

export function HighlightsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    
    setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < maxScroll - 5);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollState);
      // Run once on mount to set initial state
      updateScrollState();
      window.addEventListener('resize', updateScrollState);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', updateScrollState);
      }
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      id="highlights-carousel" 
      className="relative bg-[#121212] text-[#F5F5F7] py-24 px-4 md:px-12 overflow-hidden select-none border-b border-[#2C2C2E]"
    >
      {/* Decorative subtle background gold glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#D4AF37]/60" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Curated Collection
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white mb-4">
              Selected Gallery Highlights
            </h2>
            <p className="text-[#8E8E93] text-base md:text-lg font-sans font-light leading-relaxed">
              A close look at recent custom illustrative and fine-line projects, showcasing clean heals, sharp line-weight variation, and seamless anatomical placement.
            </p>
          </div>

          {/* Custom Navigation Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-3.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                canScrollLeft
                  ? 'border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]'
                  : 'border-[#2C2C2E] text-neutral-600 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`p-3.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                canScrollRight
                  ? 'border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]'
                  : 'border-[#2C2C2E] text-neutral-600 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track Wrapper */}
        <div className="relative -mx-4 px-4 md:-mx-12 md:px-12">
          <motion.div
            ref={scrollContainerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8"
            style={{ scrollbarWidth: 'none' }}
          >
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="flex-none w-[85vw] sm:w-[450px] md:w-[500px] snap-start group relative"
              >
                {/* Thin gold border box framing the image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all duration-700 bg-[#1C1C1E]">
                  {/* Image with subtle hover zoom */}
                  <img
                    src={item.imageUrl}
                    alt={`${item.title} - ${item.style} tattoo`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                  />

                  {/* Gradient Overlay for metadata contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

                  {/* Top Right Project Number */}
                  <div className="absolute top-4 right-4 font-mono text-xs text-[#D4AF37]/60 tracking-widest bg-black/40 backdrop-blur-sm px-2.5 py-1 border border-[#D4AF37]/10">
                    0{index + 1}
                  </div>

                  {/* Metadata: Revealed elegantly on hover, minimal representation always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="overflow-hidden">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.style}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-white tracking-wide mb-2 transition-colors group-hover:text-[#D4AF37]">
                      {item.title}
                    </h3>
                    
                    {/* Micro metadata line with slow reveal */}
                    <div className="h-0 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center gap-1.5 border-t border-[#D4AF37]/20 pt-2 mt-1">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#8E8E93]">
                        Placement:
                      </span>
                      <span className="font-sans text-xs text-neutral-200 font-light">
                        {item.placement}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar & CTA Footer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-[#2C2C2E]">
          {/* Progress Bar Indicator */}
          <div className="w-full sm:w-64 bg-[#2C2C2E] h-[2px] rounded-full overflow-hidden relative">
            <div 
              className="absolute top-0 left-0 h-full bg-[#D4AF37] transition-all duration-150 ease-out"
              style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
            />
          </div>

          {/* CTA Link to Portfolio */}
          <a
            href="#portfolio-gallery"
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#D4AF37]/30 text-sm tracking-widest uppercase font-mono text-[#D4AF37] hover:text-white transition-colors overflow-hidden"
          >
            {/* Background color fill on hover */}
            <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />
            
            View Full Virtual Portfolio
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
}