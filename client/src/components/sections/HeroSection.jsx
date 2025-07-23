import { Button } from '@/components/ui/button';
import { Search, Users, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-flatami.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center 
      justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern living space" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br 
          from-primary/80 via-primary/60 to-accent/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 
            leading-tight">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-white 
              to-accent-soft bg-clip-text text-transparent">
              Flat & Flatmates
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl 
            mx-auto leading-relaxed">
            Connect with like-minded people and discover amazing living spaces. 
            Your next home is just a click away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center 
            items-center mb-12">
            <Button variant="cta" size="xl" className="w-full sm:w-auto">
              <MapPin className="w-5 h-5" />
              Find a Flat
            </Button>
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Users className="w-5 h-5" />
              Find Flatmates
            </Button>
          </div>

          {/* Quick Search */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 
            border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Enter city or area..."
                  className="w-full px-4 py-3 rounded-lg bg-white/20 
                    border border-white/30 text-white placeholder-white/70 
                    focus:outline-none focus:ring-2 focus:ring-accent 
                    focus:border-transparent"
                />
              </div>
              <Button variant="accent" size="lg">
                <Search className="w-5 h-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
        hidden lg:flex gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 
          border border-white/20">
          <div className="text-2xl font-bold text-white">10K+</div>
          <div className="text-white/80 text-sm">Active Users</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 
          border border-white/20">
          <div className="text-2xl font-bold text-white">500+</div>
          <div className="text-white/80 text-sm">Available Flats</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 
          border border-white/20">
          <div className="text-2xl font-bold text-white">98%</div>
          <div className="text-white/80 text-sm">Success Rate</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;