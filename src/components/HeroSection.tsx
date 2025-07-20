import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Briefcase } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient text-primary-foreground py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional workplace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Dream Job
            <span className="block text-accent">With KaamKhoj.in</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover thousands of job opportunities from top companies. Your next career move is just a search away.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-sm rounded-lg p-6 shadow-warm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Job title or keywords"
                  className="pl-10 h-12 text-foreground"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Location"
                  className="pl-10 h-12 text-foreground"
                />
              </div>
              <Button size="lg" className="h-12 font-semibold">
                <Search className="mr-2 h-5 w-5" />
                Search Jobs
              </Button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-muted-foreground text-sm">
                Popular: Software Engineer, Product Manager, Data Scientist, UI/UX Designer
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10K+</div>
              <div className="text-sm opacity-80">Jobs Posted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5K+</div>
              <div className="text-sm opacity-80">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50K+</div>
              <div className="text-sm opacity-80">Job Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">95%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;