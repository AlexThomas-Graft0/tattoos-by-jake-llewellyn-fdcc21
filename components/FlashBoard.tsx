'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Check, Lock, Maximize2, Sparkles, Info, Layers, Zap, X, Calendar } from 'lucide-react';

interface FlashItem {
  id: string;
  title: string;
  status: 'Available' | 'Claimed';
  dimensions: string;
  price: string;
  image: string;
  description: string;
}

const flashDesigns: FlashItem[] = [
  {
    id: "FD-001",
    title: "Sovereign Dagger",
    status: "Available",
    dimensions: "15cm x 6cm",
    price: "£180 - £220",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=600&q=80",
    description: "An intricate, high-contrast illustrative blade framed with delicate dotwork flourishes and razor-sharp symmetry."
  },
  {
    id: "FD-002",
    title: "Wild Thistle",
    status: "Available",
    dimensions: "10cm x 7cm",
    price: "£130 - £160",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80",
    description: "Delicate fine-line botanical study capturing the rugged texture and sharp elegance of wild highland flora."
  },
  {
    id: "FD-003",
    title: "Moon Phase Moth",
    status: "Claimed",
    dimensions: "12cm x 12cm",
    price: "£200 (Claimed)",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
    description: "A cosmic lepidoptera piece aligned with transitioning lunar cycles. Already inked on its sole collector."
  },
  {
    id: "FD-004",
    title: "Fine-Line Hourglass",
    status: "Available",
    dimensions: "14cm x 8cm",
    price: "£190 - £230",
    image: "https://images.unsplash.com/photo-1516383740770-fbcc58beeb8a?auto=format&fit=crop&w=600&q=80",
    description: "A meditation on transience, featuring hyper-detailed sand grains and single-needle structural glasswork."
  },
  {
    id: "FD-005",
    title: "Bramble & Key",
    status: "Claimed",
    dimensions: "11cm x 5cm",
    price: "£140 (Claimed)",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    description: "An antique key entwined with dense, protective thorny brambles. Claimed and archived."
  },
  {
    id: "FD-006",
    title: "Sleeping Fox",
    status: "Available",
    dimensions: "13cm x 9cm",
    price: "£170 - £210",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
    description: "A soft, illustrative blackwork piece capturing a resting fox enveloped in minimalist forest foliage."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.15 }
  }
};

