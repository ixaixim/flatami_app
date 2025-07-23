import FlatCard from '@/components/cards/FlatCard';
import FlatmateCard from '@/components/cards/FlatmateCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const SampleListings = () => {
  // Sample data for demonstration
  const sampleFlats = [
    {
      id: '1',
      title: 'Cozy 3BR Apartment in City Center',
      location: 'Berlin Mitte',
      price: 650,
      roommates: 2,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      amenities: ['Wifi', 'Parking', 'Pets'],
      available: 'Available Now',
    },
    {
      id: '2', 
      title: 'Modern Studio with Balcony',
      location: 'Munich Schwabing',
      price: 850,
      roommates: 1,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      amenities: ['Wifi', 'Parking'],
      available: 'Jan 1st',
    },
    {
      id: '3',
      title: 'Shared House with Garden',
      location: 'Hamburg Altona', 
      price: 480,
      roommates: 3,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      amenities: ['Wifi', 'Pets'],
      available: 'Feb 15th',
    },
  ];

  const sampleFlatmates = [
    {
      id: '1',
      name: 'Sarah',
      age: 26,
      location: 'Berlin',
      maxRent: 700,
      moveDate: 'Jan 1st',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      bio: 'Marketing professional, loves cooking and yoga. Looking for a clean, friendly flatmate to share adventures with.',
      rating: 4.9,
      profession: 'Marketing Manager',
    },
    {
      id: '2',
      name: 'Alex', 
      age: 28,
      location: 'Munich',
      maxRent: 900,
      moveDate: 'Feb 1st',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      bio: 'Software developer who works remotely. Quiet, respectful, and loves weekend hiking trips.',
      rating: 4.8,
      profession: 'Software Developer',
    },
    {
      id: '3',
      name: 'Maya',
      age: 24,
      location: 'Hamburg', 
      maxRent: 600,
      moveDate: 'Mar 1st',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      bio: 'Art student with a passion for sustainable living. Looking for an eco-friendly shared space.',
      rating: 4.7,
      profession: 'Art Student',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Flats Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Apartments
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover amazing living spaces in top locations
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All Flats
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sampleFlats.map((flat) => (
              <FlatCard key={flat.id} {...flat} />
            ))}
          </div>

          <div className="text-center md:hidden">
            <Button variant="outline">
              View All Flats
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Flatmates Section */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Looking for Flatmates
              </h2>
              <p className="text-lg text-muted-foreground">
                Connect with verified, like-minded people
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All Profiles
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sampleFlatmates.map((flatmate) => (
              <FlatmateCard key={flatmate.id} {...flatmate} />
            ))}
          </div>

          <div className="text-center md:hidden">
            <Button variant="outline">
              View All Profiles
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleListings;