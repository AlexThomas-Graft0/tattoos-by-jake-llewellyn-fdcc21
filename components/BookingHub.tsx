'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  Upload, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  HelpCircle, 
  Clock, 
  Lock, 
  X,
  Check,
  FileText
} from 'lucide-react';

// Form Data Interface
interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: 'custom' | 'flash';
  flashDesign: string;
  placement: string;
  size: string;
  description: string;
  files: Array<{ name: string; size: string }>;
  preferredDays: string[];
  preferredTime: string[];
  medicalConsiderations: string;
  agreedToTerms: boolean;
}

const initialFormState: BookingFormData = {
  fullName: '',
  email: '',
  phone: '',
  inquiryType: 'custom',
  flashDesign: '',
  placement: '',
  size: '',
  description: '',
  files: [],
  preferredDays: [],
  preferredTime: [],
  medicalConsiderations: '',
  agreedToTerms: false,
};

export function BookingHub() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<BookingFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Animation Variants typed properly to satisfy TS rules
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.3, ease: 'easeIn' }
    }
  };

  // Form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquiryTypeChange = (type: 'custom' | 'flash') => {
    setFormData((prev) => ({ 
      ...prev, 
      inquiryType: type,
      // Reset flash design if switching to custom
      flashDesign: type === 'custom' ? '' : 'Sovereign Dagger'
    }));
  };

  const handleCheckboxChange = (category: 'preferredDays' | 'preferredTime', value: string) => {
    setFormData((prev) => {
      const currentValues = prev[category];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [category]: updatedValues };
    });
  };

  // Simulated File Upload handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      }));
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles].slice(0, 3) // Limit to 3 files max
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Validation checks per step
  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.fullName && formData.email && formData.phone);
      case 2:
        if (formData.inquiryType === 'flash') {
          return !!(formData.flashDesign && formData.placement && formData.size);
        }
        return !!(formData.placement && formData.size && formData.description);
      case 3:
        // References are optional but guided
        return true;
      case 4:
        return formData.preferredDays.length > 0 && formData.preferredTime.length > 0 && formData.agreedToTerms;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isStepValid(currentStep) && currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid(4)) return;

    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  return (
    <section 
      id="booking-hub" 
      className="relative bg-[#121212] py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.07),rgba(255,255,255,0))]" />
      <div className="absolute -left-48 top-1/3 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -right-48 bottom-1/3 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <span className="text-xs font-mono tracking-[0.2em] text-[#D4AF37] uppercase mb-4 block">
            Secure Your Session
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F5F5F7] tracking-tight mb-6">
            Transparent Pricing & Studio Rules
          </h2>
          <p className="text-[#8E8E93] text-lg font-sans leading-relaxed">
            We believe in complete transparency at every stage. Review our pricing structures, study rules, and submit your proposal below to bring your vision to life.
          </p>
        </motion.div>

        {/* Part 1: Pricing & Policy Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 lg:mb-28">
          
          {/* Left Column: Pricing Structures */}
          <motion.div 
            className="bg-[#1C1C1E] border border-[#D4AF37]/15 rounded-2xl p-8 lg:p-10 relative overflow-hidden group hover:border-[#D4AF37]/35 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            
            <span className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-mono px-3 py-1 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Financial Clarity
            </span>
            
            <h3 className="text-2xl md:text-3xl font-serif text-[#F5F5F7] mb-4">
              How Your Tattoo is Valued
            </h3>
            
            <p className="text-[#8E8E93] font-sans leading-relaxed mb-8">
              We do not charge arbitrary hourly rates that leave you guessing. Instead, we price by the piece, based on the final design's complexity, size, and placement.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 border-b border-white/5 pb-5">
                <div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold border border-white/5 shrink-0">
                  £80
                </div>
                <div>
                  <h4 className="text-[#F5F5F7] font-medium mb-1">Minimum Charge</h4>
                  <p className="text-sm text-[#8E8E93]">Applies to all tiny custom fine-line pieces and simplistic designs to cover sterile setup costs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-white/5 pb-5">
                <div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold border border-white/5 shrink-0 font-sans">
                  Custom
                </div>
                <div>
                  <h4 className="text-[#F5F5F7] font-medium mb-1">Custom Projects</h4>
                  <p className="text-sm text-[#8E8E93]">Large-scale custom projects receive a flat session rate, which is discussed and agreed upon during your consultation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold border border-white/5 shrink-0 font-sans">
                  Flat
                </div>
                <div>
                  <h4 className="text-[#F5F5F7] font-medium mb-1">Flash Projects</h4>
                  <p className="text-sm text-[#8E8E93]">Priced flat as listed on the Flash Board. Skip design fees completely for a highly optimized rate.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Booking Policies */}
          <motion.div 
            className="bg-[#1C1C1E] border border-white/5 rounded-2xl p-8 lg:p-10 relative overflow-hidden group hover:border-white/10 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#8E8E93] text-xs font-mono px-3 py-1 rounded-full mb-6">
              <Lock className="w-3.5 h-3.5" />
              Studio Agreement
            </span>

            <h3 className="text-2xl md:text-3xl font-serif text-[#F5F5F7] mb-4">
              The Booking Agreement
            </h3>

            <p className="text-[#8E8E93] font-sans leading-relaxed mb-8">
              A mutual commitment ensures the highest standard of focus and quality. Please read our key studio policies before submitting your request.
            </p>

            <div className="space-y-6">
              <div className="bg-neutral-900/50 border border-white/5 p-5 rounded-xl">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <h4 className="text-[#F5F5F7] font-semibold text-sm tracking-wide uppercase font-mono">Non-Refundable Deposits</h4>
                </div>
                <p className="text-sm text-[#8E8E93] leading-relaxed pl-4.5">
                  A deposit of <strong className="text-[#D4AF37] font-medium">£50</strong> is required to secure any appointment date. This deposit is fully deducted from the final price of your tattoo.
                </p>
              </div>

              <div className="bg-neutral-900/50 border border-white/5 p-5 rounded-xl">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <h4 className="text-[#F5F5F7] font-semibold text-sm tracking-wide uppercase font-mono">Rescheduling</h4>
                </div>
                <p className="text-sm text-[#8E8E93] leading-relaxed pl-4.5">
                  We require at least <strong className="text-white font-medium">48 hours' notice</strong> if you need to reschedule. Doing so allows you to transfer your deposit to a new date once.
                </p>
              </div>

              <div className="bg-neutral-900/50 border border-white/5 p-5 rounded-xl">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <h4 className="text-[#F5F5F7] font-semibold text-sm tracking-wide uppercase font-mono">No-Shows</h4>
                </div>
                <p className="text-sm text-[#8E8E93] leading-relaxed pl-4.5">
                  Failing to show up without notice results in immediate forfeiture of your deposit, and future bookings will require full prepayment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Part 2: Multi-Step Booking Form Container */}
        <motion.div 
          className="bg-[#1C1C1E] border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Form Left Side: Progress & Status */}
            <div className="lg:col-span-4 bg-neutral-950/60 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
              <div>
                <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase block mb-3">Booking Portal</span>
                <h3 className="text-2xl md:text-3xl font-serif text-[#F5F5F7] mb-6">Enquiry Hub</h3>
                <p className="text-sm text-[#8E8E93] leading-relaxed mb-8">
                  Provide your dimensions, ideas, and schedule. Jake reviews all entries personally within 48 business hours.
                </p>
                
                {/* Progress Indicators */}
                <div className="relative space-y-6">
                  {[
                    { step: 1, label: 'Contact Info', desc: 'Who you are & details' },
                    { step: 2, label: 'Tattoo Specifications', desc: 'Concept, size & placement' },
                    { step: 3, label: 'Reference Photos', desc: 'Style & composition' },
                    { step: 4, label: 'Availability', desc: 'Preferred days & schedule' },
                  ].map((item) => {
                    const isActive = currentStep === item.step;
                    const isCompleted = currentStep > item.step;
                    
                    return (
                      <div key={item.step} className="flex items-start gap-4 group">
                        <div className="relative flex items-center justify-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs border transition-all duration-300 ${
                            isActive 
                              ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-[0_0_12px_rgba(212,175,55,0.4)]' 
                              : isCompleted 
                              ? 'bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/40' 
                              : 'bg-transparent text-neutral-600 border-neutral-800'
                          }`}>
                            {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : `0${item.step}`}
                          </div>
                          {item.step !== 4 && (
                            <div className={`absolute top-8 left-4 w-px h-6 -translate-x-1/2 ${
                              isCompleted ? 'bg-[#D4AF37]/30' : 'bg-neutral-800'
                            }`} />
                          )}
                        </div>
                        <div>
                          <p className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-[#F5F5F7]' : 'text-neutral-500'}`}>
                            {item.label}
                          </p>
                          <p className="text-xs text-neutral-600">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-12 lg:mt-0 pt-8 border-t border-white/5 flex items-center gap-3 text-neutral-500">
                <Lock className="w-4 h-4 text-[#D4AF37]/60" />
                <span className="text-xs font-mono tracking-wider uppercase">Fully Encrypted Submission</span>
              </div>
            </div>

            {/* Form Right Side: Interactive Panel */}
            <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col justify-between min-h-[500px]">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
                  
                  {/* Step Container with Animation */}
                  <div className="mb-10">
                    <AnimatePresence mode="wait">
                      {currentStep === 1 && (
                        <motion.div
                          key="step1"
                          variants={stepVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="space-y-6"
                        >
                          <div>
                            <h4 className="text-lg font-serif text-[#F5F5F7] mb-2">Step 1: Contact Information</h4>
                            <p className="text-xs text-[#8E8E93]">Tell us who you are and how to reach you.</p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label htmlFor="fullName" className="block text-xs font-mono text-[#8E8E93] uppercase tracking-wider">
                                Full Name <span className="text-[#D4AF37]">*</span>
                              </label>
                              <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                <input
                                  type="text"
                                  id="fullName"
                                  name="fullName"
                                  required
                                  value={formData.fullName}
                                  onChange={handleInputChange}
                                  placeholder="e.g., Dylan Thomas"
                                  className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-[#F5F5F7] placeholder-neutral-600 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:border-transparent focus-visible:outline-none transition-all duration-300"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label htmlFor="email" className="block text-xs font-mono text-[#8E8E93] uppercase tracking-wider">
                                Email Address <span className="text-[#D4AF37]">*</span>
                              </label>
                              <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  required
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  placeholder="e.g., dylan@example.co.uk"
                                  className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-[#F5F5F7] placeholder-neutral-600 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:border-transparent focus-visible:outline-none transition-all duration-300"
                                />
                              </div>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                              <label htmlFor="phone" className="block text-xs font-mono text-[#8E8E93] uppercase tracking-wider">
                                Phone Number <span className="text-[#D4AF37]">*</span>
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  required
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  placeholder="e.g., 07123 456789"
                                  className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-[#F5F5F7] placeholder-neutral-600 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:border-transparent focus-visible:outline-none transition-all duration-300"
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 2 && (
                        <motion.div
                          key="step2"
                          variants={stepVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="space-y-6"
                        >
                          <div>
                            <h4 className="text-lg font-serif text-[#F5F5F7] mb-2">Step 2: Tattoo Specifications</h4>
                            <p className="text-xs text-[#8E8E93]">Describe your vision, size, and placement.</p>
                          </div>

                          {/* Custom vs Flash Tab Selector */}
                          <div className="space-y-2">
                            <label className="block text-xs font-mono text-[#8E8E93] uppercase tracking-wider">Inquiry Type</label>
                            <div className="grid grid-cols-2 gap-3 bg-neutral-950/60 p-1.5 rounded-xl border border-white/5">
                              <button
                                type="button"
                                onClick={() => handleInquiryTypeChange('custom')}
                                className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                                  formData.inquiryType === 'custom'
                                    ? 'bg-[#D4AF37] text-black font-semibold'
                                    : 'text-[#8E8E93] hover:text-[#F5F5F7]'
                                }`}
                              >
                                Custom Design
                              </button>
                              <button
                                type="button"
                                onClick={() => handleInquiryTypeChange('flash')}
                                className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                                  formData.inquiryType === 'flash'
                                    ? 'bg-[#D4AF37] text-black font-semibold'
                                    : 'text-[#8E8E93] hover:text-[#F5F5F7]'
                                }`}
                              >
                                Available Flash Design
                              </button>
                            </div>
                          </div>

                          {/* Conditional Flash Selection */}
                          {formData.inquiryType === 'flash' && (
                            <div className="space-y-2">
                              <label htmlFor="flashDesign" className="block text-xs font-mono text-[#8E8E93] uppercase tracking-wider">
                                Flash Design Selection
                              </label>
                              <select
                                id="flashDesign"
                                name="flashDesign"
                                value={formData.flashDesign}
                                onChange={handleInputChange}
                                className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-[#F5F5F7] focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:border-transparent focus-visible:outline-none transition-all duration-300"
                              >
                                <option value="Sovereign Dagger">Sovereign Dagger — £180 - £220</option>
                                <option value="Wild Thistle">Wild Thistle — £130 - £160</option>
                                <option value="Fine-Line Hourglass">Fine-Line Hourglass — £190 - £230</option>
                                <option value="Sleeping Fox">Sleeping Fox — £170 - £210</option>
                              </select>
                            </div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label htmlFor="placement" className="block text-xs font-mono text-[#8E8E93] uppercase tracking-wider">
                                Desired Placement on Body <span className="text-[#D4AF37]">*</span>
                              </label>
                              <input
                                type="text"
                                id="placement"
                                name="placement"
                                required
                                value={formData.placement}
                                onChange={handleInputChange}
                                placeholder="e.g., Right inner forearm"
                                className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-[#F5F5F7] placeholder-neutral-600 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:border-transparent focus-visible:outline-none transition-all duration-300"
                              />
                            </div>

                            <div className="space-y-2">
                              <label htmlFor="size" className="block text-xs font-mono text-[#8E8E93] uppercase tracking-wider">
                                Estimated Size (in centimeters) <span className="text-[#D4AF37]">*</span>
                              </label>
                              <input
                                type="text"
                                id="size"
                                name="size"
                                required
                                value={formData.size}
                                onChange={handleInputChange}
                                placeholder="e.g., 12cm high by 6cm wide"
                                className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-[#F5F5F7] placeholder-neutral-600 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:border-transparent focus-visible:outline-none transition-all duration-300"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="description" className="block text-xs font-mono text-[#8E8E93] uppercase tracking-wider">
                              {formData.inquiryType === 'custom' ? 'Detailed Description' : 'Additional Placement Notes (Optional)'} {formData.inquiryType === 'custom' && <span className="text-[#D4AF37]">*</span>}
                            </label>
                            <textarea
                              id="description"
                              name="description"
                              required={formData.inquiryType === 'custom'}
                              value={formData.description}
                              onChange={handleInputChange}
                              rows={4}
                              placeholder={formData.inquiryType === 'custom' ? "Describe your concept, preferred style (fine-line or illustrative blackwork), and any specific elements you want included." : "Any unique requests about placement or minor tweaks..."}
                              className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-[#F5F5F7] placeholder-neutral-600 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:border-transparent focus-visible:outline-none transition-all duration-300 resize-none"
                            />
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 3 && (
                        <motion.div
                          key="step3"
                          variants={stepVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="space-y-6"
                        >
                          <div>
                            <h4 className="text-lg font-serif text-[#F5F5F7] mb-2">Step 3: Reference Photos</h4>
                            <p className="text-xs text-[#8E8E93]">Upload images that show the style, composition, or placement area you like.</p>
                          </div>

                          {/* Drag & Drop simulated container */}
                          <div 
                            onClick={triggerFileInput}
                            className="border-2 border-dashed border-white/10 hover:border-[#D4AF37]/40 bg-neutral-950/40 hover:bg-neutral-950/60 rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 group"
                          >
                            <input 
                              type="file" 
                              ref={fileInputRef}
                              onChange={handleFileChange}
                              multiple 
                              accept=".jpg,.jpeg,.png,.webp"
                              className="hidden" 
                            />
                            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                              <Upload className="w-5 h-5 text-[#D4AF37]" />
                            </div>
                            <p className="text-[#F5F5F7] text-sm font-medium mb-1">
                              Drag and drop reference images here, or <span className="text-[#D4AF37] underline decoration-dotted">click to browse</span>.
                            </p>
                            <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed mt-2">
                              You can upload up to 3 images. Max file size: 5MB per image. Accepted formats: JPG, PNG, WebP.
                            </p>
                          </div>

                          {/* Uploaded Files List */}
                          {formData.files.length > 0 && (
                            <div className="space-y-3">
                              <p className="text-xs font-mono text-[#8E8E93] uppercase tracking-wider">Attached References ({formData.files.length}/3)</p>
                              <div className="space-y-2">
                                {formData.files.map((file, idx) => (
                                  <div key={idx} className="flex items-center justify-between bg-neutral-950/60 border border-white/5 px-4 py-3 rounded-xl">
                                    <div className="flex items-center gap-3">
                                      <FileText className="w-4 h-4 text-[#D4AF37]" />
                                      <div>
                                        <p className="text-sm text-[#F5F5F7] font-medium truncate max-w-xs md:max-w-md">{file.name}</p>
                                        <p className="text-xs text-neutral-500">{file.size}</p>
                                      </div>
                                    </div>
                                    <button 
                                      type="button" 
                                      onClick={() => removeFile(idx)}
                                      className="text-neutral-500 hover:text-red-400 p-1 transition-colors"
                                    >
                                      <X className="w-4 h-4" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}

                      {currentStep === 4 && (
                        <motion.div
                          key="step4"
                          variants={stepVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="space-y-6"
                        >
                          <div>
                            <h4 className="text-lg font-serif text-[#F5F5F7] mb-2">Step 4: Availability & Submission</h4>
                            <p className="text-xs text-[#8E8E93]">Choose your preferred times to visit the studio.</p>
                          </div>

                          {/* Preferred Days */}
                          <div className="space-y-3">
                            <label className="block text-xs font-mono text-[#8E8E93] uppercase tracking-wider">
                              Preferred Days of the Week <span className="text-[#D4AF37]">*</span> (Select all that apply)
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                              {['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => {
                                const selected = formData.preferredDays.includes(day);
                                return (
                                  <button
                                    key={day}
                                    type="button"
                                    onClick={() => handleCheckboxChange('preferredDays', day)}
                                    className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all duration-300 ${
                                      selected 
                                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]' 
                                        : 'bg-neutral-950/40 border-white/5 text-neutral-400 hover:border-white/10 hover:text-[#F5F5F7]'
                                    }`}
                                  >
                                    {day}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Preferred Time of Day */}
                          <div className="space-y-3">
                            <label className="block text-xs font-mono text-[#8E8E93] uppercase tracking-wider">
                              Preferred Time of Day <span className="text-[#D4AF37]">*</span> (Select all that apply)
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {[
                                { value: 'Morning (10:00 - 13:00)', label: 'Morning', hours: '10:00 - 13:00' },
                                { value: 'Afternoon (13:00 - 17:00)', label: 'Afternoon', hours: '13:00 - 17:00' }
                              ].map((time) => {
                                const selected = formData.preferredTime.includes(time.value);
                                return (
                                  <button
                                    key={time.value}
                                    type="button"
                                    onClick={() => handleCheckboxChange('preferredTime', time.value)}
                                    className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between ${
                                      selected 
                                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]' 
                                        : 'bg-neutral-950/40 border-white/5 text-neutral-400 hover:border-white/10 hover:text-[#F5F5F7]'
                                    }`}
                                  >
                                    <div>
                                      <p className="text-sm font-semibold">{time.label}</p>
                                      <p className="text-xs text-neutral-500">{time.hours}</p>
                                    </div>
                                    <Clock className={`w-4 h-4 ${selected ? 'text-[#D4AF37]' : 'text-neutral-600'}`} />
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Medical Considerations */}
                          <div className="space-y-2">
                            <label htmlFor="medicalConsiderations" className="block text-xs font-mono text-[#8E8E93] uppercase tracking-wider">
                              Important Medical / Skin Considerations (Optional)
                            </label>
                            <textarea
                              id="medicalConsiderations"
                              name="medicalConsiderations"
                              value={formData.medicalConsiderations}
                              onChange={handleInputChange}
                              rows={2}
                              placeholder="Please let us know if you have any skin conditions, allergies, or require specific accommodations."
                              className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-[#F5F5F7] placeholder-neutral-600 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:border-transparent focus-visible:outline-none transition-all duration-300 resize-none"
                            />
                          </div>

                          {/* Declaration Checkbox */}
                          <label className="flex items-start gap-3 cursor-pointer group mt-4">
                            <input
                              type="checkbox"
                              checked={formData.agreedToTerms}
                              onChange={(e) => setFormData(prev => ({ ...prev, agreedToTerms: e.target.checked }))}
                              className="sr-only"
                            />
                            <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                              formData.agreedToTerms 
                                ? 'bg-[#D4AF37] border-[#D4AF37] text-black' 
                                : 'border-white/20 bg-neutral-950 group-hover:border-[#D4AF37]/50'
                            }`}>
                              {formData.agreedToTerms && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span className="text-xs text-[#8E8E93] leading-relaxed select-none group-hover:text-neutral-300 transition-colors">
                              I understand that submitting this form does not guarantee an appointment, and that a non-refundable deposit is required to secure my slot.
                            </span>
                          </label>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer Controls */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={currentStep === 1}
                      className={`flex items-center gap-2 text-xs font-mono tracking-wider uppercase transition-colors py-2 px-3 rounded ${
                        currentStep === 1 
                          ? 'text-neutral-700 cursor-not-allowed' 
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>

                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!isStepValid(currentStep)}
                        className={`flex items-center gap-2 text-xs font-mono tracking-wider uppercase py-3 px-6 rounded-xl transition-all duration-300 ${
                          isStepValid(currentStep)
                            ? 'bg-white text-black font-bold hover:bg-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                            : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                        }`}
                      >
                        Continue <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!isStepValid(4) || isSubmitting}
                        className={`flex items-center gap-2 text-xs font-mono tracking-wider uppercase py-3 px-6 rounded-xl transition-all duration-300 ${
                          isStepValid(4) && !isSubmitting
                            ? 'bg-[#D4AF37] text-black font-bold hover:bg-[#D4AF37]/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                            : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                        }`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Booking Inquiry'}
                      </button>
                    )}
                  </div>

                </form>
              ) : (
                /* Success Screen */
                <motion.div 
                  className="text-center my-auto max-w-md mx-auto space-y-6 py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/30">
                    <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  
                  <h4 className="text-3xl font-serif text-[#F5F5F7]">Inquiry Received</h4>
                  
                  <p className="text-sm text-[#8E8E93] leading-relaxed">
                    Thank you, <strong className="text-white font-medium">{formData.fullName}</strong>. Your enquiry details have been encrypted and sent straight to Jake's studio queue.
                  </p>

                  <div className="bg-neutral-950/50 p-4 rounded-xl border border-white/5 text-left text-xs space-y-2">
                    <p className="text-neutral-400 font-mono uppercase tracking-wider text-[10px] text-[#D4AF37]">Next Steps</p>
                    <p className="text-neutral-300">1. Jake will review your concept & size requests.</p>
                    <p className="text-neutral-300">2. You will receive an email response with date offers within 48h.</p>
                    <p className="text-neutral-300">3. A £50 booking deposit will secure your selected slot.</p>
                  </div>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#D4AF37] hover:text-[#F5F5F7] transition-colors pt-4"
                  >
                    Submit Another Inquiry <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}

            </div>

          </div>
        </motion.div>

        {/* Footer Support/Trust Section */}
        <div className="mt-16 text-center text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <span>✓ Registered Studio Address: 6A Gwerthonor Place, Gilfach Bargoed CF81 8JQ</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ Fully Licensed & Insured Solo Studio</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ 100% Single-Use, Sterile Equipment</span>
        </div>

      </div>
    </section>
  );
}