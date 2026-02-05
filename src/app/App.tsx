import { Hero } from '@/app/components/Hero';
import { ExperienceHighlights } from '@/app/components/ExperienceHighlights';
import { AboutLagoon } from '@/app/components/AboutLagoon';
import { VideoGallery } from '@/app/components/VideoGallery';
import { LocationSection } from '@/app/components/LocationSection';
import { BookingSection } from '@/app/components/BookingSection';
import { FloatingWhatsApp } from '@/app/components/FloatingWhatsApp';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';



export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <ExperienceHighlights />
        <AboutLagoon />
        <VideoGallery />
        <LocationSection />
        <BookingSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}