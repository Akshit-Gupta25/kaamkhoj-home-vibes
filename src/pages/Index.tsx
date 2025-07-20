import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CompanySection from '@/components/CompanySection';
import AchievementsSection from '@/components/AchievementsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CompanySection />
      <AchievementsSection />
      <Footer />
    </div>
  );
};

export default Index;
