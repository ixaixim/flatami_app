import { Button } from '@/components/ui/button';
import { MapPin, Euro, Users, Wifi, Car, PawPrint } from 'lucide-react';

interface FlatCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  roommates: number;
  image: string;
  amenities: string[];
  available: string;
}

const FlatCard = ({ 
  title, 
  location, 
  price, 
  roommates, 
  image, 
  amenities,
  available,
}: FlatCardProps) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'pets':
        return <PawPrint className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-soft hover:shadow-large 
      transition-smooth border border-border overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 
            transition-smooth"
        />
        <div className="absolute top-4 right-4 bg-accent 
          text-accent-foreground px-3 py-1 rounded-full text-sm 
          font-medium">
          {available}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-2 
          line-clamp-1">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Euro className="w-5 h-5 text-primary" />
            <span className="text-2xl font-bold text-card-foreground">
              {price}
            </span>
            <span className="text-muted-foreground">/month</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span className="text-sm">{roommates} flatmates</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-3 mb-4">
          {amenities.slice(0, 3).map((amenity, index) => (
            <div 
              key={index} 
              className="flex items-center gap-1 text-muted-foreground"
            >
              {getAmenityIcon(amenity)}
              <span className="text-xs">{amenity}</span>
            </div>
          ))}
        </div>

        <Button variant="default" className="w-full">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default FlatCard;