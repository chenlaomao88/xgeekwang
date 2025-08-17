import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GeeksSection from '@/components/GeeksSection';
import CoreModules from '@/components/CoreModules';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import StorySection from '@/components/StorySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GeeksSection />
      <CoreModules />
      <NewsSection />
      <ContactSection />
      <StorySection />
      <Footer />
    </div>
  );
};

export default Index;
