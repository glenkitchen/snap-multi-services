import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import EquipmentSection from '@/components/sections/EquipmentSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <EquipmentSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
