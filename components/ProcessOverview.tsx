'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, HeartPulse } from 'lucide-react';

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 18,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function ProcessOverview() {
  const steps = [
    {
      num: '01',
      title: 'Submit Your Concept',
      headline: '01. Submit Your Concept',
      body: 'Fill out our structured booking form with your size, placement, and reference ideas. We’ll review your concept to ensure it aligns with our artistic style and can be executed beautifully.',
      icon: Sparkles,
      tag: 'Consultation & Inquiry',
    },
    {
      num: '02',
      title: 'The Craft in Motion',
      headline: '02. The Craft in Motion',
      body: 'Join us at our clean, welcoming studio in Gilfach Bargoed. We’ll finalize the size and placement on your skin, make sure you are completely comfortable, and begin the tattoo process with clinical-grade hygiene.',
      icon: ShieldCheck,
      tag: 'The Studio Session',
    },
    {
      num: '03',
      title: 'Healing & Longevity',
      headline: '03. Healing & Longevity',
      body: 'Your tattoo journey doesn\'t end when you leave the chair. We provide you with premium healing instructions and specialized advice to ensure your fine lines and rich blacks stay crisp for a lifetime.',
      icon: HeartPulse,
      tag: 'Aftercare & Support',
    },
  ];

  return (
    <section
      id="process-overview"
      className="relative min-h-screen bg-[#121212] py-24 sm:py-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Subtle Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900 via-[#121212] to-black pointer-events-none" />
      
      {/* Decorative Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient Gold Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">
            The Client Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F5F5F7] tracking-tight mb-6">
            How We Work Together
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#8E8E93] leading-relaxed max-w-2xl mx-auto font-sans font-light">
            Every piece of permanent art is a collaborative journey. From the initial spark of an idea to the lifetime care of your ink, we maintain the highest standards of craft and safety.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative bg-[#1C1C1E] border border-stone-800/80 hover:border-[#D4AF37]/50 p-8 sm:p-10 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle card glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div>
                  {/* Step Header Block */}
                  <div className="flex justify-between items-start mb-10">
                    <span className="font-serif text-5xl sm:text-6xl font-light text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 tracking-tighter transition-colors duration-500">
                      {step.num}
                    </span>
                    <div className="p-3 bg-stone-900/80 border border-stone-800 rounded-none group-hover:border-[#D4AF37]/30 transition-colors duration-500">
                      <IconComponent className="w-5 h-5 text-[#D4AF37] stroke-[1.25]" />
                    </div>
                  </div>

                  {/* Step Meta Tag */}
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-2">
                    {step.tag}
                  </span>

                  {/* Headline & Body */}
                  <h3 className="text-xl sm:text-2xl font-serif text-[#F5F5F7] tracking-wide mb-4 group-hover:text-white transition-colors duration-300">
                    {step.headline}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-[#8E8E93] leading-relaxed font-light font-sans group-hover:text-stone-300 transition-colors duration-300">
                    {step.body}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-8 pt-6 border-t border-stone-900 flex items-center justify-between text-xs font-mono tracking-wider text-stone-500 group-hover:text-[#D4AF37] transition-colors duration-300">
                  <span>PHASE {step.num}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-800 group-hover:bg-[#D4AF37] transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Editorial Split Section (Images + Quick Callouts) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-stone-900 pt-16 sm:pt-20">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
              The Studio Philosophy
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#F5F5F7] tracking-tight leading-tight">
              A private, clinical space designed for collaborative craft.
            </h3>
            <p className="text-sm sm:text-base text-[#8E8E93] leading-relaxed font-light">
              We believe the tattooing environment directly impacts the final result. That is why our Gilfach Bargoed space is quiet, sanitized to medical-grade requirements, and completely private—ensuring a secure, relaxed atmosphere throughout your session.
            </p>
            <div className="pt-4">
              <a 
                href="#booking-hub" 
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono tracking-wider text-[#F5F5F7] hover:text-[#D4AF37] group transition-colors duration-300"
              >
                Read the Full Booking Policy
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 bg-stone-900 overflow-hidden border border-stone-800">
              <img 
                src="https://images.unsplash.com/photo-1598136490941-30d885318abd?auto=format&fit=crop&q=80&w=800" 
                alt="Clean clinical studio equipment setup" 
                className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-1">Equipment Set</span>
                <p className="text-xs text-[#F5F5F7] font-serif tracking-wider">100% Sterile Single-Use Materials</p>
              </div>
            </div>
            
            <div className="relative h-64 sm:h-80 bg-stone-900 overflow-hidden border border-stone-800">
              <img 
                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=800" 
                alt="Detailed fine line tattoo execution" 
                className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-1">The Ink Craft</span>
                <p className="text-xs text-[#F5F5F7] font-serif tracking-wider">Precision Illustrative Blackwork</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}