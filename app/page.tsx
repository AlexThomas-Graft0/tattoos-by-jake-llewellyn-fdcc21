import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HighlightsCarousel } from "@/components/HighlightsCarousel";
import { ProcessOverview } from "@/components/ProcessOverview";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { FlashBoard } from "@/components/FlashBoard";
import { BookingHub } from "@/components/BookingHub";
import { AboutAndSafety } from "@/components/AboutAndSafety";
import { ContactAndDirections } from "@/components/ContactAndDirections";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Tattoos by Jake Llewellyn\",\"description\":\"Custom and flash tattoo artistry, specializing in fine-line, illustrative blackwork, and high-detail custom designs.\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"6A Gwerthonor Place, Gilfach Bargoed CF81 8JQ\"},\"url\":\"https://tattoos-by-jake-llewellyn-fdcc21.duckbyte.co\"}" }} />
      <Navbar />
      <div id="hero-section" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <HeroSection />
        </Suspense>
      </div>
      <div id="highlights-carousel" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <HighlightsCarousel />
        </Suspense>
      </div>
      <div id="process-overview" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <ProcessOverview />
        </Suspense>
      </div>
      <div id="portfolio-gallery" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <PortfolioGallery />
        </Suspense>
      </div>
      <div id="flash-board" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <FlashBoard />
        </Suspense>
      </div>
      <div id="booking-hub" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <BookingHub />
        </Suspense>
      </div>
      <div id="about-and-safety" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <AboutAndSafety />
        </Suspense>
      </div>
      <div id="contact-and-directions" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <ContactAndDirections />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
