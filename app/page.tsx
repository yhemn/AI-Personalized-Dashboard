import { Footer, Header } from '@/components/layout';
import {
  CTASection,
  FeaturesSection,
  HeroSection,
  StatsSection,
  TestimonialsSection,
} from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

