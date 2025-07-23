import { Button } from '@/components/ui/button';
import { Home, User, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b 
      border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex 
              items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary 
              bg-clip-text text-transparent">
              FlataMi
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#" 
              className="text-foreground hover:text-primary 
                transition-smooth"
            >
              Find a Flat
            </a>
            <a 
              href="#" 
              className="text-foreground hover:text-primary 
                transition-smooth"
            >
              Find Flatmates
            </a>
            <a 
              href="#" 
              className="text-foreground hover:text-primary 
                transition-smooth"
            >
              How it Works
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <LogIn className="w-4 h-4" />
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              <User className="w-4 h-4" />
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;