export function FlashBoard() {
  const [filter, setFilter] = useState<'All' | 'Available' | 'Claimed'>('All');
  const [selectedDesign, setSelectedDesign] = useState<FlashItem | null>(null);

  const filteredDesigns = useMemo(() => {
    if (filter === 'All') return flashDesigns;
    return flashDesigns.filter(design => design.status === filter);
  }, [filter]);

  return (
    <section 
      id="flash-board" 
      className="relative bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-zinc-800"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#D4AF37] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-zinc-700 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-wider text-[#D4AF37] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORIGINAL PRE-DRAWN CONCEPTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif tracking-tight text-[#F5F5F7] mb-6">
            Pre-Drawn & Ready to Ink
          </h2>
          <p className="text-lg text-[#8E8E93] leading-relaxed">
            These are original, pre-prepared designs created by Jake Llewellyn. Each flash piece is tattooed <span className="text-[#F5F5F7] font-semibold underline decoration-[#D4AF37]/50 underline-offset-4">only once</span>. If you see a design that speaks to you, claim it before it’s gone.
          </p>
        </div>

        {/* The Flash Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="bg-[#1C1C1E] border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors duration-300">
            <div>
              <div className="text-[#D4AF37] font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                Rule 01
              </div>
              <h3 className="text-[#F5F5F7] font-serif text-lg mb-2">Single-use Only</h3>
              <p className="text-sm text-[#8E8E93] leading-relaxed">
                Once a design is claimed, it is retired forever and will never be tattooed again. Complete exclusivity guaranteed.
              </p>
            </div>
          </div>

          <div className="bg-[#1C1C1E] border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors duration-300">
            <div>
              <div className="text-[#D4AF37] font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                Rule 02
              </div>
              <h3 className="text-[#F5F5F7] font-serif text-lg mb-2">Fixed Proportions</h3>
              <p className="text-sm text-[#8E8E93] leading-relaxed">
                Sizes are optimized specifically for the design’s intricate detail, though final body placement is highly customizable.
              </p>
            </div>
          </div>

          <div className="bg-[#1C1C1E] border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors duration-300">
            <div>
              <div className="text-[#D4AF37] font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                Rule 03
              </div>
              <h3 className="text-[#F5F5F7] font-serif text-lg mb-2">No Design Fees</h3>
              <p className="text-sm text-[#8E8E93] leading-relaxed">
                Skip the custom design back-and-forth process. Pre-drawn means faster booking times and a transparent flat-rate price.
              </p>
            </div>
          </div>
        </div>

        {/* Legend & Filter Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-zinc-800 pb-8 mb-12 gap-6">
          
          {/* Legend */}
          <div className="flex items-center gap-6 text-xs font-mono tracking-wider">
            <span className="text-zinc-500 uppercase">Legend:</span>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border border-[#D4AF37] bg-[#D4AF37]/10 inline-block" />
              <span className="text-[#F5F5F7]">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border border-zinc-700 bg-zinc-800 inline-block" />
              <span className="text-zinc-500">Claimed</span>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex bg-zinc-900 border border-zinc-800 p-1 rounded-sm">
            {(['All', 'Available', 'Claimed'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-1.5 text-xs font-mono uppercase transition-all duration-200 ${
                  filter === type
                    ? 'bg-[#D4AF37] text-black font-semibold'
                    : 'text-zinc-400 hover:text-[#F5F5F7]'
                }`}
              >
                {type} ({type === 'All' ? flashDesigns.length : flashDesigns.filter(d => d.status === type).length})
              </button>
            ))}
          </div>
        </div>

        {/* Flash Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((design) => {
              const isAvailable = design.status === 'Available';
              return (
                <motion.div
                  key={design.id}
                  layoutId={`card-${design.id}`}
                  variants={itemVariants}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`group relative bg-[#1C1C1E] border flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                    isAvailable 
                      ? 'border-[#D4AF37]/30 hover:border-[#D4AF37]' 
                      : 'border-zinc-800 opacity-60'
                  }`}
                >
                  {/* Card Image Wrapper */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-black">
                    <img 
                      src={design.image} 
                      alt={design.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-transparent to-transparent opacity-90" />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase tracking-wider ${
                        isAvailable 
                          ? 'bg-black/80 text-[#D4AF37] border border-[#D4AF37]/50' 
                          : 'bg-zinc-900/90 text-zinc-500 border border-zinc-800'
                      }`}>
                        {isAvailable ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                            Available
                          </>
                        ) : (
                          <>
                            <Lock className="w-3 h-3" />
                            Claimed
                          </>
                        )}
                      </span>
                    </div>

                    {/* Quick Preview Hover Trigger */}
                    <button 
                      onClick={() => setSelectedDesign(design)}
                      className="absolute bottom-4 right-4 p-2 bg-black/80 border border-zinc-800 hover:border-[#D4AF37] text-[#F5F5F7] transition-colors rounded-none"
                      title="View Details"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Info Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h4 className="text-xl font-serif text-[#F5F5F7] tracking-tight group-hover:text-[#D4AF37] transition-colors duration-200">
                          {design.title}
                        </h4>
                        <span className="text-xs font-mono text-zinc-500 shrink-0 mt-1">{design.id}</span>
                      </div>
                      <p className="text-sm text-[#8E8E93] line-clamp-2 mb-4">
                        {design.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-800/80">
                      <div className="grid grid-cols-2 gap-4 mb-4 text-xs font-mono">
                        <div>
                          <span className="text-zinc-500 block">Sizing Range:</span>
                          <span className="text-[#F5F5F7]">{design.dimensions}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-500 block">Estimated Price:</span>
                          <span className={`${isAvailable ? 'text-[#D4AF37]' : 'text-zinc-500 line-through'}`}>
                            {design.price}
                          </span>
                        </div>
                      </div>

                      {/* Call To Action */}
                      {isAvailable ? (
                        <a 
                          href="#booking-hub"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#D4AF37] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#F5F5F7] transition-colors duration-200"
                        >
                          <Zap className="w-4 h-4 fill-current" />
                          Book This Design
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-800 text-zinc-500 font-mono text-xs uppercase tracking-wider cursor-not-allowed"
                        >
                          <Lock className="w-4 h-4" />
                          Already Claimed
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Booking Prompt */}
        <div className="mt-20 text-center border-t border-zinc-800/60 pt-12">
          <p className="text-[#8E8E93] text-sm mb-4">
            Have a highly specific custom concept in mind instead of pre-drawn flash?
          </p>
          <a 
            href="#booking-hub" 
            className="inline-flex items-center gap-2 text-sm font-mono text-[#D4AF37] hover:text-[#F5F5F7] transition-colors group"
          >
            Submit a Custom Design Inquiry 
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <motion.div 
              className="fixed inset-0" 
              onClick={() => setSelectedDesign(null)} 
            />
            
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-3xl bg-[#1C1C1E] border border-zinc-800 overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedDesign(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/80 hover:bg-[#D4AF37] text-white hover:text-black transition-colors rounded-none border border-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Side */}
              <div className="relative aspect-square md:aspect-auto md:h-full min-h-[350px] bg-black">
                <img 
                  src={selectedDesign.image} 
                  alt={selectedDesign.title} 
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
              </div>

              {/* Detail Side */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-mono text-[#D4AF37] tracking-widest">{selectedDesign.id}</span>
                    <span className="text-zinc-700 font-mono">•</span>
                    <span className={`text-[10px] uppercase tracking-widest font-mono ${
                      selectedDesign.status === 'Available' ? 'text-[#D4AF37]' : 'text-zinc-500'
                    }`}>
                      {selectedDesign.status}
                    </span>
                  </div>

                  <h3 className="text-3xl font-serif text-[#F5F5F7] tracking-tight mb-4">
                    {selectedDesign.title}
                  </h3>
                  
                  <p className="text-sm text-[#8E8E93] leading-relaxed mb-6">
                    {selectedDesign.description}
                  </p>

                  <div className="space-y-3 bg-zinc-900/60 p-4 border border-zinc-800/80 font-mono text-xs mb-6">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Optimized Size:</span>
                      <span className="text-[#F5F5F7] font-semibold">{selectedDesign.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Tattoo Studio:</span>
                      <span className="text-[#F5F5F7]">Gilfach Bargoed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Estimated Investment:</span>
                      <span className="text-[#D4AF37] font-semibold">{selectedDesign.price}</span>
                    </div>
                  </div>
                </div>

                <div>
                  {selectedDesign.status === 'Available' ? (
                    <div className="space-y-3">
                      <a 
                        href="#booking-hub"
                        onClick={() => setSelectedDesign(null)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#D4AF37] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors duration-200"
                      >
                        <Calendar className="w-4 h-4" />
                        Claim This Design
                      </a>
                      <p className="text-[10px] text-zinc-500 text-center font-mono">
                        Note: Requires a £50 non-refundable deposit to secure appointment.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <button 
                        disabled
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-zinc-800 text-zinc-500 font-mono text-xs uppercase tracking-wider cursor-not-allowed"
                      >
                        <Lock className="w-4 h-4" />
                        Archived Design
                      </button>
                      <p className="text-[10px] text-zinc-500 text-center font-mono">
                        This unique work has already been claimed. Custom variations can be discussed.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}