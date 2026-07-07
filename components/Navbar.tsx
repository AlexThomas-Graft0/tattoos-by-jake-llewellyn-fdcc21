'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X, Shield, Calendar, MapPin } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Portfolio', href: '#portfolio-gallery' },
  { label: 'Flash Board', href: '#flash-board' },
  { label: 'Booking Hub', href: '#booking-hub' },
  { label: 'Aftercare & Safety', href: '#about-and-safety' },
  { label: 'Contact', href: '#contact-and-directions' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navContainerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: '100vh',
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      {/* Upper Micro-Banner */}
      <div className="w-full bg-[#0c0c0d] border-b border-[#D4AF37]/10 text-[10px] sm:text-xs tracking-[0.15em] text-[#8E8E93] py-2 px-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="uppercase font-mono">Status: Currently Booking Custom Work</span>
          </div>
          <div className="flex items-center gap-4 divide-x divide-white/10">
            <span className="flex items-center gap-1.5 font-mono uppercase pl-4 sm:pl-0">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" /> Licensed Studio
            </span>
            <span className="flex items-center gap-1.5 font-mono uppercase pl-4">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Gilfach Bargoed
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-xl'
            : 'bg-[#121212]/40 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo / Brand */}
            <div className="flex-shrink-0">
              <a
                href="#hero-section"
                className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md p-1"
              >
                <span className="font-serif text-xl sm:text-2xl tracking-wider text-[#F5F5F7] transition-colors duration-300 group-hover:text-[#D4AF37]">
                  JAKE LLEWELLYN
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#8E8E93] font-mono group-hover:text-white transition-colors duration-300">
                  Fine-Line & Blackwork
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-xs uppercase tracking-[0.2em] text-[#8E8E93] hover:text-[#F5F5F7] font-medium transition-colors duration-300 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] scale-x-0 origin-right transition-transform duration-300 hover:scale-x-100 hover:origin-left" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="#booking-hub"
                className="relative inline-flex items-center justify-center px-6 py-3 border border-[#D4AF37] bg-transparent text-xs font-semibold uppercase tracking-[0.15em] text-[#F5F5F7] overflow-hidden transition-all duration-300 hover:text-[#121212] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span className="absolute inset-0 w-0 h-full bg-[#D4AF37] transition-all duration-300 ease-out group-hover:w-full" />
                <span className="relative z-10 flex items-center gap-2">
                  Book Now <Calendar className="w-4 h-4" />
                </span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-[#8E8E93] hover:text-[#F5F5F7] hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] transition-colors duration-300"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Fullscreen Overlay Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden fixed top-[113px] left-0 right-0 bg-[#121212] border-t border-[#D4AF37]/10 flex flex-col justify-between overflow-hidden"
              style={{ height: 'calc(100vh - 113px)' }}
            >
              <div className="px-6 pt-8 pb-6 space-y-6 flex flex-col justify-start h-full">
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.label} variants={mobileItemVariants}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-xl font-serif tracking-wider text-[#F5F5F7] hover:text-[#D4AF37] transition-colors duration-300 py-2 border-b border-white/5"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}

                <motion.div variants={mobileItemVariants} className="pt-6">
                  <a
                    href="#booking-hub"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center px-6 py-4 border border-[#D4AF37] bg-[#D4AF37] text-xs font-semibold uppercase tracking-[0.15em] text-[#121212] transition-colors duration-300 hover:bg-transparent hover:text-[#F5F5F7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    Book Appointment
                  </a>
                </motion.div>

                {/* Mobile Menu Footer Info */}
                <motion.div 
                  variants={mobileItemVariants} 
                  className="mt-auto pb-12 border-t border-white/5 pt-6 text-center"
                >
                  <p className="text-xs text-[#8E8E93] tracking-wide font-mono">
                    6A Gwerthonor Place, Gilfach Bargoed CF81 8JQ
                  </p>
                  <p className="text-[10px] text-[#8E8E93]/60 tracking-wider font-mono mt-1">
                    Tuesday – Saturday: 10:00 – 18:00
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}