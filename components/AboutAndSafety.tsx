'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronDown, Shield, Sparkles, Check, Heart, Eye } from 'lucide-react';

// TypeScript Types
interface HygieneStandard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface FAQItem {
  question: string;
  answer: string;
}

// Framer Motion Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 16 }
  }
};

const accordionVariants: Variants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.25, ease: 'easeInOut' } }
};

export function AboutAndSafety() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const hygieneStandards: HygieneStandard[] = [
    {
      title: 'Fully Licensed',
      description: 'Registered with Caerphilly County Borough Council and fully compliant with all local environmental health regulations.',
      icon: Shield,
    },
    {
      title: '100% Sterile Single-Use',
      description: 'All needles, cartridge grips, and barriers are opened from sterile packaging in front of you and disposed of immediately after your session.',
      icon: Sparkles,
    },
    {
      title: 'Medical-Grade Sanitation',
      description: 'The studio undergoes a deep, clinical-grade sanitation process between every single client.',
      icon: Heart,
    },
    {
      title: 'Premium Vegan Inks',
      description: 'We use only industry-leading, reach-compliant, vegan-friendly black inks that deliver rich, lasting saturation.',
      icon: Eye,
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'Does a fine-line tattoo hurt more than a regular tattoo?',
      answer: 'No, in most cases, fine-line tattooing hurts less. Because fine-line work uses smaller, thinner needles, it causes less trauma to the skin than bold traditional outlines or heavy shading. Most clients describe it as a light scratching sensation.',
    },
    {
      question: 'Can I bring a friend with me to my appointment?',
      answer: 'Because the studio is a private, solo space designed to keep the environment quiet and sterile, we ask that you come to your appointment alone. If you require a support person due to accessibility or medical reasons, please let us know in your booking form and we will gladly accommodate them.',
    },
    {
      question: 'How do touch-ups work?',
      answer: 'We want your tattoo to look perfect. We offer one free touch-up session within the first 6 months of your appointment if any lines fade unevenly during the healing process. Touch-ups due to poor aftercare or neglect are subject to a standard setup fee.',
    },
    {
      question: 'Do you tattoo custom designs that other artists have drawn?',
      answer: 'We will never copy another tattoo artist’s exact work. If you bring in a reference photo of another tattoo, Jake will use it as inspiration to design a unique, custom piece specifically for you, ensuring your tattoo is completely original.',
    },
    {
      question: 'How should I prepare for my session?',
      answer: 'Get a good night’s sleep, eat a hearty meal 1 to 2 hours before your appointment, and stay well-hydrated. Avoid drinking alcohol or taking blood-thinning medications for 24 hours before your session. Wear comfortable clothing that allows easy, unrestricted access to the area being tattooed.',
    },
  ];

  return (
    <section
      id="about-and-safety"
      className="relative bg-[#121212] text-[#F5F5F7] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[600px] h-[600px] bg-neutral-900/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        
        {/* SECTION 1: JAKE'S PROFILE & ARTISTIC PHILOSOPHY */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column: Premium Editorial Visuals */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative group">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#D4AF37]/20 bg-neutral-950">
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/60 z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/60 z-20" />
              
              <img
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=1000&q=80"
                alt="Jake Llewellyn tattooing with meticulous focus in his sterile studio"
                className="object-cover w-full h-full opacity-80 grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Minimalist Floating Captions */}
            <div className="absolute -bottom-6 -right-4 bg-[#1C1C1E] border border-[#D4AF37]/30 py-3 px-5 shadow-2xl hidden sm:block">
              <span className="font-mono text-[10px] tracking-widest text-[#D4AF37] block uppercase">STUDIO LOCATION</span>
              <span className="font-serif text-sm text-[#F5F5F7] font-medium">Gilfach Bargoed, South Wales</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-[0.25em] text-[#D4AF37] uppercase block">
                The Craft & The Vision
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#F5F5F7] tracking-tight leading-tight">
                Meet Jake Llewellyn
              </h2>
            </div>

            <div className="space-y-6 text-base text-[#8E8E93] leading-relaxed font-sans font-light">
              <p>
                With years of dedicated practice, Jake Llewellyn has built a reputation in South Wales for clean lines, deep saturation, and custom-tailored placement. Operating from a private, solo studio in Gilfach Bargoed, Jake specializes in fine-line work and high-detail illustrative blackwork.
              </p>
              <p>
                His artistic philosophy is simple: a tattoo should look as though it grew naturally on your body. By studying the natural contours, muscle flow, and skin texture of every client, Jake designs custom work that is structurally sound and ages beautifully.
              </p>
              <p>
                Breaking away from the loud, intimidating atmosphere of traditional street shops, Jake has built a quiet, focused, and deeply welcoming space where clients can feel completely relaxed and secure throughout their sessions.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#booking-hub"
                className="inline-flex items-center gap-3 border border-[#D4AF37] px-8 py-4 text-xs tracking-widest uppercase text-[#F5F5F7] hover:bg-[#D4AF37] hover:text-[#121212] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] font-sans font-semibold"
              >
                Book Custom Design
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* SECTION 2: STUDIO STANDARDS & HYGIENE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#D4AF37] uppercase block">
              Safety & Environment
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-[#F5F5F7] tracking-tight">
              Uncompromising Hygiene Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hygieneStandards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#1C1C1E] border border-neutral-800 p-8 space-y-6 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800 text-[#D4AF37]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-serif text-[#F5F5F7] font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#8E8E93] leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[10px] font-mono tracking-wider text-[#D4AF37] uppercase">Verified Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* SECTION 3: COMPREHENSIVE ACCORDION FAQ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          {/* FAQ Intro Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-[0.25em] text-[#D4AF37] uppercase block">
                Common Inquiries
              </span>
              <h3 className="text-3xl md:text-4xl font-serif text-[#F5F5F7] tracking-tight leading-tight">
                Frequently Asked Questions
              </h3>
            </div>
            <p className="text-base text-[#8E8E93] leading-relaxed font-sans font-light">
              Clear answers to help you prepare for your session and ensure a seamless, professional experience from consultation to final healing.
            </p>
            <div className="pt-4">
              <p className="text-sm text-[#8E8E93] font-sans">
                Have a unique question not listed here?
              </p>
              <a
                href="#contact-and-directions"
                className="inline-block mt-2 font-mono text-xs tracking-wider text-[#D4AF37] hover:underline uppercase"
              >
                Get in Touch Direct →
              </a>
            </div>
          </motion.div>

          {/* FAQ Accordion Column */}
          <motion.div variants={itemVariants} className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-neutral-800 pb-4 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full py-4 flex justify-between items-center text-left text-base md:text-lg font-serif text-[#F5F5F7] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] px-2 rounded group"
                  >
                    <span className="pr-4 leading-snug">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8E8E93] group-hover:text-[#D4AF37] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#D4AF37]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={accordionVariants}
                        className="overflow-hidden"
                      >
                        <div className="px-2 pb-4 text-sm md:text-base text-[#8E8E93] leading-relaxed font-sans font-light space-y-3">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Closing Trust Callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="border-t border-[#D4AF37]/20 pt-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h4 className="text-xl font-serif text-[#F5F5F7]">
              Ready to collaborate on your next custom piece?
            </h4>
            <p className="text-sm text-[#8E8E93] font-sans font-light">
              Secure your session with Jake in our private, licensed Gilfach Bargoed studio.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#booking-hub"
              className="bg-[#D4AF37] text-[#121212] px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-[#121212] transition-all duration-300 text-center font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              Book Your Appointment
            </a>
            <a
              href="#flash-board"
              className="border border-neutral-700 text-[#F5F5F7] px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:border-[#D4AF37] transition-all duration-300 text-center font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
            >
              Browse Available Flash
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}