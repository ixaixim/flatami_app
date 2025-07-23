import Header from "@/components/navigation/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SampleListings from "@/components/sections/SampleListings";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Sample Listings */}
      <SampleListings />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of happy flatmates who found their ideal living situation through FlataMi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl">
                Get Started Today
              </Button>
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">FlataMi</span>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                The most trusted platform for finding flats and flatmates. 
                Building communities, one home at a time.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-background/80">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@flatami.com</span>
                </div>
                <div className="flex items-center gap-2 text-background/80">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+49 30 1234567</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-accent transition-smooth">Find a Flat</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">Find Flatmates</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">How it Works</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">Success Stories</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-accent transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">Safety Tips</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">Contact Us</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-background/60 text-sm">
                © 2024 FlataMi. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-background/60">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Made with ❤️ in Berlin</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;