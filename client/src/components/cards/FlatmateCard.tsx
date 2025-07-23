import { Button } from '@/components/ui/button';
import { MapPin, Euro, Calendar, User, Star } from 'lucide-react';

interface FlatmateCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  maxRent: number;
  moveDate: string;
  image: string;
  bio: string;
  rating: number;
  profession: string;
}

const FlatmateCard = ({ 
  name, 
  age, 
  location, 
  maxRent, 
  moveDate, 
  image, 
  bio,
  rating,
  profession,
}: FlatmateCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-soft hover:shadow-large 
      transition-smooth border border-border overflow-hidden group">
      {/* Header */}
      <div className="relative p-6 pb-0">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img 
              src={image} 
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 
                border-border"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary 
              rounded-full flex items-center justify-center">
              <User className="w-3 h-3 text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-card-foreground">
                {name}, {age}
              </h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-accent fill-current" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{profession}</p>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {bio}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-secondary rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Euro className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Max Rent</span>
            </div>
            <div className="text-lg font-semibold text-card-foreground">
              €{maxRent}
            </div>
          </div>
          
          <div className="bg-secondary rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Move Date</span>
            </div>
            <div className="text-sm font-medium text-card-foreground">
              {moveDate}
            </div>
          </div>
        </div>

        <Button variant="default" className="w-full">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default FlatmateCard;